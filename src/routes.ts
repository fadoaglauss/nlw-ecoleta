import express, { request } from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: '' });
});

export default routes;