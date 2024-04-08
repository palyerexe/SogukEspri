const butonlar = document.querySelectorAll(".gor");

butonlar.forEach((buton) => {
  buton.addEventListener("click", () => {
    buton.parentElement.classList.toggle("active");
  });
});
