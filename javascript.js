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



function gender() {
    var g = document.getElementById('gen').value;

    if (g == "male") {
        alert("it is a valid gender=male");
    }
    else if (g == "female") {
        alert("it is valid gender=female");
    }
    else {
        alert("invalid gender");
    }
}

function switch1() {
    var s = document.getElementById('gen').value;

    switch (s) {
        case "male":
            alert("valid gender:male");
            break;
        case "female":
            alert("valid gender female:female");
            break;
        default:
            alert("invalid gender");
    }
}

function form() {
    var name = document.fm.uname.value;
    var mail = document.fm.email.value;
    var gen = document.fm.gender.value;
    var address = document.fm.addre.value;
    var dob = document.fm.dob.value;
    var profession = document.fm.prof.value;



    document.write("Name:" + name + "<br>");
    document.write("mail id:" + mail + "<br>");
    document.write("Gender:" + gen + "<br>");
    document.write("Address:" + address + "<br>");
    document.write("Date of Birth:" + dob + "<br>");
    document.write("Profession:" + profession + "<br>");



}
var names = ["vasanth", "vikram", "hari", "vignesh", "venkat", "hemanth","divya"];// 
function friends() {

   
    var input = document.getElementById('name');
    var name = input.value;
    names.push(name);
    input.value = "";
    alert(names+"<br>");
   // for (i = 0; i < names.length; i++) {
     //   document.write(names[i] + "<br>");
    }


function beg() {
    var input = document.getElementById('name');
    var end = input.value;
    names.unshift(end);
    input.value = "";
    //for (i = 0; i < names.length; i++) {
        alert(names[i] + "<br>");
    }




function inbeg() {
    var input = document.getElementById('name');
    var ibeg = input.value;
    names.unshift(ibeg);
   // document.write(names+"<br>");

  //  console.log(dbeg);//
   
   // for (i = 0; i < names.length; i++) {
        alert(names[i] + "<br>");
    }



function dbeg(){
    var input = document.getElementById('name');
    var df = input.value;
    names.shift(df);
   // for (i = 0; i < names.length; i++) {
        alert(names[i] + "<br>");
    }


function dend(){
    var input = document.getElementById('name');
    var de=input.value;
    names.pop(de);
  //  for (i = 0; i < names.length; i++) {
        alert(names[i] + "<br>");
    }



function sorting(){
    var input = document.getElementById('name');
    var sor=input.value;
    names.sort();
   for (i = 0; i < names.length; i++) {
        document.write(names[i] + "<br>");
    }
}



function foreach1(){
    document.displaynames.forEach(names);
}
