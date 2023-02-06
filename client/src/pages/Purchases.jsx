import axios from 'axios'
import {useState,useEffect} from 'react'
import { toast } from "react-toastify";
import {PurchState} from '../context/context'
const Purchases = () => {
   const [purchase,setPurchase] = useState([])
   const { purchases  } = PurchState();


   useEffect(()=>{
    axios.get("http://localhost:4000/api/purchases")
    .then((res)=>setPurchase(res.data))
    .catch((error)=> toast.error(error.response.data))
   })
   const user = JSON.parse(localStorage.getItem("userInfo"));
   const filteredPurchases = purchase.filter((res) => res.user === `${user._id}`);
   const total = filteredPurchases.reduce(
    (acc, expense) => acc + expense.price,
    0
  );

    return(
        <div>
  <div className="left">
  <h2 className="userName blip">
          <div className="budget">
           amount spent = ${total}
           <br />
            amount left = ${ purchases - total}
            <br />
          </div>
        </h2>
  </div>

  <div className="expenses">
          {filteredPurchases.map((res) => (
            <div className="expense" key={res._id}>
              <div className="titles">{res.item}</div>
              <div className="amount">${res.price}</div>
              <div className="description">{res.expenseCategory}</div>
              <div className="purchases">
              {res.date}
              </div>
              <p onClick={()=>axios.delete(`http://localhost:4000/api/purchases/${res._id}`)} className='purchase siks'>delete</p>
            </div>
          ))}
        </div>
        {filteredPurchases.length === 0 &&  ( <p className="cre">
          No purchases made, <a href="/create_purchase" className="no">create one</a>
        </p>)
        }
        </div>
    )
}

export default Purchases