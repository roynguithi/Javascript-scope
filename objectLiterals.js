const person = {
    firstName : `John`,
    lastName : `Doe`,
    age : `30`,
    hobbies : [`movies`,`music`,`sports`],
    address : {
        street : `50 main street`,
        city : `Boston`,
        state :`MA`,
    }
}
person.email = `john@gmail.com`;
const {firstName,lastName,address:{city}} = person;
console.log(city);
console.log(person);
console.log(person.firstName);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

