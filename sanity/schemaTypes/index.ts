import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import technology from './technology'
import post from './post'
import project from './project'
import settings from './settings'
import homepage from './homepage'
import about from './about'

import career from './career'
import contactSubmission from './contactSubmission'
import applicationSubmission from './applicationSubmission'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [service, technology, post, project, settings, homepage, about, career, contactSubmission, applicationSubmission],
}
