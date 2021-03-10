import ReactDOM, { render } from "react-dom"
import React, { Component, useState, useRef, createRef } from "react"
import state from "./store"
import "./styles.css"
import ModalVideo from 'react-modal-video'
import "../node_modules/modal-video/js/jquery-modal-video";
import "../node_modules/emailjs-com"
import emailjs from 'emailjs-com';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { create } from "object-path"

require('dotenv').config()


// import{ init } from 'emailjs-com';
// init("user_2t5SOqUvP0K225EiHwW6p");




class NavBar extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.myFunction, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.myFunction);
  }

  constructor(props) {
    super(props);
    this.navbar = createRef();
    this.navbarWrapper = createRef()
  }


  myFunction = () => {
    var navbar = this.navbar.current
    var navbarWrapper = this.navbarWrapper.current
    var sticky = navbarWrapper.offsetTop;
    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.scrollTop > sticky)
    if (document.documentElement.scrollTop >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  render() {
    return (
      <div className="absolute-wrapper" ref={this.navbarWrapper}>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar" ref={this.navbar}>
          <a className="navbar-brand" href="/">Etienne Mustow | Software Developer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

class Contact extends Component {

  render() {
    return (
      <>
        <div className="contact-page">
          <div className="boxed">
            <div className="contact-text">
              <div className="centered-text">
                <h1 className="underline">Contact</h1>
                <br></br>
                <div className="underline"><h2>Get in touch:</h2></div>
                <div className=""><a className="" href={`mailto:etncodes@gmail.com`}><h2>etncodes@gmail.com</h2></a></div>
                <a href="https://www.linkedin.com/in/etncodes"><img className="contact-icon" src={state.icons.linkedin}></img></a>
                <br></br><br></br>
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </>)
  }
}


function Carousel({ pictures_location, carousel_id }) {
  const pictures = pictures_location
  return (
    <div id={carousel_id} className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        {pictures.map((picture) => {
          if (picture.action == 0) {
            return (<div className="carousel-item active" key={picture.key + picture.action}>
              <div className="crop">
                <img className="d-block w-100" src={picture.image} alt="First slide"  ></img>
              </div>
            </div>)
          } else {
            return (<div className="carousel-item" key={picture.key + picture.action}>
              <div className="crop">
                <img className="d-block w-100" src={picture.image} alt="Second slide" ></img>
              </div>
            </div>)
          }
        }
        )}

      </div>
      <a className="carousel-control-prev" href={'#' + carousel_id} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={'#' + carousel_id} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}



function RenderArtCarousel({ index, action_function, image_class }) {
  return (
    <figure className={index.css + index.action} key={index.action_icon} onClick={(e) => {
      e.stopPropagation()
      { action_function() }
    }}>
      <div className="overlay">

        <img className={image_class} src={index.image}></img>
        <div className="text-header">{index.header}</div>
        <div className="text-footer">{index.text}</div>
      </div>

    </figure>
  )
}

function Heading({ text }) {
  return (
    <div className="heading">
      <h1>{text}</h1>
    </div>
  )
}

function Subheading({ text }) {
  return (
    <div className="sub-heading">
      <h2>{text}</h2>
    </div>
  )
}



class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: state.content.projects,
    };
  }

  render() {
    return (
      <>

        <div className="page">
          <div className="centered-text">
            <div className="heading">
              <h1>Hi, I'm <span style={{color: "#dda5f9"}}>Etienne</span></h1>
            </div>
            <div className="sub-heading">
              <h2>I'm a junior software developer and Computer Science student</h2>
            </div>
          </div>
          <br></br>
        </div>
        <NavBar />
        <div>
          <div className="content">
            <div id="about">
              <div className="centered-text">
                <h1 className="underline">About</h1>
              </div>
              <br></br>
              <div className="grid-container-about">
                <div className="float-child">
                  <div className="">
                    <h2>I'm a junior software developer with just over a year's experience working in start-ups and mid-size businesses from fintech to martech. 
                      I love to work on both the front and backend and have a preference for dynamically typed languages but believe on picking the right tool for the job. 
                      I'm also a Computer Science student at City, University of London.</h2>
                  </div>
                </div>
                <div className="float-child">
                  <img className="d-block" id="profile" src={state.icons.profile} alt="Profile picture of me" ></img>
                </div>
              </div>
            </div>
           

            <div id="projects">
              <div className="centered-text">
                <h1 className="underline">Projects</h1>
              </div>
              <h2>Here are some things I've built:</h2>
              <div className="grid-container-projects">
                {this.state.projects.map((index) =>
                  <div className="overlay">
                    <a className="" href={index.link}>
                      <img className="gallery__img" src={index.image}></img>
                      <div className="text-header">{index.header}</div>
                      <div className="text-footer">{index.text}</div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <br></br>        <br></br>
            <div id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </>
    )
  }
}

function App() {


  return (
    <Router  >

      <Switch >

        <Route exact path="/" component={Home} />



      </Switch>

    </Router>

  )
}




class ContactForm extends Component {

  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }


  sendEmail = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending'
    })
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        this.setState({ sent: true }, this.resetForm())
      }, (error) => {
        console.log(error.text);
        console.log("service id: " + process.env.REACT_APP_SERVICE_ID + "\n template id: " + process.env.REACT_APP_TEMPLATE_ID + "\n user_id: " + process.env.REACT_APP_USER_ID)
      });

  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }

  render() {

    return (
      <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
        <div>
          <input onChange={e => this.setState({ name: e.target.value })} type="text" name="user_name" placeholder="Your name" required value={this.state.name} />
        </div>
        <div>
          <input onChange={(e) => this.setState({ email: e.target.value })} type="email" name="user_email" placeholder="Your email" required value={this.state.email} />
        </div>
        <div>
          <textarea onChange={e => this.setState({ message: e.target.value })} name="message" placeholder="Your message" value={this.state.message} required />
        </div>
        <button type="submit">{this.state.buttonText}</button>
        {/* <input type="submit" value="Send" /> */}
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
