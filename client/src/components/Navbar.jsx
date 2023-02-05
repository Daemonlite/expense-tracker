import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const logout=()=>{
    localStorage.removeItem("userInfo");
    navigate('/')
 }
  useEffect(() => {
      const User = JSON.parse(localStorage.getItem("userInfo"));
      setuser(User)
      
    }, [navigate]);
  return (
    <div>
    <div className="nav">
      <div className="nav-brand">
        Spendify
      </div>

 {user &&   <ul className='nav-list'>
        <li className='nav-list-item'><a href="/home">Home</a></li>
       <li className="nav-list-item"><a href="/budget/create" >create Budget </a></li> 
       <li className="nav-list-item"><a href="/purchases">view purchases</a></li>
       <li className='nav-list-item'>About</li>
      </ul>}
           
      <ul className='list'>
        {!user ? (
          <li className='list-item'>
            <a href="/login" className='log'>Login</a>
          </li>
        ) : (
          <li className="list-item" onClick={logout} >Logout</li>
        )}
      </ul>
    </div>
    <hr />
  </div>
);
  
}

export default Navbar