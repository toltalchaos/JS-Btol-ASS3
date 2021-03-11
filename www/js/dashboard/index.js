var Le={getAllDepartments:"http://localhost:5000/api/departments/",getDepartment:a=>`http://localhost:5000/api/departments/name/${a}`,deleteEmployee:a=>`http://localhost:5000/api/departments/employee/id/${a}`,updateEmployee:a=>"http://localhost:5000/api/departments/employee/update"},L=Le;var Se=async a=>await(await fetch(a)).json(),Ce=async a=>await(await fetch(a,{method:"DELETE",redirect:"follow"})).json(),Ae=async(a,n)=>{let s=new Headers;s.append("Content-Type","application/json");let l=JSON.stringify(n),m=await(await fetch(a,{method:"PUT",headers:s,body:l,redirect:"follow"})).text()},De={getRequest:Se,deleteRequest:Ce,putRequest:Ae},S=De;var Oe=function(){let a=null;function n(){let s=document.createElement("img");document.body.appendChild(s);let l=async m=>{let u=await S.deleteRequest(L.deleteEmployee(m.detail.id));console.log(u),s.dispatchEvent(new CustomEvent("removeItem",{bubbles:!0,detail:u}))},c=async m=>{let u=await S.putRequest(L.updateEmployee,m.detail.payload)},h=async m=>{let u=await S.getRequest(L.getDepartment(m.detail.name));s.dispatchEvent(new CustomEvent("updateDisplay",{bubbles:!0,detail:u}))};return s.addEventListener("deleteEmployee",l),s.addEventListener("editEmployee",c),s.addEventListener("sideBarSelect",h),{handle:s}}return{getInstance:function(){return a||(a=n()),a}}}(),A=Oe;var Z=`
    <ul class="departments"></ul>
`,K=`
   <li class="department" data-name="<%-data.name%> "><%-data.name%></li>
`;function xe(a){return document.createRange().createContextualFragment(a).firstElementChild}var T=xe;var Fe=function(){return T(Z)},Q=Fe;function Y(a,n,s){return s={path:n,exports:{},require:function(l,c){return Ie(l,c??s.path)}},a(s,s.exports),s.exports}function Ie(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var P={};function ee(a,n){for(var s=0,l=a.length-1;l>=0;l--){var c=a[l];c==="."?a.splice(l,1):c===".."?(a.splice(l,1),s++):s&&(a.splice(l,1),s--)}if(n)for(;s--;s)a.unshift("..");return a}var Me=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,q=function(a){return Me.exec(a).slice(1)};function M(){for(var a="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var l=s>=0?arguments[s]:"/";if(typeof l!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!l)continue;a=l+"/"+a,n=l.charAt(0)==="/"}return a=ee(N(a.split("/"),function(c){return!!c}),!n).join("/"),(n?"/":"")+a||"."}function B(a){var n=k(a),s=Re(a,-1)==="/";return a=ee(N(a.split("/"),function(l){return!!l}),!n).join("/"),!a&&!n&&(a="."),a&&s&&(a+="/"),(n?"/":"")+a}function k(a){return a.charAt(0)==="/"}function te(){var a=Array.prototype.slice.call(arguments,0);return B(N(a,function(n,s){if(typeof n!="string")throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))}function ne(a,n){a=M(a).substr(1),n=M(n).substr(1);function s(g){for(var _=0;_<g.length&&g[_]==="";_++);for(var w=g.length-1;w>=0&&g[w]==="";w--);return _>w?[]:g.slice(_,w-_+1)}for(var l=s(a.split("/")),c=s(n.split("/")),h=Math.min(l.length,c.length),m=h,u=0;u<h;u++)if(l[u]!==c[u]){m=u;break}for(var p=[],u=m;u<l.length;u++)p.push("..");return p=p.concat(c.slice(m)),p.join("/")}var ae="/",re=":";function ie(a){var n=q(a),s=n[0],l=n[1];return!s&&!l?".":(l&&(l=l.substr(0,l.length-1)),s+l)}function se(a,n){var s=q(a)[2];return n&&s.substr(-1*n.length)===n&&(s=s.substr(0,s.length-n.length)),s}function le(a){return q(a)[3]}var Pe={extname:le,basename:se,dirname:ie,sep:ae,delimiter:re,relative:ne,join:te,isAbsolute:k,normalize:B,resolve:M};function N(a,n){if(a.filter)return a.filter(n);for(var s=[],l=0;l<a.length;l++)n(a[l],l,a)&&s.push(a[l]);return s}var Re="ab".substr(-1)==="b"?function(a,n,s){return a.substr(n,s)}:function(a,n,s){return n<0&&(n=a.length+n),a.substr(n,s)},qe=Object.freeze({__proto__:null,resolve:M,normalize:B,isAbsolute:k,join:te,relative:ne,sep:ae,delimiter:re,dirname:ie,basename:se,extname:le,default:Pe}),E=Y(function(a,n){var s=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(u){return u?String(u).replace(s,"\\$&"):""};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function h(u){return l[u]||u}var m=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;n.escapeXML=function(u){return u==null?"":String(u).replace(c,h)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+m},n.shallowCopy=function(u,p){p=p||{};for(var g in p)u[g]=p[g];return u},n.shallowCopyFromList=function(u,p,g){for(var _=0;_<g.length;_++){var w=g[_];typeof p[w]!="undefined"&&(u[w]=p[w])}return u},n.cache={_data:{},set:function(u,p){this._data[u]=p},get:function(u){return this._data[u]},remove:function(u){delete this._data[u]},reset:function(){this._data={}}},n.hyphenToCamel=function(u){return u.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})}}),Ne="ejs",ke="Embedded JavaScript templates",Be=["template","engine","ejs"],He="3.1.6",We="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",$e="Apache-2.0",Ue={ejs:"./bin/cli.js"},Ve="./lib/ejs.js",ze="ejs.min.js",Je="ejs.min.js",Xe={type:"git",url:"git://github.com/mde/ejs.git"},Ge="https://github.com/mde/ejs/issues",Ze="https://github.com/mde/ejs",Ke={jake:"^10.6.1"},Qe={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},Ye={node:">=0.10.0"},et={test:"mocha"},tt={name:Ne,description:ke,keywords:Be,version:He,author:We,license:$e,bin:Ue,main:Ve,jsdelivr:ze,unpkg:Je,repository:Xe,bugs:Ge,homepage:Ze,dependencies:Ke,devDependencies:Qe,engines:Ye,scripts:et},nt=Y(function(a,n){var s=qe,l=!1,c=tt.version,h="<",m=">",u="%",p="locals",g="ejs",_="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],ye=w.concat("cache"),$=/^\uFEFF/;n.cache=E.cache,n.fileLoader=P.readFileSync,n.localsName=p,n.promiseImpl=new Function("return this;")().Promise,n.resolveInclude=function(t,r,e){var i=s.dirname,o=s.extname,d=s.resolve,v=d(e?r:i(r),t),j=o(t);return j||(v+=".ejs"),v};function U(t,r){var e;if(r.some(function(i){return e=n.resolveInclude(t,i,!0),P.existsSync(e)}))return e}function Ee(t,r){var e,i,o=r.views,d=/^[A-Za-z]+:\\|^\//.exec(t);if(d&&d.length)t=t.replace(/^\/*/,""),Array.isArray(r.root)?e=U(t,r.root):e=n.resolveInclude(t,r.root||"/",!0);else if(r.filename&&(i=n.resolveInclude(t,r.filename),P.existsSync(i)&&(e=i)),!e&&Array.isArray(o)&&(e=U(t,o)),!e&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(t)+'"');return e}function O(t,r){var e,i=t.filename,o=arguments.length>1;if(t.cache){if(!i)throw new Error("cache option requires a filename");if(e=n.cache.get(i),e)return e;o||(r=V(i).toString().replace($,""))}else if(!o){if(!i)throw new Error("Internal EJS error: no file name or template provided");r=V(i).toString().replace($,"")}return e=n.compile(r,t),t.cache&&n.cache.set(i,e),e}function _e(t,r,e){var i;if(e){try{i=O(t)(r)}catch(o){return e(o)}e(null,i)}else{if(typeof n.promiseImpl=="function")return new n.promiseImpl(function(o,d){try{i=O(t)(r),o(i)}catch(v){d(v)}});throw new Error("Please provide a callback function")}}function V(t){return n.fileLoader(t)}function we(t,r){var e=E.shallowCopy({},r);if(e.filename=Ee(t,e),typeof r.includer=="function"){var i=r.includer(t,e.filename);if(i&&(i.filename&&(e.filename=i.filename),i.template))return O(e,i.template)}return O(e)}function z(t,r,e,i,o){var d=r.split(`
`),v=Math.max(i-3,0),j=Math.min(d.length,i+3),b=o(e),C=d.slice(v,j).map(function(F,I){var x=I+v+1;return(x==i?" >> ":"    ")+x+"| "+F}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+i+`
`+C+`

`+t.message,t}function J(t){return t.replace(/;(\s*$)/,"$1")}n.compile=function(r,e){var i;return e&&e.scope&&(l||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),l=!0),e.context||(e.context=e.scope),delete e.scope),i=new f(r,e),i.compile()},n.render=function(t,r,e){var i=r||{},o=e||{};return arguments.length==2&&E.shallowCopyFromList(o,i,w),O(o,t)(i)},n.renderFile=function(){var t=Array.prototype.slice.call(arguments),r=t.shift(),e,i={filename:r},o,d;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(o=t.shift(),t.length?E.shallowCopy(i,t.pop()):(o.settings&&(o.settings.views&&(i.views=o.settings.views),o.settings["view cache"]&&(i.cache=!0),d=o.settings["view options"],d&&E.shallowCopy(i,d)),E.shallowCopyFromList(i,o,ye)),i.filename=r):o={},_e(i,o,e)},n.Template=f,n.clearCache=function(){n.cache.reset()};function f(t,r){r=r||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=r.client||!1,e.escapeFunction=r.escape||r.escapeFunction||E.escapeXML,e.compileDebug=r.compileDebug!==!1,e.debug=!!r.debug,e.filename=r.filename,e.openDelimiter=r.openDelimiter||n.openDelimiter||h,e.closeDelimiter=r.closeDelimiter||n.closeDelimiter||m,e.delimiter=r.delimiter||n.delimiter||u,e.strict=r.strict||!1,e.context=r.context,e.cache=r.cache||!1,e.rmWhitespace=r.rmWhitespace,e.root=r.root,e.includer=r.includer,e.outputFunctionName=r.outputFunctionName,e.localsName=r.localsName||n.localsName||p,e.views=r.views,e.async=r.async,e.destructuredLocals=r.destructuredLocals,e.legacyInclude=typeof r.legacyInclude!="undefined"?!!r.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof r._with!="undefined"?r._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=_,r=E.escapeRegExpChars(this.opts.delimiter),e=E.escapeRegExpChars(this.opts.openDelimiter),i=E.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,r).replace(/</g,e).replace(/>/g,i),new RegExp(t)},compile:function(){var t,r,e=this.opts,i="",o="",d=e.escapeFunction,v,j=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),i+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(i+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,C=0;C<e.destructuredLocals.length;C++){var F=e.destructuredLocals[C];C>0&&(b+=`,
  `),b+=F+" = __locals."+F}i+=b+`;
`}e._with!==!1&&(i+="  with ("+e.localsName+` || {}) {
`,o+=`  }
`),o+=`  return __output;
`,this.source=i+this.source+o}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+j+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+d.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+z.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+j+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else v=Function;r=new v(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var I=e.client?r:function(X){var Te=function(je,G){var R=E.shallowCopy({},X);return G&&(R=E.shallowCopy(R,G)),we(je,e)(R)};return r.apply(e.context,[X||{},d,Te,z])};if(e.filename&&typeof Object.defineProperty=="function"){var x=e.filename,be=s.basename(x,s.extname(x));try{Object.defineProperty(I,"name",{value:be,writable:!1,enumerable:!1,configurable:!0})}catch(y){}}return I},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,e=this.parseTemplateText(),i=this.opts.delimiter,o=this.opts.openDelimiter,d=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,j){var b;if(v.indexOf(o+i)===0&&v.indexOf(o+i+i)!==0&&(b=e[j+2],!(b==i+d||b=="-"+i+d||b=="_"+i+d)))throw new Error('Could not find matching close tag for "'+v+'".');r.scanLine(v)})},parseTemplateText:function(){for(var t=this.templateText,r=this.regex,e=r.exec(t),i=[],o;e;)o=e.index,o!==0&&(i.push(t.substring(0,o)),t=t.slice(o)),i.push(e[0]),t=t.slice(e[0].length),e=r.exec(t);return t&&i.push(t),i},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var r=this,e=this.opts.delimiter,i=this.opts.openDelimiter,o=this.opts.closeDelimiter,d=0;switch(d=t.split(`
`).length-1,t){case i+e:case i+e+"_":this.mode=f.modes.EVAL;break;case i+e+"=":this.mode=f.modes.ESCAPED;break;case i+e+"-":this.mode=f.modes.RAW;break;case i+e+"#":this.mode=f.modes.COMMENT;break;case i+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(i+e+e,i+e)+`")
`;break;case e+e+o:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+o,e+o)+`")
`;break;case e+o:case"-"+e+o:case"_"+e+o:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+J(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+J(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}r.opts.compileDebug&&d&&(this.currentLine+=d,this.source+="    ; __line = "+this.currentLine+`
`)}},n.escapeXML=E.escapeXML,n.__express=n.renderFile,n.VERSION=c,n.name=g,typeof window!="undefined"&&(window.ejs=n)}),oe=nt;function at(a,n){return oe.render(a,{data:n})}var D=at;var rt=A.getInstance(),ce=new CustomEvent("sideBarSelect",{bubbles:!0,detail:{name:null}}),st=function(a){let n=D(K,a),s=T(n);return s.addEventListener("click",it),s},it=a=>{ce.detail.name=a.currentTarget.dataset.name,rt.handle.dispatchEvent(ce)},ue=st;var lt=document.querySelector("#sidebar"),ot=function(){return{init:function(n){let s=Q();n.forEach(l=>{let c=ue(l);s.append(c)}),lt.append(s)}}},me=ot;var ct=`
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`,ut=`
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`,mt={parentTemplate:ut,childTemplate:ct},H=mt;var dt=a=>{let n=document.querySelector("#managers"),s=a.filter(c=>c.role),l=T(H.parentTemplate);return s.forEach(c=>{let h=D(H.childTemplate,c),m=T(h);l.appendChild(m)}),l},de=dt;var pe=`
<aside class="employees"></aside>
`,fe=`
 

<ul class="employee" data-id="<%-data.id%>">
<li>
  <img src="<%-data.avatar%>" width="90px" alt="" />
</li>

<li class="fullname">
    <label> firstname </label>
  <input id="firstname" type="text" value="<%-data.firstname%>" >
 
</li>

 
<li class="lastname"> 
<label> lastname </label>
<input id="lastname" type="text" value="<%-data.lastname%>">
</li>
 


<li>
<label> salary</label>
<input id="salary" type="text" value="<%-data.salary%>">
</li>
 


<li class="vacation"><label> vacation days</label>
  <input id="vacation" type="text" value="<%-data.vacation%>" >
</li>
 
<li class="controls" data-id="<%-data.id%>">
<img id="edit" class="icon" src="assets/svgs/edit.svg" width="24px" alt="">
  <img id="delete" class="icon" src="assets/svgs/delete.svg" width:="24px" alt="">
</li>

 
</ul>
 

`;var W=A.getInstance(),pt=function(a){let n=T(pe),s=a.filter(c=>!c.role),l=c=>{switch(c.target.id){case"delete":W.handle.dispatchEvent(new CustomEvent("deleteEmployee",{bubbles:!0,detail:{id:c.currentTarget.dataset.id}})),n.removeChild(c.currentTarget.parentElement);break;case"edit":let h={id:c.currentTarget.dataset.id,firstname:c.currentTarget.parentElement.querySelector("#firstname").value.trim(),lastname:c.currentTarget.parentElement.querySelector("#lastname").value.trim(),salary:c.currentTarget.parentElement.querySelector("#salary").value.trim(),vacation:c.currentTarget.parentElement.querySelector("#vacation").value.trim()};W.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{payload:h}})),W.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{payload:h}}));break}};return s.forEach(c=>{let h=D(fe,c),m=T(h);m.querySelector(".controls").addEventListener("click",l),n.appendChild(m)}),n},he=pt;var ft=()=>{let a=document.querySelector("#panel"),n=document.querySelector("#widget-heading"),s=null,l=null,c=m=>{n.textContent=`${m[0].department} department`,s=a.appendChild(de(m)),l=a.appendChild(he(m))};return{updateDisplay:m=>{a.removeChild(s),a.removeChild(l),c(m)},view:a,init:c}},ve=ft;var ge=ve(),ht=me(),vt=A.getInstance();vt.handle.addEventListener("updateDisplay",a=>{ge.updateDisplay(a.detail)});var gt=async function(){let a=await S.getRequest(L.getAllDepartments),n=await S.getRequest(L.getDepartment("training"));ht.init(a),ge.init(n)};gt();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */
