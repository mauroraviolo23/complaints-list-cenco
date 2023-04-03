import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeedService {

    private isProd: boolean;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.isProd = configService.get('STATE') === 'prod';
    }

    async executeSeed() {

        if ( this.isProd) {
            throw new BadRequestException('It is not possible to run DB Seed in Production State');
        }

    }

}
