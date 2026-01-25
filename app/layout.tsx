import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Edge Proxy',
  description: '基于 Edge Functions 的高性能网站反向代理工具',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
