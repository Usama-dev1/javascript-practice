const input = document.querySelector("#todo-input");
const todoListContainer = document.querySelector("#todo-list");
const addBtn = document.querySelector("#add-btn");

let todos = [
  { id: 1, text: "get milk", completed: true },
  { id: 2, text: "get eggs", completed: false },
  { id: 3, text: "get bread", completed: false },
];

function renderTodos() {
  todoListContainer.innerHTML = "";
  todos.forEach((todo) => {
    let listItem = document.createElement("li");
    listItem.className =
      "flex flex-wrap justify-between items-center gap-3 p-3 rounded bg-amber-200";

    listItem.innerHTML = `
              <p class="flex-1 min-w-[120px] text-base sm:text-lg ${todo.completed ? "line-through" : ""}">${todo.text}</p>
              <div class="flex flex-wrap justify-end gap-2">
                <button
                  id="edit-btn"
                  class="px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Edit
                </button>
                <button
                  data-id="${todo.id}"
                  class="delete-btn px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Delete
                </button>
                <button
                  data-id="${todo.id}"
                  class="toggle-btn px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Completed
                </button>
              </div>
            `;
    return todoListContainer.appendChild(listItem);
  });
}

function addTodos() {
  const todoText = input.value.trim().toLowerCase();
  if (todoText === "") return;
  todos.push({
    id: Date.now(),
    text: todoText,
    completed: false,
  });
  input.value = " ";
  renderTodos();
}

function deleteTodos(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

addBtn.addEventListener("click", addTodos);
todoListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = parseInt(e.target.dataset.id, 10);
    deleteTodos(id);
  }
  if (e.target.classList.contains("toggle-btn")) {
    const id = parseInt(e.target.dataset.id, 10);
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  }
  renderTodos();
});
renderTodos();
