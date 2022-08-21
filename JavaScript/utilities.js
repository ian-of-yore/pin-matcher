// Convert innerText to Integer value
function collectInnerTextAsInteger(input) {
    const objectValue = document.getElementById(input);
    const objectValueString = objectValue.innerText;
    return objectValueInt = parseInt(objectValueString);
}

// Set Innertext to an element
function setInnertextToElement(elementId, objectValue) {
    const element = document.getElementById(elementId);
    return element.innerText = value;
}

// Collect input value and convert it to integer
function collectInputValueAsInteger(objectId) {
    const objectValue = document.getElementById(objectId);
    const objectValueString = objectValue.value;
    return objectValueInt = parseInt(objectValueString);
}

// set inputValue to an element
function setInputValueToElement(objectId, objectValue) {
    const element = document.getElementById(objectId);
    return element.value = objectValue;
}