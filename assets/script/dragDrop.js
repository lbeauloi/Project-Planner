function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }
  
  function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
  }
  
  function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
  }
  
  function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
  }
  
  function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
  
    this.classList.remove('over');
  }
  
  // Swap list items that are drag and drop
  function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
  
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }
  