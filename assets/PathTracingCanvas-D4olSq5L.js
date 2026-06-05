import{$n as e,B as t,Bn as n,D as r,Dr as i,Dt as a,E as o,Er as s,Et as c,H as l,Ht as u,It as d,J as f,Jt as p,K as m,Ln as h,Mn as g,Nn as _,Nt as v,O as y,P as b,Rn as x,Tr as S,Tt as C,Ur as w,V as T,Vt as E,Wt as D,Xn as O,Yn as ee,_ as k,_r as A,d as j,er as te,et as M,g as ne,gr as N,h as P,ht as re,jn as ie,jr as F,kr as ae,l as I,lr as oe,mt as L,nn as se,q as R,qn as ce,rr as le,s as ue,t as de,tn as z,u as B,v as fe,wr as pe,wt as me,xr as he,xt as ge}from"./three.module-BXXuDT_3.js";import{S as _e,_ as ve,b as ye,c as be,d as xe,f as Se,g as Ce,h as we,l as Te,m as Ee,n as De,nt as Oe,o as ke,p as Ae,r as V,t as je,tt as Me,u as Ne,x as Pe,y as Fe}from"./viewportWorld-DPbJX2o8.js";function Ie(e){switch(e){case 1:return`R`;case 2:return`RG`;case 3:return`RGBA`;case 4:return`RGBA`}throw Error()}function Le(e){switch(e){case 1:return h;case 2:return ie;case 3:return z;case 4:return z}}function Re(e){switch(e){case 1:return x;case 2:return g;case 3:return se;case 4:return se}}var ze=class extends r{constructor(){super(),this.minFilter=d,this.magFilter=d,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){let n=this.overrideItemSize,r=t.itemSize,i=t.count;if(n!==null){if(r*i%n!==0)throw Error(`VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.`);t.itemSize=n,t.count=i*r/n}let a=t.itemSize,o=t.count,s=t.normalized,c=t.array.constructor,l=c.BYTES_PER_ELEMENT,u=this._forcedType,d=a;if(u===null)switch(c){case Float32Array:u=T;break;case Uint8Array:case Uint16Array:case Uint32Array:u=he;break;case Int8Array:case Int16Array:case Int32Array:u=M;break}let f,p,m,h,g=Ie(a);switch(u){case T:m=1,p=Le(a),s&&l===1?(h=c,g+=`8`,c===Uint8Array?f=A:(f=j,g+=`_SNORM`)):(h=Float32Array,g+=`32F`,f=T);break;case M:g+=l*8+`I`,m=s?2**(c.BYTES_PER_ELEMENT*8-1):1,p=Re(a),l===1?(h=Int8Array,f=j):l===2?(h=Int16Array,f=e):(h=Int32Array,f=M);break;case he:g+=l*8+`UI`,m=s?2**(c.BYTES_PER_ELEMENT*8-1):1,p=Re(a),l===1?(h=Uint8Array,f=A):l===2?(h=Uint16Array,f=pe):(h=Uint32Array,f=he);break}d===3&&(p===1023||p===1033)&&(d=4);let _=Math.ceil(Math.sqrt(o))||1,v=d*_*_,y=new h(v),b=t.normalized;t.normalized=!1;for(let e=0;e<o;e++){let n=d*e;y[n]=t.getX(e)/m,a>=2&&(y[n+1]=t.getY(e)/m),a>=3&&(y[n+2]=t.getZ(e)/m,d===4&&(y[n+3]=1)),a>=4&&(y[n+3]=t.getW(e)/m)}t.normalized=b,this.internalFormat=g,this.format=p,this.type=f,this.image.width=_,this.image.height=_,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=r,t.count=i}},Be=class extends ze{constructor(){super(),this._forcedType=he}},Ve=class extends ze{constructor(){super(),this._forcedType=T}},He=class{constructor(){this.index=new Be,this.position=new Ve,this.bvhBounds=new r,this.bvhContents=new r,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(We(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let e=we(Ce(t));this._cachedIndexAttr=new I(e,1,!1)}Ue(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:n,bvhContents:r}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),r&&r.dispose()}};function Ue(e,t,n){let r=n.array,i=e.index?e.index.array:null;for(let e=0,n=t.length;e<n;e++){let n=3*e,a=3*t[e];for(let e=0;e<3;e++)r[n+e]=i?i[a+e]:a+e}}function We(e,t,n){let r=e._roots;if(r.length!==1)throw Error(`MeshBVHUniformStruct: Multi-root BVHs not supported.`);let i=r[0],a=new Uint16Array(i),o=new Uint32Array(i),s=new Float32Array(i),c=i.byteLength/32,l=2*Math.ceil(Math.sqrt(c/2)),u=new Float32Array(4*l*l),f=Math.ceil(Math.sqrt(c)),p=new Uint32Array(2*f*f);for(let e=0;e<c;e++){let t=e*32/4,n=t*2,r=Te(t);for(let t=0;t<3;t++)u[8*e+0+t]=s[r+0+t],u[8*e+4+t]=s[r+3+t];if(xe(n,a)){let r=Ne(n,a),i=Se(t,o),s=4294901760|r;p[e*2+0]=s,p[e*2+1]=i}else{let n=4*Ae(t,o)/32,r=Ee(t,o);p[e*2+0]=r,p[e*2+1]=n}}t.image.data=u,t.image.width=l,t.image.height=l,t.format=z,t.type=T,t.internalFormat=`RGBA32F`,t.minFilter=d,t.magFilter=d,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),n.image.data=p,n.image.width=f,n.image.height=f,n.format=g,n.type=he,n.internalFormat=`RG32UI`,n.minFilter=d,n.magFilter=d,n.generateMipmaps=!1,n.needsUpdate=!0,n.dispose()}var Ge=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ke=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,qe=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,H=w(Oe(),1),Je={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Ye=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Xe=new E(-1,1,1,-1,0,1),Ze=new class extends B{constructor(){super(),this.setAttribute(`position`,new t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new t([0,2,0,0,2,0],2))}},U=class{constructor(e){this._mesh=new c(Ze,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xe)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Qe=class extends Ye{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof O?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new O({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new U(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},$e=class extends Ye{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},et=class extends Ye{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},tt=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new S);this._width=n.width,this._height=n.height,t=new F(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:R}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qe(Je),this.copyPass.material.blending=0,this.timer=new oe}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}$e!==void 0&&(r instanceof $e?n=!0:r instanceof et&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new S);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},nt={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},rt=class extends Ye{constructor(){super(),this.isOutputPass=!0,this.uniforms=N.clone(nt.uniforms),this.material=new _({name:nt.name,uniforms:this.uniforms,vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader}),this._fsQuad=new U(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},it=class extends Ye{constructor(e,t=1){super();let n=Je;this.map=e,this.opacity=t,this.needsSwap=!1,this.uniforms=N.clone(n.uniforms),this.material=new O({uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),this._fsQuad=new U(null)}render(e,t,n){let r=e.autoClear;e.autoClear=!1,this._fsQuad.material=this.material,this.uniforms.opacity.value=this.opacity,this.uniforms.tDiffuse.value=this.map,this.material.transparent=this.opacity<1,e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(),this._fsQuad.render(e),e.autoClear=r}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function at(e,t,n=0){if(e.isInterleavedBufferAttribute){let r=e.itemSize;for(let i=0,a=e.count;i<a;i++){let a=i+n;t.setX(a,e.getX(i)),r>=2&&t.setY(a,e.getY(i)),r>=3&&t.setZ(a,e.getZ(i)),r>=4&&t.setW(a,e.getW(i))}}else{let r=t.array,i=r.constructor,a=r.BYTES_PER_ELEMENT*e.itemSize*n;new i(r.buffer,a,e.array.length).set(e.array)}}function ot(e,t=null){let n=e.array.constructor,r=e.normalized,i=e.itemSize;return new I(new n(i*(t===null?e.count:t)),i,r)}function st(e,t){if(!e&&!t)return!0;if(!!e!=!!t)return!1;let n=e.count===t.count,r=e.normalized===t.normalized,i=e.array.constructor===t.array.constructor,a=e.itemSize===t.itemSize;return!(!n||!r||!i||!a)}function ct(e){let t=e[0].index!==null,n=new Set(Object.keys(e[0].attributes));if(!e[0].getAttribute(`position`))throw Error(`StaticGeometryGenerator: position attribute is required.`);for(let r=0;r<e.length;++r){let i=e[r],a=0;if(t!==(i.index!==null))throw Error(`StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`);for(let e in i.attributes){if(!n.has(e))throw Error(`StaticGeometryGenerator: All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`);a++}if(a!==n.size)throw Error(`StaticGeometryGenerator: All geometries must have the same number of attributes.`)}}function lt(e){let t=0;for(let n=0,r=e.length;n<r;n++)t+=e[n].getIndex().count;return t}function ut(e){let t=0;for(let n=0,r=e.length;n<r;n++)t+=e[n].getAttribute(`position`).count;return t}function dt(e,t,n){e.index&&e.index.count!==t&&e.setIndex(null);let r=e.attributes;for(let t in r)r[t].count!==n&&e.deleteAttribute(t)}function ft(e,t={},n=new B){let{useGroups:r=!1,forceUpdate:i=!1,skipAssigningAttributes:a=[],overwriteIndex:o=!0}=t;ct(e);let s=e[0].index!==null,c=s?lt(e):-1,l=ut(e);if(dt(n,c,l),r){let t=0;for(let r=0,i=e.length;r<i;r++){let i=e[r],a;a=s?i.getIndex().count:i.getAttribute(`position`).count,n.addGroup(t,a,r),t+=a}}if(s){let t=!1;if(n.index||(n.setIndex(new I(new Uint32Array(c),1,!1)),t=!0),t||o){let r=0,o=0,s=n.getIndex();for(let n=0,c=e.length;n<c;n++){let c=e[n],l=c.getIndex();if(!(!i&&!t&&a[n]))for(let e=0;e<l.count;++e)s.setX(r+e,l.getX(e)+o);r+=l.count,o+=c.getAttribute(`position`).count}}}let u=Object.keys(e[0].attributes);for(let t=0,r=u.length;t<r;t++){let r=!1,o=u[t];if(!n.getAttribute(o)){let t=e[0].getAttribute(o);n.setAttribute(o,ot(t,l)),r=!0}let s=0,c=n.getAttribute(o);for(let t=0,n=e.length;t<n;t++){let n=e[t],l=!i&&!r&&a[t],u=n.getAttribute(o);if(!l)if(o===`color`&&c.itemSize!==u.itemSize)for(let e=s,t=u.count;e<t;e++)u.setXYZW(e,c.getX(e),c.getY(e),c.getZ(e),1);else at(u,c,s);s+=u.count}}}function pt(e,t,n){let r=e.index,i=e.attributes.position.count,a=r?r.count:i,o=e.groups;o.length===0&&(o=[{count:a,start:0,materialIndex:0}]);let s=e.getAttribute(`materialIndex`);if(!s||s.count!==i){let t;t=n.length<=255?new Uint8Array(i):new Uint16Array(i),s=new I(t,1,!1),e.deleteAttribute(`materialIndex`),e.setAttribute(`materialIndex`,s)}let c=s.array;for(let e=0;e<o.length;e++){let i=o[e],s=i.start,l=i.count,u=Math.min(l,a-s),d=Array.isArray(t)?t[i.materialIndex]:t,f=n.indexOf(d);for(let e=0;e<u;e++){let t=s+e;r&&(t=r.getX(t)),c[t]=f}}}function mt(e,t){if(!e.index){let t=e.attributes.position.count,n=Array(t);for(let e=0;e<t;e++)n[e]=e;e.setIndex(n)}if(!e.attributes.normal&&t&&t.includes(`normal`)&&e.computeVertexNormals(),!e.attributes.uv&&t&&t.includes(`uv`)){let t=e.attributes.position.count;e.setAttribute(`uv`,new I(new Float32Array(t*2),2,!1))}if(!e.attributes.uv2&&t&&t.includes(`uv2`)){let t=e.attributes.position.count;e.setAttribute(`uv2`,new I(new Float32Array(t*2),2,!1))}if(!e.attributes.tangent&&t&&t.includes(`tangent`))if(e.attributes.uv&&e.attributes.normal)e.computeTangents();else{let t=e.attributes.position.count;e.setAttribute(`tangent`,new I(new Float32Array(t*4),4,!1))}if(!e.attributes.color&&t&&t.includes(`color`)){let t=e.attributes.position.count,n=new Float32Array(t*4);n.fill(1),e.setAttribute(`color`,new I(n,4))}}function ht(e){let t=0;if(e.byteLength!==0){let n=new Uint8Array(e);for(let r=0;r<e.byteLength;r++){let e=n[r];t=(t<<5)-t+e,t|=0}}return t}function gt(e){let t=e.uuid,n=Object.values(e.attributes);e.index&&(n.push(e.index),t+=`index|${e.index.version}`);let r=Object.keys(n).sort();for(let e of r){let r=n[e];t+=`${e}_${r.version}|`}return t}function _t(e){let t=e.skeleton;return t?(t.boneTexture||t.computeBoneTexture(),`${ht(t.boneTexture.image.data.buffer)}_${t.boneTexture.uuid}`):null}var vt=class{constructor(e=null){this.matrixWorld=new C,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=gt(t),this.primitiveCount=n,this.skeletonHash=_t(e)}didChange(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===gt(t)&&this.skeletonHash===_t(e)&&this.primitiveCount===n)}},W=new s,G=new s,K=new s,yt=new i,bt=new s,xt=new s,St=new i,Ct=new i,wt=new C,Tt=new C;function Et(e,t,n){let r=e.skeleton,i=e.geometry,a=r.bones,o=r.boneInverses;St.fromBufferAttribute(i.attributes.skinIndex,t),Ct.fromBufferAttribute(i.attributes.skinWeight,t),wt.elements.fill(0);for(let e=0;e<4;e++){let t=Ct.getComponent(e);if(t!==0){let n=St.getComponent(e);Tt.multiplyMatrices(a[n].matrixWorld,o[n]),Ot(wt,Tt,t)}}return wt.multiply(e.bindMatrix).premultiply(e.bindMatrixInverse),n.transformDirection(wt),n}function Dt(e,t,n,r,i){bt.set(0,0,0);for(let a=0,o=e.length;a<o;a++){let o=t[a],s=e[a];o!==0&&(xt.fromBufferAttribute(s,r),n?bt.addScaledVector(xt,o):bt.addScaledVector(xt.sub(i),o))}i.add(bt)}function Ot(e,t,n){let r=e.elements,i=t.elements;for(let e=0,t=i.length;e<t;e++)r[e]+=i[e]*n}function kt(e){let{index:t,attributes:n}=e;if(t)for(let e=0,n=t.count;e<n;e+=3){let n=t.getX(e),r=t.getX(e+2);t.setX(e,r),t.setX(e+2,n)}else for(let e in n){let t=n[e],r=t.itemSize;for(let e=0,n=t.count;e<n;e+=3)for(let n=0;n<r;n++){let r=t.getComponent(e,n),i=t.getComponent(e+2,n);t.setComponent(e,n,i),t.setComponent(e+2,n,r)}}return e}function At(e,t={},n=new B){t={applyWorldTransforms:!0,attributes:[],...t};let r=e.geometry,i=t.applyWorldTransforms,a=t.attributes.includes(`normal`),o=t.attributes.includes(`tangent`),s=r.attributes,c=n.attributes;for(let e in n.attributes)(!t.attributes.includes(e)||!(e in r.attributes))&&n.deleteAttribute(e);!n.index&&r.index&&(n.index=r.index.clone()),c.position||n.setAttribute(`position`,ot(s.position)),a&&!c.normal&&s.normal&&n.setAttribute(`normal`,ot(s.normal)),o&&!c.tangent&&s.tangent&&n.setAttribute(`tangent`,ot(s.tangent)),st(r.index,n.index),st(s.position,c.position),a&&st(s.normal,c.normal),o&&st(s.tangent,c.tangent);let l=s.position,u=a?s.normal:null,d=o?s.tangent:null,f=r.morphAttributes.position,p=r.morphAttributes.normal,m=r.morphAttributes.tangent,h=r.morphTargetsRelative,g=e.morphTargetInfluences,_=new me;_.getNormalMatrix(e.matrixWorld),r.index&&n.index.array.set(r.index.array);for(let t=0,n=s.position.count;t<n;t++)W.fromBufferAttribute(l,t),u&&G.fromBufferAttribute(u,t),d&&(yt.fromBufferAttribute(d,t),K.fromBufferAttribute(d,t)),g&&(f&&Dt(f,g,h,t,W),p&&Dt(p,g,h,t,G),m&&Dt(m,g,h,t,K)),e.isSkinnedMesh&&(e.applyBoneTransform(t,W),u&&Et(e,t,G),d&&Et(e,t,K)),i&&W.applyMatrix4(e.matrixWorld),c.position.setXYZ(t,W.x,W.y,W.z),u&&(i&&G.applyNormalMatrix(_),c.normal.setXYZ(t,G.x,G.y,G.z)),d&&(i&&K.transformDirection(e.matrixWorld),c.tangent.setXYZW(t,K.x,K.y,K.z,yt.w));for(let e in t.attributes){let r=t.attributes[e];r===`position`||r===`tangent`||r===`normal`||!(r in s)||(c[r]||n.setAttribute(r,ot(s[r])),st(s[r],c[r]),at(s[r],c[r]))}return e.matrixWorld.determinant()<0&&kt(n),n}var jt=class extends B{constructor(){super(),this.version=0,this.hash=null,this._diff=new vt}isCompatible(e,t){let n=e.geometry;for(let e=0;e<t.length;e++){let r=t[e],i=n.attributes[r],a=this.attributes[r];if(i&&!st(i,a))return!1}return!0}updateFrom(e,t){let n=this._diff;return n.didChange(e)?(At(e,t,this),n.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};function Mt(e,t){for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(e=>{e.isMesh&&t(e)})}function Nt(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];Array.isArray(r.material)?t.push(...r.material):t.push(r.material)}return t}function Pt(e,t,n){if(e.length===0){t.setIndex(null);let e=t.attributes;for(let n in e)t.deleteAttribute(n);for(let e in n.attributes)t.setAttribute(n.attributes[e],new I(new Float32Array,4,!1))}else ft(e,n,t);for(let e in t.attributes)t.attributes[e].needsUpdate=!0}var Ft=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=[`position`,`normal`,`color`,`tangent`,`uv`,`uv2`],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new a,t=new B;t.setAttribute(`position`,new I(new Float32Array(9),3)),this._dummyMesh=new c(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return Mt(this.objects,t=>{e.push(t)}),e.sort((e,t)=>e.uuid>t.uuid?1:e.uuid<t.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),n=new Set(e.keys()),r={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.uuid;n.delete(o);let s=e.get(o);(!s||!s.isCompatible(a,this.attributes))&&(s&&s.dispose(),s=new jt,e.set(o,s)),s.updateFrom(a,r)&&this.generateMissingAttributes&&mt(s,this.attributes)}n.forEach(t=>{e.delete(t)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new B){let{useGroups:t,overwriteIndex:n,_intermediateGeometry:r,_geometryMergeSets:i}=this,a=this._getMeshes(),o=[],s=[],c=i.get(e)||[];this._updateIntermediateGeometries();let l=!1;a.length!==c.length&&(l=!0);for(let e=0,t=a.length;e<t;e++){let t=a[e],n=r.get(t.uuid);s.push(n);let i=c[e];!i||i.uuid!==n.uuid?(o.push(!1),l=!0):i.version===n.version?o.push(!0):o.push(!1)}Pt(s,e,{useGroups:t,forceUpdate:l,skipAssigningAttributes:o,overwriteIndex:n}),l&&e.dispose(),i.set(e,s.map(e=>({version:e.version,uuid:e.uuid})));let u=0;return l?u=2:o.includes(!1)&&(u=1),{changeType:u,materials:Nt(a),geometry:e}}};function It(e){let t=new Set;for(let n=0,r=e.length;n<r;n++){let r=e[n];for(let e in r){let n=r[e];n&&n.isTexture&&t.add(n)}}return Array.from(t)}function Lt(e){let t=[],n=new Set;for(let r=0,i=e.length;r<i;r++)e[r].traverse(e=>{e.visible&&(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight)&&(t.push(e),e.iesMap&&n.add(e.iesMap))});return{lights:t,iesTextures:Array.from(n).sort((e,t)=>e.uuid<t.uuid?1:e.uuid>t.uuid?-1:0)}}var Rt=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=[`position`,`normal`,`tangent`,`color`,`uv`,`uv2`],this.generateBVH=!0,this.bvh=null,this.geometry=new B,this.staticGeometryGenerator=new Ft(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw Error(`PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.`);if(this.bvh instanceof Promise)return this._pendingGenerate||=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:n,attributes:r}=this,i=t.objects;t.attributes=r,i.forEach(e=>{e.traverse(e=>{e.isSkinnedMesh&&e.skeleton&&e.skeleton.update()})});let a=t.generate(n),o=a.materials,s=a.changeType!==0||this._materialUuids===null||this._materialUuids.length!==length;if(!s){for(let e=0,t=o.length;e<t;e++)if(o[e].uuid!==this._materialUuids[e]){s=!0;break}}let c=It(o),{lights:l,iesTextures:u}=Lt(i);if(s&&(pt(n,o,o),this._materialUuids=o.map(e=>e.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw Error(`PathTracingSceneGenerator: BVH is already building asynchronously.`);if(a.changeType===2){let t={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,t):this.bvh=new be(n,t)}else a.changeType===1&&this.bvh.refit()}return{bvhChanged:a.changeType!==0,bvh:this.bvh,needsMaterialIndexUpdate:s,lights:l,iesTextures:u,geometry:n,materials:o,textures:c,objects:i}}},zt=class extends O{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:`recompilation`})}constructor(e){super(e);for(let e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(t){this.uniforms[e].value=t}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}},Bt=class extends zt{constructor(e){super({blending:0,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}};function Vt(e=1){let t=`uint`;return e>1&&(t=`uvec`+e),`
		${t} sobolReverseBits( ${t} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${t} sobolHashCombine( uint seed, ${t} v ) {

			return seed ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${t} sobolLaineKarrasPermutation( ${t} x, ${t} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${t} nestedUniformScrambleBase2( ${t} x, ${t} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Ht(e=1){let t=`uint`,n=`float`,r=``,i=`.r`,a=`1u`;return e>1&&(t=`uvec`+e,n=`vec`+e,r=e+``,e===2?(i=`.rg`,a=`uvec2( 1u, 2u )`):e===3?(i=`.rgb`,a=`uvec3( 1u, 2u, 3u )`):(i=``,a=`uvec4( 1u, 2u, 3u, 4u )`)),`

		${n} sobol${r}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${n} sobol_pt = sobolGetTexturePoint( shuffled_index )${i};
			${t} result = ${t}( sobol_pt * 16777216.0 );

			${t} seed2 = sobolHashCombine( seed, ${a} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${n}( result >> 8 );

		}
	`}var Ut=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Vt(1)}
	${Vt(2)}
	${Vt(3)}
	${Vt(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,Wt=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,Gt=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Ht(1)}
	${Ht(2)}
	${Ht(3)}
	${Ht(4)}

`,Kt=class extends zt{constructor(){super({blending:0,uniforms:{resolution:{value:new S}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${Ut}
				${Wt}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},qt=class{generate(e,t=256){let n=new F(t,t,{type:T,format:z,minFilter:d,magFilter:d,generateMipmaps:!1}),r=e.getRenderTarget();e.setRenderTarget(n);let i=new U(new Kt);return i.material.resolution.set(t,t),i.render(e),e.setRenderTarget(r),i.dispose(),n}},Jt=class extends u{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}},Yt=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof Jt?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function Xt(e){let t=new Uint16Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=y.toHalfFloat(e[n]);return t}function Zt(e,t,n=0,r=e.length){let i=n,a=n+r-1;for(;i<a;){let n=i+a>>1;e[n]<t?i=n+1:a=n}return i-n}function Qt(e,t,n){return .2126*e+.7152*t+.0722*n}function $t(e,t=R){let n=e.clone();n.source=new te({...n.image});let{width:r,height:i,data:a}=n.image,o=a;if(n.type!==t){o=t===1016?new Uint16Array(a.length):new Float32Array(a.length);let e;e=a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array?2**(8*a.BYTES_PER_ELEMENT-1)-1:2**(8*a.BYTES_PER_ELEMENT)-1;for(let r=0,i=a.length;r<i;r++){let i=a[r];n.type===1016&&(i=y.fromHalfFloat(a[r])),n.type!==1015&&n.type!==1016&&(i/=e),t===1016&&(o[r]=y.toHalfFloat(i))}n.image.data=o,n.type=t}if(n.flipY){let e=o;o=o.slice();for(let t=0;t<i;t++)for(let n=0;n<r;n++){let a=i-t-1,s=4*(t*r+n),c=4*(a*r+n);o[c+0]=e[s+0],o[c+1]=e[s+1],o[c+2]=e[s+2],o[c+3]=e[s+3]}n.flipY=!1,n.image.data=o}return n}var en=class{constructor(){let e=new r(Xt(new Float32Array([0,0,0,0])),1,1);e.type=R,e.format=z,e.minFilter=L,e.magFilter=L,e.wrapS=n,e.wrapT=n,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new r(Xt(new Float32Array([0,1])),1,2);t.type=R,t.format=h,t.minFilter=L,t.magFilter=L,t.generateMipmaps=!1,t.needsUpdate=!0;let i=new r(Xt(new Float32Array([0,0,1,1])),2,2);i.type=R,i.format=h,i.minFilter=L,i.magFilter=L,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=$t(e);t.wrapS=n,t.wrapT=P;let{width:r,height:i,data:a}=t.image,o=new Float32Array(r*i),s=new Float32Array(r*i),c=new Float32Array(i),l=new Float32Array(i),u=0,d=0;for(let e=0;e<i;e++){let t=0;for(let n=0;n<r;n++){let i=e*r+n,c=Qt(y.fromHalfFloat(a[4*i+0]),y.fromHalfFloat(a[4*i+1]),y.fromHalfFloat(a[4*i+2]));t+=c,u+=c,o[i]=c,s[i]=t}if(t!==0)for(let n=e*r,i=e*r+r;n<i;n++)o[n]/=t,s[n]/=t;d+=t,c[e]=t,l[e]=d}if(d!==0)for(let e=0,t=c.length;e<t;e++)c[e]/=d,l[e]/=d;let f=new Uint16Array(i),p=new Uint16Array(r*i);for(let e=0;e<i;e++){let t=Zt(l,(e+1)/i);f[e]=y.toHalfFloat((t+.5)/i)}for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=e*r+t,i=Zt(s,(t+1)/r,e*r,r);p[n]=y.toHalfFloat((i+.5)/r)}this.dispose();let{marginalWeights:m,conditionalWeights:h}=this;m.image={width:i,height:1,data:f},m.needsUpdate=!0,h.image={width:r,height:i,data:p},h.needsUpdate=!0,this.totalSum=u,this.map=t}},tn=6,nn=0,rn=1,an=2,on=3,sn=4,q=new s,J=new s,cn=new C,ln=new p,un=new s,dn=new s,fn=new s(0,1,0),pn=class{constructor(){let e=new r(new Float32Array(4),1,1);e.format=z,e.type=T,e.wrapS=P,e.wrapT=P,e.generateMipmaps=!1,e.minFilter=d,e.magFilter=d,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,r=Math.max(e.length*tn,1),i=Math.ceil(Math.sqrt(r));n.image.width!==i&&(n.dispose(),n.image.data=new Float32Array(i*i*4),n.image.width=i,n.image.height=i);let a=n.image.data;for(let n=0,r=e.length;n<r;n++){let r=e[n],i=n*tn*4,o=0;for(let e=0;e<tn*4;e++)a[i+e]=0;r.getWorldPosition(J),a[i+ o++]=J.x,a[i+ o++]=J.y,a[i+ o++]=J.z;let s=nn;if(r.isRectAreaLight&&r.isCircular?s=rn:r.isSpotLight?s=an:r.isDirectionalLight?s=on:r.isPointLight&&(s=sn),a[i+ o++]=s,a[i+ o++]=r.color.r,a[i+ o++]=r.color.g,a[i+ o++]=r.color.b,a[i+ o++]=r.intensity,r.getWorldQuaternion(ln),r.isRectAreaLight)q.set(r.width,0,0).applyQuaternion(ln),a[i+ o++]=q.x,a[i+ o++]=q.y,a[i+ o++]=q.z,o++,J.set(0,r.height,0).applyQuaternion(ln),a[i+ o++]=J.x,a[i+ o++]=J.y,a[i+ o++]=J.z,a[i+ o++]=q.cross(J).length()*(r.isCircular?Math.PI/4:1);else if(r.isSpotLight){let e=r.radius||0;un.setFromMatrixPosition(r.matrixWorld),dn.setFromMatrixPosition(r.target.matrixWorld),cn.lookAt(un,dn,fn),ln.setFromRotationMatrix(cn),q.set(1,0,0).applyQuaternion(ln),a[i+ o++]=q.x,a[i+ o++]=q.y,a[i+ o++]=q.z,o++,J.set(0,1,0).applyQuaternion(ln),a[i+ o++]=J.x,a[i+ o++]=J.y,a[i+ o++]=J.z,a[i+ o++]=Math.PI*e*e,a[i+ o++]=e,a[i+ o++]=r.decay,a[i+ o++]=r.distance,a[i+ o++]=Math.cos(r.angle),a[i+ o++]=Math.cos(r.angle*(1-r.penumbra)),a[i+ o++]=r.iesMap?t.indexOf(r.iesMap):-1}else if(r.isPointLight){let e=q.setFromMatrixPosition(r.matrixWorld);a[i+ o++]=e.x,a[i+ o++]=e.y,a[i+ o++]=e.z,o++,o+=4,o+=1,a[i+ o++]=r.decay,a[i+ o++]=r.distance}else if(r.isDirectionalLight){let e=q.setFromMatrixPosition(r.matrixWorld),t=J.setFromMatrixPosition(r.target.matrixWorld);dn.subVectors(e,t).normalize(),a[i+ o++]=dn.x,a[i+ o++]=dn.y,a[i+ o++]=dn.z}}this.count=e.length;let o=ht(a.buffer);return this.hash===o?!1:(this.hash=o,n.needsUpdate=!0,!0)}};function mn(e,t,n,r,i){if(t>r)throw Error();let a=e.length/t,o=e.constructor.BYTES_PER_ELEMENT*8,s=1;switch(e.constructor){case Uint8Array:case Uint16Array:case Uint32Array:s=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:s=2**(o-1)-1;break}for(let o=0;o<a;o++){let a=4*o,c=t*o;for(let o=0;o<r;o++)n[i+a+o]=t>=o+1?e[c+o]/s:0}}var hn=class extends o{constructor(){super(),this._textures=[],this.type=T,this.format=z,this.internalFormat=`RGBA32F`}updateAttribute(e,t){let n=this._textures[e];n.updateFrom(t);let r=n.image,i=this.image;if(r.width!==i.width||r.height!==i.height)throw Error(`FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.`);let{width:a,height:o,data:s}=i,c=a*o*4*e,l=t.itemSize;l===3&&(l=4),mn(n.image.data,l,s,4,c),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,n=e.length;for(let r=0,i=n;r<i;r++)if(e[r].count!==t)throw Error(`FloatAttributeTextureArray: All attributes must have the same item count.`);let r=this._textures;for(;r.length<n;){let e=new Ve;r.push(e)}for(;r.length>n;)r.pop();for(let t=0,i=n;t<i;t++)r[t].updateFrom(e[t]);let i=r[0].image,a=this.image;(i.width!==a.width||i.height!==a.height||i.depth!==n)&&(a.width=i.width,a.height=i.height,a.depth=n,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:o,width:s,height:c}=a;for(let t=0,i=n;t<i;t++){let n=r[t],i=s*c*4*t,a=e[t].itemSize;a===3&&(a=4),mn(n.image.data,a,o,4,i)}this.dispose(),this.needsUpdate=!0}},gn=class extends hn{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,r){this.setAttributes([e,t,n,r])}};function _n(e,t){return e.uuid<t.uuid?1:e.uuid>t.uuid?-1:0}function vn(e){return`${e.source.uuid}:${e.colorSpace}`}function yn(e){let t=new Set,n=[];for(let r=0,i=e.length;r<i;r++){let i=e[r],a=vn(i);t.has(a)||(t.add(a),n.push(i))}return n}function bn(e){let t=e.map(e=>e.iesMap||null).filter(e=>e),n=new Set(t);return Array.from(n).sort(_n)}function xn(e){let t=new Set;for(let n=0,r=e.length;n<r;n++){let r=e[n];for(let e in r){let n=r[e];n&&n.isTexture&&t.add(n)}}return yn(Array.from(t)).sort(_n)}function Sn(e){let t=[];return e.traverse(e=>{e.visible&&(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight)&&t.push(e)}),t.sort(_n)}var Cn=188,wn=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},Tn=class extends r{constructor(){super(new Float32Array(4),1,1),this.format=z,this.type=T,this.wrapS=P,this.wrapT=P,this.minFilter=d,this.magFilter=d,this.generateMipmaps=!1,this.features=new wn}updateFrom(e,t){function n(e,t,n=-1){return t in e&&e[t]?u[vn(e[t])]:n}function r(e,t,n){return t in e?e[t]:n}function i(e,t,n,r){let i=e[t]&&e[t].isTexture?e[t]:null;if(i){i.matrixAutoUpdate&&i.updateMatrix();let e=i.matrix.elements,t=0;n[r+ t++]=e[0],n[r+ t++]=e[3],n[r+ t++]=e[6],t++,n[r+ t++]=e[1],n[r+ t++]=e[4],n[r+ t++]=e[7],t++}return 8}let a=0,o=e.length*47,s=Math.ceil(Math.sqrt(o))||1,{image:c,features:l}=this,u={};for(let e=0,n=t.length;e<n;e++)u[vn(t[e])]=e;c.width!==s&&(this.dispose(),c.data=new Float32Array(s*s*4),c.width=s,c.height=s);let d=c.data;l.reset();for(let t=0,o=e.length;t<o;t++){let o=e[t];if(o.isFogVolumeMaterial){l.setUsed(`FOG`);for(let e=0;e<Cn;e++)d[a+e]=0;d[a+0+0]=o.color.r,d[a+0+1]=o.color.g,d[a+0+2]=o.color.b,d[a+8+3]=r(o,`emissiveIntensity`,0),d[a+12+0]=o.emissive.r,d[a+12+1]=o.emissive.g,d[a+12+2]=o.emissive.b,d[a+52+1]=o.density,d[a+52+3]=0,d[a+56+2]=4,a+=Cn;continue}d[a++]=o.color.r,d[a++]=o.color.g,d[a++]=o.color.b,d[a++]=n(o,`map`),d[a++]=r(o,`metalness`,0),d[a++]=n(o,`metalnessMap`),d[a++]=r(o,`roughness`,0),d[a++]=n(o,`roughnessMap`),d[a++]=r(o,`ior`,1.5),d[a++]=r(o,`transmission`,0),d[a++]=n(o,`transmissionMap`),d[a++]=r(o,`emissiveIntensity`,0),`emissive`in o?(d[a++]=o.emissive.r,d[a++]=o.emissive.g,d[a++]=o.emissive.b):(d[a++]=0,d[a++]=0,d[a++]=0),d[a++]=n(o,`emissiveMap`),d[a++]=n(o,`normalMap`),`normalScale`in o?(d[a++]=o.normalScale.x,d[a++]=o.normalScale.y):(d[a++]=1,d[a++]=1),d[a++]=r(o,`clearcoat`,0),d[a++]=n(o,`clearcoatMap`),d[a++]=r(o,`clearcoatRoughness`,0),d[a++]=n(o,`clearcoatRoughnessMap`),d[a++]=n(o,`clearcoatNormalMap`),`clearcoatNormalScale`in o?(d[a++]=o.clearcoatNormalScale.x,d[a++]=o.clearcoatNormalScale.y):(d[a++]=1,d[a++]=1),a++,d[a++]=r(o,`sheen`,0),`sheenColor`in o?(d[a++]=o.sheenColor.r,d[a++]=o.sheenColor.g,d[a++]=o.sheenColor.b):(d[a++]=0,d[a++]=0,d[a++]=0),d[a++]=n(o,`sheenColorMap`),d[a++]=r(o,`sheenRoughness`,0),d[a++]=n(o,`sheenRoughnessMap`),d[a++]=n(o,`iridescenceMap`),d[a++]=n(o,`iridescenceThicknessMap`),d[a++]=r(o,`iridescence`,0),d[a++]=r(o,`iridescenceIOR`,1.3);let s=r(o,`iridescenceThicknessRange`,[100,400]);d[a++]=s[0],d[a++]=s[1],`specularColor`in o?(d[a++]=o.specularColor.r,d[a++]=o.specularColor.g,d[a++]=o.specularColor.b):(d[a++]=1,d[a++]=1,d[a++]=1),d[a++]=n(o,`specularColorMap`),d[a++]=r(o,`specularIntensity`,1),d[a++]=n(o,`specularIntensityMap`);let c=r(o,`thickness`,0)===0&&r(o,`attenuationDistance`,1/0)===1/0;if(d[a++]=Number(c),a++,`attenuationColor`in o?(d[a++]=o.attenuationColor.r,d[a++]=o.attenuationColor.g,d[a++]=o.attenuationColor.b):(d[a++]=1,d[a++]=1,d[a++]=1),d[a++]=r(o,`attenuationDistance`,1/0),d[a++]=n(o,`alphaMap`),d[a++]=o.opacity,d[a++]=o.alphaTest,!c&&o.transmission>0)d[a++]=0;else switch(o.side){case 0:d[a++]=1;break;case 1:d[a++]=-1;break;case 2:d[a++]=0;break}d[a++]=Number(r(o,`matte`,!1)),d[a++]=Number(r(o,`castShadow`,!0)),d[a++]=Number(o.vertexColors)|Number(o.flatShading)<<1,d[a++]=Number(o.transparent),a+=i(o,`map`,d,a),a+=i(o,`metalnessMap`,d,a),a+=i(o,`roughnessMap`,d,a),a+=i(o,`transmissionMap`,d,a),a+=i(o,`emissiveMap`,d,a),a+=i(o,`normalMap`,d,a),a+=i(o,`clearcoatMap`,d,a),a+=i(o,`clearcoatNormalMap`,d,a),a+=i(o,`clearcoatRoughnessMap`,d,a),a+=i(o,`sheenColorMap`,d,a),a+=i(o,`sheenRoughnessMap`,d,a),a+=i(o,`iridescenceMap`,d,a),a+=i(o,`iridescenceThicknessMap`,d,a),a+=i(o,`specularColorMap`,d,a),a+=i(o,`specularIntensityMap`,d,a),a+=i(o,`alphaMap`,d,a)}let f=ht(d.buffer);return this.hash===f?!1:(this.hash=f,this.needsUpdate=!0,!0)}},En=new k;function Dn(e){return e?`${e.uuid}:${e.version}`:null}function On(e,t){for(let n in t)n in e&&(e[n]=t[n])}var kn=class extends ae{constructor(e,t,r){let i={format:z,type:A,minFilter:L,magFilter:L,wrapS:n,wrapT:n,generateMipmaps:!1,...r};super(e,t,1,i),On(this.texture,i),this.texture.setTextures=(...e)=>{this.setTextures(...e)},this.hashes=[null];let a=new U(new An);this.fsQuad=a}setTextures(e,t,n=this.width,r=this.height){let i=e.getRenderTarget(),a=e.toneMapping,o=e.getClearAlpha();e.getClearColor(En);let s=t.length||1;(n!==this.width||r!==this.height||this.depth!==s)&&(this.setSize(n,r,s),this.hashes=Array(s).fill(null)),e.setClearColor(0,0),e.toneMapping=0;let c=this.fsQuad,l=this.hashes,u=!1;for(let n=0,r=s;n<r;n++){let r=t[n],i=Dn(r);r&&(l[n]!==i||r.isWebGLRenderTarget)&&(r.matrixAutoUpdate=!1,r.matrix.identity(),c.material.map=r,e.setRenderTarget(this,n),c.render(e),r.updateMatrix(),r.matrixAutoUpdate=!0,l[n]=i,u=!0)}return c.material.map=null,e.setClearColor(En,o),e.setRenderTarget(i),e.toneMapping=a,u}dispose(){super.dispose(),this.fsQuad.dispose()}},An=class extends O{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function jn(e,t=Math.random()){for(let n=e.length-1;n>0;n--){let r=Math.floor(t()*(n+1)),i=e[n];e[n]=e[r],e[r]=i}return e}var Mn=class{constructor(e,t,n=Math.random){let r=e**t,i=new Uint16Array(r),a=r;for(let e=0;e<r;e++)i[e]=e;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let e=0;e<r;e++)i[e]=e;a=0},this.reshuffle=function(){a=0},this.next=function(){let{samples:r}=this;a>=i.length&&(jn(i,n),this.reshuffle());let o=i[a++];for(let i=0;i<t;i++)r[i]=(o%e+n())/e,o=Math.floor(o/e);return r}}},Nn=class{constructor(e,t,n=Math.random){let r=0;for(let e of t)r+=e;let i=new Float32Array(r),a=[],o=0;for(let r of t){let t=new Mn(e,r,n);t.samples=new Float32Array(i.buffer,o,t.samples.length),o+=t.samples.length*4,a.push(t)}this.samples=i,this.strataCount=e,this.next=function(){for(let e of a)e.next();return i},this.reshuffle=function(){for(let e of a)e.reshuffle()},this.reset=function(){for(let e of a)e.reset()}}},Pn=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},Fn=class extends r{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,z,T),this.minFilter=d,this.magFilter=d,this.strata=n,this.sampler=null,this.generator=new Pn,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,n)}init(e=this.image.height,t=this.image.width,n=this.strata){let{image:r}=this;if(r.width===t&&r.height===e&&this.sampler!==null)return;let i=new Nn(n,Array(e*t).fill(4),this.random);r.width=t,r.height=e,r.data=i.samples,this.sampler=i,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function In(e,t=Math.random){for(let n=e.length-1;n>0;n--){let r=~~((t()-1e-6)*n),i=e[n];e[n]=e[r],e[r]=i}}function Ln(e,t){e.fill(0);for(let n=0;n<t;n++)e[n]=1}var Rn=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,n=1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==0)continue;let a=e[i];a<n&&(n=a,r=i)}return r}findCluster(){let{score:e,binaryPattern:t}=this,n=-1/0,r=-1;for(let i=0,a=t.length;i<a;i++){if(t[i]!==1)continue;let a=e[i];a>n&&(n=a,r=i)}return r}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),n=2*t+1,r=new Float32Array(n*n),i=e*e;for(let e=-t;e<=t;e++)for(let a=-t;a<=t;a++){let o=(t+a)*n+e+t,s=e*e+a*a;r[o]=Math.E**(-s/(2*i))}this.lookupTable=r,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let t=0,r=e.length;t<r;t++)if(e[t]===0){let r=~~(t/n),i=t-r*n;this.updateScore(i,r,1),e[t]=1}else e[t]=0}updateScore(e,t,n){let{size:r,score:i,lookupTable:a}=this,o=this.radius,s=2*o+1;for(let c=-o;c<=o;c++)for(let l=-o;l<=o;l++){let u=a[(o+l)*s+c+o],d=e+c;d=d<0?r+d:d%r;let f=t+l;f=f<0?r+f:f%r;let p=f*r+d;i[p]+=n*u}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,n=~~(e/t),r=e-n*t;this.updateScore(r,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}},zn=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Rn(1),this.savedSamples=new Rn(1)}generate(){let{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:r,size:i}=this;e.resize(i),e.setSigma(n);let a=Math.floor(i*i*r),o=e.binaryPattern;Ln(o,a),In(o,this.random);for(let t=0,n=o.length;t<n;t++)o[t]===1&&e.addPointIndex(t);for(;;){let t=e.findCluster();e.removePointIndex(t);let n=e.findVoid();if(t===n){e.addPointIndex(t);break}e.addPointIndex(n)}let s=new Uint32Array(i*i);t.copy(e);let c;for(c=e.count-1;c>=0;){let t=e.findCluster();e.removePointIndex(t),s[t]=c,c--}let l=i*i;for(c=t.count;c<l/2;){let e=t.findVoid();t.addPointIndex(e),s[e]=c,c++}for(t.invert();c<l;){let e=t.findCluster();t.removePointIndex(e),s[e]=c,c++}return{data:s,maxValue:l}}};function Bn(e){return e>=3?4:e}function Vn(e){switch(e){case 1:return h;case 2:return ie;default:return z}}var Hn=class extends r{constructor(e=64,t=1){super(new Float32Array(4),1,1,z,T),this.minFilter=d,this.magFilter=d,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,n=new zn;n.channels=e,n.size=t;let r=Bn(e),i=Vn(r);(this.image.width!==t||i!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*r),this.format=i,this.dispose());let a=this.image.data;for(let t=0,i=e;t<i;t++){let e=n.generate(),i=e.data,o=e.maxValue;for(let e=0,n=i.length;e<n;e++){let n=i[e]/o;a[e*r+t]=n}}this.needsUpdate=!0}},Un=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Wn=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Gn=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,Kn=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`,qn=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`,Jn=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`,Yn=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,Xn=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,Zn=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,Qn=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,$n=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,er=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,tr=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,nr=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,rr=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`,ir=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,ar=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,or=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,sr=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,cr=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,lr=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,ur=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,dr=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,fr=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,pr=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,mr=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,hr=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`,gr=class extends zt{onBeforeRender(){this.setDefine(`FEATURE_DOF`,this.physicalCamera.bokehSize===0?0:1),this.setDefine(`FEATURE_BACKGROUND_MAP`,+!!this.backgroundMap),this.setDefine(`FEATURE_FOG`,+!!this.materials.features.isUsed(`FOG`))}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:47},uniforms:{resolution:{value:new S},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new Yt},cameraWorldMatrix:{value:new C},invProjectionMatrix:{value:new C},bvh:{value:new He},attributesArray:{value:new gn},materialIndexAttribute:{value:new Be},materials:{value:new Tn},textures:{value:new kn().texture},lights:{value:new pn},iesProfiles:{value:new kn(360,180,{type:R,wrapS:P,wrapT:P}).texture},environmentIntensity:{value:1},environmentRotation:{value:new C},envMapInfo:{value:new en},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new C},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new Fn},stratifiedOffsetTexture:{value:new Hn(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Ge}
				${qe}
				${Ke}

				// uniform structs
				${Un}
				${Gn}
				${Wn}
				${Kn}
				${qn}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${rr}

				#elif RANDOM_TYPE == 1 	// Sobol

					${nr}
					${Ut}
					${Gt}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${nr}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${er}
				${Zn}
				${tr}
				${Qn}
				${$n}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${Xn}
				${Jn}
				${Yn}

				${lr}
				${or}
				${cr}
				${sr}
				${ar}
				${ir}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${mr}
				${dr}
				${hr}
				${ur}
				${fr}
				${pr}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}};function*_r(){let{_renderer:e,_fsQuad:t,_blendQuad:n,_primaryTarget:r,_blendTargets:a,_sobolTarget:o,_subframe:s,alpha:c,material:l}=this,u=new i,d=new i,f=n.material,[p,m]=a;for(;;){c?(f.opacity=this._opacityFactor/(this.samples+1),l.blending=0,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=1);let[i,a,h,g]=s,_=r.width,v=r.height;l.resolution.set(_*h,v*g),l.sobolTexture=o.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let y=this.tiles.x||1,b=this.tiles.y||1,x=y*b,S=Math.ceil(_*h),C=Math.ceil(v*g),w=Math.floor(i*_),T=Math.floor(a*v),E=Math.ceil(S/y),D=Math.ceil(C/b);for(let i=0;i<b;i++)for(let a=0;a<y;a++){let o=e.getRenderTarget(),s=e.autoClear,l=e.getScissorTest();e.getScissor(u),e.getViewport(d);let h=a,g=i;if(!this.stableTiles){let e=this._currentTile%(y*b);h=e%y,g=~~(e/y),this._currentTile=e+1}let _=b-g-1;r.scissor.set(w+h*E,T+_*D,Math.min(E,S-h*E),Math.min(D,C-_*D)),r.viewport.set(w,T,S,C),e.setRenderTarget(r),e.setScissorTest(!0),e.autoClear=!1,t.render(e),e.setViewport(d),e.setScissor(u),e.setScissorTest(l),e.setRenderTarget(o),e.autoClear=s,c&&(f.target1=p.texture,f.target2=r.texture,e.setRenderTarget(m),n.render(e),e.setRenderTarget(o)),this.samples+=1/x,a===y-1&&i===b-1&&(this.samples=Math.round(this.samples)),yield}[p,m]=[m,p]}}var vr=new k,yr=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener(`recompilation`,this._compileFunction),e.addEventListener(`recompilation`,this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new S(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new i(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new U(new gr),this._blendQuad=new U(new Bt),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new qt().generate(e),this._primaryTarget=new F(1,1,{format:z,type:T,magFilter:d,minFilter:d}),this._blendTargets=[new F(1,1,{format:z,type:T,magFilter:d,minFilter:d}),new F(1,1,{format:z,type:T,magFilter:d,minFilter:d})],this._compileFunction=()=>{let e=this.compileMaterial(this._fsQuad._mesh);e.then(()=>{this._compilePromise===e&&(this._compilePromise=null)}),this._compilePromise=e},this.material.addEventListener(`recompilation`,this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let n=0;e.projectionMatrix.elements[15]>0&&(n=1),e.isEquirectCamera&&(n=2),t.setDefine(`CAMERA_TYPE`,n),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,r=e.getRenderTarget(),i=e.getClearAlpha();e.getClearColor(vr),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(vr,i),e.setRenderTarget(r),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||=_r.call(this),this._task.next())}},Y=new S,br=new S,xr=new le,Sr=new k,Cr=class extends r{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,z,T,303,n,P,L,L),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:n}=this.image;for(let r=0;r<t;r++)for(let i=0;i<n;i++){br.set(t,n),Y.set(r/t,i/n),Y.x-=.5,Y.y=1-Y.y,xr.theta=Y.x*2*Math.PI,xr.phi=Y.y*Math.PI,xr.radius=1,this.generationCallback(xr,Y,br,Sr);let a=4*(i*t+r);e[a+0]=Sr.r,e[a+1]=Sr.g,e[a+2]=Sr.b,e[a+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}},wr=new s,Tr=class extends Cr{constructor(e=512){super(e,e),this.topColor=new k().set(16777215),this.bottomColor=new k().set(0),this.exponent=2,this.generationCallback=(e,t,n,r)=>{wr.setFromSpherical(e);let i=wr.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,i**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}},Er=class extends O{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}},Dr=class extends O{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${tr}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Or=class{constructor(e){this._renderer=e,this._quad=new U(new Dr)}generate(e,t=null,i=null){if(!e.isCubeTexture)throw Error(`CubeToEquirectMaterial: Source can only be cube textures.`);let a=e.images[0],o=this._renderer,s=this._quad;t===null&&(t=4*a.height),i===null&&(i=2*a.height);let c=new F(t,i,{type:T,colorSpace:a.colorSpace}),l=a.height,u=Math.log2(l)-2,d=1/l,f=1/(3*Math.max(2**u,112));s.material.defines.CUBEUV_MAX_MIP=`${u}.0`,s.material.defines.CUBEUV_TEXEL_WIDTH=f,s.material.defines.CUBEUV_TEXEL_HEIGHT=d,s.material.uniforms.envMap.value=e,s.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,s.material.needsUpdate=!0;let p=o.getRenderTarget(),m=o.autoClear;o.autoClear=!0,o.setRenderTarget(c),s.render(o),o.setRenderTarget(p),o.autoClear=m;let h=new Uint16Array(t*i*4),g=new Float32Array(t*i*4);o.readRenderTargetPixels(c,0,0,t,i,g),c.dispose();for(let e=0,t=g.length;e<t;e++)h[e]=y.toHalfFloat(g[e]);let _=new r(h,t,i,z,R);return _.minFilter=re,_.magFilter=L,_.wrapS=n,_.wrapT=n,_.mapping=303,_.needsUpdate=!0,_}dispose(){this._quad.dispose()}};function kr(e){return e.extensions.get(`EXT_float_blend`)}var Ar=new S,jr=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine(`FEATURE_MIS`,+!!e)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new Rt,this._pathTracer=new yr(e),this._queueReset=!1,this._clock=new ne,this._compilePromise=null,this._lowResPathTracer=new yr(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new U(new Er({map:null,transparent:!0,blending:0,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new S(1024,1024),this.rasterizeSceneCallback=(e,t)=>{this._renderer.render(e,t)},this.renderToCanvasCallback=(e,t,n)=>{let r=t.autoClear;t.autoClear=!1,n.render(t),t.autoClear=r},this.setScene(new ee,new u)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,n={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let r=this._generator;if(r.setObjects(e),this._buildAsync)return r.generateAsync(n.onProgress).then(n=>this._updateFromResults(e,t,n));{let n=r.generate();return this._updateFromResults(e,t,n)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,n=this._materials,r=this.textureSize,i=xn(n);e.textures.setTextures(t,i,r.x,r.y),e.materials.updateFrom(n,i),this.reset()}updateLights(){let e=this.scene,t=this._renderer,n=this._pathTracer.material,r=Sn(e),i=bn(r);n.lights.updateFrom(r,i),n.iesProfiles.setTextures(t,i),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&=(this._internalBackground.dispose(),null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new Tr(16);let n=this._colorBackground;n.topColor.equals(e.background)||(n.topColor.set(e.background),n.bottomColor.set(e.background),n.update()),t.backgroundMap=n,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let n=new Or(this._renderer).generate(e.background);this._internalBackground=n,t.backgroundMap=n,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment===null?0:e.environmentIntensity??1,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){let n=new Or(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(n)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,n){let{materials:r,geometry:i,bvh:a,bvhChanged:o,needsMaterialIndexUpdate:s}=n;this._materials=r;let c=this._pathTracer.material;return o&&(c.bvh.updateFrom(a),c.attributesArray.updateFrom(i.attributes.normal,i.attributes.tangent,i.attributes.uv,i.attributes.color)),s&&c.materialIndexAttribute.updateFrom(i.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,n=this._renderer,r=this._clock,i=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,i.material.opacity=0,r.start());let a=r.getDelta()*1e3,o=r.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=o&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!kr(n),e.alpha=t.alpha,this.renderToCanvas){let n=this._renderer,r=this.minSamples;if(o>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration===0?i.material.opacity=1:i.material.opacity=Math.min(i.material.opacity+a/this.fadeDuration,1)),!this.enablePathTracing||this.samples<r||i.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let r=i.material.opacity;i.material.opacity=1-i.material.opacity,i.material.map=e.target.texture,i.render(n),i.material.opacity=r}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&i.material.opacity>0&&(i.material.opacity<1&&(i.material.blending=this.dynamicLowRes?2:1),i.material.map=t.target.texture,this.renderToCanvasCallback(t.target,n,i),i.material.blending=0)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(Ar);let e=Math.floor(this.renderScale*Ar.x),t=Math.floor(this.renderScale*Ar.y);if(this._pathTracer.getSize(Ar),Ar.x!==e||Ar.y!==t){let n=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*n),Math.floor(t*n))}}}};function Mr(){let e=new u(V.fov,1,V.near,V.far),t=new s(...V.target);return e.position.fromArray(V.position),e.lookAt(t),e.updateMatrixWorld(!0),De(e,t)}function Nr({camera:e,leftPanelOcclusionWidth:t,rightPanelOcclusionWidth:n,snapshot:r,viewportSize:i}){e.fov=r.fov,e.near=r.near,e.far=r.far,e.aspect=i.width/i.height,e.position.fromArray(r.position),e.quaternion.fromArray(r.quaternion);let a=ke(i.width,i.height,n,t);a?e.setViewOffset(a.fullWidth,a.fullHeight,a.offsetX,a.offsetY,a.width,a.height):e.clearViewOffset(),e.updateProjectionMatrix(),e.updateMatrixWorld(!0)}var X={bloom:{radius:.2,strength:.12,threshold:1.05},bounces:8,denoise:{albedoFloor:.04,atrousPasses:3,colorPhi:.24,depthPhi:.08,depthRelativePhi:.018,detailProtection:.82,diffuseBlend:.72,diffuseIlluminationPhi:.42,enabled:!0,emissiveFireflyRecovery:{clampBlend:.9,compositeBoost:.42,darkReceiverHighLuminance:.42,darkReceiverLowLuminance:.08,diffuseBlendBoost:.34,enabled:!0,extremeEmissionLuminance:9,localDensityMin:.055,localMinLuminance:.18,localMinRatio:2.1,localSigma:2.2,neighborReject:.92,rawProtectionReduction:.58,receiverMetalnessMax:.25,receiverRoughnessMin:.5,sceneRiskThreshold:.16,smallEmitterAreaRatio:.035,strongEmissionLuminance:1.35,wideEmitterAreaRatio:.22},fireflyClampSigma:3,fireflyMinRatio:2.4,materialPhi:.18,normalPhi:.08,residualBlend:.55,transparencyInteriorProtection:.28,transparencyProtection:.92},emissionGain:1,emissiveMeshSampling:{darkReceiverHighLuminance:.42,darkReceiverLowLuminance:.08,enabled:!0,extremeEmissionLuminance:9,maxTriangles:512,receiverMetalnessMax:.25,receiverRoughnessMin:.5,sceneRiskThreshold:.16,smallEmitterAreaRatio:.035,strongEmissionLuminance:1.35,wideEmitterAreaRatio:.22},environmentFillIntensity:.22,filterGlossyFactor:.55,interaction:{activeSampleLimit:1},maxSamples:128,maxSampleOptions:[128,256,512],maxTextureSize:1024,minSamples:1,renderDelayMs:0,scheduler:{inputPendingDelayMs:16},toneMappingExposure:1,tiles:[1,1]},Pr={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new k(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Fr=class e extends Ye{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new S(256,256):new S(e.x,e.y),this.clearColor=new k(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new F(i,o,{type:R}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new F(i,o,{type:R});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new F(i,o,{type:R});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),o=Math.round(o/2)}let c=Pr;this.highPassUniforms=N.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new O({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new S(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new s(1,1,1),new s(1,1,1),new s(1,1,1),new s(1,1,1),new s(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(Je.uniforms),this.blendMaterial=new O({uniforms:this.copyUniforms,vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new k,this._oldClearAlpha=1,this._basic=new a,this._fsQuad=new U(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new S(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new O({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new S(.5,.5)},direction:{value:new S(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new O({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Fr.BlurDirectionX=new S(1,0),Fr.BlurDirectionY=new S(0,1);var Ir={},Lr={},Rr=`manifest3dPathTracingBloomRole`;function zr({assets:e,jointPreviewPosesByInstance:t,materialAnimationValuesByInstance:n,scene:r,worldMode:i}){Gr(r),Hr(r,i);let a=e.map(e=>Wr(r,e,{jointPreviewPoses:t[e.instanceId]??Ir,materialAnimationValues:n[e.instanceId]??Lr}));return r.updateMatrixWorld(!0),()=>{for(let e of a)r.remove(e.object),_e(e.sourceObject);Gr(r)}}function Br(e,{emissionGain:t=X.emissionGain}={}){let n=e,r=Xr(n.emissive,`#000000`),i=Zr(r)?0:(n.emissiveIntensity??0)*t,a=new v({alphaMap:n.alphaMap??null,alphaTest:n.alphaTest??0,aoMap:n.aoMap??null,color:Xr(n.color,`#ffffff`),emissive:r,emissiveIntensity:i,envMap:n.envMap??null,map:n.map??null,metalness:n.metalness??0,metalnessMap:n.metalnessMap??null,name:n.name,normalMap:n.normalMap??null,opacity:n.opacity,roughness:n.roughness??1,roughnessMap:n.roughnessMap??null,side:n.side,transparent:n.transparent||n.opacity<1});return a.depthTest=n.depthTest,a.depthWrite=n.depthWrite,a.visible=n.visible,a}function Vr(e,t={}){let n=new Map,r=new Set;e.traverse(e=>{if(Qr(e)){if(Array.isArray(e.material)){e.material=e.material.map(e=>(r.add(e),Yr(e,n,t)));return}r.add(e.material),e.material=Yr(e.material,n,t)}});for(let e of r)e.dispose();return[...n.values()]}function Hr(e,t){let n=je(t);e.background=new k(n.backgroundColor),e.fog=new l(n.fog.color,n.fog.density);let r=new f(n.lights.hemisphere.skyColor,n.lights.hemisphere.groundColor,n.lights.hemisphere.intensity);e.add(r),e.environment=Ur(t),e.environmentIntensity=n.lights.fill.intensity*X.environmentFillIntensity;let i=new b(n.lights.key.color,n.lights.key.intensity);i.name=`Manifest3D path tracing key directional light`,i.position.set(...n.lights.key.position),i.castShadow=!0,e.add(i);let a=new c(new D(500,500),new v({color:n.ground.color,metalness:n.ground.metalness,roughness:n.ground.roughness}));a.name=`Manifest3D path tracing ground plane`,a.receiveShadow=!0,a.rotation.x=-Math.PI/2,e.add(a)}function Ur(e){let t=je(e),n=new Tr(32);return n.topColor.set(t.lights.hemisphere.skyColor),n.bottomColor.set(t.ground.color).lerp(new k(t.lights.fill.color),.35),n.exponent=1.7,n.update(),n}function Wr(e,t,{jointPreviewPoses:n,materialAnimationValues:r}){let i=Pe(t.asset);Fe(i,n),ye(i,r),Vr(i.group);let a=Jr(i.group),o=new m,s=new m;return o.name=`${t.asset.name} path tracing viewport root`,o.userData[Rr]=`asset`,o.position.set(t.transform.position[0]+a.anchorOffset.x,t.transform.position[1]+a.anchorOffset.y,t.transform.position[2]+a.anchorOffset.z),o.rotation.set(...t.transform.rotation),o.scale.set(...t.transform.scale),s.position.copy(a.center).multiplyScalar(-1),s.add(i.group),o.add(s),e.add(o),{object:o,sourceObject:i.group}}function Gr(e){for(let t of[...e.children])e.remove(t),qr(t);Kr(e.background)&&e.background.dispose(),Kr(e.environment)&&e.environment.dispose(),e.background=null,e.environment=null,e.environmentIntensity=1,e.fog=null}function Kr(e){return!!e?.isTexture}function qr(e){e.traverse(e=>{if(Qr(e)){e.geometry.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.dispose()}})}function Jr(e){e.updateWorldMatrix(!0,!0);let t=new ue().setFromObject(e);if(t.isEmpty()){let e=new s;return{anchorOffset:e.clone(),center:e}}let n=t.getCenter(new s),r=n.clone();return r.y-=t.min.y,{anchorOffset:r,center:n}}function Yr(e,t,n){let r=t.get(e);if(r)return r;let i=Br(e,n);return t.set(e,i),i}function Xr(e,t){return e?.isColor?e.clone():new k(t)}function Zr(e){return e.r<=1e-6&&e.g<=1e-6&&e.b<=1e-6}function Qr(e){return e.isMesh===!0}function $r(e){let t=e;for(;t;){if(t.userData[Rr]===`asset`)return!0;t=t.parent}return!1}var ei=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ti=`
  uniform sampler2D tInput;
  uniform sampler2D tMask;
  varying vec2 vUv;

  void main() {
    vec3 color = texture2D(tInput, vUv).rgb;
    float mask = step(0.5, texture2D(tMask, vUv).r);

    gl_FragColor = vec4(color * mask, 1.0);
  }
