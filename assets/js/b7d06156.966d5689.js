"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6761],{15074:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=i(85893),t=i(11151);const s={title:"IBC-Go v3 to v4",sidebar_label:"IBC-Go v3 to v4",sidebar_position:5,slug:"/migrations/v3-to-v4"},r="Migrating from ibc-go v3 to v4",a={id:"migrations/v3-to-v4",title:"IBC-Go v3 to v4",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v4.6.x/04-migrations/05-v3-to-v4.md",sourceDirName:"04-migrations",slug:"/migrations/v3-to-v4",permalink:"/v4/migrations/v3-to-v4",draft:!1,unlisted:!1,tags:[],version:"v4.6.x",sidebarPosition:5,frontMatter:{title:"IBC-Go v3 to v4",sidebar_label:"IBC-Go v3 to v4",sidebar_position:5,slug:"/migrations/v3-to-v4"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v2 to v3",permalink:"/v4/migrations/v2-to-v3"}},c={},d=[{value:"Chains",id:"chains",level:2},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts",level:3},{value:"ICS29 - Fee Middleware",id:"ics29---fee-middleware",level:3},{value:"Migration to fix support for base denoms with slashes",id:"migration-to-fix-support-for-base-denoms-with-slashes",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"ICS03 - Connection",id:"ics03---connection",level:3},{value:"ICS04 - Channel",id:"ics04---channel",level:3},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts-1",level:3},{value:"Relayers",id:"relayers",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"migrating-from-ibc-go-v3-to-v4",children:"Migrating from ibc-go v3 to v4"}),"\n",(0,o.jsx)(n.p,{children:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."}),"\n",(0,o.jsx)(n.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Chains"}),"\n",(0,o.jsx)(n.li,{children:"IBC Apps"}),"\n",(0,o.jsx)(n.li,{children:"Relayers"}),"\n",(0,o.jsx)(n.li,{children:"IBC Light Clients"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"github.com/cosmos/ibc-go/v3 -> github.com/cosmos/ibc-go/v4\n"})}),"\n",(0,o.jsx)(n.p,{children:"No genesis or in-place migrations required when upgrading from v1 or v2 of ibc-go."}),"\n",(0,o.jsx)(n.h2,{id:"chains",children:"Chains"}),"\n",(0,o.jsx)(n.h3,{id:"ics27---interchain-accounts",children:"ICS27 - Interchain Accounts"}),"\n",(0,o.jsxs)(n.p,{children:["The controller submodule implements now the 05-port ",(0,o.jsx)(n.code,{children:"Middleware"})," interface instead of the 05-port ",(0,o.jsx)(n.code,{children:"IBCModule"})," interface. Chains that integrate the controller submodule, need to create it with the ",(0,o.jsx)(n.code,{children:"NewIBCMiddleware"})," constructor function. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"- icacontroller.NewIBCModule(app.ICAControllerKeeper, icaAuthIBCModule)\n+ icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"icaAuthIBCModule"})," is the Interchain Accounts authentication IBC Module."]}),"\n",(0,o.jsx)(n.h3,{id:"ics29---fee-middleware",children:"ICS29 - Fee Middleware"}),"\n",(0,o.jsx)(n.p,{children:"The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly."}),"\n",(0,o.jsxs)(n.p,{children:["Please read the Fee Middleware ",(0,o.jsx)(n.a,{href:"https://ibc.cosmos.network/main/middleware/ics29-fee/integration.html",children:"integration documentation"})," for an in depth guide on how to congfigure the module correctly in order to incentivize IBC packets."]}),"\n",(0,o.jsxs)(n.p,{children:["Take a look at the following diff for an ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/1432/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08aL366",children:"example setup"})," of how to incentivize ics27 channels."]}),"\n",(0,o.jsx)(n.h3,{id:"migration-to-fix-support-for-base-denoms-with-slashes",children:"Migration to fix support for base denoms with slashes"}),"\n",(0,o.jsxs)(n.p,{children:["As part of ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/releases/tag/v1.5.0",children:"v1.5.0"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/releases/tag/v2.3.0",children:"v2.3.0"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/releases/tag/v3.1.0",children:"v3.1.0"})," some ",(0,o.jsx)(n.a,{href:"/v4/migrations/support-denoms-with-slashes#upgrade-proposal",children:"migration handler code sample was documented"})," that needs to run in order to correct the trace information of coins transferred using ICS20 whose base denom contains slashes."]}),"\n",(0,o.jsx)(n.p,{children:"Based on feedback from the community we add now an improved solution to run the same migration that does not require copying a large piece of code over from the migration document, but instead requires only adding a one-line upgrade handler."}),"\n",(0,o.jsxs)(n.p,{children:["If the chain will migrate to supporting base denoms with slashes, it must set the appropriate params during the execution of the upgrade handler in ",(0,o.jsx)(n.code,{children:"app.go"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'app.UpgradeKeeper.SetUpgradeHandler("MigrateTraces",\n    func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n        // transfer module consensus version has been bumped to 2\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    })\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect."}),"\n",(0,o.jsxs)(n.p,{children:["E.g. If a base denom of ",(0,o.jsx)(n.code,{children:"testcoin/testcoin/testcoin"})," is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: ",(0,o.jsx)(n.code,{children:'Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"'}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes."}),"\n",(0,o.jsx)(n.h2,{id:"ibc-apps",children:"IBC Apps"}),"\n",(0,o.jsx)(n.h3,{id:"ics03---connection",children:"ICS03 - Connection"}),"\n",(0,o.jsxs)(n.p,{children:["Crossing hellos have been removed from 03-connection handshake negotiation.\n",(0,o.jsx)(n.code,{children:"PreviousConnectionId"})," in ",(0,o.jsx)(n.code,{children:"MsgConnectionOpenTry"})," has been deprecated and is no longer used by core IBC."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"NewMsgConnectionOpenTry"})," no longer takes in the ",(0,o.jsx)(n.code,{children:"PreviousConnectionId"})," as crossing hellos are no longer supported. A non-empty ",(0,o.jsx)(n.code,{children:"PreviousConnectionId"})," will fail basic validation for this message."]}),"\n",(0,o.jsx)(n.h3,{id:"ics04---channel",children:"ICS04 - Channel"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"WriteAcknowledgement"})," API now takes the ",(0,o.jsx)(n.code,{children:"exported.Acknowledgement"})," type instead of passing in the acknowledgement byte array directly.\nThis is an API breaking change and as such IBC application developers will have to update any calls to ",(0,o.jsx)(n.code,{children:"WriteAcknowledgement"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"OnChanOpenInit"})," application callback has been modified.\nThe return signature now includes the application version as detailed in the latest IBC ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc/pull/629",children:"spec changes"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"NewErrorAcknowledgement"})," method signature has changed.\nIt now accepts an ",(0,o.jsx)(n.code,{children:"error"})," rather than a ",(0,o.jsx)(n.code,{children:"string"}),". This was done in order to prevent accidental state changes.\nAll error acknowledgements now contain a deterministic ABCI code and error message. It is the responsibility of the application developer to emit error details in events."]}),"\n",(0,o.jsxs)(n.p,{children:["Crossing hellos have been removed from 04-channel handshake negotiation.\nIBC Applications no longer need to account from already claimed capabilities in the ",(0,o.jsx)(n.code,{children:"OnChanOpenTry"})," callback. The capability provided by core IBC must be able to be claimed with error.\n",(0,o.jsx)(n.code,{children:"PreviousChannelId"})," in ",(0,o.jsx)(n.code,{children:"MsgChannelOpenTry"})," has been deprecated and is no longer used by core IBC."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"NewMsgChannelOpenTry"})," no longer takes in the ",(0,o.jsx)(n.code,{children:"PreviousChannelId"})," as crossing hellos are no longer supported. A non-empty ",(0,o.jsx)(n.code,{children:"PreviousChannelId"})," will fail basic validation for this message."]}),"\n",(0,o.jsx)(n.h3,{id:"ics27---interchain-accounts-1",children:"ICS27 - Interchain Accounts"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"RegisterInterchainAccount"})," API has been modified to include an additional ",(0,o.jsx)(n.code,{children:"version"})," argument. This change has been made in order to support ICS29 fee middleware, for relayer incentivization of ICS27 packets.\nConsumers of the ",(0,o.jsx)(n.code,{children:"RegisterInterchainAccount"})," are now expected to build the appropriate JSON encoded version string themselves and pass it accordingly.\nThis should be constructed within the interchain accounts authentication module which leverages the APIs exposed via the interchain accounts ",(0,o.jsx)(n.code,{children:"controllerKeeper"}),". If an empty string is passed in the ",(0,o.jsx)(n.code,{children:"version"})," argument, then the version will be initialized to a default value in the ",(0,o.jsx)(n.code,{children:"OnChanOpenInit"})," callback of the controller's handler, so that channel handshake can proceed."]}),"\n",(0,o.jsxs)(n.p,{children:["The following code snippet illustrates how to construct an appropriate interchain accounts ",(0,o.jsx)(n.code,{children:"Metadata"})," and encode it as a JSON bytestring:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nif err := k.icaControllerKeeper.RegisterInterchainAccount(ctx, msg.ConnectionId, msg.Owner, string(appVersion)); err != nil {\n    return err\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 ",(0,o.jsx)(n.code,{children:"Metadata"})," type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nfeeMetadata := feetypes.Metadata{\n    AppVersion: string(appVersion),\n    FeeVersion: feetypes.Version,\n}\n\nfeeEnabledVersion, err := feetypes.ModuleCdc.MarshalJSON(&feeMetadata)\nif err != nil {\n    return err\n}\n\nif err := k.icaControllerKeeper.RegisterInterchainAccount(ctx, msg.ConnectionId, msg.Owner, string(feeEnabledVersion)); err != nil {\n    return err\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"relayers",children:"Relayers"}),"\n",(0,o.jsxs)(n.p,{children:["When using the ",(0,o.jsx)(n.code,{children:"DenomTrace"})," gRPC, the full IBC denomination with the ",(0,o.jsx)(n.code,{children:"ibc/"})," prefix may now be passed in."]}),"\n",(0,o.jsx)(n.p,{children:"Crossing hellos are no longer supported by core IBC for 03-connection and 04-channel. The handshake should be completed in the logical 4 step process (INIT, TRY, ACK, CONFIRM)."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);