import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { ComplaintsModule } from 'src/complaints/complaints.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    ConfigModule,
    ComplaintsModule,
    UsersModule,
  ]
})
export class SeedModule {}
