import body from '../tools/index.js';
import getNumber from '../tools/getNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const taskQuestion = (num1) => `${num1}`;
const taskAnswer = (num1) => {
    if (num1 <= 1) return 'no';
    for (let ind = 2; ind < num1; ind += 1) {
        if (num1 % ind === 0) {
            return 'no';
        };
    };
    return 'yes';
};

const game = () => {
    const number = 1 + getNumber(11);
    const question = taskQuestion(number);
    const answer = taskAnswer(number);
    return [question, answer];
};

export default body(task, game);