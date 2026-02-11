export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // if (url.pathname.startsWith("/cache/")) {
    // await saveInCache(request, env, url)

    await saveInD1DB(request, env, url)

    // delete a key-value pair
    //   await env.KV_CACHE.delete("KEY")

    // return a Workers response
    //   return new Response(
    //     JSON.stringify({
    //       //   value: value,
    //       allKeys: allKeys,
    //     }),
    //   )
    // }

    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request)
  },
}

/**
 * Saves in D1 database.
 */
const saveInD1DB = async (request, env, url) => {
  const sql = "INSERT INTO logs (ip, url_path, created_at) VALUES (?, ?, current_timestamp)"
  const ip = request.headers.get("CF-Connecting-IP")
  const url_path = url.pathname
  // If you did not use `DB` as your binding name, change it here
  await env.D1_LOGS.prepare(sql).bind(ip, url_path).run()
}

/**
 * Saves in KV database.
 */
const saveInCache = async (request, env, url) => {
  const ip = request.headers.get("CF-Connecting-IP")

  await env.KV_CACHE.put(ip, url.pathname)

  // read a key-value pair
  //   const value = await env.KV_CACHE.get("KEY")

  // list all key-value pairs
  //   const allKeys = await env.KV_CACHE.list()
}
