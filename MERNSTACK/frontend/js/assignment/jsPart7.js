/**
 * Qs1 Write an arrow function named arrayAverage that accepts an array of nnumbers  and returns  the average of the  those numbers.
 */

const arrayAverage=(arrNum)=>{
    let sum=0;
    for(let i=0;i<arrNum.length;i++){
        sum+=arrNum[i];
    }
    return sum/arrNum.length;
}

let arrNum=[12,56,79.78,6,85];
console.log("Num Average:",arrayAverage(arrNum));

//Qs2

const isEven=num=>{
    if(num%2==0){
        return "Even";
    }else{
        return "Not Even";
    }
}

console.log(isEven(5));

//Qs3
const object={
message:'Hello, World!',
logMessage(){
    console.log(this.message);
}
};
setTimeout(object.logMessage(),1000);

//Qs4

let length=4;
function callback(){
    console.log(this.length);
}

const object1={
    length:5,
    method(callback){
        callback();
    }
};

object1.method(callback,1,2);