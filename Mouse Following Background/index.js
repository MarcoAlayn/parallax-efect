// Variables
const box = document.querySelector(".box");
const boxContent = document.querySelector(".content");
const sensitivity = 15;

// Event Listeners
box.addEventListener("mousemove", addCoors);
boxContent.addEventListener("mousemove", addCoors);

// function for handling the background moving effect

function addCoors(e) {
  // Get the X and Y coordinates
  const x = e.clientX;
  const y = e.clientY;

  //   set background position to X and Y coordinates;
  box.style.backgroundPosition = `${x / sensitivity}px ${y / sensitivity}px`;
}
