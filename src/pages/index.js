import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Navigation from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Navigation sticky={this.state.stickyNav}  />

        <div id="main">
          <section id="services" className="main">
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

          <section id="clients" className="main special">
            <header className="major">
              <h2>Clients</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Tinyhop</h3>
                <p>
                Dave recently helped Tinybop with a major site migration on an extremely tight timeline.
At all points in the project, he was extremely communicative and thorough...
Dave's thoughtfulness about his work is evident, and extends to even the tiniest of details...
I would love to work with Dave again in the future and would be quick to recommend him and his work.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Deal state</h3>
                <p>
                  Dave’s knowledge of AWS is ridiculous and he’s a great communicator.
                  He quickly became an invaluable member of DealStat’s small team during our engagement together,
                  which included helping architect our web application, optimize security and processing time,
                  and automate deployments.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>

          </section>

          <section id="projects" className="main special">
            <header className="major">
              <h2>SEAMLESS WEBSITE CLOUD MIGRATION</h2>
              <p>
              My client needed to move a website receiving over 2.5 million requests using 250 GB of bandwidth per day into their AWS account within 8 weeks. The Linux, PHP & other libraries in use were several versions behind. Some code had up to 15 years of revisions to update and move to a new version control system.

Even with limited time, I built a redundant, secure architecture leveraging multiple availability zones & separate VPCs. I upgraded and tested all major software versions and implemented a new deployment system with separate production, staging & development environments. Creative DNS + load balancing allowed us to complete a zero-downtime migration during transfer of domain name ownership.

                <br />
                The Results: The new site can handle more traffic at a lower cost with fault-tolerance and fully documented configuration management and monitoring.
              </p>
            </header>

            <p className="content">

            </p>

            <header className="major">
              <h2>SERVERLESS AUTOMATION</h2>
              <p>
              I was engaged to move a customer API from another cloud provider into Amazon Web Services. The client was a small startup with no full-time devops engineers. The main requirement was to lower response time to under 200ms.

I implemented Lambda + API Gateway + a custom deployment script to avoid setting up systems their team would have to monitor, moving their focus away from customer satisfaction. Because of some service limitations, I deployed a custom proxy solution requiring very little maintenance for the lowest possible latency utilizing the AWS Region closest to the user
                <br />
                The Results: A faster site with fewer systems and easy global deployment any engineer can use.

              </p>
            </header>



          </section>
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


        </div>
      </Layout>
    )
  }
}

export default Index
