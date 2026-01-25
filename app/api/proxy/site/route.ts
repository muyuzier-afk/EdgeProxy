import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  return handleProxy(request);
}

export async function POST(request: NextRequest) {
  return handleProxy(request);
}

export async function PUT(request: NextRequest) {
  return handleProxy(request);
}

export async function DELETE(request: NextRequest) {
  return handleProxy(request);
}

export async function PATCH(request: NextRequest) {
  return handleProxy(request);
}

export async function OPTIONS(request: NextRequest) {
  return handleProxy(request);
}

async function handleProxy(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const urlParam = searchParams.get('url');
  const pathname = request.nextUrl.pathname;
  
  let targetUrl: string | undefined;

  if (urlParam) {
    targetUrl = urlParam;
  } else {
    const pathPrefix = '/api/proxy/site/';
    if (pathname.startsWith(pathPrefix)) {
      const pathPart = pathname.substring(pathPrefix.length);
      
      if (pathPart) {
        if (pathPart.startsWith('http://') || pathPart.startsWith('https://')) {
          targetUrl = pathPart;
        } else if (pathPart.includes('/')) {
          const parts = pathPart.split('/');
          const host = parts[0];
          const path = parts.slice(1).join('/');
          targetUrl = `https://${host}${path ? '/' + path : ''}`;
        } else {
          targetUrl = `https://${pathPart}`;
        }
      }
    }
  }

  if (!targetUrl) {
    return NextResponse.json(
      { error: '缺少目标 URL 参数，请使用 ?url=目标网址 或 /api/proxy/site/目标网站/路径' },
      { status: 400 }
    );
  }

  try {
    const url = new URL(targetUrl);
    const baseUrl = `${url.protocol}//${url.host}`;
    
    const headers = new Headers();
    
    for (const [key, value] of request.headers.entries()) {
      if (key.toLowerCase() !== 'host' && key.toLowerCase() !== 'connection') {
        headers.set(key, value);
      }
    }

    console.log('[Proxy] Target URL:', targetUrl);
    console.log('[Proxy] Request method:', request.method);
    console.log('[Proxy] Request headers:', Object.fromEntries(headers.entries()));

    const proxyRequest = new Request(url, {
      method: request.method,
      headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
      redirect: 'manual',
    });

    let response;
    try {
      response = await fetch(proxyRequest);
      console.log('[Proxy] Response status:', response.status);
      console.log('[Proxy] Response headers:', Object.fromEntries(response.headers.entries()));
    } catch (err) {
      console.error('[Proxy] Fetch error:', err);
      return NextResponse.json(
        { error: '代理请求失败', details: err instanceof Error ? err.message : '未知错误' },
        { status: 500 }
      );
    }

    const responseHeaders = new Headers();
    
    for (const [key, value] of response.headers.entries()) {
      if (
        key.toLowerCase() !== 'transfer-encoding' &&
        key.toLowerCase() !== 'connection' &&
        key.toLowerCase() !== 'keep-alive' &&
        key.toLowerCase() !== 'access-control-expose-headers' &&
        key.toLowerCase() !== 'content-security-policy' &&
        key.toLowerCase() !== 'content-length'
      ) {
        responseHeaders.set(key, value);
      }
    }

    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', '*');
    responseHeaders.set('X-Proxy-Base', baseUrl);

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (location) {
        const absoluteLocation = resolveUrl(location, baseUrl);
        const proxyLocation = `/api/proxy/site/${absoluteLocation.replace(/^https?:\/\//, '')}`;
        console.log('[Proxy] Redirect location:', location, '->', proxyLocation);
        
        responseHeaders.set('location', proxyLocation);
        return new NextResponse(null, {
          status: response.status,
          statusText: response.statusText,
          headers: responseHeaders,
        });
      }
    }

    if (response.status === 400) {
      const errorText = await response.text();
      console.error('[Proxy] 400 Bad Request Response:', errorText);
    }

    const contentType = response.headers.get('content-type') || '';

    let body = response.body;

    if (contentType.includes('text/html')) {
      const text = await response.text();
      const rewrittenHtml = rewriteHtml(text, baseUrl);
      return new NextResponse(rewrittenHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } else if (contentType.includes('text/css')) {
      const text = await response.text();
      const rewrittenCss = rewriteCss(text, baseUrl);
      return new NextResponse(rewrittenCss, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } else if (contentType.includes('application/javascript') || contentType.includes('text/javascript')) {
      const text = await response.text();
      const rewrittenJs = rewriteJs(text, baseUrl);
      return new NextResponse(rewrittenJs, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    }

    return new NextResponse(body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('代理请求失败:', error);
    return NextResponse.json(
      { error: '代理请求失败', details: error instanceof Error ? error.message : '未知错误' },
      { status: 500 }
    );
  }
}

function rewriteHtml(html: string, baseUrl: string): string {
  let result = html;

  result = result.replace(/<base\s+[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi, (match, href) => {
    const absoluteUrl = resolveUrl(href, baseUrl);
    return match.replace(href, absoluteUrl);
  });

  result = result.replace(/<a\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'href', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<img\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<script\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<link\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'href', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<iframe\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<embed\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<source\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<track\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'src', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<video\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'poster', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<object\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'data', baseUrl);
    return newAttrs;
  });

  result = result.replace(/<form\s+[\s\S]*?>/gi, (match) => {
    const newAttrs = rewriteAttribute(match, 'action', baseUrl);
    return newAttrs;
  });

  result = result.replace(/url\(\s*["']?([^"')\s]+)["']?\s*\)/gi, (match, url) => {
    if (url.startsWith('data:') || url.startsWith('#')) return match;
    const absoluteUrl = resolveUrl(url, baseUrl);
    const proxyUrl = `/api/proxy/site/${absoluteUrl.replace(/^https?:\/\//, '')}`;
    return `url("${proxyUrl}")`;
  });

  return result;
}

function rewriteAttribute(tag: string, attrName: string, baseUrl: string): string {
  const regex = new RegExp(`(${attrName}\\s*=\\s*["'])([^"']*)(["'])`, 'gi');
  return tag.replace(regex, (match, prefix, value, suffix) => {
    if (value.startsWith('data:') || value.startsWith('#') || value.startsWith('mailto:') || value.startsWith('tel:') || value.startsWith('javascript:')) {
      return match;
    }
    const absoluteUrl = resolveUrl(value, baseUrl);
    const proxyUrl = `/api/proxy/site/${absoluteUrl.replace(/^https?:\/\//, '')}`;
    return `${prefix}${proxyUrl}${suffix}`;
  });
}

function rewriteCss(css: string, baseUrl: string): string {
  return css.replace(/url\(\s*["']?([^"')\s]+)["']?\s*\)/gi, (match, url) => {
    if (url.startsWith('data:') || url.startsWith('#')) return match;
    const absoluteUrl = resolveUrl(url, baseUrl);
    const proxyUrl = `/api/proxy/site/${absoluteUrl.replace(/^https?:\/\//, '')}`;
    return `url("${proxyUrl}")`;
  });
}

function rewriteJs(js: string, baseUrl: string): string {
  let result = js;

  result = result.replace(/(["'])((?:https?:)?\/\/[^"']+\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?|ttf|eot))\1/gi, (match, quote, url) => {
    const absoluteUrl = resolveUrl(url, baseUrl);
    const proxyUrl = `/api/proxy/site/${absoluteUrl.replace(/^https?:\/\//, '')}`;
    return `"${proxyUrl}"`;
  });

  return result;
}

function resolveUrl(url: string, baseUrl: string): string {
  if (!url) return baseUrl;
  
  if (url.startsWith('data:') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) {
    return url;
  }
  
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  if (url.startsWith('/')) {
    const base = new URL(baseUrl);
    return `${base.protocol}//${base.host}${url}`;
  }
  
  const base = new URL(baseUrl);
  const basePath = base.pathname.substring(0, base.pathname.lastIndexOf('/'));
  const resolved = new URL(url, `${base.protocol}//${base.host}${basePath}/`);
  return resolved.href;
}
