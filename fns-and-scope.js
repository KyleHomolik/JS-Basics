//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';


//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.


function isTyler(name){
  if (name === 'Tyler') {
    return true;
  } else return false
};


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  var yourName = prompt('What is your Name?');
  return yourName;
};


//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


function welcome(){
  alert("Welcome, " + getName());
};

welcome();




//What is the difference between arguments and parameters?

// Arguments are values that are passed in to a parameter
//
// Parameters are something that can be reused over and over be assigned aregument or values


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

// null
// 0
// " "
// undefined
// NaN
// false
//
// to test use an if statement




//Next Problem



//Create a function called myName that returns your name
var name = "Kyle";
function myName(){
  return name;
};


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;


//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
var name = "Kyle";
  function outerFn() {
    return function () {
      return name;
    };
  }

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
