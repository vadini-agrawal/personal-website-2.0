// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
// import ProjectModal from '../projectModal.js'

const Styles = Styled.section`
    .modal {
        height: 60vh;
        width: 50vw;
        background-color: #f9a743;
        text-align: center;
        padding: 10px;
        border: none;
        margin: 20px;
        top: 10vh;
        left: 15vw;
    }
    .inside {
        margin: auto;
    }
    img {
        height: 80px;
        width: 200px;
        object-fit: cover;
    }
    .title {
        height: 80px;
    }
    .large {
        font-size: 25px;
    }
    .medium {
        font-size: 20px;
    }
    .small {
        font-size: 18px;
    }
    .tech {
        height: 45px;
        font-size: 13px;
    }

    .btn {
        height: 20px;
        font-size: 15px;
        display: inline-block;
        background-color: #fff;
        -moz-box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
        -webkit-box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
        box-shadow: 0 15px 40px rgba(249, 167, 68, 0.5);
    }
    .btn:hover {
          background-color: #fff;
          color: #f9a743; 
    }
`;

const ProjectModal = (props) => {
    const { _rawBody, title, description, image, url, dates, tech } = props;
    // const new_tech = tech.split(', ');
    // const state = {
    //     open: false
    // }
    const handleClose = () => {
        // this.setState({ open: true });
        document.getElementById({title}).style.display = 'none';
    };
    // const handleClose = () => {
    //     setState({ open: true });
    //     document.getElementById('#modal').style.display = none;
    // };
    return (
        <Styles>
        <div className="modal">
            <div className="inside">
                <div className="x-out">
                    <button onClick={handleClose}> X </button>
                </div>
                <div className="image">
                    <img alt="project-image" src={image}></img> 
                </div>
                <div className="title">
                    <span className="large"> { title } </span> <br/>
                    <span className="medium"> { url } </span> 
                    <span className="medium"> { dates } </span>  <br/>
                    <span className="small"> { description } </span>
                </div>
                <div className="tech">
                    { tech }
                </div>
            </div>
        </div>
        </Styles>
    )
  }
  
export default ProjectModal