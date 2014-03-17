/**
 * Created by I060307 on 17/03/14.
 */
function Tax(){
    this.salary = 1000;
    this.rate   = 0.4;
    this.amount = 0;
}

Tax.prototype = {
    calculateTax: function(country, rate){
        this.amount = this.salary * this.rate;
    }
}

var taxAmount = new Tax();
console.log(taxAmount.amount);
taxAmount.calculateTax("france", 0.4);

// taxCalulation.apply(taxAmount, ["france", 0.4 ]);

console.log(taxAmount.amount);