import{a as p,b as m,h as r,e as c}from"./entry.05b32a35.js";const s=p({name:"ContentList",props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(d){const e=m(),{path:f,query:o}=d,i=Object.assign(o||{},{path:f}),u=(t,n)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return r(c,i,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:a})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:a,...this.$attrs}):({data:t})=>u("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>u("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:a})=>u("not-found",a)}})}});export{s as default};
