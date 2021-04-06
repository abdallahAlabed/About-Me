'use strict';

let q = "";

let q1 = "";

let q2 = "";

let q3 = "";

let q4 = "";

let q5 = "";

let mark = 0;

let score = 0;

let number = 0;

let randomNumber = Math.floor((Math.random() * 10) + 1);

let question = new Array("Rachel Green","Emily Waltham","Carol Willick");

let namee = prompt("what is your namee ", "abdallah");

isRghit();

function isRghit() {
    q = prompt("do like Friends series", "yes,no");

    if (q.toLowerCase() == "yes" || q.toUpperCase() == "Y") {

        mark++;

        console.log("how dose not ");

        alert("how dose not ");

        isRghit1();


        function isRghit1() {
            q1 = prompt("is monica geller word i know", "yes,no");

            if (q1.toLowerCase() == "yes" || q1.toUpperCase() == "Y") {

                mark++;

                console.log("we all know that");

                alert("we all know that");

                isRghit2();

            } else {

                console.log("you are wrong");

                alert("you are wrong");

                isRghit1();


            }
        }

        function isRghit2() {
            q2 = prompt("is ross geller word i am fine", "yes,no");

            if (q2.toLowerCase() == "yes" || q2.toUpperCase() == "Y") {

                mark++;

                console.log("and he is crying after it");

                alert("and he is crying after that");

                isRghit3();

            } else {

                console.log("you are wrong");

                alert("you are wrong");

                isRghit2();

            }
        }

        function isRghit3() {
            q3 = prompt("did rachel and ross was on a break", "yes,no");

            if (q3.toLowerCase() == "yes" || q3.toUpperCase() == "Y") {

                mark++;

                console.log("of course");

                alert("of course");

                isRghit4();

            } else {

                console.log("think again");

                alert("think again");

                isRghit3();

            }
        }

        function isRghit4() {
            q4 = prompt("Is how you doing sentence that joey  ues it when he want to catch a girl", "yes,no");

            if (q4.toLowerCase() == "yes" || q4.toUpperCase() == "Y") {

                mark++;

                console.log("and its work every time");

                alert("and its work every time");

                isRghit5();

            } else {

                console.log("you dont know anything");

                alert("you dont know anything");

                isRghit4();


            }
        }
    } else {

        console.log("OMG");

        alert("you are not welcome her");

        isRghit();


    }
}

function isRghit5() {
    for (let index = 0; index < 4; index++) {

        number = parseInt(prompt("try to guess the number between 0 - 10 ", 0));

        if (number == randomNumber) {
            alert("excellent " + namee);
            mark++;
            break;
        } else if (number < randomNumber) {

            alert("try again " + namee + " is bigger than this");

            score++;

        } else {

            alert("try again " + namee + " is smaller than this");

            score++;

        }


    }
}


let i =0;

while(i<6){
    q5 = prompt("what is the name of ross wives ? ");

    for (let index = 0; index < question.length; index++) {
        if(q5==question[index]){
            alert("Hello " + namee + " your guess is right  ");
            mark++;
            i = 6;
            break;
        }
        
            
        
        
    }
    i++;

}

console.log("Hello " + namee + " your right answer 7/" + mark);

alert("Hello " + namee + " your right answer 7/" + mark);

if (score != 0) {

    console.log("Hello " + namee + " your wrnog guess    4/" + score);

    alert("Hello " + namee + " your wrnog guess    4/" + score);

} else {

    console.log("Hello " + namee + " excellent job you do it from the first time");

    alert("Hello " + namee + " excellent job you do it from the first time");
}


document.write("<h3>Hello " + namee + "!</h1><p>Have a nice day!</p>");