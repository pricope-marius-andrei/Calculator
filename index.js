//Screen input output
const ioScreen = document.getElementById("screen");
const inputText = document.getElementById("input");
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
const modButton = document.getElementById("modButton");

var total = 0.0;
var plusOp = false;
var multyOp = false;
var minusOp = false;
var divOp = false;
var modOp = false;
var firstTime = true;
var invalidFormat = false;

function Equal()
{
    firstTime = false;
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
        else if(ioScreen.value.substring(0,1) === "X")
        {
            console.log(total);
            total *= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
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
                invalidFormat = true;
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
    else if(modOp)
    {   
        total = total % parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
        modOp = false;
    }
    else if(minusOp)
    {
        total += parseFloat(ioScreen.value);
        minusOp = false;
    }
    if(ioScreen.value !== "Cannot divide by zero")
        ioScreen.value = total;
    total = 0;
}

function IsOperation(input,a,b,c,d)
{
    return input === a || input === b || input === c || input === d;
}

function AddNumberCodition(input)
{
    return (plusOp || multyOp || minusOp || divOp || modOp || input === "0" || firstTime) && invalidFormat === false;
}

/**
 * Buttons events on click
 */
oneButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
        if(ioScreen.value === "0") {
            ioScreen.value = "1";
        }
        else
            ioScreen.value += "1";

        if(inputText.value === "0") {
                inputText.value = "1";
            }
            else {
                    inputText.value += "1";  
            }
    }
})

twoButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "2";
    else
        ioScreen.value += "2";

    if(inputText.value === "0") {
            inputText.value = "2";
        }
        else
            inputText.value += "2";
    }
})

threeButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "3";
    else
        ioScreen.value += "3";

    if(inputText.value === "0") {
            inputText.value = "3";
        }
        else
            inputText.value += "3";
    }
})

fourButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "4";
    else
        ioScreen.value += "4";

    if(inputText.value === "0") {
            inputText.value = "4";
        }
        else
            inputText.value += "4";
    }
})

fiveButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "5";
    else
        ioScreen.value += "5";
    
    if(inputText.value === "0") {
            inputText.value = "5";
        }
        else
            inputText.value += "5";
    }
})

sixButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "6";
    else
        ioScreen.value += "6";
    
    if(inputText.value === "0") {
            inputText.value = "6";
        }
        else
            inputText.value += "6"; 
    }   
})

sevenButton.addEventListener("click", function(){
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "7";
    else
        ioScreen.value += "7";
    
    if(inputText.value === "0") {
            inputText.value = "7";
        }
        else
            inputText.value += "7";  
    } 
})

eightButton.addEventListener("click", function(){
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "8";
    else
        ioScreen.value += "8";
    
    if(inputText.value === "0") {
            inputText.value = "8";
        }
        else
            inputText.value += "8"; 
    }   
})

nineButton.addEventListener("click", function(){

    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0")
        ioScreen.value = "9";
    else
        ioScreen.value += "9";
    
    if(inputText.value === "0") {
            inputText.value = "9";
        }
        else
            inputText.value += "9";  
    }  
})

zeroButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
    if(ioScreen.value === "0" || ioScreen.value.substring(0,1) === "-" && ioScreen.value.length === 1)
        ioScreen.value = "0";
    else
        ioScreen.value += "0";

        if(inputText.value === "0") {
            inputText.value = "0";
        }
        else
            inputText.value += "0";
    }
})

floatButton.addEventListener("click", function() {
    if(AddNumberCodition(inputText.value)) {
        const characters = ioScreen.value.split('');
        var haveDigits = false;
        var noDots = true;
        for(let i = 0 ; i < characters.length; i++)
        {
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
            inputText.value += ".";
        }
    }
})


deleteButton.addEventListener("click", function() {
    var input = ioScreen.value;
    var input2 = inputText.value;
    ioScreen.value = input.substring(0,input.length - 1);
    inputText.value = input2.substring(0,input2.length - 1);

    if(ioScreen.value === '')
    {
        ioScreen.value = "0";
    }

    if(inputText.value === '')
    {
        inputText.value = "0";
    }
})

