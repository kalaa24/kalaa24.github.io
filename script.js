const aikon = document.querySelector(".aikon");
const kado = document.querySelector(".kado");
const dkado = document.querySelector(".dkado");
const btn = document.querySelector("button");
const foot = document.querySelector(".footer");

// kalo kado di klik tampilkan event
kado.addEventListener("click", function () {
  aikon.classList.toggle("hapus");
  kado.classList.toggle("hapus");
  foot.classList.toggle("hapus");
});
