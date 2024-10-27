// Aufgabe 4
function main() {
    // Aufgabe 1
    var zahlen = [-7, 12, 77, 32];
    function findMaximum(zahlen) {
        var large = 0;
        for (var _i = 0, zahlen_1 = zahlen; _i < zahlen_1.length; _i++) {
            var zahl = zahlen_1[_i];
            if (zahl > large) {
                large = zahl;
            }
        }
        return large;
    }
    console.log(findMaximum(zahlen));
    // Aufgabe 2
    function calculateDaysBeforeChristmas(startDate) {
        var ChristmasDay = new Date(2024, 11, 24);
        var diff_days = (ChristmasDay.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        return diff_days;
    }
    var startDate = new Date(2024, 10, 11);
    console.log(calculateDaysBeforeChristmas(startDate));
    // Aufgabe 3
    // 3.1
    function getRank(points) {
        var result;
        if (points >= 90) {
            result = "1";
        }
        else if (points >= 80) {
            result = "2";
        }
        else if (points >= 70) {
            result = "3";
        }
        else if (points >= 60) {
            result = "4";
        }
        else {
            result = "5";
        }
        return result;
    }
    console.log(getRank(85));
    //3.2
    function getAverage(notes) {
        var lengthArray = notes.length;
        var counter = 0;
        for (var note = 0; note < lengthArray; note++) {
            counter = counter + notes[note];
        }
        var averageValue = Math.round(counter / lengthArray);
        return averageValue;
    }
    var notes = [85, 90, 95, 100];
    console.log(getAverage(notes));
    //3.3
    var readlineSync = require("readline-sync");
    var points = readlineSync.question("Gib eine Punktzahl an: ");
    console.log("Deine Note ist: ".concat(getRank(points)));
    // 3.4
    var DogType;
    (function (DogType) {
        DogType[DogType["Pudel"] = 0] = "Pudel";
        DogType[DogType["Huskys"] = 1] = "Huskys";
        DogType[DogType["Bulldoggen"] = 2] = "Bulldoggen";
    })(DogType || (DogType = {}));
    var Dog = /** @class */ (function () {
        function Dog(name, points, breed) {
            this.name = name;
            this.points = points;
            this.breed = breed;
        }
        Dog.getValidBreed = function () {
            while (true) {
                var typeInput = readlineSync.question("Welche Art ist Ihr Hund: ");
                if (Object.values(DogType).includes(typeInput)) {
                    return typeInput;
                }
                else {
                    console.log("Ungültige Eingabe! Nur Pudel, Huskys und Bulldoggen sind erlaubt.");
                }
            }
        };
        return Dog;
    }());
    function getDogData() {
        var readlineSync = require("readline-sync");
        var dogsNum = parseInt(readlineSync.question("Wie viele Hunde möchten Sie erfassen: "));
        var dogData = [];
        var pointsCounter = 0;
        for (var i = 0; i < dogsNum; i++) {
            var dogName = readlineSync.question("Wie ist der Name Ihres Hundes: ");
            var dogPoints = parseInt(readlineSync.question("Wie viele Punkte hat ".concat(dogName, ": ")));
            var breed = Dog.getValidBreed();
            var dog = new Dog(dogName, dogPoints, breed);
            pointsCounter += dogPoints;
            dogData.push(dog);
        }
        var averagePoints = Math.round(pointsCounter / dogsNum);
        return { dogData: dogData, averagePoints: averagePoints };
    }
    var result = getDogData();
    result.dogData.forEach(function (dog) {
        console.log("".concat(dog.name, " (").concat(dog.breed, ") erzielte ").concat(dog.points, " Punkte"));
    });
    console.log(result.averagePoints);
}
main();
