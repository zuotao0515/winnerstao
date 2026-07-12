(() => {
  const canvas = document.querySelector("#color-bends");
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
  if (!gl) return;

  const vert = `attribute vec2 p;varying vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}`;
  const frag = `precision highp float;
  uniform vec2 res;uniform float time;uniform vec2 pointer;varying vec2 uv;
  float ellipse(vec2 p,vec2 c,vec2 r,float edge){return 1.-smoothstep(1.-edge,1.+edge,length((p-c)/r));}
  float ring(vec2 p,vec2 c,float radius,float width){
    float d=length(p-c);
    return 1.-smoothstep(width,width*2.,abs(d-radius));
  }
  float dotGrid(vec2 p,float scale,float size){
    vec2 gv=fract(p*scale)-.5;
    return 1.-smoothstep(size,size*1.8,length(gv));
  }
  void main(){
    vec2 p=uv;float aspect=res.x/res.y;p.x=(p.x-.5)*aspect+.5;
    float t=time*.045;
    vec2 drift=pointer*.018;

    vec3 black=vec3(.004,.007,.008);
    vec3 charcoal=vec3(.026,.028,.025);
    vec3 ember=vec3(1.00,.365,.168);
    vec3 rust=vec3(.54,.145,.072);
    vec3 smoke=vec3(.09,.095,.088);

    vec3 col=mix(black,charcoal,uv.y*.45);

    vec2 m1=vec2(.18+sin(t*.9)*.04,.73+cos(t*.7)*.05)+drift*.45;
    vec2 m2=vec2(.82+cos(t*.6)*.05,.26+sin(t*.8)*.04)-drift*.32;
    vec2 m3=vec2(.52+sin(t*.45)*.08,.55+cos(t*.55)*.05)+drift*.18;
    float a=ellipse(p,m1,vec2(.26,.48),.42);
    float b=ellipse(p,m2,vec2(.30,.42),.44);
    float c=ellipse(p,m3,vec2(.55,.38),.50);

    col+=ember*a*.185;
    col+=rust*b*.205;
    col+=smoke*c*.34;

    float wave=sin((p.x*8.5+p.y*4.5)+t*3.2)*cos((p.y*7.0-p.x*2.4)-t*2.0);
    col+=ember*smoothstep(.48,1.,wave)*.038;

    float ribbon=abs(p.y-(.44+.055*sin(p.x*5.8+t*2.4)+.025*sin(p.x*13.0-t*1.8)));
    float ribbonMask=smoothstep(.10,.42,p.x)*smoothstep(.96,.54,p.x);
    col+=ember*(1.-smoothstep(.0025,.018,ribbon))*ribbonMask*.115;

    vec2 center=vec2(.64+.035*sin(t),.52+.025*cos(t*.8));
    float orbit=ring(p,center,.28+.018*sin(t*.7),.0035);
    float orbit2=ring(p,center,.42+.020*cos(t*.55),.0022);
    float orbitMask=smoothstep(.20,.70,p.x)*smoothstep(.86,.44,p.x);
    col+=ember*(orbit*.13+orbit2*.075)*orbitMask;

    float dots=dotGrid(p+vec2(t*.018,-t*.012),vec2(38.*aspect,38.),.018);
    float dotFade=ellipse(p,vec2(.68,.50),vec2(.58,.52),.62);
    col+=ember*dots*dotFade*.035;

    float grain=fract(sin(dot(gl_FragCoord.xy+time,vec2(12.9898,78.233)))*43758.5453);
    col+=vec3(grain-.5)*.012;

    float vignette=smoothstep(.92,.24,length((uv-.5)*vec2(.86,1.05)));
    col*=mix(.50,1.,vignette);
    col=mix(col,black,.08);
    gl_FragColor=vec4(col,1.);
  }`;
  const compile=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s};
  const program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vert));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,frag));gl.linkProgram(program);gl.useProgram(program);
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,"p");gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  const res=gl.getUniformLocation(program,"res"),time=gl.getUniformLocation(program,"time"),pointer=gl.getUniformLocation(program,"pointer");
  let tx=0,ty=0,x=0,y=0;
  addEventListener("pointermove",e=>{tx=e.clientX/innerWidth*2-1;ty=-(e.clientY/innerHeight*2-1)},{passive:true});
  function resize(){const d=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(innerWidth*d);canvas.height=Math.round(innerHeight*d);gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(res,canvas.width,canvas.height)}
  addEventListener("resize",resize);resize();
  function frame(t){x+=(tx-x)*.018;y+=(ty-y)*.018;gl.uniform1f(time,t*.001);gl.uniform2f(pointer,x,y);gl.drawArrays(gl.TRIANGLES,0,3);requestAnimationFrame(frame)}
  requestAnimationFrame(frame);
})();
