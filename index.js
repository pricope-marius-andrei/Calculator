//Screen input output
const ioScreen = document.getElementById("screen");
//Buttons with digits
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const zeroButton = document.getElementById("zeroButton");
const plusButton = document.getElementById("plusButton");
//Operations
const multyButton = document.getElementById("multyButton");
const deleteButton = document.getElementById("deleteButton");
const equalButton = document.getElementById("equalButton");
const minusButton = document.getElementById("minusButton");

var total = 0;
var plusOp = false;
var multyOp = false;
var minusOp = false;

/**
 * Buttons events on click
 */
oneButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "1";
    else
        ioScreen.value += "1";
  
})

twoButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "2";
    else
        ioScreen.value += "2";
})

threeButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "3";
    else
        ioScreen.value += "3";
})

fourButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "4";
    else
        ioScreen.value += "4";
})

fiveButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "5";
    else
        ioScreen.value += "5";
})

sixButton.addEventListener("click", function() {
    if(ioScreen.value === "0")
        ioScreen.value = "6";
    else
        ioScreen.value += "6";
})

sevenButton.addEventListener("click", function(){
    if(ioScreen.value === "0")
        ioScreen.value = "7";
    else
        ioScreen.value += "7";
})

eightButton.addEventListener("click", function(){
    if(ioScreen.value === "0")
        ioScreen.value = "8";
    else
        ioScreen.value += "8";
})

nineButton.addEventListener("click", function(){
    if(ioScreen.value === "0")
        ioScreen.value = "9";
    else
        ioScreen.value += "9";
})

zeroButton.addEventListener("click", function() {
    if(ioScreen.value === "0" || ioScreen.value.substring(0,1) === "-" && ioScreen.value.length === 1)
        ioScreen.value = "0";
    else
        ioScreen.value += "0";
})


deleteButton.addEventListener("click", function() {
    var input = ioScreen.value;
    ioScreen.value = input.substring(0,input.length - 1);

    if(ioScreen.value === '')
    {
        ioScreen.value = "0";
    }
})

plusButton.addEventListener("click", function() {
   plusOp = true;
   total += parseInt(ioScreen.value);
   ioScreen.value = "+";
})

multyButton.addEventListener("click", function() {
    multyOp = true;
    if(ioScreen.value.substring(0,1) === "X")
        total *= parseInt(ioScreen.value.substring(1,ioScreen.value.length));
    else 
        total += parseInt(ioScreen.value);
    ioScreen.value = "X";
})

minusButton.addEventListener("click", function() {
    minusOp = true;
    if(!multyOp)
        total += parseInt(ioScreen.value);
    ioScreen.value = "-";
})

equalButton.addEventListener("click", function() {
    if(plusOp) {
        total += parseInt(ioScreen.value);
        plusOp = false;
    }
    else if(multyOp)
    {
        if(minusOp && ioScreen.value.substring(0,1) !== "X")
        {
            total *= parseInt(ioScreen.value);
            minusOp = false;
        }
        else {
            total *= parseInt(ioScreen.value.substring(1,ioScreen.value.length));
        }
        multyOp = false;
    }
    else if(minusOp)
    {
        total += parseInt(ioScreen.value);
        minusOp = false;
    }
    ioScreen.value = total;
    total = 0;
})