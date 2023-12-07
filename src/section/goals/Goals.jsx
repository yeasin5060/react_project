import React from 'react'
import './Goals.css'

const Goals = () => {
  return (
<section id="goals">
    <div className ="container">
        <div className ="goals_wrapper">
            <div className ="goals_img">
                <img src="image/image3.png"/>
            </div>
            <div className ="goals_contant">
                <h3 className ="heading">Join with any business tasks and any goals</h3>
                <p className ="pera">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                <a className ="common_btn" href="#">Sign up</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Goals