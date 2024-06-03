// lr6.js

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
    console.log("Функція displayContent викликається lr6 з номером роботи:", labNumber);
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

function displaySubMenuContent(buttonText, labNumber) {
    console.log("Виклик displaySubMenuContent з параметрами:", buttonText, labNumber);

    const labContentElement = document.getElementById("lab-content");

    if (!labContentElement) {
        console.error("Елемент lab-content не знайдено.");
        return;
    }

    let contentHTML = "";

    switch (buttonText) {
        case "Постановка задачі ЛР № 6":
            window.location.href = 'lr61.html';
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
            window.location.href = 'lr61.html';
            break;

        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    if (contentHTML) {
        labContentElement.innerHTML = contentHTML;
    }
}

function loadContent(url, element) {
    console.log(`Завантаження контенту з ${url}`);
    
    fetch(url)
        .then(response => {
            console.log(`Отримана відповідь з ${url}:`, response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(`Дані з ${url} успішно завантажені.`);
            element.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}


// Ensure that the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});
