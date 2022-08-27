
  let form = document.querySelector("form");
  let tbody = document.querySelector("tbody");

  let savedCd = JSON.parse(localStorage.getItem("savedDetail")) || [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
      name: form.name.value,
      email: form.email.value,
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      zip: form.zip.value,
      card: form.card.value,
      month: form.month.value,
      year: form.year.value,
      cvv: form.cvv.value,
    };
    //   console.log(obj);

    if (
      obj.name == "" ||
      obj.email == "" ||
      obj.address == "" ||
      obj.city == "" ||
      obj.state == "" ||
      obj.zip == "" ||
      obj.card == "" ||
      obj.month == "" ||
      obj.year == "" ||
      obj.cvv == ""
    ) {
      alert("Please Enter Your Correct details");
      return;
    }
      savedCd.push(obj);
      localStorage.setItem("savedDetail",JSON.stringify(savedCd))
      alert("Thank You for Placing Order Enjoy Your Shoping");
      window.location.href="index.html";
    
  });
