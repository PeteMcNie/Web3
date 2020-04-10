var myNumber = 33;

console.log(myNumber)

myNumber = 66;

console.log(myNumber)

var adjectiveOne = "legend";

var myStr = "Pablo Sanchez is a ";

myStr += adjectiveOne;

console.log(myStr)

var firstNameLength = 0;
var firstName = "Pablo";

firstNameLength = firstName.length;

console.log(firstNameLength)


var firstLetterOfFirstName = "";
var firstName = "Sanchez";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName)

firstLetterOfFirstName = firstName[firstName.length - 1];

console.log(firstLetterOfFirstName)



function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("aircraft", "heavy", "flew", "at Mach 0.8"));


var myArray = [["the universe", 42], ["everything", 01000110]];
myArray[0] = 33;
var myData = myArray[0]

console.log(myData)

var myArray = [["Panda", 23], ["Tiger", 5]];
myArray.push([["fly", 8], ["snake", 90]]);

console.log(myArray)

/* Removes last function
var removedFromMyArray = myArray.pop();

console.log(myArray)
*/


// removes first function
myArray.shift();

console.log(myArray)

// adds first function
myArray.unshift(["Polar Bear", 99]);
console.log(myArray)

// an array of arrays
var myList = [["cerial", 3], ["milk", 2], ["juice", 1], ["eggs", 12]]



//functions
function reuseableFunction() {
    console.log("Boom, here comes the boom")
}

reuseableFunction();
reuseableFunction();
reuseableFunction();


function myFunctionWithArgs(a, b) {
    console.log(a * b);
}

myFunctionWithArgs(3, 7);
myFunctionWithArgs(4, 8);
myFunctionWithArgs(12, 6);


//big example
// any var writtern outside a function is automactically applied to the whole document ie. applied to all functions within your document
var myGlobal = 10;

function fun1() {
    var oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
        ouput += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();
//example ends

// Local Scope Example
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
// the var is decleared inside this function, therefore it can be called throught the function myLocalScope

/*console.log(myVar);*/
// This console.log is outside the function and therefore cannot "see" the var to call it. This results in an error message.


// You are able to have local and global vars with the same name. If this is the case (as below) the local var has priority.
var outerWear = "T-Shirt";

function myOutfit() {

    var outerWear = "Togs";

    return outerWear;
}

console.log(myOutfit());
// the above code is linked to the function
//the below console.log is looking for the "outerWear" in the whole document but it cant see inside the function. This means it can only return a var that is global.
console.log(outerWear);
//Note the difference in what you are commanding to be called in this case myOutfit vs outerWear


function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));


function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));


var processed = 0;
function processedArg(num) {
    return (num + 3) / 5;
}

processed = processedArg(7);

// big example, moving an item onto a list and removing the first number off of the list.
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));




//booleans = true or false values
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true));

// EQUALITY OPERATOR A double == sign is needed as a single = assigns a value to whatever follows. called an EQUALITY OPERATOR
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

// STRICT EQUALITY OPERATOR Using an == looks for a match in the results eg 10 is "10" and 10. Using === it has to be an exact match so 10 has to be 10 not "10", this is wrong and would show as not equal.
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}

console.log(compareEquality(10, '10'));


// INEQUALITY OPERATOR
function testNotEqual(val) {
    if (val != 99) {
        return "Not equal"
    }
    return "Equal"
}
console.log(testNotEqual(99));


// GREATER THAN OPERATOR
function greaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}
console.log(greaterThan(324));
console.log(greaterThan(64));
console.log(greaterThan(4));


//GREATER THAN OR EQUAL TO
function greaterThanOrEqualTo(val) {
    if (val >= 100) {
        return "Over 100";
    }
    if (val >= 10) {
        return "10 or more";
    }
    return "Less than 10";
}
console.log(greaterThanOrEqualTo(324));
console.log(greaterThanOrEqualTo(10));
console.log(greaterThanOrEqualTo(9));

