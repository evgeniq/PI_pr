import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
  } from '@nestjs/common';
  import { AnimalDto } from './animal.dto';
  import { AnimalsService } from './animals.service';
  
  @Controller('animal')
  export class AnimalsController {
    constructor(private animalsService: AnimalsService) {}
  
    @Get('/by-kind')
    async  getAllAnimalsByKind(@Query('kind') kind: string) {
      const animals = await this.animalsService. getAllAnimalsByKind(kind);
      return animals;
    }
  
    @Get(':id')
    async getAnimal(@Param('id') id: number) {
      const animal = await this.animalsService.getAnimal(id);
      return animal;
    }
  
    @Post()
    async addAnimal(@Body() animal: AnimalDto) {
      const animals = await this.animalsService.addAnimal(animal);
      return animals;
    }
  
    @Delete()
    async deleteAnimal(@Query('id') id: number) {
      const animal = await this.animalsService.deleteAnimal(id);
      return animal;
    }
  
  }
  