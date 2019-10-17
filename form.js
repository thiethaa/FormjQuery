$(function(){
    
    //selecting all error message
        $("#username_error").hide();
        $("#dob_error").hide();
        $("#email_error").hide();
        $("#password_error").hide();
    
        var error_username = false;
        var error_dob = false;
        var error_email = false;
        var error_password = false;
    
    //create focusOut function to validate form
        $("#username").focusout(function(){
            check_username();
        });
        $("#dob").focusout(function(){
            check_dob();
        });
        $("#email").focusout(function(){
            check_email();
        });
        $("#password").focusout(function(){
            check_password(); 
        });
    
    // create validation function
        function check_username(){
            var username_length = $("#username").val().length;
            if (username_length < 5 ||username_length > 20){
                $("#username_error").text("Should be 5-20 character");
                $("#username_error").show();
                $("#username").css('border','1px solid red');
                $("#username_div").css('color','red'); 
                error_username = true;
            }else{
                $("#username_error").hide();
                $("#username").css('border','1px solid green');
                $("#username_div").css('color','green');
            }
        }
        function check_dob(){
            var dob = $("#dob").val();
            if(dob !== ''){     
                $("#dob_error").hide();  
                $("#dob").css('border','1px solid green');
                $("#dob_div").css('color','green');
            }else {
                $("#dob_error").text("date of birth is required");
                $("#dob_error").show();
                $("#dob").css('border','1px solid red');
                $("#dob_div").css('color','red');
                error_dob= true;
            }
        }
    
        function check_email(){
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#email").val();
            if(pattern.test(email) && email !== ''){     
                $("#email_error").hide();  
                $("#email").css('border','1px solid green');
                $("#email_div").css('color','green');
            }else {
                $("#email_error").text("Invalid Email");
                $("#email_error").show();
                $("#email").css('border','1px solid red');
                $("#email_div").css('color','red');
                error_email = true;
            }
        }
    
        function check_password(){
            var password = $("#password").val();
            if(password < 8){     
                $("#password_error").text("Should be at least 8 character");
                $("#password_error").show();
                $("#password").css('border','1px solid red');
                $("#password_div").css('color','red');
                error_password = true;
               
            }else {
                $("#password_error").hide();  
                $("#password").css('border','1px solid green');
                $("#password_div").css('color','green');
            }
        }
    
    // create submit function
        $("#regform").submit(function(e){ 
            e.preventDefault();
            check_username();
            check_dob();
            check_email();
            check_password();
            
    // declare variable error = false
        if(error_username  || error_dob || error_email && error_password){
            alert ("Please fill the form corectly")
            return true;
            }else
            alert ('Registration is succesfull')    
            return false;
    })
    });
    