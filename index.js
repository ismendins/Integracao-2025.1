const pessoa = {
    nome : "Isabella",
    status : "true",
    valor : 108.46,
    endereco: {
        logradouro: "Rua",
        nome: "218",
        numero: "630"
    }
}

console.log(pessoa);

var pessoastr = JSON.stringify(pessoa);

console.log(pessoastr);

var pessoaobj = JSON.parse(pessoastr);

console.log(pessoaobj);