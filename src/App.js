import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Routes from './components/routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Robert Boehme" scroll>
                  <Navigation>
                      <Link to="/"><i class="fas fa-home"></i></Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact Me</Link>
                  </Navigation>
              </Header>
              <Drawer title="Robert Boehme">
                  <Navigation>
                      <Link to="/"><i class="fas fa-home"></i></Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact Me</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Routes/>
              </Content>
          </Layout>
      </div>

    );
  }
}

export default App;
