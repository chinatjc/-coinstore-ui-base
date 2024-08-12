import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as u}from"./index-RYns6xqu.js";import{c as h}from"./index-Dejnh_W_.js";import D from"./index-D9g2i3gI.js";import"./index-CcnH5Kt0.js";import"./index-Dsv3XtS8.js";import"./iframe-BNd8Jdfa.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";const r=({defaultTabKey:n,className:l,type:V="line",items:a,onSelect:p})=>{const[i,w]=u.useState(()=>{var e;return n&&a.find(({key:s})=>n===s)?n:((e=a[0])==null?void 0:e.key)??null}),I=u.useMemo(()=>{var e;return(e=a.find(({key:s})=>s===i))==null?void 0:e.children},[a,i]),C=u.useCallback(e=>{w(e),p&&p(e)},[p]);return!!a.length&&t.jsxs("div",{className:h("tabs",l),children:[t.jsx("ul",{role:"tablist",className:h("tabs-nav",`nav-${V}`),children:a.map(({key:e,label:s,disabled:y})=>t.jsx("li",{role:"tab","aria-selected":i===e,className:h("tabs-nav-item",{"is-active":i===e,disabled:y}),onClick:()=>{y||C(e)},children:s},e))}),t.jsx("div",{className:"tabs-content",children:I})]})};try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{defaultTabKey:{defaultValue:null,description:"",name:"defaultTabKey",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItemType[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedKey: string) => void)"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"",displayName:"tabs",props:{defaultTabKey:{defaultValue:null,description:"",name:"defaultTabKey",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItemType[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedKey: string) => void)"}}}}}catch{}const H={title:"Component/Tabs",component:r,tags:["autodocs"],parameters:{docs:{page:D}},argTypes:{defaultTabKey:{control:!1},items:{table:{type:{detail:`interface TabItemType {
  key: TabItemKey;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
}`}}}}},o={args:{items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]}},c={args:{items:[{key:"4",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]},render:({type:n,...l})=>t.jsxs(t.Fragment,{children:[t.jsx(r,{...l}),t.jsx("br",{}),t.jsx(r,{...l,type:"card"})]})},d={args:{defaultTabKey:"2",items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two"},{key:"3",label:"选项卡三",children:"this is content three"}]}},m={args:{items:[{key:"1",label:"选项卡一",children:"this is content one"},{key:"2",label:"选项卡二",children:"this is content two",disabled:!0},{key:"3",label:"选项卡三",children:"this is content three"}]}};var b,f,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,k,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '4',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  },
  render: ({
    type: _,
    ...props
  }) => <>
      <Tabs {...props} />
      <br />
      <Tabs {...props} type="card" />
    </>
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var v,N,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultTabKey: '2',
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two'
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(x=(N=d.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var K,j,q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: '选项卡一',
      children: 'this is content one'
    }, {
      key: '2',
      label: '选项卡二',
      children: 'this is content two',
      disabled: true
    }, {
      key: '3',
      label: '选项卡三',
      children: 'this is content three'
    }]
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const J=["Default","Type","DefaultTabItemKey","Disabled"];export{o as Default,d as DefaultTabItemKey,m as Disabled,c as Type,J as __namedExportsOrder,H as default};