`,ni=`
  uniform sampler2D tBase;
  uniform sampler2D tBloom;
  varying vec2 vUv;

  void main() {
    vec3 baseColor = texture2D(tBase, vUv).rgb;
    vec3 bloomColor = texture2D(tBloom, vUv).rgb;

    gl_FragColor = vec4(baseColor + bloomColor, 1.0);
  }
`;function ri(){let e=new ee,t=new E(-1,1,1,-1,0,1),n=new c(new D(2,2)),r=new a({color:`#ffffff`,side:2}),i=new O({depthTest:!1,depthWrite:!1,fragmentShader:ti,name:`Manifest3D path tracing asset bloom color mask material`,uniforms:{tInput:{value:null},tMask:{value:null}},vertexShader:ei}),o=new O({depthTest:!1,depthWrite:!1,fragmentShader:ni,name:`Manifest3D path tracing asset bloom composite material`,uniforms:{tBase:{value:null},tBloom:{value:null}},vertexShader:ei}),s=new Fr(new S(1,1),X.bloom.strength,X.bloom.radius,X.bloom.threshold);e.add(n);let l=1,u=1,d=ci(l,u),f=si(l,u,`asset-color`),p=si(l,u,`combined`),m=si(l,u,`bloom-scratch`);function h(e,t,n){let r=Math.max(1,Math.floor(e*n)),i=Math.max(1,Math.floor(t*n));l===r&&u===i||(l=r,u=i,d.setSize(l,u),f.setSize(l,u),p.setSize(l,u),m.setSize(l,u),s.setSize(l,u))}function g(){d.dispose(),f.dispose(),p.dispose(),m.dispose(),r.dispose(),i.dispose(),o.dispose(),s.dispose(),n.geometry.dispose()}function _({camera:e,inputTexture:t,renderer:n,scene:a}){let c=n.getRenderTarget(),l=a.overrideMaterial,u=n.autoClear,h=new k,g=n.getClearAlpha();n.getClearColor(h);try{return ii(n,a,e,d,r),i.uniforms.tInput.value=t,i.uniforms.tMask.value=d.texture,v(n,i,f),s.renderToScreen=!1,s.render(n,m,f,0,!1),o.uniforms.tBase.value=t,o.uniforms.tBloom.value=s.renderTargetsHorizontal[0].texture,v(n,o,p),p.texture}finally{a.overrideMaterial=l,n.setRenderTarget(c),n.setClearColor(h,g),n.autoClear=u}}function v(r,i,a){n.material=i,r.setRenderTarget(a),r.clear(!0,!1,!1),r.render(e,t)}return{dispose:g,render:_,setSize:h}}function ii(e,t,n,r,i){let a=ai(t),o=t.background,s=t.overrideMaterial;t.background=null,t.overrideMaterial=i,e.autoClear=!0,e.setClearColor(0,1),e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n),t.background=o,t.overrideMaterial=s,oi(a)}function ai(e){let t=[];return e.traverse(e=>{li(e)&&(t.push({object:e,visible:e.visible}),e.visible=e.visible&&$r(e))}),t}function oi(e){for(let t of e)t.object.visible=t.visible}function si(e,t,n){let r=new F(e,t,{depthBuffer:!1,format:z,magFilter:L,minFilter:L,stencilBuffer:!1,type:R});return r.texture.name=`Manifest3D path tracing asset bloom ${n}`,r.texture.colorSpace=``,r}function ci(e,t){let n=new F(e,t,{depthBuffer:!0,format:z,magFilter:d,minFilter:d,stencilBuffer:!1,type:A});return n.texture.name=`Manifest3D path tracing asset bloom mask`,n.texture.colorSpace=``,n}function li(e){return e.isMesh===!0}var ui=new s(.2126,.7152,.0722);function di(e,t=X.denoise.emissiveFireflyRecovery){return fi(pi(e,t),t)}function fi(e,t=X.denoise.emissiveFireflyRecovery){if(!t.enabled||e.maxEmissiveLuminance<=0||e.roughDiffuseReceiverArea<=0||e.compactEmitterRisk<=0)return 0;let n=e.darkDiffuseReceiverArea/e.roughDiffuseReceiverArea,r=e.darkDiffuseReceiverArea/Math.max(e.emissiveArea,1e-6),i=Math.max(Z(.18,.72,n),Z(1.5,10,r)*.8),a=e.compactEmitterRisk*i;return Z(t.sceneRiskThreshold,1,a)}function pi(e,t=X.denoise.emissiveFireflyRecovery){let n=[],r=0,i=0,a=0,o=0;return e.updateMatrixWorld(!0),e.traverse(e=>{if(!xi(e))return;let s=vi(e),c=Array.isArray(e.material)?e.material:[e.material],l=s/Math.max(c.length,1);for(let e of c){let s=e,c=_i(s);if(c>0){let e=Math.max(l,1e-6);n.push({area:e,luminance:c}),i+=e,a=Math.max(a,c);continue}if(!mi(s,t))continue;let u=Math.max(l,0),d=gi(s),f=1-Z(t.darkReceiverLowLuminance,t.darkReceiverHighLuminance,d);o+=u,r+=u*f}}),{compactEmitterRisk:n.reduce((e,n)=>{let r=n.area/Math.max(o+n.area,1e-6),i=1-Z(t.smallEmitterAreaRatio,t.wideEmitterAreaRatio,r),a=Z(t.strongEmissionLuminance,t.extremeEmissionLuminance,n.luminance),s=Z(t.extremeEmissionLuminance*.65,t.extremeEmissionLuminance,n.luminance),c=a*Math.max(i,s*.75);return Math.max(e,c)},0),darkDiffuseReceiverArea:r,emissiveArea:i,maxEmissiveLuminance:a,roughDiffuseReceiverArea:o}}function mi(e,t){return!hi(e)&&(e.roughness??1)>=t.receiverRoughnessMin&&(e.metalness??0)<=t.receiverMetalnessMax}function hi(e){return!!e.transparent||(e.opacity??1)<.999}function gi(e){let t=e.color??new k(1,1,1);return t.r*ui.x+t.g*ui.y+t.b*ui.z}function _i(e){let t=e.emissive??new k(0,0,0),n=Math.max(e.emissiveIntensity??0,0);return(t.r*ui.x+t.g*ui.y+t.b*ui.z)*n}function vi(e){let t=e.geometry.attributes.position;if(!t)return bi(e);let n=e.geometry.index,r=new s,i=new s,a=new s,o=0;if(n)for(let s=0;s+2<n.count;s+=3)r.fromBufferAttribute(t,n.getX(s)).applyMatrix4(e.matrixWorld),i.fromBufferAttribute(t,n.getX(s+1)).applyMatrix4(e.matrixWorld),a.fromBufferAttribute(t,n.getX(s+2)).applyMatrix4(e.matrixWorld),o+=yi(r,i,a);else for(let n=0;n+2<t.count;n+=3)r.fromBufferAttribute(t,n).applyMatrix4(e.matrixWorld),i.fromBufferAttribute(t,n+1).applyMatrix4(e.matrixWorld),a.fromBufferAttribute(t,n+2).applyMatrix4(e.matrixWorld),o+=yi(r,i,a);return o>0?o:bi(e)}function yi(e,t,n){return t.clone().sub(e).cross(n.clone().sub(e)).length()*.5}function bi(e){let t=new ue().setFromObject(e);if(t.isEmpty())return 0;let n=t.getSize(new s);return Math.max(2*(n.x*n.y+n.x*n.z+n.y*n.z),0)}function xi(e){return e.isMesh===!0&&e.visible}function Z(e,t,n){if(e===t)return n<e?0:1;let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var Si=4,Ci=997,wi=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ti=`
  uniform float uCameraFar;
  varying vec2 vUv;
  varying vec3 vViewNormal;
  varying float vLinearDepth;

  void main() {
    vUv = uv;
    vViewNormal = normalize(normalMatrix * normal);

    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vLinearDepth = clamp(-viewPosition.z / max(uCameraFar, 0.0001), 0.0, 1.0);
    gl_Position = projectionMatrix * viewPosition;
  }
