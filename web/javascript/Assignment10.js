function calculation() {

    var x = Number(document.getElementById("first").value);
    var y = Number(document.getElementById("second").value);
    var op = String(document.getElementById("operator").value);
    var ans;
    switch (op) {
        case '+': ans = x + y;
            break;
        case '-': ans = x - y;
            break;
        case '*': ans = x * y;
            break;
        case '/': ans = x / y;
            break;
            default : ans = 0;
    }

    document.getElementById("answer").innerHTML = String(ans);
}



function reset(){
    location.reload();
    //document.getElementById("myform").reset();
}