param (
    [int]$compekoPasses = 100
)
New-Item -ItemType Directory -Force -Path .\intermediate -ErrorAction SilentlyContinue
tools\shader_minifier.exe -o intermediate/shader.js --format js --preserve-externals shader.frag
New-Item -ItemType Directory -Force -Path .\release -ErrorAction SilentlyContinue
$shader = (Get-Content -Path .\intermediate\shader.js -TotalCount 5)[-1].Substring(18)
Copy-Item .\main.js .\intermediate\
$main = (Get-Content -Path .\intermediate\main.js)
$main.Replace('shader_frag', $shader) | Out-File -FilePath .\intermediate\main.js
$previousRelease = (Get-ChildItem .\release\index.html)
$previousSize = $previousRelease.Length
terser .\intermediate\main.js -o .\intermediate\release.js -c --mangle
node .\tools\compeko.js .\intermediate\release.js .\release\index.html $compekoPasses
Write-Output "Size of previous release: ${previousSize} bytes"