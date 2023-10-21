'use strict';

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// //higher-order functions
// const transformer = function (str, fn) {
//   console.log('Original string: ' + str);

//   console.log(`Transformed string: ${fn(str)} `);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);
// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('❤️');
// };

// document.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetAr = greeting => name => console.log(`${greeting} ${name}`);

// greetAr('Hey')('Hau');
// greetAr('Haunter')('Fucking');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNumber, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
//   },
// };
// const book = lufthansa.book;

// lufthansa.book(239, 'Jonas');
// lufthansa.book(234, 'Haudevnguyen');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Hau Nguyen');
// console.log(swiss);

// //Apply method

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // bind method

// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Wiliam');
