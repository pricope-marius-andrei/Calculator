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
const floatButton = document.getElementById("floatButton");
//Operations
const multyButton = document.getElementById("multyButton");
const deleteButton = document.getElementById("deleteButton");
const equalButton = document.getElementById("equalButton");
const minusButton = document.getElementById("minusButton");
const divButton = document.getElementById("divButton");
const clearButton = document.getElementById("clearButton");
const radButton = document.getElementById("radButton");
const powButton = document.getElementById("powButton");

var total = 0.0;
var plusOp = false;
var multyOp = false;
var minusOp = false;
var divOp = false;

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

floatButton.addEventListener("click", function() {
   const characters = ioScreen.value.split('');
   var haveDigits = false;
   var noDots = true;
   for(let i = 0 ; i < characters.length; i++)
   {
       console.log(characters[i]);
       if(Number.isInteger(parseInt(characters[i])))
       {
           haveDigits = true;
       }

       if(characters[i] === ".")
       {
           noDots = false;
       }
   }

   if(haveDigits && noDots === true)
   {
       ioScreen.value += ".";
   }
})


deleteButton.addEventListener("click", function() {
    var input = ioScreen.value;
    ioScreen.value = input.substring(0,input.length - 1);

    if(ioScreen.value === '')
    {
        ioScreen.value = "0";
    }
})

clearButton.addEventListener("click" ,function() {
    ioScreen.value = "0";
})

radButton.addEventListener("click", function(){
    if(minusOp)
    {
        ioScreen.value = "Invalid number format";
        minusOp = false;
    }
    else{
        var number;
        if(multyOp || divOp) {
            number = parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
            if(multyOp) {
                ioScreen.value = "X" + Math.sqrt(number);;
            }
            else{
                ioScreen.value = "/" + Math.sqrt(number);;
            }
        }
    }
})

powButton.addEventListener("click", function() {
    var number;
    if(multyOp || divOp) {
        number = parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
        if(multyOp) {
            ioScreen.value = "X" + number * number;
        }
        else{
            ioScreen.value = "/" + number * number;
        }
    }
    else {
        number = parseFloat(ioScreen.value);
        ioScreen.value = number * number;
    }   
})

plusButton.addEventListener("click", function() {
   plusOp = true;
   total += parseFloat(ioScreen.value);
   ioScreen.value = "+";
})

multyButton.addEventListener("click", function() {
    multyOp = true;
    if(ioScreen.value.substring(0,1) === "X")
        total *= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
    else 
        total += parseFloat(ioScreen.value);
    ioScreen.value = "X";
})

minusButton.addEventListener("click", function() {
    minusOp = true;
    if(!multyOp && !divOp)
        total += parseFloat(ioScreen.value);
    ioScreen.value = "-";
})

divButton.addEventListener("click" ,function() {
    divOp = true;
    if(ioScreen.value.substring(0,1) === "/")
        total /= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
    else 
        total += parseFloat(ioScreen.value);
    ioScreen.value = "/";
})

equalButton.addEventListener("click", function() {
    if(plusOp) {
        total += parseFloat(ioScreen.value);
        plusOp = false;
    }
    else if(multyOp)
    {
        if(minusOp && ioScreen.value.substring(0,1) !== "X")
        {
            total *= parseFloat(ioScreen.value);
            minusOp = false;
        }
        else {
            total *= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
        }
        multyOp = false;
    }
    else if(divOp)
    {
        if(minusOp && ioScreen.value.substring(0,1) !== "/")
        {
            if(parseFloat(ioScreen.value) === 0.0)
            {
                ioScreen.value = "Cannot divide by zero";
            }
            else {
                total /= parseFloat(ioScreen.value);
            }
            minusOp = false;
        }
        else {
            if(parseFloat(ioScreen.value.substring(1,ioScreen.value.length)) === 0.0)
            {
                ioScreen.value = "Cannot divide by zero";
            }
            else {
                total /= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
            }
        }
        divOp = false;
    }
    else if(minusOp)
    {
        total += parseFloat(ioScreen.value);
        minusOp = false;
    }
    if(ioScreen.value !== "Cannot divide by zero")
        ioScreen.value = total;
    total = 0;
})