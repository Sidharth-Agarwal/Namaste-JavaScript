function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log()
            {
                console.log(a,b,c);
            }
        }
        let a = 10;
        return inner;
    }
    return outer;
}
outest()("Hello world!")()