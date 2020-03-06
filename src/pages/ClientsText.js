import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import header from '../assets/css/header.css';
import '../assets/css/responsive.css';

class ClientsText extends React.Component {

  render() {
    return (
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
    )
  }
}

export default ClientsText
