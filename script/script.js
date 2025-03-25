let listaLinks = document.getElementById('listaLinks');
let botaoEntrar = document.getElementById('botaoEntrar');
var controla = false;
var entrouNaDiv = false;

window.addEventListener("DOMContentLoaded", adicionaLinkLista);

let links = [
    { nome: 'Visão geral',subNomes:['Unreal Engine','Destaques','Licenciamento','Perguntas Frequentes'], class: 'rotaciona', id: 1},
    { nome: 'Usos',subNomes:['Mudança para a Unreal Engine ','Jogos AAA ','Jogos independentes','Jogos para celular','Unreal Editor para Fortnite','Filmes e TV ','Transmissões e eventos ao vivo '], class: 'rotaciona', id: 2 },
    { nome: 'Novidades' },
    { nome: 'Fóruns' },
    { nome: 'Documentação' },
    { nome: 'Aprendizados',subNomes:['Biblioteca de Aprendizado','Introduçao','Repositório de Trecho de código'], class: 'rotaciona', id: 3 },
    { nome: 'Conectar',subNomes:['Eventos','MegaGrants','MeetUps','Parceiros de Serviço','Estudantes e Escolas','Treinamento Profissional','Parceiros Academicos e de Treinamento'], class: 'rotaciona', id: 4 },
    { nome: 'Mais',subNomes:['MarketPlace'], class: 'rotaciona', id: 5 }
];

function adicionaLinkLista() {
    let i = 0;

    if(window.innerWidth <= 1200){
       links = links[0]
    };
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
            listaLinks.innerHTML += `
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
            
        } else {
            listaLinks.innerHTML += `
                <a href="" id="link-${item.id}" ">${item.nome}</a>
            `;
        }
    });

    let subListas=document.querySelectorAll('.divSobrepoe');




   

    


    links.forEach(item => {
        if (item.class == 'rotaciona') {
            let tagA = document.getElementById(`link-${item.id}`);
            let div = document.getElementById(`div-${item.id}`);
            let timeout;  
    
       
            tagA.addEventListener('mouseenter', () => {
                div.style.display = 'block';
                div.style.opacity = 1;
                div.style.zIndex = 50;
    
                
                clearTimeout(timeout);
            });
    
           
            tagA.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    div.style.opacity = 0;
                    setTimeout(() => {
                        div.style.display = 'none';
                    }, 100); 
                }, 100); 
            });
    
          
            div.addEventListener('mouseenter', () => {
                div.style.opacity = 1; 
                clearTimeout(timeout);
            });
    
         
            div.addEventListener('mouseleave', () => {
                div.style.opacity = 0; 
                setTimeout(() => {
                    div.style.display = 'none';
                }, 100);
            });
        }
    });
}
