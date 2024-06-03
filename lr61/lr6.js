function adjustButtonSizes() {
    const buttons = document.querySelectorAll(".lab-menu button");
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displayContent(labNumber) {
    console.log("Функція displayContent викликається lr61 з номером роботи:", labNumber);
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";
    let labContent = "";

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
            labContent = `
                <h3>Лабораторна робота № ${labNumber}</h3>
                <p>Скористайтесь меню змісту звіту</p> 
            `;
            createSubMenu(labNumber); // Додаємо логування
            break;
        default:
            labContent = "<p>Невідомий номер лабораторної роботи.</p>";
            break;
    }

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
            button.onclick = () => displaySubMenuContent(buttonText, labNumber);
            menu.appendChild(button);
        });

        adjustButtonSizes();
    } else if (labNumber >= 2 && labNumber <= 5.1 || labNumber >= 7 && labNumber <= 10) {
        const buttons = [
            "Завдання № 2", "Завдання № 4", "Завдання № 6", 
            "Завдання № 7", "Завдання № 8", "Завдання № 9", 
            "Завдання № 10", "ВИСНОВКИ за ЛР №" + labNumber
        ];

        buttons.forEach(buttonText => {
            const button = document.createElement("button");
            button.textContent = buttonText;
            button.onclick = () => displaySubMenuContent(buttonText, labNumber);
            menu.appendChild(button);
        });

        adjustButtonSizes();
    } else {
        window.location.href = 'index.html';
    }
}


function displaySubMenuContent(buttonText, labNumber) {
    if (!document.getElementById("lab-content")) {
        console.error("Елемент lab-content не знайдено.");
        return;
    }

    let contentHTML = "";

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
            window.location.href = 'lr62.html';
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

        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    document.getElementById("lab-content").innerHTML = contentHTML;
}
