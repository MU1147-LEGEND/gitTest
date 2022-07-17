document.getElementById('say').innerHTML = 'Coding is Everything';
/*
// --- Name and age inputs ---
var fname = prompt("What is your first name");
var lname = prompt('what is your last name?');
var fullname = fname +" "+ lname;
var age = prompt('Hey '+fname+" Can you tell me how old are you?");
document.write(fname+' '+lname+' '+'is '+' '+age+' Years old! \t');
document.write("Hey"+" "+fullname+" "+"How are you?");
console.log(fname+' '+lname+' '+'is '+' '+age+' Years old!');
*/
//------------------------------------------------
/* -- Numbers--
var num = 20;
//num++
num +=10; // num = num+10
num -=10; //num = num-10 and so on num *=10 and num %=10;
console.log(num);
//complex
var x = 10, y = 10;
x -= y /= 2;
console.log(x);
*/
//------------------------------------------------
/* ----Increment and Decrement------
//pre increment
var x=0, y=10;
x= ++y;
console.log(x , y);
//post increment
var x=0, y=10;
x= y++;
console.log(x , y);
//pre  decrement
var x=0, y=10;
x= --y;
console.log(x , y);
//post decrement
var x=0, y=10;
x= y--;
console.log(x , y);
*/
//------------------------------------------------
/* -------Comparison Operators----------
var x = 50, y = 40;
var com = x == y;
console.log(x>y);
console.log(com);
*/
//------------------------------------------------
/* --------Find the adults or child-----
var age = prompt("Enter Your Age");
if (age >= 18 && age < 150) {
    document.write("You are "+age+" years old and an adult person");
    console.log("You are "+age+" years old and an adult person");
}
else if (age <= 17  ){
    document.write("You are "+age+" years old and a Child");
    console.log("You are "+age+" years old and a Child");
}
else{
    alert("Please Enter Your Age");
};
function IsEmpty() {
    if (age ==""|| age == null) {
      alert("Please give an input");
    }
  }
  IsEmpty();
  */
//------------------------------------------------
/* ---------Functions in js-------
//create function
function fun() {
    var name = prompt('Enter your name');
    console.log("Hello "+ name);
}

//call
fun();

function arg(num1,num2) {
    var result = num1 + num2;
console.log(result);

}
arg(10,10);
*/
//------------------------------------------------
/*-----Loops in JS--------
//while loop
var n = 0;
while (n<10) {
    n++;
    console.log(n);
}

//For loop
for (let num = 0; num <= 100; num++) {
console.log(num);
}
//------------------------------------------------
*/
/*
// ------ strings in js---------------
let age = 'Hospital is an invention of programmers , so code for patients';
console.log(age);
console.log(age.length); // shows how many letters here
console.log(age.indexOf("invention"));
console.log(age.slice(28,44)); //slice a part of sentence or word
console.log(age.replace('programmers','doctors'));
console.log(age.toLowerCase());
console.log(age.toLocaleUpperCase());
console.log(age.includes('invention')); //is includes ? true or false
console.log(age.startsWith('Hospital'));
console.log(age.endsWith('patients'));
console.log(age.charAt(28));
console.log(age[38]); //it prints "x" number letter
console.log(age.split(','));//we can use split by comma or dot or <space> .
var fruits = "apple, banana, mango, guava, strawberry, pinaplle, ";
console.log(fruits.charCodeAt("a")); //returns decimal(unicode) value
console.log(fruits.repeat(2)); // Just repeat 2 or x times
*/
//------------------------------------------------
/*
//-----------Arrays In Javascript-------------
*/
// let names = ["mohammad", "sabbir", "saiful", "faruk", "company", "sajib"];
//names = new Array("mohammad", "sabbir", "saiful", "faruk", "company", "sajib");//line 123 and 124 are same. you can one of them for array, but new Array is advanced.
/*
console.log(names[1]);
names[4]="mahbub";
console.log(names);
for (let i = 2; i < 5; i++) {
console.log(names[i]);};
// ekhane i = 2 diye index number 2 dhora hoiche, and i<5 diye index 2<5 bujhano hoioce, then i++ , index 2 theke 4 porjnto print hobe.
console.log(names.join("--"), names.toString());//join by - or you want anything
console.log(names.slice(2, 5));
console.log(names.pop());//removes the last array value and return to you.
console.log(names.shift());//removes first element
console.log(names.unshift("Add New at first")); // add new string and return length
console.log(names.push("siam"), names);//push or add a new word to the array.
names[6] = "mahmud";// we can add a word as same, empty string will be new string, 6 is not defined, so it takes mahmud.
console.log(names);
let pets = ["puppy", 'dogggy', 'meow',];
let allNames = names.concat(pets);// add two arrays together.
console.log(allNames);
console.log(allNames.reverse()); //reverse the sorting
console.log(allNames.sort());
*/
//------------------------------------------------
/*
function sleep(names) {
    console.log(names+' is sleeping');
    return 0;
    console.log("all are sleeping");
};

sleep("sajib");
*/

