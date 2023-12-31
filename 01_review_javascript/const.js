const cArray = ['a','b','c'];

console.log(cArray);

// References to Const objects cannot be changed.
// However, Const objects are mutable.
cArray[1] = 'x';
console.log(cArray);
