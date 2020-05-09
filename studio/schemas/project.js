  // in sponsor.js
  export default {
    name: 'project',
    title: 'Project',
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
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'dates',
        title: 'Dates',
        type: 'string'
      },
      {
        name: 'tech',
        title: 'Tech',
        type: 'string'
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url'
      },
    ]
  }