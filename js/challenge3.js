/*Challenge 3 

1. Create an array wih multiple bills.
2. Create a function that returns the tip of that bill, given the following conditions:
- If the bill is greater than $200, tip 10%
- If the bill is between $50 and $200, tip 15%
- If the bill is less than $50, tip 20%

Return an array that displays the tip amount for each bill as well as an array for the total (bill + tip)
*/

billArray = [124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627, 124, 48, 268, 50, 627];

tipArray = [];
totalArray = [];


function tipCalculator(number1, number2) {
    let total = number1 * number2;
    return(total);
}

function totalWithTip(number1, number2) {
    let total = number1 * (number2 + 1);
    return(total);
}



billArray.forEach(function(bill) {
    if (bill > 200) {
        let tip = 0.10;
        tipArray.push(tipCalculator(bill, tip).toFixed(2));
        totalArray.push(totalWithTip(bill, tip).toFixed(2));
    } else if(bill > 50) {
        let tip = 0.15;
        tipArray.push(tipCalculator(bill, tip).toFixed(2)); 
        totalArray.push(totalWithTip(bill, tip).toFixed(2));
    } else if(bill < 50) {
        let tip = 0.20;
        tipArray.push(tipCalculator(bill, tip).toFixed(2));
        totalArray.push(totalWithTip(bill, tip).toFixed(2));
    }
});

console.log(tipArray);
console.log(totalArray);