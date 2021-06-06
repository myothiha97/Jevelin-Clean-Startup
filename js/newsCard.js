const slides = document.querySelectorAll(".news__slide");
const newsSlideBar = document.querySelector(".news__dots");

// window.screen.availHeight - for available height
// window.screen.availWidth  - for availabel width

// window.screen.width - for absolute width
// window.screen.height - for absolute height

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

const createNewsDots = () => {
  console.log("fucnton run");
  slides.forEach((_, i) => {
    newsSlideBar.insertAdjacentHTML(
      "beforeend",
      `<div class="news__dot" data-slide="${i}"></div>`
    );
  });
};

createNewsDots();

const activateNewsDots = (slide) => {
  document.querySelectorAll(".news__dot").forEach((dot) => {
    dot.classList.remove("activate-dot");
  });

  document
    .querySelector(`div[data-slide="${slide}"]`)
    .classList.add("activate-dot");
};

activateNewsDots(0);

const goSlideTo = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    s.style.opacity = "1";
  });
};

let currentSlide = 0;
goSlideTo(0);

const moveNextNewSlide = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    goSlideTo(currentSlide);
  } else {
    currentSlide++;
  }

  goSlideTo(currentSlide);
  activateNewsDots(currentSlide);
};

const movePrevNewsSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  goSlideTo(currentSlide);
  activateNewsDots(currentSlide);
};

newsSlideBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("news__dot")) {
    const { slide } = e.target.dataset;
    goSlideTo(slide);
    activateNewsDots(slide);
  }
});

// const hoverSlide = document.querySelector(".news__card--hover");

// const toAnimateItems = document.querySelectorAll(".hover__side");

// toAnimateItems.forEach((i) =>
//   i.addEventListener("mouseover", (e) => {
//     // i.querySelector(".rounded > i").classList.remove("activeSide");
//     i.querySelector(".rounded + i").classList.remove("deactivateSide");
//     i.querySelector(".rounded + i").classList.add("activeSide");
//     i.querySelector(".rounded").classList.add("activeSide");
//     i.querySelector(".rounded").classList.remove("deactivateSide");
//     i.querySelector(".rounded").style.backgroundColor = "#fff";
//     i.querySelector(".rounded + i").style.color = "black";
//   })
// );

// // hoverSlide.addEventListener("mouseover", (event) => {
// //   console.log("Mouse Enter");
// //   if (event.target.classList.contains("hover__side")) {
// //     const toAnimate = event.target.querySelector(".rounded");
// //     // event.target
// //     //   .querySelector(".rounded > i")
// //     //   .classList.remove("deactivateSide");
// //     // event.target.querySelector(".rounded > i").classList.add("activeSide");
// //     toAnimate.classList.remove("deactivateSide");
// //     toAnimate.classList.add("activeSide");
// //     toAnimate.style.backgroundColor = "#fff";
// //     event.target.querySelector(".rounded > i").style.color = "black";
// //   }
// // });

// toAnimateItems.forEach((i) =>
//   i.addEventListener("mouseleave", (e) => {
//     i.querySelector(".rounded + i").classList.remove("activeSide");
//     i.querySelector(".rounded").classList.remove("activeSide");
//     i.querySelector(".rounded").classList.add("deactivateSide");
//     i.querySelector(".rounded").style.backgroundColor = "transparent";
//     i.querySelector(".rounded + i").style.color = "#fff";
//   })
// );
