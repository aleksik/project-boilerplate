import * as express from 'express';
import * as path from 'path';
import { PUBLIC_PATH } from '../../config';
import * as homeController from './controllers/homeController';
import * as apiController from './controllers/apiController';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(PUBLIC_PATH, { index: false }));

app.get('/', homeController.index);
app.get('/api/products', apiController.getProducts);

export default app;