var email=document.form['from'['email']];
var password=document.form['from'['password']];
var email_error=document.getelementbyId('email_ error');
var pass_error=document.getelementbyId('pass_ error');
email.addeventlistemer('textinput',email_verify);
pass.addeventlistemer('textinput',pass_verify);
function validated()
{
    if (email.value.length<9)
    {
        email.style.border="1px solid red";
        email.error.style .display="block";
        email_focus();
        return false;
    }
    if (password.value.length<6)
    {
       password.style.border="1px solid red";
        pass.error.style .display="block";
        password_focus();
        return false;
    }
    function email_verify()
       {      
            if(email.value.length>=8)
            {
                email.style.border="1px solid silver";
                email_error.style.display="none";
                return true;
            }
        }
        function email_verify()
       {      
            if(email.value.length>=8)
            {
                email.style.border="1px solid silver";
                email_error.style.display="none";
                return true;
            }

}