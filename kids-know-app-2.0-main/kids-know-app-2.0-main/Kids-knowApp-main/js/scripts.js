// Función para obtener usuarios almacenados en LocalStorage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Función para guardar usuarios en LocalStorage
function saveUser(username, password) {
    const users = getUsers();
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Función de registro
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const successMessage = document.getElementById('registerSuccessMessage');
    
    const users = getUsers();

    // Verificar si el usuario ya existe
    if (users.some(user => user.username === username)) {
        successMessage.textContent = "El usuario ya existe.";
        successMessage.style.color = 'red';
    } else {
        // Agregar nuevo usuario y guardar en LocalStorage
        saveUser(username, password);
        successMessage.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
        successMessage.style.color = 'green';
        successMessage.style.visibility = 'visible';
        successMessage.classList.add('fade-in');
        
        // Redirigir después de 2 segundos al login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
});

// Función de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('loginErrorMessage');
    
    const users = getUsers();
    
    // Verificar las credenciales
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Redirigir a la página principal
        window.location.href = "main.html";
    } else {
        errorMessage.textContent = "Nombre de usuario o contraseña incorrectos.";
        errorMessage.style.visibility = 'visible';
        errorMessage.classList.add('fade-in');
    }
});

