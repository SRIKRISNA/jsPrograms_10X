let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//////////////////////////////////

let n=parseInt(readLine());
let arr=[], max=0,min=0;
for(let i=0; i<n; i++){
  arr.push(parseInt(readLine()));
}
arr.sort((a,b)=>a-b);
max=arr[arr.length-1];
min=arr[0];
console.log(max*min)