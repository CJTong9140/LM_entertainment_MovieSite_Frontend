/* 
    Name:               CJ Jingren Tong
    Student Number:     152464194
    Date:               December 12th, 2020
    Website Reference:
        https://www.disneyplus.com/en-ca
        https://www.netflix.com/ca/
    Netlify registered webpage name: http://lmentertainment.netlify.app
    Page: Contact Page JavaScript 
    Task: Part 1.2 Contact Email Form Validation and Submission 
*/

const isValidated = (subscribe, errorSub) =>
{
    let isValidated = true; 
    if(subscribe.value == "")
    {
        isValidated = false; 
        errorSub.innerText = `Sorry, please enter your email for the subscription`; 
    }
    else
    {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!subscribe.value.match(regex))
        {
            isValidated = false; 
            errorSub.innerText = `Sorry, please enter a valid email`; 
        }
        else
        {
            errorSub.innerText = ""; 
        }        
    }
    return isValidated; 
}

const contactValidation = (infos, messageInput, choices, errorMsgs) =>
{
    let isValidated = true; 
    let check = false; 
    /* Error checking for name */
    if(infos[0].value == "")
    {
        isValidated = false; 
        errorMsgs[0].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        const nameFormat = /^[a-z A-Z]+$/;
        if(!infos[0].value.match(nameFormat))
        {
            isValidated = false; 
            errorMsgs[0].innerText = "Please enter a valid name"; 
        }
        else
        {
            errorMsgs[0].innerText = "";
        }
    }

    /* Error checking for email */
    if(infos[1].value == "")
    {
        isValidated = false; 
        errorMsgs[1].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!infos[1].value.match(emailFormat))
        {
            isValidated = false; 
            errorMsgs[1].innerText = "Please enter a valid email address"; 
        }
        else
        {
            errorMsgs[1].innerText = "";
        }
    }

    /* Error checking for address */
    if(infos[2].value == "")
    {
        isValidated = false; 
        errorMsgs[2].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        const addressFormat = /^[a-zA-Z0-9 ,]*$/; 
        if(!infos[2].value.match(addressFormat))
        {
            isValidated = false; 
            errorMsgs[2].innerText = "Please enter a valid address with no special characters. e.g. 22 Example Street OR 11 Example Street, Unit 111"; 
        }
        else if(infos[2].value.length <= 5 || infos[2].value.length >= 50 || !isNaN(infos[2].value))
        {
            isValidated = false; 
            errorMsgs[2].innerText = "Sorry, please enter a valid address"; 
        }
        else
        {
            errorMsgs[2].innerText = "";
        }
    }

    /* Error checking for city */
    if(infos[3].value == "")
    {
        isValidated = false; 
        errorMsgs[3].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        const cityFormat = /^[a-zA-Z .]*$/; 
        if(!infos[3].value.match(cityFormat))
        {
            isValidated = false; 
            errorMsgs[3].innerText = "Please enter a valid city name or choose from the list"; 
        }
        else
        {
            errorMsgs[3].innerText = "";
        }
    }

    /* Error checking for postal code */
    if(infos[4].value == "")
    {
        isValidated = false; 
        errorMsgs[4].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        const postalFormat = /^(\d{5}(-\d{4})?|[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]( )?\d[ABCEGHJ-NPRSTV-Z]\d)$/; 
        if(!infos[4].value.match(postalFormat))
        {
            isValidated = false; 
            errorMsgs[4].innerText = "Please enter a valid postal code with format A1A1B1 or A1A 1B1"; 
        }
        else
        {
            errorMsgs[4].innerText = "";
        }
    }

    /* Error checking for radio button */
    choices.forEach(choice=>{
        if(choice.checked){
            check = true; 
        }
    })

    if(check == false)
    {
        isValidated = false; 
        errorMsgs[5].innerText = "Required* Please choose one selection from the list below";
    }
    else
    {
        errorMsgs[5].innerText=""; 
    }

    /* Error checking for message box */
    if(messageInput.value == "")
    {
        isValidated = false; 
        errorMsgs[6].innerText = "Required* Please enter information for all fields"; 
    }
    else
    {
        if(messageInput.value.length > 400)
        {
            isValidated = false; 
            errorMsgs[6].innerText = "Please enter less than 400 characters in the required field."; 
        }
        else
        {
            errorMsgs[6].innerText = ""; 
        }
    }
    return isValidated; 
}

