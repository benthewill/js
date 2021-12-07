//SuperType constructor function
function SuperType(){
	this.name = "Virat"
}

//SuperType prototype
SuperType.prototype.getSuperName = function(){
	return this.name
}

//SubAtomicType prototype function
function SubAtomicType(){ 
	this.age = 26
}

//Inherit the properties from SuperType
SubAtomicType.prototype = new SuperType();

//Add new property to SubAtomicType prototype
SubAtomicType.prototype.getSubAge = function(){
	return this.age;
}

//Create a SubAtomicType object
var SubAtomicTypeObj = new SubAtomicType();
console.log(SubAtomicTypeObj.name); //Output: Virat
console.log(SubAtomicTypeObj.age); //Output: 26
console.log(SubAtomicTypeObj.getSuperName()); //Output: Virat
console.log(SubAtomicTypeObj.getSubAge()); //Output: 26