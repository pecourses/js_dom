"use strict";

const database = [{
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
  {
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
  {
    src:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    desr: "man",
  },
];





const slider = new Slider([
  new Slide(
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "man"
  ),
  new Slide(
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    "demo"
  ),
  new Slide(
    "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    "grass"
  ),
]);

const img = document.getElementById("image");
const [prevBtn, nextBtn] = document.querySelectorAll(
  "#sliderContainer> div > button"
);

const createButtonHandler = (direction = "next") => {
  return (event) => {
    const newIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
    slider.currentIndex = newIndex;
    updateView();
  };
};

nextBtn.addEventListener("click", createButtonHandler("next"));
prevBtn.addEventListener("click", createButtonHandler("prev"));

updateView();

function updateView() {
  const {
    currentSlide: { src, description },
  } = slider;

  img.setAttribute("src", src);
  img.setAttribute("title", description);
}
