let currentStep = 0;
const steps = document.querySelectorAll(".form-step");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

document.querySelectorAll(".next").forEach(button => {
  button.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

document.querySelectorAll(".prev").forEach(button => {
  button.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

function submitLecturerForm() {
  const form = document.getElementById("lecturer-form");
  if (!form.checkValidity()) {
    alert("Please fill in all required fields.");
    return false;
  }

  document.getElementById("confirmation").textContent = "Lecturer profile created successfully ✅";
  form.reset();
  currentStep = 0;
  showStep(currentStep);
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  showStep(currentStep);
});
