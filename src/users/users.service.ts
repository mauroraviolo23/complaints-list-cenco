import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { InjectRepository } from '@nestjs/typeorm';
import { SignUpInput } from 'src/auth/dto/inputs/signup.input';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';

@Injectable()
export class UsersService {

  private logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create( signUpInput: SignUpInput ): Promise<User> {
    
    try {
      
      const newUser = this.usersRepository.create({
        ...signUpInput,
        password: bcrypt.hashSync(signUpInput.password, 10)
      });

      return await this.usersRepository.save( newUser );

    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll( roles: ValidRoles[] ): Promise<User[]> {

    if ( roles.length === 0 ) return this.usersRepository.find();

    return this.usersRepository.createQueryBuilder()
      .andWhere('ARRAY[roles] && ARRAY[:...roles]')
      .setParameter('roles', roles)
      .getMany();
      
  }

  async findOneByEmail( email: string ): Promise<User> {
    try {

      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {

      throw new NotFoundException(`${ email } not found`);
    }
  }

  async findOneById( id: string ): Promise<User> {
    try {

      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {

      throw new NotFoundException(`${ id } not found`);
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput, adminUser: User): Promise<User> {
    
    try {
      
      const userToUpdate = await this.usersRepository.preload({
        id,
        ...updateUserInput
      });

      userToUpdate.lastUpdatedBy = adminUser;

      return await this.usersRepository.save( userToUpdate );

    } catch (error) {
      this.handleDBErrors( error );
    }

  }

  async deactivate(id: string, adminUser: User): Promise<User> {
    
    const userToDeactivate = await this.findOneById( id );

    userToDeactivate.isActive = false;
    userToDeactivate.lastUpdatedBy = adminUser;

    return await this.usersRepository.save( userToDeactivate );

  }

  private handleDBErrors( error: any ): never {

    if (error.code === '23505') {
      throw new BadRequestException( error.detail.replace('Key ', ''));
    }

    this.logger.error( error );

    throw new InternalServerErrorException('Please check server logs');
  }
}
