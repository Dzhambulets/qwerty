// let button = document.getElementById()
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "darkhan@gmail.com" && password == "1234") {
        window.open('./main.html');

    } else {
        alert('Неверный логин или пароль');
    }
}