//Episode 1
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//this will call the printName function, which will output 'My name is Bob' as declared in var name on line 2.

//Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//this will print to console the value of result. Result is a function that returns the score variable. Score is declared twice, as a global variable of 5, and a local variable of 3. This should return 3 as score has been reassigned the new value.

//Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//myAnimals has been declared as global variable above the function, then again inside the function. I think this will print the names of the second declaration (['Ducks', 'Dogs', 'Lions']) in a list format (eg 1: Ducks, 2: Dogs, 3: Lions) to the console.
//EDIT I was so close! The list is ordered 0, 1, 2 instead.

//Episode 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
//this will print to console all suspects names, with 'Colin' replacing 'Upul' as suspect 3, because he is the local variable of the same name.
console.log( 'Suspect three is:' + suspectThree );
//This will say "Suspect three is Upul", because it is outside of the allSuspects function and so will still recognise Upul as suspect three as he is the global variable.

//Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};
//this would return 'Ace Ventura' if called alone, the name property of the detective variable.

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//I think that this is going to return 'Poirot', because the detectiveInfo function is changing the name of the global variable detective, and so when the detective is then passed into the printName function to check, that property has been changed.

//Episode 6
var murderer = 'Rick';
//global murderer is Rick

var outerFunction = function() {
  var murderer = 'Morty';
  //local murderer becomes Morty

  var innerFunction = function() {
    murderer = 'Jerry';
  }
  //local murderer changes from Morty to Jerry

  innerFunction();
}

outerFunction();
//outerFunction calls innerFunction when called.
console.log('the murderer is ', murderer);
//the murderer would still be Rick, because even though the outerFunction and innerFunction are called, the program will still recognise the global variable when it comes to printing to console as it is outside the scope of the two functions.

//Episode 7

var colour = 'Red';

var colourMixer = function(){
  var colour = 'Blue';

  var mixItUp = function(){
    var colour = 'Green';
    mixMore()
}

var mixMore = function(){
  var colour = 'Purple';
}

var colour = 'Blue';

var oneMoreMix = function(){
  var colour = 'Red';
}

}

colourMixer();
console.log(colour);
