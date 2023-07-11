import express, { Router } from 'express';
import ConfigController from '../controllers/Config/ConfigController.js';

const routerOfConfig: Router = express.Router();
const LINK_PATH = '/config';

routerOfConfig.get(LINK_PATH, ConfigController.get);

export default routerOfConfig;
