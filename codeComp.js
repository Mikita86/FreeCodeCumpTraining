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