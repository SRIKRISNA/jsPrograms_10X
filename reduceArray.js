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
let n= parseInt(readLine())
let firstNum = parseInt(readLine())
let currentVal = firstNum;
let a = [], result, add = 0, sub = 0;
for(let i=2; i<=n; i++){
    a[i] = parseInt(readLine())
    if(i%2 === 0){
        add = currentVal + a[i];
        currentVal = add;
    }else{
        sub = currentVal - a[i] ; 
        currentVal = sub;
    }
}
console.log(currentVal)