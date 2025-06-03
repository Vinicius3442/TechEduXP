const errorbutton = document.getElementById("error-button");
const bsod = document.getElementById("error");
const erroSom = document.getElementById("error-sound");
let tentativas = 0;

errorbutton.addEventListener("click", () => {
  tentativas++;
  if (tentativas >= 5) {
    bsod.style.display = "flex";
    erroSom.play();
    document.addEventListener("keydown", () => {
      bsod.style.display = "none";
      tentativas = 0;
    }, { once: true });
  }
});
