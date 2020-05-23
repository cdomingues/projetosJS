var listElement = document.querySelector('#app ul'); //busca dentro da div app a ul
var inputElement = document.querySelector('#app input');//busca dentro da div app o input
var buttonElement = document.querySelector('#app button');

/* var todos = [
    'Fazer café', 
    'Estudar',
    'Acessar site js'
]; */

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
function renderTodos (){

    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos  = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        //console.log(todo);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    savatoStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    savatoStorage();
}

function savatoStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));

}