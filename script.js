const display = document.getElementById('display')


function appendToDsiplay(input){
    display.value += input;
    console.log(display.value)
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
    } catch(err){
        display.value = "Error"
    }
}