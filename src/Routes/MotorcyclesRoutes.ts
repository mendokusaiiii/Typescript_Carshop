import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesRoute = Router();

motorcyclesRoute.post('/', (req, res, next) => 
  new MotorcyclesController(req, res, next).createOneMotorcycle());

motorcyclesRoute.get('/', (req, res, next) => 
  new MotorcyclesController(req, res, next).getAllMotorcycles());

motorcyclesRoute.get('/:id', (req, res, next) => 
  new MotorcyclesController(req, res, next).getMotorcyclesById());

export default motorcyclesRoute;
