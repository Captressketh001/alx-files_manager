import { Router } from 'express';
import AppController from '../controllers/AppController';
import usersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FileController from '../controllers/FilesController';

const indexRoute = Router()
indexRoute.get('/status', AppController.getStatus);
indexRoute.get('/stats', AppController.getStats);
indexRoute.post('/users', usersController.postNew);
indexRoute.get('/connect', AuthController.getConnect);
indexRoute.get('/disconnect', AuthController.getDisconnect);
indexRoute.get('/user/me', usersController.getMe);
indexRoute.post('/files', FileController.postUpload);
indexRoute.get('/files/:id', FileController.getShow);
indexRoute.get('/files', FileController.getIndex);
indexRoute.put('/files/:id/publish', FileController.putPublish);
indexRoute.put('/files/:id/publish', FileController.putUnpublish);
indexRoute.get('/files/:id/data', FileController.getFile);

export default indexRoute;
