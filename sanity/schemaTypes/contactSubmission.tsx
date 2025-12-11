import { defineField, defineType } from 'sanity'
import { MdEmail, MdFiberNew, MdReply, MdCheckCircle } from 'react-icons/md'
import React from 'react'

export default defineType({
    name: 'contactSubmission',
    title: 'Contact Submissions',
    type: 'document',
    icon: MdEmail,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            readOnly: true,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            readOnly: true,
            validation: (rule) => rule.required().email(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'service',
            title: 'Service Interested In',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            readOnly: true,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            readOnly: true,
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Closed', value: 'closed' }
                ]
            },
            initialValue: 'new'
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'email',
            status: 'status'
        },
        prepare(selection) {
            const { title, subtitle, status } = selection

            const getIcon = () => {
                switch (status) {
                    case 'new': return <MdFiberNew size={24} style={{ color: "#3b82f6" }} />
                    case 'contacted': return <MdReply size={24} style={{ color: "#eab308" }} />
                    case 'closed': return <MdCheckCircle size={24} style={{ color: "#22c55e" }} />
                    default: return <MdEmail size={24} />
                }
            }

            return {
                title: title,
                subtitle: `${subtitle} • ${status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Unknown'}`,
                media: getIcon()
            }
        }
    },
})

