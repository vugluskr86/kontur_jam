class Vec3 {
  constructor(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z;}
  set(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z;return this;}
  copy(v){this.x=v.x;this.y=v.y;this.z=v.z;return this;}
  clone(){return new Vec3(this.x,this.y,this.z);}
  sub(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;return this;}
  add(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;return this;}
  addScaledVector(v,s){this.x+=v.x*s;this.y+=v.y*s;this.z+=v.z*s;return this;}
  multiplyScalar(s){this.x*=s;this.y*=s;this.z*=s;return this;}
  length(){return Math.hypot(this.x,this.y,this.z);}
  lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z;}
  normalize(){const l=this.length()||1;return this.multiplyScalar(1/l);}
  distanceTo(v){return Math.hypot(this.x-v.x,this.y-v.y,this.z-v.z);}
  distanceToSquared(v){const x=this.x-v.x,y=this.y-v.y,z=this.z-v.z;return x*x+y*y+z*z;}
  dot(v){return this.x*v.x+this.y*v.y+this.z*v.z;}
  setScalar(s){this.x=this.y=this.z=s;return this;}
}
class Node {
  constructor(){
    this.children=[];this.parent=null;this.position=new Vec3();this.rotation={x:0,y:0,z:0};
    this.scale={x:1,y:1,z:1,setScalar(s){this.x=this.y=this.z=s;},set(x,y,z){this.x=x;this.y=y;this.z=z;}};
    this.visible=true;this.userData={};this.name='';
  }
  add(...nodes){for(const n of nodes){if(!n)continue;n.parent=this;this.children.push(n);}return this;}
  remove(node){const i=this.children.indexOf(node);if(i>=0)this.children.splice(i,1);if(node)node.parent=null;}
  removeFromParent(){this.parent?.remove(this);return this;}
}
export class Group extends Node {}
export class Scene extends Group { constructor(){super();this.background=null;this.fog=null;} }
export class Mesh extends Node { constructor(geometry=null,material=null){super();this.geometry=geometry;this.material=material;} }
class Geometry { constructor(...args){this.args=args;} }
export class PlaneGeometry extends Geometry {}
export class BoxGeometry extends Geometry {}
export class SphereGeometry extends Geometry {}
export class CylinderGeometry extends Geometry {}
export class OctahedronGeometry extends Geometry {}
export class IcosahedronGeometry extends Geometry {}
export class MeshBasicMaterial { constructor(opts={}){Object.assign(this,opts);} clone(){return new MeshBasicMaterial({...this});} }
export class MeshLambertMaterial extends MeshBasicMaterial { constructor(opts={}){super(opts);} clone(){return new MeshLambertMaterial({...this});} }
export class PointLight extends Node { constructor(color,intensity=1,distance=0,decay=1){super();this.color=new Color(color);this.intensity=intensity;this.distance=distance;this.decay=decay;} }
export class AmbientLight extends PointLight {}
export class HemisphereLight extends PointLight {}
export class DirectionalLight extends PointLight {}
export class Color { constructor(value){this.value=value;} setHex(value){this.value=value;return this;} }
export class Fog { constructor(color,near,far){this.color=color;this.near=near;this.far=far;} }
export class Vector3 extends Vec3 {}
export const MathUtils={clamp:(v,a,b)=>Math.max(a,Math.min(b,v))};
export const NearestFilter=1,NearestMipmapNearestFilter=2,RepeatWrapping=3,SRGBColorSpace='srgb';
export class CanvasTexture { constructor(){this.repeat={set(){}};} clone(){return this;} }
