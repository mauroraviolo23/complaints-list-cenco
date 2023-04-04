import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { ComplaintsService } from 'src/complaints/complaints.service';
import { Complaint } from 'src/complaints/entities/complaint.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { SEED_COMPLAINTS, SEED_USERS } from './data/seed-data';

@Injectable()
export class SeedService {

    private isProd: boolean;

    constructor(
        private readonly configService: ConfigService,

        @InjectRepository(Complaint)
        private readonly complaintsRepository: Repository<Complaint>,

        private readonly complaintsService: ComplaintsService,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        private readonly usersService: UsersService,

    ) {
        this.isProd = configService.get('STATE') === 'prod';
    }

    async executeSeed() {

        if ( this.isProd) {
            throw new BadRequestException('It is not possible to run DB Seed in Production State');
        }

        await this.deleteDatabaseValues();

        const users = await this.loadUsers();

        await this.loadComplaints(users);

        return 'Seed executed successfully'

    }

    async deleteDatabaseValues() {

        await this.complaintsRepository.createQueryBuilder()
            .delete()
            .where({})
            .execute();
        
        await this.usersRepository.createQueryBuilder()
            .delete()
            .where({})
            .execute();
        
    }

    async loadUsers(): Promise<User[]> {

        const users = [];

        for ( const user of SEED_USERS ) {
            users.push( await this.usersService.create( user ) )
        }

        return users;

    }

    async loadComplaints( users: User[] ): Promise<void> {

        const complaintsPromises = [];

        const complaintsServ = this.complaintsService;
        
        SEED_COMPLAINTS.forEach(function (complaint, index) {

            if ( index % 2 !== 0 ) {
                complaintsPromises.push( complaintsServ.create( complaint, users[0] ));
            } else {
                complaintsPromises.push( complaintsServ.create( complaint, users[1] ));
            }
        }) 

        await Promise.all( complaintsPromises );

        return;

    }

}
