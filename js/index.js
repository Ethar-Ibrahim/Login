var registration=document.getElementById("registration");
var userName=document.getElementById("username");
var password=document.getElementById("password");
var email=document.getElementById("email");
var nameAlert=document.getElementById("nameAlert");
var emailAlert=document.getElementById("emailAlert");
var passAlert=document.getElementById("passAlert");
var existAlert=document.getElementById("existAlert");
var successAlert=document.getElementById("success");
var btn=document.getElementById("sub");
var arr=[];
if(localStorage.getItem("arr")!=null){
    arr=JSON.parse(localStorage.getItem("arr"));
}

registration.addEventListener('submit',function(e){
    e.preventDefault();
    if(checkInput()){
        addusers();
    }

})


function validate(regex,ele,alert){
    var pattern=regex;
    if(pattern.test(ele.value)){
        console.log("validate");
        alert.classList.replace('d-block','d-none');
        ele.classList.remove("is-invalid");
        ele.classList.add("is-valid");
        return true;
    }else{
        console.log("invalid");
        alert.classList.replace('d-none','d-block');
        ele.classList.add("is-invalid");
        return false;
        
    }
}

function checkInput(){
    if(validate(/^[a-zA-Z0-9$_]{2,}$/,userName,nameAlert)==true&&validate(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,email,emailAlert)==true&&validate(/^(?=.*[A-Z])(?=.*[\W_])(?=.\d).*$/,password,passAlert)==true){

        return true;
        
    }else{
        
        return false;
    }
}

function addusers(){
    var newUser={
        uName:userName.value,
        uEmail:email.value,
        pass:password.value,
    }
    if(isExist(newUser)===true){
        existAlert.classList.replace("d-none","d-block");
        successAlert.classList.replace("d-block","d-none");
        
    }else{
        window.location.href="../login/login.html";
        arr.push(newUser);
        console.log(arr);
        localStorage.setItem('arr',JSON.stringify(arr));
        existAlert.classList.replace("d-block","d-none");
        successAlert.classList.replace("d-none","d-block")

    }

}

function isExist(newUser){
    for(var i=0;i<arr.length;i++){
        if(arr[i].uEmail.toLowerCase()==newUser.uEmail.toLowerCase()){
            return true;
            
        }
    }
}