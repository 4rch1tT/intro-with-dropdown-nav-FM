const featuresDropdown = document.getElementById("features");
const companyDropdown = document.getElementById("company");

const featuresDD = document.getElementsByClassName("features-dd");
const companyDD = document.getElementsByClassName("company-dd");


featuresDropdown.addEventListener("click", () => {
  const featuresArrow = document.getElementById("features-arrow");
  const isOpen = featuresDD[0].style.display === "flex";

  if (!isOpen) {
    featuresArrow.src = "./images/icon-arrow-up.svg";
    featuresDropdown.style.color = "black";
    featuresDD[0].style.display = "flex";
  } else {
    featuresArrow.src = "./images/icon-arrow-down.svg";
    featuresDropdown.style.color = "hsl(0, 0%, 41%)";
    featuresDD[0].style.display = "none";
  }
});

companyDropdown.addEventListener("click", () => {
  const companyArrow = document.getElementById("company-arrow");
  const isOpen = companyDD[0].style.display === "flex";

  if (!isOpen) {
    companyArrow.src = "./images/icon-arrow-up.svg";
    companyDropdown.style.color = "black";
    companyDD[0].style.display = "flex";
  } else {
    companyArrow.src = "./images/icon-arrow-down.svg";
    companyDropdown.style.color = "hsl(0, 0%, 41%)";
    companyDD[0].style.display = "none";
  }
});
