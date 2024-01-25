function lerArquivo() {
    const fileInput = document.getElementById('fileInput');

    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Selecione um arquivo para processar.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const fileContent = event.target.result;

        const imagens = extrairImagens(fileContent);
        const imagensUnicas = removerDuplicatas(imagens);
        exibirImagens(imagensUnicas);

        // Aplicar estilo após processamento do arquivo
        aplicarEstilo();
    };

    reader.readAsText(file);
}

function extrairImagens(texto) {
    const regex = /https:\/\/pbs\.twimg\.com\/media\/(.*?)\?format=jpg/g;
    const matches = texto.match(regex);

    return matches || [];
}

function removerDuplicatas(array) {
    return Array.from(new Set(array));
}

function exibirImagens(imagens) {
    const divImagens = document.getElementById('stringsEncontradas');
    divImagens.innerHTML = ''; // Limpa o conteúdo atual da div

    imagens.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagem';
        img.onclick = function () {
            window.open(url); // Abre a imagem em uma nova aba ao ser clicada
        };
        divImagens.appendChild(img);
    });
}

function aplicarEstilo() {
    document.documentElement.classList.add('arquivo-processado'); // Adiciona uma classe ao <html>
}


function validarDom() {
    // Substitua 'suaURL' pela URL da página que você deseja recuperar
    /*var suaURL = 'https://https://twitter.com/GameidentityV';
    var url = 'https://https://twitter.com/GameidentityV';

    // Faz uma solicitação AJAX para a página desejada
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'html',
      success: function (data) {
        // 'data' agora contém o conteúdo da página web
        console.log(data);
      },
      error: function (error) {
        console.error('Erro ao obter a página:', error);
      }
    });
    */
}