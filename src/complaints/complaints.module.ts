import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsResolver } from './complaints.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complaint } from './entities/complaint.entity';

@Module({
  providers: [
    ComplaintsResolver, 
    ComplaintsService
  ],
  imports: [
    TypeOrmModule.forFeature([ Complaint ])
  ],
  exports: [
    ComplaintsService,
    TypeOrmModule
  ]
})
export class ComplaintsModule {}
