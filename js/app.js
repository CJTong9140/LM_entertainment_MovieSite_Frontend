/* 
    Name:               CJ Jingren Tong
    Student Number:     152464194
    Date:               December 12th, 2020
    Website Reference:
        https://www.disneyplus.com/en-ca
        https://www.netflix.com/ca/
    Netlify registered webpage name: lmentertainment.netlify.app
    Page: Main Home Page JavaScript 
    Task: Part 1 Subscribe Email Form Validation and Submission
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

const displayMsg = (modal) =>
{
    modal.classList.remove("hide"); 
    modal.children[0].innerText = "Thank you for subscribing."; 
}

const hideModal = (modal, subscribe)=>
{
    modal.classList.add("hide"); 
    subscribe.value = ""; 
}

const main = ()=>
{
    /*************************** SUBSCRIPTION EVENT ***************************/
    const subscribe = document.querySelector("#footer-email-form input[type=text]"); 
    const error = document.querySelector("#footer-email-form .error"); 
    const subButton = document.querySelector("#subcription-button"); 
    const modal = document.querySelector(".modal"); 
    
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
}

main(); 