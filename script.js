const aikon = document.querySelector(".aikon");
const kado = document.querySelector(".kado");
const dkado = document.querySelector(".dkado");

// kue
const kue = document.createElement("i");
const textkue = document.createTextNode("");
kue.appendChild(textkue);
dkado.appendChild(kue);
kue.classList.add("fi", "fi-rr-cake-birthday", "hapus");

kue.style.color = "#6e4230";
kue.style.fontSize = "100px";

// kalo kado di klik tampilkan event
kado.addEventListener("click", function () {
  aikon.classList.toggle("hapus");
  balon.classList.toggle("hapus");
  kado.classList.toggle("hapus");
  kue.classList.toggle("hapus");
});

// balon kanan
const balon = document.createElement("i");
const textBalon = document.createTextNode("");
balon.classList.add("fi", "fi-rr-balloons", "hapus");
balon.style.color = "#6e4230";
balon.style.fontSize = "100px";
balon.appendChild(textBalon);
dkado.appendChild(balon);
