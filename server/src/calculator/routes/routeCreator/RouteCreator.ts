import express, { Router, RequestHandler } from 'express';

class RouteCreator {
  private routes: express.Router[] = [];

  public create(
    path: string,
    method: string,
    ...middlewares: RequestHandler[]
  ) {
    const route: Router = express.Router();
    switch (method) {
      case 'GET':
        route.get(path, ...middlewares);
        break;
      case 'POST':
        route.post(path, ...middlewares);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    this.routes.push(route);
    return route;
  }

  public getRoutes() {
    return this.routes;
  }
}

export default new RouteCreator();
