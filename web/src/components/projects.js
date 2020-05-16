// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import Project from './project.js'
import { graphql, useStaticQuery } from "gatsby"
import ProjectModal from './projectModal.js'


const Styles = Styled.section`
    .container {
        display: flex;
        flex-flow: row wrap;
        width: 65vw;
        text-align: center;
    }
`;


const Projects = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allSanityProject {
                edges {
                node {
                    id
                    dates
                    description
                    mainImage {
                    asset {
                        fluid {
                        src
                        }
                    }
                    }
                    subtitle
                    title
                    tech
                    url
                }
                }
            }
        }
    `);
    //   );
    // const { data } = useStaticQuery(graphql`
       
    // `);

    const projectsMarkup = data.allSanityProject.edges.map(item => 
        <Project id={item.node.id} title={item.node.title} subtitle={item.node.subtitle}  image={item.node.mainImage.asset.fluid.src} description={item.node.description} tech={item.node.tech} url={item.node.url} dates={item.node.dates} />
    )
    // const projectModals = data.allSanityProject.edges.map(item => 
    //     <ProjectModal id={item.node.title} title={item.node.title} subtitle={item.node.title}  image={item.node.mainImage.asset.fluid.src} description={item.node.description} tech={item.node.tech} url={item.node.url} dates={item.node.dates} />
    // )
    return (
        <Styles>
        <div className="container">
            { projectsMarkup }
        </div>
        </Styles>
    )
}

export default Projects;