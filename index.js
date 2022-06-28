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
const changerButton = document.getElementById("changerButton");
const subButton = document.getElementById("subButton");
const clearScreenButon = document.getElementById("clearScreenButton");

var total2 = 0.0;
var total = 0.0;
var plusOp = false;
var multyOp = false;
var minusOp = false;
var divOp = false;
var modOp = false;
var firstTime = true;
var invalidFormat = false;
var floatOp = false;
//Get container with elements of main(div)
var btnConatiner = document.getElementById("calculator");

//Get elements with class name = "active"
var btn = btnConatiner.getElementsByClassName("active");

function Inactive()
{
    for(let i = 0 ; i < btn.length; i++)
    {
        if(btn[i].classList.contains("inactive"))
            btn[i].classList.remove("inactive");
        else{
            btn[i].classList.add("inactive");
        }
    }
}

function Equal()
{
    if(LastCharacterOp()) {
    firstTime = FirstTime();
    if(plusOp || multyOp || divOp || modOp || minusOp || floatOp) {
        floatOp = false;
    if(plusOp) {
        total += parseFloat(ioScreen.value);
        plusOp = false;
    }
    else if(multyOp)
    {
        console.log("da");
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
                Inactive();
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
                invalidFormat = true;
                Inactive();
            }
            else {
                total /= parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
            }
        }
        divOp = false;
    }
    else if(modOp)
    {   
        var value = parseFloat(ioScreen.value.substring(1,ioScreen.value.length));
        console.log(value);
        if(value !== 0) {
            console.log("ye");
            total = total % value;
        }
        else{
            invalidFormat = true;
            ioScreen.value = "Cannot divide by zero";
            Inactive();
        }
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
    equalButton.classList.remove("equalStyle");
}
}

function AddNumberCodition(input)
{
    return (plusOp || multyOp || minusOp || divOp || modOp || input === "0" || firstTime) && invalidFormat === false && ioScreen.value.length < 15;
}

function LastCharacterOp()
{
    var input = inputText.value;
    var character = input.substring(input.length-1,input.length);
    return character !== "-" && character !== "+" && character !== "X" && character !== "/" && character !== "%";
}

function FirstTime()
{
    const characters = inputText.value.split('');
    for(let i = 0; i < characters.length; i++)
    {
        if(!Number.isInteger(characters[i]))
        {
            return false;
        }
    }
    return true;
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
    if(ioScreen.value === "0" || !ioScreen.value.substring(0,1) === "-" && ioScreen.value.length === 1)
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
            if(ioScreen.value === "0" && !firstTime)
                inputText.value += "0.";
            else
                inputText.value += ".";
            ioScreen.value += ".";
        }
        floatOp = true;
    }
})

changerButton.addEventListener("click", function() {
    if(invalidFormat == false && LastCharacterOp())
    {
        if(firstTime === false && !minusOp && !plusOp && !multyOp && !divOp && !modOp)
        {
            inputText.value = "negate(" + inputText.value + ")";
            ioScreen.value = parseFloat(ioScreen.value) * -1;
        }
        else if(minusOp || plusOp || multyOp || divOp || modOp)
        {
            console.log("fdgfgf");
            const characters = inputText.value.split('');
            for(let i = characters.length; i >= 0; i--)
            {
                if(characters[i] === "-")
                {
                    if(multyOp || divOp || modOp)
                    {
                        inputText.value = inputText.value.substring(0,i) + inputText.value.substring(i + 1, inputText.value.length);
                    }
                    else
                        inputText.value = inputText.value.substring(0,i) + "+" + inputText.value.substring(i + 1, inputText.value.length);
                    i = -1;
                }
                else if(characters[i] === "+"){
                    inputText.value = inputText.value.substring(0,i) + "-" + inputText.value.substring(i + 1, inputText.value.length);
                    i = -1;
                }
                else if(characters[i] === "X" || characters[i] === "/" || characters[i] === "%")
                {
                    inputText.value = inputText.value.substring(0,i + 1) + "-" + inputText.value.substring(i + 1, inputText.value.length);
                    i = -1;
                }
            }
            var firstCharacter = ioScreen.value.substring(0,1);
            if(firstCharacter === "X" || firstCharacter === "/" || firstCharacter === "%")
            {
                ioScreen.value = firstCharacter + parseFloat(ioScreen.value.substring(1,ioScreen.value.length)) * -1;
            }
            else {
                ioScreen.value = parseFloat(ioScreen.value) * -1;
            }
        }
        else
        {
            ioScreen.value = parseFloat(ioScreen.value) * -1;
            inputText.value = parseFloat(inputText.value) * -1;
        }
    }
})


