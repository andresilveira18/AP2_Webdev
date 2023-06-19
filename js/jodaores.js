

const body  = document.body;

const header = document.createElement('h1');
header.id = 'header';
header.innerHTML = 'Elenco Profissional';
body.appendChild(header);

function saveDescription(nome){
    localStorage.setItem("nome",nome.id)
    window.location = 'detalhes.html';
}

function listaElencoFeminino(){
    //Cria a frase "Elenco Feminino"
    const elenco_feminino = document.createElement('h2');
    elenco_feminino.id = 'elenco_feminino';
    elenco_feminino.innerHTML = 'Elenco Feminino';
    body.appendChild(elenco_feminino);
    
    //Cria a estrutua do container que contem as fotos do elenco feminino
    const container_feminino = document.createElement('div');
    container_feminino.className = 'container';
    body.appendChild(container_feminino);

    //Lista cada jogador do elenco feminino
    jogadores.forEach(jogador => {
        
        if(jogador.elenco == 'feminino'){
            const element = document.createElement('div');
            element.className = 'jogador';
            element.id = `${jogador.nome.replace(' ', '')}`;
            element.innerHTML = `<img style="width:100%;" onclick={saveDescription(${element.id.replace(' ', '')})}  src="${jogador.imagem}" alt="imagem-${jogador.nome}">
                                <h5 class="names">${jogador.nome}</h5>
                                `;
            container_feminino.appendChild(element);
            
        }
    })
}

listaElencoFeminino();

function listaElencoMasculino(){
    //Cria a frase "Elenco Masculino"
    const elenco_masculino = document.createElement('h2');
    elenco_masculino.id  = 'elenco_masculino';
    elenco_masculino.innerHTML = 'Elenco Masculino';
    body.appendChild(elenco_masculino);

    //Cria a estrutua do container que contem as fotos do elenco masculino  
    const container_masculino = document.createElement('div');
    container_masculino.className = 'container';
    body.appendChild(container_masculino);

    //Lista cada jogador do elenco masculino
    jogadores.forEach(jogador => {
        
        if(jogador.elenco == 'masculino'){
            const element = document.createElement('div');
            element.className = 'jogador';
            element.id = `${jogador.nome.replace(' ', '')}`;
            element.innerHTML = `<img style="width:100%;" onclick={saveDescription(${element.id.replace(' ', '')})}  src="${jogador.imagem}" alt="imagem-${jogador.nome}">
                                <h5 class="names">${jogador.nome}</h5>
                                `;
            container_masculino.appendChild(element);
            
        }
    })
}

listaElencoMasculino();
