//Seleciona os elementos necessários
const botao = document.getElementById('botao');
const lampada = document.getElementById('lampada');
const statusTexto = document.getElementById('status');

// Função para alternar o estado da lâmpada
function alternarLampada() {
    if (botao.textContent == 'Ligar'){
        //Muda para o estado "aceso"
        lampada.src = 'ligado.png'; //Caminho da imagem acesa
        botao.textContent = 'Desligar'; //Muda o texto do botao para "apagar"
        statusTexto.textContent = 'Aceso'; //Muda o status para "Aceso"
        statusTexto.style.color = 'Orange'; //Muda a cor do texto para 
        statusTexto.style.fontSize ='30px';

    } else{
        //Muda para o estado "apaga"
        lampada.src = 'apagado.png'; //Caminho da imagem apagada
        botao.textContent = 'Ligar'; //Muda o texto do botao para "ligar"
        statusTexto.textContent = 'Apagado'; //Muda o status para "Apagado"
        statusTexto.style.fontSize = '30px';
        statusTexto.style.color = 'rgb(126, 125, 125)';// Muda a cor do texto para cinza
    }
}
    // Adiciona o evento da clique ao botão 
    botao.addEventListener('click', alternarLampada);


