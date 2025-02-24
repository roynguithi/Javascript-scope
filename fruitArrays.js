let fruits = [`apples`,`oranges`,`pears`]
fruits[3] = `grapes`;//adds a new array element
fruits.push(`mangoes`);//adds a new array element
fruits.unshift(`strawberrys`);//adds an element on index 0
//fruits.pop();
console.log(Array.isArray(fruits));//true or false value to check whether this is an array
console.log(fruits.indexOf(`oranges`));//checks the index of an element
console.log(fruits);
