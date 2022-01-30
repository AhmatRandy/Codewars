// function reverseWords(str) {
//    return str.split(' ').reverse().join(' '); // reverse those words
// }
// console.log(reverseWords('hello world!'), 'world! hello');
// console.log(
//    (reverseWords("yoda doesn't speak like this"),
//    "this like speak doesn't yoda"))
// );
// console.log((reverseWords('foobar'), 'foobar'));
// console.log((reverseWords('kata editor'), 'editor kata'));
function digitize(n) {
   // return [...String(n)].map(Number).reverse();

   return [...String(n)].reverse();
}
console.log(digitize(12345));
