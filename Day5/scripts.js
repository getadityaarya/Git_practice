/*
Project: Counter App

Features:
- Increase / Decrease counter
- Prevent negative values
- Reset counter
- Change color when count > 10
*/

let count = 0;

// DOM elements
const countEl = document.getElementById("count");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Update UI function
function updateUI() {
    countEl.innerText = count;

    // Change color if count > 10
    if (count > 10) {
        countEl.classList.add("high");
    } else {
        countEl.classList.remove("high");
    }
}

// Increase count
incBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

// Decrease count (prevent negative)
decBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateUI();
    }
});

// Reset count
resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
});
