# sikistys 1k js framework 
This is 1k js framework supporting one fragment shader and byte beat/float beat. Included is tähtituho's lovebyte 2023 entry [sikistys](https://www.pouet.net/prod.php?which=93677)
![sikistys by tähtituho](assets/screenshot.png)
## Prerequisites
1. install node (tested on v18.13.0, but pretty sure that newer versions work)
1. `run npm install -g http-server`
1. `npm install node-zopfli`
1. `npm install terser`

## Shader development
Custom build of [Leviathan 2.0](https://github.com/armak/Leviathan-2.0) is included for your convenience. Leviathan is great test shaders, because it is really simple and aims to be productive. Custom build differs from orignal in following ways:
1. You don't need to divide _t_ variable at all. It is compatible with time variable from js.
1. It does not support post processing

Use you favorite editor to write shader. Visual Studio Code with [GLSL lint](https://marketplace.visualstudio.com/items?itemName=dtoplak.vscode-glsllint) is recommended. 
1. Edit *shader.frag*
1. Run `tools/leviatha-custom-build.exe`
1. Leviathan will reload shader when you save shader in your editor

[GLSL Sandbox](https://glslsandbox.com/) and [Shadertoy](https://www.shadertoy.com/) are also great for wrinting shaders.

## Writing byte beat/float beat
Find _onclick_-function in *main.js* and there you will se comment saying "write tune here". Paste your byte beat or float beat into that. *NOTICE* your tune might need some tweaking if you wrote in it https://greggman.com/downloads/examples/html5bytebeat/html5bytebeat.html. Tweaking should be done on `a.createBuffer(1, q = 8000 * 45, 8000);`

## Testing with browser
When you feel like shader is ready to be executed in browser, do following steps:
1. Run `.\startBrowser.ps1`
1. This should open new browser tab to address http://localhost:8080/index.html
1. Click somewhere in upper left segment of browser to start 

## Making release
When you feel that shader and byte beat are good as they get, you should do release.
1. Run `.\makeRelease.ps1` (you can number of compeko passes as argument like `.\makeRelease.ps1 100` (100 is default) try 300, might save you 1 byte).
1. Run `http-server` and try results at http://localhost:8080/release/index.html
1. Click somewhere on browser to start demo (location might be different than in testing stage). It might take couple of tries to find correct place to click.
1. Submit entry to you favorite party with instruction how to run and start demo.

As compeko is using compression algorithm, results can vary greatly depending on your tune and shader code. It is encouraged to experiment with included boilerplate code.

## Shoutouts
[Leviathan 2.0](https://github.com/armak/Leviathan-2.0) For awesome shader runtime

[Shader_Minifier](https://github.com/laurentlb/Shader_Minifier) For minifying shader

[Terser](https://github.com/terser/terser) For minifying js

[compeko](https://gist.github.com/0b5vr/09ee96ca2efbe5bf9d64dad7220e923b) For PNG compression

Current size for this is 1012k.

