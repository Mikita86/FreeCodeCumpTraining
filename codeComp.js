// Declare the myGlobal variable below this line


function fun1() {
    // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
var myGlobal = 10;
oopsGlobal = 5;

function myLocalScope() {

    // Only change code below this line
    var myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear = "sweater";

    // Only change code above this line
    return outerWear;
}

myOutfit();


function timesFive(num) {
    return num * 5;
}


// Setup
var sum = 0;

function addFive() {
    sum = sum + 5;
}

function addThree() {
    sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();


// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);


function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
trueOrFalse(true);
trueOrFalse(false);


// Only change code above this line


function welcomeToBooleans() {

    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();

    // Only change code above this line


}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);


// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);


function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);


function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);


function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);



function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
// Only change code above this line


testLogicalAnd(10);


function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }


    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);


function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);


function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

testElseIf(7);


function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);


function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    } else {
        return "Change Me";
        // Only change code above this line
    }
}
testSize(7);



const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes <= par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes <= par + 1) {
        return "Bogey";
    } else if (strokes <= par + 2) {
        return "Double Bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!";
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);


function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {

        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);



function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = 'apple'
            break;
        case 'b':
            answer = 'bird'
            break;
        case 'c':
            answer = 'cat'
            break;
        default:
            answer = 'stuff'
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);



function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);


function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 'bob':
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;

    }


    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }
}



function isLess(a, b) {
    // Only change code below this line
    return a < b;

    // Only change code above this line
}

isLess(10, 15);


// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);




let count = 0;

function cc(card) {

    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        //alert("2 3 4 5 6");
        count += 1;
    } else if (card == 7 || card == 8 || card == 9) {
        count += 0;
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count -= 1;
    }
    if (count <= 0) {
        return String(count) + " Hold";
    } else {
        return String(count) + " Bet";
    }


}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

const myDog = {
    // Only change code below this line
    name: 'Dog',
    legs: 12,
    tails: 14,
    friends: ['alex', 'tom']

    // Only change code above this line
};



// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line




// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree']; // Change this line
const drinkValue = testObj["the drink"]; // Change this line