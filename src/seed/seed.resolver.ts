import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { SeedService } from './seed.service';

@Resolver()
@UseGuards( JwtAuthGuard )
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation( () => String, { name: 'executeSeed', description: 'Executes the construction of the Database'} )
  async executeSeed(
    @CurrentUser( [ValidRoles.admin] ) adminUser: User,
  ): Promise<string> {
    return this.seedService.executeSeed();
  }
}
