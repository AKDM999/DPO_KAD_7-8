document.addEventListener('DOMContentLoaded', () => {
    // Обновляем счётчик потерянных привычек случайными числами (для атмосферы)
    const lostSpan = document.querySelector('.lost-counter span:first-child');
    const foundSpan = document.querySelector('.lost-counter span:last-child');
    
    if (lostSpan && foundSpan) {
        setInterval(() => {
            const newLost = Math.floor(Math.random() * 30) + 30; // 30-60
            const newFound = Math.floor(Math.random() * 25) + 25; // 25-50
            lostSpan.textContent = newLost;
            foundSpan.textContent = newFound;
        }, 5000); // меняется каждые 5 секунд
    }
});