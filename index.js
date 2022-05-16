let item = document.querySelectorAll('.todo__item');
let list = document.querySelector('.todo__list')
let btnAdd = document.querySelector('.todo__add');


btnAdd.addEventListener('click', () => {
  console.log(newItem)
  list.insertAdjacentElement('beforebegin', item[0])
})