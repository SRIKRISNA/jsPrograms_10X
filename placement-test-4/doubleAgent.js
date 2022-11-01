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
//N = num_of_planets = 5
// all_Agent_Names = abc bac.....
let n = parseInt(readLine());
let agentNames = readLine().split(" ");
let resArr = [];
let countAll=1;
let noSpace="";
for(let i=0; i<n; i++){
    let signleAgent = agentNames[i].split("").sort().join("");
    // console.log(signleAgent);
    resArr.push(signleAgent);
}
// console.log(resArr);
resArr.sort();
let prev=1;
// console.log(resArr)
for(let i=0; i<resArr.length; i++){
    if(resArr[i] === resArr[i-1]){
        countAll++;
        // console.log(countAll, resArr[i])
    } 
    else{
        if(i!=0){
            noSpace+= resArr[i-1] + countAll;
            countAll=1;
        }
    }
    if(i!=0){
        if(prev < countAll) prev=countAll;
    }
}
console.log(prev)