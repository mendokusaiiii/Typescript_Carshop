import { Router } from 'express';
import carsRoute from './CarRoutes';

const routes = Router();

routes.use('/cars', carsRoute);

export default routes;