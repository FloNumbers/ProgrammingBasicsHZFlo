let firstName;
let lastName;
let age;
firstName = 'Florian ';
lastName = 'Sole';
age = 17;
let message = 'Hallo ik ben ' + firstName + lastName + ' en ik ben ' + age;
console.log(message);

const priceOfAnApple = 0.59;
const numberOfApples = 200;
const calculation = priceOfAnApple * numberOfApples;
console.log(calculation);

const hzMessage = 'Please visit the HZ University of applied science';
console.log(hzMessage.replace('applied', 'mad'));

let today = new Date();
console.log(today.getDay());

//les 4
let currentaction = 'Booleans';
const punt = 8;


if (currentaction == 'Calculating') {
    console.log('In Calculating');
    console.log('10 + 11 =', 10 + 11)
    console.log('10 - 11 =', 10 - 11)
    console.log('10 / 11 =', 10 / 11)
    console.log('10 * 11 =', 10 * 11)
    const a = 10;
    const b = 11;
}
else if (currentaction == 'Strings') {
    console.log('In Strings');
    const myString = 'My beautifull string';
    console.log(myString);
    console.log(myString.charAt(4));
    console.log(myString.length);
    console.log(myString.toUpperCase());
    console.log(myString.match('boi'));
    console.log(myString.substring(6, 8))

}
else if (currentaction == 'Booleans') {
    console.log('In Booleans');
    if (punt >= 5.5) {
        console.log('Je hebt hoog genoeg gescoord')
    }
    else {
        console.log('Je hebt niet hoog genoeg gescoord')
    }
    //punten hoog genoeg --> if else?
}
else {
    console.error('waarde niet herkent');
}

let BMICalculation = 70 / (1.79 * 1.79);

if (BMICalculation <= 18.5) {
    console.log('ondergewicht');
}
else if (BMICalculation >= 18.5 && BMICalculation <= 25.9) {
    console.log('normaal gewicht')
}
else if (BMICalculation >= 25 && BMICalculation <= 29.9) {
    console.log('overgewicht')
}
else if (BMICalculation >= 30) {
    console.log('obesitas')
}
else {
    console.error('LOL')
}

//opdracht variabelen

let isEqual = 34 % 2;

if (isEqual == 1) {
    console.log('this number is not equal')
}
else if (isEqual == 0) {
    console.log('this number is equal')
}
else {
    console.log('number not found')
}

const opdrachtString = 'Programming is not so cool';
console.log(opdrachtString)
console.log(opdrachtString.replace(' not', ''))

//opdracht conditionals

let grade = 7;

if (grade <= 6) {
    console.log('je hebt een onvoldoende gehaald')
}
else if (grade >= 6 && grade < 7) {
    console.log('je hebt een voldoende gehaald')
}
else if (grade >= 7 && grade < 9) {
    console.log('je hebt een goede voldoende gehaald')
}
else if (grade >= 9) {
    console.log('je hebt het uitmuntend gedaan')
}
else {
    console.error('Help!!')
}

switch (grade) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('je hebt een onvoldoende gehaald')
        break;
    case 6:
        console.log('je hebt een voldoende gehaald')
        break;
    case 7:
    case 8:
        console.log('je hebt een goede voldoende gehaald')
        break;
    case 9:
    case 10:
        console.log('je hebt het uitmuntend gedaan')
        break;
}

let purchasedBook = true;
let job = 'teacher';
let inTrain = false;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log('finally i can enjoy my book!')
}
else if (purchasedBook !== true && job == 'teacher' && inTrain == true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook == true && job !== 'teacher' && inTrain == true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook == true && job == 'teacher' && inTrain !== true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook !== true && job !== 'teacher' && inTrain == true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook == true && job !== 'teacher' && inTrain !== true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook !== true && job == 'teacher' && inTrain !== true) {
    console.log('Well... No book for me today.')
}
else if (purchasedBook !== true && !job == 'teacher' && inTrain !== true) {
    console.log('Well... No book for me today.')
}
else {
    console.error('Help!!')
}

//les 5
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

messageMaandag = 'Het is maandag';
let o = 0;
while (o < messageMaandag.length) {

    console.log(messageMaandag.charAt(o));
    o++;
}

var messageGeweldig = 'geweldig'
var messageGeweldigReverse = '';
var counter = messageGeweldig.length;
while (counter >= 0) {
    messageGeweldigReverse += messageGeweldig.charAt(counter);
    counter--;

}
console.log(messageGeweldigReverse)


// message = 'Het is eindelijk weekend';
//  var k = message.length;  
//  while(k>=0){ 
//  k--;
//  console.log(message.charAt(k));        
//  }

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

for (let index = 0; index < messageMaandag.length; index++) {
    console.log(messageMaandag.charAt(index))
}

for (let index = 0; index <= 25; index++) {
    if (index % 3 == 0) {
        console.log(`${index} is deelbaar door 3`);
    }
    else {
        console.log(`${index} is niet deelbaar door 3`);
    }

}

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

//les 7

const productList = [];
productList[0] = 'tandenborstel';
productList[1] = 'deodorant';
productList[2] = 'bakmeel';
productList[3] = 'wortels';
productList[4] = 'tandpasta';
productList[5] = 'krop sla';
productList[6] = 'maggi';
productList[7] = 'lidl chips';
productList[8] = 'WC papier';
productList[9] = 'shampoo';

productList[7] = 'lidl chips ftw';

console.table(productList);

productList.push('lidl broodjes');
productList.push('remove kut ah broodjes')
console.table(productList)

productList.pop('remove kut ah broodjes')
console.table(productList)

productList.forEach(function (elem, index, myArray) {
    console.log('element', elem)
    console.log('index', index)
    console.log('array', myArray)
});

for (let index = 0; index < productList.length; index++) {
    const element = productList[index];
    console.log(element);   
}

// const newProductsArray = productList.map(function(element) {
    // let newElement = element.toUpperCase();
    // return element;
// })
// console.log(newProductsArray)

//let newProductsArray = [];

//for (let index = 0; index < productList.length; index++) {
   // const element = 'products ' + index +' ' + productList[index];
    //newProductsArray.push(element);
//}

let newProductsArray = productList.map(function(element, index) {
    const newElement = `product ${index + 1} : ${element}`;
    return newElement
})
console.table(newProductsArray);

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
const totalSum = function(anArray) {
let totalSum = 0;
for(let i = 0; i < anArray.length; i++){
  totalSum += anArray[i]
}
return totalSum;
}
console.log(totalSum(productPrices));

const average = function(anArray) {
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
}
console.log(average(productPrices));