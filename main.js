let number1=0;
let number2=0;
sum=()=>{
     calculate("+");
}

function calculate(exp) {
   let tempvalue=document.
    getElementById('textInput').value;
    if (number1===0){
        if(tempvalue!==''){
            number1=tempvalue;
        }else{
            alert('please insert a number!');
            return;
        }

    }
    console.log(exp, number1);
}