deleteButton.addEventListener("click", function() {
    if((plusOp || minusOp || divOp || modOp || multyOp || firstTime || !LastCharacterOp()) && !invalidFormat) {
        var input = ioScreen.value;
        var input2 = inputText.value;

        if(!LastCharacterOp()) {
            inputText.value = inputText.value.substring(0,inputText.value.length-1);
        }

        if(ioScreen.value !== "0")
        {
            if(input2.substring(input2.length-1,input2.length) === "-")
            {
                minusOp = false;
                inputText.value = input2.substring(0,input2.length-1);
                input2 = input2.substring(0,input2.length-1);
                if(input2.substring(input2.length-1,input2.length) === "X")
                {
                    inputText.value = input2.substring(0,input2.length-1);
                }

            }
            else
                inputText.value = input2.substring(0,input2.length-1);
        }
        
        ioScreen.value = input.substring(0,input.length-1);

        if(ioScreen.value === '')
        {
            invalidFormat = false;
            firstTime = true;
            plusOp = false;
            multyOp = false;
            minusOp = false;
            divOp = false;
            modOp = false;
            ioScreen.value = "0";
        }

        if(inputText.value === '')
        {
            invalidFormat = false;
            firstTime = true;
            plusOp = false;
            multyOp = false;
            minusOp = false;
            divOp = false;
            modOp = false;
            inputText.value = "0";
            total = 0;
        }

        if(ioScreen.value === "0" && !firstTime)
        {
            inputText.value = "0";
        }
} 
})

clearButton.addEventListener("click" ,function() {
    ioScreen.value = "0";
    inputText.value = "0";
    invalidFormat = false;
    firstTime = true;
    plusOp = false;
    multyOp = false;
    minusOp = false;
    divOp = false;
    modOp = false;
    if(btn[0].classList.contains("inactive"))
        Inactive();
    equalButton.classList.remove("equalStyle");
})

clearScreenButon.addEventListener("click",function() {
    if(plusOp || multyOp || minusOp || divOp || modOp || firstTime) {
        ioScreen.value = "0";
        invalidFormat = false;
        
        for(let i = inputText.value.length; i >= 0 && LastCharacterOp() ; i--)
        {
            inputText.value = inputText.value.substring(0,inputText.value.length - 1);
        }

        if(divOp || modOp || multyOp)
        {
            inputText.value = inputText.value.substring(1,inputText.value.length-2);
        }

        if(!LastCharacterOp())
        {
            inputText.value = inputText.value.substring(0,inputText.value.length - 1);
        }

        if(inputText.value === '')
        {
            inputText.value = "0";
        }

        if(plusOp)
            plusOp = !plusOp;
        if(multyOp)
            multyOp = !multyOp;
        if(minusOp)
            minusOp = !minusOp;
        if(divOp)
            divOp = !divOp;
        if(modOp)
            modOp = !modOp;
    equalButton.classList.remove("equalStyle");
}
})

