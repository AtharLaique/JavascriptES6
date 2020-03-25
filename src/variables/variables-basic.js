function variablesFunc(){
    console.log("-------------------Welcome in ES6 / ES7 variable  system----------------------")
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
  if(true)
  {
      let blockScope="I am a block scope variable ";
      console.log(blockScope)
  }
     //We get here
    // console.log(blockScope)
//#Example 2
    // We can declare variable of same name with let in diffrent scope
     let age=30;
     if (true)
     {
         let age=27;
         console.log(age)
     }
     console.log(age)
     
}
export default variablesFunc;