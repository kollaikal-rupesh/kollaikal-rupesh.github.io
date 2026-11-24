import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const types = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".js":"text/javascript", ".json":"application/json", ".txt":"text/plain", ".xml":"application/xml", ".svg":"image/svg+xml", ".png":"image/png", ".pdf":"application/pdf" };
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const port = Number(process.env.PORT || 3000);
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (base && pathname !== base && !pathname.startsWith(base + "/")) throw new Error("Outside base path");
    let file = path.resolve(root, "." + (pathname.slice(base.length) || "/"));
    if (!file.startsWith(root + path.sep) && file !== root) throw new Error("Outside root");
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" }); res.end(data);
  } catch { res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); res.end(await readFile(path.join(root, "404.html")).catch(() => "Not found")); }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://localhost:${port}${base}/`));
