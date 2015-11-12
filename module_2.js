var Human = (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " " + "eats.");
    };
    Human.prototype.walk = function () {
        console.log(this.name + " " + "walks.");
    };
    return Human;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Human;
/*export default class Student
{
    
}*/
//When we try to declare two defaults in one module , compiler doesn't check them by name instead by their i.e "default",
//and generates error. 
