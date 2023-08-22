import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from '../extraOperations/extraOperations';
import {
  IBinaryOperation,
  IOperations,
  IUnaryOperations,
} from '../interfaces/calculatorInterfaces';
import { operations } from '../mainOperations/mainOperations';

const binaryFunctions: Partial<IBinaryOperation | any> = {};

const unaryFunctions: Partial<IUnaryOperations> = {};

const addBinaryFunctions = (
  operations: IOperations,
  binaryFunctions: any
): void => {
  Object.values(operations).forEach((operation) => {
    if (!operation.operation) return;
    binaryFunctions[operation.content] = {
      precedence: operation.precedence,
      operation: operation.operation,
    };
  });
};

const addExtraUnaryFunctions = (
  extraFunctions: IOperations,
  functions: Partial<IUnaryOperations>
) => {
  Object.values(extraFunctions).forEach((element) => {
    const token = Object.entries(element)[1];
    if (!token) {
      return;
    }
    const [name, action] = token;
    functions[name] = action;
  });
};

addBinaryFunctions(operations, binaryFunctions);
addBinaryFunctions(extraOperationsBinary, binaryFunctions);
addExtraUnaryFunctions(extraOperationsUnary, unaryFunctions);
addExtraUnaryFunctions(extraConstance, unaryFunctions);

export { unaryFunctions, binaryFunctions };
