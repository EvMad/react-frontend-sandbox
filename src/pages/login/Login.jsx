import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email..."></input>
                <label>Password</label>
                <input type="password" placeholder="Enter your password..."></input>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>

        </div>
    )
}