//LESS THAN OPERATOR
function lessThan(val) {
    if (val < 25) {
        return "Less than 25";
    }
    if (val < 50) {
        return "Less than 50";
    }
    return "More than 50";
}
console.log(lessThan(15));
console.log(lessThan(35));
console.log(lessThan(50));


//LESS OR EQUAL TO OPERATOR
function lessThanOrEqualTo(val) {
    if (val <= 12) {
        return "Less than or equal to 12";
    }
    if (val <= 24) {
        return "Less than or equal to 24";
    }
    return "Greater than 24";
}
console.log(lessThanOrEqualTo(12));
console.log(lessThanOrEqualTo(24));
console.log(lessThanOrEqualTo(25));


// Testing if a number is between a selected range use && for AND
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));
console.log(testLogicalAnd(35));

// Testing a logical OR statement use || for OR
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(5));
console.log(testLogicalOr(15));

//ELSE STATEMENTS
function testElse(val) {
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or less";
    }
    return result;
}
console.log(testElse(5));
console.log(testElse(523424356));

//ELSE IF STATEMENTS
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Less than 5"
    } else {
        return "Between 5 and 10"
    }
}
console.log(testElseIf(7));


//ORDER IS IMPORTANT, once a condition is yet the computer stops checking and will return an answer even if its not the most accurate value
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));
//the above is incorrect as it should say less than 5...this is because the order is incorrect. see correct order below.
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));


//IF ELSE CHAIN
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(4));
console.log(testSize(8));
console.log(testSize(12));
console.log(testSize(16));
console.log(testSize(20));


// GOLF CODE
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    } else {
        throw new Error('I do not know what to do here')
    }
}
console.log(golfScore(3, 1));
console.log(golfScore(5, 6));
console.log(golfScore(4, 3));


// var golfData = {
//     '1': 'Hole-in-one!',
//     '2': 'Double Bogey',
// }

// golfData.map((k, v) => { console.log(`Your score for hole ${k} was ${v}`)})

const states = [
    'begin',
    'playing',
    'adding-scores',
    'done',
]

let state = 'flobble'

switch (state) {
    case 'begin':
        console.log('Pete is beginning his round');
        break;
    case 'flobble':
        break;
    default:
        throw new Error('Unknown state when talking about golf games')
}

//SWITCH STATEMENTS
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "delta"
            break;
        case 4:
            answer = "gamma"
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// FUNCTION RETURNING BOOLEAN VALUE
function isLess(a, b) {
    return a < b;
}

console.log(isLess(10, 15));
console.log(isLess(349, 15));

// RETURN EARLY FROM A FUNCTION
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
console.log(abTest(-2, 2));

// COUNTING CARDS
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));


// JS BUILD OBJECTS
var myDog = {
    "name": "Phoenix",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var myDog = {
    "name": "Phoenix",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var nameValue = myDog.name;
var legsValue = myDog.legs;


//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION (required if the name has a space in it)
var myDog = {
    "dogs name": "Phoenix",
    "number of legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var nameValue = myDog["dogs name"];
var legsValue = myDog['number of legs'];

//ACCESSING OBJECT PROPERTIES WITH VARIABLES
var testObj = {
    12: "Pablo",
    16: "Benehan",
    19: "Mercer"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//UPDATING OBJECT PROPERTIES
var myDog = {
    "dogs name": "Phoenix",
    "number of legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

myDog.name = "Kula";

//ADDING NEW PROPERTIES TO AN OBJECT (using dot or braket notation)
var myDog = {
    "dogs name": "Phoenix",
    "number of legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

myDog.bark = "Bow wow";

//or

var myDog = {
    "dogs name": "Phoenix",
    "number of legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

myDog['bark'] = "bow wow";

//DELETING PROPERTIES FROM OBJECTS
var myDog = {
    "dogs name": "Phoenix",
    "number of legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

delete myDog.friends;

//USING OBJECTS FOR LOOKUPS
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("bravo"));


//TESTING OBJECTS FOR PROPERTIES
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}
console.log(checkObj("gift"));
console.log(checkObj("hello"));


//MANIPULATING COMPLEX OBJECTS
var myMusic = [
    {
        "artist": "Massive Attack",
        "title": "Teardrop",
        "release_year": "1995",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // These are seperate objects
    {
        "artist": "Linkin Park",
        "title": "Papercut",
        "release_year": "1999",
        "formats": [
            "CD",
            "8T"
        ],
        "gold": true
    },
];


//ACCESSING NESTED OBJECTS
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)


//ACCESSING NESTED ARRAYS
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];


//RECORD COLLECTION
var collection = {
    "2458": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "Purple Rain",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    },
};

// This JSON.parse and JSON.stringify enable you to keep a copy of the collection for tests, makes a copy of the object, this keeps the orignal collection.
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }


    return collection;
}
updateRecords(2468, "tracks", "testing");
console.log(updateRecords(5439, "artist", "ABBA"));


//ITERATE WITH WHILE LOOPS
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);


//ITERATE WITH FOR LOOPS
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

//ITERATE ODD NUMBERS WITH A FOR LOOP
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);


