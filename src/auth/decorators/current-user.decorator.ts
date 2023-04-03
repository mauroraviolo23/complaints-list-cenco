import { createParamDecorator, ExecutionContext, ForbiddenException, InternalServerErrorException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
import { ValidRoles } from "../enums/valid-roles.enum";

export const CurrentUser = createParamDecorator(
    ( roles: ValidRoles[] = [], context: ExecutionContext ) => {
    
        const createdContext = GqlExecutionContext.create( context );
        
        const user: User = createdContext.getContext().req.user;

        if ( !user ) {
            throw new InternalServerErrorException(`No user inside the request. Please make sure AuthGuard is used`);
        }

        if ( roles.length === 0) return user;

        for ( const role of user.roles ) {
            if ( roles.includes( role as ValidRoles )) {
                return user;
            }
        }

        throw new ForbiddenException(`User: ${ user.fullName } needs a valid role: ${ roles.join(', ') }`)
})