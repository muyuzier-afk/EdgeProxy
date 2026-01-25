'use client';

export default function About() {
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
          关于
        </h1>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            项目背景
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            在当今数字化时代，网络安全已成为全球关注的焦点。随着互联网技术的快速发展，网络架构和通信协议也在不断演进。为了更好地理解现代网络技术，探索边缘计算在网络通信中的应用，我们开发了 Edge Proxy 项目。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            该项目旨在通过实践的方式，深入研究网络请求的转发机制、内容重写技术以及边缘计算的优势。通过构建一个基于 Vercel Edge Functions 的代理系统，我们希望能够为网络安全研究和技术探索提供一个可参考的实践案例。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333'
          }}>
            同时，该项目也展示了如何利用现代云服务提供商的边缘网络，构建高性能、低延迟的分布式应用。这对于理解现代 Web 应用的架构设计和性能优化具有重要意义。
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            技术探索
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            本项目涉及多个技术领域的探索和实践。在网络层面，我们研究了 HTTP 协议的完整生命周期，包括请求头的处理、响应体的解析以及重定向的自动跟随。这些技术对于理解 Web 应用的通信机制至关重要。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            在内容处理方面，项目实现了 HTML、CSS 和 JavaScript 的自动重写功能。通过正则表达式和 DOM 解析技术，我们能够识别并修改页面中的各种资源引用，包括链接、图片、脚本和样式表等。这种技术在网络安全测试、内容安全策略研究等领域都有广泛的应用价值。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333'
          }}>
            此外，项目还探索了 CORS（跨域资源共享）机制的实现原理，以及如何在代理场景下正确处理跨域请求。这对于理解现代 Web 应用的安全模型和访问控制策略具有重要意义。
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            技术栈
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Next.js 14
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666666', margin: 0 }}>
                React 框架，支持服务端渲染和静态生成
              </p>
            </div>
            <div style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Vercel Edge Functions
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666666', margin: 0 }}>
                全球边缘节点部署，低延迟响应
              </p>
            </div>
            <div style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                TypeScript
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666666', margin: 0 }}>
                类型安全的 JavaScript 超集
              </p>
            </div>
            <div style={{
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              background: '#ffffff'
            }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Edge Runtime
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#666666', margin: 0 }}>
                轻量级运行时，快速启动
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            核心功能
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
            网络安全意义
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            网络安全是一个复杂而重要的领域，涉及数据保护、隐私安全、访问控制等多个方面。通过研究和实践代理技术，我们可以更好地理解网络通信的原理，识别潜在的安全风险，并探索相应的防护措施。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333',
            marginBottom: '1rem'
          }}>
            在网络安全研究中，代理技术常用于流量分析、漏洞测试、安全审计等场景。本项目提供了一个可扩展的框架，可以用于各种安全研究和教育目的。我们鼓励开发者在使用该项目时，遵守相关法律法规和道德准则。
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333'
          }}>
            同时，该项目也展示了如何在保证安全性的前提下，实现高效的网络通信。这对于构建安全可靠的 Web 应用具有重要的参考价值。
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            开源协议
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333'
          }}>
            本项目采用 MIT 协议开源，欢迎贡献代码、提出问题或建议。我们相信开源社区的力量，通过开放协作，共同推动网络安全技术的发展。
          </p>
        </section>

        <section>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            联系方式
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#333333'
          }}>
            如有任何问题或建议，欢迎通过开源社区渠道与我们联系。我们期待与更多对网络安全感兴趣的开发者交流学习。
          </p>
        </section>
      </div>
    </main>
  )
}
