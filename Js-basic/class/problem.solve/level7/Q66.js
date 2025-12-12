let arr = [1,2,3,4,5,6];
let value = 6;
for(let i=0;i<arr.length;i++){
    if(value==arr[i]){
        console.log(i);
        break;
    }
    else if(i==arr.length-1){
        console.log(-1)
    }
}

