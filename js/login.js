var logForm=document.getElementById("logform");
var userEmail=document.getElementById("email");
var userPassword=document.getElementById("password");
var incorrectAlert=document.getElementById("incorrectAlert");
var arr=[];
if(localStorage.getItem("arr")!=null){
    arr=JSON.parse(localStorage.getItem("arr"));
}
console.log(arr);

logForm.addEventListener("submit",function(e){
    e.preventDefault();
    login();
})

function login(){
    var data={
        email:userEmail.value,
        upass:userPassword.value,
    }
    if(log_valid(data)==true){
        incorrectAlert.classList.replace("d-block","d-none");
        window.location.href="../../home/home.html";

        
    }else{
        incorrectAlert.classList.replace("d-none","d-block");

        
    }
}

function log_valid(data){
    for(var i=0;i<arr.length;i++){
        if(arr[i].uEmail.toLowerCase()==data.email.toLowerCase() && arr[i].pass==data.upass){
            console.log("found");
            localStorage.setItem("userName",arr[i].uName);
            return true;
            
        }
    }
}
// 
// 