//COUNT BACKWARDS WITH A FOR LOOP
var myArray = [];

for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);


//ITERATE THROUGH AN ARRAY WITH A FOR LOOP
var myArray = [2, 3, 4, 5, 6, 89];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log(total);


//NESTING FOR LOOPS
function multipyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multipyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);


//ITERATE WITH DO....WHILE LOOPS
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);


//PROFILE LOOKUP
var contacts = [
    {
        "firstName": "Pablo",
        "lastName": "Sanchez",
        "number": "1234567890",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Ben",
        "lastName": "Henehan",
        "number": "4567890123",
        "likes": ["Faye", "Yvette", "Brownie Points"]
    },
    {
        "firstName": "Mike",
        "lastName": "Mercer",
        "number": "0981234567",
        "likes": ["Pizza", "Golf", "Brownie Points"]
    },
    {
        "firstName": "Josh",
        "lastName": "Cullen",
        "number": "unknown",
        "likes": ["Thai", "Coding", "Brownie Points"]
    },
];

function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookupProfile("Mike", "likes");

console.log(data);


//GENERATE RANDOM FRACTIONS
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

//GENERATING WHOLE RANDOM NUMBERS (math floor rounds down to the nearest whole number, math random can never be 1.)
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


//GERATING RANDOM WHOLE NUMBERS WITHIN A RANGE
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);

console.log(myRandom);


//USE THE PARSEINT FUNCTION
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");


//USE THE PARSEINT FUNCTION WITH A RADIX (eg base 10, base 2 is binary)
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");


//USE THE CONDITIONAL (TERNARY) OPERATOR
function checkEqual(a, b) {
    return a == b ? true : false;
}

console.log(checkEqual(1, 2));


//USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));


//DIFFERENCES BETWEEN THE VAR AND LET KEYWORDS
/* LET - DOES NOT LET YOU DECLARE A VARIABLE TWICE, comes up with an error. This is one of the reasons people use LET and CONST, it warns you if used twice (or more).


//COMPARE SCOPES OF THE VAR AND LET KEYWORDS
// VAR CAN BE DECLARED GLOBALLY OR LOCALLY
// LET IS ONLY DECLARED IN THE EXPRESSION IT IS USED IN, IT CANNOT AFFECT ANYTHING OUTSIDE WHERE IT IS USED. VAR CAN EXIT BLOCKS IT IS USED IN AND BE USED GLOBALLY AND LOCALLY


//DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD
//CONST WHEN USED, CANNOT BE RESSIGNED LATER IN YOUR CODE. 
eg. var sentence = str + " is cool!";

sentence = str + " is awesome!"
THIS CANNOT BE DOES IF YOU USE
const sentence = str + ....

USED IF YOU KNOW THAT YOU NEVER WANT TO REASSIGN THIS VARIABLE AGAIN
MOST PEOPLE WILL USE CAPITALS AFTER TO REMIND THEMSELVES THAT THEY HAVE USED CONST
ALSO MOST PEOPLE USE LET AND CONST NOT VAR
*/

