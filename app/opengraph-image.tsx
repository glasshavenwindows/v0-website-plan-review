import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Glass Haven Windows — Window Cleaning in the Flathead Valley, MT'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/images/glass-haven-logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, rgba(92,225,230,0.35) 0%, #f8f9fa 45%, rgba(240,217,69,0.30) 100%)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={280} height={112} style={{ objectFit: 'contain' }} />

        <div style={{ marginTop: 40, fontSize: 56, fontWeight: 700, color: '#1a1a1a' }}>
          Crystal Clear Windows, Every Time
        </div>

        <div style={{ marginTop: 20, fontSize: 32, color: '#666666' }}>
          Window Cleaning in the Flathead Valley, MT
        </div>

        <div
          style={{
            marginTop: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 28,
            color: '#1a1a1a',
            background: 'white',
            padding: '12px 28px',
            borderRadius: 999,
            border: '2px solid rgba(240,217,69,0.6)',
          }}
        >
          <div style={{ display: 'flex', gap: 2 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width={26} height={26} viewBox="0 0 20 20" fill="#f0d945">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.959c.3.92-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.96a1 1 0 00-.363-1.117L2.062 9.386c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.689l1.286-3.958z" />
              </svg>
            ))}
          </div>
          <span>5.0 on Google · 17 Reviews</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
