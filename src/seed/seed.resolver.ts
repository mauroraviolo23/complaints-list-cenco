import { Mutation, Resolver } from '@nestjs/graphql';
import { SeedService } from './seed.service';

@Resolver()
export class SeedResolver {
  constructor(private readonly seedService: SeedService) {}

  @Mutation( () => String, { name: 'executeSeed', description: 'Executes the construction of the Database'} )
  async executeSeed(): Promise<string> {
    return this.seedService.executeSeed();
  }
}
