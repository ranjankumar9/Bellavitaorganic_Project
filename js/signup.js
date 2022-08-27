let form = document.querySelector("form");

let signupLS = JSON.parse(localStorage.getItem("signup")) ||[];


form.addEventListener("submit",function(event){
    event.preventDefault();
    let obj={
        first:form.first.value,
        last:form.last.value,
        email:form.email.value,
        password:form.password.value
    }
    console.log(obj);
    if(obj.first === "" && obj.last === "" &&obj.email === "" && obj.password === ""){
        alert("Empty field");
        return;
    }
    console.log(obj)
    signupLS.push(obj);
    localStorage.setItem("signup",JSON.stringify(signupLS))
    window.location.href="index.html"
})