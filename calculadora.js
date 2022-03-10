function calculadora() {
    const operacao = prompt("Escolha uma operação: \n 1 - soma (+) \n 2 - subtração (-) \n 3 - multiplicação (*) \n 4 - divisão inteira (%) \n 5 - divisão real (/)\n 6 - potencição (**)") ;

    if (!operacao || operacao >=7){
        alert('Erro na operação, digite uma opção valida')
        calculadora()
    } else{
        let n1 = Number(prompt("Insira o primeiro valor!"));
        let n2 = Number(prompt("Insira o segundo valor!"));
        let resultado;

        function soma(){
            resultado = n1 +n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }

        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }

        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisao_inteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão inteira entre ${n1} e ${n2} é igual a  ${resultado}`)
            novaOperacao();
        }

        function divisao_real(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }

        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
            novaOperacao();
        }

        function novaOperacao(){
            let opcao = prompt('deseja fazer uma nova operação \n 1 - SIM \n 2 - NÃO');

            if (opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até mais!');
            } else {
                alert('Digite uma opção valida');
                novaOperacao();
            }
        }   

        if (operacao == 1){
            soma();
        } else if (operacao == 2){
            subtracao();
        } else if (operacao == 3){
            multiplicacao();
        } else if (operacao == 4){
            divisao_inteira();
        } else if (operacao == 5){
            divisao_real();
        } else if (operacao == 6){
            potenciacao();
        }
       /* switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao_inteira();
                break;
            case 5:
                divisao_real();
                break;
            case 6:
                potenciacao();
                break;
        } */
        
    }

    
}

calculadora()
