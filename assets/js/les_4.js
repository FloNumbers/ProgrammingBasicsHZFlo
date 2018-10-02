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