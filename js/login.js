let form = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(signupLS.length===0){
        alert ("No user till now")
        return;
    }
    let obj={
        email:form.email.value,
        password:form.password.value,
    }
    let flag=true;
    signupLS.forEach(function(el){
        if(el.email === obj.email && el.password === obj.password){
            flag=false;
            localStorage.setItem("signin",JSON.stringify(el));
            window.location.href="index.html"
        }
    })
    if(flag === true){
        alert("User Does not exist")
    }
})