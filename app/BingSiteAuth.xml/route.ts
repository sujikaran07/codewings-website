import { NextResponse } from 'next/server'

export async function GET() {
  const xml = `<?xml version="1.0"?>
<users>
<user>27D9C66C0D1796C0810431F6B1DCCACF</user>
</users>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
