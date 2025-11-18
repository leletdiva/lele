// Espera a página HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {

    // --- Lógica do Botão (do site anterior) ---
    const botao = document.getElementById("meuBotao");
    const mensagem = document.getElementById("mensagem");

    if(botao) { // Boa prática: checar se o elemento existe
        botao.addEventListener("click", function() {
            mensagem.textContent = "Você clicou no botão! O JavaScript está funcionando!";
            botao.textContent = "Clicado! 👍";
        });
    }

    // --- NOVA Lógica da Galeria ---
    
    // 1. Seleciona TODAS as imagens da galeria
    const imagensDaGaleria = document.querySelectorAll(".gallery-image");

    // 2. Adiciona um "ouvinte" de clique para CADA imagem
    imagensDaGaleria.forEach(function(imagem) {
        
        imagem.addEventListener("click", function() {
            // 'this' se refere à imagem que foi clicada
            const descricao = this.alt; 
            
            // 3. Mostra um alerta com a descrição da imagem
            alert("Você clicou na imagem: " + descricao);
        });
    });

})