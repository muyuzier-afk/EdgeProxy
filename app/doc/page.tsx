'use client';

export default function Doc() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: '#ffffff',
      color: '#000000'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#666666',
            textDecoration: 'none',
            marginBottom: '2rem',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666666';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 8H2.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 4L2.66667 8L6.66667 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          返回
        </a>

        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          marginBottom: '2rem',
          letterSpacing: '-0.02em'
        }}>
          文档
        </h1>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            简介
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            Edge Proxy 是一个基于 Edge Functions 的高性能反向代理工具，支持完整的网站代理和自动链接重写功能。
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            使用方法
          </h2>
          <div style={{
            background: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#666666'
            }}>
              路径式代理
            </p>
            <code style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#333333',
              fontFamily: 'monospace',
              background: '#ffffff',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #e5e5e5',
              overflowX: 'auto'
            }}>
              /api/proxy/site/example.com
            </code>
          </div>
          <div style={{
            background: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#666666'
            }}>
              带路径的代理
            </p>
            <code style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#333333',
              fontFamily: 'monospace',
              background: '#ffffff',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #e5e5e5',
              overflowX: 'auto'
            }}>
              /api/proxy/site/baidu.com/s?wd=nihao
            </code>
          </div>
          <div style={{
            background: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#666666'
            }}>
              查询参数方式（向后兼容）
            </p>
            <code style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#333333',
              fontFamily: 'monospace',
              background: '#ffffff',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #e5e5e5',
              overflowX: 'auto'
            }}>
              /api/proxy/site?url=https://example.com
            </code>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            功能特性
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  完整网站代理
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  自动重写页面中的所有链接和资源，支持点击链接继续浏览
                </p>
              </div>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  资源重写
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  自动重写图片、CSS、JavaScript、字体等所有资源引用
                </p>
              </div>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  路径式代理
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  支持路径式访问，自动处理相对路径和查询参数
                </p>
              </div>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  HTTP 方法支持
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  支持 GET、POST、PUT、DELETE、PATCH、OPTIONS 等所有 HTTP 方法
                </p>
              </div>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0',
              borderBottom: '1px solid #e5e5e5'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  CORS 支持
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  自动添加 CORS 头，支持跨域请求
                </p>
              </div>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 0'
            }}>
              <span style={{ color: '#000000' }}>•</span>
              <div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                  安全性
                </p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#666666' }}>
                  自动过滤敏感请求头，确保代理安全
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            部署
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            本项目基于 Next.js 14 和 Vercel Edge Functions 构建，可以轻松部署到 Vercel 平台。
          </p>
          <div style={{
            background: '#f9f9f9',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <code style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#333333',
              fontFamily: 'monospace',
              background: '#ffffff',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #e5e5e5',
              overflowX: 'auto'
            }}>
              vercel deploy
            </code>
          </div>
        </section>
      </div>
    </main>
  )
}
