import { defineField, defineType } from 'sanity'
import { MdWork } from 'react-icons/md'

export default defineType({
    name: 'career',
    title: 'Career',
    type: 'document',
    icon: MdWork,
    fields: [
        defineField({
            name: 'role',
            title: 'Role / Job Title',
            type: 'string',
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            options: {
                list: [
                    { title: "Engineering", value: "Engineering" },
                    { title: "Design", value: "Design" },
                    { title: "Product", value: "Product" },
                    { title: "Management", value: "Management" },
                    { title: "Marketing", value: "Marketing" },
                    { title: "Other", value: "Other" },
                ]
            }
        }),
        defineField({
            name: 'type',
            title: 'Job Type',
            type: 'string',
            initialValue: "Volunteer / Internship",
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide React icon name (e.g. Code2, Palette, Users)',
            options: {
                list: [
                    { title: "Code", value: "Code2" },
                    { title: "Design", value: "Palette" },
                    { title: "Business/Users", value: "Users" },
                    { title: "Management/Briefcase", value: "Briefcase" },
                    { title: "Terminal/Tech", value: "Terminal" },
                    { title: "Globe/Remote", value: "Globe" },
                    { title: "Mobile", value: "Smartphone" },
                    { title: "Database", value: "Database" },
                ]
            }
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active?',
            type: 'boolean',
            initialValue: true
        })
    ],
})
