import{j as r}from"./index-D-guvsd-.js";const b=({message:e,...t})=>e&&typeof e=="string"&&r.jsx("span",{...t,className:"text-red-500 text-[14px]",children:e}),u=({onChange:e,onBlur:t,label:a,name:i,placeholder:s="",error:o,value:d="",invalid:l,required:n=!0,type:m="text"})=>(console.log("CustomInput rendered",l),r.jsxs("div",{className:"w-full",children:[r.jsx("label",{className:"mb-2.5 block text-black dark:text-white",children:a}),r.jsx("input",{type:m,placeholder:s,name:i,onBlur:t,value:d,onChange:e,required:n,className:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"}),r.jsx(b,{message:o})]})),p=({disabled:e})=>r.jsx("button",{disabled:e,type:"submit",className:"flex w-full disabled:animate-ping-once justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90",children:e?"Submiting...":"Submit"}),x=({label:e,value:t,name:a,onChange:i})=>{const s=o=>o instanceof File?URL.createObjectURL(o):"";return r.jsxs("div",{children:[r.jsx("label",{className:"mb-3 block text-black dark:text-white",children:e}),r.jsx("input",{name:a,onChange:i,type:"file",className:"w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"}),typeof t=="string"&&t?r.jsx("img",{className:"mx-auto my-2 max-w-[150px] max-h-[100px] rounded-md",src:t,alt:"Edit Image"}):r.jsx("img",{className:"mx-auto my-2 max-w-[150px] max-h-[100px] rounded-md",src:s(t),alt:""})]})};export{u as C,b as E,x as a,p as b};
