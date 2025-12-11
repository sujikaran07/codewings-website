import { defineField, defineType } from 'sanity'
import { MdViewList } from 'react-icons/md'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    icon: MdViewList,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'result',
            title: 'Key Result',
            type: 'string',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'technology' } }],
        }),
        defineField({
            name: 'link',
            title: 'Project Link',
            type: 'url',
        }),
    ],
})
