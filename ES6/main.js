/*  class List{
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



 */

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