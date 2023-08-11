

let organelas = {
    Animal: [
        {nome: 'Membrana Plasmática', funcao: ''},
        {nome: 'Ribossomo' ,funcao:''},
        {nome: 'Lisossomo',funcao:''},
        {nome: 'Peroxissomo',funcao:''},
        {nome: 'Mitocôndria',funcao:''},
        {nome: 'Núcleo',funcao:''},
        {nome: 'Nucléolo',funcao:''},
        {nome: 'Centríolo',funcao:''},
        {nome: 'Citoesqueleto',funcao:''},
        {nome: 'Retículo endoplasmático rugoso',funcao:''},
        {nome: 'Retículo endoplasmático liso',funcao:''},
        {nome: 'Complexo de Golgi',funcao:''},
        {nome: 'vacuola',funcao:''}
        
    ],
    Vegetal: [
        {nome: 'Membrana Plasmática',funcao:''},
        {nome: 'Citoplasma',funcao:''},
        {nome: 'Núcleo',funcao:''},
        {nome: 'Nucléolo',funcao:''},
        {nome: 'Reticulo endoplasmático rugoso',funcao:''},
        {nome: 'Retículo endoplasmático liso',funcao:''},
        {nome: 'Mitocôndrias',funcao:''},
        {nome: 'Citoesqueleto',funcao:''},
        {nome: 'Mitocôndria',funcao:''},
        {nome: 'Peroxissomo',funcao:''},
        {nome: 'Complexo de golgi',funcao:''},
        {nome: 'Lisossomos',funcao:''},
        {nome: 'Centríolos',funcao:''},
        {nome: 'Parede celular',funcao:''},
        {nome: 'Cloroplasto',funcao:''}
    ],
    Fungi: [
        {nome: 'Hifas', funcao:''},
        {nome: 'Esporos', funcao:''},
        {nome: 'Parede celular', funcao:''},
    ]
}

function iniciarEstudo(){
    let celula = prompt('Qual tipo de célula você que estudar?(Animal, Vegetal ou Fungi)')
    if (celula){
        let organelasCelula = organelas[celula];
        if (organelasCelula) {
            let organelas = prompt(`Escolha uma organela para saber a função:\n${organelasCelula.map(o => o.nome).join(',')}`);
            if (organelas){
                let infoorganelas = organelasCelula.find ( o => o.nome === organelas);
                if(infoorganelas){
                    exibirResultado(infoorganelas);
                } 
                else {
                    alert('Organela não encontrada.')
                }
            }
        }
        else {
            alert ('Tipo de célula não encontrado.')
        }
    }
}

function exibirResultado (organela){
    let resultado = document.getElementyByld('resultado');
    resultado.innerHTML = ` 
        <h2>${organela.nome}</h2>
        <p><strong>Função:</strong> ${organela.funcao}<p>
        <img src="imagens/${organela.imagem}" alt="${organela.nome}" width="200">
    `;
    resultado.style.display
}