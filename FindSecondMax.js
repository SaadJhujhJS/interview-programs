const number=[12,13,15,25,23,11];
let max=-Infinity;
let secondmax=-Infinity;
for(let i=0;i<number.length;i++){
    const current=number[i];
    if(current>max){
        secondmax=max;
        max=current;
    }
    else if(current>secondmax && current<max){
        secondmax=current
    }
}
console.log("The second maximum number is: ",secondmax)