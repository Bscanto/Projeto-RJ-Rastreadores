<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST['nome'];
  $telefone = $_POST['telefone'];
  $email = $_POST['email'];
  $quantidade = $_POST['quantidade'];
  $veiculo = $_POST['veiculo'];
  $duvidas = $_POST['duvidas'];

  $destino = "contato@rjrastreadores.com.br"; // substitua pelo seu e-mail
  $assunto = "Nova mensagem do formulário de contato";

  $mensagem = "Nome: $nome\n";
  $mensagem .= "Telefone: $telefone\n";
  $mensagem .= "Email: $email\n";
  $mensagem .= "Quantidade de veículos: $quantidade\n";
  $mensagem .= "Tipo de veículo: $veiculo\n";
  $mensagem .= "Dúvidas: $duvidas\n";

  $headers = "From: $email";

  if (mail($destino, $assunto, $mensagem, $headers)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Erro ao enviar mensagem.";
  }
}
?>