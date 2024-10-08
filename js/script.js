// Seleciona os elementos do DOM
const spam = document.getElementById('mainButton');
const inputArquivo = document.getElementById('inputArquivo');
const modal = document.getElementById('myModal');
const spanClose = document.getElementsByClassName('close')[0];
const modalMensagem = document.getElementById('modalMensagem');


// Adiciona um evento de clique ao spam
spam.addEventListener('click', () => {
    inputArquivo.click(); // Simula um clique no input de arquivo
});

// Adiciona um evento de mudança ao input de arquivo
// inputArquivo.addEventListener('change', (event) => {
//     const arquivoSelecionado = event.target.files[0];
//     if (arquivoSelecionado) {
//         alert(`Você selecionou o arquivo: ${arquivoSelecionado.name}`);
//     }
// });

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
            modalMensagem.textContent = `Você selecionou um arquivo MP3 válido: ${arquivoSelecionado.name}`;
        } else {
            modalMensagem.textContent = 'Apenas arquivos MP3 são permitidos.';
        }
        modal.style.display = 'flex'; // Exibe o modal
    }
})
// Fecha o modal quando o usuário clica no X
spanClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});