let ch = "Heleh";
if(ch.length%2==0){
    console.log(ch[ch.length/2-1],ch[ch.length/2])
}
else{
    console.log(ch[Math.floor(ch.length/2)]);
}