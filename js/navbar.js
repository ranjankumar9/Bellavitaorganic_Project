let navbar_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.css">
    <link rel="stylesheet" href="./CSS/nav.css" />
    <link rel="stylesheet" href="./new.css" />
  </head>
  <body>
    <div id="navbar">
      <div id="slider">
        <ul>
          <li>
            <div class="container">
              <h4>FREE SHIPING on PREPAID Orders*</h4>
            </div>
          </li>
          <li>
            <div class="container">
              <h4>
                Flexi Box - But any 4 products at 999 <button>Shop Now</button>
              </h4>
            </div>
          </li>
          <li>
            <div class="container">
              <h4>Buy ANY 4 products for the price of 3! code - 4FOR3</h4>
            </div>
          </li>
        </ul>
      </div>

      <div id="navbar1">
        <div class="icons">
        <img id="burger"
        src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-20.jpg"
        width="60"
    />
        </div>
        <div class="icons">
          <a href="./login.html"><i class="far fa-address-book"></i></a>
        </div>
        <div class="icon">
          <a href="./index.html"
            ><img
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683"
              width="60"
          /></a>
          <a href="./shopping.html"><img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
            width="50"
          /></a>
          <a href="./shopping.html"><img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721"
            width="60"
          /></a>
        </div>
        <div class="icons">
          <input type="text" placeholder="Search for products" id="searchProduct"/>

          <a href="./login.html"><i class="far fa-heart"></i></a>
          <a href="cart.html"><img id="burgers"
            src="https://cdn.iconscout.com/icon/free/png-256/shopping-bag-1970453-1669843.png"
            width="30"
          /></a>
        </div>
      </div>


  

      <!-- navigation bar -->

      <div id="navbar2">
      <a href="./shopping.html"><p>SHOP ALL</p></a>
        <hr />
        <a href="./shopping.html"><p>NEW ARRIVALS</p></a>
        <hr />
        <a href="./shopping.html"><p>BESTSELLERS</p></a>
        <hr />
        <a href="./shopping.html"><div class="dropdown"></a>
            <p>SKIN CARE</p>
            <div class="submenu">
              <div>
                <p>BY PRODUCT TYPE</p>
                <hr />
                <a href="./shopping.html">ALL SKIN CARE PRODUCTS</a>
                <a href="./shopping.html">FACE CREAM</a>
                <a href="./shopping.html">FACE PACK/MASK</a>
                <a href="./shopping.html">FACE SCRUM</a>
                <a href="./shopping.html">FACE SCRUB</a>
                <a href="./shopping.html">FACE TONER</a>
                <a href="./shopping.html">FACE GEL</a>
                <a href="./shopping.html">FACE MOISTURISERS</a>
                <a href="./shopping.html">SUN SCREEN WITH SPF</a>
                <a href="./shopping.html">LIP CARE</a>
                <a href="./shopping.html">NIGHT CARE</a>
                <a href="./shopping.html">UNDER EYE CARE</a>
                <a href="./shopping.html">EYE BROWS</a>
                <a href="./shopping.html">EXFOLIATORS</a>
                <a href="./shopping.html">FACE WASH</a>
              </div>
              <div>
                <p>BY CONCERN</p>
                <hr />
                <a href="">PIGMENTATION</a>
                <a href="">ACNE & PIMPLES</a>
                <a href="">AGEING</a>
                <a href="">DARK SPOTS</a>
                <a href="">DARK CIRCLES</a>
                <a href="">BLACKHEADS & WHITE</a>
                <a href="">HEADS</a>
                <a href="">TAN REMOVAL</a>
                <a href="">HYDRATION</a>
                <a href="">SKIN BRIGHTENING</a>
                <a href="">PORE CARE</a>
                <a href="">SUN PROTECT</a>
                <a href="">OIL CONTROL</a>
                <a href="">PUFFINESS</a>
              </div>
              <div>
                <p>BY SKIN TYPE</p>
                <hr>
                <a href="">DULL SKIN</a>
                <a href="">DRY SKIN</a>
                <a href="">OILY SKIN</a>
                <a href="">NORMAL SKIN</a>
              </div>
            </div>
          </div>
        <hr />
        <div class="dropdown">
          <p>HAIR CARE</p>
          <div class="submenu">
            <div>
              <p>BY PRODUCT TYPE</p>
              <hr />
              <a href="./shopping.html">ALL HAIR CARE</a>
              <a href="./shopping.html">PRODUCTS</a>
              <a href="./shopping.html">SHAMPOO</a>
              <a href="./shopping.html">CONDITIONER</a>
              <a href="./shopping.html">HAIR OIL</a>
              <a href="./shopping.html">HAIR MASK</a>
            </div>
            <div>
              <p>BY HAIR CONCERN</p>
              <hr />
              <a href="./shopping.html">HAIR LOSS</a>
              <a href="./shopping.html">HAIR THINNING</a>
              <a href="./shopping.html">DULL HAIR</a>
              <a href="./shopping.html">DANDRUFF</a>
              <a href="./shopping.html">DAMAGE HAIR</a>
              <a href="./shopping.html">FRIZZY HAIR</a>
              <a href="./shopping.html">DRY HAIR & SCALP</a>
            </div>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>BODY CARE</p>
          <div class="submenu">
            <p>BATH & BODY</p>
            <hr />
            <a href="./shopping.html">ALL BODY CARE</a>
            <a href="./shopping.html">PRODUCTS</a>
            <a href="./shopping.html">BODY SOAPS</a>
            <a href="./shopping.html">BODY WASH</a>
            <a href="./shopping.html">BODY SCRUB</a>
            <a href="./shopping.html">BODY LOTION</a>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>PERFUMES</p>
          <div class="submenu">
            <a href="./shopping.html">ALL PERFUMES</a>
            <a href="./shopping.html">PERFUMES FOR HER</a>
            <a href="./shopping.html">PERFUMES FOR HIM</a>
            <a href="./shopping.html">UNISEX PERFUMES</a>
            <a href="./shopping.html">BODY PERFUME</a>
            <a href="./shopping.html">LITTLE LUXURIES</a>
            <a href="./shopping.html">GIFT SETS</a>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>COMBOS</p>
          <div class="submenu">
            <a href="./shopping.html">GIFT BOXES</a>
            <a href="./shopping.html">ALL COMBOS</a>
            <a href="./shopping.html">BESTSELLER COMBOS</a>
            <a href="./shopping.html">SKIN COMBOS</a>
            <a href="./shopping.html">HAIR COMBOS</a>
            <a href="./shopping.html">BODY COMBOS</a>
            <a href="./shopping.html">PERFUME COMBOS</a>
            <a href="./shopping.html">C GLOW RANGE</a>
            <a href="./shopping.html">KUMKUMADI RANGE</a>
          </div>
        </div>

        <hr />
        <p>BUILD A BOX</p>
      </div>
    </div>
  </body>
</html>
`;

let navbar = document.querySelector("nav");
navbar.innerHTML = navbar_HTML;
