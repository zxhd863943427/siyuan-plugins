"use strict";const $=require("siyuan");function D(){}function _t(e){return e()}function et(){return Object.create(null)}function R(e){e.forEach(_t)}function pt(e){return typeof e=="function"}function gt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $t(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function Dt(e,t,n){const o=Ot(e);if(!o.getElementById(t)){const i=_("style");i.id=t,i.textContent=n,Et(o,i)}}function Ot(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Et(e,t){return u(e.head||e,t),t.sheet}function q(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function Nt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function b(){return v(" ")}function At(){return v("")}function x(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ct(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}function nt(e,t,n){for(let o=0;o<e.options.length;o+=1){const i=e.options[o];if(i.__value===t){i.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function xt(e){const t=e.querySelector(":checked");return t&&t.__value}function Tt(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,o,t),i}let U;function M(e){U=e}function Pt(){if(!U)throw new Error("Function called outside component initialization");return U}function mt(){const e=Pt();return(t,n,{cancelable:o=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=Tt(t,n,{cancelable:o});return i.slice().forEach(l=>{l.call(e,s)}),!s.defaultPrevented}return!0}}const A=[],ot=[];let T=[];const it=[],Rt=Promise.resolve();let H=!1;function jt(){H||(H=!0,Rt.then(yt))}function F(e){T.push(e)}const X=new Set;let N=0;function yt(){if(N!==0)return;const e=U;do{try{for(;N<A.length;){const t=A[N];N++,M(t),Mt(t.$$)}}catch(t){throw A.length=0,N=0,t}for(M(null),A.length=0,N=0;ot.length;)ot.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];X.has(n)||(X.add(n),n())}T.length=0}while(A.length);for(;it.length;)it.pop()();H=!1,X.clear(),M(e)}function Mt(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function Ut(e){const t=[],n=[];T.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),T=t}const qt=new Set;function zt(e,t){e&&e.i&&(qt.delete(e),e.i(t))}function Bt(e,t,n,o){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),o||F(()=>{const l=e.$$.on_mount.map(_t).filter(pt);e.$$.on_destroy?e.$$.on_destroy.push(...l):R(l),e.$$.on_mount=[]}),s.forEach(F)}function Lt(e,t){const n=e.$$;n.fragment!==null&&(Ut(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(e,t){e.$$.dirty[0]===-1&&(A.push(e),jt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function bt(e,t,n,o,i,s,l,a=[-1]){const r=U;M(e);const c=e.$$={fragment:null,ctx:[],props:s,update:D,not_equal:i,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:et(),dirty:a,skip_bound:!1,root:t.target||r.$$.root};l&&l(c.root);let k=!1;if(c.ctx=n?n(e,t.props||{},(p,w,...d)=>{const m=d.length?d[0]:w;return c.ctx&&i(c.ctx[p],c.ctx[p]=m)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](m),k&&Ft(e,p)),w}):[],c.update(),k=!0,R(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const p=Ct(t.target);c.fragment&&c.fragment.l(p),p.forEach(j)}else c.fragment&&c.fragment.c();t.intro&&zt(e.$$.fragment),Bt(e,t.target,t.anchor,t.customElement),yt()}M(r)}class vt{$destroy(){Lt(this,1),this.$destroy=D}$on(t,n){if(!pt(n))return D;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!$t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K=$.clientApi.createLogger("OpenDiaryToday");function h(...e){K.info(...e)}function It(...e){K.error(...e)}function Jt(...e){K.warn(...e)}const kt={"zh-CN":{Setting:[{title:"自动打开 Daily Note",text:"插件启动后自动打开今日的 Daily Note"},{title:"更新笔记本状态",text:"在笔记本配置发生变化的时候更新其状态，也可以使用注册的快捷键 Ctrl+Alt+U"}]},"en-US":{Setting:[{title:"Open Today's Diary Automatically",text:"Open Today's Diary automatically when the plugin is loaded"},{title:"Update Notebook Status",text:"Update the status of the notebook when the notebook configuration changes, or use the registered shortcut Ctrl+Alt+U"}]}};function Wt(e){Dt(e,"svelte-yta1l5","select.svelte-yta1l5{margin:0;padding:0;max-width:8rem !important}")}function lt(e,t,n){const o=e.slice();return o[10]=t[n],o}function Yt(e){let t,n,o=e[10].name+"",i,s,l;return{c(){t=_("option"),n=_("span"),i=v(o),s=b(),f(n,"class","b3-menu__label"),t.__value=l=e[10].id,t.value=t.__value,f(t,"class","b3-menu__item")},m(a,r){q(a,t,r),u(t,n),u(n,i),u(t,s)},p(a,r){r&2&&o!==(o=a[10].name+"")&&C(i,o),r&2&&l!==(l=a[10].id)&&(t.__value=l,t.value=t.__value)},d(a){a&&j(t)}}}function Xt(e){let t,n,o,i=e[10].name+"",s,l,a;return{c(){t=_("option"),n=_("span"),o=v("√"),s=v(i),l=b(),f(n,"class","b3-menu__label"),t.__value=a=e[10].id,t.value=t.__value,f(t,"class","b3-menu__item")},m(r,c){q(r,t,c),u(t,n),u(n,o),u(n,s),u(t,l)},p(r,c){c&2&&i!==(i=r[10].name+"")&&C(s,i),c&2&&a!==(a=r[10].id)&&(t.__value=a,t.value=t.__value)},d(r){r&&j(t)}}}function st(e){let t,n;function o(l,a){return a&6&&(t=null),t==null&&(t=!l[10].closed&&l[2].get(l[10].id)===!0),t?Xt:Yt}let i=o(e,-1),s=i(e);return{c(){s.c(),n=At()},m(l,a){s.m(l,a),q(l,n,a)},p(l,a){i===(i=o(l,a))&&s?s.p(l,a):(s.d(1),s=i(l),s&&(s.c(),s.m(n.parentNode,n)))},d(l){s.d(l),l&&j(n)}}}function Gt(e){let t,n,o,i=e[1],s=[];for(let l=0;l<i.length;l+=1)s[l]=st(lt(e,i,l));return{c(){t=_("select");for(let l=0;l<s.length;l+=1)s[l].c();f(t,"class","toolbar__item b3-tooltips b3-tooltips__se svelte-yta1l5"),e[0]===void 0&&F(()=>e[5].call(t))},m(l,a){q(l,t,a);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null);nt(t,e[0],!0),n||(o=[x(t,"click",e[3]),x(t,"blur",e[4]),x(t,"change",e[5])],n=!0)},p(l,[a]){if(a&6){i=l[1];let r;for(r=0;r<i.length;r+=1){const c=lt(l,i,r);s[r]?s[r].p(c,a):(s[r]=st(c),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}a&3&&nt(t,l[0])},i:D,o:D,d(l){l&&j(t),Nt(s,l),n=!1,R(o)}}}function Ht(e,t,n){const o=mt();let{notebooks:i=new Array}=t,{diaryStatus:s=new Map}=t,{selected:l=""}=t,a=!0;function r(d){if(h("Event: click"),a)a=!1,k();else{let m=d.target.value;p(m),a=!0}}function c(){h("Event: blur"),a=!0}function k(){h("Event: openNotebook"),o("openSelector")}function p(d){h("Event: openDiary");let m=i.find(g=>g.id===d);o("openDiary",{notebook:m})}function w(){l=xt(this),n(0,l),n(1,i)}return e.$$set=d=>{"notebooks"in d&&n(1,i=d.notebooks),"diaryStatus"in d&&n(2,s=d.diaryStatus),"selected"in d&&n(0,l=d.selected)},e.$$.update=()=>{e.$$.dirty&1&&h("当前选中",l)},[l,i,s,r,c,w]}class Kt extends vt{constructor(t){super(),bt(this,t,Ht,Gt,gt,{notebooks:1,diaryStatus:2,selected:0},Wt)}}class Qt{constructor(){this.settings={OpenOnStart:!0}}setPlugin(t){this.plugin=t}get(t){var n;return(n=this.settings)==null?void 0:n[t]}set(t,n){this.settings[t]=n}async load(){let t=await(this==null?void 0:this.plugin.loadStorage("DailyNoteToday.json"));if(h(`Read storage: ${t}`),t==null)this.save();else{t=JSON.parse(t);let n=t==null?void 0:t.OpenOnStart;n!=null&&this.set("OpenOnStart",n)}}save(){let t=JSON.stringify(this.settings);h(`Write storage: ${t}`),this.plugin.writeStorage("DailyNoteToday.json",t)}}const P=new Qt;function Vt(e){let t,n,o,i=e[0][0].title+"",s,l,a,r=e[0][0].text+"",c,k,p,w,d,m,g,O,z=e[0][1].title+"",I,Q,B,L=e[0][1].text+"",J,V,W,Z,E,Y,tt;return{c(){t=_("div"),n=_("label"),o=_("div"),s=v(i),l=b(),a=_("div"),c=v(r),k=b(),p=_("span"),w=b(),d=_("input"),m=b(),g=_("label"),O=_("div"),I=v(z),Q=b(),B=_("div"),J=v(L),V=b(),W=_("span"),Z=b(),E=_("button"),E.textContent="Update",f(a,"class","b3-label__text"),f(o,"class","fn__flex-1"),f(p,"class","fn__space"),f(d,"class","b3-switch fn__flex-center"),f(d,"id","openDNOnStart"),f(d,"type","checkbox"),f(n,"class","fn__flex b3-label"),f(B,"class","b3-label__text"),f(O,"class","fn__flex-1"),f(W,"class","fn__space"),f(E,"class","b3-button b3-button--outline fn__flex-center fn__size200"),f(E,"id","updateNotebookStatus"),f(g,"class","fn__flex b3-label"),f(t,"class","config__tab-container")},m(y,S){q(y,t,S),u(t,n),u(n,o),u(o,s),u(o,l),u(o,a),u(a,c),u(n,k),u(n,p),u(n,w),u(n,d),d.checked=e[1],u(t,m),u(t,g),u(g,O),u(O,I),u(O,Q),u(O,B),u(B,J),u(g,V),u(g,W),u(g,Z),u(g,E),Y||(tt=[x(d,"change",e[3]),x(d,"change",e[4]),x(E,"click",e[2])],Y=!0)},p(y,[S]){S&1&&i!==(i=y[0][0].title+"")&&C(s,i),S&1&&r!==(r=y[0][0].text+"")&&C(c,r),S&2&&(d.checked=y[1]),S&1&&z!==(z=y[0][1].title+"")&&C(I,z),S&1&&L!==(L=y[0][1].text+"")&&C(J,L)},i:D,o:D,d(y){y&&j(t),Y=!1,R(tt)}}}function Zt(e,t,n){let o=P.get("OpenOnStart");const i=mt();let{contents:s}=t;function l(){i("updateAll")}function a(){o=this.checked,n(1,o)}const r=c=>{console.log("Checked: "+c.target.checked),P.set("OpenOnStart",c.target.checked),P.save()};return e.$$set=c=>{"contents"in c&&n(0,s=c.contents)},[s,o,l,a,r]}class te extends vt{constructor(t){super(),bt(this,t,Zt,Vt,gt,{contents:0})}}var dt;let ee=(dt=window.siyuan)==null?void 0:dt.config.api.token;async function ne(e,t){let o=await(await fetch(e,{body:JSON.stringify(t),method:"POST",headers:{Authorization:`Token ${ee}`}})).json();return o&&(o==null?void 0:o.code)===0?o.data:null}const G='/daily note/{{now | date "2006/01"}}/{{now | date "2006-01-02"}}',oe=new Set(["思源笔记用户指南","SiYuan User Guide"]);async function at(){try{let t=(await $.serverApi.lsNotebooks("")).notebooks;t=t.filter(o=>!o.closed&&!oe.has(o.name)),t=t.sort((o,i)=>o.sort-i.sort);let n=t.map(o=>o.name);for(let o of t){let i=await ie(o.id);o.dailynoteSprig=i!=""?i:G,o.dailynotePath=await rt(o.dailynoteSprig),o.dailynotePath==""&&(Jt(`Invalid daily note srpig of ${o.name}`),o.dailynoteSprig=G,o.dailynotePath=await rt(G)),h(`${o.name}: ${o.dailynoteSprig} - ${o.dailynotePath}`)}return h(`Read all notebooks: ${n}`),t}catch(e){return It(e),null}}async function ie(e){return(await $.serverApi.getNotebookConf(e)).conf.dailyNoteSavePath}async function le(e){return await ne("/api/template/renderSprig",{template:e})}async function rt(e){return await le(e)}async function wt(e,t=null){let n=`select * from blocks where type='d' and hpath = '${e}'`;return t!=null&&(n=`select * from blocks where type='d' and hpath = '${e}' and box = '${t.id}'`),await $.serverApi.sql(n)}async function se(e,t){h(`Try to create: ${e.name} ${t}`);let n=await $.serverApi.createDocWithMd(e.id,t,"");return h(`Create new diary ${n}`),n}async function ct(e){let t=e.dailynotePath;h(`Open ${e.name}/${t}`);let n=await wt(t,e);if(n!=null&&n.length>0){let i=n[0].id;window.open(`siyuan://blocks/${i}`)}else{let o=await se(e,t);window.open(`siyuan://blocks/${o}`)}}const ae="toolbar__item b3-tooltips b3-tooltips__sw";var ft,ht;const ut=(ht=(ft=window==null?void 0:window.siyuan)==null?void 0:ft.config)==null?void 0:ht.lang;let St=kt["zh-CN"];(ut===void 0||!ut.startsWith("zh"))&&(St=kt["en-US"]);class re extends $.Plugin{constructor(){super(),h(`Start: ${new Date}`),P.setPlugin(this),this.notebooks=[],this.selectFolded=!0,this.div_select=document.createElement("div"),this.div_select.setAttribute("aria-label","Open Today's Diary"),this.div_select.classList.add(...ae.split(/\s/)),this.div_select.style.margin="0 0.5rem",this.div_select.style.padding="0rem 0rem"}async onload(){let t=performance.now();await this.initNotebooks(),this.registerCommand({command:"updateAll",shortcut:"ctrl+alt+u,command+option+u",description:"全局更新",callback:this.updateAll.bind(this)}),await P.load(),this.initSetting(),this.component_select=new Kt({target:this.div_select,props:{notebooks:this.notebooks}}),this.component_select.$on("openSelector",this.updateDiaryStatus_.bind(this)),this.component_select.$on("openDiary",async o=>{await ct(o.detail.notebook),this.updateDiaryStatus_()}),$.clientApi.addToolbarRight(this.div_select),await this.updateDiaryStatus_(),this.notebooks.length>0&&(this.component_select.$set({selected:this.notebooks[0].id}),P.settings.OpenOnStart===!0&&ct(this.notebooks[0]));let n=performance.now();h(`Onload, 耗时: ${n-t} ms`)}initSetting(){this.div_setting=document.createElement("div"),this.component_setting=new te({target:this.div_setting,props:{contents:St.Setting}}),this.registerSettingRender(t=>{t.appendChild(this.div_setting)}),this.component_setting.$on("updateAll",()=>{this.updateAll()})}async initNotebooks(){let n=0;for(;n<5;){let o=await at();if(o!=null){this.notebooks=o;break}else await new Promise(i=>setTimeout(i,1e3));n++}}async updateAll(){h("updateAll");let t=await at();this.notebooks=t||[],this.component_select.$set({notebooks:this.notebooks}),await this.updateDiaryStatus_()}async updateDiaryStatus_(){h("updateDiaryStatus");let t=new Set;this.notebooks.forEach(i=>{t.add(i.dailynotePath)});let n=new Map,o=0;for(const i of t){let s=await wt(i);if(s.length>0){let l=s.map(a=>a.box);l.forEach(a=>{n.set(a,!0)}),o+=l.length,h(`${i} 共 ${l.length} 篇`)}}this.component_select.$set({diaryStatus:n}),h(`当前日记共 ${o} 篇`)}onunload(){h("plugin unload"),this.component_select.$destroy(),this.div_select.remove()}}module.exports=re;