// let str = "   js  hello    b";
// let res ="";
// for(let ch of str){
//     if(ch == " ")continue;
//     res =res+ch;
// }

function remov(str){
    let i=0;
    let j=str.length-1;

    while(str[i]==" "){
        i++
    }
    while(str[j]==" "){
        j--
    }
    let res=""
    for(let k=i;k<=j;k++){
        res=res+str[k];
    }
    console.log(res);

}

remov(" hllo World ");