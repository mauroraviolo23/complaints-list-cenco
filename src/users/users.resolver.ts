import { Resolver, Query, Mutation, Args, Int, ID, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ValidRolesArgs } from './dto/args/roles.arg';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { ValidRoles } from 'src/auth/enums/valid-roles.enum';
import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ComplaintsService } from 'src/complaints/complaints.service';
import { Complaint } from 'src/complaints/entities/complaint.entity';
import { PaginationArgs, SearchArgs } from 'src/common/dto/args';
import { ListByUserArgs } from 'src/common/dto/args/list.args';

@Resolver(() => User)
@UseGuards( JwtAuthGuard )
export class UsersResolver {

  constructor(
    private readonly usersService: UsersService,
    private readonly complaintsService: ComplaintsService
  ) {}


  @Query(() => [User], { name: 'users' })
  findAll(
    @Args() validRoles: ValidRolesArgs,
    @CurrentUser( [ValidRoles.admin] ) user: User
  ): Promise<User[]> {
    return this.usersService.findAll( validRoles.roles );
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('id', { type: () => ID }, ParseUUIDPipe ) id: string,
    @CurrentUser( [ValidRoles.admin] ) user: User
    ): Promise<User> {

      return this.usersService.findOneById( id );
  }

  @Mutation( () => User, { name: 'updateUser' })
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser( [ValidRoles.admin] ) user: User
    ): Promise<User> {
      return this.usersService.update(updateUserInput.id, updateUserInput, user);
    }

  @Mutation(() => User, { name: 'deactivateUser' })
  deactivateUser(
    @Args('id', { type: () => ID }, ParseUUIDPipe ) id: string,
    @CurrentUser( [ValidRoles.admin] ) user: User
    ): Promise<User> {
    return this.usersService.deactivate( id, user );
  }

  @ResolveField( () => Int, { name: 'complaintCount'})
  async complaintCount(
    @CurrentUser( [ValidRoles.admin] ) adminUser: User,
    @Parent() user: User
  ): Promise<number> {
    return this.complaintsService.complaintCountByUser( user );
  }

  @ResolveField( () => [Complaint], { name: 'complaints'})
  async getComplaintsByUser(
    @CurrentUser( [ValidRoles.admin] ) adminUser: User,
    @Parent() user: User,
    @Args() paginationArgs: PaginationArgs,
    @Args() searchArgs: SearchArgs,
  ): Promise<Complaint[]> {
    return this.complaintsService.findAll( user, paginationArgs, searchArgs );
  }
}
