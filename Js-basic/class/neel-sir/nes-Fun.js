var num = 100;
function one(){
    num = 1;
    clg(num);
    function Two(){
        num = 10;
        clg(num);
        function Three(){
            num = 45;
            clg(num);
        }
    }
}
console.log(clg(num));
