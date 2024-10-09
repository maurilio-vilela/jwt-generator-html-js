function toggleTheme() {  
    const body = document.body;  
    body.classList.toggle('dark-mode');  
    body.classList.toggle('bg-light');  
    body.classList.toggle('bg-dark');  

    if (body.classList.contains('dark-mode')) {  
        localStorage.setItem('theme', 'dark');  
        document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-sun"></i> ';  
    } else {  
        localStorage.setItem('theme', 'light');  
        document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i> ';  
    }  
}  

function applySavedTheme() {  
    const savedTheme = localStorage.getItem('theme');  
    const body = document.body;  

    if (savedTheme === 'dark') {  
        body.classList.add('dark-mode');  
        body.classList.remove('bg-light');  
        body.classList.add('bg-dark');  
        document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-sun"></i>';  
    } else {  
        body.classList.remove('dark-mode');  
        body.classList.remove('bg-dark');  
        body.classList.add('bg-light');  
        document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';  
    }  
}  

function generateKey() {  
    const length = document.getElementById('length').value;  
    const hasLowerCase = document.getElementById('lowercase').checked;  
    const hasUpperCase = document.getElementById('uppercase').checked;  
    const hasNumbers = document.getElementById('numbers').checked;  
    const hasSpecials = document.getElementById('specials').checked;  

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';  
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    const numberChars = '0123456789';  
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~';  

    let characters = '';  
    if (hasLowerCase) characters += lowerChars;  
    if (hasUpperCase) characters += upperChars;  
    if (hasNumbers) characters += numberChars;  
    if (hasSpecials) characters += specialChars;  

    if (characters.length === 0) {  
        alert('Por favor, selecione pelo menos um tipo de caractere.');  
        return;  
    }  

    let generatedKey = '';  
    for (let i = 0; i < length; i++) {  
        const randomIndex = Math.floor(Math.random() * characters.length);  
        generatedKey += characters[randomIndex];  
    }  

    document.getElementById('generatedKey').textContent = generatedKey;  
}  

function countCharacters() {  
    const inputElement = document.getElementById('userKeyInput');  
    const countDisplay = document.getElementById('inputCharacterCount');  
    countDisplay.textContent = `Comprimento da Chave Inserida: ${inputElement.value.length} caracteres`;  
}  

document.addEventListener('DOMContentLoaded', () => {  
    applySavedTheme();  
});

// Função para limpar todos os campos
const handleClear = () => {
    // Resetar comprimento para 32
    document.getElementById('length').value = 32;

    // Limpar chave gerada
    document.getElementById('generatedKey').innerText = '';

    // Limpar o campo de input da chave
    document.getElementById('userKeyInput').value = '';

    // Resetar opções para o estado inicial
    document.getElementById('lowercase').checked = true;
    document.getElementById('uppercase').checked = true;
    document.getElementById('numbers').checked = true;
    document.getElementById('specials').checked = true;
};