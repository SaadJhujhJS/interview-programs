function primenumber(number){
    if(number<2){
        console.log("Number is less then 2 try again");
    }
    // while (limit * limit <= number) {
    //     limit++;
    //   }
    //   limit--; // Go back to the correct integer before crossing sqrt

    for(let i=2;i<Math.sqrt(number);i++){
        if(number%i===0){
            return true;
        }
        else{
            return false;
        }
    }
}
const num=17;
if(primenumber(num)){
    console.log(num, " This is prime number");
}
else{
    console.log(num, " This is not prime number")
}

