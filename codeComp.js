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