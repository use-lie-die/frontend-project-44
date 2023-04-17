import read from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = read.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default welcome();
