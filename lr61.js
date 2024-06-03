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
            window.location.href = 'lr64.html'; 
            break;
        case "Завдання № 6":
            window.location.href = 'lr66.html'; 
            break;
        case "Завдання № 7":
            window.location.href = 'lr67.html'; 
            break;
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


