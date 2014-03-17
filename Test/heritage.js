/**
 * Created by I060307 on 17/03/14.
 */

/**
 * Without prototype
 * @param country
 * @param rate
 */
function taxCalulation(country, rate) {
    this.amount = this.salary * this.rate;
    console.log(this.amount);
}

function Tax() {
    this.salary = 1000;
    this.rate = 0.4;
    this.amount = 0;
    this.display = function () {
        console.log("in mother class");
    }
}

function ChildTax() {
    Tax.call(this);
    // Add new attribute
    this.isValid = true;
}

var motherTax = new Tax();
var childTax = new ChildTax();

console.log(motherTax);
console.log(childTax);

childTax.display();

/**
 * With Prototype
 */
*
function Tax(salary, rate) {
    this.salary = 1000;
    this.rate = 0.4;
    this.amount = 0;
    if (typeof Tax.initialized == "undefined") {
        Tax.prototype.display = function () {
            console.log("in mother class");
        }
    }
}

function ChildTax(salary, rate, valid) {
    // same as super
    Tax.call(this, salary, rate);
    // Add new attribute
    this.salary     = salary;
    this.rate       = rate;
    this.isValid    = valid;

}

// Set prototype
ChildTax.prototype = new Tax();


var childTax = new ChildTax("france", 0.4, true);
console.log(childTax);

