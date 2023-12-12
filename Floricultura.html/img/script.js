function rolarParaFormulario(identificador) {
    var formulario = document.getElementById(identificador);
    formulario.style.display = "block";


    };

function mostrarFormulario(nomePlanta) {
    document.getElementById("formulario").style.display = "block";
    document.getElementById("confirmacaoMensagem").classList.remove("fade-in");
    var mensagem = "Estou interessado no (a) " + nomePlanta;
    document.getElementById("mensagem").value = mensagem;
    document.getElementById("formulario").scrollIntoView({ behavior: 'smooth'})
}

function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var WhatsApp = document.getElementById("WhatsApp").value;
    var mensagem = document.getElementById("mensagem").value;

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("WhatsApp").value = "";
    document.getElementById("mensagem").value = "";

    var confirmacaoMensagem = document.getElementById("confirmacaoMensagem");
    confirmacaoMensagem.classList.add("fade-in");

    setTimeout(function () {
        document.getElementById("formulario").style.display = "none";
    }, 3000);
}
