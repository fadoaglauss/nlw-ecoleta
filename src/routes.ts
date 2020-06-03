import express, { request, response } from 'express';

import PointsController from './controllers/PointsControlles';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController;

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;