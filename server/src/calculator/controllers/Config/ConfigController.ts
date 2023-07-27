import Config from '../../config/Config.js';
import { Response, Request } from 'express';
import ConfigType from '../../config/types/config.js';

class ConfigController {
  public async get(
    request: Request,
    response: Response
  ): Promise<Response<ConfigType, Record<string, ConfigType>>> {
    return response.json(Config.get());
  }
}

export default new ConfigController();
