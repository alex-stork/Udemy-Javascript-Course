/* Challenge 5

Create a tip calculator using objects and loops:
1. Create an object with an array for the bill values

*/

let johnBills = [124, 48, 268, 180, 42];
let johnTips = [];
let johnTotals = [];

let markBills = [77, 375, 110, 45];
let markTips = [];
let markTotals = [];

function calculateTip(bill, percentage) {
    let tip = bill * percentage;
    return Math.round(tip*1e2)/1e2;
}

function averageTips(tipArray) {
    let total = 0;

    for(i = 0; i < tipArray.length; i++) {
        total += tipArray[i];
    }

    return total/tipArray.length;
}

for (let i = 0; i < johnBills.length; i++) {
    if (johnBills[i] > 200) {
        johnTips.push(calculateTip(johnBills[i], 0.10));
        johnTotals[i] = johnTips[i] + johnBills[i];
    } else if(johnBills[i] < 200 && johnBills[i] > 50) {
        johnTips.push(calculateTip(johnBills[i], 0.15)); 
        johnTotals[i] = johnTips[i] + johnBills[i];
    } else if(johnBills[i] < 50) {
        johnTips.push(calculateTip(johnBills[i], 0.20)); 
        johnTotals[i] = johnTips[i] + johnBills[i];
    }
}

for (let i = 0; i < markBills.length; i++) {
    if (markBills[i] > 300) {
        markTips.push(calculateTip(markBills[i], 0.25));
        markTotals[i] = markTips[i] + markBills[i];
    } else if (markBills[i] < 300 && markBills[i] > 100) {
        markTips.push(calculateTip(markBills[i], 0.10));
        markTotals[i] = markTips[i] + markBills[i];
    } else if (markBills[i] < 100) {
        markTips.push(calculateTip(markBills[i], 0.20));
        markTotals[i] = markTips[i] + markBills[i];
    }
}

if (averageTips(johnTips) > averageTips(markTips)) {
    console.log("John tips more. His average tip is " + averageTips(johnTips).toFixed(2) + " and Mark's average tip is " + averageTips(markTips).toFixed(2));
} else if (averageTips(markTips) > averageTips(johnTips)) {
    console.log("Mark tips more. His average tip is " + averageTips(markTips).toFixed(2) + " and John's average tip is " + averageTips(johnTips).toFixed(2));
} else {
    console.log("John and Mark tip the exact same! Their average tip is " + averageTips(johnTips).toFixed(2));
}