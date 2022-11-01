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
let a = readLine().split(" ");
let rows = (parseInt(a[0]));
let cols = (parseInt(a[1]));

let matrix=[], row, sum=0;

for(let i=0; i<rows; i++){
    row=readLine().split(" ");
	matrix.push(row);
    //console.log(row)
    for(let j=0; j<cols; j++){
        if(matrix[i][j] % 2 !== 0){
            sum = sum + parseInt(matrix[i][j]);
        }
    }
    
}
console.log(sum)