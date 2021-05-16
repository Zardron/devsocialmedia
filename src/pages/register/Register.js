import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friendster</h3>
                    <span className="loginDesc">
                        Connect with friends and the world
                    </span>
                    <span className="loginDesc">around you on Lamasocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <hr />
                        <Link to="/" className="registerButton">
                            Log into Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}