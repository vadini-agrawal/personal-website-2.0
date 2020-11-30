import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Styled from 'styled-components';
// import Projects from "../components/projects";
import Ocean from "../images/oceanblue.jpeg";
// import '../styles/global.css';
import CurrentlyCurious from '../components/currentlyCurious';
import CurrentlyExploring from '../components/currentlyExploring';
import CurrentlyBuilding from "../components/currentlyBuilding"


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
    transition: 0.5s ease;
  }

  .callout:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.5s ease;
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

  .inside {
      margin: auto;
  }
  p {
    font-size: 15px;
  }
  .cta {
    padding: 10px;
    transition: 0.5s ease;
    text-shadow: none;
  }
  .cta:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.5s ease;
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
    <div>
    <div className="block">
      <div className="mainContent">
          <h1 className="big-header"> <b> Hi! I'm Vadini. </b></h1>
          <h5 className="callout"> <span className="emoji">🎊 </span> Welcome to my landing page. </h5>
          <h3> I'm an MS in CS at Georgia Tech. </h3> 
          <p className="quote"> Previously SWE intern at Oscar Health & Product fellow with True Ventures</p>
          <h4> Interested in how tech can make life more fulfilling </h4>
          <hr></hr>
          { <CurrentlyBuilding /> }
          { <CurrentlyCurious />}
          { <CurrentlyExploring />}
          <div className="cta">
            <Link to="/writing"><b>Check out my writing &#8594;</b></Link>
          </div>
          <Footer />
      </div>
	  </div>
    </div>
    </Styles>
)

export default IndexPage
