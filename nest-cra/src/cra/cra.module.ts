import { Module } from '@nestjs/common';
import { CraController } from './cra.controller';
import { CraService } from './cra.service';
import { craProviders } from './cra.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CraController],
    providers: [CraService, ...craProviders],
})
export class CraModule {}