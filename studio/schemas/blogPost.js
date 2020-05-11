// in blogPost.js
export default {
    name: 'blogPost',
    title: 'Blog post',
    type: 'document',
    fields: [
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image'
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'date'
      },
      {
        name: 'linkStub',
        title: 'LinkStub',
        type: 'string'
      }
    ]
  }
  
