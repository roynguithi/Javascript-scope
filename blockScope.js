//Javascript program to show block scope
let x;//global scope
if(true) {
    x=10;//value assigned inside the if block
    console.log(x);
}

console.log(x);//can also be accessible here since x is globally defined