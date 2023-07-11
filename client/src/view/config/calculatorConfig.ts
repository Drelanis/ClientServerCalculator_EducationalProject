import config from '../../types/config';

class Config {
  private config: Partial<config> = {};

  public async createConfig() {
    const response = await fetch('http://localhost:4000/config', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.config = { ...(await response.json()) };
  }

  public getConfig() {
    return this.config;
  }
}

export default new Config();
