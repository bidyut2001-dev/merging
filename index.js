
function quickSort(array) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (array.length <= 1) {
      return array;
  }

  // Step 1: Choose a pivot
  const pivot = array[array.length - 1]; // Choosing the last element as pivot
  const left = []; // Elements less than the pivot
  const right = []; // Elements greater than the pivot

  // Step 2: Partition the array
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
          left.push(array[i]);
      } else {
          right.push(array[i]);
      }
  }

  // Step 3: Recursively sort left and right subarrays, then combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [10, 7, 8, 9, 1, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 5, 7, 8, 9, 10]


import React from 'react';
import MessageUpdater from './MessageUpdater';

const App = () => {
  return (
    <div>
      <MessageUpdater />
    </div>
  );
};

export default App;








// MathLib.js
const MathLib = (function () {
    // Private methods (not exposed outside the library)
    function isNumber(value) {
      return typeof value === "number" && !isNaN(value);
    }
  
    // Exposed methods
    return {
      add: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a + b;
      },
  
      subtract: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a - b;
      },
  
      multiply: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a * b;
      },
  
      divide: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        if (b === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return a / b;
      },
    };
  })();
  
  // Usage Example
  console.log(MathLib.add(5, 3)); // Output: 8
  console.log(MathLib.subtract(5, 3)); // Output: 2
  console.log(MathLib.multiply(5, 3)); // Output: 15
  console.log(MathLib.divide(6, 3)); // Output: 2
  
