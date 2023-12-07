import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <section id="demo">
        <div className ="container">
            <div className ="demo_main">
                <div className ="demo_icon">
                    <div className ="demo-play_btn">
                        <i className ="fa-solid fa-play"></i>
                    </div>
                    <h4>Watch a demo</h4>
                </div>
                <div className ="demo_wrapper">
                    <div className ="demo_item">
                        <h3>2.8<span>x</span></h3>
                        <p className ="pera">We are ultra faste deal service</p>
                    </div>
                    <div className ="demo_item">
                        <h3>98<span>%</span></h3>
                        <p className ="pera">We are ultra faste deal service</p>
                    </div>
                    <div className ="demo_item">
                        <h3>2.4<span>x</span></h3>
                        <p className ="pera">We are ultra faste deal service</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Demo