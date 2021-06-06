const comments = document.querySelectorAll(".customer__comment");
const slideBar = document.querySelector(".customer__dots");

const createDots = () => {
  comments.forEach((_, i) => {
    slideBar.insertAdjacentHTML(
      "beforeend",
      `<div class="customer__dot" data-comment=${i}></div>`
    );
  });
};

createDots();

const activateDot = (comment) => {
  document.querySelectorAll(".customer__dot").forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  document
    .querySelector(`div[data-comment="${comment}"]`)
    .classList.add("active-dot");
};

comments.forEach((c, i) => (c.style.transform = `translateY(${100 * i}%)`));

const moveSlideTo = (comment) => {
  comments.forEach((c, i) => {
    c.style.transform = `translateY(${100 * (i - comment)}%)`;
  });
};

let currentComment = 0;

moveSlideTo(0);
activateDot(0);

const moveNextSlide = () => {
  if (currentComment === comments.length - 1) {
    currentComment = 0;
    moveSlideTo(currentComment);
  } else {
    currentComment++;
  }
  moveSlideTo(currentComment);
  activateDot(currentComment);
};

const movePrevSlide = () => {
  if (currentComment === 0) {
    currentComment = comments.length - 1;
  } else {
    currentComment--;
  }

  moveSlideTo(currentComment);
  activateDot(currentComment);
};

slideBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("customer__dot")) {
    const { comment } = e.target.dataset;
    moveSlideTo(comment);
    activateDot(comment);
  }
});
