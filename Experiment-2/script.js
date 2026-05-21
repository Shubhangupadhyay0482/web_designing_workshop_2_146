console.log("TechStore Website Loaded Successfully!");

// Button Click Effect
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Opening Product Details...");
  });
});

// Add To Cart Button
const cartButton = document.querySelector(".btn-success");

cartButton.addEventListener("click", () => {
  alert("Product Added to Cart 🛒");
});