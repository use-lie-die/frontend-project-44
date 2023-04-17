import runEngine from '../tools/index.js';
import getNum from '../tools/getNumber.js';

const task = 'What number is missing in the progression?';

const makeProgression = (startNumber, ariFactor, maxLength) => {
    const progression = [];
    for (let num = 0; num < maxLength; num++) {
        progression.push(startNumber + num * ariFactor);
    };
    return progression;
};

const game = () => {
    const startNumber = getNum(1, 10);
    const ariFactor = getNum(1, 5);
    const maxLength = getNum(5, 10);

    const progression = makeProgression(startNumber, ariFactor, maxLength);
    const unNum = getNum(0, makeProgression().length);

    const taskAnswer = progression[unNum];
    progression[unNum] = '..';
    const taskQuestion = progression.join(' ');
    
    return [taskQuestion, taskAnswer];
};

export default runEngine(task, game);