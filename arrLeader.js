let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let arrLength = parseInt(readLine());
let arr=[];
for(let i=0; i<arrLength; i++){
    arr.push(parseInt(readLine().trim()));
}

let result=[];
let max = arr[arrLength-1];
result.push(arr[arrLength-1]);

for(let i=arrLength-2; i>=0; i--){
    if(arr[i] > max){
        max =arr[i];
        result.push(arr[i]);
    }
}
for(let i=0; i<result.length; i++){
    console.log(result[i])
}