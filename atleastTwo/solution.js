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
function removeDup(arrEle){
    return [...new Set(arrEle)];
}

let arrLen = parseInt(readLine());
let arrEle = readLine().split(" ").map(Number);
let count = 0;
let newArr = [];

let uniqueArr=removeDup(arrEle);
let len = uniqueArr.length;
uniqueArr.sort((a,b) => a-b);

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (uniqueArr[i] < uniqueArr[j]) {
            count++;
            // console.log(uniqueArr[i],uniqueArr[j], count);
        }
        if (count >= 2) {
            newArr.push(uniqueArr[i]);
            count = 0;
        }
    }
    count = 0;
}
let resArr=removeDup(newArr);

if(resArr.length>0){
    console.log(...resArr);
}else{
    console.log(-1);
}