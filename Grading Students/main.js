// console.log(Math.floor(48));

// //given number
// let i = 48;

// //calculate next whole number divisible by 5 
// let nextNum = Math.ceil(i/5)*5;

// //print next number
// console.log(nextNum);



function gradingStudents(grades) {
    // Write your code here
    let tempArr = [];
    grades.map((el)=> {
        if(el < 37){
            // tempArr.push(el);
            tempArr.push(el);
            
            // console.log(`LESS THAN 37 ${el}`);
        }
        else {
            // console.log(`BIGGER THAN 37 ${el}`)
            let result = el - Math.ceil(el/5)*5;
            if(Math.abs(result)<3){
                // console.log('can be rounded');
                // console.log(`${el} => ${Math.ceil(el/5)*5}`)
                tempArr.push(Math.ceil(el/5)*5);
            }else {
                // console.log(`cannot be rounded`);
                tempArr.push(el);
            }
        }
    });
    return tempArr
}

// var res = gradingStudents([100,10,50,37]);
var res1 = gradingStudents([73,67,38,33]);
console.log(res1);