const displayMsg = (modal) =>
{
    modal.classList.remove("hide"); 
    modal.children[0].innerText = "Thank you for subscribing."; 
}

const display = (modal, input) =>
{
    modal.classList.remove("hide"); 
    modal.children[0].innerText = `Hi ${input.value}, form has been sent. We will get back to you soon`; 
}

const dropdownFilled = (input, error)=>
{
    let validateOrder = true; 

    if(input.value == "")
    {
        validateOrder = false; 
        error.innerText = "Please enter your order number"; 
    }
    else
    {
        const orderFormat = /^[a-zA-Z0-9]*$/; 
        if(!input.value.match(orderFormat))
        {
            validateOrder = false; 
            error.innerText = "Please enter your exact order number appeared on receipt"; 
        }
        else if(!isNaN(input.value))
        {
            validateOrder = false; 
            error.innerText = "Please enter your order number (should be mixing with number and letters)"; 
        }
        else if(input.value.length != 9)
        {
            validateOrder= false; 
            error.innerText = "Please enter your 9 digits order number"; 
        }
        else
        {
            error.innerText = ""; 
        }
    }
    return validateOrder; 
}

const hideContactOrderModal = (modal, inputs, message, selections, order)=>
{
    modal.classList.add("hide"); 
    inputs.forEach(input =>{
        input.value=""; 
    })
    message.value=""; 
    selections.forEach(selection=>{
        selection.checked = false; 
    })
    order.value = ""; 
}

const hideContactModal = (modal, inputs, message, selections)=>
{
    modal.classList.add("hide"); 
    inputs.forEach(input =>{
        input.value=""; 
    })
    message.value=""; 
    selections.forEach(selection=>{
        selection.checked = false; 
    })
}

const hideModal = (modal, subscribe)=>
{
    modal.classList.add("hide"); 
    subscribe.value = ""; 
}

const main = ()=>
{
    const inputs = document.querySelectorAll(".form-section > input"); 
    const errors = document.querySelectorAll(".form-section > .error"); 
    const selection = document.querySelectorAll("#concern-section input[type=radio]"); 
    const orderDropdown = document.querySelector("#orderNumber-section"); 
    const order = document.querySelector("#concern-section > #order"); 
    const others = document.querySelectorAll("#concern-section > input:not(#order)"); 
    const message = document.querySelector(".form-section > textarea"); 
    const submitButton = document.querySelector("#contact-form button"); 
    const modal = document.querySelector(".modal"); 
    const subscribe = document.querySelector("#footer-email-form input[type=text]"); 
    const error = document.querySelector("#footer-email-form .error"); 
    const subButton = document.querySelector("#subcription-button"); 
    const orderInput = document.querySelector("#orderNumber-section > input"); 
    const orderError = document.querySelector("#orderNumber-section > #orderNumber-error"); 
    let check; 

    order.addEventListener("click", ()=>{
        orderDropdown.classList.remove("hide");   
        check = true; 
    })

    others.forEach(other=>{
        other.addEventListener("click", ()=>{
            orderDropdown.classList.add("hide");
            check = false; 
        })
    })

    submitButton.addEventListener("click", (e)=>
    {
        const val = contactValidation(inputs, message, selection, errors); 
        const dropdown = dropdownFilled(orderInput, orderError); 
        if(check == true)
        {
            if(val == true && dropdown == true)
            {
                display(modal, inputs[0].value); 
                orderDropdown.classList.add("hide");
                setTimeout(()=>{
                    hideContactOrderModal(modal, inputs, message, selection, orderInput); 
                }, 3000); 
            }else{
                e.preventDefault();
            }    
        }
        else
        {
            if(val == true)
            {
                display(modal, inputs[0].value); 
                setTimeout(()=>{
                    hideContactModal(modal, inputs, message, selection); 
                }, 3000); 
            }else{
                e.preventDefault(); 
            }     
        }
    });

    subButton.addEventListener("click", ()=>{
        if(isValidated(subscribe, error) == true)
        {
            displayMsg(modal); 
            setTimeout(()=>{
                hideModal(modal, subscribe);  
            }, 3000); 
        }
    }); 

    modal.addEventListener("click", ()=>{
        hideModal(modal, subscribe); 
    });

    modal.addEventListener("click", ()=>{
        hideContactModal(modal, inputs, message, selection, orderInput); 
    });

    modal.addEventListener("click", ()=>{
        hideContactModal(modal, inputs, message, selection); 
    });

}
main(); 


