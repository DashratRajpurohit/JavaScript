// var arr = [1,2,3,4,55,6,7,8,9,100];
// var max=arr[0];
// var max2=arr[0];
//  for (var i = 0; i < arr.length; i++) {
//      if(arr[i]>max){
//          max=arr[i];
//      }
//      for(var j=0;j< arr.length; j++){
//          if(max2<arr[i] && arr[i]<max){
//              max2= arr[i];
//          }
//      }
//      console.log("second max",max2)



// function fun(obj){
//     let sum = 0;
//     for(let char in obj){
//         sum +=obj[char];
//     }
//     return sum;
// }

// var output= fun({
//     a: 10,
//     b: 20,
//     c: 5,
// })
// console.log(output);

function rept(arr1){
    let firstR = 0;
    let lastR = 0;
    for(let i = 0; i<arr1.length;i++){

        let count = 0;

        for(let j = 0; j<arr1.length; j++){
            if(i==j){
                continue;
            }
            else if (arr1[i]===arr1[j]){
                count++;
            }
        }
        if(count>0){
            console.log(arr1[i]);
            return;
        }
    }
    console.log(firstR);
    console.log(lastR);
}

rept([4,5,1,2,1,4,5])

