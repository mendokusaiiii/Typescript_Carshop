import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRoute = Router();

carsRoute.post('/', (req, res, next) => new CarController(req, res, next).createOneCar());
carsRoute.get('/', (req, res, next) => new CarController(req, res, next).getCars());
carsRoute.get('/:id', (req, res, next) => new CarController(req, res, next).getCarsById());
carsRoute.put('/:id', (req, res, next) => new CarController(req, res, next).updateCarsById());

export default carsRoute;
