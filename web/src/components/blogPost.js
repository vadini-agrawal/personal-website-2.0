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

    padding-top: 70px;

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
    .content {
        padding-left: 18vw;
        padding-right: 18vw;
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

    .header {
        padding-top: 35px;
        padding-bottom: 35px;
        padding-left: 18vw;
        padding-right: 18vw;
       background: rgb(16, 77, 108, 0.4);
       margin-bottom: 15px;
    }

    .details p {
        margin-bottom: 0px;
    }
`;

const BlogPost = (props) => {
    const { _rawBody, title, subtitle, mainImage, publishedAt, linkStub } = props;

    const m = moment(publishedAt).format('MMMM Do, YYYY');

    console.log(_rawBody);
    return (
        <Styles>
        <div className="block-head">
            <SEO title={title} description={subtitle} link={"https://www.vadiniagrawal.com/writing/"+linkStub}/>
            <div className="inside">
                <div className="header">
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                        <div className="details">
                            <p>Published {m}</p>
                        </div>
                </div>
                <div className="content">
                    {_rawBody && <BlockContent blocks={_rawBody} />}
                </div>
                <Subscribe />
            </div>
        </div>
        </Styles>
    )
  }
export default BlogPost