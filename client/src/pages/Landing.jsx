import React from 'react'

const Landing = () => {
  return (
    <>
    <div className="landing">
          <div>
              <div className="header">
                  <h1 className='head-text'>We make it easy for you  to keep up with your daily spendings</h1>
                  <p className="head-para">
                      Here on Spendify we help you to track every single penny you spend and we have considered our solutions to support every stage of your growth.
                  </p>

                  <div className="btn">
                      <a href="/login" className='log'>Get Started   &#8594;</a>
                  </div>
              </div>

          </div>
          <div className="head-image">
              <img src="https://d2k5nsl2zxldvw.cloudfront.net/images/inbox/img_brainstorm.png" alt="" className='head-img' />
          </div>
      </div>
      <div className="main">
        <h2 className="main-head">Learn How we help you keep an eye on your expenses</h2>
   

   <div className="chart">
    <img src="https://ph-static.z-dn.net/files/d72/9f77b555f75a820e45951816f3db34df.jpg" alt="" className='chart-img'/>
    <div className="chart-text">
     <div className="add">
     <h4 className="he">
            we calculate the amount of money you spend on your registered Expense category.
        </h4>
        <p className="she">we allow you to create categories of your daily expenses and then you allocate funds to 
        all parts of the categories whilst you povide details as to your daily purchases.If your daily/monthly budget set
        is almost met we will notify you 
        
        </p>
        <div className='list-item'>learn more  &#8594;</div>
     </div>
    </div>
   </div>
     </div>

<div className="partnership">
    <img src="https://static1.squarespace.com/static/ta/577c006b725e25e0affed0c1/2480/assets/img/logos/customers/customerlogo_xero.png" alt=""  className='partners'/>
    <img src="https://static1.squarespace.com/static/ta/577c006b725e25e0affed0c1/2480/assets/img/logos/customers/customerlogo_pinterest.png" alt="" className='partners' />
    <img src="https://static1.squarespace.com/static/ta/577c006b725e25e0affed0c1/2480/assets/img/logos/customers/customerlogo_swatch.png" alt=""  className='partners'/>
    <img src="https://static1.squarespace.com/static/ta/577c006b725e25e0affed0c1/2480/assets/img/logos/customers/customerlogo_whole30.png" alt="" className='partners' />

</div>

<article>
    <div className="article">
        <h3 className='art-head'>So what are you waiting for?</h3>
        <p className='art-text'>Enter your email or phone number to start receiveing newsletters on simplifying your preaccounting with Spendify's expense management services.</p>
    </div>
    <form className='form'>
        <input type="email"  placeholder='enter your email' className='email'/>
        <br />
        <button type="submit" className='btn-sub'>Submit</button>
    </form>
</article>
          </>
  )
}

export default Landing