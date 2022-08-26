let popup = document.getElementById("popup");
let cartLs = JSON.parse(localStorage.getItem("cart-page")) || [];


function renderDOM(data){ 
    container.innerHTML = null;
  
    data.forEach(function (el) {
      let product = document.createElement("div");
  
      let img = document.createElement("img");
      img.src = el.img;
  
      let name = document.createElement("h2");
      name.innerText = el.name;
  
      let price = document.createElement("p");
      price.innerText = el.price;
  
      let catagory = document.createElement("p");
      catagory.innerText = el.catagory;
  
      product.append(img, name, catagory, price, cart);
      container.append(product);
    });
  }
   renderDOM(cartLs)