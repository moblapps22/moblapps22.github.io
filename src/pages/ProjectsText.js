import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import header from '../assets/css/header.css';
import '../assets/css/responsive.css';

class ProjectsText extends React.Component {

  render() {
    return (
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
          <br/>
            The Results: A faster site with fewer systems and easy global deployment any engineer can use.
          </p>
        </header>



      </section>
    )
  }
}

export default ProjectsText
