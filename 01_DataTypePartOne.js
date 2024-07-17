/*
                      (1) Primitive  data type -------------->1. string 
                                                m             2. number 
                                                              3.Boolen
                                                              4.Undefined
                                                              5.null
                                                              6.Bigint 
                                                              7.symbol

                                                       


Data Type-------------




                     (2)Object data type ----------------->1. an object 
                                                           2.an array
                                                           3.a date







          ------------------------------------------data types---------------------------------
          
                     data types define the type  of value that a variable can hold.

*/


//? types of primitive Data Types

//?   --------------1. number :- Represents numeric values ,including integera and floating -point number

var num= 5
console.log(num)

//? ---------------2.String :- Represent a sequence of chareter enclosed in single or double quotes.\

var string='hiiii'
console.log(string)


//?  -------------3.Boolean :- Represent a logical entity with  values : true and false

var isRaining = false
var areYouAwesome=true
console.log(isRaining,areYouAwesome)


//? ------------ 4. Undefined :Represent the absence of value or an uninitialized variable 

var uninVar
console.log(uninVar)
console.log(typeof uninVar)

//?-----------5. null :- represent the absence of a value.It is often used to explicitly indicate that a variablee or object property has no assigned variable.
//example:-

   var nullIs=null
   console.log(typeof nullIs)


//?----------- 6.Bigint :- represent integers arbitrary precision (available since EcmaScript 2020 )

var isBignumber=123456789123456789124555n
console.log(isBignumber) 
console.log(typeof isBignumber)

//?-----------> 7.symbol:-  represent a unique and immmutable data type , often used to create unique identifiers
//example
//const mySymbol= Symbol("describtiom")




//=========================================================================
 // <----------------   Data types Interview Questions --------------------->
//============================================================================


//? 1 what is the difference between null and undefined in javaScript?

//null :-imagine an empty box
//*explaination : think of a variable as a box . when we say a box has null inside, its like having an empty box. but theres nothing valuable or meaningful inside it.
//? example : you have a tooy box , but if its null it means there are no toys inside its not just the box is broken : it just doest have anything intresting in it now

//undefined :- imagine a box wasnot opened yet 
//explaination :-now ,if we takl about undefined ,it's like having a box  that haven't opened yet .you know the box is there 
//but you haven't put  anything  inside or looked to see whats in it 


/*example : you have a gift box , and until you open it you dont know what inside 
right now , its undifined because you haven't checked or failed it with anything yet    


put it togeter 

summary:- so,null is like having an empty box on  purpose , and undefined is like having a box you havent opened yet , both tell us that there nothing meaningful know inside ,
but they imply different reasson only why.


// too real life compirison . if you have aan empty lunchbox (null ), it means you decided not to put  any food in it if you have a close lunchbox (undefined),
it means you haven't checked or failed it yet.




*/ 

//?  2 what is the purpose of typeof operator  in jvascript

//? 3.what is the result of typeof null in javascript?
 /*var badmemory=null
 console.log(typeof badmemory)

 ----> Object

 //?.4 what are the primitive data type in javascript

//? 5.convert string to a number 
----->
 example :
  var myFavNum = "10";
  1.console.log(typeof +myFavNum);
  2.console.log(typeof number(myFavNum));


  //? 6 convert a number to a string?

  example :-

  var str= 5
  console.log (typeof string(str))
  console.log(typeof (str + " "))

  //? 7 explain the consept of truthy and falsy values in javascript
  provide example

  in javascript ,values are either considered truthly and falsy when evaluated in a boolean context 

  truthy  values are treated as true when used in conditions 
  example included
  true 
  any non empty string 
  any non zeto number
  arrays and object even if they're not empty

  // falsy values are threated as false in boolean object context .  example include 

  false 
  0
  an empty string
  null 
  undefined
  NaN(not a numnber)


  example*/

  /*var myName= ''
if(myName){
console.log('this is truthy values');

}
else {
console.log("it's falsy values ");}*/

 /*var myName= ''
if(myName){
console.log('this is truthy values');

}
else {
console.log("it's falsy values ");}*/

/* ==================================parseInt & oarseFloat section=========================================== 

parseInt is used to parse a string and converrt it to integer (whole number)

const myString = "43"
const myNumber= parseInt(myString);
console.log(myNumber);

parseFloat is used to parse a string and convert it to float (real number)

const myString = "43.5"
const myNumber= parseFloat(myString);
console.log(myNumber);



// To do Key Difference :

//?parseInt is used for converting to integer and ignors anything after the decimal point 

//? parseFloat is used for converting to floating -point number ,preserving the decimal part 

//bot functions will attempt to convert as much of the string as possible until an invalid charecter is encounterd


//here are more example s
console.log(parseInt("123"));
//123 defalut base 10

console.log(parseInt("123",10));

123 explicit base 10

console.log(parseInt("  123   "));
whitespace is ignore

console.log(parseInt("077"))

zero is ignore

console.log(parseInt("2.5"))
decimal part is truncate

//? when we will not ge an output

console.log(parseInt("&123"))
--->NaN

console.log(parseInt("and"))
---->NaN



//?what is the purpose of the NaN values in javaScript?

NAN stand for Not a Number and is returned when a mathematical operaations doent yield a valid number

also to check wherther a value is number or not we can used isNaN() function

console.log(isNaN("gauri"));
----true


NaN == NaN ,why is it false

if(NaN==NaN){
console.log("both are equal");
}else{
console.log("not equal")}

---->
not equal
*/



















