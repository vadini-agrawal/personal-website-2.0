// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import BlockContent from './block-content'
import "./layout.css"

const Styles = Styled.section`
font-family: 'Zilla Slab', serif !important;

    padding-right: 20vw;
    padding-left: 20vw;
    .block-head {
        display: flex;
        margin-top: 15vh;
    }
    .inside {
        margin: auto;
    }
    #header-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .subtitle {
        font-size: 21px;
    }
    .content span {
        line-height: 30px;
    }
    .content img {
        margin-left:10vw;
        width: 40vw;
    }
    .content .caption {
        margin-left: 20vw;
        text-align: center;
    }
    .content a {
        color: orange;
        text-decoration: none;
    }
    p {
        
    }
`;

const BlogPost = (props) => {
    const { _rawBody, title, subtitle, mainImage, publishedAt } = props;
    const img = mainImage.asset.fluid.src;
    console.log(_rawBody);
    return (
        <Styles>
        <div className="block-head">
            <div className="inside">
                <img id="header-img" src={img}></img>
                <div className="content">
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    {_rawBody && <BlockContent blocks={_rawBody} />}
                </div>
            </div>
        </div>
        </Styles>
    )
  }
export default BlogPost