/**
 * Created by I060307 on 17/03/14.
 */
/* Dynamic Class Creation */


function AnonymousDynamicClass(){

}

// Instantiation of the class
var object = new AnonymousDynamicClass();
// Set Attribute
object.name = "aymen";
object.date = "01/01/1986";
object.sayHello = function(){
    console.log("nice?");
};

// Trying surcharge
object.sayHello = function(message){
    console.log(message);
};

console.log(object);

// Also functions can be defined this way
var object2 = {
    name: "aymen",
    hello: function(message){
        console.log(message);
    }
}

object2.hello("some message");