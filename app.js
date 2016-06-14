'use strict';

var userName = prompt('Hey there! What is your name?');
alert('Welcome' + ' ' + userName + ',' + ' ' + 'thanks for visiting my site!');

var answer1 = prompt('Do you think Dylan is 26 years old?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'yep' || answer1 === 'i think so' || answer1 === 'y' || answer1 === 'sure' || answer1 === 'i guess') {
  console.log(userName + ' ' + 'answered yes to question1 \(\'Do you think Dylan is 26 years old?\'\)');
  alert('that\'s nearly right! He\'s turning 26 this weekend!');
} else {
  console.log(userName + ' ' + 'did not answer yes to question1 \(\'Do you think Dylan is 26 years old?\'\). His answer was:' + ' ' + answer1);
  alert('Really? he is actually 26-ish.');
}

var answer2 = prompt('Is Dylan originally from Seattle, Washington?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'yep' || answer2 === 'i think so' || answer2 === 'y' || answer2 === 'sure' || answer2 === 'i guess') {
  console.log(userName + ' ' + 'answered yes to question2 \(\'Is Dylan originally from Seattle, Washington?\'\)');
  alert('Look at you! You\'re right! Wait... did you look Dylan up on Google?');
} else {
  console.log(userName + ' ' + 'did not answer yes to question2 \(\'Is Dylan originally from Seattle, Washington?\'\). His answer was:' + ' ' + answer2);
  alert('Ummmm... well you\'re wrong. He\'s definitely from Seattle.');
}

var answer3 = prompt('Did Dylan play lacrosse in college?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'yep' || answer3 === 'i think so' || answer3 === 'y' || answer3 === 'sure' || answer3 === 'i guess') {
  console.log(userName + ' ' + 'answered yes to question3 \(\'Did Dylan play lacrosse in college?\'\)');
  alert('Okay I\'m seriously worried you looked Dylan up on Google. That is correct.');
} else {
  console.log(userName + ' ' + 'did not answer yes to question3 \(\'Did Dylan play lacrosse in college?\'\). His answer was:' + ' ' + answer3);
  alert('Ummmm... well you\'re wrong. He definitely played in college... for a bad team. But hey! They got better!');
}

var answer4 = prompt('Is Dylan\'s favorite dog breed a Bernese Mountain Dog?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'yep' || answer4 === 'i think so' || answer4 === 'y' || answer4 === 'sure' || answer4 === 'i guess') {
  console.log(userName + ' ' + 'answered yes to question4 \(\'Is Dylan\'s favorite dog breed a Bernese Mountain Dog?\'\)');
  alert('Indubitably! He dreams of frolicking with a pack of Bernese like err\'day.');
} else {
  console.log(userName + ' ' + 'did not answer yes to question4 \(\'Is Dylan\'s favorite dog breed a Bernese Mountain Dog?\'\). His answer was:' + ' ' + answer4);
  alert('Nope. You\'re wrong. He is all about the Bernese.');
}

var answer5 = prompt('Is Dylan overly obsessed with Seattle sports teams?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'yep' || answer5 === 'i think so' || answer5 === 'y' || answer5 === 'sure' || answer5 === 'i guess') {
  console.log(userName + ' ' + 'answered yes to question5 \(\'Is Dylan overly obsessed with Seattle sports teams?\'\)');
  alert('Sadly yes. It occupies too much of his time and energy.');
} else {
  console.log(userName + ' ' + 'did not answer yes to question5 \(\'Is Dylan overly obsessed with Seattle sports teams?\'\). His answer was:' + ' ' + answer5);
  alert('Nope. You\'re wrong. He is all about the Seattle sports teams.');
}
