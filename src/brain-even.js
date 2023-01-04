import body from './tools/index.js';
import getNumber from './tools/getNumber.js';

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no';
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
    const number = getNumber(101);
    const answer = isEven(number);
    return [number, answer];
};

export default body(task, game);