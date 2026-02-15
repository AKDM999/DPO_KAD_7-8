document.addEventListener('DOMContentLoaded', () => {
    const homeScreen = document.getElementById('screen-home');
    const formatsScreen = document.getElementById('screen-formats');
    const detailScreen = document.getElementById('screen-format-detail');
    const aboutScreen = document.getElementById('screen-about');
    const detailTitle = document.getElementById('detail-title');

    // Кнопки переходов
    const startBtn = document.getElementById('start-btn');
    const aboutBtn = document.getElementById('about-btn');
    const backToHomeFromFormats = document.getElementById('back-to-home-from-formats');
    const backToFormats = document.getElementById('back-to-formats');
    const backToHomeFromAbout = document.getElementById('back-to-home-from-about');
    const formatCards = document.querySelectorAll('.format-card');

    // Вспомогательная функция для смены экрана
    function showScreen(screenToShow) {
        [homeScreen, formatsScreen, detailScreen, aboutScreen].forEach(screen => {
            screen.classList.remove('active');
        });
        screenToShow.classList.add('active');
    }

    // 1. С главной на выбор форматов
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            showScreen(formatsScreen);
        });
    }

    // 2. Кнопка "Контакты" (ведет на страницу "О нас")
    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            showScreen(aboutScreen);
        });
    }

    // 4. Обработка клика по карточке формата (с экрана 2)
    formatCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const format = card.getAttribute('data-format');
            let formatName = 'Минимализм'; // по умолчанию
            if (format === 'rpg') formatName = 'RPG Режим';
            if (format === 'family') formatName = 'Семейный';
            if (format === 'sport') formatName = 'Спорт';
            if (format === 'minimal') formatName = 'Минимализм';
            
            detailTitle.textContent = formatName; // меняем заголовок
            showScreen(detailScreen);
        });
    });

    // 5. Назад с экрана формата на экран выбора
    if (backToFormats) {
        backToFormats.addEventListener('click', () => {
            showScreen(formatsScreen);
        });
    }

    // 6. Назад с экрана выбора на главную
    if (backToHomeFromFormats) {
        backToHomeFromFormats.addEventListener('click', () => {
            showScreen(homeScreen);
        });
    }

    // 7. Назад с экрана "О нас" на главную
    if (backToHomeFromAbout) {
        backToHomeFromAbout.addEventListener('click', () => {
            showScreen(homeScreen);
        });
    }
    // Можно добавить защиту от отсутствия гифки (но это необязательно)
});