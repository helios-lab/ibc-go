"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[692],{76675:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(85893),t=i(11151);const r={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/integration"},a="Integration",s={id:"ibc/integration",title:"Integration",description:"Learn how to integrate IBC to your application and send data packets to other chains.",source:"@site/versioned_docs/version-v4.6.x/01-ibc/02-integration.md",sourceDirName:"01-ibc",slug:"/ibc/integration",permalink:"/v4/ibc/integration",draft:!1,unlisted:!1,tags:[],version:"v4.6.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/ibc/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v4/ibc/overview"},next:{title:"IBC Applications",permalink:"/v4/ibc/apps/apps"}},c={},d=[{value:"Integrating the IBC module",id:"integrating-the-ibc-module",level:2},{value:"Module <code>BasicManager</code> and <code>ModuleAccount</code> permissions",id:"module-basicmanager-and-moduleaccount-permissions",level:3},{value:"Application fields",id:"application-fields",level:3},{value:"Configure the <code>Keepers</code>",id:"configure-the-keepers",level:3},{value:"Register <code>Routers</code>",id:"register-routers",level:3},{value:"Module Managers",id:"module-managers",level:3},{value:"Application ABCI Ordering",id:"application-abci-ordering",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,o.jsx)(n.p,{children:"Learn how to integrate IBC to your application and send data packets to other chains."})}),"\n",(0,o.jsxs)(n.p,{children:["This document outlines the required steps to integrate and configure the ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core",children:"IBC\nmodule"})," to your Cosmos SDK application and\nsend fungible token transfers to other chains."]}),"\n",(0,o.jsx)(n.h2,{id:"integrating-the-ibc-module",children:"Integrating the IBC module"}),"\n",(0,o.jsx)(n.p,{children:"Integrating the IBC module to your SDK-based application is straightforward. The general changes can be summarized in the following steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add required modules to the ",(0,o.jsx)(n.code,{children:"module.BasicManager"})]}),"\n",(0,o.jsxs)(n.li,{children:["Define additional ",(0,o.jsx)(n.code,{children:"Keeper"})," fields for the new modules on the ",(0,o.jsx)(n.code,{children:"App"})," type"]}),"\n",(0,o.jsxs)(n.li,{children:["Add the module's ",(0,o.jsx)(n.code,{children:"StoreKeys"})," and initialize their ",(0,o.jsx)(n.code,{children:"Keepers"})]}),"\n",(0,o.jsxs)(n.li,{children:["Set up corresponding routers and routes for the ",(0,o.jsx)(n.code,{children:"ibc"})," module"]}),"\n",(0,o.jsxs)(n.li,{children:["Add the modules to the module ",(0,o.jsx)(n.code,{children:"Manager"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add modules to ",(0,o.jsx)(n.code,{children:"Begin/EndBlockers"})," and ",(0,o.jsx)(n.code,{children:"InitGenesis"})]}),"\n",(0,o.jsxs)(n.li,{children:["Update the module ",(0,o.jsx)(n.code,{children:"SimulationManager"})," to enable simulations"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"module-basicmanager-and-moduleaccount-permissions",children:["Module ",(0,o.jsx)(n.code,{children:"BasicManager"})," and ",(0,o.jsx)(n.code,{children:"ModuleAccount"})," permissions"]}),"\n",(0,o.jsxs)(n.p,{children:["The first step is to add the following modules to the ",(0,o.jsx)(n.code,{children:"BasicManager"}),": ",(0,o.jsx)(n.code,{children:"x/capability"}),", ",(0,o.jsx)(n.code,{children:"x/ibc"}),",\nand ",(0,o.jsx)(n.code,{children:"x/ibc-transfer"}),". After that, we need to grant ",(0,o.jsx)(n.code,{children:"Minter"})," and ",(0,o.jsx)(n.code,{children:"Burner"})," permissions to\nthe ",(0,o.jsx)(n.code,{children:"ibc-transfer"})," ",(0,o.jsx)(n.code,{children:"ModuleAccount"})," to mint and burn relayed tokens."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\nvar (\n\n  ModuleBasics = module.NewBasicManager(\n    // ...\n    capability.AppModuleBasic{},\n    ibc.AppModuleBasic{},\n    transfer.AppModuleBasic{}, // i.e ibc-transfer module\n  )\n\n  // module account permissions\n  maccPerms = map[string][]string{\n    // other module accounts permissions\n    // ...\n    ibctransfertypes.ModuleName:    {authtypes.Minter, authtypes.Burner},\n)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"application-fields",children:"Application fields"}),"\n",(0,o.jsxs)(n.p,{children:["Then, we need to register the ",(0,o.jsx)(n.code,{children:"Keepers"})," as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\ntype App struct {\n  // baseapp, keys and subspaces definitions\n\n  // other keepers\n  // ...\n  IBCKeeper        *ibckeeper.Keeper // IBC Keeper must be a pointer in the app, so we can SetRouter on it correctly\n  TransferKeeper   ibctransferkeeper.Keeper // for cross-chain fungible token transfers\n\n  // make scoped keepers public for test purposes\n  ScopedIBCKeeper      capabilitykeeper.ScopedKeeper\n  ScopedTransferKeeper capabilitykeeper.ScopedKeeper\n\n  /// ...\n  /// module and simulation manager definitions\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"configure-the-keepers",children:["Configure the ",(0,o.jsx)(n.code,{children:"Keepers"})]}),"\n",(0,o.jsxs)(n.p,{children:["During initialization, besides initializing the IBC ",(0,o.jsx)(n.code,{children:"Keepers"})," (for the ",(0,o.jsx)(n.code,{children:"x/ibc"}),", and\n",(0,o.jsx)(n.code,{children:"x/ibc-transfer"})," modules), we need to grant specific capabilities through the capability module\n",(0,o.jsx)(n.code,{children:"ScopedKeepers"})," so that we can authenticate the object-capability permissions for each of the IBC\nchannels."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func NewApp(...args) *App {\n  // define codecs and baseapp\n\n  // add capability keeper and ScopeToModule for ibc module\n  app.CapabilityKeeper = capabilitykeeper.NewKeeper(appCodec, keys[capabilitytypes.StoreKey], memKeys[capabilitytypes.MemStoreKey])\n\n  // grant capabilities for the ibc and ibc-transfer modules\n  scopedIBCKeeper := app.CapabilityKeeper.ScopeToModule(ibchost.ModuleName)\n  scopedTransferKeeper := app.CapabilityKeeper.ScopeToModule(ibctransfertypes.ModuleName)\n\n  // ... other modules keepers\n\n  // Create IBC Keeper\n  app.IBCKeeper = ibckeeper.NewKeeper(\n    appCodec, keys[ibchost.StoreKey], app.GetSubspace(ibchost.ModuleName), app.StakingKeeper, app.UpgradeKeeper, scopedIBCKeeper,\n  )\n\n  // Create Transfer Keepers\n  app.TransferKeeper = ibctransferkeeper.NewKeeper(\n    appCodec, keys[ibctransfertypes.StoreKey], app.GetSubspace(ibctransfertypes.ModuleName),\n    app.IBCKeeper.ChannelKeeper, app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n    app.AccountKeeper, app.BankKeeper, scopedTransferKeeper,\n  )\n  transferModule := transfer.NewAppModule(app.TransferKeeper)\n\n  // .. continues\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"register-routers",children:["Register ",(0,o.jsx)(n.code,{children:"Routers"})]}),"\n",(0,o.jsxs)(n.p,{children:["IBC needs to know which module is bound to which port so that it can route packets to the\nappropriate module and call the appropriate callbacks. The port to module name mapping is handled by\nIBC's port ",(0,o.jsx)(n.code,{children:"Keeper"}),". However, the mapping from module name to the relevant callbacks is accomplished\nby the port\n",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/router.go",children:(0,o.jsx)(n.code,{children:"Router"})})," on the\nIBC module."]}),"\n",(0,o.jsx)(n.p,{children:"Adding the module routes allows the IBC handler to call the appropriate callback when processing a\nchannel handshake or a packet."}),"\n",(0,o.jsxs)(n.p,{children:["Currently, a ",(0,o.jsx)(n.code,{children:"Router"})," is static so it must be initialized and set correctly on app initialization.\nOnce the ",(0,o.jsx)(n.code,{children:"Router"})," has been set, no new routes can be added."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  // Create static IBC router, add ibc-tranfer module route, then set and seal it\n  ibcRouter := port.NewRouter()\n  ibcRouter.AddRoute(ibctransfertypes.ModuleName, transferModule)\n  // Setting Router will finalize all routes by sealing router\n  // No more routes can be added\n  app.IBCKeeper.SetRouter(ibcRouter)\n\n  // .. continues\n"})}),"\n",(0,o.jsx)(n.h3,{id:"module-managers",children:"Module Managers"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use IBC, we need to add the new modules to the module ",(0,o.jsx)(n.code,{children:"Manager"})," and to the ",(0,o.jsx)(n.code,{children:"SimulationManager"})," in case your application supports ",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/build/building-modules/14-simulator.md",children:"simulations"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  app.mm = module.NewManager(\n    // other modules\n    // ...\n    capability.NewAppModule(appCodec, *app.CapabilityKeeper),\n    ibc.NewAppModule(app.IBCKeeper),\n    transferModule,\n  )\n\n  // ...\n\n  app.sm = module.NewSimulationManager(\n    // other modules\n    // ...\n    capability.NewAppModule(appCodec, *app.CapabilityKeeper),\n    ibc.NewAppModule(app.IBCKeeper),\n    transferModule,\n  )\n\n  // .. continues\n"})}),"\n",(0,o.jsx)(n.h3,{id:"application-abci-ordering",children:"Application ABCI Ordering"}),"\n",(0,o.jsxs)(n.p,{children:["One addition from IBC is the concept of ",(0,o.jsx)(n.code,{children:"HistoricalEntries"})," which are stored on the staking module.\nEach entry contains the historical information for the ",(0,o.jsx)(n.code,{children:"Header"})," and ",(0,o.jsx)(n.code,{children:"ValidatorSet"})," of this chain which is stored\nat each height during the ",(0,o.jsx)(n.code,{children:"BeginBlock"})," call. The historical info is required to introspect the\npast historical info at any given height in order to verify the light client ",(0,o.jsx)(n.code,{children:"ConsensusState"})," during the\nconnection handshake."]}),"\n",(0,o.jsxs)(n.p,{children:["The IBC module also has\n",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/abci.go",children:(0,o.jsx)(n.code,{children:"BeginBlock"})})," logic as well. This is optional as it is only required if your application uses the localhost client to connect two different modules from the same chain."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Only register the ibc module to the ",(0,o.jsx)(n.code,{children:"SetOrderBeginBlockers"})," if your application will use the\nlocalhost (",(0,o.jsx)(n.em,{children:"aka"})," loopback) client."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\nfunc NewApp(...args) *App {\n  // .. continuation from above\n\n  // add staking and ibc modules to BeginBlockers\n  app.mm.SetOrderBeginBlockers(\n    // other modules ...\n    stakingtypes.ModuleName, ibchost.ModuleName,\n  )\n\n  // ...\n\n  // NOTE: Capability module must occur first so that it can initialize any capabilities\n  // so that other modules that want to create or claim capabilities afterwards in InitChain\n  // can do so safely.\n  app.mm.SetOrderInitGenesis(\n    capabilitytypes.ModuleName,\n    // other modules ...\n    ibchost.ModuleName, ibctransfertypes.ModuleName,\n  )\n\n  // .. continues\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"IMPORTANT"}),": The capability module ",(0,o.jsx)(n.strong,{children:"must"})," be declared first in ",(0,o.jsx)(n.code,{children:"SetOrderInitGenesis"})]})}),"\n",(0,o.jsxs)(n.p,{children:["That's it! You have now wired up the IBC module and are now able to send fungible tokens across\ndifferent chains. If you want to have a broader view of the changes take a look into the SDK's\n",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/testing/simapp/app.go",children:(0,o.jsx)(n.code,{children:"SimApp"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var o=i(67294);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);