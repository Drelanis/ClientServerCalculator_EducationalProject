import express, { Router } from 'express';
import { IRouters } from '../config/interfaces/calculatorInterfaces.js';
import routers from './routers.js';

class RouteCreator {
  private routes: express.Router[] = [];

  constructor() {
    this.create(routers);
  }

  public create(routers: IRouters[]) {
    routers.forEach((router) => {
      const route: Router = express.Router();
      switch (router.method) {
        case 'GET':
          route.get(router.path, ...router.middlewares, router.action);
          break;
        case 'POST':
          route.post(router.path, ...router.middlewares, router.action);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${router.method}`);
      }
      this.routes.push(route);
      return route;
    });
  }

  public getRoutes() {
    return this.routes;
  }
}

export default new RouteCreator();
