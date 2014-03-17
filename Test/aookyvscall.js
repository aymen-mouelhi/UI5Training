/**
 * Created by I060307 on 17/03/14.
 */

function taxCalulation(country, rate){
    this.amount = this.salary * this.rate;
    console.log(this.amount);
}

function Tax(){
    this.salary = 1000;
    this.rate   = 0.4;
    this.amount = 0;
    this.TaxCalculation = function(country, rate){

    }
}

var taxAmount = new Tax();
console.log(taxAmount);
taxCalulation.apply(taxAmount, ["france", 0.4 ]);

console.log(taxAmount);