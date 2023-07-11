import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from '../extraOperations/extraOperations.js';
import {
  IBinaryOperation,
  IOperations,
  IUnaryOperations,
} from '../interfaces/calculatorInterfaces.js';
import { operations } from '../mainOperations/mainOperations.js';

const binaryFunctions: Partial<IBinaryOperation> = {};

const unaryFunctions: Partial<IUnaryOperations> = {};

const addBinaryFunctions = (
  operations: IOperations,
  binaryFunctions: Partial<IBinaryOperation>
) => {
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
