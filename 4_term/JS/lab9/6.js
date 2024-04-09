function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}
clear(list); // очищает список
