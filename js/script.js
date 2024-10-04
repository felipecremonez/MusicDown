// Seleciona os elementos do DOM
const spam = document.getElementById('mainButton');
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
    let input = document.getElementById('inputArquivo');
    input.click();
}


  // Função para validar se o arquivo é MP3
function validarArquivoMP3(arquivo) {
    const extensaoValida = arquivo.name.endsWith('.mp3');
    const tipoValido = arquivo.type === 'audio/mpeg';
    return extensaoValida && tipoValido;
}

// Adiciona um evento de mudança ao input de arquivo
inputArquivo.addEventListener('change', (event) => {
    const arquivoSelecionado = event.target.files[0];
    if (arquivoSelecionado) {
        if (validarArquivoMP3(arquivoSelecionado)) {
            alert(`Você selecionou um arquivo MP3 válido: ${arquivoSelecionado.name}`);
        } else {
            alert('Por favor, selecione um arquivo MP3 válido.');
        }
    }
})