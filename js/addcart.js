<<<<<<< HEAD
let add = document.getElementById("add");
let cartLoc = JSON.parse(localStorage.getItem("cart-page")) || [];


 function display(data){ 
   add.innerHTML=null;
  
    data.forEach(function (el,index) {
=======
let popup = document.getElementById("popup");
let cartLs = JSON.parse(localStorage.getItem("cart-page")) || [];


function renderDOM(data){ 
    container.innerHTML = null;
  
    data.forEach(function (el) {
>>>>>>> 2193873512099a6d9a9acd0c332f9d165a06c0a2
      let product = document.createElement("div");
  
      let img = document.createElement("img");
      img.src = el.img;
  
      let name = document.createElement("h2");
      name.innerText = el.name;
  
      let price = document.createElement("p");
      price.innerText = el.price;
  
      let catagory = document.createElement("p");
      catagory.innerText = el.catagory;
<<<<<<< HEAD

      let checkout = document.createElement("button");
      checkout.innerText = "CHECKOUT";
      checkout.addEventListener("click",function(){
        window.location.href="payment.html"
      })

      let delbtn = document.createElement("button");
      delbtn.textContent = "Delete";
      delbtn.addEventListener("click",function(){
            DeleteCart(index);
     })
  
      product.append(img, name, catagory, price,checkout,delbtn);
      add.append(product);
    });
  }
  display(cartLoc)

  function DeleteCart(index){
    let deletedCart=cartLoc.filter(function(el,i){
          return i != index;
     })
     display(deletedCart);
     localStorage.setItem("cart-page",JSON.stringify(deletedCart));
   }
=======
  
      product.append(img, name, catagory, price, cart);
      container.append(product);
    });
  }
   renderDOM(cartLs)
>>>>>>> 2193873512099a6d9a9acd0c332f9d165a06c0a2
