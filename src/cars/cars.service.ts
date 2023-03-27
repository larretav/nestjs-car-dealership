import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Nissan',
    //   model: 'Sentra'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'Cherokee'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Kia',
    //   model: 'Forte'
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    
    if (!car) throw new NotFoundException(`Elemento con el id: ${id} no encontrado`);

    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }

    this.cars.push(car);

    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {

    // if (updateCarDto.id && updateCarDto.id !== id)
    //   throw new BadRequestException('El id del body no coincide con el id del parametro');

    let carDB = this.findOneById(id);

    this.cars = this.cars.map(car => {
      
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        }

        return carDB
      }

      return car;
    })

    return carDB; 
  }

  deleteCar(id: string) {
    const findCar = this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars
  }
}
