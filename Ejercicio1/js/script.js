function calcular(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = document.getElementById("c").value;
    var res;
    switch(c){
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
    }
    document.getElementById("res").value =res.toString();
}
