export default function progressCircle() {
  function initProgressCircle() {
    let options = {
      startAngle: -1.55,
      size: 159,
      value: 0.95,
      fill: { color: "darkred" },
    };

    $(".circle .bar")
      .circleProgress(options)
      .on("circle-animation-progress", (event, progress, stepValue) =>
          $(this)
          .parent()
          .find("span")
          .text(String(stepValue.toFixed(2).substring(2)) + "%")
         );

    $(".js .bar").circleProgress({
      value: 0.90,
    });

    $(".jquery .bar").circleProgress({
      value: 0.86,
    });

    $(".seo .bar").circleProgress({
      value: 0.75,
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      initProgressCircle();
    }
  };

  const observer = new MutationObserver(handleMutation),
        observerTarget = document.querySelector(".habilidades");
  observer.observe(observerTarget, {attributes: true});
}
