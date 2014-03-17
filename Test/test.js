/**
 * Created by I060307 on 17/03/14.
 */

function display(){
    console.log("testing this");
}

// Call Display function
display();

/**
 * A constructor for an anonymous class
 * @constructor
 */
function AnonymousClass(){

    // Define attributes
    this.name = "1";
    this.date = "1";
    this.sayHello = function(){
        console.log("nice?");
    };
}


// Instantiation of the class
var object = new AnonymousClass();
// Set Attribute
object.name = "aymen";
object.date = "01/01/1986";

// Call the function
object.sayHello();
// Add an attribute to the object and not to the class in runtime
object["version"] = 1;
// or this way: object.version = 1;

var object2= new AnonymousClass();
// Set Attribute
object2.name = "a";
object2.date = "01";

// Display values
console.log("First Object: " + object);
console.log("Second Object: " + object2);