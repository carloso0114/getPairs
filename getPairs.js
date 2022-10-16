const prompt = require('prompt-sync')({sigint: true});

let list = [];
let finish = false;

console.log("Type a number and then hit enter, once you are done giving numbers away, type 'done' to continue")
do {
  let num = prompt("Enter a number ");
  if (num === 'done') {
    finish = true;
  } else {
    list.push(Number(num));
  }
} while (!finish);

const sum = Number(prompt("Enter the target integer: "));
console.log('Your list: ' + list + ' and target: ' + sum)
function getPairsCount(arr, target) {
  const n = arr.length;
  let result = '';
  const m = new Map();
  for (var i = 0; i < n; i++) {
    m.set(arr[i], 1);
    if (m.has(target - arr[i])) {
      const dif = (target - arr[i]);
      result += arr[i]+ ',' + dif + '\n';
    };
  };
  return result;
};

console.log(getPairsCount(list, sum));