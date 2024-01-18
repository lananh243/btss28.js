let number = [1,2,3,4,5,6,7,8];

for(let i=number.length; i >= 0; i--){
    if(number[i] % 2 === 1 ){
        number.splice(i,1);
    } 
}
console.log("Mảng sau khi xóa là:",number);