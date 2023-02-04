import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBudget = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budgetAmount, setbudgetAmount] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setUser(User._id);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/expenses", {
        title,
        budgetAmount,
        description,
        user,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Category created successfully");
        if (res.data) {
          localStorage.setItem(
            "userPurchaseCategory",
            JSON.stringify(res.data)
          );
          navigate("/home");
        }
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
              <div className="title">
                <input
                  type="text"
                  placeholder="Enter title.."
                  className="username"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <br />
              <div className="email">
                <input
                  type="number"
                  placeholder="Enter amount for budget.."
                  className="email"
                  value={budgetAmount}
                  onChange={(e) => setbudgetAmount(e.target.value)}
                />
              </div>
              <br />
              <div className="password">
                <input
                  type="text"
                  placeholder="Describe category..."
                  className="password"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <br />
              <button type="Submit" className="submit">
                Submit
              </button>
            </form>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBudget;
