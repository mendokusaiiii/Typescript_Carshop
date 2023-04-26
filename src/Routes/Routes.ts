import { Router } from 'express';
import carsRoute from './CarRoutes';
import motorcyclesRoute from './MotorcyclesRoutes';

const routes = Router();

routes.use('/cars', carsRoute);
routes.use('/motorcycles', motorcyclesRoute);

export default routes;