clearButton.addEventListener("click" ,function() {
    ioScreen.value = "0";
    inputText.value = "0";
    invalidFormat = false;
    firstTime = true;
})

radButton.addEventListener("click", function(){
    if(AddNumberCodition(inputText.value)) {
        if(minusOp && firstTime)
        {
            ioScreen.value = "Invalid number format";
            invalidFormat = true;
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
            else {
                ioScreen.value = Math.sqrt(parseFloat(ioScreen.value));
            }
        }
        if(firstTime) {
            inputText.value = "rad(" + inputText.value + ")";
            firstTime = false;
        }
        else{
            const characters = inputText.value.split('');
            console.log(characters);
            var position;
            for(let i = inputText.value.length - 1; i >= 0; i--){
                if(characters[i] === "+" || characters[i] === "-" || characters[i] === "/" || characters[i] === "X" || characters[i] === "%")
                {
                    position = i;
                    i = -1;
                }
            }
            inputText.value = inputText.value.substring(0,position + 1) + "rad(" + inputText.value.substring(position + 1, inputText.value.length) + ")";
        }
    }
}
)

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
        inputText.value = "(" + inputText.value + ")^2";
    }
)

plusButton.addEventListener("click", function() {
   plusOp = true;
   var input = inputText.value.substring(inputText.value.length-1,inputText.value.length);
   if(input !== "+")
   {
       if(IsOperation(input,"/","X","%","-"))
       {
           inputText.value = inputText.value.substring(0,inputText.value.length - 1) + "+";
       }
       else {
            inputText.value += "+";
       }
   }
   total += parseFloat(ioScreen.value);
   ioScreen.value = "0";
})

multyButton.addEventListener("click", function() {
    minusOp = false;
    if(multyOp === false) {
        var input = inputText.value.substring(inputText.value.length-1,inputText.value.length);
        if(divOp || modOp) {
            divOp = false;
            modOp = false;
        }

            if(ioScreen.value.substring(0,1) === "X")
                total *= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
            else {
                total += parseFloat(ioScreen.value);
            }

        console.log(total);
        ioScreen.value = "X";
        if(IsOperation(input,"/","+","%","-"))
            inputText.value = inputText.value.substring(0,inputText.value.length - 1) + "X";
        else{
            inputText.value += "X";
        }
    }
    multyOp = true;
})

minusButton.addEventListener("click", function() {
    minusOp = true;
    var input = inputText.value.substring(inputText.value.length-1,inputText.value.length);
    if(!multyOp && !divOp) {
        total += parseFloat(ioScreen.value);
    }
    if(modOp)
    {
        modOp = false;
    }
    ioScreen.value = "-";
    if(inputText.value !== "0") {
        if(!IsOperation(input,"-","+","-","+")) {
            inputText.value = inputText.value + "-";
        }
        else
        {
            inputText.value = inputText.value.substring(0,inputText.value.length - 1) + "-";
        }
    }
    else {
        inputText.value = "-";
    }
})

divButton.addEventListener("click" ,function() {
    var input = inputText.value.substring(inputText.value.length-1,inputText.value.length); 
    if(divOp === false) {
        if(multyOp || modOp) {
            multyOp = false;
            modOp = false;
        }

        if(ioScreen.value.substring(0,1) === "/")
            total /= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
        else 
            total += parseFloat(ioScreen.value);
        ioScreen.value = "/";
        if(!IsOperation(input,"+","-","%","*")) {
            inputText.value += "/";
        }
        else{
            inputText.value =inputText.value.substring(0,inputText.value.length - 1) + "/";
        }
    }
    divOp = true;
})

modButton.addEventListener("click", function(){
   
    var input = inputText.value.substring(inputText.value.length - 1, inputText.value.length);
    if(modOp === false) {
        if(multyOp || divOp) {
            multyOp = false;
            divOp = false;
        }
        total += parseFloat(ioScreen.value);
        ioScreen.value = "%";
        if(!IsOperation(input,"-","+","/","X"))
            inputText.value += "%";
        else{
            inputText.value =  inputText.value.substring(0,inputText.value.length - 1) + "%";
        }
    }
    modOp = true;
})

equalButton.addEventListener("click", function() {
    Equal();
})