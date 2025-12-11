import { getCliClient } from 'sanity/cli'

const client = getCliClient({
    apiVersion: '2024-12-10',
})

// Data to import
const services = [
    { title: "Web Application Development", description: "Custom, scalable, and high-performance web apps built with Next.js and React.", icon: "Code2" },
    { title: "Mobile App Development", description: "Native and cross-platform mobile solutions for iOS and Android.", icon: "Zap" },
    { title: "Enterprise IT Solutions", description: "End-to-end digital infrastructure and strategic consulting.", icon: "Shield" },
    { title: "E-Commerce Platforms", description: "Robust online stores with secure payment integrations.", icon: "TrendingUp" },
    { title: "Cloud & DevOps", description: "Scalable cloud architecture and automated deployment pipelines.", icon: "GitBranch" },
    { title: "AI & Automation", description: "Smart solutions to automate workflows and enhance decision making.", icon: "Brain" },
    { title: "UI/UX Design", description: "User-centric design methodologies ensuring intuitive digital experiences.", icon: "Figma" },
]

const technologies = [
    { name: "React", icon: "SiReact", color: "text-cyan-400" },
    { name: "Next.js", icon: "SiNextdotjs", color: "text-white" },
    { name: "Angular", icon: "SiAngular", color: "text-red-500" },
    { name: "Node.js", icon: "SiNodedotjs", color: "text-green-500" },
    { name: "Express", icon: "SiExpress", color: "text-gray-400" },
    { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-500" },
    { name: "MySQL", icon: "SiMysql", color: "text-blue-400" },
    { name: "Java", icon: "FaJava", color: "text-orange-400" },
    { name: "React Native", icon: "SiReact", color: "text-cyan-400" },
    { name: "Flutter", icon: "SiFlutter", color: "text-blue-400" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-400" },
]

const homepageData = {
    _id: 'homepage',
    _type: 'homepage',
    heroHeading: 'Building the Future of',
    heroSubHeading: 'Web & Mobile Innovation',
    heroDescription: 'We turn your vision into reality. Specializing in high-performance Web Applications, Cross-Platform Mobile Apps, and Scalable IT Solutions for modern businesses.',
    stats: [
        { _key: 'stat1', value: "100%", label: "Innovation" },
        { _key: 'stat2', value: "24/7", label: "Support" },
        { _key: 'stat3', value: "Agile", label: "Development" }
    ]
}

const settingsData = {
    _id: 'settings',
    _type: 'settings',
    siteName: 'CodeWings',
    email: 'info@codewings.tech',
    phone: '+94 77 636 0319',
    address: 'CodeWings Technologies,\nUdaiyarkaddu, Mullaitivu',
    socialLinks: [
        { _key: 'link1', platform: 'LinkedIn', url: 'https://www.linkedin.com/in/codewings-technologies-57baa5393/' },
        { _key: 'link2', platform: 'GitHub', url: 'https://github.com/CodeWings-Technologies' },
        { _key: 'link3', platform: 'Twitter', url: 'https://x.com/Codewings_Tech' },
        { _key: 'link4', platform: 'Facebook', url: 'https://web.facebook.com/profile.php?id=61584816725238' },
        { _key: 'link5', platform: 'Instagram', url: 'https://www.instagram.com/codewings.tech/' },
    ]
}

const projects = [
    { title: "SaaS Project Management Tool", client: "Tech Startup", result: "10k+ Active Users", description: "Built a collaborative project management platform with real-time updates and intuitive UI.", tags: ["React", "Node.js", "Tailwind CSS"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" },
    { title: "E-Commerce Mobile App", client: "Fashion Retailer", result: "4.8 Star Rating", description: "Developed a native iOS and Android app with seamless checkout and personalized recommendations.", tags: ["React Native", "Tailwind CSS"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070" },
    { title: "FinTech Dashboard", client: "Financial Services", result: "Real-time Analytics", description: "Created a secure, high-performance dashboard for tracking investments and market trends.", tags: ["Next.js", "React", "Tailwind CSS"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" },
    { title: "Healthcare Booking Platform", client: "MedTech Company", result: "50% Reduced Wait Ties", description: "A comprehensive booking system connecting patients with doctors via video consultations.", tags: ["React", "Node.js"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" },
    { title: "AI-Powered Chatbot", client: "Customer Support Agency", result: "Automated 70% Queries", description: "Integrated an intelligent chatbot capable of handling complex customer service requests.", tags: ["React", "Node.js", "Tailwind CSS"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2095" },
    { title: "Corporate Learning Portal", client: "EdTech Enterprise", result: "Global Deployment", description: "Scalable employee training platform with interactive content and progress tracking.", tags: ["React", "Next.js"], link: "https://example.com", imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074" },
]

const posts = [
    {
        title: "From Website to Pocket: Why Mobile Apps Are the Engine of Business Growth",
        excerpt: "Mobile usage is at its peak. Discover how a dedicated mobile app drives customer loyalty, increases sales through push notifications, and secures business growth.",
        date: "2025-12-07",
        author: "CodeWings Team",
        category: "Mobile Strategy",
        link: "/blog/mobile-apps-business-growth",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "One Size Does Not Fit All: How Custom Software Solutions Can Transform Your Business",
        excerpt: "Custom software isn't just a luxury for Fortune 500 companies; it is a strategic necessity for any business looking to scale efficiently.",
        date: "2025-12-09",
        author: "CodeWings Team",
        category: "Business Strategy",
        link: "/blog/custom-software-transform-business",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    },
    {
        title: "Why Every Business Needs a Strong Digital Presence in 2025",
        excerpt: "With the rapid integration of AI and the shift toward hyper-convenience, a business without a digital footprint is effectively invisible.",
        date: "2024-12-15",
        author: "CodeWings Team",
        category: "Business Strategy",
        link: "/blog/digital-presence-2025",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
]

async function uploadImage(url: string) {
    try {
        console.log(`Downloading image: ${url}`)
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`)
        const buffer = await res.arrayBuffer()
        const asset = await client.assets.upload('image', Buffer.from(buffer), {
            filename: url.split('/').pop()?.split('?')[0] || 'image.jpg'
        })
        console.log(`Image uploaded: ${asset._id}`)
        return asset._id
    } catch (error) {
        console.error('Failed to upload image:', error)
        return null
    }
}

const aboutData = {
    _id: 'about',
    _type: 'about',
    title: 'We Are CodeWings',
    subtitle: 'A team of visionary developers, designers, and strategists dedicated to crafting exceptional digital experiences. We don\'t just build software; we engineer growth.',
    stats: [
        { _key: 'astat1', label: "Global Clients", value: "50+", icon: "Globe" },
        { _key: 'astat2', label: "Projects Delivered", value: "100+", icon: "Trophy" },
        { _key: 'astat3', label: "Expert Developers", value: "20+", icon: "Users" },
        { _key: 'astat4', label: "Client Retention", value: "98%", icon: "Star" },
    ],
    values: [
        { _key: 'val1', title: "Mission", description: "To empower businesses by building innovative digital products that solve real-world problems and delight users." },
        { _key: 'val2', title: "Innovation", description: "We stay ahead of technological trends and continuously adapt our services to meet evolving client needs in the digital landscape." },
        { _key: 'val3', title: "Integrity", description: "Transparency and ethical practices form the foundation of all our business relationships and client partnerships." },
    ],
    whyChooseUs: [
        "Mastery of Advanced & Modern Technology Stacks",
        "Agile Development & Rapid Prototyping",
        "Enterprise-Grade Scalable & Secure Architecture",
        "Intuitive & Engaging User-Centric Design",
        "Full-Cycle Development: From Concept to Deployment",
        "Reliable Post-Launch Support & Maintenance"
    ],
    careerBenefits: [
        { _key: 'cb1', title: "Remote First", desc: "Work from anywhere. We value autonomy and trust you to manage your own schedule.", icon: "Globe" },
        { _key: 'cb2', title: "Mentorship", desc: "Direct access to experienced founders and leaders who are invested in your personal growth.", icon: "Users" },
        { _key: 'cb3', title: "Real Impact", desc: "Don't just be a cog in the machine. Your contributions will directly shape our products and future.", icon: "Code2" },
        { _key: 'cb4', title: "Future Growth", desc: "Join us at the ground level. High performers have the opportunity for future equity and leadership roles.", icon: "Terminal" },
    ]
}

const careers = [
    { role: "Full Stack Developer", department: "Engineering", type: "Volunteer / Internship", description: "Build scalable web applications using Next.js, React, and Node.js. Gain hands-on experience with modern tech stacks.", icon: "Code2" },
    { role: "UI/UX Designer", department: "Design", type: "Volunteer / Internship", description: "Create intuitive and beautiful user interfaces. Build a stunning portfolio with real-world client projects.", icon: "Palette" },
    { role: "Business Analyst", department: "Product", type: "Volunteer / Internship", description: "Analyze business requirements and translate them into technical specifications. Learn how to bridge the gap between clients and code.", icon: "Users" },
    { role: "Project Manager", department: "Management", type: "Volunteer / Internship", description: "Lead agile teams and manage timelines. Perfect for those looking to build leadership and organizational skills.", icon: "Briefcase" },
    { role: "AI Engineer", department: "Engineering", type: "Volunteer / Internship", description: "Work on cutting-edge AI solutions. A rare opportunity to get practical experience with LLMs and automation.", icon: "Terminal" }
]

async function seed() {
    console.log('🌱 Seeding data...')
    const sanityKeys = Object.keys(process.env).filter(k => k.startsWith('SANITY_'))
    console.log('Sanity Env Keys:', sanityKeys)

    if (!process.env.SANITY_ACCESS_TOKEN && !process.env.SANITY_API_TOKEN) {
        console.error('❌ No Access Token found! Ensure you run with --with-user-token')
    }

    // 0. Careers (New)
    for (const c of careers) {
        const exists = await client.fetch('*[_type == "career" && role == $role][0]', { role: c.role })
        if (!exists) {
            await client.create({ _type: 'career', ...c, isActive: true })
            console.log(`✅ Career created: ${c.role}`)
        }
    }

    // 1. Homepage
    await client.createOrReplace(homepageData)
    console.log('✅ Homepage created/updated')

    // 2. Settings
    await client.createOrReplace(settingsData)
    console.log('✅ Settings created/updated')

    // 3. About Page
    await client.createOrReplace(aboutData)
    console.log('✅ About Page created/updated')

    // 4. Services
    for (const s of services) {
        // Basic check to avoid duplicates (not perfect but good enough for seeding)
        const exists = await client.fetch('*[_type == "service" && title == $title][0]', { title: s.title })
        if (!exists) {
            await client.create({ _type: 'service', ...s })
            console.log(`✅ Service created: ${s.title}`)
        }
    }

    // 5. Technologies
    for (const t of technologies) {
        const exists = await client.fetch('*[_type == "technology" && name == $name][0]', { name: t.name })
        if (!exists) {
            await client.create({ _type: 'technology', ...t })
            console.log(`✅ Technology created: ${t.name}`)
        }
    }

    // 6. Projects
    for (const p of projects) {
        // Resolve tags to technology references
        const techRefs = []
        for (const tag of p.tags) {
            const tech = await client.fetch('*[_type == "technology" && name == $name][0]', { name: tag })
            if (tech) {
                techRefs.push({ _type: 'reference', _ref: tech._id, _key: tech._id })
            }
        }

        // Upload image if exists
        let imageId = null
        if (p.imageUrl) {
            imageId = await uploadImage(p.imageUrl)
        }

        const projectDoc = {
            _type: 'project',
            title: p.title,
            description: p.description,
            client: p.client,
            result: p.result,
            slug: { current: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 96) },
            link: p.link,
            technologies: techRefs,
            image: imageId ? { _type: 'image', asset: { _type: "reference", _ref: imageId } } : undefined
        }

        const existing = await client.fetch('*[_type == "project" && title == $title][0]', { title: p.title })
        if (!existing) {
            await client.create(projectDoc)
            console.log(`✅ Project created: ${p.title}`)
        } else {
            // For update (patch)
            await client.patch(existing._id).set(projectDoc).commit()
            console.log(`🔄 Project updated: ${p.title}`)
        }
    }

    // 7. Posts
    for (const p of posts) {
        // Always try to upload image if URL exists
        let imageId = null
        if (p.imageUrl) {
            imageId = await uploadImage(p.imageUrl)
        }

        // Use createOrReplace to force update if it exists (using deterministic ID based on slug or title hash, or just query first and then patch? 
        // Simplest for "fixing": checking existence is fine, BUT user says images are missing. 
        // Existing logic `if (!exists)` skips update.
        // We must UPDATE existing posts.

        const existing = await client.fetch('*[_type == "post" && title == $title][0]', { title: p.title })

        const doc = {
            _type: 'post',
            title: p.title,
            // Use the explicit link slug if available (strip /blog/), otherwise fallback to title slug
            slug: { current: p.link ? p.link.replace('/blog/', '') : p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 96) },
            author: p.author,
            publishedAt: p.date,
            mainImage: imageId ? { _type: 'image', asset: { _type: "reference", _ref: imageId } } : undefined,
            body: [{
                _key: Math.random().toString(36).substring(2, 9),
                _type: 'block',
                children: [{
                    _key: Math.random().toString(36).substring(2, 9),
                    _type: 'span',
                    text: p.excerpt
                }]
            }]
        }

        if (existing) {
            // Patch existing doc properties
            await client.patch(existing._id).set(doc).commit()
            console.log(`🔄 Post updated: ${p.title}`)
        } else {
            await client.create(doc)
            console.log(`✅ Post created: ${p.title}`)
        }
    }

    console.log('✨ Seeding complete!')
}

seed().catch(err => {
    console.error(err)
    process.exit(1)
})
