document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Obtener todos los campos requeridos
    const requiredFields = document.querySelectorAll('#contactForm [required]');
    let formValid = true;

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            formValid = false;
            // Mostrar mensaje de error en el campo
            field.classList.add('is-invalid');
            const feedback = field.nextElementSibling;
            if (feedback) {
                feedback.style.display = 'block';
            }
        } else {
            field.classList.remove('is-invalid');
            const feedback = field.nextElementSibling;
            if (feedback) {
                feedback.style.display = 'none';
            }
        }
    });

    // Si algún campo no es válido, previene el envío
    if (!formValid) {
        event.preventDefault();
        event.stopPropagation();
    }
});
