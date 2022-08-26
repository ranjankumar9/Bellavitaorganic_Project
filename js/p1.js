let container = document.getElementById("container");
let pagination = document.getElementById("pagination");
let perpage = 4;
let currentpage = 1;
let pages = Math.ceil(productID.length / perpage);

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

    let cart = document.createElement("button");
    cart.textContent = "Add To Cart";
    cart.addEventListener("click", function () {
        AddToCart(el)
    });

    product.append(img, name, catagory, price, cart);
    container.append(product);
  });
}

function renderpagination(pages) {
  for (let i = 1; i <= pages; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", function () {
      currentpage = i;

      paginatedTable(productID, currentpage, perpage);
    });
    pagination.append(btn);
  }
}
renderpagination(pages);

function paginatedTable(data, page, onepage) {
  let start = onepage * (page - 1);
  let end = onepage * page;
  let splited = data.slice(start, end);
  renderDOM(splited);
}

paginatedTable(productID, currentpage, perpage);


function AddToCart(el) {
    cartLs.push(el);
    alert("Product Added Successfully");
    localStorage.setItem("cart-page", JSON.stringify(cartLs));
      console.log(cartLs);
  }
  cart.addEventListener("click", function () {
    window.location.href = "./cart.html";
  });