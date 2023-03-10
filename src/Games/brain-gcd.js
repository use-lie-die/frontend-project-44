import body from '../tools/index.js';
import getNum from '../tools/getNumber.js';

const task = 'Find the greatest common divisor of given numbers.';
const taskQuestion = (num1, num2) => `${num1} ${num2}`;
const taskAnswer = (num1, num2) => {
    if (num2 === 0) return num1;
    return taskAnswer(num2, num1 % num2);
};

const game = () => {
    const num1 = getNum(101);
    const num2 = getNum(101);

    const question = taskQuestion(num1, num2);
    const answer = taskAnswer(num1, num2);

    return [question, answer];
}

export default body(task, game);