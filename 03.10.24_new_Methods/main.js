//forEach

// const numbers = [1, 2, 3];
// let sumOfSquares = 0; 
// let square = 0
// numbers.forEach(function(number) {
//     let square = number * number; 
//     sumOfSquares += square;
//     console.log(square);
    
// });
// console.log(sumOfSquares); // Corrigido de 'quare'

/////////////////////////////////////////////////////

//map

// const numbers = [ 1, 2, 3]
// numbers.map(function(number){
//     let cubed = number ** 3
//     console.log(cubed)  
// })

/////////////////////////////////////////////////////

// filter
// const people = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Anna', age: 19 },
//     { name: 'Mike', age: 23 }
//   ];
// let filtered_People = people.filter(function(person){
//     return person.name[0] === 'A' && person.age >18
// })
// console.log(filtered_People)

////////////////////////////////////////////////////////

//reduce
// const fruits = ['apple', 'banana']
// const letterCount = fruits.reduce(function(counts, word) {
//     word.split('').forEach(function(letter) {
//       counts[letter] = (counts[letter] || 0) + 1;
//     });
//     return counts;
//   }, {});
//   console.log(letterCount);


////////////////////////////////////////////////////////

// some & every
// const passwords = ['1234', 'abc', '123abc', 'longpassword123']

// const hasValidPassword = passwords.some(function(password){
//     const hasLetters = /[a-zA-z]/.test(password)
//     const hasNumbers = /\d/.test(password)
//     return password.length > 8 && hasLetters && hasNumbers
// })
// console.log(hasValidPassword);

////////////////////////////////////////////////////////

// find & findIndex

// const products = [
//     {name: 'Kryptonite', price: 1200000.75, quantity: 3},
//     {name: 'Excalibur', price: 2300000, quantity: 1},
//     {name: 'T-800',  price: 40000, quantity: 300},
//     {name: 'hope', price: 0, quantity: 0}
// ];

// const findingOutOfStock = products.find(function(product){
//     return product.quantity === 0;
// });

// const findingMostExpensive = products.findIndex(function(product) {
//     return product.price === Math.max(...products.map(p => p.price));
// });

// console.log('Out of Stock: ', findingOutOfStock, 'Most expensive item index: ', findingMostExpensive);

///////////////////////////////////////////////////////////

// sort

// const students = [
//     {name: 'Dilan', grade: 9},
//     {name: 'Carlos', grade: 7},
//     {name: 'Baba', grade: 7},
//     {name: 'Albert', grade: 5},
//     {name: 'Eliza', grade: 10},
//     {name: 'Frank', grade: 3}
// ]
// const descOrderGrades = students.sort(function(a, b){
//     if (b.grade === a.grade){
//         return a.name.localeCompare(b.name);
//     }
//     return b.grade - a.grade
// })
// console.log(descOrderGrades);

///////////////////////////////////////////////////////////

// flat

// const numbers = [1, [2, [3, [4, [5]]]]];
// const flatNumbers = numbers.flat(Infinity)
// let sum = 0;
// const sumingflatArray = flatNumbers.forEach(function(num){
//     sum += num
// })
// console.log('Flat array: ', flatNumbers);

// console.log('Suming flat array: ', sumingflatArray);


///////////////////////////////////////////////////////////



/////////////////////////////// ////////////////////////////



///////////////////////////////////////////////////////////
