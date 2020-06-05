(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var glea_umd_min = createCommonjsModule(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){function e(e,t){return r=>{const n=r.createShader(/frag/.test(t)?r.FRAGMENT_SHADER:r.VERTEX_SHADER);if(!n)throw Error("shader type not supported");if(r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw "Could not compile Shader.\n\n"+r.getShaderInfoLog(n);return n}}class t{constructor({canvas:e,gl:t,contextType:r="webgl",shaders:n,buffers:i,devicePixelRatio:o=1,glOptions:a}){if(this.canvas=document.createElement("canvas"),this.canvas=e||document.querySelector("canvas"),this.canvas||(this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas)),!document.querySelector("link[rel=stylesheet], style")){const e=document.createElement("style");e.innerHTML="body{margin:0}canvas{display:block;width:100vw;height:100vh}",document.head.appendChild(e);}this.gl=t||this.getContext(r,a);const s=this.gl.createProgram();if(!s)throw Error("gl.createProgram failed");this.program=s,this.buffers={},this.shaderFactory=n,this.bufferFactory=i||this.getDefaultBuffers(),this.textures=[],this.devicePixelRatio=o;}getDefaultBuffers(){return {position:t.buffer(2,[1,1,-1,1,1,-1,-1,-1])}}getContext(e,t){if("webgl"===e)return this.canvas.getContext("webgl",t)||this.canvas.getContext("experimental-webgl",t);if("webgl2"===e)return this.canvas.getContext("webgl2",t);throw Error(`no ${e} context available.`)}static vertexShader(t){return r=>e(t,"vert")(r)}static fragmentShader(t){return r=>e(t,"frag")(r)}static buffer(e,t,r=WebGLRenderingContext.STATIC_DRAW,n=WebGLRenderingContext.FLOAT,i=!1,o=0,a=0){return (s,u,c)=>{const f=u.getAttribLocation(c,s);u.enableVertexAttribArray(f);const h=u.createBuffer(),g=t instanceof Array?function(e,t=WebGLRenderingContext.FLOAT){if(t===WebGLRenderingContext.FLOAT)return new Float32Array(e);if(t===WebGLRenderingContext.BYTE)return new Uint8Array(e);throw Error("type not supported")}(t,n):t;return u.bindBuffer(u.ARRAY_BUFFER,h),u.bufferData(u.ARRAY_BUFFER,g,r),u.vertexAttribPointer(f,e,n,i,o,a),{id:h,name:s,data:g,loc:f,type:n,size:e}}}create(){const{gl:e}=this,{program:t}=this;if(this.shaderFactory.map(t=>t(e)).map(r=>{e.attachShader(t,r);}),e.linkProgram(t),e.validateProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){throw "Could not compile WebGL program. \n\n"+e.getProgramInfoLog(t)}return this.use(),Object.keys(this.bufferFactory).forEach(r=>{const n=this.bufferFactory[r];this.buffers[r]=n(r,e,t);}),this.resize(),this}setActiveTexture(e,t){const{gl:r}=this;r.activeTexture(r.TEXTURE0+e),r.bindTexture(r.TEXTURE_2D,t);}createTexture(e=0,t={textureWrapS:"clampToEdge",textureWrapT:"clampToEdge",textureMinFilter:"nearest",textureMagFilter:"nearest"}){const r=(e="")=>/^[A-Z0-9_]+$/.test(e)?e:e.replace(/([A-Z])/g,"_$1").toUpperCase(),{gl:n}=this,i=n.createTexture();n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,i);for(let e in t)if(t.hasOwnProperty(e)){const i=r(e),o=r(t[e]);i in n&&o in n&&n.texParameteri(n.TEXTURE_2D,n[i],n[o]);}return this.textures.push(i),i}updateBuffer(e,t=0){const{gl:r}=this,n=this.buffers[e];r.bindBuffer(r.ARRAY_BUFFER,n.id),r.bufferSubData(r.ARRAY_BUFFER,t,n.data);}resize(){const{canvas:e,gl:t,devicePixelRatio:r}=this;e&&(e.width=e.clientWidth*r,e.height=e.clientHeight*r,t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight));}get width(){return this.canvas?this.canvas.width:NaN}get height(){return this.canvas?this.canvas.height:NaN}use(){return this.gl.useProgram(this.program),this}uniM(e,t){const{gl:r,program:n}=this,i=r.getUniformLocation(n,e);if(4===t.length)return r.uniformMatrix2fv(i,!1,t),i;if(9===t.length)return r.uniformMatrix3fv(i,!1,t),i;if(16===t.length)return r.uniformMatrix4fv(i,!1,t),i;throw Error("unsupported uniform matrix type")}uniV(e,t){const{gl:r,program:n}=this,i=r.getUniformLocation(n,e);if(2===t.length)return r.uniform2fv(i,t),i;if(3===t.length)return r.uniform3fv(i,t),i;if(4===t.length)return r.uniform4fv(i,t),i;throw Error("unsupported uniform vector type")}uniIV(e,t){const{gl:r,program:n}=this,i=r.getUniformLocation(n,e);if(2===t.length)return r.uniform2iv(i,t),i;if(3===t.length)return r.uniform3iv(i,t),i;if(4===t.length)return r.uniform4iv(i,t),i;throw Error("unsupported uniform vector type")}uni(e,t){const{gl:r,program:n}=this,i=r.getUniformLocation(n,e);return "number"==typeof t&&r.uniform1f(i,t),i}uniI(e,t){const{gl:r,program:n}=this,i=r.getUniformLocation(n,e);"number"==typeof t&&r.uniform1i(i,t);}clear(e=null){const{gl:t}=this;e&&t.clearColor(e[0],e[1],e[2],1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);}destroy(){const{gl:e,program:t,canvas:r}=this;try{e.deleteProgram(t),Object.values(this.buffers).forEach(t=>{e.deleteBuffer(t.id);}),this.buffers={},this.textures.forEach(t=>{e.deleteTexture(t);}),this.textures=[],e.getExtension("WEBGL_lose_context").loseContext();const n=r.cloneNode();r.parentNode&&(r.parentNode.insertBefore(n,r),r.parentNode.removeChild(r)),this.canvas=n;}catch(e){console.error(e);}}}return t}));
	});

	var vert = "\nprecision highp float;\nattribute vec2 position;\n\nvoid main() {\n  gl_Position = vec4(position, 0, 1.0);\n}\n";
	var frag = "\nprecision highp float;\nuniform float time;\nuniform vec2 resolution;\n\nvoid main() {\n  float vmin = min(resolution.y, resolution.x);\n\n  vec2 p0 = (gl_FragCoord.xy - .5 * resolution) / vmin;\n  vec2 p = abs(p0 * sin(log(length(p0)) + time * .1)) * sin(time * .1) * 4.;\n  float checkers = 10. / p.y * sin(time * .7 + sin(p.x * 20.)) * cos(time * 1. + sin(p.y * 20.));\n  float r = checkers * sin(p.x - time * 1.2);\n  float g = checkers * sin(p.x - time * .1);  \n  float b = checkers * sin(p.x - time * .3);\n  gl_FragColor = vec4(r, g, b, 1.);\n}\n";
	var glea = new glea_umd_min({
	    shaders: [glea_umd_min.fragmentShader(frag), glea_umd_min.vertexShader(vert)],
	    buffers: {
	        // create a position attribute bound
	        // to a buffer with 4 2D coordinates
	        // this is what GLea provides by default if you omit buffers in the constructor
	        position: glea_umd_min.buffer(2, [1, 1, -1, 1, 1, -1, -1, -1]),
	    },
	}).create();
	function loop(time) {
	    var gl = glea.gl, width = glea.width, height = glea.height;
	    glea.clear();
	    glea.uniV('resolution', [width, height]);
	    glea.uni('time', time * 1e-3);
	    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	    requestAnimationFrame(loop);
	}
	function setup() {
	    window.addEventListener('resize', function () {
	        glea.resize();
	    });
	    loop(0);
	}
	setup();

}());
