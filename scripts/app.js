var cart = []; //--> setting the var as the shopping cart

var obj = {name:"apple", cost:2.00, num:6};  //--> showing the (obj)ects going into the cart	
cart.push(obj); //--> the method needed to push the items into the cart


console.log(cart);
console.log(cart[0]);
console.log(cart[0].name);
// The statements above will loop through the items in the list
// console.log(cart); will show that it's an object
// console.log(cart[0]); is asking to return the cart and then the array[] 
// showing within the cart 
//			Object {name: "apple", cost: 2, num: 6}

// lastly, using one of the identifiers (.name, .cost, or .num ) will list that specific 
// items's value. i.e. cost =2, num = 6 , and name = apple


var petStore = [];
var obj = {name:"cat", cost: 10.00, color:"black"};
petStore.push(obj);

console.log(petStore)
//[Object]
console.log(petStore[0]);
//Object {name: "cat", cost: 10, color: "black"}

console.log(petStore[0].name);
//cat

function myFunction(message, count){
	for (var i = 0; i < count; i++){
		console.log(message)
	}
}
myFunction("Preeti", 8);
myFunction("is really a cute little animal", 7)


//-----------how to return a value with a function.  the info below shows how to return the value of 
// the square root of 3

function square(num){
	return num * num;  //<-- this is the request to pass thru the function

}
console.log(square(3)); //<--- this is what you want the computer to return, the square root of 3

var arrayOfStrings = [];

function howLong(arrayOfStrings){
	return str.lenght;
 	
 		console.log(arrayOfStrings[]) 
}








