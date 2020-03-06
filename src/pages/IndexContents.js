import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import ServicesText from './ServicesText';
import ClientsText from './ClientsText';
import ProjectsText from './ProjectsText';
import AboutText from './AboutText';


class IndexContents extends React.Component {

  render() {
    return (
      <div id="main">
        <ServicesText/>
        <ClientsText/>
        <ProjectsText/>
        <AboutText/>

</div>

    )
  }
}

export default IndexContents
