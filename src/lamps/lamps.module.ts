import { Module } from '@nestjs/common';
import { LampsService } from './lamps.service';
import { LampsController } from './lamps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lamp } from 'src/database/entities/Lamp';

@Module({
  imports: [TypeOrmModule.forFeature([Lamp])],
  providers: [LampsService],
  controllers: [LampsController],
})
export class LampsModule {}
