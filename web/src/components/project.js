// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const Styles = Styled.section`
    .card {
        height: 300px;
        width: 250px;
        background-color: #f9a743;
        text-align: center;
        display: flex;
        padding: 10px;
        border: none;
        margin: 20px;
    }
    .inside {
        margin: auto;
    }
    img {
        height: 280px;
        width: 230px;
        object-fit: cover;
        transition: height 0.4s;
        z-index: 1;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .card:hover img {
        height: 0px;
        width: 230px;
        object-fit: cover;
    }
    a {
        position: absolute;
        top: 250px;
        left: 28%;
    }
    .card:hover a {
        display: block;
    }
    .title {
        position: absolute;
        top: 30px;
        height: 80px;
        left: 15px;
        width: 220px;
    }
    .large {
        font-size: 20px;
    }
    .medium {
        font-size: 17px;
    }
    .small {
        font-size: 15px;
    }
    .tech {
        position: absolute;
        top: 220px;
        height: 45px;
        font-size: 13px;
        width: 220px;
        left: 5%;
    }
    .content {
        text-align: center;
    }
    .btn {
        height: 38px;
        font-size: 15px;
        border-radius: 15px;
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
    .pill {
        background-color: red;
        color: white;
        margin-right: 5px;
        margin-bottom: 5px;
        padding: 2px;
    }
    
    // #modal {
    //     display: none;
    // }

    // .modal {
    //     height: 60vh;
    //     width: 50vw;
    //     background-color: #f9a743;
    //     text-align: center;
    //     display: flex;
    //     padding: 10px;
    //     border: none;
    //     margin: 20px;
    // }
`;

const Project = (props) => {
    const { _rawBody, title, subtitle, description, image, url, dates, tech } = props;
    const new_tech = tech.split(', ');
    // this.title = title;
    // this.image = image;
    // this.description = description;    

    // this.state = {
    //       isModalOpen: false,
    // }
    const handleModalOpen = () => {
        console.log('handleModalOpen: ');
        document.getElementById({title}).style.display='block';
    }

    const handleClose = () => {
        // this.setState({ open: true });
        document.getElementById("modal").style.display = 'none';
    };
    // this.handleModalClose = event => {
    //     console.log('handleModalOpen: ', event);
    //     this.setState({ isModalOpen: false })
    // }
    return (
        <Styles>
        <div className="card">
            <div className="inside">
                <div className="image">
                     <img alt="project-image" src={image}></img> 
                </div>
                <div className="content">
                <div className="title">
                    <span className="large"> <b> {title } </b> </span> <br/>
                    <span className="small"> { subtitle } </span>
                </div>
                <div className="tech">
                    { new_tech.map(item => <span className="pill"> {item} </span> )}
                </div>
                <a className="btn" href={url} target="_blank">Learn more!</a>
                </div>
                {/* <div id="this_modal">
                    
                </div> */}
                    {/* <ProjectModal title={title} subtitle={title}  image={image} description={description} tech={tech} url={url} dates={dates} /> */}
                {/* </div> */}
            </div>
        </div>
        </Styles>
    )
  }
  
export default Project