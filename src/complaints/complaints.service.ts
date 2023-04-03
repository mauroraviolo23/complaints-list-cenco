import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateComplaintInput } from './dto/inputs/create-complaint.input';
import { UpdateComplaintInput } from './dto/inputs/update-complaint.input';
import { Complaint } from './entities/complaint.entity';

@Injectable()
export class ComplaintsService {

  constructor(
    @InjectRepository( Complaint )
    private readonly complaintsRepository: Repository<Complaint>
  ) {}

  async findAll( user: User ): Promise<Complaint[]> {

    // The following "if" clause is generated so that if an admin runs this Query,
    // all complaints will be shown. If it were a regular user, only complaints from his authorship would be shown.

    if (user.roles.includes(ValidRoles.admin)) {
      return this.complaintsRepository.find();
    }

    return this.complaintsRepository.find({
      where: {
        user: {
          id: user.id
        }
      }
    });
  }

  async findOne(id: number, user: User): Promise<Complaint> {

    let complaint: Complaint;

    if (user.roles.includes(ValidRoles.admin)) {
      complaint = await this.complaintsRepository.findOneBy({ id });
    } else {
      complaint = await this.complaintsRepository.findOneBy({ 
        id,
        user: {
          id: user.id
        }
      });
    }

    if ( !complaint ) throw new NotFoundException(`Complaint with id:${id} not found`);

    // console.log(
    //   typeof complaint.id
    // )

    return complaint;
  }

  async create( createComplaintInput: CreateComplaintInput, user: User ) : Promise<Complaint> {
    
    const newComplaint = this.complaintsRepository
    .create({
      ...createComplaintInput,
      user
    });

    return await this.complaintsRepository.save( newComplaint );
  }

  async update(id: number, updateComplaintInput: UpdateComplaintInput, user: User): Promise<Complaint> {

    await this.findOne( id, user );
    
    const complaint = await this.complaintsRepository.preload( updateComplaintInput );

    if ( !complaint ) throw new NotFoundException(`Complaint with id:${id} not found`)

    return this.complaintsRepository.save( complaint );
  }

  async remove(id: number, user: User): Promise<Complaint> {
    
    const complaint = await this.findOne( id, user );

    await this.complaintsRepository.remove( complaint );

    return { ...complaint, id };
  }

  async complaintCountByUser( user: User ): Promise<number> {

    return this.complaintsRepository.count({
      where: {
        user: {
          id: user.id
        }
      }
    })
  }
}
