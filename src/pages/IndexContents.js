import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import ServicesText from './ServicesText';
import ClientsText from './ClientsText';
import ProjectsText from './ProjectsText';
import AboutText from './AboutText';
import ContactText from './ContactText';

class IndexContents extends React.Component {

  render() {
    return (
      <div id="main">
          <ServicesText/>
          <ClientsText/>
          <ProjectsText/>
          <AboutText/>
          <ContactText/>
        </div>

    )
  }
}

export default IndexContents
