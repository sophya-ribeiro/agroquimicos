function validarMensagem(){

    let ret = true;

    let form = document.forms["formContato"];

    if(form.mensagem.value.trim() == "" ){
        alert("Pera lá! Você quer mandar uma mensagem sem escrever uma mensagem? Preencha o campo!")
        form.mensagem.focus();
        ret = false;
    }

    return ret;
}

let teste = "meu deus";
console.log(teste)