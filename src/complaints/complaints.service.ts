import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';
import { PaginationArgs, SearchArgs } from 'src/common/dto/args';
import { User } from 'src/users/entities/user.entity';
import { Brackets, Repository } from 'typeorm';
import { CreateComplaintInput } from './dto/inputs/create-complaint.input';
import { UpdateComplaintInput } from './dto/inputs/update-complaint.input';
import { Complaint } from './entities/complaint.entity';

@Injectable()
export class ComplaintsService {

  constructor(
    @InjectRepository( Complaint )
    private readonly complaintsRepository: Repository<Complaint>
  ) {}

  async findAll( user: User, paginationArgs: PaginationArgs, searchArgs: SearchArgs ): Promise<Complaint[]> {

    const { limit, offset } = paginationArgs;
    const { search } = searchArgs;

    // The following "if" clause is generated so that if an admin runs this Query,
    // all complaints will be shown. If it were a regular user, only complaints from his authorship would be shown.

    if (user.roles.includes(ValidRoles.admin)) {
      return await this.complaintsRepository.createQueryBuilder('complaint')
      .where(new Brackets(qb => {
        qb.where('complaint.title ILIKE :search', { search: `%${search}%` })
          .orWhere('complaint.description ILIKE :search', { search: `%${search}%` })
          .orWhere('1 = 0'); // Makes it optional for both "description" and "title" fields
      }))
      .take(limit)
      .skip(offset)
      .getMany();
    }
    return await this.complaintsRepository.createQueryBuilder('complaint')
    .where('complaint.user = :userId', { userId: user.id })
    .andWhere(new Brackets(qb => {
      qb.where('complaint.title ILIKE :search', { search: `%${search}%` })
        .orWhere('complaint.description ILIKE :search', { search: `%${search}%` })
        .orWhere('1 = 0'); // Makes it optional for both "description" and "title" fields
    }))
    .take(limit)
    .skip(offset)
    .getMany();
  }

  async findAllByUser( user: User, paginationArgs: PaginationArgs, searchArgs: SearchArgs ): Promise<Complaint[]> {

    const { limit, offset } = paginationArgs;
    const { search } = searchArgs;

    return await this.complaintsRepository.createQueryBuilder('complaint')
    .where('complaint.user = :userId', { userId: user.id })
    .andWhere(new Brackets(qb => {
      qb.where('complaint.title ILIKE :search', { search: `%${search}%` })
        .orWhere('complaint.description ILIKE :search', { search: `%${search}%` })
        .orWhere('1 = 0'); // Makes it optional for both "description" and "title" fields
    }))
    .take(limit)
    .skip(offset)
    .getMany();
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

    return complaint;
  }

  async create( createComplaintInput: CreateComplaintInput, user: User ) : Promise<Complaint> {

    const purchaseDetails: string = createComplaintInput.dateOfPurchase + "," + createComplaintInput.invoiceNumber + "," + createComplaintInput.productCode;
    
    const newComplaint = this.complaintsRepository
    .create({
      details: purchaseDetails,
      user,
      ...createComplaintInput,
    });

    return await this.complaintsRepository.save( newComplaint );
  }

  async update(id: number, updateComplaintInput: UpdateComplaintInput, user: User): Promise<Complaint> {

    await this.findOne( id, user );
    
    const complaint = await this.complaintsRepository.preload( updateComplaintInput );

    if ( !complaint ) throw new NotFoundException(`Complaint with id:${id} not found`)

    return this.complaintsRepository.save( complaint );
  }

  async remove(id: number, user: User) {
    
    const complaint = await this.findOne( id, user );

    let removedComplaint;

    if (user.roles.includes(ValidRoles.admin)) {
      removedComplaint = await this.complaintsRepository.remove( complaint );

      removedComplaint.id = id;

      removedComplaint.user = user;
    } else {

      complaint.solved = true;

      await this.complaintsRepository.save(complaint);

      removedComplaint = complaint;
    }

    

    return removedComplaint;
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
