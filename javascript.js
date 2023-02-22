function perfect() {
    var n = document.getElementById('num').value;
    sum = 0;

    for (i = 1; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i;

        }

    }
    if (sum == n) {
        document.write("it is a perfect number");
    }
    else {
        document.write("it is not a perfect number");
    }

}

function factorial() {
    var f = document.getElementById('num').value;
    var fact = 1;
    i = 1;

    do {
        fact = fact * i;
        i++;
    } while (i <= f);
    alert("the factorial is:" + fact);
}


function fibo(num) {
    var a, b, c, i, r;
    var res = "";
    r = document.getElementById('num').value;
    a = -1;
    b = 1;
    i = 1;

    while (i <= r) {
        c = a + b;

        a = b;
        b = c;
        i++;
        document.write(c + "  ");


    }


}
