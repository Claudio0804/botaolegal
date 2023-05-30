function moverBotao() {
    var container = document.getElementById("container_fodase");
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var buttonWidth = document.getElementById("meuBotaoFodase").offsetWidth;
    var buttonHeight = document.getElementById("meuBotaoFodase").offsetHeight;

    var novoLeft = Math.floor(Math.random() * (containerWidth - buttonWidth));
    var novoTop = Math.floor(Math.random() * (containerHeight - buttonHeight));

    document.getElementById("meuBotaoFodase").style.left = novoLeft + "px";
    document.getElementById("meuBotaoFodase").style.top = novoTop + "px";
  }
  function tocarAudio() {
    var audio = document.getElementById("audioSim");
    audio.play();
  }