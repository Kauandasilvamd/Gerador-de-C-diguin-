// script.js

function gerarCodigo() {
    const caracteres = 'ABCDEFGHIJKfreefireeLMNOPQRS7424TUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[randomIndex];
    }
    const skinSelecionada = document.getElementById('skin-select').value;
    document.getElementById('codigo-gerado').innerText = `Skin: ${skinSelecionada} | Código: ${codigo}`;
    document.getElementById('mensagem-sucesso').innerText = 'Código gerado com sucesso! escreva se no canal goku txt';
}
