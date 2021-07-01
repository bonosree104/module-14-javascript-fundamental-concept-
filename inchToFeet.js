var inch = 156;
var feet = inch/12;

console.log(feet);
console.log(feet);
console.log(feet);

function inchToFeet(inch){
       var feet = inch/12;
       return feet;
}
 var totaFeet = inchToFeet(288);
 console.log(totaFeet);
  var elaFeet =inchToFeet(399);
  console.log(elaFeet);
  var motu = inchToFeet(111);
  console.log(motu);

  function factorial(n){
         var i = 1;
         var fact =1 ;
         while(i<=n){
         fact = fact * i;
         i++;
         }
         return fact;
  }
  var result = factorial(5);
  console.log(result);