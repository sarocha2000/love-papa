const questionContainer = document.querySelector(".question-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const heartLoader = document.querySelector(".cssload-main");
const yesResultContainer = document.querySelector(".result-container.yes");
const noResultContainer = document.querySelector(".result-container.no");
const gifResult = document.querySelector(".gif-result");
const restartBtns = document.querySelectorAll(".restart-btn");

function result(questionContainer, heartLoader, resultContainer, gifResult, playVideo) {
  questionContainer.style.display = "none";
  resultContainer.style.display = "inherit";
  
  if (playVideo) {
    gifResult.play();
  }
}

// yes button functionality
yesBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, yesResultContainer, gifResult, true);  // play the video on Yes
});

// no button functionality
noBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, noResultContainer, gifResult, false);  // don't play the video on No
});

// restart button functionality
restartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // หยุดการเล่นวิดีโอและรีเซ็ตเวลาเริ่มต้น
    gifResult.pause();
    gifResult.currentTime = 0;

    heartLoader.style.display = "inherit";
    yesResultContainer.style.display = "none";
    noResultContainer.style.display = "none";

    setTimeout(() => {
      questionContainer.style.display = "inherit";
      heartLoader.style.display = "none";
    }, 3000);
  });
});
