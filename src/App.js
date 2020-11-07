import React from 'react';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

import sample from './videos/video-1.mp4'



class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      title :'Hossein Dehghan Niri',
      headerlinks: [
        {title: 'Home', path:'/'},
        {title: 'About', path: '/about'},
        {title: 'Contant', path: '/contant'}
      ],
      home: {
        title: 'Be Relentless',
        subtitle: 'Project that make a difference',
        text: 'checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }

    }
  }
  


  render(){
    return (
      <div>

     
<Router>
            
            <Container  id="color-font" className=" p-0" fluid={true}>
            <video class="bg" autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
          </video>   
              <Navbar className="border-bottom" bg="transparent" expand="sm">
                <Navbar.Brand id="color-font">Hossein Dehghan Niri</Navbar.Brand>
    
                <Navbar.Toggle id="color-font" className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="color-font navbar-toggle">
                <Nav  className="ml-auto">
                  <Link id="color-font" className="nav-link" to="/">Home</Link>
                  <Link id="color-font" className="nav-link" to="/about">About</Link>
                  <Link id="color-font" className="nav-link" to="/contact">Contact</Link>
    
                </Nav>
                </Navbar.Collapse>
              </Navbar>
    
              <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>}/>
              <Route path="/about"  render={()=> <AboutPage title={this.state.about.title}/>}/>
              <Route path="/contact"  render={()=> <ContactPage title={this.state.contact.title}/>}/>
              
              <Footer/>
            </Container>
          </Router> 
       
      </div>
      
      );
  }

}

export default App;
