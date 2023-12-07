import React from 'react'
import './start.css'

const Start = () => {
  return (
    <section id="start">
        <div className ="container">
            <div className ="start_heading">
                <h3 className ="heading">Ready to get started? Start your free trial.</h3>
                <div className ="start_offer">
                    <span>free 30 day trial</span>
                    <span>exclusive support</span>
                    <span>no fees</span>
                </div>
            </div>
            <form className ="start_form">
                <input type="email" placeholder="Enter your email"/>
                <button className ="common_btn" type="submit">Try for free</button>
            </form>
        </div>
    </section>
  )
}

export default Start