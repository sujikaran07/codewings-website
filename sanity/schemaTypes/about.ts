import { defineField, defineType } from 'sanity'
import { MdInfo } from 'react-icons/md'

export default defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    icon: MdInfo,
    fields: [
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'We Are CodeWings'
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            initialValue: 'A team of visionary developers, designers, and strategists dedicated to crafting exceptional digital experiences.'
        }),
        defineField({
            name: 'storyTitle',
            title: 'Story Section Title',
            type: 'string',
            initialValue: 'Our Story'
        }),
        defineField({
            name: 'storyBody',
            title: 'Story Content',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'stats',
            title: 'Company Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string', title: 'Label' }),
                        defineField({ name: 'value', type: 'string', title: 'Value' }),
                        defineField({ name: 'icon', type: 'string', title: 'Icon Name' }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'values',
            title: 'Core Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Title' }),
                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                    ]
                }
            ]
        }),
        defineField({
            name: 'whyChooseUs',
            title: 'Why Choose Us (List)',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'careerBenefits',
            title: 'Career Benefits',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Title' }),
                        defineField({ name: 'desc', type: 'text', title: 'Description' }),
                        defineField({ name: 'icon', type: 'string', title: 'Icon Name' }),
                    ]
                }
            ]
        })
    ]
})
