import read from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = read.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
};

export default welcome();