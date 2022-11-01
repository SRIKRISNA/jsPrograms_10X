let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function cutRope(A){
  // Complete this function
    let res = [];
    A.sort((a, b) => a - b);
    let iteration = 0;
    let lenCut = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] - lenCut > 0) {
            res.push(A.length - i + " ");
            lenCut = A[i];
            iteration++
        }
    }
    if (iteration === 0) {
        res.push(0);
    }
    return res;
}

// Do not change anything below this line
let input_numbers = []
let len=parseInt(readLine())
for (let i=0;i<len;i++){
  input_numbers.push(parseInt(readLine()))
}
res=cutRope(input_numbers)
for(ele of res){
  console.log(ele)
}