import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Sentra'
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee'
    },
    {
      id: uuid(),
      brand: 'Kia',
      model: 'Forte'
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    
    if (!car) throw new NotFoundException(`Elemento con el id: ${id} no encontrado`);

    return car;
  }
}
