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
let arr=[];
for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()));
}
let sum=0, mult=1, count=0;
for(let i=0; i<n; i++){
   let x = arr[i].toString().split("");
   let xlen = x.length;
    for(let j=0; j<xlen; j++){
        sum+=parseInt(x[j])
        mult*=parseInt(x[j])
    }
    if(sum>=mult) count++;
    sum=0;
    mult=1;
}
console.log(count)