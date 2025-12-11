import { defineField, defineType } from 'sanity'
import { MdDashboard } from 'react-icons/md'

export default defineType({
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    icon: MdDashboard,
    fields: [
        defineField({
            name: 'heroHeading',
            title: 'Hero Heading (Top Line)',
            type: 'string',
            initialValue: 'Building the Future of',
        }),
        defineField({
            name: 'heroSubHeading',
            title: 'Hero Heading (Highlighted Line)',
            type: 'string',
            initialValue: 'Web & Mobile Innovation',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            initialValue: 'We turn your vision into reality. Specializing in high-performance Web Applications...',
        }),
        defineField({
            name: 'stats',
            title: 'Key Statistics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'value', type: 'string', title: 'Value (e.g. 100%)' }),
                        defineField({ name: 'label', type: 'string', title: 'Label (e.g. Innovation)' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'services',
            title: 'Highlighted Services',
            description: 'Select exactly 6 services for the homepage grid layout.',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
            validation: Rule => Rule.required().min(6).max(6).error('You must select exactly 6 services to maintain the homepage grid layout.')
        }),
    ],
})
