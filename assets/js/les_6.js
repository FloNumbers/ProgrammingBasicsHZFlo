//les 6

function giveMeSomeNiceName(gender) {
    if (gender == 'male') {
        console.log('My new name is Arnold');
    }
    else {
        console.log('My new name is Sofie');
    }
}
giveMeSomeNiceName('female');

let pigs = '';
function pig(numberOfPigs) {
while (numberOfPigs > 0) {
    pigs = pigs + '🐷';
    numberOfPigs--;
}
return pigs
}

const totalpigs = pig(10);
console.log(totalpigs);

let factor = 1;
function factorial(num) {
    while(num > 0) {
        factor = factor * num;
        num--;
    }
    return factor
}

console.log(factorial(5))

function writeASound(animal) {
    if (animal == 'cat'){
        console.log('meow');
    }
    else if (animal == 'dog'){
    console.log('woof');
    }
    else if (animal == 'fish') {
        console.log('blub blub');
    }
    else {
        console.log('animal unknown');
    }
    makeASound(animal)
}

function makeASound(animal) {
    if (animal == 'cat') {
        var audio = new Audio(`./sound_files/Minecraft-cat.mp3`);
audio.play();
}
else if (animal == 'dog') {
    var audio = new Audio(`./sound_files/bark.mp3`);
audio.play();
}
else {
    console.log('this animal has no sound')
}
}

const handleAnimalSounds = function(func, animal) {
    func(animal);
}
//handleAnimalSounds(writeASound, 'cat')

console.log(5 == 5.0)
console.log(10 == '10')
console.log(20 == 'hoe werkt dit?')

//opdracht loops

//opdracht 1
let numberWhileLoop = 0;
while (numberWhileLoop <= 25) {
    numberWhileLoop++;
    if (numberWhileLoop % 4 == 0) {
        console.log(`${numberWhileLoop} is deelbaar door 4`);
    }
    else {
        console.log(`${numberWhileLoop} is niet deelbaar door 4`)
    }
}

//opdracht 2
let a = 1;
let b = 1;
let c = 0;
while (a, b, c <= 55) {
    c = a + b
    console.log(c);
    a = b + c
    console.log(a);
    b = c + a
    console.log(b);
}

//opdracht 3
//const arr = [2, 4, 8, 9, 12, 13]

//const add = (a, b) =>
//a + b

//const sum = arr.reduce(add)
//console.log(sum)

const numbers = [2, 4, 8, 9, 12, 13]
let sum = 0;
for (let e = 0; e<numbers.length; e++) {
    sum += numbers[e]
    
}
console.log('Your sum is ' + sum);

//opdracht functions

//opdracht 1
let d = 1;
let e = 1;
let f = 0;
function fibonacci (max){
while (d, e, f <= max) {
    f = d + e
    console.log(c);
    d = e + f
    console.log(a);
    e = f + d
    console.log(b);
}
}

//opdracht 2
let s = 10;

function startTimer(jaartal) {

    let countdownTimer = setInterval(function() {

        console.log(s);
        s = s - 1;

        if (s <= -1) {
            clearInterval(countdownTimer);
            console.log(`Happy ${jaartal}`)
        }

    }, 1000);

}

//startTimer(2018);