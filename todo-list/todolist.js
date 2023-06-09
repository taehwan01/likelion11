let list = [];
let index = 0;

const addList = () => {
  // input id가 add-input 선택
  let inputValue = document.querySelector('#add-input').value;

  // 입력 유효성 검사
  if (inputValue != '') {
    list.push({ index: list.length, content: inputValue, check: false });
    // HTML View 수정
    view(inputValue);
    index++;
    // 입력칸 초기화
    document.getElementById('add-input').value = null;
  } else {
    alert('아무것도 입력되지 않았습니다!');
  }
};

const view = (inputValue) => {
  // 목록에 원소가 하나라도 존재한다면 empty 문구를 지운다.
  if (list.length > 0) {
    document.querySelector('#empty-list').innerHTML = '';
  }

  const rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row-flex');
  const item = document.createElement('li');
  item.setAttribute('class', 'list-item');
  item.innerText = inputValue;
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', `remove-button ${index}`);
  deleteButton.innerText = '-';
  deleteButton.addEventListener('click', (e) => {
    deleteList(e);
  });
  rowDiv.append(item, deleteButton);
  document.querySelector('.lists').append(rowDiv);
};

const deleteList = (e) => {
  // const removeTarget = e.target.classList[1];
  // const newList = list.filter((el) => el.index !== removeTarget);

  if (e.target.classList.contains('remove-button'))
    e.target.parentElement.remove();
};

// TODO: foreach 적용하기
