(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const na="183",_l=0,wa=1,vl=2,ps=1,xl=2,Li=3,Un=0,Ut=1,mn=2,vn=0,fi=1,Aa=2,Ra=3,Ca=4,Ml=5,Xn=100,Sl=101,El=102,yl=103,bl=104,Tl=200,wl=201,Al=202,Rl=203,dr=204,fr=205,Cl=206,Pl=207,Dl=208,Ll=209,Il=210,Ul=211,Nl=212,Fl=213,Ol=214,pr=0,mr=1,gr=2,gi=3,_r=4,vr=5,xr=6,Mr=7,Ro=0,Bl=1,zl=2,Zt=0,Co=1,Po=2,Do=3,Lo=4,Io=5,Uo=6,No=7,Fo=300,Zn=301,_i=302,Us=303,Ns=304,ws=306,Ss=1e3,gn=1001,Sr=1002,pt=1003,Oo=1004,Xi=1005,At=1006,Fs=1007,Yn=1008,Bt=1009,Bo=1010,zo=1011,Bi=1012,ia=1013,an=1014,nn=1015,Mn=1016,sa=1017,ra=1018,zi=1020,ko=35902,Vo=35899,Go=1021,Ho=1022,Ht=1023,Sn=1026,jn=1027,Wo=1028,aa=1029,vi=1030,oa=1031,la=1033,ms=33776,gs=33777,_s=33778,vs=33779,Er=35840,yr=35841,br=35842,Tr=35843,wr=36196,Ar=37492,Rr=37496,Cr=37488,Pr=37489,Dr=37490,Lr=37491,Ir=37808,Ur=37809,Nr=37810,Fr=37811,Or=37812,Br=37813,zr=37814,kr=37815,Vr=37816,Gr=37817,Hr=37818,Wr=37819,Xr=37820,qr=37821,Yr=36492,jr=36494,Zr=36495,$r=36283,Kr=36284,Jr=36285,Qr=36286,kl=3200,Vl=0,Gl=1,Dn="",It="srgb",xi="srgb-linear",Es="linear",Ke="srgb",Jn=7680,Pa=519,Hl=512,Wl=513,Xl=514,ca=515,ql=516,Yl=517,ha=518,jl=519,Da=35044,La="300 es",sn=2e3,ys=2001;function Zl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $l(){const s=bs("canvas");return s.style.display="block",s}const Ia={};function Ua(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xo(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=Xo(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=Xo(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ts(...s){const e=s.join(" ");e in Ia||(Ia[e]=!0,Ae(...s))}function Kl(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jl={[pr]:mr,[gr]:xr,[_r]:Mr,[gi]:vr,[mr]:pr,[xr]:gr,[Mr]:_r,[vr]:gi};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Na=1234567;const Ui=Math.PI/180,ki=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function ua(s,e){return(s%e+e)%e}function Ql(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ec(s,e,t){return s!==e?(t-s)/(e-s):0}function Ni(s,e,t){return(1-t)*s+t*e}function tc(s,e,t,n){return Ni(s,e,1-Math.exp(-t*n))}function nc(s,e=1){return e-Math.abs(ua(s,e*2)-e)}function ic(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ac(s,e){return s+Math.random()*(e-s)}function oc(s){return s*(.5-Math.random())}function lc(s){s!==void 0&&(Na=s);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cc(s){return s*Ui}function hc(s){return s*ki}function uc(s){return(s&s-1)===0&&s!==0}function dc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pc(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*f,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*f,o*c);break;case"ZXZ":s.set(l*f,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*m,o*u,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const mc={DEG2RAD:Ui,RAD2DEG:ki,generateUUID:Ei,clamp:ke,euclideanModulo:ua,mapLinear:Ql,inverseLerp:ec,lerp:Ni,damp:tc,pingpong:nc,smoothstep:ic,smootherstep:sc,randInt:rc,randFloat:ac,randFloatSpread:oc,seededRandom:lc,degToRad:cc,radToDeg:hc,isPowerOfTwo:uc,ceilPowerOfTwo:dc,floorPowerOfTwo:fc,setQuaternionFromProperEuler:pc,normalize:Ct,denormalize:di};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==m||u!==_){let p=l*h+c*m+u*_+f*S;p<0&&(h=-h,m=-m,_=-_,S=-S,p=-p);let d=1-o;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);d=Math.sin(d*M)/b,o=Math.sin(o*M)/b,l=l*d+h*o,c=c*d+m*o,u=u*d+_*o,f=f*d+S*o}else{l=l*d+h*o,c=c*d+m*o,u=u*d+_*o,f=f*d+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new D,Fa=new yi;class Ue{constructor(e,t,n,i,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],S=i[0],p=i[3],d=i[6],M=i[1],b=i[4],E=i[7],A=i[2],w=i[5],C=i[8];return r[0]=a*S+o*M+l*A,r[3]=a*p+o*b+l*w,r[6]=a*d+o*E+l*C,r[1]=c*S+u*M+f*A,r[4]=c*p+u*b+f*w,r[7]=c*d+u*E+f*C,r[2]=h*S+m*M+_*A,r[5]=h*p+m*b+_*w,r[8]=h*d+m*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,m=c*r-a*l,_=t*f+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(i*c-u*n)*S,e[2]=(o*n-i*a)*S,e[3]=h*S,e[4]=(u*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Ue,Oa=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gc(){const s={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Es:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[xi]:{primaries:e,whitePoint:n,transfer:Es,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const He=gc();function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class _c{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=bs("canvas")),Qn.width=e.width,Qn.height=e.height;const i=Qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vc=0;class da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(zs(i[a].image)):r.push(zs(i[a]))}else r=zs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let xc=0;const ks=new D;class Rt extends Si{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=gn,i=gn,r=At,a=Yn,o=Ht,l=Bt,c=Rt.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Ei(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ks).x}get height(){return this.source.getSize(ks).y}get depth(){return this.source.getSize(ks).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Fo;Rt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(m+1)/2,A=(d+1)/2,w=(u+h)/4,C=(f+S)/4,v=(_+p)/4;return b>E&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=C/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mc extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Rt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new da(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qo extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sc extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,n,i,r,a,o,l,c,u,f,h,m,_,S,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,f,h,m,_,S,p)}set(e,t,n,i,r,a,o,l,c,u,f,h,m,_,S,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),a=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,S=c*f;t[0]=h+S*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,S=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ec,e,yc)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Tn.crossVectors(n,Ft),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Tn.crossVectors(n,Ft)),Tn.normalize(),qi.crossVectors(Ft,Tn),i[0]=Tn.x,i[4]=qi.x,i[8]=Ft.x,i[1]=Tn.y,i[5]=qi.y,i[9]=Ft.y,i[2]=Tn.z,i[6]=qi.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],S=n[6],p=n[10],d=n[14],M=n[3],b=n[7],E=n[11],A=n[15],w=i[0],C=i[4],v=i[8],y=i[12],V=i[1],R=i[5],N=i[9],k=i[13],W=i[2],B=i[6],G=i[10],F=i[14],Q=i[3],$=i[7],ce=i[11],pe=i[15];return r[0]=a*w+o*V+l*W+c*Q,r[4]=a*C+o*R+l*B+c*$,r[8]=a*v+o*N+l*G+c*ce,r[12]=a*y+o*k+l*F+c*pe,r[1]=u*w+f*V+h*W+m*Q,r[5]=u*C+f*R+h*B+m*$,r[9]=u*v+f*N+h*G+m*ce,r[13]=u*y+f*k+h*F+m*pe,r[2]=_*w+S*V+p*W+d*Q,r[6]=_*C+S*R+p*B+d*$,r[10]=_*v+S*N+p*G+d*ce,r[14]=_*y+S*k+p*F+d*pe,r[3]=M*w+b*V+E*W+A*Q,r[7]=M*C+b*R+E*B+A*$,r[11]=M*v+b*N+E*G+A*ce,r[15]=M*y+b*k+E*F+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],S=e[7],p=e[11],d=e[15],M=l*m-c*h,b=o*m-c*f,E=o*h-l*f,A=a*m-c*u,w=a*h-l*u,C=a*f-o*u;return t*(S*M-p*b+d*E)-n*(_*M-p*A+d*w)+i*(_*b-S*A+d*C)-r*(_*E-S*w+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],S=e[13],p=e[14],d=e[15],M=t*o-n*a,b=t*l-i*a,E=t*c-r*a,A=n*l-i*o,w=n*c-r*o,C=i*c-r*l,v=u*S-f*_,y=u*p-h*_,V=u*d-m*_,R=f*p-h*S,N=f*d-m*S,k=h*d-m*p,W=M*k-b*N+E*R+A*V-w*y+C*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*k-l*N+c*R)*B,e[1]=(i*N-n*k-r*R)*B,e[2]=(S*C-p*w+d*A)*B,e[3]=(h*w-f*C-m*A)*B,e[4]=(l*V-a*k-c*y)*B,e[5]=(t*k-i*V+r*y)*B,e[6]=(p*E-_*C-d*b)*B,e[7]=(u*C-h*E+m*b)*B,e[8]=(a*N-o*V+c*v)*B,e[9]=(n*V-t*N-r*v)*B,e[10]=(_*w-S*E+d*M)*B,e[11]=(f*E-u*w-m*M)*B,e[12]=(o*y-a*R-l*v)*B,e[13]=(t*R-n*y+i*v)*B,e[14]=(S*b-_*A-p*M)*B,e[15]=(u*A-f*b+h*M)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,m=r*u,_=r*f,S=a*u,p=a*f,d=o*f,M=l*c,b=l*u,E=l*f,A=n.x,w=n.y,C=n.z;return i[0]=(1-(S+d))*A,i[1]=(m+E)*A,i[2]=(_-b)*A,i[3]=0,i[4]=(m-E)*w,i[5]=(1-(h+d))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(_+b)*C,i[9]=(p-M)*C,i[10]=(1-(h+S))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ei.set(i[0],i[1],i[2]).length();const o=ei.set(i[4],i[5],i[6]).length(),l=ei.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xt.copy(this);const c=1/a,u=1/o,f=1/l;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=sn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),m=(n+i)/(n-i);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===sn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ys)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=sn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),m=-(n+i)/(n-i);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===sn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ys)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new D,Xt=new mt,Ec=new D(0,0,0),yc=new D(1,1,1),Tn=new D,qi=new D,Ft=new D,za=new mt,ka=new yi;class En{constructor(e=0,t=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ka.setFromEuler(this),this.setFromQuaternion(ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bc=0;const Va=new D,ti=new yi,cn=new mt,Yi=new D,wi=new D,Tc=new D,wc=new yi,Ga=new D(1,0,0),Ha=new D(0,1,0),Wa=new D(0,0,1),Xa={type:"added"},Ac={type:"removed"},ni={type:"childadded",child:null},Vs={type:"childremoved",child:null};class zt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new D,t=new En,n=new yi,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ue}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Ha,e)}rotateZ(e){return this.rotateOnAxis(Wa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Ha,e)}translateZ(e){return this.translateOnAxis(Wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(wi,Yi,this.up):cn.lookAt(Yi,wi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(cn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xa),ni.child=e,this.dispatchEvent(ni),ni.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xa),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Tc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rc={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Hs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=ua(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hs(a,r,e+1/3),this.g=Hs(a,r,e),this.b=Hs(a,r,e-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return He.workingToColorSpace(wt.copy(this),e),Math.round(ke(wt.r*255,0,255))*65536+Math.round(ke(wt.g*255,0,255))*256+Math.round(ke(wt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=It){He.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ji);const n=Ni(wn.h,ji.h,t),i=Ni(wn.s,ji.s,t),r=Ni(wn.l,ji.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new je;je.NAMES=jo;class Fi{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new Fi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zo extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qt=new D,hn=new D,Ws=new D,un=new D,ii=new D,si=new D,qa=new D,Xs=new D,qs=new D,Ys=new D,js=new ht,Zs=new ht,$s=new ht;class jt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qt.subVectors(i,t),hn.subVectors(n,t),Ws.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(hn),l=qt.dot(Ws),c=hn.dot(hn),u=hn.dot(Ws),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(a,un.y),l.addScaledVector(o,un.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return js.setScalar(0),Zs.setScalar(0),$s.setScalar(0),js.fromBufferAttribute(e,t),Zs.fromBufferAttribute(e,n),$s.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(js,r.x),a.addScaledVector(Zs,r.y),a.addScaledVector($s,r.z),a}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),hn.subVectors(e,t),qt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),Xs.subVectors(e,n);const l=ii.dot(Xs),c=si.dot(Xs);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,i);const u=ii.dot(qs),f=si.dot(qs);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ii,a);Ys.subVectors(e,r);const m=ii.dot(Ys),_=si.dot(Ys);if(_>=0&&m<=_)return t.copy(r);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(si,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return qa.subVectors(r,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(qa,o);const d=1/(p+S+h);return a=S*d,o=h*d,t.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),$i.subVectors(this.max,Ai),ri.subVectors(e.a,Ai),ai.subVectors(e.b,Ai),oi.subVectors(e.c,Ai),An.subVectors(ai,ri),Rn.subVectors(oi,ai),On.subVectors(ri,oi);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-On.z,On.y,An.z,0,-An.x,Rn.z,0,-Rn.x,On.z,0,-On.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-On.y,On.x,0];return!Ks(t,ri,ai,oi,$i)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,ri,ai,oi,$i))?!1:(Ki.crossVectors(An,Rn),t=[Ki.x,Ki.y,Ki.z],Ks(t,ri,ai,oi,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new D,new D,new D,new D,new D,new D,new D,new D],Yt=new D,Zi=new Gi,ri=new D,ai=new D,oi=new D,An=new D,Rn=new D,On=new D,Ai=new D,$i=new D,Ki=new D,Bn=new D;function Ks(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ft=new D,Ji=new We;let Cc=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class $o extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ko extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Pc=new Gi,Ri=new D,Js=new D;class fa{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Js)),this.expandByPoint(Ri.copy(e.center).sub(Js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Dc=0;const Vt=new mt,Qs=new zt,li=new D,Ot=new Gi,Ci=new Gi,Mt=new D;class kt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?Ko:$o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Ci.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Ci.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Ci.min),Ot.expandByPoint(Ci.max))}Ot.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(li.fromBufferAttribute(e,c),Mt.add(li)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new D,l[v]=new D;const c=new D,u=new D,f=new D,h=new We,m=new We,_=new We,S=new D,p=new D;function d(v,y,V){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,V),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,V),u.sub(c),f.sub(c),m.sub(h),_.sub(h);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),o[v].add(S),o[y].add(S),o[V].add(S),l[v].add(p),l[y].add(p),l[V].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,y=M.length;v<y;++v){const V=M[v],R=V.start,N=V.count;for(let k=R,W=R+N;k<W;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new D,E=new D,A=new D,w=new D;function C(v){A.fromBufferAttribute(i,v),w.copy(A);const y=o[v];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),E.crossVectors(w,y);const R=E.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,R)}for(let v=0,y=M.length;v<y;++v){const V=M[v],R=V.start,N=V.count;for(let k=R,W=R+N;k<W;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new rn(h,u,f)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lc=0;class As extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=fi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fn=new D,er=new D,Qi=new D,Cn=new D,tr=new D,es=new D,nr=new D;class Ic{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){er.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qi),o=Cn.dot(this.direction),l=-Cn.dot(Qi),c=Cn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(er).addScaledVector(Qi,h),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,r){tr.subVectors(t,e),es.subVectors(n,e),nr.crossVectors(tr,es);let a=this.direction.dot(nr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(Cn,es));if(l<0)return null;const c=o*this.direction.dot(tr.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(nr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ya=new mt,zn=new Ic,ts=new fa,ja=new D,ns=new D,is=new D,ss=new D,ir=new D,rs=new D,Za=new D,as=new D;class Le extends zt{constructor(e=new kt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){rs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ir.fromBufferAttribute(f,e),a?rs.addScaledVector(ir,u):rs.addScaledVector(ir.sub(t),u))}t.add(rs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(ts.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ts,ja)===null||zn.origin.distanceToSquared(ja)>(e.far-e.near)**2))&&(Ya.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,A=b;E<A;E+=3){const w=o.getX(E),C=o.getX(E+1),v=o.getX(E+2);i=os(this,d,e,n,c,u,f,w,C,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){const M=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);i=os(this,a,e,n,c,u,f,M,b,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,A=b;E<A;E+=3){const w=E,C=E+1,v=E+2;i=os(this,d,e,n,c,u,f,w,C,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){const M=p,b=p+1,E=p+2;i=os(this,a,e,n,c,u,f,M,b,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Uc(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;as.copy(o),as.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:s}}function os(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ns),s.getVertexPosition(l,is),s.getVertexPosition(c,ss);const u=Uc(s,e,t,n,ns,is,ss,Za);if(u){const f=new D;jt.getBarycoord(Za,ns,is,ss,f),i&&(u.uv=jt.getInterpolatedAttribute(i,o,l,c,f,new We)),r&&(u.uv1=jt.getInterpolatedAttribute(r,o,l,c,f,new We)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};jt.getNormal(ns,is,ss,h.normal),u.face=h,u.barycoord=f}return u}class Nc extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=pt,u=pt,f,h){super(null,a,o,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sr=new D,Fc=new D,Oc=new Ue;class Wn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sr.subVectors(n,t).cross(Fc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oc.getNormalMatrix(e),i=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new fa,Bc=new We(.5,.5),ls=new D;class Jo{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],_=r[8],S=r[9],p=r[10],d=r[11],M=r[12],b=r[13],E=r[14],A=r[15];if(i[0].setComponents(c-a,m-u,d-_,A-M).normalize(),i[1].setComponents(c+a,m+u,d+_,A+M).normalize(),i[2].setComponents(c+o,m+f,d+S,A+b).normalize(),i[3].setComponents(c-o,m-f,d-S,A-b).normalize(),n)i[4].setComponents(l,h,p,E).normalize(),i[5].setComponents(c-l,m-h,d-p,A-E).normalize();else if(i[4].setComponents(c-l,m-h,d-p,A-E).normalize(),t===sn)i[5].setComponents(c+l,m+h,d+p,A+E).normalize();else if(t===ys)i[5].setComponents(l,h,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=Bc.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends Rt{constructor(e=[],t=Zn,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zc extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends Rt{constructor(e,t,n=an,i,r,a,o=pt,l=pt,c,u=Sn,f=1){if(u!==Sn&&u!==jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kc extends Vi{constructor(e,t=an,n=Zn,i,r,a=pt,o=pt,l,c=Sn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class el extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ge extends kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function _(S,p,d,M,b,E,A,w,C,v,y){const V=E/C,R=A/v,N=E/2,k=A/2,W=w/2,B=C+1,G=v+1;let F=0,Q=0;const $=new D;for(let ce=0;ce<G;ce++){const pe=ce*R-k;for(let ue=0;ue<B;ue++){const Ne=ue*V-N;$[S]=Ne*M,$[p]=pe*b,$[d]=W,c.push($.x,$.y,$.z),$[S]=0,$[p]=0,$[d]=w>0?1:-1,u.push($.x,$.y,$.z),f.push(ue/C),f.push(1-ce/v),F+=1}}for(let ce=0;ce<v;ce++)for(let pe=0;pe<C;pe++){const ue=h+pe+B*ce,Ne=h+pe+B*(ce+1),rt=h+(pe+1)+B*(ce+1),st=h+(pe+1)+B*ce;l.push(ue,Ne,st),l.push(Ne,rt,st),Q+=6}o.addGroup(m,Q,y),m+=Q,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bi extends kt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],h=[],m=[];let _=0;const S=[],p=n/2;let d=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(m,2));function M(){const E=new D,A=new D;let w=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const y=[],V=v/r,R=V*(t-e)+e;for(let N=0;N<=i;N++){const k=N/i,W=k*l+o,B=Math.sin(W),G=Math.cos(W);A.x=R*B,A.y=-V*n+p,A.z=R*G,f.push(A.x,A.y,A.z),E.set(B,C,G).normalize(),h.push(E.x,E.y,E.z),m.push(k,1-V),y.push(_++)}S.push(y)}for(let v=0;v<i;v++)for(let y=0;y<r;y++){const V=S[y][v],R=S[y+1][v],N=S[y+1][v+1],k=S[y][v+1];(e>0||y!==0)&&(u.push(V,R,k),w+=3),(t>0||y!==r-1)&&(u.push(R,N,k),w+=3)}c.addGroup(d,w,0),d+=w}function b(E){const A=_,w=new We,C=new D;let v=0;const y=E===!0?e:t,V=E===!0?1:-1;for(let N=1;N<=i;N++)f.push(0,p*V,0),h.push(0,V,0),m.push(.5,.5),_++;const R=_;for(let N=0;N<=i;N++){const W=N/i*l+o,B=Math.cos(W),G=Math.sin(W);C.x=y*G,C.y=p*V,C.z=y*B,f.push(C.x,C.y,C.z),h.push(0,V,0),w.x=B*.5+.5,w.y=G*.5*V+.5,m.push(w.x,w.y),_++}for(let N=0;N<i;N++){const k=A+N,W=R+N;E===!0?u.push(W,W+1,k):u.push(W+1,W,k),v+=3}c.addGroup(d,v,E===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends bi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends kt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new D,E=new D,A=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],b),m(t[w+1],E),m(t[w+2],A),l(b,E,A,M)}function l(M,b,E,A){const w=A+1,C=[];for(let v=0;v<=w;v++){C[v]=[];const y=M.clone().lerp(E,v/w),V=b.clone().lerp(E,v/w),R=w-v;for(let N=0;N<=R;N++)N===0&&v===w?C[v][N]=y:C[v][N]=y.clone().lerp(V,N/R)}for(let v=0;v<w;v++)for(let y=0;y<2*(w-v)-1;y++){const V=Math.floor(y/2);y%2===0?(h(C[v][V+1]),h(C[v+1][V]),h(C[v][V])):(h(C[v][V+1]),h(C[v+1][V+1]),h(C[v+1][V]))}}function c(M){const b=new D;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(M),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function u(){const M=new D;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const E=p(M)/2/Math.PI+.5,A=d(M)/Math.PI+.5;a.push(E,1-A)}_(),f()}function f(){for(let M=0;M<a.length;M+=6){const b=a[M+0],E=a[M+2],A=a[M+4],w=Math.max(b,E,A),C=Math.min(b,E,A);w>.9&&C<.1&&(b<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function m(M,b){const E=M*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function _(){const M=new D,b=new D,E=new D,A=new D,w=new We,C=new We,v=new We;for(let y=0,V=0;y<r.length;y+=9,V+=6){M.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),w.set(a[V+0],a[V+1]),C.set(a[V+2],a[V+3]),v.set(a[V+4],a[V+5]),A.copy(M).add(b).add(E).divideScalar(3);const R=p(A);S(w,V+0,M,R),S(C,V+2,b,R),S(v,V+4,E,R)}}function S(M,b,E,A){A<0&&M.x===1&&(a[b]=M.x-1),E.x===0&&E.z===0&&(a[b]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.vertices,e.indices,e.radius,e.detail)}}class mi extends Rs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mi(e.radius,e.detail)}}class ma extends Rs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class In extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],S=[],p=[];for(let d=0;d<u;d++){const M=d*h-a;for(let b=0;b<c;b++){const E=b*f-r;_.push(E,-M,0),S.push(0,0,1),p.push(b/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const b=M+c*d,E=M+c*(d+1),A=M+1+c*(d+1),w=M+1+c*d;m.push(b,E,w),m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lt extends kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new D,h=new D,m=[],_=[],S=[],p=[];for(let d=0;d<=n;d++){const M=[],b=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const w=A/t;f.x=-e*Math.cos(i+w*r)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(i+w*r)*Math.sin(a+b*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),p.push(w+E,1-b),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const b=u[d][M+1],E=u[d][M],A=u[d+1][M],w=u[d+1][M+1];(d!==0||a>0)&&m.push(b,E,w),(d!==n-1||l<Math.PI)&&m.push(E,A,w)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cs extends kt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],f=[],h=new D,m=new D,_=new D;for(let S=0;S<=n;S++){const p=a+S/n*o;for(let d=0;d<=i;d++){const M=d/i*r;m.x=(e+t*Math.cos(p))*Math.cos(M),m.y=(e+t*Math.cos(p))*Math.sin(M),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),_.subVectors(m,h).normalize(),u.push(_.x,_.y,_.z),f.push(d/i),f.push(S/n)}}for(let S=1;S<=n;S++)for(let p=1;p<=i;p++){const d=(i+1)*S+p-1,M=(i+1)*(S-1)+p-1,b=(i+1)*(S-1)+p,E=(i+1)*S+p;l.push(d,M,E),l.push(M,b,E)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Mi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=Mi(s[t]);for(const i in n)e[i]=n[i]}return e}function Vc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Gc={clone:Mi,merge:Dt};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Vc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xc extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qc extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yc extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cs=new D,hs=new yi,Qt=new D;class nl extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cs,hs,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,hs,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cs,hs,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,hs,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new D,$a=new We,Ka=new We;class Gt extends nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,$a,Ka),t.subVectors(Ka,$a)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ga extends nl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=-90,hi=1;class jc extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(ci,hi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(ci,hi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(ci,hi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(ci,hi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(ci,hi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(ci,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zc extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $c{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ja(s,e,t,n){const i=Kc(n);switch(t){case Go:return s*e;case Wo:return s*e/i.components*i.byteLength;case aa:return s*e/i.components*i.byteLength;case vi:return s*e*2/i.components*i.byteLength;case oa:return s*e*2/i.components*i.byteLength;case Ho:return s*e*3/i.components*i.byteLength;case Ht:return s*e*4/i.components*i.byteLength;case la:return s*e*4/i.components*i.byteLength;case ms:case gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _s:case vs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yr:case Tr:return Math.max(s,16)*Math.max(e,8)/4;case Er:case br:return Math.max(s,8)*Math.max(e,8)/2;case wr:case Ar:case Cr:case Pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Dr:case Lr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ur:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Br:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yr:case jr:case Zr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $r:case Kr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jr:case Qr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kc(s){switch(s){case Bt:case Bo:return{byteLength:1,components:1};case Bi:case zo:case Mn:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case an:case ia:case nn:return{byteLength:4,components:1};case ko:case Vo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);function il(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jc(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],S=f[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const S=f[m];s.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_u=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Su=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ru=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_d=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Qc,alphahash_pars_fragment:eh,alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:sh,aomap_fragment:rh,aomap_pars_fragment:ah,batching_pars_vertex:oh,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:Mh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Th,displacementmap_vertex:wh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Dh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Ih,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:zh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:jh,lights_phong_pars_fragment:Zh,lights_physical_fragment:$h,lights_physical_pars_fragment:Kh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:eu,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:su,map_fragment:ru,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:hu,morphinstance_vertex:uu,morphcolor_vertex:du,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:gu,normal_fragment_maps:_u,normal_pars_fragment:vu,normal_pars_vertex:xu,normal_vertex:Mu,normalmap_pars_fragment:Su,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:bu,iridescence_pars_fragment:Tu,opaque_fragment:wu,packing:Au,premultiplied_alpha_fragment:Ru,project_vertex:Cu,dithering_fragment:Pu,dithering_pars_fragment:Du,roughnessmap_fragment:Lu,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Uu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:Bu,skinning_pars_vertex:zu,skinning_vertex:ku,skinnormal_vertex:Vu,specularmap_fragment:Gu,specularmap_pars_fragment:Hu,tonemapping_fragment:Wu,tonemapping_pars_fragment:Xu,transmission_fragment:qu,transmission_pars_fragment:Yu,uv_pars_fragment:ju,uv_pars_vertex:Zu,uv_vertex:$u,worldpos_vertex:Ku,background_vert:Ju,background_frag:Qu,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:nd,cube_frag:id,depth_vert:sd,depth_frag:rd,distance_vert:ad,distance_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:ud,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:_d,meshnormal_vert:vd,meshnormal_frag:xd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:Ed,meshphysical_frag:yd,meshtoon_vert:bd,meshtoon_frag:Td,points_vert:wd,points_frag:Ad,shadow_vert:Rd,shadow_frag:Cd,sprite_vert:Pd,sprite_frag:Dd},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},tn={basic:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Dt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Dt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Dt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Dt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Dt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Dt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Dt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Dt([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};tn.physical={uniforms:Dt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const us={r:0,b:0,g:0},Vn=new En,Ld=new mt;function Id(s,e,t,n,i,r){const a=new je(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function m(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const E=M.backgroundBlurriness>0;b=e.get(b,E)}return b}function _(M){let b=!1;const E=m(M);E===null?p(a,o):E&&E.isColor&&(p(E,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(M,b){const E=m(b);E&&(E.isCubeTexture||E.mapping===ws)?(c===void 0&&(c=new Le(new Ge(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Mi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Vn.copy(b.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ld.makeRotationFromEuler(Vn)),c.material.toneMapped=He.getTransfer(E.colorSpace)!==Ke,(u!==E||f!==E.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Le(new In(2,2),new Kt({name:"BackgroundMaterial",uniforms:Mi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=He.getTransfer(E.colorSpace)!==Ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(us,tl(s)),t.buffers.color.setClear(us.r,us.g,us.b,b,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:S,dispose:d}}function Ud(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(R,N,k,W,B){let G=!1;const F=f(R,W,k,N);r!==F&&(r=F,c(r.object)),G=m(R,W,k,B),G&&_(R,W,k,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,E(R,N,k,W),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function u(R){return s.deleteVertexArray(R)}function f(R,N,k,W){const B=W.wireframe===!0;let G=n[N.id];G===void 0&&(G={},n[N.id]=G);const F=R.isInstancedMesh===!0?R.id:0;let Q=G[F];Q===void 0&&(Q={},G[F]=Q);let $=Q[k.id];$===void 0&&($={},Q[k.id]=$);let ce=$[B];return ce===void 0&&(ce=h(l()),$[B]=ce),ce}function h(R){const N=[],k=[],W=[];for(let B=0;B<t;B++)N[B]=0,k[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:W,object:R,attributes:{},index:null}}function m(R,N,k,W){const B=r.attributes,G=N.attributes;let F=0;const Q=k.getAttributes();for(const $ in Q)if(Q[$].location>=0){const pe=B[$];let ue=G[$];if(ue===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),pe===void 0||pe.attribute!==ue||ue&&pe.data!==ue.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function _(R,N,k,W){const B={},G=N.attributes;let F=0;const Q=k.getAttributes();for(const $ in Q)if(Q[$].location>=0){let pe=G[$];pe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const ue={};ue.attribute=pe,pe&&pe.data&&(ue.data=pe.data),B[$]=ue,F++}r.attributes=B,r.attributesNum=F,r.index=W}function S(){const R=r.newAttributes;for(let N=0,k=R.length;N<k;N++)R[N]=0}function p(R){d(R,0)}function d(R,N){const k=r.newAttributes,W=r.enabledAttributes,B=r.attributeDivisors;k[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),B[R]!==N&&(s.vertexAttribDivisor(R,N),B[R]=N)}function M(){const R=r.newAttributes,N=r.enabledAttributes;for(let k=0,W=N.length;k<W;k++)N[k]!==R[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function b(R,N,k,W,B,G,F){F===!0?s.vertexAttribIPointer(R,N,k,B,G):s.vertexAttribPointer(R,N,k,W,B,G)}function E(R,N,k,W){S();const B=W.attributes,G=k.getAttributes(),F=N.defaultAttributeValues;for(const Q in G){const $=G[Q];if($.location>=0){let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const pe=ce.normalized,ue=ce.itemSize,Ne=e.get(ce);if(Ne===void 0)continue;const rt=Ne.buffer,st=Ne.type,j=Ne.bytesPerElement,ne=st===s.INT||st===s.UNSIGNED_INT||ce.gpuType===ia;if(ce.isInterleavedBufferAttribute){const re=ce.data,Ie=re.stride,Te=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<$.locationSize;Re++)d($.location+Re,re.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<$.locationSize;Re++)p($.location+Re);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Re=0;Re<$.locationSize;Re++)b($.location+Re,ue/$.locationSize,st,pe,Ie*j,(Te+ue/$.locationSize*Re)*j,ne)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)d($.location+re,ce.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<$.locationSize;re++)p($.location+re);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let re=0;re<$.locationSize;re++)b($.location+re,ue/$.locationSize,st,pe,ue*j,ue/$.locationSize*re*j,ne)}}else if(F!==void 0){const pe=F[Q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv($.location,pe);break;case 3:s.vertexAttrib3fv($.location,pe);break;case 4:s.vertexAttrib4fv($.location,pe);break;default:s.vertexAttrib1fv($.location,pe)}}}}M()}function A(){y();for(const R in n){const N=n[R];for(const k in N){const W=N[k];for(const B in W){const G=W[B];for(const F in G)u(G[F].object),delete G[F];delete W[B]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const N=n[R.id];for(const k in N){const W=N[k];for(const B in W){const G=W[B];for(const F in G)u(G[F].object),delete G[F];delete W[B]}}delete n[R.id]}function C(R){for(const N in n){const k=n[N];for(const W in k){const B=k[W];if(B[R.id]===void 0)continue;const G=B[R.id];for(const F in G)u(G[F].object),delete G[F];delete B[R.id]}}}function v(R){for(const N in n){const k=n[N],W=R.isInstancedMesh===!0?R.id:0,B=k[W];if(B!==void 0){for(const G in B){const F=B[G];for(const Q in F)u(F[Q].object),delete F[Q];delete B[G]}delete k[W],Object.keys(k).length===0&&delete n[N]}}}function y(){V(),a=!0,r!==i&&(r=i,c(r.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Nd(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(s.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,n,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=u[S]*h[S];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fd(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Ht&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==nn&&!v)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ae("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,maxSamples:A,samples:w}}function Od(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Wn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=s.get(f);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,b=M*4;let E=d.clippingState||null;l.value=E,E=u(_,h,b,m);for(let A=0;A!==b;++A)E[A]=t[A];d.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const d=m+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,E=m;b!==S;++b,E+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const Ln=4,Qa=[.125,.215,.35,.446,.526,.582],qn=20,Bd=256,Pi=new ga,eo=new je;let rr=null,ar=0,or=0,lr=!1;const zd=new D;class to{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=zd}=r;rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rr,ar,or),this._renderer.xr.enabled=lr,e.scissorTest=!1,ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),or=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Mn,format:Ht,colorSpace:xi,depthBuffer:!1},i=no(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=no(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kd(r)),this._blurMaterial=Gd(r,e,t),this._ggxMaterial=Vd(r,e,t)}return i}_compileMaterial(e){const t=new Le(new kt,e);this._renderer.compile(t,Pi)}_sceneToCubeUV(e,t,n,i,r){const l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(eo),f.toneMapping=Zt,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Ge,new Et({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let d=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,d=!0):(p.color.copy(eo),d=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;ui(i,E*A,b>2?A:0,A,A),f.setRenderTarget(i),d&&f.render(S,l),f.render(e,l)}f.toneMapping=m,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zn||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=io());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,m=f*h,{_lodMax:_}=this,S=this._sizeLods[n],p=3*S*(n>_-Ln?n-_+Ln:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,ui(r,p,d,3*S,2*S),i.setRenderTarget(r),i.render(o,Pi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ui(e,p,d,3*S,2*S),i.setRenderTarget(e),i.render(o,Pi)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qn-1),S=r/_,p=isFinite(r)?1+Math.floor(u*S):qn;p>qn&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);const d=[];let M=0;for(let C=0;C<qn;++C){const v=C/S,y=Math.exp(-v*v/2);d.push(y),C===0?M+=y:C<p&&(M+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const E=this._sizeLods[i],A=3*E*(i>b-Ln?i-b+Ln:0),w=4*(this._cubeSize-E);ui(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(f,Pi)}}function kd(s){const e=[],t=[],n=[];let i=s;const r=s-Ln+1+Qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ln?l=Qa[a-s+Ln-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,S=3,p=2,d=1,M=new Float32Array(S*_*m),b=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,v=w>2?0:-1,y=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(y,S*_*w),b.set(h,p*_*w);const V=[w,w,w,w,w,w];E.set(V,d*_*w)}const A=new kt;A.setAttribute("position",new rn(M,S)),A.setAttribute("uv",new rn(b,p)),A.setAttribute("faceIndex",new rn(E,d)),n.push(new Le(A,null)),i>Ln&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function no(s,e,t){const n=new $t(s,e,t);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ui(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vd(s,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Gd(s,e,t){const n=new Float32Array(qn),i=new D(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function io(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function so(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class sl extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ge(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:vn});r.uniforms.tEquirect.value=t;const a=new Le(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=At),new jc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function Hd(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Us||m===Ns)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new sl(_.height);return S.fromEquirectangularTexture(s,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===Us||m===Ns,S=m===Zn||m===_i;if(_||S){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new to(s)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return _&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new to(s)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Us?h.mapping=Zn:m===Ns&&(h.mapping=_i),h}function l(h){let m=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Wd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function Xd(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],s.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let b=0,E=M.length;b<E;b+=3){const A=M[b+0],w=M[b+1],C=M[b+2];h.push(A,w,w,C,C,A)}}else{const M=_.array;S=_.version;for(let b=0,E=M.length/3-1;b<E;b+=3){const A=b+0,w=b+1,C=b+2;h.push(A,w,w,C,C,A)}}const p=new(_.count>=65535?Ko:$o)(h,1);p.version=S;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function qd(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,m){s.drawElements(n,m,r,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(s.drawElementsInstanced(n,m,r,h*a,_),t.update(m,n,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,n,1)}function f(h,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],S[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,S,0,_);let d=0;for(let M=0;M<_;M++)d+=m[M]*S[M];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jd(s,e,t){const n=new WeakMap,i=new ht;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let V=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",V)};var m=V;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let A=o.attributes.position.count*E,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*f),v=new qo(C,A,w,f);v.type=nn,v.needsUpdate=!0;const y=E*4;for(let R=0;R<f;R++){const N=d[R],k=M[R],W=b[R],B=A*w*4*R;for(let G=0;G<N.count;G++){const F=G*y;_===!0&&(i.fromBufferAttribute(N,G),C[B+F+0]=i.x,C[B+F+1]=i.y,C[B+F+2]=i.z,C[B+F+3]=0),S===!0&&(i.fromBufferAttribute(k,G),C[B+F+4]=i.x,C[B+F+5]=i.y,C[B+F+6]=i.z,C[B+F+7]=0),p===!0&&(i.fromBufferAttribute(W,G),C[B+F+8]=i.x,C[B+F+9]=i.y,C[B+F+10]=i.z,C[B+F+11]=W.itemSize===4?i.w:1)}}h={count:f,texture:v,size:new We(A,w)},n.set(o,h),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",S),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Zd(s,e,t,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const $d={[Co]:"LINEAR_TONE_MAPPING",[Po]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[No]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};function Kd(s,e,t,n,i){const r=new $t(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new $t(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),o=new kt;o.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ut([0,2,0,0,2,0],2));const l=new Xc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Le(o,l),u=new ga(-1,1,1,-1,0,1);let f=null,h=null,m=!1,_,S=null,p=[],d=!1;this.setSize=function(M,b){r.setSize(M,b),a.setSize(M,b);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(M,b)}},this.setEffects=function(M){p=M,d=p.length>0&&p[0].isRenderPass===!0;const b=r.width,E=r.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(b,E)}},this.begin=function(M,b){if(m||M.toneMapping===Zt&&p.length===0)return!1;if(S=b,b!==null){const E=b.width,A=b.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return d===!1&&M.setRenderTarget(r),_=M.toneMapping,M.toneMapping=Zt,!0},this.hasRenderPass=function(){return d},this.end=function(M,b){M.toneMapping=_,m=!0;let E=r,A=a;for(let w=0;w<p.length;w++){const C=p[w];if(C.enabled!==!1&&(C.render(M,A,E,b),C.needsSwap!==!1)){const v=E;E=A,A=v}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},He.getTransfer(f)===Ke&&(l.defines.SRGB_TRANSFER="");const w=$d[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(S),M.render(c,u),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const rl=new Rt,ea=new Vi(1,1),al=new qo,ol=new Sc,ll=new Qo,ro=[],ao=[],oo=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function Ti(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ro[i];if(r===void 0&&(r=new Float32Array(i),ro[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ds(s,e){let t=ao[e];t===void 0&&(t=new Int32Array(e),ao[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;co.set(n),s.uniformMatrix2fv(this.addr,!1,co),_t(t,n)}}function sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;lo.set(n),s.uniformMatrix3fv(this.addr,!1,lo),_t(t,n)}}function rf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;oo.set(n),s.uniformMatrix4fv(this.addr,!1,oo),_t(t,n)}}function af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function hf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ea.compareFunction=t.isReversedDepthBuffer()?ha:ca,r=ea):r=rl,t.setTexture2D(e||r,i)}function mf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ol,i)}function gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ll,i)}function _f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||al,i)}function vf(s){switch(s){case 5126:return Jd;case 35664:return Qd;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,e){s.uniform1fv(this.addr,e)}function Mf(s,e){const t=Ti(e,this.size,2);s.uniform2fv(this.addr,t)}function Sf(s,e){const t=Ti(e,this.size,3);s.uniform3fv(this.addr,t)}function Ef(s,e){const t=Ti(e,this.size,4);s.uniform4fv(this.addr,t)}function yf(s,e){const t=Ti(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bf(s,e){const t=Ti(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tf(s,e){const t=Ti(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wf(s,e){s.uniform1iv(this.addr,e)}function Af(s,e){s.uniform2iv(this.addr,e)}function Rf(s,e){s.uniform3iv(this.addr,e)}function Cf(s,e){s.uniform4iv(this.addr,e)}function Pf(s,e){s.uniform1uiv(this.addr,e)}function Df(s,e){s.uniform2uiv(this.addr,e)}function Lf(s,e){s.uniform3uiv(this.addr,e)}function If(s,e){s.uniform4uiv(this.addr,e)}function Uf(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ea:a=rl;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Nf(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ol,r[a])}function Ff(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ll,r[a])}function Of(s,e,t){const n=this.cache,i=e.length,r=Ds(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||al,r[a])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return Sf;case 35666:return Ef;case 35674:return yf;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bf(t.type)}}class Vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function ho(s,e){s.seq.push(e),s.map[e.id]=e}function Gf(s,e,t){const n=s.name,i=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),a=cr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ho(t,c===void 0?new zf(o,s,e):new kf(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Vf(o),ho(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Gf(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function uo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hf=37297;let Wf=0;function Xf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fo=new Ue;function qf(s){He._getMatrix(fo,He.workingColorSpace,s);const e=`mat3( ${fo.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case Es:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function po(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xf(s.getShaderSource(e),o)}else return r}function Yf(s,e){const t=qf(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jf={[Co]:"Linear",[Po]:"Reinhard",[Do]:"Cineon",[Lo]:"ACESFilmic",[Uo]:"AgX",[No]:"Neutral",[Io]:"Custom"};function Zf(s,e){const t=jf[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new D;function $f(){He.getLuminanceCoefficients(ds);const s=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function Jf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ii(s){return s!==""}function mo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function go(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(s){return s.replace(ep,np)}const tp=new Map;function np(s,e){let t=Fe[e];if(t===void 0){const n=tp.get(e);if(n!==void 0)t=Fe[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _o(s){return s.replace(ip,sp)}function sp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rp={[ps]:"SHADOWMAP_TYPE_PCF",[Li]:"SHADOWMAP_TYPE_VSM"};function ap(s){return rp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const op={[Zn]:"ENVMAP_TYPE_CUBE",[_i]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE_UV"};function lp(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":op[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cp={[_i]:"ENVMAP_MODE_REFRACTION"};function hp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const up={[Ro]:"ENVMAP_BLENDING_MULTIPLY",[Bl]:"ENVMAP_BLENDING_MIX",[zl]:"ENVMAP_BLENDING_ADD"};function dp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":up[s.combine]||"ENVMAP_BLENDING_NONE"}function fp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ap(t),c=lp(t),u=hp(t),f=dp(t),h=fp(t),m=Kf(t),_=Jf(r),S=i.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),d.length>0&&(d+=`
`)):(p=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),d=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Zt?Zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Yf("linearToOutputTexel",t.outputColorSpace),$f(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=ta(a),a=mo(a,t),a=go(a,t),o=ta(o),o=mo(o,t),o=go(o,t),a=_o(a),o=_o(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=M+p+a,E=M+d+o,A=uo(i,i.VERTEX_SHADER,b),w=uo(i,i.FRAGMENT_SHADER,E);i.attachShader(S,A),i.attachShader(S,w),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function C(R){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(S)||"",k=i.getShaderInfoLog(A)||"",W=i.getShaderInfoLog(w)||"",B=N.trim(),G=k.trim(),F=W.trim();let Q=!0,$=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,A,w);else{const ce=po(i,A,"vertex"),pe=po(i,w,"fragment");qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ce+`
`+pe)}else B!==""?Ae("WebGLProgram: Program Info Log:",B):(G===""||F==="")&&($=!1);$&&(R.diagnostics={runnable:Q,programLog:B,vertexShader:{log:G,prefix:p},fragmentShader:{log:F,prefix:d}})}i.deleteShader(A),i.deleteShader(w),v=new xs(i,S),y=Qf(i,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(S,Hf)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=w,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _p(e),t.set(e,n)),n}}class _p{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function vp(s,e,t,n,i,r){const a=new Yo,o=new gp,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,y,V,R,N){const k=R.fog,W=N.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||B,G),Q=F&&F.mapping===ws?F.image.height:null,$=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ae("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ce!==void 0?ce.length:0;let ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Ne,rt,st,j;if($){const $e=tn[$];Ne=$e.vertexShader,rt=$e.fragmentShader}else Ne=v.vertexShader,rt=v.fragmentShader,o.update(v),st=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const ne=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,Re=!!v.map,vt=!!v.matcap,Ve=!!F,Ze=!!v.aoMap,et=!!v.lightMap,Oe=!!v.bumpMap,lt=!!v.normalMap,P=!!v.displacementMap,dt=!!v.emissiveMap,Ye=!!v.metalnessMap,nt=!!v.roughnessMap,Me=v.anisotropy>0,T=v.clearcoat>0,g=v.dispersion>0,I=v.iridescence>0,Y=v.sheen>0,Z=v.transmission>0,q=Me&&!!v.anisotropyMap,me=T&&!!v.clearcoatMap,ie=T&&!!v.clearcoatNormalMap,be=T&&!!v.clearcoatRoughnessMap,we=I&&!!v.iridescenceMap,K=I&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,ge=Y&&!!v.sheenRoughnessMap,ve=!!v.specularMap,he=!!v.specularColorMap,Be=!!v.specularIntensityMap,L=Z&&!!v.transmissionMap,se=Z&&!!v.thicknessMap,te=!!v.gradientMap,fe=!!v.alphaMap,J=v.alphaTest>0,X=!!v.alphaHash,_e=!!v.extensions;let Ce=Zt;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const it={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:rt,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:xi,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:vt,envMap:Ve,envMapMode:Ve&&F.mapping,envMapCubeUVHeight:Q,aoMap:Ze,lightMap:et,bumpMap:Oe,normalMap:lt,displacementMap:P,emissiveMap:dt,normalMapObjectSpace:lt&&v.normalMapType===Gl,normalMapTangentSpace:lt&&v.normalMapType===Vl,metalnessMap:Ye,roughnessMap:nt,anisotropy:Me,anisotropyMap:q,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:be,dispersion:g,iridescence:I,iridescenceMap:we,iridescenceThicknessMap:K,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:he,specularIntensityMap:Be,transmission:Z,transmissionMap:L,thicknessMap:se,gradientMap:te,opaque:v.transparent===!1&&v.blending===fi&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:X,combine:v.combine,mapUv:Re&&_(v.map.channel),aoMapUv:Ze&&_(v.aoMap.channel),lightMapUv:et&&_(v.lightMap.channel),bumpMapUv:Oe&&_(v.bumpMap.channel),normalMapUv:lt&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:dt&&_(v.emissiveMap.channel),metalnessMapUv:Ye&&_(v.metalnessMap.channel),roughnessMapUv:nt&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:Be&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:se&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Re||fe),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===Ke,decodeVideoTextureEmissive:dt&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)y.push(V),y.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(d(y,v),M(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function d(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const y=m[v.type];let V;if(y){const R=tn[y];V=Gc.clone(R.uniforms)}else V=v.uniforms;return V}function E(v,y){let V=u.get(y);return V!==void 0?++V.usedTimes:(V=new pp(s,y,v,i),c.push(V),u.set(y,V)),V}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function xp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,S,p,d){let M=s[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},s[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=_,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=p,M.group=d),e++,M}function l(h,m,_,S,p,d){const M=o(h,m,_,S,p,d);_.transmission>0?n.push(M):_.transparent===!0?i.push(M):t.push(M)}function c(h,m,_,S,p,d){const M=o(h,m,_,S,p,d);_.transmission>0?n.unshift(M):_.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,m){t.length>1&&t.sort(h||Mp),n.length>1&&n.sort(m||xo),i.length>1&&i.sort(m||xo)}function f(){for(let h=e,m=s.length;h<m;h++){const _=s[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:u}}function Sp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Mo,s.set(n,[a])):i>=r.length?(a=new Mo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ep(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function yp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bp=0;function Tp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wp(s){const e=new Ep,t=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new mt,a=new mt;function o(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,S=0,p=0,d=0,M=0,b=0,E=0,A=0,w=0,C=0;c.sort(Tp);for(let y=0,V=c.length;y<V;y++){const R=c[y],N=R.color,k=R.intensity,W=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vi?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=N.r*k,f+=N.g*k,h+=N.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],k);C++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,Q=t.get(R);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=G,m++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(N).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[S]=G;const F=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,F.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[S]=F.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=B,E++}S++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(N).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const F=R.shadow,Q=t.get(R);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=G,_++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[d]=G,d++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==b||v.numSpotShadows!==E||v.numSpotMaps!==A||v.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,v.directionalLength=m,v.pointLength=_,v.spotLength=S,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=b,v.numSpotShadows=E,v.numSpotMaps=A,v.numLightProbes=C,n.version=bp++)}function l(c,u){let f=0,h=0,m=0,_=0,S=0;const p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const b=c[d];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:n}}function So(s){const e=new wp(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ap(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new So(s),e.set(i,[o])):r>=a.length?(o=new So(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pp=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Dp=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Eo=new mt,Di=new D,hr=new D;function Lp(s,e,t){let n=new Jo;const i=new We,r=new We,a=new ht,o=new qc,l=new Yc,c={},u=t.maxTextureSize,f={[Un]:Ut,[Ut]:Un,[mn]:mn},h=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Rp,fragmentShader:Cp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new kt;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Le(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let d=this.type;this.render=function(w,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===xl&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ps);const y=s.getRenderTarget(),V=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),N=s.state;N.setBlending(vn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=d!==this.type;k&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=w.length;W<B;W++){const G=w[W],F=G.shadow;if(F===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const Q=F.getFrameExtents();i.multiply(Q),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,F.mapSize.y=r.y));const $=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=$,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Li){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new $t(i.x,i.y,{format:vi,type:Mn,minFilter:At,magFilter:At,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new Vi(i.x,i.y,nn),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=Sn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pt,F.map.depthTexture.magFilter=pt}else G.isPointLight?(F.map=new sl(i.x),F.map.depthTexture=new kc(i.x,an)):(F.map=new $t(i.x,i.y),F.map.depthTexture=new Vi(i.x,i.y,an)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=Sn,this.type===ps?(F.map.depthTexture.compareFunction=$?ha:ca,F.map.depthTexture.minFilter=At,F.map.depthTexture.magFilter=At):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pt,F.map.depthTexture.magFilter=pt);F.camera.updateProjectionMatrix()}const ce=F.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(F.map),s.clear());const ue=F.getViewport(pe);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),N.viewport(a)}if(G.isPointLight){const ue=F.camera,Ne=F.matrix,rt=G.distance||ue.far;rt!==ue.far&&(ue.far=rt,ue.updateProjectionMatrix()),Di.setFromMatrixPosition(G.matrixWorld),ue.position.copy(Di),hr.copy(ue.position),hr.add(Pp[pe]),ue.up.copy(Dp[pe]),ue.lookAt(hr),ue.updateMatrixWorld(),Ne.makeTranslation(-Di.x,-Di.y,-Di.z),Eo.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Eo,ue.coordinateSystem,ue.reversedDepth)}else F.updateMatrices(G);n=F.getFrustum(),E(C,v,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Li&&M(F,v),F.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(y,V,R)};function M(w,C){const v=e.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $t(i.x,i.y,{format:vi,type:Mn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,v,h,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,v,m,S,null)}function b(w,C,v,y){let V=null;const R=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)V=R;else if(V=v.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=V.uuid,k=C.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let B=W[k];B===void 0&&(B=V.clone(),W[k]=B,C.addEventListener("dispose",A)),V=B}if(V.visible=C.visible,V.wireframe=C.wireframe,y===Li?V.side=C.shadowSide!==null?C.shadowSide:C.side:V.side=C.shadowSide!==null?C.shadowSide:f[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,V.map=C.map,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const N=s.properties.get(V);N.light=v}return V}function E(w,C,v,y,V){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===Li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const k=e.update(w),W=w.material;if(Array.isArray(W)){const B=k.groups;for(let G=0,F=B.length;G<F;G++){const Q=B[G],$=W[Q.materialIndex];if($&&$.visible){const ce=b(w,$,y,V);w.onBeforeShadow(s,w,C,v,k,ce,Q),s.renderBufferDirect(v,null,k,ce,w,Q),w.onAfterShadow(s,w,C,v,k,ce,Q)}}}else if(W.visible){const B=b(w,W,y,V);w.onBeforeShadow(s,w,C,v,k,B,null),s.renderBufferDirect(v,null,k,B,w,null),w.onAfterShadow(s,w,C,v,k,B,null)}}const N=w.children;for(let k=0,W=N.length;k<W;k++)E(N[k],C,v,y,V)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],V=w.target.uuid;V in y&&(y[V].dispose(),delete y[V])}}}function Ip(s,e){function t(){let L=!1;const se=new ht;let te=null;const fe=new ht(0,0,0,0);return{setMask:function(J){te!==J&&!L&&(s.colorMask(J,J,J,J),te=J)},setLocked:function(J){L=J},setClear:function(J,X,_e,Ce,it){it===!0&&(J*=Ce,X*=Ce,_e*=Ce),se.set(J,X,_e,Ce),fe.equals(se)===!1&&(s.clearColor(J,X,_e,Ce),fe.copy(se))},reset:function(){L=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,te=null,fe=null,J=null;return{setReversed:function(X){if(se!==X){const _e=e.get("EXT_clip_control");X?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=X;const Ce=J;J=null,this.setClear(Ce)}},getReversed:function(){return se},setTest:function(X){X?ne(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(X){te!==X&&!L&&(s.depthMask(X),te=X)},setFunc:function(X){if(se&&(X=Jl[X]),fe!==X){switch(X){case pr:s.depthFunc(s.NEVER);break;case mr:s.depthFunc(s.ALWAYS);break;case gr:s.depthFunc(s.LESS);break;case gi:s.depthFunc(s.LEQUAL);break;case _r:s.depthFunc(s.EQUAL);break;case vr:s.depthFunc(s.GEQUAL);break;case xr:s.depthFunc(s.GREATER);break;case Mr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=X}},setLocked:function(X){L=X},setClear:function(X){J!==X&&(J=X,se&&(X=1-X),s.clearDepth(X))},reset:function(){L=!1,te=null,fe=null,J=null,se=!1}}}function i(){let L=!1,se=null,te=null,fe=null,J=null,X=null,_e=null,Ce=null,it=null;return{setTest:function($e){L||($e?ne(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function($e){se!==$e&&!L&&(s.stencilMask($e),se=$e)},setFunc:function($e,on,ln){(te!==$e||fe!==on||J!==ln)&&(s.stencilFunc($e,on,ln),te=$e,fe=on,J=ln)},setOp:function($e,on,ln){(X!==$e||_e!==on||Ce!==ln)&&(s.stencilOp($e,on,ln),X=$e,_e=on,Ce=ln)},setLocked:function($e){L=$e},setClear:function($e){it!==$e&&(s.clearStencil($e),it=$e)},reset:function(){L=!1,se=null,te=null,fe=null,J=null,X=null,_e=null,Ce=null,it=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],_=null,S=!1,p=null,d=null,M=null,b=null,E=null,A=null,w=null,C=new je(0,0,0),v=0,y=!1,V=null,R=null,N=null,k=null,W=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=F>=2);let $=null,ce={};const pe=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),Ne=new ht().fromArray(pe),rt=new ht().fromArray(ue);function st(L,se,te,fe){const J=new Uint8Array(4),X=s.createTexture();s.bindTexture(L,X),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<te;_e++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(se+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return X}const j={};j[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(gi),Oe(!1),lt(wa),ne(s.CULL_FACE),Ze(vn);function ne(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function re(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function Ie(L,se){return f[L]!==se?(s.bindFramebuffer(L,se),f[L]=se,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Te(L,se){let te=m,fe=!1;if(L){te=h.get(se),te===void 0&&(te=[],h.set(se,te));const J=L.textures;if(te.length!==J.length||te[0]!==s.COLOR_ATTACHMENT0){for(let X=0,_e=J.length;X<_e;X++)te[X]=s.COLOR_ATTACHMENT0+X;te.length=J.length,fe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,fe=!0);fe&&s.drawBuffers(te)}function Re(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const vt={[Xn]:s.FUNC_ADD,[Sl]:s.FUNC_SUBTRACT,[El]:s.FUNC_REVERSE_SUBTRACT};vt[yl]=s.MIN,vt[bl]=s.MAX;const Ve={[Tl]:s.ZERO,[wl]:s.ONE,[Al]:s.SRC_COLOR,[dr]:s.SRC_ALPHA,[Il]:s.SRC_ALPHA_SATURATE,[Dl]:s.DST_COLOR,[Cl]:s.DST_ALPHA,[Rl]:s.ONE_MINUS_SRC_COLOR,[fr]:s.ONE_MINUS_SRC_ALPHA,[Ll]:s.ONE_MINUS_DST_COLOR,[Pl]:s.ONE_MINUS_DST_ALPHA,[Ul]:s.CONSTANT_COLOR,[Nl]:s.ONE_MINUS_CONSTANT_COLOR,[Fl]:s.CONSTANT_ALPHA,[Ol]:s.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,se,te,fe,J,X,_e,Ce,it,$e){if(L===vn){S===!0&&(re(s.BLEND),S=!1);return}if(S===!1&&(ne(s.BLEND),S=!0),L!==Ml){if(L!==p||$e!==y){if((d!==Xn||E!==Xn)&&(s.blendEquation(s.FUNC_ADD),d=Xn,E=Xn),$e)switch(L){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Aa:s.blendFunc(s.ONE,s.ONE);break;case Ra:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ca:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",L);break}else switch(L){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ra:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ca:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",L);break}M=null,b=null,A=null,w=null,C.set(0,0,0),v=0,p=L,y=$e}return}J=J||se,X=X||te,_e=_e||fe,(se!==d||J!==E)&&(s.blendEquationSeparate(vt[se],vt[J]),d=se,E=J),(te!==M||fe!==b||X!==A||_e!==w)&&(s.blendFuncSeparate(Ve[te],Ve[fe],Ve[X],Ve[_e]),M=te,b=fe,A=X,w=_e),(Ce.equals(C)===!1||it!==v)&&(s.blendColor(Ce.r,Ce.g,Ce.b,it),C.copy(Ce),v=it),p=L,y=!1}function et(L,se){L.side===mn?re(s.CULL_FACE):ne(s.CULL_FACE);let te=L.side===Ut;se&&(te=!te),Oe(te),L.blending===fi&&L.transparent===!1?Ze(vn):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){V!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),V=L)}function lt(L){L!==_l?(ne(s.CULL_FACE),L!==R&&(L===wa?s.cullFace(s.BACK):L===vl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),R=L}function P(L){L!==N&&(G&&s.lineWidth(L),N=L)}function dt(L,se,te){L?(ne(s.POLYGON_OFFSET_FILL),(k!==se||W!==te)&&(k=se,W=te,a.getReversed()&&(se=-se),s.polygonOffset(se,te))):re(s.POLYGON_OFFSET_FILL)}function Ye(L){L?ne(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function nt(L){L===void 0&&(L=s.TEXTURE0+B-1),$!==L&&(s.activeTexture(L),$=L)}function Me(L,se,te){te===void 0&&($===null?te=s.TEXTURE0+B-1:te=$);let fe=ce[te];fe===void 0&&(fe={type:void 0,texture:void 0},ce[te]=fe),(fe.type!==L||fe.texture!==se)&&($!==te&&(s.activeTexture(te),$=te),s.bindTexture(L,se||j[L]),fe.type=L,fe.texture=se)}function T(){const L=ce[$];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function Z(){try{s.texSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function ie(){try{s.texStorage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function be(){try{s.texStorage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function we(){try{s.texImage2D(...arguments)}catch(L){qe("WebGLState:",L)}}function K(){try{s.texImage3D(...arguments)}catch(L){qe("WebGLState:",L)}}function ee(L){Ne.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ne.copy(L))}function ge(L){rt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function ve(L,se){let te=c.get(se);te===void 0&&(te=new WeakMap,c.set(se,te));let fe=te.get(L);fe===void 0&&(fe=s.getUniformBlockIndex(se,L.name),te.set(L,fe))}function he(L,se){const fe=c.get(se).get(L);l.get(se)!==fe&&(s.uniformBlockBinding(se,fe,L.__bindingPointIndex),l.set(se,fe))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},$=null,ce={},f={},h=new WeakMap,m=[],_=null,S=!1,p=null,d=null,M=null,b=null,E=null,A=null,w=null,C=new je(0,0,0),v=0,y=!1,V=null,R=null,N=null,k=null,W=null,Ne.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:re,bindFramebuffer:Ie,drawBuffers:Te,useProgram:Re,setBlending:Ze,setMaterial:et,setFlipSided:Oe,setCullFace:lt,setLineWidth:P,setPolygonOffset:dt,setScissorTest:Ye,activeTexture:nt,bindTexture:Me,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:we,texImage3D:K,updateUBOMapping:ve,uniformBlockBinding:he,texStorage2D:ie,texStorage3D:be,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:Be}}function Up(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):bs("canvas")}function S(T,g,I){let Y=1;const Z=Me(T);if((Z.width>I||Z.height>I)&&(Y=I/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Z.width),me=Math.floor(Y*Z.height);f===void 0&&(f=_(q,me));const ie=g?_(q,me):f;return ie.width=q,ie.height=me,ie.getContext("2d").drawImage(T,0,0,q,me),Ae("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+me+")."),ie}else return"data"in T&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,g,I,Y,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=g;if(g===s.RED&&(I===s.FLOAT&&(q=s.R32F),I===s.HALF_FLOAT&&(q=s.R16F),I===s.UNSIGNED_BYTE&&(q=s.R8)),g===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.R8UI),I===s.UNSIGNED_SHORT&&(q=s.R16UI),I===s.UNSIGNED_INT&&(q=s.R32UI),I===s.BYTE&&(q=s.R8I),I===s.SHORT&&(q=s.R16I),I===s.INT&&(q=s.R32I)),g===s.RG&&(I===s.FLOAT&&(q=s.RG32F),I===s.HALF_FLOAT&&(q=s.RG16F),I===s.UNSIGNED_BYTE&&(q=s.RG8)),g===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RG8UI),I===s.UNSIGNED_SHORT&&(q=s.RG16UI),I===s.UNSIGNED_INT&&(q=s.RG32UI),I===s.BYTE&&(q=s.RG8I),I===s.SHORT&&(q=s.RG16I),I===s.INT&&(q=s.RG32I)),g===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RGB8UI),I===s.UNSIGNED_SHORT&&(q=s.RGB16UI),I===s.UNSIGNED_INT&&(q=s.RGB32UI),I===s.BYTE&&(q=s.RGB8I),I===s.SHORT&&(q=s.RGB16I),I===s.INT&&(q=s.RGB32I)),g===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),I===s.UNSIGNED_INT&&(q=s.RGBA32UI),I===s.BYTE&&(q=s.RGBA8I),I===s.SHORT&&(q=s.RGBA16I),I===s.INT&&(q=s.RGBA32I)),g===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),g===s.RGBA){const me=Z?Es:He.getTransfer(Y);I===s.FLOAT&&(q=s.RGBA32F),I===s.HALF_FLOAT&&(q=s.RGBA16F),I===s.UNSIGNED_BYTE&&(q=me===Ke?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(T,g){let I;return T?g===null||g===an||g===zi?I=s.DEPTH24_STENCIL8:g===nn?I=s.DEPTH32F_STENCIL8:g===Bi&&(I=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===an||g===zi?I=s.DEPTH_COMPONENT24:g===nn?I=s.DEPTH_COMPONENT32F:g===Bi&&(I=s.DEPTH_COMPONENT16),I}function A(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==pt&&T.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),v(g),g.isVideoTexture&&u.delete(g)}function C(T){const g=T.target;g.removeEventListener("dispose",C),V(g)}function v(T){const g=n.get(T);if(g.__webglInit===void 0)return;const I=T.source,Y=h.get(I);if(Y){const Z=Y[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(T),Object.keys(Y).length===0&&h.delete(I)}n.remove(T)}function y(T){const g=n.get(T);s.deleteTexture(g.__webglTexture);const I=T.source,Y=h.get(I);delete Y[g.__cacheKey],a.memory.textures--}function V(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Z=0;Z<g.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(g.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)s.deleteFramebuffer(g.__webglFramebuffer[Y]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let Y=0,Z=I.length;Y<Z;Y++){const q=n.get(I[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(I[Y])}n.remove(T)}let R=0;function N(){R=0}function k(){const T=R;return T>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function W(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function B(T,g){const I=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Y=T.image;if(Y===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{j(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+g)}function G(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+g)}function F(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,g);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+g)}function Q(T,g){const I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){ne(I,T,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+g)}const $={[Ss]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},ce={[pt]:s.NEAREST,[Oo]:s.NEAREST_MIPMAP_NEAREST,[Xi]:s.NEAREST_MIPMAP_LINEAR,[At]:s.LINEAR,[Fs]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},pe={[Hl]:s.NEVER,[jl]:s.ALWAYS,[Wl]:s.LESS,[ca]:s.LEQUAL,[Xl]:s.EQUAL,[ha]:s.GEQUAL,[ql]:s.GREATER,[Yl]:s.NOTEQUAL};function ue(T,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===Fs||g.magFilter===Xi||g.magFilter===Yn||g.minFilter===At||g.minFilter===Fs||g.minFilter===Xi||g.minFilter===Yn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,$[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,$[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,$[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ce[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,pe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===pt||g.minFilter!==Xi&&g.minFilter!==Yn||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ne(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let Z=h.get(Y);Z===void 0&&(Z={},h.set(Y,Z));const q=W(g);if(q!==T.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[q].usedTimes++;const me=Z[T.__cacheKey];me!==void 0&&(Z[T.__cacheKey].usedTimes--,me.usedTimes===0&&y(g)),T.__cacheKey=q,T.__webglTexture=Z[q].texture}return I}function rt(T,g,I){return Math.floor(Math.floor(T/I)/g)}function st(T,g,I,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{q.sort((K,ee)=>K.start-ee.start);let me=0;for(let K=1;K<q.length;K++){const ee=q[me],ge=q[K],ve=ee.start+ee.count,he=rt(ge.start,g.width,4),Be=rt(ee.start,g.width,4);ge.start<=ve+1&&he===Be&&rt(ge.start+ge.count-1,g.width,4)===he?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,q[me]=ge)}q.length=me+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let K=0,ee=q.length;K<ee;K++){const ge=q[K],ve=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),Be=ve%g.width,L=Math.floor(ve/g.width),se=he,te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Be,L,se,te,I,Y,g.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function j(T,g,I){let Y=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=s.TEXTURE_3D);const Z=Ne(T,g),q=g.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+I);const me=n.get(q);if(q.version!==me.__version||Z===!0){t.activeTexture(s.TEXTURE0+I);const ie=He.getPrimaries(He.workingColorSpace),be=g.colorSpace===Dn?null:He.getPrimaries(g.colorSpace),we=g.colorSpace===Dn||ie===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let K=S(g.image,!1,i.maxTextureSize);K=nt(g,K);const ee=r.convert(g.format,g.colorSpace),ge=r.convert(g.type);let ve=b(g.internalFormat,ee,ge,g.colorSpace,g.isVideoTexture);ue(Y,g);let he;const Be=g.mipmaps,L=g.isVideoTexture!==!0,se=me.__version===void 0||Z===!0,te=q.dataReady,fe=A(g,K);if(g.isDepthTexture)ve=E(g.format===jn,g.type),se&&(L?t.texStorage2D(s.TEXTURE_2D,1,ve,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,ve,K.width,K.height,0,ee,ge,null));else if(g.isDataTexture)if(Be.length>0){L&&se&&t.texStorage2D(s.TEXTURE_2D,fe,ve,Be[0].width,Be[0].height);for(let J=0,X=Be.length;J<X;J++)he=Be[J],L?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(s.TEXTURE_2D,J,ve,he.width,he.height,0,ee,ge,he.data);g.generateMipmaps=!1}else L?(se&&t.texStorage2D(s.TEXTURE_2D,fe,ve,K.width,K.height),te&&st(g,K,ee,ge)):t.texImage2D(s.TEXTURE_2D,0,ve,K.width,K.height,0,ee,ge,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,ve,Be[0].width,Be[0].height,K.depth);for(let J=0,X=Be.length;J<X;J++)if(he=Be[J],g.format!==Ht)if(ee!==null)if(L){if(te)if(g.layerUpdates.size>0){const _e=Ja(he.width,he.height,g.format,g.type);for(const Ce of g.layerUpdates){const it=he.data.subarray(Ce*_e/he.data.BYTES_PER_ELEMENT,(Ce+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Ce,he.width,he.height,1,ee,it)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,K.depth,ee,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ve,he.width,he.height,K.depth,0,he.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,K.depth,ee,ge,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ve,he.width,he.height,K.depth,0,ee,ge,he.data)}else{L&&se&&t.texStorage2D(s.TEXTURE_2D,fe,ve,Be[0].width,Be[0].height);for(let J=0,X=Be.length;J<X;J++)he=Be[J],g.format!==Ht?ee!==null?L?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ve,he.width,he.height,0,he.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(s.TEXTURE_2D,J,ve,he.width,he.height,0,ee,ge,he.data)}else if(g.isDataArrayTexture)if(L){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,ve,K.width,K.height,K.depth),te)if(g.layerUpdates.size>0){const J=Ja(K.width,K.height,g.format,g.type);for(const X of g.layerUpdates){const _e=K.data.subarray(X*J/K.data.BYTES_PER_ELEMENT,(X+1)*J/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,ee,ge,_e)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ee,ge,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,K.width,K.height,K.depth,0,ee,ge,K.data);else if(g.isData3DTexture)L?(se&&t.texStorage3D(s.TEXTURE_3D,fe,ve,K.width,K.height,K.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ee,ge,K.data)):t.texImage3D(s.TEXTURE_3D,0,ve,K.width,K.height,K.depth,0,ee,ge,K.data);else if(g.isFramebufferTexture){if(se)if(L)t.texStorage2D(s.TEXTURE_2D,fe,ve,K.width,K.height);else{let J=K.width,X=K.height;for(let _e=0;_e<fe;_e++)t.texImage2D(s.TEXTURE_2D,_e,ve,J,X,0,ee,ge,null),J>>=1,X>>=1}}else if(Be.length>0){if(L&&se){const J=Me(Be[0]);t.texStorage2D(s.TEXTURE_2D,fe,ve,J.width,J.height)}for(let J=0,X=Be.length;J<X;J++)he=Be[J],L?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ee,ge,he):t.texImage2D(s.TEXTURE_2D,J,ve,ee,ge,he);g.generateMipmaps=!1}else if(L){if(se){const J=Me(K);t.texStorage2D(s.TEXTURE_2D,fe,ve,J.width,J.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee,ge,K)}else t.texImage2D(s.TEXTURE_2D,0,ve,ee,ge,K);p(g)&&d(Y),me.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ne(T,g,I){if(g.image.length!==6)return;const Y=Ne(T,g),Z=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+I);const me=He.getPrimaries(He.workingColorSpace),ie=g.colorSpace===Dn?null:He.getPrimaries(g.colorSpace),be=g.colorSpace===Dn||me===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!we&&!K?ee[X]=S(g.image[X],!0,i.maxCubemapSize):ee[X]=K?g.image[X].image:g.image[X],ee[X]=nt(g,ee[X]);const ge=ee[0],ve=r.convert(g.format,g.colorSpace),he=r.convert(g.type),Be=b(g.internalFormat,ve,he,g.colorSpace),L=g.isVideoTexture!==!0,se=q.__version===void 0||Y===!0,te=Z.dataReady;let fe=A(g,ge);ue(s.TEXTURE_CUBE_MAP,g);let J;if(we){L&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Be,ge.width,ge.height);for(let X=0;X<6;X++){J=ee[X].mipmaps;for(let _e=0;_e<J.length;_e++){const Ce=J[_e];g.format!==Ht?ve!==null?L?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Ce.width,Ce.height,ve,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,Ce.width,Ce.height,0,Ce.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,0,0,Ce.width,Ce.height,ve,he,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e,Be,Ce.width,Ce.height,0,ve,he,Ce.data)}}}else{if(J=g.mipmaps,L&&se){J.length>0&&fe++;const X=Me(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Be,X.width,X.height)}for(let X=0;X<6;X++)if(K){L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,ve,he,ee[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,ee[X].width,ee[X].height,0,ve,he,ee[X].data);for(let _e=0;_e<J.length;_e++){const it=J[_e].image[X].image;L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,it.width,it.height,ve,he,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,it.width,it.height,0,ve,he,it.data)}}else{L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,he,ee[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Be,ve,he,ee[X]);for(let _e=0;_e<J.length;_e++){const Ce=J[_e];L?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,0,0,ve,he,Ce.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,_e+1,Be,ve,he,Ce.image[X])}}}p(g)&&d(s.TEXTURE_CUBE_MAP),q.__version=Z.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function re(T,g,I,Y,Z,q){const me=r.convert(I.format,I.colorSpace),ie=r.convert(I.type),be=b(I.internalFormat,me,ie,I.colorSpace),we=n.get(g),K=n.get(I);if(K.__renderTarget=g,!we.__hasExternalTextures){const ee=Math.max(1,g.width>>q),ge=Math.max(1,g.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,be,ee,ge,g.depth,0,me,ie,null):t.texImage2D(Z,q,be,ee,ge,0,me,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),dt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Z,K.__webglTexture,0,P(g)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Z,K.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(T,g,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=E(g.stencilBuffer,Z),me=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),q,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),q,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,q,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,T)}else{const Y=g.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],me=r.convert(q.format,q.colorSpace),ie=r.convert(q.type),be=b(q.internalFormat,me,ie,q.colorSpace);dt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),be,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),be,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,be,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(T,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ue(s.TEXTURE_CUBE_MAP,g.depthTexture);const we=r.convert(g.depthTexture.format),K=r.convert(g.depthTexture.type);let ee;g.depthTexture.format===Sn?ee=s.DEPTH_COMPONENT24:g.depthTexture.format===jn&&(ee=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,g.width,g.height,0,we,K,null)}}else B(g.depthTexture,0);const q=Z.__webglTexture,me=P(g),ie=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,be=g.depthTexture.format===jn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===Sn)dt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,ie,q,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,be,ie,q,0);else if(g.depthTexture.format===jn)dt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,ie,q,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,be,ie,q,0);else throw new Error("Unknown depthTexture format")}function Re(T){const g=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)Te(g.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Te(g.__webglFramebuffer[0],T,0):Te(g.__webglFramebuffer,T,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ie(g.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ie(g.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(T,g,I){const Y=n.get(T);g!==void 0&&re(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&Re(T)}function Ve(T){const g=T.texture,I=n.get(T),Y=n.get(g);T.addEventListener("dispose",C);const Z=T.textures,q=T.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=g.version,a.memory.textures++),q){I.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ie]=[];for(let be=0;be<g.mipmaps.length;be++)I.__webglFramebuffer[ie][be]=s.createFramebuffer()}else I.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)I.__webglFramebuffer[ie]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(me)for(let ie=0,be=Z.length;ie<be;ie++){const we=n.get(Z[ie]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&dt(T)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const be=Z[ie];I.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[ie]);const we=r.convert(be.format,be.colorSpace),K=r.convert(be.type),ee=b(be.internalFormat,we,K,be.colorSpace,T.isXRRenderTarget===!0),ge=P(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,I.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ue(s.TEXTURE_CUBE_MAP,g);for(let ie=0;ie<6;ie++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)re(I.__webglFramebuffer[ie][be],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be);else re(I.__webglFramebuffer[ie],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(g)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,be=Z.length;ie<be;ie++){const we=Z[ie],K=n.get(we);let ee=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),ue(ee,we),re(I.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+ie,ee,0),p(we)&&d(ee)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),ue(ie,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)re(I.__webglFramebuffer[be],T,g,s.COLOR_ATTACHMENT0,ie,be);else re(I.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,ie,0);p(g)&&d(ie),t.unbindTexture()}T.depthBuffer&&Re(T)}function Ze(T){const g=T.textures;for(let I=0,Y=g.length;I<Y;I++){const Z=g[I];if(p(Z)){const q=M(T),me=n.get(Z).__webglTexture;t.bindTexture(q,me),d(q),t.unbindTexture()}}}const et=[],Oe=[];function lt(T){if(T.samples>0){if(dt(T)===!1){const g=T.textures,I=T.width,Y=T.height;let Z=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(T),ie=g.length>1;if(ie)for(let we=0;we<g.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const be=T.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<g.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const K=n.get(g[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,I,Y,0,0,I,Y,Z,s.NEAREST),l===!0&&(et.length=0,Oe.length=0,et.push(s.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(q),Oe.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<g.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const K=n.get(g[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,K,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function P(T){return Math.min(i.maxSamples,T.samples)}function dt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ye(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function nt(T,g){const I=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==xi&&I!==Dn&&(He.getTransfer(I)===Ke?(Y!==Ht||Z!==Bt)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",I)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=vt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Np(s,e){function t(n,i=Dn){let r;const a=He.getTransfer(i);if(n===Bt)return s.UNSIGNED_BYTE;if(n===sa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ko)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bo)return s.BYTE;if(n===zo)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===ia)return s.INT;if(n===an)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===Mn)return s.HALF_FLOAT;if(n===Go)return s.ALPHA;if(n===Ho)return s.RGB;if(n===Ht)return s.RGBA;if(n===Sn)return s.DEPTH_COMPONENT;if(n===jn)return s.DEPTH_STENCIL;if(n===Wo)return s.RED;if(n===aa)return s.RED_INTEGER;if(n===vi)return s.RG;if(n===oa)return s.RG_INTEGER;if(n===la)return s.RGBA_INTEGER;if(n===ms||n===gs||n===_s||n===vs)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===yr||n===br||n===Tr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wr||n===Ar||n===Rr||n===Cr||n===Pr||n===Dr||n===Lr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wr||n===Ar)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cr)return r.COMPRESSED_R11_EAC;if(n===Pr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return r.COMPRESSED_RG11_EAC;if(n===Lr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Vr||n===Gr||n===Hr||n===Wr||n===Xr||n===qr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ir)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ur)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Or)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Br)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qr)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===jr||n===Zr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$r||n===Kr||n===Jr||n===Qr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Op=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new el(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:Fp,fragmentShader:Op,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zp extends Si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",p=new Bp,d={},M=t.getContextAttributes();let b=null,E=null;const A=[],w=[],C=new We;let v=null;const y=new Gt;y.viewport=new ht;const V=new Gt;V.viewport=new ht;const R=[y,V],N=new Zc;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=A[j];return ne===void 0&&(ne=new Gs,A[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=A[j];return ne===void 0&&(ne=new Gs,A[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=A[j];return ne===void 0&&(ne=new Gs,A[j]=ne),ne.getHandSpace()};function B(j){const ne=w.indexOf(j.inputSource);if(ne===-1)return;const re=A[ne];re!==void 0&&(re.update(j.inputSource,j.frame,c||a),re.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",F);for(let j=0;j<A.length;j++){const ne=w[j];ne!==null&&(w[j]=null,A[j].disconnect(ne))}k=null,W=null,p.reset();for(const j in d)delete d[j];e.setRenderTarget(b),m=null,h=null,f=null,i=null,E=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ie=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?jn:Sn,Ie=M.stencil?zi:an);const Re={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Re),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new $t(h.textureWidth,h.textureHeight,{format:Ht,type:Bt,depthTexture:new Vi(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new $t(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(j){for(let ne=0;ne<j.removed.length;ne++){const re=j.removed[ne],Ie=w.indexOf(re);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(re))}for(let ne=0;ne<j.added.length;ne++){const re=j.added[ne];let Ie=w.indexOf(re);if(Ie===-1){for(let Re=0;Re<A.length;Re++)if(Re>=w.length){w.push(re),Ie=Re;break}else if(w[Re]===null){w[Re]=re,Ie=Re;break}if(Ie===-1)break}const Te=A[Ie];Te&&Te.connect(re)}}const Q=new D,$=new D;function ce(j,ne,re){Q.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Ie=Q.distanceTo($),Te=ne.projectionMatrix.elements,Re=re.projectionMatrix.elements,vt=Te[14]/(Te[10]-1),Ve=Te[14]/(Te[10]+1),Ze=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],Oe=(Te[8]-1)/Te[0],lt=(Re[8]+1)/Re[0],P=vt*Oe,dt=vt*lt,Ye=Ie/(-Oe+lt),nt=Ye*-Oe;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(nt),j.translateZ(Ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=vt+Ye,T=Ve+Ye,g=P-nt,I=dt+(Ie-nt),Y=Ze*Ve/T*Me,Z=et*Ve/T*Me;j.projectionMatrix.makePerspective(g,I,Y,Z,Me,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pe(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ne=j.near,re=j.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(re=p.depthFar)),N.near=V.near=y.near=ne,N.far=V.far=y.far=re,(k!==N.near||W!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,W=N.far),N.layers.mask=j.layers.mask|6,y.layers.mask=N.layers.mask&-5,V.layers.mask=N.layers.mask&-3;const Ie=j.parent,Te=N.cameras;pe(N,Ie);for(let Re=0;Re<Te.length;Re++)pe(Te[Re],Ie);Te.length===2?ce(N,y,V):N.projectionMatrix.copy(y.projectionMatrix),ue(j,N,Ie)};function ue(j,ne,re){re===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ki*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(j){return d[j]};let Ne=null;function rt(j,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ie=!1;re.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let Ve=0;Ve<re.length;Ve++){const Ze=re[Ve];let et=null;if(m!==null)et=m.getViewport(Ze);else{const lt=f.getViewSubImage(h,Ze);et=lt.viewport,Ve===0&&(e.setRenderTargetTextures(E,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(E))}let Oe=R[Ve];Oe===void 0&&(Oe=new Gt,Oe.layers.enable(Ve),Oe.viewport=new ht,R[Ve]=Oe),Oe.matrix.fromArray(Ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(et.x,et.y,et.width,et.height),Ve===0&&(N.matrix.copy(Oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(Oe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Ve=f.getDepthInformation(re[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,i.renderState)}if(Te&&Te.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<re.length;Ve++){const Ze=re[Ve].camera;if(Ze){let et=d[Ze];et||(et=new el,d[Ze]=et);const Oe=f.getCameraImage(Ze);et.sourceTexture=Oe}}}}for(let re=0;re<A.length;re++){const Ie=w[re],Te=A[re];Ie!==null&&Te!==void 0&&Te.update(Ie,ne,c||a)}Ne&&Ne(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const st=new il;st.setAnimationLoop(rt),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const Gn=new En,kp=new mt;function Vp(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,tl(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,b,E){d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ut&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ut&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),b=M.envMap,E=M.envMapRotation;b&&(p.envMap.value=b,Gn.copy(E),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Gn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gp(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const E=b.program;n.uniformBlockBinding(M,E)}function c(M,b){let E=i[M.id];E===void 0&&(_(M),E=u(M),i[M.id]=E,M.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(M,A);const w=e.render.frame;r[M.id]!==w&&(h(M),r[M.id]=w)}function u(M){const b=f();M.__bindingPointIndex=b;const E=s.createBuffer(),A=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=i[M.id],E=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,C=E.length;w<C;w++){const v=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,V=v.length;y<V;y++){const R=v[y];if(m(R,w,y,A)===!0){const N=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let B=0;B<k.length;B++){const G=k[B],F=S(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,N+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,b,E,A){const w=M.value,C=b+"_"+E;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const v=A[C];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return A[C]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function _(M){const b=M.uniforms;let E=0;const A=16;for(let C=0,v=b.length;C<v;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let V=0,R=y.length;V<R;V++){const N=y[V],k=Array.isArray(N.value)?N.value:[N.value];for(let W=0,B=k.length;W<B;W++){const G=k[W],F=S(G),Q=E%A,$=Q%F.boundary,ce=Q+$;E+=$,ce!==0&&A-ce<F.storage&&(E+=A-ce),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=F.storage}}}const w=E%A;return w>0&&(E+=A-w),M.__size=E,M.__cache={},this}function S(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}const Hp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let en=null;function Wp(){return en===null&&(en=new Nc(Hp,16,16,vi,Mn),en.name="DFG_LUT",en.minFilter=At,en.magFilter=At,en.wrapS=gn,en.wrapT=gn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class Xp{constructor(e={}){const{canvas:t=$l(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Bt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=m,p=new Set([la,oa,aa]),d=new Set([Bt,an,Bi,zi,sa,ra]),M=new Uint32Array(4),b=new Int32Array(4);let E=null,A=null;const w=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let V=!1;this._outputColorSpace=It;let R=0,N=0,k=null,W=-1,B=null;const G=new ht,F=new ht;let Q=null;const $=new je(0);let ce=0,pe=t.width,ue=t.height,Ne=1,rt=null,st=null;const j=new ht(0,0,pe,ue),ne=new ht(0,0,pe,ue);let re=!1;const Ie=new Jo;let Te=!1,Re=!1;const vt=new mt,Ve=new D,Ze=new ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function lt(){return k===null?Ne:1}let P=n;function dt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${na}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",it,!1),P===null){const U="webgl2";if(P=dt(U,x),P===null)throw dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw qe("WebGLRenderer: "+x.message),x}let Ye,nt,Me,T,g,I,Y,Z,q,me,ie,be,we,K,ee,ge,ve,he,Be,L,se,te,fe;function J(){Ye=new Wd(P),Ye.init(),se=new Np(P,Ye),nt=new Fd(P,Ye,e,se),Me=new Ip(P,Ye),nt.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),T=new Yd(P),g=new xp,I=new Up(P,Ye,Me,g,nt,se,T),Y=new Hd(y),Z=new Jc(P),te=new Ud(P,Z),q=new Xd(P,Z,T,te),me=new Zd(P,q,Z,te,T),he=new jd(P,nt,I),ee=new Od(g),ie=new vp(y,Y,Ye,nt,te,ee),be=new Vp(y,g),we=new Sp,K=new Ap(Ye),ve=new Id(y,Y,Me,me,_,l),ge=new Lp(y,me,nt),fe=new Gp(P,T,nt,Me),Be=new Nd(P,Ye,T),L=new qd(P,Ye,T),T.programs=ie.programs,y.capabilities=nt,y.extensions=Ye,y.properties=g,y.renderLists=we,y.shadowMap=ge,y.state=Me,y.info=T}J(),S!==Bt&&(v=new Kd(S,t.width,t.height,i,r));const X=new zp(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=Ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(x){x!==void 0&&(Ne=x,this.setSize(pe,ue,!1))},this.getSize=function(x){return x.set(pe,ue)},this.setSize=function(x,U,H=!0){if(X.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=x,ue=U,t.width=Math.floor(x*Ne),t.height=Math.floor(U*Ne),H===!0&&(t.style.width=x+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(pe*Ne,ue*Ne).floor()},this.setDrawingBufferSize=function(x,U,H){pe=x,ue=U,Ne=H,t.width=Math.floor(x*H),t.height=Math.floor(U*H),this.setViewport(0,0,x,U)},this.setEffects=function(x){if(S===Bt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let U=0;U<x.length;U++)if(x[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(G)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,U,H,z){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,U,H,z),Me.viewport(G.copy(j).multiplyScalar(Ne).round())},this.getScissor=function(x){return x.copy(ne)},this.setScissor=function(x,U,H,z){x.isVector4?ne.set(x.x,x.y,x.z,x.w):ne.set(x,U,H,z),Me.scissor(F.copy(ne).multiplyScalar(Ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){Me.setScissorTest(re=x)},this.setOpaqueSort=function(x){rt=x},this.setTransparentSort=function(x){st=x},this.getClearColor=function(x){return x.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,H=!0){let z=0;if(x){let O=!1;if(k!==null){const oe=k.texture.format;O=p.has(oe)}if(O){const oe=k.texture.type,de=d.has(oe),le=ve.getClearColor(),xe=ve.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;de?(M[0]=Ee,M[1]=De,M[2]=ze,M[3]=xe,P.clearBufferuiv(P.COLOR,0,M)):(b[0]=Ee,b[1]=De,b[2]=ze,b[3]=xe,P.clearBufferiv(P.COLOR,0,b))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),H&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ve.dispose(),we.dispose(),K.dispose(),g.dispose(),Y.dispose(),me.dispose(),te.dispose(),fe.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",va),X.removeEventListener("sessionend",xa),Nn.stop()};function _e(x){x.preventDefault(),Ua("WebGLRenderer: Context Lost."),V=!0}function Ce(){Ua("WebGLRenderer: Context Restored."),V=!1;const x=T.autoReset,U=ge.enabled,H=ge.autoUpdate,z=ge.needsUpdate,O=ge.type;J(),T.autoReset=x,ge.enabled=U,ge.autoUpdate=H,ge.needsUpdate=z,ge.type=O}function it(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $e(x){const U=x.target;U.removeEventListener("dispose",$e),on(U)}function on(x){ln(x),g.remove(x)}function ln(x){const U=g.get(x).programs;U!==void 0&&(U.forEach(function(H){ie.releaseProgram(H)}),x.isShaderMaterial&&ie.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,H,z,O,oe){U===null&&(U=et);const de=O.isMesh&&O.matrixWorld.determinant()<0,le=ul(x,U,H,z,O);Me.setMaterial(z,de);let xe=H.index,Ee=1;if(z.wireframe===!0){if(xe=q.getWireframeAttribute(H),xe===void 0)return;Ee=2}const De=H.drawRange,ze=H.attributes.position;let ye=De.start*Ee,Je=(De.start+De.count)*Ee;oe!==null&&(ye=Math.max(ye,oe.start*Ee),Je=Math.min(Je,(oe.start+oe.count)*Ee)),xe!==null?(ye=Math.max(ye,0),Je=Math.min(Je,xe.count)):ze!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,ze.count));const ct=Je-ye;if(ct<0||ct===1/0)return;te.setup(O,z,le,H,xe);let ot,Qe=Be;if(xe!==null&&(ot=Z.get(xe),Qe=L,Qe.setIndex(ot)),O.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*lt()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(O.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),Me.setLineWidth(bt*lt()),O.isLineSegments?Qe.setMode(P.LINES):O.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else O.isPoints?Qe.setMode(P.POINTS):O.isSprite&&Qe.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ts("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,Se=O._multiDrawCounts,Nt=O._multiDrawCount,Xe=xe?Z.get(xe).bytesPerElement:1,Wt=g.get(z).currentProgram.getUniforms();for(let Jt=0;Jt<Nt;Jt++)Wt.setValue(P,"_gl_DrawID",Jt),Qe.render(bt[Jt]/Xe,Se[Jt])}else if(O.isInstancedMesh)Qe.renderInstances(ye,ct,O.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,bt);Qe.renderInstances(ye,ct,Se)}else Qe.render(ye,ct)};function _a(x,U,H){x.transparent===!0&&x.side===mn&&x.forceSinglePass===!1?(x.side=Ut,x.needsUpdate=!0,Wi(x,U,H),x.side=Un,x.needsUpdate=!0,Wi(x,U,H),x.side=mn):Wi(x,U,H)}this.compile=function(x,U,H=null){H===null&&(H=x),A=K.get(H),A.init(U),C.push(A),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),x!==H&&x.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const z=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const le=oe[de];_a(le,H,O),z.add(le)}else _a(oe,H,O),z.add(oe)}),A=C.pop(),z},this.compileAsync=function(x,U,H=null){const z=this.compile(x,U,H);return new Promise(O=>{function oe(){if(z.forEach(function(de){g.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(x);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ls=null;function hl(x){Ls&&Ls(x)}function va(){Nn.stop()}function xa(){Nn.start()}const Nn=new il;Nn.setAnimationLoop(hl),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(x){Ls=x,X.setAnimationLoop(x),x===null?Nn.stop():Nn.start()},X.addEventListener("sessionstart",va),X.addEventListener("sessionend",xa),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const H=X.enabled===!0&&X.isPresenting===!0,z=v!==null&&(k===null||H)&&v.begin(y,k);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,k),A=K.get(x,C.length),A.init(U),C.push(A),vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ie.setFromProjectionMatrix(vt,sn,U.reversedDepth),Re=this.localClippingEnabled,Te=ee.init(this.clippingPlanes,Re),E=we.get(x,w.length),E.init(),w.push(E),X.enabled===!0&&X.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&Is(de,U,-1/0,y.sortObjects)}Is(x,U,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(rt,st),Oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Oe&&ve.addToRenderList(E,x),this.info.render.frame++,Te===!0&&ee.beginShadows();const O=A.state.shadowsArray;if(ge.render(O,x,U),Te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&v.hasRenderPass())===!1){const de=E.opaque,le=E.transmissive;if(A.setupLights(),U.isArrayCamera){const xe=U.cameras;if(le.length>0)for(let Ee=0,De=xe.length;Ee<De;Ee++){const ze=xe[Ee];Sa(de,le,x,ze)}Oe&&ve.render(x);for(let Ee=0,De=xe.length;Ee<De;Ee++){const ze=xe[Ee];Ma(E,x,ze,ze.viewport)}}else le.length>0&&Sa(de,le,x,U),Oe&&ve.render(x),Ma(E,x,U)}k!==null&&N===0&&(I.updateMultisampleRenderTarget(k),I.updateRenderTargetMipmap(k)),z&&v.end(y),x.isScene===!0&&x.onAfterRender(y,x,U),te.resetDefaultState(),W=-1,B=null,C.pop(),C.length>0?(A=C[C.length-1],Te===!0&&ee.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function Is(x,U,H,z){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ie.intersectsSprite(x)){z&&Ze.setFromMatrixPosition(x.matrixWorld).applyMatrix4(vt);const de=me.update(x),le=x.material;le.visible&&E.push(x,de,le,H,Ze.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ie.intersectsObject(x))){const de=me.update(x),le=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ze.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ze.copy(de.boundingSphere.center)),Ze.applyMatrix4(x.matrixWorld).applyMatrix4(vt)),Array.isArray(le)){const xe=de.groups;for(let Ee=0,De=xe.length;Ee<De;Ee++){const ze=xe[Ee],ye=le[ze.materialIndex];ye&&ye.visible&&E.push(x,de,ye,H,Ze.z,ze)}}else le.visible&&E.push(x,de,le,H,Ze.z,null)}}const oe=x.children;for(let de=0,le=oe.length;de<le;de++)Is(oe[de],U,H,z)}function Ma(x,U,H,z){const{opaque:O,transmissive:oe,transparent:de}=x;A.setupLightsView(H),Te===!0&&ee.setGlobalState(y.clippingPlanes,H),z&&Me.viewport(G.copy(z)),O.length>0&&Hi(O,U,H),oe.length>0&&Hi(oe,U,H),de.length>0&&Hi(de,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Sa(x,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const ye=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new $t(1,1,{generateMipmaps:!0,type:ye?Mn:Bt,minFilter:Yn,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const oe=A.state.transmissionRenderTarget[z.id],de=z.viewport||G;oe.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const le=y.getRenderTarget(),xe=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor($),ce=y.getClearAlpha(),ce<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ve.render(H);const De=y.toneMapping;y.toneMapping=Zt;const ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Te===!0&&ee.setGlobalState(y.clippingPlanes,z),Hi(x,H,z),I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Je=0,ct=U.length;Je<ct;Je++){const ot=U[Je],{object:Qe,geometry:bt,material:Se,group:Nt}=ot;if(Se.side===mn&&Qe.layers.test(z.layers)){const Xe=Se.side;Se.side=Ut,Se.needsUpdate=!0,Ea(Qe,H,z,bt,Se,Nt),Se.side=Xe,Se.needsUpdate=!0,ye=!0}}ye===!0&&(I.updateMultisampleRenderTarget(oe),I.updateRenderTargetMipmap(oe))}y.setRenderTarget(le,xe,Ee),y.setClearColor($,ce),ze!==void 0&&(z.viewport=ze),y.toneMapping=De}function Hi(x,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,oe=x.length;O<oe;O++){const de=x[O],{object:le,geometry:xe,group:Ee}=de;let De=de.material;De.allowOverride===!0&&z!==null&&(De=z),le.layers.test(H.layers)&&Ea(le,U,H,xe,De,Ee)}}function Ea(x,U,H,z,O,oe){x.onBeforeRender(y,U,H,z,O,oe),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(y,U,H,z,x,oe),O.transparent===!0&&O.side===mn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,y.renderBufferDirect(H,U,z,O,x,oe),O.side=Un,O.needsUpdate=!0,y.renderBufferDirect(H,U,z,O,x,oe),O.side=mn):y.renderBufferDirect(H,U,z,O,x,oe),x.onAfterRender(y,U,H,z,O,oe)}function Wi(x,U,H){U.isScene!==!0&&(U=et);const z=g.get(x),O=A.state.lights,oe=A.state.shadowsArray,de=O.state.version,le=ie.getParameters(x,O.state,oe,U,H),xe=ie.getProgramCacheKey(le);let Ee=z.programs;z.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const De=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;z.envMap=Y.get(x.envMap||z.environment,De),z.envMapRotation=z.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",$e),Ee=new Map,z.programs=Ee);let ze=Ee.get(xe);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===de)return ba(x,le),ze}else le.uniforms=ie.getUniforms(x),x.onBeforeCompile(le,y),ze=ie.acquireProgram(le,xe),Ee.set(xe,ze),z.uniforms=le.uniforms;const ye=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ye.clippingPlanes=ee.uniform),ba(x,le),z.needsLights=fl(x),z.lightsStateVersion=de,z.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=ze,z.uniformsList=null,ze}function ya(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=xs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function ba(x,U){const H=g.get(x);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ul(x,U,H,z,O){U.isScene!==!0&&(U=et),I.resetTextureUnits();const oe=U.fog,de=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,le=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xi,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=Y.get(z.envMap||de,xe),De=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let ot=Zt;z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ot=y.toneMapping);const Qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=Qe!==void 0?Qe.length:0,Se=g.get(z),Nt=A.state.lights;if(Te===!0&&(Re===!0||x!==B)){const xt=x===B&&z.id===W;ee.setState(z,x,xt)}let Xe=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Nt.state.version||Se.outputColorSpace!==le||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==Ee||z.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==ze||Se.morphTargets!==ye||Se.morphNormals!==Je||Se.morphColors!==ct||Se.toneMapping!==ot||Se.morphTargetsCount!==bt)&&(Xe=!0):(Xe=!0,Se.__version=z.version);let Wt=Se.currentProgram;Xe===!0&&(Wt=Wi(z,U,O));let Jt=!1,Fn=!1,$n=!1;const tt=Wt.getUniforms(),yt=Se.uniforms;if(Me.useProgram(Wt.program)&&(Jt=!0,Fn=!0,$n=!0),z.id!==W&&(W=z.id,Fn=!0),Jt||B!==x){Me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),tt.setValue(P,"projectionMatrix",x.projectionMatrix),tt.setValue(P,"viewMatrix",x.matrixWorldInverse);const bn=tt.map.cameraPosition;bn!==void 0&&bn.setValue(P,Ve.setFromMatrixPosition(x.matrixWorld)),nt.logarithmicDepthBuffer&&tt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),B!==x&&(B=x,Fn=!0,$n=!0)}if(Se.needsLights&&(Nt.state.directionalShadowMap.length>0&&tt.setValue(P,"directionalShadowMap",Nt.state.directionalShadowMap,I),Nt.state.spotShadowMap.length>0&&tt.setValue(P,"spotShadowMap",Nt.state.spotShadowMap,I),Nt.state.pointShadowMap.length>0&&tt.setValue(P,"pointShadowMap",Nt.state.pointShadowMap,I)),O.isSkinnedMesh){tt.setOptional(P,O,"bindMatrix"),tt.setOptional(P,O,"bindMatrixInverse");const xt=O.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),tt.setValue(P,"boneTexture",xt.boneTexture,I))}O.isBatchedMesh&&(tt.setOptional(P,O,"batchingTexture"),tt.setValue(P,"batchingTexture",O._matricesTexture,I),tt.setOptional(P,O,"batchingIdTexture"),tt.setValue(P,"batchingIdTexture",O._indirectTexture,I),tt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&tt.setValue(P,"batchingColorTexture",O._colorsTexture,I));const yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(O,H,Wt),(Fn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,tt.setValue(P,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Wp()),Fn&&(tt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&dl(yt,$n),oe&&z.fog===!0&&be.refreshFogUniforms(yt,oe),be.refreshMaterialUniforms(yt,z,Ne,ue,A.state.transmissionRenderTarget[x.id]),xs.upload(P,ya(Se),yt,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xs.upload(P,ya(Se),yt,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tt.setValue(P,"center",O.center),tt.setValue(P,"modelViewMatrix",O.modelViewMatrix),tt.setValue(P,"normalMatrix",O.normalMatrix),tt.setValue(P,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xt=z.uniformsGroups;for(let bn=0,Kn=xt.length;bn<Kn;bn++){const Ta=xt[bn];fe.update(Ta,Wt),fe.bind(Ta,Wt)}}return Wt}function dl(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function fl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,U,H){const z=g.get(x);z.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=U,g.get(x.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const H=g.get(x);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const pl=P.createFramebuffer();this.setRenderTarget=function(x,U=0,H=0){k=x,R=U,N=H;let z=null,O=!1,oe=!1;if(x){const le=g.get(x);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(P.FRAMEBUFFER,le.__webglFramebuffer),G.copy(x.viewport),F.copy(x.scissor),Q=x.scissorTest,Me.viewport(G),Me.scissor(F),Me.setScissorTest(Q),W=-1;return}else if(le.__webglFramebuffer===void 0)I.setupRenderTarget(x);else if(le.__hasExternalTextures)I.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const De=x.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&g.has(De)&&(x.width!==De.image.width||x.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);const Ee=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?z=Ee[U][H]:z=Ee[U],O=!0):x.samples>0&&I.useMultisampledRTT(x)===!1?z=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[H]:z=Ee,G.copy(x.viewport),F.copy(x.scissor),Q=x.scissorTest}else G.copy(j).multiplyScalar(Ne).floor(),F.copy(ne).multiplyScalar(Ne).floor(),Q=re;if(H!==0&&(z=pl),Me.bindFramebuffer(P.FRAMEBUFFER,z)&&Me.drawBuffers(x,z),Me.viewport(G),Me.scissor(F),Me.setScissorTest(Q),O){const le=g.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,H)}else if(oe){const le=U;for(let xe=0;xe<x.textures.length;xe++){const Ee=g.get(x.textures[xe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xe,Ee.__webglTexture,H,le)}}else if(x!==null&&H!==0){const le=g.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,le.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(x,U,H,z,O,oe,de,le=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Me.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Ee=x.textures[le],De=Ee.format,ze=Ee.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(De)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(ze)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-z&&H>=0&&H<=x.height-O&&P.readPixels(U,H,z,O,se.convert(De),se.convert(ze),oe)}finally{const Ee=k!==null?g.get(k).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,U,H,z,O,oe,de,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe)if(U>=0&&U<=x.width-z&&H>=0&&H<=x.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,xe);const Ee=x.textures[le],De=Ee.format,ze=Ee.type;if(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+le),!nt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(U,H,z,O,se.convert(De),se.convert(ze),0);const Je=k!==null?g.get(k).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Je);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kl(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(ye),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,H=0){const z=Math.pow(2,-H),O=Math.floor(x.image.width*z),oe=Math.floor(x.image.height*z),de=U!==null?U.x:0,le=U!==null?U.y:0;I.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,de,le,O,oe),Me.unbindTexture()};const ml=P.createFramebuffer(),gl=P.createFramebuffer();this.copyTextureToTexture=function(x,U,H=null,z=null,O=0,oe=0){let de,le,xe,Ee,De,ze,ye,Je,ct;const ot=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(H!==null)de=H.max.x-H.min.x,le=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,De=H.min.y,ze=H.isBox3?H.min.z:0;else{const yt=Math.pow(2,-O);de=Math.floor(ot.width*yt),le=Math.floor(ot.height*yt),x.isDataArrayTexture?xe=ot.depth:x.isData3DTexture?xe=Math.floor(ot.depth*yt):xe=1,Ee=0,De=0,ze=0}z!==null?(ye=z.x,Je=z.y,ct=z.z):(ye=0,Je=0,ct=0);const Qe=se.convert(U.format),bt=se.convert(U.type);let Se;U.isData3DTexture?(I.setTexture3D(U,0),Se=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Se=P.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Se=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Nt=P.getParameter(P.UNPACK_ROW_LENGTH),Xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),Fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,De),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const $n=x.isDataArrayTexture||x.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const yt=g.get(x),yn=g.get(U),xt=g.get(yt.__renderTarget),bn=g.get(yn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,xt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Kn=0;Kn<xe;Kn++)$n&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(x).__webglTexture,O,ze+Kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(U).__webglTexture,oe,ct+Kn)),P.blitFramebuffer(Ee,De,de,le,ye,Je,de,le,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||g.has(x)){const yt=g.get(x),yn=g.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,ml),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,gl);for(let xt=0;xt<xe;xt++)$n?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.__webglTexture,O,ze+xt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,O),tt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,oe,ct+xt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,oe),O!==0?P.blitFramebuffer(Ee,De,de,le,ye,Je,de,le,P.COLOR_BUFFER_BIT,P.NEAREST):tt?P.copyTexSubImage3D(Se,oe,ye,Je,ct+xt,Ee,De,de,le):P.copyTexSubImage2D(Se,oe,ye,Je,Ee,De,de,le);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else tt?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(Se,oe,ye,Je,ct,de,le,xe,Qe,bt,ot.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,oe,ye,Je,ct,de,le,xe,Qe,ot.data):P.texSubImage3D(Se,oe,ye,Je,ct,de,le,xe,Qe,bt,ot):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,ye,Je,de,le,Qe,bt,ot.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,ye,Je,ot.width,ot.height,Qe,ot.data):P.texSubImage2D(P.TEXTURE_2D,oe,ye,Je,de,le,Qe,bt,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fn),oe===0&&U.generateMipmaps&&P.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&I.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?I.setTextureCube(x,0):x.isData3DTexture?I.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?I.setTexture2DArray(x,0):I.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){R=0,N=0,k=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}class qp{#t=new Map;on(e,t){const n=this.#t.get(e)??[];return n.push(t),this.#t.set(e,n),()=>this.off(e,t)}off(e,t){const n=this.#t.get(e);if(!n)return;const i=n.indexOf(t);i>=0&&n.splice(i,1)}emit(e,t=void 0){const n=this.#t.get(e);if(n)for(const i of[...n])i(t)}clear(){this.#t.clear()}}class Yp{constructor(e){this.domElement=e,this.keys=new Set,this.justPressed=new Set,this.lookX=0,this.lookY=0,this.firePressed=!1,this.fireHeld=!1,window.addEventListener("keydown",t=>{this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.domElement&&(this.lookX+=t.movementX,this.lookY+=t.movementY)}),document.addEventListener("mousedown",t=>{t.button!==0||document.pointerLockElement!==this.domElement||(this.firePressed=!0,this.fireHeld=!0)}),document.addEventListener("mouseup",t=>{t.button===0&&(this.fireHeld=!1)})}requestPointerLock(){this.domElement.requestPointerLock()}down(e){return this.keys.has(e)}consume(e){const t=this.justPressed.has(e);return this.justPressed.delete(e),t}consumeLook(){const e={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,e}consumeFirePressed(){const e=this.firePressed;return this.firePressed=!1,e}endFrame(){this.justPressed.clear(),this.firePressed=!1}}class jp{constructor(e=4266374){this.state=e>>>0}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}}const Oi={pm:{id:"pm",name:"ТАБЕЛЬНЫЙ ПМ",short:"ПМ",kind:"hitscan",damage:1,cooldown:.28,range:20,spread:.006,ammo:null,pellets:1},shotgun:{id:"shotgun",name:"ОБРЕЗ / ИЖ",short:"ИЖ",kind:"hitscan",damage:1.15,cooldown:.78,range:9,spread:.075,ammo:"shells",pellets:7},ak:{id:"ak",name:"АК-ОБРАЗНАЯ",short:"АК",kind:"hitscan",damage:.72,cooldown:.105,range:24,spread:.018,ammo:"rifle",pellets:1,automatic:!0},fungus:{id:"fungus",name:"ГРИБНОЙ ГРАНАТОМЁТ",short:"О-ГР",kind:"fungalProjectile",damage:0,cooldown:.85,range:15,spread:0,ammo:"fungalShell",pellets:1},drill:{id:"drill",name:"МИЦЕЛИЕВЫЙ БУР",short:"БУР",kind:"melee",damage:3.4,cooldown:.58,range:2.2,spread:0,ammo:"sporeCharge",pellets:1},resonator:{id:"resonator",name:"РЕЗОНАТОР",short:"РЕЗ",kind:"resonator",damage:2.2,cooldown:.22,range:28,spread:.002,ammo:"resonance",pellets:1,automatic:!0}},yo={shells:"12К",rifle:"5.45",fungalShell:"О-41",sporeCharge:"СП",resonance:"РЕЗ"},Ms={fungusLauncher:{id:"fungusLauncher",name:"ГРИБНОЙ ГРАНАТОМЁТ",requiresUnlock:"fungusLauncher",cost:{spores:4},output:{weapon:"fungus",ammo:"fungalShell",count:1}},inhaler:{id:"inhaler",name:"ИНГАЛЯТОР",requiresUnlock:"inhaler",cost:{spores:2},output:{item:"inhaler",count:1}},fungalShell:{id:"fungalShell",name:"ГРИБНОЙ ЗАРЯД",requiresUnlock:"fungalShell",cost:{spores:3},output:{ammo:"fungalShell",count:1}},shield:{id:"shield",name:"МИЦЕЛИЕВЫЙ ЩИТ",requiresUnlock:"shield",cost:{spores:4},output:{item:"shield",count:1}},drillCharge:{id:"drillCharge",name:"ПОДЗАРЯДКА БУРА",requiresUnlock:"drillCharge",cost:{spores:1},output:{ammo:"sporeCharge",count:2}}};class Zp{constructor(e,t,n){this.inventory=e,this.belt=t,this.events=n,this.unlocked=new Set}unlock(e){this.unlocked.has(e)||(this.unlocked.add(e),this.events?.emit("craft:unlocked",{id:e,recipe:Ms[e]}))}canCraft(e){const t=Ms[e];return!t||!this.unlocked.has(t.requiresUnlock)?!1:Object.entries(t.cost).every(([n,i])=>this.inventory.has(n,i))}craft(e){const t=Ms[e];if(!t||!this.canCraft(e))return!1;for(const[n,i]of Object.entries(t.cost))this.inventory.remove(n,i);if(t.output.item&&!this.inventory.add(t.output.item,t.output.count,{name:t.name})){for(const[n,i]of Object.entries(t.cost))this.inventory.add(n,i,{name:"СПОРЫ О-41"});return!1}return t.output.weapon&&this.belt.unlock(t.output.weapon),t.output.ammo&&this.belt.addAmmo(t.output.ammo,t.output.count),this.events?.emit("craft:completed",{id:e,recipe:t}),!0}}class $p{constructor(e){this.root=e,this.messageTimer=0,this.subtitleVisible=!1,this.inventoryVisible=!1,this.compassJam=0,this.transitionTimer=0,this.#t(),this.radarCtx=this.radar.getContext("2d",{alpha:!1})}#t(){this.root.innerHTML=`
      <div id="shell">
        <header id="topbar">
          <div class="weapon-slot active" data-belt="0"><span class="slot-index">1</span><strong id="belt0Name">ПМ</strong><small id="belt0Ammo">∞</small></div>
          <div class="weapon-slot" data-belt="1"><span class="slot-index">2</span><strong id="belt1Name">—</strong><small id="belt1Ammo">—</small></div>
          <div class="instrument"><span>БИОСКАНЕР</span><b id="scannerState">94%</b></div>
          <div class="instrument"><span>КОНТУР</span><b id="contourText">1-Й</b></div>
          <div class="instrument health-number"><span>СОСТОЯНИЕ</span><b id="healthNum">08</b></div>
          <div class="instrument"><span>О-41</span><b id="sporeCount">00</b></div>
        </header>

        <main id="viewportFrame">
          <div id="viewport">
            <div id="crosshair"></div>
            <div id="damageFlash"></div>
            <div id="shieldOverlay"></div>
            <div id="worldMessage"></div>
            <div id="interactionPrompt"></div>
            <div id="objectiveBox"><span>ФОКУС</span><b id="objectiveText"></b></div>
            <div id="subtitle"><b id="subtitleSpeaker"></b><span id="subtitleText"></span></div>
            <div id="transition"><div id="transitionCode">КОНТУР-041</div><strong id="transitionTitle"></strong><small id="transitionSubtitle"></small></div>
            <div id="ending"></div>
          </div>
        </main>

        <footer id="bottom">
          <section class="panel radar-panel">
            <canvas id="radar" width="240" height="140"></canvas>
            <div class="radar-side"><b>О-41</b><span id="contacts">КОНТ: 0</span><span id="compassText">000°</span><span>167.05 MHz</span></div>
          </section>

          <section class="panel status-panel">
            <div id="systemLine">К.О.Н.Т.У.Р. // КАНАЛ 041</div>
            <div id="backpack"></div>
            <div class="meters">
              <div><label>ЗДОРОВЬЕ <span id="hpText">8/8</span></label><div id="healthCells"></div></div>
              <div><label>ЗАРАЖЕНИЕ <span id="infectionText">0%</span></label><div class="infection-track"><div id="infectionFill"></div></div></div>
            </div>
          </section>

          <section class="panel dossier-panel">
            <div class="portrait"><div class="head"></div></div>
            <div><b class="unit">К.О.Н.Т.У.Р.</b><span>ОПЕР: «СКАЛЬПЕЛЬ»</span><span>ДОПУСК: 03-К</span><span>ОБЪЕКТ: О-41/86</span><span id="dossierStatus">РЕЗОНАНС: ?</span></div>
          </section>
        </footer>
      </div>

      <div id="pauseOverlay">
        <div class="pause-window">
          <header><b>ПОЛЕВОЙ ИНВЕНТАРЬ / КРАФТ</b><span> I — ЗАКРЫТЬ</span></header>
          <div class="pause-grid">
            <section><h2>РЮКЗАК / 4 СЛОТА</h2><div id="pauseInventory"></div><p class="help">H — использовать ингалятор<br>Q — активировать мицелиевый щит</p></section>
            <section><h2>КРАФТ О-41</h2><div id="recipes"></div></section>
            <section><h2>ОРУЖЕЙНЫЙ ПОЯС / 2 СЛОТА</h2><div id="weapons"></div></section>
          </div>
        </div>
      </div>

      <div id="startOverlay">
        <div class="start-card">
          <div class="stamp">СОВ. СЕКРЕТНО</div>
          <h1>КОНТУР-041</h1>
          <p>ОБЪЕКТ «ГИДРОЛОГИЯ-7» · ZОНА-14 · 1986</p>
          <p class="controls">WASD — движение · мышь — обзор · ЛКМ — огонь<br>E — взаимодействие · 1/2 — оружейный пояс · I — инвентарь<br>H — ингалятор · Q — щит</p>
          <button id="startButton">ВОЙТИ В 1-Й КОНТУР</button>
        </div>
      </div>
    `;const e=t=>this.root.querySelector(t);this.shell=e("#shell"),this.viewport=e("#viewport"),this.startOverlay=e("#startOverlay"),this.startButton=e("#startButton"),this.pauseOverlay=e("#pauseOverlay"),this.worldMessage=e("#worldMessage"),this.interactionPrompt=e("#interactionPrompt"),this.objectiveText=e("#objectiveText"),this.subtitle=e("#subtitle"),this.subtitleSpeaker=e("#subtitleSpeaker"),this.subtitleText=e("#subtitleText"),this.transition=e("#transition"),this.transitionTitle=e("#transitionTitle"),this.transitionSubtitle=e("#transitionSubtitle"),this.ending=e("#ending"),this.damageFlash=e("#damageFlash"),this.shieldOverlay=e("#shieldOverlay"),this.radar=e("#radar"),this.contacts=e("#contacts"),this.compassText=e("#compassText"),this.contourText=e("#contourText"),this.healthNum=e("#healthNum"),this.sporeCount=e("#sporeCount"),this.hpText=e("#hpText"),this.infectionText=e("#infectionText"),this.infectionFill=e("#infectionFill"),this.healthCells=e("#healthCells"),this.backpack=e("#backpack"),this.pauseInventory=e("#pauseInventory"),this.recipes=e("#recipes"),this.weapons=e("#weapons"),this.systemLine=e("#systemLine"),this.dossierStatus=e("#dossierStatus"),this.beltSlots=[...this.root.querySelectorAll(".weapon-slot")],this.belt0Name=e("#belt0Name"),this.belt1Name=e("#belt1Name"),this.belt0Ammo=e("#belt0Ammo"),this.belt1Ammo=e("#belt1Ammo");for(let t=0;t<8;t++){const n=document.createElement("i");n.className="hp-cell",this.healthCells.appendChild(n)}this.hpCells=[...this.healthCells.children]}bindStart(e){this.startButton.addEventListener("click",e)}bindCraft(e){this.recipes.addEventListener("click",t=>{const n=t.target.closest("[data-craft]");n&&e(n.dataset.craft)})}bindEquip(e){this.weapons.addEventListener("click",t=>{const n=t.target.closest("[data-equip]");n&&e(Number(n.dataset.slot),n.dataset.equip)})}setPointerLocked(e){e&&this.startOverlay.classList.add("hidden")}setPauseVisible(e){this.inventoryVisible=e,this.pauseOverlay.classList.toggle("visible",e)}setInteractionPrompt(e){this.interactionPrompt.textContent=e}setObjective(e){this.objectiveText.textContent=e||"—"}setSystemLine(e){this.systemLine.textContent=e}showMessage(e,t=1.2){this.worldMessage.textContent=e,this.worldMessage.classList.add("visible"),this.messageTimer=t}showSubtitle(e,t){this.subtitleSpeaker.textContent=e,this.subtitleText.textContent=t,this.subtitle.classList.add("visible")}hideSubtitle(){this.subtitle.classList.remove("visible")}showTransition(e){this.shell.dataset.palette=e.palette;const t={industrial:["#557866","#d3b953"],archive:["#416c62","#9fc56b"],reactor:["#7a5d35","#d07035"],organic:["#5f4937","#82a44d"],white:["#8098a0","#d8dfd5"]},[n,i]=t[e.palette]??t.industrial;this.shell.style.setProperty("--zone",n),this.shell.style.setProperty("--zoneText",i),this.transitionTitle.textContent=`${e.number}. ${e.title}`,this.transitionSubtitle.textContent=e.contour,this.transition.classList.add("visible"),this.transitionTimer=2.25,this.contourText.textContent=e.contour.replace(" КОНТУР","")}jamCompass(e=2.5){this.compassJam=Math.max(this.compassJam,e)}flashDamage(){this.damageFlash.classList.remove("hit"),this.damageFlash.offsetWidth,this.damageFlash.classList.add("hit")}showEnding(e){const t=e==="burn";this.ending.innerHTML=t?'<div class="ending-card burn"><b>ЗАЧИСТКА ПОДТВЕРЖДЕНА</b><p>Контур уничтожен. В официальном отчёте О-41 снова становится «аварийным биологическим агентом». Последняя запись Скальпеля заканчивается за 11 секунд до детонации.</p><small>ПРЕДУПРЕЖДЕНИЕ НЕ ВЫШЛО ЗА ПЕРИМЕТР.</small></div>':'<div class="ending-card merge"><b>НОВЫЙ УЗЕЛ</b><p>Скальпель выходит из Zоны-14 один. Приборы К.О.Н.Т.У.Р. показывают норму. В следующие недели десятки людей начинают видеть один и тот же белый коридор во сне.</p><small>СИГНАЛ ПОКИНУЛ ПЕРИМЕТР.</small></div>',this.ending.classList.add("visible")}showDeath(){this.ending.innerHTML='<div class="ending-card burn"><b>СВЯЗЬ ПОТЕРЯНА</b><p>ОПЕРАТИВНИК «СКАЛЬПЕЛЬ» НЕ ОТВЕЧАЕТ.</p><small>R — ПЕРЕЗАПУСК</small></div>',this.ending.classList.add("visible")}update(e,t){this.messageTimer=Math.max(0,this.messageTimer-e),this.messageTimer<=0&&this.worldMessage.classList.remove("visible"),this.compassJam=Math.max(0,this.compassJam-e),this.transitionTimer=Math.max(0,this.transitionTimer-e),this.transitionTimer<=0&&this.transition.classList.remove("visible");const{player:n,infection:i,inventory:r,belt:a,crafting:o,objective:l,enemies:c,spores:u,levelMeta:f}=t,h=Math.ceil(n.health);this.healthNum.textContent=String(h).padStart(2,"0"),this.hpText.textContent=`${h}/${n.maxHealth}`,this.hpCells.forEach((p,d)=>p.classList.toggle("on",d<h));const m=Math.round(i.value),_=(performance.now()/260|0)%2===0?7:-5,S=i.hudIsLying?Math.max(0,Math.min(99,m+_)):m;this.infectionText.textContent=`${S}%`,this.infectionFill.style.width=`${m}%`,this.dossierStatus.textContent=i.tier>=3?"РЕЗОНАНС: ПОДТВ.":"РЕЗОНАНС: ?",this.sporeCount.textContent=String(r.count("spores")).padStart(2,"0"),this.shieldOverlay.classList.toggle("active",n.shieldTimer>0),this.setObjective(l.text),f&&(this.contourText.textContent=f.contour.replace(" КОНТУР","")),this.#s(a,i),this.#i(r,o,a),this.#n(t)}#s(e,t){const n=e.slots,i=[this.belt0Name,this.belt1Name],r=[this.belt0Ammo,this.belt1Ammo];for(let a=0;a<2;a++){const o=n[a],l=o?Oi[o]:null;if(i[a].textContent=l?.short??"—",!l)r[a].textContent="—";else if(!l.ammo)r[a].textContent="∞";else{const c=e.ammo[l.ammo]??0,u=t.hudIsLying&&a===e.activeSlot?Math.max(0,c+((performance.now()/180|0)%3-1)*3):c;r[a].textContent=`${yo[l.ammo]??l.ammo}:${u}`}this.beltSlots[a].classList.toggle("active",a===e.activeSlot)}}#i(e,t,n){const i=e.snapshot().map((r,a)=>`
      <div class="inv-slot ${r?"full":""}"><span>${a+1}</span><b>${r?.name??"ПУСТО"}</b><small>${r?`x${r.count}`:""}</small></div>
    `).join("");this.backpack.innerHTML=i,this.pauseInventory.innerHTML=i,this.recipes.innerHTML=Object.values(Ms).map(r=>{const a=t.unlocked.has(r.requiresUnlock),o=Object.entries(r.cost).map(([l,c])=>`${l==="spores"?"СПОРЫ":l} x${c}`).join(", ");return`<div class="recipe ${a?"":"locked"}"><b>${r.name}</b><small>${a?o:"СХЕМА НЕИЗВЕСТНА"}</small><button data-craft="${r.id}" ${!a||!t.canCraft(r.id)?"disabled":""}>СОБРАТЬ</button></div>`}).join(""),this.weapons.innerHTML=[...n.unlocked].map(r=>{const a=Oi[r];return`<div class="weapon-card"><b>${a.name}</b><small>${a.ammo?`${yo[a.ammo]}: ${n.ammo[a.ammo]??0}`:"БОЕЗАПАС: ∞"}</small><div><button data-equip="${r}" data-slot="0">В СЛОТ 1</button><button data-equip="${r}" data-slot="1">В СЛОТ 2</button></div></div>`}).join("")}#n(e){const t=this.radarCtx,n=this.radar.width,i=this.radar.height;t.fillStyle="#020403",t.fillRect(0,0,n,i),t.strokeStyle="#173f34",t.lineWidth=1;for(let f=0;f<n;f+=12)t.beginPath(),t.moveTo(f,0),t.lineTo(f,i),t.stroke();for(let f=0;f<i;f+=12)t.beginPath(),t.moveTo(0,f),t.lineTo(n,f),t.stroke();const r=e.player.position,a=5.5,o=f=>({x:n/2+(f.x-r.x)*a,y:i/2+(f.z-r.z)*a}),l=(f,h,m=4)=>{const _=o(f);_.x<2||_.y<2||_.x>n-2||_.y>i-2||(t.fillStyle=h,t.fillRect(Math.round(_.x-m/2),Math.round(_.y-m/2),m,m))};if(this.compassJam<=0){for(const f of e.enemies.enemies)f.alive&&l(f.group.position,"#99482c",f.type==="hive"?6:4);for(const f of e.spores.items)l(f.group.position,"#55b64a",3);e.objective.target&&l(e.objective.target,"#caa348",5)}else for(let f=0;f<8;f++)l({x:r.x+Math.sin(f*3.4+performance.now()*.002)*8,z:r.z+Math.cos(f*2.1)*8},f%2?"#99482c":"#55b64a",3);t.fillStyle="#d8dfd5",t.fillRect(n/2-2,i/2-2,4,4),t.strokeStyle="#d8dfd5",t.beginPath(),t.moveTo(n/2,i/2),t.lineTo(n/2-Math.sin(e.player.yaw)*12,i/2-Math.cos(e.player.yaw)*12),t.stroke();const c=(-e.player.yaw*180/Math.PI%360+360)%360,u=this.compassJam>0?(c+Math.sin(performance.now()*.018)*120+360)%360:c;this.compassText.textContent=`${String(Math.round(u)).padStart(3,"0")}°`,this.contacts.textContent=`КОНТ: ${e.enemies.alive().length}`}}class Kp{constructor(e){this.host=e,this.renderer=new Xp({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=It,this.renderer.toneMapping=Zt,this.renderer.autoClear=!1,this.renderer.domElement.className="game-canvas",e.prepend(this.renderer.domElement),this.width=480,this.height=270,this.target=new $t(this.width,this.height,{minFilter:pt,magFilter:pt,format:Ht,type:Bt,depthBuffer:!0}),this.postScene=new Zo,this.postCamera=new ga(-1,1,1,-1,0,1),this.material=new Kt({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{tDiffuse:{value:this.target.texture},resolution:{value:new We(this.width,this.height)},time:{value:0},infection:{value:0},wail:{value:0},hive:{value:0},hallucination:{value:0},ending:{value:0},flicker:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float time;
        uniform float infection;
        uniform float wail;
        uniform float hive;
        uniform float hallucination;
        uniform float ending;
        uniform float flicker;
        varying vec2 vUv;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        void main() {
          vec2 px = 1.0 / resolution;
          float distortion = infection * 0.65 + wail * 1.5 + hive * 0.55 + hallucination * 0.8;
          vec2 wobble = vec2(
            sin(vUv.y * (28.0 + hive * 18.0) + time * (4.0 + wail * 7.0)) * px.x * distortion,
            sin(vUv.x * 23.0 + time * 2.0) * px.y * hive * 0.35
          );

          float chroma = infection * 0.9 + wail * 1.6;
          float r = texture2D(tDiffuse, vUv + wobble + vec2(px.x * chroma, 0.0)).r;
          float g = texture2D(tDiffuse, vUv + wobble).g;
          float b = texture2D(tDiffuse, vUv + wobble - vec2(px.x * chroma, 0.0)).b;
          vec3 color = vec3(r, g, b);

          float scan = mod(floor(gl_FragCoord.y), 2.0);
          color *= mix(0.88, 1.0, scan);
          float noise = hash(floor(gl_FragCoord.xy) + floor(time * 18.0)) - 0.5;
          color += noise * (0.014 + infection * 0.038 + wail * 0.04);

          if (hallucination > 0.01) {
            float echo = texture2D(tDiffuse, vec2(1.0 - vUv.x, vUv.y) + wobble * 2.0).g;
            color.g = mix(color.g, echo, hallucination * 0.12);
          }

          color *= 1.0 - flicker * (0.22 + 0.20 * step(0.5, hash(vec2(floor(time * 24.0), 4.0))));

          // ending: -1 burn, +1 merge
          if (ending < -0.5) color *= vec3(1.0, 0.55, 0.38);
          if (ending > 0.5) color = mix(color, vec3(dot(color, vec3(0.333))), 0.25);

          gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
        }
      `}),this.postScene.add(new Le(new In(2,2),this.material)),this.resize()}resize(){const e=this.host.getBoundingClientRect(),t=Math.max(.5,e.width/Math.max(1,e.height));return this.width=Math.max(320,Math.min(560,Math.round(e.width/2.6))),this.height=Math.max(180,Math.round(this.width/t)),this.renderer.setSize(this.width,this.height,!1),this.target.setSize(this.width,this.height),this.material.uniforms.resolution.value.set(this.width,this.height),{width:this.width,height:this.height,aspect:t}}render(e,t,n,i={}){this.material.uniforms.time.value=n,this.material.uniforms.infection.value=i.infection??0,this.material.uniforms.wail.value=i.wail??0,this.material.uniforms.hive.value=i.hive??0,this.material.uniforms.hallucination.value=i.hallucination??0,this.material.uniforms.ending.value=i.ending??0,this.material.uniforms.flicker.value=i.flicker??0,this.renderer.setRenderTarget(this.target),this.renderer.clear(),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postScene,this.postCamera)}}const Pe={black:"#050708",dark:"#1f2c2f",slate:"#34484e",steel:"#526a73",light:"#8098a0",pale:"#b4c3c1",white:"#d8dfd5",darkBrown:"#2a1714",brown:"#5b3023",rust:"#99482c",orange:"#d07035",darkGreen:"#0f2f1e",green:"#256b39",lime:"#55b64a",yellow:"#caa348"};function bo(s,e=64,t=64){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,s(i,e,t);const r=new zc(n);return r.magFilter=pt,r.minFilter=Oo,r.wrapS=r.wrapT=Ss,r.colorSpace=It,r}class Jp{constructor(e=Math.random){this.random=e,this.cache=new Map}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.#t(e);return this.cache.set(e,t),t}sign(e,t=""){return bo((n,i,r)=>{n.fillStyle=Pe.dark,n.fillRect(0,0,i,r),n.strokeStyle=Pe.pale,n.lineWidth=3,n.strokeRect(4,4,i-8,r-8),n.fillStyle=Pe.white,n.font="bold 25px monospace",n.fillText(e,14,32),n.fillStyle=Pe.orange,n.font="bold 11px monospace",n.fillText(t,15,53)},256,64)}#t(e){const t=Pe,n=this.random;return bo(i=>{if(e==="industrialWall"){i.fillStyle=t.light,i.fillRect(0,0,64,64),i.fillStyle=t.steel;for(let r=0;r<64;r+=16)i.fillRect(0,r,64,2);i.fillStyle=t.dark;for(let r=0;r<64;r+=16)i.fillRect(r,0,2,64);i.fillStyle=t.rust,i.fillRect(0,33,64,7),i.fillStyle=t.orange,i.fillRect(0,33,64,2),i.fillStyle=t.pale;for(let r=0;r<35;r++)i.fillRect(n()*64|0,n()*31|0,1,1)}else if(e==="archiveWall"){i.fillStyle=t.slate,i.fillRect(0,0,64,64),i.fillStyle=t.steel;for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);i.fillStyle=t.yellow,i.fillRect(0,47,64,2),i.fillStyle=t.dark,i.fillRect(6,7,52,35),i.fillStyle=t.green;for(let r=0;r<14;r++)i.fillRect(10+r%7*7,11+(r/7|0)*11,2,2)}else if(e==="reactorWall"){i.fillStyle=t.dark,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=0;r<64;r+=8)i.fillRect(r,0,2,64);i.fillStyle=t.rust,i.fillRect(0,28,64,6),i.fillStyle=t.yellow;for(let r=-10;r<70;r+=15)i.save(),i.translate(r,29),i.rotate(-.7),i.fillRect(0,0,5,15),i.restore()}else if(e==="organicWall"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.brown;for(let r=0;r<64;r+=8){i.beginPath(),i.moveTo(0,r);for(let a=0;a<=64;a+=8)i.lineTo(a,r+Math.sin((a+r)*.2)*3);i.strokeStyle=t.brown,i.lineWidth=4,i.stroke()}i.fillStyle=t.green;for(let r=0;r<30;r++)i.fillRect(n()*64|0,n()*64|0,2,2);i.fillStyle=t.lime;for(let r=0;r<10;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="whiteWall"){i.fillStyle=t.white,i.fillRect(0,0,64,64),i.fillStyle=t.pale;for(let r=0;r<30;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="floor"){i.fillStyle=t.brown,i.fillRect(0,0,64,64),i.fillStyle=t.darkBrown;for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);for(let r=0;r<64;r+=16)i.fillRect(r,0,1,64);i.fillStyle=t.rust;for(let r=0;r<55;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="organicFloor"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.rust;for(let r=0;r<50;r++)i.fillRect(n()*64|0,n()*64|0,2,1);i.strokeStyle=t.green,i.lineWidth=2;for(let r=4;r<64;r+=12)i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(18,r+8,42,r-8,64,r+2),i.stroke()}else if(e==="ceiling"){i.fillStyle=t.steel,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=0;r<64;r+=16)i.fillRect(r,0,1,64);for(let r=0;r<64;r+=16)i.fillRect(0,r,64,1);i.fillStyle=t.pale;for(let r=0;r<20;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="crate"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.rust,i.fillRect(5,5,54,54),i.fillStyle=t.brown,i.fillRect(9,9,46,46),i.fillStyle=t.darkBrown,i.fillRect(13,13,38,38),i.fillStyle=t.yellow;for(let r=-20;r<80;r+=18)i.save(),i.translate(r,4),i.rotate(.75),i.fillRect(0,0,6,78),i.restore();i.fillStyle=t.darkBrown,i.fillRect(14,14,36,36)}else if(e==="door")i.fillStyle=t.slate,i.fillRect(0,0,64,64),i.fillStyle=t.light,i.fillRect(4,4,56,56),i.fillStyle=t.dark,i.fillRect(8,8,48,48),i.fillStyle=t.steel,i.fillRect(11,11,42,42),i.fillStyle=t.rust,i.fillRect(0,30,64,9);else if(e==="server"){i.fillStyle=t.dark,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=5;r<60;r+=10)i.fillRect(6,r,52,7);for(let r=8;r<60;r+=10)i.fillStyle=r%20?t.green:t.orange,i.fillRect(11,r,2,2),i.fillRect(17,r,2,2)}})}}class Qp{constructor(){this.boxes=[]}clear(){this.boxes.length=0}addBox(e,t,n,i,r="wall"){const a={minX:e-n/2,maxX:e+n/2,minZ:t-i/2,maxZ:t+i/2,active:!0,tag:r};return this.boxes.push(a),a}blocked(e,t,n=.32){return this.boxes.some(i=>i.active&&e>i.minX-n&&e<i.maxX+n&&t>i.minZ-n&&t<i.maxZ+n)}move(e,t,n,i=.32){const r=e.x+t;this.blocked(r,e.z,i)||(e.x=r);const a=e.z+n;return this.blocked(e.x,a,i)||(e.z=a),e}segmentHitsWall(e,t){const n=Math.max(2,Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.2));for(let i=1;i<=n;i++){const r=i/n,a=e.x+(t.x-e.x)*r,o=e.z+(t.z-e.z)*r;if(this.boxes.some(l=>l.active&&a>l.minX&&a<l.maxX&&o>l.minZ&&o<l.maxZ))return!0}return!1}}class em{constructor(e){this.events=e,this.items=[],this.tmp=new D}clear(){this.items.length=0}add({id:e,position:t,radius:n=1.1,mode:i="interact",prompt:r="E — ВЗАИМОДЕЙСТВИЕ",enabled:a=!0,onUse:o}){const l={id:e,position:t.clone?t.clone():new D(t.x,t.y??0,t.z),radius:n,mode:i,prompt:r,enabled:a,consumed:!1,onUse:o};return this.items.push(l),l}update(e,t,n){let i=null,r=1/0;for(const a of this.items){if(!a.enabled||a.consumed)continue;this.tmp.copy(e).sub(a.position),this.tmp.y=0;const o=this.tmp.length();if(!(o>a.radius)){if(a.mode==="pickup"){a.onUse?.(a)!==!1&&(a.consumed=!0,this.events?.emit("interaction:used",{id:a.id,mode:a.mode}));continue}o<r&&(i=a,r=o)}}n.setInteractionPrompt(i?.prompt??""),i&&t.consume("KeyE")&&(i.onUse?.(i)===!0&&(i.consumed=!0),this.events?.emit("interaction:used",{id:i.id,mode:i.mode}))}}class tm{constructor(){this.triggers=[]}clear(){this.triggers.length=0}add({id:e,minX:t,maxX:n,minZ:i,maxZ:r,once:a=!0,onEnter:o}){const l={id:e,minX:t,maxX:n,minZ:i,maxZ:r,once:a,onEnter:o,inside:!1,consumed:!1};return this.triggers.push(l),l}update(e){for(const t of this.triggers){if(t.consumed)continue;const n=e.x>=t.minX&&e.x<=t.maxX&&e.z>=t.minZ&&e.z<=t.maxZ;n&&!t.inside&&(t.onEnter?.(t),t.once&&(t.consumed=!0)),t.inside=n}}}class nm{constructor(e=4){this.capacity=e,this.slots=Array.from({length:e},()=>null)}find(e){return this.slots.find(t=>t?.id===e)??null}count(e){return this.find(e)?.count??0}canAdd(e){return!!(this.find(e)||this.slots.some(t=>t===null))}add(e,t=1,n={}){if(t<=0)return!0;const i=this.find(e);if(i)return i.count+=t,!0;const r=this.slots.findIndex(a=>a===null);return r<0?!1:(this.slots[r]={id:e,count:t,...n},!0)}remove(e,t=1){const n=this.slots.findIndex(r=>r?.id===e);if(n<0)return!1;const i=this.slots[n];return i.count<t?!1:(i.count-=t,i.count<=0&&(this.slots[n]=null),!0)}has(e,t=1){return this.count(e)>=t}snapshot(){return this.slots.map(e=>e?{...e}:null)}}class im{constructor(e){this.events=e,this.value=0,this.inhalerPulse=0,this.hudLieTimer=0,this.lastTier=0}add(e,t="exposure"){const n=this.value;this.value=Math.max(0,Math.min(100,this.value+e)),this.value!==n&&this.events?.emit("infection:changed",{value:this.value,reason:t}),this.#t()}reduce(e,t="treatment"){this.add(-e,t)}useInhaler(){this.reduce(32,"inhaler"),this.inhalerPulse=5,this.hudLieTimer=3.2,this.events?.emit("infection:inhaler",{value:this.value})}update(e){this.inhalerPulse=Math.max(0,this.inhalerPulse-e),this.hudLieTimer=Math.max(0,this.hudLieTimer-e)}get tier(){return this.value>=80?4:this.value>=60?3:this.value>=40?2:this.value>=20?1:0}get distortion(){return Math.min(1,this.value/100+(this.inhalerPulse>0?.18:0))}get hudIsLying(){return this.hudLieTimer>0||this.value>=72}#t(){const e=this.tier;e!==this.lastTier&&(this.events?.emit("infection:tier",{from:this.lastTier,to:e,value:this.value}),this.lastTier=e)}}class sm{constructor(e){this.events=e,this.unlocked=new Set(["pm"]),this.slots=["pm",null],this.activeSlot=0,this.ammo={shells:0,rifle:0,fungalShell:0,sporeCharge:0,resonance:0}}unlock(e,t={}){if(!Oi[e])throw new Error(`Unknown weapon ${e}`);const n=!this.unlocked.has(e);this.unlocked.add(e);for(const[i,r]of Object.entries(t))this.addAmmo(i,r);e!=="pm"&&(this.slots[1]=e,this.activeSlot=1),n&&this.events?.emit("weapon:unlocked",{id:e,weapon:Oi[e]})}equip(e,t){return e<0||e>1||!this.unlocked.has(t)?!1:(this.slots[e]=t,this.activeSlot=e,this.events?.emit("weapon:equipped",{slotIndex:e,weaponId:t}),!0)}select(e){this.slots[e]&&(this.activeSlot=e)}get activeId(){return this.slots[this.activeSlot]??"pm"}get active(){return Oi[this.activeId]}addAmmo(e,t){this.ammo[e]=(this.ammo[e]??0)+t}canFire(e=this.active){return e.ammo?(this.ammo[e.ammo]??0)>0:!0}consumeAmmo(e=this.active){return e.ammo?this.canFire(e)?(this.ammo[e.ammo]--,!0):!1:!0}ammoFor(e=this.active){return e.ammo?this.ammo[e.ammo]??0:1/0}}class rm{constructor(e){this.events=e,this.text="",this.target=null,this.id=null}set(e,t,n=null){this.id=e,this.text=t,this.target=n?new D(n.x,n.y??0,n.z):null,this.events?.emit("objective:changed",{id:e,text:t,target:this.target})}clear(){this.set(null,"",null)}}const To=Object.freeze({perimeter:Object.freeze({to:"archive",requires:["shiftPass"]}),archive:Object.freeze({to:"reactor",requires:["archiveData"]}),reactor:Object.freeze({to:"womb",requires:["reactorCore"]}),womb:Object.freeze({to:"silence",requires:["dossier"]})});class am{constructor(e=null){this.events=e,this.flags=new Set,this.counters=new Map}add(e){return this.flags.has(e)?!1:(this.flags.add(e),this.events?.emit("progression:flag",{flag:e}),!0)}has(e){return this.flags.has(e)}delete(e){return this.flags.delete(e)}increment(e,t=1){const n=(this.counters.get(e)??0)+t;return this.counters.set(e,n),this.events?.emit("progression:counter",{counter:e,value:n}),n}count(e){return this.counters.get(e)??0}transitionContract(e){return To[e]??null}missingForTransition(e,t=null){const n=To[e];return!n||t&&n.to!==t?["invalid-transition"]:n.requires.filter(i=>!this.flags.has(i))}canTransition(e,t=null){return this.missingForTransition(e,t).length===0}assertTransition(e,t){const n=this.missingForTransition(e,t);if(n.length>0){const i=new Error(`Transition ${e} -> ${t} blocked: ${n.join(", ")}`);throw i.code="PROGRESSION_GATE",i.missing=n,i}return!0}snapshot(){return{flags:[...this.flags].sort(),counters:Object.fromEntries([...this.counters.entries()].sort(([e],[t])=>e.localeCompare(t)))}}}const wo={perimeter:{number:1,title:"ПЕРИМЕТР",contour:"1-Й КОНТУР",palette:"industrial"},archive:{number:2,title:"АРХИВ",contour:"1→2-Й КОНТУР",palette:"archive"},reactor:{number:3,title:"РЕАКТОРНЫЙ БЛОК",contour:"2-Й КОНТУР",palette:"reactor"},womb:{number:4,title:"УТРОБА",contour:"2→3-Й КОНТУР",palette:"organic"},silence:{number:5,title:"БЕЛОЕ БЕЗМОЛВИЕ",contour:"3-Й КОНТУР",palette:"white"}},om={perimeter:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель, вход подтверждён. Связь нестабильна. Приказ: извлечь журнал аварии и открыть путь во второй сектор."},{speaker:"ОПЕРАТИВНИК",text:"Вижу КПП. Воздух чистый по прибору. Пока."}],firstSpore:[{speaker:"БИОСКАНЕР",text:"Образец О-41 жизнеспособен вне носителя. Споры пригодны как реагент."},{speaker:"К.О.Н.Т.У.Р.",text:"Собирайте. Полевой ингалятор допускается по протоколу."}],pass:[{speaker:"ОПЕРАТИВНИК",text:"Пропуск начальника смены. Значит, персонал не успел эвакуироваться через шлюз."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"не туда смотришь"}]},archive:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Архив и серверная. Найдите запись о происхождении штамма. Не задерживайтесь."}],signalLog:[{speaker:"ЗАПИСЬ / Д-Р ЛЕБЕДЕВ",text:"Это не инфекция. Повторяю: структура пытается модулировать сигнал через сон. Она отвечает на вопросы раньше, чем мы их задаём."},{speaker:"К.О.Н.Т.У.Р.",text:"Запись повреждена. Термин «сигнал» считать следствием интоксикации персонала."}],loop1:[{speaker:"ОПЕРАТИВНИК",text:"Я уже проходил этот шкаф."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"ты проходил здесь до того как пришёл"}],loop2:[{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель? Ответьте. Телеметрия показывает, что вы стоите на месте."}]},reactor:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Реакторный блок. Видимость ниже нормы. Перейдите на слух и биосканер."}],wailer:[{speaker:"БИОСКАНЕР",text:"АКУСТИЧЕСКИЙ РЕЗОНАНС. КОМПАС НЕДОСТОВЕРЕН."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"они кричат потому что слышат тебя с другой стороны"}],coreDead:[{speaker:"ОПЕРАТИВНИК",text:"Ядро нейтрализовано. Здесь мицелий использован как несущая структура."},{speaker:"К.О.Н.Т.У.Р.",text:"Изолируйте образец. Щит допустим. Не допускайте прямого контакта."}]},womb:{intro:[{speaker:"ОПЕРАТИВНИК",text:"Бетон закончился. Это уже не НИИ."},{speaker:"К.О.Н.Т.У.Р.",text:"По планам там технический тоннель. Продолжайте по планам."}],dossier:[{speaker:"ОПЕРАТИВНИК",text:"Личное дело… моё. «Предрасположенность к резонансу О-41». Дата — за два года до аварии."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"ты не был выбран после аварии"},{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель, немедленно уничтожьте документ. Это приказ."}]},silence:{intro:[{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"мы не звали вас чтобы вы нас спасли"},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"мы звали потому что вы ещё можете услышать то что идёт следом"},{speaker:"О-41",text:"мы были сетью здесь до ваших шахт и реакторов. мы увидели то что идёт к вам и пытались показать"},{speaker:"К.О.Н.Т.У.Р.",text:"Зачистной заряд готов. Директива 041: уничтожить центральную массу, данные предупреждения и всех носителей. Причина: исключить распространение сведений за периметр."}],phase2:[{speaker:"О-41",text:"одна форма не является одним существом"}],phase3:[{speaker:"О-41",text:"они уже видели этот мир через нас"}],choice:[{speaker:"К.О.Н.Т.У.Р.",text:"СЖЕЧЬ. Подтвердите зачистку."},{speaker:"О-41",text:"СЛИТЬСЯ. Унести предупреждение за периметр."}]}};class lm{constructor(e,t){this.events=e,this.hud=t,this.queue=[],this.current=null,this.timer=0,this.seen=new Set}play(e,t,{once:n=!0}={}){const i=`${e}:${t}`;if(n&&this.seen.has(i))return!1;const r=om[e]?.[t];return r?(n&&this.seen.add(i),this.queue.push(...r.map(a=>({...a,key:i}))),this.current||this.#t(),this.events?.emit("narrative:beat",{levelId:e,beatId:t}),!0):!1}update(e){this.current&&(this.timer-=e,this.timer<=0&&this.#t())}skip(){this.current&&this.#t()}interrupt(){this.queue.length=0,this.current=null,this.timer=0,this.hud.hideSubtitle()}#t(){if(this.current=this.queue.shift()??null,!this.current){this.hud.hideSubtitle();return}const e=Math.max(2.4,Math.min(7.5,this.current.text.length*.052));this.timer=e,this.hud.showSubtitle(this.current.speaker,this.current.text)}}class cm{constructor({camera:e,input:t,collision:n,events:i,infection:r}){this.camera=e,this.input=t,this.collision=n,this.events=i,this.infection=r,this.position=new D(0,1.55,0),this.yaw=Math.PI,this.pitch=0,this.maxHealth=8,this.health=this.maxHealth,this.baseSpeed=3.55,this.radius=.31,this.slowTimer=0,this.shieldTimer=0,this.dead=!1,this.recoil=0,this.wailTimer=0}resetForLevel(e,t=Math.PI){this.position.set(e.x,1.55,e.z),this.yaw=t,this.pitch=0,this.camera.position.copy(this.position)}update(e,t=!1){if(this.slowTimer=Math.max(0,this.slowTimer-e),this.shieldTimer=Math.max(0,this.shieldTimer-e),this.wailTimer=Math.max(0,this.wailTimer-e),this.recoil=Math.max(0,this.recoil-e*5.5),t||this.dead){this.camera.position.copy(this.position);return}const n=this.input.consumeLook();this.yaw-=n.x*.00205,this.pitch-=n.y*.00205,this.pitch=mc.clamp(this.pitch,-1.3,1.3);const i=this.wailTimer>0?Math.sin(performance.now()*.015)*.025*Math.min(1,this.wailTimer):0;this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch-this.recoil*.04,this.camera.rotation.z=i;const r=new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new D(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=new D;if(this.input.down("KeyW")&&o.add(r),this.input.down("KeyS")&&o.sub(r),this.input.down("KeyD")&&o.add(a),this.input.down("KeyA")&&o.sub(a),o.lengthSq()>0){o.normalize();const l=this.slowTimer>0?.45:1,c=this.baseSpeed*l;this.collision.move(this.position,o.x*c*e,o.z*c*e,this.radius)}this.camera.position.copy(this.position)}damage(e,t="unknown"){if(this.dead)return;const n=this.shieldTimer>0?Math.max(.25,e*.35):e;this.health=Math.max(0,this.health-n),this.infection.add(t==="wailer"?8:3.5*e,t),this.events.emit("player:damaged",{amount:n,source:t,health:this.health}),this.health<=0&&(this.dead=!0,this.events.emit("player:died",{source:t}))}heal(e){this.health=Math.min(this.maxHealth,this.health+e),this.events.emit("player:healed",{amount:e,health:this.health})}slow(e){this.slowTimer=Math.max(this.slowTimer,e),this.events.emit("player:slowed",{seconds:e})}activateShield(e=5){this.shieldTimer=Math.max(this.shieldTimer,e),this.events.emit("player:shield",{seconds:e})}applyWail(e=2.4){this.wailTimer=Math.max(this.wailTimer,e)}addRecoil(e=1){this.recoil=Math.min(2,this.recoil+e)}}function Pt(s,e=!0){return new Et({color:s,fog:e})}function St(s,e,t,n){const i=new Le(new Ge(...e),n);return i.position.set(...t),s.add(i),i}function fs(s,e,t=1.1,n=1.8){for(let i=0;i<e;i++){const r=new Le(new Lt(.07+i%2*.04,6,4),Pt(i%3===0?Pe.lime:Pe.green));r.position.set((Math.random()-.5)*.5,t+Math.random()*(n-t),(Math.random()-.5)*.35),s.add(r)}}class hm{create(e){const t=new _n;t.userData.enemyType=e;const n=Pt(Pe.steel),i=Pt("#879067"),r=Pt(Pe.lime),a={};if(e==="sporecarrier")a.torso=St(t,[.58,.8,.34],[0,1.12,0],n),a.head=St(t,[.36,.36,.34],[0,1.72,0],i),a.armL=St(t,[.16,.72,.18],[-.4,1.08,0],i),a.armR=St(t,[.16,.72,.18],[.4,1.08,0],i),a.legL=St(t,[.2,.72,.22],[-.18,.42,0],n),a.legR=St(t,[.2,.72,.22],[.18,.42,0],n),fs(t,7);else if(e==="whipster")a.torso=St(t,[.48,.88,.28],[0,1.1,0],Pt(Pe.darkGreen)),a.head=St(t,[.32,.3,.3],[0,1.7,0],i),a.armL=St(t,[.12,.9,.12],[-.36,1.13,0],r),a.armR=St(t,[.12,.9,.12],[.36,1.13,0],r),a.legL=St(t,[.17,.76,.18],[-.15,.42,0],n),a.legR=St(t,[.17,.76,.18],[.15,.42,0],n),fs(t,9);else if(e==="wailer")a.torso=St(t,[.68,.72,.4],[0,1,0],Pt(Pe.dark)),a.head=new Le(new Lt(.36,7,5),Pt(Pe.pale)),a.head.position.set(0,1.65,0),t.add(a.head),a.mouth=St(t,[.3,.07,.05],[0,1.58,-.31],Pt(Pe.black)),a.legL=St(t,[.2,.68,.22],[-.2,.38,0],n),a.legR=St(t,[.2,.68,.22],[.2,.38,0],n),fs(t,10,1.3,2);else if(e==="hive"){const o=new Le(new Lt(.72,8,6),Pt(Pe.brown));o.position.y=1.1,o.scale.set(.85,1.35,.85),t.add(o),a.torso=o,a.legL=St(t,[.3,.85,.32],[-.3,.42,0],Pt(Pe.darkBrown)),a.legR=St(t,[.3,.85,.32],[.3,.42,0],Pt(Pe.darkBrown)),fs(t,22,.7,2)}else if(e==="irritantCore"){const o=new Le(new mi(.9,1),Pt(Pe.rust));o.position.y=1.2,t.add(o),a.torso=o;for(let l=0;l<10;l++){const c=new Le(new bi(.06,.13,1.2,5),r);c.position.set(Math.cos(l*.63)*.75,1.2,Math.sin(l*.63)*.75),c.rotation.z=Math.PI/2.7,c.rotation.y=l*.63,t.add(c)}}else if(e==="collective"){const o=new Le(new mi(1.25,2),Pt(Pe.white));o.position.y=1.55,t.add(o),a.torso=o;const l=new Le(new mi(.62,1),Pt(Pe.lime));l.position.y=1.55,t.add(l),a.inner=l;for(let c=0;c<12;c++){const u=new Le(new Cs(1.45+c%3*.15,.035,4,24),Pt(c%2?Pe.pale:Pe.green));u.position.y=1.55,u.rotation.x=Math.random()*Math.PI,u.rotation.y=Math.random()*Math.PI,t.add(u)}}return{group:t,parts:a}}}const pn={sporecarrier:{hp:3,speed:1.05,radius:.42,detect:11,melee:1.02,damage:1},whipster:{hp:4,speed:.85,radius:.38,detect:13,preferred:5.5,damage:1},wailer:{hp:3,speed:.55,radius:.42,detect:12,preferred:6.5,damage:1},hive:{hp:10,speed:.58,radius:.72,detect:13,melee:1.35,damage:2},irritantCore:{hp:14,speed:0,radius:1,detect:14,damage:1},collective:{hp:30,speed:0,radius:1.35,detect:30,damage:1}};function Ao(s){return new Et({color:s,fog:!0})}class um{constructor({scene:e,events:t,collision:n,onPlayerDamage:i,onPlayerSlow:r,onSporeDrop:a}){this.scene=e,this.events=t,this.collision=n,this.onPlayerDamage=i,this.onPlayerSlow=r,this.onSporeDrop=a,this.factory=new hm,this.enemies=[],this.projectiles=[],this.time=0,this.nextId=1,this.hiveDistortion=0,this.wailDistortion=0,this.bossPhase=1}clear(){for(const e of this.enemies)this.scene.remove(e.group);for(const e of this.projectiles)this.scene.remove(e.mesh);this.enemies.length=0,this.projectiles.length=0,this.hiveDistortion=0,this.wailDistortion=0,this.bossPhase=1}spawn(e,t,n={}){const i=this.factory.create(e),r=pn[e];if(!r)throw new Error(`Unknown enemy type: ${e}`);i.group.position.set(t.x,0,t.z),this.scene.add(i.group);const a={id:this.nextId++,type:e,group:i.group,parts:i.parts,hp:n.hp??r.hp,maxHp:n.hp??r.hp,speed:n.speed??r.speed,radius:r.radius,alive:!0,attackCooldown:.4+Math.random(),abilityCooldown:1+Math.random(),slowTimer:0,phase:Math.random()*Math.PI*2,narrativeTag:n.narrativeTag??null};return this.enemies.push(a),a}alive(e=null){return this.enemies.filter(t=>t.alive&&(!e||t.type===e))}getBoss(){return this.enemies.find(e=>e.alive&&e.type==="collective")??null}update(e,t){this.time+=e,this.playerPosition=t,this.hiveDistortion=0,this.wailDistortion=Math.max(0,this.wailDistortion-e*.45);for(const n of this.enemies){if(!n.alive)continue;n.attackCooldown-=e,n.abilityCooldown-=e,n.slowTimer=Math.max(0,n.slowTimer-e),n.phase+=e*6,this.#r(n);const i=t.x-n.group.position.x,r=t.z-n.group.position.z,a=Math.hypot(i,r);if(a<.001)continue;const o=i/a,l=r/a;n.group.rotation.y=Math.atan2(o,l),n.type==="sporecarrier"?(this.#t(n,o,l,a,e,pn.sporecarrier.melee),a<=pn.sporecarrier.melee&&n.attackCooldown<=0&&(this.onPlayerDamage(pn.sporecarrier.damage,"sporecarrier"),n.attackCooldown=.95)):n.type==="whipster"?(this.#s(n,o,l,a,e,4.2,7),a<9&&n.abilityCooldown<=0&&(this.#i(n,t,{speed:6.5,color:5617226,damage:0,slow:2.2,radius:.15}),n.abilityCooldown=2.1)):n.type==="wailer"?(this.#s(n,o,l,a,e,5.2,8),a<9&&n.abilityCooldown<=0&&(this.wailDistortion=1,this.events.emit("enemy:wail",{enemyId:n.id,distance:a}),a<5.2&&this.onPlayerDamage(1,"wailer"),n.abilityCooldown=4.2)):n.type==="hive"?(this.#t(n,o,l,a,e,pn.hive.melee),this.hiveDistortion=Math.max(this.hiveDistortion,Math.max(0,1-a/6)),a<=pn.hive.melee&&n.attackCooldown<=0&&(this.onPlayerDamage(pn.hive.damage,"hive"),n.attackCooldown=1.45)):n.type==="irritantCore"?a<12&&n.abilityCooldown<=0&&(this.#n(n,t,5),n.abilityCooldown=3.1):n.type==="collective"&&this.#a(n,t,a)}this.#e(e,t)}raycast(e,t,n,i=()=>!0){let r=null,a=n+1;for(const o of this.enemies){if(!o.alive||!i(o))continue;const l=o.type==="collective"?1.55:o.type==="irritantCore"?1.2:o.type==="hive"?1.15:1.3,c=new D(o.group.position.x,l,o.group.position.z),f=c.clone().sub(e).dot(t);if(f<0||f>n||f>=a)continue;const h=e.clone().addScaledVector(t,f),m=o.type==="collective"?o.radius*1.2:o.radius+.18;h.distanceTo(c)<=m&&(r=o,a=f)}return r?{enemy:r,distance:a}:null}damage(e,t,n="pm"){return e?.alive?e.type==="collective"&&n!=="resonator"?(n==="fungus"&&(e.slowTimer=Math.max(e.slowTimer,2.5)),this.events.emit("boss:immune",{source:n}),{applied:!1,killed:!1}):(e.hp-=t,this.events.emit("enemy:damaged",{enemy:e,amount:t,source:n}),e.hp<=0?(this.#l(e,n),{applied:!0,killed:!0}):(e.type==="collective"&&this.#o(e),{applied:!0,killed:!1})):{applied:!1,killed:!1}}slowInRadius(e,t,n){for(const i of this.enemies)i.alive&&i.group.position.distanceTo(e)<=t&&(i.slowTimer=Math.max(i.slowTimer,n))}#t(e,t,n,i,r,a){if(i>pn[e.type].detect||i<=a)return;const o=e.slowTimer>0?.28:1,l=e.speed*o*r,c=e.group.position.x+t*l,u=e.group.position.z+n*l;this.collision.blocked(c,u,e.radius*.55)||(e.group.position.x=c,e.group.position.z=u)}#s(e,t,n,i,r,a,o){if(i>pn[e.type].detect)return;const l=e.slowTimer>0?.28:1;let c=0;if(i>o?c=1:i<a&&(c=-1),!c)return;const u=e.speed*l*r*c,f=e.group.position.x+t*u,h=e.group.position.z+n*u;this.collision.blocked(f,h,e.radius*.5)||(e.group.position.x=f,e.group.position.z=h)}#i(e,t,n){const i=new D(e.group.position.x,1.2,e.group.position.z),r=t.clone().sub(i).normalize(),a=new Le(new Lt(n.radius??.12,6,4),Ao(n.color??5617226));a.position.copy(i),this.scene.add(a),this.projectiles.push({mesh:a,velocity:r.multiplyScalar(n.speed??6),ttl:4,damage:n.damage??1,slow:n.slow??0,radius:n.radius??.12})}#n(e,t,n){const i=Math.atan2(t.x-e.group.position.x,t.z-e.group.position.z);for(let r=0;r<n;r++){const a=i+(r-(n-1)/2)*.2,o=new D(e.group.position.x,1.25,e.group.position.z),l=new D(Math.sin(a),0,Math.cos(a)),c=new Le(new Lt(.13,6,4),Ao(13660213));c.position.copy(o),this.scene.add(c),this.projectiles.push({mesh:c,velocity:l.multiplyScalar(5.5),ttl:4,damage:1,slow:.4,radius:.13})}}#e(e,t){for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.ttl-=e,i.mesh.position.addScaledVector(i.velocity,e);const r=i.mesh.position.distanceTo(t);let a=i.ttl<=0;!a&&r<.52&&(i.damage>0&&this.onPlayerDamage(i.damage,"projectile"),i.slow>0&&this.onPlayerSlow(i.slow),a=!0),!a&&this.collision.blocked(i.mesh.position.x,i.mesh.position.z,.05)&&(a=!0),a&&(this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}#r(e){const t=Math.sin(e.phase)*.42;if(e.parts.armL&&(e.parts.armL.rotation.x=t),e.parts.armR&&(e.parts.armR.rotation.x=-t),e.parts.legL&&(e.parts.legL.rotation.x=-t*.7),e.parts.legR&&(e.parts.legR.rotation.x=t*.7),e.type==="irritantCore"&&e.parts.torso){const n=1+Math.sin(this.time*3.2)*.08;e.parts.torso.scale.setScalar(n),e.parts.torso.rotation.y+=.01}if(e.type==="collective"&&(e.group.rotation.y+=.004*this.bossPhase,e.parts.inner)){const n=.8+Math.sin(this.time*4)*.18;e.parts.inner.scale.setScalar(n)}}#a(e,t,n){this.#o(e),!(e.abilityCooldown>0)&&(this.bossPhase===1?(this.#n(e,t,3),this.alive("sporecarrier").length<3&&(this.spawn("sporecarrier",{x:e.group.position.x+3,z:e.group.position.z+2}),this.spawn("sporecarrier",{x:e.group.position.x-3,z:e.group.position.z-2})),e.abilityCooldown=3):this.bossPhase===2?(this.wailDistortion=1,this.events.emit("enemy:wail",{enemyId:e.id,boss:!0,distance:n}),this.#n(e,t,7),e.abilityCooldown=2.6):(this.hiveDistortion=1,this.#n(e,t,9),this.alive("whipster").length<2&&(this.spawn("whipster",{x:e.group.position.x+4,z:e.group.position.z}),this.spawn("whipster",{x:e.group.position.x-4,z:e.group.position.z})),this.alive("hive").length<1&&this.spawn("hive",{x:e.group.position.x,z:e.group.position.z+5}),e.abilityCooldown=2))}#o(e){const t=e.hp/e.maxHp,n=t<=.33?3:t<=.66?2:1;n!==this.bossPhase&&(this.bossPhase=n,this.events.emit("boss:phase",{phase:n,enemy:e}))}#l(e,t){e.alive=!1;const n=e.group.position.clone();if(this.scene.remove(e.group),e.type==="sporecarrier")this.onSporeDrop(n,1+(Math.random()<.5?1:0)),this.playerPosition&&this.playerPosition.distanceTo(n)<1.55&&(this.onPlayerDamage(1,"sporeBurst"),this.events.emit("enemy:sporeBurst",{position:n.clone()}));else if(e.type==="hive"){this.onSporeDrop(n,2);for(let i=0;i<2+(Math.random()<.5?1:0);i++)this.spawn("sporecarrier",{x:n.x+(Math.random()-.5)*2,z:n.z+(Math.random()-.5)*2})}else e.type==="irritantCore"?this.onSporeDrop(n,4):e.type!=="collective"&&this.onSporeDrop(n,1);this.events.emit("enemy:killed",{enemy:e,source:t,position:n})}}class dm{constructor({scene:e,inventory:t,infection:n,events:i}){this.scene=e,this.inventory=t,this.infection=n,this.events=i,this.items=[],this.geometry=new Lt(.19,7,5),this.material=new Et({color:Pe.lime,fog:!0}),this.coreMaterial=new Et({color:Pe.yellow,fog:!0})}clear(){for(const e of this.items)this.scene.remove(e.group);this.items.length=0}spawn(e,t=1){for(let n=0;n<t;n++){const i=new _n;i.add(new Le(this.geometry,this.material));const r=new Le(new Lt(.065,5,4),this.coreMaterial);i.add(r),i.position.set(e.x+(Math.random()-.5)*.65,.28,e.z+(Math.random()-.5)*.65),i.userData.phase=Math.random()*Math.PI*2,this.scene.add(i),this.items.push({group:i})}}update(e,t){for(let n=this.items.length-1;n>=0;n--){const i=this.items[n],r=1+Math.sin(e*4+i.group.userData.phase)*.15;i.group.scale.setScalar(r),i.group.rotation.y=e*.6;const a=t.x-i.group.position.x,o=t.z-i.group.position.z;if(!(a*a+o*o>.75*.75)){if(!this.inventory.add("spores",1,{name:"СПОРЫ О-41"})){this.events.emit("inventory:full",{item:"spores"});continue}this.infection.add(1.5,"sporePickup"),this.events.emit("spore:collected",{total:this.inventory.count("spores")}),this.scene.remove(i.group),this.items.splice(n,1)}}}}class fm{constructor({scene:e,camera:t,input:n,belt:i,player:r,enemies:a,collision:o,events:l,weaponView:c}){this.scene=e,this.camera=t,this.input=n,this.belt=i,this.player=r,this.enemies=a,this.collision=o,this.events=l,this.weaponView=c,this.cooldown=0,this.tracers=[],this.fungal=[],this.tracerGeometry=new Ge(.045,.045,.18),this.tracerMaterial=new Et({color:Pe.pale,fog:!0})}clear(){for(const e of this.tracers)this.scene.remove(e.mesh);for(const e of this.fungal)this.scene.remove(e.mesh);this.tracers.length=0,this.fungal.length=0,this.cooldown=0}update(e,t=!1){this.cooldown=Math.max(0,this.cooldown-e),this.#r(e),this.#a(e),this.weaponView.show(this.belt.activeId);const n=this.input.down("KeyW")||this.input.down("KeyS")||this.input.down("KeyA")||this.input.down("KeyD");if(this.weaponView.update(e,n&&!t),t||this.player.dead)return;this.input.consume("Digit1")&&this.belt.select(0),this.input.consume("Digit2")&&this.belt.select(1),(this.belt.active.automatic?this.input.fireHeld:this.input.consumeFirePressed())&&this.cooldown<=0&&this.fire()}fire(){const e=this.belt.active;return this.belt.consumeAmmo(e)?(this.cooldown=e.cooldown,this.player.addRecoil(e.id==="shotgun"?1.5:e.id==="ak"?.45:.75),this.weaponView.flash(),this.events.emit("weapon:fired",{weapon:e,ammo:this.belt.ammoFor(e)}),e.kind==="hitscan"||e.kind==="resonator"?this.#s(e):e.kind==="melee"?this.#i(e):e.kind==="fungalProjectile"&&this.#n(e),!0):(this.events.emit("weapon:empty",{weapon:e}),this.cooldown=.25,!1)}#t(e){const t=new D;return this.camera.getWorldDirection(t),t.x+=(Math.random()-.5)*e,t.y+=(Math.random()-.5)*e,t.z+=(Math.random()-.5)*e,t.normalize()}#s(e){for(let t=0;t<e.pellets;t++){const n=this.#t(e.spread),i=this.camera.position.clone(),r=this.enemies.raycast(i,n,e.range),a=i.clone().addScaledVector(n,r?.distance??e.range);!this.collision.segmentHitsWall(i,a)&&r&&this.enemies.damage(r.enemy,e.damage,e.id),this.#e(i,n,Math.min(r?.distance??e.range,7))}}#i(e){const t=this.#t(0),n=this.enemies.raycast(this.camera.position,t,e.range);n&&this.enemies.damage(n.enemy,e.damage,e.id)}#n(e){const t=this.#t(0),n=new Le(new Lt(.15,7,5),new Et({color:Pe.lime,fog:!0}));n.position.copy(this.camera.position).addScaledVector(t,.55),this.scene.add(n),this.fungal.push({mesh:n,velocity:t.multiplyScalar(7.2),ttl:2.3,weapon:e})}#e(e,t,n){const i=new Le(this.tracerGeometry,this.tracerMaterial);i.position.copy(e).addScaledVector(t,.45),i.quaternion.setFromUnitVectors(new D(0,0,1),t),this.scene.add(i),this.tracers.push({mesh:i,velocity:t.clone().multiplyScalar(24),ttl:Math.min(.18,n/24)})}#r(e){for(let t=this.tracers.length-1;t>=0;t--){const n=this.tracers[t];n.ttl-=e,n.mesh.position.addScaledVector(n.velocity,e),n.ttl<=0&&(this.scene.remove(n.mesh),this.tracers.splice(t,1))}}#a(e){for(let t=this.fungal.length-1;t>=0;t--){const n=this.fungal[t];n.ttl-=e,n.mesh.position.addScaledVector(n.velocity,e);let i=n.ttl<=0||this.collision.blocked(n.mesh.position.x,n.mesh.position.z,.08);if(!i){const r=this.enemies.enemies.find(a=>a.alive&&a.group.position.distanceTo(n.mesh.position)<a.radius+.25);r&&(this.enemies.damage(r,n.weapon.damage,"fungus"),i=!0)}i&&(this.enemies.slowInRadius(n.mesh.position,2.5,4.5),this.events.emit("weapon:fungalBurst",{position:n.mesh.position.clone()}),this.scene.remove(n.mesh),this.fungal.splice(t,1))}}}const Hn=s=>new Et({color:s,fog:!1,depthTest:!1,depthWrite:!1});function at(s,e,t,n,i,r,a=0,o=0,l=0){const c=new Le(e,t);return c.position.set(n,i,r),c.rotation.set(a,o,l),c.renderOrder=1e3,s.add(c),c}class pm{constructor(e){this.camera=e,this.root=new _n,this.root.position.set(.42,-.36,-.72),this.camera.add(this.root),this.current=null,this.muzzle=null,this.muzzleTimer=0,this.bob=0,this.show("pm")}show(e){if(e===this.current)return;this.current=e,this.root.clear(),this.muzzle=null;const t=Hn(Pe.light),n=Hn(Pe.dark),i=Hn(Pe.brown),r=Hn(Pe.green),a=Hn(Pe.pale),o=Hn(Pe.orange);e==="pm"?(at(this.root,new Ge(.25,.15,.58),t,0,.06,-.1),at(this.root,new Ge(.11,.1,.32),n,0,.05,-.52),at(this.root,new Ge(.17,.34,.19),i,0,-.17,.02,-.2),this.muzzle=at(this.root,new Ge(.13,.13,.09),o,0,.05,-.72)):e==="shotgun"?(at(this.root,new Ge(.18,.15,.78),n,0,.03,-.2),at(this.root,new Ge(.23,.16,.35),i,0,.01,.18),at(this.root,new Ge(.17,.31,.2),i,0,-.18,.19,-.18),this.muzzle=at(this.root,new Ge(.19,.15,.08),o,0,.03,-.63)):e==="ak"?(at(this.root,new Ge(.22,.19,.72),n,0,.02,-.14),at(this.root,new Ge(.09,.09,.55),t,0,.04,-.7),at(this.root,new Ge(.17,.35,.19),i,0,-.2,.03,-.2),at(this.root,new Ge(.22,.26,.15),i,0,-.18,-.22,.35),this.muzzle=at(this.root,new Ge(.13,.13,.08),o,0,.04,-.99)):e==="fungus"?(at(this.root,new bi(.14,.18,.72,7),r,0,.02,-.18,Math.PI/2),at(this.root,new Lt(.2,7,5),a,0,.04,-.55),at(this.root,new Ge(.17,.35,.2),i,0,-.22,.05,-.15),this.muzzle=at(this.root,new Lt(.12,6,4),o,0,.04,-.78)):e==="drill"?(at(this.root,new Ge(.26,.3,.48),n,0,-.02,-.08),at(this.root,new pa(.14,.68,8),a,0,.02,-.57,Math.PI/2),at(this.root,new Lt(.1,6,4),r,.16,.1,-.05)):e==="resonator"&&(at(this.root,new Ge(.28,.22,.55),a,0,.01,-.12),at(this.root,new Cs(.19,.045,5,16),r,0,.05,-.47,Math.PI/2),at(this.root,new Ge(.16,.35,.18),n,0,-.2,.05,-.18),this.muzzle=at(this.root,new Lt(.11,6,4),Hn(Pe.white),0,.05,-.7)),this.muzzle&&(this.muzzle.visible=!1)}flash(){this.muzzle&&(this.muzzle.visible=!0,this.muzzleTimer=.055)}update(e,t){this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzle&&this.muzzleTimer<=0&&(this.muzzle.visible=!1),this.bob+=e*(t?10:3),this.root.position.y=-.36+Math.sin(this.bob)*(t?.012:.003),this.root.position.x=.42+Math.cos(this.bob*.5)*(t?.008:.002)}}const ur=["perimeter","archive","reactor","womb","silence"];class mm{constructor(e){Object.assign(this,e),this.root=null,this.subscriptions=[],this.animations=[],this.context=null}load(e){this.dispose(),this.root=new _n,this.root.name=`level:${e}`,this.scene.add(this.root),this.context={id:e,time:0,update:()=>{}},this.collision.clear(),this.interactions.clear(),this.triggers.clear(),this.enemies.clear(),this.spores.clear(),this.animations.length=0;const t=this[`_${e}`];if(!t)throw new Error(`Unknown level: ${e}`);const n=t.call(this);return Object.assign(this.context,n),this.context}dispose(){for(const e of this.subscriptions.splice(0))e();this.root&&this.scene.remove(this.root),this.root=null}update(e){if(this.context){this.context.time+=e;for(const t of this.animations)t(e,this.context.time);this.context.update?.(e,this.context.time)}}nextLevel(e){const t=ur.indexOf(e);return t>=0&&t<ur.length-1?ur[t+1]:null}#t(e,t){this.subscriptions.push(this.events.on(e,t))}#s(e,t=null){const n=e?this.textures.get(e).clone():null;return n&&(n.needsUpdate=!0),new Et({map:n,color:t??16777215,fog:!0})}#i(e,t,n="floor",i=0,r=0){const a=this.#s(n);a.map&&a.map.repeat.set(Math.max(1,e/2),Math.max(1,t/2));const o=new Le(new In(e,t),a);return o.rotation.x=-Math.PI/2,o.position.set(i,0,r),this.root.add(o),o}#n(e,t,n="ceiling",i=0,r=0,a=3.2){const o=this.#s(n);o.map&&o.map.repeat.set(Math.max(1,e/2),Math.max(1,t/2));const l=new Le(new In(e,t),o);return l.rotation.x=Math.PI/2,l.position.set(i,a,r),this.root.add(l),l}#e(e,t,n,i,{height:r=3.2,material:a="industrialWall",collide:o=!0,tag:l="wall"}={}){const c=this.#s(a);c.map&&c.map.repeat.set(Math.max(1,n/2),Math.max(1,r/2));const u=new Le(new Ge(n,r,i),c);u.position.set(e,r/2,t),this.root.add(u);const f=o?this.collision.addBox(e,t,n,i,l):null;return{mesh:u,collider:f}}#r(e,t,n=.8){const i=new Le(new Ge(n,n,n),this.#s("crate"));return i.position.set(e,n/2,t),this.root.add(i),this.collision.addBox(e,t,n,n,"crate"),i}#a(e,t,n=0){const i=new Le(new Ge(.9,2.1,.55),this.#s("server"));i.position.set(e,1.05,t),i.rotation.y=n,this.root.add(i);const r=Math.abs(Math.cos(n))>.5?.9:.55,a=Math.abs(Math.cos(n))>.5?.55:.9;return this.collision.addBox(e,t,r,a,"server"),i}#o(e,t,n,i,r,a=0){const o=new Le(new In(2.6,.65),new Et({map:this.textures.sign(e,t),fog:!0}));return o.position.set(n,i,r),o.rotation.y=a,this.root.add(o),o}#l(e,t,n=0,i="door"){const r=new Le(new Ge(2.8,2.7,.28),this.#s(i));r.position.set(e,1.35,t),r.rotation.y=n,this.root.add(r);const a=Math.abs(Math.cos(n))>.7?2.8:.34,o=Math.abs(Math.cos(n))>.7?.34:2.8,l=this.collision.addBox(e,t,a,o,"door");return{mesh:r,collider:l,open:!1}}#f(e){e.open||(e.open=!0,e.collider.active=!1,this.animations.push(t=>{e.mesh.position.y<4.3&&(e.mesh.position.y+=t*2.9)}))}#d({id:e,from:t,to:n,door:i,interactPosition:r,crossZone:a,prompt:o,lockedMessage:l,objectiveText:c}){let u=!1;const f=new D((a.minX+a.maxX)*.5,0,(a.minZ+a.maxZ)*.5);return this.interactions.add({id:e,position:r,radius:1.35,prompt:o,onUse:()=>this.quest.canTransition(t,n)?(u=!0,this.quest.add(`${t}:exit-open`),this.#f(i),this.objective.set(`${e}:cross`,c??"ПРОЙТИ ЧЕРЕЗ ОТКРЫТЫЙ ШЛЮЗ",f),this.events.emit("level:exit-opened",{from:t,to:n,id:e}),!0):(this.events.emit("ui:message",l??"ПЕРЕХОД ЗАБЛОКИРОВАН: НЕ ВЫПОЛНЕНА ЦЕЛЬ"),!1)}),this.triggers.add({id:`${e}:cross`,...a,once:!0,onEnter:()=>{!u||!this.quest.canTransition(t,n)||(this.quest.assertTransition(t,n),this.events.emit("level:complete",{from:t,to:n}))}}),{isArmed:()=>u,crossTarget:f}}#c(e,t){let n;const i=r=>new Et({color:r,fog:!0});return e==="pass"?n=new Le(new Ge(.55,.05,.35),i(Pe.yellow)):e==="weapon"?n=new Le(new Ge(.65,.18,.25),i(Pe.pale)):e==="dossier"?n=new Le(new Ge(.65,.05,.5),i(Pe.rust)):n=new Le(new ma(.22),i(Pe.orange)),n.position.copy(t),this.root.add(n),this.animations.push((r,a)=>{n.parent&&(n.rotation.y+=r*.7,n.position.y=t.y+Math.sin(a*2.5)*.04)}),n}#h(e,t,n=16,i=!1){const r=new _n,a=new Et({color:i?Pe.rust:Pe.green,fog:!0}),o=new Et({color:Pe.lime,fog:!0});for(let l=0;l<n;l++){const c=.07+Math.random()*.16,u=new Le(new Lt(c,6,4),l%4===0?o:a);u.position.set((Math.random()-.5)*1.2,c*.6,(Math.random()-.5)*1.2),u.scale.y=.4+Math.random()*.8,r.add(u)}return r.position.set(e,0,t),this.root.add(r),i&&this.animations.push((l,c)=>r.scale.setScalar(1+Math.sin(c*1.6+e)*.025)),r}#u(e,t,n){this.scene.background=new je(e),this.scene.fog=new Fi(e,t,n)}_perimeter(){this.#u(857623,6,22),this.#i(18,30,"floor"),this.#n(18,30),this.#e(-9.1,0,.35,30.2),this.#e(9.1,0,.35,30.2),this.#e(0,15.1,18.2,.35),this.#e(0,-15.1,18.2,.35),this.#e(-3.25,10.6,.35,8.5),this.#e(3.25,10.6,.35,8.5),this.#e(-2.85,2,.35,8.9),this.#e(2.85,2,.35,8.9),this.#e(-5.8,-3.95,6,.35),this.#e(5.8,-3.95,6,.35),this.#e(-6.2,-8,.35,8.2),this.#e(6.2,-8,.35,8.2),this.#e(-6,4.2,5.9,.35),this.#e(-6,-.3,5.9,.35),this.#e(-8.75,2,.35,4.8),this.#o("КПП / 041","1-Й КОНТУР",0,2.3,7.7),this.#o("СТОЛОВАЯ","СЕКТОР А",2.6,2,1,-Math.PI/2),this.#o("ОБЩЕЖИТИЕ","БЛОК 3",-2.6,2,1,Math.PI/2),this.#r(-1.9,11.5,.9),this.#r(1.9,8.6,.8),this.#r(-4.8,-7.2,1),this.#h(2.1,5.8),this.#h(-4.8,-5.4,20),this.#e(-5.25,-12.2,7.5,.35,{material:"industrialWall"}),this.#e(5.25,-12.2,7.5,.35,{material:"industrialWall"});const e=this.#l(0,-12.2),t=new D(-4.25,.42,-9.1),n=this.#c("pass",t),i=new D(4.25,.42,-7.7),r=this.#c("weapon",i);this.enemies.spawn("sporecarrier",{x:.2,z:3}),this.enemies.spawn("sporecarrier",{x:-4,z:-6.8}),this.enemies.spawn("sporecarrier",{x:4,z:-9.2}),this.spores.spawn(new D(1.4,0,7),1),this.objective.set("findPass","НАЙТИ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ",t),this.narrative.play("perimeter","intro"),this.interactions.add({id:"shiftPass",position:t,radius:1.05,mode:"pickup",onUse:()=>(this.quest.has("shiftPass")||(this.quest.add("shiftPass"),n.removeFromParent(),this.events.emit("quest:pickup",{id:"shiftPass"}),this.narrative.play("perimeter","pass"),this.objective.set("airlock","ВЕРНУТЬСЯ К ШЛЮЗУ ВО 2-Й СЕКТОР",new D(0,0,-12.2))),!0)}),this.interactions.add({id:"shotgunPickup",position:i,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("shotgun")||(this.belt.unlock("shotgun",{shells:8}),r.removeFromParent()),!0)}),this.#d({id:"perimeterExit",from:"perimeter",to:"archive",door:e,interactPosition:new D(0,0,-10.9),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.45,maxZ:-12.8},prompt:"E — ПРОПУСК / ОТКРЫТЬ ШЛЮЗ",lockedMessage:"ТРЕБУЕТСЯ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ",objectiveText:"ПРОЙТИ ЧЕРЕЗ ШЛЮЗ В АРХИВ"});let a=!0;this.#t("spore:collected",()=>{a&&(a=!1,this.crafting.unlock("inhaler"),this.narrative.play("perimeter","firstSpore"))});let o=2.8,l=8.5;return{spawn:{x:0,z:12.4},yaw:Math.PI,update:c=>{o-=c,l-=c,o<=0&&(this.events.emit("world:flicker",{strength:.55}),o=4+Math.random()*5),l<=0&&(this.events.emit("audio:hallucination"),l=10+Math.random()*9)}}}_archive(){this.#u(463119,5,18),this.#i(16,32,"floor"),this.#n(16,32,"ceiling"),this.#e(-8.1,0,.35,32.2,{material:"archiveWall"}),this.#e(8.1,0,.35,32.2,{material:"archiveWall"}),this.#e(0,16.1,16.2,.35,{material:"archiveWall"}),this.#e(0,-16.1,16.2,.35,{material:"archiveWall"}),this.#e(-3.2,5,.35,21.8,{material:"archiveWall"}),this.#e(3.2,5,.35,21.8,{material:"archiveWall"}),this.#o("АРХИВ","МАШИННЫЙ ФОНД 041",0,2.25,10.5);for(const l of[8,5,2,-1,-4])this.#a(-2.4,l,Math.PI/2),this.#a(2.4,l,-Math.PI/2);this.#h(-1.8,-7,18);const e=new D(0,0,8.5);this.#a(0,8.8,0),this.#e(3.15,-10.45,.35,3.1,{material:"archiveWall"});const t=this.#l(3.15,-7.5,Math.PI/2),n=new D(5.5,0,-8),i=new D(7,.45,-7.2),r=this.#c("weapon",i);this.#i(8,8,"floor",5,-8),this.#n(8,8,"ceiling",5,-8),this.#e(5,-12,8,.35,{material:"archiveWall"}),this.#e(8.9,-8,.35,8,{material:"archiveWall"}),this.#a(5.5,-8.4,0),this.#a(7.3,-8.4,0),this.#e(-4.75,-13.45,6.5,.35,{material:"archiveWall"}),this.#e(4.75,-13.45,6.5,.35,{material:"archiveWall"});const a=this.#l(0,-13.45);this.enemies.spawn("sporecarrier",{x:-1,z:1}),this.enemies.spawn("whipster",{x:1.2,z:-3}),this.enemies.spawn("sporecarrier",{x:5,z:-9.5}),this.spores.spawn(new D(-1.3,0,-4.5),2),this.objective.set("signalLog","НАЙТИ ЗАПИСЬ ОБ О-41",e),this.narrative.play("archive","intro");let o=this.quest.count("archiveLoop");return this.interactions.add({id:"signalTerminal",position:e,radius:1.2,prompt:"E — ВОСПРОИЗВЕСТИ АУДИОЗАПИСЬ",onUse:()=>(this.quest.has("archiveSignalLog")||(this.quest.add("archiveSignalLog"),this.narrative.play("archive","signalLog"),this.crafting.unlock("fungusLauncher"),this.crafting.unlock("fungalShell"),this.objective.set("archiveLoop","ПРОВЕРИТЬ КОРИДОР, КОТОРЫЙ НЕ СОВПАДАЕТ С ПЛАНОМ",new D(0,0,-10.8))),!0)}),this.triggers.add({id:"archiveLoop",minX:-2.6,maxX:2.6,minZ:-11.45,maxZ:-10.15,once:!1,onEnter:()=>{!this.quest.has("archiveSignalLog")||this.quest.has("archiveData")||this.quest.has("archiveLoopResolved")||(o=this.quest.increment("archiveLoop"),o===1&&this.narrative.play("archive","loop1"),o===2&&this.narrative.play("archive","loop2"),o<3?(this.player.position.set(0,1.55,3.8),this.events.emit("world:teleport",{kind:"loop",count:o})):(this.quest.add("archiveLoopResolved"),this.#f(t),this.objective.set("archiveData","БОКОВАЯ СЕРВЕРНАЯ СТАЛА ДОСТУПНА",n)))}}),this.interactions.add({id:"archiveData",position:n,radius:1.2,prompt:"E — ИЗВЛЕЧЬ ДАННЫЕ О-41",onUse:()=>this.quest.has("archiveData")?!0:this.quest.has("archiveLoopResolved")?(this.quest.add("archiveData"),this.events.emit("quest:pickup",{id:"archiveData"}),this.objective.set("archiveExit","ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА",new D(0,0,-12.2)),!0):(this.events.emit("ui:message","СЕРВЕРНАЯ НЕСОВМЕСТИМА С ТЕКУЩЕЙ ТОПОЛОГИЕЙ"),!1)}),this.interactions.add({id:"akPickup",position:i,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("ak")||(this.belt.unlock("ak",{rifle:45}),r.removeFromParent()),!0)}),this.#d({id:"archiveExit",from:"archive",to:"reactor",door:a,interactPosition:new D(0,0,-12.15),crossZone:{minX:-1.25,maxX:1.25,minZ:-15.35,maxZ:-13.9},prompt:"E — ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА",lockedMessage:"СНАЧАЛА ИЗВЛЕКИТЕ АРХИВНЫЕ ДАННЫЕ",objectiveText:"ВОЙТИ В РЕАКТОРНЫЙ БЛОК"}),{spawn:{x:0,z:13.8},yaw:Math.PI}}_reactor(){this.#u(658957,1,4.8),this.#i(18,30,"floor"),this.#n(18,30,"ceiling"),this.#e(-9.1,0,.35,30.2,{material:"reactorWall"}),this.#e(9.1,0,.35,30.2,{material:"reactorWall"}),this.#e(0,15.1,18.2,.35,{material:"reactorWall"}),this.#e(0,-15.1,18.2,.35,{material:"reactorWall"}),this.#e(-3,4.8,.35,14,{material:"reactorWall"}),this.#e(3,4.8,.35,14,{material:"reactorWall"}),this.#e(-6,-5,6.2,.35,{material:"reactorWall"}),this.#e(6,-5,6.2,.35,{material:"reactorWall"}),this.#o("РЕАКТОР","БЛОК Р-7",0,2.25,10.8),this.#e(-5.25,-13.1,7.5,.35,{material:"reactorWall"}),this.#e(5.25,-13.1,7.5,.35,{material:"reactorWall"});const e=this.#l(0,-13.1,0,"reactorWall");for(const l of[-6,6])for(const c of[-9,-3,3]){const u=new Le(new bi(.55,.7,2.8,8),new Et({color:Pe.slate,fog:!0}));u.position.set(l,1.4,c),this.root.add(u),this.collision.addBox(l,c,1.1,1.1,"reactor")}this.enemies.spawn("whipster",{x:.8,z:5}),this.enemies.spawn("wailer",{x:-1,z:-1.5}),this.enemies.spawn("whipster",{x:5,z:-8}),this.#i(10,10,"floor",28,0),this.#n(10,10,"ceiling",28,0),this.#e(23,0,.35,10,{material:"reactorWall"}),this.#e(33,0,.35,10,{material:"reactorWall"}),this.#e(28,5,10,.35,{material:"reactorWall"}),this.#e(28,-5,10,.35,{material:"reactorWall"});const t=this.enemies.spawn("irritantCore",{x:28,z:-1.3},{narrativeTag:"irritantCore"}),n=new D(0,0,-4),i=new D(28,0,-4.2);this.narrative.play("reactor","intro"),this.objective.set("reactorPortal","НАЙТИ ИСТОЧНИК БИОСИГНАЛА",n);let r=this.quest.has("reactorPocketEntered"),a=this.quest.count("reactorStairLoops");this.triggers.add({id:"selfStair",minX:-2.5,maxX:2.5,minZ:.2,maxZ:1.3,once:!1,onEnter:()=>{r||a>=2||(a=this.quest.increment("reactorStairLoops"),this.player.position.z=6,this.events.emit("world:teleport",{kind:"self-stair",count:a}))}}),this.interactions.add({id:"reactorPortal",position:n,radius:1.25,prompt:"E — ВОЙТИ В ТЕХНИЧЕСКУЮ КАМЕРУ",onUse:()=>(r=!0,this.quest.add("reactorPocketEntered"),this.player.position.set(28,1.55,3.4),this.objective.set("irritantCore","НЕЙТРАЛИЗОВАТЬ ЯДРО-РАЗДРАЖИТЕЛЬ",t.group.position),!0)}),this.interactions.add({id:"pocketExit",position:i,radius:1.2,prompt:"E — ВЕРНУТЬСЯ В РЕАКТОРНЫЙ КОРИДОР",onUse:()=>this.quest.has("reactorCore")?(this.quest.add("reactorPocketExited"),this.player.position.set(0,1.55,-7),this.objective.set("reactorExit","ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ",new D(0,0,-11.8)),!0):(this.events.emit("ui:message","БИОЗАМОК АКТИВЕН: ЯДРО НЕЙТРАЛИЗОВАТЬ"),!1)}),this.#d({id:"reactorExit",from:"reactor",to:"womb",door:e,interactPosition:new D(0,0,-11.75),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.65,maxZ:-13.45},prompt:"E — ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ",lockedMessage:"СНАЧАЛА НЕЙТРАЛИЗУЙТЕ ЯДРО-РАЗДРАЖИТЕЛЬ",objectiveText:"СПУСТИТЬСЯ В НИЖНИЙ ТОННЕЛЬ"});let o=!1;return this.#t("enemy:wail",()=>{o||(o=!0,this.narrative.play("reactor","wailer"))}),this.#t("enemy:killed",({enemy:l})=>{l===t&&(this.crafting.unlock("shield"),this.quest.add("reactorCore"),this.narrative.play("reactor","coreDead"),this.objective.set("pocketExit","ВЫЙТИ ИЗ КАМЕРЫ",i))}),{spawn:{x:0,z:13},yaw:Math.PI}}_womb(){this.#u(1181960,2,11),this.#i(18,30,"organicFloor"),this.#n(18,30,"organicWall",0,0,3),this.#i(6.2,7,"floor",0,11.2),this.#n(6.2,7,"ceiling",0,11.2,3),this.#e(-3,11.2,.22,7,{height:3,material:"reactorWall",collide:!1}),this.#e(3,11.2,.22,7,{height:3,material:"reactorWall",collide:!1});const e=[],t=(c,u,f,h)=>{const m=this.#e(c,u,f,h,{height:3,material:"organicWall"});return e.push(m.mesh),m};t(-9.1,0,.45,30.2),t(9.1,0,.45,30.2),t(0,15.1,18.2,.45),t(0,-15.1,18.2,.45),t(-3.2,7,.5,14),t(3.2,7,.5,14),t(-5.8,-4,6.4,.5),t(5.8,-4,6.4,.5),t(-5.25,-13.1,7.5,.42),t(5.25,-13.1,7.5,.42);const n=this.#l(0,-13.1,0,"organicWall");this.#h(0,9,28,!0),this.#h(-5,-6,30,!0),this.#h(5,-9,26,!0);for(const c of e){const u=c.scale.y;this.animations.push((f,h)=>{c.scale.y=u*(1+Math.sin(h*1.3+c.position.z*.2)*.012)})}this.enemies.spawn("wailer",{x:0,z:4}),this.enemies.spawn("hive",{x:-4.4,z:-7}),this.enemies.spawn("hive",{x:4.2,z:-10}),this.spores.spawn(new D(2,0,8),2),this.spores.spawn(new D(-4.5,0,-8),3),this.#i(9,9,"floor",30,0),this.#n(9,9,"ceiling",30,0),this.#e(25.5,0,.35,9,{material:"industrialWall"}),this.#e(34.5,0,.35,9,{material:"industrialWall"}),this.#e(30,4.5,9,.35,{material:"industrialWall"}),this.#e(30,-4.5,9,.35,{material:"industrialWall"}),this.#o("ЛИЧНЫЕ ДЕЛА","К.О.Н.Т.У.Р.",30,2.2,-4.3);const i=new D(30,.5,-1.8),r=this.#c("dossier",i),a=new D(32,.5,-1.2),o=this.#c("weapon",a);this.narrative.play("womb","intro"),this.objective.set("memoryRoom","СЛЕДОВАТЬ ЗА «ЗНАКОМЫМ» КОРИДОРОМ",new D(0,0,.5));let l=!1;return this.triggers.add({id:"memoryPortal",minX:-2.5,maxX:2.5,minZ:-.2,maxZ:1,once:!0,onEnter:()=>{l=!0,this.player.position.set(30,1.55,2.8),this.objective.set("dossier","ПРОВЕРИТЬ ЛИЧНОЕ ДЕЛО «СКАЛЬПЕЛЬ»",i),this.events.emit("world:hallucination",{active:!0})}}),this.interactions.add({id:"dossier",position:i,radius:1,mode:"pickup",onUse:()=>(this.quest.has("dossier")||(this.quest.add("dossier"),r.removeFromParent(),this.narrative.play("womb","dossier"),this.infection.add(18,"dossierResonance"),this.objective.set("memoryExit","ВЫЙТИ ИЗ КОМНАТЫ, КОТОРОЙ НЕТ НА ПЛАНЕ",new D(30,0,-4))),!0)}),this.interactions.add({id:"drillPickup",position:a,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("drill")||(this.belt.unlock("drill",{sporeCharge:5}),this.crafting.unlock("drillCharge"),o.removeFromParent()),!0)}),this.interactions.add({id:"memoryExit",position:new D(30,0,-3.8),radius:1.2,prompt:"E — ОТКРЫТЬ ДВЕРЬ",onUse:()=>this.quest.has("dossier")?(this.quest.add("memoryRoomExited"),this.player.position.set(0,1.55,-5),l=!1,this.events.emit("world:hallucination",{active:!1}),this.objective.set("wombExit","ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР",new D(0,0,-11.8)),!0):!1}),this.#d({id:"wombExit",from:"womb",to:"silence",door:n,interactPosition:new D(0,0,-11.75),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.65,maxZ:-13.45},prompt:"E — ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР",lockedMessage:"РЕЗОНАНС НЕ СТАБИЛИЗИРОВАН: НАЙДИТЕ ЛИЧНОЕ ДЕЛО",objectiveText:"ВОЙТИ В 3-Й КОНТУР"}),{spawn:{x:0,z:13},yaw:Math.PI,update:c=>{l||this.infection.add(c*.28,"aggressiveSpores")}}}_silence(){this.#u(14213077,10,32),this.#i(30,30,"whiteWall");const e=new Et({color:Pe.pale,fog:!0}),t=[];for(let m=0;m<12;m++){const _=m/12*Math.PI*2,S=new Le(new Ge(2,2.4,.22),e.clone());S.position.set(Math.sin(_)*12,1.2,Math.cos(_)*12-2),S.rotation.y=_,this.root.add(S),t.push(S)}const n=new D(0,.55,5.2),i=this.#c("weapon",n),r=this.enemies.spawn("collective",{x:0,z:-5}),a=new D(-3.2,0,-10.8),o=new D(3.2,0,-10.8),l=new Le(new Ge(1.1,1,1.1),new Et({color:Pe.rust,fog:!0}));l.position.set(a.x,.5,a.z),l.visible=!1,this.root.add(l);const c=new Le(new mi(.65,1),new Et({color:Pe.lime,fog:!0}));c.position.set(o.x,.8,o.z),c.visible=!1,this.root.add(c),this.narrative.play("silence","intro"),this.objective.set("resonator","ВЗЯТЬ РЕЗОНАТОР",n);let u=!1;this.interactions.add({id:"resonatorPickup",position:n,radius:1.05,mode:"pickup",onUse:()=>(this.belt.unlocked.has("resonator")||(this.belt.unlock("resonator",{resonance:60}),i.removeFromParent(),this.objective.set("collective","ИСПОЛЬЗОВАТЬ РЕЗОНАТОР ПРОТИВ КОЛЛЕКТИВНОГО РАЗУМА",r.group.position)),!0)});const f=this.interactions.add({id:"burnChoice",position:a,radius:1.4,prompt:"E — СЖЕЧЬ КОНТУР / ПОДТВЕРДИТЬ ЗАРЯД",enabled:!1,onUse:()=>(this.events.emit("game:ending",{ending:"burn"}),!0)}),h=this.interactions.add({id:"mergeChoice",position:o,radius:1.4,prompt:"E — СЛИТЬСЯ / ПРИНЯТЬ СПОРЫ РАЗУМА",enabled:!1,onUse:()=>(this.events.emit("game:ending",{ending:"merge"}),!0)});return this.#t("boss:phase",({phase:m})=>{if(m===2){this.narrative.play("silence","phase2"),this.scene.fog=new Fi(11846593,3,15);for(let _=0;_<t.length;_++)t[_].rotation.z=(_%2?1:-1)*.18}else if(m===3){this.narrative.play("silence","phase3"),this.scene.fog=new Fi(8427680,1.5,10);for(let _=0;_<t.length;_++)t[_].position.y=_%2?2.4:.6}}),this.#t("enemy:killed",({enemy:m})=>{m===r&&(u=!0,l.visible=!0,c.visible=!0,f.enabled=!0,h.enabled=!0,this.narrative.play("silence","choice"),this.objective.set("finalChoice","ВЫБОР: СЖЕЧЬ ИЛИ СЛИТЬСЯ",new D(0,0,-10.8)))}),{spawn:{x:0,z:9},yaw:Math.PI,update:(m,_)=>{if(!u)for(let S=0;S<t.length;S++){const p=t[S];p.position.x+=Math.sin(_*.45+S)*.0015*this.enemies.bossPhase,p.position.z+=Math.cos(_*.42+S)*.0015*this.enemies.bossPhase}}}}}class gm{constructor(){this.ctx=null,this.master=null}unlock(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.12,this.master.connect(this.ctx.destination)),this.ctx.state==="suspended"&&this.ctx.resume()}tone(e=220,t=.06,n="square",i=.18,r=0){if(!this.ctx)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(e,a),o.frequency.linearRampToValueAtTime(Math.max(20,e+r),a+t),l.gain.setValueAtTime(i,a),l.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+t)}shot(e){e==="shotgun"?(this.tone(90,.11,"square",.45,-45),this.tone(180,.06,"sawtooth",.25,-100)):e==="ak"?this.tone(125,.045,"square",.22,-60):e==="fungus"?this.tone(310,.16,"sine",.25,-180):e==="drill"?this.tone(80,.22,"sawtooth",.3,120):e==="resonator"?this.tone(540,.13,"sine",.25,220):this.tone(150,.055,"square",.26,-75)}pickup(){this.tone(440,.06,"square",.12,160)}ui(){this.tone(250,.035,"square",.09,0)}wail(){this.tone(95,.55,"sawtooth",.18,55)}transition(){this.tone(180,.18,"square",.12,110)}}class _m{constructor(e){this.root=e,this.events=new qp,this.hud=new $p(e),this.scene=new Zo,this.camera=new Gt(68,16/9,.05,60),this.scene.add(this.camera),this.retro=new Kp(this.hud.viewport),this.input=new Yp(this.retro.renderer.domElement),this.random=new jp(4266374),this.textures=new Jp(()=>this.random.next()),this.collision=new Qp,this.interactions=new em(this.events),this.triggers=new tm,this.inventory=new nm(4),this.infection=new im(this.events),this.belt=new sm(this.events),this.crafting=new Zp(this.inventory,this.belt,this.events),this.objective=new rm(this.events),this.narrative=new lm(this.events,this.hud),this.audio=new gm,this.quest=new am(this.events),this.player=new cm({camera:this.camera,input:this.input,collision:this.collision,events:this.events,infection:this.infection}),this.weaponView=new pm(this.camera),this.sporeManager=new dm({scene:this.scene,inventory:this.inventory,infection:this.infection,events:this.events}),this.enemies=new um({scene:this.scene,events:this.events,collision:this.collision,onPlayerDamage:(t,n)=>this.player.damage(t,n),onPlayerSlow:t=>this.player.slow(t),onSporeDrop:(t,n)=>this.sporeManager.spawn(t,n)}),this.weapons=new fm({scene:this.scene,camera:this.camera,input:this.input,belt:this.belt,player:this.player,enemies:this.enemies,collision:this.collision,events:this.events,weaponView:this.weaponView}),this.levelFactory=new mm({scene:this.scene,collision:this.collision,interactions:this.interactions,triggers:this.triggers,enemies:this.enemies,spores:this.sporeManager,events:this.events,textures:this.textures,objective:this.objective,inventory:this.inventory,belt:this.belt,crafting:this.crafting,narrative:this.narrative,infection:this.infection,player:this.player,hud:this.hud,quest:this.quest}),this.clock=new $c,this.time=0,this.currentLevel=null,this.currentLevelContext=null,this.paused=!1,this.started=!1,this.hallucination=0,this.endingEffect=0,this.flicker=0,this.gameEnded=!1,this.#t(),this.#s(),this.#r(),window.addEventListener("resize",()=>this.#r())}start(){const e=()=>{requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.05);this.#i(t)};e()}#t(){this.hud.bindStart(()=>{this.audio.unlock(),this.started||(this.started=!0,this.loadLevel("perimeter")),this.input.requestPointerLock(),this.hud.setPointerLocked(!0)}),this.hud.bindCraft(e=>{this.audio.ui(),this.crafting.craft(e)?this.hud.showMessage("КРАФТ ЗАВЕРШЁН"):this.hud.showMessage("НЕДОСТАТОЧНО РЕСУРСОВ / НЕТ СВОБОДНОГО СЛОТА")}),this.hud.bindEquip((e,t)=>{this.audio.ui(),this.belt.equip(e,t)&&this.hud.showMessage(`СЛОТ ${e+1}: ${t.toUpperCase()}`)}),this.retro.renderer.domElement.addEventListener("click",()=>{!this.paused&&this.started&&document.pointerLockElement!==this.retro.renderer.domElement&&this.input.requestPointerLock()})}#s(){this.events.on("ui:message",e=>this.hud.showMessage(e)),this.events.on("weapon:unlocked",({weapon:e})=>{this.hud.showMessage(`ОРУЖИЕ: ${e.name}`,1.6),this.audio.pickup()}),this.events.on("weapon:empty",()=>{this.hud.showMessage("НЕТ БОЕЗАПАСА"),this.audio.ui()}),this.events.on("weapon:fired",({weapon:e})=>this.audio.shot(e.id)),this.events.on("craft:unlocked",({recipe:e})=>this.hud.showMessage(`СХЕМА КРАФТА: ${e.name}`,1.5)),this.events.on("craft:completed",()=>this.audio.pickup()),this.events.on("spore:collected",()=>{this.hud.showMessage("+1 СПОРА О-41",.65),this.audio.pickup()}),this.events.on("quest:pickup",()=>this.audio.pickup()),this.events.on("inventory:full",()=>this.hud.showMessage("РЮКЗАК ЗАПОЛНЕН")),this.events.on("player:damaged",()=>this.hud.flashDamage()),this.events.on("player:died",()=>this.hud.showDeath()),this.events.on("enemy:wail",()=>{this.player.applyWail(),this.hud.jamCompass(),this.audio.wail()}),this.events.on("boss:immune",()=>this.hud.showMessage("РЕАКЦИИ НЕТ // НУЖЕН РЕЗОНАТОР",.8)),this.events.on("infection:tier",({to:e})=>{const t=["НОРМА","СПОРЫ В КРОВИ","СЕНСОРНЫЕ СБОИ","РЕЗОНАНС","КРИТИЧЕСКИЙ РЕЗОНАНС"];this.hud.setSystemLine(`БИОСКАНЕР // ${t[e]}`),e>=2&&this.hud.showMessage(t[e],1.2)}),this.events.on("infection:inhaler",()=>this.hud.showMessage("ИНГАЛЯТОР // СЕНСОРНАЯ ПОГРЕШНОСТЬ",1.2)),this.events.on("world:teleport",({kind:e})=>this.hud.showMessage(e==="loop"?"КООРДИНАТЫ НЕ ИЗМЕНИЛИСЬ":"ПРОСТРАНСТВЕННАЯ ОШИБКА",.9)),this.events.on("world:hallucination",({active:e})=>{this.hallucination=e?1:0}),this.events.on("world:flicker",({strength:e=1}={})=>{this.flicker=Math.max(this.flicker,e)}),this.events.on("audio:hallucination",()=>{this.audio.tone(72,.42,"sine",.07,18)}),this.events.on("level:complete",({to:e})=>{this.gameEnded||(this.audio.transition(),this.loadLevel(e))}),this.events.on("game:ending",({ending:e})=>{this.gameEnded=!0,this.paused=!0,this.endingEffect=e==="burn"?-1:1,this.hud.showEnding(e),document.exitPointerLock?.()})}loadLevel(e){this.narrative.interrupt(),this.weapons.clear(),this.currentLevel=e,this.currentLevelContext=this.levelFactory.load(e),this.player.resetForLevel(this.currentLevelContext.spawn,this.currentLevelContext.yaw);const t=wo[e];this.hud.showTransition(t),this.hud.setSystemLine(`К.О.Н.Т.У.Р. // ${t.title} // ${t.contour}`),this.#r()}#i(e){if(this.time+=e,this.flicker=Math.max(0,this.flicker-e*3.2),!this.started){this.retro.render(this.scene,this.camera,this.time,{});return}this.input.consume("KeyI")&&!this.gameEnded&&!this.player.dead&&(this.paused=!this.paused,this.hud.setPauseVisible(this.paused),this.audio.ui(),this.paused?document.exitPointerLock?.():this.input.requestPointerLock()),this.input.consume("Space")&&this.narrative.skip(),this.input.consume("KeyR")&&this.player.dead&&location.reload(),!this.paused&&!this.player.dead&&!this.gameEnded?(this.input.consume("KeyH")&&this.#n(),this.input.consume("KeyQ")&&this.#e(),this.player.update(e,!1),this.weapons.update(e,!1),this.enemies.update(e,this.player.position),this.sporeManager.update(this.time,this.player.position),this.interactions.update(this.player.position,this.input,this.hud),this.triggers.update(this.player.position),this.levelFactory.update(e),this.infection.update(e),this.narrative.update(e)):(this.player.update(e,!0),this.weapons.update(e,!0),this.infection.update(e),this.narrative.update(e));const t=wo[this.currentLevel];this.hud.update(e,{player:this.player,infection:this.infection,inventory:this.inventory,belt:this.belt,crafting:this.crafting,objective:this.objective,enemies:this.enemies,spores:this.sporeManager,levelMeta:t}),this.retro.render(this.scene,this.camera,this.time,{infection:this.infection.distortion,wail:this.enemies.wailDistortion,hive:this.enemies.hiveDistortion,hallucination:this.hallucination,ending:this.endingEffect,flicker:this.flicker}),this.input.endFrame()}#n(){if(!this.inventory.remove("inhaler",1)){this.hud.showMessage("ИНГАЛЯТОР НЕ СОБРАН");return}this.infection.useInhaler(),this.player.heal(1.5),this.audio.tone(310,.12,"sine",.12,-90)}#e(){if(!this.inventory.remove("shield",1)){this.hud.showMessage("ЩИТ НЕ СОБРАН");return}this.player.activateShield(6),this.audio.tone(180,.2,"square",.12,120)}#r(){const{aspect:e}=this.retro.resize();this.camera.aspect=e,this.camera.updateProjectionMatrix()}}const vm=document.querySelector("#app"),cl=new _m(vm);cl.start();window.__KONTUR041__=cl;
//# sourceMappingURL=index-BimNhZg_.js.map
