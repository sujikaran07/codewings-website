
import { defineField, defineType } from 'sanity'
import { MdCode } from 'react-icons/md'

export default defineType({
    name: 'technology',
    title: 'Technologies',
    type: 'document',
    icon: MdCode,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (React Icons)',
            description: 'e.g. SiReact, SiNextdotjs, FaJava',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'color',
            title: 'Color Class',
            description: 'Tailwind color class, e.g. text-cyan-400',
            type: 'string',
        }),
    ],
})
