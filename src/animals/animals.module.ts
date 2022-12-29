import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { animalsProviders } from './animals.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [AnimalsController],
  providers: [...animalsProviders,AnimalsService],
  exports: [],
})
export class AnimalsModule {}
