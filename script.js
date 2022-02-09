const gridContainer = document.querySelector('.grid-container');
const buttons = document.querySelectorAll('.buttons button');
let divs;

buttons.forEach((button)=>{
    button.addEventListener('click', ()=> {
        if(button.className == "ten"){
            gridTen();
        }else if(button.className == "twenty"){
            gridTwenty();
        }else if(button.className == "thirty"){
            gridThirty();
        }else{
            emptyGrid();
        }
    })
})


function gridTen(){
    if(gridContainer.firstChild){
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
    if(!gridContainer.firstChild){
        for(let i = 0; i < 100; i++){
            let field = document.createElement('div');
            field.classList.add('fieldTen');
            gridContainer.appendChild(field);
        }
        divs = document.querySelectorAll('.grid-container div');
        draw();
    }
}

function gridTwenty(){
    if(gridContainer.firstChild){
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
    if(!gridContainer.firstChild){
        for(let i = 0; i < 400; i++){
            let field = document.createElement('div');
            field.classList.add('fieldTwenty');
            gridContainer.appendChild(field);
        }
        divs = document.querySelectorAll('.grid-container div');
        draw();
    }
}

function gridThirty(){
    if(gridContainer.firstChild){
        while(gridContainer.firstChild){
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
    if(!gridContainer.firstChild){
        for(let i = 0; i < 900; i++){
            let field = document.createElement('div')
            field.classList.add('fieldThirty');
            gridContainer.appendChild(field);
        }
        divs = document.querySelectorAll('.grid-container div');
        draw();
    }
}

function emptyGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function draw(){
    divs.forEach((div)=>{
        div.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor='maroon';
        })
    })
}
