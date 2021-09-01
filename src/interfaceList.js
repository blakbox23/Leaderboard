const uilist = (data) => {
  const list = document.querySelector('#list-section');
  list.innerHTML = '';
  data.forEach(element => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${element.user} : ${element.score}`
      list.appendChild(listItem);
  });
}

export { uilist };