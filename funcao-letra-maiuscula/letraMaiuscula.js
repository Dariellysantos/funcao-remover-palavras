function caixaAlta(palavraMinuscula) {
  palavraMinuscula = palavraMinuscula.trim();

  if (palavraMinuscula == "") {
    return Error("A palavra recebida é inválida: vazia");
  }
  if (typeof palavraMinuscula !== "string") {
    return Error("A palavra recebida é inválida: não é uma string");
  }

  return palavraMinuscula.toUpperCase();
}

function main() {
  let resultado = caixaAlta(" ");
  return console.log(resultado);
}

main();
