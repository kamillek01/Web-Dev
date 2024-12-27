document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем значения полей
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        // Проверяем, что поля не пустые
        if (name && phone) {
            // Скрываем форму
            form.style.display = 'none';
            
            // Показываем сообщение
            thankYouMessage.style.display = 'block';
            
            // Очищаем поля формы
            form.reset();
            
            // Через 3 секунды скрываем сообщение и показываем форму снова
            setTimeout(function() {
                thankYouMessage.style.display = 'none';
                form.style.display = 'flex';
            }, 3000);
        }
    });
});