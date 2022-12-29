import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [ConfigModule.forRoot(), AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
