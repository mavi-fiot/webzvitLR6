function adjustButtonSizes() {
    // Отримуємо всі кнопки
    const buttons = document.querySelectorAll(".lab-menu button");

    // Знаходимо максимальну ширину кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Встановлюємо максимальну ширину для всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displayContent(labNumber) {
    console.log("Функція displayContent викликається lr61 з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    switch(labNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 5.1:
        case 6:
        case 7:
        case 8:
        case 9:

            labContent = `
                <h3>Лабораторна робота № ${labNumber}</h3>
                <p>Скористайтесь меню змісту звіту</p> 
            `;
            createSubMenu(labNumber);
            break;
        default:
            labContent = "<p>Невідомий номер лабораторної роботи.</p>";
            break;
    }

    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;
}

function createSubMenu(labNumber) {
    let menu = document.createElement("div");
    menu.className = "lab-menu";
    let infoDisplay = document.getElementById("info-display");
    infoDisplay.appendChild(menu);

    if (labNumber === 6) {
        const buttons = [
            "Постановка задачі ЛР № 6", "Завдання № 2", "Завдання № 4", 
            "Завдання № 6", "Завдання № 7", "Завдання № 8", 
            "Завдання № 9", "Завдання № 10", "ВИСНОВКИ за ЛР №6"
        ];

        buttons.forEach(buttonText => {
            const button = document.createElement("button");
            button.textContent = buttonText;
            button.onclick = () => displaySubMenuContent(buttonText);
            menu.appendChild(button);
        });

        // Викликаємо функцію для налаштування розмірів кнопок
        adjustButtonSizes();
    } else {
        window.location.href = 'index.html'; 
    }
}

