console.log("welcome in es6 / es7")
/*--------------------------- Combine import ------------------------------
    -> ES6 also allows us to combine import insted of explicit import 
       if we are importing more then one thing from the same module. 
*/
/*------------------------- Renaming import----------------------------
    -> we can rename import by using "as" keword.
    -> It make easy to use more then one same import from different file.
*/
import {message as msg ,test} from './Modules-System/module-basic';
console.log(msg);
//we can call fuunction from here directly after importing
test();