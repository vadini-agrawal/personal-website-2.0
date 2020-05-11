import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Styled from 'styled-components';
import Headshot from '../images/VadiniAgrawalPicture.jpg';
import Projects from "../components/projects";
import Header from "../components/Header";
import Footer from "../components/footer";
import Blog from "./blog.js";
import MyLogo from '../images/mylogo.png';
// import '../styles/global.css';


const Styles = Styled.section`
  font-family: 'Josefin Sans', sans-serif;

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
  .block-2 {
    background-color: #f9a743;
    display: flex;
    height: auto;
    padding: 15vh;
    width: 100vw;
    margin-bottom: 4vh;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    padding-right: 20vw;
    padding-left: 20vw;

  }
  .inside {
    margin: auto;
  }
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
      font-size: 100px;
  }
  .header {
    padding: 5vh;
  }
  #projects {
    height: auto;
    display: flex;
    padding: 15vh;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const IndexPage = () => (
    // <SEO title="Home" />
    <Layout>
    <Styles>
    <div className="block" >
      <div className="inside">
        <div className="header">
          <h1 className="big-header"> Hi! 🎊 <br/> I'm Vadini Agrawal.</h1>
          <h3>I'm a product-oriented, purpose-driven computer science student. </h3>
          <a className="btn btn-main" href="#" target="_blank" role="button" download="">Download my resume!</a>
        </div>
      </div>
	  </div>
    <div className="block-2">
      <div className="inside">
          <p> 
          Hello! <br />

          <br/> I am Vadini, a Computer Science student at Georgia Tech, with concentrations in People and Intelligence.  

          <br/> <br/> I see computer science as a means to solving pressing problems around the world. I enjoy spending time learning about the world around me, to understand the pain points people are facing. 

          <br/> <br/> I am especially interested in the potency of entrepreneurship to accelerate innovation and solve problems. Having spent two summers in Silicon Valley, with one as a fellow at a top Venture Capital firm, I am excited to combine my technical skills with my product sense to create exponential impact -- particularly as an engineer at a mission driven company. 


          <br/> <br/> If any of that sounds interesting to you, reach<a href="mailto:vadini@gatech.edu"> out</a>.
          </p>
      </div>
    </div>
    <div id="projects" className="block">
      <div className="inside">
        <Projects />
      </div>
    </div>
    <div className="footer">
      
    </div>
    {/* <Footer /> */}
    </Styles>
    </Layout>
)

export default IndexPage
