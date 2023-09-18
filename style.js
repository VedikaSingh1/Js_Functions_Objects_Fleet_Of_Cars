"use strict";

/*Assignment 3: Fleet of Cars Operations
Problem Statement:
You are given an array of objects representing a fleet of cars. Each object has the following properties:

- `make` (string): The make of the car (e.g., "Toyota," "Honda," "Ford").
- `model` (string): The model of the car (e.g., "Camry," "Civic," "F-150").
- `year` (number): The year the car was manufactured.
- `mileage` (number): The mileage of the car in miles.
*/

//GIVEN
const fleet = [
  { make: "Toyota", model: "Camry", year: 2019, mileage: 30000 },
  { make: "Honda", model: "Civic", year: 2018, mileage: 25000 },
  { make: "Ford", model: "F-150", year: 2020, mileage: 40000 },
  { make: "Toyota", model: "Corolla", year: 2019, mileage: 28000 },
  { make: "Honda", model: "Accord", year: 2022, mileage: 15000 },
];

// 1. Function 1: `getCarMakes(arr)`
// - Input: `arr` (an array of car objects)
//    - Output: Returns an array of unique car makes.
//console.log(fleet[0].make);
function getCarMakes(arr) {
  const makes = new Set();
  for (const i of arr) {
    makes.add(i.make);
  }
  return makes;
}

// 2. Function 2: `getCarsWithMileageGreaterThan(arr, mileage)`
// - Input: `arr` (an array of car objects), `mileage` (a number)
//    - Output: Returns an array of cars with mileage greater than the specified value.
function getCarsWithMileageGreaterThan(arr, mileage) {
  const miles = [];
  for (const i of arr) {
    if (i.mileage > mileage) {
      miles.push(i);
    }
  }
  return miles;
}

// 3. Function 3: `sortCarsByYear(arr)`
// - Input: `arr` (an array of car objects)
//    - Output: Returns a new array of cars sorted in ascending order based on their manufacturing year.
//use map functions
// function sortCarsByYear(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i].year > arr[j].year) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
function sortCarsByYear(arr) {
  const map = new Map();
  for (const i of arr) {
    map.set(i, i.year);
  }
  const map1 = Array.from(map).sort((a, b) => a[1] - b[1]);
  const sortedMap = new Map(map1);
  //console.log(sortedMap);
  const sorted = [];
  for (let [key, value] of map1) {
    sorted.push(key);
  }
  return sorted;
}

// 4. Function 4: `getCarsByMake(arr, make)`
// - Input: `arr` (an array of car objects), `make` (a string)
//    - Output: Returns an array of cars with the specified make.
// use filter function
// function getCarsByMake(arr, make) {
//   const makes = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].make === make) makes.push(arr[i]);
//   }
//   return makes;
// }

function getCarsByMake(arr, make) {
  const arr1 = arr.filter(function (item) {
    return item.make === make;
  });
  return arr1;
}

// 5. Function 5: `getCarMakesWithMultipleModels(arr)`
// - Input: `arr` (an array of car objects)
//    - Output: Returns an array of car makes that have multiple models in the fleet.

function getCarMakesWithMultipleModels(arr) {
  const multi = new Map();
  const multiArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (multi.has(arr[i].make)) {
      let count = multi.get(arr[i].make) + 1;
      multi.set(arr[i].make, count);
    } else {
      multi.set(arr[i].make, 1);
    }
  }
  //console.log("HashMap");
  //console.log(multi);

  for (const [make, count] of multi) {
    if (count > 1) {
      multiArray.push(make);
    }
  }
  return multiArray;
}

// 6. Function 6: `getNewestCar(arr)`
// - Input: `arr` (an array of car objects)
//    - Output: Returns the object representing the newest car based on its manufacturing year.

function getNewestCar(arr) {
  let car = [];
  let max = -Infinity;
  for (const i of arr) {
    if (i.year > max) {
      max = i.year;
      car = i;
    }
  }
  return car;
}

console.log("1. Array of unique car makes:");
console.log(...getCarMakes(fleet)); // Output: ["Toyota", "Honda", "Ford"]
console.log(" ");
console.log("2. Array of cars with mileage greater than the specified value:");
console.log(...getCarsWithMileageGreaterThan(fleet, 30000)); // Output: Cars with mileage greater than 30000
console.log(" ");
console.log(
  "3. Array of cars sorted in ascending order based on their manufacturing year:"
);
console.log(...sortCarsByYear(fleet)); // Output: Cars sorted by year
console.log(" ");
console.log("4. Array of cars with the specified make:");
console.log(...getCarsByMake(fleet, "Toyota")); // Output: Cars by Toyota
console.log(" ");
console.log("5. Array of car makes that have multiple models in the fleet:");
console.log(...getCarMakesWithMultipleModels(fleet)); // Output: ["Toyota", "Honda"]
console.log(" ");
console.log(
  "6. Object representing the newest car based on its manufacturing year:"
);
console.log(getNewestCar(fleet)); // Output: Newest car object
