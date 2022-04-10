function calculator(){
    let operator= prompt("enter operator + - * %");
    const num1= parseFloat(prompt("enter 1st num"));
    const num2= parseFloat(prompt("enter 2nd num"));
     
    switch(operator){
        case "+":
          answer= num1 +num2 ;
          result =(`the ${num1} + ${num2}= ${answer}`);
         break;
         case "-":
            answer= num1 - num2 ;
             result =(`the ${num1} - ${num2}= ${answer}`);
            break;
            case "*":
                answer= num1 * num2 ;
                result =(`the ${num1} * ${num2}= ${answer}`);
               break;
               case "%":
                  answer= num1 % num2 ;
                   result =(`the ${num1} % ${num2}= ${answer}`);
                  break;

    }
    return result;
}
// const ads= document.getElementById("cal").innerHTML=calculator()