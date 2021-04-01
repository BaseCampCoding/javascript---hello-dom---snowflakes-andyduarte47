const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVsRain = document.getElementById("snow-vs-rain")
const colorClicker = document.getElementById("click-color")
const quantity = document.getElementById("quantity")
const wind = document.getElementById("wind")
let quantityAmount = 50
let snow = setInterval(() => createSnowflake(), quantityAmount);
quantity.addEventListener("input", () =>{
  switch(quantity.value){
    case "0":
      quantityAmount = 600
    break;
    case "1":
      quantityAmount = 400
    break;
    case "2":
      quantityAmount = 200
    break;
    case "3":
      quantityAmount = 100
    break;
    case "4":
      quantityAmount = 0
    break;
  }
clearInterval(snow)
snow = setInterval(() => createSnowflake(), quantityAmount);
})



function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > Number(snowVsRain.value)) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = colorClicker.value;

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(${wind.value}vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}
