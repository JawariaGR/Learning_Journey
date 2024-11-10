let experience = document.getElementById("experience");
let exp_btn = document.getElementById("exp-btn");

exp_btn?.addEventListener("click", () => {
  experience!.classList.toggle("hide");
});

let education = document.getElementById("education");
let edu_btn = document.getElementById("edu-btn");

edu_btn!.addEventListener("click", () => {
  education!.classList.toggle("hide");
});

let print_btn = document.getElementById("print-btn");
print_btn!.addEventListener("click", () => {
  window.print();
});
