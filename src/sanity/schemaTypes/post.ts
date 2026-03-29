import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is the main headline for the blog post.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('You must click "Generate" to create the URL.'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: "Upload a high-quality cover photo. Use the 'Edit' button to crop if needed.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { 
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'customTextStyle',
                title: 'Text Style',
                type: 'object',
                fields: [
                  {
                    name: 'fontSize',
                    title: 'Font Size (px)',
                    type: 'number',
                    description: 'Use the arrows or enter a number like 16, 24, 32',
                  },
                  {
                    name: 'fontFamily',
                    title: 'Font Family',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Default (Sans)', value: 'sans-serif' },
                        { title: 'Serif (Classic)', value: 'serif' },
                        { title: 'Monospace (Code)', value: 'monospace' },
                        { title: 'Inter', value: 'Inter, sans-serif' },
                        { title: 'Lora', value: 'Lora, serif' },
                        { title: 'Roboto', value: 'Roboto, sans-serif' },
                      ],
                    },
                  },
                ],
              },
            ],
          }
        },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'meta_title',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'meta_description',
          title: 'Meta Description',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
