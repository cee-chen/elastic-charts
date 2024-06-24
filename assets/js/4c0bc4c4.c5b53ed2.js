"use strict";(self.webpackChunkelastic_charts_docs=self.webpackChunkelastic_charts_docs||[]).push([[39154],{46970:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(74848),r=t(28453);const a={},i=void 0,c={id:"all-types/type-aliases/RecursivePartial",title:"RecursivePartial",description:"@elastic/charts \u2022 Exports",source:"@site/docs/all-types/type-aliases/RecursivePartial.md",sourceDirName:"all-types/type-aliases",slug:"/all-types/type-aliases/RecursivePartial",permalink:"/elastic-charts/all-types/type-aliases/RecursivePartial",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"RectAnnotationStyle",permalink:"/elastic-charts/all-types/type-aliases/RectAnnotationStyle"},next:{title:"RelativeBandsPadding",permalink:"/elastic-charts/all-types/type-aliases/RelativeBandsPadding"}},l={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Source",id:"source",level:2}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"@elastic/charts"})," \u2022 ",(0,n.jsx)(s.a,{href:"/elastic-charts/all-types/",children:"Exports"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/elastic-charts/all-types/",children:"@elastic/charts"})," / RecursivePartial"]}),"\n",(0,n.jsx)(s.h1,{id:"type-alias-recursivepartialt",children:"Type alias: RecursivePartial<T>"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"RecursivePartial"}),"<",(0,n.jsx)(s.code,{children:"T"}),">: ",(0,n.jsx)(s.code,{children:"{ [P in keyof T]?: T[P] extends NonAny[] ? T[P] : T[P] extends ReadonlyArray<NonAny> ? T[P] : T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<RecursivePartial<U>> : T[P] extends Set<infer V> ? Set<RecursivePartial<V>> : T[P] extends Map<infer K, infer V> ? Map<K, RecursivePartial<V>> : T[P] extends NonAny ? T[P] : IsUnknown<T[P], 1, 0> extends 1 ? T[P] : RecursivePartial<T[P]> }"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Replaces all properties on any type as optional, includes nested types"}),"\n",(0,n.jsx)(s.p,{children:"example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"interface Person {\n name: string;\n age?: number;\n spouse: Person;\n children: Person[];\n}\ntype PartialPerson = RecursivePartial<Person>;\n// results in\ninterface PartialPerson {\n name?: string;\n age?: number;\n spouse?: RecursivePartial<Person>;\n children?: RecursivePartial<Person>[]\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"T"})]}),"\n",(0,n.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/elastic/elastic-charts/blob/040c354d34/packages/charts/src/utils/common.tsx#L207",children:"packages/charts/src/utils/common.tsx:207"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["Generated using ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/typedoc-plugin-markdown",children:"typedoc-plugin-markdown"})," and ",(0,n.jsx)(s.a,{href:"https://typedoc.org/",children:"TypeDoc"})]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(96540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);