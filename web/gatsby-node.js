/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
async function createProject (graphql, actions, reporter) {
    const { createProject } = actions
    const result = await graphql(`
      {
        allProject {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) throw result.errors
  
    const projectEdges = (result.data.allProject || {}).edges || []
  
    projectEdges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/project/${slug}/`
  
      reporter.info(`Creating project page: ${path}`)
  
      createProject ({
        path,
        component: require.resolve('./src/components/project.js'),
        context: { id }
      })
    })
  }

exports.createPages = async ({ graphql, actions, reporter }) => {
    // await createBlogPostPages(graphql, actions, reporter)
    await createProject(graphql, actions, reporter)
}