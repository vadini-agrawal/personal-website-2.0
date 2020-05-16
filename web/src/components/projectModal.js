// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Styled from 'styled-components'
import Layout from './layout.js'
import BlockContent from './block-content'
// import ProjectModal from '../projectModal.js'

const Styles = Styled.section`
font-family: 'Josefin Sans', sans-serif;

    .modal {
        height: auto;
        width: 100vw;
        text-align: center;
        align-items: center;
    }
    .inside {
        margin: auto;
    }
    img {
        height: 150px;
        width: 60vw;
        object-fit: cover;
        margin-top: 13vh;
    }
    .title {
    }
    .large {
        font-size: 30px;
    }
    .medium {
        font-size: 20px;
    }
    .small {
        font-size: 15px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .tech {
        height: 45px;
        font-size: 13px;
        text-align: center;
    }
    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: orange;
    }
    .pill {
        background-color: #fd664d;
        font-size: 15px;
        color: white;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 2px;
        border-radius: 3px;
    }
    .description {
        padding-left: 20vw;
        padding-right: 20vw;
        text-align: left;
    }
    .back {
        margin-bottom: 50px;
    }
`;



const ProjectModal = (props) => {
    const { _rawBody, id, title, subtitle, dates, description, tech, url, mainImage, _rawLongDescription } = props;
    const image = mainImage.asset.fluid.src;
    const tech_array = tech.split(',');
    const handleClose = () => {
        // this.setState({ open: true });
        document.getElementById("modal").style.opacity = 0;
    };
    // const handleClose = () => {
    //     setState({ open: true });
    //     document.getElementById('#modal').style.display = none;
    // };
    return (
        <Layout>
        <Styles>
        <div id="modal" className="modal">
            <div className="inside">
                <div className="image">
                    <img alt="project-image" src={image}></img> 
                </div>
                <div className="title">
                    <span className="large"> { title } </span> <br/>
                    {/* <span className="medium"> { subtitle } </span> <br/><br/> */}
                    <span className="small"><a href={ url } target="_blank"> {url} </a></span> 
                    <span className="small"> { dates } </span>  <br /> 
                    <div className="description"> { <BlockContent blocks={_rawLongDescription} /> } </div>
                </div>
                <div className="tech">
                   { tech_array.map(item => <span className="pill">{ item }</span>) }
                </div>
                <div className="back">
                    <a href="/#projects">Back</a>
                </div>
            </div>
        </div>
        </Styles>
        </Layout>
    )
  }
  
export default ProjectModal