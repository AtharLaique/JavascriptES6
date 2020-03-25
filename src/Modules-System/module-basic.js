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
export let message="Welcome to module system in ES6 ";
/*--------------------------- Export Function------------------------------*/
export function test(){
    console.log("I am a exported function ")
}
/*--------------------------- Combine export ------------------------------
    -> ES6 allows us to combine export insted of explicit export 
       if we are exporting more then one thing from a module. 
*/
let newMessage="I am from combine export";
function newTest(){
    console.log("I am also from combine export")
}

//This export is called named export
export {newMessage , newTest}
export let rename="I am rename as name";
/*--------------------------- Default export and import ------------------------------
    -> Default export make more dynamic to import something.
    -> With the help of default export we can import that thing 
       without specifying the actual name of that thing. 
    -> Only one default export module.
    -> This is called un-named export.
*/

let defExport="I am a default export";
export default defExport; 
export let anOtherConccept="Here we learn about name and defult import combinly";
