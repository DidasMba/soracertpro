import React, { useState } from "react";

interface LoginProps {
    toggle: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Code to handle login (e.g., API call) goes here
        console.log("Logging in with:", { username, password });
        props.toggle(); // Close the login popup
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>
                </form>
                <button onClick={props.toggle} className="close-btn">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Login;
