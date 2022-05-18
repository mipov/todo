 
let btnAdd = document.querySelector('.todo__add');
let list = document.querySelector('.todo__list')

btnAdd.addEventListener('click', () => {
  let newItem = document.createElement('li');
  newItem.className = 'todo__item'
  newItem.innerHTML = `<label class="task">
    <input type="checkbox" class="task__checkbox">
    <p class="task__text">Сделать хорошо</p>
    </label>
    <button class="task__delete"></button>`
  list.append(newItem)
})

list.onclick = function(event) {
  let del = event.target;
  if (del.className != 'task__delete') return;
  del.parentElement.remove();
}