`,Ei=`
  uniform sampler2D tAlphaMap;
  uniform sampler2D tColorMap;
  uniform float uAlphaTest;
  uniform float uOpacity;
  uniform float uUsesAlphaMap;
  uniform float uUsesColorMap;
  varying vec2 vUv;
  varying vec3 vViewNormal;
  varying float vLinearDepth;

  float denoiseGuideAlpha() {
    float alpha = uOpacity;

    if (uUsesAlphaMap > 0.5) {
      alpha *= texture2D(tAlphaMap, vUv).g;
    }

    if (uUsesColorMap > 0.5) {
      alpha *= texture2D(tColorMap, vUv).a;
    }

    return alpha;
  }

  void denoiseDiscardTransparentCutout() {
    float alpha = denoiseGuideAlpha();

    if (alpha <= max(uAlphaTest, 0.001)) {
      discard;
    }
  }
`,Di=`
  ${Ei}

  void main() {
    denoiseDiscardTransparentCutout();

    gl_FragColor = vec4(normalize(vViewNormal) * 0.5 + 0.5, vLinearDepth);
  }
`,Oi=`
  ${Ei}
  uniform float uEmissiveProtection;
  uniform float uObjectKey;
  uniform float uRoughness;
  uniform float uTransparent;

  void main() {
    denoiseDiscardTransparentCutout();

    float alpha = denoiseGuideAlpha();
    float transparencyProtection = max(uTransparent, 1.0 - clamp(alpha, 0.0, 1.0));

    gl_FragColor = vec4(
      clamp(transparencyProtection, 0.0, 1.0),
      clamp(uRoughness, 0.0, 1.0),
      clamp(uEmissiveProtection, 0.0, 1.0),
      uObjectKey
    );
  }
