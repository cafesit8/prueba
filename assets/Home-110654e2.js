import{u as w,r as n,C as d,j as s,D as m,a as N,g as v}from"./index-5879b3f9.js";const C=v`
  query Countries{
    countries{
      name
      capital
      continent{
        name
      }
      currencies
      languages{
        name
      }
    }
  }
`;function R(){const{data:l,loading:r}=w(C),{countryFound:e,setInfo:x}=n.useContext(d),[t,g]=n.useState([]),h=a=>x(a);n.useEffect(()=>{r||p()},[l==null?void 0:l.countries]);async function p(){var f,o;const a=[],j=(l==null?void 0:l.countries.slice(0,20)).map(c=>fetch(`https://restcountries.com/v3.1/name/${c.name}?fields=flags`).then(i=>i.json()).then(i=>{a.push(i[0].flags.png)}));a.sort(),await Promise.all(j);const u=(o=(f=l==null?void 0:l.countries)==null?void 0:f.slice(0,20))==null?void 0:o.map((c,i)=>({...c,flag:a[i]}));g(u)}return e?s.jsxs("main",{className:"w-full flex gap-4 h-[90%]",children:[s.jsx("section",{className:"w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",children:s.jsxs("article",{onClick:()=>h(e),className:"h-44 w-[250px] relative flex flex-col overflow-hidden rounded-2xl",children:[s.jsx("div",{className:"w-full h-[70%] bg-red-200",children:s.jsx("img",{src:e==null?void 0:e.flag,alt:`${e==null?void 0:e.name}'s flag`})}),s.jsxs("div",{className:"w-full h-[30%] bg-white flex gap-4 px-4",children:[s.jsx("picture",{className:"w-[50px]",children:s.jsx("img",{className:"w-full h-full object-contain",src:e==null?void 0:e.flag,alt:`${e==null?void 0:e.name}'s flag`})}),s.jsxs("div",{className:"flex flex-col justify-center",children:[s.jsx("h5",{className:"font-bold",children:e==null?void 0:e.name}),(e==null?void 0:e.continent)&&s.jsx("p",{className:"text-gray-500",children:e.continent.name})]})]})]})}),s.jsx(m,{})]}):s.jsxs("main",{className:"w-full flex gap-4 h-[90%]",children:[s.jsx("section",{className:"w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",children:r?"Cargando...":t==null?void 0:t.map(a=>s.jsx(N,{item:a},a.name))}),s.jsx(m,{})]})}export{R as default};
