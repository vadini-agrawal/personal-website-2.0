import React from "react"
import { Helmet } from "react"
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
import Subscribe from "../components/subscribe"


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

  h3 {
    word-wrap: normal;
  }
  .header-2 {
    padding: 5vh;
  }

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
  @media only screen and (max-width: 700px) {
    .mainContent {
      margin-left: 10vw;
      margin-right: 10vw;
    }
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

  .currently {
    font-size: 15px;
    line-height: 20px;
  }
  .currentlyCurious {
    font-size: 15px;
    line-height: 20px;
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
  }
  h1 {
    margin-top: 4vh;
  }
`;

const IndexPage = () => (
    // <SEO title="Home" />
    <Styles>
    <SEO title='Home | Vadini Agrawal' description="Vadini's landing page 🎊" link="https://www.vadiniagrawal.com"/>
    <div className="anti">
      <Header />
    </div>
    <div>
      <img className="headerImage" src={Ocean}/>
    </div>
    <div>
    <div className="block">
      <div className="mainContent">
          <h1> <b> Hi! I'm Vadini. </b></h1>
          <h5 className="callout"> <span className="emoji">🎊 </span> Welcome to my landing page. </h5>
          <h3> I'm an MS in CS at Georgia Tech. </h3> 
          <p className="quote"> Previously SWE intern at Oscar Health & Product fellow with True Ventures</p>
          <h4> Interested in how to make life more fulfilling </h4>
          <hr></hr>
          { <CurrentlyBuilding /> }
          { <CurrentlyCurious />}
          { <CurrentlyExploring />}
          <div className="cta">
            <Link to="/writing"><b>Check out my writing &#8594;</b></Link>
          </div>
          <Subscribe />
          <Footer />
      </div>
	  </div>
    </div>
    </Styles>
)

export default IndexPage
