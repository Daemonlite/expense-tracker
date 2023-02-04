import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users/register/", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("registration successful");
        if (res.data) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          navigate("/login");
        }
        setName("");
        setpassword("");
        setEmail("");
      })

      .catch((error) => {
        toast.error(error.response.data);
      });
  };
  return (
    <div>
      <div className="register">
        <div className="register-form">
          <div className="param">
            <form onSubmit={handleSubmit}>
              <div className="username">
                <input
                  type="text"
                  placeholder="Enter Username.."
                  className="username"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="email">
                <input
                  type="email"
                  placeholder="Enter Email.."
                  className="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="password">
                <input
                  type="password"
                  placeholder="Enter Password..."
                  className="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <br />
              <button type="Submit" className="submit">
                Create Account
              </button>
            </form>

            <p className="link">
              already have an account ? <a href="/login">Login</a>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
