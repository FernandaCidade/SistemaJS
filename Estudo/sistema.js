//Percorrer de zero até o número de alunos

//1 - Inserir o número
//2 - Listar o nome dos participantes

var numerosAlunos = 10;

for (let contador = 0; contador <= numerosAlunos; contador++) {
    //console.log(contador)
    
    if (contador == 0) {

        console.log('O número atual é zero')

    }else if (contador % 2 == 0) {

        console.log('O número ' + contador +' é par')

    }else{

        console.log('o número ' + contador +' é impar') //Interpolação

    }
}

contador=0;
classificacaoAlunos = 10;


while (contador < classificacaoAlunos) {

    console.log(contador)
    if (contador == 0) {

        console.log('O número atual é zero')

    }else if (contador % 2 != 0) {

        console.log('O número ' + contador +' é par')

    }else{

        console.log('o número ' + contador +' é impar') //Interpolação

    }
    contador++;
    
}

let nomeAlunos = ["Fernanda", "Késsia", "Suzanne", "Marcelo"]

for(let nome of nomeAlunos){

    console.log("O nome desse aluno é: " + nome)

}