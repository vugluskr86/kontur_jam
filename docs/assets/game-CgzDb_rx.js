import{A as bl,l as Tl}from"./AudioSystem-D0my3vM9.js";const la="183",wl=0,Ia=1,Al=2,_s=1,Rl=2,Di=3,Fn=0,Ot=1,xn=2,Sn=0,mi=1,Ua=2,Na=3,Fa=4,Cl=5,Yn=100,Pl=101,Ll=102,Dl=103,Il=104,Ul=200,Nl=201,Fl=202,Ol=203,vr=204,xr=205,Bl=206,zl=207,kl=208,Vl=209,Hl=210,Gl=211,Wl=212,Xl=213,ql=214,Mr=0,Sr=1,Er=2,_i=3,yr=4,br=5,Tr=6,wr=7,ca=0,Yl=1,jl=2,on=0,Fo=1,Oo=2,Bo=3,ha=4,zo=5,ko=6,Vo=7,Ho=300,Kn=301,vi=302,Bs=303,zs=304,Ps=306,bs=1e3,Mn=1001,Ar=1002,gt=1003,Go=1004,ji=1005,Pt=1006,ks=1007,$n=1008,Ft=1009,Wo=1010,Xo=1011,Bi=1012,ua=1013,cn=1014,sn=1015,yn=1016,da=1017,fa=1018,zi=1020,qo=35902,Yo=35899,jo=1021,$o=1022,Wt=1023,bn=1026,Zn=1027,Zo=1028,pa=1029,xi=1030,ma=1031,ga=1033,vs=33776,xs=33777,Ms=33778,Ss=33779,Rr=35840,Cr=35841,Pr=35842,Lr=35843,Dr=36196,Ir=37492,Ur=37496,Nr=37488,Fr=37489,Or=37490,Br=37491,zr=37808,kr=37809,Vr=37810,Hr=37811,Gr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,jr=37817,$r=37818,Zr=37819,Kr=37820,Jr=37821,Qr=36492,ea=36494,ta=36495,na=36283,ia=36284,sa=36285,ra=36286,$l=3200,Ko=0,Zl=1,In="",Nt="srgb",Mi="srgb-linear",Ts="linear",Qe="srgb",ei=7680,Oa=519,Kl=512,Jl=513,Ql=514,_a=515,ec=516,tc=517,va=518,nc=519,Ba=35044,za="300 es",rn=2e3,ki=2001;function ic(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sc(){const s=ws("canvas");return s.style.display="block",s}const ka={};function Va(...s){const e="THREE."+s.shift();console.log(e,...s)}function Jo(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=Jo(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function je(...s){s=Jo(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function As(...s){const e=s.join(" ");e in ka||(ka[e]=!0,Ce(...s))}function rc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ac={[Mr]:Sr,[Er]:Tr,[yr]:wr,[_i]:br,[Sr]:Mr,[Tr]:Er,[wr]:yr,[br]:_i};class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ha=1234567;const Ui=Math.PI/180,Vi=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function xa(s,e){return(s%e+e)%e}function oc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ni(s,e,t){return(1-t)*s+t*e}function cc(s,e,t,n){return Ni(s,e,1-Math.exp(-t*n))}function hc(s,e=1){return e-Math.abs(xa(s,e*2)-e)}function uc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pc(s,e){return s+Math.random()*(e-s)}function mc(s){return s*(.5-Math.random())}function gc(s){s!==void 0&&(Ha=s);let e=Ha+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _c(s){return s*Ui}function vc(s){return s*Vi}function xc(s){return(s&s-1)===0&&s!==0}function Mc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ec(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*u,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yc={DEG2RAD:Ui,RAD2DEG:Vi,generateUUID:yi,clamp:Ve,euclideanModulo:xa,mapLinear:oc,inverseLerp:lc,lerp:Ni,damp:cc,pingpong:hc,smoothstep:uc,smootherstep:dc,randInt:fc,randFloat:pc,randFloatSpread:mc,seededRandom:gc,degToRad:_c,radToDeg:vc,isPowerOfTwo:xc,ceilPowerOfTwo:Mc,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:Ec,normalize:Dt,denormalize:pi};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*S;m<0&&(h=-h,p=-p,_=-_,S=-S,m=-m);let f=1-o;if(m<.9995){const x=Math.acos(m),b=Math.sin(x);f=Math.sin(f*x)/b,o=Math.sin(o*x)/b,l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+S*o;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new R,Ga=new bi;class Ne{constructor(e,t,n,i,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],S=i[0],m=i[3],f=i[6],x=i[1],b=i[4],E=i[7],A=i[2],w=i[5],L=i[8];return r[0]=a*S+o*x+l*A,r[3]=a*m+o*b+l*w,r[6]=a*f+o*E+l*L,r[1]=c*S+u*x+d*A,r[4]=c*m+u*b+d*w,r[7]=c*f+u*E+d*L,r[2]=h*S+p*x+_*A,r[5]=h*m+p*b+_*w,r[8]=h*f+p*E+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*d+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(i*c-u*n)*S,e[2]=(o*n-i*a)*S,e[3]=h*S,e[4]=(u*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Ne,Wa=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bc(){const s={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?Ts:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mi]:{primaries:e,whitePoint:n,transfer:Ts,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}const qe=bc();function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class Tc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ti===void 0&&(ti=ws("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=En(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wc=0;class Ma{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Ac=0;const Ws=new R;class Lt extends Ei{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Mn,i=Mn,r=Pt,a=$n,o=Wt,l=Ft,c=Lt.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=yi(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ws).x}get height(){return this.source.getSize(Ws).y}get depth(){return this.source.getSize(Ws).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ho;Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,A=(f+1)/2,w=(u+h)/4,L=(d+S)/4,v=(_+m)/4;return b>E&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=L/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=L/r,i=v/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-S)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rc extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Lt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ma(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zt extends Rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qo extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e,t,n,i,r,a,o,l,c,u,d,h,p,_,S,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,p,_,S,m)}set(e,t,n,i,r,a,o,l,c,u,d,h,p,_,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ni.setFromMatrixColumn(e,0).length(),r=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,S=c*d;t[0]=h+S*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,S=c*d;t[0]=h-S*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,S=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=S-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),An.crossVectors(n,zt),An.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),An.crossVectors(n,zt)),An.normalize(),$i.crossVectors(zt,An),i[0]=An.x,i[4]=$i.x,i[8]=zt.x,i[1]=An.y,i[5]=$i.y,i[9]=zt.y,i[2]=An.z,i[6]=$i.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],S=n[6],m=n[10],f=n[14],x=n[3],b=n[7],E=n[11],A=n[15],w=i[0],L=i[4],v=i[8],y=i[12],k=i[1],C=i[5],N=i[9],O=i[13],G=i[2],V=i[6],z=i[10],H=i[14],Q=i[3],Z=i[7],he=i[11],me=i[15];return r[0]=a*w+o*k+l*G+c*Q,r[4]=a*L+o*C+l*V+c*Z,r[8]=a*v+o*N+l*z+c*he,r[12]=a*y+o*O+l*H+c*me,r[1]=u*w+d*k+h*G+p*Q,r[5]=u*L+d*C+h*V+p*Z,r[9]=u*v+d*N+h*z+p*he,r[13]=u*y+d*O+h*H+p*me,r[2]=_*w+S*k+m*G+f*Q,r[6]=_*L+S*C+m*V+f*Z,r[10]=_*v+S*N+m*z+f*he,r[14]=_*y+S*O+m*H+f*me,r[3]=x*w+b*k+E*G+A*Q,r[7]=x*L+b*C+E*V+A*Z,r[11]=x*v+b*N+E*z+A*he,r[15]=x*y+b*O+E*H+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],f=e[15],x=l*p-c*h,b=o*p-c*d,E=o*h-l*d,A=a*p-c*u,w=a*h-l*u,L=a*d-o*u;return t*(S*x-m*b+f*E)-n*(_*x-m*A+f*w)+i*(_*b-S*A+f*L)-r*(_*E-S*w+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],f=e[15],x=t*o-n*a,b=t*l-i*a,E=t*c-r*a,A=n*l-i*o,w=n*c-r*o,L=i*c-r*l,v=u*S-d*_,y=u*m-h*_,k=u*f-p*_,C=d*m-h*S,N=d*f-p*S,O=h*f-p*m,G=x*O-b*N+E*C+A*k-w*y+L*v;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/G;return e[0]=(o*O-l*N+c*C)*V,e[1]=(i*N-n*O-r*C)*V,e[2]=(S*L-m*w+f*A)*V,e[3]=(h*w-d*L-p*A)*V,e[4]=(l*k-a*O-c*y)*V,e[5]=(t*O-i*k+r*y)*V,e[6]=(m*E-_*L-f*b)*V,e[7]=(u*L-h*E+p*b)*V,e[8]=(a*N-o*k+c*v)*V,e[9]=(n*k-t*N-r*v)*V,e[10]=(_*w-S*E+f*x)*V,e[11]=(d*E-u*w-p*x)*V,e[12]=(o*y-a*C-l*v)*V,e[13]=(t*C-n*y+i*v)*V,e[14]=(S*b-_*A-m*x)*V,e[15]=(u*A-d*b+h*x)*V,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,S=a*u,m=a*d,f=o*d,x=l*c,b=l*u,E=l*d,A=n.x,w=n.y,L=n.z;return i[0]=(1-(S+f))*A,i[1]=(p+E)*A,i[2]=(_-b)*A,i[3]=0,i[4]=(p-E)*w,i[5]=(1-(h+f))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(_+b)*L,i[9]=(m-x)*L,i[10]=(1-(h+S))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ni.set(i[0],i[1],i[2]).length();const o=ni.set(i[4],i[5],i[6]).length(),l=ni.set(i[8],i[9],i[10]).length();r<0&&(a=-a),qt.copy(this);const c=1/a,u=1/o,d=1/l;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=rn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===rn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ki)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=rn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===rn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ki)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new R,qt=new ht,Pc=new R(0,0,0),Lc=new R(1,1,1),An=new R,$i=new R,zt=new R,qa=new ht,Ya=new bi;class hn{constructor(e=0,t=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dc=0;const ja=new R,ii=new bi,fn=new ht,Zi=new R,wi=new R,Ic=new R,Uc=new bi,$a=new R(1,0,0),Za=new R(0,1,0),Ka=new R(0,0,1),Ja={type:"added"},Nc={type:"removed"},si={type:"childadded",child:null},Xs={type:"childremoved",child:null};class wt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new R,t=new hn,n=new bi,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis($a,e)}rotateY(e){return this.rotateOnAxis(Za,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return ja.copy(e).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($a,e)}translateY(e){return this.translateOnAxis(Za,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(wi,Zi,this.up):fn.lookAt(Zi,wi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(fn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ja),si.child=e,this.dispatchEvent(si),si.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nc),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ja),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Ic),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new R(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fc={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Ys(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=xa(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ys(a,r,e+1/3),this.g=Ys(a,r,e),this.b=Ys(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=tl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.workingToColorSpace(Ct.copy(this),e),Math.round(Ve(Ct.r*255,0,255))*65536+Math.round(Ve(Ct.g*255,0,255))*256+Math.round(Ve(Ct.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Nt){qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Ki);const n=Ni(Rn.h,Ki.h,t),i=Ni(Rn.s,Ki.s,t),r=Ni(Rn.l,Ki.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new We;We.NAMES=tl;class Fi{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Fi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nl extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yt=new R,pn=new R,js=new R,mn=new R,ri=new R,ai=new R,Qa=new R,$s=new R,Zs=new R,Ks=new R,Js=new ct,Qs=new ct,er=new ct;class $t{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),pn.subVectors(n,t),js.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(pn),l=Yt.dot(js),c=pn.dot(pn),u=pn.dot(js),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Js.setScalar(0),Qs.setScalar(0),er.setScalar(0),Js.fromBufferAttribute(e,t),Qs.fromBufferAttribute(e,n),er.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Js,r.x),a.addScaledVector(Qs,r.y),a.addScaledVector(er,r.z),a}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ri.subVectors(i,n),ai.subVectors(r,n),$s.subVectors(e,n);const l=ri.dot($s),c=ai.dot($s);if(l<=0&&c<=0)return t.copy(n);Zs.subVectors(e,i);const u=ri.dot(Zs),d=ai.dot(Zs);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ri,a);Ks.subVectors(e,r);const p=ri.dot(Ks),_=ai.dot(Ks);if(_>=0&&p<=_)return t.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ai,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Qa.subVectors(r,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Qa,o);const f=1/(m+S+h);return a=S*f,o=h*f,t.copy(n).addScaledVector(ri,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Qi.subVectors(this.max,Ai),oi.subVectors(e.a,Ai),li.subVectors(e.b,Ai),ci.subVectors(e.c,Ai),Cn.subVectors(li,oi),Pn.subVectors(ci,li),zn.subVectors(oi,ci);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-zn.z,zn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,zn.z,0,-zn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-zn.y,zn.x,0];return!tr(t,oi,li,ci,Qi)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,oi,li,ci,Qi))?!1:(es.crossVectors(Cn,Pn),t=[es.x,es.y,es.z],tr(t,oi,li,ci,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new R,new R,new R,new R,new R,new R,new R,new R],jt=new R,Ji=new Wi,oi=new R,li=new R,ci=new R,Cn=new R,Pn=new R,zn=new R,Ai=new R,Qi=new R,es=new R,kn=new R;function tr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);const o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mt=new R,ts=new He;let Oc=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}}class il extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sl extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bc=new Wi,Ri=new R,nr=new R;class Sa{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(nr)),this.expandByPoint(Ri.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zc=0;const Gt=new ht,ir=new wt,hi=new R,kt=new Wi,Ci=new Wi,Et=new R;class Ht extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?sl:il)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(kt.min,Ci.min),kt.expandByPoint(Et),Et.addVectors(kt.max,Ci.max),kt.expandByPoint(Et)):(kt.expandByPoint(Ci.min),kt.expandByPoint(Ci.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),Et.add(hi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new R,l[v]=new R;const c=new R,u=new R,d=new R,h=new He,p=new He,_=new He,S=new R,m=new R;function f(v,y,k){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,k),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,k),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(C),o[v].add(S),o[y].add(S),o[k].add(S),l[v].add(m),l[y].add(m),l[k].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,y=x.length;v<y;++v){const k=x[v],C=k.start,N=k.count;for(let O=C,G=C+N;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new R,E=new R,A=new R,w=new R;function L(v){A.fromBufferAttribute(i,v),w.copy(A);const y=o[v];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),E.crossVectors(w,y);const C=E.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,C)}for(let v=0,y=x.length;v<y;++v){const k=x[v],C=k.start,N=k.count;for(let O=C,G=C+N;O<G;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new ln(h,u,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let kc=0;class Xi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=mi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=xr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vr&&(n.blendSrc=this.blendSrc),this.blendDst!==xr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _n=new R,sr=new R,ns=new R,Ln=new R,rr=new R,is=new R,ar=new R;class Vc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sr.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(sr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=Ln.dot(this.direction),l=-Ln.dot(ns),c=Ln.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sr).addScaledVector(ns,h),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,r){rr.subVectors(t,e),is.subVectors(n,e),ar.crossVectors(rr,is);let a=this.direction.dot(ar),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(Ln,is));if(l<0)return null;const c=o*this.direction.dot(rr.cross(Ln));if(c<0||l+c>a)return null;const u=-o*Ln.dot(ar);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eo=new ht,Vn=new Vc,ss=new Sa,to=new R,rs=new R,as=new R,os=new R,or=new R,ls=new R,no=new R,cs=new R;class Te extends wt{constructor(e=new Ht,t=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(or.fromBufferAttribute(d,e),a?ls.addScaledVector(or,u):ls.addScaledVector(or.sub(t),u))}t.add(ls)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(ss.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ss,to)===null||Vn.origin.distanceToSquared(to)>(e.far-e.near)**2))&&(eo.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(eo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,A=b;E<A;E+=3){const w=o.getX(E),L=o.getX(E+1),v=o.getX(E+2);i=hs(this,f,e,n,c,u,d,w,L,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const x=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);i=hs(this,a,e,n,c,u,d,x,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],f=a[m.materialIndex],x=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,A=b;E<A;E+=3){const w=E,L=E+1,v=E+2;i=hs(this,f,e,n,c,u,d,w,L,v),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,f=S;m<f;m+=3){const x=m,b=m+1,E=m+2;i=hs(this,a,e,n,c,u,d,x,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hc(s,e,t,n,i,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Fn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:s}}function hs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,as),s.getVertexPosition(c,os);const u=Hc(s,e,t,n,rs,as,os,no);if(u){const d=new R;$t.getBarycoord(no,rs,as,os,d),i&&(u.uv=$t.getInterpolatedAttribute(i,o,l,c,d,new He)),r&&(u.uv1=$t.getInterpolatedAttribute(r,o,l,c,d,new He)),a&&(u.normal=$t.getInterpolatedAttribute(a,o,l,c,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};$t.getNormal(rs,as,os,h.normal),u.face=h,u.barycoord=d}return u}class Gc extends Lt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=gt,u=gt,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lr=new R,Wc=new R,Xc=new Ne;class qn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lr.subVectors(n,t).cross(Wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xc.getNormalMatrix(e),i=this.coplanarPoint(lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Sa,qc=new He(.5,.5),us=new R;class Ea{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],S=r[9],m=r[10],f=r[11],x=r[12],b=r[13],E=r[14],A=r[15];if(i[0].setComponents(c-a,p-u,f-_,A-x).normalize(),i[1].setComponents(c+a,p+u,f+_,A+x).normalize(),i[2].setComponents(c+o,p+d,f+S,A+b).normalize(),i[3].setComponents(c-o,p-d,f-S,A-b).normalize(),n)i[4].setComponents(l,h,m,E).normalize(),i[5].setComponents(c-l,p-h,f-m,A-E).normalize();else if(i[4].setComponents(c-l,p-h,f-m,A-E).normalize(),t===rn)i[5].setComponents(c+l,p+h,f+m,A+E).normalize();else if(t===ki)i[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=qc.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(us.x=i.normal.x>0?e.max.x:e.min.x,us.y=i.normal.y>0?e.max.y:e.min.y,us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends Lt{constructor(e=[],t=Kn,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yc extends Lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hi extends Lt{constructor(e,t,n=cn,i,r,a,o=gt,l=gt,c,u=bn,d=1){if(u!==bn&&u!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jc extends Hi{constructor(e,t=cn,n=Kn,i,r,a=gt,o=gt,l,c=bn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class al extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class De extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function _(S,m,f,x,b,E,A,w,L,v,y){const k=E/L,C=A/v,N=E/2,O=A/2,G=w/2,V=L+1,z=v+1;let H=0,Q=0;const Z=new R;for(let he=0;he<z;he++){const me=he*C-O;for(let de=0;de<V;de++){const Fe=de*k-N;Z[S]=Fe*x,Z[m]=me*b,Z[f]=G,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[m]=0,Z[f]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(de/L),d.push(1-he/v),H+=1}}for(let he=0;he<v;he++)for(let me=0;me<L;me++){const de=h+me+V*he,Fe=h+me+V*(he+1),ot=h+(me+1)+V*(he+1),at=h+(me+1)+V*he;l.push(de,Fe,at),l.push(Fe,ot,at),Q+=6}o.addGroup(p,Q,y),p+=Q,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new De(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class an extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],p=[];let _=0;const S=[],m=n/2;let f=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function x(){const E=new R,A=new R;let w=0;const L=(t-e)/n;for(let v=0;v<=r;v++){const y=[],k=v/r,C=k*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,G=O*l+o,V=Math.sin(G),z=Math.cos(G);A.x=C*V,A.y=-k*n+m,A.z=C*z,d.push(A.x,A.y,A.z),E.set(V,L,z).normalize(),h.push(E.x,E.y,E.z),p.push(O,1-k),y.push(_++)}S.push(y)}for(let v=0;v<i;v++)for(let y=0;y<r;y++){const k=S[y][v],C=S[y+1][v],N=S[y+1][v+1],O=S[y][v+1];(e>0||y!==0)&&(u.push(k,C,O),w+=3),(t>0||y!==r-1)&&(u.push(C,N,O),w+=3)}c.addGroup(f,w,0),f+=w}function b(E){const A=_,w=new He,L=new R;let v=0;const y=E===!0?e:t,k=E===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*k,0),h.push(0,k,0),p.push(.5,.5),_++;const C=_;for(let N=0;N<=i;N++){const G=N/i*l+o,V=Math.cos(G),z=Math.sin(G);L.x=y*z,L.y=m*k,L.z=y*V,d.push(L.x,L.y,L.z),h.push(0,k,0),w.x=V*.5+.5,w.y=z*.5*k+.5,p.push(w.x,w.y),_++}for(let N=0;N<i;N++){const O=A+N,G=C+N;E===!0?u.push(G,G+1,O):u.push(G+1,G,O),v+=3}c.addGroup(f,v,E===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends an{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Rs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ls extends Ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new R,E=new R,A=new R;for(let w=0;w<t.length;w+=3)p(t[w+0],b),p(t[w+1],E),p(t[w+2],A),l(b,E,A,x)}function l(x,b,E,A){const w=A+1,L=[];for(let v=0;v<=w;v++){L[v]=[];const y=x.clone().lerp(E,v/w),k=b.clone().lerp(E,v/w),C=w-v;for(let N=0;N<=C;N++)N===0&&v===w?L[v][N]=y:L[v][N]=y.clone().lerp(k,N/C)}for(let v=0;v<w;v++)for(let y=0;y<2*(w-v)-1;y++){const k=Math.floor(y/2);y%2===0?(h(L[v][k+1]),h(L[v+1][k]),h(L[v][k])):(h(L[v][k+1]),h(L[v+1][k+1]),h(L[v+1][k]))}}function c(x){const b=new R;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(x),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function u(){const x=new R;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const E=m(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;a.push(E,1-A)}_(),d()}function d(){for(let x=0;x<a.length;x+=6){const b=a[x+0],E=a[x+2],A=a[x+4],w=Math.max(b,E,A),L=Math.min(b,E,A);w>.9&&L<.1&&(b<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function p(x,b){const E=x*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function _(){const x=new R,b=new R,E=new R,A=new R,w=new He,L=new He,v=new He;for(let y=0,k=0;y<r.length;y+=9,k+=6){x.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),E.set(r[y+6],r[y+7],r[y+8]),w.set(a[k+0],a[k+1]),L.set(a[k+2],a[k+3]),v.set(a[k+4],a[k+5]),A.copy(x).add(b).add(E).divideScalar(3);const C=m(A);S(w,k+0,x,C),S(L,k+2,b,C),S(v,k+4,E,C)}}function S(x,b,E,A){A<0&&x.x===1&&(a[b]=x.x-1),E.x===0&&E.z===0&&(a[b]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.vertices,e.indices,e.radius,e.detail)}}class Nn extends Ls{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nn(e.radius,e.detail)}}class ya extends Ls{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ya(e.radius,e.detail)}}class nn extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],S=[],m=[];for(let f=0;f<u;f++){const x=f*h-a;for(let b=0;b<c;b++){const E=b*d-r;_.push(E,-x,0),S.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const b=x+c*f,E=x+c*(f+1),A=x+1+c*(f+1),w=x+1+c*f;p.push(b,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class _t extends Ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new R,h=new R,p=[],_=[],S=[],m=[];for(let f=0;f<=n;f++){const x=[],b=f/n;let E=0;f===0&&a===0?E=.5/t:f===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(i+w*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+w*r)*Math.sin(a+b*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(w+E,1-b),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const b=u[f][x+1],E=u[f][x],A=u[f+1][x],w=u[f+1][x+1];(f!==0||a>0)&&p.push(b,E,w),(f!==n-1||l<Math.PI)&&p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(S,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gi extends Ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new R,p=new R,_=new R;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let f=0;f<=i;f++){const x=f/i*r;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),d.push(f/i),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=i;m++){const f=(i+1)*S+m-1,x=(i+1)*(S-1)+m-1,b=(i+1)*(S-1)+m,E=(i+1)*S+m;l.push(f,x,E),l.push(x,b,E)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Si(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=Si(s[t]);for(const i in n)e[i]=n[i]}return e}function $c(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ol(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Zc={clone:Si,merge:Ut};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=$c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qc extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eh extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class th extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nh extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ds extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ih extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const cr=new ht,io=new R,so=new R;class ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;io.setFromMatrixPosition(e.matrixWorld),t.position.copy(io),so.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(so),t.updateMatrixWorld(),cr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ki||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ds=new R,fs=new bi,Qt=new R;class cl extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,fs,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ds,fs,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,fs,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new R,ro=new He,ao=new He;class Vt extends cl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,ro,ao),t.subVectors(ao,ro)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sh extends ll{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}}class Cs extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Is extends cl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rh extends ll{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class oh extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ui=-90,di=1;class lh extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(ui,di,e,t);i.layers=this.layers,this.add(i);const r=new Vt(ui,di,e,t);r.layers=this.layers,this.add(r);const a=new Vt(ui,di,e,t);a.layers=this.layers,this.add(a);const o=new Vt(ui,di,e,t);o.layers=this.layers,this.add(o);const l=new Vt(ui,di,e,t);l.layers=this.layers,this.add(l);const c=new Vt(ui,di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ch extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oo(s,e,t,n){const i=uh(n);switch(t){case jo:return s*e;case Zo:return s*e/i.components*i.byteLength;case pa:return s*e/i.components*i.byteLength;case xi:return s*e*2/i.components*i.byteLength;case ma:return s*e*2/i.components*i.byteLength;case $o:return s*e*3/i.components*i.byteLength;case Wt:return s*e*4/i.components*i.byteLength;case ga:return s*e*4/i.components*i.byteLength;case vs:case xs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ms:case Ss:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cr:case Lr:return Math.max(s,16)*Math.max(e,8)/4;case Rr:case Pr:return Math.max(s,8)*Math.max(e,8)/2;case Dr:case Ir:case Nr:case Fr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Or:case Br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $r:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qr:case ea:case ta:return Math.ceil(s/4)*Math.ceil(e/4)*16;case na:case ia:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sa:case ra:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uh(s){switch(s){case Ft:case Wo:return{byteLength:1,components:1};case Bi:case Xo:case yn:return{byteLength:2,components:1};case da:case fa:return{byteLength:2,components:4};case cn:case ua:case sn:return{byteLength:4,components:1};case qo:case Yo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);function hl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dh(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];s.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
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
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
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
#endif`,Eh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
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
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,uu=`uniform sampler2D dfgLUT;
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
}`,du=`
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eu=`#if defined( USE_POINTS_UV )
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
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ad=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,xd=`#if DEPTH_PACKING == 3200
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
}`,Md=`#define DISTANCE
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
}`,Sd=`#define DISTANCE
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
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
}`,Td=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define MATCAP
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
}`,Ld=`#define MATCAP
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
}`,Dd=`#define NORMAL
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
}`,Id=`#define NORMAL
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
}`,Ud=`#define PHONG
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
}`,Nd=`#define PHONG
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
}`,Fd=`#define STANDARD
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
}`,Od=`#define STANDARD
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
}`,Bd=`#define TOON
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
}`,zd=`#define TOON
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
}`,kd=`uniform float size;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,Gd=`uniform vec3 color;
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
}`,Wd=`uniform float rotation;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:_h,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:Sh,batching_vertex:Eh,begin_vertex:yh,beginnormal_vertex:bh,bsdfs:Th,iridescence_fragment:wh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Lh,color_fragment:Dh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Nh,common:Fh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:kh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Hh,colorspace_fragment:Gh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:qh,envmap_pars_fragment:Yh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:ru,envmap_vertex:$h,fog_vertex:Zh,fog_pars_vertex:Kh,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:eu,lightmap_pars_fragment:tu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:Eu,metalnessmap_fragment:yu,metalnessmap_pars_fragment:bu,morphinstance_vertex:Tu,morphcolor_vertex:wu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Lu,normal_pars_fragment:Du,normal_pars_vertex:Iu,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:ku,packing:Vu,premultiplied_alpha_fragment:Hu,project_vertex:Gu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:qu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:$u,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ku,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:ed,skinnormal_vertex:td,specularmap_fragment:nd,specularmap_pars_fragment:id,tonemapping_fragment:sd,tonemapping_pars_fragment:rd,transmission_fragment:ad,transmission_pars_fragment:od,uv_pars_fragment:ld,uv_pars_vertex:cd,uv_vertex:hd,worldpos_vertex:ud,background_vert:dd,background_frag:fd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:gd,cube_frag:_d,depth_vert:vd,depth_frag:xd,distance_vert:Md,distance_frag:Sd,equirect_vert:Ed,equirect_frag:yd,linedashed_vert:bd,linedashed_frag:Td,meshbasic_vert:wd,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Pd,meshmatcap_frag:Ld,meshnormal_vert:Dd,meshnormal_frag:Id,meshphong_vert:Ud,meshphong_frag:Nd,meshphysical_vert:Fd,meshphysical_frag:Od,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:kd,points_frag:Vd,shadow_vert:Hd,shadow_frag:Gd,sprite_vert:Wd,sprite_frag:Xd},oe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},tn={basic:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ut([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ut([oe.lights,oe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};tn.physical={uniforms:Ut([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ps={r:0,b:0,g:0},Gn=new hn,qd=new ht;function Yd(s,e,t,n,i,r){const a=new We(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const E=x.backgroundBlurriness>0;b=e.get(b,E)}return b}function _(x){let b=!1;const E=p(x);E===null?m(a,o):E&&E.isColor&&(m(E,1),b=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(x,b){const E=p(b);E&&(E.isCubeTexture||E.mapping===Ps)?(c===void 0&&(c=new Te(new De(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Si(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Gn.copy(b.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qd.makeRotationFromEuler(Gn)),c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,(u!==E||d!==E.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Te(new nn(2,2),new Kt({name:"BackgroundMaterial",uniforms:Si(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(ps,ol(s)),t.buffers.color.setClear(ps.r,ps.g,ps.b,b,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:_,addToRenderList:S,dispose:f}}function jd(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(C,N,O,G,V){let z=!1;const H=d(C,G,O,N);r!==H&&(r=H,c(r.object)),z=p(C,G,O,V),z&&_(C,G,O,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(C,N,O,G),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function u(C){return s.deleteVertexArray(C)}function d(C,N,O,G){const V=G.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const H=C.isInstancedMesh===!0?C.id:0;let Q=z[H];Q===void 0&&(Q={},z[H]=Q);let Z=Q[O.id];Z===void 0&&(Z={},Q[O.id]=Z);let he=Z[V];return he===void 0&&(he=h(l()),Z[V]=he),he}function h(C){const N=[],O=[],G=[];for(let V=0;V<t;V++)N[V]=0,O[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:G,object:C,attributes:{},index:null}}function p(C,N,O,G){const V=r.attributes,z=N.attributes;let H=0;const Q=O.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const me=V[Z];let de=z[Z];if(de===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),me===void 0||me.attribute!==de||de&&me.data!==de.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function _(C,N,O,G){const V={},z=N.attributes;let H=0;const Q=O.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let me=z[Z];me===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));const de={};de.attribute=me,me&&me.data&&(de.data=me.data),V[Z]=de,H++}r.attributes=V,r.attributesNum=H,r.index=G}function S(){const C=r.newAttributes;for(let N=0,O=C.length;N<O;N++)C[N]=0}function m(C){f(C,0)}function f(C,N){const O=r.newAttributes,G=r.enabledAttributes,V=r.attributeDivisors;O[C]=1,G[C]===0&&(s.enableVertexAttribArray(C),G[C]=1),V[C]!==N&&(s.vertexAttribDivisor(C,N),V[C]=N)}function x(){const C=r.newAttributes,N=r.enabledAttributes;for(let O=0,G=N.length;O<G;O++)N[O]!==C[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function b(C,N,O,G,V,z,H){H===!0?s.vertexAttribIPointer(C,N,O,V,z):s.vertexAttribPointer(C,N,O,G,V,z)}function E(C,N,O,G){S();const V=G.attributes,z=O.getAttributes(),H=N.defaultAttributeValues;for(const Q in z){const Z=z[Q];if(Z.location>=0){let he=V[Q];if(he===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const me=he.normalized,de=he.itemSize,Fe=e.get(he);if(Fe===void 0)continue;const ot=Fe.buffer,at=Fe.type,j=Fe.bytesPerElement,ne=at===s.INT||at===s.UNSIGNED_INT||he.gpuType===ua;if(he.isInterleavedBufferAttribute){const ae=he.data,Ue=ae.stride,Ae=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Z.locationSize;Pe++)f(Z.location+Pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)m(Z.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let Pe=0;Pe<Z.locationSize;Pe++)b(Z.location+Pe,de/Z.locationSize,at,me,Ue*j,(Ae+de/Z.locationSize*Pe)*j,ne)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)f(Z.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let ae=0;ae<Z.locationSize;ae++)b(Z.location+ae,de/Z.locationSize,at,me,de*j,de/Z.locationSize*ae*j,ne)}}else if(H!==void 0){const me=H[Q];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(Z.location,me);break;case 3:s.vertexAttrib3fv(Z.location,me);break;case 4:s.vertexAttrib4fv(Z.location,me);break;default:s.vertexAttrib1fv(Z.location,me)}}}}x()}function A(){y();for(const C in n){const N=n[C];for(const O in N){const G=N[O];for(const V in G){const z=G[V];for(const H in z)u(z[H].object),delete z[H];delete G[V]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const O in N){const G=N[O];for(const V in G){const z=G[V];for(const H in z)u(z[H].object),delete z[H];delete G[V]}}delete n[C.id]}function L(C){for(const N in n){const O=n[N];for(const G in O){const V=O[G];if(V[C.id]===void 0)continue;const z=V[C.id];for(const H in z)u(z[H].object),delete z[H];delete V[C.id]}}}function v(C){for(const N in n){const O=n[N],G=C.isInstancedMesh===!0?C.id:0,V=O[G];if(V!==void 0){for(const z in V){const H=V[z];for(const Q in H)u(H[Q].object),delete H[Q];delete V[z]}delete O[G],Object.keys(O).length===0&&delete n[N]}}}function y(){k(),a=!0,r!==i&&(r=i,c(r.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:m,disableUnusedAttributes:x}}function $d(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S]*h[S];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zd(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Wt&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const v=L===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ft&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==sn&&!v)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:E,maxSamples:A,samples:w}}function Kd(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new qn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,b=x*4;let E=f.clippingState||null;l.value=E,E=u(_,h,b,p);for(let A=0;A!==b;++A)E[A]=t[A];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const f=p+S*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==S;++b,E+=4)a.copy(d[b]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Un=4,lo=[.125,.215,.35,.446,.526,.582],jn=20,Jd=256,Pi=new Is,co=new We;let hr=null,ur=0,dr=0,fr=!1;const Qd=new R;class ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qd}=r;hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hr,ur,dr),this._renderer.xr.enabled=fr,e.scissorTest=!1,fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:yn,format:Wt,colorSpace:Mi,depthBuffer:!1},i=uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ef(r)),this._blurMaterial=nf(r,e,t),this._ggxMaterial=tf(r,e,t)}return i}_compileMaterial(e){const t=new Te(new Ht,e);this._renderer.compile(t,Pi)}_sceneToCubeUV(e,t,n,i,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(co),d.toneMapping=on,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new De,new $e({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(co),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;fi(i,E*A,b>2?A:0,A,A),d.setRenderTarget(i),f&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Kn||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Un?n-_+Un:0),f=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,fi(r,m,f,3*S,2*S),i.setRenderTarget(r),i.render(o,Pi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,fi(e,m,f,3*S,2*S),i.setRenderTarget(e),i.render(o,Pi)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),S=r/_,m=isFinite(r)?1+Math.floor(u*S):jn;m>jn&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let x=0;for(let L=0;L<jn;++L){const v=L/S,y=Math.exp(-v*v/2);f.push(y),L===0?x+=y:L<m&&(x+=2*y)}for(let L=0;L<f.length;L++)f[L]=f[L]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const E=this._sizeLods[i],A=3*E*(i>b-Un?i-b+Un:0),w=4*(this._cubeSize-E);fi(t,A,w,3*E,2*E),l.setRenderTarget(t),l.render(d,Pi)}}function ef(s){const e=[],t=[],n=[];let i=s;const r=s-Un+1+lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Un?l=lo[a-s+Un-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,S=3,m=2,f=1,x=new Float32Array(S*_*p),b=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let w=0;w<p;w++){const L=w%3*2/3-1,v=w>2?0:-1,y=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];x.set(y,S*_*w),b.set(h,m*_*w);const k=[w,w,w,w,w,w];E.set(k,f*_*w)}const A=new Ht;A.setAttribute("position",new ln(x,S)),A.setAttribute("uv",new ln(b,m)),A.setAttribute("faceIndex",new ln(E,f)),n.push(new Te(A,null)),i>Un&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function uo(s,e,t){const n=new Zt(s,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tf(s,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Us(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function nf(s,e,t){const n=new Float32Array(jn),i=new R(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Us(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function fo(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function po(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Us(){return`

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
	`}class ul extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new De(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Sn});r.uniforms.tEquirect.value=t;const a=new Te(i,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Pt),new lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function sf(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Bs||p===zs)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new ul(_.height);return S.fromEquirectangularTexture(s,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===Bs||p===zs,S=p===Kn||p===vi;if(_||S){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ho(s)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return _&&x&&x.height>0||S&&x&&l(x)?(n===null&&(n=new ho(s)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Bs?h.mapping=Kn:p===zs&&(h.mapping=vi),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function rf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&As("WebGLRenderer: "+n+" extension not supported."),i}}}function af(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],s.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const x=p.array;S=p.version;for(let b=0,E=x.length;b<E;b+=3){const A=x[b+0],w=x[b+1],L=x[b+2];h.push(A,w,w,L,L,A)}}else{const x=_.array;S=_.version;for(let b=0,E=x.length/3-1;b<E;b+=3){const A=b+0,w=b+1,L=b+2;h.push(A,w,w,L,L,A)}}const m=new(_.count>=65535?sl:il)(h,1);m.version=S;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function of(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){s.drawElements(n,p,r,h*a),t.update(p,n,1)}function c(h,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,h*a,_),t.update(p,n,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function d(h,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],S[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,S,0,_);let f=0;for(let x=0;x<_;x++)f+=p[x]*S[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function lf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cf(s,e,t){const n=new WeakMap,i=new ct;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),S===!0&&(b=3);let E=o.attributes.position.count*b,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*d),L=new Qo(w,E,A,d);L.type=sn,L.needsUpdate=!0;const v=b*4;for(let k=0;k<d;k++){const C=m[k],N=f[k],O=x[k],G=E*A*4*k;for(let V=0;V<C.count;V++){const z=V*v;p===!0&&(i.fromBufferAttribute(C,V),w[G+z+0]=i.x,w[G+z+1]=i.y,w[G+z+2]=i.z,w[G+z+3]=0),_===!0&&(i.fromBufferAttribute(N,V),w[G+z+4]=i.x,w[G+z+5]=i.y,w[G+z+6]=i.z,w[G+z+7]=0),S===!0&&(i.fromBufferAttribute(O,V),w[G+z+8]=i.x,w[G+z+9]=i.y,w[G+z+10]=i.z,w[G+z+11]=O.itemSize===4?i.w:1)}}h={count:d,texture:L,size:new He(E,A)},n.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function hf(s,e,t,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const uf={[Fo]:"LINEAR_TONE_MAPPING",[Oo]:"REINHARD_TONE_MAPPING",[Bo]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[ko]:"AGX_TONE_MAPPING",[Vo]:"NEUTRAL_TONE_MAPPING",[zo]:"CUSTOM_TONE_MAPPING"};function df(s,e,t,n,i){const r=new Zt(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Zt(e,t,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new Ht;o.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ft([0,2,0,0,2,0],2));const l=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Te(o,l),u=new Is(-1,1,1,-1,0,1);let d=null,h=null,p=!1,_,S=null,m=[],f=!1;this.setSize=function(x,b){r.setSize(x,b),a.setSize(x,b);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){m=x,f=m.length>0&&m[0].isRenderPass===!0;const b=r.width,E=r.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(b,E)}},this.begin=function(x,b){if(p||x.toneMapping===on&&m.length===0)return!1;if(S=b,b!==null){const E=b.width,A=b.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return f===!1&&x.setRenderTarget(r),_=x.toneMapping,x.toneMapping=on,!0},this.hasRenderPass=function(){return f},this.end=function(x,b){x.toneMapping=_,p=!0;let E=r,A=a;for(let w=0;w<m.length;w++){const L=m[w];if(L.enabled!==!1&&(L.render(x,A,E,b),L.needsSwap!==!1)){const v=E;E=A,A=v}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,l.defines={},qe.getTransfer(d)===Qe&&(l.defines.SRGB_TRANSFER="");const w=uf[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(S),x.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const dl=new Lt,aa=new Hi(1,1),fl=new Qo,pl=new Cc,ml=new rl,mo=[],go=[],_o=new Float32Array(16),vo=new Float32Array(9),xo=new Float32Array(4);function Ti(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=mo[i];if(r===void 0&&(r=new Float32Array(i),mo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ns(s,e){let t=go[e];t===void 0&&(t=new Int32Array(e),go[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ff(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function gf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function _f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;xo.set(n),s.uniformMatrix2fv(this.addr,!1,xo),xt(t,n)}}function vf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;vo.set(n),s.uniformMatrix3fv(this.addr,!1,vo),xt(t,n)}}function xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;_o.set(n),s.uniformMatrix4fv(this.addr,!1,_o),xt(t,n)}}function Mf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function bf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function Af(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function Rf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(aa.compareFunction=t.isReversedDepthBuffer()?va:_a,r=aa):r=dl,t.setTexture2D(e||r,i)}function Cf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pl,i)}function Pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ml,i)}function Lf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fl,i)}function Df(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return yf;case 5125:return bf;case 36294:return Tf;case 36295:return wf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function If(s,e){s.uniform1fv(this.addr,e)}function Uf(s,e){const t=Ti(e,this.size,2);s.uniform2fv(this.addr,t)}function Nf(s,e){const t=Ti(e,this.size,3);s.uniform3fv(this.addr,t)}function Ff(s,e){const t=Ti(e,this.size,4);s.uniform4fv(this.addr,t)}function Of(s,e){const t=Ti(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bf(s,e){const t=Ti(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zf(s,e){const t=Ti(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kf(s,e){s.uniform1iv(this.addr,e)}function Vf(s,e){s.uniform2iv(this.addr,e)}function Hf(s,e){s.uniform3iv(this.addr,e)}function Gf(s,e){s.uniform4iv(this.addr,e)}function Wf(s,e){s.uniform1uiv(this.addr,e)}function Xf(s,e){s.uniform2uiv(this.addr,e)}function qf(s,e){s.uniform3uiv(this.addr,e)}function Yf(s,e){s.uniform4uiv(this.addr,e)}function jf(s,e,t){const n=this.cache,i=e.length,r=Ns(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=aa:a=dl;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function $f(s,e,t){const n=this.cache,i=e.length,r=Ns(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pl,r[a])}function Zf(s,e,t){const n=this.cache,i=e.length,r=Ns(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ml,r[a])}function Kf(s,e,t){const n=this.cache,i=e.length,r=Ns(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fl,r[a])}function Jf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Vf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Df(t.type)}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jf(t.type)}}class tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Mo(s,e){s.seq.push(e),s.map[e.id]=e}function np(s,e,t){const n=s.name,i=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),a=pr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mo(t,c===void 0?new Qf(o,s,e):new ep(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new tp(o),Mo(t,d)),t=d}}}class Es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);np(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function So(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ip=37297;let sp=0;function rp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eo=new Ne;function ap(s){qe._getMatrix(Eo,qe.workingColorSpace,s);const e=`mat3( ${Eo.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case Ts:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rp(s.getShaderSource(e),o)}else return r}function op(s,e){const t=ap(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lp={[Fo]:"Linear",[Oo]:"Reinhard",[Bo]:"Cineon",[ha]:"ACESFilmic",[ko]:"AgX",[Vo]:"Neutral",[zo]:"Custom"};function cp(s,e){const t=lp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new R;function hp(){qe.getLuminanceCoefficients(ms);const s=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function dp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ii(s){return s!==""}function bo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function To(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(s){return s.replace(pp,gp)}const mp=new Map;function gp(s,e){let t=Oe[e];if(t===void 0){const n=mp.get(e);if(n!==void 0)t=Oe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oa(t)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(s){return s.replace(_p,vp)}function vp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ao(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const xp={[_s]:"SHADOWMAP_TYPE_PCF",[Di]:"SHADOWMAP_TYPE_VSM"};function Mp(s){return xp[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sp={[Kn]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE_UV"};function Ep(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sp[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yp={[vi]:"ENVMAP_MODE_REFRACTION"};function bp(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yp[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tp={[ca]:"ENVMAP_BLENDING_MULTIPLY",[Yl]:"ENVMAP_BLENDING_MIX",[jl]:"ENVMAP_BLENDING_ADD"};function wp(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Tp[s.combine]||"ENVMAP_BLENDING_NONE"}function Ap(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mp(t),c=Ep(t),u=bp(t),d=wp(t),h=Ap(t),p=up(t),_=dp(r),S=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(m=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Oe.tonemapping_pars_fragment:"",t.toneMapping!==on?cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,op("linearToOutputTexel",t.outputColorSpace),hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=oa(a),a=bo(a,t),a=To(a,t),o=oa(o),o=bo(o,t),o=To(o,t),a=wo(a),o=wo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=x+m+a,E=x+f+o,A=So(i,i.VERTEX_SHADER,b),w=So(i,i.FRAGMENT_SHADER,E);i.attachShader(S,A),i.attachShader(S,w),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function L(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(S)||"",O=i.getShaderInfoLog(A)||"",G=i.getShaderInfoLog(w)||"",V=N.trim(),z=O.trim(),H=G.trim();let Q=!0,Z=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,A,w);else{const he=yo(i,A,"vertex"),me=yo(i,w,"fragment");je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+he+`
`+me)}else V!==""?Ce("WebGLProgram: Program Info Log:",V):(z===""||H==="")&&(Z=!1);Z&&(C.diagnostics={runnable:Q,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(A),i.deleteShader(w),v=new Es(i,S),y=fp(i,S)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(S,ip)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=w,this}let Cp=0;class Pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lp(e),t.set(e,n)),n}}class Lp{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}}function Dp(s,e,t,n,i,r){const a=new el,o=new Pp,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,y,k,C,N){const O=C.fog,G=N.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||V,z),Q=H&&H.mapping===Ps?H.image.height:null,Z=p[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=he!==void 0?he.length:0;let de=0;G.morphAttributes.position!==void 0&&(de=1),G.morphAttributes.normal!==void 0&&(de=2),G.morphAttributes.color!==void 0&&(de=3);let Fe,ot,at,j;if(Z){const Je=tn[Z];Fe=Je.vertexShader,ot=Je.fragmentShader}else Fe=v.vertexShader,ot=v.fragmentShader,o.update(v),at=o.getVertexShaderID(v),j=o.getFragmentShaderID(v);const ne=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,Pe=!!v.map,Mt=!!v.matcap,Xe=!!H,Ke=!!v.aoMap,nt=!!v.lightMap,Be=!!v.bumpMap,ut=!!v.normalMap,P=!!v.displacementMap,pt=!!v.emissiveMap,Ze=!!v.metalnessMap,st=!!v.roughnessMap,Se=v.anisotropy>0,T=v.clearcoat>0,g=v.dispersion>0,I=v.iridescence>0,Y=v.sheen>0,$=v.transmission>0,q=Se&&!!v.anisotropyMap,ge=T&&!!v.clearcoatMap,se=T&&!!v.clearcoatNormalMap,we=T&&!!v.clearcoatRoughnessMap,Re=I&&!!v.iridescenceMap,K=I&&!!v.iridescenceThicknessMap,ee=Y&&!!v.sheenColorMap,_e=Y&&!!v.sheenRoughnessMap,xe=!!v.specularMap,ue=!!v.specularColorMap,ze=!!v.specularIntensityMap,D=$&&!!v.transmissionMap,re=$&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,J=v.alphaTest>0,X=!!v.alphaHash,ve=!!v.extensions;let Le=on;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=s.toneMapping);const rt={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:ot,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Mi,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Mt,envMap:Xe,envMapMode:Xe&&H.mapping,envMapCubeUVHeight:Q,aoMap:Ke,lightMap:nt,bumpMap:Be,normalMap:ut,displacementMap:P,emissiveMap:pt,normalMapObjectSpace:ut&&v.normalMapType===Zl,normalMapTangentSpace:ut&&v.normalMapType===Ko,metalnessMap:Ze,roughnessMap:st,anisotropy:Se,anisotropyMap:q,clearcoat:T,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:g,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:K,sheen:Y,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:ue,specularIntensityMap:ze,transmission:$,transmissionMap:D,thicknessMap:re,gradientMap:te,opaque:v.transparent===!1&&v.blending===mi&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:X,combine:v.combine,mapUv:Pe&&_(v.map.channel),aoMapUv:Ke&&_(v.aoMap.channel),lightMapUv:nt&&_(v.lightMap.channel),bumpMapUv:Be&&_(v.bumpMap.channel),normalMapUv:ut&&_(v.normalMap.channel),displacementMapUv:P&&_(v.displacementMap.channel),emissiveMapUv:pt&&_(v.emissiveMap.channel),metalnessMapUv:Ze&&_(v.metalnessMap.channel),roughnessMapUv:st&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:ge&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(v.sheenRoughnessMap.channel),specularMapUv:xe&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:ze&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:re&&_(v.thicknessMap.channel),alphaMapUv:pe&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ut||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Pe||pe),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===Ot,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)y.push(k),y.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(f(y,v),x(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const y=p[v.type];let k;if(y){const C=tn[y];k=Zc.clone(C.uniforms)}else k=v.uniforms;return k}function E(v,y){let k=u.get(y);return k!==void 0?++k.usedTimes:(k=new Rp(s,y,v,i),c.push(k),u.set(y,k)),k}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:L}}function Ip(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Up(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ro(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Co(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,m,f){let x=s[e];return x===void 0?(x={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:f},s[e]=x):(x.id=h.id,x.object=h,x.geometry=p,x.material=_,x.materialVariant=a(h),x.groupOrder=S,x.renderOrder=h.renderOrder,x.z=m,x.group=f),e++,x}function l(h,p,_,S,m,f){const x=o(h,p,_,S,m,f);_.transmission>0?n.push(x):_.transparent===!0?i.push(x):t.push(x)}function c(h,p,_,S,m,f){const x=o(h,p,_,S,m,f);_.transmission>0?n.unshift(x):_.transparent===!0?i.unshift(x):t.unshift(x)}function u(h,p){t.length>1&&t.sort(h||Up),n.length>1&&n.sort(p||Ro),i.length>1&&i.sort(p||Ro)}function d(){for(let h=e,p=s.length;h<p;h++){const _=s[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Np(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Co,s.set(n,[a])):i>=r.length?(a=new Co,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new We};break;case"SpotLight":t={position:new R,direction:new R,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Op(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bp=0;function zp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kp(s){const e=new Fp,t=Op(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new ht,a=new ht;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,x=0,b=0,E=0,A=0,w=0,L=0;c.sort(zp);for(let y=0,k=c.length;y<k;y++){const C=c[y],N=C.color,O=C.intensity,G=C.distance;let V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===xi?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*O,d+=N.g*O,h+=N.b*O;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],O);L++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,Q=t.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=C.shadow.matrix,x++}n.directional[p]=z,p++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[S]=z;const H=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,H.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[S]=H.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=V,E++}S++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(N).multiplyScalar(O),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const H=C.shadow,Q=t.get(C);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=C.shadow.matrix,b++}n.point[_]=z,_++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(O),z.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==b||v.numSpotShadows!==E||v.numSpotMaps!==A||v.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,v.directionalLength=p,v.pointLength=_,v.spotLength=S,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=b,v.numSpotShadows=E,v.numSpotMaps=A,v.numLightProbes=L,n.version=Bp++)}function l(c,u){let d=0,h=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const b=c[f];if(b.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),d++}else if(b.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const E=n.hemi[S];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function Po(s){const e=new kp(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Vp(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Po(s),e.set(i,[o])):r>=a.length?(o=new Po(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
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
}`,Wp=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Xp=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Lo=new ht,Li=new R,mr=new R;function qp(s,e,t){let n=new Ea;const i=new He,r=new He,a=new ct,o=new th,l=new nh,c={},u=t.maxTextureSize,d={[Fn]:Ot,[Ot]:Fn,[xn]:xn},h=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Hp,fragmentShader:Gp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Te(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let f=this.type;this.render=function(w,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Rl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);const y=s.getRenderTarget(),k=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Sn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==this.type;O&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(V=>V.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,V=w.length;G<V;G++){const z=w[G],H=z.shadow;if(H===void 0){Ce("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Q=H.getFrameExtents();i.multiply(Q),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,H.mapSize.y=r.y));const Z=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Di){if(z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zt(i.x,i.y,{format:xi,type:yn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Hi(i.x,i.y,sn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gt,H.map.depthTexture.magFilter=gt}else z.isPointLight?(H.map=new ul(i.x),H.map.depthTexture=new jc(i.x,cn)):(H.map=new Zt(i.x,i.y),H.map.depthTexture=new Hi(i.x,i.y,cn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=bn,this.type===_s?(H.map.depthTexture.compareFunction=Z?va:_a,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=gt,H.map.depthTexture.magFilter=gt);H.camera.updateProjectionMatrix()}const he=H.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<he;me++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,me),s.clear();else{me===0&&(s.setRenderTarget(H.map),s.clear());const de=H.getViewport(me);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),N.viewport(a)}if(z.isPointLight){const de=H.camera,Fe=H.matrix,ot=z.distance||de.far;ot!==de.far&&(de.far=ot,de.updateProjectionMatrix()),Li.setFromMatrixPosition(z.matrixWorld),de.position.copy(Li),mr.copy(de.position),mr.add(Wp[me]),de.up.copy(Xp[me]),de.lookAt(mr),de.updateMatrixWorld(),Fe.makeTranslation(-Li.x,-Li.y,-Li.z),Lo.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Lo,de.coordinateSystem,de.reversedDepth)}else H.updateMatrices(z);n=H.getFrustum(),E(L,v,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&x(H,v),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,k,C)};function x(w,L){const v=e.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zt(i.x,i.y,{format:xi,type:yn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(L,null,v,h,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(L,null,v,p,S,null)}function b(w,L,v,y){let k=null;const C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)k=C;else if(k=v.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=k.uuid,O=L.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let V=G[O];V===void 0&&(V=k.clone(),G[O]=V,L.addEventListener("dispose",A)),k=V}if(k.visible=L.visible,k.wireframe=L.wireframe,y===Di?k.side=L.shadowSide!==null?L.shadowSide:L.side:k.side=L.shadowSide!==null?L.shadowSide:d[L.side],k.alphaMap=L.alphaMap,k.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,k.map=L.map,k.clipShadows=L.clipShadows,k.clippingPlanes=L.clippingPlanes,k.clipIntersection=L.clipIntersection,k.displacementMap=L.displacementMap,k.displacementScale=L.displacementScale,k.displacementBias=L.displacementBias,k.wireframeLinewidth=L.wireframeLinewidth,k.linewidth=L.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const N=s.properties.get(k);N.light=v}return k}function E(w,L,v,y,k){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Di)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const V=O.groups;for(let z=0,H=V.length;z<H;z++){const Q=V[z],Z=G[Q.materialIndex];if(Z&&Z.visible){const he=b(w,Z,y,k);w.onBeforeShadow(s,w,L,v,O,he,Q),s.renderBufferDirect(v,null,O,he,w,Q),w.onAfterShadow(s,w,L,v,O,he,Q)}}}else if(G.visible){const V=b(w,G,y,k);w.onBeforeShadow(s,w,L,v,O,V,null),s.renderBufferDirect(v,null,O,V,w,null),w.onAfterShadow(s,w,L,v,O,V,null)}}const N=w.children;for(let O=0,G=N.length;O<G;O++)E(N[O],L,v,y,k)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const y=c[v],k=w.target.uuid;k in y&&(y[k].dispose(),delete y[k])}}}function Yp(s,e){function t(){let D=!1;const re=new ct;let te=null;const pe=new ct(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(s.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,X,ve,Le,rt){rt===!0&&(J*=Le,X*=Le,ve*=Le),re.set(J,X,ve,Le),pe.equals(re)===!1&&(s.clearColor(J,X,ve,Le),pe.copy(re))},reset:function(){D=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,te=null,pe=null,J=null;return{setReversed:function(X){if(re!==X){const ve=e.get("EXT_clip_control");X?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=X;const Le=J;J=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(X){X?ne(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(X){te!==X&&!D&&(s.depthMask(X),te=X)},setFunc:function(X){if(re&&(X=ac[X]),pe!==X){switch(X){case Mr:s.depthFunc(s.NEVER);break;case Sr:s.depthFunc(s.ALWAYS);break;case Er:s.depthFunc(s.LESS);break;case _i:s.depthFunc(s.LEQUAL);break;case yr:s.depthFunc(s.EQUAL);break;case br:s.depthFunc(s.GEQUAL);break;case Tr:s.depthFunc(s.GREATER);break;case wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,re&&(X=1-X),s.clearDepth(X))},reset:function(){D=!1,te=null,pe=null,J=null,re=!1}}}function i(){let D=!1,re=null,te=null,pe=null,J=null,X=null,ve=null,Le=null,rt=null;return{setTest:function(Je){D||(Je?ne(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Je){re!==Je&&!D&&(s.stencilMask(Je),re=Je)},setFunc:function(Je,un,dn){(te!==Je||pe!==un||J!==dn)&&(s.stencilFunc(Je,un,dn),te=Je,pe=un,J=dn)},setOp:function(Je,un,dn){(X!==Je||ve!==un||Le!==dn)&&(s.stencilOp(Je,un,dn),X=Je,ve=un,Le=dn)},setLocked:function(Je){D=Je},setClear:function(Je){rt!==Je&&(s.clearStencil(Je),rt=Je)},reset:function(){D=!1,re=null,te=null,pe=null,J=null,X=null,ve=null,Le=null,rt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,f=null,x=null,b=null,E=null,A=null,w=null,L=new We(0,0,0),v=0,y=!1,k=null,C=null,N=null,O=null,G=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=H>=2);let Z=null,he={};const me=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Fe=new ct().fromArray(me),ot=new ct().fromArray(de);function at(D,re,te,pe){const J=new Uint8Array(4),X=s.createTexture();s.bindTexture(D,X),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<te;ve++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(re+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return X}const j={};j[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(_i),Be(!1),ut(Ia),ne(s.CULL_FACE),Ke(Sn);function ne(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function ae(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ue(D,re){return d[D]!==re?(s.bindFramebuffer(D,re),d[D]=re,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=re),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(D,re){let te=p,pe=!1;if(D){te=h.get(re),te===void 0&&(te=[],h.set(re,te));const J=D.textures;if(te.length!==J.length||te[0]!==s.COLOR_ATTACHMENT0){for(let X=0,ve=J.length;X<ve;X++)te[X]=s.COLOR_ATTACHMENT0+X;te.length=J.length,pe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,pe=!0);pe&&s.drawBuffers(te)}function Pe(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const Mt={[Yn]:s.FUNC_ADD,[Pl]:s.FUNC_SUBTRACT,[Ll]:s.FUNC_REVERSE_SUBTRACT};Mt[Dl]=s.MIN,Mt[Il]=s.MAX;const Xe={[Ul]:s.ZERO,[Nl]:s.ONE,[Fl]:s.SRC_COLOR,[vr]:s.SRC_ALPHA,[Hl]:s.SRC_ALPHA_SATURATE,[kl]:s.DST_COLOR,[Bl]:s.DST_ALPHA,[Ol]:s.ONE_MINUS_SRC_COLOR,[xr]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[zl]:s.ONE_MINUS_DST_ALPHA,[Gl]:s.CONSTANT_COLOR,[Wl]:s.ONE_MINUS_CONSTANT_COLOR,[Xl]:s.CONSTANT_ALPHA,[ql]:s.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,re,te,pe,J,X,ve,Le,rt,Je){if(D===Sn){S===!0&&(ae(s.BLEND),S=!1);return}if(S===!1&&(ne(s.BLEND),S=!0),D!==Cl){if(D!==m||Je!==y){if((f!==Yn||E!==Yn)&&(s.blendEquation(s.FUNC_ADD),f=Yn,E=Yn),Je)switch(D){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFunc(s.ONE,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:je("WebGLState: Invalid blending: ",D);break}else switch(D){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Na:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fa:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",D);break}x=null,b=null,A=null,w=null,L.set(0,0,0),v=0,m=D,y=Je}return}J=J||re,X=X||te,ve=ve||pe,(re!==f||J!==E)&&(s.blendEquationSeparate(Mt[re],Mt[J]),f=re,E=J),(te!==x||pe!==b||X!==A||ve!==w)&&(s.blendFuncSeparate(Xe[te],Xe[pe],Xe[X],Xe[ve]),x=te,b=pe,A=X,w=ve),(Le.equals(L)===!1||rt!==v)&&(s.blendColor(Le.r,Le.g,Le.b,rt),L.copy(Le),v=rt),m=D,y=!1}function nt(D,re){D.side===xn?ae(s.CULL_FACE):ne(s.CULL_FACE);let te=D.side===Ot;re&&(te=!te),Be(te),D.blending===mi&&D.transparent===!1?Ke(Sn):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){k!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),k=D)}function ut(D){D!==wl?(ne(s.CULL_FACE),D!==C&&(D===Ia?s.cullFace(s.BACK):D===Al?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),C=D}function P(D){D!==N&&(z&&s.lineWidth(D),N=D)}function pt(D,re,te){D?(ne(s.POLYGON_OFFSET_FILL),(O!==re||G!==te)&&(O=re,G=te,a.getReversed()&&(re=-re),s.polygonOffset(re,te))):ae(s.POLYGON_OFFSET_FILL)}function Ze(D){D?ne(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function st(D){D===void 0&&(D=s.TEXTURE0+V-1),Z!==D&&(s.activeTexture(D),Z=D)}function Se(D,re,te){te===void 0&&(Z===null?te=s.TEXTURE0+V-1:te=Z);let pe=he[te];pe===void 0&&(pe={type:void 0,texture:void 0},he[te]=pe),(pe.type!==D||pe.texture!==re)&&(Z!==te&&(s.activeTexture(te),Z=te),s.bindTexture(D,re||j[D]),pe.type=D,pe.texture=re)}function T(){const D=he[Z];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{s.compressedTexImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function Y(){try{s.texSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function $(){try{s.texSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function se(){try{s.texStorage2D(...arguments)}catch(D){je("WebGLState:",D)}}function we(){try{s.texStorage3D(...arguments)}catch(D){je("WebGLState:",D)}}function Re(){try{s.texImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function K(){try{s.texImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function ee(D){Fe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Fe.copy(D))}function _e(D){ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function xe(D,re){let te=c.get(re);te===void 0&&(te=new WeakMap,c.set(re,te));let pe=te.get(D);pe===void 0&&(pe=s.getUniformBlockIndex(re,D.name),te.set(D,pe))}function ue(D,re){const pe=c.get(re).get(D);l.get(re)!==pe&&(s.uniformBlockBinding(re,pe,D.__bindingPointIndex),l.set(re,pe))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Z=null,he={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,f=null,x=null,b=null,E=null,A=null,w=null,L=new We(0,0,0),v=0,y=!1,k=null,C=null,N=null,O=null,G=null,Fe.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ae,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Pe,setBlending:Ke,setMaterial:nt,setFlipSided:Be,setCullFace:ut,setLineWidth:P,setPolygonOffset:pt,setScissorTest:Ze,activeTexture:st,bindTexture:Se,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Re,texImage3D:K,updateUBOMapping:xe,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:we,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:ee,viewport:_e,reset:ze}}function jp(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):ws("canvas")}function S(T,g,I){let Y=1;const $=Se(T);if(($.width>I||$.height>I)&&(Y=I/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*$.width),ge=Math.floor(Y*$.height);d===void 0&&(d=_(q,ge));const se=g?_(q,ge):d;return se.width=q,se.height=ge,se.getContext("2d").drawImage(T,0,0,q,ge),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ge+")."),se}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,g,I,Y,$=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=g;if(g===s.RED&&(I===s.FLOAT&&(q=s.R32F),I===s.HALF_FLOAT&&(q=s.R16F),I===s.UNSIGNED_BYTE&&(q=s.R8)),g===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.R8UI),I===s.UNSIGNED_SHORT&&(q=s.R16UI),I===s.UNSIGNED_INT&&(q=s.R32UI),I===s.BYTE&&(q=s.R8I),I===s.SHORT&&(q=s.R16I),I===s.INT&&(q=s.R32I)),g===s.RG&&(I===s.FLOAT&&(q=s.RG32F),I===s.HALF_FLOAT&&(q=s.RG16F),I===s.UNSIGNED_BYTE&&(q=s.RG8)),g===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RG8UI),I===s.UNSIGNED_SHORT&&(q=s.RG16UI),I===s.UNSIGNED_INT&&(q=s.RG32UI),I===s.BYTE&&(q=s.RG8I),I===s.SHORT&&(q=s.RG16I),I===s.INT&&(q=s.RG32I)),g===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RGB8UI),I===s.UNSIGNED_SHORT&&(q=s.RGB16UI),I===s.UNSIGNED_INT&&(q=s.RGB32UI),I===s.BYTE&&(q=s.RGB8I),I===s.SHORT&&(q=s.RGB16I),I===s.INT&&(q=s.RGB32I)),g===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),I===s.UNSIGNED_INT&&(q=s.RGBA32UI),I===s.BYTE&&(q=s.RGBA8I),I===s.SHORT&&(q=s.RGBA16I),I===s.INT&&(q=s.RGBA32I)),g===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),g===s.RGBA){const ge=$?Ts:qe.getTransfer(Y);I===s.FLOAT&&(q=s.RGBA32F),I===s.HALF_FLOAT&&(q=s.RGBA16F),I===s.UNSIGNED_BYTE&&(q=ge===Qe?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function E(T,g){let I;return T?g===null||g===cn||g===zi?I=s.DEPTH24_STENCIL8:g===sn?I=s.DEPTH32F_STENCIL8:g===Bi&&(I=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===cn||g===zi?I=s.DEPTH_COMPONENT24:g===sn?I=s.DEPTH_COMPONENT32F:g===Bi&&(I=s.DEPTH_COMPONENT16),I}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==gt&&T.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),v(g),g.isVideoTexture&&u.delete(g)}function L(T){const g=T.target;g.removeEventListener("dispose",L),k(g)}function v(T){const g=n.get(T);if(g.__webglInit===void 0)return;const I=T.source,Y=h.get(I);if(Y){const $=Y[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(Y).length===0&&h.delete(I)}n.remove(T)}function y(T){const g=n.get(T);s.deleteTexture(g.__webglTexture);const I=T.source,Y=h.get(I);delete Y[g.__cacheKey],a.memory.textures--}function k(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let $=0;$<g.__webglFramebuffer[Y].length;$++)s.deleteFramebuffer(g.__webglFramebuffer[Y][$]);else s.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)s.deleteFramebuffer(g.__webglFramebuffer[Y]);else s.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&s.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&s.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&s.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let Y=0,$=I.length;Y<$;Y++){const q=n.get(I[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(I[Y])}n.remove(T)}let C=0;function N(){C=0}function O(){const T=C;return T>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function G(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function V(T,g){const I=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Y=T.image;if(Y===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{j(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+g)}function z(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+g)}function H(T,g){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,g);return}t.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+g)}function Q(T,g){const I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){ne(I,T,g);return}t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+g)}const Z={[bs]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},he={[gt]:s.NEAREST,[Go]:s.NEAREST_MIPMAP_NEAREST,[ji]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[ks]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},me={[Kl]:s.NEVER,[nc]:s.ALWAYS,[Jl]:s.LESS,[_a]:s.LEQUAL,[Ql]:s.EQUAL,[va]:s.GEQUAL,[ec]:s.GREATER,[tc]:s.NOTEQUAL};function de(T,g){if(g.type===sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===ks||g.magFilter===ji||g.magFilter===$n||g.minFilter===Pt||g.minFilter===ks||g.minFilter===ji||g.minFilter===$n)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Z[g.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Z[g.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Z[g.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,he[g.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===gt||g.minFilter!==ji&&g.minFilter!==$n||g.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let $=h.get(Y);$===void 0&&($={},h.set(Y,$));const q=G(g);if(q!==T.__cacheKey){$[q]===void 0&&($[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,I=!0),$[q].usedTimes++;const ge=$[T.__cacheKey];ge!==void 0&&($[T.__cacheKey].usedTimes--,ge.usedTimes===0&&y(g)),T.__cacheKey=q,T.__webglTexture=$[q].texture}return I}function ot(T,g,I){return Math.floor(Math.floor(T/I)/g)}function at(T,g,I,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{q.sort((K,ee)=>K.start-ee.start);let ge=0;for(let K=1;K<q.length;K++){const ee=q[ge],_e=q[K],xe=ee.start+ee.count,ue=ot(_e.start,g.width,4),ze=ot(ee.start,g.width,4);_e.start<=xe+1&&ue===ze&&ot(_e.start+_e.count-1,g.width,4)===ue?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ge,q[ge]=_e)}q.length=ge+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),we=s.getParameter(s.UNPACK_SKIP_PIXELS),Re=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,g.width);for(let K=0,ee=q.length;K<ee;K++){const _e=q[K],xe=Math.floor(_e.start/4),ue=Math.ceil(_e.count/4),ze=xe%g.width,D=Math.floor(xe/g.width),re=ue,te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,ze,D,re,te,I,Y,g.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,we),s.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function j(T,g,I){let Y=s.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=s.TEXTURE_3D);const $=Fe(T,g),q=g.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+I);const ge=n.get(q);if(q.version!==ge.__version||$===!0){t.activeTexture(s.TEXTURE0+I);const se=qe.getPrimaries(qe.workingColorSpace),we=g.colorSpace===In?null:qe.getPrimaries(g.colorSpace),Re=g.colorSpace===In||se===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let K=S(g.image,!1,i.maxTextureSize);K=st(g,K);const ee=r.convert(g.format,g.colorSpace),_e=r.convert(g.type);let xe=b(g.internalFormat,ee,_e,g.colorSpace,g.isVideoTexture);de(Y,g);let ue;const ze=g.mipmaps,D=g.isVideoTexture!==!0,re=ge.__version===void 0||$===!0,te=q.dataReady,pe=A(g,K);if(g.isDepthTexture)xe=E(g.format===Zn,g.type),re&&(D?t.texStorage2D(s.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,xe,K.width,K.height,0,ee,_e,null));else if(g.isDataTexture)if(ze.length>0){D&&re&&t.texStorage2D(s.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let J=0,X=ze.length;J<X;J++)ue=ze[J],D?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(s.TEXTURE_2D,J,xe,ue.width,ue.height,0,ee,_e,ue.data);g.generateMipmaps=!1}else D?(re&&t.texStorage2D(s.TEXTURE_2D,pe,xe,K.width,K.height),te&&at(g,K,ee,_e)):t.texImage2D(s.TEXTURE_2D,0,xe,K.width,K.height,0,ee,_e,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,ze[0].width,ze[0].height,K.depth);for(let J=0,X=ze.length;J<X;J++)if(ue=ze[J],g.format!==Wt)if(ee!==null)if(D){if(te)if(g.layerUpdates.size>0){const ve=oo(ue.width,ue.height,g.format,g.type);for(const Le of g.layerUpdates){const rt=ue.data.subarray(Le*ve/ue.data.BYTES_PER_ELEMENT,(Le+1)*ve/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Le,ue.width,ue.height,1,ee,rt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ee,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,xe,ue.width,ue.height,K.depth,0,ue.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ee,_e,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,xe,ue.width,ue.height,K.depth,0,ee,_e,ue.data)}else{D&&re&&t.texStorage2D(s.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let J=0,X=ze.length;J<X;J++)ue=ze[J],g.format!==Wt?ee!==null?D?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,J,xe,ue.width,ue.height,0,ue.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(s.TEXTURE_2D,J,xe,ue.width,ue.height,0,ee,_e,ue.data)}else if(g.isDataArrayTexture)if(D){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,K.width,K.height,K.depth),te)if(g.layerUpdates.size>0){const J=oo(K.width,K.height,g.format,g.type);for(const X of g.layerUpdates){const ve=K.data.subarray(X*J/K.data.BYTES_PER_ELEMENT,(X+1)*J/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,ee,_e,ve)}g.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ee,_e,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,ee,_e,K.data);else if(g.isData3DTexture)D?(re&&t.texStorage3D(s.TEXTURE_3D,pe,xe,K.width,K.height,K.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ee,_e,K.data)):t.texImage3D(s.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,ee,_e,K.data);else if(g.isFramebufferTexture){if(re)if(D)t.texStorage2D(s.TEXTURE_2D,pe,xe,K.width,K.height);else{let J=K.width,X=K.height;for(let ve=0;ve<pe;ve++)t.texImage2D(s.TEXTURE_2D,ve,xe,J,X,0,ee,_e,null),J>>=1,X>>=1}}else if(ze.length>0){if(D&&re){const J=Se(ze[0]);t.texStorage2D(s.TEXTURE_2D,pe,xe,J.width,J.height)}for(let J=0,X=ze.length;J<X;J++)ue=ze[J],D?te&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ee,_e,ue):t.texImage2D(s.TEXTURE_2D,J,xe,ee,_e,ue);g.generateMipmaps=!1}else if(D){if(re){const J=Se(K);t.texStorage2D(s.TEXTURE_2D,pe,xe,J.width,J.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee,_e,K)}else t.texImage2D(s.TEXTURE_2D,0,xe,ee,_e,K);m(g)&&f(Y),ge.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ne(T,g,I){if(g.image.length!==6)return;const Y=Fe(T,g),$=g.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+I);const q=n.get($);if($.version!==q.__version||Y===!0){t.activeTexture(s.TEXTURE0+I);const ge=qe.getPrimaries(qe.workingColorSpace),se=g.colorSpace===In?null:qe.getPrimaries(g.colorSpace),we=g.colorSpace===In||ge===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,g.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,g.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Re&&!K?ee[X]=S(g.image[X],!0,i.maxCubemapSize):ee[X]=K?g.image[X].image:g.image[X],ee[X]=st(g,ee[X]);const _e=ee[0],xe=r.convert(g.format,g.colorSpace),ue=r.convert(g.type),ze=b(g.internalFormat,xe,ue,g.colorSpace),D=g.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,te=$.dataReady;let pe=A(g,_e);de(s.TEXTURE_CUBE_MAP,g);let J;if(Re){D&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,ze,_e.width,_e.height);for(let X=0;X<6;X++){J=ee[X].mipmaps;for(let ve=0;ve<J.length;ve++){const Le=J[ve];g.format!==Wt?xe!==null?D?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Le.width,Le.height,xe,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,ze,Le.width,Le.height,0,Le.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Le.width,Le.height,xe,ue,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,ze,Le.width,Le.height,0,xe,ue,Le.data)}}}else{if(J=g.mipmaps,D&&re){J.length>0&&pe++;const X=Se(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,ze,X.width,X.height)}for(let X=0;X<6;X++)if(K){D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,xe,ue,ee[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,ee[X].width,ee[X].height,0,xe,ue,ee[X].data);for(let ve=0;ve<J.length;ve++){const rt=J[ve].image[X].image;D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,rt.width,rt.height,xe,ue,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,ze,rt.width,rt.height,0,xe,ue,rt.data)}}else{D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,ue,ee[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,xe,ue,ee[X]);for(let ve=0;ve<J.length;ve++){const Le=J[ve];D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,xe,ue,Le.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,ze,xe,ue,Le.image[X])}}}m(g)&&f(s.TEXTURE_CUBE_MAP),q.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ae(T,g,I,Y,$,q){const ge=r.convert(I.format,I.colorSpace),se=r.convert(I.type),we=b(I.internalFormat,ge,se,I.colorSpace),Re=n.get(g),K=n.get(I);if(K.__renderTarget=g,!Re.__hasExternalTextures){const ee=Math.max(1,g.width>>q),_e=Math.max(1,g.height>>q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,q,we,ee,_e,g.depth,0,ge,se,null):t.texImage2D($,q,we,ee,_e,0,ge,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,$,K.__webglTexture,0,P(g)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,$,K.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(T,g,I){if(s.bindRenderbuffer(s.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,q=E(g.stencilBuffer,$),ge=g.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),q,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),q,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,q,g.width,g.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,T)}else{const Y=g.textures;for(let $=0;$<Y.length;$++){const q=Y[$],ge=r.convert(q.format,q.colorSpace),se=r.convert(q.type),we=b(q.internalFormat,ge,se,q.colorSpace);pt(g)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(g),we,g.width,g.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(g),we,g.width,g.height):s.renderbufferStorage(s.RENDERBUFFER,we,g.width,g.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(T,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),de(s.TEXTURE_CUBE_MAP,g.depthTexture);const Re=r.convert(g.depthTexture.format),K=r.convert(g.depthTexture.type);let ee;g.depthTexture.format===bn?ee=s.DEPTH_COMPONENT24:g.depthTexture.format===Zn&&(ee=s.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,g.width,g.height,0,Re,K,null)}}else V(g.depthTexture,0);const q=$.__webglTexture,ge=P(g),se=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+I:s.TEXTURE_2D,we=g.depthTexture.format===Zn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(g.depthTexture.format===bn)pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,se,q,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,we,se,q,0);else if(g.depthTexture.format===Zn)pt(g)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,se,q,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,we,se,q,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const g=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)Ae(g.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Ae(g.__webglFramebuffer[0],T,0):Ae(g.__webglFramebuffer,T,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ue(g.__webglDepthbuffer[Y],T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=s.createRenderbuffer(),Ue(g.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(T,g,I){const Y=n.get(T);g!==void 0&&ae(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&Pe(T)}function Xe(T){const g=T.texture,I=n.get(T),Y=n.get(g);T.addEventListener("dispose",L);const $=T.textures,q=T.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=g.version,a.memory.textures++),q){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let we=0;we<g.mipmaps.length;we++)I.__webglFramebuffer[se][we]=s.createFramebuffer()}else I.__webglFramebuffer[se]=s.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)I.__webglFramebuffer[se]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(ge)for(let se=0,we=$.length;se<we;se++){const Re=n.get($[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&pt(T)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const we=$[se];I.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[se]);const Re=r.convert(we.format,we.colorSpace),K=r.convert(we.type),ee=b(we.internalFormat,Re,K,we.colorSpace,T.isXRRenderTarget===!0),_e=P(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,I.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),de(s.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ae(I.__webglFramebuffer[se][we],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else ae(I.__webglFramebuffer[se],T,g,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(g)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,we=$.length;se<we;se++){const Re=$[se],K=n.get(Re);let ee=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),de(ee,Re),ae(I.__webglFramebuffer,T,Re,s.COLOR_ATTACHMENT0+se,ee,0),m(Re)&&f(ee)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),de(se,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ae(I.__webglFramebuffer[we],T,g,s.COLOR_ATTACHMENT0,se,we);else ae(I.__webglFramebuffer,T,g,s.COLOR_ATTACHMENT0,se,0);m(g)&&f(se),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Ke(T){const g=T.textures;for(let I=0,Y=g.length;I<Y;I++){const $=g[I];if(m($)){const q=x(T),ge=n.get($).__webglTexture;t.bindTexture(q,ge),f(q),t.unbindTexture()}}}const nt=[],Be=[];function ut(T){if(T.samples>0){if(pt(T)===!1){const g=T.textures,I=T.width,Y=T.height;let $=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(T),se=g.length>1;if(se)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const we=T.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Re]);const K=n.get(g[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,I,Y,0,0,I,Y,$,s.NEAREST),l===!0&&(nt.length=0,Be.length=0,nt.push(s.COLOR_ATTACHMENT0+Re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(q),Be.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,ge.__webglColorRenderbuffer[Re]);const K=n.get(g[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,K,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[g])}}}function P(T){return Math.min(i.maxSamples,T.samples)}function pt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ze(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function st(T,g){const I=T.colorSpace,Y=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Mi&&I!==In&&(qe.getTransfer(I)===Qe?(Y!==Wt||$!==Ft)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",I)),g}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Mt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $p(s,e){function t(n,i=In){let r;const a=qe.getTransfer(i);if(n===Ft)return s.UNSIGNED_BYTE;if(n===da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return s.BYTE;if(n===Xo)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===ua)return s.INT;if(n===cn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===jo)return s.ALPHA;if(n===$o)return s.RGB;if(n===Wt)return s.RGBA;if(n===bn)return s.DEPTH_COMPONENT;if(n===Zn)return s.DEPTH_STENCIL;if(n===Zo)return s.RED;if(n===pa)return s.RED_INTEGER;if(n===xi)return s.RG;if(n===ma)return s.RG_INTEGER;if(n===ga)return s.RGBA_INTEGER;if(n===vs||n===xs||n===Ms||n===Ss)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Lr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dr||n===Ir)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nr)return r.COMPRESSED_R11_EAC;if(n===Fr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Br)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zr||n===kr||n===Vr||n===Hr||n===Gr||n===Wr||n===Xr||n===qr||n===Yr||n===jr||n===$r||n===Zr||n===Kr||n===Jr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===ea||n===ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new al(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:Zp,fragmentShader:Kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Jp,f={},x=t.getContextAttributes();let b=null,E=null;const A=[],w=[],L=new He;let v=null;const y=new Vt;y.viewport=new ct;const k=new Vt;k.viewport=new ct;const C=[y,k],N=new ch;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=A[j];return ne===void 0&&(ne=new qs,A[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=A[j];return ne===void 0&&(ne=new qs,A[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=A[j];return ne===void 0&&(ne=new qs,A[j]=ne),ne.getHandSpace()};function V(j){const ne=w.indexOf(j.inputSource);if(ne===-1)return;const ae=A[ne];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||a),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let j=0;j<A.length;j++){const ne=w[j];ne!==null&&(w[j]=null,A[j].disconnect(ne))}O=null,G=null,m.reset();for(const j in f)delete f[j];e.setRenderTarget(b),p=null,h=null,d=null,i=null,E=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?Zn:bn,Ue=x.stencil?zi:cn);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Zt(h.textureWidth,h.textureHeight,{format:Wt,type:Ft,depthTexture:new Hi(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Zt(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(j){for(let ne=0;ne<j.removed.length;ne++){const ae=j.removed[ne],Ue=w.indexOf(ae);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(ae))}for(let ne=0;ne<j.added.length;ne++){const ae=j.added[ne];let Ue=w.indexOf(ae);if(Ue===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=w.length){w.push(ae),Ue=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Ue=Pe;break}if(Ue===-1)break}const Ae=A[Ue];Ae&&Ae.connect(ae)}}const Q=new R,Z=new R;function he(j,ne,ae){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const Ue=Q.distanceTo(Z),Ae=ne.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,Mt=Ae[14]/(Ae[10]-1),Xe=Ae[14]/(Ae[10]+1),Ke=(Ae[9]+1)/Ae[5],nt=(Ae[9]-1)/Ae[5],Be=(Ae[8]-1)/Ae[0],ut=(Pe[8]+1)/Pe[0],P=Mt*Be,pt=Mt*ut,Ze=Ue/(-Be+ut),st=Ze*-Be;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(st),j.translateZ(Ze),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=Mt+Ze,T=Xe+Ze,g=P-st,I=pt+(Ue-st),Y=Ke*Xe/T*Se,$=nt*Xe/T*Se;j.projectionMatrix.makePerspective(g,I,Y,$,Se,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function me(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ne=j.near,ae=j.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),N.near=k.near=y.near=ne,N.far=k.far=y.far=ae,(O!==N.near||G!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,G=N.far),N.layers.mask=j.layers.mask|6,y.layers.mask=N.layers.mask&-5,k.layers.mask=N.layers.mask&-3;const Ue=j.parent,Ae=N.cameras;me(N,Ue);for(let Pe=0;Pe<Ae.length;Pe++)me(Ae[Pe],Ue);Ae.length===2?he(N,y,k):N.projectionMatrix.copy(y.projectionMatrix),de(j,N,Ue)};function de(j,ne,ae){ae===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return f[j]};let Fe=null;function ot(j,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ue=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,Ue=!0);for(let Xe=0;Xe<ae.length;Xe++){const Ke=ae[Xe];let nt=null;if(p!==null)nt=p.getViewport(Ke);else{const ut=d.getViewSubImage(h,Ke);nt=ut.viewport,Xe===0&&(e.setRenderTargetTextures(E,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(E))}let Be=C[Xe];Be===void 0&&(Be=new Vt,Be.layers.enable(Xe),Be.viewport=new ct,C[Xe]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(nt.x,nt.y,nt.width,nt.height),Xe===0&&(N.matrix.copy(Be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ue===!0&&N.cameras.push(Be)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Xe=d.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Ae&&Ae.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<ae.length;Xe++){const Ke=ae[Xe].camera;if(Ke){let nt=f[Ke];nt||(nt=new al,f[Ke]=nt);const Be=d.getCameraImage(Ke);nt.sourceTexture=Be}}}}for(let ae=0;ae<A.length;ae++){const Ue=w[ae],Ae=A[ae];Ue!==null&&Ae!==void 0&&Ae.update(Ue,ne,c||a)}Fe&&Fe(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const at=new hl;at.setAnimationLoop(ot),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const Wn=new hn,em=new ht;function tm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ol(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,b,E){f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),S(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),b=x.envMap,E=x.envMapRotation;b&&(m.envMap.value=b,Wn.copy(E),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(Wn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const E=b.program;n.uniformBlockBinding(x,E)}function c(x,b){let E=i[x.id];E===void 0&&(_(x),E=u(x),i[x.id]=E,x.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const b=d();x.__bindingPointIndex=b;const E=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],E=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,L=E.length;w<L;w++){const v=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,k=v.length;y<k;y++){const C=v[y];if(p(C,w,y,A)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let V=0;V<O.length;V++){const z=O[V],H=S(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+G,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,b,E,A){const w=x.value,L=b+"_"+E;if(A[L]===void 0)return typeof w=="number"||typeof w=="boolean"?A[L]=w:A[L]=w.clone(),!0;{const v=A[L];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return A[L]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function _(x){const b=x.uniforms;let E=0;const A=16;for(let L=0,v=b.length;L<v;L++){const y=Array.isArray(b[L])?b[L]:[b[L]];for(let k=0,C=y.length;k<C;k++){const N=y[k],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,V=O.length;G<V;G++){const z=O[G],H=S(z),Q=E%A,Z=Q%H.boundary,he=Q+Z;E+=Z,he!==0&&A-he<H.storage&&(E+=A-he),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=H.storage}}}const w=E%A;return w>0&&(E+=A-w),x.__size=E,x.__cache={},this}function S(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){const b=x.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}const im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let en=null;function sm(){return en===null&&(en=new Gc(im,16,16,xi,yn),en.name="DFG_LUT",en.minFilter=Pt,en.magFilter=Pt,en.wrapS=Mn,en.wrapT=Mn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class rm{constructor(e={}){const{canvas:t=sc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ft}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=p,m=new Set([ga,ma,pa]),f=new Set([Ft,cn,Bi,zi,da,fa]),x=new Uint32Array(4),b=new Int32Array(4);let E=null,A=null;const w=[],L=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let k=!1;this._outputColorSpace=Nt;let C=0,N=0,O=null,G=-1,V=null;const z=new ct,H=new ct;let Q=null;const Z=new We(0);let he=0,me=t.width,de=t.height,Fe=1,ot=null,at=null;const j=new ct(0,0,me,de),ne=new ct(0,0,me,de);let ae=!1;const Ue=new Ea;let Ae=!1,Pe=!1;const Mt=new ht,Xe=new R,Ke=new ct,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ut(){return O===null?Fe:1}let P=n;function pt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",rt,!1),P===null){const U="webgl2";if(P=pt(U,M),P===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let Ze,st,Se,T,g,I,Y,$,q,ge,se,we,Re,K,ee,_e,xe,ue,ze,D,re,te,pe;function J(){Ze=new rf(P),Ze.init(),re=new $p(P,Ze),st=new Zd(P,Ze,e,re),Se=new Yp(P,Ze),st.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),T=new lf(P),g=new Ip,I=new jp(P,Ze,Se,g,st,re,T),Y=new sf(y),$=new dh(P),te=new jd(P,$),q=new af(P,$,T,te),ge=new hf(P,q,$,te,T),ue=new cf(P,st,I),ee=new Kd(g),se=new Dp(y,Y,Ze,st,te,ee),we=new tm(y,g),Re=new Np,K=new Vp(Ze),xe=new Yd(y,Y,Se,ge,_,l),_e=new qp(y,ge,st),pe=new nm(P,T,st,Se),ze=new $d(P,Ze,T),D=new of(P,Ze,T),T.programs=se.programs,y.capabilities=st,y.extensions=Ze,y.properties=g,y.renderLists=Re,y.shadowMap=_e,y.state=Se,y.info=T}J(),S!==Ft&&(v=new df(S,t.width,t.height,i,r));const X=new Qp(y,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(M){M!==void 0&&(Fe=M,this.setSize(me,de,!1))},this.getSize=function(M){return M.set(me,de)},this.setSize=function(M,U,W=!0){if(X.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}me=M,de=U,t.width=Math.floor(M*Fe),t.height=Math.floor(U*Fe),W===!0&&(t.style.width=M+"px",t.style.height=U+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(me*Fe,de*Fe).floor()},this.setDrawingBufferSize=function(M,U,W){me=M,de=U,Fe=W,t.width=Math.floor(M*W),t.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===Ft){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,U,W,B){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,W,B),Se.viewport(z.copy(j).multiplyScalar(Fe).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,U,W,B){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,W,B),Se.scissor(H.copy(ne).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){Se.setScissorTest(ae=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let B=0;if(M){let F=!1;if(O!==null){const le=O.texture.format;F=m.has(le)}if(F){const le=O.texture.type,fe=f.has(le),ce=xe.getClearColor(),Me=xe.getClearAlpha(),ye=ce.r,Ie=ce.g,ke=ce.b;fe?(x[0]=ye,x[1]=Ie,x[2]=ke,x[3]=Me,P.clearBufferuiv(P.COLOR,0,x)):(b[0]=ye,b[1]=Ie,b[2]=ke,b[3]=Me,P.clearBufferiv(P.COLOR,0,b))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),W&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),xe.dispose(),Re.dispose(),K.dispose(),g.dispose(),Y.dispose(),ge.dispose(),te.dispose(),pe.dispose(),se.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ta),X.removeEventListener("sessionend",wa),On.stop()};function ve(M){M.preventDefault(),Va("WebGLRenderer: Context Lost."),k=!0}function Le(){Va("WebGLRenderer: Context Restored."),k=!1;const M=T.autoReset,U=_e.enabled,W=_e.autoUpdate,B=_e.needsUpdate,F=_e.type;J(),T.autoReset=M,_e.enabled=U,_e.autoUpdate=W,_e.needsUpdate=B,_e.type=F}function rt(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Je(M){const U=M.target;U.removeEventListener("dispose",Je),un(U)}function un(M){dn(M),g.remove(M)}function dn(M){const U=g.get(M).programs;U!==void 0&&(U.forEach(function(W){se.releaseProgram(W)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,B,F,le){U===null&&(U=nt);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ce=vl(M,U,W,B,F);Se.setMaterial(B,fe);let Me=W.index,ye=1;if(B.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;ye=2}const Ie=W.drawRange,ke=W.attributes.position;let be=Ie.start*ye,et=(Ie.start+Ie.count)*ye;le!==null&&(be=Math.max(be,le.start*ye),et=Math.min(et,(le.start+le.count)*ye)),Me!==null?(be=Math.max(be,0),et=Math.min(et,Me.count)):ke!=null&&(be=Math.max(be,0),et=Math.min(et,ke.count));const dt=et-be;if(dt<0||dt===1/0)return;te.setup(F,B,ce,W,Me);let lt,tt=ze;if(Me!==null&&(lt=$.get(Me),tt=D,tt.setIndex(lt)),F.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*ut()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(F.isLine){let At=B.linewidth;At===void 0&&(At=1),Se.setLineWidth(At*ut()),F.isLineSegments?tt.setMode(P.LINES):F.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else F.isPoints?tt.setMode(P.POINTS):F.isSprite&&tt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const At=F._multiDrawStarts,Ee=F._multiDrawCounts,Bt=F._multiDrawCount,Ye=Me?$.get(Me).bytesPerElement:1,Xt=g.get(B).currentProgram.getUniforms();for(let Jt=0;Jt<Bt;Jt++)Xt.setValue(P,"_gl_DrawID",Jt),tt.render(At[Jt]/Ye,Ee[Jt])}else if(F.isInstancedMesh)tt.renderInstances(be,dt,F.count);else if(W.isInstancedBufferGeometry){const At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,At);tt.renderInstances(be,dt,Ee)}else tt.render(be,dt)};function ba(M,U,W){M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,Yi(M,U,W),M.side=Fn,M.needsUpdate=!0,Yi(M,U,W),M.side=xn):Yi(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),A=K.get(W),A.init(U),L.push(A),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),M!==W&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();const B=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const ce=le[fe];ba(ce,W,F),B.add(ce)}else ba(le,W,F),B.add(le)}),A=L.pop(),B},this.compileAsync=function(M,U,W=null){const B=this.compile(M,U,W);return new Promise(F=>{function le(){if(B.forEach(function(fe){g.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){F(M);return}setTimeout(le,10)}Ze.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Fs=null;function _l(M){Fs&&Fs(M)}function Ta(){On.stop()}function wa(){On.start()}const On=new hl;On.setAnimationLoop(_l),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(M){Fs=M,X.setAnimationLoop(M),M===null?On.stop():On.start()},X.addEventListener("sessionstart",Ta),X.addEventListener("sessionend",wa),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,B=v!==null&&(O===null||W)&&v.begin(y,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,O),A=K.get(M,L.length),A.init(U),L.push(A),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Mt,rn,U.reversedDepth),Pe=this.localClippingEnabled,Ae=ee.init(this.clippingPlanes,Pe),E=Re.get(M,w.length),E.init(),w.push(E),X.enabled===!0&&X.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&Os(fe,U,-1/0,y.sortObjects)}Os(M,U,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(ot,at),Be=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Be&&xe.addToRenderList(E,M),this.info.render.frame++,Ae===!0&&ee.beginShadows();const F=A.state.shadowsArray;if(_e.render(F,M,U),Ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&v.hasRenderPass())===!1){const fe=E.opaque,ce=E.transmissive;if(A.setupLights(),U.isArrayCamera){const Me=U.cameras;if(ce.length>0)for(let ye=0,Ie=Me.length;ye<Ie;ye++){const ke=Me[ye];Ra(fe,ce,M,ke)}Be&&xe.render(M);for(let ye=0,Ie=Me.length;ye<Ie;ye++){const ke=Me[ye];Aa(E,M,ke,ke.viewport)}}else ce.length>0&&Ra(fe,ce,M,U),Be&&xe.render(M),Aa(E,M,U)}O!==null&&N===0&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),B&&v.end(y),M.isScene===!0&&M.onAfterRender(y,M,U),te.resetDefaultState(),G=-1,V=null,L.pop(),L.length>0?(A=L[L.length-1],Ae===!0&&ee.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function Os(M,U,W,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ue.intersectsSprite(M)){B&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);const fe=ge.update(M),ce=M.material;ce.visible&&E.push(M,fe,ce,W,Ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ue.intersectsObject(M))){const fe=ge.update(M),ce=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ke.copy(fe.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(ce)){const Me=fe.groups;for(let ye=0,Ie=Me.length;ye<Ie;ye++){const ke=Me[ye],be=ce[ke.materialIndex];be&&be.visible&&E.push(M,fe,be,W,Ke.z,ke)}}else ce.visible&&E.push(M,fe,ce,W,Ke.z,null)}}const le=M.children;for(let fe=0,ce=le.length;fe<ce;fe++)Os(le[fe],U,W,B)}function Aa(M,U,W,B){const{opaque:F,transmissive:le,transparent:fe}=M;A.setupLightsView(W),Ae===!0&&ee.setGlobalState(y.clippingPlanes,W),B&&Se.viewport(z.copy(B)),F.length>0&&qi(F,U,W),le.length>0&&qi(le,U,W),fe.length>0&&qi(fe,U,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ra(M,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){const be=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Zt(1,1,{generateMipmaps:!0,type:be?yn:Ft,minFilter:$n,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const le=A.state.transmissionRenderTarget[B.id],fe=B.viewport||z;le.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const ce=y.getRenderTarget(),Me=y.getActiveCubeFace(),ye=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(Z),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),Be&&xe.render(W);const Ie=y.toneMapping;y.toneMapping=on;const ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Ae===!0&&ee.setGlobalState(y.clippingPlanes,B),qi(M,W,B),I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let et=0,dt=U.length;et<dt;et++){const lt=U[et],{object:tt,geometry:At,material:Ee,group:Bt}=lt;if(Ee.side===xn&&tt.layers.test(B.layers)){const Ye=Ee.side;Ee.side=Ot,Ee.needsUpdate=!0,Ca(tt,W,B,At,Ee,Bt),Ee.side=Ye,Ee.needsUpdate=!0,be=!0}}be===!0&&(I.updateMultisampleRenderTarget(le),I.updateRenderTargetMipmap(le))}y.setRenderTarget(ce,Me,ye),y.setClearColor(Z,he),ke!==void 0&&(B.viewport=ke),y.toneMapping=Ie}function qi(M,U,W){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,le=M.length;F<le;F++){const fe=M[F],{object:ce,geometry:Me,group:ye}=fe;let Ie=fe.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),ce.layers.test(W.layers)&&Ca(ce,U,W,Me,Ie,ye)}}function Ca(M,U,W,B,F,le){M.onBeforeRender(y,U,W,B,F,le),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,U,W,B,M,le),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=Ot,F.needsUpdate=!0,y.renderBufferDirect(W,U,B,F,M,le),F.side=Fn,F.needsUpdate=!0,y.renderBufferDirect(W,U,B,F,M,le),F.side=xn):y.renderBufferDirect(W,U,B,F,M,le),M.onAfterRender(y,U,W,B,F,le)}function Yi(M,U,W){U.isScene!==!0&&(U=nt);const B=g.get(M),F=A.state.lights,le=A.state.shadowsArray,fe=F.state.version,ce=se.getParameters(M,F.state,le,U,W),Me=se.getProgramCacheKey(ce);let ye=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=Y.get(M.envMap||B.environment,Ie),B.envMapRotation=B.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,ye===void 0&&(M.addEventListener("dispose",Je),ye=new Map,B.programs=ye);let ke=ye.get(Me);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===fe)return La(M,ce),ke}else ce.uniforms=se.getUniforms(M),M.onBeforeCompile(ce,y),ke=se.acquireProgram(ce,Me),ye.set(Me,ke),B.uniforms=ce.uniforms;const be=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=ee.uniform),La(M,ce),B.needsLights=Ml(M),B.lightsStateVersion=fe,B.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=ke,B.uniformsList=null,ke}function Pa(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Es.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function La(M,U){const W=g.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function vl(M,U,W,B,F){U.isScene!==!0&&(U=nt),I.resetTextureUnits();const le=U.fog,fe=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ce=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Mi,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=Y.get(B.envMap||fe,Me),Ie=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color;let lt=on;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(lt=y.toneMapping);const tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=tt!==void 0?tt.length:0,Ee=g.get(B),Bt=A.state.lights;if(Ae===!0&&(Pe===!0||M!==V)){const St=M===V&&B.id===G;ee.setState(B,M,St)}let Ye=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Bt.state.version||Ee.outputColorSpace!==ce||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==ye||B.fog===!0&&Ee.fog!==le||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==Ie||Ee.vertexTangents!==ke||Ee.morphTargets!==be||Ee.morphNormals!==et||Ee.morphColors!==dt||Ee.toneMapping!==lt||Ee.morphTargetsCount!==At)&&(Ye=!0):(Ye=!0,Ee.__version=B.version);let Xt=Ee.currentProgram;Ye===!0&&(Xt=Yi(B,U,F));let Jt=!1,Bn=!1,Jn=!1;const it=Xt.getUniforms(),bt=Ee.uniforms;if(Se.useProgram(Xt.program)&&(Jt=!0,Bn=!0,Jn=!0),B.id!==G&&(G=B.id,Bn=!0),Jt||V!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),it.setValue(P,"projectionMatrix",M.projectionMatrix),it.setValue(P,"viewMatrix",M.matrixWorldInverse);const wn=it.map.cameraPosition;wn!==void 0&&wn.setValue(P,Xe.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&it.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&it.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,Bn=!0,Jn=!0)}if(Ee.needsLights&&(Bt.state.directionalShadowMap.length>0&&it.setValue(P,"directionalShadowMap",Bt.state.directionalShadowMap,I),Bt.state.spotShadowMap.length>0&&it.setValue(P,"spotShadowMap",Bt.state.spotShadowMap,I),Bt.state.pointShadowMap.length>0&&it.setValue(P,"pointShadowMap",Bt.state.pointShadowMap,I)),F.isSkinnedMesh){it.setOptional(P,F,"bindMatrix"),it.setOptional(P,F,"bindMatrixInverse");const St=F.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),it.setValue(P,"boneTexture",St.boneTexture,I))}F.isBatchedMesh&&(it.setOptional(P,F,"batchingTexture"),it.setValue(P,"batchingTexture",F._matricesTexture,I),it.setOptional(P,F,"batchingIdTexture"),it.setValue(P,"batchingIdTexture",F._indirectTexture,I),it.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(P,"batchingColorTexture",F._colorsTexture,I));const Tn=W.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ue.update(F,W,Xt),(Bn||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,it.setValue(P,"receiveShadow",F.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=sm()),Bn&&(it.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&xl(bt,Jn),le&&B.fog===!0&&we.refreshFogUniforms(bt,le),we.refreshMaterialUniforms(bt,B,Fe,de,A.state.transmissionRenderTarget[M.id]),Es.upload(P,Pa(Ee),bt,I)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Es.upload(P,Pa(Ee),bt,I),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&it.setValue(P,"center",F.center),it.setValue(P,"modelViewMatrix",F.modelViewMatrix),it.setValue(P,"normalMatrix",F.normalMatrix),it.setValue(P,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const St=B.uniformsGroups;for(let wn=0,Qn=St.length;wn<Qn;wn++){const Da=St[wn];pe.update(Da,Xt),pe.bind(Da,Xt)}}return Xt}function xl(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Ml(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,U,W){const B=g.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=U,g.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=g.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Sl=P.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){O=M,C=U,N=W;let B=null,F=!1,le=!1;if(M){const ce=g.get(M);if(ce.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(P.FRAMEBUFFER,ce.__webglFramebuffer),z.copy(M.viewport),H.copy(M.scissor),Q=M.scissorTest,Se.viewport(z),Se.scissor(H),Se.setScissorTest(Q),G=-1;return}else if(ce.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(ce.__hasExternalTextures)I.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(ce.__boundDepthTexture!==Ie){if(Ie!==null&&g.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(le=!0);const ye=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[U])?B=ye[U][W]:B=ye[U],F=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?B=g.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[W]:B=ye,z.copy(M.viewport),H.copy(M.scissor),Q=M.scissorTest}else z.copy(j).multiplyScalar(Fe).floor(),H.copy(ne).multiplyScalar(Fe).floor(),Q=ae;if(W!==0&&(B=Sl),Se.bindFramebuffer(P.FRAMEBUFFER,B)&&Se.drawBuffers(M,B),Se.viewport(z),Se.scissor(H),Se.setScissorTest(Q),F){const ce=g.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,W)}else if(le){const ce=U;for(let Me=0;Me<M.textures.length;Me++){const ye=g.get(M.textures[Me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Me,ye.__webglTexture,W,ce)}}else if(M!==null&&W!==0){const ce=g.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(M,U,W,B,F,le,fe,ce=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Se.bindFramebuffer(P.FRAMEBUFFER,Me);try{const ye=M.textures[ce],Ie=ye.format,ke=ye.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),!st.textureFormatReadable(Ie)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ke)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&W>=0&&W<=M.height-F&&P.readPixels(U,W,B,F,re.convert(Ie),re.convert(ke),le)}finally{const ye=O!==null?g.get(O).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,B,F,le,fe,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me)if(U>=0&&U<=M.width-B&&W>=0&&W<=M.height-F){Se.bindFramebuffer(P.FRAMEBUFFER,Me);const ye=M.textures[ce],Ie=ye.format,ke=ye.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce),!st.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(U,W,B,F,re.convert(Ie),re.convert(ke),0);const et=O!==null?g.get(O).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,et);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rc(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(be),P.deleteSync(dt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const B=Math.pow(2,-W),F=Math.floor(M.image.width*B),le=Math.floor(M.image.height*B),fe=U!==null?U.x:0,ce=U!==null?U.y:0;I.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,fe,ce,F,le),Se.unbindTexture()};const El=P.createFramebuffer(),yl=P.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,B=null,F=0,le=0){let fe,ce,Me,ye,Ie,ke,be,et,dt;const lt=M.isCompressedTexture?M.mipmaps[le]:M.image;if(W!==null)fe=W.max.x-W.min.x,ce=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,Ie=W.min.y,ke=W.isBox3?W.min.z:0;else{const bt=Math.pow(2,-F);fe=Math.floor(lt.width*bt),ce=Math.floor(lt.height*bt),M.isDataArrayTexture?Me=lt.depth:M.isData3DTexture?Me=Math.floor(lt.depth*bt):Me=1,ye=0,Ie=0,ke=0}B!==null?(be=B.x,et=B.y,dt=B.z):(be=0,et=0,dt=0);const tt=re.convert(U.format),At=re.convert(U.type);let Ee;U.isData3DTexture?(I.setTexture3D(U,0),Ee=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Ee=P.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Ee=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xt=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),Bn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const Jn=M.isDataArrayTexture||M.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const bt=g.get(M),Tn=g.get(U),St=g.get(bt.__renderTarget),wn=g.get(Tn.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,St.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let Qn=0;Qn<Me;Qn++)Jn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(M).__webglTexture,F,ke+Qn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,g.get(U).__webglTexture,le,dt+Qn)),P.blitFramebuffer(ye,Ie,fe,ce,be,et,fe,ce,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||g.has(M)){const bt=g.get(M),Tn=g.get(U);Se.bindFramebuffer(P.READ_FRAMEBUFFER,El),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,yl);for(let St=0;St<Me;St++)Jn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,bt.__webglTexture,F,ke+St):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,bt.__webglTexture,F),it?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,le,dt+St):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,le),F!==0?P.blitFramebuffer(ye,Ie,fe,ce,be,et,fe,ce,P.COLOR_BUFFER_BIT,P.NEAREST):it?P.copyTexSubImage3D(Ee,le,be,et,dt+St,ye,Ie,fe,ce):P.copyTexSubImage2D(Ee,le,be,et,ye,Ie,fe,ce);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else it?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ee,le,be,et,dt,fe,ce,Me,tt,At,lt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,le,be,et,dt,fe,ce,Me,tt,lt.data):P.texSubImage3D(Ee,le,be,et,dt,fe,ce,Me,tt,At,lt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,be,et,fe,ce,tt,At,lt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,be,et,lt.width,lt.height,tt,lt.data):P.texSubImage2D(P.TEXTURE_2D,le,be,et,fe,ce,tt,At,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),le===0&&U.generateMipmaps&&P.generateMipmap(Ee),Se.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){C=0,N=0,O=null,Se.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class am{#t=new Map;on(e,t){const n=this.#t.get(e)??[];return n.push(t),this.#t.set(e,n),()=>this.off(e,t)}off(e,t){const n=this.#t.get(e);if(!n)return;const i=n.indexOf(t);i>=0&&n.splice(i,1)}emit(e,t=void 0){const n=this.#t.get(e);if(n)for(const i of[...n])i(t)}clear(){this.#t.clear()}}class om{constructor(e){this.domElement=e,this.keys=new Set,this.justPressed=new Set,this.lookX=0,this.lookY=0,this.firePressed=!1,this.fireHeld=!1,this.mobileMove={x:0,y:0},this.mobileLook={x:0,y:0},this.mobileEnabled=!1,window.addEventListener("keydown",t=>{this.keys.has(t.code)||this.justPressed.add(t.code),this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.domElement&&(this.lookX+=t.movementX,this.lookY+=t.movementY)}),document.addEventListener("mousedown",t=>{t.button!==0||document.pointerLockElement!==this.domElement||(this.firePressed=!0,this.fireHeld=!0)}),document.addEventListener("mouseup",t=>{t.button===0&&(this.fireHeld=!1)})}requestPointerLock(){this.isTouchDevice()||this.domElement.requestPointerLock?.()}isTouchDevice(){return window.matchMedia?.("(pointer: coarse)").matches??!1}setMobileEnabled(e){this.mobileEnabled=e,e||this.clearMobileState()}clearMobileState(){this.mobileMove.x=0,this.mobileMove.y=0,this.mobileLook.x=0,this.mobileLook.y=0,this.fireHeld=!1}bindMobileControls({moveStick:e,moveKnob:t,lookStick:n,lookKnob:i,fireButton:r,actionButtons:a}){this.#t(e,t,(l,c)=>{this.mobileMove.x=l,this.mobileMove.y=c}),this.#t(n,i,(l,c)=>{this.mobileLook.x=l,this.mobileLook.y=c}),r.addEventListener("pointerdown",l=>{this.mobileEnabled&&(l.preventDefault(),r.setPointerCapture?.(l.pointerId),this.fireHeld||(this.firePressed=!0),this.fireHeld=!0)});const o=l=>{r.releasePointerCapture?.(l.pointerId),this.fireHeld=!1};r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o);for(const l of a)l.addEventListener("pointerdown",c=>{this.mobileEnabled&&(c.preventDefault(),this.justPressed.add(l.dataset.mobileAction))})}#t(e,t,n){let i=null,r=0,a=0,o=0,l=0;const c=d=>{d.pointerId===i&&(i=null,t.style.transform="translate(-50%, -50%)",n(0,0,0,0))},u=d=>{if(d.pointerId!==i)return;const h=Math.max(1,Math.min(e.clientWidth,e.clientHeight)*.31),p=d.clientX-r,_=d.clientY-a,S=Math.hypot(p,_),m=S>h?h/S:1,f=p*m/h,x=-_*m/h;t.style.transform=`translate(calc(-50% + ${p*m}px), calc(-50% + ${_*m}px))`,n(f,x,d.clientX-o,d.clientY-l),o=d.clientX,l=d.clientY};e.addEventListener("pointerdown",d=>{if(!this.mobileEnabled||i!==null)return;d.preventDefault();const h=e.getBoundingClientRect();i=d.pointerId,r=h.left+h.width/2,a=h.top+h.height/2,o=d.clientX,l=d.clientY,e.setPointerCapture?.(i),u(d)}),e.addEventListener("pointermove",u),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c)}down(e){return this.keys.has(e)}consume(e){const t=this.justPressed.has(e);return this.justPressed.delete(e),t}consumeLook(e=0){const t={x:this.lookX+this.mobileLook.x*e*1e3,y:this.lookY+this.mobileLook.y*e*680};return this.lookX=0,this.lookY=0,t}movement(){let e=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0)+this.mobileMove.x,t=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0)+this.mobileMove.y;const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,y:t}}isMoving(){const{x:e,y:t}=this.movement();return Math.abs(e)>.01||Math.abs(t)>.01}consumeFirePressed(){const e=this.firePressed;return this.firePressed=!1,e}endFrame(){this.justPressed.clear(),this.firePressed=!1}}class lm{constructor(e=4266374){this.state=e>>>0}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}}const Oi={pm:{id:"pm",name:"ТАБЕЛЬНЫЙ ПМ",short:"ПМ",kind:"hitscan",damage:1,cooldown:.28,range:20,spread:.006,ammo:null,pellets:1},shotgun:{id:"shotgun",name:"ОБРЕЗ / ИЖ",short:"ИЖ",kind:"hitscan",damage:1.15,cooldown:.78,range:9,spread:.075,ammo:"shells",pellets:7},ak:{id:"ak",name:"АК-ОБРАЗНАЯ",short:"АК",kind:"hitscan",damage:.72,cooldown:.105,range:24,spread:.018,ammo:"rifle",pellets:1,automatic:!0},arcCutter:{id:"arcCutter",name:"ARC CUTTER",short:"ARC",kind:"arc",damage:2.1,cooldown:.34,range:15,spread:.012,ammo:"cells",pellets:1},flamethrower:{id:"flamethrower",name:"FLAMETHROWER P-041",short:"FIRE",kind:"flame",damage:.56,cooldown:.075,range:7.2,spread:.2,ammo:"fuel",pellets:1,automatic:!0},fungus:{id:"fungus",name:"ГРИБНОЙ ГРАНАТОМЁТ",short:"О-ГР",kind:"fungalProjectile",damage:0,cooldown:.85,range:15,spread:0,ammo:"fungalShell",pellets:1},drill:{id:"drill",name:"МИЦЕЛИЕВЫЙ БУР",short:"БУР",kind:"melee",damage:3.4,cooldown:.58,range:2.2,spread:0,ammo:"sporeCharge",pellets:1},resonator:{id:"resonator",name:"РЕЗОНАТОР",short:"РЕЗ",kind:"resonator",damage:2.2,cooldown:.22,range:28,spread:.002,ammo:"resonance",pellets:1,automatic:!0}},Do={cells:"ARC",fuel:"FUEL",shells:"12К",rifle:"5.45",fungalShell:"О-41",sporeCharge:"СП",resonance:"РЕЗ"},ys={fungusLauncher:{id:"fungusLauncher",name:"ГРИБНОЙ ГРАНАТОМЁТ",requiresUnlock:"fungusLauncher",cost:{spores:4},output:{weapon:"fungus",ammo:"fungalShell",count:1}},inhaler:{id:"inhaler",name:"ИНГАЛЯТОР",requiresUnlock:"inhaler",cost:{spores:2},output:{item:"inhaler",count:1}},fungalShell:{id:"fungalShell",name:"ГРИБНОЙ ЗАРЯД",requiresUnlock:"fungalShell",cost:{spores:3},output:{ammo:"fungalShell",count:1}},shield:{id:"shield",name:"МИЦЕЛИЕВЫЙ ЩИТ",requiresUnlock:"shield",cost:{spores:4},output:{item:"shield",count:1}},drillCharge:{id:"drillCharge",name:"ПОДЗАРЯДКА БУРА",requiresUnlock:"drillCharge",cost:{spores:1},output:{ammo:"sporeCharge",count:2}}};class cm{constructor(e,t,n){this.inventory=e,this.belt=t,this.events=n,this.unlocked=new Set}unlock(e){this.unlocked.has(e)||(this.unlocked.add(e),this.events?.emit("craft:unlocked",{id:e,recipe:ys[e]}))}canCraft(e){const t=ys[e];return!t||!this.unlocked.has(t.requiresUnlock)?!1:Object.entries(t.cost).every(([n,i])=>this.inventory.has(n,i))}craft(e){const t=ys[e];if(!t||!this.canCraft(e))return!1;for(const[n,i]of Object.entries(t.cost))this.inventory.remove(n,i);if(t.output.item&&!this.inventory.add(t.output.item,t.output.count,{name:t.name})){for(const[n,i]of Object.entries(t.cost))this.inventory.add(n,i,{name:"СПОРЫ О-41"});return!1}return t.output.weapon&&this.belt.unlock(t.output.weapon),t.output.ammo&&this.belt.addAmmo(t.output.ammo,t.output.count),this.events?.emit("craft:completed",{id:e,recipe:t}),!0}}class hm{constructor(e){this.root=e,this.messageTimer=0,this.inventoryVisible=!1,this.compassJam=0,this.transitionTimer=0,this.#t(),this.radarCtx=this.radar.getContext("2d",{alpha:!1})}#t(){this.root.innerHTML=`
      <div id="shell">
        <header id="topbar">
          <div class="weapon-slot active" data-belt="0"><span class="slot-index">1</span><strong id="belt0Name">ПМ</strong><small id="belt0Ammo">∞</small></div>
          <div class="weapon-slot" data-belt="1"><span class="slot-index">2</span><strong id="belt1Name">—</strong><small id="belt1Ammo">—</small></div>
          <div class="instrument"><span>КОНТУР</span><b id="contourText">1-Й</b></div>
          <div class="instrument health-number"><span>СОСТОЯНИЕ</span><b id="healthNum">08</b></div>
          <div class="instrument"><span>О-41 / СПОРЫ</span><b id="sporeCount">00</b></div>
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
            <div id="mobileControls" aria-label="Mobile controls">
              <div class="mobile-stick" id="moveStick"><i id="moveKnob"></i><span>MOVE</span></div>
              <div class="mobile-stick" id="lookStick"><i id="lookKnob"></i><span>LOOK</span></div>
              <div class="mobile-actions">
                <button id="mobileFire" class="mobile-fire">FIRE</button>
                <button data-mobile-action="KeyE">E<br><small>USE</small></button>
                <button data-mobile-action="Digit1">1</button>
                <button data-mobile-action="Digit2">2</button>
                <button data-mobile-action="KeyI">II<br><small>MENU</small></button>
              </div>
            </div>
          </div>
        </main>

        <footer id="bottom">
          <section class="panel radar-panel">
            <canvas id="radar" width="220" height="100"></canvas>
            <div class="radar-side"><b>БИО</b><span id="contacts">КОНТ: 0</span><span id="compassText">000°</span><span>167.05 MHz</span></div>
          </section>

          <section class="panel status-panel">
            <div class="telemetry-row"><span id="systemLine">К.О.Н.Т.У.Р. // КАНАЛ 041</span><span id="resonanceText">РЕЗОНАНС: 0</span></div>
            <div class="meters">
              <div><label>ЗДОРОВЬЕ <span id="hpText">8/8</span></label><div id="healthCells"></div></div>
              <div><label>ЗАРАЖЕНИЕ <span id="infectionText">0%</span></label><div class="infection-track"><div id="infectionFill"></div></div></div>
            </div>
            <div class="quick-help">I — ИНВЕНТАРЬ · H — ИНГАЛЯТОР · Q — ЩИТ · M — ЗВУК</div>
          </section>
        </footer>
      </div>

      <div id="pauseOverlay">
        <div class="pause-window">
          <header><b>ПОЛЕВОЙ КОМПЛЕКС</b><span>I — ЗАКРЫТЬ</span></header>
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
          <p class="controls">WASD — движение · мышь — обзор · ЛКМ — огонь<br>E — взаимодействие · 1/2 — оружие · I — инвентарь<br>H — ингалятор · Q — щит · M — звук</p>
          <div class="start-actions"><button id="startButton">ВОЙТИ В 1-Й КОНТУР</button><a class="sandbox-link" href="./audio-sandbox.html">AUDIO SANDBOX</a></div>
        </div>
      </div>

      <div id="orientationWarning" role="alert">
        <div><b>ROTATE DEVICE</b><span>KONTUR-041 REQUIRES LANDSCAPE ORIENTATION</span></div>
      </div>

      <div id="levelTravel" aria-live="assertive">
        <div class="travel-door travel-door-left"></div>
        <div class="travel-door travel-door-right"></div>
        <div class="travel-scanlines"></div>
        <div class="travel-readout"><span>CONTOUR TRANSFER</span><b id="travelTitle"></b><small id="travelSubtitle"></small></div>
      </div>

      <div id="choiceOverlay" role="dialog" aria-modal="true" aria-live="assertive">
        <div class="choice-card"><span id="choiceSignal">SIGNAL / DECISION</span><h2 id="choiceTitle"></h2><p id="choiceText"></p><div id="choiceActions"></div></div>
      </div>
    `;const e=t=>this.root.querySelector(t);this.shell=e("#shell"),this.viewport=e("#viewport"),this.startOverlay=e("#startOverlay"),this.startButton=e("#startButton"),this.pauseOverlay=e("#pauseOverlay"),this.worldMessage=e("#worldMessage"),this.interactionPrompt=e("#interactionPrompt"),this.objectiveText=e("#objectiveText"),this.subtitle=e("#subtitle"),this.subtitleSpeaker=e("#subtitleSpeaker"),this.subtitleText=e("#subtitleText"),this.transition=e("#transition"),this.transitionTitle=e("#transitionTitle"),this.transitionSubtitle=e("#transitionSubtitle"),this.ending=e("#ending"),this.damageFlash=e("#damageFlash"),this.shieldOverlay=e("#shieldOverlay"),this.radar=e("#radar"),this.contacts=e("#contacts"),this.compassText=e("#compassText"),this.contourText=e("#contourText"),this.healthNum=e("#healthNum"),this.sporeCount=e("#sporeCount"),this.hpText=e("#hpText"),this.infectionText=e("#infectionText"),this.infectionFill=e("#infectionFill"),this.healthCells=e("#healthCells"),this.pauseInventory=e("#pauseInventory"),this.recipes=e("#recipes"),this.weapons=e("#weapons"),this.systemLine=e("#systemLine"),this.resonanceText=e("#resonanceText"),this.mobileControls=e("#mobileControls"),this.moveStick=e("#moveStick"),this.moveKnob=e("#moveKnob"),this.lookStick=e("#lookStick"),this.lookKnob=e("#lookKnob"),this.mobileFire=e("#mobileFire"),this.mobileActions=[...this.root.querySelectorAll("[data-mobile-action]")],this.orientationWarning=e("#orientationWarning"),this.levelTravel=e("#levelTravel"),this.travelTitle=e("#travelTitle"),this.travelSubtitle=e("#travelSubtitle"),this.choiceOverlay=e("#choiceOverlay"),this.choiceTitle=e("#choiceTitle"),this.choiceText=e("#choiceText"),this.choiceActions=e("#choiceActions"),this.beltSlots=[...this.root.querySelectorAll(".weapon-slot")],this.belt0Name=e("#belt0Name"),this.belt1Name=e("#belt1Name"),this.belt0Ammo=e("#belt0Ammo"),this.belt1Ammo=e("#belt1Ammo");for(let t=0;t<8;t++){const n=document.createElement("i");n.className="hp-cell",this.healthCells.appendChild(n)}this.hpCells=[...this.healthCells.children]}bindStart(e){this.startButton.addEventListener("click",e)}bindCraft(e){this.recipes.addEventListener("click",t=>{const n=t.target.closest("[data-craft]");n&&e(n.dataset.craft)})}bindEquip(e){this.weapons.addEventListener("click",t=>{const n=t.target.closest("[data-equip]");n&&e(Number(n.dataset.slot),n.dataset.equip)})}bindChoice(e){this.choiceActions.addEventListener("click",t=>{const n=t.target.closest("[data-choice]");n&&e(n.dataset.choice)})}mobileControlElements(){return{moveStick:this.moveStick,moveKnob:this.moveKnob,lookStick:this.lookStick,lookKnob:this.lookKnob,fireButton:this.mobileFire,actionButtons:this.mobileActions}}setPointerLocked(e){e&&this.startOverlay.classList.add("hidden")}setPauseVisible(e){this.inventoryVisible=e,this.pauseOverlay.classList.toggle("visible",e)}setOrientationWarning(e){this.orientationWarning.classList.toggle("visible",e)}setLevelTravel(e){this.travelTitle.textContent=`${e.number}. ${e.title}`,this.travelSubtitle.textContent=e.contour,this.levelTravel.classList.remove("active"),this.levelTravel.offsetWidth,this.levelTravel.classList.add("active")}clearLevelTravel(){this.levelTravel.classList.remove("active")}showChoice({title:e,text:t,options:n}){this.choiceTitle.textContent=e,this.choiceText.textContent=t,this.choiceActions.innerHTML=n.map(({id:i,label:r,detail:a})=>`<button data-choice="${i}"><b>${r}</b><small>${a}</small></button>`).join(""),this.choiceOverlay.classList.add("visible")}hideChoice(){this.choiceOverlay.classList.remove("visible")}setInteractionPrompt(e){this.interactionPrompt.textContent=e}setObjective(e){this.objectiveText.textContent=e||"—"}setSystemLine(e){this.systemLine.textContent=e}showMessage(e,t=1.2){this.worldMessage.textContent=e,this.worldMessage.classList.add("visible"),this.messageTimer=t}showSubtitle(e,t){this.subtitleSpeaker.textContent=e,this.subtitleText.textContent=t,this.subtitle.classList.add("visible")}hideSubtitle(){this.subtitle.classList.remove("visible")}showTransition(e){this.shell.dataset.palette=e.palette;const t={industrial:["#557866","#d3b953"],archive:["#416c62","#9fc56b"],reactor:["#7a5d35","#d07035"],organic:["#5f4937","#82a44d"],white:["#8098a0","#d8dfd5"]},[n,i]=t[e.palette]??t.industrial;this.shell.style.setProperty("--zone",n),this.shell.style.setProperty("--zoneText",i),this.transitionTitle.textContent=`${e.number}. ${e.title}`,this.transitionSubtitle.textContent=e.contour,this.transition.classList.add("visible"),this.transitionTimer=2.25,this.contourText.textContent=e.contour.replace(" КОНТУР","")}jamCompass(e=2.5){this.compassJam=Math.max(this.compassJam,e)}flashDamage(){this.damageFlash.classList.remove("hit"),this.damageFlash.offsetWidth,this.damageFlash.classList.add("hit")}showEnding(e){const t={burn:["burn","ЗАЧИСТКА ПОДТВЕРЖДЕНА","Контур уничтожен. Официальный отчёт снова называет О-41 аварийным биологическим агентом. Последний пакет телеметрии Скальпеля обрывается перед детонацией.","ПРЕДУПРЕЖДЕНИЕ НЕ ВЫШЛО ЗА ПЕРИМЕТР."],merge:["merge","НОВЫЙ УЗЕЛ","Скальпель перестаёт различать собственную память и память сети. Через несколько недель один и тот же белый коридор появляется во снах людей далеко от Zоны-14.","СИГНАЛ ВЫШЕЛ. ИМЯ — НЕТ."],broadcast:["broadcast","ПЕРЕДАЧА 167.05","Архивные данные, резонансные фрагменты и собственный нейропаттерн Скальпеля складываются в пакет. О-41 остаётся в Контуре, но предупреждение уходит через штатные ретрансляторы.","СИГНАЛ ВЫШЕЛ ЗА ПЕРИМЕТР. НОСИТЕЛЬ СОХРАНЁН."],sever:["sever","РАЗРЫВ КОНТАКТА","Резонатор выжигает связь между Скальпелем и сетью, не уничтожая сам О-41. Штаб получает неполный отчёт. Внутри объекта снова становится тихо — слишком тихо.","НИ ОДНА СТОРОНА НЕ ПОЛУЧИЛА ПОЛНОГО ОТВЕТА."]},[n,i,r,a]=t[e]??t.burn;this.ending.innerHTML=`<div class="ending-card ${n}"><b>${i}</b><p>${r}</p><small>${a}</small></div>`,this.ending.classList.add("visible")}showDeath(){this.ending.innerHTML='<div class="ending-card burn"><b>СВЯЗЬ ПОТЕРЯНА</b><p>ОПЕРАТИВНИК «СКАЛЬПЕЛЬ» НЕ ОТВЕЧАЕТ.</p><small>R — ПЕРЕЗАПУСК</small></div>',this.ending.classList.add("visible")}update(e,t){this.messageTimer=Math.max(0,this.messageTimer-e),this.messageTimer<=0&&this.worldMessage.classList.remove("visible"),this.compassJam=Math.max(0,this.compassJam-e),this.transitionTimer=Math.max(0,this.transitionTimer-e),this.transitionTimer<=0&&this.transition.classList.remove("visible");const{player:n,infection:i,inventory:r,belt:a,crafting:o,objective:l,enemies:c,spores:u,levelMeta:d,slime:h}=t,p=Math.ceil(n.health);this.healthNum.textContent=String(p).padStart(2,"0"),this.hpText.textContent=`${p}/${n.maxHealth}`,this.hpCells.forEach((f,x)=>f.classList.toggle("on",x<p));const _=Math.round(i.value),S=(performance.now()/260|0)%2===0?7:-5,m=i.hudIsLying?Math.max(0,Math.min(99,_+S)):_;this.infectionText.textContent=`${m}%`,this.infectionFill.style.width=`${_}%`,this.sporeCount.textContent=String(r.count("spores")).padStart(2,"0"),this.resonanceText.textContent=`РЕЗОНАНС: ${h?.attunement??0}`,this.shieldOverlay.classList.toggle("active",n.shieldTimer>0),this.setObjective(l.text),d&&(this.contourText.textContent=d.contour.replace(" КОНТУР","")),this.#s(a,i),this.#i(r,o,a),this.#n(t)}#s(e,t){const n=e.slots,i=[this.belt0Name,this.belt1Name],r=[this.belt0Ammo,this.belt1Ammo];for(let a=0;a<2;a++){const o=n[a],l=o?Oi[o]:null;if(i[a].textContent=l?.short??"—",!l)r[a].textContent="—";else if(!l.ammo)r[a].textContent="∞";else{const c=e.ammo[l.ammo]??0,u=t.hudIsLying&&a===e.activeSlot?Math.max(0,c+((performance.now()/180|0)%3-1)*3):c;r[a].textContent=`${Do[l.ammo]??l.ammo}:${u}`}this.beltSlots[a].classList.toggle("active",a===e.activeSlot)}}#i(e,t,n){const i=e.snapshot().map((r,a)=>`<div class="inv-slot ${r?"full":""}"><span>${a+1}</span><b>${r?.name??"ПУСТО"}</b><small>${r?`x${r.count}`:""}</small></div>`).join("");this.pauseInventory.innerHTML=i,this.recipes.innerHTML=Object.values(ys).map(r=>{const a=t.unlocked.has(r.requiresUnlock),o=Object.entries(r.cost).map(([l,c])=>`${l==="spores"?"СПОРЫ":l} x${c}`).join(", ");return`<div class="recipe ${a?"":"locked"}"><b>${r.name}</b><small>${a?o:"СХЕМА НЕИЗВЕСТНА"}</small><button data-craft="${r.id}" ${!a||!t.canCraft(r.id)?"disabled":""}>СОБРАТЬ</button></div>`}).join(""),this.weapons.innerHTML=[...n.unlocked].map(r=>{const a=Oi[r];return`<div class="weapon-card"><b>${a.name}</b><small>${a.ammo?`${Do[a.ammo]}: ${n.ammo[a.ammo]??0}`:"БОЕЗАПАС: ∞"}</small><div><button data-equip="${r}" data-slot="0">В СЛОТ 1</button><button data-equip="${r}" data-slot="1">В СЛОТ 2</button></div></div>`}).join("")}#n(e){const t=this.radarCtx,n=this.radar.width,i=this.radar.height;t.fillStyle="#020403",t.fillRect(0,0,n,i),t.strokeStyle="#173f34",t.lineWidth=1;for(let d=0;d<n;d+=12)t.beginPath(),t.moveTo(d,0),t.lineTo(d,i),t.stroke();for(let d=0;d<i;d+=12)t.beginPath(),t.moveTo(0,d),t.lineTo(n,d),t.stroke();const r=e.player.position,a=5,o=d=>({x:n/2+(d.x-r.x)*a,y:i/2+(d.z-r.z)*a}),l=(d,h,p=4)=>{const _=o(d);_.x<2||_.y<2||_.x>n-2||_.y>i-2||(t.fillStyle=h,t.fillRect(Math.round(_.x-p/2),Math.round(_.y-p/2),p,p))};if(this.compassJam<=0){for(const d of e.enemies.enemies)d.alive&&l(d.group.position,"#99482c",d.type==="hive"?6:4);for(const d of e.spores.items)l(d.group.position,"#55b64a",3);e.objective.target&&l(e.objective.target,"#caa348",5)}else for(let d=0;d<8;d++)l({x:r.x+Math.sin(d*3.4+performance.now()*.002)*8,z:r.z+Math.cos(d*2.1)*8},d%2?"#99482c":"#55b64a",3);t.fillStyle="#d8dfd5",t.fillRect(n/2-2,i/2-2,4,4),t.strokeStyle="#d8dfd5",t.beginPath(),t.moveTo(n/2,i/2),t.lineTo(n/2-Math.sin(e.player.yaw)*12,i/2-Math.cos(e.player.yaw)*12),t.stroke();const c=(-e.player.yaw*180/Math.PI%360+360)%360,u=this.compassJam>0?(c+Math.sin(performance.now()*.018)*120+360)%360:c;this.compassText.textContent=`${String(Math.round(u)).padStart(3,"0")}°`,this.contacts.textContent=`КОНТ: ${e.enemies.alive().length}`}}class um{constructor(e){this.host=e,this.renderer=new rm({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Nt,this.renderer.toneMapping=ha,this.renderer.toneMappingExposure=1.18,this.renderer.autoClear=!1,this.renderer.domElement.className="game-canvas",e.prepend(this.renderer.domElement),this.width=480,this.height=270,this.target=new Zt(this.width,this.height,{minFilter:gt,magFilter:gt,format:Wt,type:Ft,depthBuffer:!0}),this.postScene=new nl,this.postCamera=new Is(-1,1,1,-1,0,1),this.material=new Kt({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{tDiffuse:{value:this.target.texture},resolution:{value:new He(this.width,this.height)},time:{value:0},infection:{value:0},wail:{value:0},hive:{value:0},slime:{value:0},slimeHazard:{value:0},hallucination:{value:0},ending:{value:0},flicker:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float time;
        uniform float infection;
        uniform float wail;
        uniform float hive;
        uniform float slime;
        uniform float slimeHazard;
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
          vec2 centered = vUv * 2.0 - 1.0;
          float radius2 = dot(centered, centered);

          // Gentle CRT/barrel curvature. Unlike a fisheye, this keeps level geometry readable.
          float barrel = 0.018 + infection * 0.010 + slime * 0.006;
          vec2 uv = vUv + centered * radius2 * barrel * 0.05;

          float distortion = infection * 0.65 + wail * 1.5 + hive * 0.55 + hallucination * 0.8 + slimeHazard * 0.65;
          vec2 wobble = vec2(
            sin(uv.y * (28.0 + hive * 18.0) + time * (4.0 + wail * 7.0)) * px.x * distortion,
            sin(uv.x * 23.0 + time * 2.0) * px.y * (hive * 0.35 + slime * 0.18)
          );

          float chroma = infection * 0.9 + wail * 1.6 + slimeHazard * 0.35;
          float r = texture2D(tDiffuse, uv + wobble + vec2(px.x * chroma, 0.0)).r;
          float g = texture2D(tDiffuse, uv + wobble).g;
          float b = texture2D(tDiffuse, uv + wobble - vec2(px.x * chroma, 0.0)).b;
          vec3 color = vec3(r, g, b);

          // Slime proximity is visible as a sickly reflected green/brown tint near screen edges.
          float edge = smoothstep(0.22, 0.98, length(centered));
          color = mix(color, color * vec3(0.72, 1.04, 0.68) + vec3(0.015, 0.030, 0.006), slime * edge * 0.22);
          color = mix(color, color * vec3(1.02, 0.67, 0.50), slimeHazard * edge * 0.20);

          float scan = mod(floor(gl_FragCoord.y), 2.0);
          color *= mix(0.90, 1.0, scan);
          float subscan = sin(gl_FragCoord.y * 3.14159265) * 0.006;
          color -= subscan;

          float noise = hash(floor(gl_FragCoord.xy) + floor(time * 18.0)) - 0.5;
          color += noise * (0.012 + infection * 0.034 + wail * 0.04 + slime * 0.010);

          if (hallucination > 0.01) {
            float echo = texture2D(tDiffuse, vec2(1.0 - uv.x, uv.y) + wobble * 2.0).g;
            color.g = mix(color.g, echo, hallucination * 0.12);
          }

          // Analog exposure pumping from dying lamps.
          color *= 1.0 - flicker * (0.22 + 0.20 * step(0.5, hash(vec2(floor(time * 24.0), 4.0))));

          // Stronger vignette than v0.5, but keep the center readable for combat.
          float vignette = 1.0 - smoothstep(0.34, 1.20, length(centered)) * (0.34 + infection * 0.10);
          color *= vignette;

          // Keep the CRT image moody, but never lose navigational geometry in crushed blacks.
          color = color * 1.06 + vec3(0.014, 0.019, 0.016);
          color = max(color, vec3(0.018, 0.025, 0.021));

          // ending modes: burn=-1, merge=1, broadcast=2, sever=-2
          if (ending < -1.5) {
            float mono = dot(color, vec3(0.299, 0.587, 0.114));
            color = mix(vec3(mono), vec3(mono * 0.72, mono * 0.84, mono * 0.82), 0.55);
          } else if (ending < -0.5) {
            color *= vec3(1.0, 0.55, 0.38);
          } else if (ending > 1.5) {
            float carrier = 0.5 + 0.5 * sin(gl_FragCoord.y * 0.17 + time * 35.0);
            color = mix(color, vec3(color.g, color.b, color.r), 0.12 * carrier);
            color += vec3(0.02, 0.035, 0.028);
          } else if (ending > 0.5) {
            color = mix(color, vec3(dot(color, vec3(0.333))), 0.25);
          }

          gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
        }
      `}),this.postScene.add(new Te(new nn(2,2),this.material)),this.resize()}resize(){const e=this.host.getBoundingClientRect(),t=Math.max(.5,e.width/Math.max(1,e.height));return this.width=Math.max(320,Math.min(600,Math.round(e.width/2.45))),this.height=Math.max(180,Math.round(this.width/t)),this.renderer.setSize(this.width,this.height,!1),this.target.setSize(this.width,this.height),this.material.uniforms.resolution.value.set(this.width,this.height),{width:this.width,height:this.height,aspect:t}}render(e,t,n,i={}){for(const r of["infection","wail","hive","slime","slimeHazard","hallucination","ending","flicker"])this.material.uniforms[r].value=i[r]??0;this.material.uniforms.time.value=n,this.renderer.setRenderTarget(this.target),this.renderer.clear(),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postScene,this.postCamera)}}const ie={black:"#050708",dark:"#1f2c2f",slate:"#34484e",steel:"#526a73",light:"#8098a0",pale:"#b4c3c1",white:"#d8dfd5",darkBrown:"#2a1714",brown:"#5b3023",rust:"#99482c",orange:"#d07035",darkGreen:"#0f2f1e",green:"#256b39",lime:"#55b64a",yellow:"#caa348"};function Io(s,e=64,t=64){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,s(i,e,t);const r=new Yc(n);return r.magFilter=gt,r.minFilter=Go,r.wrapS=r.wrapT=bs,r.colorSpace=Nt,r}class dm{constructor(e=Math.random){this.random=e,this.cache=new Map}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.#t(e);return this.cache.set(e,t),t}sign(e,t=""){return Io((n,i,r)=>{n.fillStyle=ie.dark,n.fillRect(0,0,i,r),n.strokeStyle=ie.pale,n.lineWidth=3,n.strokeRect(4,4,i-8,r-8),n.fillStyle=ie.white,n.font="bold 25px monospace",n.fillText(e,14,32),n.fillStyle=ie.orange,n.font="bold 11px monospace",n.fillText(t,15,53)},256,64)}#t(e){const t=ie,n=this.random;return Io(i=>{if(e==="industrialWall"){i.fillStyle=t.light,i.fillRect(0,0,64,64),i.fillStyle=t.steel;for(let r=0;r<64;r+=16)i.fillRect(0,r,64,2);i.fillStyle=t.dark;for(let r=0;r<64;r+=16)i.fillRect(r,0,2,64);i.fillStyle=t.rust,i.fillRect(0,33,64,7),i.fillStyle=t.orange,i.fillRect(0,33,64,2),i.fillStyle=t.pale;for(let r=0;r<35;r++)i.fillRect(n()*64|0,n()*31|0,1,1)}else if(e==="archiveWall"){i.fillStyle=t.slate,i.fillRect(0,0,64,64),i.fillStyle=t.steel;for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);i.fillStyle=t.yellow,i.fillRect(0,47,64,2),i.fillStyle=t.dark,i.fillRect(6,7,52,35),i.fillStyle=t.green;for(let r=0;r<14;r++)i.fillRect(10+r%7*7,11+(r/7|0)*11,2,2)}else if(e==="reactorWall"){i.fillStyle=t.dark,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=0;r<64;r+=8)i.fillRect(r,0,2,64);i.fillStyle=t.rust,i.fillRect(0,28,64,6),i.fillStyle=t.yellow;for(let r=-10;r<70;r+=15)i.save(),i.translate(r,29),i.rotate(-.7),i.fillRect(0,0,5,15),i.restore()}else if(e==="organicWall"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.brown;for(let r=0;r<64;r+=8){i.beginPath(),i.moveTo(0,r);for(let a=0;a<=64;a+=8)i.lineTo(a,r+Math.sin((a+r)*.2)*3);i.strokeStyle=t.brown,i.lineWidth=4,i.stroke()}i.fillStyle=t.green;for(let r=0;r<30;r++)i.fillRect(n()*64|0,n()*64|0,2,2);i.fillStyle=t.lime;for(let r=0;r<10;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="whiteWall"){i.fillStyle=t.white,i.fillRect(0,0,64,64),i.fillStyle=t.pale;for(let r=0;r<30;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="floor"){i.fillStyle=t.brown,i.fillRect(0,0,64,64),i.fillStyle=t.darkBrown;for(let r=0;r<64;r+=8)i.fillRect(0,r,64,1);for(let r=0;r<64;r+=16)i.fillRect(r,0,1,64);i.fillStyle=t.rust;for(let r=0;r<55;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="organicFloor"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.rust;for(let r=0;r<50;r++)i.fillRect(n()*64|0,n()*64|0,2,1);i.strokeStyle=t.green,i.lineWidth=2;for(let r=4;r<64;r+=12)i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(18,r+8,42,r-8,64,r+2),i.stroke()}else if(e==="ceiling"){i.fillStyle=t.steel,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=0;r<64;r+=16)i.fillRect(r,0,1,64);for(let r=0;r<64;r+=16)i.fillRect(0,r,64,1);i.fillStyle=t.pale;for(let r=0;r<20;r++)i.fillRect(n()*64|0,n()*64|0,1,1)}else if(e==="crate"){i.fillStyle=t.darkBrown,i.fillRect(0,0,64,64),i.fillStyle=t.rust,i.fillRect(5,5,54,54),i.fillStyle=t.brown,i.fillRect(9,9,46,46),i.fillStyle=t.darkBrown,i.fillRect(13,13,38,38),i.fillStyle=t.yellow;for(let r=-20;r<80;r+=18)i.save(),i.translate(r,4),i.rotate(.75),i.fillRect(0,0,6,78),i.restore();i.fillStyle=t.darkBrown,i.fillRect(14,14,36,36)}else if(e==="door")i.fillStyle=t.slate,i.fillRect(0,0,64,64),i.fillStyle=t.light,i.fillRect(4,4,56,56),i.fillStyle=t.dark,i.fillRect(8,8,48,48),i.fillStyle=t.steel,i.fillRect(11,11,42,42),i.fillStyle=t.rust,i.fillRect(0,30,64,9);else if(e==="server"){i.fillStyle=t.dark,i.fillRect(0,0,64,64),i.fillStyle=t.slate;for(let r=5;r<60;r+=10)i.fillRect(6,r,52,7);for(let r=8;r<60;r+=10)i.fillStyle=r%20?t.green:t.orange,i.fillRect(11,r,2,2),i.fillRect(17,r,2,2)}})}}class fm{constructor(){this.boxes=[]}clear(){this.boxes.length=0}addBox(e,t,n,i,r="wall"){const a={minX:e-n/2,maxX:e+n/2,minZ:t-i/2,maxZ:t+i/2,active:!0,tag:r};return this.boxes.push(a),a}blocked(e,t,n=.32){return this.boxes.some(i=>i.active&&e>i.minX-n&&e<i.maxX+n&&t>i.minZ-n&&t<i.maxZ+n)}move(e,t,n,i=.32){const r=e.x+t;this.blocked(r,e.z,i)||(e.x=r);const a=e.z+n;return this.blocked(e.x,a,i)||(e.z=a),e}segmentHitsWall(e,t){const n=Math.max(2,Math.ceil(Math.hypot(t.x-e.x,t.z-e.z)/.2));for(let i=1;i<=n;i++){const r=i/n,a=e.x+(t.x-e.x)*r,o=e.z+(t.z-e.z)*r;if(this.boxes.some(l=>l.active&&a>l.minX&&a<l.maxX&&o>l.minZ&&o<l.maxZ))return!0}return!1}}class pm{constructor(e){this.events=e,this.items=[],this.tmp=new R}clear(){this.items.length=0}add({id:e,position:t,radius:n=1.1,mode:i="interact",prompt:r="E — ВЗАИМОДЕЙСТВИЕ",enabled:a=!0,onUse:o}){const l={id:e,position:t.clone?t.clone():new R(t.x,t.y??0,t.z),radius:n,mode:i,prompt:r,enabled:a,consumed:!1,onUse:o};return this.items.push(l),l}update(e,t,n){let i=null,r=1/0;for(const a of this.items){if(!a.enabled||a.consumed)continue;this.tmp.copy(e).sub(a.position),this.tmp.y=0;const o=this.tmp.length();if(!(o>a.radius)){if(a.mode==="pickup"){a.onUse?.(a)!==!1&&(a.consumed=!0,this.events?.emit("interaction:used",{id:a.id,mode:a.mode}));continue}o<r&&(i=a,r=o)}}n.setInteractionPrompt(i?.prompt??""),i&&t.consume("KeyE")&&(i.onUse?.(i)===!0&&(i.consumed=!0),this.events?.emit("interaction:used",{id:i.id,mode:i.mode}))}}class mm{constructor(){this.triggers=[]}clear(){this.triggers.length=0}add({id:e,minX:t,maxX:n,minZ:i,maxZ:r,once:a=!0,onEnter:o}){const l={id:e,minX:t,maxX:n,minZ:i,maxZ:r,once:a,onEnter:o,inside:!1,consumed:!1};return this.triggers.push(l),l}update(e){for(const t of this.triggers){if(t.consumed)continue;const n=e.x>=t.minX&&e.x<=t.maxX&&e.z>=t.minZ&&e.z<=t.maxZ;n&&!t.inside&&(t.onEnter?.(t),t.once&&(t.consumed=!0)),t.inside=n}}}class gm{constructor(e=4){this.capacity=e,this.slots=Array.from({length:e},()=>null)}find(e){return this.slots.find(t=>t?.id===e)??null}count(e){return this.find(e)?.count??0}canAdd(e){return!!(this.find(e)||this.slots.some(t=>t===null))}add(e,t=1,n={}){if(t<=0)return!0;const i=this.find(e);if(i)return i.count+=t,!0;const r=this.slots.findIndex(a=>a===null);return r<0?!1:(this.slots[r]={id:e,count:t,...n},!0)}remove(e,t=1){const n=this.slots.findIndex(r=>r?.id===e);if(n<0)return!1;const i=this.slots[n];return i.count<t?!1:(i.count-=t,i.count<=0&&(this.slots[n]=null),!0)}has(e,t=1){return this.count(e)>=t}snapshot(){return this.slots.map(e=>e?{...e}:null)}}class _m{constructor(e){this.events=e,this.value=0,this.inhalerPulse=0,this.hudLieTimer=0,this.lastTier=0}add(e,t="exposure"){const n=this.value;this.value=Math.max(0,Math.min(100,this.value+e)),this.value!==n&&this.events?.emit("infection:changed",{value:this.value,reason:t}),this.#t()}reduce(e,t="treatment"){this.add(-e,t)}useInhaler(){this.reduce(32,"inhaler"),this.inhalerPulse=5,this.hudLieTimer=3.2,this.events?.emit("infection:inhaler",{value:this.value})}update(e){this.inhalerPulse=Math.max(0,this.inhalerPulse-e),this.hudLieTimer=Math.max(0,this.hudLieTimer-e)}get tier(){return this.value>=80?4:this.value>=60?3:this.value>=40?2:this.value>=20?1:0}get distortion(){return Math.min(1,this.value/100+(this.inhalerPulse>0?.18:0))}get hudIsLying(){return this.hudLieTimer>0||this.value>=72}#t(){const e=this.tier;e!==this.lastTier&&(this.events?.emit("infection:tier",{from:this.lastTier,to:e,value:this.value}),this.lastTier=e)}}class vm{constructor(e){this.events=e,this.unlocked=new Set(["pm"]),this.slots=["pm",null],this.activeSlot=0,this.ammo={shells:0,rifle:0,cells:0,fuel:0,fungalShell:0,sporeCharge:0,resonance:0}}unlock(e,t={}){if(!Oi[e])throw new Error(`Unknown weapon ${e}`);const n=!this.unlocked.has(e);this.unlocked.add(e);for(const[i,r]of Object.entries(t))this.addAmmo(i,r);e!=="pm"&&(this.slots[1]=e,this.activeSlot=1),n&&this.events?.emit("weapon:unlocked",{id:e,weapon:Oi[e]})}equip(e,t){return e<0||e>1||!this.unlocked.has(t)?!1:(this.slots[e]=t,this.activeSlot=e,this.events?.emit("weapon:equipped",{slotIndex:e,weaponId:t}),!0)}select(e){this.slots[e]&&(this.activeSlot=e)}get activeId(){return this.slots[this.activeSlot]??"pm"}get active(){return Oi[this.activeId]}addAmmo(e,t){this.ammo[e]=(this.ammo[e]??0)+t}canFire(e=this.active){return e.ammo?(this.ammo[e.ammo]??0)>0:!0}consumeAmmo(e=this.active){return e.ammo?this.canFire(e)?(this.ammo[e.ammo]--,!0):!1:!0}ammoFor(e=this.active){return e.ammo?this.ammo[e.ammo]??0:1/0}}class xm{constructor(e){this.events=e,this.text="",this.target=null,this.id=null}set(e,t,n=null){this.id=e,this.text=t,this.target=n?new R(n.x,n.y??0,n.z):null,this.events?.emit("objective:changed",{id:e,text:t,target:this.target})}clear(){this.set(null,"",null)}}const Uo=Object.freeze({perimeter:Object.freeze({to:"archive",requires:["shiftPass"]}),archive:Object.freeze({to:"reactor",requires:["archiveData","archiveDefense"]}),reactor:Object.freeze({to:"womb",requires:["reactorCore"]}),womb:Object.freeze({to:"silence",requires:["dossier"]})});class Mm{constructor(e=null){this.events=e,this.flags=new Set,this.counters=new Map}add(e){return this.flags.has(e)?!1:(this.flags.add(e),this.events?.emit("progression:flag",{flag:e}),!0)}has(e){return this.flags.has(e)}delete(e){return this.flags.delete(e)}increment(e,t=1){const n=(this.counters.get(e)??0)+t;return this.counters.set(e,n),this.events?.emit("progression:counter",{counter:e,value:n}),n}count(e){return this.counters.get(e)??0}transitionContract(e){return Uo[e]??null}missingForTransition(e,t=null){const n=Uo[e];return!n||t&&n.to!==t?["invalid-transition"]:n.requires.filter(i=>!this.flags.has(i))}canTransition(e,t=null){return this.missingForTransition(e,t).length===0}assertTransition(e,t){const n=this.missingForTransition(e,t);if(n.length>0){const i=new Error(`Transition ${e} -> ${t} blocked: ${n.join(", ")}`);throw i.code="PROGRESSION_GATE",i.missing=n,i}return!0}snapshot(){return{flags:[...this.flags].sort(),counters:Object.fromEntries([...this.counters.entries()].sort(([e],[t])=>e.localeCompare(t)))}}}const gr={perimeter:{number:1,title:"ПЕРИМЕТР",contour:"1-Й КОНТУР",palette:"industrial"},archive:{number:2,title:"АРХИВ",contour:"1→2-Й КОНТУР",palette:"archive"},reactor:{number:3,title:"РЕАКТОРНЫЙ БЛОК",contour:"2-Й КОНТУР",palette:"reactor"},womb:{number:4,title:"УТРОБА",contour:"2→3-Й КОНТУР",palette:"organic"},silence:{number:5,title:"БЕЛОЕ БЕЗМОЛВИЕ",contour:"3-Й КОНТУР",palette:"white"}},Sm={perimeter:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель, вход подтверждён. Связь нестабильна. Приказ: извлечь журнал аварии и открыть путь во второй сектор."},{speaker:"ОПЕРАТИВНИК",text:"Вижу КПП. Воздух чистый по прибору. Пока."}],firstSpore:[{speaker:"БИОСКАНЕР",text:"Образец О-41 жизнеспособен вне носителя. Споры пригодны как реагент."},{speaker:"К.О.Н.Т.У.Р.",text:"Собирайте. Полевой ингалятор допускается по протоколу."}],slimeEcho:[{speaker:"ОПЕРАТИВНИК",text:"Слизь тёплая. Не реагирует на перчатку — только на кожу."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"ключ внизу. человек в форме не дошёл до двери"},{speaker:"БИОСКАНЕР",text:"Зафиксирован краткий нейроакустический выброс. Источник: контактная масса О-41."}],pass:[{speaker:"ОПЕРАТИВНИК",text:"Пропуск начальника смены. Значит, персонал не успел эвакуироваться через шлюз."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"не туда смотришь"}]},archive:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Архив и серверная. Найдите запись о происхождении штамма. Не задерживайтесь."}],signalLog:[{speaker:"ЗАПИСЬ / Д-Р ЛЕБЕДЕВ",text:"Это не инфекция. Повторяю: структура пытается модулировать сигнал через сон. Она отвечает на вопросы раньше, чем мы их задаём."},{speaker:"К.О.Н.Т.У.Р.",text:"Запись повреждена. Термин «сигнал» считать следствием интоксикации персонала."}],slimeConduit:[{speaker:"ОПЕРАТИВНИК",text:"Слизь ушла в кабель-канал. Пульс совпал с частотой серверных реле."},{speaker:"О-41",text:"коридор можно пройти не три раза. если помнить куда он возвращает"},{speaker:"БИОСКАНЕР",text:"Топологическая ошибка стабилизировалась на один цикл."}],loop1:[{speaker:"ОПЕРАТИВНИК",text:"Я уже проходил этот шкаф."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"ты проходил здесь до того как пришёл"}],loop2:[{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель? Ответьте. Телеметрия показывает, что вы стоите на месте."}]},reactor:{intro:[{speaker:"К.О.Н.Т.У.Р.",text:"Реакторный блок. Видимость ниже нормы. Перейдите на слух и биосканер."}],wailer:[{speaker:"БИОСКАНЕР",text:"АКУСТИЧЕСКИЙ РЕЗОНАНС. КОМПАС НЕДОСТОВЕРЕН."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"они кричат потому что слышат тебя с другой стороны"}],slimeVeil:[{speaker:"ОПЕРАТИВНИК",text:"В слое слизи крик будто исчез. Она не глушит звук — она убирает меня из отражения."},{speaker:"О-41",text:"мы научились быть тихими когда ваши приборы начали слушать"}],coreDead:[{speaker:"ОПЕРАТИВНИК",text:"Ядро нейтрализовано. Здесь мицелий использован как несущая структура."},{speaker:"К.О.Н.Т.У.Р.",text:"Изолируйте образец. Щит допустим. Не допускайте прямого контакта."}]},womb:{intro:[{speaker:"ОПЕРАТИВНИК",text:"Бетон закончился. Это уже не НИИ."},{speaker:"К.О.Н.Т.У.Р.",text:"По планам там технический тоннель. Продолжайте по планам."}],call1:[{speaker:"О-41",text:"иди по мокрому следу. сухие стены принадлежат тем кто закрыл тебя здесь"},{speaker:"ОПЕРАТИВНИК",text:"Она показывает маршрут. Или заставляет меня считать его своим."}],call2:[{speaker:"О-41",text:"ты можешь пройти мимо. мы запомним и это"},{speaker:"БИОСКАНЕР",text:"Заражение растёт. Одновременно падает уровень стресс-маркеров."}],choir:[{speaker:"О-41",text:"вот часть сигнала. не смысл — только направление. остальное ты должен решить сам"},{speaker:"ОПЕРАТИВНИК",text:"Я запомнил последовательность. Она похожа на частоту нашего служебного канала."}],dossier:[{speaker:"ОПЕРАТИВНИК",text:"Личное дело… моё. «Предрасположенность к резонансу О-41». Дата — за два года до аварии."},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"ты не был выбран после аварии"},{speaker:"К.О.Н.Т.У.Р.",text:"Скальпель, немедленно уничтожьте документ. Это приказ."}]},silence:{intro:[{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"мы не звали вас чтобы вы нас спасли"},{speaker:"НЕИЗВЕСТНЫЙ СИГНАЛ",text:"мы звали потому что вы ещё можете услышать то что идёт следом"},{speaker:"О-41",text:"мы были сетью здесь до ваших шахт и реакторов. мы увидели то что идёт к вам и пытались показать"},{speaker:"К.О.Н.Т.У.Р.",text:"Зачистной заряд готов. Директива 041: уничтожить центральную массу, данные предупреждения и всех носителей. Причина: исключить распространение сведений за периметр."}],approach:[{speaker:"О-41",text:"иди к центру. мы покажем только то что ты уже собрал по дороге"},{speaker:"К.О.Н.Т.У.Р.",text:"Не отвечайте источнику. Повторяю: не формулируйте желания и не подтверждайте предложения."}],phase2:[{speaker:"О-41",text:"одна форма не является одним существом"}],phase3:[{speaker:"О-41",text:"они уже видели этот мир через нас"}],choice:[{speaker:"К.О.Н.Т.У.Р.",text:"СЖЕЧЬ. Подтвердите зачистку."},{speaker:"О-41",text:"СЛИТЬСЯ. Унести предупреждение за периметр."}],broadcastPath:[{speaker:"БИОСКАНЕР",text:"Совпадение: фрагменты резонанса + архив О-41 + канал 167.05. Возможна передача без слияния."},{speaker:"ОПЕРАТИВНИК",text:"Третий вариант. Значит, ни штаб, ни сеть не сказали всей правды."}],severPath:[{speaker:"БИОСКАНЕР",text:"Низкая степень резонанса. Возможен локальный разрыв связи без детонации центральной массы."}]}};class Em{constructor(e,t){this.events=e,this.hud=t,this.queue=[],this.current=null,this.timer=0,this.seen=new Set}play(e,t,{once:n=!0}={}){const i=`${e}:${t}`;if(n&&this.seen.has(i))return!1;const r=Sm[e]?.[t];return r?(n&&this.seen.add(i),this.queue.push(...r.map(a=>({...a,key:i}))),this.current||this.#t(),this.events?.emit("narrative:beat",{levelId:e,beatId:t}),!0):!1}update(e){this.current&&(this.timer-=e,this.timer<=0&&this.#t())}skip(){this.current&&this.#t()}interrupt(){this.queue.length=0,this.current=null,this.timer=0,this.hud.hideSubtitle(),this.events?.emit("narrative:interrupt")}#t(){if(this.current=this.queue.shift()??null,!this.current){this.hud.hideSubtitle(),this.events?.emit("narrative:end");return}const e=Math.max(2.4,Math.min(7.5,this.current.text.length*.052));this.timer=e,this.hud.showSubtitle(this.current.speaker,this.current.text),this.events?.emit("narrative:line",{...this.current,duration:e})}}class ym{constructor({camera:e,input:t,collision:n,events:i,infection:r}){this.camera=e,this.input=t,this.collision=n,this.events=i,this.infection=r,this.position=new R(0,1.55,0),this.yaw=Math.PI,this.pitch=0,this.maxHealth=8,this.health=this.maxHealth,this.baseSpeed=3.55,this.radius=.31,this.slowTimer=0,this.shieldTimer=0,this.dead=!1,this.recoil=0,this.wailTimer=0}resetForLevel(e,t=Math.PI){this.position.set(e.x,1.55,e.z),this.yaw=t,this.pitch=0,this.camera.position.copy(this.position)}update(e,t=!1){if(this.slowTimer=Math.max(0,this.slowTimer-e),this.shieldTimer=Math.max(0,this.shieldTimer-e),this.wailTimer=Math.max(0,this.wailTimer-e),this.recoil=Math.max(0,this.recoil-e*5.5),t||this.dead){this.camera.position.copy(this.position);return}const n=this.input.consumeLook(e);this.yaw-=n.x*.00205,this.pitch-=n.y*.00205,this.pitch=yc.clamp(this.pitch,-1.3,1.3);const i=this.wailTimer>0?Math.sin(performance.now()*.015)*.025*Math.min(1,this.wailTimer):0;this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch-this.recoil*.04,this.camera.rotation.z=i;const r=new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),a=new R(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=this.input.movement(),l=new R().addScaledVector(r,o.y).addScaledVector(a,o.x);if(l.lengthSq()>0){const c=this.slowTimer>0?.45:1,u=this.baseSpeed*c;this.collision.move(this.position,l.x*u*e,l.z*u*e,this.radius)}this.camera.position.copy(this.position)}damage(e,t="unknown"){if(this.dead)return;const n=this.shieldTimer>0?Math.max(.25,e*.35):e;this.health=Math.max(0,this.health-n),this.infection.add(t==="wailer"?8:3.5*e,t),this.events.emit("player:damaged",{amount:n,source:t,health:this.health}),this.health<=0&&(this.dead=!0,this.events.emit("player:died",{source:t}))}heal(e){this.health=Math.min(this.maxHealth,this.health+e),this.events.emit("player:healed",{amount:e,health:this.health})}slow(e){this.slowTimer=Math.max(this.slowTimer,e),this.events.emit("player:slowed",{seconds:e})}activateShield(e=5){this.shieldTimer=Math.max(this.shieldTimer,e),this.events.emit("player:shield",{seconds:e})}applyWail(e=2.4){this.wailTimer=Math.max(this.wailTimer,e)}addRecoil(e=1){this.recoil=Math.min(2,this.recoil+e)}}function It(s,e=!0){return new $e({color:s,fog:e})}function yt(s,e,t,n){const i=new Te(new De(...e),n);return i.position.set(...t),s.add(i),i}function gs(s,e,t=1.1,n=1.8){for(let i=0;i<e;i++){const r=new Te(new _t(.07+i%2*.04,6,4),It(i%3===0?ie.lime:ie.green));r.position.set((Math.random()-.5)*.5,t+Math.random()*(n-t),(Math.random()-.5)*.35),s.add(r)}}class bm{create(e){const t=new Tt;t.userData.enemyType=e;const n=It(ie.steel),i=It("#879067"),r=It(ie.lime),a={};if(e==="sporecarrier")a.torso=yt(t,[.58,.8,.34],[0,1.12,0],n),a.head=yt(t,[.36,.36,.34],[0,1.72,0],i),a.armL=yt(t,[.16,.72,.18],[-.4,1.08,0],i),a.armR=yt(t,[.16,.72,.18],[.4,1.08,0],i),a.legL=yt(t,[.2,.72,.22],[-.18,.42,0],n),a.legR=yt(t,[.2,.72,.22],[.18,.42,0],n),gs(t,7);else if(e==="whipster")a.torso=yt(t,[.48,.88,.28],[0,1.1,0],It(ie.darkGreen)),a.head=yt(t,[.32,.3,.3],[0,1.7,0],i),a.armL=yt(t,[.12,.9,.12],[-.36,1.13,0],r),a.armR=yt(t,[.12,.9,.12],[.36,1.13,0],r),a.legL=yt(t,[.17,.76,.18],[-.15,.42,0],n),a.legR=yt(t,[.17,.76,.18],[.15,.42,0],n),gs(t,9);else if(e==="wailer")a.torso=yt(t,[.68,.72,.4],[0,1,0],It(ie.dark)),a.head=new Te(new _t(.36,7,5),It(ie.pale)),a.head.position.set(0,1.65,0),t.add(a.head),a.mouth=yt(t,[.3,.07,.05],[0,1.58,-.31],It(ie.black)),a.legL=yt(t,[.2,.68,.22],[-.2,.38,0],n),a.legR=yt(t,[.2,.68,.22],[.2,.38,0],n),gs(t,10,1.3,2);else if(e==="hive"){const o=new Te(new _t(.72,8,6),It(ie.brown));o.position.y=1.1,o.scale.set(.85,1.35,.85),t.add(o),a.torso=o,a.legL=yt(t,[.3,.85,.32],[-.3,.42,0],It(ie.darkBrown)),a.legR=yt(t,[.3,.85,.32],[.3,.42,0],It(ie.darkBrown)),gs(t,22,.7,2)}else if(e==="irritantCore"){const o=new Te(new Nn(.9,1),It(ie.rust));o.position.y=1.2,t.add(o),a.torso=o;for(let l=0;l<10;l++){const c=new Te(new an(.06,.13,1.2,5),r);c.position.set(Math.cos(l*.63)*.75,1.2,Math.sin(l*.63)*.75),c.rotation.z=Math.PI/2.7,c.rotation.y=l*.63,t.add(c)}}else if(e==="collective"){const o=new Te(new Nn(1.25,2),It(ie.white));o.position.y=1.55,t.add(o),a.torso=o;const l=new Te(new Nn(.62,1),It(ie.lime));l.position.y=1.55,t.add(l),a.inner=l;for(let c=0;c<12;c++){const u=new Te(new Gi(1.45+c%3*.15,.035,4,24),It(c%2?ie.pale:ie.green));u.position.y=1.55,u.rotation.x=Math.random()*Math.PI,u.rotation.y=Math.random()*Math.PI,t.add(u)}}return{group:t,parts:a}}}const vn={sporecarrier:{hp:3,speed:1.05,radius:.42,detect:11,melee:1.02,damage:1},whipster:{hp:4,speed:.85,radius:.38,detect:13,preferred:5.5,damage:1},wailer:{hp:3,speed:.55,radius:.42,detect:12,preferred:6.5,damage:1},hive:{hp:10,speed:.58,radius:.72,detect:13,melee:1.35,damage:2},irritantCore:{hp:14,speed:0,radius:1,detect:14,damage:1},collective:{hp:30,speed:0,radius:1.35,detect:30,damage:1}};function No(s){return new $e({color:s,fog:!0})}class Tm{constructor({scene:e,events:t,collision:n,onPlayerDamage:i,onPlayerSlow:r,onSporeDrop:a}){this.scene=e,this.events=t,this.collision=n,this.onPlayerDamage=i,this.onPlayerSlow=r,this.onSporeDrop=a,this.factory=new bm,this.enemies=[],this.projectiles=[],this.time=0,this.nextId=1,this.hiveDistortion=0,this.wailDistortion=0,this.bossPhase=1}clear(){for(const e of this.enemies)this.scene.remove(e.group);for(const e of this.projectiles)this.scene.remove(e.mesh);this.enemies.length=0,this.projectiles.length=0,this.hiveDistortion=0,this.wailDistortion=0,this.bossPhase=1}spawn(e,t,n={}){const i=this.factory.create(e),r=vn[e];if(!r)throw new Error(`Unknown enemy type: ${e}`);i.group.position.set(t.x,0,t.z),this.scene.add(i.group);const a={id:this.nextId++,type:e,group:i.group,parts:i.parts,hp:n.hp??r.hp,maxHp:n.hp??r.hp,speed:n.speed??r.speed,radius:r.radius,alive:!0,attackCooldown:.4+Math.random(),abilityCooldown:1+Math.random(),voiceCooldown:2.5+Math.random()*4,slowTimer:0,phase:Math.random()*Math.PI*2,narrativeTag:n.narrativeTag??null};return this.enemies.push(a),a}alive(e=null){return this.enemies.filter(t=>t.alive&&(!e||t.type===e))}getBoss(){return this.enemies.find(e=>e.alive&&e.type==="collective")??null}update(e,t){this.time+=e,this.playerPosition=t,this.hiveDistortion=0,this.wailDistortion=Math.max(0,this.wailDistortion-e*.45);for(const n of this.enemies){if(!n.alive)continue;n.attackCooldown-=e,n.abilityCooldown-=e,n.voiceCooldown-=e,n.slowTimer=Math.max(0,n.slowTimer-e),n.phase+=e*6,this.#o(n);const i=t.x-n.group.position.x,r=t.z-n.group.position.z,a=Math.hypot(i,r);if(a<.001)continue;const o=i/a,l=r/a;n.group.rotation.y=Math.atan2(o,l),a<10&&n.voiceCooldown<=0&&n.type!=="collective"&&n.type!=="irritantCore"&&(this.events.emit("enemy:voice",{type:n.type,enemyId:n.id,distance:a,position:n.group.position.clone()}),n.voiceCooldown=5.5+Math.random()*6.5),n.type==="sporecarrier"?(this.#t(n,o,l,a,e,vn.sporecarrier.melee),a<=vn.sporecarrier.melee&&n.attackCooldown<=0&&(this.onPlayerDamage(vn.sporecarrier.damage,"sporecarrier"),n.attackCooldown=.95)):n.type==="whipster"?(this.#s(n,o,l,a,e,4.2,7),a<9&&n.abilityCooldown<=0&&(this.#i(n,t,{speed:6.5,color:5617226,damage:0,slow:2.2,radius:.15}),n.abilityCooldown=2.1)):n.type==="wailer"?(this.#s(n,o,l,a,e,5.2,8),a<9&&n.abilityCooldown<=0&&(this.wailDistortion=1,this.events.emit("enemy:wail",{enemyId:n.id,distance:a,position:n.group.position.clone()}),a<5.2&&this.onPlayerDamage(1,"wailer"),n.abilityCooldown=4.2)):n.type==="hive"?(this.#t(n,o,l,a,e,vn.hive.melee),this.hiveDistortion=Math.max(this.hiveDistortion,Math.max(0,1-a/6)),a<=vn.hive.melee&&n.attackCooldown<=0&&(this.onPlayerDamage(vn.hive.damage,"hive"),n.attackCooldown=1.45)):n.type==="irritantCore"?a<12&&n.abilityCooldown<=0&&(this.#n(n,t,5),n.abilityCooldown=3.1):n.type==="collective"&&this.#r(n,t,a)}this.#e(e,t)}raycast(e,t,n,i=()=>!0){let r=null,a=n+1;for(const o of this.enemies){if(!o.alive||!i(o))continue;const l=o.type==="collective"?1.55:o.type==="irritantCore"?1.2:o.type==="hive"?1.15:1.3,c=new R(o.group.position.x,l,o.group.position.z),d=c.clone().sub(e).dot(t);if(d<0||d>n||d>=a)continue;const h=e.clone().addScaledVector(t,d),p=o.type==="collective"?o.radius*1.2:o.radius+.18;h.distanceTo(c)<=p&&(r=o,a=d)}return r?{enemy:r,distance:a}:null}damage(e,t,n="pm"){return e?.alive?e.type==="collective"&&n!=="resonator"?(n==="fungus"&&(e.slowTimer=Math.max(e.slowTimer,2.5)),this.events.emit("boss:immune",{source:n}),{applied:!1,killed:!1}):(e.hp-=t,this.events.emit("enemy:damaged",{enemy:e,amount:t,source:n}),e.hp<=0?(this.#l(e,n),{applied:!0,killed:!0}):(e.type==="collective"&&this.#a(e),{applied:!0,killed:!1})):{applied:!1,killed:!1}}slowInRadius(e,t,n){for(const i of this.enemies)i.alive&&i.group.position.distanceTo(e)<=t&&(i.slowTimer=Math.max(i.slowTimer,n))}#t(e,t,n,i,r,a){if(i>vn[e.type].detect||i<=a)return;const o=e.slowTimer>0?.28:1,l=e.speed*o*r,c=e.group.position.x+t*l,u=e.group.position.z+n*l;this.collision.blocked(c,u,e.radius*.55)||(e.group.position.x=c,e.group.position.z=u)}#s(e,t,n,i,r,a,o){if(i>vn[e.type].detect)return;const l=e.slowTimer>0?.28:1;let c=0;if(i>o?c=1:i<a&&(c=-1),!c)return;const u=e.speed*l*r*c,d=e.group.position.x+t*u,h=e.group.position.z+n*u;this.collision.blocked(d,h,e.radius*.5)||(e.group.position.x=d,e.group.position.z=h)}#i(e,t,n){const i=new R(e.group.position.x,1.2,e.group.position.z),r=t.clone().sub(i).normalize(),a=new Te(new _t(n.radius??.12,6,4),No(n.color??5617226));a.position.copy(i),this.scene.add(a),this.projectiles.push({mesh:a,velocity:r.multiplyScalar(n.speed??6),ttl:4,damage:n.damage??1,slow:n.slow??0,radius:n.radius??.12}),this.events.emit("enemy:attack",{type:"projectile",position:i.clone()})}#n(e,t,n){this.events.emit("enemy:attack",{type:e.type==="collective"?"collectiveBurst":"radialBurst",position:e.group.position.clone()});const i=Math.atan2(t.x-e.group.position.x,t.z-e.group.position.z);for(let r=0;r<n;r++){const a=i+(r-(n-1)/2)*.2,o=new R(e.group.position.x,1.25,e.group.position.z),l=new R(Math.sin(a),0,Math.cos(a)),c=new Te(new _t(.13,6,4),No(13660213));c.position.copy(o),this.scene.add(c),this.projectiles.push({mesh:c,velocity:l.multiplyScalar(5.5),ttl:4,damage:1,slow:.4,radius:.13})}}#e(e,t){for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.ttl-=e,i.mesh.position.addScaledVector(i.velocity,e);const r=i.mesh.position.distanceTo(t);let a=i.ttl<=0;!a&&r<.52&&(i.damage>0&&this.onPlayerDamage(i.damage,"projectile"),i.slow>0&&this.onPlayerSlow(i.slow),a=!0),!a&&this.collision.blocked(i.mesh.position.x,i.mesh.position.z,.05)&&(a=!0),a&&(this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}#o(e){const t=Math.sin(e.phase)*.42;if(e.parts.armL&&(e.parts.armL.rotation.x=t),e.parts.armR&&(e.parts.armR.rotation.x=-t),e.parts.legL&&(e.parts.legL.rotation.x=-t*.7),e.parts.legR&&(e.parts.legR.rotation.x=t*.7),e.type==="irritantCore"&&e.parts.torso){const n=1+Math.sin(this.time*3.2)*.08;e.parts.torso.scale.setScalar(n),e.parts.torso.rotation.y+=.01}if(e.type==="collective"&&(e.group.rotation.y+=.004*this.bossPhase,e.parts.inner)){const n=.8+Math.sin(this.time*4)*.18;e.parts.inner.scale.setScalar(n)}}#r(e,t,n){this.#a(e),!(e.abilityCooldown>0)&&(this.bossPhase===1?(this.#n(e,t,3),this.alive("sporecarrier").length<3&&(this.spawn("sporecarrier",{x:e.group.position.x+3,z:e.group.position.z+2}),this.spawn("sporecarrier",{x:e.group.position.x-3,z:e.group.position.z-2})),e.abilityCooldown=3):this.bossPhase===2?(this.wailDistortion=1,this.events.emit("enemy:wail",{enemyId:e.id,boss:!0,distance:n,position:e.group.position.clone()}),this.#n(e,t,7),e.abilityCooldown=2.6):(this.hiveDistortion=1,this.#n(e,t,9),this.alive("whipster").length<2&&(this.spawn("whipster",{x:e.group.position.x+4,z:e.group.position.z}),this.spawn("whipster",{x:e.group.position.x-4,z:e.group.position.z})),this.alive("hive").length<1&&this.spawn("hive",{x:e.group.position.x,z:e.group.position.z+5}),e.abilityCooldown=2))}#a(e){const t=e.hp/e.maxHp,n=t<=.33?3:t<=.66?2:1;n!==this.bossPhase&&(this.bossPhase=n,this.events.emit("boss:phase",{phase:n,enemy:e}))}#l(e,t){e.alive=!1;const n=e.group.position.clone();if(this.scene.remove(e.group),e.type==="sporecarrier")this.onSporeDrop(n,1+(Math.random()<.5?1:0)),this.playerPosition&&this.playerPosition.distanceTo(n)<1.55&&(this.onPlayerDamage(1,"sporeBurst"),this.events.emit("enemy:sporeBurst",{position:n.clone()}));else if(e.type==="hive"){this.onSporeDrop(n,2);for(let i=0;i<2+(Math.random()<.5?1:0);i++)this.spawn("sporecarrier",{x:n.x+(Math.random()-.5)*2,z:n.z+(Math.random()-.5)*2})}else e.type==="irritantCore"?this.onSporeDrop(n,4):e.type!=="collective"&&this.onSporeDrop(n,1);this.events.emit("enemy:killed",{enemy:e,source:t,position:n})}}class wm{constructor({scene:e,inventory:t,infection:n,events:i}){this.scene=e,this.inventory=t,this.infection=n,this.events=i,this.items=[],this.geometry=new _t(.19,7,5),this.material=new $e({color:ie.lime,fog:!0}),this.coreMaterial=new $e({color:ie.yellow,fog:!0})}clear(){for(const e of this.items)this.scene.remove(e.group);this.items.length=0}spawn(e,t=1){for(let n=0;n<t;n++){const i=new Tt;i.add(new Te(this.geometry,this.material));const r=new Te(new _t(.065,5,4),this.coreMaterial);i.add(r),i.position.set(e.x+(Math.random()-.5)*.65,.28,e.z+(Math.random()-.5)*.65),i.userData.phase=Math.random()*Math.PI*2,this.scene.add(i),this.items.push({group:i})}}update(e,t){for(let n=this.items.length-1;n>=0;n--){const i=this.items[n],r=1+Math.sin(e*4+i.group.userData.phase)*.15;i.group.scale.setScalar(r),i.group.rotation.y=e*.6;const a=t.x-i.group.position.x,o=t.z-i.group.position.z;if(!(a*a+o*o>.75*.75)){if(!this.inventory.add("spores",1,{name:"СПОРЫ О-41"})){this.events.emit("inventory:full",{item:"spores"});continue}this.infection.add(1.5,"sporePickup"),this.events.emit("spore:collected",{total:this.inventory.count("spores")}),this.scene.remove(i.group),this.items.splice(n,1)}}}}class Am{constructor({scene:e,camera:t,input:n,belt:i,player:r,enemies:a,collision:o,events:l,weaponView:c}){this.scene=e,this.camera=t,this.input=n,this.belt=i,this.player=r,this.enemies=a,this.collision=o,this.events=l,this.weaponView=c,this.cooldown=0,this.tracers=[],this.fungal=[],this.flames=[],this.tracerGeometry=new De(.045,.045,.18),this.tracerMaterial=new $e({color:ie.pale,fog:!0}),this.flameGeometry=new Nn(.11,1),this.flameLight=new Cs(16742936,0,7,2),this.scene.add(this.flameLight)}clear(){for(const e of this.tracers)this.scene.remove(e.mesh);for(const e of this.fungal)this.scene.remove(e.mesh);for(const e of this.flames)this.scene.remove(e.mesh);this.tracers.length=0,this.fungal.length=0,this.flames.length=0,this.flameLight.intensity=0,this.cooldown=0}update(e,t=!1){this.cooldown=Math.max(0,this.cooldown-e),this.#a(e),this.#l(e),this.#d(e),this.flameLight.intensity=Math.max(0,this.flameLight.intensity-e*7),this.weaponView.show(this.belt.activeId);const n=this.input.isMoving();if(this.weaponView.update(e,n&&!t),t||this.player.dead)return;this.input.consume("Digit1")&&this.belt.select(0),this.input.consume("Digit2")&&this.belt.select(1),(this.belt.active.automatic?this.input.fireHeld:this.input.consumeFirePressed())&&this.cooldown<=0&&this.fire()}fire(){const e=this.belt.active;return this.belt.consumeAmmo(e)?(this.cooldown=e.cooldown,this.player.addRecoil(e.id==="shotgun"?1.5:e.id==="ak"?.45:.75),this.weaponView.flash(),this.events.emit("weapon:fired",{weapon:e,ammo:this.belt.ammoFor(e)}),e.kind==="hitscan"||e.kind==="resonator"?this.#s(e):e.kind==="arc"?this.#n(e):e.kind==="flame"?this.#e(e):e.kind==="melee"?this.#i(e):e.kind==="fungalProjectile"&&this.#o(e),!0):(this.events.emit("weapon:empty",{weapon:e}),this.cooldown=.25,!1)}#t(e){const t=new R;return this.camera.getWorldDirection(t),t.x+=(Math.random()-.5)*e,t.y+=(Math.random()-.5)*e,t.z+=(Math.random()-.5)*e,t.normalize()}#s(e){for(let t=0;t<e.pellets;t++){const n=this.#t(e.spread),i=this.camera.position.clone(),r=this.enemies.raycast(i,n,e.range),a=i.clone().addScaledVector(n,r?.distance??e.range);!this.collision.segmentHitsWall(i,a)&&r&&this.enemies.damage(r.enemy,e.damage,e.id),this.#r(i,n,Math.min(r?.distance??e.range,7))}}#i(e){const t=this.#t(0),n=this.enemies.raycast(this.camera.position,t,e.range);n&&this.enemies.damage(n.enemy,e.damage,e.id)}#n(e){const t=this.#t(e.spread),n=this.camera.position.clone();this.flameLight.color.setHex(734e4),this.flameLight.position.copy(n).addScaledVector(t,1.1),this.flameLight.intensity=1.15;const i=this.enemies.raycast(n,t,e.range),r=n.clone().addScaledVector(t,i?.distance??e.range);if(!i||this.collision.segmentHitsWall(n,r)){this.#r(n,t,Math.min(e.range,8));return}this.enemies.damage(i.enemy,e.damage,e.id),this.#r(n,t,Math.min(i.distance,8));const a=this.enemies.alive().filter(o=>o!==i.enemy&&o.group.position.distanceTo(i.enemy.group.position)<3.3).sort((o,l)=>o.group.position.distanceTo(i.enemy.group.position)-l.group.position.distanceTo(i.enemy.group.position)).slice(0,2);for(const o of a){this.enemies.damage(o,e.damage*.52,e.id);const l=o.group.position.clone().sub(i.enemy.group.position).normalize();this.#r(i.enemy.group.position.clone().setY(1.1),l,Math.min(3.1,i.enemy.group.position.distanceTo(o.group.position)))}}#e(e){const t=this.camera.position.clone(),n=this.#t(e.spread);this.flameLight.color.setHex(16742936),this.flameLight.position.copy(t).addScaledVector(n,1.05),this.flameLight.intensity=1.85;for(let i=0;i<3;i++){const r=this.#t(e.spread*1.8),a=new $e({color:i===0?16769643:16739108,transparent:!0,opacity:.92,fog:!0,depthWrite:!1}),o=new Te(this.flameGeometry,a);o.position.copy(t).addScaledVector(n,.48+i*.12),this.scene.add(o),this.flames.push({mesh:o,material:a,velocity:r.multiplyScalar(5.2+Math.random()*3),ttl:.34+Math.random()*.18,maxTtl:.52,weapon:e,hit:new Set})}}#o(e){const t=this.#t(0),n=new Te(new _t(.15,7,5),new $e({color:ie.lime,fog:!0}));n.position.copy(this.camera.position).addScaledVector(t,.55),this.scene.add(n),this.fungal.push({mesh:n,velocity:t.multiplyScalar(7.2),ttl:2.3,weapon:e})}#r(e,t,n){const i=new Te(this.tracerGeometry,this.tracerMaterial);i.position.copy(e).addScaledVector(t,.45),i.quaternion.setFromUnitVectors(new R(0,0,1),t),this.scene.add(i),this.tracers.push({mesh:i,velocity:t.clone().multiplyScalar(24),ttl:Math.min(.18,n/24)})}#a(e){for(let t=this.tracers.length-1;t>=0;t--){const n=this.tracers[t];n.ttl-=e,n.mesh.position.addScaledVector(n.velocity,e),n.ttl<=0&&(this.scene.remove(n.mesh),this.tracers.splice(t,1))}}#l(e){for(let t=this.fungal.length-1;t>=0;t--){const n=this.fungal[t];n.ttl-=e,n.mesh.position.addScaledVector(n.velocity,e);let i=n.ttl<=0||this.collision.blocked(n.mesh.position.x,n.mesh.position.z,.08);if(!i){const r=this.enemies.enemies.find(a=>a.alive&&a.group.position.distanceTo(n.mesh.position)<a.radius+.25);r&&(this.enemies.damage(r,n.weapon.damage,"fungus"),i=!0)}i&&(this.enemies.slowInRadius(n.mesh.position,2.5,4.5),this.events.emit("weapon:fungalBurst",{position:n.mesh.position.clone()}),this.scene.remove(n.mesh),this.fungal.splice(t,1))}}#d(e){for(let t=this.flames.length-1;t>=0;t--){const n=this.flames[t];n.ttl-=e,n.velocity.y+=e*.7,n.mesh.position.addScaledVector(n.velocity,e);const i=Math.max(0,n.ttl/n.maxTtl);n.mesh.scale.setScalar(.55+(1-i)*1.5),n.material.opacity=i*.82;let r=n.ttl<=0||this.collision.blocked(n.mesh.position.x,n.mesh.position.z,.06);if(!r){for(const a of this.enemies.alive())if(!(n.hit.has(a.id)||a.group.position.distanceTo(n.mesh.position)>a.radius+.35)){n.hit.add(a.id),this.enemies.damage(a,n.weapon.damage/3,"flamethrower");break}}r&&(this.scene.remove(n.mesh),n.material.dispose(),this.flames.splice(t,1))}}}const Xn=s=>new $e({color:s,fog:!1,depthTest:!1,depthWrite:!1});function Ge(s,e,t,n,i,r,a=0,o=0,l=0){const c=new Te(e,t);return c.position.set(n,i,r),c.rotation.set(a,o,l),c.renderOrder=1e3,s.add(c),c}class Rm{constructor(e){this.camera=e,this.root=new Tt,this.root.position.set(.42,-.36,-.72),this.camera.add(this.root),this.current=null,this.muzzle=null,this.muzzleTimer=0,this.bob=0,this.show("pm")}show(e){if(e===this.current)return;this.current=e,this.root.clear(),this.muzzle=null;const t=Xn(ie.light),n=Xn(ie.dark),i=Xn(ie.brown),r=Xn(ie.green),a=Xn(ie.pale),o=Xn(ie.orange);e==="pm"?(Ge(this.root,new De(.25,.15,.58),t,0,.06,-.1),Ge(this.root,new De(.11,.1,.32),n,0,.05,-.52),Ge(this.root,new De(.17,.34,.19),i,0,-.17,.02,-.2),this.muzzle=Ge(this.root,new De(.13,.13,.09),o,0,.05,-.72)):e==="shotgun"?(Ge(this.root,new De(.18,.15,.78),n,0,.03,-.2),Ge(this.root,new De(.23,.16,.35),i,0,.01,.18),Ge(this.root,new De(.17,.31,.2),i,0,-.18,.19,-.18),this.muzzle=Ge(this.root,new De(.19,.15,.08),o,0,.03,-.63)):e==="ak"?(Ge(this.root,new De(.22,.19,.72),n,0,.02,-.14),Ge(this.root,new De(.09,.09,.55),t,0,.04,-.7),Ge(this.root,new De(.17,.35,.19),i,0,-.2,.03,-.2),Ge(this.root,new De(.22,.26,.15),i,0,-.18,-.22,.35),this.muzzle=Ge(this.root,new De(.13,.13,.08),o,0,.04,-.99)):e==="arcCutter"?(Ge(this.root,new De(.29,.22,.56),n,0,.02,-.1),Ge(this.root,new an(.08,.11,.48,6),a,0,.04,-.53,Math.PI/2),Ge(this.root,new Gi(.13,.035,5,12),r,0,.04,-.54,Math.PI/2),Ge(this.root,new De(.16,.34,.18),i,0,-.19,.05,-.18),this.muzzle=Ge(this.root,new _t(.11,6,4),r,0,.04,-.82)):e==="flamethrower"?(Ge(this.root,new an(.12,.16,.58,7),n,0,.02,-.16,Math.PI/2),Ge(this.root,new an(.1,.1,.72,7),t,0,.05,-.55,Math.PI/2),Ge(this.root,new _t(.16,7,5),i,0,-.12,.08),Ge(this.root,new De(.18,.34,.18),i,0,-.22,.11,-.18),this.muzzle=Ge(this.root,new Rs(.15,.35,6),o,0,.05,-.98,Math.PI/2)):e==="fungus"?(Ge(this.root,new an(.14,.18,.72,7),r,0,.02,-.18,Math.PI/2),Ge(this.root,new _t(.2,7,5),a,0,.04,-.55),Ge(this.root,new De(.17,.35,.2),i,0,-.22,.05,-.15),this.muzzle=Ge(this.root,new _t(.12,6,4),o,0,.04,-.78)):e==="drill"?(Ge(this.root,new De(.26,.3,.48),n,0,-.02,-.08),Ge(this.root,new Rs(.14,.68,8),a,0,.02,-.57,Math.PI/2),Ge(this.root,new _t(.1,6,4),r,.16,.1,-.05)):e==="resonator"&&(Ge(this.root,new De(.28,.22,.55),a,0,.01,-.12),Ge(this.root,new Gi(.19,.045,5,16),r,0,.05,-.47,Math.PI/2),Ge(this.root,new De(.16,.35,.18),n,0,-.2,.05,-.18),this.muzzle=Ge(this.root,new _t(.11,6,4),Xn(ie.white),0,.05,-.7)),this.muzzle&&(this.muzzle.visible=!1)}flash(){this.muzzle&&(this.muzzle.visible=!0,this.muzzleTimer=.055)}update(e,t){this.muzzleTimer=Math.max(0,this.muzzleTimer-e),this.muzzle&&this.muzzleTimer<=0&&(this.muzzle.visible=!1),this.bob+=e*(t?10:3),this.root.position.y=-.36+Math.sin(this.bob)*(t?.012:.003),this.root.position.x=.42+Math.cos(this.bob*.5)*(t?.008:.002)}}const _r=["perimeter","archive","reactor","womb","silence"];class Cm{constructor(e){Object.assign(this,e),this.root=null,this.subscriptions=[],this.animations=[],this.context=null}load(e){this.dispose(),this.root=new Tt,this.root.name=`level:${e}`,this.scene.add(this.root),this.context={id:e,time:0,update:()=>{}},this.collision.clear(),this.interactions.clear(),this.triggers.clear(),this.enemies.clear(),this.spores.clear(),this.slime?.clear(),this.animations.length=0;const t=this[`_${e}`];if(!t)throw new Error(`Unknown level: ${e}`);const n=t.call(this);return Object.assign(this.context,n),this.context}dispose(){for(const e of this.subscriptions.splice(0))e();this.root&&this.scene.remove(this.root),this.root=null}update(e){if(this.context){this.context.time+=e;for(const t of this.animations)t(e,this.context.time);this.context.update?.(e,this.context.time)}}nextLevel(e){const t=_r.indexOf(e);return t>=0&&t<_r.length-1?_r[t+1]:null}#t(e,t){this.subscriptions.push(this.events.on(e,t))}#s(e,t=null){const n=e?this.textures.get(e).clone():null;return n&&(n.needsUpdate=!0),new eh({map:n,color:t??16777215,fog:!0})}#i(e,t,n="floor",i=0,r=0){const a=this.#s(n);a.map&&a.map.repeat.set(Math.max(1,e/2),Math.max(1,t/2));const o=new Te(new nn(e,t),a);return o.rotation.x=-Math.PI/2,o.position.set(i,0,r),this.root.add(o),o}#n(e,t,n="ceiling",i=0,r=0,a=3.2){const o=this.#s(n);o.map&&o.map.repeat.set(Math.max(1,e/2),Math.max(1,t/2));const l=new Te(new nn(e,t),o);return l.rotation.x=Math.PI/2,l.position.set(i,a,r),this.root.add(l),l}#e(e,t,n,i,{height:r=3.2,material:a="industrialWall",collide:o=!0,tag:l="wall"}={}){const c=this.#s(a);c.map&&c.map.repeat.set(Math.max(1,n/2),Math.max(1,r/2));const u=new Te(new De(n,r,i),c);u.position.set(e,r/2,t),this.root.add(u);const d=o?this.collision.addBox(e,t,n,i,l):null;return{mesh:u,collider:d}}#o(e,t,n=.8){const i=new Te(new De(n,n,n),this.#s("crate"));return i.position.set(e,n/2,t),this.root.add(i),this.collision.addBox(e,t,n,n,"crate"),i}#r(e,t,n=0){const i=new Te(new De(.9,2.1,.55),this.#s("server"));i.position.set(e,1.05,t),i.rotation.y=n,this.root.add(i);const r=Math.abs(Math.cos(n))>.5?.9:.55,a=Math.abs(Math.cos(n))>.5?.55:.9;return this.collision.addBox(e,t,r,a,"server"),i}#a(e,t,n,i,r,a=0){const o=new Te(new nn(2.6,.65),new $e({map:this.textures.sign(e,t),fog:!0}));return o.position.set(n,i,r),o.rotation.y=a,this.root.add(o),o}#l(e,t,n=0,i="door"){const r=new Te(new De(2.8,2.7,.28),this.#s(i));r.position.set(e,1.35,t),r.rotation.y=n,this.root.add(r);const a=Math.abs(Math.cos(n))>.7?2.8:.34,o=Math.abs(Math.cos(n))>.7?.34:2.8,l=this.collision.addBox(e,t,a,o,"door");return{mesh:r,collider:l,open:!1}}#d(e){e.open||(e.open=!0,e.collider.active=!1,this.animations.push(t=>{e.mesh.position.y<4.3&&(e.mesh.position.y+=t*2.9)}))}#f({id:e,from:t,to:n,door:i,interactPosition:r,crossZone:a,prompt:o,lockedMessage:l,objectiveText:c}){let u=!1;const d=new R((a.minX+a.maxX)*.5,0,(a.minZ+a.maxZ)*.5);return this.interactions.add({id:e,position:r,radius:1.35,prompt:o,onUse:()=>this.quest.canTransition(t,n)?(u=!0,this.quest.add(`${t}:exit-open`),this.#d(i),this.objective.set(`${e}:cross`,c??"ПРОЙТИ ЧЕРЕЗ ОТКРЫТЫЙ ШЛЮЗ",d),this.events.emit("level:exit-opened",{from:t,to:n,id:e}),!0):(this.events.emit("ui:message",l??"ПЕРЕХОД ЗАБЛОКИРОВАН: НЕ ВЫПОЛНЕНА ЦЕЛЬ"),!1)}),this.triggers.add({id:`${e}:cross`,...a,once:!0,onEnter:()=>{!u||!this.quest.canTransition(t,n)||(this.quest.assertTransition(t,n),this.events.emit("level:complete",{from:t,to:n}))}}),{isArmed:()=>u,crossTarget:d}}#u(e,t){let n;const i=r=>new $e({color:r,fog:!0});return e==="pass"?n=new Te(new De(.55,.05,.35),i(ie.yellow)):e==="weapon"?n=new Te(new De(.65,.18,.25),i(ie.pale)):e==="dossier"?n=new Te(new De(.65,.05,.5),i(ie.rust)):n=new Te(new ya(.22),i(ie.orange)),n.position.copy(t),this.root.add(n),this.animations.push((r,a)=>{n.parent&&(n.rotation.y+=r*.7,n.position.y=t.y+Math.sin(a*2.5)*.04)}),n}#p(e,t,n=16,i=!1){const r=new Tt,a=new $e({color:i?ie.rust:ie.green,fog:!0}),o=new $e({color:ie.lime,fog:!0});for(let l=0;l<n;l++){const c=.07+Math.random()*.16,u=new Te(new _t(c,6,4),l%4===0?o:a);u.position.set((Math.random()-.5)*1.2,c*.6,(Math.random()-.5)*1.2),u.scale.y=.4+Math.random()*.8,r.add(u)}return r.position.set(e,0,t),this.root.add(r),i&&this.animations.push((l,c)=>r.scale.setScalar(1+Math.sin(c*1.6+e)*.025)),r}#c(e,t,n,i=1,{kind:r="hazard",infectionPerSecond:a=4,calmPerSecond:o=0,slowSeconds:l=.18,color:c=ie.green,visualStrength:u=1}={}){const d=new Tt,h=new $e({color:c,transparent:!0,opacity:.52,fog:!0,depthWrite:!1}),p=new $e({color:ie.lime,transparent:!0,opacity:.42,fog:!0,depthWrite:!1}),_=new Te(new nn(i*2,i*1.4),h);_.rotation.x=-Math.PI/2,_.position.y=.018,_.scale.y=.7,d.add(_);for(let f=0;f<9;f++){const x=i*(.12+Math.random()*.16),b=new Te(new _t(x,7,4),f%4===0?p:h),E=Math.random()*Math.PI*2,A=Math.random()*i*.7;b.position.set(Math.cos(E)*A,.025+x*.24,Math.sin(E)*A),b.scale.y=.18+Math.random()*.18,d.add(b)}d.position.set(t,0,n),this.root.add(d);const S=r==="hazard",m=new Cs(c,S?.55:.34,S?4.8:3.5,2);return m.position.set(t,.34,n),this.root.add(m),this.animations.push((f,x)=>{const b=1+Math.sin(x*1.7+t*.2+n*.1)*.025;d.scale.set(b,1,b),p.opacity=.31+(Math.sin(x*2.4+n)*.5+.5)*.16,m.intensity=(S?.38:.2)+(Math.sin(x*2.4+n)*.5+.5)*(S?.34:.22)}),this.slime?.addZone({id:e,x:t,z:n,radius:i,kind:r,infectionPerSecond:a,calmPerSecond:o,slowSeconds:l,visualStrength:u}),d}#m(e,t,{prompt:n="E — КОСНУТЬСЯ О-41",infection:i=6,heal:r=0,guard:a=null,lockedMessage:o="СИГНАЛ НЕ СИНХРОНИЗИРОВАН",onAttune:l=null}={}){const c=new Te(new Nn(.24,1),new $e({color:ie.lime,fog:!0,transparent:!0,opacity:.78}));return c.position.copy(t),c.position.y=Math.max(.22,t.y??.22),this.root.add(c),this.animations.push((u,d)=>{c.parent&&(c.rotation.y+=u*.6,c.scale.setScalar(.88+Math.sin(d*2.3+t.x)*.12))}),this.interactions.add({id:e,position:t,radius:1.15,prompt:n,onUse:()=>this.slime?a&&!a()?(this.events.emit("ui:message",o),!1):(this.slime.attune(e,{infection:i,heal:r})&&l?.(),c.visible=!this.quest.has(`slime:${e}`),!0):!1})}#g(e,t,{color:n=ie.pale,width:i=1.35,flicker:r=!1,y:a=3.1}={}){const o=new Tt,l=new Te(new De(i+.16,.08,.34),new $e({color:ie.dark,fog:!0})),c=new Te(new De(i,.035,.25),new $e({color:n,fog:!0}));c.position.y=-.055;const u=new Cs(n,.92,7.2,2);return u.position.y=-.18,o.add(l,c,u),o.position.set(e,a,t),this.root.add(o),this.animations.push((d,h)=>{const p=!r||Math.sin(h*21+t)>-.72;c.visible=p,u.intensity=p?.78+Math.sin(h*2.1+e)*.14:.06}),o}#h(e,t,n,{axis:i="z",count:r=3,y:a=2.62,spacing:o=.18,color:l=ie.slate}={}){const c=new Tt,u=new $e({color:l,fog:!0});for(let d=0;d<r;d++){const h=new Te(new an(.045,.045,n,6),u);i==="z"?(h.rotation.x=Math.PI/2,h.position.x=(d-(r-1)/2)*o):(h.rotation.z=Math.PI/2,h.position.z=(d-(r-1)/2)*o),c.add(h)}return c.position.set(e,a,t),this.root.add(c),c}#x(e,t,n=1.2,i=.7,r=ie.steel){const a=new Te(new nn(n,i),new $e({color:r,transparent:!0,opacity:.34,fog:!0}));return a.rotation.x=-Math.PI/2,a.position.set(e,.012,t),this.root.add(a),a}#S(e,t,n=0,i=ie.brown){const r=new Tt,a=new $e({color:i,fog:!0}),o=new Te(new De(1.7,.12,.42),a);o.position.y=.48,r.add(o);for(const l of[-.68,.68]){const c=new Te(new De(.1,.48,.1),a);c.position.set(l,.24,0),r.add(c)}return r.position.set(e,0,t),r.rotation.y=n,this.root.add(r),r}#E(e,t,n=3,i=0){const r=new Tt,a=new $e({color:ie.steel,fog:!0}),o=new $e({color:ie.dark,fog:!0});for(let l=0;l<n;l++){const c=new Te(new De(.48,1.75,.42),a);c.position.set((l-(n-1)/2)*.52,.875,0),r.add(c);const u=new Te(new De(.22,.035,.025),o);u.position.set(c.position.x,1.34,.225),r.add(u)}return r.position.set(e,0,t),r.rotation.y=i,this.root.add(r),r}#_(e,t,{y:n=.04,color:i=ie.dark}={}){const r=new Tt,a=new $e({color:i,fog:!0});for(let o=-2;o<=2;o++){const l=new Te(new De(.08,.025,.65),a);l.position.x=o*.14,r.add(l)}return r.position.set(e,n,t),this.root.add(r),r}#M(e,t,n=7,i=1){const r=new Tt,a=new $e({color:ie.rust,fog:!0}),o=new $e({color:ie.orange,fog:!0});for(let l=0;l<n;l++){const c=new Te(new _t((.2+Math.random()*.18)*i,7,5),l%3===0?o:a);c.position.set((Math.random()-.5)*1.6,.35+Math.random()*1.65,(Math.random()-.5)*.55),c.scale.y=1.35+Math.random()*.8,r.add(c)}return r.position.set(e,0,t),this.root.add(r),this.animations.push((l,c)=>{r.scale.setScalar(1+Math.sin(c*1.55+e*.3)*.018)}),r}#y(e,t,n=14,i=9){const r=new Tt,a=new $e({color:ie.light,fog:!0});for(let o=0;o<n;o++){const l=o/n*Math.PI*2,c=new Te(new De(.18+Math.random()*.42,.18+Math.random()*.7,.12+Math.random()*.25),a.clone());c.position.set(e+Math.sin(l)*(i+Math.random()*2),.7+Math.random()*2.4,t+Math.cos(l)*(i+Math.random()*2)),c.rotation.y=l,r.add(c),this.animations.push((u,d)=>{c.rotation.y+=u*(.08+o%3*.025),c.position.y+=Math.sin(d*.7+o)*u*.012})}return this.root.add(r),r}#v(e,t,n){this.scene.background=new We(e),this.scene.fog=new Fi(e,t,Math.max(n,14))}_perimeter(){this.#v(857623,6,22),this.#i(18,30,"floor"),this.#n(18,30),this.#e(-9.1,0,.35,30.2),this.#e(9.1,0,.35,30.2),this.#e(0,15.1,18.2,.35),this.#e(0,-15.1,18.2,.35),this.#e(-3.25,10.6,.35,8.5),this.#e(3.25,10.6,.35,8.5),this.#e(-2.85,2,.35,8.9),this.#e(2.85,2,.35,8.9),this.#e(-5.8,-3.95,6,.35),this.#e(5.8,-3.95,6,.35),this.#e(-6.2,-8,.35,8.2),this.#e(6.2,-8,.35,8.2),this.#e(-6,4.2,5.9,.35),this.#e(-6,-.3,5.9,.35),this.#e(-8.75,2,.35,4.8),this.#a("КПП / 041","1-Й КОНТУР",0,2.3,7.7),this.#a("СТОЛОВАЯ","СЕКТОР А",2.6,2,1,-Math.PI/2),this.#a("ОБЩЕЖИТИЕ","БЛОК 3",-2.6,2,1,Math.PI/2),this.#o(-1.9,11.5,.9),this.#o(1.9,8.6,.8),this.#o(-4.8,-7.2,1),this.#p(2.1,5.8),this.#p(-4.8,-5.4,20),this.#c("perimeterDrain",1.8,4.9,1.05,{kind:"hazard",infectionPerSecond:5.2,slowSeconds:.2,color:ie.green}),this.#c("perimeterQuiet",-5.9,2.25,.9,{kind:"symbiotic",calmPerSecond:.55,slowSeconds:0,color:ie.steel,visualStrength:.75});for(const u of[12,8,4,0,-4,-8])this.#g(0,u,{flicker:u===-4});this.#h(-2.72,5.8,14,{axis:"z",count:3,y:2.72}),this.#h(2.72,5.8,14,{axis:"z",count:2,y:2.78,color:ie.rust}),this.#S(-7.15,2.3,Math.PI/2),this.#E(-7.55,.55,3,Math.PI/2),this.#x(.85,-2.4,1.5,.7),this.#_(2.05,6.8),this.#e(-5.25,-12.2,7.5,.35,{material:"industrialWall"}),this.#e(5.25,-12.2,7.5,.35,{material:"industrialWall"});const e=this.#l(0,-12.2),t=new R(-4.25,.42,-9.1),n=this.#u("pass",t),i=new R(4.25,.42,-7.7),r=this.#u("weapon",i);this.enemies.spawn("sporecarrier",{x:.2,z:3}),this.enemies.spawn("sporecarrier",{x:-4,z:-6.8}),this.enemies.spawn("sporecarrier",{x:4,z:-9.2}),this.spores.spawn(new R(1.4,0,7),1);const a=new R(-5.9,.24,2.25);this.#m("perimeterEcho",a,{infection:5,heal:.5,onAttune:()=>{this.narrative.play("perimeter","slimeEcho"),this.events.emit("ui:message","О-41 // ОБРАЗ ПЕРЕДАН: КЛЮЧ / НИЖНИЙ СЕКТОР")}}),this.objective.set("findPass","НАЙТИ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ",t),this.narrative.play("perimeter","intro"),this.interactions.add({id:"shiftPass",position:t,radius:1.05,mode:"pickup",onUse:()=>(this.quest.has("shiftPass")||(this.quest.add("shiftPass"),n.removeFromParent(),this.events.emit("quest:pickup",{id:"shiftPass"}),this.narrative.play("perimeter","pass"),this.objective.set("airlock","ВЕРНУТЬСЯ К ШЛЮЗУ ВО 2-Й СЕКТОР",new R(0,0,-12.2))),!0)}),this.interactions.add({id:"shotgunPickup",position:i,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("shotgun")||(this.belt.unlock("shotgun",{shells:8}),r.removeFromParent()),!0)}),this.#f({id:"perimeterExit",from:"perimeter",to:"archive",door:e,interactPosition:new R(0,0,-10.9),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.45,maxZ:-12.8},prompt:"E — ПРОПУСК / ОТКРЫТЬ ШЛЮЗ",lockedMessage:"ТРЕБУЕТСЯ ПРОПУСК НАЧАЛЬНИКА СМЕНЫ",objectiveText:"ПРОЙТИ ЧЕРЕЗ ШЛЮЗ В АРХИВ"});let o=!0;this.#t("spore:collected",()=>{o&&(o=!1,this.crafting.unlock("inhaler"),this.narrative.play("perimeter","firstSpore"))});let l=2.8,c=8.5;return{spawn:{x:0,z:12.4},yaw:Math.PI,audio:{emitters:[{type:"fluorescent",x:0,z:-4},{type:"drip",x:.85,z:-2.4},{type:"metal",x:-7.1,z:2.3},{type:"ghostRadio",x:2.6,z:-5},{type:"relay",x:0,z:7.5}]},update:u=>{l-=u,c-=u,l<=0&&(this.events.emit("world:flicker",{strength:.55}),l=4+Math.random()*5),c<=0&&(this.events.emit("audio:hallucination"),c=10+Math.random()*9)}}}_archive(){this.#v(463119,5,18),this.#i(16,32,"floor"),this.#n(16,32,"ceiling"),this.#e(-8.1,0,.35,32.2,{material:"archiveWall"}),this.#e(8.1,0,.35,32.2,{material:"archiveWall"}),this.#e(0,16.1,16.2,.35,{material:"archiveWall"}),this.#e(0,-16.1,16.2,.35,{material:"archiveWall"}),this.#e(-3.2,5,.35,21.8,{material:"archiveWall"}),this.#e(3.2,5,.35,21.8,{material:"archiveWall"}),this.#a("АРХИВ","МАШИННЫЙ ФОНД 041",0,2.25,10.5);for(const h of[8,5,2,-1,-4])this.#r(-2.4,h,Math.PI/2),this.#r(2.4,h,-Math.PI/2);this.#p(-1.8,-7,18),this.#c("archiveConduitPool",-1.4,-6.7,.95,{kind:"symbiotic",calmPerSecond:.35,slowSeconds:0,color:ie.green,visualStrength:.9});for(const h of[13,10,7,4,1,-2,-5,-9,-12])this.#g(0,h,{width:1,flicker:h===-9});this.#h(-3,2,22,{axis:"z",count:4,y:2.82,spacing:.12,color:ie.dark}),this.#h(3,2,22,{axis:"z",count:4,y:2.82,spacing:.12,color:ie.dark}),this.#x(-1.15,-5.4,1,.55,ie.dark),this.#_(-1.8,7.2),this.#_(1.8,7.2);const e=new R(0,0,8.5);this.#r(0,8.8,0),this.#e(3.15,-10.45,.35,3.1,{material:"archiveWall"});const t=this.#l(3.15,-7.5,Math.PI/2),n=new R(5.5,0,-8),i=new R(7,.45,-7.2),r=this.#u("weapon",i);this.#i(8,8,"floor",5,-8),this.#n(8,8,"ceiling",5,-8),this.#e(5,-12,8,.35,{material:"archiveWall"}),this.#e(8.9,-8,.35,8,{material:"archiveWall"}),this.#r(5.5,-8.4,0),this.#r(7.3,-8.4,0),this.#e(-4.75,-13.45,6.5,.35,{material:"archiveWall"}),this.#e(4.75,-13.45,6.5,.35,{material:"archiveWall"});const a=this.#l(0,-13.45);this.enemies.spawn("sporecarrier",{x:-1,z:1}),this.enemies.spawn("whipster",{x:1.2,z:-3}),this.enemies.spawn("sporecarrier",{x:5,z:-9.5}),this.spores.spawn(new R(-1.3,0,-4.5),2),this.objective.set("signalLog","НАЙТИ ЗАПИСЬ ОБ О-41",e),this.narrative.play("archive","intro");const o=new R(-1.4,.24,-6.7);this.#m("archiveConduit",o,{infection:6,guard:()=>this.quest.has("archiveSignalLog"),lockedMessage:"СНАЧАЛА ПРОСЛУШАЙТЕ ЗАПИСЬ",onAttune:()=>{this.narrative.play("archive","slimeConduit"),this.events.emit("ui:message","О-41 // ТОПОЛОГИЯ СИНХРОНИЗИРОВАНА")}});let l=this.quest.count("archiveLoop");this.interactions.add({id:"signalTerminal",position:e,radius:1.2,prompt:"E — ВОСПРОИЗВЕСТИ АУДИОЗАПИСЬ",onUse:()=>(this.quest.has("archiveSignalLog")||(this.quest.add("archiveSignalLog"),this.narrative.play("archive","signalLog"),this.crafting.unlock("fungusLauncher"),this.crafting.unlock("fungalShell"),this.objective.set("archiveLoop","ПРОВЕРИТЬ КОРИДОР, КОТОРЫЙ НЕ СОВПАДАЕТ С ПЛАНОМ",new R(0,0,-10.8))),!0)}),this.triggers.add({id:"archiveLoop",minX:-2.6,maxX:2.6,minZ:-11.45,maxZ:-10.15,once:!1,onEnter:()=>{if(!this.quest.has("archiveSignalLog")||this.quest.has("archiveData")||this.quest.has("archiveLoopResolved"))return;l=this.quest.increment("archiveLoop"),l===1&&this.narrative.play("archive","loop1"),l===2&&this.narrative.play("archive","loop2");const h=this.quest.has("slime:archiveConduit")?2:3;l<h?(this.player.position.set(0,1.55,3.8),this.events.emit("world:teleport",{kind:"loop",count:l})):(this.quest.add("archiveLoopResolved"),this.#d(t),this.objective.set("archiveData","БОКОВАЯ СЕРВЕРНАЯ СТАЛА ДОСТУПНА",n))}}),this.interactions.add({id:"archiveData",position:n,radius:1.2,prompt:"E — ИЗВЛЕЧЬ ДАННЫЕ О-41",onUse:()=>this.quest.has("archiveData")?!0:this.quest.has("archiveLoopResolved")?(this.quest.add("archiveData"),this.quest.add("archiveDefenseActive"),this.enemies.spawn("sporecarrier",{x:-1.2,z:-7.8}),this.enemies.spawn("whipster",{x:1,z:-8.6}),this.enemies.spawn("sporecarrier",{x:3.8,z:-9}),this.events.emit("ui:message","ARCHIVE DEFENSE PROTOCOL ACTIVE // CLEAR THE RESPONSE"),this.events.emit("quest:pickup",{id:"archiveData"}),this.objective.set("archiveDefense","CLEAR THE ARCHIVE RESPONSE",new R(0,0,-8.2)),this.objective.set("archiveExit","ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА",new R(0,0,-12.2)),!0):(this.events.emit("ui:message","СЕРВЕРНАЯ НЕСОВМЕСТИМА С ТЕКУЩЕЙ ТОПОЛОГИЕЙ"),!1)}),this.#t("enemy:killed",()=>{!this.quest.has("archiveDefenseActive")||this.quest.has("archiveDefense")||this.enemies.alive().length>0||(this.quest.add("archiveDefense"),this.events.emit("ui:message","ARCHIVE RESPONSE NEUTRALIZED // REACTOR AIRLOCK AVAILABLE"),this.objective.set("archiveExit","OPEN THE REACTOR AIRLOCK",new R(0,0,-12.2)))});const c=new R(6.8,0,-9.8);this.#r(6.8,-9.8,0);let u=null;const d=this.interactions.add({id:"archiveDisposition",position:c,radius:1.15,prompt:"E — ACCESS SERVER CORE",onUse:()=>this.quest.has("archiveData")?(this.events.emit("choice:request",{id:"archiveDisposition",title:"ARCHIVE CORE: DISPOSITION",text:"Purge the copied signal to clear the chamber, or mirror it into a portable arc cutter. Both actions leave a trace.",options:[{id:"purge",label:"PURGE THE CORE",detail:"-14 infection; fuel cache; removes nearby hostiles"},{id:"mirror",label:"MIRROR THE SIGNAL",detail:"Unlock ARC CUTTER; +8 infection; hostile response"}]}),!1):(this.events.emit("ui:message","CORE LOCKED // EXTRACT O-41 DATA FIRST"),!1)});return this.#t("choice:resolved",({id:h,option:p})=>{if(!(h!=="archiveDisposition"||u))if(u=p,d.consumed=!0,p==="purge"){this.quest.add("archivePurged"),this.infection.reduce(14,"archivePurge"),this.belt.addAmmo("fuel",18);for(const _ of this.enemies.alive())this.enemies.damage(_,99,"archivePurge");this.events.emit("ui:message","ARCHIVE PURGED // HOSTILES CLEARED // FUEL +18")}else this.quest.add("archiveMirrored"),this.infection.add(8,"archiveMirror"),this.belt.unlock("arcCutter",{cells:24}),this.enemies.spawn("wailer",{x:1.2,z:-4.8}),this.events.emit("ui:message","ARC CUTTER SYNCHRONIZED // SIGNAL HAS ANSWERED")}),this.interactions.add({id:"akPickup",position:i,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("ak")||(this.belt.unlock("ak",{rifle:45}),r.removeFromParent()),!0)}),this.#f({id:"archiveExit",from:"archive",to:"reactor",door:a,interactPosition:new R(0,0,-12.15),crossZone:{minX:-1.25,maxX:1.25,minZ:-15.35,maxZ:-13.9},prompt:"E — ОТКРЫТЬ ШЛЮЗ РЕАКТОРНОГО БЛОКА",lockedMessage:"СНАЧАЛА ИЗВЛЕКИТЕ АРХИВНЫЕ ДАННЫЕ",objectiveText:"ВОЙТИ В РЕАКТОРНЫЙ БЛОК"}),{spawn:{x:0,z:13.8},yaw:Math.PI,audio:{emitters:[{type:"server",x:-2.4,z:5},{type:"server",x:2.4,z:-1},{type:"tape",x:0,z:8.8},{type:"relay",x:5.5,z:-8.4},{type:"printer",x:7.3,z:-8.4}]}}}_reactor(){this.#v(658957,1,4.8),this.#i(18,30,"floor"),this.#n(18,30,"ceiling"),this.#e(-9.1,0,.35,30.2,{material:"reactorWall"}),this.#e(9.1,0,.35,30.2,{material:"reactorWall"}),this.#e(0,15.1,18.2,.35,{material:"reactorWall"}),this.#e(0,-15.1,18.2,.35,{material:"reactorWall"}),this.#e(-3,4.8,.35,14,{material:"reactorWall"}),this.#e(3,4.8,.35,14,{material:"reactorWall"}),this.#e(-6,-5,6.2,.35,{material:"reactorWall"}),this.#e(6,-5,6.2,.35,{material:"reactorWall"}),this.#a("РЕАКТОР","БЛОК Р-7",0,2.25,10.8),this.#e(-5.25,-13.1,7.5,.35,{material:"reactorWall"}),this.#e(5.25,-13.1,7.5,.35,{material:"reactorWall"});const e=this.#l(0,-13.1,0,"reactorWall");for(const p of[-6,6])for(const _ of[-9,-3,3]){const S=new Te(new an(.55,.7,2.8,8),new $e({color:ie.slate,fog:!0}));S.position.set(p,1.4,_),this.root.add(S),this.collision.addBox(p,_,1.1,1.1,"reactor")}for(const p of[12,8,4,0,-4,-8,-11])this.#g(0,p,{color:p<0?ie.orange:ie.pale,width:1.1,flicker:p===0});this.#h(-7.35,-1,23,{axis:"z",count:4,y:2.55,spacing:.16,color:ie.rust}),this.#h(7.35,-1,23,{axis:"z",count:4,y:2.55,spacing:.16,color:ie.steel}),this.#h(0,-4.55,5.5,{axis:"x",count:3,y:2.75,spacing:.16,color:ie.dark}),this.#_(5.9,-3),this.#_(-5.8,-8.8),this.#x(4.6,-6.2,1.8,.7,ie.slate),this.#c("reactorHotSlime",4.7,-6.2,1.1,{kind:"hazard",infectionPerSecond:7,slowSeconds:.25,color:ie.rust,visualStrength:1.1}),this.#c("reactorQuietSlime",-5.7,-8.7,1,{kind:"symbiotic",calmPerSecond:.85,slowSeconds:0,color:ie.green,visualStrength:.9}),this.enemies.spawn("whipster",{x:.8,z:5}),this.enemies.spawn("wailer",{x:-1,z:-1.5}),this.enemies.spawn("whipster",{x:5,z:-8});const t=new R(-5.7,.48,-6.2),n=this.#u("weapon",t);this.#i(10,10,"floor",28,0),this.#n(10,10,"ceiling",28,0),this.#e(23,0,.35,10,{material:"reactorWall"}),this.#e(33,0,.35,10,{material:"reactorWall"}),this.#e(28,5,10,.35,{material:"reactorWall"}),this.#e(28,-5,10,.35,{material:"reactorWall"});const i=this.enemies.spawn("irritantCore",{x:28,z:-1.3},{narrativeTag:"irritantCore"}),r=new R(0,0,-4),a=new R(28,0,-4.2);this.narrative.play("reactor","intro");const o=new R(-5.7,.24,-8.7);this.#m("reactorVeil",o,{infection:7,heal:1,onAttune:()=>{this.player.wailTimer=0,this.narrative.play("reactor","slimeVeil"),this.events.emit("ui:message","О-41 // ШУМ ВОПЛЯ ПОГАШЕН")}}),this.interactions.add({id:"flamePickup",position:t,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("flamethrower")||(this.belt.unlock("flamethrower",{fuel:72}),n.removeFromParent(),this.events.emit("ui:message","FLAMETHROWER P-041 // PRESSURE TANK ONLINE")),!0)}),this.objective.set("reactorPortal","НАЙТИ ИСТОЧНИК БИОСИГНАЛА",r);let l=this.quest.has("reactorPocketEntered"),c=this.quest.count("reactorStairLoops");this.triggers.add({id:"selfStair",minX:-2.5,maxX:2.5,minZ:.2,maxZ:1.3,once:!1,onEnter:()=>{l||c>=2||(c=this.quest.increment("reactorStairLoops"),this.player.position.z=6,this.events.emit("world:teleport",{kind:"self-stair",count:c}))}}),this.interactions.add({id:"reactorPortal",position:r,radius:1.25,prompt:"E — ВОЙТИ В ТЕХНИЧЕСКУЮ КАМЕРУ",onUse:()=>(l=!0,this.quest.add("reactorPocketEntered"),this.player.position.set(28,1.55,3.4),this.objective.set("irritantCore","НЕЙТРАЛИЗОВАТЬ ЯДРО-РАЗДРАЖИТЕЛЬ",i.group.position),!0)}),this.interactions.add({id:"pocketExit",position:a,radius:1.2,prompt:"E — ВЕРНУТЬСЯ В РЕАКТОРНЫЙ КОРИДОР",onUse:()=>(!this.quest.has("reactorCore")&&!i.alive&&(this.quest.add("reactorCore"),this.events.emit("ui:message","CORE STATUS SYNCHRONIZED // EXIT UNLOCKED")),this.quest.has("reactorCore")?(this.quest.add("reactorPocketExited"),this.player.position.set(0,1.55,-7),this.objective.set("reactorExit","ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ",new R(0,0,-11.8)),!0):(this.events.emit("ui:message","БИОЗАМОК АКТИВЕН: ЯДРО НЕЙТРАЛИЗОВАТЬ"),!1))});let u=null;const d=this.interactions.add({id:"reactorVent",position:new R(5.9,0,-3),radius:1.15,prompt:"E — ACCESS REACTOR VENT",onUse:()=>this.quest.has("reactorCore")?(this.events.emit("choice:request",{id:"reactorVent",title:"REACTOR VENT: FINAL CYCLE",text:"A cold purge will stabilize your body. An overload will turn pressure into fuel, but wake the nest.",options:[{id:"cool",label:"COLD PURGE",detail:"-18 infection; +2 health; quieter exit"},{id:"overload",label:"OVERLOAD VENT",detail:"+36 fuel; +10 infection; spawn a hive"}]}),!1):(this.events.emit("ui:message","VENT INTERLOCK // NEUTRALIZE IRRITANT CORE"),!1)});this.#t("choice:resolved",({id:p,option:_})=>{p!=="reactorVent"||u||(u=_,d.consumed=!0,this.quest.add("reactorVentDecision"),_==="cool"?(this.quest.add("reactorCooled"),this.infection.reduce(18,"reactorColdPurge"),this.player.heal(2),this.events.emit("ui:message","COLD PURGE COMPLETE // BODY STABILIZED")):(this.quest.add("reactorOverloaded"),this.infection.add(10,"reactorOverload"),this.belt.addAmmo("fuel",36),this.enemies.spawn("hive",{x:4.2,z:-7.2}),this.events.emit("ui:message","OVERLOAD COMPLETE // HIVE AWAKENED // FUEL +36")))}),this.#f({id:"reactorExit",from:"reactor",to:"womb",door:e,interactPosition:new R(0,0,-11.75),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.65,maxZ:-13.45},prompt:"E — ОТКРЫТЬ СПУСК В НИЖНИЙ ТОННЕЛЬ",lockedMessage:"СНАЧАЛА НЕЙТРАЛИЗУЙТЕ ЯДРО-РАЗДРАЖИТЕЛЬ",objectiveText:"СПУСТИТЬСЯ В НИЖНИЙ ТОННЕЛЬ"});let h=!1;return this.#t("enemy:wail",()=>{h||(h=!0,this.narrative.play("reactor","wailer"))}),this.#t("enemy:killed",({enemy:p})=>{p===i&&(this.crafting.unlock("shield"),this.quest.add("reactorCore"),this.narrative.play("reactor","coreDead"),this.objective.set("pocketExit","ВЫЙТИ ИЗ КАМЕРЫ",a))}),{spawn:{x:0,z:13},yaw:Math.PI,audio:{emitters:[{type:"steam",x:5.9,z:-3},{type:"turbine",x:-6,z:-9},{type:"pressure",x:6,z:3},{type:"geiger",x:28,z:-1.3},{type:"metal",x:0,z:-11}]}}}_womb(){this.#v(1181960,2,11),this.#i(18,30,"organicFloor"),this.#n(18,30,"organicWall",0,0,3),this.#i(6.2,7,"floor",0,11.2),this.#n(6.2,7,"ceiling",0,11.2,3),this.#e(-3,11.2,.22,7,{height:3,material:"reactorWall",collide:!1}),this.#e(3,11.2,.22,7,{height:3,material:"reactorWall",collide:!1});const e=[],t=(S,m,f,x)=>{const b=this.#e(S,m,f,x,{height:3,material:"organicWall"});return e.push(b.mesh),b};t(-9.1,0,.45,30.2),t(9.1,0,.45,30.2),t(0,15.1,18.2,.45),t(0,-15.1,18.2,.45),t(-3.2,7,.5,14),t(3.2,7,.5,14),t(-5.8,-4,6.4,.5),t(5.8,-4,6.4,.5),t(-5.25,-13.1,7.5,.42),t(5.25,-13.1,7.5,.42);const n=this.#l(0,-13.1,0,"organicWall");this.#p(0,9,28,!0),this.#p(-5,-6,30,!0),this.#p(5,-9,26,!0),this.#h(-2.45,11.2,6,{axis:"z",count:2,y:2.55,color:ie.slate}),this.#g(0,12.4,{width:1,flicker:!0}),this.#g(0,9.6,{width:.9,color:ie.rust,flicker:!0}),this.#M(-7.6,2.5,8,1.1),this.#M(7.5,-2,9,1.25),this.#M(-7.2,-10.2,7,1),this.#x(.6,6.5,1.5,.85,ie.rust),this.#c("wombHazardA",.7,6.3,1.15,{kind:"hazard",infectionPerSecond:6.2,slowSeconds:.22,color:ie.rust,visualStrength:1.1}),this.#c("wombCalmA",-5.6,-1.8,1.15,{kind:"symbiotic",calmPerSecond:1.1,slowSeconds:0,color:ie.green,visualStrength:1}),this.#c("wombHazardB",4.8,-8.4,1.25,{kind:"hazard",infectionPerSecond:8,slowSeconds:.28,color:ie.rust,visualStrength:1.2});for(const S of e){const m=S.scale.y;this.animations.push((f,x)=>{S.scale.y=m*(1+Math.sin(x*1.3+S.position.z*.2)*.012)})}this.enemies.spawn("wailer",{x:0,z:4}),this.enemies.spawn("hive",{x:-4.4,z:-7}),this.enemies.spawn("hive",{x:4.2,z:-10}),this.spores.spawn(new R(2,0,8),2),this.spores.spawn(new R(-4.5,0,-8),3),this.#i(9,9,"floor",30,0),this.#n(9,9,"ceiling",30,0),this.#e(25.5,0,.35,9,{material:"industrialWall"}),this.#e(34.5,0,.35,9,{material:"industrialWall"}),this.#e(30,4.5,9,.35,{material:"industrialWall"}),this.#e(30,-4.5,9,.35,{material:"industrialWall"}),this.#a("ЛИЧНЫЕ ДЕЛА","К.О.Н.Т.У.Р.",30,2.2,-4.3);const i=new R(30,.5,-1.8),r=this.#u("dossier",i),a=new R(32,.5,-1.2),o=this.#u("weapon",a);this.narrative.play("womb","intro");const l=new R(1.9,.24,8),c=new R(-5.6,.24,-1.8),u=new R(5.1,.24,-7.5);this.#m("wombCall1",l,{infection:7,onAttune:()=>{this.narrative.play("womb","call1"),this.objective.set("wombCall2","ГОЛОС О-41: ИДТИ ПО ВЛАЖНОМУ СЛЕДУ",c)}}),this.#m("wombCall2",c,{infection:7,heal:1,guard:()=>this.quest.has("slime:wombCall1"),lockedMessage:"О-41 // ЭТОТ ФРАГМЕНТ ЕЩЁ НЕ ВАШ",onAttune:()=>{this.narrative.play("womb","call2"),this.objective.set("wombChoir","ГОЛОС О-41: НАЙТИ ИСТОЧНИК ХОРА",u)}}),this.#m("wombChoir",u,{infection:9,guard:()=>this.quest.has("slime:wombCall2"),lockedMessage:"О-41 // СИГНАЛ НЕ СОБРАН",onAttune:()=>{this.narrative.play("womb","choir"),this.events.emit("ui:message","О-41 // ФРАГМЕНТ ПРЕДУПРЕЖДЕНИЯ ЗАПОМНЕН"),this.objective.set("memoryRoom","ПРОВЕРИТЬ КОРИДОР, КОТОРОГО НЕТ НА ПЛАНЕ",new R(0,0,.5))}}),this.objective.set("memoryRoom","СЛЕДОВАТЬ ЗА «ЗНАКОМЫМ» КОРИДОРОМ",new R(0,0,.5));let d=!1;this.triggers.add({id:"memoryPortal",minX:-2.5,maxX:2.5,minZ:-.2,maxZ:1,once:!0,onEnter:()=>{d=!0,this.player.position.set(30,1.55,2.8),this.objective.set("dossier","ПРОВЕРИТЬ ЛИЧНОЕ ДЕЛО «СКАЛЬПЕЛЬ»",i),this.events.emit("world:hallucination",{active:!0})}});let h=null;const p=S=>{h||(h=S,this.quest.add("dossier"),_&&(_.consumed=!0),r.removeFromParent(),S==="destroy"?(this.quest.add("dossierDestroyed"),this.infection.reduce(12,"dossierDestroyed"),this.player.heal(1),this.belt.addAmmo("fuel",24),this.events.emit("ui:message","DOSSIER DESTROYED // RESONANCE DAMPED // FUEL +24")):(this.quest.add("dossierPreserved"),this.narrative.play("womb","dossier"),this.infection.add(18,"dossierResonance"),this.events.emit("ui:message","DOSSIER SECURED // BROADCAST EVIDENCE RECOVERED")),this.objective.set("memoryExit","EXIT THE IMPOSSIBLE MEMORY ROOM",new R(30,0,-4)))};this.#t("choice:resolved",({id:S,option:m})=>{S==="dossier"&&p(m)});const _=this.interactions.add({id:"dossier",position:i,radius:1,onUse:()=>this.quest.has("dossier")?!0:(this.events.emit("choice:request",{id:"dossier",title:"PERSONAL DOSSIER: SCALPEL",text:"The command channel orders immediate destruction. Keeping the file may reveal a route, but strengthens the O-41 resonance.",options:[{id:"preserve",label:"KEEP THE DOSSIER",detail:"+ ending evidence; +18 infection"},{id:"destroy",label:"BURN THE DOSSIER",detail:"-12 infection; fuel cache; broadcast route lost"}]}),!1)});return this.interactions.add({id:"drillPickup",position:a,radius:1,mode:"pickup",onUse:()=>(this.belt.unlocked.has("drill")||(this.belt.unlock("drill",{sporeCharge:5}),this.crafting.unlock("drillCharge"),o.removeFromParent()),!0)}),this.interactions.add({id:"memoryExit",position:new R(30,0,-3.8),radius:1.2,prompt:"E — ОТКРЫТЬ ДВЕРЬ",onUse:()=>this.quest.has("dossier")?(this.quest.add("memoryRoomExited"),this.player.position.set(0,1.55,-5),d=!1,this.events.emit("world:hallucination",{active:!1}),this.objective.set("wombExit","ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР",new R(0,0,-11.8)),!0):!1}),this.#f({id:"wombExit",from:"womb",to:"silence",door:n,interactPosition:new R(0,0,-11.75),crossZone:{minX:-1.25,maxX:1.25,minZ:-14.65,maxZ:-13.45},prompt:"E — ОТКРЫТЬ ПРОХОД В 3-Й КОНТУР",lockedMessage:"РЕЗОНАНС НЕ СТАБИЛИЗИРОВАН: НАЙДИТЕ ЛИЧНОЕ ДЕЛО",objectiveText:"ВОЙТИ В 3-Й КОНТУР"}),{spawn:{x:0,z:13},yaw:Math.PI,audio:{emitters:[{type:"wet",x:-7.6,z:2.5},{type:"pulse",x:7.5,z:-2},{type:"sporeHiss",x:-5,z:-6},{type:"wet",x:5,z:-9},{type:"whisper",x:30,z:0}]},update:S=>{d||this.infection.add(S*.28,"aggressiveSpores")}}}_silence(){this.#v(14213077,10,32),this.#i(30,30,"whiteWall");const e=new $e({color:ie.pale,fog:!0}),t=[];for(let u=0;u<12;u++){const d=u/12*Math.PI*2,h=new Te(new De(2,2.4,.22),e.clone());h.position.set(Math.sin(d)*12,1.2,Math.cos(d)*12-2),h.rotation.y=d,this.root.add(h),t.push(h)}this.#y(0,-2,18,8.2),this.#c("silenceApproach",0,3,1.4,{kind:"symbiotic",calmPerSecond:.42,slowSeconds:0,color:ie.pale,visualStrength:.65}),this.#c("silenceThreshold",0,-8,1.6,{kind:"hazard",infectionPerSecond:3,slowSeconds:.12,color:ie.green,visualStrength:.9});const n=new R(0,.55,5.2),i=this.#u("weapon",n),r=this.enemies.spawn("collective",{x:0,z:-5}),a={burn:{id:"burnChoice",pos:new R(-5,0,-10.4),color:ie.rust,prompt:"E — СЖЕЧЬ КОНТУР / ПОДТВЕРДИТЬ ЗАРЯД"},merge:{id:"mergeChoice",pos:new R(5,0,-10.4),color:ie.lime,prompt:"E — СЛИТЬСЯ / СТАТЬ УЗЛОМ О-41"},broadcast:{id:"broadcastChoice",pos:new R(0,0,-12),color:ie.steel,prompt:"E — ПЕРЕДАТЬ СИГНАЛ / 167.05 МГЦ"},sever:{id:"severChoice",pos:new R(0,0,-9.4),color:ie.pale,prompt:"E — РАЗОРВАТЬ РЕЗОНАНС / УЙТИ"}},o={},l={};for(const[u,d]of Object.entries(a)){const h=u==="merge"?new Nn(.65,1):new De(1,.9,1),p=new Te(h,new $e({color:d.color,fog:!0,transparent:!0,opacity:.82}));p.position.set(d.pos.x,u==="merge"?.78:.45,d.pos.z),p.visible=!1,this.root.add(p),o[u]=p,l[u]=this.interactions.add({id:d.id,position:d.pos,radius:1.35,prompt:d.prompt,enabled:!1,onUse:()=>(u==="burn"&&this.slime?.burn?.("collective"),this.quest?.add?.(`ending:${u}`),this.events.emit("game:ending",{ending:u}),!0)})}this.narrative.play("silence","intro"),this.objective.set("resonator","ВЗЯТЬ РЕЗОНАТОР",n);let c=!1;return this.interactions.add({id:"resonatorPickup",position:n,radius:1.05,mode:"pickup",onUse:()=>(this.belt.unlocked.has("resonator")||(this.belt.unlock("resonator",{resonance:60}),i.removeFromParent(),this.objective.set("collective","ИДТИ НА ГОЛОС // ИСПОЛЬЗОВАТЬ РЕЗОНАТОР",r.group.position),this.narrative.play("silence","approach")),!0)}),this.#t("boss:phase",({phase:u})=>{if(u===2){this.narrative.play("silence","phase2"),this.scene.fog=new Fi(11846593,3,15);for(let d=0;d<t.length;d++)t[d].rotation.z=(d%2?1:-1)*.18}else if(u===3){this.narrative.play("silence","phase3"),this.scene.fog=new Fi(8427680,1.5,10);for(let d=0;d<t.length;d++)t[d].position.y=d%2?2.4:.6}}),this.#t("enemy:killed",({enemy:u})=>{if(u!==r)return;c=!0;const d=this.slime?.endingAvailability?.()??{burn:!0,merge:!0,broadcast:!1,sever:!1},h=[];for(const[p,_]of Object.entries(d))!_||!l[p]||(o[p].visible=!0,l[p].enabled=!0,h.push({burn:"СЖЕЧЬ",merge:"СЛИТЬСЯ",broadcast:"ПЕРЕДАТЬ",sever:"РАЗОРВАТЬ"}[p]));this.narrative.play("silence","choice"),d.broadcast?this.narrative.play("silence","broadcastPath"):d.sever&&this.narrative.play("silence","severPath"),this.objective.set("finalChoice",`ВЫБОР: ${h.join(" / ")}`,new R(0,0,-10.8))}),{spawn:{x:0,z:9},yaw:Math.PI,audio:{emitters:[{type:"resonance",x:0,z:-5},{type:"distantPulse",x:-8,z:-2},{type:"whisper",x:8,z:-3},{type:"resonance",x:0,z:6},{type:"whisper",x:0,z:-11}]},update:(u,d)=>{if(c)for(const[h,p]of Object.entries(o))p.visible&&(p.rotation.y+=u*(h==="merge"?.55:.18),p.position.y+=Math.sin(d*1.6+p.position.x)*8e-4);else for(let h=0;h<t.length;h++){const p=t[h];p.position.x+=Math.sin(d*.45+h)*.0015*this.enemies.bossPhase,p.position.z+=Math.cos(d*.42+h)*.0015*this.enemies.bossPhase}}}}}class Pm{constructor({events:e=null,infection:t=null,player:n=null,quest:i=null}={}){this.events=e,this.infection=t,this.player=n,this.quest=i,this.zones=[],this.activeIds=new Set,this.intensity=0,this.hazard=0}clear(){this.zones.length=0,this.activeIds.clear(),this.intensity=0,this.hazard=0}addZone(e){const t={id:e.id,x:e.x??e.position?.x??0,z:e.z??e.position?.z??0,radius:e.radius??1.2,kind:e.kind??"whisper",infectionPerSecond:e.infectionPerSecond??0,calmPerSecond:e.calmPerSecond??0,slowSeconds:e.slowSeconds??0,visualStrength:e.visualStrength??1,entered:!1};return this.zones.push(t),t}attune(e,{infection:t=5,heal:n=0,flag:i=null}={}){const r=`slime:${e}`;if(this.quest?.has(r))return!1;this.quest?.add(r),i&&this.quest?.add(i);const a=this.quest?.increment("slimeAttunement")??1;return t&&this.infection?.add(t,"slimeAttunement"),n&&this.player?.heal(n),this.events?.emit("slime:attuned",{id:e,value:a}),!0}burn(e){const t=`slime:burned:${e}`;if(this.quest?.has(t))return!1;this.quest?.add(t);const n=this.quest?.increment("slimeBurned")??1;return this.events?.emit("slime:burned",{id:e,value:n}),!0}get attunement(){return this.quest?.count("slimeAttunement")??0}get burned(){return this.quest?.count("slimeBurned")??0}update(e,t){let n=0,i=0;const r=new Set;for(const a of this.zones){const o=t.x-a.x,l=t.z-a.z,c=Math.hypot(o,l),u=Math.max(0,1-c/Math.max(.01,a.radius*1.75));n=Math.max(n,u*a.visualStrength),!(c>a.radius)&&(r.add(a.id),this.activeIds.has(a.id)||this.events?.emit("slime:enter",{...a}),a.kind==="hazard"?(i=Math.max(i,u),a.infectionPerSecond&&this.infection?.add(e*a.infectionPerSecond,`slime:${a.id}`),a.slowSeconds&&this.player?.slow(a.slowSeconds)):a.kind==="symbiotic"&&a.calmPerSecond&&this.infection?.reduce(e*a.calmPerSecond,`slimeCalm:${a.id}`))}for(const a of this.activeIds)r.has(a)||this.events?.emit("slime:leave",{id:a});return this.activeIds=r,this.intensity+=(n-this.intensity)*Math.min(1,e*5),this.hazard+=(i-this.hazard)*Math.min(1,e*7),{intensity:this.intensity,hazard:this.hazard}}endingAvailability(){const e=this.attunement,t=!!(this.quest?.has("archiveData")&&this.quest?.has("dossier")&&!this.quest?.has("dossierDestroyed"));return{burn:!0,merge:e>=2,broadcast:e>=3&&t,sever:e<=1&&t}}}class Lm{constructor(e){this.root=e,this.events=new am,this.hud=new hm(e),this.scene=new nl,this.scene.add(new ih(12046789,4608845,1.35)),this.scene.add(new oh(9546398,.62));const t=new ah(14083538,.48);t.position.set(-4,7,3),this.scene.add(t),this.camera=new Vt(68,16/9,.05,60);const n=new Cs(10145209,.34,7.5,2);n.position.set(0,.15,.15),this.camera.add(n),this.scene.add(this.camera),this.retro=new um(this.hud.viewport),this.input=new om(this.retro.renderer.domElement),this.input.bindMobileControls(this.hud.mobileControlElements()),this.random=new lm(4266374),this.textures=new dm(()=>this.random.next()),this.collision=new fm,this.interactions=new pm(this.events),this.triggers=new mm,this.inventory=new gm(4),this.infection=new _m(this.events),this.belt=new vm(this.events),this.crafting=new cm(this.inventory,this.belt,this.events),this.objective=new xm(this.events),this.narrative=new Em(this.events,this.hud),this.audio=new bl({random:()=>this.random.next(),config:Tl()}),this.quest=new Mm(this.events),this.player=new ym({camera:this.camera,input:this.input,collision:this.collision,events:this.events,infection:this.infection}),this.slime=new Pm({events:this.events,infection:this.infection,player:this.player,quest:this.quest}),this.weaponView=new Rm(this.camera),this.sporeManager=new wm({scene:this.scene,inventory:this.inventory,infection:this.infection,events:this.events}),this.enemies=new Tm({scene:this.scene,events:this.events,collision:this.collision,onPlayerDamage:(i,r)=>this.player.damage(i,r),onPlayerSlow:i=>this.player.slow(i),onSporeDrop:(i,r)=>this.sporeManager.spawn(i,r)}),this.weapons=new Am({scene:this.scene,camera:this.camera,input:this.input,belt:this.belt,player:this.player,enemies:this.enemies,collision:this.collision,events:this.events,weaponView:this.weaponView}),this.levelFactory=new Cm({scene:this.scene,collision:this.collision,interactions:this.interactions,triggers:this.triggers,enemies:this.enemies,spores:this.sporeManager,events:this.events,textures:this.textures,objective:this.objective,inventory:this.inventory,belt:this.belt,crafting:this.crafting,narrative:this.narrative,infection:this.infection,player:this.player,hud:this.hud,quest:this.quest,slime:this.slime}),this.clock=new hh,this.time=0,this.currentLevel=null,this.currentLevelContext=null,this.paused=!1,this.started=!1,this.hallucination=0,this.endingEffect=0,this.flicker=0,this.gameEnded=!1,this.orientationBlocked=!1,this.levelTravel=null,this.pendingChoice=null,this.#t(),this.#s(),this.#o(),window.addEventListener("resize",()=>this.#o()),window.addEventListener("orientationchange",()=>this.#o())}start(){const e=()=>{requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.05);this.#i(t)};e()}#t(){this.hud.bindStart(()=>{this.#f(),this.audio.unlock(),this.started||(this.started=!0,this.loadLevel("perimeter")),this.input.requestPointerLock(),this.hud.setPointerLocked(!0)}),this.hud.bindCraft(e=>{this.audio.ui(),this.crafting.craft(e)?this.hud.showMessage("КРАФТ ЗАВЕРШЁН"):this.hud.showMessage("НЕДОСТАТОЧНО РЕСУРСОВ / НЕТ СВОБОДНОГО СЛОТА")}),this.hud.bindEquip((e,t)=>{this.audio.ui(),this.belt.equip(e,t)&&this.hud.showMessage(`СЛОТ ${e+1}: ${t.toUpperCase()}`)}),this.hud.bindChoice(e=>this.#l(e)),this.retro.renderer.domElement.addEventListener("click",()=>{!this.paused&&!this.levelTravel&&this.started&&document.pointerLockElement!==this.retro.renderer.domElement&&this.input.requestPointerLock()})}#s(){this.events.on("ui:message",e=>this.hud.showMessage(e)),this.events.on("choice:request",e=>this.#a(e)),this.events.on("weapon:unlocked",({weapon:e})=>{this.hud.showMessage(`ОРУЖИЕ: ${e.name}`,1.6),this.audio.pickup()}),this.events.on("weapon:empty",()=>{this.hud.showMessage("НЕТ БОЕЗАПАСА"),this.audio.ui()}),this.events.on("weapon:fired",({weapon:e})=>this.audio.shot(e.id)),this.events.on("craft:unlocked",({recipe:e})=>this.hud.showMessage(`СХЕМА КРАФТА: ${e.name}`,1.5)),this.events.on("craft:completed",()=>this.audio.pickup()),this.events.on("spore:collected",()=>{this.hud.showMessage("+1 СПОРА О-41",.65),this.audio.pickup()}),this.events.on("quest:pickup",()=>this.audio.pickup()),this.events.on("slime:attuned",({value:e})=>{this.audio.slimeContact?.(e),this.hud.showMessage(`О-41 // РЕЗОНАНС ${e}`,1.1)}),this.events.on("slime:enter",({kind:e})=>{e==="hazard"&&this.audio.previewAmbient("sporeHiss")}),this.events.on("inventory:full",()=>this.hud.showMessage("РЮКЗАК ЗАПОЛНЕН")),this.events.on("player:damaged",({source:e}={})=>{this.hud.flashDamage(),this.audio.playerHit(e)}),this.events.on("player:died",()=>this.hud.showDeath()),this.events.on("enemy:wail",(e={})=>{this.player.applyWail(),this.hud.jamCompass(),this.audio.wail(e)}),this.events.on("boss:immune",()=>this.hud.showMessage("РЕАКЦИИ НЕТ // НУЖЕН РЕЗОНАТОР",.8)),this.events.on("enemy:damaged",e=>this.audio.enemyHit(e)),this.events.on("enemy:killed",e=>this.audio.enemyDeath(e)),this.events.on("enemy:voice",e=>this.audio.enemyVoice(e)),this.events.on("enemy:attack",e=>this.audio.enemyAttack(e)),this.events.on("enemy:sporeBurst",e=>this.audio.sporeBurst(e)),this.events.on("weapon:fungalBurst",e=>this.audio.fungalBurst(e)),this.events.on("level:exit-opened",()=>this.audio.door()),this.events.on("boss:phase",({phase:e})=>this.audio.bossPhase(e)),this.events.on("player:shield",()=>this.audio.shield()),this.events.on("narrative:line",e=>this.audio.narrativeLine(e)),this.events.on("narrative:end",()=>this.audio.stopRadio()),this.events.on("narrative:interrupt",()=>this.audio.stopRadio()),this.events.on("infection:tier",({to:e})=>{const t=["НОРМА","СПОРЫ В КРОВИ","СЕНСОРНЫЕ СБОИ","РЕЗОНАНС","КРИТИЧЕСКИЙ РЕЗОНАНС"];this.hud.setSystemLine(`БИОСКАНЕР // ${t[e]}`),e>=2&&this.hud.showMessage(t[e],1.2),this.audio.infectionTier(e)}),this.events.on("infection:inhaler",()=>{this.hud.showMessage("ИНГАЛЯТОР // СЕНСОРНАЯ ПОГРЕШНОСТЬ",1.2),this.audio.inhaler()}),this.events.on("world:teleport",({kind:e})=>{this.hud.showMessage(e==="loop"?"КООРДИНАТЫ НЕ ИЗМЕНИЛИСЬ":"ПРОСТРАНСТВЕННАЯ ОШИБКА",.9),this.audio.teleport(e)}),this.events.on("world:hallucination",({active:e})=>{this.hallucination=e?1:0}),this.events.on("world:flicker",({strength:e=1}={})=>{this.flicker=Math.max(this.flicker,e),this.audio.flicker()}),this.events.on("audio:hallucination",()=>{this.audio.tone(72,.42,"sine",.07,18)}),this.events.on("level:complete",({to:e})=>{this.gameEnded||this.levelTravel||(this.audio.transition(),this.#r(e))}),this.events.on("game:ending",({ending:e})=>{this.audio.ending(e),this.gameEnded=!0,this.paused=!0,this.endingEffect={burn:-1,merge:1,broadcast:2,sever:-2}[e]??0,this.hud.showEnding(e),document.exitPointerLock?.()})}loadLevel(e){this.narrative.interrupt(),this.weapons.clear(),this.currentLevel=e,this.currentLevelContext=this.levelFactory.load(e),this.audio.setLevel(e,this.currentLevelContext.audio??{}),this.player.resetForLevel(this.currentLevelContext.spawn,this.currentLevelContext.yaw);const t=gr[e];this.hud.showTransition(t),this.hud.setSystemLine(`К.О.Н.Т.У.Р. // ${t.title} // ${t.contour}`),this.#o()}#i(e){if(this.time+=e,this.flicker=Math.max(0,this.flicker-e*3.2),!this.started){this.retro.render(this.scene,this.camera,this.time,{});return}!this.pendingChoice&&!this.levelTravel&&this.input.consume("KeyI")&&!this.gameEnded&&!this.player.dead&&(this.paused=!this.paused,this.hud.setPauseVisible(this.paused),this.audio.ui(),this.paused?document.exitPointerLock?.():this.input.requestPointerLock()),this.input.consume("Space")&&this.narrative.skip(),this.input.consume("KeyM")&&this.hud.showMessage(this.audio.toggleMute()?"ЗВУК // ВЫКЛ":"ЗВУК // ВКЛ",.7),this.input.consume("KeyR")&&this.player.dead&&location.reload(),this.#d(e),!this.paused&&!this.pendingChoice&&!this.levelTravel&&!this.orientationBlocked&&!this.player.dead&&!this.gameEnded?(this.input.consume("KeyH")&&this.#n(),this.input.consume("KeyQ")&&this.#e(),this.player.update(e,!1),this.weapons.update(e,!1),this.enemies.update(e,this.player.position),this.sporeManager.update(this.time,this.player.position),this.slime.update(e,this.player.position),this.interactions.update(this.player.position,this.input,this.hud),this.triggers.update(this.player.position),this.levelFactory.update(e),this.levelTravel||(this.infection.update(e),this.narrative.update(e))):(this.player.update(e,!0),this.weapons.update(e,!0),this.infection.update(e),this.narrative.update(e));const t=gr[this.currentLevel],n=!this.paused&&!this.orientationBlocked&&!this.player.dead&&this.input.isMoving();let i=1/0;for(const a of this.enemies.enemies)a.alive&&(i=Math.min(i,a.group.position.distanceTo(this.player.position)));const r=Number.isFinite(i)?Math.max(0,1-i/7):0;this.audio.update(e,{level:this.currentLevel,position:this.player.position,yaw:this.player.yaw,health:this.player.health,maxHealth:this.player.maxHealth,infection:this.infection.value/100,danger:r,moving:n,slowed:this.player.slowTimer>0,paused:this.paused||!!this.levelTravel||!!this.pendingChoice,dead:this.player.dead}),this.hud.update(e,{player:this.player,infection:this.infection,inventory:this.inventory,belt:this.belt,crafting:this.crafting,objective:this.objective,enemies:this.enemies,spores:this.sporeManager,levelMeta:t,slime:this.slime}),this.retro.render(this.scene,this.camera,this.time,{infection:this.infection.distortion,wail:this.enemies.wailDistortion,hive:this.enemies.hiveDistortion,slime:this.slime.intensity,slimeHazard:this.slime.hazard,hallucination:this.hallucination,ending:this.endingEffect,flicker:this.flicker}),this.input.endFrame()}#n(){if(!this.inventory.remove("inhaler",1)){this.hud.showMessage("ИНГАЛЯТОР НЕ СОБРАН");return}this.infection.useInhaler(),this.player.heal(1.5)}#e(){if(!this.inventory.remove("shield",1)){this.hud.showMessage("ЩИТ НЕ СОБРАН");return}this.player.activateShield(6)}#o(){const e=this.input.isTouchDevice();this.orientationBlocked=e&&window.innerHeight>window.innerWidth,this.input.setMobileEnabled(e&&!this.orientationBlocked),this.hud.setOrientationWarning(this.orientationBlocked);const{aspect:t}=this.retro.resize();this.camera.aspect=t,this.camera.updateProjectionMatrix()}#r(e){const t=gr[e];t&&(this.levelTravel={to:e,elapsed:0,loaded:!1},this.input.clearMobileState(),document.exitPointerLock?.(),this.hud.setLevelTravel(t))}#a(e){this.pendingChoice||!e?.id||(this.pendingChoice=e,this.input.clearMobileState(),document.exitPointerLock?.(),this.hud.showChoice(e))}#l(e){if(!this.pendingChoice)return;const{id:t}=this.pendingChoice;this.pendingChoice=null,this.hud.hideChoice(),this.events.emit("choice:resolved",{id:t,option:e}),!this.orientationBlocked&&!this.paused&&this.input.requestPointerLock()}#d(e){this.levelTravel&&(this.levelTravel.elapsed+=e,!this.levelTravel.loaded&&this.levelTravel.elapsed>=.72&&(this.levelTravel.loaded=!0,this.loadLevel(this.levelTravel.to)),this.levelTravel.elapsed>=1.9&&(this.hud.clearLevelTravel(),this.levelTravel=null))}async#f(){if(this.input.isTouchDevice())try{const e=document.documentElement,t=e.requestFullscreen??e.webkitRequestFullscreen;!document.fullscreenElement&&t&&await t.call(e,{navigationUI:"hide"}),await screen.orientation?.lock?.("landscape")}catch{}}}const Dm=document.querySelector("#app"),gl=new Lm(Dm);gl.start();window.__KONTUR041__=gl;
//# sourceMappingURL=game-CgzDb_rx.js.map
