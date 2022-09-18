const getElement = id => {
    const element = document.getElementById(id);
    return element;
}
// localStorage.clear('clear')
const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    // console.log(todos)
    const innputText = getElement('todo-text').value;
    getElement('todo-text').value = '';
    if (!todos) {
        const todoList = [{
            title: innputText,
            completed: false
        },];
        localStorage.setItem('TODOS', JSON.stringify(todoList))
    }
    else {
        const todoList = [...todos, {
            title: innputText,
            completed: false
        }]
        localStorage.setItem('TODOS', JSON.stringify(todoList))
    }
    render()
};
const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    // console.log(todos)
    const ul = document.getElementById('todo-list')
    ul.textContent = '';
    if (todos) {
        todos.forEach(element => {
            const li = document.createElement('li')
            li.classList.add('py-2')
            li.innerText = element.title;
            ul.appendChild(li)
        });
    }
}
render()
const handleClearAll = () => {
    localStorage.removeItem('TODOS')
    render()
}

