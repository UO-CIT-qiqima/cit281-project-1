/*
    CIT 281 Project 1
    Name: Qiqi Ma
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let alph = "abcdefghijklmnopqrstuvwxyz";
let text = alph.slice(getRandomInteger(5,25));

console.log(alph);
console.log(text);
console.log(text.length)