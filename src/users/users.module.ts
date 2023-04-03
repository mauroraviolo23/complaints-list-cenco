import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ComplaintsModule } from 'src/complaints/complaints.module';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    TypeOrmModule.forFeature([ User ]),
    ComplaintsModule,
  ],
  exports: [
    TypeOrmModule,
    UsersService
  ]
})
export class UsersModule {}
