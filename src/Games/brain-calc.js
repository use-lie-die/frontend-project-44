import runEngine from '../tools/index.js';
import getNum from '../tools/getNumber.js';

const task = 'What is the result of the expression?';
const calculator = (num1, sym, num2) => {
    switch (sym) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return `subscribe https://github.com/use-lie-die`;
    }
};

const symbol = () => {
    const symbols = ['+', '-', '*'];
    return symbols[getNum(0, symbols.length - 1)];
};

const game = () => {
    const num1 = getNum(1, 11);
    const num2 = getNum(1, 11);
    const sym = symbol();

    const question = `${num1} ${sym} ${num2}`;
    const answer = calculator(num1, sym, num2);

    return [question, answer];
};

export default runEngine(task, game);
