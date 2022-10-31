import "./styles.css";

function Header(){

    return(
        <header>
            <div id="header">
                <div id="header-icon">
                    <a href="/home">
                        <img src="https://source.unsplash.com/user/c_v_r"/>
                    </a>
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

};

export default Header;