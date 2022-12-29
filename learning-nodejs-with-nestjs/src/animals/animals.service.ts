import {
    Inject,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { DataSource, Repository } from 'typeorm';
  import { AnimalDto } from './animal.dto';
  import { Animal } from './animal.entity';
  
  @Injectable()
  export class AnimalsService {
    constructor(
      @Inject('ANIMALS_REPOSITORY')
      private animalsRepository: Repository<Animal>,
      @Inject('DATA_SOURCE')
      private dataSource: DataSource,
    ) {}
  
    public async getAllAnimalsByKind(kind: string){
        const animals = await this.animalsRepository.find({
            where: { kind }
          });
          return animals;
    } 

   public async getAnimal(id: number){
    const animal = await this.animalsRepository.findOne({
        where: { id: id }
      });
      return animal;
   }

   public async addAnimal(animal: AnimalDto){
    let createdAnimal = (await (
        await this.animalsRepository.insert(animal)
      ).identifiers[0]) as AnimalDto;
      createdAnimal = await this.animalsRepository.findOne({
        where: { id: createdAnimal.id }
      });
      return createdAnimal;
   }

   public async deleteAnimal(id: number){
    let persistedAnimal = await this.animalsRepository.findOne({
        where: { id }
      });
      if (!persistedAnimal) {
        throw new NotFoundException(`Animal with id ${id} was not found.`);
      }
      persistedAnimal = (await this.animalsRepository.delete({ id }))?.raw;
      return persistedAnimal;
   }
  }
  