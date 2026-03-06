document.addEventListener('DOMContentLoaded', () => {
    // Аккордеон для FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Переключаем активный класс на кнопке
            question.classList.toggle('active');
            
            // Получаем ответ (следующий элемент после кнопки)
            const answer = question.nextElementSibling;
            
            // Переключаем класс show
            answer.classList.toggle('show');
            
            // Закрываем другие открытые ответы (опционально)
            // Если хочешь, чтобы открывался только один вопрос, раскомментируй код ниже
            /*
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('show');
                }
            });
            */
        });
    });
    
    // Обработка отправки формы (для демонстрации)
    /*
    const form = document.querySelector('.feedback-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо за обратную связь! Мы ответим вам в ближайшее время.');
            form.reset();
        });
    }
    */
});