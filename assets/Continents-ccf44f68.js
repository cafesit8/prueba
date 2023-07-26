import{u as w,r,C as N,j as s,D as m,a as u,g as v}from"./index-5879b3f9.js";const C=v`
  query Continents{
    continents {
      name
      countries {
        capital
        currency
        languages {
          name
        }
      } 
    }
  }
`;function E(){const{data:a,loading:f}=w(C),{countryFound:e,setInfo:x}=r.useContext(N),[c,g]=r.useState(),h=l=>x(l);r.useEffect(()=>{f||p()},[a==null?void 0:a.continents]);async function p(){const l=[],i=a==null?void 0:a.continents,j=i.map(n=>fetch(`https://pixabay.com/api/?key=38450255-c3e49e8ff0a06c8f5abef59b2&q=landscape+of+${n.name}&image_type=photo`).then(t=>t.json()).then(t=>{var o;l.push((o=t.hits[1])==null?void 0:o.previewURL)}));l.sort(),await Promise.all(j);const d=i==null?void 0:i.map((n,t)=>({...n,flag:l[t]}));g(d)}return e?s.jsxs("main",{className:"w-full flex gap-4 h-[90%]",children:[s.jsx("section",{className:"w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",children:s.jsxs("article",{onClick:()=>h(e),className:"h-44 w-[250px] relative flex flex-col overflow-hidden rounded-2xl",children:[s.jsx("div",{className:"w-full h-[70%] bg-red-200",children:s.jsx("img",{src:e==null?void 0:e.flag,alt:`${e==null?void 0:e.name}'s flag`})}),s.jsxs("div",{className:"w-full h-[30%] bg-white flex gap-4 px-4",children:[s.jsx("picture",{className:"w-[50px]",children:s.jsx("img",{className:"w-full h-full object-contain",src:e==null?void 0:e.flag,alt:`${e==null?void 0:e.name}'s flag`})}),s.jsxs("div",{className:"flex flex-col justify-center",children:[s.jsx("h5",{className:"font-bold",children:e==null?void 0:e.name}),(e==null?void 0:e.continent)&&s.jsx("p",{className:"text-gray-500",children:e.continent.name})]})]})]})}),s.jsx(m,{})]}):s.jsxs("main",{className:"w-full flex gap-4 h-[90%]",children:[s.jsx("section",{className:"w-full h-auto lg:h-[380px] relative lg:overflow-auto overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4",children:f?"Cargando...":c==null?void 0:c.map(l=>s.jsx(u,{item:l},l.name))}),s.jsx(m,{})]})}export{E as default};
