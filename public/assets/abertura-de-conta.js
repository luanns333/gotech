$(document).ready(function() {
    const name = $("#inputName").val();
    const nomeSocial = $("#inputNSocial").val();
    const cpf = $("#inputCPF").val();
    const date = $("#inputDate").val();
    const email = $("#inputEmail").val();
    const telefone = $("#inputTelefone").val();
    
    const loug = $("#inputLougradouro").val();
    const num = $("#inputNum").val();
    const comp = $("#inputComp").val();
    const bairro = $("#inputBairro").val();
    const cidade = $("#inputCity").val();
    const estado = $("#inputState").val();
    
    $("#inputCPF").mask("000.000.000-00")
    $("#inputTelefone").mask("(00) 00000-0000")
    $("#inputCep").mask("00.000-000")
    $("#inputCep").on("focusout", preencherCep)

})

const preencherCep = () => {
    const cep = $("#inputCPF").val();
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    const request = new XMLHttpRequest(); 
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var jsonData = request.response;
        console.log(jsonData);
    }
}





