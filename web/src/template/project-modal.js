// import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Styled from 'styled-components'
import ProjectModal from '../components/projectModal'

export const query = graphql`
    query ProjectModalQuery($id: String!) {
        project: sanityProject(id: { eq: $id }) {
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
            _rawLongDescription
        }
    }
`;

const ProjectModalTemplate = props => {
    const { data, errors } = props
    const project = data && data.project
  
    return (
        <ProjectModal { ...project }/>
    )
  }

export default ProjectModalTemplate