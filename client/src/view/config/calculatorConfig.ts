import { routes } from '../../routes/routes';
import config from '../../types/config';

class Config {
  private config: Partial<config> = {};

  public async createConfig(): Promise<void> {
    const response = await fetch(`${routes.main}${routes.config}`);
    this.config = { ...(await response.json()) };
  }

  public getConfig(): Partial<config> {
    return this.config;
  }
}

export default new Config();
