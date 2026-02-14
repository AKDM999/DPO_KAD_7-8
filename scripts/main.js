document.addEventListener('DOMContentLoaded', () => {
    const homeScreen = document.getElementById('screen-home');
    const formatsScreen = document.getElementById('screen-formats');
    const detailScreen = document.getElementById('screen-format-detail');
    const detailTitle = document.getElementById('detail-title');

    // Кнопки переходов
    const startBtn = document.getElementById('start-btn');
    const backToHomeFromFormats = document.getElementById('back-to-home-from-formats');
    const backToFormats = document.getElementById('back-to-formats');
    const formatCards = document.querySelectorAll('.format-card');

    // Вспомогательная функция для смены экрана
    function showScreen(screenToShow) {
        [homeScreen, formatsScreen, detailScreen].forEach(screen => {
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

    // 2. Обработка клика по карточке формата (с экрана 2)
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

    // 3. Назад с экрана формата на экран выбора
    if (backToFormats) {
        backToFormats.addEventListener('click', () => {
            showScreen(formatsScreen);
        });
    }

    // 4. Назад с экрана выбора на главную
    if (backToHomeFromFormats) {
        backToHomeFromFormats.addEventListener('click', () => {
            showScreen(homeScreen);
        });
    }

    // Можно добавить защиту от отсутствия гифки (но это необязательно)
});