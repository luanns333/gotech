$(document).ready(function() {
    
    $("#loginClick").on("click", loginClick)
    $("#secondaryButton").on("click", secondaryButton)

})

function loginClick() {
    const usuarios = {
        "email": "luan@gmail.com",
        "senha": "123"
    }
    const email = $("#exampleInputEmail1").val()
    const senha = $("#exampleInputPassword1").val()
    if(email == usuarios.email && senha == usuarios.senha) {
        toastr.success("Login realizado com sucesso")
        setTimeout(() => {
            window.location.replace("/");
        }, 2000);
    } else {
        toastr.error("E-mail e/ou senha inválidos")
    }
}

function secondaryButton() {
    window.location.replace("/abertura-de-conta");
}