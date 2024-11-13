const validateInput = (evt, element_id, error_id, empty_msg, pat_msg, pattern)=>{
    const element= document.getElementById(element_id);
    const element_val= element.value;
    if(!element_val){
        evt.preventDefault();
        element.classList.add("red_border")
        const span = document.getElementById(error_id);
        span.textContent = empty_msg;
    }
    else {
        if(!pattern.test(element_val)){
            evt.preventDefault();
            element.classList.add("red_border")
            const span = document.getElementById(error_id);
            span.textContent = pat_msg;
        }
    }
}
validateInput(evt, "email", 
    "email_err", 
    "The email is required!", 
    "The email has to be a valid PSU email!", 
    /^[a-zA-Z0-9_\-\.]+@psu\.edu\.sa$/
);
