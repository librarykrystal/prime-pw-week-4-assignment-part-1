console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Buster Scruggs'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('The sum of two numbers:', addNumbers(2, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('Three numbers, multiplied:', multiplyThree(1, 2, 4));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ){
  if( number>0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

// let todaysMusic = ['Prince', 'Father John Misty', 'Tom Waits', 'Billie Holiday']
// function getLast() {
//   let lastArtist = todaysMusic[todaysMusic.length - 1];
//   if(todaysMusic.length > 0){
//     return lastArtist;
//   }
//   if(todaysMusic.length < 0){
//     return 'undefined';
//   }
// }
// console.log('The last music of the day is:', getLast());

// REDO BELOW based on graded assignment notes.
//    (Using param in function/call so other arrays can be passed in.)

let todaysMusic = ['Prince', 'Father John Misty', 'Tom Waits', 'Billie Holiday']

function getLast(musicArray){
  let lastArtist = musicArray[musicArray.length - 1];
  if(musicArray.length > 0){
    return lastArtist;
  }
  if(musicArray.length < 0){
    return "undefined";
  }
}

console.log('The last music of the day is:', getLast(todaysMusic));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let londonTour = ['Camdentown', 'Highgate Cemetery', 'Tate Modern', 'British Library', 'Carnaby Street']
function find(inquiry){
  for(let place of londonTour){   // "let" added for assignment resubmission
    if(place===inquiry){
      return true;
    }
  }
  return false;
}

console.log('Is it in the itinerary?', find('Tate Modern'));
// I don't fully understand why the "return false" worked here (where it is located) -
// I thought it might need an if/else stmt of its own, but...
// I just tried it here because when it was inside the for loop as an else stmt
// it stopped the loop after checking only the first array item.

// At time of assignment resubmission, I am understanding this better!



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter == string.charAt(0)){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// At time of initial assignment submission, stretch #8 was completed,
// #9 was partial, and #s 10 and 11 were not touched.
// Completing all stretches as part of assignment re-submission.


// 9. Function to return the sum of all numbers in an array
let numberArray = [4, 8, 15, 16, 23, 42];
let sum = 0;
function sumAll(numbers){
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAll(numberArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const numArray = [6, -2, 1, -7, 2, 0];

function positivesOnly(numbersInput){
  return numbersInput.filter(numby => numby>0);
}
console.log(positivesOnly(numArray));

// Solution above works.
// (And uses .filter() which I just learned about earlier today - neat!)
// But I originally tried a long-form solution (below) that didn't work.
// I see the issue:
// that "numby" was referring to place rather than number value in that place,
// But I did not know how to make it refer to number value instead
// in order to evaluate the values in the array rather than their [i] location.

// function positivesOnly(numbersInput){
//   let posOnlyArray = [];
//   // TEST console.log(posOnlyArray);
//   for(let numby of numbersInput){
//     if(numby==0){
//       posOnlyArray.push(numbersInput[numby]);
//     }
//   }
//   return posOnlyArray;
// }
// console.log(positivesOnly(numArray));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
