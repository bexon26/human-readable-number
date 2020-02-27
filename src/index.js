

module.exports = function toReadable (number) {
    var num100 ='';
var num10 ='';
var num1 ='';
var num20 ='';
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var numbers20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var numbers10 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var numbers100 = ' hundred';
var finallString = '';
   var numberString = number.toString();
   var MyNumber = numberString;
   for (var i = 0; i < numberString.length; i++){
    while (MyNumber !== '') {
        if (MyNumber.length == 3) {
            if (i === 0) {
            num100 += numbers[Math.floor(number / 100)]; 
            num100 += numbers100;
            MyNumber = MyNumber.slice(1);
            if (Math.floor(MyNumber/10) == 0){
                MyNumber = MyNumber.slice(1);
                if (MyNumber == 0) {
                    MyNumber = '';
                }
            };
        };
      }; 
      if (MyNumber.length == 2) {
        if (MyNumber < 20 && i === 0){
            if (numberString.length === 2) {
                num100 += numbers20[number%10];
            } else {
                num100 += ' ' + numbers20[number%10];
            }
            MyNumber = MyNumber.slice(2);
        } else {
            if (numberString.length === 2) {
                num100 += numbers10[Math.floor(MyNumber / 10) - 2];
            } else {
                num100 += ' ' + numbers10[Math.floor(MyNumber / 10) - 2];
            }
            MyNumber = MyNumber.slice(1);
        };
            if (MyNumber == 0){
                MyNumber = '';
            };
        };
        if (MyNumber.length == 1) { 
            if (numberString.length === 1) {
                num100 += numbers[MyNumber];
                MyNumber = '';
            } else {
                num100 += ' ' + numbers[MyNumber];
            MyNumber = '';
            }
        };
    } 
  };
  return num100;
}
