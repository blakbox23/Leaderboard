const uilist = (data) => {
  const list = document.querySelector('#list-section');
  list.innerHTML = '';
  data.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span id='name-span'>${element.user} </span> <span id='id-span'>${element.score}</span>`;
    list.appendChild(listItem);
  });
};

export default uilist;