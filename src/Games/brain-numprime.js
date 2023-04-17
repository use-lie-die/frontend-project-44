import runEngine from '../tools/index.js';
import getNumber from '../tools/getNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const taskAnswer = (num1) => {
  if (num1 <= 1) return false;
  for (let ind = 2; ind < num1; ind += 1) {
    if (num1 % ind === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = 1 + getNumber(1, 10);
  const question = `${number}`;
  const answer = taskAnswer(number) ? 'yes' : 'no';
  return [question, answer];
};

export default runEngine(task, game);
