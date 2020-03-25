function variablesFunc() {
  console.log(
    "-------------------Welcome in ES6 / ES7 variable  system----------------------"
  );
  /*------------------        Introduction        --------------------
    -> In ES6, you may declare your variables with var, let or const. 
    */
  /*------------------        let ( block scope)        --------------
    -> ES6 introduced new way to decalre variable.
    -> With this way we can declare variable with block scop.
    -> Block scop means the scope of variable is limitted within  {} 
       where we declare that variable.
    -> Also unlike var, before using variable we need to declare that.
    -> let should be your second choice – use it whenever you need to re-assign variables. 
       This will mostly be the case in mathematical alogrithms or loops. 
*/
  //#Example 1
  //We can't use out of block
  if (true) {
    let blockScope = "I am a block scope variable ";
    console.log(blockScope);
  }
  //We get here
  // console.log(blockScope)
  //#Example 2
  // We can declare variable of same name with let in diffrent scope
  let age = 30;
  if (true) {
    let age = 27;
    console.log(age);
  }
  console.log(age);
  /*------------------        const ( can't reassign value but can change )        --------------
    -> const is another way to decalre variable.
    -> With this way we can declare variable with constent value that can not be reassign.
    -> const hold the pointer not a value. That's way we can't re assign this pointer.
    -> const is also a block scop variable
    */
  //#Example 1
  //We can't reassign
  const message = " You can't reaasing me";
  //we get error here and program will stop.
  //Un comment and check
  //message="reassigning";
  console.log(message);
  //#Example 2
  //But we can update the value
  const monthDays = [31, 28, 31];
  if (true) {
    const monthDays = [31];
  }
  console.log(monthDays);
  //Here we are going to update the value not reassing
  monthDays.push(30);
  console.log(monthDays);
  /*------------------        Hoisting ( use before declartion)    ----------------
    -> Hoisting is a JavaScript mechanism where variables and function declarations are moved 
       to the top of their scope before code execution. Inevitably, this means that no matter 
       where functions and variables are declared, they are moved to the top of their scope regardless 
       of whether their scope is global or local.
    */
  //# Example 1
  //We can't get error because of hoisting
  num = "I am representing hoisting";
  console.log(num);
  var num;
   /*------------------        var ( function scope )        --------------
    -> We can declare variable using var as we declare in ES5.
    -> var declarations are globally scoped or function scoped.
    -> var variables can be updated and re-declared within its scope.
    */

}
export default variablesFunc;
