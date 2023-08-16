function menu(){



opcao = parseInt(
  prompt(
    "------ Menu Principal ------\n\n" +
      "1 - Cadastro de Cliente \n" +
      "2 - Cadastro de Colaborador \n" +
      "3 - Cadastro de Produto \n" +
      "4 - Sair do Sistema"
  )
);
};

switch (opcao) {
  case 1:
    cadastrar_cliente();
    break;

  case 2:
    cadastrar_colaborador();
    break;

  case 3:
    cadastrar_produto();
    break;

  default:
    alert("Finalizando sistema de cadastro");
    document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!";
}


/* Cadastrar cliente */
function cadastrar_cliente(){
    let x ="n";
    relatorio = "* - Relatorio de Clientes -* <br>"

    while(x.toUpperCase() != "S"){
        id = parseInt(prompt("Digite o ID do cliente"))
        nome = prompt("Digite o nome do cliente")
        endereco = prompt("Digite o endereço do cliente")

        relatorio = relatorio + "<br>+--------------------------------------------------------------+<br><br>"+
        "ID : " + id + "<br>" +
        "ENDEREÇO : " + endereco+
        "<br>+--------------------------------------------+<br><br>"


        confirme = prompt("Finalizar cadastro? S - para sim ou N - para não");

        if(confirme.toUpperCase =="S"){
            x="S"
        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    }
}