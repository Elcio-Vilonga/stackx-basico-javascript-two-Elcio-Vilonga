let listaMensagens = [];

function adicionarMensagem(apelido, mensagem){
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem
  });
}
//O objetivo dessa função é percorrer o array ```listaMensagens``` e montar uma estrutura de HTML
function formatarMensagens(){
  let htmlChat = '';
  
    for(let i in listaMensagens){
      let mensagemChat = listaMensagens[i];
      htmlChat += `
        <div class="chat-message">
          <span class="chat-message-apelido">
              ${mensagemChat.apelido}
          </span>
          <span class="chat-message-item">
              ${mensagemChat.mensagem}
          </span>
        </div>
      `;
    }
    document.getElementById('chat-messages').innerHTML = htmlChat;
}
//O objetivo dessa função é receber os valores formatados da função formatarMensagens e atualizar o conteudo da div #chat-messages.
function atualizarHTML(){
  document.getElementById('chat-messages').innerHTML = formatarMensagens();
}
//O objetivo dessa função é executar a função: ```adicionarMensagem``` passando o valor de ```#message-input``` com um apelido que você desejar associar
function commitMessageClickHandler(){
  let entrada = document.getElementById('message-input');

  if(entrada.value.trim().length == 0){
    entrada.focus();
    return;
  }
  //como na mensagem aparecia "undefined", eu queria separar o array com o split, 
  //colocar conteúdo na mensagem com o shift e depois juntar num único testo como joi. Mas não consegui...
  // let palavras = entrada.value.split(' ');
  // let mensagem = palavras.shift(); 
  // let apelido = palavras.join(' ');
  
  adicionarMensagem(entrada.value);
  formatarMensagens();
  document.getElementById('message-input').value = '';

}

window.addEventListener('load', function(){
  formatarMensagens();
});


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------