`,ki=`
  ${Ei}
  uniform sampler2D tMetalnessMap;
  uniform float uMetalness;
  uniform float uUsesMetalnessMap;
  uniform vec3 uBaseColor;

  void main() {
    denoiseDiscardTransparentCutout();

    vec3 albedo = uBaseColor;
    float metalness = uMetalness;

    if (uUsesColorMap > 0.5) {
      albedo *= texture2D(tColorMap, vUv).rgb;
    }

    if (uUsesMetalnessMap > 0.5) {
      metalness *= texture2D(tMetalnessMap, vUv).b;
    }

    gl_FragColor = vec4(max(albedo, vec3(0.0)), clamp(metalness, 0.0, 1.0));
  }
`,Ai=`
  float denoiseLuminance(vec3 color) {
    return dot(max(color, vec3(0.0)), vec3(0.2126, 0.7152, 0.0722));
  }

  float denoiseCompressedLuminance(vec3 color) {
    return log(1.0 + denoiseLuminance(color));
  }

  vec3 denoiseCompressedColor(vec3 color) {
    return log(vec3(1.0) + max(color, vec3(0.0)));
  }

  vec3 denoiseDecodeNormal(vec3 encodedNormal) {
    return normalize(encodedNormal * 2.0 - 1.0);
  }

  float denoiseObjectWeight(float centerKey, float sampleKey) {
    return abs(centerKey - sampleKey) > 0.0015 ? 0.0 : 1.0;
  }

  float denoiseMaterialWeight(vec4 centerMaterial, vec4 sampleMaterial, float materialPhi) {
    float materialDelta =
      abs(centerMaterial.r - sampleMaterial.r) * 2.0 +
      abs(centerMaterial.g - sampleMaterial.g) +
      abs(centerMaterial.b - sampleMaterial.b) * 1.5;

    return exp(-materialDelta / max(materialPhi, 0.0001));
  }

  float denoiseAlbedoWeight(vec4 centerAlbedo, vec4 sampleAlbedo) {
    float albedoDelta =
      length(centerAlbedo.rgb - sampleAlbedo.rgb) +
      abs(centerAlbedo.a - sampleAlbedo.a) * 1.4;

    return exp(-albedoDelta / 0.28);
  }

  float denoiseDiffuseConfidence(vec4 materialGuide, vec4 albedoGuide, float guideEdge) {
    float opaque = 1.0 - materialGuide.r;
    float rough = smoothstep(0.45, 0.92, materialGuide.g);
    float dielectric = 1.0 - smoothstep(0.04, 0.36, albedoGuide.a);
    float nonEmissive = 1.0 - materialGuide.b;
    float broadSurface = 1.0 - guideEdge;

    return clamp(opaque * rough * dielectric * nonEmissive * broadSurface, 0.0, 1.0);
  }

  float denoiseTransparentInteriorConfidence(vec4 materialGuide, float guideEdge) {
    return clamp(materialGuide.r * (1.0 - guideEdge) * (1.0 - materialGuide.b), 0.0, 1.0);
  }

  float denoiseDepthWeight(float centerDepth, float sampleDepth, float depthPhi, float depthRelativePhi) {
    float depthTolerance = max(depthPhi + centerDepth * depthRelativePhi, 0.000001);

    return exp(-abs(sampleDepth - centerDepth) / depthTolerance);
  }

  float denoiseGeometryEdge(
    sampler2D geometryGuide,
    sampler2D materialGuide,
    vec2 uv,
    vec2 texelSize,
    float depthPhi,
    float depthRelativePhi
  ) {
    vec4 centerGeometry = texture2D(geometryGuide, uv);
    vec4 centerMaterial = texture2D(materialGuide, uv);
    vec3 centerNormal = denoiseDecodeNormal(centerGeometry.rgb);
    float centerDepth = centerGeometry.a;
    float edge = 0.0;

    for (int i = 0; i < 4; i++) {
      vec2 direction = vec2(0.0);

      if (i == 0) {
        direction = vec2(1.0, 0.0);
      } else if (i == 1) {
        direction = vec2(-1.0, 0.0);
      } else if (i == 2) {
        direction = vec2(0.0, 1.0);
      } else {
        direction = vec2(0.0, -1.0);
      }

      vec2 sampleUv = clamp(uv + direction * texelSize, vec2(0.0), vec2(1.0));
      vec4 sampleGeometry = texture2D(geometryGuide, sampleUv);
      vec4 sampleMaterial = texture2D(materialGuide, sampleUv);
      vec3 sampleNormal = denoiseDecodeNormal(sampleGeometry.rgb);
      float normalDelta = 1.0 - max(dot(centerNormal, sampleNormal), 0.0);
      float depthTolerance = max(depthPhi + centerDepth * depthRelativePhi, 0.000001);
      float depthDelta = abs(sampleGeometry.a - centerDepth) / depthTolerance;
      float objectDelta = 1.0 - denoiseObjectWeight(centerMaterial.a, sampleMaterial.a);
      float materialDelta = 1.0 - denoiseMaterialWeight(centerMaterial, sampleMaterial, 0.12);

      edge = max(edge, normalDelta * 5.0);
      edge = max(edge, depthDelta);
      edge = max(edge, objectDelta);
      edge = max(edge, materialDelta);
    }

    return clamp(edge, 0.0, 1.0);
  }

  float denoiseRawProtection(
    vec4 materialGuide,
    float guideEdge,
    float detailProtection,
    float transparencyInteriorProtection,
    float transparencyProtection
  ) {
    float transparentEdge = smoothstep(0.12, 0.85, guideEdge);
    float transparentProtection = materialGuide.r * mix(
      transparencyInteriorProtection,
      transparencyProtection,
      transparentEdge
    );
    float emissiveProtection = materialGuide.b * 0.85;
    float edgeProtection = guideEdge * detailProtection;

    return clamp(max(max(transparentProtection, emissiveProtection), edgeProtection), 0.0, 1.0);
  }
