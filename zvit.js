// Визначаємо функції displayContent та createSubMenu у глобальному контексті
function displayContent(labNumber) {
    console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    if (labNumber === 1) {
        // Встановити зміст лабораторної роботи для першої роботи
        labContent = `
            <h3>Лабораторна робота № 1</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        // Створити меню змісту для першої роботи
        createSubMenu(1);
    }
    if (labNumber === 2) {
        labContent = `
            <h3>Лабораторна робота № 2</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(2);
    }

    if (labNumber === 3) {
        labContent = `
            <h3>Лабораторна робота № 3</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(3);
    }

    if (labNumber === 4) {
        labContent = `
            <h3>Лабораторна робота № 4</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(4);
    }

    if (labNumber === 5) {
        labContent = `
            <h3>Лабораторна робота № 5</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(5);
    }

    if (labNumber === 5.1) {
        labContent = `
            <h3>Лабораторна робота № 5.1</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(5.1);
    }

    if (labNumber === 6) {
        labContent = `
            <h3>Лабораторна робота № 6</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(6);
    }

    if (labNumber === 7) {
        labContent = `
            <h3>Лабораторна робота № 7</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(7);
    }

    if (labNumber === 8) {
        labContent = `
            <h3>Лабораторна робота № 8</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        createSubMenu(8);
    }
    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;

    // Після створення меню змісту налаштовуємо розміри кнопок
    adjustButtonSizes();
}

function createSubMenu(labNumber) {
    let menu = document.createElement("div");
    menu.className = "lab-menu";
    let infoDisplay = document.getElementById("info-display");
    infoDisplay.appendChild(menu);

    // Тут можна додати кнопки для меню змісту
    if (labNumber === 1) {

    let button1 = document.createElement("button");
    button1.textContent = "Опис предметного середовища";
    button1.onclick = function() {
        displaySubMenuContent("Опис предметного середовища");
    };
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.textContent = "Тема Мета Місце розташування ЛР №1";
    button2.onclick = function() {
        displaySubMenuContent("Тема Мета Місце розташування ЛР №1");
    };
    menu.appendChild(button2);

    let button3 = document.createElement("button");
    button3.textContent = "СТРУКТУРА ДОКУМЕНТУ";
    button3.onclick = function() {
        displaySubMenuContent("СТРУКТУРА ДОКУМЕНТУ");
    };
    menu.appendChild(button3);

    let button4 = document.createElement("button");
    button4.textContent = "HTML-код ТАБЛИЦЬ";
    button4.onclick = function() {
        displaySubMenuContent("HTML-код ТАБЛИЦЬ");
    };
    menu.appendChild(button4);

    let button5 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button5);

    let button51 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button51);

    let button6 = document.createElement("button");
    button6.textContent = "HTML-код ЗОБРАЖЕННЯ";
    button6.onclick = function() {
        displaySubMenuContent("HTML-код ЗОБРАЖЕННЯ");
    };
    menu.appendChild(button6);

    let button7 = document.createElement("button");
    button7.textContent = "ВИСНОВКИ";
    button7.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ");
    };
    menu.appendChild(button7);
}

else if (labNumber === 2) {
    
    let button21 = document.createElement("button");
    button21.textContent = "Тема, мета ЛР №2. Місце розташування сайту, звіту";
    button21.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №2. Місце розташування сайту, звіту");
    };
    menu.appendChild(button21);

    let button22 = document.createElement("button");
    button22.textContent = "Способи підключення стилів";
    button22.onclick = function() {
        displaySubMenuContent("Способи підключення стилів");
    };
    menu.appendChild(button22);

    let button23 = document.createElement("button");
    button23.textContent = "СЕЛЕКТОРИ";
    button23.onclick = function() {
        displaySubMenuContent("СЕЛЕКТОРИ");
    };
    menu.appendChild(button23);

    let button24 = document.createElement("button");
    button24.textContent = "Селектори тегу";
    button24.onclick = function() {
        displaySubMenuContent("Селектори тегу");
    };
    menu.appendChild(button24);

    let button25 = document.createElement("button");
    button25.textContent = "Селектори класу";
    button25.onclick = function() {
        displaySubMenuContent("Селектори класу");
    };
    menu.appendChild(button25);

    let button26 = document.createElement("button");
    button26.textContent = "Селектори ідентифікаторів";
    button26.onclick = function() {
        displaySubMenuContent("Селектори ідентифікаторів");
    };
    menu.appendChild(button26);

    let button27 = document.createElement("button");
    button27.textContent = "Інші селектори";
    button27.onclick = function() {
        displaySubMenuContent("Інші селектори");
    };
    menu.appendChild(button27);

    let button28 = document.createElement("button");
    button28.textContent = "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий";
    button28.onclick = function() {
        displaySubMenuContent("CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий");
    };
    menu.appendChild(button28);

    let button29 = document.createElement("button");
    button29.textContent = "ВИСНОВКИ до ЛР №2";
    button29.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №2");
    };
    menu.appendChild(button29);
}

else if (labNumber === 3) {
    
    let button301 = document.createElement("button");
    button301.textContent = "Тема, мета ЛР №3. Місце розташування сайту, звіту";
    button301.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №3 Місце розташування сайту, звіту");
    };
    menu.appendChild(button301);

    let button302 = document.createElement("button");
    button302.textContent = "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету";
    button302.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету");
    };
    menu.appendChild(button302);

    let button303 = document.createElement("button");
    button303.textContent = "ЗАВДАННЯ №2";
    button303.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2");
    };
    menu.appendChild(button303);

    let button304 = document.createElement("button");
    button304.textContent = "Фіксована таблична верстка";
    button304.onclick = function() {
        displaySubMenuContent("Фіксована таблична верстка");
    };
    menu.appendChild(button304);

    let button305 = document.createElement("button");
    button305.textContent = "Гумова таблична верстка";
    button305.onclick = function() {
        displaySubMenuContent("Гумова таблична верстка");
    };
    menu.appendChild(button305);

    let button306 = document.createElement("button");
    button306.textContent = "Фіксована блокова верстка";
    button306.onclick = function() {
        displaySubMenuContent("Фіксована блокова верстка");
    };
    menu.appendChild(button306);

    let button307 = document.createElement("button");
    button307.textContent = "Гумова блокова верстка";
    button307.onclick = function() {
        displaySubMenuContent("Гумова блокова верстка");
    };
    menu.appendChild(button307);

    let button308 = document.createElement("button");
    button308.textContent = "ЗАВДАННЯ №3 FLEXBOX";
    button308.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 FLEXBOX");
    };
    menu.appendChild(button308);

    let button309 = document.createElement("button");
    button309.textContent = "Зовнішній вигляд сторінки";
    button309.onclick = function() {
        displaySubMenuContent("Зовнішній вигляд сторінки");
    };
    menu.appendChild(button309);

    let button310 = document.createElement("button");
    button310.textContent = "HTML-код";
    button310.onclick = function() {
        displaySubMenuContent("HTML-код");
    };
    menu.appendChild(button310);

    let button311 = document.createElement("button");
    button311.textContent = "CSS-код сторінки";
    button311.onclick = function() {
        displaySubMenuContent("CSS-код сторінки");
    };
    menu.appendChild(button311);

    let button312 = document.createElement("button");
    button312.textContent = "ВИСНОВКИ до ЛР №3";
    button312.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №3");
    };
    menu.appendChild(button312);
}

else if (labNumber === 4) {
    
    let button401 = document.createElement("button");
    button401.textContent = "Тема, мета ЛР №4. Місце розташування сайту, звіту";
    button401.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №4 Місце розташування сайту, звіту");
    };
    menu.appendChild(button401);

    let button402 = document.createElement("button");
    button402.textContent = "ЗАВДАННЯ №1 Визначення брейкпоінтів";
    button402.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Визначення брейкпоінтів");
    };
    menu.appendChild(button402);

    let button403 = document.createElement("button");
    button403.textContent = "ЗАВДАННЯ №2 Виконання адаптивної верстки";
    button403.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2 Виконання адаптивної верстки");
    };
    menu.appendChild(button403);

    let button404 = document.createElement("button");
    button404.textContent = "ЗАВДАННЯ №3 Пояснення створених версій";
    button404.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 Пояснення створених версій");
    };
    menu.appendChild(button404);

    let button406 = document.createElement("button");
    button406.textContent = "ВИСНОВКИ до ЛР №4";
    button406.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №4");
    };
    menu.appendChild(button406);
}

else if (labNumber === 5) {
    
    let button501 = document.createElement("button");
    button501.textContent = "Постановка задачі ЛР № 5";
    button501.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 5");
    };
    menu.appendChild(button501);

    let button502 = document.createElement("button");
    button502.textContent = "Способи функціонального застосування JS";
    button502.onclick = function() {
        displaySubMenuContent("Способи функціонального застосування JS");
    };
    menu.appendChild(button502);

    let button503 = document.createElement("button");
    button503.textContent = "Схема URL";
    button503.onclick = function() {
        displaySubMenuContent("Схема URL");
    };
    menu.appendChild(button503);

    let button504 = document.createElement("button");
    button504.textContent = "Обробник подій";
    button504.onclick = function() {
        displaySubMenuContent("Обробник подій");
    };
    menu.appendChild(button504);

    let button505 = document.createElement("button");
    button505.textContent = "Підстановка (entity)";
    button505.onclick = function() {
        displaySubMenuContent("Підстановка (entity)");
    };
    menu.appendChild(button505);

    let button506 = document.createElement("button");
    button506.textContent = "Вставка (тег SCRIPT)";
    button506.onclick = function() {
        displaySubMenuContent("Вставка (тег SCRIPT)");
    };
    menu.appendChild(button506);

    let button507 = document.createElement("button");
    button507.textContent = "Виконання завдання за масивами (вар.6 таб.1)";
    button507.onclick = function() {
        displaySubMenuContent("Виконання завдання за масивами (вар.6 таб.1)");
    };
    menu.appendChild(button507);

    let button508 = document.createElement("button");
    button508.textContent = "Виконання завдання за вар.6 таб.2";
    button508.onclick = function() {
        displaySubMenuContent("Виконання завдання за вар.6 таб.2");
    };
    menu.appendChild(button508);

    let button509 = document.createElement("button");
    button509.textContent = "Виконання завдання за пунктом 7";
    button509.onclick = function() {
        displaySubMenuContent("Виконання завдання за пунктом 7");
    };
    menu.appendChild(button509);
   
    let button510 = document.createElement("button");
    button510.textContent = "ВИСНОВКИ за ЛР №5";
    button510.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №5");
    };
    menu.appendChild(button510);
}

else if (labNumber === 5.1) {
    
    let button511 = document.createElement("button");
    button511.textContent = "Постановка задачі ЛР № 5.1";
    button511.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 5.1");
    };
    menu.appendChild(button511);

    let button512 = document.createElement("button");
    button512.textContent = "Завдання № 2";
    button512.onclick = function() {
        displaySubMenuContent("Завдання № 2");
    };
    menu.appendChild(button512);

    let button513 = document.createElement("button");
    button513.textContent = "Завдання № 4";
    button513.onclick = function() {
        displaySubMenuContent("Завдання № 4");
    };
    menu.appendChild(button513);

    let button514 = document.createElement("button");
    button514.textContent = "Завдання № 6";
    button514.onclick = function() {
        displaySubMenuContent("Завдання № 6");
    };
    menu.appendChild(button514);

    let button515 = document.createElement("button");
    button515.textContent = "Завдання № 8";
    button515.onclick = function() {
        displaySubMenuContent("Завдання № 8");
    };
    menu.appendChild(button515);

    let button516 = document.createElement("button");
    button516.textContent = "Завдання № 9";
    button516.onclick = function() {
        displaySubMenuContent("Завдання № 9");
    };
    menu.appendChild(button516);

    let button517 = document.createElement("button");
    button517.textContent = "Завдання № 10";
    button517.onclick = function() {
        displaySubMenuContent("Завдання № 10");
    };
    menu.appendChild(button517);

    let button518 = document.createElement("button");
    button518.textContent = "ВИСНОВКИ за ЛР №5.1";
    button518.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №5.1");
    };
    menu.appendChild(button518);

    }

else if (labNumber === 6) {
    
    window.location.href = 'lr6.html';     
    
}

}

// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    // Викликаємо функцію displayContent з номером 1 при завантаженні сторінки
    displayContent(1);
};

function adjustButtonSizes() {
    // Отримання всіх кнопок
    const buttons = document.querySelectorAll(".info-display button");

    // Знаходження максимальної ширини кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Застосування максимальної ширини до всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displaySubMenuContent(buttonText) {
    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст
    switch (buttonText) {
        case "Опис предметного середовища":
            contentHTML = `
                    <h2>Опис предметного середовища</h2>
                    <ol>
                        <li>Створення інтернет-магазину для здійснення господарської діяльності з продажу товарів з категорії жіночого одягу та задоволення попиту відповідної категорії споживачів.</li>
                        <li>Узагальнений опис функціоналу:</li>
                        <ol type="a">
                            <li>Реєстрація та вхід в обліковий запис</li>
                            <li>Навігація та пошук</li>
                            <li>Каталог товарів</li>
                            <li>Сторінки товарів (сторінка – товар)</li>
                            <li>Кошик покупця</li>
                            <li>Оформлення замовлення</li>
                            <li>Адміністративний розділ</li>
                            <li>Секція новин (гостьова)</li>
                            <li>Контактна інформація (зворотній зв’язок)</li>
                        </ol>
                    </ol>
                    <h3>Функціонал адміністратора:</h3>
                    <ol>
                        <li>Управління товарами:
                            <ul>
                                <li>Додавання, видалення та редагування товарів.</li>
                                <li>Додавання зображень, описів та цін до товарів.</li>
                                <li>Категоризація товарів для зручного пошуку.</li>
                            </ul>
                        </li>
                        <li>Управління замовленнями:
                            <ul>
                                <li>Перегляд та відстеження статусів замовлень.</li>
                                <li>Зміна статусів замовлень ("нове", "в обробці", "відправлене", "доставлене").</li>
                            </ul>
                        </li>
                        <li>Управління користувачами:
                            <ul>
                                <li>Реєстрація нових користувачів.</li>
                                <li>Перегляд та редагування інформації про користувачів.</li>
                                <li>Видалення користувачів або блокування їхніх облікових записів.</li>
                            </ul>
                        </li>
                        <li>Звіти та аналітика:
                            <ul>
                                <li>Перегляд статистики продажів та замовлень.</li>
                                <li>Генерація звітів за потрібними періодами часу або категоріями товарів.</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>Функціонал відвідувача:</h3>
                    <ol>
                        <li>Перегляд товарів:
                            <ul>
                                <li>Перегляд каталогу товарів із зображеннями, описами та цінами.</li>
                                <li>Фільтрація та сортування товарів за різними критеріями (ціна, розмір, категорія).</li>
                            </ul>
                        </li>
                        <li>Пошук товарів:
                            <ul>
                                <li>Пошук товарів за категорією або розміром.</li>
                            </ul>
                        </li>
                        <li>Додавання товарів до кошика:
                            <ul>
                                <li>Обрання товару; додавання обраних товарів до кошика.</li>
                            </ul>
                        </li>
                        <li>Оформлення замовлення:
                            <ul>
                                <li>Підтвердження оплати обраних товарів за кошиком.</li>
                                <li>Заповнення форми з контактною інформацією та адресою для оформлення замовлення.</li>
                                <li>Вибір способу доставки (Укрпошта, Нова пошта, самовивіз).</li>
                            </ul>
                        </li>
                        <li>Особистий кабінет:
                            <ul>
                                <li>Реєстрація нового користувача; вхід в особистий кабінет.</li>
                                <li>Перегляд статусу поточних замовлень; перегляд історії замовлень.</li>
                                <li>Змінення особистої інформації (реєстраційних даних).</li>
                            </ul>
                        </li>
                    </ol>             
            `;
            break;
        case "Тема Мета Місце розташування ЛР №1":
            contentHTML = `
                <h3>Тема</h3>
                <p>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ</p>

                <h3>Мета </h3>
                <p>Придбати практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>

                <h3>Місце розташування ЛР №1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/zvitLR_html" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/zvitLR_html/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/webStream" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/webStream/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/mavi-fiot/resume" target="_blank">Резюме.</a> <a href="https://mavi-fiot.github.io/resume/" target="_blank">Сайт резюме.</a></p>

            `;
            break;
        case "СТРУКТУРА ДОКУМЕНТУ":
            contentHTML = `
                <h3>СТРУКТУРА</h3>
                <p>HTML-код ТАБЛИЦЬ.</p>
                <p>HTML-код ФОРМИ.</p>
                <p>HTML-код ЗОБРАЖЕННЯ.</p>

            `;
            break;

        case "HTML-код ТАБЛИЦЬ":
            contentHTML = `
                <table>
                    <caption>Таблиця товарів</caption>
                    <thead>
                        <tr>
                            <th>Назва товару</th>
                            <th>Ціна товару</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Сукня</td>
                            <td>500 грн</td>
                        </tr>
                        <tr>
                            <td>Блуза</td>
                            <td>300 грн</td>
                        </tr>
                    </tbody>
                </table>

                    <h3>HTML-код ТАБЛИЦЬ</h3>
                        <pre>
                            <code>
                                &lt;!-- Таблиця --&gt;
                                    &lt;table&gt;
                                        &lt;caption&gt;Таблиця товарів&lt;/caption&gt;
                                        &lt;thead&gt;
                                            &lt;tr&gt;
                                                &lt;th&gt;Назва товару&lt;/th&gt;
                                                &lt;th&gt;Ціна товару&lt;/th&gt;
                                            &lt;/tr&gt;
                                        &lt;/thead&gt;
                                        &lt;tbody&gt;
                                            &lt;tr&gt;
                                                &lt;td&gt;Сукня&lt;/td&gt;
                                                &lt;td&gt;500 грн&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                                &lt;td&gt;Блуза&lt;/td&gt;
                                                &lt;td&gt;300 грн&lt;/td&gt;
                                            &lt;/tr&gt;
                                        &lt;/tbody&gt;
                                    &lt;/table&gt;
                            </code>
                        </pre>
            `;
            break;
            
        case "HTML-код ФОРМИ":
            contentHTML = `
                    <form>
                        <label for="email">Електронна пошта:</label>
                        <input type="email" id="email" name="email" required>
                        <button type="submit">Підписатись</button>
                    </form>

                <h3>HTML-код ФОРМИ</h3>
                <pre> 
                    <code>
                        &lt;!-- Форма --&gt;
                            &lt;form&gt;
                                &lt;label for="email"&gt;Електронна пошта:&lt;/label&gt;
                                &lt;input type="email" id="email" name="email" required&gt;
                                &lt;button type="submit"&gt;Підписатись&lt;/button&gt;
                                &lt;/form&gt;
                    </code>
                </pre>
            `;
            /*Використовується елемент <pre> для збереження форматування тексту, і <code> 
                для позначення HTML-коду. Символи < та > замінюються на &lt; і &gt; 
                відповідно, щоб вони відображалися як текст у HTML. 
                Таким чином відображається HTML-код у вигляді тексту без його виконання .*/
            break;

        case "HTML-код ЗОБРАЖЕННЯ":
            contentHTML = `
                <div class="gallery">
                    <figure>
                        <img src="FASHION_WEEK.jpg" alt="FASHION_WEEK" width="300" height="300">
                        <figcaption>Модні тренди весна-літо 2024 — що будемо носити наступного сезону</figcaption>
                    </figure>
                    <figure>
                        <img src="Milano.jpg" alt="Milano" width="300" height="200">
                        <figcaption>Як українські дизайнери підкорювали Мілан за підтримки «ангела моди» Джен Сідарі</figcaption>
                    </figure>
                    <figure>
                        <img src="ПІДТРИМКА.jpeg" alt="ПІДТРИМКА" width="300" height="200">
                        <figcaption>Підтримка України на світових подіумах</figcaption>
                    </figure>
                    <figure>
                        <img src="LONDON.jpeg" alt="LONDON" width="300" height="200">
                        <figcaption>Тиждень моди в Лондоні - чим надихались митці</figcaption>
                    </figure>
                </div>

                <h3>Фото з описом</h3>
                <pre>
                    <code>
                        &lt;!-- Фото з описом --&gt;
                        &lt;div class="gallery"&gt;
                            &lt;figure&gt;
                                &lt;img src="FASHION_WEEK.jpg" alt="FASHION_WEEK"&gt;
                                &lt;figcaption&gt;Модні тренди весна-літо 2024 — що будемо носити наступного сезону&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="Milano.jpg" alt="Milano"&gt;
                                &lt;figcaption&gt;Як українські дизайнери підкорювали Мілан за підтримки «ангела моди» Джен Сідарі&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="ПІДТРИМКА.jpeg" alt="ПІДТРИМКА"&gt;
                                &lt;figcaption&gt;Підтримка України на світових подіумах&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="LONDON.jpeg" alt="LONDON"&gt;
                                &lt;figcaption&gt;Тиждень моди в Лондоні - чим надихались митці&lt;/figcaption&gt;
                            &lt;/figure&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
            `;
            break;

        case "ВИСНОВКИ":
            contentHTML = `
                <h3>ВИСНОВКИ</h3>
                <p>В ході виконання лабораторної роботи набуто практичні навички реалізації завдань  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.</p>
                <p>Набуті знання та навички закріплено в шляхом створення шаблону звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.</p>
            `;
            break;

        case "Тема, мета ЛР №2. Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №2. Місце розташування сайту, звіту</h3>
                <p>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>

                <p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  
                зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>

                <h3>Місце розташування ЛР №2</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/LR2zvitLR" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/LR2zvitLR/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/LR2WebStore" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/LR2WebStore/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/mavi-fiot/LR2Resume" target="_blank">Резюме.</a> <a href="https://mavi-fiot.github.io/LR2Resume/" target="_blank">Сайт резюме.</a></p>
                
            `;
            break;

        case "Способи підключення стилів":
            contentHTML = `
                <h3>Способи підключення стилів</h3>
                <p>Вбудований CSS: Стилі можна включати безпосередньо в HTML-документ за допомогою тегу <style>. 
                Вбудований CSS також можна використовувати в тегах за допомогою атрибута style.  </p>

                <p>Зовнішній CSS: Стилі можна розмістити у зовнішньому файлі CSS і підключити їх до HTML-документу за допомогою тегу <link>.</p>

                <p>Використання JavaScript для динамічного додавання стилів: Ви можете використовувати JavaScript для створення або зміни стилів динамічно. </p>
                              
            `;
            break;
        
        case "СЕЛЕКТОРИ":
            contentHTML = `
                <h3>СЕЛЕКТОРИ</h3>

                <p>Селектори тегу</p>
                
                <p>Селектори класу</p>

                <p>Селектори ідентифікаторів</p>

                <p>Селектори сусідні</p>

                <p>Селектори атрибута </p>

                <p>Селектори універсальні</p>

                <p>Селектори дочірні</p>

                              
            `;
            break;

            case "Селектори тегу":
                contentHTML = `
                    <h3>Селектори тегу</h3>    
                    
                    <img src="s1.webp" alt="sel1">                   
                    
                                  
                `;
                break;
            case "Селектори класу":
            contentHTML = `
                <h3>Селектори класу</h3>
                <img src="s2.png" alt="sel2">
                                              
                `;
                break;

            case "Селектори ідентифікаторів":
            contentHTML = `
                <h3>Селектори ідентифікаторів</h3>
                <img src="s3.png" alt="sel3">   
                                              
                `;
                break;

            case "Інші селектори":
            contentHTML = `
                <h3>Інші селектори</h3>

                <p>Селектори сусідні</p>
                <img src="s4.png" alt="sel4">

                <p>Селектори атрибута </p>
                <img src="s5.png" alt="sel5">

                <p>Селектори універсальні</p>
                <img src="s6.png" alt="sel6">

                <p>Селектори дочірні</p>
                <img src="s7.png" alt="sel7">
                              
                `;
                break;

            case "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий":
            contentHTML = `
                <h3>CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий</h3>

                <p>Шрифти </p>
                <img src="sr11.png" alt="sr11">
                <img src="sr12.png" alt="sr12">                
                <p>Текст </p>
                <img src="sr21.png" alt="sr21">
                <img src="sr22.png" alt="sr22">
                <p>Таблиці </p>
                <img src="sr31.png" alt="sr31">
                <img src="sr32.png" alt="sr32">
                <p>Фон</p>
                <img src="sr41.png" alt="sr41">
                <img src="sr42.png" alt="sr42">
                <p>Контур</p>
                <img src="sr51.png" alt="sr51">
                <img src="sr52.png" alt="sr52">
                <p>Списки</p>
                <img src="sr61.png" alt="sr61">
                <img src="sr62.png" alt="sr62">     
                <p>СSS Просунутий </p>
                <img src="sr71.png" alt="sr71">
                <img src="sr72.png" alt="sr72">  
                <p>Більше результатів за посиланнями:</p>   
                <p><a href="https://github.com/mavi-fiot/samostiina_robota_2" target="_blank">Репозиторій за самостійною роботою № 2.</a> </p>
                <p><a href="https://mavi-fiot.github.io/samostiina_robota_2/" target="_blank">Сторінка результатів виконання практичних завдань.</a></p>
                `;
                break;

            case "Висновки":
            contentHTML = `
                <h3>Висновки</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  з селекторами, 
                ідентифікаторами, списками,  різноманітними властивостями 
                кольору і фону,  зовнішними та внутрішними  відступами,  
                плаваючими елементами, оформленням текстових елементів. Набуті навички реалізовано в загальному проекті, посилання на який наведено вище. </p>
                
                `;
                break;

        case "Тема, мета ЛР №3 Місце розташування сайту, звіту":
        contentHTML = `
            <h3>Тема, мета ЛР №3. Місце розташування сайту, звіту</h3>
            <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>

            <p>Мета:</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>   
                
            <h3>Місце розташування ЛР №3</h3>
            <p>Розміщено на GitHub</p>
            <p><a href="https://github.com/mavi-fiot/LR3zvitLR" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/LR3zvitLR/" target="_blank">Сайт звіту.</a></p>
            <p><a href="https://github.com/mavi-fiot/LR3WebStore" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/LR3WebStore/" target="_blank">Сайт проекту.</a></p>
                
            `;
            break;

        case "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету</h3>
                <p>Зовнішній вигляд макету:</p>
                <img src="LR3_11.png" alt="LR3_11">                   


                <p>Код макету:</p>
                <img src="LR3_12.png" alt="LR3_12">              
                <img src="LR3_13.png" alt="LR3_13">                  
                <img src="LR3_14.png" alt="LR3_14">                   
                              
            `;
            break;
        
        case "ЗАВДАННЯ №2":
            contentHTML = `
                <h3>ЗАВДАННЯ №2</h3>

                <p>Фіксовані і гумові табличні та блокові верстки</p>              
                                              
            `;
            break;

            case "Фіксована таблична верстка":
                contentHTML = `
                    <h3>Фіксована таблична верстка</h3>    
                    
                    <img src="LR3_21.png" alt="LR3_21">                   
                    
                                  
                `;
                break;
            case "Гумова таблична верстка":
            contentHTML = `
                <h3>Гумова таблична верстка</h3>
                <img src="LR3_22.png" alt="LR3_22">                   
                                              
                `;
                break;

            case "Фіксована блокова верстка":
            contentHTML = `
                <h3>Фіксована блокова верстка</h3>
                <img src="LR3_23.png" alt="LR3_23">                   
                                              
                `;
                break;

            case "Гумова блокова верстка":
            contentHTML = `
                <h3>Гумова блокова верстка</h3>
                <img src="LR3_24.png" alt="LR3_24">                   

                `;
                break;

            case "ЗАВДАННЯ №3 FLEXBOX":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 FLEXBOX</h3>

                <p>Flexbox (Flexible Box Layout) - це технологія CSS, яка забезпечує багатофункціональність для 
                розташування елементів в контейнері. За допомогою Flexbox ви можете легко створювати гнучкі та 
                респонсивні макети, контролювати порядок, вирівнювання та розміри елементів на веб-сторінці. </p>                             
                <p>Основні концепції Flexbox включають у себе: </p>
                
                <p>Гнучкі контейнери (Flex Containers): Елементи, які мають властивість display: 
                flex або display: inline-flex, стають гнучкими контейнерами, які можна організовувати 
                за допомогою властивостей Flexbox. </p>
                
                <p>Гнучкі елементи (Flex Items): Дочірні елементи гнучкого контейнера, які вирівнюються та розміщаються за допомогою Flexbox.</p>
                
                <p>Основні (main) та бічні (cross) вісі: Flexbox працює на основі вісей, де головна вісь 
                вказує напрямок розташування елементів (зазвичай горизонтально), а бічна вісь використовується 
                для вирівнювання та розташування елементів у поперечному напрямку (зазвичай вертикально).</p>
                
                <p>Гнучкі властивості (Flex Properties): Flexbox має низку властивостей, 
                таких як justify-content, align-items, flex-direction, які використовуються 
                для керування розміщенням та вирівнюванням елементів в гнучкому контейнері.</p>
                
                <p>Flexbox дозволяє створювати складні макети і вирішувати багато задач з розміщенням елементів 
                на веб-сторінці з меншим кодом та більшою гнучкістю. Він є потужним інструментом для розробників 
                веб-сайтів і допомагає забезпечити ефективність та консистентність у створенні різноманітних макетів.</p>
                
                `;
                break;

            case "Зовнішній вигляд сторінки":
            contentHTML = `
                <h3>Зовнішній вигляд сторінки</h3>

                <img src="LR3_311.png" alt="LR3_311">                   

                `;
                break;

            case "HTML-код":
            contentHTML = `
                <h3>HTML-код</h3>

                <img src="LR3_321.png" alt="LR3_321">                   
                <img src="LR3_322.png" alt="LR3_322">                   
                
                `;
                break;

            case "CSS-код сторінки":
            contentHTML = `
                <h3>CSS-код сторінки</h3>

                <img src="LR3_331.png" alt="LR3_331">                   
                <img src="LR3_332.png" alt="LR3_332">                   
                <img src="LR3_333.png" alt="LR3_333">                   
                <img src="LR3_334.png" alt="LR3_334">                   
                
                `;
                break;

            case "ВИСНОВКИ до ЛР №3":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №3</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                верстки сторінок засобами CSS, верстки на основі плаваючих елементів, 
                з’ясувати переваги та недоліки типів макетів веб-сторінок. Визначено доцільність 
                використання переважно блокової верстки, що дозволяє використовувати більше 
                інструментів аніж за табличною варіацією, спрощує процедури розробки сайту, 
                підвищує рівень користувацької зручності та зручності обслуговування. При цьому, не слід
                відкидати допустимістьвикористання табличних технологій за окремими елементами (в разі потреби).</p>
                
                `;
                break;

                
            case "Тема, мета ЛР №4 Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №4. Місце розташування сайту, звіту</h3>
                <p>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>

                <p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>

                <h3>Місце розташування ЛР №4</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/LR4zvitLR" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/LR4zvitLR/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/LR4WebStore" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/LR4WebStore/" target="_blank">Сайт проекту.</a></p>
                        
                `;
                break;
           
            case "ЗАВДАННЯ №1 Визначення брейкпоінтів":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Визначення брейкпоінтів</h3>
        
                <p>Брейкпоінти в контексті веб-дизайну визначають різні розміри екрану, на яких змінюється вигляд і розміщення елементів веб-сайту, 
                    щоб забезпечити оптимальний вигляд і користування на різних пристроях, таких як комп'ютери, планшети та смартфони.
                    Основна мета брейкпоінтів - забезпечити адаптивну верстку, яка забезпечує оптимальний вигляд і функціональність сайту 
                    на будь-якому розмірі екрану. Використання брейкпоінтів дозволяє розробникам створювати веб-сайти, які адаптуються до різних 
                    розмірів екрану без необхідності створення окремих версій для кожного пристрою.
                    Наприклад, розміщення та стилізація елементів веб-сайту може бути оптимізована для широкоформатних екранів 
                    комп'ютерів і коли розмір екрану зменшується, може бути змінена компоновка, розміщення та стилізація для 
                    планшетів та смартфонів, щоб забезпечити зручність для користувача.</p>
                <p>Визначені брейкпоінти: до 500, більше 500 і до 1000, більше 1000.</p>
                        
                `;
                break;
        
                        
            case "ЗАВДАННЯ №2 Виконання адаптивної верстки":
            contentHTML = `
                <h3>ЗАВДАННЯ №2 Виконання адаптивної верстки</h3>
                
                <p>Результати виконання адаптивної верстки:</p>

                <br>
                <p>1) Десктопна версія (ширина від 1001 рх)</p>
                <img src="lr4_11.jpg" alt="lr4_11">   
                <br>
                
                <p>2) Планшетна версія (ширина від 501 до 1000 рх)</p>
                <img src="lr4_12.jpg" alt="lr4_12">
                <img src="lr4_13.jpg" alt="lr4_13">  
                
                <br>
                <p>3) Версія під мобільний телефон (ширина до 500 рх)</p>
                <img src="lr4_14.jpg" alt="lr4_14">   
                <br>

                <br>
                <p>Фрагмент тексту файлу стилів - медіазапити:</p>
                <img src="lr4_15.jpg" alt="lr4_15">   
                <br>


    
                                
                `;
                break;
                        
                        
            case "ЗАВДАННЯ №3 Пояснення створених версій":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 Пояснення створених версій</h3>
                
                <p>Отримані версії сайту відображають адаптивність та оптимізацію для різних пристроїв.</p> 

                <p>Десктопна версія:
                Ця версія призначена для великих екранів, таких як настільні комп'ютери та ноутбуки.
                Має широкий формат та використовує багато горизонтального простору.
                Містить повний зміст та деталізацію елементів.</p
                <p>Планшетна версія:
                Оптимізована для пристроїв з середніми розмірами екрану, таких як планшети та деякі мобільні пристрої у горизонтальному режимі.
                Може бути менш габаритною, зі зменшеною кількістю контенту на екрані, щоб полегшити навігацію та покращити відображення на пристроях із середніми екранами.</p
                <p>Мобільна версія:
                Призначена для пристроїв з невеликими екранами, таких як смартфони.
                Має компактну структуру та обмежену кількість контенту на екрані, щоб забезпечити зручне відображення та навігацію на малих пристроях.
                Кожна версія має свої унікальні особливості та підходи до відображення контенту, забезпечуючи оптимальний користувацький досвід для різних типів пристроїв.</p>
                                
                `;
                break;
                
                                
            // case "Альтернативне рішення":
            // contentHTML = `
            //     <h3>Альтернативне рішення</h3>
                        
            //     <p> </p>
                                        
            //     `;
            //     break;
                    
            case "ВИСНОВКИ до ЛР №4":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №4</h3>
                        
                <p>В ході виконання лабораторної роботи набуто практичних навичок застосування адаптивної верстки з використанням медіа-запитів. 
                А також, здійснено порівняння з альтнернативними засобами (без використання медіа-запитів).</p>
                                        
                `;
                break;
                        
                 
            case "Постановка задачі ЛР № 5":
            contentHTML = `
                <h3>Постановка задачі лабораторної роботи № 5 (Тема, мета ЛР №5).</h3>
                <p>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
                ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT</p>
        
                <p>Мета: Придбати практичні навички роботи з масивами у js-сценаріях. 
                Реалізація програм засобами мови JAVASCRIPT</p>
        
                <h3>Місце розташування ЛР №5</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/LR5zvitLR" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/LR5zvitLR/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/LR5WebStore" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/LR5WebStore/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/mavi-fiot/JSLR5" target="_blank">Виконання завдань.</a> <a href="https://mavi-fiot.github.io/JSLR5/" target="_blank">Сайт виконання завдання за пунктом 6.</a></p>
                               
                `;
                break;
                   
            case "Способи функціонального застосування JS":
            contentHTML = `
                <h3>Способи функціонального застосування JavaScript:</h3>
                
                <br><br>

                <p>Схема URL</p>
                <a href="javascript:alert('Демонстрація схеми URL')">Натиснить</a>
                <p>Схема URL (URL Scheme): JavaScript можна викликати з URL через 
                    псевдо-протоколи, такі як javascript:. Це дозволяє виконувати 
                    JavaScript код безпосередньо з адресного рядка браузера або з посилань.</p>
                <br>
                <p>Обробник подій</p>
                <button onclick="myFunction()">Обробник подій</button>
            <script>
                function myFunction() {
                    alert("Демонстрація обробника подій");
                }
            </script>
                <br>
                <p>Обробник подій (Event Handler): Цей метод використовується для виконання 
                    JavaScript коду відповідно до подій, що виникають на сторінці. Наприклад, 
                    ми можемо викликати функцію JavaScript при кліку на елемент або при 
                    введенні тексту в поле вводу.</p>
                <br> <br>

                <p>Підстановка (entity)</p>

                <p id="demo">Цей текст буде замінений за допомогою JavaScript.</p>

            <script>
                document.getElementById("demo").innerHTML = "Цей текст ВЖЕ замінений за допомогою JavaScript.";
            </script>
                <p>Підстановка (entity): Цей термін може вказувати на використання JavaScript для 
                    модифікації даних на сторінці під час її відображення. Наприклад, ми можемо
                    використовувати JavaScript для динамічного створення або зміни елементів 
                    HTML, що називається DOM-маніпуляцією. Це може включати додавання, видалення 
                    або зміну вмісту елементів на сторінці відповідно до подій користувача або інших факторів.</p>
                <br>

                <p>Вставка (тег SCRIPT)</p>
                <p>Вставка (тег SCRIPT): Використання тегу <code>&lt;script&gt;</code> дозволяє 
                    вбудовувати JavaScript-код безпосередньо в HTML-документ. Ми можемо вставляти 
                    код прямо в розмітку сторінки або посилатися на зовнішні файли з JavaScript-кодом.</p>
                <br>
            <script>
                alert("Демонстрація вставки - відображається під час завантаження сторінки.");
            </script>
                                
                `;
                break;
                
                                
            case "Схема URL":
            contentHTML = `
                <h3>Схема URL</h3>
                        
                <a href="javascript:alert('Демонстрація схеми URL')">Натиснить</a>
                <p>Схема URL (URL Scheme): JavaScript можна викликати з URL через 
                     псевдо-протоколи, такі як javascript:. Це дозволяє виконувати 
                    JavaScript код безпосередньо з адресного рядка браузера або з посилань.</p>
                <br>
                <p>Текст коду:</p> 
                <img src="lr5js_51.jpg" alt="lr5js_51">   
                <br> 
                <p>Фіксація виконання:</p> 
                <img src="lr5js_511.jpg" alt="lr5js_511">                          
                `;
                break;
                                
                                
            case "Обробник подій":
            contentHTML = `
                <h3>Обробник подій</h3>
                        
                <button onclick="myFunction()">Обробник подій</button>
            <script>
                function myFunction() {
                    alert("Демонстрація обробника подій");
                }
            </script>
                <br>
                <p>Обробник подій (Event Handler): Цей метод використовується для виконання 
                    JavaScript коду відповідно до подій, що виникають на сторінці. Наприклад, 
                    ми можемо викликати функцію JavaScript при кліку на елемент або при 
                    введенні тексту в поле вводу.</p>
                <br> <br>
                <p>Текст коду:</p> 
                <img src="lr5js_52.jpg" alt="lr5js_52"> 
                <br> 
                <p>Фіксація виконання:</p> 
                <img src="lr5js_521.jpg" alt="lr5js_521">  

                `;
                break;
                        
                                        
            case "Підстановка (entity)":
            contentHTML = `
                <h3>Підстановка (entity)</h3>
                                
                <p id="demo">Цей текст буде замінений за допомогою JavaScript.</p>

            <script>
                document.getElementById("demo").innerHTML = "Цей текст ВЖЕ замінений за допомогою JavaScript.";
            </script>
                <p>Підстановка (entity): Цей термін може вказувати на використання JavaScript для 
                    модифікації даних на сторінці під час її відображення. Наприклад, ми можемо
                    використовувати JavaScript для динамічного створення або зміни елементів 
                    HTML, що називається DOM-маніпуляцією. Це може включати додавання, видалення 
                    або зміну вмісту елементів на сторінці відповідно до подій користувача або інших факторів.</p>
                <br> 
                
                <p>Текст коду:</p> 
                <img src="lr5js_53.jpg" alt="lr5js_53">
                <br> 
                <p>Фіксація виконання:</p> 
                <img src="lr5js_531.jpg" alt="lr5js_531">     

                `;
                break;

            case "Вставка (тег SCRIPT)":
            contentHTML = `
                <h3>Вставка (тег SCRIPT)</h3>
                <p>Вставка (тег SCRIPT): Використання тегу <code>&lt;script&gt;</code> дозволяє 
                    вбудовувати JavaScript-код безпосередньо в HTML-документ. Ми можемо вставляти 
                    код прямо в розмітку сторінки або посилатися на зовнішні файли з JavaScript-кодом.</p>
                <br>
            <script>
                alert("Демонстрація вставки - відображається під час завантаження сторінки.");
            </script>
                <br>     
                <p>Текст коду:</p> 
                <img src="lr5js_54.jpg" alt="lr5js_54">   
                <br> 
                <p>Фіксація виконання:</p> 
                <img src="lr5js_541.jpg" alt="lr5js_541">                                     
                `;
                break;

            case "Виконання завдання за масивами (вар.6 таб.1)":
            contentHTML = `
                <h3>Виконання завдання за масивами (варіант 6 таблиці 1):</h3>
                <br>                                   
                <p>Текст завдання:</p>
                <p>1.Створити одновимірний масив, кількість елементів якого задана користувачем. 
                Обчислити суму елементів між максимальним та мінімальними значеннями масиву.</p>
                <p>2.Упорядкувати масив у порядку зростання.(метод Швидкого сортування).
                Надрукувати вхідний та вихідний масив.</p>
                <p>Застосувати функції.</p>

                <br>                                   
                <p>Приклади роботи програми:</p>
                <br> 
                <img src="lr5js_201.jpg" alt="lr5js_201">                                      

                <br> 
                <br>     
                <p>Текст коду:</p> 
                <img src="lr5js_211.jpg" alt="lr5js_211"> 
                <img src="lr5js_212.jpg" alt="lr5js_212">                                      
                <img src="lr5js_213.jpg" alt="lr5js_213">                                  
                                               
                `;
                break;
            case "Виконання завдання за вар.6 таб.2":
            contentHTML = `
                <h3>Виконання завдання за варіантом 6 таблиці 2</h3>
                <br>                                   
                <br>                                   
                <p>Приклади роботи програми:</p>
                <br> 
                <img src="lr5js_601.jpg" alt="lr5js_601">                                      
                <img src="lr5js_602.jpg" alt="lr5js_602">                                      
                <img src="lr5js_603.jpg" alt="lr5js_603">                                      

                <br> 
                <br>     
                <p>Текст коду:</p> 
                <img src="lr5js_611.jpg" alt="lr5js_611"> 
                <img src="lr5js_621.jpg" alt="lr5js_621">                                      
                <img src="lr5js_622.jpg" alt="lr5js_622">          
                <img src="lr5js_631.jpg" alt="lr5js_631">          
                <img src="lr5js_632.jpg" alt="lr5js_632">          
                         
                `;
                break;
        
            case "Виконання завдання за пунктом 7":
            contentHTML = `
                <h3>Виконання завдання за пунктом 7</h3>
                                                
                <p>Текст файлу із скриптом:</p> 
                <img src="lr5js_711.jpg" alt="lr5js_711"> 

                <br>
                <p>Результати виконання адаптивної верстки (без скрипта та з виконанням скрипта):</p>

                <br>
                <p>1) Десктопна версія (ширина від 1001 рх)</p>
                <img src="lr4_11.jpg" alt="lr4_11">
                <p>1) Без скрипта</p>   
                <br>
                <img src="lr5js_701.jpg" alt="lr5js_701"> 
                <p>1) Із скриптом</p>   
                <br>

                <p>2) Планшетна версія (ширина від 501 до 1000 рх)</p>
                <img src="lr4_12.jpg" alt="lr4_12">
                <p>2) Без скрипта</p>   
                <br>
                <img src="lr5js_702.jpg" alt="lr5js_702"> 
                <p>2) Із скриптом</p>   
                <br>

                <p>3) Версія під мобільний телефон (ширина до 500 рх)</p>
                <img src="lr4_14.jpg" alt="lr4_14">   
                <p>3) Без скрипта</p>   
                <br>
                <img src="lr5js_703.jpg" alt="lr5js_703"> 
                <img src="lr5js_704.jpg" alt="lr5js_704"> 
                <p>3) Із скриптом</p>   
                <br>

                `;
                break;
        
       
                            
            case "ВИСНОВКИ за ЛР №5":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №5</h3>
                                
                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи з 
                масивами у js-сценаріях.  Виконано завдання з реалізаціъ програм засовами мови JAVASCRIPT.
                Відпрацьовано отримані навички на власному проекті.</p>
                                                
                `;
                break;

            case "Постановка задачі ЛР № 5.1":
            contentHTML = `
                <h3>Постановка задачі ЛР № 5.1</h3>
                                                                        
                <p>Тема:   ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. 
                CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ</p>
        
                <p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. <br>
                Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засобами мови JAVASCRIPT</p>
        
                <h3>Місце розташування ЛР №5.1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/LR5.1zvitLR" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/LR5.1zvitLR/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/webLR5.1" target="_blank">Виконання завдань.</a> <a href="https://mavi-fiot.github.io/webLR5.1/" target="_blank">Сайт виконання завдання № 2</a></p>
                                                                                                   
                `;
                break;


            case "Завдання № 2":
            contentHTML = `
                <h3>Текст завдання № 2</h3>
                                                                
                <p>Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві 
                колбек-функції successCallback та errorCallback.</p>
                <p>Функція getProductDetails повинна отримати деталі про вказаний товар та передати 
                їх у successCallback.</p>
                <p>У випадку якщо товар не знайдено, викликається errorCallback і передається 
                повідомлення про помилку.</p>

                <p><a href="https://mavi-fiot.github.io/webLR5.1/" target="_blank">Сайт виконання завдання № 2</a></p>

                <p>Код:</p>   
                <br>
                <img src="5121.jpg" alt="lr51_5121"> 

                <p>Результат виконання (successCallback):</p>   
                <br>
                <img src="5122.jpg" alt="lr51_5122"> 

                <p>Результат виконання (errorCallback):</p>   
                <br>
                <img src="5123.jpg" alt="lr51_5123"> 
                                                            
                                                                                
                `;
                break;     
                                
            case "Завдання № 4":
            contentHTML = `
                <h3>Текст завдання № 4</h3>
                                                                        
                <p>З об'єкту concerts отримати масив, який буде містити лише імена міст.</p>
                <p>З масиву потрібно прибрати міста, в яких концерт  уже пройшов і   
                відсортувати їх у хронологічному порядку.</p>
                <p>Результат вивести у консоль.</p>
                <p>  Очікуваний результат ["Одеса", "Умань", "Харків"]<br>
                Застосувати стрілочні функції<br>
                const concerts = {<br>
                    Київ: new Date("2020-04-01"),<br>
                    Умань: new Date("2025-07-02"),<br>
                    Вінниця: new Date("2020-04-21"),<br>
                    Одеса: new Date("2025-03-15"),<br>
                    Хмельницький: new Date("2020-04-18"),<br>
                    Харків: new Date("2025-07-10"),<br>
                };<br>
                </p>

                <p>Код та результат виконання:</p>   
                <br>
                <img src="5141.jpg" alt="lr51_5141"> 
                                                                                        
                `;
                break;     
                                                                
            case "Завдання № 6":
            contentHTML = `
                <h3>Текст завдання № 6</h3>
                                                        
                <p>Напишіть функцію, яка приймає массив об'єктів і повертає новий массив об'єктів, 
                у якому є знижка на  30 % на всі медикаменти ціна, яких перевищує 300 грн у масиві.</p>
                <p>Надайте ід для кожного медикамента.</p>
                <p>const medicines = [<br>
                    { name: "Noshpa", price: 170 },<br>
                    { name: "Analgin", price: 55 },<br>
                    { name: "Quanil", price: 310 },<br>
                    { name: "Alphacholine", price: 390 },<br>
                  ];<br>
                </p>

                <p>Код та результат виконання:</p>   
                <br>
                <img src="5161.jpg" alt="lr51_5161"> 
                                                                        
                `;
                break;     

            case "Завдання № 8":
            contentHTML = `
                <h3>Текст завдання № 8</h3>
                                                        
                <p>Напиши функцію конструктор Storage який створює об'єкти для управління 
                складом товарів.</p>
                <p>При виклику отримуватиме один агрумент - початковий масив товарів, 
                і записувати їх у властивість items.</p>

                <p>Додай методи класу:<br>   
                getItems() - повертайте масив товарів <br>  
                addItems(item) - отримує новий товар та додає його до поточних <br>  
                removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних  <br>
                const arr = ["apple", "banana", "mango"]<br>
                </p>

                <p>Код та результат виконання:</p>   
                <br>
                <img src="5181.jpg" alt="lr51_5181"> 
                                                                        
                `;
                break;     
                        
            case "Завдання № 9":
            contentHTML = `
                <h3>Текст завдання № 9</h3>
                                                                
                <p>Поверніть об'єкт, в якому вказано кількість тегів.</p>
                <p>Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}<br>
                const tweets = [<br>
                   { id: "000", likes: 5, tags: ["js", "nodejs"] },<br>
                   { id: "001", likes: 2, tags: ["html", "css"] },<br>
                   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },<br>
                   { id: "003", likes: 8, tags: ["css", "react"] },<br>
                   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },<br>
                   ];<br>
               </p>

               
               <p>Код та результат виконання:</p>   
               <br>
               <img src="5191.jpg" alt="lr51_5191"> 

                                                                                
                `;
                break;     
                                                        
            case "Завдання № 10":
            contentHTML = `
                <h3>Текст завдання № 10</h3>
                                                
                <p>Напишіть функцію checkBrackets(str) яка приймає рядок жс коду 
                (someFn)  і перевіряє правильність закриття дужок () {} [].</p>

                <p>Якщо рядок містить коректний код функція повертає true.<br>
                В іншому випадку повертає false.
                </p>

                <p>Код та результат виконання:</p>   
                <br>
                <img src="5101.jpg" alt="lr51_5101"> 
                                                                                                                
                `;
                break;     



            case "ВИСНОВКИ за ЛР №5.1":
            contentHTML = `
                <h3>ВИСНОВКИ за ЛР №5.1</h3>
                                        
                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                з об'єктами, з використанням методівоб'єкта, Callback, Стрілочних функцій та реалізацією
                програм засовами мови JAVASCRIPT.</p>
                                                        
                `;
                break;                         
        
                
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;
}