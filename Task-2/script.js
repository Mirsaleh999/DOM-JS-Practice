function convert() {
    var inputCumle = document.getElementById("textInput").value;
    var tersCumle = "";

    for (var i = inputCumle.length - 1; i >= 0; i--) {
        tersCumle += inputCumle[i];
    }

    document.getElementById("output").innerHTML = tersCumle;
}

document.getElementById("convertButton").addEventListener("click", convert);
