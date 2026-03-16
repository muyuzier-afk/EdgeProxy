const UPSTREAM_BASE_URL =
  "https://page-ag-testing-ohftxirgbn.cn-shanghai.fcapp.run";
const UPSTREAM_API_KEY = "NA";
const ALLOW_ORIGIN = "https://moehans.com";

function corsHeaders() {
  return {
    "access-control-allow-origin": ALLOW_ORIGIN,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization",
    "vary": "origin",
  };
}

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

  if (url.pathname !== "/v1/chat/completions") {
    return new Response(
      JSON.stringify({
        error: {
          message: "Not Found",
          type: "invalid_request_error",
        },
      }),
      {
        status: 404,
        headers: {
          ...corsHeaders(),
          "content-type": "application/json; charset=utf-8",
        },
      },
    );
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: {
          message: "Method Not Allowed",
          type: "invalid_request_error",
        },
      }),
      {
        status: 405,
        headers: {
          ...corsHeaders(),
          "content-type": "application/json; charset=utf-8",
        },
      },
    );
  }

  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);

    const upstreamRes = await fetch(
      `${UPSTREAM_BASE_URL}/chat/completions`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${UPSTREAM_API_KEY}`,
          "origin": ALLOW_ORIGIN,
          "referer": `${ALLOW_ORIGIN}/`,
          "user-agent": "Deno/2.x moehans-v1-proxy",
        },
        body: JSON.stringify(body),
      },
    );

    const text = await upstreamRes.text();

    return new Response(text, {
      status: upstreamRes.status,
      headers: {
        ...corsHeaders(),
        "content-type":
          upstreamRes.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: {
          message: err instanceof Error ? err.message : String(err),
          type: "proxy_error",
        },
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders(),
          "content-type": "application/json; charset=utf-8",
        },
      },
    );
  }
});