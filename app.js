var module_2_1 = require("./module_2"); //This is default import i.e with out curly brackets({}).
var module_1_1 = require("./module_1"); //named imports.
var h = new module_2_1.default("Lee", 20); //from module_2.
console.log(h.eat());
console.log(module_1_1.message); //from module_1.
