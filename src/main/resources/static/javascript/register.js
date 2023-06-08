const registerForm = document.getElementById("register-form");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");

const headers = {
    'Content-Type': 'application/json'
}

const baseUrl = 'http://localhost:8080/api/v1/users';

const handleSubmit = async (e) => {
    e.preventDefault();
    let bodyObj = {
        username: registerUsername.value,
        password: registerPassword.value
    }

    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers
    }).catch(err => console.log(err.message));

    const responseArr = await response.json();

    if (responseArr.length > 0) {
        window.location.replace(responseArr[0]);
    }
}

registerForm.addEventListener('submit', handleSubmit);