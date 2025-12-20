let str = "15a56665";

for(let ch of str){
    ch = ch.charCodeAt();
    if(ch>=48 &&ch<=57){
        console.log("true");
        break;
    }
    else{
        console.log(false);
        break;
    }
}
