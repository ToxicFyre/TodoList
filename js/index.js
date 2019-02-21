console.log("Binded correctly");

var i;
var count = 0;

let submitButton = document.getElementsByClassName("submitButton");
submitButton[0].addEventListener("click", (event)=> {
event.preventDefault();
event.currentTarget; //<-- Selects the element that was interacted with --/>
console.log("I clicked the submit");

var li = document.createElement("li");
var inputValue = document.getElementsByClassName("newTodo form-control")[0].value;

var x = document.createElement("INPUT");
x.setAttribute("type","checkbox");
x.setAttribute("class","myCheck");
li.appendChild(x);

var t = document.createElement("LABEL");
var v = document.createTextNode(inputValue);

x.setAttribute("id","check" + count);

t.setAttribute("for", "check" + count);
t.appendChild(v);
li.appendChild(t);

if (inputValue === '') {
    alert("You must write something!");
} else {
    document.getElementById("checklistUL").appendChild(li);
}

count = count + 1;

});  //<-- Javascript doesn't tell us when it doesn't find an elemnt or id or etc --/>

let clearButton = document.getElementsByClassName("clearButton btn-info");
clearButton[0].addEventListener("click", (event)=> {
    event.preventDefault();
    event.currentTarget; //<-- Selects the element that was interacted with --/>
    console.log("I clicked the clear");

    var checks = document.getElementsByClassName("myCheck");

    for (i = 0; i < checks.length; i++) {
        checks[i].checked = false;
    }
});  //<-- Javascript doesn't tell us when it doesn't find an elemnt or id or etc --/>

let markAllButton = document.getElementsByClassName("markAllButton btn-success");
markAllButton[0].addEventListener("click", (event)=> {
    event.preventDefault();
    event.currentTarget; //<-- Selects the element that was interacted with --/>
    console.log("I clicked the markAll");

    var checks = document.getElementsByClassName("myCheck");

    for (i = 0; i < checks.length; i++) {
        checks[i].checked = true;
    }

});  //<-- Javascript doesn't tell us when it doesn't find an elemnt or id or etc --/>

let deleteButton = document.getElementsByClassName("deleteButton btn-danger");
deleteButton[0].addEventListener("click", (event)=> {
    event.preventDefault();
    event.currentTarget; //<-- Selects the element that was interacted with --/>
    console.log("I clicked the delete");


    let node = document.getElementById("checklistUL");

    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }



});  //<-- Javascript doesn't tell us when it doesn't find an elemnt or id or etc --/>

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementsByClassName("newTodo form-control")[0].value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("checklistUL").appendChild(li);
    }
    document.getElementsByClassName("newTodo form-control")[0].value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}