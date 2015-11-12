import Human from "./module_2";   //This is default import i.e with out curly brackets({}).
import {message} from "./module_1";     //named imports.

var h = new Human("Lee",20); //from module_2.
console.log(h.eat());

console.log(message);   //from module_1.