function displaySubMenuContent(buttonText) {
    // Перевірка наявності елемента lab-content
    if (!document.getElementById("lab-content")) {
        console.error("Елемент lab-content не знайдено.");
        return;
    }

    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст
    switch (buttonText) {
        case "Постановка задачі ЛР № 6":
            contentHTML = `
                <h2>Тема та мета Лабораторної роботи № 6</h2>
                <p>Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. 
                ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ</p>
                <p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. 
                Callback. Стрілочні функції. Стрілочні функції як колбеки.
                Реалізація програм засовами мови JAVASCRIPT</p>                   
            `;
            break;
        case "Завдання № 2":
            contentHTML = `
            <body>    
            
            <h3>Завдання № 2</h3>
                <p>Створити HTML-розмітку з наступними елементами:</p>
                    <ul>
                        <li>Текст</li>
                        <li>Кнопка "SWAP ME"</li>
                        <li>Два поля введення (input)</li>
                    </ul>
                <div class="input-group">
                    <input type="text" id="input1" placeholder="Введіть значення 1">
                    <input type="text" id="input2" placeholder="Введіть значення 2">
                </div>
                <button onclick="swapValues()">SWAP ME</button>
            </body>          
           
            `;            
            break;            
          
        case "Завдання № 4":
            contentHTML = `
                <h3>Завдання № 4</h3>
                <div id="square-container">
                    <button id="decrease-btn-task4">Зменшити</button>
                    <button id="increase-btn-task4">Збільшити</button><br><br>
                    <div id="square"></div>
                </div>            
            `;
            break;

        case "Завдання № 6":
           contentHTML = `
                <h3>Завдання № 6</h3>
                <ul id="number-list">
                    <li>1</li>
                    <li>4</li>
                    <li>8</li>
                    <li>16</li>
                    <li>20</li>
                    <li>30</li>
                </ul>
                <button id="double-btn">Подвоїти</button>
            `;
            document.getElementById("lab-content").innerHTML = contentHTML;

            // Додаємо подію кліку на кнопку "Подвоїти"
            document.getElementById("double-btn").addEventListener("click", function() {
                const listItems = document.querySelectorAll('#number-list li');
                listItems.forEach(item => {
                    let value = parseInt(item.textContent);
                    item.textContent = value * 2;
                });
            });
            return;
        case "Завдання № 7":
            contentHTML = `
            <h3>Завдання № 7</h3>
            <ul id="categories">
                <li class="item">
                    <h2>Сукні</h2>
                    <ul>
                        <li>Короткі сукні</li>
                        <li>Вечірні сукні</li>
                        <li>Повсякденні сукні</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Штани</h2>
                    <ul>
                        <li>Джинси</li>
                        <li>Брюки</li>
                        <li>Легінси</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Футболки</h2>
                    <ul>
                        <li>Футболки з коротким рукавом</li>
                        <li>Футболки з довгим рукавом</li>
                        <li>Блузки</li>
                    </ul>
                </li>
            </ul>
            `;

            
            // Додамо код для реалізації завдань 1 і 2
            const categoriesList = document.createElement('div');
            categoriesList.innerHTML = contentHTML;

            // Завдання 1: Порахувати кількість категорій
            const categoriesCount = categoriesList.querySelectorAll('li.item').length;
            console.log('Кількість категорій:', categoriesCount);

            // Завдання 2: Для кожної категорії вивести заголовок і кількість елементів
            categoriesList.querySelectorAll('li.item').forEach(category => {
                const categoryName = category.querySelector('h2').textContent;
                const categoryItemsCount = category.querySelectorAll('li').length;
                console.log(categoryName);
                console.log('Елементи:', categoryItemsCount);
            });
            return;
            
        case "Завдання № 8":
            contentHTML = `
            <body>
            <form class="login-form">
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Password
                <input type="password" name="password" />
              </label>
              <button type="submit">Log in</button>
            </form>
            </body>            
            `;

            // Додаємо контент
            document.getElementById("lab-content").innerHTML = contentHTML;

            // Додаємо прослуховувача подій для обробки відправлення форми
            const loginForm = document.querySelector('.login-form');
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault(); // Зупиняємо стандартне відправлення форми
            
                // Отримуємо доступ до полів форми
                const emailInput = loginForm.elements.email;
                const passwordInput = loginForm.elements.password;
            
                // Отримуємо значення полів та очищаємо їх від пробілів по краях
                const emailValue = emailInput.value.trim();
                const passwordValue = passwordInput.value.trim();
            
                // Перевіряємо, чи всі поля заповнені
                if (emailValue === '' || passwordValue === '') {
                    // Якщо немає, виводимо alert
                    alert('All form fields must be filled in');
                    return; // Завершуємо обробку події
                }
            
                // Створюємо об'єкт із введеними даними
                const formData = {
                    email: emailValue,
                    password: passwordValue
                };
            
                // Виводимо об'єкт із введеними даними в консоль
                console.log(formData);
            
                // Очищаємо значення полів форми
                loginForm.reset();
            });

            break; // Додаємо break щоб завершити case     
        case "Завдання № 9":
            contentHTML = `
            <div class="widget">
                <p>Background color: <span class="color">-</span></p>
                <button type="button" class="change-color">Change color</button>
            </div>
            `;
            break;

        case "Завдання № 10":
            contentHTML = `
                    <div id="controls">
                        <input type="number" min="1" max="100" step="1" />
                        <button type="button" data-create>Create</button>
                        <button type="button" data-destroy>Destroy</button>
                    </div>
                    <div id="boxes"></div>
            `;
            break;
            
        case "ВИСНОВКИ за ЛР №6":
            contentHTML = `
                <h2>Висновки:</h2>
                <p>В ході виконання завдань за лабораторною роботою № 6 досліджено: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. 
                ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ</p>
                <p>Набуто практичних навичок роботи з об'єктами, методами об'єкта,  
                Callback, стрілочними функціями, в т.ч. як колбеками, а також - реалізації програм засовами мови JAVASCRIPT</p>                   
            `;
            break;
        
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

   

    if (buttonText === "Завдання № 4") {
        const square = document.getElementById('square');
        const decreaseBtn = document.getElementById('decrease-btn-task4');
        const increaseBtn = document.getElementById('increase-btn-task4');

        let squareSize = 45;

        function resizeSquare(size) {
            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
        }

        decreaseBtn.addEventListener('click', () => {
            squareSize = Math.max(15, squareSize - 15); // забезпечуємо мінімальний розмір
            resizeSquare(squareSize);
        });

        increaseBtn.addEventListener('click', () => {
            squareSize += 15;
            resizeSquare(squareSize);
        });
    }

    // Додатково додаємо обробник подій, якщо це "Завдання № 9"
    if (buttonText === "Завдання № 9") {
        // Функція для генерації випадкового кольору в форматі HEX
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        // Отримуємо посилання на необхідні елементи
        const changeColorButton = document.querySelector('.change-color');
        const colorSpan = document.querySelector('.color');

        // Додаємо обробник події для кнопки
        changeColorButton.addEventListener('click', () => {
            // Генеруємо випадковий колір
            const randomColor = getRandomHexColor();

            // Змінюємо колір фону елемента body
            document.body.style.backgroundColor = randomColor;

            // Змінюємо текстовий вміст для span.color
            colorSpan.textContent = randomColor;
        });
    }

    if (buttonText === "Завдання № 10") {
        initializeTask10();
    }
 // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;

}
        // Функція для обміну вмісту між двома інпутами
    function swapValues() {
        let input1 = document.getElementById('input1');
        let input2 = document.getElementById('input2');
        
        let temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
        }
    

        let lastInputValue; // Глобальна змінна для зберігання останнього введеного значення
        let isLastCreateWithoutInput = false; // Флаг, який показує, чи було останнє натискання кнопки Create без введення нового значення в інпут
        
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }
        
        function initializeTask10() {
            const controls = document.getElementById('controls');
            const input = controls.querySelector('input');
            const createButton = controls.querySelector('[data-create]');
            const destroyButton = controls.querySelector('[data-destroy]');
        
            createButton.addEventListener('click', () => {
                const inputValue = input.value.trim(); // Видаляємо зайві пробіли з початку та кінця рядка
                if (inputValue === '') {
                    // Якщо інпут порожній, перевіряємо, чи було останнє натискання Create без введення нового значення
                    if (isLastCreateWithoutInput) {
                        replaceBoxes(lastInputValue); // Замінюємо попередні елементи новими
                    }
                    return;
                }
                const amount = parseInt(inputValue);
                if (amount >= 1 && amount <= 100) {
                    lastInputValue = amount; // Зберігаємо останнє введене значення
                    isLastCreateWithoutInput = true; // Встановлюємо прапорець, що останнє натискання Create було без введення нового значення
                    createBoxes(amount);
                    input.value = ''; // Очистити значення інпуту
                } else {
                    alert('Please enter a number between 1 and 100');
                }
            });
        
            destroyButton.addEventListener('click', destroyBoxes);
        }
        
        function createBoxes(amount) {
            console.log(`Creating ${amount} boxes...`);
            const boxesContainer = document.getElementById('boxes');
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < amount; i++) {
                const div = document.createElement('div');
                div.style.width = `${30 + i * 10}px`;
                div.style.height = `${30 + i * 10}px`;
                div.style.backgroundColor = getRandomHexColor(); 
                fragment.appendChild(div);
            }
            boxesContainer.appendChild(fragment);
        }
        
        function replaceBoxes(amount) {
            console.log(`Replacing ${amount} boxes...`);
            const boxesContainer = document.getElementById('boxes');
            boxesContainer.innerHTML = ''; // Очищаємо колекцію перед заміною елементів
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < amount; i++) {
                const div = document.createElement('div');
                div.style.width = `${30 + i * 10}px`;
                div.style.height = `${30 + i * 10}px`;
                div.style.backgroundColor = getRandomHexColor(); 
                fragment.appendChild(div);
            }
            boxesContainer.appendChild(fragment);
            console.log("Collection of boxes:", boxesContainer.children); // Виводимо колекцію елементів у консоль
        }
        
        function destroyBoxes() {
            const boxesContainer = document.getElementById('boxes');
            boxesContainer.innerHTML = '';
            lastInputValue = undefined; // Скидаємо останнє введене значення при очищенні колекції
            isLastCreateWithoutInput = false; // Скидаємо прапорець про те, що останнє натискання Create було без введення нового значення
        }
        


