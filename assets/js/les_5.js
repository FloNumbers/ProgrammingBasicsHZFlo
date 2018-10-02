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