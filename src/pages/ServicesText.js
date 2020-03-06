import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import aws1 from '../assets/images/AWS_Certified_Logo_294x230_Color.png'
import aws2 from '../assets/images/AWS_Certified_Tag__SAA_294x230-Color.png'
import aws3 from '../assets/images/AWS_Certified_Logo__SolutionsArchitect_Professional_294x230-Color.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import header from '../assets/css/header.css';
import '../assets/css/responsive.css';

class ServicesText extends React.Component {


  render() {
    return (
      <section id="services" className="main">
            <div class="row justify-content-between">
              <div className="col-3">
                 <img src={aws1} alt="" />
                 <img src={aws2} alt="" />
                 <img src={aws3} alt="" />
              </div>
              <div className="col-8">
                  <h6><p align="justify">
                    When your website <b>IS your business</b>, revenue depends on reliable, automated infrastructure and
                    proven
                    process. <b>Continuous uptime, data security, speed and cost efficiency</b> are critical to your
                    success.
                    <br/><br/>
                    Bring 20 years of web engineering experience to your critical systems so you can <b>save money,
                    scale
                    quickly, maximize developer productivity</b> and free your team to focus on features.
                    <br/><br/>
                    You have a unique product, business and team. I listen to your priorities, assess your specific
                    technical
                    needs and bring a practical approach to build the <b>exact solution that works for you.</b>
                    </p></h6>
              </div>
            </div>
            <div className="spotlight">
              <div className="content">
                  <header className="major">
                    <h2>Services</h2>
                  </header>
                  <p>
                    Every project is completely outlined in the proposal with key milestones and delivery dates.
                    You always know what to expect because my primary focus is on deliverables and deadlines.
                  </p>
               </div>
               <span className="image">
                  <img src={pic01} alt="" />
                </span>
            </div>
      </section>
    )
  }
}

export default ServicesText
