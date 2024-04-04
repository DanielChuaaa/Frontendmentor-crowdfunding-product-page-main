const bookmark = document.querySelectorAll(".bookmark");
const primaryButton = document.querySelector(".primaryButton");
const secondaryButtons = document.querySelectorAll(".secondaryButton");
const buttonBackThisProject = document.querySelectorAll(".buttonBackThisProject");
const thanksButton = document.querySelector(".thanksButton");
const closeButton = document.querySelector(".closeButton");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const cardBackThisProjectParent = document.querySelector(".cardBackThisProjectParent");
const cardBackThisProject = document.querySelector(".cardBackThisProject");
const cardChildClicked = document.querySelectorAll(".cardChildClicked");
const cardThanksParent = document.querySelector(".cardThanksParent");
const cardThanks = document.querySelector(".cardThanks");
const rewardCircles = document.querySelectorAll(".rewardCircle");
const getClicked = document.querySelectorAll(".getClicked");
const navLink = document.querySelector(".navLink");
const hamburgerButton = document.querySelector(".hamburgerButton");
const cardChildClicked1 = document.getElementById("cardChildClicked1");
const rewardCircle1 = document.getElementById("rewardCircle1");
const getClicked1 = document.getElementById("getClicked1");
const cardChildClicked2 = document.getElementById("cardChildClicked2");
const rewardCircle2 = document.getElementById("rewardCircle2");
const getClicked2 = document.getElementById("getClicked2");

bookmark.forEach((book) => {
  book.addEventListener("click", bookmarkToggle);
});

primaryButton.addEventListener("click", cardToggle);

secondaryButtons.forEach((button) => {
  button.addEventListener("click", cardToggle);
});

rewardCircles.forEach((circle) => {
  circle.addEventListener("click", cardChildClick);
});

closeButton.addEventListener("click", cardClose);

buttonBackThisProject.forEach((button) => {
  button.addEventListener("click", buttonBack);
});

thanksButton.addEventListener("click", thanksButtonClicked);

hamburgerButton.addEventListener("click", hamburgerToggle);

button1.addEventListener("click", button1Clicked);

button2.addEventListener("click", button2Clicked);

function bookmarkToggle() {
  bookmark.forEach((book) => {
    if (book.classList.contains("bookmark-active")) {
      book.classList.remove("bookmark-active");
      book.src = "../images/icon-bookmark.svg";
      book.innerHTML = "Bookmark";
    } else {
      book.classList.toggle("bookmark-active");
      book.src = "../images/icon-bookmark-green.svg";
      book.innerHTML = "Bookmarked";
    }
  });
}

// Function to toggle card visibility
function cardToggle() {
  cardBackThisProjectParent.classList.toggle("cardBackThisProjectParent-active");
  cardBackThisProject.classList.toggle("cardBackThisProject-active");
  cardBackThisProject.classList.remove("closeButton-active");
}

// Function to close the card
function cardClose() {
  cardBackThisProject.classList.add("closeButton-active");
  cardBackThisProjectParent.classList.remove("cardBackThisProjectParent-active");
  cardBackThisProject.classList.remove("cardBackThisProject-active");
  rewardCircles.forEach((circle) => {
    circle.classList.remove("rewardCircle-active");
  });
  getClicked.forEach((clicked) => {
    clicked.classList.remove("getClicked-active");
  });
  cardChildClicked.forEach((card) => {
    card.classList.remove("cardChild-active");
  });
}

function cardChildClick(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("rewardCircle")) {
    rewardCircles.forEach((reward) => {
      reward.classList.remove("rewardCircle-active");
    });

    getClicked.forEach((click) => {
      click.classList.remove("getClicked-active");
    });

    clickedElement.classList.add("rewardCircle-active");

    const cardChild = clickedElement.closest(".cardChildClicked");
    if (cardChild) {
      const getClickedElement = cardChild.querySelector(".getClicked");
      if (getClickedElement) {
        getClickedElement.classList.add("getClicked-active");
      }
    }
  }

  cardChildClicked.forEach((card) => {
    if (card.contains(clickedElement)) {
      card.classList.add("cardChild-active");
    } else {
      card.classList.remove("cardChild-active");
    }
  });
}

function buttonBack() {
  cardThanksParent.classList.toggle("cardThanksParent-active");
  cardThanks.classList.toggle("cardThanks-active");
  cardBackThisProjectParent.classList.remove("cardBackThisProjectParent-active");
  cardBackThisProject.classList.remove("cardBackThisProject-active");
  rewardCircles.forEach((circle) => {
    circle.classList.remove("rewardCircle-active");
  });
  getClicked.forEach((clicked) => {
    clicked.classList.remove("getClicked-active");
  });
  cardChildClicked.forEach((card) => {
    card.classList.remove("cardChild-active");
  });
}

function thanksButtonClicked() {
  cardThanksParent.classList.remove("cardThanksParent-active");
  cardThanks.classList.remove("cardThanks-active");
}

function hamburgerToggle() {
  if (hamburgerButton.classList.contains("ham-active")) {
    hamburgerButton.classList.remove("ham-active");
    hamburgerButton.src = "../images/icon-hamburger.svg";
  } else {
    hamburgerButton.classList.toggle("ham-active");
    hamburgerButton.src = "../images/icon-close-menu.svg";
  }

  navLink.classList.toggle("navLink-active");
}

function button1Clicked() {
  cardChildClicked1.classList.add("cardChild-active");
  rewardCircle1.classList.add("rewardCircle-active");
  getClicked1.classList.add("getClicked-active");
}

function button2Clicked() {
  cardChildClicked2.classList.add("cardChild-active");
  rewardCircle2.classList.add("rewardCircle-active");
  getClicked2.classList.add("getClicked-active");
}
