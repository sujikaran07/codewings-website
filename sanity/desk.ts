import type { StructureResolver } from 'sanity/structure'
import {
    MdWeb,
    MdInbox,
    MdSettings,
    MdEmail,
    MdWork,
    MdFiberNew,
    MdReply,
    MdCheckCircle,
    MdRateReview,
    MdGroup,
    MdHowToReg,
    MdBlock,
    MdDashboard,
    MdLaptopMac,
    MdCode,
    MdViewList,
    MdArticle,
    MdBusiness,
    MdInfo
} from 'react-icons/md'

// Helper function to build a filtered list with an optional icon
const buildStatusList = (S: any, title: string, type: string, status: string, icon?: any) =>
    S.listItem()
        .title(title)
        .schemaType(type)
        .icon(icon)
        .child(
            S.documentList()
                .title(title)
                .filter('_type == $type && status == $status')
                .params({ type, status })
        )

export const structure: StructureResolver = (S) =>
    S.list()
        .title('CodeWings Studio')
        .items([
            // Content Section
            S.listItem()
                .title('Website Content')
                .icon(MdWeb)
                .child(
                    S.list()
                        .title('Content')
                        .items([
                            S.documentTypeListItem('homepage').title('Homepage').icon(MdDashboard),
                            S.documentTypeListItem('service').title('Services').icon(MdLaptopMac),
                            S.documentTypeListItem('technology').title('Technologies').icon(MdCode),
                            S.documentTypeListItem('project').title('Projects').icon(MdViewList),
                            S.documentTypeListItem('post').title('Blog Posts').icon(MdArticle),
                            S.documentTypeListItem('career').title('Careers').icon(MdWork),
                            S.documentTypeListItem('about').title('About Page').icon(MdInfo),
                        ])
                ),

            S.divider(),

            // Inbox Section
            S.listItem()
                .title('Inbox')
                .icon(MdInbox)
                .child(
                    S.list()
                        .title('Inbox')
                        .items([
                            // Contact Submissions Group
                            S.listItem()
                                .title('Contact Messages')
                                .icon(MdEmail)
                                .child(
                                    S.list()
                                        .title('Contact Messages')
                                        .items([
                                            S.documentTypeListItem('contactSubmission').title('All Messages').icon(MdEmail),
                                            S.divider(),
                                            buildStatusList(S, 'New', 'contactSubmission', 'new', MdFiberNew),
                                            buildStatusList(S, 'Contacted', 'contactSubmission', 'contacted', MdReply),
                                            buildStatusList(S, 'Closed', 'contactSubmission', 'closed', MdCheckCircle),
                                        ])
                                ),

                            // Job Applications Group
                            S.listItem()
                                .title('Job Applications')
                                .icon(MdWork)
                                .child(
                                    S.list()
                                        .title('Job Applications')
                                        .items([
                                            S.documentTypeListItem('applicationSubmission').title('All Applications').icon(MdWork),
                                            S.divider(),
                                            buildStatusList(S, 'New', 'applicationSubmission', 'new', MdFiberNew),
                                            buildStatusList(S, 'Reviewed', 'applicationSubmission', 'reviewed', MdRateReview),
                                            buildStatusList(S, 'Interviewing', 'applicationSubmission', 'interviewing', MdGroup),
                                            buildStatusList(S, 'Hired', 'applicationSubmission', 'hired', MdHowToReg),
                                            buildStatusList(S, 'Rejected', 'applicationSubmission', 'rejected', MdBlock),
                                        ])
                                ),
                        ])
                ),

            S.divider(),

            // Settings
            S.listItem()
                .title('Settings')
                .icon(MdSettings)
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
        ])
