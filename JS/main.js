/*const age = 20;
if( age > 18){
    console.log("you are mature")
}else if (age === 20)
{
    console.log("Age")
}
else{
    console.log("no");
}
for (let e = 0; e < 10; e++){
    console.log(e)
}
let i = 0
while(i < 10){
    i++
    console.log(i)
}
const myAge = 24;
switch(myAge){
    case 25:
        console.log("Your age is 25");
        break;
    case 24:
        console.log("Your age is 24")
        break;

}
try{
    const myAge = 26;
    myAge = 20;
}catch{
    console.warn("Error 404")
}
try{
    const myAge = 26
    myAge = 20
}catch (error){
    console.log(error.message)
}
try{
    const myAge = 26;
    myAge = 20;
}catch (error){
    alert(error.message)
}
try{
    const myAge = 26;
    myAge = 20;
}catch (error){
    console.log(error.message);
}finally{
    console.log("Finally")
}
try{
    let myAge = 26
    myAge = 20
    console.log(myAge)

}catch (error)
{
console.log(error.message)

}finally{
    console.log("Finally")
}
let isLoading = false;
try{
    isLoading = true;
}catch(error){
    console.log(error.message);
}finally{
    isLoading = false;
}
alert("hello world")
prompt("how old are you?")
const myAgge = prompt("what is your age?");
if( myAgge > 20){
    alert("you are old")
}else{
    alert("you are young");
}
const myAnswer = confirm("Are you feeling ok?")
if(myAnswer){
    alert("good to hear")
}else{
    alert("I dont care")
}
function Test(){
  console.log("hello world");
}
setTimeout(Test, 2000);
function Test(){
    console.log("hello world")
}
setInterval(Test,1000)
function test(){
    console.log("hello world")
}
const myInterval = setInterval(test,1000)
clearInterval(myInterval);

function Greetings(){
    return "Hello world"
}
const myValue = Greetings();
console.log(myValue);
console.log(Greetings())

function Summarize(a,b){
    const sum = a + b;
    return sum;
}
const sumValue = Summarize(10,5);
console.log(sumValue)
console.log(Summarize(11,6))

function Summarize(){
    console.log(arguments);
    const a = arguments[0]
    const b = arguments[1]
    console.log(a+b)
}
Summarize(11,12)

const Multiply = (a, b) => {
    return a * b;
}
console.log(Multiply(5,6))

const Multiply = (a, b) => a * b;
console.log(Multiply(12,3))

const ToUppercase = (a) => {
    return a.toUpperCase();
} 
console.log(ToUppercase("senan"));

const ToUppercasse = a => a.toUpperCase()
console.log(ToUppercasse("senan"));

setInterval(function(){
    console.log("Hello there");
},2000);

setInterval(()=>{
    console.log("Hello there");
},2000);/*anonim

function Calculate (a, b, type){
    if (type ==="+") {
        return a + b;
    }
    return a - b;
}
console.log(Calculate(10,5,"-"))

function Calculate (a, b, type){
    const result = type === "+" ? a + b : a - b; ternary operator
    return result;
}
console.log(Calculate(11, 6, "+"));

function Greetings (callback) {
    callback();
}
Greetings(function(){
    console.log("Hello world")
})

function Greetings(callback){
    callback("Salam dunya")
}
Greetings(function(str){
console.log(str)}
)*/

/*Logical Operators*/
/*&& operatoru false tapana kimi gedecek tapanda ise assign edecek*/ 

/*const a = 10 && 20 && "1";
console.log(a);

/*logical or ilk tapdigi true-nu qoyur*/ 
/*const b = 10 || 20 
console.log(b)

/*Nillish coalescing operator(??)*/
/*const myName = "null"
console.log(myName ?? "Heisenberg")*/

/* Array*/

/*const a = []
console.log(typeof a)

const myArray = ["string", 10, false, {}, [], null, undefined, Symbol]
console.log(myArray)
console.log(myArray.length)

for(let i = 0; i < myArray.length; i++){
    
    console.log(myArray[i])
};
myArray.forEach((element) => {
    console.log(element)
});
myArray.forEach((element, index) =>{
    console.log(index)
}); 
myArray.forEach((element,index,  arr) => {
    console.log(arr)
})*/

/*const numbers = [4, 8, 12, 16, 20]
const target = numbers.map((element) =>{
    console.log(element)
} )*/

/*const numbers = [4,8,12,16,20]
const target = numbers.map((element) => {
    return element + 4
})
console.log(target)*/

/*const numbers = [4, 9, 16, 25, 36]
const plainNumbers = numbers.map((element) => {
    return Math.sqrt(element)
}),
console.log(plainNumbers)*/

/*const numbers = [2, 3, 4, 5, 6, 7, 8]
const evenNumbers = numbers.filter((element) =>{
    return element %2 == 0
})*/
/*console.log(evenNumbers)

const evenNumberss = numbers.filter(element => element %2 === 0)
console.log(evenNumberss)*/
/*const numbers = [9, 25, 36, 49, 64]
const evenNumbers = numbers.filter(element => {
    return element % 2 !== 0;
}).map((element) => {
    return Math.sqrt(element);
}).forEach(element => {
    console.log(element)
})*/
/*const numbers = [9, 16, 25, 36, 49]
let isExist = false;
for ( let i = 0; i< numbers.length; i++){
    if(numbers[i] === 16){
         isExist = true;
         break;
    }

}
console.log(isExist);*/

/*const numbers = [9, 16, 25, 36, 49]
const isExist = numbers.includes(16);
console.log(isExist);*/

/*const user1 = {
    name :"Rahim",
    age: 18
}
const user2 = {
    name: "Omer",
    age: 18
}
const users = [user1, user2];

const isExist = users.some((user) => {
    return user.name ==="Omer"
});
console.log(isExist)

const isExistt = users.every((user) =>{
    if (user.age === 18) {
        return true;
    }
    return false;
})
console.log(isExistt)
const isExisttt = users.every((user) =>{
  return user.age === 18    
})
console.log(isExisttt)*/

const numbers = [1, 2, 3, 5, 6]
const areAllNumbersOdd = numbers.every ((number) => {
    if (number %2 === 0) {
        return false;
    }
    return true;
});
console.log(areAllNumbersOdd)