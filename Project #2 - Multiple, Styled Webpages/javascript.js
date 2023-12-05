let answer = prompt("Name a color?");
alert("Press any key to change the color to " + answer);
let answer2 = prompt ("Name another color");
alert("The titles are now " + answer2);

document.getElementById("title").style.backgroundColor = answer2;

document.body.addEventListener("keydown", changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "beige"){
        document.body.style.backgroundColor = answer;
    } else {
     document.body.style.backgroundColor = "beige";
    }
}
var thing = document.createElement("button");
thing.textContent = "Click to change to blue";

thing.addEventListener("click", function(){
    var p = document.getElementById("increase");
    p.setAttribute(
        "style",
        "background-color: blue"
    );
});
document.body.appendChild(thing);

var break1 = document.createElement("br");
document.body.appendChild(break1);

var thing2 = document.createElement("button");
thing2.textContent = "Click to change to red";

thing2.addEventListener("click", function(){
    var p2 = document.getElementById("increase");
    p2.setAttribute(
        "style",
        "background-color: red"
    );
});
document.body.appendChild(thing2);