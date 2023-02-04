function negate(a) {
  return !a;
};

function both(a, b) {
  return a&&b;
};

function either(a, b) {
  return a||b;
};

function none(a, b) {
  return !a&&!b;
};

//const none = (a, b) => !(a || b);

function one(a, b) {
  return a!=b;
};

//const one = (a, b) => (a || b) && !(a && b);

function truthiness(a) {
 return Boolean(a);
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a>b;
};

function isLessThanOrEqualTo(a, b) {
  return a<=b;
};

function isOdd(a) {
  return a%2===1;
};

function isEven(a) {
  return a%2===0;
};

function isSquare(a) {
  return Math.sqrt(a)%1===0;
};

function startsWith(char, string) {
  return char=== string.charAt(0);
};

function containsVowels(string) {
if (string.match(/[aeiou]/gi)){
  return true;
}

return false;

};

//const containsVowels = string => {
  //return string
   // .split("")
    //.some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
//};

function isLowerCase(string) {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
