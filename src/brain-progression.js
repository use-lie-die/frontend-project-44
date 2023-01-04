import body from './tools/index.js';
import getNum from './tools/getNumber.js';

const task = 'What number is missing in the progression?';
const game = () => {
    let startNumber = 1 + getNum(11); // Да, костыль. '1'
    const AriFactor = 1 + getNum(6); // И еще один. '1'
    const maxLength = 5 + getNum(11); // И это тоже. '5'
    const temp1 = startNumber;

    const makeArr = () => {
        const numArr = [];
        for (let minNum = 0; minNum <= maxLength; minNum += 1) {
            numArr.push(startNumber);
            startNumber += AriFactor;
        };
        return numArr;
    };

    const result = makeArr();
    const UnNum = getNum(makeArr().length - 1);

    const taskQuestion = () => {
        result[UnNum] = '..';
        return result.join(', ');
    };

    const taskAnswer = () => (temp1 + (AriFactor * UnNum));

    return [taskQuestion(), taskAnswer()];
};

export default body(task, game);