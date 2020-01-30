var h3 = document.getElementsByTagName("h3")[0];
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.getElementsByTagName("BODY")[0];
console.log(h3);
console.log(color1);
console.log(color2);
console.log(body);
// body.setAttribute("style", "background: linear-gradient(to right, #00ff00, #ff0000);")
body.style.background = "linear-gradient(to right, #00ff00, #ff0000)";

document.addEventListener("click", setNewGradient)

function setNewGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    //This works, but is kind of a roundabout way of doing it
    if(h3.firstChild !== null) {
        h3.removeChild(h3.firstChild)
    }
    h3.appendChild(document.createTextNode(body.style.background));
    
    // And another way.
    // h3.textContent = body.style.background;
    
    // And... yet another way.  Don't do this. The whole DOM has to 
    // be recreated when you use this.
    // h3.innerHTML = body.style.background;
}

color1.addEventListener("change", function() {
    setNewGradient();
})

color2.addEventListener("change", function() {
    setNewGradient();
})
