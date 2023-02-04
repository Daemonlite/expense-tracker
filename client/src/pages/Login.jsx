import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const Login = () => {
  const navigate = useNavigate()
 const [email,setEmail] = useState("")
  const  [password, setPassword] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault()
 
  axios
      .post('http://localhost:4000/api/users/login/', {
        email,
        password,
      })
  .then((res)=>{
    console.log(res.data)
    toast.success('login successful');
    if (res.data) {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      navigate('/home');
    }
    setPassword('');
    setEmail('');

  })
  .catch((err)=>toast.error(err.response.data))
  
 }
  return (
    

<div className='Login'>
      <div className='intro'>

      <div className='login-form'>
        <div className='param'>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <input
                type='email'
                placeholder='Enter Email..'
                className='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className='password'>
              <input
                type='password'
                placeholder='Enter Password...'
                className='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <br />
            <button
              type='Submit'
              className='submit'>
              Log In
            </button>
          </form>

          <div className='forgot'>
            <a href='/forgot'>forgot password ?</a>
          </div>
          <hr />
          <div className='create'>
            <a
              href='/register'
              className='lik'>
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Login