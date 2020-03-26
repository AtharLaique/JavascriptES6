const restSpred=()=>{
    console.log("- - - - - - - - - - - - - Welcome in Rest Spred oprator concept - - - - - - - - -");
    
/* - - - - - - - - - - - - - - - - - - -  Intro - - - - - - - - - - - - - - - - 
    -> Javascript's ECMA6 came out with some cool new features; 
    -> ... is one of these new Javascript functionalities. It can be used in two different ways; 
    -> as a spread operator OR as a rest parameter.
    -> Rest parameter: collects all remaining elements into an array.
    -> Spread operator: allows iterables( arrays / objects / strings ) to be expanded 
       into single arguments/elements.
*/

//Example 
//When using spread, you are expanding a single variable into more:
let abc = ['a', 'b', 'c'];
let def = ['d', 'e', 'f'];
let alpha = [ ...abc ,'welcome' , ...def];
console.log(alpha)// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];
// Example
// When using rest arguments, you are collapsing all remaining arguments like here
//Rest parameters have to be at the last argument.
function sum( first, ...others ) {
    for ( var i = 0; i < others.length; i++ )
        first += others[i];
    return first;
}
console.log(sum(1,2,3,4))// sum(1, 2, 3, 4) == 10;

}
export default restSpred;