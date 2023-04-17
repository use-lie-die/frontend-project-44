import runEngine from '../tools/index.js';
import getNum from '../tools/getNumber.js';

const task = 'Find the greatest common divisor of given numbers.';

const taskAnswer = (num1, num2) => {
  if (num2 === 0) return num1;
  return taskAnswer(num2, num1 % num2);
};

const game = () => {
  const num1 = getNum(1, 100);
  const num2 = getNum(1, 100);

  const question = `${num1} ${num2}`;
  const answer = taskAnswer(num1, num2);

  return [question, answer];
};

export default runEngine(task, game);
