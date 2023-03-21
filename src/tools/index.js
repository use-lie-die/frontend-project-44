import read from 'readline-sync';

export default (task, makeWelcome) => {
    const rounds = 3;

    console.log('Welcome to the Brain Games!');
    const name = read.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(task);
    
    for (let start = 0; start < rounds; start += 1) {
        const [question, answer] = makeWelcome();

        console.log(`Question: ${question}?`);
        const userAnswer = read.question('Your answer: ');

        if (userAnswer !== String(answer)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        };

        console.log(`Correct!`);
    };

    console.log(`Congratulations, ${name}!`);
};