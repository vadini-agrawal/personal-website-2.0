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
    .small {
        font-size: 18px;
    }
    .tech {
        height: 45px;
        font-size: 13px;
    }

    .btn {
        height: 40px;
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

const Project = (props) => {
    const { _rawBody, title, subtitle, description, image, url, dates, tech } = props;
    const new_tech = tech.split(', ');
    // const state = {
    //     open: false
    // }
    // const handleOpen = () => {
    //     // this.setState({ open: true });
    //     document.getElementById('#modal').style.display = block;
    // };
    // const handleClose = () => {
    //     setState({ open: true });
    //     document.getElementById('#modal').style.display = none;
    // };
    return (
        <Styles>
        <div className="card">
            <div className="inside">
                <div className="image">
                    <img src={image}></img>
                </div>
                <div className="title">
                    <span className="large"> { title } </span> <br/>
                    <span className="small"> { description } </span>
                </div>
                <div className="tech">
                    { new_tech.map(item => <span> item </span> )}
                </div>
                <div className="button">
                    <button className='btn'> Learn more ! </button>
                </div>
            </div>
        </div>
        </Styles>
    )
  }
  
export default Project