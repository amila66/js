let number1=0;
let number2=0;
sum=()=>{
    calculate("+");
}

function calculate(exp) {
    let tempvalue=document.
    getElementById('textInput').value;
    if (isNaN(tempvalue) || tempvalue===''){
        alert('please enter a valid number');
        return;
    }
    if (number1===0){
            number1=tempvalue;
    }
    console.log(exp, number1);
}