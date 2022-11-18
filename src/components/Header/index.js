import "./styles.css";

function Header(){

    function logout(){
        localStorage.setItem("logged", "false");
        localStorage.setItem("token", "");
    };

    if (localStorage.getItem("logged") === "true"){
        return(
            <header>
                <div id="header">
                    <div id="header-icon">
                        <a href="/home">
                            <img src="https://source.unsplash.com/user/c_v_r"/>
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
    else{
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
    }

};

export default Header;