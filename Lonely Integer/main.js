function lonelyinteger(a) {
    // Write your code here
    let counter;
    for(let i =0;i<a.length;i++){
        counter = 0;
        for(let j = 0;j<a.length;j++){
            if(a[j]===a[i]&& i!=j){
                counter++;
            }
        }
        if(counter === 0) {
            return `lonely integer is  =${a[i]}`
        }
    }
}
let res = lonelyinteger([1,2,3,4,3,2,1]);
console.log(res);