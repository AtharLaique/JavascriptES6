/*---------------------------Introduction------------------------------
    -> ES6 introduced officially, Modules system in javascript.
    -> This means, that we may split up our code into multiple files.
    -> Each file that export somthing is called Module.
    -> From each file we can export variables, functions, objects, array 
       and import it in another file for use.
*/
/*--------------------------- What we export and import?  ------------------------------
    -> When we exporting some thing( variable , function )we not exporting that thing
       explicitly , we just exporting reference of that thing.
    -> If something change with that thing ( assigned new vale) we will get that updated value; 
*/
/*--------------------------- Export variable------------------------------*/
 let message="Welcome to module system in ES6 ";
/*--------------------------- Export Function------------------------------*/
 function test(){
    console.log("Export function in ES6")
}
/*--------------------------- Combine export ------------------------------
    -> ES6 allows us to combine export insted of explicit export 
       if we are exporting more then one thing from a module. 
*/
export {message , test}