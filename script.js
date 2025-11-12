const featuresDropdown = document.getElementById("features");
const companyDropdown = document.getElementById("company");

const featuresDD = document.getElementsByClassName("features-dd");
const companyDD = document.getElementsByClassName("company-dd");

const featuresDropdownMobile = document.getElementById("features-mobile");
const companyDropdownMobile = document.getElementById("company-mobile");

const featuresDdMobile = document.getElementsByClassName("features-dd-mobile");
const companyDdMobile = document.getElementsByClassName("company-dd-mobile");

const hamMenu = document.getElementsByClassName("ham-menu");
const sideMenu = document.getElementsByClassName("side-menu");
const closeMenu = document.getElementsByClassName("close-menu");

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

featuresDropdownMobile.addEventListener("click", () => {
  const featuresArrowMobile = document.getElementById("features-arrow-mobile");
  const isOpen = featuresDdMobile[0].style.display === "flex";

  if (!isOpen) {
    featuresArrowMobile.src = "./images/icon-arrow-up.svg";
    featuresDdMobile[0].style.display = "flex";
  } else {
    featuresArrowMobile.src = "./images/icon-arrow-down.svg";
    featuresDdMobile[0].style.display = "none";
  }
});

companyDropdownMobile.addEventListener("click", () => {
  const companyArrowMobile = document.getElementById("company-arrow-mobile");
  const isOpen = companyDdMobile[0].style.display === "flex";

  if (!isOpen) {
    companyArrowMobile.src = "./images/icon-arrow-up.svg";
    companyDdMobile[0].style.display = "flex";
  } else {
    companyArrowMobile.src = "./images/icon-arrow-down.svg";
    companyDdMobile[0].style.display = "none";
  }
});

hamMenu[0].addEventListener("click", () => {
  sideMenu[0].style.display = "flex";
});

closeMenu[0].addEventListener("click", () => {
  sideMenu[0].style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    document.getElementsByClassName("side-menu")[0].style.display = "none";
  }
});
