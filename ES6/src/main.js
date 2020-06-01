/* /* /*  class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor (){
        super();
        this.usuario = 'Carlos'; 
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
    

    
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario(); 

class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));



 

 const arr = [1,3,4,5,8,10];
  
const newArr = arr.map(function(item){

    return item * 2;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
});


console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter); 


const usuario ={
    nome: 'Carlos',
    idade: 37,
    endereço: {
        cidade: 'São Paulo',
        estado:'SP'
    },
};

const {nome, idade, endereço:{cidade} } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

const usuario = {
    nome: 'Carlos',
    idade: 37,
    cidade: 'São Paulo', 
    estado: 'SP'
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

//REST
function soma(a,b,...params){
    return params;
}

console.log(soma(1,2,3,4,5,6,7));


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 =[...arr1, ...arr2];
console.log(arr3);


const nome2= 'Carlos';
const idade = '37';

//console.log("meu nome é " + nome2 + ", e tenho " + idade + " anos");

console.log(`Meu nome é ${nome2} e tenho ${idade} anos`);

*/

import api from './api';

class App{
    constructor(){//metodo construtos, inicia as variaveis
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
            }


        setLoading(loading = true){
            if(loading === true){
                let loadingEl = document.createElement('span');
                loadingEl.appendChild(document.createTextNode('Carregando...'));
                loadingEl.setAttribute('id', 'loading');
                this.formEl.appendChild(loadingEl);
            } else {
                document.getElementById('loading').remove();
            }
        }

        async addRepository(event){
        
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0)
            return;
            
            this.setLoading()
        
        try{
            const response = await api.get(`/repos/${repoInput}`);
        
        const { name, description, html_url, owner: { avatar_url } } = response.data;



        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';  
        this.render();
    }

    catch(err){
        alert('Repositório não existe');
    }
    this.setLoading(false);
    }
    render(){
        this.listEl.innerHtml = '';

        this.repositories.forEach(repo =>{

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();