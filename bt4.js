let number = [1,2,3,4,5,6,7,8];
let a = [];
let b = [];

for(let i=1; i<number.length; i++){
    if(number[i] % 2 === 0){
        a.push(i);
    }else{
        b.push(i);
    }
}
console.log("Mảng chứa số chẵn là: ",a);
console.log("Mảng chứa số lẻ là: ", b);