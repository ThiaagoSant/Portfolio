export default function progressCircle() {
  let options = {
    startAngle: -1.55,
    size: 159,
    value: 0.85,
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
    value: 0.65,
  });

  $(".jquery .bar").circleProgress({
    value: 0.4,
  });

  $(".seo .bar").circleProgress({
    value: 0.3,
  });
}
