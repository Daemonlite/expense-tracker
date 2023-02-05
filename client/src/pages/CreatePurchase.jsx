import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PurchState } from "../context/context"
const CreatePurchase = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const [date,setDate] = useState("")
  const [price, setPrice] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [user, setUser] = useState("");
  const {exp,setExp} = PurchState()

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setUser(User._id);
  }, []);


  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/purchases", {
        item,
        expenseCategory,
        price,
        date,
        user,
      })
      .then((res) => {
        toast.success("purchase added successfully");
        if (res.data) {
          navigate("/purchases");
          setExp(res.data.price)
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
                  placeholder="what did you buy?"
                  className="username"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <br />
              <div className="email">
                <input
                  type="number"
                  placeholder="How much did you spend ?"
                  className="email"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <br />
              <div className="password">
                <input
                  type="text"
                  placeholder="enter budget category..."
                  className="password"
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                />
              </div>
              <br />
              <div className="email">
                <input
                  type="date"
                  placeholder="when did you make the purchase"
                  className="email"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <br />
              <button type="Submit" className="submit" >
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

export default CreatePurchase
