import "./styles.css";

function Header() {
    const iconURL = 'https://www.sabesim.com.br/wp-content/uploads/2021/05/list-2389219_1280.png'

    function logout() {
        localStorage.setItem("logged", "false");
        localStorage.setItem("token", "");
    };

    if (localStorage.getItem("logged") === "true") {
        return (
            <header>
                <div id="header">
                    <div id="header-icon">
                        <a href="/home">
                            <img src={iconURL} alt='Icone da página' />
                        </a>
                    </div>

                    <div id="header-links">
                        <a href="/profile">
                            <span>Profile</span>
                        </a>
                        <a onClick={() => logout()} href="/">
                            <span>SignOut</span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
    else {
        return (
            <header>
                <div id="header">
                    <div id="header-icon">
                        <img src={iconURL} alt='Icone da página' />
                    </div>

                    <div id="header-links">
                        <a href="/">
                            <span>SignIn</span>
                        </a>
                        <a href="/signup">
                            <span>SignUp</span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }

};

export default Header;