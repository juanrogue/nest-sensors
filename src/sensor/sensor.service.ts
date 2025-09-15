import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensorService {
  create(createSensorDto: CreateSensorDto) {
    return 'This action adds a new sensor';
  }

  findAll():string {
    return `This action returns all sensor`;
  }

  findOne(id: string):string {
    return `This action returns a #${id} sensor`;
  }

  update(id: string, updateSensorDto: UpdateSensorDto) {
    return `This action updates a #${id} sensor`;
  }

  remove(id: string) {
    return `This action removes a #${id} sensor`;
  }
}
