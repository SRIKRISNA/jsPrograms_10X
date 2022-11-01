let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


function pivotIndex(arr){
    // Implement this function
    let temp = new Array(arr.length);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        temp[i] = sum;
        sum += arr[i]
    }
    sum = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        temp[i] -= sum;
        sum += arr[i];
    }
    for(let i = 0; i < arr.length; i++){
        if(temp[i] === 0){
            return i
        }
    }
    return -1;
}


// Do not edit anything below
let numElems = parseInt(readLine());
let nums = [];
for(let i=0;i<numElems;i++){
  nums.push(parseInt(readLine()));
}
console.log(pivotIndex(nums));