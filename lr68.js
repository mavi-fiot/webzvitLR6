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
    console.log("Функція displayContent викликається lr68 з номером роботи:", labNumber);
    
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
    
        // Тут можна додати кнопки для меню змісту
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

        let contentHTML = "";
    
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
                window.location.href = 'lr67.html'; 
                break;
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

                <br><br>


                <h3>Фіксація виконання завдань:</h3>

                <p>Відсутність паролю</p>
                <img src="681.jpg" alt="lr681">
                <br>
                <p>Відсутність пошти</p>
                <img src="682.jpg" alt="lr682">
                <br>
                <p>Виведення у консоль введених даних</p>
                <img src="683.jpg" alt="lr683">
                <br>
                <p>Використання submit</p>
                <img src="684.jpg" alt="lr684">
                <br>
                <p>Контроль того, що сторінка не перезавантажується</p>
                <img src="685.jpg" alt="lr685">
                <br>
                <p>Контроль заповненності полів</p>
                <img src="686.jpg" alt="lr686">
                <br>
                <p>Контроль доступу до елементів форми з використанням elements</p>
                <img src="687.jpg" alt="lr687">
                <br>
                <p>Контроль очищення полів з використанням reset</p>
                <img src="688.jpg" alt="lr688">
                <br>

                
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
                
    
    }
    // Додаємо зміст до lab-content
    document.getElementById("lab-content").innerHTML = contentHTML;

    

