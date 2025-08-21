let totalAmt=Number(prompt("Enter total amount:"));

if(totalAmt>100){
    let discountedAmt=totalAmt-(totalAmt*0.1);
    console.log("Discounted Total:", discountedAmt);
}

else{
    console.log("No discount applied as amount is less than 100")
}