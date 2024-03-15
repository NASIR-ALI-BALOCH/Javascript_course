//primitive//call by value
//7 types//call by value:string,number,boolean,null,undefined,symbols
const score=100
const numberValue=100.3
console.log(numberValue);
let isLoggedIn=false
const OutSideTemp=null
let userEmail
const id=Symbol('123')
const anotherId=Symbol('123')
const symbols=Symbol('123')
console.log(typeof symbols);
console.log(id);

console.log(id===anotherId);

const bigNumber=94094934948094094n
console.log(bigNumber);
console.log(typeof bigNumber);
//Non primitive//Reference
//Arrays,Objects,Functions

const heros=["Qadeer Khan","Babar Azam","Arshad Nadeed ","Ali Sadpara"];
console.log(heros);
console.log(heros[0]);
console.log(heros[1])
console.log(heros[2])
console.log(heros[3])

console.log(typeof heros);
let myObj={
    name:"Nasir",
    age:23
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(typeof myObj);

const myfun=function(){
console.log("Hi I am A Function");
}
myfun()
console.log(typeof myfun);
