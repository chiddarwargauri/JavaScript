/* data type session two  

concatination in java 

in javascript the +  sign is not only used for ariyhmatic additions but also for string concatination , when the + operator is used with string , it concatinate the string together 

it's support to note that if any operand of the + operator is a string ,
javascript will treat the other operand as string as well , resulting in string concatenation . if both operand are number , the + operator  perform numeric operation 

const tr ="hello "+"gauri "

console.log('tr')


type coercion is the automatic conversion of "values" from one data type to another .

it is a fundamental part of js and can be used to make code more readable and efficient.

their are two type of type coercion in javascript ;
implicit and explicit    

implicit type coercion happen automaticaly 

explicit coercion is done by manualy by the programmer 



************************** it's worth nothing that type coercion can lead to unexpeted result ,so it's essential to be awAR OF HOW JS HANDLES THESE SITUATION ..


LET SUM = "VINOD" - 5
CONSOLE.LOG('SUM')
*/

const tr ="hello "+"gauri ";

console.log(tr);

let SUM = "VINOD" - 5;
console.log(SUM);

let minus="5" -5;
console.log(minus);


let sum ="10"+ 5
console.log(sum)

console.log(''+'')// empty
console.log('vinod'+'vinod')
console.log('vinod'-'vinod')//NaN

let sumM=""+0
console.log(typeof sum)//string

console.log(true+true)//2

let t=true+true
console.log(t)
console.log(typeof t)

console.log(true-true)


console.log(true-false)

console.log(false-true)


