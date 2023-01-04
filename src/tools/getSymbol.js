import getNum from './getNumber.js';

export default () => {
    const Symbols = ['+', '-', '*'];
    return Symbols[getNum(Symbols.length)];
};