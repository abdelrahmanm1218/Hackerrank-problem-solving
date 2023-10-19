function camelcase(s) {
    // Write your code here
    let count =1;
    let regex= /[A-Z]/g;
    for(let i=1;i <= s.length; i++){
        if(regex.test(s[i])){
            count++;
        }
    }
    // console.log(count);
    return count;
}
camelcase("HelloWorld");
camelcase("saveChangesInTheEditor");