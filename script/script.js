let listaLinks = document.getElementById('listaLinks');
let listaLinksCortada = document.getElementById('listaLinksCortada');
let botaoEntrar = document.getElementById('botaoEntrar');
let botaoMenuHamburguer =  document.querySelector('.Menu-Hamburguer-Botao');
let MenuHamburguer =  document.querySelector('#Menu-Hamburguer');
let listaLinksHamburguer = document.querySelector('.inputs')
let imagemEpic = document.querySelector('.imageNav');


var controlaHambuger = false;
var entrouNaDiv = false;

window.addEventListener("DOMContentLoaded", adicionaLinkListaCortada);

if(botaoMenuHamburguer.style.display == 'none'){

}else{

    botaoMenuHamburguer.addEventListener('click',()=>{
        if(controlaHambuger == false){
         MenuHamburguer.style.display = 'block';
         MenuHamburguer.style.height="100vh"
         
     
         imagemEpic.style.display ='none';
         controlaHambuger = true;
        }else{
          MenuHamburguer.style.display = 'none'
          imagemEpic.style.display ='block';
         controlaHambuger=false
        }
     })

}





let links = [
    { nome: 'Visão geral',subNomes:['Unreal Engine','Destaques','Licenciamento','Perguntas Frequentes'], class: 'rotaciona', id: 1},
    { nome: 'Usos',subNomes:['Mudança para a Unreal Engine ','Jogos AAA ','Jogos independentes','Jogos para celular','Unreal Editor para Fortnite','Filmes e TV ','Transmissões e eventos ao vivo '], class: 'rotaciona', id: 2 },
    { nome: 'Novidades',id: 3},
    { nome: 'Fóruns',id: 4 },
    { nome: 'Documentação',id: 5 },
    { nome: 'Aprendizados',subNomes:['Biblioteca de Aprendizado','Introduçao','Repositório de Trecho de código'], class: 'rotaciona', id: 6 },
    { nome: 'Conectar',subNomes:['Eventos','MegaGrants','MeetUps','Parceiros de Serviço','Estudantes e Escolas','Treinamento Profissional','Parceiros Academicos e de Treinamento'], class: 'rotaciona', id: 7 },
    { nome: 'Mais',subNomes:['MarketPlace'], class: 'rotaciona', id: 8 }
];







function adicionaLinkListaCortada() {
    let i = 0;


 

    links.forEach(item => {
        
        if (item.class == 'rotaciona') {
            let linksHtml = ''
            
            if(item.subNomes){
                
                item.subNomes.forEach(subLink =>{
                    linksHtml+=`
                        <a href="" ">${subLink}</a>
                    `
                })
            }
            

            listaLinksCortada.innerHTML += `
            <div class='conteudoMenu'>
                <div class='conteudo_rotaciona'>
                    <li href="" id="link-${item.id}" ">${item.nome}</li>
                    <img  class="seta ${item.class}" src="./assets/images/seta.png" alt="Seta" >
                </div>
                <div id="div-${item.id}" class="divSobrepoe" style="display: none;">
                    ${linksHtml}
                </div>
            </div>
            `;
            listaLinksHamburguer.innerHTML+=`
            <a href="" id="link-${item.id}" ">${item.nome}</a>
        `;
            
        } else {
            listaLinksHamburguer.innerHTML+=`
                <a href="" id="link-${item.id}" ">${item.nome}</a>
            `
        }
    });

    links.forEach(item => {
        if (item.class == 'rotaciona') {
            let tagAs = document.getElementById(`link-${item.id}`);
            let diva = document.getElementById(`div-${item.id}`);
            let timeout;
   
            tagAs.addEventListener('mouseenter', () => {
                diva.style.display = 'block';
                diva.style.opacity = 1;
                diva.style.zIndex = 50;
                clearTimeout(timeout);
            });
   
            tagAs.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    diva.style.opacity = 0;
                    setTimeout(() => {
                        div.style.display = 'none';
                    }, 100); 
                }, 100); 
            });
   
            diva.addEventListener('mouseenter', () => {
                div.style.opacity = 1; 
                clearTimeout(timeout);
            });
   
            diva.addEventListener('mouseleave', () => {
                diva.style.opacity = 0; 
                setTimeout(() => {
                    diva.style.display = 'none';
                }, 100);
            });
        }
    });

}