//MUTATE AN ARRAY DELCARED WITH CONST (you can change an array but not by altering the const, by changing the array itself)
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

console.log(s);

//PREVENT OBJECT MUTATION
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(freezeObj(PI));


//USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS
var magic = function () {
    return new Date();
};
// THESE TWO (ABOVE AND BELOW ACHIEVE THE SAME THING)
var magic = () => new Date();


//ARROW FUNCTION WITH PARAMETERS
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//THE FUNCTION ABOVE IS AGAIN TURNED INTO AN ARROW FUNCTION BELOW
var myConcat = (arr1, arr2) => arr1.concat(arr2);


//USE THE REST OPERATOR WITH FUNCTION PARAMETERS
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4, 5));

//THE SPREAD AND REST OPERATORS ARE BOTH JUST THREE DOTS ...

//USE THE SPEAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
//AT THE MOMENT ARR2 EQUALS ARR1...BY ADDING THE SPEAD ARR2 DOES EQUAL ARR1 BEFORE THE CHANGES ARE MADE
console.log(arr2);

//USE DESTRUCTING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
// Object ===== HAS THREE ELEMENTS

const { x: a, y: b, z: c } = voxel;
//DESTRUCTING SINTAX reads like this, give the field of x to a, give the field of y to b etc. This is a quicker way of assigning variables from the above object.

const AVE_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    //above code is saying, get the temperature of TOMORROW from avgTemperature and assign it the variable of tempOfTomorrow

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVE_TEMPERATURES));



//DESTRUCTING ASSIGNMENT WITH NESTED OBJECTS 
const LOCAL_FORECAST = {
    //this is a nested object
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    // DESTRUCTING requires curly braces, because we want a nested object we need two sets of curly braces in this example
    // so the max that is inside the tomorrow is assigned to the variable maxOfTomorrow
    return maxOfTomorrow;
}

console.log(getTempOfTmrw(LOCAL_FORECAST));



//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let f = 8, g = 6;
(() => {
    "use strict";
    [f, g] = [g, f]
})();
console.log(f);
console.log(g);


//USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [, , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


//USE DESTRUCTING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function () {

    return function half({ max, min }) {
        return (max + min) / 2.0
    };

})();
console.log(stats);
console.log(half(stats));


//CREATING STRINGS USING TEMPLATE LITERALS
const person = {
    name: "Pablo Sanchez",
    age: 45
    //these are variables
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
//=================================variables able to be place right into this string=========
console.log(greeting);


//WRITE CONCISE OBJECT LITERAL DELARATIONS USING SIMPLE FIELDS
const createPerson = (name, age, gender) => {
    //==this is an arrow function that takes in 3 variables==

    return {
        name: name,
        age: age,
        gender: gender
        // key: variable
    };
    //===this object is returned===
};
console.log(createPerson("Pablo", 45, "male"));
// THIS WHOLE CODE CAN BE WRITTERN DIFFERENTLY BELOW

const createPerso = (name, age, gender) => ({ name, age, gender });
//==this is an arrow function that takes in 3 variables, now with the 3 key value pairs afterwards=== 
console.log(createPerso("Pablo", 45, "male"));


//WRITE CONCISE DECLARATIVE FUNCTIONS
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        // this is the long way to put a function within an object
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);


const bicycl = {
    gear: 2,
    setGear(newGear) {
        // this is the SHORT way to put a function within an object
        "use strict";
        this.gear = newGear;
    }
};
bicycl.setGear(3);
console.log(bicycl.gear);


//USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//CLASS SYTNAX USED BELOW< ABOVE EXAMPLE IS THE OLD WAY OF WRITING THIS
class SpaceShuttl {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttl('Jupiter');

console.log(zeus.targetPlanet);


//USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);
            //any variables which start with _ are private variables that you are not meant to interact with=====
        }
        //getter
        get temperature() {
            return this._temp;
        }
        //setter        
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


// console.log('hello world!')

// $ node hello.js
// hello world!
// $

