import read from 'readline-sync';

export default (task, game) => {
    const Rounds = 3;

    console.log('Welcome to the Brain Games!');
    const name = read.question('May i have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(task);
    
    for (let start = 0; start < Rounds; start += 1) {
        const [question, answer] = game();

        console.log(`Question: ${question}?`);
        const userAnswer = read.question('Your answer: ');

        if (userAnswer !== String(answer)) {
            return console.log(`Let's try again, ${name}!`);
        }

        console.log(`Correct!`);
    };

    console.log(`Congratulations, ${name}!`);
};