`,ji=`
  uniform sampler2D tGuideAlbedo;
  uniform sampler2D tGuideGeometry;
  uniform sampler2D tGuideMaterial;
  uniform sampler2D tInput;
  uniform vec2 uTexelSize;
  uniform float uDarkReceiverHighLuminance;
  uniform float uDarkReceiverLowLuminance;
  uniform float uDepthPhi;
  uniform float uDepthRelativePhi;
  uniform float uLocalDensityMin;
  uniform float uLocalMinLuminance;
  uniform float uLocalMinRatio;
  uniform float uLocalSigma;
  uniform float uMaterialPhi;
  uniform float uNormalPhi;
  uniform float uRecoveryStrength;
  varying vec2 vUv;

  ${Ai}

  float denoiseFireflyConfidenceKernelWeight(int x, int y) {
    vec2 offset = vec2(float(x), float(y));

    return exp(-dot(offset, offset) / 5.0);
  }

  float denoiseFireflyConfidenceSurfaceWeight(
    vec4 centerAlbedo,
    vec4 centerGeometry,
    vec4 centerMaterial,
    vec3 centerNormal,
    float centerDepth,
    vec4 sampleAlbedo,
    vec4 sampleGeometry,
    vec4 sampleMaterial
  ) {
    vec3 sampleNormal = denoiseDecodeNormal(sampleGeometry.rgb);
    float normalWeight = exp(
      -(1.0 - max(dot(centerNormal, sampleNormal), 0.0)) / max(uNormalPhi, 0.0001)
    );
    float depthWeight = denoiseDepthWeight(
      centerDepth,
      sampleGeometry.a,
      uDepthPhi,
      uDepthRelativePhi
    );
    float objectWeight = denoiseObjectWeight(centerMaterial.a, sampleMaterial.a);
    float materialWeight = denoiseMaterialWeight(centerMaterial, sampleMaterial, uMaterialPhi);
    float albedoWeight = denoiseAlbedoWeight(centerAlbedo, sampleAlbedo);
    float sampleDiffuseSurface =
      (1.0 - sampleMaterial.r) *
      smoothstep(0.45, 0.92, sampleMaterial.g) *
      (1.0 - smoothstep(0.04, 0.36, sampleAlbedo.a)) *
      (1.0 - sampleMaterial.b);

    return normalWeight *
      depthWeight *
      objectWeight *
      materialWeight *
      albedoWeight *
      sampleDiffuseSurface;
  }

  void main() {
    if (uRecoveryStrength <= 0.0001) {
      gl_FragColor = vec4(0.0);
      return;
    }

    vec3 centerColor = texture2D(tInput, vUv).rgb;
    vec4 centerAlbedo = texture2D(tGuideAlbedo, vUv);
    vec4 centerGeometry = texture2D(tGuideGeometry, vUv);
    vec4 centerMaterial = texture2D(tGuideMaterial, vUv);
    vec3 centerNormal = denoiseDecodeNormal(centerGeometry.rgb);
    float centerDepth = centerGeometry.a;
    float guideEdge = denoiseGeometryEdge(
      tGuideGeometry,
      tGuideMaterial,
      vUv,
      uTexelSize,
      uDepthPhi,
      uDepthRelativePhi
    );
    float darkReceiver = 1.0 - smoothstep(
      uDarkReceiverLowLuminance,
      uDarkReceiverHighLuminance,
      denoiseLuminance(centerAlbedo.rgb)
    );
    float surfaceConfidence =
      denoiseDiffuseConfidence(centerMaterial, centerAlbedo, guideEdge) *
      darkReceiver *
      uRecoveryStrength;

    if (surfaceConfidence <= 0.0001) {
      gl_FragColor = vec4(0.0);
      return;
    }

    float centerLum = denoiseLuminance(centerColor);
    float centerCompressedLum = denoiseCompressedLuminance(centerColor);
    float sumWeight = 0.0;
    float sumLum = 0.0;
    float sumCompressedLum = 0.0;
    float sumCompressedLumSq = 0.0;

    for (int y = -2; y <= 2; y++) {
      for (int x = -2; x <= 2; x++) {
        if (x == 0 && y == 0) {
          continue;
        }

        vec2 sampleUv = clamp(vUv + vec2(float(x), float(y)) * uTexelSize, vec2(0.0), vec2(1.0));
        vec3 sampleColor = texture2D(tInput, sampleUv).rgb;
        vec4 sampleAlbedo = texture2D(tGuideAlbedo, sampleUv);
        vec4 sampleGeometry = texture2D(tGuideGeometry, sampleUv);
        vec4 sampleMaterial = texture2D(tGuideMaterial, sampleUv);
        float surfaceWeight = denoiseFireflyConfidenceSurfaceWeight(
          centerAlbedo,
          centerGeometry,
          centerMaterial,
          centerNormal,
          centerDepth,
          sampleAlbedo,
          sampleGeometry,
          sampleMaterial
        );
        float weight = denoiseFireflyConfidenceKernelWeight(x, y) * surfaceWeight;
        float sampleLum = denoiseLuminance(sampleColor);
        float sampleCompressedLum = log(1.0 + sampleLum);

        sumWeight += weight;
        sumLum += sampleLum * weight;
        sumCompressedLum += sampleCompressedLum * weight;
        sumCompressedLumSq += sampleCompressedLum * sampleCompressedLum * weight;
      }
    }

    float safeWeight = max(sumWeight, 0.0001);
    float meanLum = sumLum / safeWeight;
    float meanCompressedLum = sumCompressedLum / safeWeight;
    float varianceCompressedLum = max(
      (sumCompressedLumSq / safeWeight) - (meanCompressedLum * meanCompressedLum),
      0.0
    );
    float sigmaCompressedLum = sqrt(varianceCompressedLum);
    float limitCompressedLum =
      meanCompressedLum + sigmaCompressedLum * uLocalSigma;
    float directSigmaConfidence = smoothstep(
      0.0,
      1.0,
      (centerCompressedLum - limitCompressedLum) /
        max(sigmaCompressedLum * 0.75, 0.08)
    );
    float directRatioConfidence = smoothstep(
      uLocalMinRatio,
      uLocalMinRatio * 1.6,
      centerLum / max(meanLum, 0.0001)
    );
    float directFloorConfidence = smoothstep(
      uLocalMinLuminance,
      uLocalMinLuminance * 3.0,
      centerLum
    );
    float directConfidence =
      surfaceConfidence *
      directSigmaConfidence *
      directRatioConfidence *
      directFloorConfidence;
    float brightNeighborWeight = 0.0;

    for (int y = -2; y <= 2; y++) {
      for (int x = -2; x <= 2; x++) {
        vec2 sampleUv = clamp(vUv + vec2(float(x), float(y)) * uTexelSize, vec2(0.0), vec2(1.0));
        vec3 sampleColor = texture2D(tInput, sampleUv).rgb;
        vec4 sampleAlbedo = texture2D(tGuideAlbedo, sampleUv);
        vec4 sampleGeometry = texture2D(tGuideGeometry, sampleUv);
        vec4 sampleMaterial = texture2D(tGuideMaterial, sampleUv);
        float surfaceWeight = denoiseFireflyConfidenceSurfaceWeight(
          centerAlbedo,
          centerGeometry,
          centerMaterial,
          centerNormal,
          centerDepth,
          sampleAlbedo,
          sampleGeometry,
          sampleMaterial
        );
        float weight = denoiseFireflyConfidenceKernelWeight(x, y) * surfaceWeight;
        float sampleLum = denoiseLuminance(sampleColor);
        float sampleCompressedLum = log(1.0 + sampleLum);
        float brightConfidence =
          smoothstep(
            limitCompressedLum,
            limitCompressedLum + max(sigmaCompressedLum, 0.08),
            sampleCompressedLum
          ) *
          smoothstep(
            uLocalMinRatio,
            uLocalMinRatio * 1.35,
            sampleLum / max(meanLum, 0.0001)
          ) *
          smoothstep(
            uLocalMinLuminance,
            uLocalMinLuminance * 2.5,
            sampleLum
          );

        brightNeighborWeight += weight * brightConfidence;
      }
    }

    float localBrightDensity = brightNeighborWeight / safeWeight;
    float densityConfidence = smoothstep(
      uLocalDensityMin,
      uLocalDensityMin * 2.5,
      localBrightDensity
    ) * surfaceConfidence;
    float repairConfidence = max(directConfidence, densityConfidence * 0.65);

    gl_FragColor = vec4(
      clamp(directConfidence, 0.0, 1.0),
      clamp(surfaceConfidence, 0.0, 1.0),
      clamp(densityConfidence, 0.0, 1.0),
      clamp(repairConfidence, 0.0, 1.0)
    );
  }
`,Mi=`
  uniform sampler2D tFireflyConfidence;
  uniform sampler2D tGuideMaterial;
  uniform sampler2D tInput;
  uniform vec2 uTexelSize;
  uniform float uRecoveryClampBlend;
  uniform float uMinRatio;
  uniform float uThresholdSigma;
  varying vec2 vUv;

  ${Ai}

  void main() {
    vec3 center = texture2D(tInput, vUv).rgb;
    vec4 centerMaterial = texture2D(tGuideMaterial, vUv);
    float centerLum = denoiseLuminance(center);
    float centerCompressedLum = denoiseCompressedLuminance(center);
    float sumLum = 0.0;
    float sumCompressedLum = 0.0;
    float sumCompressedLumSq = 0.0;

    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 sampleUv = clamp(vUv + vec2(float(x), float(y)) * uTexelSize, vec2(0.0), vec2(1.0));
        vec3 sampleColor = texture2D(tInput, sampleUv).rgb;
        float sampleLum = denoiseLuminance(sampleColor);
        float sampleCompressedLum = log(1.0 + sampleLum);

        sumLum += sampleLum;
        sumCompressedLum += sampleCompressedLum;
        sumCompressedLumSq += sampleCompressedLum * sampleCompressedLum;
      }
    }

    float meanLum = sumLum / 9.0;
    float meanCompressedLum = sumCompressedLum / 9.0;
    float varianceCompressedLum = max(
      (sumCompressedLumSq / 9.0) - (meanCompressedLum * meanCompressedLum),
      0.0
    );
    float limitCompressedLum =
      meanCompressedLum + sqrt(varianceCompressedLum) * uThresholdSigma;
    float limitLum = max(exp(limitCompressedLum) - 1.0, meanLum);
    bool isOutlier =
      centerCompressedLum > limitCompressedLum &&
      centerLum > max(meanLum * uMinRatio, 0.0001) &&
      centerMaterial.b < 0.5;
    float recoveryConfidence = texture2D(tFireflyConfidence, vUv).r;
    float clampBlend = max(
      isOutlier ? 1.0 : 0.0,
      recoveryConfidence * uRecoveryClampBlend
    );

    if (clampBlend > 0.0001 && centerLum > 0.0001) {
      center = mix(center, center * (limitLum / centerLum), clamp(clampBlend, 0.0, 1.0));
    }

    gl_FragColor = vec4(center, 1.0);
  }
