import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";


export class JwtAuthGuard extends AuthGuard('jwt') {

    getRequest( context: ExecutionContext ) {

        const createdContext = GqlExecutionContext.create( context );

        const request = createdContext.getContext().req; 

        return request;
    }

}