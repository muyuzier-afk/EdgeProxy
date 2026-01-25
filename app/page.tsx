'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSiteProxy = () => {
    if (!url) {
      setError('请输入目标网址');
      return;
    }
    setError('');
    const cleanUrl = url.replace(/^https?:\/\//, '');
    window.open(`/api/proxy/site/${cleanUrl}`, '_blank');
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: '#ffffff',
      color: '#000000',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        gap: '1.5rem'
      }}>
        <a
          href="/doc"
          style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#666666',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666666';
          }}
        >
          Doc
        </a>
        <a
          href="/about"
          style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#666666',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666666';
          }}
        >
          About
        </a>
      </div>

      <div style={{
        maxWidth: '480px',
        width: '100%'
      }}>
        <div style={{
          marginBottom: '2.5rem',
          textAlign: 'center'
        }}>
          <img
            src="/vsp.png"
            alt="VSP"
            width="80"
            height="80"
            style={{ marginBottom: '1rem' }}
          />
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Edge Proxy
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#666666',
            margin: 0
          }}>
            基于 Edge Functions 的高性能反向代理工具
          </p>
        </div>

        <div>
          <div style={{
            position: 'relative',
            marginBottom: '1rem'
          }}>
            <input
              type="url"
              placeholder="输入目标网址"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError('');
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSiteProxy();
                }
              }}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                fontSize: '1rem',
                border: '2px solid #e5e5e5',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                background: '#ffffff'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#000000';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
              }}
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999999'
            }}>
              <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {error && (
            <p style={{
              color: '#dc2626',
              marginBottom: '1rem',
              fontSize: '0.875rem',
              paddingLeft: '0.25rem'
            }}>
              {error}
            </p>
          )}
          <button
            onClick={handleSiteProxy}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#ffffff',
              background: '#000000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s, transform 0.1s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            开始代理
          </button>
        </div>
      </div>

      <footer style={{
        position: 'absolute',
        bottom: '2rem',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#999999'
      }}>
        © {currentYear} Edge Proxy. All rights reserved.
      </footer>
    </main>
  )
}
