import { defineField, defineType } from 'sanity'
import { MdLaptopMac } from 'react-icons/md'

export default defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    icon: MdLaptopMac,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'The exact name of the Lucide React icon (e.g., Code2, Zap, Shield)',
            initialValue: 'Code2',
            validation: (rule) => rule.required(),
        }),
    ],
})
