let TodoHttp = new XMLHttpRequest();
let UserHttp = new XMLHttpRequest();

let table = document.getElementById("tableTodo");

let btn = document.getElementById("buttonTodo");
// Вешаем на событие onClick функцию
btn.onclick = function () {
    // Инициализируем запрос на получение Todo
    TodoHttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    // Вешаем обработчик события изменения состояния запроса
    TodoHttp.onreadystatechange = function () {
        if (TodoHttp.readyState === 4 && TodoHttp.status === 200) {
            // Если запрос успешен парсим данные Todo
            let todoData = JSON.parse(TodoHttp.responseText);
            // Инициализируем второй GET-запрос на получение Users
            UserHttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
            UserHttp.onreadystatechange = function () {
                if (UserHttp.readyState === 4 && UserHttp.status === 200) {
                    // Если запрос успешен парсим данные о Users
                    let userData = JSON.parse(UserHttp.responseText);
                    // Проходимся по массиву todoData, возвращаем новый массив с данными о пользователе.
                    let tasks = todoData.map(function (todo) {
                        // Проходимся по массиву userData, ищем совпавший id c userId
                        let user = userData.find(function (user) {
                            return user.id === todo.userId;
                        });
                        // В user будет храниться найденный объект в userData, его мы и возвращаем.
                        return {
                            userName: user.name,
                            title: todo.title,
                            completed: todo.completed
                        };
                    });
                    // Создаём тело таблицы
                    let tbody = document.createElement("tbody");
                    table.appendChild(tbody);
                    // Проходимся по массиву tasks, создаём колонки и присваиваем им текст по индексу
                    tasks.forEach(function (task, index) {
                        let row = document.createElement("tr");
                        tbody.appendChild(row);
                        let cell = document.createElement("td");
                        cell.textContent = index + 1;
                        row.appendChild(cell);
                        cell = document.createElement("td");
                        cell.textContent = task.userName;
                        row.appendChild(cell);
                        cell = document.createElement("td");
                        cell.textContent = task.title;
                        row.appendChild(cell);
                        cell = document.createElement("td");
                        let checkbox = document.createElement("input");
                        checkbox.type = "checkbox";
                        checkbox.checked = task.completed;
                        cell.appendChild(checkbox);
                        row.appendChild(cell);
                    });
                }
            };
            UserHttp.send();
        }
    };
    TodoHttp.send();
};

document.body.appendChild(btn);
