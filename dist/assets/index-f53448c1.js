import{h as Ve,ar as Dr,as as Fr,at as $r,au as jr,av as Hr,aw as zr,ax as Wr,ay as Vr,az as Jr,aA as Qr,aB as Kr,aC as Yr,aD as Gr,aE as Zr,aF as Xr,aG as eo,aH as to,aI as no,g as qt,aJ as ro,aK as oo,aL as io,E as Dt}from"./index-a2db3dd5.js";import{b as so,s as ao,m as co,c as ie,I as lo,f as vt,J as Et,H as uo}from"./http-622c5ed8.js";import{b as j,l as N,y as O,k as W,C as B,D as ge,E as fo,F as ho,a as ye,c as Je,d as Qe,V as Ft,s as $t,_ as jt,A as Ht,e as zt,T as Wt,q as Vt,x as Jt,G as Qt,f as Kt,P as go}from"./hooks.module-a59256f8.js";const Ne="Session currently connected",$="Session currently disconnected",_o="Session Rejected",po="Missing JSON RPC response",mo='JSON-RPC success response must include "result" field',wo='JSON-RPC error response must include "error" field',yo='JSON RPC request must have valid "method" value',bo='JSON RPC request must have valid "id" value',vo="Missing one of the required parameters: bridge / uri / session",Ct="JSON RPC response format is invalid",Eo="URI format is invalid",Co="QRCode Modal not provided",St="User close QRCode Modal",So=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Io=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Ke=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Io],Pe="WALLETCONNECT_DEEPLINK_CHOICE",Ro={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var Yt=Ye;Ye.strict=Gt;Ye.loose=Zt;var ko=Object.prototype.toString,To={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Ye(t){return Gt(t)||Zt(t)}function Gt(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function Zt(t){return To[ko.call(t)]}const No=Ve(Yt);var xo=Yt.strict,Mo=function(e){if(xo(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Ao=Ve(Mo),Ge="hex",Ze="utf8",Oo="binary",Lo="buffer",Bo="array",Uo="typed-array",Po="array-buffer",be="0";function V(t){return new Uint8Array(t)}function Xe(t,e=!1){const n=t.toString(Ge);return e?se(n):n}function et(t){return t.toString(Ze)}function Xt(t){return t.readUIntBE(0,t.length)}function Z(t){return Ao(t)}function U(t,e=!1){return Xe(Z(t),e)}function en(t){return et(Z(t))}function tn(t){return Xt(Z(t))}function tt(t){return Buffer.from(J(t),Ge)}function P(t){return V(tt(t))}function qo(t){return et(tt(t))}function Do(t){return tn(P(t))}function nt(t){return Buffer.from(t,Ze)}function nn(t){return V(nt(t))}function Fo(t,e=!1){return Xe(nt(t),e)}function $o(t){const e=parseInt(t,10);return ii(oi(e),"Number can only safely store up to 53 bits"),e}function jo(t){return Vo(rt(t))}function Ho(t){return ot(rt(t))}function zo(t,e){return Jo(rt(t),e)}function Wo(t){return`${t}`}function rt(t){const e=(t>>>0).toString(2);return st(e)}function Vo(t){return Z(ot(t))}function ot(t){return new Uint8Array(Xo(t).map(e=>parseInt(e,2)))}function Jo(t,e){return U(ot(t),e)}function Qo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function rn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ve(t){return Buffer.isBuffer(t)}function it(t){return No.strict(t)&&!ve(t)}function on(t){return!it(t)&&!ve(t)&&typeof t.byteLength<"u"}function Ko(t){return ve(t)?Lo:it(t)?Uo:on(t)?Po:Array.isArray(t)?Bo:typeof t}function Yo(t){return Qo(t)?Oo:rn(t)?Ge:Ze}function Go(...t){return Buffer.concat(t)}function sn(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Zo(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Xo(t,e=8){const n=st(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function st(t,e=8,n=be){return ei(t,Zo(t.length,e),n)}function ei(t,e,n=be){return si(t,e,!0,n)}function J(t){return t.replace(/^0x/,"")}function se(t){return t.startsWith("0x")?t:`0x${t}`}function ti(t){return t=J(t),t=st(t,2),t&&(t=se(t)),t}function ni(t){const e=t.startsWith("0x");return t=J(t),t=t.startsWith(be)?t.substring(1):t,e?se(t):t}function ri(t){return typeof t>"u"}function oi(t){return!ri(t)}function ii(t,e){if(!t)throw new Error(e)}function si(t,e,n,r=be){const o=e-t.length;let i=t;if(o>0){const s=r.repeat(o);i=n?s+t:t+s}return i}function _e(t){return Z(new Uint8Array(t))}function ai(t){return en(new Uint8Array(t))}function an(t,e){return U(new Uint8Array(t),!e)}function ci(t){return tn(new Uint8Array(t))}function li(...t){return P(t.map(e=>U(new Uint8Array(e))).join("")).buffer}function cn(t){return V(t).buffer}function ui(t){return et(t)}function di(t,e){return Xe(t,!e)}function fi(t){return Xt(t)}function hi(...t){return Go(...t)}function gi(t){return nn(t).buffer}function _i(t){return nt(t)}function pi(t,e){return Fo(t,!e)}function mi(t){return $o(t)}function wi(t){return tt(t)}function ln(t){return P(t).buffer}function yi(t){return qo(t)}function bi(t){return Do(t)}function vi(t){return jo(t)}function Ei(t){return Ho(t).buffer}function Ci(t){return Wo(t)}function un(t,e){return zo(Number(t),!e)}const Si=jr,Ii=Hr,Ri=zr,ki=Wr,Ti=Vr,dn=$r,Ni=Jr,fn=Dr,xi=Qr,Mi=Kr,Ai=Yr,Ee=Fr;function Ce(t){return Gr(t)}function Se(){const t=Ce();return t&&t.os?t.os:void 0}function hn(){const t=Se();return t?t.toLowerCase().includes("android"):!1}function gn(){const t=Se();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function _n(){return Se()?hn()||gn():!1}function pn(){const t=Ce();return t&&t.name?t.name.toLowerCase()==="node":!1}function mn(){return!pn()&&!!dn()}const wn=so,yn=ao;function at(t,e){const n=yn(e),r=Ee();r&&r.setItem(t,n)}function ct(t){let e=null,n=null;const r=Ee();return r&&(n=r.getItem(t)),e=n&&wn(n),e}function lt(t){const e=Ee();e&&e.removeItem(t)}function qe(){return Zr()}function Oi(t){return ti(t)}function Li(t){return se(t)}function Bi(t){return J(t)}function Ui(t){return ni(se(t))}const bn=co;function he(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Pi(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function vn(t,e){let n;const r=Ro[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function En(t,e){let n;const r=vn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function qi(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Di(t){const e=t.href.split("?")[0];at(Pe,Object.assign(Object.assign({},t),{href:e}))}function Cn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Fi(t,e){let n=t;return e&&(n=e.map(r=>Cn(t,r)).filter(Boolean)),n}function $i(t,e){return async(...r)=>new Promise((o,i)=>{const s=(c,a)=>{(c===null||typeof c>"u")&&i(c),o(a)};t.apply(e,[...r,s])})}function Sn(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const In="https://registry.walletconnect.com";function ji(){return In+"/api/v2/wallets"}function Hi(){return In+"/api/v2/dapps"}function Rn(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function zi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Rn(n,e))}var ut={};(function(t){const e=to,n=no,r=Xr,o=eo,i=l=>l==null;function s(l){switch(l.arrayFormat){case"index":return d=>(f,u)=>{const g=f.length;return u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,[h(d,l),"[",g,"]"].join("")]:[...f,[h(d,l),"[",h(g,l),"]=",h(u,l)].join("")]};case"bracket":return d=>(f,u)=>u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,[h(d,l),"[]"].join("")]:[...f,[h(d,l),"[]=",h(u,l)].join("")];case"comma":case"separator":return d=>(f,u)=>u==null||u.length===0?f:f.length===0?[[h(d,l),"=",h(u,l)].join("")]:[[f,h(u,l)].join(l.arrayFormatSeparator)];default:return d=>(f,u)=>u===void 0||l.skipNull&&u===null||l.skipEmptyString&&u===""?f:u===null?[...f,h(d,l)]:[...f,[h(d,l),"=",h(u,l)].join("")]}}function c(l){let d;switch(l.arrayFormat){case"index":return(f,u,g)=>{if(d=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!d){g[f]=u;return}g[f]===void 0&&(g[f]={}),g[f][d[1]]=u};case"bracket":return(f,u,g)=>{if(d=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!d){g[f]=u;return}if(g[f]===void 0){g[f]=[u];return}g[f]=[].concat(g[f],u)};case"comma":case"separator":return(f,u,g)=>{const y=typeof u=="string"&&u.includes(l.arrayFormatSeparator),m=typeof u=="string"&&!y&&p(u,l).includes(l.arrayFormatSeparator);u=m?p(u,l):u;const S=y||m?u.split(l.arrayFormatSeparator).map(R=>p(R,l)):u===null?u:p(u,l);g[f]=S};default:return(f,u,g)=>{if(g[f]===void 0){g[f]=u;return}g[f]=[].concat(g[f],u)}}}function a(l){if(typeof l!="string"||l.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function h(l,d){return d.encode?d.strict?e(l):encodeURIComponent(l):l}function p(l,d){return d.decode?n(l):l}function E(l){return Array.isArray(l)?l.sort():typeof l=="object"?E(Object.keys(l)).sort((d,f)=>Number(d)-Number(f)).map(d=>l[d]):l}function b(l){const d=l.indexOf("#");return d!==-1&&(l=l.slice(0,d)),l}function w(l){let d="";const f=l.indexOf("#");return f!==-1&&(d=l.slice(f)),d}function v(l){l=b(l);const d=l.indexOf("?");return d===-1?"":l.slice(d+1)}function C(l,d){return d.parseNumbers&&!Number.isNaN(Number(l))&&typeof l=="string"&&l.trim()!==""?l=Number(l):d.parseBooleans&&l!==null&&(l.toLowerCase()==="true"||l.toLowerCase()==="false")&&(l=l.toLowerCase()==="true"),l}function I(l,d){d=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},d),a(d.arrayFormatSeparator);const f=c(d),u=Object.create(null);if(typeof l!="string"||(l=l.trim().replace(/^[?#&]/,""),!l))return u;for(const g of l.split("&")){if(g==="")continue;let[y,m]=r(d.decode?g.replace(/\+/g," "):g,"=");m=m===void 0?null:["comma","separator"].includes(d.arrayFormat)?m:p(m,d),f(p(y,d),m,u)}for(const g of Object.keys(u)){const y=u[g];if(typeof y=="object"&&y!==null)for(const m of Object.keys(y))y[m]=C(y[m],d);else u[g]=C(y,d)}return d.sort===!1?u:(d.sort===!0?Object.keys(u).sort():Object.keys(u).sort(d.sort)).reduce((g,y)=>{const m=u[y];return m&&typeof m=="object"&&!Array.isArray(m)?g[y]=E(m):g[y]=m,g},Object.create(null))}t.extract=v,t.parse=I,t.stringify=(l,d)=>{if(!l)return"";d=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},d),a(d.arrayFormatSeparator);const f=m=>d.skipNull&&i(l[m])||d.skipEmptyString&&l[m]==="",u=s(d),g={};for(const m of Object.keys(l))f(m)||(g[m]=l[m]);const y=Object.keys(g);return d.sort!==!1&&y.sort(d.sort),y.map(m=>{const S=l[m];return S===void 0?"":S===null?h(m,d):Array.isArray(S)?S.reduce(u(m),[]).join("&"):h(m,d)+"="+h(S,d)}).filter(m=>m.length>0).join("&")},t.parseUrl=(l,d)=>{d=Object.assign({decode:!0},d);const[f,u]=r(l,"#");return Object.assign({url:f.split("?")[0]||"",query:I(v(l),d)},d&&d.parseFragmentIdentifier&&u?{fragmentIdentifier:p(u,d)}:{})},t.stringifyUrl=(l,d)=>{d=Object.assign({encode:!0,strict:!0},d);const f=b(l.url).split("?")[0]||"",u=t.extract(l.url),g=t.parse(u,{sort:!1}),y=Object.assign(g,l.query);let m=t.stringify(y,d);m&&(m=`?${m}`);let S=w(l.url);return l.fragmentIdentifier&&(S=`#${h(l.fragmentIdentifier,d)}`),`${f}${m}${S}`},t.pick=(l,d,f)=>{f=Object.assign({parseFragmentIdentifier:!0},f);const{url:u,query:g,fragmentIdentifier:y}=t.parseUrl(l,f);return t.stringifyUrl({url:u,query:o(g,d),fragmentIdentifier:y},f)},t.exclude=(l,d,f)=>{const u=Array.isArray(d)?g=>!d.includes(g):(g,y)=>!d(g,y);return t.pick(l,u,f)}})(ut);function kn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Tn(t,e){let n=dt(t);return n=Object.assign(Object.assign({},n),e),t=Nn(n),t}function dt(t){return ut.parse(t)}function Nn(t){return ut.stringify(t)}function xn(t){return typeof t.bridge<"u"}function Mn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(E){const b="@",w=E.split(b);return{handshakeTopic:w[0],version:parseInt(w[1],10)}}const s=i(o),c=typeof n<"u"?t.substr(n):"";function a(E){const b=dt(E);return{key:b.key||"",bridge:b.bridge||""}}const h=a(c);return Object.assign(Object.assign({protocol:r},s),h)}function Wi(t){return t===""||typeof t=="string"&&t.trim()===""}function Vi(t){return!(t&&t.length)}function Ji(t){return ve(t)}function Qi(t){return it(t)}function Ki(t){return on(t)}function Yi(t){return Ko(t)}function Gi(t){return Yo(t)}function Zi(t,e){return rn(t,e)}function Xi(t){return typeof t.params=="object"}function An(t){return typeof t.method<"u"}function H(t){return typeof t.result<"u"}function re(t){return typeof t.error<"u"}function De(t){return typeof t.event<"u"}function On(t){return So.includes(t)||t.startsWith("wc_")}function Ln(t){return t.method.startsWith("wc_")?!0:!Ke.includes(t.method)}const es=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Li,appendToQueryString:Tn,concatArrayBuffers:li,concatBuffers:hi,convertArrayBufferToBuffer:_e,convertArrayBufferToHex:an,convertArrayBufferToNumber:ci,convertArrayBufferToUtf8:ai,convertBufferToArrayBuffer:cn,convertBufferToHex:di,convertBufferToNumber:fi,convertBufferToUtf8:ui,convertHexToArrayBuffer:ln,convertHexToBuffer:wi,convertHexToNumber:bi,convertHexToUtf8:yi,convertNumberToArrayBuffer:Ei,convertNumberToBuffer:vi,convertNumberToHex:un,convertNumberToUtf8:Ci,convertUtf8ToArrayBuffer:gi,convertUtf8ToBuffer:_i,convertUtf8ToHex:pi,convertUtf8ToNumber:mi,detectEnv:Ce,detectOS:Se,formatIOSMobile:qi,formatMobileRegistry:zi,formatMobileRegistryEntry:Rn,formatQueryString:Nn,formatRpcError:Sn,getClientMeta:qe,getCrypto:Mi,getCryptoOrThrow:xi,getDappRegistryUrl:Hi,getDocument:ki,getDocumentOrThrow:Ri,getEncoding:Gi,getFromWindow:Si,getFromWindowOrThrow:Ii,getInfuraRpcUrl:vn,getLocal:ct,getLocalStorage:Ee,getLocalStorageOrThrow:Ai,getLocation:fn,getLocationOrThrow:Ni,getMobileLinkRegistry:Fi,getMobileRegistryEntry:Cn,getNavigator:dn,getNavigatorOrThrow:Ti,getQueryString:kn,getRpcUrl:En,getType:Yi,getWalletRegistryUrl:ji,isAndroid:hn,isArrayBuffer:Ki,isBrowser:mn,isBuffer:Ji,isEmptyArray:Vi,isEmptyString:Wi,isHexString:Zi,isIOS:gn,isInternalEvent:De,isJsonRpcRequest:An,isJsonRpcResponseError:re,isJsonRpcResponseSuccess:H,isJsonRpcSubscription:Xi,isMobile:_n,isNode:pn,isReservedEvent:On,isSilentPayload:Ln,isTypedArray:Qi,isWalletConnectSession:xn,logDeprecationWarning:Pi,parseQueryString:dt,parseWalletConnectUri:Mn,payloadId:bn,promisify:$i,removeHexLeadingZeros:Ui,removeHexPrefix:Bi,removeLocal:lt,safeJsonParse:wn,safeJsonStringify:yn,sanitizeHex:Oi,saveMobileLinkInfo:Di,setLocal:at,uuid:he},Symbol.toStringTag,{value:"Module"}));class ts{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const ns=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class rs{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new ts,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=os(this._url,this._protocol,this._version);if(this._nextSocket=new ns(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function os(t,e,n){var r,o;const s=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),c=mn()?{protocol:e,version:n,env:"browser",host:((r=fn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=Ce())===null||o===void 0?void 0:o.name)||""},a=Tn(kn(s[1]||""),c);return s[0]+"?"+a}class is{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;An(e)?r=e.method:H(e)||re(e)?r=`response:${e.id}`:De(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!On(r)&&!De(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(re(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class ss{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=ct(this.storageId);return n&&xn(n)&&(e=n),e}setSession(e){return at(this.storageId,e),e}removeSession(){lt(this.storageId)}}const as="walletconnect.org",cs="abcdefghijklmnopqrstuvwxyz0123456789",Bn=cs.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function ls(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function us(t){return ls(t).split(".").slice(-2).join(".")}function ds(){return Math.floor(Math.random()*Bn.length)}function fs(){return Bn[ds()]}function hs(t){return us(t)===as}function gs(t){return hs(t)?fs():t}class _s{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new is,this._clientMeta=qe()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new ss(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Ke,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(vo);e.connectorOpts.bridge&&(this.bridge=gs(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new rs({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=ln(e);this._key=n}get key(){return this._key?an(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=he()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=qe()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=he(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(St)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Co);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(St))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Ne);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=he(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Ne);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Ne);const n=e&&e.message?e.message:_o,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error($);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,s)=>{if(i){o(i);return}if(!s)throw new Error(po);r(s)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error($);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return un(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(H(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(mo)}rejectRequest(e){if(re(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(wo)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,s=JSON.stringify(o),c=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Ln(r);this._transport.send(s,i,c)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(yo);return{id:typeof e.id>"u"?bn():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(bo);const n={id:e.id,jsonrpc:"2.0"};if(re(e)){const r=Sn(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(H(e))return Object.assign(Object.assign({},n),e);throw new Error(Ct)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),lt(Pe)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}H(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}H(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(Ct))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(_n()&&this._signingMethods.includes(r.method)){const o=ct(Pe);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Mn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(Eo)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function ps(t){return ie.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Un=256,Pn=Un,ms=Un,q="AES-CBC",ws=`SHA-${Pn}`,Fe="HMAC",ys="encrypt",bs="decrypt",vs="sign",Es="verify";function Cs(t){return t===q?{length:Pn,name:q}:{hash:{name:ws},name:Fe}}function Ss(t){return t===q?[ys,bs]:[vs,Es]}async function ft(t,e=q){return ie.getSubtleCrypto().importKey("raw",t,Cs(e),!0,Ss(e))}async function Is(t,e,n){const r=ie.getSubtleCrypto(),o=await ft(e,q),i=await r.encrypt({iv:t,name:q},o,n);return new Uint8Array(i)}async function Rs(t,e,n){const r=ie.getSubtleCrypto(),o=await ft(e,q),i=await r.decrypt({iv:t,name:q},o,n);return new Uint8Array(i)}async function ks(t,e){const n=ie.getSubtleCrypto(),r=await ft(t,Fe),o=await n.sign({length:ms,name:Fe},r,e);return new Uint8Array(o)}function Ts(t,e,n){return Is(t,e,n)}function Ns(t,e,n){return Rs(t,e,n)}async function qn(t,e){return await ks(t,e)}async function Dn(t){const e=(t||256)/8,n=ps(e);return cn(Z(n))}async function Fn(t,e){const n=P(t.data),r=P(t.iv),o=P(t.hmac),i=U(o,!1),s=sn(n,r),c=await qn(e,s),a=U(c,!1);return J(i)===J(a)}async function xs(t,e,n){const r=V(_e(e)),o=n||await Dn(128),i=V(_e(o)),s=U(i,!1),c=JSON.stringify(t),a=nn(c),h=await Ts(i,r,a),p=U(h,!1),E=sn(h,i),b=await qn(r,E),w=U(b,!1);return{data:p,hmac:w,iv:s}}async function Ms(t,e){const n=V(_e(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Fn(t,n))return null;const o=P(t.data),i=P(t.iv),s=await Ns(i,n,o),c=en(s);let a;try{a=JSON.parse(c)}catch{return null}return a}const As=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Ms,encrypt:xs,generateKey:Dn,verifyHmac:Fn},Symbol.toStringTag,{value:"Module"}));class Os extends _s{constructor(e,n){super({cryptoLib:As,connectorOpts:e,pushServerOpts:n})}}const Ls=qt(es);var ae={},Bs=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},$n={},M={};let ht;const Us=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};M.getSymbolTotalCodewords=function(e){return Us[e]};M.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};M.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ht=e};M.isKanjiModeEnabled=function(){return typeof ht<"u"};M.toSJIS=function(e){return ht(e)};var Ie={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(Ie);function jn(){this.buffer=[],this.length=0}jn.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Ps=jn;function ce(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ce.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)};ce.prototype.get=function(t,e){return this.data[t*this.size+e]};ce.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};ce.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var qs=ce,Hn={};(function(t){const e=M.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,c=[i-7];for(let a=1;a<o-1;a++)c[a]=c[a-1]-s;return c.push(6),c.reverse()},t.getPositions=function(r){const o=[],i=t.getRowColCoords(r),s=i.length;for(let c=0;c<s;c++)for(let a=0;a<s;a++)c===0&&a===0||c===0&&a===s-1||c===s-1&&a===0||o.push([i[c],i[a]]);return o}})(Hn);var zn={};const Ds=M.getSymbolSize,It=7;zn.getPositions=function(e){const n=Ds(e);return[[0,0],[n-It,0],[0,n-It]]};var Wn={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,c=0,a=0,h=null,p=null;for(let E=0;E<i;E++){c=a=0,h=p=null;for(let b=0;b<i;b++){let w=o.get(E,b);w===h?c++:(c>=5&&(s+=e.N1+(c-5)),h=w,c=1),w=o.get(b,E),w===p?a++:(a>=5&&(s+=e.N1+(a-5)),p=w,a=1)}c>=5&&(s+=e.N1+(c-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let c=0;c<i-1;c++)for(let a=0;a<i-1;a++){const h=o.get(c,a)+o.get(c,a+1)+o.get(c+1,a)+o.get(c+1,a+1);(h===4||h===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,c=0,a=0;for(let h=0;h<i;h++){c=a=0;for(let p=0;p<i;p++)c=c<<1&2047|o.get(h,p),p>=10&&(c===1488||c===93)&&s++,a=a<<1&2047|o.get(p,h),p>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let a=0;a<s;a++)i+=o.data[a];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function n(r,o,i){switch(r){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,i){const s=i.size;for(let c=0;c<s;c++)for(let a=0;a<s;a++)i.isReserved(a,c)||i.xor(a,c,n(o,a,c))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let h=0;h<s;h++){i(h),t.applyMask(h,o);const p=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(h,o),p<a&&(a=p,c=h)}return c}})(Wn);var Re={};const L=Ie,de=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],fe=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Re.getBlocksCount=function(e,n){switch(n){case L.L:return de[(e-1)*4+0];case L.M:return de[(e-1)*4+1];case L.Q:return de[(e-1)*4+2];case L.H:return de[(e-1)*4+3];default:return}};Re.getTotalCodewordsCount=function(e,n){switch(n){case L.L:return fe[(e-1)*4+0];case L.M:return fe[(e-1)*4+1];case L.Q:return fe[(e-1)*4+2];case L.H:return fe[(e-1)*4+3];default:return}};var Vn={},ke={};const te=new Uint8Array(512),pe=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)te[n]=e,pe[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)te[n]=te[n-255]})();ke.log=function(e){if(e<1)throw new Error("log("+e+")");return pe[e]};ke.exp=function(e){return te[e]};ke.mul=function(e,n){return e===0||n===0?0:te[pe[e]+pe[n]]};(function(t){const e=ke;t.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<o.length;c++)i[s+c]^=e.mul(r[s],o[c]);return i},t.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let a=0;a<o.length;a++)i[a]^=e.mul(o[a],s);let c=0;for(;c<i.length&&i[c]===0;)c++;i=i.slice(c)}return i},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(Vn);const Jn=Vn;function gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(e){this.degree=e,this.genPoly=Jn.generateECPolynomial(this.degree)};gt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=Jn.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var Fs=gt,Qn={},D={},_t={};_t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var A={};const Kn="[0-9]+",$s="[A-Z $%*+\\-./:]+";let oe="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";oe=oe.replace(/u/g,"\\u");const js="(?:(?![A-Z0-9 $%*+\\-./:]|"+oe+`)(?:.|[\r
]))+`;A.KANJI=new RegExp(oe,"g");A.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");A.BYTE=new RegExp(js,"g");A.NUMERIC=new RegExp(Kn,"g");A.ALPHANUMERIC=new RegExp($s,"g");const Hs=new RegExp("^"+oe+"$"),zs=new RegExp("^"+Kn+"$"),Ws=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");A.testKanji=function(e){return Hs.test(e)};A.testNumeric=function(e){return zs.test(e)};A.testAlphanumeric=function(e){return Ws.test(e)};(function(t){const e=_t,n=A;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return n.testNumeric(i)?t.NUMERIC:n.testAlphanumeric(i)?t.ALPHANUMERIC:n.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(D);(function(t){const e=M,n=Re,r=Ie,o=D,i=_t,s=7973,c=e.getBCHDigit(s);function a(b,w,v){for(let C=1;C<=40;C++)if(w<=t.getCapacity(C,v,b))return C}function h(b,w){return o.getCharCountIndicator(b,w)+4}function p(b,w){let v=0;return b.forEach(function(C){const I=h(C.mode,w);v+=I+C.getBitsLength()}),v}function E(b,w){for(let v=1;v<=40;v++)if(p(b,v)<=t.getCapacity(v,w,o.MIXED))return v}t.from=function(w,v){return i.isValid(w)?parseInt(w,10):v},t.getCapacity=function(w,v,C){if(!i.isValid(w))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=o.BYTE);const I=e.getSymbolTotalCodewords(w),l=n.getTotalCodewordsCount(w,v),d=(I-l)*8;if(C===o.MIXED)return d;const f=d-h(C,w);switch(C){case o.NUMERIC:return Math.floor(f/10*3);case o.ALPHANUMERIC:return Math.floor(f/11*2);case o.KANJI:return Math.floor(f/13);case o.BYTE:default:return Math.floor(f/8)}},t.getBestVersionForData=function(w,v){let C;const I=r.from(v,r.M);if(Array.isArray(w)){if(w.length>1)return E(w,I);if(w.length===0)return 1;C=w[0]}else C=w;return a(C.mode,C.getLength(),I)},t.getEncodedBits=function(w){if(!i.isValid(w)||w<7)throw new Error("Invalid QR Code version");let v=w<<12;for(;e.getBCHDigit(v)-c>=0;)v^=s<<e.getBCHDigit(v)-c;return w<<12|v}})(Qn);var Yn={};const $e=M,Gn=1335,Vs=21522,Rt=$e.getBCHDigit(Gn);Yn.getEncodedBits=function(e,n){const r=e.bit<<3|n;let o=r<<10;for(;$e.getBCHDigit(o)-Rt>=0;)o^=Gn<<$e.getBCHDigit(o)-Rt;return(r<<10|o)^Vs};var Zn={};const Js=D;function Q(t){this.mode=Js.NUMERIC,this.data=t.toString()}Q.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(e){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),e.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),e.put(o,i*3+1))};var Qs=Q;const Ks=D,xe=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function K(t){this.mode=Ks.ALPHANUMERIC,this.data=t}K.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=xe.indexOf(this.data[n])*45;r+=xe.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(xe.indexOf(this.data[n]),6)};var Ys=K;const Gs=ro,Zs=D;function Y(t){this.mode=Zs.BYTE,typeof t=="string"&&(t=Gs(t)),this.data=new Uint8Array(t)}Y.getBitsLength=function(e){return e*8};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var Xs=Y;const ea=D,ta=M;function G(t){this.mode=ea.KANJI,this.data=t}G.getBitsLength=function(e){return e*13};G.prototype.getLength=function(){return this.data.length};G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)};G.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=ta.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var na=G;(function(t){const e=D,n=Qs,r=Ys,o=Xs,i=na,s=A,c=M,a=oo;function h(l){return unescape(encodeURIComponent(l)).length}function p(l,d,f){const u=[];let g;for(;(g=l.exec(f))!==null;)u.push({data:g[0],index:g.index,mode:d,length:g[0].length});return u}function E(l){const d=p(s.NUMERIC,e.NUMERIC,l),f=p(s.ALPHANUMERIC,e.ALPHANUMERIC,l);let u,g;return c.isKanjiModeEnabled()?(u=p(s.BYTE,e.BYTE,l),g=p(s.KANJI,e.KANJI,l)):(u=p(s.BYTE_KANJI,e.BYTE,l),g=[]),d.concat(f,u,g).sort(function(m,S){return m.index-S.index}).map(function(m){return{data:m.data,mode:m.mode,length:m.length}})}function b(l,d){switch(d){case e.NUMERIC:return n.getBitsLength(l);case e.ALPHANUMERIC:return r.getBitsLength(l);case e.KANJI:return i.getBitsLength(l);case e.BYTE:return o.getBitsLength(l)}}function w(l){return l.reduce(function(d,f){const u=d.length-1>=0?d[d.length-1]:null;return u&&u.mode===f.mode?(d[d.length-1].data+=f.data,d):(d.push(f),d)},[])}function v(l){const d=[];for(let f=0;f<l.length;f++){const u=l[f];switch(u.mode){case e.NUMERIC:d.push([u,{data:u.data,mode:e.ALPHANUMERIC,length:u.length},{data:u.data,mode:e.BYTE,length:u.length}]);break;case e.ALPHANUMERIC:d.push([u,{data:u.data,mode:e.BYTE,length:u.length}]);break;case e.KANJI:d.push([u,{data:u.data,mode:e.BYTE,length:h(u.data)}]);break;case e.BYTE:d.push([{data:u.data,mode:e.BYTE,length:h(u.data)}])}}return d}function C(l,d){const f={},u={start:{}};let g=["start"];for(let y=0;y<l.length;y++){const m=l[y],S=[];for(let R=0;R<m.length;R++){const k=m[R],F=""+y+R;S.push(F),f[F]={node:k,lastCount:0},u[F]={};for(let X=0;X<g.length;X++){const x=g[X];f[x]&&f[x].node.mode===k.mode?(u[x][F]=b(f[x].lastCount+k.length,k.mode)-b(f[x].lastCount,k.mode),f[x].lastCount+=k.length):(f[x]&&(f[x].lastCount=k.length),u[x][F]=b(k.length,k.mode)+4+e.getCharCountIndicator(k.mode,d))}}g=S}for(let y=0;y<g.length;y++)u[g[y]].end=0;return{map:u,table:f}}function I(l,d){let f;const u=e.getBestModeForData(l);if(f=e.from(d,u),f!==e.BYTE&&f.bit<u.bit)throw new Error('"'+l+'" cannot be encoded with mode '+e.toString(f)+`.
 Suggested mode is: `+e.toString(u));switch(f===e.KANJI&&!c.isKanjiModeEnabled()&&(f=e.BYTE),f){case e.NUMERIC:return new n(l);case e.ALPHANUMERIC:return new r(l);case e.KANJI:return new i(l);case e.BYTE:return new o(l)}}t.fromArray=function(d){return d.reduce(function(f,u){return typeof u=="string"?f.push(I(u,null)):u.data&&f.push(I(u.data,u.mode)),f},[])},t.fromString=function(d,f){const u=E(d,c.isKanjiModeEnabled()),g=v(u),y=C(g,f),m=a.find_path(y.map,"start","end"),S=[];for(let R=1;R<m.length-1;R++)S.push(y.table[m[R]].node);return t.fromArray(w(S))},t.rawSplit=function(d){return t.fromArray(E(d,c.isKanjiModeEnabled()))}})(Zn);const Te=M,Me=Ie,ra=Ps,oa=qs,ia=Hn,sa=zn,je=Wn,He=Re,aa=Fs,me=Qn,ca=Yn,la=D,Ae=Zn;function ua(t,e){const n=t.size,r=sa.getPositions(e);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let c=-1;c<=7;c++)if(!(i+c<=-1||n<=i+c))for(let a=-1;a<=7;a++)s+a<=-1||n<=s+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(i+c,s+a,!0,!0):t.set(i+c,s+a,!1,!0))}}function da(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function fa(t,e){const n=ia.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(o+s,i+c,!0,!0):t.set(o+s,i+c,!1,!0)}}function ha(t,e){const n=t.size,r=me.getEncodedBits(e);let o,i,s;for(let c=0;c<18;c++)o=Math.floor(c/3),i=c%3+n-8-3,s=(r>>c&1)===1,t.set(o,i,s,!0),t.set(i,o,s,!0)}function Oe(t,e,n){const r=t.size,o=ca.getEncodedBits(e,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function ga(t,e){const n=t.size;let r=-1,o=n-1,i=7,s=0;for(let c=n-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(o,c-a)){let h=!1;s<e.length&&(h=(e[s]>>>i&1)===1),t.set(o,c-a,h),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function _a(t,e,n){const r=new ra;n.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),la.getCharCountIndicator(a.mode,t)),a.write(r)});const o=Te.getSymbolTotalCodewords(t),i=He.getTotalCodewordsCount(t,e),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(s-r.getLengthInBits())/8;for(let a=0;a<c;a++)r.put(a%2?17:236,8);return pa(r,t,e)}function pa(t,e,n){const r=Te.getSymbolTotalCodewords(e),o=He.getTotalCodewordsCount(e,n),i=r-o,s=He.getBlocksCount(e,n),c=r%s,a=s-c,h=Math.floor(r/s),p=Math.floor(i/s),E=p+1,b=h-p,w=new aa(b);let v=0;const C=new Array(s),I=new Array(s);let l=0;const d=new Uint8Array(t.buffer);for(let m=0;m<s;m++){const S=m<a?p:E;C[m]=d.slice(v,v+S),I[m]=w.encode(C[m]),v+=S,l=Math.max(l,S)}const f=new Uint8Array(r);let u=0,g,y;for(g=0;g<l;g++)for(y=0;y<s;y++)g<C[y].length&&(f[u++]=C[y][g]);for(g=0;g<b;g++)for(y=0;y<s;y++)f[u++]=I[y][g];return f}function ma(t,e,n,r){let o;if(Array.isArray(t))o=Ae.fromArray(t);else if(typeof t=="string"){let h=e;if(!h){const p=Ae.rawSplit(t);h=me.getBestVersionForData(p,n)}o=Ae.fromString(t,h||40)}else throw new Error("Invalid data");const i=me.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=_a(e,n,o),c=Te.getSymbolSize(e),a=new oa(c);return ua(a,e),da(a),fa(a,e),Oe(a,n,0),e>=7&&ha(a,e),ga(a,s),isNaN(r)&&(r=je.getBestMask(a,Oe.bind(null,a,n))),je.applyMask(r,a),Oe(a,n,r),{modules:a,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}$n.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Me.M,o,i;return typeof n<"u"&&(r=Me.from(n.errorCorrectionLevel,Me.M),o=me.from(n.version),i=je.from(n.maskPattern),n.toSJISFunc&&Te.setToSJISFunction(n.toSJISFunc)),ma(e,o,r,i)};var Xn={},pt={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const i=t.getScale(r,o);return Math.floor((r+o.margin*2)*i)},t.qrToImageData=function(r,o,i){const s=o.modules.size,c=o.modules.data,a=t.getScale(s,i),h=Math.floor((s+i.margin*2)*a),p=i.margin*a,E=[i.color.light,i.color.dark];for(let b=0;b<h;b++)for(let w=0;w<h;w++){let v=(b*h+w)*4,C=i.color.light;if(b>=p&&w>=p&&b<h-p&&w<h-p){const I=Math.floor((b-p)/a),l=Math.floor((w-p)/a);C=E[c[I*s+l]?1:0]}r[v++]=C.r,r[v++]=C.g,r[v++]=C.b,r[v]=C.a}}})(pt);(function(t){const e=pt;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,c){let a=c,h=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(h=r()),a=e.getOptions(a);const p=e.getImageWidth(i.modules.size,a),E=h.getContext("2d"),b=E.createImageData(p,p);return e.qrToImageData(b.data,i,a),n(E,h,p),E.putImageData(b,0,0),h},t.renderToDataURL=function(i,s,c){let a=c;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const h=t.render(i,s,a),p=a.type||"image/png",E=a.rendererOpts||{};return h.toDataURL(p,E.quality)}})(Xn);var er={};const wa=pt;function kt(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Le(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function ya(t,e,n){let r="",o=0,i=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),h=Math.floor(c/e);!a&&!i&&(i=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(r+=i?Le("M",a+n,.5+h+n):Le("m",o,0),o=0,i=!1),a+1<e&&t[c+1]||(r+=Le("h",s),s=0)):o++}return r}er.render=function(e,n,r){const o=wa.getOptions(n),i=e.modules.size,s=e.modules.data,c=i+o.margin*2,a=o.color.light.a?"<path "+kt(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+kt(o.color.dark,"stroke")+' d="'+ya(s,i,o.margin)+'"/>',p='viewBox="0 0 '+c+" "+c+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+p+' shape-rendering="crispEdges">'+a+h+`</svg>
`;return typeof r=="function"&&r(null,b),b};const ba=Bs,ze=$n,tr=Xn,va=er;function mt(t,e,n,r,o){const i=[].slice.call(arguments,1),s=i.length,c=typeof i[s-1]=="function";if(!c&&!ba())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=r=void 0):s===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(a,h){try{const p=ze.create(n,r);a(t(p,e,r))}catch(p){h(p)}})}try{const a=ze.create(n,r);o(null,t(a,e,r))}catch(a){o(a)}}ae.create=ze.create;ae.toCanvas=mt.bind(null,tr.render);ae.toDataURL=mt.bind(null,tr.renderToDataURL);ae.toString=mt.bind(null,function(t,e,n){return va.render(t,n)});function nr(t,e){for(var n in e)t[n]=e[n];return t}function We(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Be(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function we(t){this.props=t}function rr(t,e){function n(o){var i=this.props.ref,s=i==o.ref;return!s&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!s:We(this.props,o)}function r(o){return this.shouldComponentUpdate=n,O(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(we.prototype=new j).isPureReactComponent=!0,we.prototype.shouldComponentUpdate=function(t,e){return We(this.props,t)||We(this.state,e)};var Tt=N.__b;N.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Tt&&Tt(t)};var Ea=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function or(t){function e(n){var r=nr({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ea,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Nt=function(t,e){return t==null?null:B(B(t).map(e))},ir={map:Nt,forEach:Nt,count:function(t){return t?B(t).length:0},only:function(t){var e=B(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:B},Ca=N.__e;N.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Ca(t,e,n,r)};var xt=N.unmount;function sr(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=nr({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return sr(r,e,n)})),t}function ar(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return ar(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function ne(){this.__u=0,this.t=null,this.__b=null}function cr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function lr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw e;return O(n,i)}return o.displayName="Lazy",o.__f=!0,o}function z(){this.u=null,this.o=null}N.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),xt&&xt(t)},(ne.prototype=new j).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=cr(r.__v),i=!1,s=function(){i||(i=!0,n.__R=null,o?o(c):c())};n.__R=s;var c=function(){if(!--r.__u){if(r.state.__a){var h=r.state.__a;r.__v.__k[0]=ar(h,h.__c.__P,h.__c.__O)}var p;for(r.setState({__a:r.__b=null});p=r.t.pop();)p.forceUpdate()}},a=e.__h===!0;r.__u++||a||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(s,s)},ne.prototype.componentWillUnmount=function(){this.t=[]},ne.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=sr(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&O(W,null,t.fallback);return o&&(o.__h=null),[O(W,null,e.__a?null:t.children),o]};var Mt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Sa(t){return this.getChildContext=function(){return t.context},t.children}function Ia(t){var e=this,n=t.i;e.componentWillUnmount=function(){ge(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),ge(O(Sa,{context:e.context},t.__v),e.l)}function ur(t,e){var n=O(Ia,{__v:t,i:e});return n.containerInfo=e,n}(z.prototype=new j).__a=function(t){var e=this,n=cr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Mt(e,t,r)):o()};n?n(i):i()}},z.prototype.render=function(t){this.u=null,this.o=new Map;var e=B(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Mt(t,n,e)})};var dr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ra=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ka=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ta=/[A-Z0-9]/g,Na=typeof document<"u",xa=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function fr(t,e,n){return e.__k==null&&(e.textContent=""),ge(t,e),typeof n=="function"&&n(),t?t.__c:null}function hr(t,e,n){return fo(t,e),typeof n=="function"&&n(),t?t.__c:null}j.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(j.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var At=N.event;function Ma(){}function Aa(){return this.cancelBubble}function Oa(){return this.defaultPrevented}N.event=function(t){return At&&(t=At(t)),t.persist=Ma,t.isPropagationStopped=Aa,t.isDefaultPrevented=Oa,t.nativeEvent=t};var wt,La={enumerable:!1,configurable:!0,get:function(){return this.class}},Ot=N.vnode;N.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||Na&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var c=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":c==="ondoubleclick"?i="ondblclick":c!=="onchange"||r!=="input"&&r!=="textarea"||xa(n.type)?c==="onfocus"?i="onfocusin":c==="onblur"?i="onfocusout":ka.test(i)?i=c:r.indexOf("-")===-1&&Ra.test(i)?i=i.replace(Ta,"-$&").toLowerCase():s===null&&(s=void 0):c=i="oninput",c==="oninput"&&o[i=c]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=B(n.children).forEach(function(a){a.props.selected=o.value.indexOf(a.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=B(n.children).forEach(function(a){a.props.selected=o.multiple?o.defaultValue.indexOf(a.props.value)!=-1:o.defaultValue==a.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",La)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=dr,Ot&&Ot(t)};var Lt=N.__r;N.__r=function(t){Lt&&Lt(t),wt=t.__c};var Bt=N.diffed;N.diffed=function(t){Bt&&Bt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),wt=null};var gr={ReactCurrentDispatcher:{current:{readContext:function(t){return wt.__n[t.__c].props.value}}}},Ba="17.0.2";function _r(t){return O.bind(null,t)}function le(t){return!!t&&t.$$typeof===dr}function pr(t){return le(t)&&t.type===W}function mr(t){return le(t)?ho.apply(null,arguments):t}function wr(t){return!!t.__k&&(ge(null,t),!0)}function yr(t){return t&&(t.base||t.nodeType===1&&t)||null}var br=function(t,e){return t(e)},vr=function(t,e){return t(e)},Er=W;function yt(t){t()}function Cr(t){return t}function Sr(){return[!1,yt]}var Ir=ye,Rr=le;function kr(t,e){var n=e(),r=Je({h:{__:n,v:e}}),o=r[0].h,i=r[1];return ye(function(){o.__=n,o.v=e,Be(o.__,e())||i({h:o})},[t,n,e]),Qe(function(){return Be(o.__,o.v())||i({h:o}),t(function(){Be(o.__,o.v())||i({h:o})})},[t]),n}var Ua={useState:Je,useId:Ft,useReducer:$t,useEffect:Qe,useLayoutEffect:ye,useInsertionEffect:Ir,useTransition:Sr,useDeferredValue:Cr,useSyncExternalStore:kr,startTransition:yt,useRef:jt,useImperativeHandle:Ht,useMemo:zt,useCallback:Wt,useContext:Vt,useDebugValue:Jt,version:"17.0.2",Children:ir,render:fr,hydrate:hr,unmountComponentAtNode:wr,createPortal:ur,createElement:O,createContext:Qt,createFactory:_r,cloneElement:mr,createRef:Kt,Fragment:W,isValidElement:le,isElement:Rr,isFragment:pr,findDOMNode:yr,Component:j,PureComponent:we,memo:rr,forwardRef:or,flushSync:vr,unstable_batchedUpdates:br,StrictMode:Er,Suspense:ne,SuspenseList:z,lazy:lr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:gr};const Pa=Object.freeze(Object.defineProperty({__proto__:null,Children:ir,Component:j,Fragment:W,PureComponent:we,StrictMode:Er,Suspense:ne,SuspenseList:z,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:gr,cloneElement:mr,createContext:Qt,createElement:O,createFactory:_r,createPortal:ur,createRef:Kt,default:Ua,findDOMNode:yr,flushSync:vr,forwardRef:or,hydrate:hr,isElement:Rr,isFragment:pr,isValidElement:le,lazy:lr,memo:rr,render:fr,startTransition:yt,unmountComponentAtNode:wr,unstable_batchedUpdates:br,useCallback:Wt,useContext:Vt,useDebugValue:Jt,useDeferredValue:Cr,useEffect:Qe,useErrorBoundary:go,useId:Ft,useImperativeHandle:Ht,useInsertionEffect:Ir,useLayoutEffect:ye,useMemo:zt,useReducer:$t,useRef:jt,useState:Je,useSyncExternalStore:kr,useTransition:Sr,version:Ba},Symbol.toStringTag,{value:"Module"})),qa=qt(Pa);function Tr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var T=Ls,Nr=Tr(ae),Da=Tr(io),_=qa;function Fa(t){Nr.toString(t,{type:"terminal"}).then(console.log)}var $a=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ja(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var Ha="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",za="WalletConnect",Wa=300,Va="rgb(64, 153, 255)",xr="walletconnect-wrapper",Ut="walletconnect-style-sheet",Mr="walletconnect-qrcode-modal",Ja="walletconnect-qrcode-close",Ar="walletconnect-qrcode-text",Qa="walletconnect-connect-button";function Ka(t){return _.createElement("div",{className:"walletconnect-modal__header"},_.createElement("img",{src:Ha,className:"walletconnect-modal__headerLogo"}),_.createElement("p",null,za),_.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},_.createElement("div",{id:Ja,className:"walletconnect-modal__close__icon"},_.createElement("div",{className:"walletconnect-modal__close__line1"}),_.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Ya(t){return _.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:Qa+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var Ga="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function Za(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return _.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},_.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),_.createElement("div",{className:"walletconnect-modal__base__row__right"},_.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),_.createElement("img",{src:Ga,className:"walletconnect-modal__base__row__right__caret"})))}function Xa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,s=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return _.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},_.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),_.createElement("div",{style:{fontSize:s},className:"walletconnect-connect__button__text"},r))}var ec=5,Ue=12;function tc(t){var e=T.isAndroid(),n=_.useState(""),r=n[0],o=n[1],i=_.useState(""),s=i[0],c=i[1],a=_.useState(1),h=a[0],p=a[1],E=s?t.links.filter(function(u){return u.name.toLowerCase().includes(s.toLowerCase())}):t.links,b=t.errorMessage,w=s||E.length>ec,v=Math.ceil(E.length/Ue),C=[(h-1)*Ue+1,h*Ue],I=E.length?E.filter(function(u,g){return g+1>=C[0]&&g+1<=C[1]}):[],l=!e&&v>1,d=void 0;function f(u){o(u.target.value),clearTimeout(d),u.target.value?d=setTimeout(function(){c(u.target.value),p(1)},1e3):(o(""),c(""),p(1))}return _.createElement("div",null,_.createElement("p",{id:Ar,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&_.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:f}),_.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":w&&E.length?"__wrap":"")},e?_.createElement(Ya,{name:t.text.connect,color:Va,href:t.uri,onClick:_.useCallback(function(){T.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):I.length?I.map(function(u){var g=u.color,y=u.name,m=u.shortName,S=u.logo,R=T.formatIOSMobile(t.uri,u),k=_.useCallback(function(){T.saveMobileLinkInfo({name:y,href:R})},[I]);return w?_.createElement(Xa,{color:g,href:R,name:m||y,logo:S,onClick:k}):_.createElement(Za,{color:g,href:R,name:y,logo:S,onClick:k})}):_.createElement(_.Fragment,null,_.createElement("p",null,b.length?t.errorMessage:t.links.length&&!E.length?t.text.no_wallets_found:t.text.loading))),l&&_.createElement("div",{className:"walletconnect-modal__footer"},Array(v).fill(0).map(function(u,g){var y=g+1,m=h===y;return _.createElement("a",{style:{margin:"auto 10px",fontWeight:m?"bold":"normal"},onClick:function(){return p(y)}},y)})))}function nc(t){var e=!!t.message.trim();return _.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var rc=function(t){try{var e="";return Promise.resolve(Nr.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function oc(t){var e=_.useState(""),n=e[0],r=e[1],o=_.useState(""),i=o[0],s=o[1];_.useEffect(function(){try{return Promise.resolve(rc(t.uri)).then(function(a){s(a)})}catch(a){Promise.reject(a)}},[]);var c=function(){var a=Da(t.uri);a?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return _.createElement("div",null,_.createElement("p",{id:Ar,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),_.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),_.createElement("div",{className:"walletconnect-modal__footer"},_.createElement("a",{onClick:c},t.text.copy_to_clipboard)),_.createElement(nc,{message:n}))}function ic(t){var e=T.isAndroid(),n=T.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=_.useState(!1),i=o[0],s=o[1],c=_.useState(!1),a=c[0],h=c[1],p=_.useState(!n),E=p[0],b=p[1],w={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},v=_.useState(""),C=v[0],I=v[1],l=_.useState(!1),d=l[0],f=l[1],u=_.useState([]),g=u[0],y=u[1],m=_.useState(""),S=m[0],R=m[1],k=function(){a||i||r&&!r.length||g.length>0||_.useEffect(function(){var X=function(){try{if(e)return Promise.resolve();s(!0);var x=ja(function(){var ee=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:T.getWalletRegistryUrl();return Promise.resolve(fetch(ee)).then(function(Br){return Promise.resolve(Br.json()).then(function(Ur){var Pr=Ur.listings,qr=n?"mobile":"desktop",ue=T.getMobileLinkRegistry(T.formatMobileRegistry(Pr,qr),r);s(!1),h(!0),R(ue.length?"":t.text.no_supported_wallets),y(ue);var bt=ue.length===1;bt&&(I(T.formatIOSMobile(t.uri,ue[0])),b(!0)),f(bt)})})},function(ee){s(!1),h(!0),R(t.text.something_went_wrong),console.error(ee)});return Promise.resolve(x&&x.then?x.then(function(){}):void 0)}catch(ee){return Promise.reject(ee)}};X()})};k();var F=n?E:!E;return _.createElement("div",{id:Mr,className:"walletconnect-qrcode__base animated fadeIn"},_.createElement("div",{className:"walletconnect-modal__base"},_.createElement(Ka,{onClose:t.onClose}),d&&E?_.createElement("div",{className:"walletconnect-modal__single_wallet"},_.createElement("a",{onClick:function(){return T.saveMobileLinkInfo({name:g[0].name,href:C})},href:C,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(d?g[0].name:"")+" ›")):e||i||!i&&g.length?_.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(F?" right__selected":"")},_.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?_.createElement(_.Fragment,null,_.createElement("a",{onClick:function(){return b(!1),k()}},t.text.mobile),_.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode)):_.createElement(_.Fragment,null,_.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode),_.createElement("a",{onClick:function(){return b(!1),k()}},t.text.desktop))):null,_.createElement("div",null,E||!e&&!i&&!g.length?_.createElement(oc,Object.assign({},w)):_.createElement(tc,Object.assign({},w,{links:g,errorMessage:S})))))}var sc={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},ac={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},cc={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},lc={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},uc={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},dc={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},fc={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},hc={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Pt={de:sc,en:ac,es:cc,fr:lc,ko:uc,pt:dc,zh:fc,fa:hc};function gc(){var t=T.getDocumentOrThrow(),e=t.getElementById(Ut);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Ut),n.innerText=$a,t.head.appendChild(n)}function _c(){var t=T.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",xr),t.body.appendChild(e),e}function Or(){var t=T.getDocumentOrThrow(),e=t.getElementById(Mr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(xr);n&&t.body.removeChild(n)},Wa))}function pc(t){return function(){Or(),t&&t()}}function mc(){var t=T.getNavigatorOrThrow().language.split("-")[0]||"en";return Pt[t]||Pt.en}function wc(t,e,n){gc();var r=_c();_.render(_.createElement(ic,{text:mc(),uri:t,onClose:pc(e),qrcodeModalOptions:n}),r)}function yc(){Or()}var Lr=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function bc(t,e,n){console.log(t),Lr()?Fa(t):wc(t,e,n)}function vc(){Lr()||yc()}var Ec={open:bc,close:vc},Cc=Ec;const Sc=Ve(Cc);class Ic extends lo{constructor(e){super(),this.events=new Dt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",vt(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Sc:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Os(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?vt(e.id,e.error.message,e.error.data):e}}class Nc{constructor(e){this.events=new Dt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new Et(new Ic(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Ke.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=En(e,this.rpc);return typeof n>"u"?void 0:new Et(new uo(n))}}export{Nc as default};
