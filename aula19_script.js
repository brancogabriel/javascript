function valida(){
    var nome = document.getElementById('nome');

    if (nome.value == ""){
        alert("Campo nome não pode estar em branco.");
    }else {
        alert("Nenhum problema foi detecado. Seu formulário pode ser enviado com sucesso.");
    }
}