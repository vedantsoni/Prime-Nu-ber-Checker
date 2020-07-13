function checkPrime(number){

    var output = {}
    number = parseInt(number)

    if(Number.isInteger(number) && number >= 0 && number != undefined){

        output["prime"] = ""
        output["notPrime"] = ""
    
    }

    if(number <= 1){
        
            output.notPrime = number + " is NOT a prime number";
            return output
        } 

    if(number == 2){

        output.prime = number + " is a prime number"
        return output

    }

    else{

        for(var i=2; i < number; i++){

            if(number % i == 0){

                output.notPrime = number + " is not a prime number"
                return output
            }
        }

        output.prime = number + " is a prime number"
        return output
    }
}

function totalAttempts() {
    return "attempts"
}

//DOM
document.querySelector('button').addEventListener('click', (event)=>{        

    var inputNumber = parseInt(document.getElementById("primeNumber").value)
    var error =  document.getElementById("errortext"); error.textContent = ""
    if(inputNumber===undefined || inputNumber ===null || isNaN(inputNumber)){        

        error.textContent = "Error: No input provided/Number not valid"
             
    }
    else if(inputNumber < 0){

        error.textContent = "Error: Number cannot be negative!"
    }
    
    else{
        
            const getNumber = parseInt(inputNumber);
            const output = checkPrime(getNumber);
            var list = document.getElementById(totalAttempts()); 


            if(output.prime!=undefined && output.prime!=null && output.prime != ""){
                list.innerHTML = list.innerHTML + '<li><span class="is-prime"> ' + output.prime + '</span></li>'        
            }
            if(output.notPrime!=undefined && output.notPrime!=null && output.notPrime != ""){
                list.innerHTML = list.innerHTML + '<li><span class="not-prime"> ' + output.notPrime + '</span></li>'           
            }
            document.getElementById("primeNumber").value =""
        }
                     
            
});

