import runEngine from '../tools/index.js';
import getNumber from '../tools/getNumber.js';

const isEven = (num) => num % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = getNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default runEngine(task, game);
