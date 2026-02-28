function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    const botaoPrincipal = document.getElementById("botaoPrincipal");

    // Desaparece o botão principal
    botaoPrincipal.style.display = "none";

    // Exibe a mensagem
    mensagem.style.display = "block";

    // Cria botão extra apenas se não existir
    if (!document.getElementById("botaoExtra")) {
        const novoBotao = document.createElement("button");
        novoBotao.innerText = "Se me ama, clique aqui 💖";
        novoBotao.id = "botaoExtra";

        novoBotao.onclick = function () {
            window.location.href = "pagina2.html";
        };

        mensagem.after(novoBotao);
    }
}