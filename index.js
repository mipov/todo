 
let btnAdd = document.querySelector('.todo__add');
let list = document.querySelector('.todo__list');
let inp = document.querySelector('.todo__text-input');

function createTask() {
  if (inp.value == '') return;
  let newItem = document.createElement('li');
  newItem.className = 'todo__item'
  newItem.innerHTML = `<label class="task">
    <input type="checkbox" class="task__checkbox">
    <p class="task__text">${inp.value}</p>
    </label>
    <button class="task__delete"></button>`
  list.appendChild(newItem);
  return inp.value = '';
}

btnAdd.addEventListener('click', () => {
  createTask();
})

inp.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask();
  }
})

list.onclick = function(event) {
  let del = event.target;
  if (del.className != 'task__delete') return;
  del.parentElement.remove();
}