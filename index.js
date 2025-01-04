
const from='this is from mybranch'


let ssds=`

Hello Google
 Analytics user,

On July 1, 2024, 
Google Analytics 4 properties will
 have fully replaced Universal Analytics properties, as previously announced. From that date, Google will begin turning off all Universal Analytics services and Universal Analytics APIs, which means Universal Analytics properties will be inaccessible through the Google Analytics front-end and APIs. If you haven’t completely migrated to Google Analytics 4 properties, follow the migration
 guide to start making the switch today.
`






const testing =`Require contributors to sign off on web-based commits Loading
Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the Developer Certificate of Origin (DCO). Learn more about signing off on commits.







const testing =`Require contributors to sign off on web-based commits Loading
Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the Developer Certificate of Origin (DCO). Learn more about signing off on commits.







const myname='bidyut sidker 23 eture/adding_teperal'
=======
cosnt day=` git push --set-upstream origin feture/adding_teperalAs comedian Jim Gaffigan said, "Without Valentine's Day, February would be, well, January." We're using this opportunity to share a few products we love, and we hope that you will, too.
 
Below are my choices to help you connect with more shoppers in more places and get your store looking (and functioning at) its best.`
const myname='bidyut sidker 23'


function radixSort(arr) {
  if (arr.length === 0) return arr;

  // Helper function to get the digit at a specific position
  const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

  // Helper function to count the number of digits in a number
  const digitCount = (num) => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

  // Helper function to find the maximum number of digits in the array
  const mostDigits = (nums) => {
      let maxDigits = 0;
      for (let num of nums) {
          maxDigits = Math.max(maxDigits, digitCount(num));
      }
      return maxDigits;
  };

  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
      // Create buckets for each digit (0-9)
      let digitBuckets = Array.from({ length: 10 }, () => []);

      // Place each number in the corresponding bucket
      for (let num of arr) {
          const digit = getDigit(num, k);
          digitBuckets[digit].push(num);
      }

      // Flatten the buckets back into the array
      arr = [].concat(...digitBuckets);
  }











