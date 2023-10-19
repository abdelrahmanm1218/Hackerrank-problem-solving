function breakingRecords(scores) {
    // Write your code here
    let resultArr = [];
    let minmum = scores[0], maximum =scores[0], minCount = 0, maxCount=0;
    for( let i=1; i<=scores.length;i++){
        if(scores[i] > maximum){ // if the score is bigger than last max
            maxCount++;
            maximum = scores[i];
        }
        else if(scores[i] < minmum){ // if the core is less than last min
            minCount++;
            minmum = scores[i];
        }
        else if(scores[i]=== maximum){
            maximum = scores[i];
        }
        else if(scores[i]=== minmum){
            minmum = scores[i]
        }
    }
    resultArr.push(maxCount);
    resultArr.push(minCount);
    return resultArr;
}

let result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
let res1 = breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
console.log(res1);
