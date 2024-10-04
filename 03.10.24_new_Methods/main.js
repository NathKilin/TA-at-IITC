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
const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Anna', age: 19 },
    { name: 'Mike', age: 23 }
  ];
let filtered_People = people.filter(function(person){
    return person.name[0] === 'A' && person.age >18
})
console.log(filtered_People)

////////////////////////////////////////////////////////
