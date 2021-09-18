

//SELECTORS
const todoInput = document.querySelector(".input-field");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const filter = document.querySelector('.hideDiv');

//EVENT LISTENERS

form.addEventListener('submit', createTodo)

ul.addEventListener('click', manipulateTodo)

filter.addEventListener('change', filterTodos)



//FUNCTIONS


/* FUNCTION TO CREATE A TODO ITEM */
function createTodo(e) {
    e.preventDefault();

    if (/\w/.test(todoInput.value)) {
        const list = document.querySelector(".list");
        li = document.createElement('li');
        text = todoInput.value;
        todoInput.value = "";

        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);

        const iconsDiv = document.createElement('div');
        iconsDiv.className = "icons";
        li.appendChild(iconsDiv);

        const complete = document.createElement('i');
        complete.className = "fas fa-check";
        iconsDiv.appendChild(complete);

        const edit = document.createElement('i');
        edit.className = "far fa-edit";
        iconsDiv.appendChild(edit)

        const del = document.createElement('i');
        del.className = "fas fa-trash";
        iconsDiv.appendChild(del);

        list.appendChild(li);
    }else{
        alert('please enter a todo item')
    }
}


/* FUNCTION TO EDIT,SAVE OR DELETE A TODO ITEM */
function manipulateTodo(e) {
    if (e.target.tagName === 'I') {
        button = e.target;
        todo = button.parentNode.parentNode;

        if (button.classList.contains('fa-check')) {
            todo.firstChild.classList.toggle('completed')
            if (todo.firstChild.classList.contains('completed')) {
                button.style.color = 'green'
            } else { button.style.color = '' }

        } else if (button.classList.contains('fa-trash')) {
            todo.remove();

        } else if (button.classList.contains('fa-edit')) {

            p = todo.firstElementChild;
            text = p.textContent;

            input = document.createElement('input');
            input.type = "text";
            input.className = 'editInput';
            input.value = text;

            todo.insertBefore(input, p);
            todo.removeChild(p);

            todo.children[1].children[1].className = 'fas fa-save';


        } else if (button.classList.contains('fa-save')) {



            input = todo.firstElementChild;
            text = input.value;
            p = document.createElement('p');
            p.textContent = text;

            todo.insertBefore(p, input);
            todo.removeChild(input);
            todo.children[1].children[1].className = 'fas fa-edit';

        }
    }
}

/* FUNCTION TO FILTER OUT OR HIDE ALL COMPLETED TODO ITEM */
function filterTodos(e) {
    const todos = ul.children;
    isChecked = e.target.checked

    if (isChecked) {
        for (i = 0; i < todos.length; i++)

            if (todos[i].firstElementChild.classList.contains("completed")) {
                todos[i].style.display = 'none'
            }

    } else {
        for (i = 0; i < todos.length; i++)
            todos[i].style.display = ''
    }




}