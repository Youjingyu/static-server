# static-server-quick
start http,https,http2 server to serve static resource files from a local directory

### usage
```bash
npm i static-server-quick -g
# path should be absolute path to static resource directory
static-server <http|https|http2> <absolute-path>
```
### for example
execute in terminal: 
```bash
static-server http2 /user/project/static
```  
and then, open https://localhost:8091/index.html in browser(there is an index.html in static directory)  
If the browser issues a warning, follow the steps below：  
step1:  
![step1](https://user-images.githubusercontent.com/15033260/39922474-d2f4177c-5551-11e8-9cc2-1c28cf9d58a5.png)  
step2:  
![step2](https://user-images.githubusercontent.com/15033260/39922479-d9a01cce-5551-11e8-98e6-4d4b580f2f46.png)