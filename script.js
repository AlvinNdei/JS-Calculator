const display=document.getElementById("display");
const π=3.14159;

function addToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    
}
function calculatesqrt(){
    try{
        display.value=eval(Math.sqrt(display.value));
    }
    catch(error){
        display.value('Error');
    }
}