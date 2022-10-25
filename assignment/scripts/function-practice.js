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
let todaysMusic = ['Prince', 'Father John Misty', 'Tom Waits', 'Billie Holiday']
function getLast() {
  let lastArtist = todaysMusic[todaysMusic.length - 1];
  if(todaysMusic.length > 0){
    return lastArtist;
  }
  if(todaysMusic.length < 0){
    return 'undefined';
  }
}

console.log('The last music of the day is:', getLast());


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let londonTour = ['Camdentown', 'Highgate Cemetery', 'Tate Modern', 'British Library', 'Carnaby Street']
function find(inquiry){
  for(place of londonTour){
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


// 9. Function to return the sum of all numbers in an array
let numberArray = [4, 8, 15, 16, 23, 42];
let sum = 0;
function sumAll() {
  for(i=0; i<numberArray.length; i++){
    sum+=numberArray[i];
  }
  // TODO: loop to add items
  // I think this would use .push to the array?
  // Out of time for this sesh
  return sum;
}

console.log(sumAll(numberArray));


// Making the call to stop here for this assignment
// to make sure I spend some time outside before class!



// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
