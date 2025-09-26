// First function: no return, just print a custom welcome message
function welcomeStudent(firstName, lastName, program) {
  console.log(`Welcome ${firstName} ${lastName}! You are registered in ${program}.`);
}

// Second function: convert Celsius to Fahrenheit (returns a double)
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Third function: calculate nCr (combinations) → a math formula
function combinations(n, r) {
  function factorial(x) {
    return x <= 1 ? 1 : x * factorial(x - 1);
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// Fourth function (Intermediate): GPA calculator
function calculateGPA(grades) {
  // Convert percentage grades (0–100) to GPA scale (0–4.0)
  function gradeToGPA(score) {
    if (score >= 90) return 4.0;
    if (score >= 80) return 3.0;
    if (score >= 70) return 2.0;
    if (score >= 60) return 1.0;
    return 0.0;
  }

  let totalGPA = 0;
  for (let grade of grades) {
    totalGPA += gradeToGPA(grade);
  }

  return (totalGPA / grades.length).toFixed(2);
}

// Export all functions
export { calculateGPA, celsiusToFahrenheit, combinations, welcomeStudent };

