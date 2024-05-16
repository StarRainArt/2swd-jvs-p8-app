class Application {
    constructor() {
        this.isUserLoggedIn = false;
        window.addEventListener('load', this.domUpdate());

        const loginLink = document.querySelector('.login');
        const logoutLink = document.querySelector('.logout');

        loginLink.addEventListener("click", this.login());
        logoutLink.addEventListener("click", this.logout());
    }

    domUpdate() {
        const login = document.querySelector('.login');
        const logout = document.querySelector('.logout');

        if (this.isUserLoggedIn) {
            login.style.display = 'none';
            logout.style.display = 'block';
        } else {
            login.style.display = 'block';
            logout.style.display = 'none';
        }
    }

    login() {
        const loginDialog = document.getElementById("login-dialog");
        loginDialog.showModal();

        const username = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
    }

    logout() {

    }
}

new Application();

class User {
    constructor(username, password) {
        this.username = username,
        this.password = password
    }
}