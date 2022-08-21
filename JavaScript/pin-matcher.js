// Generating a 4 Digit Random number
document.getElementById("btn-generate-number").addEventListener("click", function () {
    const randomNumber = Math.floor((Math.random() * 9000) + 1000);
    setInputValueToElement("random-number-filed", randomNumber);
})