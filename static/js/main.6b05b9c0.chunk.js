(this["webpackJsonpshowroom-vr"]=this["webpackJsonpshowroom-vr"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),o=n(20),i=n.n(o),c=(n(31),n(11)),l=(n(32),n(1)),s=n(21),d=n(15),u=n(22),p=n(23),f=n(24),h=n(25);var m=n(26);function g(){var e=document.createElement("canvas");e.width=64,e.height=64;var t=e.getContext("2d"),n=t.createLinearGradient(0,0,64,0);return n.addColorStop(0,"black"),n.addColorStop(1,"white"),t.fillStyle=n,t.fillRect(0,0,64,64),e}function v(){var e=document.createElement("canvas");e.width=64,e.height=64;var t=e.getContext("2d");return t.beginPath(),t.arc(32,32,29,0,2*Math.PI),t.lineWidth=5,t.stroke(),t.fillStyle="white",t.fill(),e}function w(e,t,n,r,a,o){for(var i=-performance.now()/1e3,c=0;c<e.length;c++)e[c].rotation.x=i*Math.PI;t.position.z=-i%5,n.render(r,a),o.update()}function b(e,t,n,r,a,o,i,b,j,O,x,y,M){var B="https://unpkg.com/three@0.".concat(l.REVISION,".x"),C=document.getElementById("container");(e=new l.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setAnimationLoop((function(){return w(o,a,e,n,t,i)})),e.outputEncoding=l.sRGBEncoding,e.toneMapping=l.ACESFilmicToneMapping,e.toneMappingExposure=.85,e.xr.enabled=!0,C.appendChild(e.domElement),window.addEventListener("resize",(function(){return function(e,t){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}(t,e)})),i=new s.a,C.appendChild(i.dom),(t=new l.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,100)).position.set(4.25,1.4,-4.5),(r=new f.a(t,C)).target.set(0,0,0),r.update();var E=new l.PMREMGenerator(e);(n=new l.Scene).background=new l.Color(15658734),n.environment=E.fromScene(new h.a).texture,(a=new l.GridHelper(100,40,0,0)).material.opacity=.1,a.material.depthWrite=!1,a.material.transparent=!0,n.add(a);var S=(new l.TextureLoader).load("assets/ferrari_ao.png"),P=new u.a;P.setDecoderPath("".concat(B,"/examples/js/libs/draco/gltf/"));var F=new d.a;F.setDRACOLoader(P),function(e,t,n,r,a,o,i,c){var l=new e.MeshPhysicalMaterial({color:16711680,metalness:.6,roughness:.4,clearcoat:.05,clearcoatRoughness:.05}),s=new e.MeshStandardMaterial({color:16777215,metalness:1,roughness:.5}),d=new e.MeshPhysicalMaterial({color:16777215,metalness:0,roughness:.1,transmission:.9,transparent:!0});c&&(document.getElementById("body-color").addEventListener("input",(function(){l.color.set(this.value)})),document.getElementById("details-color").addEventListener("input",(function(){s.color.set(this.value)})),document.getElementById("glass-color").addEventListener("input",(function(){d.color.set(this.value)}))),t.load(i,(function(t){var i=t.scene||t.scene.children[0];i.scale.set(a[0],a[1],a[2]),c&&(i.getObjectByName("body").material=l,i.getObjectByName("rim_fl").material=s,i.getObjectByName("rim_fr").material=s,i.getObjectByName("rim_rr").material=s,i.getObjectByName("rim_rl").material=s,i.getObjectByName("trim").material=s,i.getObjectByName("glass").material=d,o.push(i.getObjectByName("wheel_fl"),i.getObjectByName("wheel_fr"),i.getObjectByName("wheel_rl"),i.getObjectByName("wheel_rr")));var u=new e.Mesh(new e.PlaneGeometry(2.62,5.2),new e.MeshBasicMaterial({map:n,blending:e.MultiplyBlending,toneMapped:!1,transparent:!0}));u.rotation.x=-Math.PI/2,u.renderOrder=2,i.add(u),r.add(i)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)}))}(l,F,S,n,j,o,b,M),document.body.appendChild(p.a.createButton(e)),O=function(e,t,n){var r=[],a=[],o=new m.a,i=new l.MeshBasicMaterial({color:16777215,alphaMap:new l.CanvasTexture(g()),transparent:!0}),s=new l.BoxBufferGeometry(.004,.004,.35);s.translate(0,0,-.15);for(var d=s.attributes.uv,u=0;u<d.count;u++){var p=d.getX(u),f=d.getY(u),h=function(){switch(u){case 0:return[1,1];case 1:return[0,0];case 2:return[1,1];case 3:case 4:return[0,0];case 5:return[1,1];case 6:return[0,0];case 7:return[1,1];case 8:case 9:return[0,0];case 10:case 11:case 12:case 13:return[1,1];case 14:case 15:default:return[0,0]}}(),w=Object(c.a)(h,2);p=w[0],f=w[1],d.setXY(u,p,f)}var b=new l.Mesh(s,i);b.renderOrder=1/0;var j=new l.SpriteMaterial({map:new l.CanvasTexture(v()),sizeAttenuation:!1,depthTest:!1}),O=new l.Sprite(j);O.scale.set(.015,.015,1),O.renderOrder=1/0;var x=e.xr.getController(0),y=e.xr.getController(1);x.name="controller-right",y.name="controller-left";var M=e.xr.getControllerGrip(0),B=e.xr.getControllerGrip(1);x&&r.push(x),y&&r.push(y),M&&a.push(M),B&&a.push(B),r.forEach((function(e){var t=b.clone(),n=O.clone();e.add(t,n),e.ray=t,e.point=n})),a.forEach((function(e){e.add(o.createControllerModel(e))}));var C=new l.Matrix4;return{controllers:r,controllerGrips:a,setFromController:function(e,t){var n=r[e];C.identity().extractRotation(n.matrixWorld),t.origin.setFromMatrixPosition(n.matrixWorld),t.direction.set(0,0,-1).applyMatrix4(C)},setPointerAt:function(e,t){var n=r[e],a=n.worldToLocal(t);n.point.position.copy(a),n.point.visible=!0}}}(e),n.add(O.controllerGrips[0],O.controllers[0]),O.controllers[0].addEventListener("selectstart",(function(){y=!0})),O.controllers[0].addEventListener("selectend",(function(){y=!1})),(x=new l.Group).position.set(0,0,0),x.name="dolly",n.add(x),x.add(t),setInterval((function(){return function(e,t,n){if(n){var r=new l.Vector3;e.getWorldDirection(r),t.position.add(r.multiplyScalar(.1))}}(t,x,y)}),100),function(e,t,n,r,a,o){e.setAnimationLoop((function(){w(t,n,e,r,a,o)}))}(e,o,a,n,t,i)}var j=n(9);var O=function(){"https://unpkg.com/three@0.".concat(l.REVISION,".x");var e=["Ferrari J50","Ferrari F40","Ferrari 458 Italia"],t={"Ferrari J50":"assets/ferrarij50.glb","Ferrari F40":"assets/ferrari_f40.glb","Ferrari 458 Italia":"assets/ferrari.glb"},n={"Ferrari J50":[.015,.015,.015],"Ferrari F40":[.1,.1,.1],"Ferrari 458 Italia":[1,1,1]},a=["Ferrari 458 Italia"],o=e[2],i=Object(r.useState)(o),s=Object(c.a)(i,2),d=s[0],u=s[1],p=[];Object(r.useEffect)((function(){console.log("HI"+d),document.getElementById("container").innerHTML="",b(undefined,undefined,undefined,undefined,undefined,p,undefined,t[d],n[d],undefined,undefined,false,a.includes(d))}),[d]);var f=Object(r.useState)("#ff0000"),h=Object(c.a)(f,2),m=h[0],g=h[1],v=Object(r.useState)("#ffffff"),w=Object(c.a)(v,2),O=w[0],x=w[1],y=Object(r.useState)("#ffffff"),M=Object(c.a)(y,2),B=M[0],C=M[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("label",{children:["Pick your car:",Object(j.jsxs)("select",{value:d,onChange:function(e){u(e.target.value)},children:[" ",e.map((function(e){return Object(j.jsxs)("option",{value:e,children:[e," "]},e)}))]})]}),Object(j.jsx)("h1",{align:"center",children:"VR SHOWROOM"}),a.includes(d)&&Object(j.jsxs)("div",{id:"controls",children:[Object(j.jsxs)("span",{className:"colorPicker",children:[Object(j.jsx)("input",{id:"body-color",type:"color",onChange:function(e){e.preventDefault(),g(e.target.value)},value:m}),Object(j.jsx)("br",{}),"Body"]}),Object(j.jsxs)("span",{className:"colorPicker",children:[Object(j.jsx)("input",{id:"details-color",type:"color",onChange:function(e){e.preventDefault(),x(e.target.value)},value:O}),Object(j.jsx)("br",{}),"Details"]}),Object(j.jsxs)("span",{className:"colorPicker",children:[Object(j.jsx)("input",{id:"glass-color",type:"color",onChange:function(e){e.preventDefault(),C(e.target.value)},value:B}),Object(j.jsx)("br",{}),"Glass"]})]}),Object(j.jsx)("div",{id:"container"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.6b05b9c0.chunk.js.map