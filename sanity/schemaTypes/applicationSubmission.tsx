import { defineField, defineType } from 'sanity'
import { MdWork, MdFiberNew, MdRateReview, MdGroup, MdHowToReg, MdBlock } from 'react-icons/md'
import React from 'react'

export default defineType({
    name: 'applicationSubmission',
    title: 'Job Applications',
    type: 'document',
    icon: MdWork,
    fields: [
        defineField({
            name: 'name',
            title: 'Applicant Name',
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
            name: 'role',
            title: 'Applying For',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'portfolio',
            title: 'Portfolio Link',
            type: 'url',
            readOnly: true,
        }),
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
            readOnly: true,
            options: {
                accept: '.pdf,.doc,.docx'
            }
        }),
        defineField({
            name: 'message',
            title: 'Cover Letter / Message',
            type: 'text',
            readOnly: true,
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
                    { title: 'Reviewed', value: 'reviewed' },
                    { title: 'Interviewing', value: 'interviewing' },
                    { title: 'Rejected', value: 'rejected' },
                    { title: 'Hired', value: 'hired' }
                ]
            },
            initialValue: 'new'
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            status: 'status'
        },
        prepare(selection) {
            const { title, subtitle, status } = selection

            const getIcon = () => {
                switch (status) {
                    case 'new': return <MdFiberNew size={24} style={{ color: "#3b82f6" }} />
                    case 'reviewed': return <MdRateReview size={24} style={{ color: "#eab308" }} />
                    case 'interviewing': return <MdGroup size={24} style={{ color: "#f97316" }} />
                    case 'hired': return <MdHowToReg size={24} style={{ color: "#22c55e" }} />
                    case 'rejected': return <MdBlock size={24} style={{ color: "#ef4444" }} />
                    default: return <MdWork size={24} />
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