//UNDERSTAND THE DIFFERENCE BETWEEN IMPORT AND REQUIRE
/* You can export JS code from one file into another, set a rule/function etc with the EXPORT tag in one file
and to move it to the file you want use the IMPORT tag to import that rule/function into your current file

eg. import { capitalizeString } from "./file name where rule/function is stored
*/

//USE EXPORT TO REUSE A CODE BLOCK
// to export you can either wrtie EXPORT before the VARIABLE or you can write a separate EXPORT { capitaliszeString }; to target the function


//USE * TO IMPORT EVERYTHING FROM A FILE
//    import * as capitaliszeStrings from "./file name";
//============object created=============


//CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT
//   export default function subtract(x, y) {return x - y;}
// this creates a fall back where only this function is exported


//IMPORT A DEFAULT EXPORT
//    import subtract from "./file name"
// we don't use curly braces when importing a DEFAULT EXPORT

const getSleepHour = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 6;
    } else if (day === 'friday') {
        return 7;
    } else if (day === 'saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 10;
    }
};

const getActualSleepHour = () =>
    getSleepHour('monday') +
    getSleepHour('tuesday') +
    getSleepHour('wednesday') +
    getSleepHour('thursday') +
    getSleepHour('friday') +
    getSleepHour('saturday') +
    getSleepHour('sunday');

const getIdealSleepHour = () => {
    const idealHour = 8;
    return idealHour * 7;
};

const calculateSleepDeb = () => {
    const actualSleepHour = getActualSleepHour();
    const idealSleepHour = getIdealSleepHour();
    if (actualSleepHour === idealSleepHour) {
        console.log('You got the perfect amount of sleep! ' + (idealSleepHour - actualSleepHour) + ' hours extra or less, well done!');
    } else if (actualSleepHour > idealSleepHour) {
        console.log('You\'ve been catching up on sleep. ' + (actualSleepHour - idealSleepHour) + ' hours of extra sleep this week.');
    } else if (actualSleepHour < idealSleepHour) {
        console.log('You need more rest, you\'re creating sleep debt! ' + (idealSleepHour - actualSleepHour) + ' hours under the ideal amount, which is not enough to keep trucking');
    }
};

calculateSleepDeb();




const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8.5;
            break;
        case 'tuesday':
            return 7.5;
            break;
        case 'wednesday':
            return 6.5;
            break;
        case 'thursday':
            return 5.5;
            break;
        case 'friday':
            return 4.5;
            break;
        case 'saturday':
            return 9.5;
            break;
        case 'sunday':
            return 10.5;
            break;
        default:
            return "Error"
    }
};


const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};


const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the right amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got extra sleep! It looks like you got ' + (actualSleepHours - idealSleepHours) + ' extra.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You\'re losing sleep! It looks like you got ' + (idealSleepHours - actualSleepHours) + ' under what you need.');
    } else {
        console.log("Error")
    };
};

calculateSleepDebt();




const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },

    get course() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} which comes to a total of ${totalPrice}.`;
    }

    
};

menu.addDishToCourse('appetizers', 'Garlic Bread', 4.49);
menu.addDishToCourse('appetizers', 'Prawn Cocktail', 9.49);
menu.addDishToCourse('appetizers', 'Cheese sticks', 2.49);

menu.addDishToCourse('mains', 'Chicken Soup', 15.25);
menu.addDishToCourse('mains', 'Quiche', 12.49);
menu.addDishToCourse('mains', 'Bangers and Mash', 22.19);

menu.addDishToCourse('desserts', 'Sunday', 9.49);
menu.addDishToCourse('desserts', 'Eton Mess', 12.49);
menu.addDishToCourse('desserts', 'Apple Pie', 7.39);

const meal = menu.generateRandomMeal();
console.log(meal);





class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut (value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length;
    }
    addRating(value) {
      return this._ratings.push(value);
    }
}
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut);


historyOfEverything.addRating(4);
historyOfEverything.addRating(5);historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie ('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());




class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set newNumberOfStudents(value) {
      if (typeof value === num) {
        return this._numberOfStudents = value;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNumber];
      }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'High', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

  lorraineHansbury.quickFacts();
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new High ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);