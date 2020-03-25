//  importing variable
import defExport, {message } from './module-basic';
//  importing function
import {test } from './module-basic';
/*--------------------------- Combine import ------------------------------
    -> ES6 also allows us to combine import insted of explicit import 
       if we are importing more then one thing from the same module. 
*/
import {newMessage , newTest} from './module-basic';
/*------------------------- Renaming import----------------------------
    -> we can rename import by using "as" keword.
    -> It make easy to use more then one same import from different file.
*/
import {rename as name} from './module-basic';
//defult import : Actual name is defExport 
//import defaultExp from './module-basic';
/*-------------------------  combine import of default and named export ----------------------------
    -> We can also import named and defult export combinly. 
*/
import defaultExp, {anOtherConccept} from './module-basic';
/*-------------------------  import * ----------------------------
    -> with * we can import complete module in a single variable 
*/
import * as importedasStar from './module-basic';
function moduleFunc(){
    console.log("All concept about Module system")
    console.log(message);
                test();
    console.log(newMessage)
            newTest();
    console.log(name);
    console.log(defaultExp);
    console.log(anOtherConccept);
    console.log(importedasStar);

}
export default moduleFunc;