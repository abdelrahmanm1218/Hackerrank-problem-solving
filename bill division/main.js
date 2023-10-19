function bonAppetit(bill, k, b) {
    // console.log(bill[k]);
    // Write your code here
    let total =0;
    //summing for all total
    bill.forEach((el)=>total+=el);
    console.log(total);
    // anna doesn't eat k so exclude it from total
    total-=bill[k];
    console.log(total);
    // divide total to half because two person payed
    let actualAnnaBill = total/=2;
    console.log(`anna paid (actual): ${actualAnnaBill}`);
    console.log(`anna paid : ${b}`);
    //b=> real anna paid , actualAnnaBill => is what is supposed to pay
    (b === actualAnnaBill)? console.log("Bon Appetit"):console.log(`return to anna: ${Math.abs(b - actualAnnaBill)}`);
}
bonAppetit([2,4,6],2,6);
bonAppetit([3,10,2,9],1,7);
bonAppetit([3,10,2,9],1,12);