radButton.addEventListener("click", function(){
    if(LastCharacterOp() && invalidFormat === false && inputText.value.length < 40) {
        if(parseFloat(ioScreen.value) < 0)
        {
            if(!multyOp && !divOp && !plusOp && !minusOp && !modOp) {
                ioScreen.value = "Invalid number format";
                invalidFormat = true;
                minusOp = false;
                Inactive();
            }
            else if(!firstTime || multyOp || divOp){
                ioScreen.value = -1 * Math.sqrt(parseFloat(ioScreen.value) * -1);
            }
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
        if(!minusOp && !plusOp && !modOp && !divOp && !multyOp) {
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
            if(position !== characters.length - 1)
                inputText.value = inputText.value.substring(0,position + 1) + "rad(" + inputText.value.substring(position + 1, inputText.value.length) + ")";
        }
    }
}
)

powButton.addEventListener("click", function() {
        var number;
        if(!multyOp && invalidFormat === false && !divOp && LastCharacterOp() && inputText.value.length < 40) {
            number = parseFloat(ioScreen.value);
            ioScreen.value = number * number;
            if(!plusOp && !multyOp && !minusOp && !divOp && !modOp && !firstTime)
            {
                inputText.value = "(" + inputText.value + ")^2";
            }
            else if(firstTime) {
                if(number > 0) {
                    inputText.value =  number + "^2";
                }
                else{
                    inputText.value = inputText.value.substring(0,inputText.value.length-1);
                    inputText.value += "+";
                    inputText.value = number * -1 + "^2";
                }
            }
            else {
                while(LastCharacterOp())
                {
                    inputText.value = inputText.value.substring(0,inputText.value.length - 1);
                }
                if(number > 0) {
                    inputText.value = inputText.value + number + "^2";
                }
                else {
                    inputText.value = inputText.value.substring(0,inputText.value.length-1);
                    inputText.value += "+";
                    inputText.value = inputText.value + number * -1 + "^2";
                }
            }
            firstTime = false;
        }
        
})

subButton.addEventListener("click", function() {
    var number;
    if(!multyOp && invalidFormat === false && !divOp && LastCharacterOp() && inputText.value.length < 40) {
        number = parseFloat(ioScreen.value);
        if(number === 0)
        {
            ioScreen.value = "Cannot divide by zero";
            invalidFormat = true;
            Inactive();
        }
        else{
            var divided = 1 / number;
            ioScreen.value = divided;
            if(!plusOp && !multyOp && !minusOp && !divOp && !modOp && !firstTime)
            {
                inputText.value = "1/(" + inputText.value + ")";
            }
            else if(firstTime) {
                if(number > 0) {
                    inputText.value = "1/" + number;
                }
                else{
                    inputText.value = "1/" + number * -1;
                }
            }
            else {
                while(LastCharacterOp())
                {
                    inputText.value = inputText.value.substring(0,inputText.value.length - 1);
                }
                if(number > 0) {
                    inputText.value = inputText.value + "1/" + number;
                }
                else {
                    inputText.value = inputText.value + "1/" + number*-1;
                }
            }
        }
        firstTime = false;
    }
})

plusButton.addEventListener("click", function() {
    if(!(minusOp && firstTime)) {
   if(plusOp === false && (!floatOp || floatOp && firstTime) && invalidFormat === false && !minusOp && !multyOp && !divOp && !modOp && inputText.value.length < 40) {
        var value;
        var input = inputText.value.substring(inputText.value.length-1,inputText.value.length);
        if(input !== "+")
        {
            inputText.value += "+";
            value = parseFloat(ioScreen.value);
            ioScreen.value = "0";
            
        }
        total += value;
        console.log(total);
        equalButton.classList.add("equalStyle");
        firstTime = false;
        plusOp = true;
    }
}
   
})

multyButton.addEventListener("click", function() {
    if(!(minusOp && firstTime)) {
    if(multyOp === false && (!floatOp || floatOp && firstTime) && !plusOp && !minusOp && invalidFormat === false && !divOp && !modOp && inputText.value.length < 40) {
        if(divOp || modOp) {
            divOp = false;
            modOp = false;
        }
        
        /*if(plusOp || minusOp)
        {
            total2 = parseFloat(ioScreen.value);
        }
        else*/
             total += parseFloat(ioScreen.value);
        ioScreen.value = "X";
        if(plusOp || minusOp || firstTime)
                inputText.value += "X";
            else{
                inputText.value = "(" + inputText.value + ")X";
            }
        multyOp = true;
        equalButton.classList.add("equalStyle");
    }
    }
})

minusButton.addEventListener("click", function() {
    if(!plusOp && invalidFormat === false && (!floatOp || floatOp && firstTime) && !minusOp && inputText.value.length < 40) {
        var input = inputText.value.substring(inputText.value.length-1,inputText.value.length);
        if(!multyOp && !divOp && !isNaN(ioScreen.value)) {
            total += parseFloat(ioScreen.value);
        }
        if(modOp)
        {
            modOp = false;
        }
        ioScreen.value = "-";
        inputText.value = inputText.value + "-";
        minusOp = true;
       
   
    if(inputText.value === "-" && inputText.value.length === 1)
    {
        firstTime = true;
    }
    else{
        firstTime = false;
        equalButton.classList.add("equalStyle");
    } 
}
})

divButton.addEventListener("click" ,function() {
    if(!(minusOp && firstTime) && (!floatOp || floatOp && firstTime) && !plusOp && !minusOp && invalidFormat === false && inputText.value.length < 40) {
    if(divOp === false && !multyOp && !modOp) {
        if(multyOp || modOp) {
            multyOp = false;
            modOp = false;
        }

        /*if(plusOp || minusOp) {
            total2 = parseFloat(ioScreen.value)
        }
        else */
            total += parseFloat(ioScreen.value);
        
        ioScreen.value = "/";
        if(plusOp || minusOp || firstTime)
            inputText.value += "/";
        else{
            inputText.value = "(" + inputText.value + ")/";
        }
        divOp = true;
        equalButton.classList.add("equalStyle");
    }
}
})

modButton.addEventListener("click", function(){
    if(!(minusOp && firstTime) && (!floatOp || floatOp && firstTime) && !plusOp && !minusOp && invalidFormat === false && inputText.value.length < 40) {
    var input = inputText.value.substring(inputText.value.length - 1, inputText.value.length);
    if(modOp === false && !divOp && !multyOp) {
        if(multyOp || divOp) {
            multyOp = false;
            divOp = false;
        }
        /*if(plusOp || minusOp)
        {
            total2 = parseFloat(ioScreen.value);
        }
        else*/
            total += parseFloat(ioScreen.value);
        ioScreen.value = "%";
        if(plusOp || minusOp || firstTime)
                inputText.value += "%";
            else{
                inputText.value = "(" + inputText.value + ")%";
            }
        }
        modOp = true;
        equalButton.classList.add("equalStyle");
        firstTime = false;
    }
}
)

equalButton.addEventListener("click", function() {
    Equal();
})

