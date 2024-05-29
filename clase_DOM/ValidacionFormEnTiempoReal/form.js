window.addEventListener('DOMContentLoaded', () => {
    
    const firstName = document.getElementById('first-name');
    const firstNameSpan = document.getElementById('first-name-span');
    const lastName  = document.getElementById('last-name');
    const lastNameSpan = document.getElementById('last-name-span');
    const username  = document.getElementById('username');
    const usernameSpan = document.getElementById('username-span');
    const password  = document.getElementById('password');
    const passwordSpan = document.getElementById('password-span');
    const passwordConfirm  = document.getElementById('confirm-password');
    const passwordConfirmSpan = document.getElementById('password-confirm-span');
    const birthday  = document.getElementById('birthday');
    const birthdaySpan = document.getElementById('birthday-span');
    const newsletterCheckbox = document.getElementById('check');
    const isChecked = newsletterCheckbox.checked;
    const form = document.getElementById('form-validation');

    const nameRegExp = /^[a-zA-Z]+$/;
    const usernameRegExp = /^[a-zA-Z0-9_.]+$/;

    // Validaciones

    firstName.addEventListener('input', () => {
        if(!nameRegExp.test(firstName.value)){
            firstNameSpan.textContent = 'El nombre solo debe contener letras';
            firstName.classList.add('invalid');
        } else if(firstName.value.length <= 2){
            firstNameSpan.textContent = 'El nombre debe tener más de 2 caracteres';
            firstName.classList.add('invalid');
        } else {
            firstNameSpan.textContent = '';
            firstName.classList.remove('invalid');
        }
    });

    lastName.addEventListener('input', () => {
        if(!nameRegExp.test(lastName.value)){
            lastNameSpan.textContent = 'El apellido solo debe contener letras';
            lastName.classList.add('invalid');
        } else if(lastName.value.length <= 2) {
            lastNameSpan.textContent = 'El apellido debe tener más de 2 caracteres';
            lastName.classList.add('invalid');
        } else {
            lastNameSpan.textContent = '';
            lastName.classList.remove('invalid');
        }

        username.addEventListener('input', () => {
            if(!usernameRegExp.test(username.value)){
                usernameSpan.textContent = 'El usuario solo puede contener letras, números, . y _';
                username.classList.add('invalid');
            } else if (username.value.length <= 2) {
                usernameSpan.textContent = 'El usuario debe tener más de 2 caracteres';
                username.classList.add('invalid');
            } else {
                usernameSpan.textContent = '';
                username.classList.remove('invalid');
            }
        });

        password.addEventListener('input', () => {
            if(password.value.length < 8){
                passwordSpan.textContent = 'La contraseña debe tener almenos 8 caracteres';
                password.classList.add('invalid');
            } else {
                passwordSpan.textContent = '';
                password.classList.remove('invalid');
            }
        })

        passwordConfirm.addEventListener('input', () => {
            if (passwordConfirm.value !== password.value) {
                passwordConfirmSpan.textContent = 'Las contraseñas deben ser iguales';
                passwordConfirm.classList.add('invalid');
            } else {
                passwordConfirmSpan.textContent = '';
                passwordConfirm.classList.remove('invalid');
            }
            })

    });


    // Validación y almacenamiento de datos en localStorage al enviar el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Verificar si hay errores
    if (form.querySelectorAll('.invalid').length > 0) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    // Guardar datos en localStorage
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      password: password.value,
      birthday: birthday.value,
      newsletterCheckbox: isChecked    
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('¡Registro exitoso!');

  });

})
