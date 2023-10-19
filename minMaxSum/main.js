function miniMaxSum(arr) {
    // Write your code here
    let sum = 0,maxSum =0,minSum=0;
    for(let i=0; i < 1; i++){
        for(let j=0; j < arr.length ; j++){
            if(j!==i){
                sum+=arr[j];
            }
        }
    }
    maxSum = sum;
    minSum = sum;
    for(let i=1; i < arr.length; i++){
        sum = 0;
        for(let j=0; j < arr.length ; j++){
            if(j!==i){
                sum+=arr[j];
            }
        }
        if(sum>maxSum){
            maxSum = sum;
        }else if(sum<minSum){
            minSum = sum;
        }
        // console.log(`max sum is = ${maxSum}`);
        // console.log(`min sum is = ${minSum}`);
        // console.log("#####");
    }
    // console.log(`final max sum is = ${maxSum}`);
    // console.log(`final min sum is = ${minSum}`);
    console.log(`${minSum} ${maxSum}`);
}
var x = miniMaxSum([1,2,3,4,5]);
console.log(x)
var x = miniMaxSum([1,3,5,7,9]);
console.log(x)