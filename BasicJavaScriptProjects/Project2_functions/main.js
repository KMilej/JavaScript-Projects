function buttonPress() {
    var str = "changed!";
    document.getElementById("Button_Text").innerHTML = str;
}

function myFunction() {
    var text1 = "I am learning";
    text1 += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = text1;
}

const myElement = document.getElementById("Concatenate");           
myElement.style.color = "teal";                                    

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}