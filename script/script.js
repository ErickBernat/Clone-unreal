let listaLinks = document.getElementById('listaLinks');
let botaoEntrar = document.getElementById('botaoEntrar');
var controla = false;
var entrouNaDiv = false;

window.addEventListener("DOMContentLoaded", adicionaLinkLista);

let links = [
    { nome: 'Visão geral',subNomes:['oi','oi','oi'], class: 'rotaciona', id: 1},
    { nome: 'Usos',subNomes:['ab','ab','ab'], class: 'rotaciona', id: 2 },
    { nome: 'Novidades' },
    { nome: 'Fóruns' },
    { nome: 'Documentação' },
    { nome: 'Aprendizados', class: 'rotaciona', id: 3 },
    { nome: 'Conectar', class: 'rotaciona', id: 4 },
    { nome: 'Mais', class: 'rotaciona', id: 5 }
];

function adicionaLinkLista() {
    let i = 0;
    links.forEach(item => {
        
        if (item.class == 'rotaciona') {
            listaLinks.innerHTML += `
            <div class='conteudoMenu'>
                <div class='conteudo_rotaciona'>
                    <a href="" id="link-${item.id}" ">${item.nome}</a>
                    <img  class="seta ${item.class}" src="./assets/images/seta.png" alt="Seta" >
                </div>
                <div id="div-${item.id}" class="divSobrepoe" style="display: none;">
                     
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


    subListas.forEach(item =>{
        links.forEach(link => {
        
        item.innerHTML+=`
         <a href="" id="link-${item.id}" ">${link}</a>
        
        `

    })

})



   

    


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
