/* =========================
   FUNCTIONAL LOGIC (JS)
========================= */

// Global scope variable: track modal open count
let modalOpenCount = 0;

/**
 * Opens a modal
 * @param {HTMLElement} modalElement - The modal DOM element
 * @returns {number} - Updated count of how many times the modal has been opened
 */
function openModal(modalElement) {
  // Function scope variable
  let wasHidden = modalElement.style.display === "none" || modalElement.style.display === "";

  if (wasHidden) {
    modalElement.style.display = "flex"; // Show modal
    modalElement.classList.remove("hide");
    modalElement.classList.add("show");

    modalOpenCount++; // update global counter
  }

  // Return updated open count
  return modalOpenCount;
}

/**
 * Closes a modal with animation
 * @param {HTMLElement} modalElement - The modal DOM element
 * @returns {boolean} - True if modal successfully closed
 */
function closeModal(modalElement) {
  modalElement.classList.remove("show");
  modalElement.classList.add("hide");

  // Delay hiding until animation completes
  setTimeout(() => {
    modalElement.style.display = "none";
  }, 500);

  return true;
}

/**
 * Updates UI or logs messages based on modal interactions
 * @param {number} count - Total times modal has been opened
 */
function updateUI(count) {
  console.log(`📊 Modal has been opened ${count} time(s).`);
}

/* =========================
   EVENT LISTENERS
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  // Open modal
  openBtn.addEventListener("click", () => {
    let totalOpens = openModal(modal); // Call function with return
    updateUI(totalOpens);              // Pass return value into another function
  });

  // Close modal via close button
  closeBtn.addEventListener("click", () => {
    closeModal(modal);
  });

  // Close modal when clicking outside modal-content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});
