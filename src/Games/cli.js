import read from 'readline-sync';

const welcome = () => {
  const userName = read.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
};

export default welcome();