function solve(...args){
    const num = args[0];
    const strNum=num.toString();
    const power=strNum.length;

    let sum=0;
    for(let digit of strNum){
        sum+=Math.pow(Number(digit),power);
    }