"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function (e) {
    removeActive();
    panel.classList.add("active");
  });
});

//Remove "active" class

function removeActive() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
