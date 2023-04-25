import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import Handler from '../Utils/Handler';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createOneCar() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    
    try {
      const newCar = await this.service.createOneCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCars() {
    try {
      const getAllCars = await this.service.getCars();
      return this.res.status(200).json(getAllCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarsById() {
    try {
      const getCarById = await this.service.getCarsById(this.req.params.id);
      if (!getCarById) {
        throw new Handler(404, 'Car not found');
      }
      return this.res.status(200).json(getCarById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarsById() {
    try {
      const updateCars = await 
      this.service.updateCarsById(this.req.params.id, this.req.body);
      return this.res.status(200).json(updateCars);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
