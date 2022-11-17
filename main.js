//Variavel
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
//Quando adicionada a classe open no .modal-wrapper ele fecha
//3 maneiras de criar e atribuir funções a um evento
//form.onsubmit = () => {};
//form.onsubmit = handleSubmit;
const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title p"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};
form.onsubmit = function (event) {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  const message = `Seu IMC é ${result}`;
  Modal.message.innerText = message;
  Modal.open();
};
Modal.buttonClose.onclick = function () {
  Modal.close();
};
//Função com calculo do IMC -- Passa o valor de altura e peso  e retorna o valor
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
