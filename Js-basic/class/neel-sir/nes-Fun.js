var num = 100;
function one(){
    num = 1;
    clg(num);
    function Two(){
        num=s;
        clg(num);
        function Three(){
            num = 10;
            clg(num);
        }
    }
}
console.log(clg(num));