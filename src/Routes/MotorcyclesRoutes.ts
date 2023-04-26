import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesRoute = Router();

motorcyclesRoute.post('/', (req, res, next) => 
  new MotorcyclesController(req, res, next).createOneMotorcycle());

export default motorcyclesRoute;
