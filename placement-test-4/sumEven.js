let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let nums = readLine().split(" ").map(Number);
let sum=0;
for(let i=0; i<n; i++){
    if(nums[i]%2 === 0) sum+=nums[i];
}
console.log(sum);