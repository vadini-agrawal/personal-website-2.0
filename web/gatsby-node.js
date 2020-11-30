const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
async function createBlogPostPages (graphql, actions, reporter) {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allSanityBlogPost {
            edges {
              node {
                id
                _rawBody
                subtitle
                title
                _createdAt
                linkStub
                mainImage {
                  asset {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
      }
    `)
  
    if (result.errors) throw result.errors
  
    const postEdges = (result.data.allSanityBlogPost || {}).edges || []
  
    postEdges.forEach((edge, index) => {
      const { id, linkStub } = edge.node
    //   const dateSegment = format(_createdAt, 'YYYY-MM')
      const path = `/writing/${linkStub}`
      console.log(id)
      reporter.info(`Creating blog post page: ${path}`)
  
      createPage({
        path,
        component: require.resolve('./src/template/blog-post.js'),
        context: { id }
      })
    })
  }

async function createBlogPage (graphql, actions, reporter) {
    const { createPage } = actions
    path = `/writing`
    createPage({
        path,
        component: require.resolve('./src/pages/blog.js')
    })
  }

exports.createPages = async ({ graphql, actions, reporter }) => {
    // await createBlogPostPages(graphql, actions, reporter)
    await createBlogPostPages(graphql, actions, reporter)
    await createBlogPage(graphql, actions, reporter)
}