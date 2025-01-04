


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
  
