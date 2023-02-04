import {useState,useEffect} from 'react'
import { PurchState } from '../context/context';
import axios from 'axios'
import {toast} from 'react-toastify'
const Home = () => {
  const {purchases,setpurchases} = PurchState()
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [greeting, setGreeting] = useState('');
  const [expense,setExpenses] = useState([])


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
  
  const user = JSON.parse(localStorage.getItem("userInfo"))

  useEffect(()=>{
 axios.get('http://localhost:4000/api/expenses')
 .then((res)=>setExpenses(res.data))
 .catch((error)=> toast.error(error.response.data))
  },[expense])

  const filteredExpenses = expense.filter((res) => res.user === `${user._id}`);
  const total = filteredExpenses.reduce((acc, expense) => acc + expense.budgetAmount, 0);
  setpurchases(total)
  return (
    <div>
<div className="home-info">
<p className="userName">{greeting} {user.username}!</p>

<h2 className='userName blip'>
  <div className="budget">
  total budget amount = ${purchases}
  <br />

  </div>
</h2>


</div>

{user.expenseCategories && <div className="expenses">
{filteredExpenses.map((res)=>

  <div className='expense'>
    <div className="titles">
    {res.title}
  </div>
  <div className="amount">
    ${res.budgetAmount}
    </div>
    <div className="description">
      {res.description}
    </div>
   
   <div className="purchases">
   <a href="/addpurchase" className="purchase"> add purchase </a>
   <a href="/purchases" className="purchase"> view purchases </a>
   </div>

    </div>
)}
</div>}
{!user.expenseCategories &&  

<h2>No expenses created <a href="/">create</a></h2>

}
    </div>

  )
}

export default Home