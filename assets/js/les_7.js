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

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
const random = function(){
   let randomArray = lapRounds[Math.floor(Math.random()*lapRounds.length)]
   return randomArray;
}
console.log(random())

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

const recordReader = function(){
for (let index = 0; index < allMyRecords.length; index++) {
    const element = allMyRecords[index];
    allMyRecords.forEach(function(index) {
    console.log(index);
    })
}}

console.log(recordReader())