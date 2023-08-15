abstract class AbstractDatabase {
  abstract create(expression: string, result: number): Promise<void>;
  abstract delete(id: string | number): Promise<void>;
  abstract list(): Promise<[]>;
}

export default AbstractDatabase;
