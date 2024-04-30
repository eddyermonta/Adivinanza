
// randomMethod
const randomNumber = Math.floor(Math.random()*100) + 1;

// messages
const messageHigh = ":) Your guess is too high, please try again.";
const messageLow = ":) Your guess is too low, please try again."
const messageCongratulations = "Congratulations!!";
const messageError = "Please enter a valid number between 1 and 100.";

document.addEventListener('DOMContentLoaded',function(){
    const elementInput = document.getElementById("numberEntryId");
    const elementButton =document.querySelector('button');
    let elementMessage = document.getElementById('messageId');
    elementMessage.style.color = "red";
    elementInput.focus();

    function clearMessage(){
        setTimeout(() => {
            elementMessage.innerText = "";
        },300);
    }

    elementInput.addEventListener('keydown',(e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            elementButton.click();
        }
    });

    elementButton.addEventListener("click",()=>{
        let numberUser = parseInt(elementInput.value);
        // number in range 1 - 100
        if(numberUser > 0 && numberUser <= 100 && !(isNaN(numberUser))){
            // number correct
            let message = (randomNumber == numberUser)
                ? (()=>{
                    elementInput.disabled = true;
                    elementMessage.style.color = "green";
                    return messageCongratulations;
                })()
                // number incorrectly
                : (randomNumber < numberUser)
                    ? messageHigh
                    : messageLow
                ;
            elementInput.value = "";
            elementInput.focus();
            elementMessage.innerText = message;

            // clearScreen
            if(message === messageHigh || message === messageLow){
                clearMessage();
            }

        }else{
            //incorrectly formatted message
            elementMessage.innerText = messageError;
            clearMessage();
        }
    });
});
