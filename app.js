'use strict';

var userName = prompt('Hey there! What is your name?');
alert('Welcome' + ' ' + userName + ',' + ' ' + 'thanks for visiting my site!');

/*
if (user is correct) {
    tell them so
} else {
    tell them they are wrong
}
*/

var answer1 = prompt('Do you think Dylan is 26 years old?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'yep' || answer1 === 'I think so' || answer1 === 'y') {
  alert('that\'s nearly right! He\'s turning 26 this weekend!');
} else {
  alert('Really? he is actually 26-ish.');
}

var answer2 = prompt('Is Dylan originally from Seattle, Washington?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'yep' || answer2 === 'I think so' || answer2 === 'y') {
  alert('Look at you! You\'re right! Wait... did you look Dylan up on Google?');
} else {
  alert('Ummmm... well you\'re wrong. He\'s definitely from Seattle.');
}

var answer3 = prompt('Did Dylan play lacrosse in college?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'yep' || answer3 === 'I think so' || answer3 === 'y') {
  alert('Okay I\'m seriously worried you looked Dylan up on Google. That is correct.');
} else {
  alert('Ummmm... well you\'re wrong. He definitely played in college... for a bad team. But hey! They got better!');
}

var answer4 = prompt('Is Dylan\'s favorite dog breed a Bernese Mountain Dog?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'yep' || answer4 === 'I think so' || answer4 === 'y') {
  alert('Indubitably! He dreams of frolicking with a pack of Bernese like err\'day.');
} else {
  alert('Nope. You\'re wrong. He is all about the Bernese.');
}

var answer5 = prompt('Is Dylan overly obsessed with Seattle sports teams?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'yep' || answer5 === 'I think so' || answer5 === 'y') {
  alert('Sadly yes. It occupies too much of his time and energy.');
} else {
  alert('Nope. You\'re wrong. He is all about the Seattle sports teams.');
}
