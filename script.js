
// Exercise: Chaining arrow functions - Sum playlist duration

// Below is a list of videos. By chaining a series of arrow functions, sums the total seconds of only the videos that include  'Code' as part of the title.

 
const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];


const totalTime = playList.filter( word => {
  return word.title.match(/code/i);
}).map( a => a.dur ).map(time => {
  secondsDuration = (time.split(':').pop());
  minutesToSeconds = (time.split(':', 1)) * 60;
  return +minutesToSeconds + +secondsDuration;
}).reduce ((accumulator, currentValue) => accumulator + currentValue);

console.log('The total seconds for all of the videos together is: ' + totalTime);




// Learning Javascript - Arrow functions
// const foo = x => x + 1;
// foo(1); // -> 2
// console.log("test");


// const foo1 = () => { bar: 2 } // foo() returns undefined
// const foo2 = () => ({ bar: 2 }) // foo() returns {bar: 2}

// console.log(foo(2));
// console.log(foo2(2));

// class Pokemon {
//   constructor(name, ability) {
//     this.name = name;
//     this.ability = ability;
//   };
// };

// Pokemon.prototype.attack = () => {
//   console.log(this === window);
//   return this.ability;
// };

// const pikachu = new Pokemon("Pikachu", "Lightning-rod");

// pikachu.attack();

// class Pokemon {
//   constructor(name, ability) {
//     this.name = name;
//     this.ability = ability;
//   };
// };

// Pokemon.prototype.attack = function() {
//   console.log(this === pikachu); // true
//   return this.ability;
// };

// const pikachu = new Pokemon("Pikachu", "Lightning-rod");

// pikachu.attack();

// function skateGreeting() {
//   x = 'Hello Radness';
// }
// skateGreeting();
// console.log(x);


// Write an arrow function that returns the string "Hello Radness".
// const skateGreeting = () =>  'Hello Radness';

// console.log(skateGreeting());

//  Write an function that expects an array of integers

// const allScores = [3, 234, 7, 23, 76];

// const totalScores = allScores.reduce(function( accumulator, currentValue ) {
//   return accumulator + currentValue;
// });

// console.log(totalScores);


/* Exercise 2: Write an arrow function that expects an array of integers, and returns the sum of the elements of the array. 
Use the built-in method reduce() on the array argument. */

// const allScores = [3, 234, 7, 23, 76];

// const totalScores = allScores.reduce (( accumulator, currentValue ) => accumulator + currentValue);


// console.log(totalScores);

/* Exercise 3: Run the following code with Node to see the result. Then refactor any of the capable function(s) with arrow functions. 
The code should still work 😉 */


// const Animal = function(animal, sound, delay) {
//   this.animal = animal;
//   this.sound = sound;
//   this.delay = delay;
// }

// Animal.prototype.greet = function() {
//   setTimeout(function() {
//     console.log(`Hi, I am a ${this.animal}...${this.sound}`);
//   }.bind(this), this.delay);
// };

// const dog = new Animal('Dog', 'Bark', 3000);
// const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();



// const Animal = (animal, sound, delay) => {
//   this.animal = animal;
//   this.sound = sound;
//   this.delay = delay;
// }

// Animal.prototype.greet = () => {
//   setTimeout (function() {
//     console.log(`Hi, I am a ${this.animal}...${this.sound}`);
//   }.bind(this), this.delay);
// };

// const dog = new Animal('Dog', 'Bark', 3000);
// const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();






