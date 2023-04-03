import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LogInInput } from './dto/inputs/login.input';
import { SignUpInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
 
    constructor(
        private readonly usersService: UsersService,

        private readonly jwtService: JwtService,
    ) {}

    private getJwtToken( userId: string ) {
        return this.jwtService.sign({ id: userId });
    }

    async signUp( signUpInput: SignUpInput ): Promise<AuthResponse> {

        const user = await this.usersService.create( signUpInput );

        const token = this.getJwtToken( user.id );

        return { user, token };

    }

    async logIn( logInInput: LogInInput): Promise<AuthResponse> {

        const { email, password } = logInInput;

        const user = await this.usersService.findOneByEmail(email);

        if ( !bcrypt.compareSync(password, user.password) ) {
            throw new BadRequestException('Email and Password do not match');
        }

        const token = this.getJwtToken( user.id );

        return {
            token,
            user
        }
    }

    async validateUser( id: string ): Promise<User> {

        const user = await this.usersService.findOneById( id );

        if ( !user.isActive ) throw new UnauthorizedException('User is inactive. Please contact an admin');

        delete user.password;

        return user;
    }

    revalidateToken( user: User) : AuthResponse {

        const token = this.getJwtToken( user.id );

        return {
            token,
            user
        }

    }
  }
