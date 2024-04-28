
// This refers to the window.
console.log(this);

// This refers to window object.
function helloThis() {
console.log('Inside this function, this is ' + this);
}


// This refers to the child object. Will console log 110.
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 100);
  }
};

// This refers to the investment object. Will log 4999.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment - 1);
    }
  }
};

// Call the function to check results
helloThis();

// Call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();
