let number1=0;
let number2=0;
sum=()=> calculate("+");
mul=()=> calculate("*");
div=()=> calculate("/");
sub=()=> calculate("-");
mod=()=> calculate("%");



function calculate(exp) {
    let tempvalue=Number(document.
    getElementById('textInput').value);

    if (isNaN(tempvalue) || tempvalue===0){
        alert('please enter a valid number');
        return;
    }
    if (number1===0){
            number1=tempvalue;
            document.getElementById('textInput').value=''
        return;
    }else{
        number2=tempvalue;
        document.getElementById('textInput').value=''
    }

    switch (exp){
        case '+':
            console.log(number1+number2);
            break;

        case '-':
            console.log(number1-number2);
            break;

        case '*':
            console.log(number1*number2);
            break;


        case '/':
            console.log(number1/number2);
            break

        case '%':
            console.log(number1%number2);
            break;
    }
}