function solve(...args){
    const num = args[0];
    const strNum=num.toString();
    const power=strNum.length;

    let sum=0;
    for(let digit of strNum){
        sum+=Math.pow(Number(digit),power);
}
let result=null;
if (sum==num){
    result = num+ "Is an armstrong number";
}else{
    result = num+ "Is not an armstrong number";
}
return result;
}
console.log(solve(53;))
