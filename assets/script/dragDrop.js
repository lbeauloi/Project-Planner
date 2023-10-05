document.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('draggable')) {
    e.target.classList.add('dragging')
  }
})

document.addEventListener('dragend', (e) => {
  if (e.target.classList.contains('draggable')) {
    e.target.classList.remove('dragging')
  }
})

function drop(event) {
  event.preventDefault();
  const droppedElement = document.querySelector('.dragging');
  const targetDropzone = event.target.closest('.dropzone');

  if (targetDropzone) {
      targetDropzone.appendChild(droppedElement);
  }
}

function allowDrop(event) {
  event.preventDefault();
}
