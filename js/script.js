function init(){
    document.getElementById("entrybutton").addEventListener("click", alertText);
    function alertText() {
        var text = document.getElementById("entryinput").value;
        document.getElementById("textoutput").innerHTML = text;
        alert("Naomi Hinojosa-Marquez: " + text);
    }
}
    window.addEventListener('load', init);