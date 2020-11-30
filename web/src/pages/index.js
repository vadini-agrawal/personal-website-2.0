import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Styled from 'styled-components';
import Projects from "../components/projects";
import Ocean from "../images/oceanblue.jpeg";
import Resume from '../static/VadiniAgrawalResume.pdf';
// import '../styles/global.css';
import MyLogo from '../images/mylogo.png';
import Twitter from '../images/twitter.svg';
import Medium from '../images/medium.svg';
import LinkedIn from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Email from '../images/email.svg';


const Styles = Styled.section`
  font-family: 'Zilla Slab', serif;
  position: absolute;
  max-width: 100%;
  min-width: 100%;
  .anti {
    position: relative;
    padding: none;
  }
  .block {
    display: flex;
    height: 100vh;
    margin-bottom: 4vh;
    flex-flow: column wrap;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
  }
  .inside {
    margin: auto;
  }
  .block-2 {
    background-color: #f9a743;
    display: flex;
    width: 100%;
    height: auto;
    padding: 15vh;
    margin-bottom: 4vh;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    padding-right: 20vw;
    padding-left: 20vw;

  }
  // .inside {
  //   margin: auto;
  // }
  .btn {
    border-radius: 0; 
  }

  .btn-main {
    color: #fff;
    border-radius: 30px;
    font-size: 18px;
    padding: 15px 40px;
    display: inline-block;
    background-color: #f9a743;
    -moz-box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
    -webkit-box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
    box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
    background-image: -moz-linear-gradient(bottom, rgba(255, 239, 206, 0) 0%, rgba(255, 239, 206, 0.25) 100%);
    background-image: -o-linear-gradient(bottom, rgba(255, 239, 206, 0) 0%, rgba(255, 239, 206, 0.25) 100%);
    background-image: -webkit-linear-gradient(bottom, rgba(255, 239, 206, 0) 0%, rgba(255, 239, 206, 0.25) 100%);
    background-image: linear-gradient(bottom, rgba(255, 239, 206, 0) 0%, rgba(255, 239, 206, 0.25) 100%); }
    .btn-main:hover, .btn-main:focus {
      background-color: #f9a743;
      color: #fff; }
  .big-header {
    word-wrap: normal;
      // font-size: 30px;
      margin-top: 10vh;
  }
  @media only screen and (max-width: 700px) {
    .big-header {
      font-size: 10vw;
      margin-right: 15px;
    }
  }
  h3 {
    word-wrap: normal;
  }
  .header-2 {
    padding: 5vh;
  }
  // .test {
  //   text-align: center;
  // }
  // #projects {
  //   height: auto;
  //   width: 100%;
  //   display: inline-block;
  // }
  a {
    text-decoration: none;
    color: black;
  }
  .mainContent {
    display: inline-block;
    margin-left: 30vw;
    margin-right: 30vw;
    text-align: left;
  }

  .callout {
    padding: 15px;
    background-color: #f9f9fa;
  }

  .quote {
    padding-left: 30px;
    border-left: 4px solid black;
  }
  // .headerImage {
  //   display: inline-block;
  //   max-height: 250px;
  //   min-width: 100%;
  //   // object-fit: cover;
  // }
  .currently {
    font-size: 15px;
    line-height: 20px;
  }
  .currentlyCurious {
    font-size: 15px;
    line-height: 20px;
  }

  // .footer {
  //   background-color: #f4f4f4;
  //   display: flex;
  //   // padding-top: 2vh;
  //   text-align: center;
  //   font-family: 'Josefin Sans', sans-serif;
  //   // padding-bottom: 2vh;
  //   height: 400px;
  //   position: relative;
  // }
  .inside {
      margin: auto;
  }
  .link {
    color: black;
    text-decoration: none;
    margin-right: 10px;
    margin-left: 10px;

    font-size: 15px;
    font-family: 'Zilla Slab', serif;
  }
  .link:hover {
    color: #f9a743;
  }
  .logo_img {
    height: 40px;
    width: 40px;
    margin: auto;
  }
  p {
      font-size: 15px;
  }
  .icons img {
    height: 35px;
    width: 35px;
    display: inline-block;
    margin: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    .icons img {
      height: 25px;
      width: 25px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  .footer {
    text-align: center;
  }
  .cta {
    padding: 10px;
    transition: box-shadow 0.5s;
    box-shadow: none;
  }
  .cta:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .headerImage {
    display: inline-block;
    min-height: 250px;
    max-height:250px;
    min-width: 100%;
    object-fit: cover;
    // background-image: url("../images/oceanblue.jpeg");

    // /* Full height */
    // height: 100%;
  
    // /* Create the parallax scrolling effect */
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
`;

const IndexPage = () => (
    // <SEO title="Home" />
    <Styles>
    <SEO title="Home" description="Personal website of Vadini Agrawal built in Gatsby and Sanity" />
    <div className="anti">
      <Header />
    </div>
    <div>
      <img className="headerImage" src={Ocean}/>
    </div>
    <div className="block">
      <div className="mainContent">
          <h1 className="big-header"> <b> Hi! I'm Vadini. </b></h1>
          <h5 className="callout"> 🎊 Welcome to my landing page. </h5>
          <h3> I'm an MS in CS at Georgia Tech. </h3> 
          <p className="quote"> Previously SWE intern at Oscar Health & Product fellow with True Ventures</p>
          <h4> Interested in how tech can make life more fulfilling </h4>
          <hr></hr>
          <div className="currently">
            <p><i>Currently building 🔨</i></p>
            <ul>
              <li>App to get the best of Twitter to your inbox || Github</li>
              <li>Bullet journaling habit || Instagram</li>
              <li>Writing portfolio || Coming soon</li>
            </ul>
          </div>
          <div className="currentlyCurious">
            <p><i>Currently curious about 🔭</i></p>
            <ul>
              <li>Culture x Corporate interests</li>
              <li>College x Corporate world</li>
              <li>Social media x Wellness x Passion economy</li>
            </ul>
          </div>
          <div className="currentlyCurious">
            <p><i>Currently exploring 🌊</i></p>
            <ul>
              <li>Low-poly Blender modeling</li>
              <li>Bullet journaling</li>
              <li>Instagram thrifting</li>
            </ul>
          </div>
          <div className="cta">
            <Link to="/writing"><b>Check out my writing &#8594;</b></Link>
          </div>
          <div className="footer">
          <div className="icons">
              <a href="https://twitter.com/@a_vadini" target="_blank">
                  <img  src={Twitter} /> 
              </a>
              <a href="http://www.github.com/vadini-agrawal" target="_blank">
                  <img  src={Github} /> 
              </a>
              <a href="mailto:vadini@gatech.edu" target="_blank">
                  <img  src={Email} /> 
              </a>
              <a href="http://www.linkedin.com/in/vadini-agrawal" target="_blank">
                <img  src={LinkedIn} /> 
              </a>
              <a  href="http://medium.com/@vadini/" target="_blank" style={{'border-radius': '4px'}}>
                  <img  src={Medium} /> 
              </a>
          </div>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link> & <Link to="https://www.sanity.io">Sanity</Link>
          </p>
          </div>
      </div>
	  </div>
    {/* <Footer /> */}
    </Styles>
)

export default IndexPage
