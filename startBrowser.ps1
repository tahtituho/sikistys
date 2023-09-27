New-Item -ItemType Directory -Force -Path .\intermediate -ErrorAction SilentlyContinue
tools\shader_minifier.exe -o intermediate/shader.js --format js --preserve-externals shader.frag
Start-Process "http://localhost:8080/index.html"
http-server
