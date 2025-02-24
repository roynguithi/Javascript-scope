const todos = [
    {
        id: 1,
        text: `do the laundry`,
        isComplete: true
    },
    {
        id: 2,
        text: `wash the dishes`,
        isComplete: true
    },
    {
        id: 3,
        text: `cook some chapatis`,
        isComplete: false
    },
    {
        id: 4,
        text: `take the trash out`,
        isComplete: false
    }
];

//for 
for(let i = 0;i < todos.length; i++){
    console.log(`todos[i].text`);
}
//while
let i = 0;
while (i < 10){
    console.log(`while loop number :${i}`);
    i++;
}
//for ...of
for(let todo of todos){
    console.log(todo.text);
}
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
console.log(todos[1].text);
console.log(todos);
console.log(todos[2].isComplete);
