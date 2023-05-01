const list = [];
let index = 0;

const addList = () => {
  // input id가 add-input 선택
  let inputValue = document.querySelector('#add-input').value;

  // 입력 유효성 검사
  if (inputValue != '') {
    list.push({ index: index++, content: inputValue, check: false });
    // HTML View 수정
    view(inputValue);
    // 입력칸 초기화
    document.getElementById('add-input').value = null;
  } else {
    alert('아무것도 입력되지 않았습니다!');
  }
};

const view = (inputValue) => {
  if (list.length > 0) {
    document.querySelector('#empty-list').innerHTML = '';
  }
  // 엔터 입력
  // const addButton = document.getElementsByClassName('add-button');
  // addButton.addEventListener('keyup', (e) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     document.getElementById('addButton').click();
  //   }
  // });
  const rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row-flex');
  const item = document.createElement('li');
  item.setAttribute('class', 'list-item');
  item.innerText = inputValue;
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'remove-button');
  deleteButton.innerText = '-';
  deleteButton.addEventListener('click', (e) => {
    deleteList(e);
  });
  document.querySelector('.lists').append(rowDiv);
  document.querySelector('.row-flex').append(item, deleteButton);
};

const deleteList = (e) => {
  console.log(e);
};

// TODO: foreach 적용하기
