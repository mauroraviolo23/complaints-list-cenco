import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LogInInput } from './dto/inputs/login.input';
import { SignUpInput } from './dto/inputs/signup.input';
import { ValidRoles } from './enums/valid-roles.enum';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthResponse } from './types/auth-response.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation( () => AuthResponse , { name: 'signUp'})
  async signUp(
    @Args('signUpInput') signUpInput: SignUpInput
  ): Promise<AuthResponse> {
    return this.authService.signUp( signUpInput );
  }

  @Mutation( () => AuthResponse, { name: 'logIn'})
  async logIn(
    @Args('logInInput') logInInput : LogInInput
  ): Promise<AuthResponse> {
    return this.authService.logIn( logInInput );
  }

  @Query( () => AuthResponse, { name: 'revalidate'})
  @UseGuards( JwtAuthGuard )
  revalidateToken(
    @CurrentUser( /* [ ValidRoles.admin ] */ /* Here goes the array of valid roles */ ) user: User
  ): AuthResponse {
    return this.authService.revalidateToken( user );
  }

}
