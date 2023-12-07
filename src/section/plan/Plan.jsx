import React from 'react'
import './Plan.css'

const Plan = () => {
  return (
    <section id="plan">
    <div className ="container">
        <div className ="plan_heading">
            <h3 className ="heading">Build the right plan for your team.</h3>
        </div>
        <div className ="plan_swap">
            <h4 className ="swap_item">Monthly</h4>
            <div className ="swap_btn"></div>
            <h4 className ="swap_item">Yearly</h4>
        </div>
        <div className ="plan_wrapper">
            <div className ="plan_item">
                <h4 className ="package">Intro</h4>
                <div className ="package_ditails">
                    <ul className ="package_name">
                        <li><i className ="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Emails</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Pricing Feature</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Bonus Plugins</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Exclusive Support</span></li>
                    </ul>
                    <ul className ="package_value">
                        <li>300GB</li>
                        <li>Not Avai.</li>
                        <li>Unlimited</li>
                        <li>Not Avai.</li>
                        <li>Not Avai.</li>
                    </ul>
                </div>
                <a className ="common_btn">Get started</a>
            </div>
            <div className ="plan_item">
                <h4 className ="package">Pro</h4>
                <div className ="package_ditails">
                    <ul className ="package_name">
                        <li><i className ="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Emails</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Pricing Feature</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Bonus Plugins</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Exclusive Support</span></li>
                    </ul>
                    <ul className ="package_value">
                        <li>700GB</li>
                        <li>Unlimited</li>
                        <li>Available</li>
                        <li>Included</li>
                        <li>Yesß</li>
                    </ul>
                </div>
                <a className ="common_btn">Get started</a>
            </div>
            <div className ="plan_item">
                <h4 className ="package">Intro</h4>
                <div className ="package_ditails">
                    <ul className ="package_name">
                        <li><i className ="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Emails</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Pricing Feature</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Bonus Plugins</span></li>
                        <li><i className ="fa-regular fa-square-check"></i><span>Exclusive Support</span></li>
                    </ul>
                    <ul className ="package_value">
                        <li>900GB</li>
                        <li>Not Avai.</li>
                        <li>Unlimited</li>
                        <li>Not Avai.</li>
                        <li>Not Avai.</li>
                    </ul>
                </div>
                <a className ="common_btn">Get started</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Plan