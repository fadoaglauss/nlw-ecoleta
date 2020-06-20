import cors from 'cors';
import path from 'path';
import express from 'express';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use('/img/page', express.static(path.resolve(__dirname, '..', 'img', 'page')));
app.use('/img/gallery', express.static(path.resolve(__dirname, '..', 'img', 'gallery')));

app.use(errors ());

app.listen(3000);