function staircase(n) {
    // Write your code here
    for(let i=n;i>0;i--){
        console.log(`${" ".repeat(i-1)}${"#".repeat(n-(i-1))}`)
    }
}
staircase(6);
staircase(5)
staircase(2)
staircase(1)