'use client'

import { useState } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemaTypes'

export default function StudioPage() {
    const [config] = useState(() => ({
        name: 'default',
        title: 'CodeWings Studio',
        basePath: '/studio',
        projectId,
        dataset,
        schema,
        plugins: [
            structureTool(),
            visionTool({ defaultApiVersion: apiVersion }),
        ],
    }))

    return <NextStudio config={config} />
}
