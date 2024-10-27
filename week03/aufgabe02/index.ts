// Aufgabe 4

function main() {

// Aufgabe 1

let zahlen: number[] = [-7, 12, 77, 32];

function findMaximum(zahlen: number []): number {
    let large: number = 0;  
    for (let zahl of zahlen) {
        if (zahl > large) {
            large = zahl; 
        }
    }

   return large;  
}

console.log(findMaximum(zahlen));  


// Aufgabe 2

function calculateDaysBeforeChristmas (startDate: Date): number {
    const ChristmasDay: Date = new Date(2024, 11, 24);
    const diff_days: number = (ChristmasDay.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    return diff_days
}

const startDate: Date = new Date(2024, 10, 11);
console.log(calculateDaysBeforeChristmas (startDate));


// Aufgabe 3

// 3.1
function getRank(points: number): string {
    let result: string;
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

function getAverage(notes: number[]): number{
    const lengthArray = notes.length;
    let counter: number = 0;
    for (let note: number = 0; note < lengthArray; note++) {
        counter = counter + notes[note];
    }
    let averageValue: number = Math.round(counter / lengthArray);
    return averageValue;
}

let notes: number[] = [85, 90, 95, 100];
console.log(getAverage(notes));

//3.3

const readlineSync = require("readline-sync");

const points: number = readlineSync.question("Gib eine Punktzahl an: ");
console.log(`Deine Note ist: ${getRank(points)}`);

// 3.4

function getDogData(){

    const readlineSync = require("readline-sync");
    const dogsNum: number = readlineSync.question("Wie viele Hunde möchten Sie erfassen: ");
    
    const dogData: any[] = [];
    let pointsCounter: number = 0;
    for (let i = 0; i < dogsNum; i++){
        const dogName: string  = readlineSync.question("Wie ist der Name Ihres Hundes: ");
        const dogPoints: number = parseInt(readlineSync.question(`Wie viele Punkte hat ${dogName}: `));
        pointsCounter += dogPoints;
        dogData.push({name: dogName, points: dogPoints});
    }

    const averagePoints: number = Math.round(pointsCounter / dogsNum);

    return { dogData, averagePoints };
}

const result = getDogData();

result.dogData.forEach(element => {
    console.log(`${element.name} erzielte ${element.points} Punkte`)
});

console.log(result.averagePoints);

}

main();

