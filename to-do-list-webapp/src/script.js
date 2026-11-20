// 할 일 1개(li)에 완료 표시(토글/원상복구) 및 삭제 버튼 기능을 연결하는 함수
function setupTodoItem(item, textSpan, deleteBtn) {
  // 할 일 글자 클릭: 완료(회색+취소선) <-> 미완료(원상복구) 토글
  textSpan.addEventListener("click", function () {
    textSpan.classList.toggle("completed");
    updateCount();
  });

  // 삭제 버튼 클릭: 해당 할 일(li)만 목록에서 제거
  deleteBtn.addEventListener("click", function () {
    item.remove();
    updateCount();
  });
}

// 전체 할 일 개수와 완료된 할 일 개수를 갱신하는 함수
function updateCount() {
  let allItems = document.querySelectorAll("#todoList li");
  let completedItems = document.querySelectorAll("#todoList li span.completed");

  let totalCount = allItems.length;
  let completedCount = completedItems.length;

  let countElement = document.querySelector("#todoCount");
  countElement.textContent = "전체 " + totalCount + "개 / 완료 " + completedCount + "개";
}

function addTodo() {
  // 1. 입력값 가져오기
  let input = document.querySelector("#todoInput");
  let text = input.value.trim();

  // 2. 빈 입력 확인
  if (text === "") {
    alert("할 일을 입력하세요.");
    return;
  }

  // 3. 새로운 li, span, button 요소 생성
  let newItem = document.createElement("li");
  let textSpan = document.createElement("span");
  let deleteBtn = document.createElement("button");

  // 4. 텍스트 지정
  textSpan.textContent = text;
  deleteBtn.textContent = "삭제";
  deleteBtn.type = "button";

  // 5. 이벤트 연결 및 li에 요소 추가
  setupTodoItem(newItem, textSpan, deleteBtn);
  newItem.append(textSpan, deleteBtn);

  // 6. 목록에 추가
  document.querySelector("#todoList").append(newItem);

  // 7. 입력창 초기화 및 개수 갱신
  input.value = "";
  updateCount();
}

// 페이지 처음 열릴 때 기존 li 항목들에 기능 연결 및 초기 개수 표시
let initialItems = document.querySelectorAll("#todoList li");
for (let i = 0; i < initialItems.length; i++) {
  let item = initialItems[i];
  let textSpan = item.querySelector("span");
  let deleteBtn = item.querySelector("button");
  setupTodoItem(item, textSpan, deleteBtn);
}
updateCount();