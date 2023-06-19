

const body = document.body;
//Criação da div principal
const principal_div = document.createElement("div");
principal_div.id= "principal";
body.appendChild(principal_div);

function showDescription(){
    //Procura o nome do jogador armazenado no localStorage
    const name  = localStorage.getItem("nome");
    
    jogadores.forEach(jogador => {
        if (name == jogador.nome.replace(' ','')){
            //Cria a div que contém a imagem, o nome e a posição
            const image_div = document.createElement("div");
            image_div.className = 'image';
            image_div.innerHTML = `<img style="margin: 1rem 0;" src="${jogador.imagem}" alt ="imagem-${jogador.nome}">
                                    <h2 style="text-align:center;">${jogador.nome} <br> ${jogador.posicao.toUpperCase()}</h2>                       
                                    `;
            principal_div.appendChild(image_div);
            //Cria a div que contém a descrição, nome completo, data de nascimento e altura 
            const description_div = document.createElement("div");
            description_div.className = 'description';
            description_div.innerHTML = ` <p>${jogador.descricao}</p>
                                          <p style="margin: 1rem 0">
                                            <strong>Nome Completo:</strong>
                                            ${jogador.nome_completo}
                                            <br>
                                            <strong>Nascimento</strong>
                                            ${jogador.nascimento}
                                            <br>
                                            <strong>Altura</strong>
                                            ${jogador.altura}
                                          </p>
            `;
            principal_div.appendChild(description_div);
        }
    })
}

showDescription();
//Cria o link que redireciona a página para a principal(index.html)
const link_index = document.createElement("a");
link_index.href = 'index.html';
link_index.id = 'link_index';
link_index.innerText ='Voltar';
body.appendChild(link_index);
