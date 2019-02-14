/* eslint-disable linebreak-style */
/* Challnge 4

1. Calculate BMI using objects for Mark and John (with properties of full name, weight, and height).

2. Use a function to take in the weight and height, and create a new property in each object.
- Weight is in lbs
- Height is in inches
- BMI = (Weight in Pounds / (Height in Inches)^2) * 703

3. Create an If/Else statement to indicate who has the higher BMI, with a final else if statement if the
BMIs are equal. */

function bmiCalculator(person, weight, height) {
    let bmi = weight / (height * height);
    
}   

let mark = {
    name = "Mark";
    weight = 150;
}