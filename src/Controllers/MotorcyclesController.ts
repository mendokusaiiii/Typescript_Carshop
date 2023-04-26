import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';
import Handler from '../Utils/Handler';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createOneMotorcycle() {
    try {
      const newMoto = await this.service.createOneMotorcycle(this.req.body);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    try {
      const getMotorcycles = await this.service.getAllMotorcycles();
      return this.res.status(200).json(getMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getMotorcyclesById() {
    try {
      const motoById = await this.service.getMotorcyclesById(this.req.params.id);
      if (!motoById) {
        throw new Handler(404, 'Motorcycle not found');
      }
      return this.res.status(200).json(motoById);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;
