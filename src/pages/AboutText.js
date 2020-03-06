import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import header from '../assets/css/header.css';
import '../assets/css/responsive.css';
import pic01 from '../assets/images/pic01.jpg';
class AboutText extends React.Component {

  render() {
    return (
      <section id="about" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>About</h2>
            </header>
            <p>
            DS
            President
            My name is DS and I have been a systems, database and network engineer for over 20 years. I have been developing web platforms with multiple languages and services since the early days of the internet. I was the first Devops engineer at FiftyThree, backed by Andreessen Horowitz and New Enterprise Associates (NEA). I have also worked with multiple venture-backed startups.

            A specialist in AWS technologies, linux, databases, security and backend development for many years, I also regularly add to my skill set. While always looking for ways to improve my craft in a rapidly advancing industry, I'm also very aware that the bottom line is team productivity.

            Having worked with companies and stakeholders in a variety of industries, I understand how to prioritize client needs, deadlines and cost considerations. Infrastructure needs to be well organized, fault-tolerant and easy to use while meeting product and budget needs. Working at all levels of development from intern to manager has taught me how to listen and respond to every situation uniquely and apply creative new solutions where necessary.
            </p>
            <ul className="actions">

            </ul>
          </div>
          <span className="image">
            <img src={pic01} alt="" />
          </span>
        </div>
      </section>
    )
  }
}

export default AboutText
