'use strict';

let mark = 0;

let name = prompt("what is your name ", "abdallah");

let q = prompt("do like Friends series", "yes,no");

if (q.toLowerCase() == "yes" || q.toUpperCase() == "Y") {

    mark++;

    console.log("how dose not ");

    alert("how dose not ");

    let q1 = prompt("is monica geller word i know", "yes,no");

    if (q1.toLowerCase() == "yes" || q1.toUpperCase() == "Y") {

        mark++;

        console.log("we all know that");

        alert("we all know that");

    } else {

        console.log("you are wrong");

        alert("you are wrong");

    }

    let q2 = prompt("is ross geller word i am fine", "yes,no");

    if (q2.toLowerCase() == "yes" || q2.toUpperCase() == "Y") {

        mark++;

        console.log("and he is crying after it");

        alert("and he is crying after that");

    } else {

        console.log("you are wrong");

        alert("you are wrong");

    }

    let q3 = prompt("did rachel and ross was on a break", "yes,no");

    if (q3.toLowerCase() == "yes" || q3.toUpperCase() == "Y") {

        mark++;

        console.log("of course");

        alert("of course");

    } else {

        console.log("think again");

        alert("think again");

    }

    let q4 = prompt("Is how you doing sentence that joey  ues it when he want to catch a girl", "yes,no");

    if (q4.toLowerCase() == "yes" || q4.toUpperCase() == "Y") {

        mark++;

        console.log("and its work every time");

        alert("and its work every time");

    } else {

        console.log("you dont know anything");

        alert("you dont know anything");

    }
} else {

    console.log("OMG");

    alert("you are not welcome her");


}
console.log("Hello " + name + " your right answer 5/" + mark);

alert("Hello " + name + " your right answer 5/" + mark);

document.write("<h3>Hello " + name + "!</h1><p>Have a nice day!</p>");