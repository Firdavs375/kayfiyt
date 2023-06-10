let ratings = document.querySelectorAll(".rating");
let ratingsContainer = document.querySelector(".ratings-container");
let sendBtn = document.querySelector("#send");
let panel = document.querySelector("#panel");

let selectedRating = "Satisfied";


ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You! </strong>
        <br>
        <h1>Feedback: ${selectedRating} </h1>
    `;
});
function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
