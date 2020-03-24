console.log("welcome in es6 / es7")
/*--------------------------- Combine import ------------------------------
    -> ES6 also allows us to combine import insted of explicit import 
       if we are importing more then one thing from the same module. 
*/
import {message ,test} from './Modules-System/module-basic';
console.log(message);
//we can call fuunction from here directly after importing
test();