
function artir() {
    var width = document.getElementById("widthInput").value;
    var height = document.getElementById("heightInput").value;
    var borderWidth = document.getElementById("borderInput").value;
    var myDiv = document.getElementById("myDiv");

    myDiv.style.width = (200 + parseInt(width)) + "px";
    myDiv.style.height = (200 + parseInt(height)) + "px";
    myDiv.style.borderWidth = borderWidth + "px";
}
