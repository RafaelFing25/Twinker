import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lamp } from 'src/database/entities/Lamp';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class LampsService {
  constructor(
    @InjectRepository(Lamp) private readonly lapmsRepository: Repository<Lamp>,
  ) {}
  async create(lamp: Lamp): Promise<Lamp> {
    return await this.lapmsRepository.save(lamp);
  }
  async remove(id: number): Promise<DeleteResult> {
    return await this.lapmsRepository.delete(id);
  }
}