`,Ni=`
  uniform sampler2D tFireflyConfidence;
  uniform sampler2D tGuideAlbedo;
  uniform sampler2D tGuideGeometry;
  uniform sampler2D tGuideMaterial;
  uniform sampler2D tInput;
  uniform vec2 uTexelSize;
  uniform float uColorPhi;
  uniform float uDepthPhi;
  uniform float uDepthRelativePhi;
  uniform float uDetailProtection;
  uniform float uFireflyNeighborReject;
  uniform float uMaterialPhi;
  uniform float uNormalPhi;
  uniform float uStepWidth;
  uniform float uTransparencyInteriorProtection;
  uniform float uTransparencyProtection;
  varying vec2 vUv;

  ${Ai}

  float denoiseKernelWeight(int offset) {
    int magnitude = abs(offset);

    if (magnitude == 0) {
      return 0.375;
    }

    if (magnitude == 1) {
      return 0.25;
    }

    return 0.0625;
  }

  void main() {
    vec3 centerColor = texture2D(tInput, vUv).rgb;
    vec4 centerAlbedo = texture2D(tGuideAlbedo, vUv);
    vec4 centerGeometry = texture2D(tGuideGeometry, vUv);
    vec4 centerMaterial = texture2D(tGuideMaterial, vUv);
    vec3 centerNormal = denoiseDecodeNormal(centerGeometry.rgb);
    vec3 centerCompressedColor = denoiseCompressedColor(centerColor);
    float centerDepth = centerGeometry.a;
    float guideEdge = denoiseGeometryEdge(
      tGuideGeometry,
      tGuideMaterial,
      vUv,
      uTexelSize,
      uDepthPhi,
      uDepthRelativePhi
    );
    float rawProtection = denoiseRawProtection(
      centerMaterial,
      guideEdge,
      uDetailProtection,
      uTransparencyInteriorProtection,
      uTransparencyProtection
    );
    vec3 sumColor = vec3(0.0);
    float sumWeight = 0.0;

    for (int y = -2; y <= 2; y++) {
      for (int x = -2; x <= 2; x++) {
        vec2 offset = vec2(float(x), float(y)) * uTexelSize * uStepWidth;
        vec2 sampleUv = clamp(vUv + offset, vec2(0.0), vec2(1.0));
        vec3 sampleColor = texture2D(tInput, sampleUv).rgb;
        vec4 sampleFireflyConfidence = texture2D(tFireflyConfidence, sampleUv);
        vec4 sampleAlbedo = texture2D(tGuideAlbedo, sampleUv);
        vec4 sampleGeometry = texture2D(tGuideGeometry, sampleUv);
        vec4 sampleMaterial = texture2D(tGuideMaterial, sampleUv);
        vec3 sampleNormal = denoiseDecodeNormal(sampleGeometry.rgb);
        vec3 sampleCompressedColor = denoiseCompressedColor(sampleColor);
        float spatialWeight = denoiseKernelWeight(x) * denoiseKernelWeight(y);
        float colorWeight = exp(
          -length(sampleCompressedColor - centerCompressedColor) / max(uColorPhi, 0.0001)
        );
        float normalWeight = exp(
          -(1.0 - max(dot(centerNormal, sampleNormal), 0.0)) / max(uNormalPhi, 0.0001)
        );
        float depthWeight = denoiseDepthWeight(
          centerDepth,
          sampleGeometry.a,
          uDepthPhi,
          uDepthRelativePhi
        );
        float objectWeight = denoiseObjectWeight(centerMaterial.a, sampleMaterial.a);
        float materialWeight = denoiseMaterialWeight(centerMaterial, sampleMaterial, uMaterialPhi);
        float albedoWeight = denoiseAlbedoWeight(centerAlbedo, sampleAlbedo);
        float transparencyStepAttenuation = mix(
          1.0,
          0.34,
          max(centerMaterial.r, sampleMaterial.r) * smoothstep(1.0, 4.0, uStepWidth)
        );
        float fireflyVoteConfidence = max(
          sampleFireflyConfidence.r,
          sampleFireflyConfidence.a * 0.55
        );
        float fireflyVoteWeight = mix(
          1.0,
          max(1.0 - uFireflyNeighborReject, 0.02),
          clamp(fireflyVoteConfidence, 0.0, 1.0)
        );
        float weight =
          spatialWeight *
          colorWeight *
          normalWeight *
          depthWeight *
          objectWeight *
          materialWeight *
          albedoWeight *
          transparencyStepAttenuation *
          fireflyVoteWeight;

        sumColor += sampleColor * weight;
        sumWeight += weight;
      }
    }

    vec3 filteredColor = sumColor / max(sumWeight, 0.0001);
    gl_FragColor = vec4(mix(filteredColor, centerColor, rawProtection), 1.0);
  }
`,Pi=`
  uniform sampler2D tFireflyConfidence;
  uniform sampler2D tGuideAlbedo;
  uniform sampler2D tGuideGeometry;
  uniform sampler2D tGuideMaterial;
  uniform sampler2D tInput;
  uniform vec2 uTexelSize;
  uniform float uAlbedoFloor;
  uniform float uDepthPhi;
  uniform float uDepthRelativePhi;
  uniform float uDiffuseBlend;
  uniform float uDiffuseIlluminationPhi;
  uniform float uFireflyDiffuseBlendBoost;
  uniform float uFireflyNeighborReject;
  uniform float uMaterialPhi;
  uniform float uNormalPhi;
  uniform float uStepWidth;
  varying vec2 vUv;

  ${Ai}

  float denoiseDiffuseKernelWeight(int offset) {
    int magnitude = abs(offset);

    if (magnitude == 0) {
      return 0.375;
    }

    if (magnitude == 1) {
      return 0.25;
    }

    return 0.0625;
  }

  void main() {
    vec3 centerColor = texture2D(tInput, vUv).rgb;
    vec4 centerAlbedoGuide = texture2D(tGuideAlbedo, vUv);
    vec4 centerGeometry = texture2D(tGuideGeometry, vUv);
    vec4 centerMaterial = texture2D(tGuideMaterial, vUv);
    vec3 centerAlbedo = max(centerAlbedoGuide.rgb, vec3(uAlbedoFloor));
    vec3 centerNormal = denoiseDecodeNormal(centerGeometry.rgb);
    vec3 centerIllumination = centerColor / centerAlbedo;
    vec3 centerCompressedIllumination = denoiseCompressedColor(centerIllumination);
    float centerDepth = centerGeometry.a;
    float guideEdge = denoiseGeometryEdge(
      tGuideGeometry,
      tGuideMaterial,
      vUv,
      uTexelSize,
      uDepthPhi,
      uDepthRelativePhi
    );
    float diffuseConfidence = denoiseDiffuseConfidence(
      centerMaterial,
      centerAlbedoGuide,
      guideEdge
    );
    float recoveryRepairConfidence = texture2D(tFireflyConfidence, vUv).a;
    vec3 sumIllumination = vec3(0.0);
    float sumWeight = 0.0;

    for (int y = -2; y <= 2; y++) {
      for (int x = -2; x <= 2; x++) {
        vec2 offset = vec2(float(x), float(y)) * uTexelSize * uStepWidth;
        vec2 sampleUv = clamp(vUv + offset, vec2(0.0), vec2(1.0));
        vec3 sampleColor = texture2D(tInput, sampleUv).rgb;
        vec4 sampleFireflyConfidence = texture2D(tFireflyConfidence, sampleUv);
        vec4 sampleAlbedoGuide = texture2D(tGuideAlbedo, sampleUv);
        vec4 sampleGeometry = texture2D(tGuideGeometry, sampleUv);
        vec4 sampleMaterial = texture2D(tGuideMaterial, sampleUv);
        vec3 sampleAlbedo = max(sampleAlbedoGuide.rgb, vec3(uAlbedoFloor));
        vec3 sampleNormal = denoiseDecodeNormal(sampleGeometry.rgb);
        vec3 sampleIllumination = sampleColor / sampleAlbedo;
        vec3 sampleCompressedIllumination = denoiseCompressedColor(sampleIllumination);
        float spatialWeight = denoiseDiffuseKernelWeight(x) * denoiseDiffuseKernelWeight(y);
        float illuminationWeight = exp(
          -length(sampleCompressedIllumination - centerCompressedIllumination) /
          max(uDiffuseIlluminationPhi, 0.0001)
        );
        float normalWeight = exp(
          -(1.0 - max(dot(centerNormal, sampleNormal), 0.0)) / max(uNormalPhi, 0.0001)
        );
        float depthWeight = denoiseDepthWeight(
          centerDepth,
          sampleGeometry.a,
          uDepthPhi,
          uDepthRelativePhi
        );
        float objectWeight = denoiseObjectWeight(centerMaterial.a, sampleMaterial.a);
        float materialWeight = denoiseMaterialWeight(centerMaterial, sampleMaterial, uMaterialPhi);
        float albedoWeight = denoiseAlbedoWeight(centerAlbedoGuide, sampleAlbedoGuide);
        float sampleDiffuseSurface =
          (1.0 - sampleMaterial.r) *
          smoothstep(0.45, 0.92, sampleMaterial.g) *
          (1.0 - smoothstep(0.04, 0.36, sampleAlbedoGuide.a)) *
          (1.0 - sampleMaterial.b);
        float fireflyVoteConfidence = max(
          sampleFireflyConfidence.r,
          sampleFireflyConfidence.a * 0.55
        );
        float fireflyVoteWeight = mix(
          1.0,
          max(1.0 - uFireflyNeighborReject, 0.02),
          clamp(fireflyVoteConfidence, 0.0, 1.0)
        );
        float weight =
          spatialWeight *
          illuminationWeight *
          normalWeight *
          depthWeight *
          objectWeight *
          materialWeight *
          albedoWeight *
          sampleDiffuseSurface *
          fireflyVoteWeight;

        sumIllumination += sampleIllumination * weight;
        sumWeight += weight;
      }
    }

    vec3 filteredIllumination = sumIllumination / max(sumWeight, 0.0001);
    vec3 diffuseColor = filteredIllumination * centerAlbedo;
    float blendAmount = diffuseConfidence *
      min(1.0, uDiffuseBlend + recoveryRepairConfidence * uFireflyDiffuseBlendBoost);

    gl_FragColor = vec4(mix(centerColor, diffuseColor, blendAmount), 1.0);
  }
