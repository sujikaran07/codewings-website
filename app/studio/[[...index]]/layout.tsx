import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CodeWings Content Studio',
    description: 'Manage your website content',
    robots: {
        index: false,
        follow: false,
    },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 z-[9999] bg-white m-0 p-0 overflow-hidden text-black">
            {children}
        </div>
    )
}
