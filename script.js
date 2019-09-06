"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start");

  switchTheme();

  function switchTheme() {
    const toggle = document.querySelector("#theme-changer");

    toggle.addEventListener("click", e => {
      console.log("Switching");
      if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
      }
    });
  }
}
