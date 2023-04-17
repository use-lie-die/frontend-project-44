import runEngine from '../tools/index.js';
import getNum from '../tools/getNumber.js';

const task = 'What is the result of the expression?';

const calculator = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return `Operator ${operator} - is incorrect`;
  }
};

const getOperators = () => {
  const operators = ['+', '-', '*'];
  return operators[getNum(0, operators.length - 1)];
};

const game = () => {
  const num1 = getNum(1, 10);
  const num2 = getNum(1, 10);
  const operator = getOperators();

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculator(num1, operator, num2);

  return [question, answer];
};

export default runEngine(task, game);
