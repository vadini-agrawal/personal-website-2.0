// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import SEO from './seo.js'
import Styled from 'styled-components'
import BlockContent from './block-content'
import moment from 'moment'
import "./layout.css"
import Subscribe from './subscribe.js'

const Styles = Styled.section`
    font-family: 'Zilla Slab', serif !important;

    padding-top: 100px;
    padding-right: 20vw;
    padding-left: 20vw;
    .block-head {
        display: flex;s
        margin-top: 15vh;
    }
    .inside {
        margin: auto;
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
        color: #104d6c;
        text-decoration: none;
    }
    .content a:hover {
        color: #104d6c;
        text-decoration: underline;
    }

    p {
        
    }
`;

const BlogPost = (props) => {
    const { _rawBody, title, subtitle, mainImage, publishedAt, linkStub } = props;
    let img = ""
    if (mainImage) {
        img = mainImage.asset.fluid.src;
    }
    const m = moment(publishedAt).format('MMMM Do, YYYY');

    console.log(_rawBody);
    return (
        <Styles>
        <div className="block-head">
            <SEO title={title} description={subtitle} link={"https://www.vadiniagrawal.com/writing/"+linkStub}/>
            <div className="inside">
                <div className="content">
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <p>Published {m}</p>
                    {_rawBody && <BlockContent blocks={_rawBody} />}
                </div>
                <Subscribe />
            </div>
        </div>
        </Styles>
    )
  }
export default BlogPost