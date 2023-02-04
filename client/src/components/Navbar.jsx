import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
        <div className="nav-brand">
            Spendify
        </div>

        <ul className='nav-list'>
            <li className='nav-list-item'>Home</li>
            <li className='nav-list-item'>Expenses</li>
            <li className='nav-list-item'>Categories</li>
        </ul>
           
           <ul className='list'>
           <li className='list-item'><a href="/login" className='log'>Login</a></li> 
           <li className="list-item">Logout</li>
           </ul>
        </div>
        <hr />
    </div>
  )
}

export default Navbar