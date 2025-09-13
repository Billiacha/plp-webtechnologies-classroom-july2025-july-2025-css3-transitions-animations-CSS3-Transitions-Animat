/* ===============================
   PART 2: Functions, Scope & Return
   =============================== */

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height; // returns a useful value
}

// Demonstrate local vs global scope
let globalMessage = "Hello from Global Scope!";

function showMessage(localMessage) {
  console.log(globalMessage);  // uses global scope
  console.log(localMessage);   // uses local scope
}

// Example function usage
showMessage("Hello from Local Scope!");
console.log("Box area:", calculateArea(100, 50)); // will log 5000

/* ===============================
   PART 3: Combining CSS + JS
   =============================== */

// Animate the box on button click
const box = document.querySelector(".box");
const triggerBtn = document.getElementById("trigger");

function toggleAnimation(element, className) {
  element.classList.toggle(className); // adds/removes a CSS class
}

triggerBtn.addEventListener("click", () => {
  toggleAnimation(box, "animate");
});

/* ===============================
   Modal Popup Functions
   =============================== */
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModal");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
  modal.style.display = "flex"; // show modal
}
function closeModal() {
  modal.style.display = "none"; // hide modal
}

showModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
