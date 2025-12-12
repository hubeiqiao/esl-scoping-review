export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve index.html for the root path
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }

    // Try to serve the asset requested
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // Optional: Serve 404 page or redirect to index
        return new Response("Not found", { status: 404 });
      }
      return response;
    } catch (e) {
      return new Response("Error serving asset", { status: 500 });
    }
  },
};
