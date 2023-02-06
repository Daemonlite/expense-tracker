import { useState, useEffect } from "react";
import { PurchState } from "../context/context";
import axios from "axios";
import { toast } from "react-toastify";
const Home = () => {
  const {  setpurchases } = PurchState();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState("");
  const [expense, setExpenses] = useState([]);
  
 


 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let hour;
    if (time.includes("AM") || time.includes("PM")) {
      const [timeWithoutAmPm, amPm] = time.split(" ");
      const [hours, minutes] = timeWithoutAmPm.split(":");
      hour = amPm === "AM" ? hours : (Number(hours) + 12).toString();
    } else {
      hour = time.slice(0, 2);
    }

    if (hour >= 0 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, [time]);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/expenses")
      .then((res) => setExpenses(res.data))
      .catch((error) => toast.error(error.response.data));
  }, [expense]);

  const filteredExpenses = expense.filter((res) => res.user === `${user._id}`);
  const totalExpenses = filteredExpenses.reduce(
    (acc, expense) => acc + expense.budgetAmount,
    0
  );

    useEffect(()=>{
      setpurchases(totalExpenses);
    },[setpurchases, totalExpenses])
    
    const deleteExpense = (res) => {

    };
  return (
    <div>
      <div className="home-info">
        <p className="userName">
          {greeting} {user.username}
        </p>

        <h2 className="userName blip">
          <div className="budget">
            total budget amount = ${totalExpenses}
            <br />
   
          </div>
        </h2>
      </div>

    
      <div className="expenses">
          {filteredExpenses.map((res) => (
            <div className="expense" key={res._id}>
              <div className="titles">{res.title}</div>
              <div className="amount">${res.budgetAmount}</div>
              <div className="description">{res.description}</div>

              <div className="purchases">
                <a href="/create_purchase" className="purchase">
                  add purchase
                </a>
                
                <p onClick={()=>axios.delete(`http://localhost:4000/api/expenses/${res._id}`)} className='purchase sik'>delete</p>
               
              </div>
            </div>
          ))}
        </div>
   
      
      {filteredExpenses.length === 0 &&  ( <p className="cre">
          No expenses created, <a href="/budget/create" className="no">create one</a>
        </p>)
        }
     
    </div>
  );
};

export default Home;
