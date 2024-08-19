// 1 - criação de função

function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log('Imprimindo: ' + txt);
}

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("Outra coisa");

// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b)

console.log(resultado)

console.log(soma(c, d))

// 3 - escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log('Y dentro da funçãop é: ' + y)
}

testandoEscopo();

console.log('Y fora da funçãop é: ' + y)


// 4 - escopo alinhado
let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m);
        }
        console.log(m);
    }
    console.log(m);

}

escopoAninhado();

console.log(m);


