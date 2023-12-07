import React from 'react'
import './team.css'

const Team = () => {
  return (
    <section id="team">
        <div className ="container">
            <div className ="team_heading">
                <h3 className ="heading">Build the right plan for your team.</h3>
            </div>
            <div className ="team_wrapper">
                <div className ="team_image">
                    <img src="image/team.jpeg" alt="not found"/>
                </div>
                <div className ="team_ditails">
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    <h4>Jonathon</h4>
                    <div className ="team_social">
                        <div className ="team_social_icon">
                            <i className ="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className ="team_social_icon">
                            <i className ="fa-brands fa-youtube"></i>
                        </div>
                        <div className ="team_social_icon">
                            <i className ="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className ="team_angle">
                        <div className ="team_angle_icon">
                            <i className ="fa-solid fa-angle-right"></i>
                        </div>
                        <div className ="team_angle_icon">
                            <i className ="fa-solid fa-angle-left"></i>
                        </div>
                    </div>
                </div>
                <div className ="team_image_box">
                    <img src="image/image6.png" alt="not found"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team