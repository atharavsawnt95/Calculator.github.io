var data="";

function HandleResult(value){
    document.getElementById('Screen').innerHTML=value;
}


function handleNumbers(number){
    data+=number;
    console.log(data);
    HandleResult(data);
}


function handleOperations(operator){
    data+=operator;
    console.log(data);
    HandleResult(data);
}

function clearDisplay(){
    var clear=0;
    data=clear;
    HandleResult("");
    console.log(clear);
    HandleResult(clear);
}


function GetResult(){
    var result=eval(data);
    console.log(result);
    HandleResult(result);
}