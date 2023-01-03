import read from 'readline-sync';
import RandomNumber from './tools/GeneratorRandomNumbers.js';

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = read.question('May i have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let index = 0; index < 3; index += 1) {
        let number = RandomNumber();
        
        console.log(`Question: ${number}`);
        const answer = read.question('Your answer: ');

        if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
            console.log('Correct!');
        } else {
            return console.log(`Let's try again, ${name}!`);
        }
    }

    return console.log(`Congratulations, ${name}!`);
};