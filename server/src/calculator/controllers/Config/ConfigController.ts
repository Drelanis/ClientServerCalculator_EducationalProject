import Config from '../../config/Config.js';
import { Response, Request } from 'express';
import config from '../../config/types/config.js';

class ConfigController {
  public async get(
    request: Request,
    response: Response
  ): Promise<Response<config, Record<string, config>>> {
    return response.json(Config.get());
  }
}

export default new ConfigController();
