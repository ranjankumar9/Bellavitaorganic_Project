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
          <i class="fa fa-bars" id="burger" aria-hidden="true"></i>
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
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701"
            width="50"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721"
            width="60"
          />
        </div>
        <div class="icons">
          <input type="text" placeholder="Search for products" />

          <a href="./login.html"><i class="far fa-heart"></i></a>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/shopping-bag-1970453-1669843.png"
            width="30"
          />
        </div>
      </div>

      <!-- navigation bar -->

      <div id="navbar2">
        <p>SHOP ALL</p>
        <hr />
        <p>NEW ARRIVALS</p>
        <hr />
        <p>BESTSELLERS</p>
        <hr />
        <div class="dropdown">
            <p>SKIN CARE</p>
            <div class="submenu">
              <div>
                <p>BY PRODUCT TYPE</p>
                <hr />
                <a href="">ALL SKIN CARE PRODUCTS</a>
                <a href="">FACE CREAM</a>
                <a href="">FACE PACK/MASK</a>
                <a href="">FACE SCRUM</a>
              </div>
              <div>
                <p>BY CONCERN</p>
                <hr />
                <a href="">PIGMENTATION</a>
                <a href="">ACNE & PIMPLES</a>
                <a href="">AGEING</a>
                <a href="">DARK SPOTS</a>
                <a href="">DARK CIRCLES</a>
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
              <a href="">ALL HAIR CARE</a>
              <a href="">PRODUCTS</a>
              <a href="">SHAMPOO</a>
              <a href="">CONDITIONER</a>
              <a href="">HAIR OIL</a>
              <a href="">HAIR MASK</a>
            </div>
            <div>
              <p>BY HAIR CONCERN</p>
              <hr />
              <a href="">HAIR LOSS</a>
              <a href="">HAIR THINNING</a>
              <a href="">DULL HAIR</a>
              <a href="">DANDRUFF</a>
              <a href="">DAMAGE HAIR</a>
              <a href="">FRIZZY HAIR</a>
              <a href="">DRY HAIR & SCALP</a>
            </div>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>BODY CARE</p>
          <div class="submenu">
            <p>BATH & BODY</p>
            <hr />
            <a href="">ALL BODY CARE</a>
            <a href="">PRODUCTS</a>
            <a href="">BODY SOAPS</a>
            <a href="">BODY WASH</a>
            <a href="">BODY SCRUB</a>
            <a href="">BODY LOTION</a>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>PERFUMES</p>
          <div class="submenu">
            <a href="">ALL PERFUMES</a>
            <a href="">PERFUMES FOR HER</a>
            <a href="">PERFUMES FOR HIM</a>
            <a href="">UNISEX PERFUMES</a>
            <a href="">BODY PERFUME</a>
            <a href="">LITTLE LUXURIES</a>
            <a href="">GIFT SETS</a>
          </div>
        </div>
        <hr />
        <div class="dropdown">
          <p>COMBOS</p>
          <div class="submenu">
            <a href="">GIFT BOXES</a>
            <a href="">ALL COMBOS</a>
            <a href="">BESTSELLER COMBOS</a>
            <a href="">SKIN COMBOS</a>
            <a href="">HAIR COMBOS</a>
            <a href="">BODY COMBOS</a>
            <a href="">PERFUME COMBOS</a>
            <a href="">C GLOW RANGE</a>
            <a href="">KUMKUMADI RANGE</a>
          </div>
        </div>

        <hr />
        <p>BUILD A BOX</p>
      </div>
    </div>
  </body>
</html>
`

let navbar = document.querySelector("nav");
navbar.innerHTML=navbar_HTML;