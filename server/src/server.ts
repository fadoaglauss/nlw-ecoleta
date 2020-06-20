import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use('/img/page', express.static(path.resolve(__dirname, '..', 'img', 'page')));
app.use('/img/gallery', express.static(path.resolve(__dirname, '..', 'img', 'gallery')));

app.listen(3000);