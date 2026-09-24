(function () {
  var copy = {
    all: "I build projects that use AI, vision and the web to solve everyday problems.",
    ai: "I build AI projects that turn speech and faces into useful tools.",
    web: "I build web apps that make everyday processes simpler.",
    "3d": "I build 3D models that help people find their way."
  };
  var lede = document.getElementById("lede");
  var buttons = document.querySelectorAll(".focus button");
  var items = document.querySelectorAll("#work-list li");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-focus");
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      lede.textContent = copy[f];
      items.forEach(function (li) {
        var kinds = li.getAttribute("data-kind").split(" ");
        li.hidden = !(f === "all" || kinds.indexOf(f) !== -1);
      });
    });
  });
})();
