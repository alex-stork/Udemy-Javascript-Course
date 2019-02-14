const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];
const maryScores = [97, 134, 105];

function myFunction(scoreArray) {
    total = 0; 
    scoreArray.forEach(function(element) {
        total += element;
    })

    return (total/scoreArray.length);
}

const johnAverage = myFunction(johnScores);
const mikeAverage = myFunction(mikeScores);
const maryAverage = myFunction(maryScores);

function main() {
    if (johnAverage > mikeAverage && johnAverage > maryAverage) {
        console.log("John has the highest average of the three");
    } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
        console.log("Mike has the highest average of the three");
    } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
        console.log("Mary has the highest average of the three");
    } else {
        console.log("It's a tie!");
    }
}

main();