
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <header>Login Account</header>
      </div>
      <div className="form-container">
        <div className="form-image">
          <div className="form-box">
            <img
              src="https://images.unsplash.com/photo-1609403299063-c0a71837b5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvc3BpdGFsaXR5JTIwTmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Spider man is coming"
            />
          </div>
        </div>
        <div className="form-field">
          <form className="form">
            <div className="form-body">
              <label htmlFor="email">
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: 20, color: "#fff" }}
                />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-body">
              <label htmlFor="password">
                <i
                  className="fas fa-lock"
                  style={{ fontSize: 20, color: "#fff" }}
                />
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="button" type="submit">
              Login
            </button>
            <p style={{ margin: 5, color: "#fff" }}>
              Forgotten password ?{" "}
              <Link
                to="/signup"
                style={{ color: "aqua", textDecoration: "none" }}
              >
                Retrieve password/signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
