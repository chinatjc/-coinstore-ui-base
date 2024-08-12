import{j as a}from"./jsx-runtime-DEdD30eg.js";import{c as x}from"./index-Dejnh_W_.js";import q from"./index-CXhYJQou.js";import"./index-RYns6xqu.js";import"./index-CcnH5Kt0.js";import"./index-Dsv3XtS8.js";import"./iframe-BNd8Jdfa.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";const t=({className:l,children:e,disabled:_=!1,size:d="middle",type:i="default",onClick:b})=>a.jsx("button",{className:x("btn",{[`btn-${d}`]:d!=="middle",[`btn-${i}`]:i!=="default"},l),disabled:_,onClick:b,children:e});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"middle"'},{value:'"small"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"middle"'},{value:'"small"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"middle"'},{value:'"small"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const T={title:"Component/Button",component:t,tags:["autodocs"],parameters:{docs:{page:q}}},r={args:{children:"button"},render:({type:l,...e})=>a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx(t,{...e,type:"default"}),a.jsx(t,{...e,type:"primary"}),a.jsx(t,{...e,type:"danger"})]})},s={args:{children:"button"},render:({size:l,...e})=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[a.jsx(t,{...e,size:"large"}),a.jsx(t,{...e,size:"middle"}),a.jsx(t,{...e,size:"small"})]})},n={args:{type:"primary",disabled:!0,children:"button"}};var u,o,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'button'
  },
  render: ({
    type: _,
    ...props
  }) => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      <Button {...props} type="default" />
      <Button {...props} type="primary" />
      <Button {...props} type="danger" />
    </div>
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,c,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'button'
  },
  render: ({
    size: _,
    ...props
  }) => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px'
  }}>
      <Button {...props} size="large" />
      <Button {...props} size="middle" />
      <Button {...props} size="small" />
    </div>
}`,...(y=(c=s.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var f,v,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    disabled: true,
    children: 'button'
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const D=["Type","Size","Disabled"];export{n as Disabled,s as Size,r as Type,D as __namedExportsOrder,T as default};
