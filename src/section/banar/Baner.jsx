import React from 'react'
import './Banar.css'
export const Baner = () => {
  return (
    <section id="banner">
        <div className ="container">
            <div className ="banner_wrapper">
                <div className ="heading">
                    <h1>Professional task manager tool to grow </h1>
                    <p className="pera effact">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                    <form action="" method="">
                        <input type ="text" placeholder="Join with us using your gmail address"/>
                        <button className ="common_btn" type="submit">sing up</button>
                    </form>
                </div>
                <div className ="image">
                    <img src="image/image1.png" alt="not found"/>
                </div>
            </div>
        </div>
    </section>
  )
}
