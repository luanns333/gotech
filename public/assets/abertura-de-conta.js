$(document).ready(function() {
    

    //mascaras
    $("#inputCPF").mask("000.000.000-00")
    $("#inputTelefone").mask("(00) 00000-0000")
    $("#inputCep").mask("00.000-000")

    //eventos
    $("#inputCep").on("focusout", fillZipCode)
    $("#inputEmail").on("focusout", emailValidate)
    $("#button").on("click", validateForm)
    $("#secondaryButton").on("click", erraseForm)

})

async function fillZipCode (){
    const cep = $("#inputCep").val().replace('.', '').replace('-', '');
    //faz a chamada para o viacep
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });

        if(data.erro ==  true){
            toastr.error('CEP inválido', 'Atenção')
            return false
        }

        //preenche os campos de endereço
        $('#inputLougradouro').val(data.logradouro)
        $('#inputBairro').val(data.bairro)
        $('#inputCity').val(data.localidade)
        $('#inputState').val(data.uf)

        console.log(data);
        toastr.success('CEP encontrado com sucesso!')
        return data

    } catch (error) { //em caso de erro no try vai rodar o catch
        toastr.error('Erro ao buscar o CEP', 'Atenção')
        console.error(error);
    }
}

function emailValidate(){
    let regex = /\S+@\S+\.\S+/;
    let email = $("#inputEmail").val();

    if(!regex.test(email)){
        toastr.error('E-mail inválido', 'Atenção')
    }
}

function validateForm(){
    const name = $("#inputName").val();
    const cpf = $("#inputCPF").val();
    const date = $("#inputDate").val();
    const email = $("#inputEmail").val();
    const telefone = $("#inputTelefone").val();
    const loug = $("#inputLougradouro").val();
    const num = $("#inputNum").val();
    const bairro = $("#inputBairro").val();
    const cidade = $("#inputCity").val();
    const estado = $("#inputState").val();
    
    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }

    if(cpf == ''){
        toastr.error('Campo de CPF é obrigatório')
    }

    if(date == ''){
        toastr.error('Campo de Daata de Nascimento é obrigatório')
    }

    if(email == ''){
        toastr.error('Campo de E-mail é obrigatório')
    }

    if(telefone == ''){
        toastr.error('Campo de Telefone é obrigatório')
    }

    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }

    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }

    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }

    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }

    if(name == ''){
        toastr.error('Campo de Nome Completo é obrigatório')
    }
    
}

function erraseForm(){
    $("#inputName").val('');
    $("#inputNSocial").val('');
    $("#inputCPF").val('');
    $("#inputDate").val('');
    $("#inputEmail").val('');
    $("#inputTelefone").val('');
    $("#inputCep").val('');
    $("#inputLougradouro").val('');
    $("#inputNum").val('');
    $("#inputComp").val('');
    $("#inputBairro").val('');
    $("#inputCity").val('');
    $("#inputState").val('');

}



