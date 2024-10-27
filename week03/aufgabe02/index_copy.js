// Aufgabe 4

function main() {

// Aufgabe 1

let zahlen = [-7, 12, 77, 32];

function findMaximum(zahlen) {
    let large = 0;  
    for (let zahl of zahlen) {
        if (zahl > large) {
            large = zahl; 
        }
    }

   return large;  
}

console.log(findMaximum(zahlen));  


// Aufgabe 2

function calculateDaysBeforeChristmas (startDate) {
    const ChristmasDay = new Date(2024, 11, 24);
    const diff_days = (ChristmasDay - startDate) / (1000 * 60 * 60 * 24);

    return diff_days
}

const startDate = new Date(2024, 10, 11);
console.log(calculateDaysBeforeChristmas (startDate));


// Aufgabe 3

// 3.1
function getRank(points) {
    let result
    if(points >= 90){
        result = "1";
    } else if(points  >= 80){
        result = "2";
    } else if(points >= 70){
        result = "3";
    } else if(points >=60){
        result = "4";
    } else{
        result = "5";
    }
    return result;
}
console.log(getRank(85))

//3.2

function getAverage(notes){
    const lengthArray = notes.length;
    let counter = 0;
    for (let note = 0; note < lengthArray; note++) {
        counter = counter + notes[note];
    }
    let averageValue = Math.round(counter / lengthArray);
    return averageValue;
}

notes = [85, 90, 95, 100];
console.log(getAverage(notes));

//3.3

const readlineSync = require("readline-sync");

const points = readlineSync.question("Gib eine Punktzahl an: ");
console.log(`Deine Note ist: ${getRank(points)}`);

// 3.4

function getDogData(){

    const readlineSync = require("readline-sync");
    const dogsNum = readlineSync.question("Wie viele Hunde möchten Sie erfassen: ");
    
    const dogData = [];
    let pointsCounter = 0;
    for (let i = 0; i < dogsNum; i++){
        const dogName = readlineSync.question("Wie ist der Name Ihres Hundes: ");
        const dogPoints = parseInt(readlineSync.question(`Wie viele Punkte hat ${dogName}: `));
        pointsCounter += dogPoints;
        dogData.push({name: dogName, points: dogPoints});
    }

    const averagePoints = Math.round(pointsCounter / dogsNum);

    return { dogData, averagePoints };
}

const result = getDogData();

result.dogData.forEach(element => {
    console.log(`${element.name} erzielte ${element.points} Punkte`)
});

console.log(result.averagePoints);

}

main();

