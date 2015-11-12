export default class Human
{
	name:string;
	age:number;
	
	constructor(name:string,age:number)
	{
		this.name = name;
		this.age = age;
	}
	
	eat()
	{
		console.log(this.name+" "+"eats.")
	}
	
	walk()
	{
		console.log(this.name+" "+"walks.")
	}
}

/*export default class Student
{
	
}*/

//When we try to declare two defaults in one module , compiler doesn't check them by name instead by their i.e "default",
//and generates error.
