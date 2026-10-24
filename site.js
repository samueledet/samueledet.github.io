// Theme toggle (remembered per visitor) and footer year.
(function () {
  var root = document.documentElement;
  document.getElementById("theme").addEventListener("click", function () {
    var dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
