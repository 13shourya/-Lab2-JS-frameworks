import { calculateGPA, celsiusToFahrenheit, combinations, welcomeStudent } from "./utils.js";

console.log(">>> main.js is running <<<");

// Call first function
welcomeStudent("Moksh", "Baweja", "Computer Programming");

// Call second function
let tempC = 25;
console.log(`${tempC}°C is equal to ${celsiusToFahrenheit(tempC)}°F`);

// Call third function
console.log("Number of ways to choose 2 from 5:", combinations(5, 2));

// Call fourth function (Intermediate GPA calculator)
let grades = [95, 82, 76, 89, 67]; 
console.log("Calculated GPA:", calculateGPA(grades));
