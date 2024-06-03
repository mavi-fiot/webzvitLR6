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
    console.log("Функція displayContent викликається lr67 з номером роботи:", labNumber);

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
    // // Перевірка наявності елемента lab-content
    // if (!document.getElementById("lab-content")) {
    //     console.error("Елемент lab-content не знайдено.");
    //     return;
    // }

    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    switch (buttonText) {
        case "Постановка задачі ЛР № 6":
            window.location.href = 'lr6.html'; 
            break;
        case "Завдання № 2":
            window.location.href = 'lr61.html'; 
            break;
        case "Завдання № 4":
            window.location.href = 'lr64.html'; 
            break;
        case "Завдання № 6":
            window.location.href = 'lr66.html'; 
            break;
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

            <br><br>

            <h3>Фіксація виконання завдань:</h3>

                <p>Виведення значень у консоль</p>
                <img src="671.jpg" alt="lr67">
                
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
            document.getElementById("lab-content").innerHTML = contentHTML; // Додали контент
            break;

            // return;
            
        case "Завдання № 8":
            window.location.href = 'lr68.html'; 
            break; 
        case "Завдання № 9":
            window.location.href = 'lr69.html';
            break;

        case "Завдання № 10":
            window.location.href = 'lr610.html';
            break;
            
        case "ВИСНОВКИ за ЛР №6":
            window.location.href = 'lr6.html'; 
            break;

        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;

        }
        document.getElementById("lab-content").innerHTML = contentHTML; // Додали контент

    }

    