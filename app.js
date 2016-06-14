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

var answer1 = prompt('How old do you think I am?');
if (answer1 === 26) {
  alert('that\'s nearly right! I\'m turning 26 this weekend!');
} else if (answer1 > 26) {
  alert('How sweet! Do I actually look old? I always get carded. I am actually 26-ish.');
} else {
  alert('Hey I am not THAT young looking. Jeez! I am 26.');
};
