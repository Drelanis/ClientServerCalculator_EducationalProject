import express, { Router } from 'express';
import ConfigController from '../controllers/Config/ConfigController.js';

const configRoutes: Router = express.Router();
const LINK_PATH = '/config';

configRoutes.get(LINK_PATH, ConfigController.get);

export default configRoutes;
