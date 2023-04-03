const addList = () => {
  const inputValue = document.getElementById('add-input').value;
  if (inputValue != '') showList(inputValue);
  else alert('아무것도 입력되지 않았습니다!');
};

const showList = (item) => {
  const emptyMessage = (document.querySelector('#empty-list').innerHTML = '');
  const list = document.querySelector('.lists');
  list.innerHTML += `
  <div class="list">
    <li class="list-item">${item}</li> <button class="remove-button">-</button>
  </div>
  `;
};
