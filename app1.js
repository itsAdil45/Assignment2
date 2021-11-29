
$(document).ready(function () {
$("form span").hide();

// $("#username").keyup(nameCheck).keyup(enableButton);
$("#password").keyup(errorMessage).keyup(enableButton);
$("#Confirm_password").keyup(matchPass).keyup(enableButton);

function isValid(){
return $("#password").val().length>6 ;
}

// function checkName(){
//     return $("#username").val().length>0;
// }

function confirmPass(){
return $("#password").val()==$("#Confirm_password").val();

}

function isEnable(){
    return isValid() && confirmPass() ;
    
    }

    // function nameCheck(){
    //     if(checkName()){
    //         $(this).next().hide();
    //     }
    //     else{
    //         $(this).next().show();
        
    //     }}

function errorMessage(){
if(isValid()){
    $(this).next().hide();
}
else{
    $(this).next().show();

}}


function matchPass(){
    if(confirmPass()){
        $(this).next().hide();
    }
    else{
        $(this).next().show();
    
    }}

    function enableButton(){

        $("#submit").prop("disabled", !isEnable);
        if(!isEnable()){
            $("#submit").css({backgroundColor: "red", color: "white"})
        
        }
        else{
            $("#submit").css({backgroundColor: "blue", color: "white"})
            window.location.href="index.html";
           
           
        }
    }
});