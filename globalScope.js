//javascript program to demonstrate scope
let name = "Alice"; //global scope
function greet () {
    console.log("Hello,"+ name); //accesses the global variable
}
greet(); //Hello,Alice
console.log(name);


