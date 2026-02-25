// marksAnalyzer.js

const marks = [75, 82, 90, 60, 55];

// Calculate total using reduce()
export const calculateTotal = (arr) =>
  arr.reduce((sum, mark) => sum + mark, 0);

// Calculate average using total
export const calculateAverage = (arr) =>
  calculateTotal(arr) / arr.length;

// Generate result
export const generateReport = (arr) => {
  const total = calculateTotal(arr);
  const average = calculateAverage(arr);
  const result = average >= 40 ? "Pass" : "Fail";

  return `
  ----- Student Marks Report -----
  Marks: ${arr.map(mark => mark).join(", ")}
  Total: ${total}
  Average: ${average.toFixed(2)}
  Result: ${result}
  `;
};