let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read o
let str = readLine().trim();
let arr=str.split('');
console.log(arr)
for(let i=0; i<str.length; i++){
    if(arr[i].toLowerCase() === arr[i]){
        arr[i] = arr[i].toUpperCase();
    }else{
        arr[i] = arr[i].toLowerCase();
    }
}
console.log(arr.join(''))