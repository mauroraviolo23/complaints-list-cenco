import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ComplaintsService } from './complaints.service';
import { Complaint } from './entities/complaint.entity';
import { CreateComplaintInput, UpdateComplaintInput } from './dto/inputs';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { PaginationArgs, SearchArgs } from 'src/common/dto/args';

@Resolver(() => Complaint)
@UseGuards( JwtAuthGuard )
export class ComplaintsResolver {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @Query(() => [Complaint], { name: 'complaints' })
  async findAll(
    @CurrentUser() user: User,
    @Args() paginationArgs: PaginationArgs,
    @Args() searchArgs: SearchArgs,
  ): Promise<Complaint[]> {
    return this.complaintsService.findAll(user, paginationArgs, searchArgs);
  }

  @Query(() => Complaint, { name: 'complaint' })
  findOne(
      @Args('id', { type: () => ID }) id: number,
      @CurrentUser() user: User
  ): Promise<Complaint> {
    return this.complaintsService.findOne(id, user);
  }

  @Mutation(() => Complaint, { name: 'createComplaint'})
  async createComplaint(
    @Args('createComplaintInput') createComplaintInput: CreateComplaintInput,
    @CurrentUser() user: User
    ): Promise<Complaint> {
    return this.complaintsService.create(createComplaintInput, user);
  }

  @Mutation(() => Complaint)
  updateComplaint(
    @Args('updateComplaintInput') updateComplaintInput: UpdateComplaintInput,
    @CurrentUser() user: User
    ): Promise<Complaint> {
    return this.complaintsService.update(updateComplaintInput.id, updateComplaintInput, user);
  }

  @Mutation(() => Complaint)
  removeComplaint(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User
    ) {
    return this.complaintsService.remove(id, user);
  }
}
