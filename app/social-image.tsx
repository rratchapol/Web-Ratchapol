import { ImageResponse } from 'next/og';
import { profileName } from './seo';

export function socialImage(title: string, subtitle: string) {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#10151c', color: '#f0f2f5', padding: '64px 72px' }}>
      <div style={{ display: 'flex', color: '#67d7c5', fontSize: 24, letterSpacing: 3 }}>DEVELOPER PORTFOLIO / THAILAND</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: title.length > 36 ? 60 : 76, fontWeight: 700, lineHeight: 1.08 }}>{title}</div>
        <div style={{ display: 'flex', fontSize: 28, lineHeight: 1.4, color: '#b9c3ce' }}>{subtitle}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #35414e', paddingTop: 24, fontSize: 22 }}>
        <span>{profileName}</span><span style={{ color: '#67d7c5' }}>www.taotech.site</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
