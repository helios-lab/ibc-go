"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8613],{38130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var i=n(85893),s=n(11151);const c={title:"Concepts",sidebar_label:"Concepts",sidebar_position:2,slug:"/ibc/light-clients/wasm/concepts"},l="Concepts",a={id:"light-clients/wasm/concepts",title:"Concepts",description:"Learn about the differences between a proxy light client and a Wasm light client.",source:"@site/versioned_docs/version-v8.3.x/03-light-clients/04-wasm/02-concepts.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/concepts",permalink:"/v8/ibc/light-clients/wasm/concepts",draft:!1,unlisted:!1,tags:[],version:"v8.3.x",sidebarPosition:2,frontMatter:{title:"Concepts",sidebar_label:"Concepts",sidebar_position:2,slug:"/ibc/light-clients/wasm/concepts"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v8/ibc/light-clients/wasm/overview"},next:{title:"Integration",permalink:"/v8/ibc/light-clients/wasm/integration"}},o={},r=[{value:"Proxy light client",id:"proxy-light-client",level:2},{value:"<code>ClientState</code>",id:"clientstate",level:3},{value:"<code>ConsensusState</code>",id:"consensusstate",level:3},{value:"<code>ClientMessage</code>",id:"clientmessage",level:3},{value:"Wasm light client",id:"wasm-light-client",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(t.p,{children:"Learn about the differences between a proxy light client and a Wasm light client."}),"\n",(0,i.jsx)(t.h2,{id:"proxy-light-client",children:"Proxy light client"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"08-wasm"})," module is not a regular light client in the same sense as, for example, the 07-tendermint light client. ",(0,i.jsx)(t.code,{children:"08-wasm"})," is instead a ",(0,i.jsx)(t.em,{children:"proxy"})," light client module, and this means that the module acts a proxy to the actual implementations of light clients. The module will act as a wrapper for the actual light clients uploaded as Wasm byte code and will delegate all operations to them (i.e. ",(0,i.jsx)(t.code,{children:"08-wasm"})," just passes through the requests to the Wasm light clients). Still, the ",(0,i.jsx)(t.code,{children:"08-wasm"})," module implements all the required interfaces necessary to integrate with core IBC, so that 02-client can call into it as it would for any other light client module. These interfaces are ",(0,i.jsx)(t.code,{children:"ClientState"}),", ",(0,i.jsx)(t.code,{children:"ConsensusState"})," and ",(0,i.jsx)(t.code,{children:"ClientMessage"}),", and we will describe them in the context of ",(0,i.jsx)(t.code,{children:"08-wasm"})," in the following sections. For more information about this set of interfaces, please read section ",(0,i.jsx)(t.a,{href:"/v8/ibc/light-clients/overview#overview",children:"Overview of the light client module developer guide"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"clientstate",children:(0,i.jsx)(t.code,{children:"ClientState"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"08-wasm"}),"'s ",(0,i.jsx)(t.code,{children:"ClientState"})," data structure contains three fields:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Data"})," contains the bytes of the Protobuf-encoded client state of the underlying light client implemented as a Wasm contract. For example, if the Wasm light client contract implements the GRANDPA light client algorithm, then ",(0,i.jsx)(t.code,{children:"Data"})," will contain the bytes for a ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/blob/02ce69e2843e7986febdcf795f69a757ce569272/light-clients/ics10-grandpa/src/proto/grandpa.proto#L35-L60",children:"GRANDPA client state"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Checksum"})," is the sha256 hash of the Wasm contract's byte code. This hash is used as an identifier to call the right contract."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"LatestHeight"})," is the latest height of the counterparty state machine (i.e. the height of the blockchain), whose consensus state the light client tracks."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type ClientState struct {\n  // bytes encoding the client state of the underlying \n  // light client implemented as a Wasm contract\n  Data         []byte\n  // sha256 hash of Wasm contract byte code\n  Checksum     []byte\n  // latest height of the counterparty ledger\n  LatestHeight types.Height\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["See section ",(0,i.jsxs)(t.a,{href:"/v8/ibc/light-clients/overview#clientstate",children:[(0,i.jsx)(t.code,{children:"ClientState"})," of the light client module developer guide"]})," for more information about the ",(0,i.jsx)(t.code,{children:"ClientState"})," interface."]}),"\n",(0,i.jsx)(t.h3,{id:"consensusstate",children:(0,i.jsx)(t.code,{children:"ConsensusState"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"08-wasm"}),"'s ",(0,i.jsx)(t.code,{children:"ConsensusState"})," data structure maintains one field:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Data"})," contains the bytes of the Protobuf-encoded consensus state of the underlying light client implemented as a Wasm contract. For example, if the Wasm light client contract implements the GRANDPA light client algorithm, then ",(0,i.jsx)(t.code,{children:"Data"})," will contain the bytes for a ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/blob/02ce69e2843e7986febdcf795f69a757ce569272/light-clients/ics10-grandpa/src/proto/grandpa.proto#L87-L94",children:"GRANDPA consensus state"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type ConsensusState struct {\n  // bytes encoding the consensus state of the underlying light client\n  // implemented as a Wasm contract.\n  Data []byte\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["See section ",(0,i.jsxs)(t.a,{href:"/v8/ibc/light-clients/overview#consensusstate",children:[(0,i.jsx)(t.code,{children:"ConsensusState"})," of the light client module developer guide"]})," for more information about the ",(0,i.jsx)(t.code,{children:"ConsensusState"})," interface."]}),"\n",(0,i.jsx)(t.h3,{id:"clientmessage",children:(0,i.jsx)(t.code,{children:"ClientMessage"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ClientMessage"})," is used for performing updates to a ",(0,i.jsx)(t.code,{children:"ClientState"})," stored on chain. The ",(0,i.jsx)(t.code,{children:"08-wasm"}),"'s ",(0,i.jsx)(t.code,{children:"ClientMessage"})," data structure maintains one field:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Data"})," contains the bytes of the Protobuf-encoded header(s) or misbehaviour for the underlying light client implemented as a Wasm contract. For example, if the Wasm light client  contract implements the GRANDPA light client algorithm, then ",(0,i.jsx)(t.code,{children:"Data"})," will contain the bytes of either ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/blob/02ce69e2843e7986febdcf795f69a757ce569272/light-clients/ics10-grandpa/src/proto/grandpa.proto#L96-L104",children:"header"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/blob/02ce69e2843e7986febdcf795f69a757ce569272/light-clients/ics10-grandpa/src/proto/grandpa.proto#L106-L112",children:"misbehaviour"})," for a GRANDPA light client."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"type ClientMessage struct {\n  // bytes encoding the header(s) or misbehaviour for the underlying light client\n  // implemented as a Wasm contract.\n  Data []byte\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["See section ",(0,i.jsxs)(t.a,{href:"/v8/ibc/light-clients/overview#clientmessage",children:[(0,i.jsx)(t.code,{children:"ClientMessage"})," of the light client module developer guide"]})," for more information about the ",(0,i.jsx)(t.code,{children:"ClientMessage"})," interface."]}),"\n",(0,i.jsx)(t.h2,{id:"wasm-light-client",children:"Wasm light client"}),"\n",(0,i.jsxs)(t.p,{children:["The actual light client can be implemented in any language that compiles to Wasm and implements the interfaces of a ",(0,i.jsx)(t.a,{href:"https://docs.cosmwasm.com/docs/",children:"CosmWasm"})," contract. Even though in theory other languages could be used, in practice (at least for the time being) the most suitable language to use would be Rust, since there is already good support for it for developing CosmWasm smart contracts."]}),"\n",(0,i.jsxs)(t.p,{children:["At the moment of writing there are two contracts available: one for ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/tree/master/light-clients/ics07-tendermint-cw",children:"Tendermint"})," and one ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc/tree/master/light-clients/ics10-grandpa-cw",children:"GRANDPA"})," (which is being used in production in ",(0,i.jsx)(t.a,{href:"https://github.com/ComposableFi/composable-ibc",children:"Composable Finance's Centauri bridge"}),"). And there are others in development (e.g. for Near)."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(67294);const s={},c=i.createContext(s);function l(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);