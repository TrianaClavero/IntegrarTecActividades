window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form-validation').addEventListener('submit', function(event){
        event.preventDefault(); //Evita que el formulario se envie antes de la validacion 

        let firstName = document.getElementById('first-name').value;
        let lastName  = document.getElementById('last-name').value;
        let username  = document.getElementById('username').value;
        let password  = document.getElementById('password').value;
        let passwordConfirm  = document.getElementById('confirm-password').value;
        let birthday  = document.getElementById('birthday').value;
        let check = document.getElementById('check').checked;

        let hasErrors = false;
        let nameRegExp = /^[a-zA-Z]+$/;
        let usernameRegExp = /^[a-zA-Z0-9_.]+$/;

        if (firstName === '' || lastName === '' || username === '' || password === '' || passwordConfirm === '' || birthday === '') {
            alert('Por favor complete todos los campos');
            return;
        }

        if(!nameRegExp.test(firstName)){
            alert('Por favor ingrese un nombre valido (solo se permiten caracteres alfabéticos)');
            hasErrors = true;
        }

        if(firstName.length <= 2){
            alert('Su nombre debe contener mas de dos caracteres');
            hasErrors = true;
        }

        if(!nameRegExp.test(lastName)){
            alert('Por favor ingrese un apellido valido (solo se permiten caracteres alfabéticos)');
            hasErrors = true;
        }

        if(lastName.length <= 2){
            alert('Su apellido debe contener mas de dos caracteres');
            hasErrors = true;
        }

        if(!usernameRegExp.test(username)){
            alert('Por favor ingrese un usuario valido (solo se permiten caracteres alfabéticos, numericos y los simbolos _ y .)');
            hasErrors = true;
        }

        if(username.length <= 2){
            alert('Su usuario debe contener mas de dos caracteres');
            hasErrors = true;
        }

        if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden');
            hasErrors = true;
          }

        // Si no hay errores, se puede enviar el formulario
         if (!hasErrors) {
         alert('Formulario enviado');
        }

    })




})


