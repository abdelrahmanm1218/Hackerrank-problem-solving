function diagonalDifference(arr) {
    // Write your code here
    let rows= arr.length;
    let cols = arr[0].length;
    let test, leftSum=0,rightSum=0,diff = 0;
    //console.log(rows);
    //console.log(cols);
    arr.forEach((el)=> (el.length == cols)? test = cols : test=-1);
    //console.log(test)
    if(test!=-1 && rows==cols) {
        //calculate left sum
        for(let i=0;i<rows;i++) {
            for(let j=i;j<cols-(cols-1)+i;j++){
                //console.log(arr[i][j]);
                leftSum+=arr[i][j];
            }
        }
        //calculate right sum
        for(let i =rows-1;i>=0;i--){
            for(let j=cols-i-1; j<cols-i ;j++){
                //console.log(arr[i][j]);
                rightSum+=arr[i][j];
            }
        }
        //console.log(leftSum);
        //console.log(rightSum);
        diff = Math.abs(leftSum - rightSum);
        //console.log(diff);
        return diff;
    }
    else {
        return -1;
    }

}
let res =diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
console.log(res);
//[1,2,3],[4,5,6],[9,8,9]
//[1,2],[3,4]
//[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]