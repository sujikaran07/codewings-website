import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'platform', type: 'string', title: 'Platform Name' }),
                        defineField({ name: 'url', type: 'url', title: 'URL' }),
                    ],
                },
            ],
        }),
    ],
})