`,Fi=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tFireflyConfidence;
  uniform sampler2D tFiltered;
  uniform sampler2D tFirefly;
  uniform sampler2D tGuideAlbedo;
  uniform sampler2D tGuideGeometry;
  uniform sampler2D tGuideMaterial;
  uniform sampler2D tRaw;
  uniform vec2 uTexelSize;
  uniform float uDepthPhi;
  uniform float uDepthRelativePhi;
  uniform float uDetailProtection;
  uniform float uFireflyCompositeBoost;
  uniform float uFireflyRawProtectionReduction;
  uniform float uResidualBlend;
  uniform float uTransparencyInteriorProtection;
  uniform float uTransparencyProtection;
  varying vec2 vUv;

  ${Ai}

  void main() {
    vec3 rawColor = texture2D(tRaw, vUv).rgb;
    vec3 fireflyColor = texture2D(tFirefly, vUv).rgb;
    vec4 fireflyConfidence = texture2D(tFireflyConfidence, vUv);
    vec3 filteredColor = texture2D(tFiltered, vUv).rgb;
    vec3 diffuseColor = texture2D(tDiffuse, vUv).rgb;
    vec4 albedoGuide = texture2D(tGuideAlbedo, vUv);
    vec4 materialGuide = texture2D(tGuideMaterial, vUv);
    float guideEdge = denoiseGeometryEdge(
      tGuideGeometry,
      tGuideMaterial,
      vUv,
      uTexelSize,
      uDepthPhi,
      uDepthRelativePhi
    );
    float rawProtection = denoiseRawProtection(
      materialGuide,
      guideEdge,
      uDetailProtection,
      uTransparencyInteriorProtection,
      uTransparencyProtection
    );
    float diffuseConfidence = denoiseDiffuseConfidence(materialGuide, albedoGuide, guideEdge);
    float recoveryRepairConfidence = fireflyConfidence.a;
    rawProtection *= 1.0 - recoveryRepairConfidence * uFireflyRawProtectionReduction;
    float residual = length(denoiseCompressedColor(fireflyColor) - denoiseCompressedColor(filteredColor));
    float residualConfidence = max(
      smoothstep(0.025, 0.22, residual),
      recoveryRepairConfidence
    );
    float diffuseBlend = diffuseConfidence *
      (0.35 + residualConfidence * 0.65) *
      min(1.0, uResidualBlend + recoveryRepairConfidence * uFireflyCompositeBoost);
    vec3 denoisedColor = mix(filteredColor, diffuseColor, diffuseBlend);
    vec3 protectedColor = mix(fireflyColor, rawColor, materialGuide.b);

    gl_FragColor = vec4(mix(denoisedColor, protectedColor, rawProtection), 1.0);
  }
`;function Ii(e=X.denoise){let t=e.emissiveFireflyRecovery,n=new ee,r=new E(-1,1,1,-1,0,1),i=new c(new D(2,2)),a=new O({depthTest:!1,depthWrite:!1,fragmentShader:ji,name:`Manifest3D path tracing denoise emissive firefly confidence material`,uniforms:{tGuideAlbedo:{value:null},tGuideGeometry:{value:null},tGuideMaterial:{value:null},tInput:{value:null},uDarkReceiverHighLuminance:{value:t.darkReceiverHighLuminance},uDarkReceiverLowLuminance:{value:t.darkReceiverLowLuminance},uDepthPhi:{value:e.depthPhi},uDepthRelativePhi:{value:e.depthRelativePhi},uLocalDensityMin:{value:t.localDensityMin},uLocalMinLuminance:{value:t.localMinLuminance},uLocalMinRatio:{value:t.localMinRatio},uLocalSigma:{value:t.localSigma},uMaterialPhi:{value:e.materialPhi},uNormalPhi:{value:e.normalPhi},uRecoveryStrength:{value:0},uTexelSize:{value:new S(1,1)}},vertexShader:wi}),o=new O({depthTest:!1,depthWrite:!1,fragmentShader:Mi,name:`Manifest3D path tracing denoise firefly clamp material`,uniforms:{tFireflyConfidence:{value:null},tGuideMaterial:{value:null},tInput:{value:null},uMinRatio:{value:e.fireflyMinRatio},uRecoveryClampBlend:{value:t.clampBlend},uTexelSize:{value:new S(1,1)},uThresholdSigma:{value:e.fireflyClampSigma}},vertexShader:wi}),s=new O({depthTest:!1,depthWrite:!1,fragmentShader:Ni,name:`Manifest3D path tracing denoise adaptive à-trous material`,uniforms:{tFireflyConfidence:{value:null},tGuideAlbedo:{value:null},tGuideGeometry:{value:null},tGuideMaterial:{value:null},tInput:{value:null},uColorPhi:{value:e.colorPhi},uDepthPhi:{value:e.depthPhi},uDepthRelativePhi:{value:e.depthRelativePhi},uDetailProtection:{value:e.detailProtection},uFireflyNeighborReject:{value:t.neighborReject},uMaterialPhi:{value:e.materialPhi},uNormalPhi:{value:e.normalPhi},uStepWidth:{value:1},uTexelSize:{value:new S(1,1)},uTransparencyInteriorProtection:{value:e.transparencyInteriorProtection},uTransparencyProtection:{value:e.transparencyProtection}},vertexShader:wi}),l=new O({depthTest:!1,depthWrite:!1,fragmentShader:Pi,name:`Manifest3D path tracing denoise diffuse illumination material`,uniforms:{tFireflyConfidence:{value:null},tGuideAlbedo:{value:null},tGuideGeometry:{value:null},tGuideMaterial:{value:null},tInput:{value:null},uAlbedoFloor:{value:e.albedoFloor},uDepthPhi:{value:e.depthPhi},uDepthRelativePhi:{value:e.depthRelativePhi},uDiffuseBlend:{value:e.diffuseBlend},uDiffuseIlluminationPhi:{value:e.diffuseIlluminationPhi},uFireflyDiffuseBlendBoost:{value:t.diffuseBlendBoost},uFireflyNeighborReject:{value:t.neighborReject},uMaterialPhi:{value:e.materialPhi},uNormalPhi:{value:e.normalPhi},uStepWidth:{value:1},uTexelSize:{value:new S(1,1)}},vertexShader:wi}),u=new O({depthTest:!1,depthWrite:!1,fragmentShader:Fi,name:`Manifest3D path tracing denoise final detail composite material`,uniforms:{tDiffuse:{value:null},tFireflyConfidence:{value:null},tFiltered:{value:null},tFirefly:{value:null},tGuideAlbedo:{value:null},tGuideGeometry:{value:null},tGuideMaterial:{value:null},tRaw:{value:null},uDepthPhi:{value:e.depthPhi},uDepthRelativePhi:{value:e.depthRelativePhi},uDetailProtection:{value:e.detailProtection},uFireflyCompositeBoost:{value:t.compositeBoost},uFireflyRawProtectionReduction:{value:t.rawProtectionReduction},uResidualBlend:{value:e.residualBlend},uTexelSize:{value:new S(1,1)},uTransparencyInteriorProtection:{value:e.transparencyInteriorProtection},uTransparencyProtection:{value:e.transparencyProtection}},vertexShader:wi});n.add(i);let d=1,f=1,p=!1,m=new Map,h=Qi(d,f,`albedo`),g=Qi(d,f,`geometry`),_=Qi(d,f,`material`),v=Xi(d,f,`diffuse-a`),y=Xi(d,f,`diffuse-b`),b=Zi(d,f,`emissive-firefly-confidence`),x=Xi(d,f,`firefly`),C=Xi(d,f,`ping-a`),w=Xi(d,f,`ping-b`),T=Xi(d,f,`composite`);function A(){h.dispose(),g.dispose(),_.dispose(),v.dispose(),y.dispose(),b.dispose(),x.dispose(),C.dispose(),w.dispose(),T.dispose()}function j(){for(let e of m.values())e.albedo.dispose(),e.geometry.dispose(),e.material.dispose();m.clear()}function te(e,t,n){let r=Math.max(1,Math.floor(e*n)),i=Math.max(1,Math.floor(t*n));d===r&&f===i||(d=r,f=i,h.setSize(d,f),g.setSize(d,f),_.setSize(d,f),v.setSize(d,f),y.setSize(d,f),b.setSize(d,f),x.setSize(d,f),C.setSize(d,f),w.setSize(d,f),T.setSize(d,f),a.uniforms.uTexelSize.value.set(1/d,1/f),o.uniforms.uTexelSize.value.set(1/d,1/f),s.uniforms.uTexelSize.value.set(1/d,1/f),l.uniforms.uTexelSize.value.set(1/d,1/f),u.uniforms.uTexelSize.value.set(1/d,1/f))}function M(){p=!1,j()}function ne(){A(),j(),o.dispose(),a.dispose(),s.dispose(),l.dispose(),u.dispose(),i.geometry.dispose()}function N({camera:n,inputTexture:r,renderer:i,scene:c}){if(p)return Li(r);let d=i.getRenderTarget(),f=c.overrideMaterial,m=c.background,S=i.autoClear,E=new k,D=i.getClearAlpha();i.getClearColor(E);try{if(i.autoClear=!0,c.overrideMaterial=null,c.background=null,P(n),re(i,c,n,g,`geometry`),Q(i)||(re(i,c,n,_,`material`),Q(i))||(re(i,c,n,h,`albedo`),Q(i)))return p=!0,Li(r);let d=di(c,t);if(a.uniforms.tGuideAlbedo.value=h.texture,a.uniforms.tGuideGeometry.value=g.texture,a.uniforms.tGuideMaterial.value=_.texture,a.uniforms.tInput.value=r,a.uniforms.uRecoveryStrength.value=d,ae(i,a,b),Q(i)||(o.uniforms.tFireflyConfidence.value=b.texture,o.uniforms.tGuideMaterial.value=_.texture,o.uniforms.tInput.value=r,ae(i,o,x),Q(i)))return p=!0,Li(r);let f=x.texture,m=v;l.uniforms.tGuideAlbedo.value=h.texture,l.uniforms.tGuideGeometry.value=g.texture,l.uniforms.tGuideMaterial.value=_.texture,l.uniforms.tFireflyConfidence.value=b.texture;for(let t of Vi(e.atrousPasses)){if(l.uniforms.tInput.value=f,l.uniforms.uStepWidth.value=t,ae(i,l,m),Q(i))return p=!0,Li(r);f=m.texture,m=m===v?y:v}s.uniforms.tGuideAlbedo.value=h.texture,s.uniforms.tGuideGeometry.value=g.texture,s.uniforms.tGuideMaterial.value=_.texture,s.uniforms.tFireflyConfidence.value=b.texture;let S=x.texture,E=C;for(let t of Bi(e.atrousPasses)){if(s.uniforms.tInput.value=S,s.uniforms.uStepWidth.value=t,ae(i,s,E),Q(i))return p=!0,Li(r);S=E.texture,E=E===C?w:C}return u.uniforms.tDiffuse.value=f,u.uniforms.tFireflyConfidence.value=b.texture,u.uniforms.tFiltered.value=S,u.uniforms.tFirefly.value=x.texture,u.uniforms.tGuideAlbedo.value=h.texture,u.uniforms.tGuideGeometry.value=g.texture,u.uniforms.tGuideMaterial.value=_.texture,u.uniforms.tRaw.value=r,ae(i,u,T),Q(i)?(p=!0,Li(r)):{status:`denoised`,texture:T.texture}}finally{c.overrideMaterial=f,c.background=m,i.setRenderTarget(d),i.setClearColor(E,D),i.autoClear=S}}function P(t){let n=Ui(e.depthPhi,t.far);for(let e of m.values())e.albedo.uniforms.uCameraFar.value=t.far,e.geometry.uniforms.uCameraFar.value=t.far,e.material.uniforms.uCameraFar.value=t.far;s.uniforms.uDepthPhi.value=n,l.uniforms.uDepthPhi.value=n,a.uniforms.uDepthPhi.value=n,u.uniforms.uDepthPhi.value=n}function re(e,t,n,r,i){let a=ie(t,i);try{i===`geometry`?e.setClearColor(8421631,1):i===`albedo`?e.setClearColor(16777215,1):e.setClearColor(new k(0,1,0),0),e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n)}finally{Yi(a)}}function ie(e,t){let n=[];return e.traverse(e=>{$i(e)&&(n.push({material:e.material,object:e}),e.material=Array.isArray(e.material)?e.material.map(e=>F(e,t)):F(e.material,t))}),n}function F(e,t){let n=m.get(e);return n||(n=Wi(e),m.set(e,n)),t===`geometry`?n.geometry:t===`albedo`?n.albedo:n.material}function ae(e,t,a){i.material=t,e.setRenderTarget(a),e.clear(!0,!1,!1),e.render(n,r)}return{dispose:ne,render:N,reset:M,setSize:te}}function Li(e){return{status:`error`,texture:e}}function Ri({enabled:e,maxSamples:t,sampleCount:n}){return e&&t>0&&n>=t}function zi(e){return e!==0}function Bi(e){let t=Math.max(0,Math.min(Si,Math.floor(e)));return Array.from({length:t},(e,t)=>2**t)}function Vi(e){return Bi(e+1)}function Hi(e){return(Math.max(1,Math.floor(Math.abs(e)))*16807%(Ci-1)+1)/Ci}function Ui(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||t<=0?.001:Math.max(e/t,1e-6)}function Q(e){return zi(e.getContext().getError())}function Wi(e){let t=e,n=Gi(t),r=new O({depthTest:t.depthTest,depthWrite:!0,fragmentShader:Di,name:`Manifest3D path tracing denoise geometry guide material`,side:t.side,transparent:!1,uniforms:N.clone(n),vertexShader:Ti,visible:t.visible}),i=new O({depthTest:t.depthTest,depthWrite:!0,fragmentShader:Oi,name:`Manifest3D path tracing denoise material guide material`,side:t.side,transparent:!1,uniforms:N.clone({...n,uEmissiveProtection:{value:qi(t)},uObjectKey:{value:0},uRoughness:{value:t.roughness??1},uTransparent:{value:t.transparent||t.opacity<.999?1:0}}),vertexShader:Ti,visible:t.visible}),a=new O({depthTest:t.depthTest,depthWrite:!0,fragmentShader:ki,name:`Manifest3D path tracing denoise albedo guide material`,side:t.side,transparent:!1,uniforms:N.clone({...n,tMetalnessMap:{value:t.metalnessMap??null},uBaseColor:{value:Ki(t)},uMetalness:{value:t.metalness??0},uUsesMetalnessMap:{value:+!!t.metalnessMap}}),vertexShader:Ti,visible:t.visible});return a.onBeforeRender=(e,t,n)=>{a.uniforms.uCameraFar.value=Ji(n)},r.onBeforeRender=(e,t,n)=>{r.uniforms.uCameraFar.value=Ji(n)},i.onBeforeRender=(e,t,n,r,a)=>{i.uniforms.uCameraFar.value=Ji(n),i.uniforms.uObjectKey.value=Hi(a.id)},{albedo:a,geometry:r,material:i}}function Gi(e){return{tAlphaMap:{value:e.alphaMap??null},tColorMap:{value:e.map??null},uAlphaTest:{value:e.alphaTest??0},uCameraFar:{value:80},uOpacity:{value:e.opacity??1},uUsesAlphaMap:{value:+!!e.alphaMap},uUsesColorMap:{value:+!!e.map}}}function Ki(e){return e.color?.clone()??new k(1,1,1)}function qi(e){let t=e.emissive??new k(0,0,0),n=e.emissiveIntensity??0,r=t.r*.2126+t.g*.7152+t.b*.0722;return Math.min(1,r*Math.max(n,0))}function Ji(e){return e instanceof u?e.far:80}function Yi(e){for(let t of e)t.object.material=t.material}function Xi(e,t,n){let r=new F(e,t,{depthBuffer:!1,format:z,magFilter:L,minFilter:L,stencilBuffer:!1,type:R});return r.texture.name=`Manifest3D path tracing denoise ${n}`,r.texture.colorSpace=``,r}function Zi(e,t,n){let r=new F(e,t,{depthBuffer:!1,format:z,magFilter:d,minFilter:d,stencilBuffer:!1,type:R});return r.texture.name=`Manifest3D path tracing denoise ${n}`,r.texture.colorSpace=``,r}function Qi(e,t,n){let r=new F(e,t,{depthBuffer:!0,format:z,magFilter:d,minFilter:d,stencilBuffer:!1,type:R});return r.texture.name=`Manifest3D path tracing denoise ${n} guide`,r.texture.colorSpace=``,r}function $i(e){return e.isMesh===!0}function ea(e,t,n=`idle`){let r=`${e} / ${t} samples`;return n===`denoising`?`${r} (denoising)`:n===`denoised`?`${r} (denoised)`:n===`not-denoised`?`${r} (not denoised)`:n===`not-denoised-error`?`${r} (not denoised - error)`:r}function ta({needsFinalPost:e,maxSamples:t,needsSceneUpload:n,sampleCount:r}){return n||e||r<t}function na({interactionSampleLimit:e,isCameraInteractionActive:t,maxSamples:n}){return t?Math.min(n,Math.max(1,Math.floor(e))):n}function ra({isCameraInteractionActive:e,maxSamples:t,needsFinalPost:n,sampleCount:r}){return!e&&n&&r>=t}function ia({hasPendingInput:e}){return e}var aa=new s(.2126,.7152,.0722),oa=4,sa=`manifest3dEmissiveMeshSamplingPatch`,ca=6;function la(e,t=X.emissiveMeshSampling){let n=ja(e),r=Na(t.maxTriangles);return pa(n,{maxTriangles:r}),n.uniforms.emissiveMeshTriangleCount.value=0,n.uniforms.emissiveMeshSamplingStrength.value=0,n.uniforms.emissiveMeshTotalPower.value=0,n.uniforms.emissiveMeshTriangleTexelOffset.value=0,{dispose(){},update(e){let i=ua(e,t),a=i.triangles.slice(0,r),o=Ma(n),s=o.count*ca,c=s+a.length*oa,l=ba(o.tex,c);l.fill(0,s*4),va(l,a,s),o.tex.needsUpdate=!0;let u=a.length>0?i.samplingStrength:0,d=a.reduce((e,t)=>e+t.weight,0);return n.uniforms.emissiveMeshTriangleCount.value=a.length,n.uniforms.emissiveMeshSamplingStrength.value=u,n.uniforms.emissiveMeshTotalPower.value=d,n.uniforms.emissiveMeshTriangleTexelOffset.value=s,{emitterTriangleCount:a.length,strength:u}}}}function ua(e,t=X.emissiveMeshSampling){let n=[],r={compactEmitterRisk:0,darkDiffuseReceiverArea:0,emissiveArea:0,maxEmissiveLuminance:0,roughDiffuseReceiverArea:0};if(!t.enabled)return{metrics:r,samplingStrength:0,triangles:n};e.updateMatrixWorld(!0),e.traverse(e=>{Pa(e)&&fa(e,t,r,n)}),r.compactEmitterRisk=xa(n,r.roughDiffuseReceiverArea,t);let i=da(r,t);return i<=0?{metrics:r,samplingStrength:0,triangles:[]}:(n.sort((e,t)=>t.weight-e.weight),{metrics:r,samplingStrength:i,triangles:n})}function da(e,t=X.emissiveMeshSampling){if(!t.enabled||e.maxEmissiveLuminance<=0||e.roughDiffuseReceiverArea<=0||e.compactEmitterRisk<=0)return 0;let n=e.darkDiffuseReceiverArea/e.roughDiffuseReceiverArea,r=e.darkDiffuseReceiverArea/Math.max(e.emissiveArea,1e-6),i=Math.max($(.18,.72,n),$(1.5,10,r)*.8);return $(t.sceneRiskThreshold,1,e.compactEmitterRisk*i)}function fa(e,t,n,r){let i=e.geometry,a=i.attributes.position;if(!a)return;let o=Array.isArray(e.material)?e.material:[e.material],c=i.groups.length>0?i.groups:[{count:Da(i),materialIndex:0,start:0}],l=i.index,u=new s,d=new s,f=new s;for(let s of c){let c=o[s.materialIndex??0]??o[0];if(!c)continue;let p=c,m=Ta(p),h=Ea(m),g=Math.min(s.start+s.count,Da(i)),_=0;for(let t=s.start;t+2<g;t+=3){Oa(e,l,a,t,u,d,f);let n=ka(u,d,f);if(n<=0||(_+=n,h<=0||!Ca(p)))continue;let i=h*n;r.push({area:n,emission:m.clone(),luminance:h,side:Aa(p.side??0),v0:u.clone(),v1:d.clone(),v2:f.clone(),weight:i})}if(h>0&&Ca(p)){n.emissiveArea+=_,n.maxEmissiveLuminance=Math.max(n.maxEmissiveLuminance,h);continue}if(!Sa(p,t))continue;let v=Ea(p.color??new k(1,1,1)),y=1-$(t.darkReceiverLowLuminance,t.darkReceiverHighLuminance,v);n.roughDiffuseReceiverArea+=_,n.darkDiffuseReceiverArea+=_*y}}function pa(e,{maxTriangles:t}){e.userData[sa]||(e.userData[sa]=!0,e.defines={...e.defines,EMISSIVE_MESH_SAMPLE_MAX_TRIANGLES:t},e.uniforms={...e.uniforms,emissiveMeshSamplingStrength:{value:0},emissiveMeshTotalPower:{value:0},emissiveMeshTriangleCount:{value:0},emissiveMeshTriangleTexelOffset:{value:0}},e.fragmentShader=ha(e.fragmentShader),ma(e))}function ma(e){let t=Object.getOwnPropertyDescriptor(ge.prototype,`needsUpdate`)?.set;if(t){t.call(e,!0);return}let n=e;n.version+=1}function ha(e){return ga(ga(ga(ga(ga(ga(e,`uniform LightsInfo lights;`,`uniform LightsInfo lights;
				uniform int emissiveMeshTriangleCount;
				uniform float emissiveMeshSamplingStrength;
				uniform float emissiveMeshTotalPower;
				uniform int emissiveMeshTriangleTexelOffset;`,`lighting uniforms`),`
				void main() {`,`${_a}

				void main() {`,`main entry`),`					ScatterRecord scatterRec;`,`					ScatterRecord scatterRec;
					float emissiveMeshPreviousReceiverConfidence = 0.0;`,`scatter record`),`						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );`,`						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );
						gl_FragColor.rgb += emissiveMeshDirectContribution( - ray.direction, surf, state, hitPoint );`,`direct light contribution`),`						gl_FragColor.rgb += ( surf.emission * state.throughputColor );`,`						gl_FragColor.rgb += emissiveMeshHitContribution( surf.emission, ray.direction, surfaceHit, scatterRec, state, emissiveMeshPreviousReceiverConfidence );`,`emissive hit contribution`),`						ray.direction = scatterRec.direction;`,`						emissiveMeshPreviousReceiverConfidence = emissiveMeshReceiverConfidence( surf );
						ray.direction = scatterRec.direction;`,`next ray direction`)}function ga(e,t,n,r){let i=e.replace(t,n);if(i===e)throw Error(`Unable to patch path tracer emissive mesh sampling shader at ${r}.`);return i}var _a=`

				vec4 emissiveMeshReadTriangleTexel( int triangleIndex, int texelOffset ) {

					int texelIndex =
						emissiveMeshTriangleTexelOffset +
						triangleIndex * 4 +
						texelOffset;
					return texelFetch1D( lights.tex, uint( texelIndex ) );

				}

				int emissiveMeshSelectTriangle( float r ) {

					for ( int i = 0; i < EMISSIVE_MESH_SAMPLE_MAX_TRIANGLES; i ++ ) {

						if ( i >= emissiveMeshTriangleCount ) {

							break;

						}

						vec4 texel0 = emissiveMeshReadTriangleTexel( i, 0 );
						if ( r <= texel0.w ) {

							return i;

						}

					}

					return max( emissiveMeshTriangleCount - 1, 0 );

				}

				float emissiveMeshReceiverConfidence( SurfaceRecord surf ) {

					if (
						emissiveMeshSamplingStrength <= 0.0 ||
						surf.volumeParticle ||
						surf.transmission > 0.05 ||
						luminance( surf.emission ) > 0.0001
					) {

						return 0.0;

					}

					float rough = smoothstep( 0.2, 0.7, surf.roughness );
					float dielectric = 1.0 - smoothstep( 0.04, 0.36, surf.metalness );

					return clamp( rough * dielectric * emissiveMeshSamplingStrength, 0.0, 1.0 );

				}

				float emissiveMeshLightSideCos( float side, vec3 normal, vec3 directionToLight ) {

					float frontCos = dot( normal, - directionToLight );

					if ( abs( side ) < 0.5 ) {

						return abs( frontCos );

					}

					return side * frontCos;

				}

				vec3 emissiveMeshDirectContribution(
					vec3 worldWo,
					SurfaceRecord surf,
					RenderState state,
					vec3 rayOrigin
				) {

					float receiverConfidence = emissiveMeshReceiverConfidence( surf );
					if (
						receiverConfidence <= 0.0 ||
						emissiveMeshTriangleCount <= 0 ||
						emissiveMeshTotalPower <= 0.0
					) {

						return vec3( 0.0 );

					}

					vec3 r = rand3( 17 );
					int triangleIndex = emissiveMeshSelectTriangle( r.x );
					vec4 texel0 = emissiveMeshReadTriangleTexel( triangleIndex, 0 );
					vec4 texel1 = emissiveMeshReadTriangleTexel( triangleIndex, 1 );
					vec4 texel2 = emissiveMeshReadTriangleTexel( triangleIndex, 2 );
					vec4 texel3 = emissiveMeshReadTriangleTexel( triangleIndex, 3 );
					vec3 v0 = texel0.xyz;
					vec3 v1 = texel1.xyz;
					vec3 v2 = texel2.xyz;
					float area = texel1.w;
					float side = texel2.w;
					vec3 emission = texel3.rgb;
					float selectionPdf = texel3.w;
					float su = sqrt( clamp( r.y, 0.0, 1.0 ) );
					vec3 lightPosition =
						v0 * ( 1.0 - su ) +
						v1 * ( su * ( 1.0 - r.z ) ) +
						v2 * ( su * r.z );
					vec3 offsetToLight = lightPosition - rayOrigin;
					float distSq = dot( offsetToLight, offsetToLight );

					if ( distSq <= RAY_OFFSET || area <= 0.0 || selectionPdf <= 0.0 ) {

						return vec3( 0.0 );

					}

					float dist = sqrt( distSq );
					vec3 directionToLight = offsetToLight / dist;
					vec3 lightNormal = normalize( cross( v1 - v0, v2 - v0 ) );
					float surfaceCos = dot( surf.faceNormal, directionToLight );
					float lightCos = emissiveMeshLightSideCos( side, lightNormal, directionToLight );

					if (
						surfaceCos <= 0.0 ||
						lightCos <= 0.0001 ||
						! isDirectionValid( directionToLight, surf.normal, surf.faceNormal )
					) {

						return vec3( 0.0 );

					}

					float lightPdf = selectionPdf * distSq / max( area * lightCos, 0.0001 );
					vec3 sampleColor;
					float materialPdf = bsdfResult( worldWo, directionToLight, surf, sampleColor );
					bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
					if ( lightPdf <= 0.0 || materialPdf <= 0.0 || ! isValidSampleColor ) {

						return vec3( 0.0 );

					}

					Ray lightRay;
					lightRay.origin = rayOrigin;
					lightRay.direction = directionToLight;
					vec3 attenuatedColor;
					if ( attenuateHit( state, lightRay, max( dist - RAY_OFFSET * 2.0, 0.0 ), attenuatedColor ) ) {

						return vec3( 0.0 );

					}

					float misWeight = misHeuristic( lightPdf, materialPdf );
					return receiverConfidence *
						attenuatedColor *
						emission *
						state.throughputColor *
						sampleColor *
						misWeight /
						lightPdf;

				}

				vec3 emissiveMeshHitContribution(
					vec3 emission,
					vec3 rayDirection,
					SurfaceHit surfaceHit,
					ScatterRecord scatterRec,
					RenderState state,
					float previousReceiverConfidence
				) {

					float emissionLuminance = luminance( emission );
					if (
						emissiveMeshSamplingStrength <= 0.0 ||
						emissiveMeshTotalPower <= 0.0 ||
						emissionLuminance <= 0.0 ||
						state.firstRay ||
						state.transmissiveRay ||
						previousReceiverConfidence <= 0.0
					) {

						return emission * state.throughputColor;

					}

					float lightCos = abs( dot( surfaceHit.faceNormal, - rayDirection ) );
					float lightPdf =
						emissionLuminance *
						surfaceHit.dist *
						surfaceHit.dist /
						max( emissiveMeshTotalPower * lightCos, 0.0001 );
					float misWeight = misHeuristic( scatterRec.pdf, lightPdf );

					return emission *
						state.throughputColor *
						mix( 1.0, misWeight, clamp( previousReceiverConfidence, 0.0, 1.0 ) );

				}
`;function va(e,t,n){let r=t.reduce((e,t)=>e+t.weight,0),i=0;for(let[a,o]of t.entries()){let t=(n+a*oa)*4,s=r>0?o.weight/r:0;i+=s,ya(e,t,o.v0,i),ya(e,t+4,o.v1,o.area),ya(e,t+8,o.v2,o.side),e[t+12]=o.emission.r,e[t+13]=o.emission.g,e[t+14]=o.emission.b,e[t+15]=s}if(t.length>0){let n=(t.length-1)*oa*4;e[n+3]=1}}function ya(e,t,n,r){e[t]=n.x,e[t+1]=n.y,e[t+2]=n.z,e[t+3]=r}function ba(e,t){let n=Math.ceil(Math.sqrt(Math.max(1,t)));if(e.image.width<n||e.image.height<n){let t=e.image.data,r=new Float32Array(n*n*4);r.set(t.subarray(0,Math.min(t.length,r.length))),e.dispose(),e.image.data=r,e.image.width=n,e.image.height=n}return e.image.data}function xa(e,t,n){return e.reduce((e,r)=>{let i=r.area/Math.max(t+r.area,1e-6),a=1-$(n.smallEmitterAreaRatio,n.wideEmitterAreaRatio,i),o=$(n.strongEmissionLuminance,n.extremeEmissionLuminance,r.luminance),s=$(n.extremeEmissionLuminance*.65,n.extremeEmissionLuminance,r.luminance),c=o*Math.max(a,s*.75);return Math.max(e,c)},0)}function Sa(e,t){return!wa(e)&&(e.roughness??1)>=t.receiverRoughnessMin&&(e.metalness??0)<=t.receiverMetalnessMax}function Ca(e){return!wa(e)&&!e.alphaMap&&(e.alphaTest??0)<=0&&!e.emissiveMap}function wa(e){return!!e.transparent||(e.opacity??1)<.999}function Ta(e){let t=e.emissive??new k(0,0,0),n=Math.max(e.emissiveIntensity??0,0);return t.clone().multiplyScalar(n)}function Ea(e){return e.r*aa.x+e.g*aa.y+e.b*aa.z}function Da(e){return e.index?.count??e.attributes.position?.count??0}function Oa(e,t,n,r,i,a,o){let s=t?t.getX(r):r,c=t?t.getX(r+1):r+1,l=t?t.getX(r+2):r+2;i.fromBufferAttribute(n,s).applyMatrix4(e.matrixWorld),a.fromBufferAttribute(n,c).applyMatrix4(e.matrixWorld),o.fromBufferAttribute(n,l).applyMatrix4(e.matrixWorld)}function ka(e,t,n){return t.clone().sub(e).cross(n.clone().sub(e)).length()*.5}function Aa(e){return e===1?-1:e===2?0:1}function ja(e){let t=e._pathTracer?.material;if(!t)throw Error(`Path tracer material is unavailable for emissive sampling.`);return t}function Ma(e){let t=e.uniforms.lights?.value;if(!t?.tex)throw Error(`Path tracer lights texture is unavailable for emissive sampling.`);return t}function Na(e){return Number.isFinite(e)?Math.max(1,Math.min(2048,Math.floor(e))):512}function Pa(e){return e.isMesh===!0&&e.visible}function $(e,t,n){if(e===t)return n<e?0:1;let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}var Fa=`manifest3d:pathtracer-max-samples`,Ia=X.maxSampleOptions[0];function La(){return[...X.maxSampleOptions]}function Ra(){if(typeof window>`u`)return Ia;try{return Ba(window.localStorage.getItem(Fa))}catch{return Ia}}function za(e){if(!(typeof window>`u`))try{window.localStorage.setItem(Fa,Va(e))}catch{}}function Ba(e){let t=typeof e==`number`?e:Number.parseInt(String(e),10);return Ha(t)?t:Ia}function Va(e){return String(e)}function Ha(e){return X.maxSampleOptions.includes(e)}var Ua=class{constructor(e){this.name=`WorkerBase`,this.running=!1,this.worker=e,this.worker.onerror=e=>{throw e.message?Error(`${this.name}: Could not create Web Worker with error "${e.message}"`):Error(`${this.name}: Could not create Web Worker.`)}}runTask(){}generate(...e){if(this.running)throw Error(`GenerateMeshBVHWorker: Already running job.`);if(this.worker===null)throw Error(`GenerateMeshBVHWorker: Worker has been disposed.`);this.running=!0;let t=this.runTask(this.worker,...e);return t.finally(()=>{this.running=!1}),t}dispose(){this.worker.terminate(),this.worker=null}},Wa=class extends Ua{constructor(){let e=new Worker(new URL(`/assets/generateMeshBVH.worker-BOZ7-LQf.js`,``+import.meta.url),{type:`module`});super(e),this.name=`GenerateMeshBVHWorker`}runTask(e,t,n={}){return new Promise((r,i)=>{if(t.getAttribute(`position`).isInterleavedBufferAttribute||t.index&&t.index.isInterleavedBufferAttribute)throw Error(`GenerateMeshBVHWorker: InterleavedBufferAttribute are not supported for the geometry attributes.`);e.onerror=e=>{i(Error(`GenerateMeshBVHWorker: ${e.message}`))},e.onmessage=a=>{let{data:o}=a;if(o.error)i(Error(o.error)),e.onmessage=null;else if(o.serialized){let{serialized:i,position:a}=o,s=be.deserialize(i,t,{setIndex:!1}),c=Object.assign({setBoundingBox:!0},n);if(t.attributes.position.array=a,i.index)if(t.index)t.index.array=i.index;else{let e=new I(i.index,1,!1);t.setIndex(e)}c.setBoundingBox&&(t.boundingBox=s.getBoundingBox(new ue)),n.onProgress&&n.onProgress(o.progress),r(s),e.onmessage=null}else n.onProgress&&n.onProgress(o.progress)};let a=t.index?t.index.array:null,o=t.attributes.position.array,s=[o];a&&s.push(a),e.postMessage({index:a,position:o,options:{...n,onProgress:null,includedProgressCallback:!!n.onProgress,groups:[...t.groups]}},s.map(e=>e.buffer).filter(e=>typeof SharedArrayBuffer>`u`||!(e instanceof SharedArrayBuffer)))})}};function Ga(){return new Wa}function Ka(e){let t=e.getSize(new S);return e.setScissorTest(!1),e.setViewport(0,0,t.x,t.y),t}var qa=Me(),Ja=Mr();function Ya({assets:e,cameraSnapshot:t,denoiseEnabled:n,isCameraInteractionActive:r,jointPreviewPosesByInstance:i,leftPanelOcclusionWidth:a,materialAnimationValuesByInstance:o,rightPanelOcclusionWidth:s,worldMode:c}){let l=(0,H.useRef)(null),d=(0,H.useRef)(null),f=(0,H.useRef)(null),p=(0,H.useRef)(null),m=(0,H.useRef)(null),h=(0,H.useRef)(null),g=(0,H.useRef)(!1),_=(0,H.useRef)(null),v=(0,H.useRef)(null),y=(0,H.useRef)(null),b=(0,H.useRef)(!0),x=(0,H.useRef)(null),S=(0,H.useRef)(null),C=(0,H.useMemo)(()=>La(),[]),[w,T]=(0,H.useState)(()=>Ra()),E=(0,H.useRef)(w),D=(0,H.useRef)(t??Ja),O=(0,H.useRef)(a),k=(0,H.useRef)(s),A=(0,H.useRef)({height:1,width:1}),j=(0,H.useRef)(n),te=(0,H.useRef)(r),[M,ne]=(0,H.useState)({height:1,width:1}),N=(0,H.useMemo)(()=>ve(M.width,M.height,window.devicePixelRatio),[M.height,M.width]);return(0,H.useEffect)(()=>{let e=d.current;if(!e)return;let t=new ResizeObserver(([e])=>{let{height:t,width:n}=e.contentRect;ne({height:Math.max(1,Math.floor(t)),width:Math.max(1,Math.floor(n))})});return t.observe(e),()=>t.disconnect()},[]),(0,H.useEffect)(()=>{let e=l.current;if(!e)return;let t=new de({alpha:!1,antialias:!0,canvas:e,powerPreference:`high-performance`}),n=new u(V.fov,1,V.near,V.far),r=new ee,i=new jr(t),a=Ga(),o=new it,s=new rt,c=new tt(t),d=Ii(),f=ri(),p=la(i);return t.autoClear=!0,t.outputColorSpace=ce,t.toneMapping=4,t.toneMappingExposure=X.toneMappingExposure,i.bounces=X.bounces,i.filterGlossyFactor=X.filterGlossyFactor,i.minSamples=X.minSamples,i.renderDelay=X.renderDelayMs,i.fadeDuration=0,i.dynamicLowRes=!1,i.lowResScale=1,i.renderScale=1,i.rasterizeScene=!1,i.renderToCanvas=!0,i.renderToCanvasCallback=(e,t,n)=>{let r=t.autoClear;Ka(t),t.autoClear=!1,n.render(t),t.autoClear=r},i.setBVHWorker(a),i.tiles.set(...X.tiles),i.textureSize.set(X.maxTextureSize,X.maxTextureSize),c.addPass(o),c.addPass(s),m.current={assetBloomPipeline:f,camera:n,composer:c,denoisePipeline:d,emissiveMeshSampler:p,pathTracer:i,renderer:t,scene:r,texturePass:o},g.current=!0,Za(x),()=>{h.current?.(),h.current=null,m.current=null,p.dispose(),i.dispose(),c.dispose(),d.dispose(),f.dispose(),o.dispose(),s.dispose(),a.dispose(),t.dispose()}},[]),(0,H.useEffect)(()=>{A.current=M;let e=m.current;e&&(Qa(e,M,N),b.current=!0,$a({lastPublishedSampleCounterTextRef:_,leftPanelOcclusionWidth:O.current,maxSamples:E.current,rightPanelOcclusionWidth:k.current,runtime:e,sampleCounterRef:p,snapshot:D.current,viewportSize:M}),Za(x))},[N,M]),(0,H.useEffect)(()=>{D.current=t??Ja,O.current=a,k.current=s;let e=m.current;e&&(b.current=!0,$a({lastPublishedSampleCounterTextRef:_,leftPanelOcclusionWidth:a,maxSamples:E.current,rightPanelOcclusionWidth:s,runtime:e,sampleCounterRef:p,snapshot:D.current,viewportSize:A.current}),Za(x))},[t,a,s]),(0,H.useEffect)(()=>{let t=m.current;t&&(h.current?.(),h.current=zr({assets:e,jointPreviewPosesByInstance:i,materialAnimationValuesByInstance:o,scene:t.scene,worldMode:c}),g.current=!0,b.current=!0,Xa({lastPublishedSampleCounterTextRef:_,maxSamples:E.current,sampleCount:0,sampleCounterRef:p}),Za(x))},[e,i,o,c]),(0,H.useEffect)(()=>{j.current=n,b.current=!0,Za(x)},[n]),(0,H.useEffect)(()=>{te.current=r,Za(x)},[r]),(0,H.useEffect)(()=>{E.current=w,za(w),b.current=!0;let e=m.current;Xa({lastPublishedSampleCounterTextRef:_,maxSamples:w,sampleCount:e?Math.min(w,Math.floor(e.pathTracer.samples)):0,sampleCounterRef:p}),Za(x)},[w]),(0,H.useEffect)(()=>{let e=!1;function t(){e||v.current!==null||y.current!==null||(v.current=requestAnimationFrame(i))}function n(){e||v.current!==null||y.current!==null||(y.current=window.setTimeout(()=>{y.current=null,t()},X.scheduler.inputPendingDelayMs))}function r(n){if(S.current)return;eo(n.camera,D.current,A.current,O.current,k.current),g.current=!1,b.current=!0,Xa({lastPublishedSampleCounterTextRef:_,maxSamples:E.current,sampleCount:0,sampleCounterRef:p});let r=to(n);S.current=r,r.catch(t=>{e||console.error(`Path tracing scene upload failed.`,t)}).finally(()=>{S.current===r&&(S.current=null),e||t()})}function i(){v.current=null;let i=m.current;if(!i||e||S.current)return;if(ia({hasPendingInput:io()})){n();return}if(g.current){r(i);return}let a=E.current,o=na({interactionSampleLimit:X.interaction.activeSampleLimit,isCameraInteractionActive:te.current,maxSamples:a}),s=!1;i.pathTracer.samples<o&&(i.pathTracer.renderSample(),b.current=!0,s=!0);let c=Math.min(a,Math.floor(i.pathTracer.samples)),l=ra({isCameraInteractionActive:te.current,maxSamples:a,needsFinalPost:b.current,sampleCount:i.pathTracer.samples});if(Xa({lastPublishedSampleCounterTextRef:_,maxSamples:a,sampleCount:c,sampleCounterRef:p}),l){if(s){t();return}Ri({enabled:X.denoise.enabled&&j.current,maxSamples:a,sampleCount:i.pathTracer.samples})&&Xa({denoiseStatus:`denoising`,lastPublishedSampleCounterTextRef:_,maxSamples:a,sampleCount:c,sampleCounterRef:p});let e=no(i,j.current,a);b.current=!1,Xa({denoiseStatus:e,lastPublishedSampleCounterTextRef:_,maxSamples:a,sampleCount:c,sampleCounterRef:p});return}ta({maxSamples:o,needsFinalPost:l,needsSceneUpload:g.current,sampleCount:i.pathTracer.samples})&&t()}return x.current=t,t(),()=>{e=!0,x.current=null,S.current=null,v.current!==null&&(cancelAnimationFrame(v.current),v.current=null),y.current!==null&&(window.clearTimeout(y.current),y.current=null)}},[]),(0,qa.jsxs)(`div`,{className:`pathtracing-stage`,ref:d,children:[(0,qa.jsx)(`canvas`,{ref:l}),(0,qa.jsxs)(`details`,{className:`pathtracing-sample-counter`,onBlur:e=>{let t=e.relatedTarget;(!(t instanceof Node)||!e.currentTarget.contains(t))&&(e.currentTarget.open=!1)},ref:f,children:[(0,qa.jsx)(`summary`,{"aria-haspopup":`menu`,className:`pathtracing-sample-counter__button`,children:(0,qa.jsx)(`span`,{"aria-live":`polite`,ref:p,role:`status`,children:ea(0,w)})}),(0,qa.jsx)(`div`,{className:`pathtracing-sample-counter__menu`,role:`menu`,children:C.map(e=>(0,qa.jsxs)(`button`,{"aria-checked":e===w,className:e===w?`is-selected`:void 0,onClick:()=>{T(e),f.current&&(f.current.open=!1)},role:`menuitemradio`,type:`button`,children:[e,` samples`]},e))})]})]})}function Xa({denoiseStatus:e=`idle`,lastPublishedSampleCounterTextRef:t,maxSamples:n,sampleCount:r,sampleCounterRef:i}){let a=ea(r,n,e);t.current!==a&&(t.current=a,i.current&&(i.current.textContent=a))}function Za(e){e.current?.()}function Qa(e,t,n){let r=t.width,i=t.height;e.renderer.setPixelRatio(n),e.renderer.setSize(r,i,!1),e.composer.setPixelRatio(n),e.composer.setSize(r,i),e.assetBloomPipeline.setSize(r,i,n),e.denoisePipeline.setSize(r,i,n)}function $a({lastPublishedSampleCounterTextRef:e,leftPanelOcclusionWidth:t,maxSamples:n,rightPanelOcclusionWidth:r,runtime:i,sampleCounterRef:a,snapshot:o,viewportSize:s}){eo(i.camera,o,s,t,r),i.pathTracer.updateCamera(),i.pathTracer.reset(),i.denoisePipeline.reset(),Xa({lastPublishedSampleCounterTextRef:e,maxSamples:n,sampleCount:0,sampleCounterRef:a})}function eo(e,t,n,r,i){Nr({camera:e,leftPanelOcclusionWidth:r,rightPanelOcclusionWidth:i,snapshot:t,viewportSize:n})}async function to(e){e.scene.updateMatrixWorld(!0),await e.pathTracer.setSceneAsync(e.scene,e.camera),e.emissiveMeshSampler.update(e.scene),e.pathTracer.reset(),e.denoisePipeline.reset()}function no(e,t,n){let r=ro(e,t,n);return Ka(e.renderer),e.texturePass.map=e.assetBloomPipeline.render({camera:e.camera,inputTexture:r.texture,renderer:e.renderer,scene:e.scene}),e.composer.render(),r.denoiseStatus??`not-denoised`}function ro(e,t,n){if(!Ri({enabled:X.denoise.enabled&&t,maxSamples:n,sampleCount:e.pathTracer.samples}))return{texture:e.pathTracer.target.texture};let r=e.denoisePipeline.render({camera:e.camera,inputTexture:e.pathTracer.target.texture,renderer:e.renderer,scene:e.scene});return{denoiseStatus:r.status===`denoised`?`denoised`:`not-denoised-error`,texture:r.texture}}function io(){if(typeof navigator>`u`)return!1;let e=navigator.scheduling,t=e?.isInputPending;return t?t.call(e,{includeContinuous:!0}):!1}export{Ya as PathTracingCanvas,Ya as default};