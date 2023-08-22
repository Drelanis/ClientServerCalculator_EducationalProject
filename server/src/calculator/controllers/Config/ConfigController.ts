import Config from '../../config/Config';
import { Response, Request } from 'express';
import ConfigType from '../../config/types/config';

class ConfigController {
  public async get(
    request: Request,
    response: Response
  ): Promise<Response<ConfigType, Record<string, ConfigType>>> {
    return response.json(Config.get());
  }
}

export default new ConfigController();
