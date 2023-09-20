import { Router } from 'express';
import AppController from '../controllers/AppController';
import usersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FileController from '../controllers/FilesController';

const router = Router()
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', usersController.postNew);
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);
router.get('/user/me', usersController.getMe);
router.post('/files', FileController.postUpload);
router.get('/files/:id', FileController.getShow);
router.get('/files', FileController.getIndex);
router.put('/files/:id/publish', FileController.putPublish);
router.put('/files/:id/publish', FileController.putUnpublish);
router.get('/files/:id/data', FileController.getFile);

export default router
