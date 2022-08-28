let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        email:form.email.value,
    }
    console.log(obj);
    if(obj.email === ""){
        alert("NO USER TILL NOW")
    }
    else{
        window.location.href="login.html"
        alert("We will send you an email to reset your password")
    }
   
})