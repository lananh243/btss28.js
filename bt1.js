let a = [1,5,-1,2,3,4,-5];
let max = a[0];
let min = a[0];
for(let i=1; i<a.length; i++){
    if(a[i] > max){
        max = a[i];
    }
    if(a[i] < min){
        min = a[i];
    }
}
console.log("Phần tử lớn nhất trong mảng là: " +max);
console.log("Phần tử nhỏ nhất trong mảng là: " +min);