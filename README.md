# static-server-quick
create http,https,http2 server to serve static resource files from a local directory

### usage
```bash
npm i static-server-quick -g
static-server <http|https|http2> <path-to-static-source>
```
### for example
execute in terminal: 
```bash
static-server http2 /user/project/static
```  
and then, open https://localhost:8090/index.html in browser(there is an index.html in static directory)
