// Seleciona os elementos do DOM
const spam = document.getElementById('window');
const inputArquivo = document.getElementById('inputArquivo');

// Adiciona um evento de clique ao spam
spam.addEventListener('click', () => {
    inputArquivo.click(); // Simula um clique no input de arquivo
});

// Adiciona um evento de mudança ao input de arquivo
inputArquivo.addEventListener('change', (event) => {
    const arquivoSelecionado = event.target.files[0];
    if (arquivoSelecionado) {
        alert(`Você selecionou o arquivo: ${arquivoSelecionado.name}`);
    }
});

function openWindow() {
    let window = document.getElementById('window');
    window.style.display = 'flex';

    let input = document.getElementById('inputArquivo');
    input.click();
}