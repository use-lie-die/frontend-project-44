import read from 'readline-sync';

const welcome = () => {
  const userName = read.question('May i have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export default welcome();