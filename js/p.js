let productID =   [
    {
      name: "EXFOLIATE FACE AND BODY SCRUB GRIT, 75GM",
      price: "220.00",
      catagory: "Gentle Exfoliation, Nourishing & Skin Brightening",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_Medium_a7654ecf-8f6c-4b46-9d27-f3c5e8a30f28_765x.jpg?v=1659101350",
    },
    {
	name: "EYELIFT UNDER EYE CREAM, 20GM",
      price: "275.00",
      catagory: "Repaits Dark Circles, Puffy Eyes & Wrinkless",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Eyelift-01Medium_765x.jpg?v=1659101492",
    },
    {
	name: "NICOLIPS LIP BRIGHTENING SCRUB, 20GM",
      price: "364.00",
      catagory: "Lip Brightening, Nourishing & Repairing",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01Medium_765x.jpg?v=1659101603",
    },
    {
	name: "ULTIMATE COFFEE BOOST COMBO",
      price: "399.00",
      catagory: "Exfoliate Face & Body Scrub, Coffee Cubes",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_BevzillaCombo-01Medium_765x.jpg?v=1659101713",
    },
	    {
      name: "EXFOLIATE FACE AND BODY SCRUB GRIT, 75GM",
      price: "220.00",
      catagory: "Gentle Exfoliation, Nourishing & Skin Brightening",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01Medium_765x.jpg?v=1659101821",
    },
    {
	name: "EYELIFT UNDER EYE CREAM, 20GM",
      price: "275.00",
      catagory: "Repaits Dark Circles, Puffy Eyes & Wrinkless",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/De-TanFacePack-01_1000x.jpg?v=1652168815",
    },
    {
	name: "NICOLIPS LIP BRIGHTENING SCRUB, 20GM",
      price: "364.00",
      catagory: "Lip Brightening, Nourishing & Repairing",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ThePerfectGoodnightCombo-01_765x.jpg?v=1651698409",
    },
    {
	name: "ULTIMATE COFFEE BOOST COMBO",
      price: "399.00",
      catagory: "Exfoliate Face & Body Scrub, Coffee Cubes",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UbtanPlus-01_1000x.jpg?v=1651696408",
    },
	    {
      name: "EXFOLIATE FACE AND BODY SCRUB GRIT, 75GM",
      price: "220.00",
      catagory: "Gentle Exfoliation, Nourishing & Skin Brightening",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_Medium_a7654ecf-8f6c-4b46-9d27-f3c5e8a30f28_765x.jpg?v=1659101350",
    },
    {
	name: "EYELIFT UNDER EYE CREAM, 20GM",
      price: "275.00",
      catagory: "Repaits Dark Circles, Puffy Eyes & Wrinkless",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Eyelift-01Medium_765x.jpg?v=1659101492",
    },
    {
	name: "NICOLIPS LIP BRIGHTENING SCRUB, 20GM",
      price: "364.00",
      catagory: "Lip Brightening, Nourishing & Repairing",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01Medium_765x.jpg?v=1659101603",
    },
    {
	name: "ULTIMATE COFFEE BOOST COMBO",
      price: "399.00",
      catagory: "Exfoliate Face & Body Scrub, Coffee Cubes",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_BevzillaCombo-01Medium_765x.jpg?v=1659101713",
    },
    {
      name: "EXFOLIATE FACE AND BODY SCRUB GRIT, 75GM",
      price: "220.00",
      catagory: "Gentle Exfoliation, Nourishing & Skin Brightening",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Love-Is-In-The-Roll-On-Combo-01_765x.jpg?v=1651698338",
    },
    {
	name: "EYELIFT UNDER EYE CREAM, 20GM",
      price: "275.00",
      catagory: "Repaits Dark Circles, Puffy Eyes & Wrinkless",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD-01_5d17f334-cc6c-4fe1-b230-cb95f79726ab_765x.jpg?v=1652422383",
    },
    {
	name: "NICOLIPS LIP BRIGHTENING SCRUB, 20GM",
      price: "364.00",
      catagory: "Lip Brightening, Nourishing & Repairing",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Coalwave-02_61d1abea-055a-42e4-84cb-86b5146fcd51_360x.jpg?v=1651696320",
    },
    {
	name: "ULTIMATE COFFEE BOOST COMBO",
      price: "399.00",
      catagory: "Exfoliate Face & Body Scrub, Coffee Cubes",
      img: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_BevzillaCombo-01Medium_765x.jpg?v=1659101713",
    },
   
  ];



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
        // console.log(cartLs);
    }
    burgers.addEventListener("click", function () {
       window.location.href = "./cart.html";
  
     });
