import IStack from './IStack.js';

class Stack<T> implements IStack<T> {
  public stack: T[];

  constructor() {
    this.stack = [];
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  setEmpty(): void {
    this.stack = [];
  }
}
export default Stack;
