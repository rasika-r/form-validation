const errors = document.getElementsByClassName("error")
const fname_error = document.getElementById("fname-error")
const lname_error = document.getElementById("lname-error")
const email_error = document.getElementById("email-error")
const mobile_error = document.getElementById("mobile-error")
const pass_error = document.getElementById("pass-error")
const confirm_pass_error = document.getElementById("confirm-pass-error")

const inputs = document.querySelectorAll("input")
const valid_form = document.querySelector(".valid-form")

const fname_inp = document.querySelector("input[name=fname]")
const lname_inp = document.querySelector("input[name=lname]")
const email_inp = document.querySelector("input[name=email]")
const mobile_inp = document.querySelector("input[name=mobile]")
const pass_inp = document.querySelector("input[name=pass]")
const confirm_pass_inp = document.querySelector("input[name=confirm-pass]")



const validateForm = (e) =>{
    e.preventDefault()
    Array.from(inputs).forEach(element =>{
        element.value = element.value.trim()
    })
    Array.from(errors).forEach(element => {
        element.innerHTML = ""
    });
    checkFirstName(fname_inp.value)
    checkLastName(lname_inp.value)
    checkEmail(email_inp.value)
    checkMobile(mobile_inp.value)
    checkConfirmPassword(pass_inp.value,confirm_pass_inp.value)

    let valid  = true
    Array.from(errors).forEach(element => {
        if ( element.innerHTML != "")
        {
            valid = false
        }
    })

    
    if (valid)
    {
        valid_form.style.display = "block"
    }

}


const checkFirstName = (e) =>{
    let regName = /^[a-zA-Z]*$/;
    if ( e == "" || e == null)
    {
        fname_error.innerHTML = "first name should not be empty"
        return
    }
    
    if (!regName.test(e.replaceAll(" ","")))
    {
        fname_error.innerHTML = "first name should contain only alphabets"
        return
    }
    
}


const checkLastName = (e) =>{
    let regName = /^[a-zA-Z]*$/;

    if ( e == "" || e == null)
    {
        lname_error.innerHTML = "last name should not be empty"
        return
    }
    if(e.replaceAll(" ","") != e)
    {
        lname_error.innerHTML = "last name should not contain any space"
        return

    }
    if (!regName.test(e))
    {
        lname_error.innerHTML = "last name should contain only alphabets"
        return
    }
}



const checkEmail = (e) =>{
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if ( e == "" || e == null)
    {
        email_error.innerHTML = "email should not be empty"
        return
    }
    
    if (!regEmail.test(e))
    {
        email_error.innerHTML = "invalid email"
        return
    }
}



const checkMobile = (e) =>{
    if ( e == "" || e == null)
    {
        mobile_error.innerHTML = "mobile number should not be empty"
        return
    }
    if (isNaN(e))
    {
        mobile_error.innerHTML = "invalid number"
        return
    }
    if (e.length < 10)
    {
        mobile_error.innerHTML = "mobile number must atleast 10 digits"
        return
    }
}



const checkConfirmPassword = (pass, confirm_pass) =>{
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if ( pass == "" || pass == null)
    {
        pass_error.innerHTML = "password should not be empty"
        return
    }
    if (pass.length < 6)
    {
        pass_error.innerHTML = "password should be minumum 6 characters"
        return
    }
    if(!specialChars.test(pass))
    {
        pass_error.innerHTML = "password should contain special characters"
        return
    }
    if ( confirm_pass == "" || confirm_pass == null)
    {
        confirm_pass_error.innerHTML = "confirm password should not be empty"
        return
    }
    if(pass != confirm_pass)
    {
        confirm_pass_error.innerHTML = "confirm password should match with password"
        return
    }
}