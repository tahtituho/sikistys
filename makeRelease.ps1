New-Item -ItemType Directory -Force -Path .\release -ErrorAction SilentlyContinue
$shader = (Get-Content -Path .\intermediate\shader.js -TotalCount 5)[-1].Substring(18)
Copy-Item .\main.js .\intermediate\
$main = (Get-Content -Path .\intermediate\main.js)
$main.Replace('shader_frag', $shader) | Out-File -Path .\intermediate\main.js
terser .\intermediate\main.js -o .\intermediate\release.js -c --mangle 
node .\compeko.js .\intermediate\release.js .\release\index.html