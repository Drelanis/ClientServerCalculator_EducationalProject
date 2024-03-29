class BaseApi {
  protected baseUrl: string;
  protected baseHeader: { [key: string]: string };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.baseHeader = {
      'Content-Type': 'application/json',
    };
  }

  protected async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`);
    return response.json();
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: this.baseHeader,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  protected async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      headers: this.baseHeader,
    });
    return response.json();
  }
}

export default BaseApi;