const points = [40, 120, 1, 5, 25, 10];
function myf() {
    return Math.max.apply(null, points);
}
function maxf() {
    document.getElementById('max').innerHTML = myf();
}
//----------------------


function show() {
    let binnum = Number(document.getElementById('number').value);
    let bin = (binnum).toString(2);
    document.getElementById('bin').innerHTML = bin;
}
//---------------------------------------------------
//regexp
const text = "01734-906838 +8801726547936 +88-01797108022 +8801790-304030 +8801234906687";
const regex = /(\+88)?-?01[3-9]\d{2}-?\d{6}/g;
const matches = text.match(regex);
console.log(matches);

// try catch---------
// try {
//     let x = 4;
//     x = Number(x);
//     if (isNaN(x)) throw "Not a Number";
//     if (x === "") throw "empty";
//     if (x < 5) throw "to low";
//     if (x > 10) throw "too big";
// }
// catch (err) {
//     console.log(err);
// }

// js classes

// class fisher {
//     constructor(name, prof) {
//         this.name = name;
//         this.prof = prof;
//     }
//     status(stat) {
//         console.log(`${this.name} is a ${stat} ${this.prof}`)
//     }
// }
// // creating object
// let fisher1 = new fisher("Mohammad", " programmer").status("Good"); // diffrent system, but output is same
// let fisher2 = new fisher("Sabbir", " Marketer");
// //calling function
// //fisher1.status("Good");
// fisher2.status("Bad"); //diffrent system, but output is same

// //json in js

// let country = `{
// "countries": [
//     { "Bangladesh": "Dhaka" , "Population":"33333" , "Pm":"Hasina"},
//     { "India": "Delhi", "Population":"111111" , "Pm":"Mudi"},
//     { "Pakistan": "Islamabad","Population":"222222", "Pm":"Imran"},
//     { "Bhutan": "Thimpu" ,"Population":"44444", "Pm":"Bhuttu"}
// ]
// }`;//JSON obj+array
// let turnobj = JSON.parse(country); //converting to valid JS Object
// console.log(country);
// console.log(turnobj.countries[0]);//collecting array index
// let anObj = `{
//     "fname":"Mohammad",
//     "lname":"Ullah",
//     "age":21
// }` //JSON only Object
// let inJSON = JSON.parse(anObj);//converting to valid JS Object
// console.log(inJSON.fname);


// //converting to JSON from a valid js
// let validObj = {
//     firstName: "Mohammad ",
//     lastName: "Ullah",
//     age: 21
// }
// let str = JSON.stringify(validObj);
// console.log(str);
// console.log("-----------------------------------------");
// //class practice
// class temp {
//     constructor(name, model, relese, battery, ram, price) {
//         this.name = name
//         this.model = model;
//         this.battery = battery;
//         this.ram = ram;
//         this.price = price;
//         this.relese = relese;

//         console.log(`Brand: ${this.name}, Model: ${this.model},Relese Date: ${this.relese}, Battery Capacity: ${this.battery}, Ram/Storage: ${this.ram}, Price: ${this.price}`);
//     }
// }

// let infinix = new temp("Infinix", "Hot 11s", "25/11/2021", "5000mah", "6/128", "16k");
// let Samsung = new temp("Samsung", "A20", "25/11/2023", "5000mah", "8/128", "18k");
// let Redmi = new temp("Redmi", "12pro", "23/01/2045", "4500mah", "12/256", "37k");

// console.log("------------");
// //JSON trying again,
// let jsON = '{'+
//     '"bio": ['+
//         '{ "name": "sabbir", "age": 24 },'+
//         '{ "name": "saiful", "age": 22 }'+
//     ']'+
// '}' // string literal, each line single quote, and all line connect with +(plus)

// console.log(JSON.parse(jsON).bio);

// const myObj = {
//     fname: "John",
//     lname: "connor",
//     age: 30,
// }
// Object.defineProperty(myObj, "name", {
//     get:function() {
//         return this.fname;
//     }
// })
// console.log(myObj.name);

var inp = document.getElementById("input").value;
function submit() {
    document.getElementById("output").innerHTML = inp;
    console.log(inp);
}