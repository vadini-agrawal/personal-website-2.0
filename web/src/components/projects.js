// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import Project from './project.js'
import { graphql } from "gatsby"


const Styles = Styled.section`
    .container {
        display: flex;
        flex-flow: row wrap;
        width: 65vw;
        text-align: center;
    }
`;


const Projects = (props) => {
    const data = graphql`
        query getProjects {
            projects: allProject {
                title
                subtitle
                description
                mainImage {
                    asset {
                        path
                    }
                }
                tech
                url
                dates 
            }
        }
    `
    const projectsMarkup = data.allProject.map(item => 
        <Project title={item.title} subtitle={item.title} description={item.description} image={item.mainImage.asset.path} tech={item.tech} url={item.url} dates={item.dates} />
    )
    return (
        <Styles>
        <div className="container">
            {projectsMarkup}
            {/* <Project />
            <Project />
            <Project />
            <Project /> */}
        </div>
        </Styles>
    )
}

export default Projects;