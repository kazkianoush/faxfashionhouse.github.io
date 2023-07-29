
// products add here
function createProducts(){
var products = [
    {
      imgSrc: "pictures/frontregan.jpeg",
      desc: "",
      title: "GAP TEE",
      price: "$45"
    }
    // Add more product objects as needed
  ];


  var productContainer = document.getElementById("products");

products.forEach(function(product) {
  var card = document.createElement("div");
  card.className = "card";

  card.addEventListener("click", function() {
    transition("products/" + filename);
  });

  var img = document.createElement("div");
  img.className = "img";
  img.innerHTML = "<img src='" + product.imgSrc + "' alt=''>";

  var desc = document.createElement("div");
  desc.className = "desc";
  desc.textContent = product.desc;

  var title = document.createElement("div");
  title.className = "title";
  title.textContent = product.title;

  var box = document.createElement("div");
  box.className = "box";

  var price = document.createElement("div");
  price.className = "price";
  price.textContent = product.price;

  var buyNowBtn = document.createElement("button");
  buyNowBtn.className = "btn";
  buyNowBtn.textContent = "Buy Now";

  var filename = product.title.toLowerCase().replace(/\s/g, "_") + ".html";
  console.log(filename);

  buyNowBtn.addEventListener("click", function() {
    transition("products/" + filename);
  });



  // Assuming you're running this JavaScript in the browser, you can redirect using:

  box.appendChild(price);
  box.appendChild(buyNowBtn);

  card.appendChild(img);
  card.appendChild(desc);
  card.appendChild(title);
  card.appendChild(box);

  productContainer.appendChild(card);
});


}












function transition(address) {  

      event.preventDefault(); // Prevent the default behavior of the button
      
      console.log("button clicked");
      
      $("*").addClass("blackout");
  
      setTimeout(function() {
        console.log("clicked");
        window.location.href = address;
      }, 1000);
  }










  
