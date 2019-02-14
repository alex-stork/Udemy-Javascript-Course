/* Challenge 5

Create a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip)
5. Compare the average tip for two people
*/

let john = {
    fullName: "John Smith",
    johnBills: [124, 48, 268, 180, 42],
    johnTips:[],
    johnTotals: []
}

let mark = {
    fullName: "Mark Marison",
    markBills: [77, 375, 110, 45],
    markTips: [],
    markTotals: [] 
}

//Calculates the tip amount only given a bill and a percentage to tip
function calculateTip(bill, percentage) {
    let tip = bill * percentage;
    return Math.round(tip*1e2)/1e2;
}

//Calculates average tips given an array
function averageTips(tipArray) {
    let total = 0;

    for(i = 0; i < tipArray.length; i++) {
        total += tipArray[i];
    }

    return total/tipArray.length;
}

for (let i = 0; i < john.johnBills.length; i++) {
    if (john.johnBills[i] > 200) {
        john.johnTips.push(calculateTip(john.johnBills[i], 0.10)); //John tips 10% if his bill is greater than $200
        john.johnTotals[i] = john.johnTips[i] + john.johnBills[i];
    } else if(john.johnBills[i] < 200 && john.johnBills[i] > 50) {
        john.johnTips.push(calculateTip(john.johnBills[i], 0.15)); //15% if his bill is between $50 and $200
        john.johnTotals[i] = john.johnTips[i] + john.johnBills[i];
    } else if(john.johnBills[i] < 50) {
        john.johnTips.push(calculateTip(john.johnBills[i], 0.20)); //20% if his bill is less than $50
        john.johnTotals[i] = john.johnTips[i] + john.johnBills[i];
    }
}

for (let i = 0; i < mark.markBills.length; i++) {
    if (mark.markBills[i] > 300) {
        mark.markTips.push(calculateTip(mark.markBills[i], 0.25)); //Mark tips 25% if his bill is greater than $300
        mark.markTotals[i] = mark.markTips[i] + mark.markBills[i];
    } else if (mark.markBills[i] < 300 && mark.markBills[i] > 100) { //10% if his bill is between $100 and $300
        mark.markTips.push(calculateTip(mark.markBills[i], 0.10));
        mark.markTotals[i] = mark.markTips[i] + mark.markBills[i];
    } else if (mark.markBills[i] < 100) {
        mark.markTips.push(calculateTip(mark.markBills[i], 0.20)); //$20% if his bill is less than $100
        mark.markTotals[i] = mark.markTips[i] + mark.markBills[i];
    }
}

//Compares average tips between John and Mark
function hasHigherTips(name1, name2, tip1, tip2) {
    if (tip1 > tip2) { //John tips more
        console.log(name1 + "  tips more. His average tip is " + tip1.toFixed(2) + "  and " + name2 + "'s average tip is " + tip2.toFixed(2));
    } else if (tip2 > tip1) { //Mark tips more
        console.log(name2 + " tips more. His average tip is " + tip2.toFixed(2) + " and " + name1 + "'s average tip is " + tip1.toFixed(2));
    } else { //Average tips are the same
        console.log(name1 + " and " + name2 + " tip the exact same! Their average tip is " + tip1.toFixed(2));
    }
}

hasHigherTips(john.fullName, mark.fullName, averageTips(john.johnTips), averageTips(mark.markTips))