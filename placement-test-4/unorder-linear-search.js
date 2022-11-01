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
function myFun(k, arr, lent){
    for(let i=0; i<lent; i++){
        if(arr[i] === k) return i;
    }
    return -1;
}

let k = parseInt(readLine());
let lent = parseInt(readLine());
let arr=[]
for(let i=0; i<lent; i++){
    arr.push(parseInt(readLine()));
}
console.log(myFun(k,arr,lent));

//console.log(arr);
