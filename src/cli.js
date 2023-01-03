import read from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');
    const name = read.question('May i have your name? ');
    console.log(`Hello, ${name}!`);
}