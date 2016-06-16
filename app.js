'use strict';

var userName = prompt('Hey there! What is your name?');
alert('Welcome ' + userName + ', thanks for visiting my site!');

var correctAns = 0;

var answer1 = prompt('Do you think Dylan is 26 years old?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'yep' || answer1 === 'i think so' || answer1 === 'y' || answer1 === 'sure' || answer1 === 'i guess') {
  console.log(userName + ' answered yes to question1 (\'Do you think Dylan is 26 years old?\')');
  alert('that\'s nearly right! He\'s turning 26 this weekend!');
  correctAns++;
} else {
  console.log(userName + ' did not answer yes to question1 (\'Do you think Dylan is 26 years old?\'). His answer was: ' + answer1);
  alert('Really? he is actually 26-ish.');
}

var answer2 = prompt('Is Dylan originally from Seattle, Washington?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'yep' || answer2 === 'i think so' || answer2 === 'y' || answer2 === 'sure' || answer2 === 'i guess') {
  console.log(userName + ' answered yes to question2 (\'Is Dylan originally from Seattle, Washington?\')');
  alert('Look at you! You\'re right! Wait... did you look Dylan up on Google?');
  correctAns++;
} else {
  console.log(userName + ' did not answer yes to question2 (\'Is Dylan originally from Seattle, Washington?\'). His answer was: ' + answer2);
  alert('Ummmm... well you\'re wrong. He\'s definitely from Seattle.');
}

var answer3 = prompt('Did Dylan play lacrosse in college?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'yep' || answer3 === 'i think so' || answer3 === 'y' || answer3 === 'sure' || answer3 === 'i guess') {
  console.log(userName + ' answered yes to question3 (\'Did Dylan play lacrosse in college?\')');
  alert('Okay I\'m seriously worried you looked Dylan up on Google. That is correct.');
  correctAns++;
} else {
  console.log(userName + ' did not answer yes to question3 (\'Did Dylan play lacrosse in college?\'). His answer was: ' + answer3);
  alert('Ummmm... well you\'re wrong. He definitely played in college... for a bad team. But hey! They got better!');
}

var answer4 = prompt('Is Dylan\'s favorite dog breed a Bernese Mountain Dog?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'yep' || answer4 === 'i think so' || answer4 === 'y' || answer4 === 'sure' || answer4 === 'i guess') {
  console.log(userName + ' answered yes to question4 (\'Is Dylan\'s favorite dog breed a Bernese Mountain Dog?\')');
  alert('Indubitably! He dreams of frolicking with a pack of Bernese like err\'day.');
  correctAns++;
} else {
  console.log(userName + ' did not answer yes to question4 (\'Is Dylan\'s favorite dog breed a Bernese Mountain Dog?\'). His answer was: ' + answer4);
  alert('Nope. You\'re wrong. He is all about the Bernese.');
}

var answer5 = prompt('Is Dylan overly obsessed with Seattle sports teams?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'yep' || answer5 === 'i think so' || answer5 === 'y' || answer5 === 'sure' || answer5 === 'i guess') {
  console.log(userName + ' answered yes to question5 (\'Is Dylan overly obsessed with Seattle sports teams?\')');
  alert('Sadly yes. It occupies too much of his time and energy.');
  correctAns++;
} else {
  console.log(userName + ' did not answer yes to question5 (\'Is Dylan overly obsessed with Seattle sports teams?\'). His answer was: ' + answer5);
  alert('Nope. You\'re wrong. He is all about the Seattle sports teams.');
}

var counterAnswer6 = 0;
while(counterAnswer6 < 4) {
  var Answer6 = parseInt(prompt('How many states has Dylan lived in, including Washington State? You only get 4 tries.'));
  if (Answer6 === 2) {
    console.log('correct');
    alert('That\'s spot on!');
    correctAns++;
    break;
  }
  // can move counterAnswer6++ to outside } on line 82
  else if (Answer6 < 2) {
    console.log('visitor response to Question 6 is ' + Answer6 + ': incorrect');
    alert('That\'s too low, try again!');
    counterAnswer6++;
  }
  else if (isNaN(Answer6)) {
    console.log('visitor response to Question 6 is ' + Answer6 + ': incorrect');
    alert('That\'s not a number. Unfortunately, we are REALLY looking for a number as an answer.');
    counterAnswer6++;
  }
  else {
    console.log('visitor response to Question 6 is ' + Answer6 + ': incorrect');
    alert('That\'s too high, try again!');
    counterAnswer6++;
  }
}

alert('Alrighty, onto the next (and final) question. Here we go!');

/*
this needs multiple correct text answers (not just permutations of the answer)
need an array above question 7 that lists the multiple correct answers for question 7
need to add a for loop within the whilie loop --> for (var k = 0; k < arrayName.length; k++)
Then have the if statements be included in the for loop
  - if statements should evaluate (Answer7 === arrayName[k])
  - remove the else statements because you only need to evaluate a single array

Also, can make this much more elegant than simply using break;
Instead, set a variable like 'matchesAnswer7 = false;'
then in the while use while(matchesAnswer7 === false && counterAnswer7 < 7)
Add a second if statement outside of the for loop that acts as a catch-all for any incorrect answer
  - if you added this into the inside of the for statement, the negative alert would run every single time a single item in the array is read
*/
var counterAnswer7 = 0;
while(counterAnswer7 < 7) {
  var Answer7 = prompt('Which state did Dylan live in besides Washington State? You have a total of 7 tries.').toLowerCase();
  if (Answer7 === 'ohio' || Answer7 === 'oh') {
    console.log('question 7 is correct');
    alert('That\'s spot on! And creepy. Stop looking Dylan up online!');
    correctAns++;
    break;
  }
  // can move counterAnswer7++ to outside } on line 111
  else if (Answer7 === 'washington' || Answer7 === 'washington state' || Answer7 === 'wa') {
    console.log('visitor response to Question 7 is ' + Answer7 + ': not valid response');
    alert('You aren\'t reading the questions, are you?');
    counterAnswer7++;
  }
  else if (isNaN(Answer7) === false) {
    console.log('visitor response to Question 7 is ' + Answer7 + ', which is a number and therefore invalid.');
    alert('Yo! Read the question... CAREFULLY... and try again!');
    counterAnswer7++;
  }
  else {
    console.log('visitor response to Question 7 is ' + Answer7 + ': incorrect');
    alert('That\'s not correct. Try again!');
    counterAnswer7++;
  }
}

alert('You got ' + correctAns + ' out of 7 questions correct, ' + userName + '! Better luck next time.');
console.log(userName + ' recorded ' + correctAns + ' out of 7 questions correct.');
