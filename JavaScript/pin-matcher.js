// Generating a 4 Digit Random number
document.getElementById("btn-generate-number").addEventListener("click", function () {
    const randomNumber = Math.floor((Math.random() * 9000) + 1000);
    setInputValueToElement("random-number-field", randomNumber);
})



// clear all button
document.getElementById("btn-clear-all").addEventListener("click", function () {
    setInputValueToElement("display-field", "");
})

// add number to the display after pressing the number on the number pad
// number-0
document.getElementById("number-0").addEventListener("click", function () {
    addNumberToDisplay("number-0");
})
// number-0
document.getElementById("number-1").addEventListener("click", function () {
    addNumberToDisplay("number-1");
})
// number-0
document.getElementById("number-2").addEventListener("click", function () {
    addNumberToDisplay("number-2");
})
// number-0
document.getElementById("number-3").addEventListener("click", function () {
    addNumberToDisplay("number-3");
})
// number-0
document.getElementById("number-4").addEventListener("click", function () {
    addNumberToDisplay("number-4");
})
// number-0
document.getElementById("number-5").addEventListener("click", function () {
    addNumberToDisplay("number-5");
})
// number-0
document.getElementById("number-6").addEventListener("click", function () {
    addNumberToDisplay("number-6");
})
// number-0
document.getElementById("number-7").addEventListener("click", function () {
    addNumberToDisplay("number-7");
})
// number-0
document.getElementById("number-8").addEventListener("click", function () {
    addNumberToDisplay("number-8");
})
// number-
document.getElementById("number-9").addEventListener("click", function () {
    addNumberToDisplay("number-9");
})