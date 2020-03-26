let arrowFunction=()=>{
    console.log(" - - - - - - - - - - - - - Arrow  function - - - - - - - - - - - - - - - - - - - -");
    /*- - - - - - - - - - - - - - -  Introduction - - - - - - - - - - - - - - - - -
        -> ES6 introduce new way to write the function.
        -> It's simple and concise syntax for creating functions.
        -> Syntax:
           let func = (arg1, arg2, ...argN) => expression
        -> This creates a function func that accepts arguments arg1..argN, 
           then evaluates the expression on the right side with their use and returns its result.
        -> Without curly braces: (...args) => expression – the right side is an expression: 
           the function evaluates it and returns the result.
        -> With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, 
           but we need an explicit return to return something.
        -> Arrow functions are the best choice when working with closures or callbacks, but not a good choice 
           when working with class/object methods or constructors.
        -> Do not have this ,Do not have arguments ,Can’t be called with new ,They also don’t have super, 
    */
   //Example 1
   let arrowFunc1=()=>{
       return console.log("Its arrow function one")
   }
   arrowFunc1();
    //Example 2
    //Single line arrow function for one line expression
    let arrowFunc2=()=> console.log("Its arrow function two witout return keyword")
    arrowFunc2();
   //Example 3
   // passing parameters
    let arrowFunc3=(a , b)=>  a+b;
    console.log(arrowFunc3(10,5))
    //Example 4
   // passing single parameters
   let arrowFunc4 = a => a+a;
   console.log(arrowFunc4(10))
   //Example 5
   // arrow function as argument
   //setTimeout(()=>console.log("I am arrow function as argument"),1)
   //Example 6
   // this key word
   let Ob={
       about:['Athar','25','BSCS'],
        aboutMe(){
        //Here this means Ob 
        console.log(this) 
       },
       //here is this keyword is undefined
       //Its not refring to Ob 
       aboutUs:()=>console.log(this)
   }
   Ob.aboutMe();
   Ob.aboutUs();

}
export default arrowFunction;