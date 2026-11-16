var t2=Object.defineProperty;var n2=(e,a,o)=>a in e?t2(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o;var D=(e,a,o)=>n2(e,typeof a!="symbol"?a+"":a,o);function s2(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function r2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bf={exports:{}},Tr={},yf={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wn=Symbol.for("react.element"),i2=Symbol.for("react.portal"),l2=Symbol.for("react.fragment"),u2=Symbol.for("react.strict_mode"),d2=Symbol.for("react.profiler"),m2=Symbol.for("react.provider"),c2=Symbol.for("react.context"),p2=Symbol.for("react.forward_ref"),f2=Symbol.for("react.suspense"),g2=Symbol.for("react.memo"),h2=Symbol.for("react.lazy"),pm=Symbol.iterator;function v2(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,Af={};function Ot(e,a,o){this.props=e,this.context=a,this.refs=Af,this.updater=o||qf}Ot.prototype.isReactComponent={};Ot.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};Ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wf(){}wf.prototype=Ot.prototype;function zu(e,a,o){this.props=e,this.context=a,this.refs=Af,this.updater=o||qf}var Pu=zu.prototype=new wf;Pu.constructor=zu;Ef(Pu,Ot.prototype);Pu.isPureReactComponent=!0;var fm=Array.isArray,Cf=Object.prototype.hasOwnProperty,ku={current:null},Sf={key:!0,ref:!0,__self:!0,__source:!0};function zf(e,a,o){var t,n={},s=null,r=null;if(a!=null)for(t in a.ref!==void 0&&(r=a.ref),a.key!==void 0&&(s=""+a.key),a)Cf.call(a,t)&&!Sf.hasOwnProperty(t)&&(n[t]=a[t]);var i=arguments.length-2;if(i===1)n.children=o;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];n.children=l}if(e&&e.defaultProps)for(t in i=e.defaultProps,i)n[t]===void 0&&(n[t]=i[t]);return{$$typeof:Wn,type:e,key:s,ref:r,props:n,_owner:ku.current}}function x2(e,a){return{$$typeof:Wn,type:e.type,key:a,ref:e.ref,props:e.props,_owner:e._owner}}function ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wn}function b2(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return a[o]})}var gm=/\/+/g;function ri(e,a){return typeof e=="object"&&e!==null&&e.key!=null?b2(""+e.key):a.toString(36)}function js(e,a,o,t,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Wn:case i2:r=!0}}if(r)return r=e,n=n(r),e=t===""?"."+ri(r,0):t,fm(n)?(o="",e!=null&&(o=e.replace(gm,"$&/")+"/"),js(n,a,o,"",function(u){return u})):n!=null&&(ju(n)&&(n=x2(n,o+(!n.key||r&&r.key===n.key?"":(""+n.key).replace(gm,"$&/")+"/")+e)),a.push(n)),1;if(r=0,t=t===""?".":t+":",fm(e))for(var i=0;i<e.length;i++){s=e[i];var l=t+ri(s,i);r+=js(s,a,o,l,n)}else if(l=v2(e),typeof l=="function")for(e=l.call(e),i=0;!(s=e.next()).done;)s=s.value,l=t+ri(s,i++),r+=js(s,a,o,l,n);else if(s==="object")throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return r}function ns(e,a,o){if(e==null)return e;var t=[],n=0;return js(e,t,"","",function(s){return a.call(o,s,n++)}),t}function y2(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Ts={transition:null},q2={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:ku};function Pf(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ns,forEach:function(e,a,o){ns(e,function(){a.apply(this,arguments)},o)},count:function(e){var a=0;return ns(e,function(){a++}),a},toArray:function(e){return ns(e,function(a){return a})||[]},only:function(e){if(!ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Ot;B.Fragment=l2;B.Profiler=d2;B.PureComponent=zu;B.StrictMode=u2;B.Suspense=f2;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q2;B.act=Pf;B.cloneElement=function(e,a,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Ef({},e.props),n=e.key,s=e.ref,r=e._owner;if(a!=null){if(a.ref!==void 0&&(s=a.ref,r=ku.current),a.key!==void 0&&(n=""+a.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in a)Cf.call(a,l)&&!Sf.hasOwnProperty(l)&&(t[l]=a[l]===void 0&&i!==void 0?i[l]:a[l])}var l=arguments.length-2;if(l===1)t.children=o;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];t.children=i}return{$$typeof:Wn,type:e.type,key:n,ref:s,props:t,_owner:r}};B.createContext=function(e){return e={$$typeof:c2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m2,_context:e},e.Consumer=e};B.createElement=zf;B.createFactory=function(e){var a=zf.bind(null,e);return a.type=e,a};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:p2,render:e}};B.isValidElement=ju;B.lazy=function(e){return{$$typeof:h2,_payload:{_status:-1,_result:e},_init:y2}};B.memo=function(e,a){return{$$typeof:g2,type:e,compare:a===void 0?null:a}};B.startTransition=function(e){var a=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=a}};B.unstable_act=Pf;B.useCallback=function(e,a){return Le.current.useCallback(e,a)};B.useContext=function(e){return Le.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};B.useEffect=function(e,a){return Le.current.useEffect(e,a)};B.useId=function(){return Le.current.useId()};B.useImperativeHandle=function(e,a,o){return Le.current.useImperativeHandle(e,a,o)};B.useInsertionEffect=function(e,a){return Le.current.useInsertionEffect(e,a)};B.useLayoutEffect=function(e,a){return Le.current.useLayoutEffect(e,a)};B.useMemo=function(e,a){return Le.current.useMemo(e,a)};B.useReducer=function(e,a,o){return Le.current.useReducer(e,a,o)};B.useRef=function(e){return Le.current.useRef(e)};B.useState=function(e){return Le.current.useState(e)};B.useSyncExternalStore=function(e,a,o){return Le.current.useSyncExternalStore(e,a,o)};B.useTransition=function(){return Le.current.useTransition()};B.version="18.3.1";yf.exports=B;var x=yf.exports;const kf=r2(x),E2=s2({__proto__:null,default:kf},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A2=x,w2=Symbol.for("react.element"),C2=Symbol.for("react.fragment"),S2=Object.prototype.hasOwnProperty,z2=A2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P2={key:!0,ref:!0,__self:!0,__source:!0};function jf(e,a,o){var t,n={},s=null,r=null;o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),a.ref!==void 0&&(r=a.ref);for(t in a)S2.call(a,t)&&!P2.hasOwnProperty(t)&&(n[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps,a)n[t]===void 0&&(n[t]=a[t]);return{$$typeof:w2,type:e,key:s,ref:r,props:n,_owner:z2.current}}Tr.Fragment=C2;Tr.jsx=jf;Tr.jsxs=jf;bf.exports=Tr;var m=bf.exports,ol={},Tf={exports:{}},Ze={},Nf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(k,P){var T=k.length;k.push(P);e:for(;0<T;){var I=T-1>>>1,_=k[I];if(0<n(_,P))k[I]=P,k[T]=_,T=I;else break e}}function o(k){return k.length===0?null:k[0]}function t(k){if(k.length===0)return null;var P=k[0],T=k.pop();if(T!==P){k[0]=T;e:for(var I=0,_=k.length,me=_>>>1;I<me;){var we=2*(I+1)-1,ua=k[we],wa=we+1,wo=k[wa];if(0>n(ua,T))wa<_&&0>n(wo,ua)?(k[I]=wo,k[wa]=T,I=wa):(k[I]=ua,k[we]=T,I=we);else if(wa<_&&0>n(wo,T))k[I]=wo,k[wa]=T,I=wa;else break e}}return P}function n(k,P){var T=k.sortIndex-P.sortIndex;return T!==0?T:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,i=r.now();e.unstable_now=function(){return r.now()-i}}var l=[],u=[],d=1,c=null,p=3,v=!1,h=!1,y=!1,q=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var P=o(u);P!==null;){if(P.callback===null)t(u);else if(P.startTime<=k)t(u),P.sortIndex=P.expirationTime,a(l,P);else break;P=o(u)}}function E(k){if(y=!1,b(k),!h)if(o(l)!==null)h=!0,ue(A);else{var P=o(u);P!==null&&Aa(E,P.startTime-k)}}function A(k,P){h=!1,y&&(y=!1,g(w),w=-1),v=!0;var T=p;try{for(b(P),c=o(l);c!==null&&(!(c.expirationTime>P)||k&&!V());){var I=c.callback;if(typeof I=="function"){c.callback=null,p=c.priorityLevel;var _=I(c.expirationTime<=P);P=e.unstable_now(),typeof _=="function"?c.callback=_:c===o(l)&&t(l),b(P)}else t(l);c=o(l)}if(c!==null)var me=!0;else{var we=o(u);we!==null&&Aa(E,we.startTime-P),me=!1}return me}finally{c=null,p=T,v=!1}}var C=!1,z=null,w=-1,N=5,S=-1;function V(){return!(e.unstable_now()-S<N)}function F(){if(z!==null){var k=e.unstable_now();S=k;var P=!0;try{P=z(!0,k)}finally{P?M():(C=!1,z=null)}}else C=!1}var M;if(typeof f=="function")M=function(){f(F)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=F,M=function(){J.postMessage(null)}}else M=function(){q(F,0)};function ue(k){z=k,C||(C=!0,M())}function Aa(k,P){w=q(function(){k(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,ue(A))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return o(l)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return k()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=p;p=k;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(k,P,T){var I=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?I+T:I):T=I,k){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=T+_,k={id:d++,callback:P,priorityLevel:k,startTime:T,expirationTime:_,sortIndex:-1},T>I?(k.sortIndex=T,a(u,k),o(l)===null&&k===o(u)&&(y?(g(w),w=-1):y=!0,Aa(E,T-I))):(k.sortIndex=_,a(l,k),h||v||(h=!0,ue(A))),k},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(k){var P=p;return function(){var T=p;p=P;try{return k.apply(this,arguments)}finally{p=T}}}})(Mf);Nf.exports=Mf;var k2=Nf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j2=x,Ye=k2;function j(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,yn={};function $o(e,a){Et(e,a),Et(e+"Capture",a)}function Et(e,a){for(yn[e]=a,e=0;e<a.length;e++)Of.add(a[e])}var Ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,T2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},vm={};function N2(e){return tl.call(vm,e)?!0:tl.call(hm,e)?!1:T2.test(e)?vm[e]=!0:(hm[e]=!0,!1)}function M2(e,a,o,t){if(o!==null&&o.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return t?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O2(e,a,o,t){if(a===null||typeof a>"u"||M2(e,a,o,t))return!0;if(t)return!1;if(o!==null)switch(o.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function De(e,a,o,t,n,s,r){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=t,this.attributeNamespace=n,this.mustUseProperty=o,this.propertyName=e,this.type=a,this.sanitizeURL=s,this.removeEmptyString=r}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];ze[a]=new De(a,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(Tu,Nu);ze[a]=new De(a,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(Tu,Nu);ze[a]=new De(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(Tu,Nu);ze[a]=new De(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mu(e,a,o,t){var n=ze.hasOwnProperty(a)?ze[a]:null;(n!==null?n.type!==0:t||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(O2(a,o,n,t)&&(o=null),t||n===null?N2(a)&&(o===null?e.removeAttribute(a):e.setAttribute(a,""+o)):n.mustUseProperty?e[n.propertyName]=o===null?n.type===3?!1:"":o:(a=n.attributeName,t=n.attributeNamespace,o===null?e.removeAttribute(a):(n=n.type,o=n===3||n===4&&o===!0?"":""+o,t?e.setAttributeNS(t,a,o):e.setAttribute(a,o))))}var Ga=j2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),et=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),If=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),rl=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Ya=Symbol.for("react.lazy"),Lf=Symbol.for("react.offscreen"),xm=Symbol.iterator;function Ut(e){return e===null||typeof e!="object"?null:(e=xm&&e[xm]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ii;function Jt(e){if(ii===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);ii=a&&a[1]||""}return`
`+ii+e}var li=!1;function ui(e,a){if(!e||li)return"";li=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(u){var t=u}Reflect.construct(e,[],a)}else{try{a.call()}catch(u){t=u}e.call(a.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),s=t.stack.split(`
`),r=n.length-1,i=s.length-1;1<=r&&0<=i&&n[r]!==s[i];)i--;for(;1<=r&&0<=i;r--,i--)if(n[r]!==s[i]){if(r!==1||i!==1)do if(r--,i--,0>i||n[r]!==s[i]){var l=`
`+n[r].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=r&&0<=i);break}}}finally{li=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?Jt(e):""}function R2(e){switch(e.tag){case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 2:case 15:return e=ui(e.type,!1),e;case 11:return e=ui(e.type.render,!1),e;case 1:return e=ui(e.type,!0),e;default:return""}}function il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case et:return"Portal";case nl:return"Profiler";case Ou:return"StrictMode";case sl:return"Suspense";case rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case If:return(e.displayName||"Context")+".Consumer";case Rf:return(e._context.displayName||"Context")+".Provider";case Ru:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iu:return a=e.displayName||null,a!==null?a:il(e.type)||"Memo";case Ya:a=e._payload,e=e._init;try{return il(e(a))}catch{}}return null}function I2(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return il(a);case 8:return a===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function go(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Df(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function L2(e){var a=Df(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),t=""+e[a];if(!e.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,s=o.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(r){t=""+r,s.call(this,r)}}),Object.defineProperty(e,a,{enumerable:o.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function rs(e){e._valueTracker||(e._valueTracker=L2(e))}function Ff(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var o=a.getValue(),t="";return e&&(t=Df(e)?e.checked?"true":"false":e.value),e=t,e!==o?(a.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,a){var o=a.checked;return re({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function bm(e,a){var o=a.defaultValue==null?"":a.defaultValue,t=a.checked!=null?a.checked:a.defaultChecked;o=go(a.value!=null?a.value:o),e._wrapperState={initialChecked:t,initialValue:o,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Vf(e,a){a=a.checked,a!=null&&Mu(e,"checked",a,!1)}function ul(e,a){Vf(e,a);var o=go(a.value),t=a.type;if(o!=null)t==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?dl(e,a.type,o):a.hasOwnProperty("defaultValue")&&dl(e,a.type,go(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function ym(e,a,o){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var t=a.type;if(!(t!=="submit"&&t!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,o||a===e.value||(e.value=a),e.defaultValue=a}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function dl(e,a,o){(a!=="number"||Ks(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Zt=Array.isArray;function ht(e,a,o,t){if(e=e.options,a){a={};for(var n=0;n<o.length;n++)a["$"+o[n]]=!0;for(o=0;o<e.length;o++)n=a.hasOwnProperty("$"+e[o].value),e[o].selected!==n&&(e[o].selected=n),n&&t&&(e[o].defaultSelected=!0)}else{for(o=""+go(o),a=null,n=0;n<e.length;n++){if(e[n].value===o){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function ml(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(j(91));return re({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qm(e,a){var o=a.value;if(o==null){if(o=a.children,a=a.defaultValue,o!=null){if(a!=null)throw Error(j(92));if(Zt(o)){if(1<o.length)throw Error(j(93));o=o[0]}a=o}a==null&&(a=""),o=a}e._wrapperState={initialValue:go(o)}}function _f(e,a){var o=go(a.value),t=go(a.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),a.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),t!=null&&(e.defaultValue=""+t)}function Em(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,Bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,o,t,n){MSApp.execUnsafeLocalFunction(function(){return e(a,o,t,n)})}:e}(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function qn(e,a){if(a){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=a;return}}e.textContent=a}var nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D2=["Webkit","ms","Moz","O"];Object.keys(nn).forEach(function(e){D2.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),nn[a]=nn[e]})});function Hf(e,a,o){return a==null||typeof a=="boolean"||a===""?"":o||typeof a!="number"||a===0||nn.hasOwnProperty(e)&&nn[e]?(""+a).trim():a+"px"}function $f(e,a){e=e.style;for(var o in a)if(a.hasOwnProperty(o)){var t=o.indexOf("--")===0,n=Hf(o,a[o],t);o==="float"&&(o="cssFloat"),t?e.setProperty(o,n):e[o]=n}}var F2=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,a){if(a){if(F2[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(j(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(j(61))}if(a.style!=null&&typeof a.style!="object")throw Error(j(62))}}function fl(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,vt=null,xt=null;function Am(e){if(e=Kn(e)){if(typeof hl!="function")throw Error(j(280));var a=e.stateNode;a&&(a=Ir(a),hl(e.stateNode,e.type,a))}}function Wf(e){vt?xt?xt.push(e):xt=[e]:vt=e}function Gf(){if(vt){var e=vt,a=xt;if(xt=vt=null,Am(e),a)for(e=0;e<a.length;e++)Am(a[e])}}function Qf(e,a){return e(a)}function Kf(){}var di=!1;function Xf(e,a,o){if(di)return e(a,o);di=!0;try{return Qf(e,a,o)}finally{di=!1,(vt!==null||xt!==null)&&(Kf(),Gf())}}function En(e,a){var o=e.stateNode;if(o===null)return null;var t=Ir(o);if(t===null)return null;o=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(j(231,a,typeof o));return o}var vl=!1;if(Ba)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){vl=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{vl=!1}function V2(e,a,o,t,n,s,r,i,l){var u=Array.prototype.slice.call(arguments,3);try{a.apply(o,u)}catch(d){this.onError(d)}}var sn=!1,Xs=null,Ys=!1,xl=null,_2={onError:function(e){sn=!0,Xs=e}};function U2(e,a,o,t,n,s,r,i,l){sn=!1,Xs=null,V2.apply(_2,arguments)}function B2(e,a,o,t,n,s,r,i,l){if(U2.apply(this,arguments),sn){if(sn){var u=Xs;sn=!1,Xs=null}else throw Error(j(198));Ys||(Ys=!0,xl=u)}}function Wo(e){var a=e,o=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(o=a.return),e=a.return;while(e)}return a.tag===3?o:null}function Yf(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function wm(e){if(Wo(e)!==e)throw Error(j(188))}function H2(e){var a=e.alternate;if(!a){if(a=Wo(e),a===null)throw Error(j(188));return a!==e?null:e}for(var o=e,t=a;;){var n=o.return;if(n===null)break;var s=n.alternate;if(s===null){if(t=n.return,t!==null){o=t;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===o)return wm(n),e;if(s===t)return wm(n),a;s=s.sibling}throw Error(j(188))}if(o.return!==t.return)o=n,t=s;else{for(var r=!1,i=n.child;i;){if(i===o){r=!0,o=n,t=s;break}if(i===t){r=!0,t=n,o=s;break}i=i.sibling}if(!r){for(i=s.child;i;){if(i===o){r=!0,o=s,t=n;break}if(i===t){r=!0,t=s,o=n;break}i=i.sibling}if(!r)throw Error(j(189))}}if(o.alternate!==t)throw Error(j(190))}if(o.tag!==3)throw Error(j(188));return o.stateNode.current===o?e:a}function Jf(e){return e=H2(e),e!==null?Zf(e):null}function Zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=Zf(e);if(a!==null)return a;e=e.sibling}return null}var eg=Ye.unstable_scheduleCallback,Cm=Ye.unstable_cancelCallback,$2=Ye.unstable_shouldYield,W2=Ye.unstable_requestPaint,de=Ye.unstable_now,G2=Ye.unstable_getCurrentPriorityLevel,Du=Ye.unstable_ImmediatePriority,ag=Ye.unstable_UserBlockingPriority,Js=Ye.unstable_NormalPriority,Q2=Ye.unstable_LowPriority,og=Ye.unstable_IdlePriority,Nr=null,ja=null;function K2(e){if(ja&&typeof ja.onCommitFiberRoot=="function")try{ja.onCommitFiberRoot(Nr,e,void 0,(e.current.flags&128)===128)}catch{}}var va=Math.clz32?Math.clz32:J2,X2=Math.log,Y2=Math.LN2;function J2(e){return e>>>=0,e===0?32:31-(X2(e)/Y2|0)|0}var ls=64,us=4194304;function en(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zs(e,a){var o=e.pendingLanes;if(o===0)return 0;var t=0,n=e.suspendedLanes,s=e.pingedLanes,r=o&268435455;if(r!==0){var i=r&~n;i!==0?t=en(i):(s&=r,s!==0&&(t=en(s)))}else r=o&~n,r!==0?t=en(r):s!==0&&(t=en(s));if(t===0)return 0;if(a!==0&&a!==t&&!(a&n)&&(n=t&-t,s=a&-a,n>=s||n===16&&(s&4194240)!==0))return a;if(t&4&&(t|=o&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=t;0<a;)o=31-va(a),n=1<<o,t|=e[o],a&=~n;return t}function Z2(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(e,a){for(var o=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes;0<s;){var r=31-va(s),i=1<<r,l=n[r];l===-1?(!(i&o)||i&t)&&(n[r]=Z2(i,a)):l<=a&&(e.expiredLanes|=i),s&=~i}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tg(){var e=ls;return ls<<=1,!(ls&4194240)&&(ls=64),e}function mi(e){for(var a=[],o=0;31>o;o++)a.push(e);return a}function Gn(e,a,o){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-va(a),e[a]=o}function ax(e,a){var o=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<o;){var n=31-va(o),s=1<<n;a[n]=0,t[n]=-1,e[n]=-1,o&=~s}}function Fu(e,a){var o=e.entangledLanes|=a;for(e=e.entanglements;o;){var t=31-va(o),n=1<<t;n&a|e[t]&a&&(e[t]|=a),o&=~n}}var X=0;function ng(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sg,Vu,rg,ig,lg,yl=!1,ds=[],so=null,ro=null,io=null,An=new Map,wn=new Map,Za=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(e,a){switch(e){case"focusin":case"focusout":so=null;break;case"dragenter":case"dragleave":ro=null;break;case"mouseover":case"mouseout":io=null;break;case"pointerover":case"pointerout":An.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(a.pointerId)}}function Ht(e,a,o,t,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:o,eventSystemFlags:t,nativeEvent:s,targetContainers:[n]},a!==null&&(a=Kn(a),a!==null&&Vu(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function tx(e,a,o,t,n){switch(a){case"focusin":return so=Ht(so,e,a,o,t,n),!0;case"dragenter":return ro=Ht(ro,e,a,o,t,n),!0;case"mouseover":return io=Ht(io,e,a,o,t,n),!0;case"pointerover":var s=n.pointerId;return An.set(s,Ht(An.get(s)||null,e,a,o,t,n)),!0;case"gotpointercapture":return s=n.pointerId,wn.set(s,Ht(wn.get(s)||null,e,a,o,t,n)),!0}return!1}function ug(e){var a=jo(e.target);if(a!==null){var o=Wo(a);if(o!==null){if(a=o.tag,a===13){if(a=Yf(o),a!==null){e.blockedOn=a,lg(e.priority,function(){rg(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ns(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var o=ql(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var t=new o.constructor(o.type,o);gl=t,o.target.dispatchEvent(t),gl=null}else return a=Kn(o),a!==null&&Vu(a),e.blockedOn=o,!1;a.shift()}return!0}function zm(e,a,o){Ns(e)&&o.delete(a)}function nx(){yl=!1,so!==null&&Ns(so)&&(so=null),ro!==null&&Ns(ro)&&(ro=null),io!==null&&Ns(io)&&(io=null),An.forEach(zm),wn.forEach(zm)}function $t(e,a){e.blockedOn===a&&(e.blockedOn=null,yl||(yl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,nx)))}function Cn(e){function a(n){return $t(n,e)}if(0<ds.length){$t(ds[0],e);for(var o=1;o<ds.length;o++){var t=ds[o];t.blockedOn===e&&(t.blockedOn=null)}}for(so!==null&&$t(so,e),ro!==null&&$t(ro,e),io!==null&&$t(io,e),An.forEach(a),wn.forEach(a),o=0;o<Za.length;o++)t=Za[o],t.blockedOn===e&&(t.blockedOn=null);for(;0<Za.length&&(o=Za[0],o.blockedOn===null);)ug(o),o.blockedOn===null&&Za.shift()}var bt=Ga.ReactCurrentBatchConfig,er=!0;function sx(e,a,o,t){var n=X,s=bt.transition;bt.transition=null;try{X=1,_u(e,a,o,t)}finally{X=n,bt.transition=s}}function rx(e,a,o,t){var n=X,s=bt.transition;bt.transition=null;try{X=4,_u(e,a,o,t)}finally{X=n,bt.transition=s}}function _u(e,a,o,t){if(er){var n=ql(e,a,o,t);if(n===null)qi(e,a,t,ar,o),Sm(e,t);else if(tx(n,e,a,o,t))t.stopPropagation();else if(Sm(e,t),a&4&&-1<ox.indexOf(e)){for(;n!==null;){var s=Kn(n);if(s!==null&&sg(s),s=ql(e,a,o,t),s===null&&qi(e,a,t,ar,o),s===n)break;n=s}n!==null&&t.stopPropagation()}else qi(e,a,t,null,o)}}var ar=null;function ql(e,a,o,t){if(ar=null,e=Lu(t),e=jo(e),e!==null)if(a=Wo(e),a===null)e=null;else if(o=a.tag,o===13){if(e=Yf(a),e!==null)return e;e=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ar=e,null}function dg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G2()){case Du:return 1;case ag:return 4;case Js:case Q2:return 16;case og:return 536870912;default:return 16}default:return 16}}var ao=null,Uu=null,Ms=null;function mg(){if(Ms)return Ms;var e,a=Uu,o=a.length,t,n="value"in ao?ao.value:ao.textContent,s=n.length;for(e=0;e<o&&a[e]===n[e];e++);var r=o-e;for(t=1;t<=r&&a[o-t]===n[s-t];t++);return Ms=n.slice(e,1<t?1-t:void 0)}function Os(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Pm(){return!1}function ea(e){function a(o,t,n,s,r){this._reactName=o,this._targetInst=n,this.type=t,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(o=e[i],this[i]=o?o(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ms:Pm,this.isPropagationStopped=Pm,this}return re(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),a}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=ea(Rt),Qn=re({},Rt,{view:0,detail:0}),ix=ea(Qn),ci,pi,Wt,Mr=re({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wt&&(Wt&&e.type==="mousemove"?(ci=e.screenX-Wt.screenX,pi=e.screenY-Wt.screenY):pi=ci=0,Wt=e),ci)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),km=ea(Mr),lx=re({},Mr,{dataTransfer:0}),ux=ea(lx),dx=re({},Qn,{relatedTarget:0}),fi=ea(dx),mx=re({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=ea(mx),px=re({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=ea(px),gx=re({},Rt,{data:0}),jm=ea(gx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=xx[e])?!!a[e]:!1}function Hu(){return bx}var yx=re({},Qn,{key:function(e){if(e.key){var a=hx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qx=ea(yx),Ex=re({},Mr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=ea(Ex),Ax=re({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),wx=ea(Ax),Cx=re({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=ea(Cx),zx=re({},Mr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=ea(zx),kx=[9,13,27,32],$u=Ba&&"CompositionEvent"in window,rn=null;Ba&&"documentMode"in document&&(rn=document.documentMode);var jx=Ba&&"TextEvent"in window&&!rn,cg=Ba&&(!$u||rn&&8<rn&&11>=rn),Nm=" ",Mm=!1;function pg(e,a){switch(e){case"keyup":return kx.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ot=!1;function Tx(e,a){switch(e){case"compositionend":return fg(a);case"keypress":return a.which!==32?null:(Mm=!0,Nm);case"textInput":return e=a.data,e===Nm&&Mm?null:e;default:return null}}function Nx(e,a){if(ot)return e==="compositionend"||!$u&&pg(e,a)?(e=mg(),Ms=Uu=ao=null,ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return cg&&a.locale!=="ko"?null:a.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Mx[e.type]:a==="textarea"}function gg(e,a,o,t){Wf(t),a=or(a,"onChange"),0<a.length&&(o=new Bu("onChange","change",null,o,t),e.push({event:o,listeners:a}))}var ln=null,Sn=null;function Ox(e){Sg(e,0)}function Or(e){var a=st(e);if(Ff(a))return e}function Rx(e,a){if(e==="change")return a}var hg=!1;if(Ba){var gi;if(Ba){var hi="oninput"in document;if(!hi){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),hi=typeof Rm.oninput=="function"}gi=hi}else gi=!1;hg=gi&&(!document.documentMode||9<document.documentMode)}function Im(){ln&&(ln.detachEvent("onpropertychange",vg),Sn=ln=null)}function vg(e){if(e.propertyName==="value"&&Or(Sn)){var a=[];gg(a,Sn,e,Lu(e)),Xf(Ox,a)}}function Ix(e,a,o){e==="focusin"?(Im(),ln=a,Sn=o,ln.attachEvent("onpropertychange",vg)):e==="focusout"&&Im()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(Sn)}function Dx(e,a){if(e==="click")return Or(a)}function Fx(e,a){if(e==="input"||e==="change")return Or(a)}function Vx(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ya=typeof Object.is=="function"?Object.is:Vx;function zn(e,a){if(ya(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var o=Object.keys(e),t=Object.keys(a);if(o.length!==t.length)return!1;for(t=0;t<o.length;t++){var n=o[t];if(!tl.call(a,n)||!ya(e[n],a[n]))return!1}return!0}function Lm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dm(e,a){var o=Lm(e);e=0;for(var t;o;){if(o.nodeType===3){if(t=e+o.textContent.length,e<=a&&t>=a)return{node:o,offset:a-e};e=t}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lm(o)}}function xg(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?xg(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function bg(){for(var e=window,a=Ks();a instanceof e.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)e=a.contentWindow;else break;a=Ks(e.document)}return a}function Wu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function _x(e){var a=bg(),o=e.focusedElem,t=e.selectionRange;if(a!==o&&o&&o.ownerDocument&&xg(o.ownerDocument.documentElement,o)){if(t!==null&&Wu(o)){if(a=t.start,e=t.end,e===void 0&&(e=a),"selectionStart"in o)o.selectionStart=a,o.selectionEnd=Math.min(e,o.value.length);else if(e=(a=o.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var n=o.textContent.length,s=Math.min(t.start,n);t=t.end===void 0?s:Math.min(t.end,n),!e.extend&&s>t&&(n=t,t=s,s=n),n=Dm(o,s);var r=Dm(o,t);n&&r&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(a=a.createRange(),a.setStart(n.node,n.offset),e.removeAllRanges(),s>t?(e.addRange(a),e.extend(r.node,r.offset)):(a.setEnd(r.node,r.offset),e.addRange(a)))}}for(a=[],e=o;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<a.length;o++)e=a[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ux=Ba&&"documentMode"in document&&11>=document.documentMode,tt=null,El=null,un=null,Al=!1;function Fm(e,a,o){var t=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Al||tt==null||tt!==Ks(t)||(t=tt,"selectionStart"in t&&Wu(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),un&&zn(un,t)||(un=t,t=or(El,"onSelect"),0<t.length&&(a=new Bu("onSelect","select",null,a,o),e.push({event:a,listeners:t}),a.target=tt)))}function cs(e,a){var o={};return o[e.toLowerCase()]=a.toLowerCase(),o["Webkit"+e]="webkit"+a,o["Moz"+e]="moz"+a,o}var nt={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionend:cs("Transition","TransitionEnd")},vi={},yg={};Ba&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Rr(e){if(vi[e])return vi[e];if(!nt[e])return e;var a=nt[e],o;for(o in a)if(a.hasOwnProperty(o)&&o in yg)return vi[e]=a[o];return e}var qg=Rr("animationend"),Eg=Rr("animationiteration"),Ag=Rr("animationstart"),wg=Rr("transitionend"),Cg=new Map,Vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bo(e,a){Cg.set(e,a),$o(a,[e])}for(var xi=0;xi<Vm.length;xi++){var bi=Vm[xi],Bx=bi.toLowerCase(),Hx=bi[0].toUpperCase()+bi.slice(1);bo(Bx,"on"+Hx)}bo(qg,"onAnimationEnd");bo(Eg,"onAnimationIteration");bo(Ag,"onAnimationStart");bo("dblclick","onDoubleClick");bo("focusin","onFocus");bo("focusout","onBlur");bo(wg,"onTransitionEnd");Et("onMouseEnter",["mouseout","mouseover"]);Et("onMouseLeave",["mouseout","mouseover"]);Et("onPointerEnter",["pointerout","pointerover"]);Et("onPointerLeave",["pointerout","pointerover"]);$o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$o("onBeforeInput",["compositionend","keypress","textInput","paste"]);$o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var an="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(an));function _m(e,a,o){var t=e.type||"unknown-event";e.currentTarget=o,B2(t,a,void 0,e),e.currentTarget=null}function Sg(e,a){a=(a&4)!==0;for(var o=0;o<e.length;o++){var t=e[o],n=t.event;t=t.listeners;e:{var s=void 0;if(a)for(var r=t.length-1;0<=r;r--){var i=t[r],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==s&&n.isPropagationStopped())break e;_m(n,i,u),s=l}else for(r=0;r<t.length;r++){if(i=t[r],l=i.instance,u=i.currentTarget,i=i.listener,l!==s&&n.isPropagationStopped())break e;_m(n,i,u),s=l}}}if(Ys)throw e=xl,Ys=!1,xl=null,e}function ee(e,a){var o=a[Pl];o===void 0&&(o=a[Pl]=new Set);var t=e+"__bubble";o.has(t)||(zg(a,e,2,!1),o.add(t))}function yi(e,a,o){var t=0;a&&(t|=4),zg(o,e,t,a)}var ps="_reactListening"+Math.random().toString(36).slice(2);function Pn(e){if(!e[ps]){e[ps]=!0,Of.forEach(function(o){o!=="selectionchange"&&($x.has(o)||yi(o,!1,e),yi(o,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ps]||(a[ps]=!0,yi("selectionchange",!1,a))}}function zg(e,a,o,t){switch(dg(a)){case 1:var n=sx;break;case 4:n=rx;break;default:n=_u}o=n.bind(null,a,o,e),n=void 0,!vl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(a,o,{capture:!0,passive:n}):e.addEventListener(a,o,!0):n!==void 0?e.addEventListener(a,o,{passive:n}):e.addEventListener(a,o,!1)}function qi(e,a,o,t,n){var s=t;if(!(a&1)&&!(a&2)&&t!==null)e:for(;;){if(t===null)return;var r=t.tag;if(r===3||r===4){var i=t.stateNode.containerInfo;if(i===n||i.nodeType===8&&i.parentNode===n)break;if(r===4)for(r=t.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;r=r.return}for(;i!==null;){if(r=jo(i),r===null)return;if(l=r.tag,l===5||l===6){t=s=r;continue e}i=i.parentNode}}t=t.return}Xf(function(){var u=s,d=Lu(o),c=[];e:{var p=Cg.get(e);if(p!==void 0){var v=Bu,h=e;switch(e){case"keypress":if(Os(o)===0)break e;case"keydown":case"keyup":v=qx;break;case"focusin":h="focus",v=fi;break;case"focusout":h="blur",v=fi;break;case"beforeblur":case"afterblur":v=fi;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wx;break;case qg:case Eg:case Ag:v=cx;break;case wg:v=Sx;break;case"scroll":v=ix;break;case"wheel":v=Px;break;case"copy":case"cut":case"paste":v=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Tm}var y=(a&4)!==0,q=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,b;f!==null;){b=f;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,g!==null&&(E=En(f,g),E!=null&&y.push(kn(f,E,b)))),q)break;f=f.return}0<y.length&&(p=new v(p,h,null,o,d),c.push({event:p,listeners:y}))}}if(!(a&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&o!==gl&&(h=o.relatedTarget||o.fromElement)&&(jo(h)||h[Ha]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(h=o.relatedTarget||o.toElement,v=u,h=h?jo(h):null,h!==null&&(q=Wo(h),h!==q||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=u),v!==h)){if(y=km,E="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Tm,E="onPointerLeave",g="onPointerEnter",f="pointer"),q=v==null?p:st(v),b=h==null?p:st(h),p=new y(E,f+"leave",v,o,d),p.target=q,p.relatedTarget=b,E=null,jo(d)===u&&(y=new y(g,f+"enter",h,o,d),y.target=b,y.relatedTarget=q,E=y),q=E,v&&h)a:{for(y=v,g=h,f=0,b=y;b;b=Xo(b))f++;for(b=0,E=g;E;E=Xo(E))b++;for(;0<f-b;)y=Xo(y),f--;for(;0<b-f;)g=Xo(g),b--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break a;y=Xo(y),g=Xo(g)}y=null}else y=null;v!==null&&Um(c,p,v,y,!1),h!==null&&q!==null&&Um(c,q,h,y,!0)}}e:{if(p=u?st(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var A=Rx;else if(Om(p))if(hg)A=Fx;else{A=Lx;var C=Ix}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=Dx);if(A&&(A=A(e,u))){gg(c,A,o,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&dl(p,"number",p.value)}switch(C=u?st(u):window,e){case"focusin":(Om(C)||C.contentEditable==="true")&&(tt=C,El=u,un=null);break;case"focusout":un=El=tt=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Fm(c,o,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Fm(c,o,d)}var z;if($u)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ot?pg(e,o)&&(w="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(w="onCompositionStart");w&&(cg&&o.locale!=="ko"&&(ot||w!=="onCompositionStart"?w==="onCompositionEnd"&&ot&&(z=mg()):(ao=d,Uu="value"in ao?ao.value:ao.textContent,ot=!0)),C=or(u,w),0<C.length&&(w=new jm(w,e,null,o,d),c.push({event:w,listeners:C}),z?w.data=z:(z=fg(o),z!==null&&(w.data=z)))),(z=jx?Tx(e,o):Nx(e,o))&&(u=or(u,"onBeforeInput"),0<u.length&&(d=new jm("onBeforeInput","beforeinput",null,o,d),c.push({event:d,listeners:u}),d.data=z))}Sg(c,a)})}function kn(e,a,o){return{instance:e,listener:a,currentTarget:o}}function or(e,a){for(var o=a+"Capture",t=[];e!==null;){var n=e,s=n.stateNode;n.tag===5&&s!==null&&(n=s,s=En(e,o),s!=null&&t.unshift(kn(e,s,n)),s=En(e,a),s!=null&&t.push(kn(e,s,n))),e=e.return}return t}function Xo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Um(e,a,o,t,n){for(var s=a._reactName,r=[];o!==null&&o!==t;){var i=o,l=i.alternate,u=i.stateNode;if(l!==null&&l===t)break;i.tag===5&&u!==null&&(i=u,n?(l=En(o,s),l!=null&&r.unshift(kn(o,l,i))):n||(l=En(o,s),l!=null&&r.push(kn(o,l,i)))),o=o.return}r.length!==0&&e.push({event:a,listeners:r})}var Wx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function Bm(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(Gx,"")}function fs(e,a,o){if(a=Bm(a),Bm(e)!==a&&o)throw Error(j(425))}function tr(){}var wl=null,Cl=null;function Sl(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(e){return Hm.resolve(null).then(e).catch(Xx)}:zl;function Xx(e){setTimeout(function(){throw e})}function Ei(e,a){var o=a,t=0;do{var n=o.nextSibling;if(e.removeChild(o),n&&n.nodeType===8)if(o=n.data,o==="/$"){if(t===0){e.removeChild(n),Cn(a);return}t--}else o!=="$"&&o!=="$?"&&o!=="$!"||t++;o=n}while(o);Cn(a)}function lo(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function $m(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return e;a--}else o==="/$"&&a++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),ka="__reactFiber$"+It,jn="__reactProps$"+It,Ha="__reactContainer$"+It,Pl="__reactEvents$"+It,Yx="__reactListeners$"+It,Jx="__reactHandles$"+It;function jo(e){var a=e[ka];if(a)return a;for(var o=e.parentNode;o;){if(a=o[Ha]||o[ka]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(e=$m(e);e!==null;){if(o=e[ka])return o;e=$m(e)}return a}e=o,o=e.parentNode}return null}function Kn(e){return e=e[ka]||e[Ha],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function st(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ir(e){return e[jn]||null}var kl=[],rt=-1;function yo(e){return{current:e}}function oe(e){0>rt||(e.current=kl[rt],kl[rt]=null,rt--)}function Z(e,a){rt++,kl[rt]=e.current,e.current=a}var ho={},Te=yo(ho),Be=yo(!1),Fo=ho;function At(e,a){var o=e.type.contextTypes;if(!o)return ho;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===a)return t.__reactInternalMemoizedMaskedChildContext;var n={},s;for(s in o)n[s]=a[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=n),n}function He(e){return e=e.childContextTypes,e!=null}function nr(){oe(Be),oe(Te)}function Wm(e,a,o){if(Te.current!==ho)throw Error(j(168));Z(Te,a),Z(Be,o)}function Pg(e,a,o){var t=e.stateNode;if(a=a.childContextTypes,typeof t.getChildContext!="function")return o;t=t.getChildContext();for(var n in t)if(!(n in a))throw Error(j(108,I2(e)||"Unknown",n));return re({},o,t)}function sr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ho,Fo=Te.current,Z(Te,e),Z(Be,Be.current),!0}function Gm(e,a,o){var t=e.stateNode;if(!t)throw Error(j(169));o?(e=Pg(e,a,Fo),t.__reactInternalMemoizedMergedChildContext=e,oe(Be),oe(Te),Z(Te,e)):oe(Be),Z(Be,o)}var Fa=null,Lr=!1,Ai=!1;function kg(e){Fa===null?Fa=[e]:Fa.push(e)}function Zx(e){Lr=!0,kg(e)}function qo(){if(!Ai&&Fa!==null){Ai=!0;var e=0,a=X;try{var o=Fa;for(X=1;e<o.length;e++){var t=o[e];do t=t(!0);while(t!==null)}Fa=null,Lr=!1}catch(n){throw Fa!==null&&(Fa=Fa.slice(e+1)),eg(Du,qo),n}finally{X=a,Ai=!1}}return null}var it=[],lt=0,rr=null,ir=0,aa=[],oa=0,Vo=null,Va=1,_a="";function So(e,a){it[lt++]=ir,it[lt++]=rr,rr=e,ir=a}function jg(e,a,o){aa[oa++]=Va,aa[oa++]=_a,aa[oa++]=Vo,Vo=e;var t=Va;e=_a;var n=32-va(t)-1;t&=~(1<<n),o+=1;var s=32-va(a)+n;if(30<s){var r=n-n%5;s=(t&(1<<r)-1).toString(32),t>>=r,n-=r,Va=1<<32-va(a)+n|o<<n|t,_a=s+e}else Va=1<<s|o<<n|t,_a=e}function Gu(e){e.return!==null&&(So(e,1),jg(e,1,0))}function Qu(e){for(;e===rr;)rr=it[--lt],it[lt]=null,ir=it[--lt],it[lt]=null;for(;e===Vo;)Vo=aa[--oa],aa[oa]=null,_a=aa[--oa],aa[oa]=null,Va=aa[--oa],aa[oa]=null}var Ke=null,Qe=null,te=!1,ga=null;function Tg(e,a){var o=ta(5,null,null,0);o.elementType="DELETED",o.stateNode=a,o.return=e,a=e.deletions,a===null?(e.deletions=[o],e.flags|=16):a.push(o)}function Qm(e,a){switch(e.tag){case 5:var o=e.type;return a=a.nodeType!==1||o.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,Ke=e,Qe=lo(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,Ke=e,Qe=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(o=Vo!==null?{id:Va,overflow:_a}:null,e.memoizedState={dehydrated:a,treeContext:o,retryLane:1073741824},o=ta(18,null,null,0),o.stateNode=a,o.return=e,e.child=o,Ke=e,Qe=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(te){var a=Qe;if(a){var o=a;if(!Qm(e,a)){if(jl(e))throw Error(j(418));a=lo(o.nextSibling);var t=Ke;a&&Qm(e,a)?Tg(t,o):(e.flags=e.flags&-4097|2,te=!1,Ke=e)}}else{if(jl(e))throw Error(j(418));e.flags=e.flags&-4097|2,te=!1,Ke=e}}}function Km(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function gs(e){if(e!==Ke)return!1;if(!te)return Km(e),te=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!Sl(e.type,e.memoizedProps)),a&&(a=Qe)){if(jl(e))throw Ng(),Error(j(418));for(;a;)Tg(e,a),a=lo(a.nextSibling)}if(Km(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(a===0){Qe=lo(e.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++}e=e.nextSibling}Qe=null}}else Qe=Ke?lo(e.stateNode.nextSibling):null;return!0}function Ng(){for(var e=Qe;e;)e=lo(e.nextSibling)}function wt(){Qe=Ke=null,te=!1}function Ku(e){ga===null?ga=[e]:ga.push(e)}var eb=Ga.ReactCurrentBatchConfig;function Gt(e,a,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(j(309));var t=o.stateNode}if(!t)throw Error(j(147,e));var n=t,s=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(r){var i=n.refs;r===null?delete i[s]:i[s]=r},a._stringRef=s,a)}if(typeof e!="string")throw Error(j(284));if(!o._owner)throw Error(j(290,e))}return e}function hs(e,a){throw e=Object.prototype.toString.call(a),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function Xm(e){var a=e._init;return a(e._payload)}function Mg(e){function a(g,f){if(e){var b=g.deletions;b===null?(g.deletions=[f],g.flags|=16):b.push(f)}}function o(g,f){if(!e)return null;for(;f!==null;)a(g,f),f=f.sibling;return null}function t(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function n(g,f){return g=po(g,f),g.index=0,g.sibling=null,g}function s(g,f,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<f?(g.flags|=2,f):b):(g.flags|=2,f)):(g.flags|=1048576,f)}function r(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,f,b,E){return f===null||f.tag!==6?(f=ji(b,g.mode,E),f.return=g,f):(f=n(f,b),f.return=g,f)}function l(g,f,b,E){var A=b.type;return A===at?d(g,f,b.props.children,E,b.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ya&&Xm(A)===f.type)?(E=n(f,b.props),E.ref=Gt(g,f,b),E.return=g,E):(E=_s(b.type,b.key,b.props,null,g.mode,E),E.ref=Gt(g,f,b),E.return=g,E)}function u(g,f,b,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==b.containerInfo||f.stateNode.implementation!==b.implementation?(f=Ti(b,g.mode,E),f.return=g,f):(f=n(f,b.children||[]),f.return=g,f)}function d(g,f,b,E,A){return f===null||f.tag!==7?(f=Io(b,g.mode,E,A),f.return=g,f):(f=n(f,b),f.return=g,f)}function c(g,f,b){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ji(""+f,g.mode,b),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ss:return b=_s(f.type,f.key,f.props,null,g.mode,b),b.ref=Gt(g,null,f),b.return=g,b;case et:return f=Ti(f,g.mode,b),f.return=g,f;case Ya:var E=f._init;return c(g,E(f._payload),b)}if(Zt(f)||Ut(f))return f=Io(f,g.mode,b,null),f.return=g,f;hs(g,f)}return null}function p(g,f,b,E){var A=f!==null?f.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return A!==null?null:i(g,f,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:return b.key===A?l(g,f,b,E):null;case et:return b.key===A?u(g,f,b,E):null;case Ya:return A=b._init,p(g,f,A(b._payload),E)}if(Zt(b)||Ut(b))return A!==null?null:d(g,f,b,E,null);hs(g,b)}return null}function v(g,f,b,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(b)||null,i(f,g,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ss:return g=g.get(E.key===null?b:E.key)||null,l(f,g,E,A);case et:return g=g.get(E.key===null?b:E.key)||null,u(f,g,E,A);case Ya:var C=E._init;return v(g,f,b,C(E._payload),A)}if(Zt(E)||Ut(E))return g=g.get(b)||null,d(f,g,E,A,null);hs(f,E)}return null}function h(g,f,b,E){for(var A=null,C=null,z=f,w=f=0,N=null;z!==null&&w<b.length;w++){z.index>w?(N=z,z=null):N=z.sibling;var S=p(g,z,b[w],E);if(S===null){z===null&&(z=N);break}e&&z&&S.alternate===null&&a(g,z),f=s(S,f,w),C===null?A=S:C.sibling=S,C=S,z=N}if(w===b.length)return o(g,z),te&&So(g,w),A;if(z===null){for(;w<b.length;w++)z=c(g,b[w],E),z!==null&&(f=s(z,f,w),C===null?A=z:C.sibling=z,C=z);return te&&So(g,w),A}for(z=t(g,z);w<b.length;w++)N=v(z,g,w,b[w],E),N!==null&&(e&&N.alternate!==null&&z.delete(N.key===null?w:N.key),f=s(N,f,w),C===null?A=N:C.sibling=N,C=N);return e&&z.forEach(function(V){return a(g,V)}),te&&So(g,w),A}function y(g,f,b,E){var A=Ut(b);if(typeof A!="function")throw Error(j(150));if(b=A.call(b),b==null)throw Error(j(151));for(var C=A=null,z=f,w=f=0,N=null,S=b.next();z!==null&&!S.done;w++,S=b.next()){z.index>w?(N=z,z=null):N=z.sibling;var V=p(g,z,S.value,E);if(V===null){z===null&&(z=N);break}e&&z&&V.alternate===null&&a(g,z),f=s(V,f,w),C===null?A=V:C.sibling=V,C=V,z=N}if(S.done)return o(g,z),te&&So(g,w),A;if(z===null){for(;!S.done;w++,S=b.next())S=c(g,S.value,E),S!==null&&(f=s(S,f,w),C===null?A=S:C.sibling=S,C=S);return te&&So(g,w),A}for(z=t(g,z);!S.done;w++,S=b.next())S=v(z,g,w,S.value,E),S!==null&&(e&&S.alternate!==null&&z.delete(S.key===null?w:S.key),f=s(S,f,w),C===null?A=S:C.sibling=S,C=S);return e&&z.forEach(function(F){return a(g,F)}),te&&So(g,w),A}function q(g,f,b,E){if(typeof b=="object"&&b!==null&&b.type===at&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ss:e:{for(var A=b.key,C=f;C!==null;){if(C.key===A){if(A=b.type,A===at){if(C.tag===7){o(g,C.sibling),f=n(C,b.props.children),f.return=g,g=f;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ya&&Xm(A)===C.type){o(g,C.sibling),f=n(C,b.props),f.ref=Gt(g,C,b),f.return=g,g=f;break e}o(g,C);break}else a(g,C);C=C.sibling}b.type===at?(f=Io(b.props.children,g.mode,E,b.key),f.return=g,g=f):(E=_s(b.type,b.key,b.props,null,g.mode,E),E.ref=Gt(g,f,b),E.return=g,g=E)}return r(g);case et:e:{for(C=b.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===b.containerInfo&&f.stateNode.implementation===b.implementation){o(g,f.sibling),f=n(f,b.children||[]),f.return=g,g=f;break e}else{o(g,f);break}else a(g,f);f=f.sibling}f=Ti(b,g.mode,E),f.return=g,g=f}return r(g);case Ya:return C=b._init,q(g,f,C(b._payload),E)}if(Zt(b))return h(g,f,b,E);if(Ut(b))return y(g,f,b,E);hs(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,f!==null&&f.tag===6?(o(g,f.sibling),f=n(f,b),f.return=g,g=f):(o(g,f),f=ji(b,g.mode,E),f.return=g,g=f),r(g)):o(g,f)}return q}var Ct=Mg(!0),Og=Mg(!1),lr=yo(null),ur=null,ut=null,Xu=null;function Yu(){Xu=ut=ur=null}function Ju(e){var a=lr.current;oe(lr),e._currentValue=a}function Nl(e,a,o){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===o)break;e=e.return}}function yt(e,a){ur=e,Xu=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&a&&(Ue=!0),e.firstContext=null)}function ra(e){var a=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:a,next:null},ut===null){if(ur===null)throw Error(j(308));ut=e,ur.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return a}var To=null;function Zu(e){To===null?To=[e]:To.push(e)}function Rg(e,a,o,t){var n=a.interleaved;return n===null?(o.next=o,Zu(a)):(o.next=n.next,n.next=o),a.interleaved=o,$a(e,t)}function $a(e,a){e.lanes|=a;var o=e.alternate;for(o!==null&&(o.lanes|=a),o=e,e=e.return;e!==null;)e.childLanes|=a,o=e.alternate,o!==null&&(o.childLanes|=a),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Ja=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ua(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function uo(e,a,o){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,$&2){var n=t.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a,$a(e,o)}return n=t.interleaved,n===null?(a.next=a,Zu(t)):(a.next=n.next,n.next=a),t.interleaved=a,$a(e,o)}function Rs(e,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194240)!==0)){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,Fu(e,o)}}function Ym(e,a){var o=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,o===t)){var n=null,s=null;if(o=o.firstBaseUpdate,o!==null){do{var r={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};s===null?n=s=r:s=s.next=r,o=o.next}while(o!==null);s===null?n=s=a:s=s.next=a}else n=s=a;o={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=a:e.next=a,o.lastBaseUpdate=a}function dr(e,a,o,t){var n=e.updateQueue;Ja=!1;var s=n.firstBaseUpdate,r=n.lastBaseUpdate,i=n.shared.pending;if(i!==null){n.shared.pending=null;var l=i,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==r&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=n.baseState;r=0,d=u=l=null,i=s;do{var p=i.lane,v=i.eventTime;if((t&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,y=i;switch(p=a,v=o,y.tag){case 1:if(h=y.payload,typeof h=="function"){c=h.call(v,c,p);break e}c=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,p=typeof h=="function"?h.call(v,c,p):h,p==null)break e;c=re({},c,p);break e;case 2:Ja=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[i]:p.push(i))}else v={eventTime:v,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=v,l=c):d=d.next=v,r|=p;if(i=i.next,i===null){if(i=n.shared.pending,i===null)break;p=i,i=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(d===null&&(l=c),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=d,a=n.shared.interleaved,a!==null){n=a;do r|=n.lane,n=n.next;while(n!==a)}else s===null&&(n.shared.lanes=0);Uo|=r,e.lanes=r,e.memoizedState=c}}function Jm(e,a,o){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var t=e[a],n=t.callback;if(n!==null){if(t.callback=null,t=o,typeof n!="function")throw Error(j(191,n));n.call(t)}}}var Xn={},Ta=yo(Xn),Tn=yo(Xn),Nn=yo(Xn);function No(e){if(e===Xn)throw Error(j(174));return e}function ad(e,a){switch(Z(Nn,a),Z(Tn,e),Z(Ta,Xn),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:cl(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=cl(a,e)}oe(Ta),Z(Ta,a)}function St(){oe(Ta),oe(Tn),oe(Nn)}function Lg(e){No(Nn.current);var a=No(Ta.current),o=cl(a,e.type);a!==o&&(Z(Tn,e),Z(Ta,o))}function od(e){Tn.current===e&&(oe(Ta),oe(Tn))}var ne=yo(0);function mr(e){for(var a=e;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var wi=[];function td(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var Is=Ga.ReactCurrentDispatcher,Ci=Ga.ReactCurrentBatchConfig,_o=0,se=null,xe=null,Ee=null,cr=!1,dn=!1,Mn=0,ab=0;function Pe(){throw Error(j(321))}function nd(e,a){if(a===null)return!1;for(var o=0;o<a.length&&o<e.length;o++)if(!ya(e[o],a[o]))return!1;return!0}function sd(e,a,o,t,n,s){if(_o=s,se=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Is.current=e===null||e.memoizedState===null?sb:rb,e=o(t,n),dn){s=0;do{if(dn=!1,Mn=0,25<=s)throw Error(j(301));s+=1,Ee=xe=null,a.updateQueue=null,Is.current=ib,e=o(t,n)}while(dn)}if(Is.current=pr,a=xe!==null&&xe.next!==null,_o=0,Ee=xe=se=null,cr=!1,a)throw Error(j(300));return e}function rd(){var e=Mn!==0;return Mn=0,e}function Sa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?se.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ia(){if(xe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var a=Ee===null?se.memoizedState:Ee.next;if(a!==null)Ee=a,xe=e;else{if(e===null)throw Error(j(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ee===null?se.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function On(e,a){return typeof a=="function"?a(e):a}function Si(e){var a=ia(),o=a.queue;if(o===null)throw Error(j(311));o.lastRenderedReducer=e;var t=xe,n=t.baseQueue,s=o.pending;if(s!==null){if(n!==null){var r=n.next;n.next=s.next,s.next=r}t.baseQueue=n=s,o.pending=null}if(n!==null){s=n.next,t=t.baseState;var i=r=null,l=null,u=s;do{var d=u.lane;if((_o&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=c,r=t):l=l.next=c,se.lanes|=d,Uo|=d}u=u.next}while(u!==null&&u!==s);l===null?r=t:l.next=i,ya(t,a.memoizedState)||(Ue=!0),a.memoizedState=t,a.baseState=r,a.baseQueue=l,o.lastRenderedState=t}if(e=o.interleaved,e!==null){n=e;do s=n.lane,se.lanes|=s,Uo|=s,n=n.next;while(n!==e)}else n===null&&(o.lanes=0);return[a.memoizedState,o.dispatch]}function zi(e){var a=ia(),o=a.queue;if(o===null)throw Error(j(311));o.lastRenderedReducer=e;var t=o.dispatch,n=o.pending,s=a.memoizedState;if(n!==null){o.pending=null;var r=n=n.next;do s=e(s,r.action),r=r.next;while(r!==n);ya(s,a.memoizedState)||(Ue=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),o.lastRenderedState=s}return[s,t]}function Dg(){}function Fg(e,a){var o=se,t=ia(),n=a(),s=!ya(t.memoizedState,n);if(s&&(t.memoizedState=n,Ue=!0),t=t.queue,id(Ug.bind(null,o,t,e),[e]),t.getSnapshot!==a||s||Ee!==null&&Ee.memoizedState.tag&1){if(o.flags|=2048,Rn(9,_g.bind(null,o,t,n,a),void 0,null),Ae===null)throw Error(j(349));_o&30||Vg(o,a,n)}return n}function Vg(e,a,o){e.flags|=16384,e={getSnapshot:a,value:o},a=se.updateQueue,a===null?(a={lastEffect:null,stores:null},se.updateQueue=a,a.stores=[e]):(o=a.stores,o===null?a.stores=[e]:o.push(e))}function _g(e,a,o,t){a.value=o,a.getSnapshot=t,Bg(a)&&Hg(e)}function Ug(e,a,o){return o(function(){Bg(a)&&Hg(e)})}function Bg(e){var a=e.getSnapshot;e=e.value;try{var o=a();return!ya(e,o)}catch{return!0}}function Hg(e){var a=$a(e,1);a!==null&&xa(a,e,1,-1)}function Zm(e){var a=Sa();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},a.queue=e,e=e.dispatch=nb.bind(null,se,e),[a.memoizedState,e]}function Rn(e,a,o,t){return e={tag:e,create:a,destroy:o,deps:t,next:null},a=se.updateQueue,a===null?(a={lastEffect:null,stores:null},se.updateQueue=a,a.lastEffect=e.next=e):(o=a.lastEffect,o===null?a.lastEffect=e.next=e:(t=o.next,o.next=e,e.next=t,a.lastEffect=e)),e}function $g(){return ia().memoizedState}function Ls(e,a,o,t){var n=Sa();se.flags|=e,n.memoizedState=Rn(1|a,o,void 0,t===void 0?null:t)}function Dr(e,a,o,t){var n=ia();t=t===void 0?null:t;var s=void 0;if(xe!==null){var r=xe.memoizedState;if(s=r.destroy,t!==null&&nd(t,r.deps)){n.memoizedState=Rn(a,o,s,t);return}}se.flags|=e,n.memoizedState=Rn(1|a,o,s,t)}function ec(e,a){return Ls(8390656,8,e,a)}function id(e,a){return Dr(2048,8,e,a)}function Wg(e,a){return Dr(4,2,e,a)}function Gg(e,a){return Dr(4,4,e,a)}function Qg(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Kg(e,a,o){return o=o!=null?o.concat([e]):null,Dr(4,4,Qg.bind(null,a,e),o)}function ld(){}function Xg(e,a){var o=ia();a=a===void 0?null:a;var t=o.memoizedState;return t!==null&&a!==null&&nd(a,t[1])?t[0]:(o.memoizedState=[e,a],e)}function Yg(e,a){var o=ia();a=a===void 0?null:a;var t=o.memoizedState;return t!==null&&a!==null&&nd(a,t[1])?t[0]:(e=e(),o.memoizedState=[e,a],e)}function Jg(e,a,o){return _o&21?(ya(o,a)||(o=tg(),se.lanes|=o,Uo|=o,e.baseState=!0),a):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=o)}function ob(e,a){var o=X;X=o!==0&&4>o?o:4,e(!0);var t=Ci.transition;Ci.transition={};try{e(!1),a()}finally{X=o,Ci.transition=t}}function Zg(){return ia().memoizedState}function tb(e,a,o){var t=co(e);if(o={lane:t,action:o,hasEagerState:!1,eagerState:null,next:null},eh(e))ah(a,o);else if(o=Rg(e,a,o,t),o!==null){var n=Ie();xa(o,e,t,n),oh(o,a,t)}}function nb(e,a,o){var t=co(e),n={lane:t,action:o,hasEagerState:!1,eagerState:null,next:null};if(eh(e))ah(a,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var r=a.lastRenderedState,i=s(r,o);if(n.hasEagerState=!0,n.eagerState=i,ya(i,r)){var l=a.interleaved;l===null?(n.next=n,Zu(a)):(n.next=l.next,l.next=n),a.interleaved=n;return}}catch{}finally{}o=Rg(e,a,n,t),o!==null&&(n=Ie(),xa(o,e,t,n),oh(o,a,t))}}function eh(e){var a=e.alternate;return e===se||a!==null&&a===se}function ah(e,a){dn=cr=!0;var o=e.pending;o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a}function oh(e,a,o){if(o&4194240){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,Fu(e,o)}}var pr={readContext:ra,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},sb={readContext:ra,useCallback:function(e,a){return Sa().memoizedState=[e,a===void 0?null:a],e},useContext:ra,useEffect:ec,useImperativeHandle:function(e,a,o){return o=o!=null?o.concat([e]):null,Ls(4194308,4,Qg.bind(null,a,e),o)},useLayoutEffect:function(e,a){return Ls(4194308,4,e,a)},useInsertionEffect:function(e,a){return Ls(4,2,e,a)},useMemo:function(e,a){var o=Sa();return a=a===void 0?null:a,e=e(),o.memoizedState=[e,a],e},useReducer:function(e,a,o){var t=Sa();return a=o!==void 0?o(a):a,t.memoizedState=t.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},t.queue=e,e=e.dispatch=tb.bind(null,se,e),[t.memoizedState,e]},useRef:function(e){var a=Sa();return e={current:e},a.memoizedState=e},useState:Zm,useDebugValue:ld,useDeferredValue:function(e){return Sa().memoizedState=e},useTransition:function(){var e=Zm(!1),a=e[0];return e=ob.bind(null,e[1]),Sa().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,o){var t=se,n=Sa();if(te){if(o===void 0)throw Error(j(407));o=o()}else{if(o=a(),Ae===null)throw Error(j(349));_o&30||Vg(t,a,o)}n.memoizedState=o;var s={value:o,getSnapshot:a};return n.queue=s,ec(Ug.bind(null,t,s,e),[e]),t.flags|=2048,Rn(9,_g.bind(null,t,s,o,a),void 0,null),o},useId:function(){var e=Sa(),a=Ae.identifierPrefix;if(te){var o=_a,t=Va;o=(t&~(1<<32-va(t)-1)).toString(32)+o,a=":"+a+"R"+o,o=Mn++,0<o&&(a+="H"+o.toString(32)),a+=":"}else o=ab++,a=":"+a+"r"+o.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},rb={readContext:ra,useCallback:Xg,useContext:ra,useEffect:id,useImperativeHandle:Kg,useInsertionEffect:Wg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Si,useRef:$g,useState:function(){return Si(On)},useDebugValue:ld,useDeferredValue:function(e){var a=ia();return Jg(a,xe.memoizedState,e)},useTransition:function(){var e=Si(On)[0],a=ia().memoizedState;return[e,a]},useMutableSource:Dg,useSyncExternalStore:Fg,useId:Zg,unstable_isNewReconciler:!1},ib={readContext:ra,useCallback:Xg,useContext:ra,useEffect:id,useImperativeHandle:Kg,useInsertionEffect:Wg,useLayoutEffect:Gg,useMemo:Yg,useReducer:zi,useRef:$g,useState:function(){return zi(On)},useDebugValue:ld,useDeferredValue:function(e){var a=ia();return xe===null?a.memoizedState=e:Jg(a,xe.memoizedState,e)},useTransition:function(){var e=zi(On)[0],a=ia().memoizedState;return[e,a]},useMutableSource:Dg,useSyncExternalStore:Fg,useId:Zg,unstable_isNewReconciler:!1};function pa(e,a){if(e&&e.defaultProps){a=re({},a),e=e.defaultProps;for(var o in e)a[o]===void 0&&(a[o]=e[o]);return a}return a}function Ml(e,a,o,t){a=e.memoizedState,o=o(t,a),o=o==null?a:re({},a,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Fr={isMounted:function(e){return(e=e._reactInternals)?Wo(e)===e:!1},enqueueSetState:function(e,a,o){e=e._reactInternals;var t=Ie(),n=co(e),s=Ua(t,n);s.payload=a,o!=null&&(s.callback=o),a=uo(e,s,n),a!==null&&(xa(a,e,n,t),Rs(a,e,n))},enqueueReplaceState:function(e,a,o){e=e._reactInternals;var t=Ie(),n=co(e),s=Ua(t,n);s.tag=1,s.payload=a,o!=null&&(s.callback=o),a=uo(e,s,n),a!==null&&(xa(a,e,n,t),Rs(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var o=Ie(),t=co(e),n=Ua(o,t);n.tag=2,a!=null&&(n.callback=a),a=uo(e,n,t),a!==null&&(xa(a,e,t,o),Rs(a,e,t))}};function ac(e,a,o,t,n,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,r):a.prototype&&a.prototype.isPureReactComponent?!zn(o,t)||!zn(n,s):!0}function th(e,a,o){var t=!1,n=ho,s=a.contextType;return typeof s=="object"&&s!==null?s=ra(s):(n=He(a)?Fo:Te.current,t=a.contextTypes,s=(t=t!=null)?At(e,n):ho),a=new a(o,s),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Fr,e.stateNode=a,a._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),a}function oc(e,a,o,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,t),a.state!==e&&Fr.enqueueReplaceState(a,a.state,null)}function Ol(e,a,o,t){var n=e.stateNode;n.props=o,n.state=e.memoizedState,n.refs={},ed(e);var s=a.contextType;typeof s=="object"&&s!==null?n.context=ra(s):(s=He(a)?Fo:Te.current,n.context=At(e,s)),n.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ml(e,a,s,o),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(a=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),a!==n.state&&Fr.enqueueReplaceState(n,n.state,null),dr(e,o,n,t),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,a){try{var o="",t=a;do o+=R2(t),t=t.return;while(t);var n=o}catch(s){n=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:a,stack:n,digest:null}}function Pi(e,a,o){return{value:e,source:null,stack:o??null,digest:a??null}}function Rl(e,a){try{console.error(a.value)}catch(o){setTimeout(function(){throw o})}}var lb=typeof WeakMap=="function"?WeakMap:Map;function nh(e,a,o){o=Ua(-1,o),o.tag=3,o.payload={element:null};var t=a.value;return o.callback=function(){gr||(gr=!0,$l=t),Rl(e,a)},o}function sh(e,a,o){o=Ua(-1,o),o.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var n=a.value;o.payload=function(){return t(n)},o.callback=function(){Rl(e,a)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(o.callback=function(){Rl(e,a),typeof t!="function"&&(mo===null?mo=new Set([this]):mo.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})}),o}function tc(e,a,o){var t=e.pingCache;if(t===null){t=e.pingCache=new lb;var n=new Set;t.set(a,n)}else n=t.get(a),n===void 0&&(n=new Set,t.set(a,n));n.has(o)||(n.add(o),e=Eb.bind(null,e,a,o),a.then(e,e))}function nc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function sc(e,a,o,t,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===a?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(a=Ua(-1,1),a.tag=2,uo(o,a,1))),o.lanes|=1),e)}var ub=Ga.ReactCurrentOwner,Ue=!1;function Ne(e,a,o,t){a.child=e===null?Og(a,null,o,t):Ct(a,e.child,o,t)}function rc(e,a,o,t,n){o=o.render;var s=a.ref;return yt(a,n),t=sd(e,a,o,t,s,n),o=rd(),e!==null&&!Ue?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n,Wa(e,a,n)):(te&&o&&Gu(a),a.flags|=1,Ne(e,a,t,n),a.child)}function ic(e,a,o,t,n){if(e===null){var s=o.type;return typeof s=="function"&&!hd(s)&&s.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(a.tag=15,a.type=s,rh(e,a,s,t,n)):(e=_s(o.type,null,t,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!(e.lanes&n)){var r=s.memoizedProps;if(o=o.compare,o=o!==null?o:zn,o(r,t)&&e.ref===a.ref)return Wa(e,a,n)}return a.flags|=1,e=po(s,t),e.ref=a.ref,e.return=a,a.child=e}function rh(e,a,o,t,n){if(e!==null){var s=e.memoizedProps;if(zn(s,t)&&e.ref===a.ref)if(Ue=!1,a.pendingProps=t=s,(e.lanes&n)!==0)e.flags&131072&&(Ue=!0);else return a.lanes=e.lanes,Wa(e,a,n)}return Il(e,a,o,t,n)}function ih(e,a,o){var t=a.pendingProps,n=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(mt,Ge),Ge|=o;else{if(!(o&1073741824))return e=s!==null?s.baseLanes|o:o,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,Z(mt,Ge),Ge|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:o,Z(mt,Ge),Ge|=t}else s!==null?(t=s.baseLanes|o,a.memoizedState=null):t=o,Z(mt,Ge),Ge|=t;return Ne(e,a,n,o),a.child}function lh(e,a){var o=a.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(a.flags|=512,a.flags|=2097152)}function Il(e,a,o,t,n){var s=He(o)?Fo:Te.current;return s=At(a,s),yt(a,n),o=sd(e,a,o,t,s,n),t=rd(),e!==null&&!Ue?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n,Wa(e,a,n)):(te&&t&&Gu(a),a.flags|=1,Ne(e,a,o,n),a.child)}function lc(e,a,o,t,n){if(He(o)){var s=!0;sr(a)}else s=!1;if(yt(a,n),a.stateNode===null)Ds(e,a),th(a,o,t),Ol(a,o,t,n),t=!0;else if(e===null){var r=a.stateNode,i=a.memoizedProps;r.props=i;var l=r.context,u=o.contextType;typeof u=="object"&&u!==null?u=ra(u):(u=He(o)?Fo:Te.current,u=At(a,u));var d=o.getDerivedStateFromProps,c=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function";c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==t||l!==u)&&oc(a,r,t,u),Ja=!1;var p=a.memoizedState;r.state=p,dr(a,t,r,n),l=a.memoizedState,i!==t||p!==l||Be.current||Ja?(typeof d=="function"&&(Ml(a,o,d,t),l=a.memoizedState),(i=Ja||ac(a,o,i,t,p,l,u))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=l),r.props=t,r.state=l,r.context=u,t=i):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{r=a.stateNode,Ig(e,a),i=a.memoizedProps,u=a.type===a.elementType?i:pa(a.type,i),r.props=u,c=a.pendingProps,p=r.context,l=o.contextType,typeof l=="object"&&l!==null?l=ra(l):(l=He(o)?Fo:Te.current,l=At(a,l));var v=o.getDerivedStateFromProps;(d=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==c||p!==l)&&oc(a,r,t,l),Ja=!1,p=a.memoizedState,r.state=p,dr(a,t,r,n);var h=a.memoizedState;i!==c||p!==h||Be.current||Ja?(typeof v=="function"&&(Ml(a,o,v,t),h=a.memoizedState),(u=Ja||ac(a,o,u,t,p,h,l)||!1)?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,h,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,h,l)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=h),r.props=t,r.state=h,r.context=l,t=u):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),t=!1)}return Ll(e,a,o,t,s,n)}function Ll(e,a,o,t,n,s){lh(e,a);var r=(a.flags&128)!==0;if(!t&&!r)return n&&Gm(a,o,!1),Wa(e,a,s);t=a.stateNode,ub.current=a;var i=r&&typeof o.getDerivedStateFromError!="function"?null:t.render();return a.flags|=1,e!==null&&r?(a.child=Ct(a,e.child,null,s),a.child=Ct(a,null,i,s)):Ne(e,a,i,s),a.memoizedState=t.state,n&&Gm(a,o,!0),a.child}function uh(e){var a=e.stateNode;a.pendingContext?Wm(e,a.pendingContext,a.pendingContext!==a.context):a.context&&Wm(e,a.context,!1),ad(e,a.containerInfo)}function uc(e,a,o,t,n){return wt(),Ku(n),a.flags|=256,Ne(e,a,o,t),a.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dh(e,a,o){var t=a.pendingProps,n=ne.current,s=!1,r=(a.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(n&2)!==0),i?(s=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Z(ne,n&1),e===null)return Tl(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(a.mode&1?e.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(r=t.children,e=t.fallback,s?(t=a.mode,s=a.child,r={mode:"hidden",children:r},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=r):s=Ur(r,t,0,null),e=Io(e,t,o,null),s.return=a,e.return=a,s.sibling=e,a.child=s,a.child.memoizedState=Fl(o),a.memoizedState=Dl,e):ud(a,r));if(n=e.memoizedState,n!==null&&(i=n.dehydrated,i!==null))return db(e,a,r,t,i,n,o);if(s){s=t.fallback,r=a.mode,n=e.child,i=n.sibling;var l={mode:"hidden",children:t.children};return!(r&1)&&a.child!==n?(t=a.child,t.childLanes=0,t.pendingProps=l,a.deletions=null):(t=po(n,l),t.subtreeFlags=n.subtreeFlags&14680064),i!==null?s=po(i,s):(s=Io(s,r,o,null),s.flags|=2),s.return=a,t.return=a,t.sibling=s,a.child=t,t=s,s=a.child,r=e.child.memoizedState,r=r===null?Fl(o):{baseLanes:r.baseLanes|o,cachePool:null,transitions:r.transitions},s.memoizedState=r,s.childLanes=e.childLanes&~o,a.memoizedState=Dl,t}return s=e.child,e=s.sibling,t=po(s,{mode:"visible",children:t.children}),!(a.mode&1)&&(t.lanes=o),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t}function ud(e,a){return a=Ur({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function vs(e,a,o,t){return t!==null&&Ku(t),Ct(a,e.child,null,o),e=ud(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function db(e,a,o,t,n,s,r){if(o)return a.flags&256?(a.flags&=-257,t=Pi(Error(j(422))),vs(e,a,r,t)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(s=t.fallback,n=a.mode,t=Ur({mode:"visible",children:t.children},n,0,null),s=Io(s,n,r,null),s.flags|=2,t.return=a,s.return=a,t.sibling=s,a.child=t,a.mode&1&&Ct(a,e.child,null,r),a.child.memoizedState=Fl(r),a.memoizedState=Dl,s);if(!(a.mode&1))return vs(e,a,r,null);if(n.data==="$!"){if(t=n.nextSibling&&n.nextSibling.dataset,t)var i=t.dgst;return t=i,s=Error(j(419)),t=Pi(s,t,void 0),vs(e,a,r,t)}if(i=(r&e.childLanes)!==0,Ue||i){if(t=Ae,t!==null){switch(r&-r){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(t.suspendedLanes|r)?0:n,n!==0&&n!==s.retryLane&&(s.retryLane=n,$a(e,n),xa(t,e,n,-1))}return gd(),t=Pi(Error(j(421))),vs(e,a,r,t)}return n.data==="$?"?(a.flags|=128,a.child=e.child,a=Ab.bind(null,e),n._reactRetry=a,null):(e=s.treeContext,Qe=lo(n.nextSibling),Ke=a,te=!0,ga=null,e!==null&&(aa[oa++]=Va,aa[oa++]=_a,aa[oa++]=Vo,Va=e.id,_a=e.overflow,Vo=a),a=ud(a,t.children),a.flags|=4096,a)}function dc(e,a,o){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),Nl(e.return,a,o)}function ki(e,a,o,t,n){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:o,tailMode:n}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=o,s.tailMode=n)}function mh(e,a,o){var t=a.pendingProps,n=t.revealOrder,s=t.tail;if(Ne(e,a,t.children,o),t=ne.current,t&2)t=t&1|2,a.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,o,a);else if(e.tag===19)dc(e,o,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(Z(ne,t),!(a.mode&1))a.memoizedState=null;else switch(n){case"forwards":for(o=a.child,n=null;o!==null;)e=o.alternate,e!==null&&mr(e)===null&&(n=o),o=o.sibling;o=n,o===null?(n=a.child,a.child=null):(n=o.sibling,o.sibling=null),ki(a,!1,n,o,s);break;case"backwards":for(o=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&mr(e)===null){a.child=n;break}e=n.sibling,n.sibling=o,o=n,n=e}ki(a,!0,o,null,s);break;case"together":ki(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ds(e,a){!(a.mode&1)&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Wa(e,a,o){if(e!==null&&(a.dependencies=e.dependencies),Uo|=a.lanes,!(o&a.childLanes))return null;if(e!==null&&a.child!==e.child)throw Error(j(153));if(a.child!==null){for(e=a.child,o=po(e,e.pendingProps),a.child=o,o.return=a;e.sibling!==null;)e=e.sibling,o=o.sibling=po(e,e.pendingProps),o.return=a;o.sibling=null}return a.child}function mb(e,a,o){switch(a.tag){case 3:uh(a),wt();break;case 5:Lg(a);break;case 1:He(a.type)&&sr(a);break;case 4:ad(a,a.stateNode.containerInfo);break;case 10:var t=a.type._context,n=a.memoizedProps.value;Z(lr,t._currentValue),t._currentValue=n;break;case 13:if(t=a.memoizedState,t!==null)return t.dehydrated!==null?(Z(ne,ne.current&1),a.flags|=128,null):o&a.child.childLanes?dh(e,a,o):(Z(ne,ne.current&1),e=Wa(e,a,o),e!==null?e.sibling:null);Z(ne,ne.current&1);break;case 19:if(t=(o&a.childLanes)!==0,e.flags&128){if(t)return mh(e,a,o);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Z(ne,ne.current),t)break;return null;case 22:case 23:return a.lanes=0,ih(e,a,o)}return Wa(e,a,o)}var ch,Vl,ph,fh;ch=function(e,a){for(var o=a.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Vl=function(){};ph=function(e,a,o,t){var n=e.memoizedProps;if(n!==t){e=a.stateNode,No(Ta.current);var s=null;switch(o){case"input":n=ll(e,n),t=ll(e,t),s=[];break;case"select":n=re({},n,{value:void 0}),t=re({},t,{value:void 0}),s=[];break;case"textarea":n=ml(e,n),t=ml(e,t),s=[];break;default:typeof n.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=tr)}pl(o,t);var r;o=null;for(u in n)if(!t.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var i=n[u];for(r in i)i.hasOwnProperty(r)&&(o||(o={}),o[r]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in t){var l=t[u];if(i=n!=null?n[u]:void 0,t.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(r in i)!i.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(o||(o={}),o[r]="");for(r in l)l.hasOwnProperty(r)&&i[r]!==l[r]&&(o||(o={}),o[r]=l[r])}else o||(s||(s=[]),s.push(u,o)),o=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",e),s||i===l||(s=[])):(s=s||[]).push(u,l))}o&&(s=s||[]).push("style",o);var u=s;(a.updateQueue=u)&&(a.flags|=4)}};fh=function(e,a,o,t){o!==t&&(a.flags|=4)};function Qt(e,a){if(!te)switch(e.tailMode){case"hidden":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var t=null;o!==null;)o.alternate!==null&&(t=o),o=o.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ke(e){var a=e.alternate!==null&&e.alternate.child===e.child,o=0,t=0;if(a)for(var n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags&14680064,t|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=o,a}function cb(e,a,o){var t=a.pendingProps;switch(Qu(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(a),null;case 1:return He(a.type)&&nr(),ke(a),null;case 3:return t=a.stateNode,St(),oe(Be),oe(Te),td(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(gs(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,ga!==null&&(Ql(ga),ga=null))),Vl(e,a),ke(a),null;case 5:od(a);var n=No(Nn.current);if(o=a.type,e!==null&&a.stateNode!=null)ph(e,a,o,t,n),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!t){if(a.stateNode===null)throw Error(j(166));return ke(a),null}if(e=No(Ta.current),gs(a)){t=a.stateNode,o=a.type;var s=a.memoizedProps;switch(t[ka]=a,t[jn]=s,e=(a.mode&1)!==0,o){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<an.length;n++)ee(an[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":bm(t,s),ee("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},ee("invalid",t);break;case"textarea":qm(t,s),ee("invalid",t)}pl(o,s),n=null;for(var r in s)if(s.hasOwnProperty(r)){var i=s[r];r==="children"?typeof i=="string"?t.textContent!==i&&(s.suppressHydrationWarning!==!0&&fs(t.textContent,i,e),n=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&fs(t.textContent,i,e),n=["children",""+i]):yn.hasOwnProperty(r)&&i!=null&&r==="onScroll"&&ee("scroll",t)}switch(o){case"input":rs(t),ym(t,s,!0);break;case"textarea":rs(t),Em(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=tr)}t=n,a.updateQueue=t,t!==null&&(a.flags|=4)}else{r=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=r.createElement(o,{is:t.is}):(e=r.createElement(o),o==="select"&&(r=e,t.multiple?r.multiple=!0:t.size&&(r.size=t.size))):e=r.createElementNS(e,o),e[ka]=a,e[jn]=t,ch(e,a,!1,!1),a.stateNode=e;e:{switch(r=fl(o,t),o){case"dialog":ee("cancel",e),ee("close",e),n=t;break;case"iframe":case"object":case"embed":ee("load",e),n=t;break;case"video":case"audio":for(n=0;n<an.length;n++)ee(an[n],e);n=t;break;case"source":ee("error",e),n=t;break;case"img":case"image":case"link":ee("error",e),ee("load",e),n=t;break;case"details":ee("toggle",e),n=t;break;case"input":bm(e,t),n=ll(e,t),ee("invalid",e);break;case"option":n=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},n=re({},t,{value:void 0}),ee("invalid",e);break;case"textarea":qm(e,t),n=ml(e,t),ee("invalid",e);break;default:n=t}pl(o,n),i=n;for(s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="style"?$f(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bf(e,l)):s==="children"?typeof l=="string"?(o!=="textarea"||l!=="")&&qn(e,l):typeof l=="number"&&qn(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",e):l!=null&&Mu(e,s,l,r))}switch(o){case"input":rs(e),ym(e,t,!1);break;case"textarea":rs(e),Em(e);break;case"option":t.value!=null&&e.setAttribute("value",""+go(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?ht(e,!!t.multiple,s,!1):t.defaultValue!=null&&ht(e,!!t.multiple,t.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=tr)}switch(o){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return ke(a),null;case 6:if(e&&a.stateNode!=null)fh(e,a,e.memoizedProps,t);else{if(typeof t!="string"&&a.stateNode===null)throw Error(j(166));if(o=No(Nn.current),No(Ta.current),gs(a)){if(t=a.stateNode,o=a.memoizedProps,t[ka]=a,(s=t.nodeValue!==o)&&(e=Ke,e!==null))switch(e.tag){case 3:fs(t.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fs(t.nodeValue,o,(e.mode&1)!==0)}s&&(a.flags|=4)}else t=(o.nodeType===9?o:o.ownerDocument).createTextNode(t),t[ka]=a,a.stateNode=t}return ke(a),null;case 13:if(oe(ne),t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&a.mode&1&&!(a.flags&128))Ng(),wt(),a.flags|=98560,s=!1;else if(s=gs(a),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[ka]=a}else wt(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;ke(a),s=!1}else ga!==null&&(Ql(ga),ga=null),s=!0;if(!s)return a.flags&65536?a:null}return a.flags&128?(a.lanes=o,a):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(a.child.flags|=8192,a.mode&1&&(e===null||ne.current&1?be===0&&(be=3):gd())),a.updateQueue!==null&&(a.flags|=4),ke(a),null);case 4:return St(),Vl(e,a),e===null&&Pn(a.stateNode.containerInfo),ke(a),null;case 10:return Ju(a.type._context),ke(a),null;case 17:return He(a.type)&&nr(),ke(a),null;case 19:if(oe(ne),s=a.memoizedState,s===null)return ke(a),null;if(t=(a.flags&128)!==0,r=s.rendering,r===null)if(t)Qt(s,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(r=mr(e),r!==null){for(a.flags|=128,Qt(s,!1),t=r.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),a.subtreeFlags=0,t=o,o=a.child;o!==null;)s=o,e=t,s.flags&=14680066,r=s.alternate,r===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,s.type=r.type,e=r.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Z(ne,ne.current&1|2),a.child}e=e.sibling}s.tail!==null&&de()>Pt&&(a.flags|=128,t=!0,Qt(s,!1),a.lanes=4194304)}else{if(!t)if(e=mr(r),e!==null){if(a.flags|=128,t=!0,o=e.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),Qt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!te)return ke(a),null}else 2*de()-s.renderingStartTime>Pt&&o!==1073741824&&(a.flags|=128,t=!0,Qt(s,!1),a.lanes=4194304);s.isBackwards?(r.sibling=a.child,a.child=r):(o=s.last,o!==null?o.sibling=r:a.child=r,s.last=r)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=de(),a.sibling=null,o=ne.current,Z(ne,t?o&1|2:o&1),a):(ke(a),null);case 22:case 23:return fd(),t=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(a.flags|=8192),t&&a.mode&1?Ge&1073741824&&(ke(a),a.subtreeFlags&6&&(a.flags|=8192)):ke(a),null;case 24:return null;case 25:return null}throw Error(j(156,a.tag))}function pb(e,a){switch(Qu(a),a.tag){case 1:return He(a.type)&&nr(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return St(),oe(Be),oe(Te),td(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 5:return od(a),null;case 13:if(oe(ne),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(j(340));wt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return oe(ne),null;case 4:return St(),null;case 10:return Ju(a.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var xs=!1,je=!1,fb=typeof WeakSet=="function"?WeakSet:Set,O=null;function dt(e,a){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(t){le(e,a,t)}else o.current=null}function _l(e,a,o){try{o()}catch(t){le(e,a,t)}}var mc=!1;function gb(e,a){if(wl=er,e=bg(),Wu(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var t=o.getSelection&&o.getSelection();if(t&&t.rangeCount!==0){o=t.anchorNode;var n=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var r=0,i=-1,l=-1,u=0,d=0,c=e,p=null;a:for(;;){for(var v;c!==o||n!==0&&c.nodeType!==3||(i=r+n),c!==s||t!==0&&c.nodeType!==3||(l=r+t),c.nodeType===3&&(r+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break a;if(p===o&&++u===n&&(i=r),p===s&&++d===t&&(l=r),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}o=i===-1||l===-1?null:{start:i,end:l}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cl={focusedElem:e,selectionRange:o},er=!1,O=a;O!==null;)if(a=O,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,O=e;else for(;O!==null;){a=O;try{var h=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,q=h.memoizedState,g=a.stateNode,f=g.getSnapshotBeforeUpdate(a.elementType===a.type?y:pa(a.type,y),q);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var b=a.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(E){le(a,a.return,E)}if(e=a.sibling,e!==null){e.return=a.return,O=e;break}O=a.return}return h=mc,mc=!1,h}function mn(e,a,o){var t=a.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.destroy;n.destroy=void 0,s!==void 0&&_l(a,o,s)}n=n.next}while(n!==t)}}function Vr(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var t=o.create;o.destroy=t()}o=o.next}while(o!==a)}}function Ul(e){var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof a=="function"?a(e):a.current=e}}function gh(e){var a=e.alternate;a!==null&&(e.alternate=null,gh(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[ka],delete a[jn],delete a[Pl],delete a[Yx],delete a[Jx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hh(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?o.nodeType===8?o.parentNode.insertBefore(e,a):o.insertBefore(e,a):(o.nodeType===8?(a=o.parentNode,a.insertBefore(e,o)):(a=o,a.appendChild(e)),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=tr));else if(t!==4&&(e=e.child,e!==null))for(Bl(e,a,o),e=e.sibling;e!==null;)Bl(e,a,o),e=e.sibling}function Hl(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?o.insertBefore(e,a):o.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Hl(e,a,o),e=e.sibling;e!==null;)Hl(e,a,o),e=e.sibling}var Ce=null,fa=!1;function Qa(e,a,o){for(o=o.child;o!==null;)vh(e,a,o),o=o.sibling}function vh(e,a,o){if(ja&&typeof ja.onCommitFiberUnmount=="function")try{ja.onCommitFiberUnmount(Nr,o)}catch{}switch(o.tag){case 5:je||dt(o,a);case 6:var t=Ce,n=fa;Ce=null,Qa(e,a,o),Ce=t,fa=n,Ce!==null&&(fa?(e=Ce,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ce.removeChild(o.stateNode));break;case 18:Ce!==null&&(fa?(e=Ce,o=o.stateNode,e.nodeType===8?Ei(e.parentNode,o):e.nodeType===1&&Ei(e,o),Cn(e)):Ei(Ce,o.stateNode));break;case 4:t=Ce,n=fa,Ce=o.stateNode.containerInfo,fa=!0,Qa(e,a,o),Ce=t,fa=n;break;case 0:case 11:case 14:case 15:if(!je&&(t=o.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){n=t=t.next;do{var s=n,r=s.destroy;s=s.tag,r!==void 0&&(s&2||s&4)&&_l(o,a,r),n=n.next}while(n!==t)}Qa(e,a,o);break;case 1:if(!je&&(dt(o,a),t=o.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=o.memoizedProps,t.state=o.memoizedState,t.componentWillUnmount()}catch(i){le(o,a,i)}Qa(e,a,o);break;case 21:Qa(e,a,o);break;case 22:o.mode&1?(je=(t=je)||o.memoizedState!==null,Qa(e,a,o),je=t):Qa(e,a,o);break;default:Qa(e,a,o)}}function pc(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new fb),a.forEach(function(t){var n=wb.bind(null,e,t);o.has(t)||(o.add(t),t.then(n,n))})}}function da(e,a){var o=a.deletions;if(o!==null)for(var t=0;t<o.length;t++){var n=o[t];try{var s=e,r=a,i=r;e:for(;i!==null;){switch(i.tag){case 5:Ce=i.stateNode,fa=!1;break e;case 3:Ce=i.stateNode.containerInfo,fa=!0;break e;case 4:Ce=i.stateNode.containerInfo,fa=!0;break e}i=i.return}if(Ce===null)throw Error(j(160));vh(s,r,n),Ce=null,fa=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(u){le(n,a,u)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)xh(a,e),a=a.sibling}function xh(e,a){var o=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(da(a,e),Ca(e),t&4){try{mn(3,e,e.return),Vr(3,e)}catch(y){le(e,e.return,y)}try{mn(5,e,e.return)}catch(y){le(e,e.return,y)}}break;case 1:da(a,e),Ca(e),t&512&&o!==null&&dt(o,o.return);break;case 5:if(da(a,e),Ca(e),t&512&&o!==null&&dt(o,o.return),e.flags&32){var n=e.stateNode;try{qn(n,"")}catch(y){le(e,e.return,y)}}if(t&4&&(n=e.stateNode,n!=null)){var s=e.memoizedProps,r=o!==null?o.memoizedProps:s,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&Vf(n,s),fl(i,r);var u=fl(i,s);for(r=0;r<l.length;r+=2){var d=l[r],c=l[r+1];d==="style"?$f(n,c):d==="dangerouslySetInnerHTML"?Bf(n,c):d==="children"?qn(n,c):Mu(n,d,c,u)}switch(i){case"input":ul(n,s);break;case"textarea":_f(n,s);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ht(n,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?ht(n,!!s.multiple,s.defaultValue,!0):ht(n,!!s.multiple,s.multiple?[]:"",!1))}n[jn]=s}catch(y){le(e,e.return,y)}}break;case 6:if(da(a,e),Ca(e),t&4){if(e.stateNode===null)throw Error(j(162));n=e.stateNode,s=e.memoizedProps;try{n.nodeValue=s}catch(y){le(e,e.return,y)}}break;case 3:if(da(a,e),Ca(e),t&4&&o!==null&&o.memoizedState.isDehydrated)try{Cn(a.containerInfo)}catch(y){le(e,e.return,y)}break;case 4:da(a,e),Ca(e);break;case 13:da(a,e),Ca(e),n=e.child,n.flags&8192&&(s=n.memoizedState!==null,n.stateNode.isHidden=s,!s||n.alternate!==null&&n.alternate.memoizedState!==null||(cd=de())),t&4&&pc(e);break;case 22:if(d=o!==null&&o.memoizedState!==null,e.mode&1?(je=(u=je)||d,da(a,e),je=u):da(a,e),Ca(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(c=O=d;O!==null;){switch(p=O,v=p.child,p.tag){case 0:case 11:case 14:case 15:mn(4,p,p.return);break;case 1:dt(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){t=p,o=p.return;try{a=t,h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(y){le(t,o,y)}}break;case 5:dt(p,p.return);break;case 22:if(p.memoizedState!==null){gc(c);continue}}v!==null?(v.return=p,O=v):gc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{n=c.stateNode,u?(s=n.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=c.stateNode,l=c.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Hf("display",r))}catch(y){le(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){le(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:da(a,e),Ca(e),t&4&&pc(e);break;case 21:break;default:da(a,e),Ca(e)}}function Ca(e){var a=e.flags;if(a&2){try{e:{for(var o=e.return;o!==null;){if(hh(o)){var t=o;break e}o=o.return}throw Error(j(160))}switch(t.tag){case 5:var n=t.stateNode;t.flags&32&&(qn(n,""),t.flags&=-33);var s=cc(e);Hl(e,s,n);break;case 3:case 4:var r=t.stateNode.containerInfo,i=cc(e);Bl(e,i,r);break;default:throw Error(j(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function hb(e,a,o){O=e,bh(e)}function bh(e,a,o){for(var t=(e.mode&1)!==0;O!==null;){var n=O,s=n.child;if(n.tag===22&&t){var r=n.memoizedState!==null||xs;if(!r){var i=n.alternate,l=i!==null&&i.memoizedState!==null||je;i=xs;var u=je;if(xs=r,(je=l)&&!u)for(O=n;O!==null;)r=O,l=r.child,r.tag===22&&r.memoizedState!==null?hc(n):l!==null?(l.return=r,O=l):hc(n);for(;s!==null;)O=s,bh(s),s=s.sibling;O=n,xs=i,je=u}fc(e)}else n.subtreeFlags&8772&&s!==null?(s.return=n,O=s):fc(e)}}function fc(e){for(;O!==null;){var a=O;if(a.flags&8772){var o=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:je||Vr(5,a);break;case 1:var t=a.stateNode;if(a.flags&4&&!je)if(o===null)t.componentDidMount();else{var n=a.elementType===a.type?o.memoizedProps:pa(a.type,o.memoizedProps);t.componentDidUpdate(n,o.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&Jm(a,s,t);break;case 3:var r=a.updateQueue;if(r!==null){if(o=null,a.child!==null)switch(a.child.tag){case 5:o=a.child.stateNode;break;case 1:o=a.child.stateNode}Jm(a,r,o)}break;case 5:var i=a.stateNode;if(o===null&&a.flags&4){o=i;var l=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break;case"img":l.src&&(o.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var u=a.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Cn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}je||a.flags&512&&Ul(a)}catch(p){le(a,a.return,p)}}if(a===e){O=null;break}if(o=a.sibling,o!==null){o.return=a.return,O=o;break}O=a.return}}function gc(e){for(;O!==null;){var a=O;if(a===e){O=null;break}var o=a.sibling;if(o!==null){o.return=a.return,O=o;break}O=a.return}}function hc(e){for(;O!==null;){var a=O;try{switch(a.tag){case 0:case 11:case 15:var o=a.return;try{Vr(4,a)}catch(l){le(a,o,l)}break;case 1:var t=a.stateNode;if(typeof t.componentDidMount=="function"){var n=a.return;try{t.componentDidMount()}catch(l){le(a,n,l)}}var s=a.return;try{Ul(a)}catch(l){le(a,s,l)}break;case 5:var r=a.return;try{Ul(a)}catch(l){le(a,r,l)}}}catch(l){le(a,a.return,l)}if(a===e){O=null;break}var i=a.sibling;if(i!==null){i.return=a.return,O=i;break}O=a.return}}var vb=Math.ceil,fr=Ga.ReactCurrentDispatcher,dd=Ga.ReactCurrentOwner,sa=Ga.ReactCurrentBatchConfig,$=0,Ae=null,pe=null,Se=0,Ge=0,mt=yo(0),be=0,In=null,Uo=0,_r=0,md=0,cn=null,_e=null,cd=0,Pt=1/0,Da=null,gr=!1,$l=null,mo=null,bs=!1,oo=null,hr=0,pn=0,Wl=null,Fs=-1,Vs=0;function Ie(){return $&6?de():Fs!==-1?Fs:Fs=de()}function co(e){return e.mode&1?$&2&&Se!==0?Se&-Se:eb.transition!==null?(Vs===0&&(Vs=tg()),Vs):(e=X,e!==0||(e=window.event,e=e===void 0?16:dg(e.type)),e):1}function xa(e,a,o,t){if(50<pn)throw pn=0,Wl=null,Error(j(185));Gn(e,o,t),(!($&2)||e!==Ae)&&(e===Ae&&(!($&2)&&(_r|=o),be===4&&eo(e,Se)),$e(e,t),o===1&&$===0&&!(a.mode&1)&&(Pt=de()+500,Lr&&qo()))}function $e(e,a){var o=e.callbackNode;ex(e,a);var t=Zs(e,e===Ae?Se:0);if(t===0)o!==null&&Cm(o),e.callbackNode=null,e.callbackPriority=0;else if(a=t&-t,e.callbackPriority!==a){if(o!=null&&Cm(o),a===1)e.tag===0?Zx(vc.bind(null,e)):kg(vc.bind(null,e)),Kx(function(){!($&6)&&qo()}),o=null;else{switch(ng(t)){case 1:o=Du;break;case 4:o=ag;break;case 16:o=Js;break;case 536870912:o=og;break;default:o=Js}o=zh(o,yh.bind(null,e))}e.callbackPriority=a,e.callbackNode=o}}function yh(e,a){if(Fs=-1,Vs=0,$&6)throw Error(j(327));var o=e.callbackNode;if(qt()&&e.callbackNode!==o)return null;var t=Zs(e,e===Ae?Se:0);if(t===0)return null;if(t&30||t&e.expiredLanes||a)a=vr(e,t);else{a=t;var n=$;$|=2;var s=Eh();(Ae!==e||Se!==a)&&(Da=null,Pt=de()+500,Ro(e,a));do try{yb();break}catch(i){qh(e,i)}while(!0);Yu(),fr.current=s,$=n,pe!==null?a=0:(Ae=null,Se=0,a=be)}if(a!==0){if(a===2&&(n=bl(e),n!==0&&(t=n,a=Gl(e,n))),a===1)throw o=In,Ro(e,0),eo(e,t),$e(e,de()),o;if(a===6)eo(e,t);else{if(n=e.current.alternate,!(t&30)&&!xb(n)&&(a=vr(e,t),a===2&&(s=bl(e),s!==0&&(t=s,a=Gl(e,s))),a===1))throw o=In,Ro(e,0),eo(e,t),$e(e,de()),o;switch(e.finishedWork=n,e.finishedLanes=t,a){case 0:case 1:throw Error(j(345));case 2:zo(e,_e,Da);break;case 3:if(eo(e,t),(t&130023424)===t&&(a=cd+500-de(),10<a)){if(Zs(e,0)!==0)break;if(n=e.suspendedLanes,(n&t)!==t){Ie(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=zl(zo.bind(null,e,_e,Da),a);break}zo(e,_e,Da);break;case 4:if(eo(e,t),(t&4194240)===t)break;for(a=e.eventTimes,n=-1;0<t;){var r=31-va(t);s=1<<r,r=a[r],r>n&&(n=r),t&=~s}if(t=n,t=de()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*vb(t/1960))-t,10<t){e.timeoutHandle=zl(zo.bind(null,e,_e,Da),t);break}zo(e,_e,Da);break;case 5:zo(e,_e,Da);break;default:throw Error(j(329))}}}return $e(e,de()),e.callbackNode===o?yh.bind(null,e):null}function Gl(e,a){var o=cn;return e.current.memoizedState.isDehydrated&&(Ro(e,a).flags|=256),e=vr(e,a),e!==2&&(a=_e,_e=o,a!==null&&Ql(a)),e}function Ql(e){_e===null?_e=e:_e.push.apply(_e,e)}function xb(e){for(var a=e;;){if(a.flags&16384){var o=a.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var t=0;t<o.length;t++){var n=o[t],s=n.getSnapshot;n=n.value;try{if(!ya(s(),n))return!1}catch{return!1}}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function eo(e,a){for(a&=~md,a&=~_r,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var o=31-va(a),t=1<<o;e[o]=-1,a&=~t}}function vc(e){if($&6)throw Error(j(327));qt();var a=Zs(e,0);if(!(a&1))return $e(e,de()),null;var o=vr(e,a);if(e.tag!==0&&o===2){var t=bl(e);t!==0&&(a=t,o=Gl(e,t))}if(o===1)throw o=In,Ro(e,0),eo(e,a),$e(e,de()),o;if(o===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,zo(e,_e,Da),$e(e,de()),null}function pd(e,a){var o=$;$|=1;try{return e(a)}finally{$=o,$===0&&(Pt=de()+500,Lr&&qo())}}function Bo(e){oo!==null&&oo.tag===0&&!($&6)&&qt();var a=$;$|=1;var o=sa.transition,t=X;try{if(sa.transition=null,X=1,e)return e()}finally{X=t,sa.transition=o,$=a,!($&6)&&qo()}}function fd(){Ge=mt.current,oe(mt)}function Ro(e,a){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Qx(o)),pe!==null)for(o=pe.return;o!==null;){var t=o;switch(Qu(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&nr();break;case 3:St(),oe(Be),oe(Te),td();break;case 5:od(t);break;case 4:St();break;case 13:oe(ne);break;case 19:oe(ne);break;case 10:Ju(t.type._context);break;case 22:case 23:fd()}o=o.return}if(Ae=e,pe=e=po(e.current,null),Se=Ge=a,be=0,In=null,md=_r=Uo=0,_e=cn=null,To!==null){for(a=0;a<To.length;a++)if(o=To[a],t=o.interleaved,t!==null){o.interleaved=null;var n=t.next,s=o.pending;if(s!==null){var r=s.next;s.next=n,t.next=r}o.pending=t}To=null}return e}function qh(e,a){do{var o=pe;try{if(Yu(),Is.current=pr,cr){for(var t=se.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cr=!1}if(_o=0,Ee=xe=se=null,dn=!1,Mn=0,dd.current=null,o===null||o.return===null){be=1,In=a,pe=null;break}e:{var s=e,r=o.return,i=o,l=a;if(a=Se,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=i,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=nc(r);if(v!==null){v.flags&=-257,sc(v,r,i,s,a),v.mode&1&&tc(s,u,a),a=v,l=u;var h=a.updateQueue;if(h===null){var y=new Set;y.add(l),a.updateQueue=y}else h.add(l);break e}else{if(!(a&1)){tc(s,u,a),gd();break e}l=Error(j(426))}}else if(te&&i.mode&1){var q=nc(r);if(q!==null){!(q.flags&65536)&&(q.flags|=256),sc(q,r,i,s,a),Ku(zt(l,i));break e}}s=l=zt(l,i),be!==4&&(be=2),cn===null?cn=[s]:cn.push(s),s=r;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var g=nh(s,l,a);Ym(s,g);break e;case 1:i=l;var f=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(mo===null||!mo.has(b)))){s.flags|=65536,a&=-a,s.lanes|=a;var E=sh(s,i,a);Ym(s,E);break e}}s=s.return}while(s!==null)}wh(o)}catch(A){a=A,pe===o&&o!==null&&(pe=o=o.return);continue}break}while(!0)}function Eh(){var e=fr.current;return fr.current=pr,e===null?pr:e}function gd(){(be===0||be===3||be===2)&&(be=4),Ae===null||!(Uo&268435455)&&!(_r&268435455)||eo(Ae,Se)}function vr(e,a){var o=$;$|=2;var t=Eh();(Ae!==e||Se!==a)&&(Da=null,Ro(e,a));do try{bb();break}catch(n){qh(e,n)}while(!0);if(Yu(),$=o,fr.current=t,pe!==null)throw Error(j(261));return Ae=null,Se=0,be}function bb(){for(;pe!==null;)Ah(pe)}function yb(){for(;pe!==null&&!$2();)Ah(pe)}function Ah(e){var a=Sh(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,a===null?wh(e):pe=a,dd.current=null}function wh(e){var a=e;do{var o=a.alternate;if(e=a.return,a.flags&32768){if(o=pb(o,a),o!==null){o.flags&=32767,pe=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,pe=null;return}}else if(o=cb(o,a,Ge),o!==null){pe=o;return}if(a=a.sibling,a!==null){pe=a;return}pe=a=e}while(a!==null);be===0&&(be=5)}function zo(e,a,o){var t=X,n=sa.transition;try{sa.transition=null,X=1,qb(e,a,o,t)}finally{sa.transition=n,X=t}return null}function qb(e,a,o,t){do qt();while(oo!==null);if($&6)throw Error(j(327));o=e.finishedWork;var n=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=o.lanes|o.childLanes;if(ax(e,s),e===Ae&&(pe=Ae=null,Se=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||bs||(bs=!0,zh(Js,function(){return qt(),null})),s=(o.flags&15990)!==0,o.subtreeFlags&15990||s){s=sa.transition,sa.transition=null;var r=X;X=1;var i=$;$|=4,dd.current=null,gb(e,o),xh(o,e),_x(Cl),er=!!wl,Cl=wl=null,e.current=o,hb(o),W2(),$=i,X=r,sa.transition=s}else e.current=o;if(bs&&(bs=!1,oo=e,hr=n),s=e.pendingLanes,s===0&&(mo=null),K2(o.stateNode),$e(e,de()),a!==null)for(t=e.onRecoverableError,o=0;o<a.length;o++)n=a[o],t(n.value,{componentStack:n.stack,digest:n.digest});if(gr)throw gr=!1,e=$l,$l=null,e;return hr&1&&e.tag!==0&&qt(),s=e.pendingLanes,s&1?e===Wl?pn++:(pn=0,Wl=e):pn=0,qo(),null}function qt(){if(oo!==null){var e=ng(hr),a=sa.transition,o=X;try{if(sa.transition=null,X=16>e?16:e,oo===null)var t=!1;else{if(e=oo,oo=null,hr=0,$&6)throw Error(j(331));var n=$;for($|=4,O=e.current;O!==null;){var s=O,r=s.child;if(O.flags&16){var i=s.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:mn(8,d,s)}var c=d.child;if(c!==null)c.return=d,O=c;else for(;O!==null;){d=O;var p=d.sibling,v=d.return;if(gh(d),d===u){O=null;break}if(p!==null){p.return=v,O=p;break}O=v}}}var h=s.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var q=y.sibling;y.sibling=null,y=q}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&r!==null)r.return=s,O=r;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mn(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var f=e.current;for(O=f;O!==null;){r=O;var b=r.child;if(r.subtreeFlags&2064&&b!==null)b.return=r,O=b;else e:for(r=f;O!==null;){if(i=O,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Vr(9,i)}}catch(A){le(i,i.return,A)}if(i===r){O=null;break e}var E=i.sibling;if(E!==null){E.return=i.return,O=E;break e}O=i.return}}if($=n,qo(),ja&&typeof ja.onPostCommitFiberRoot=="function")try{ja.onPostCommitFiberRoot(Nr,e)}catch{}t=!0}return t}finally{X=o,sa.transition=a}}return!1}function xc(e,a,o){a=zt(o,a),a=nh(e,a,1),e=uo(e,a,1),a=Ie(),e!==null&&(Gn(e,1,a),$e(e,a))}function le(e,a,o){if(e.tag===3)xc(e,e,o);else for(;a!==null;){if(a.tag===3){xc(a,e,o);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(mo===null||!mo.has(t))){e=zt(o,e),e=sh(a,e,1),a=uo(a,e,1),e=Ie(),a!==null&&(Gn(a,1,e),$e(a,e));break}}a=a.return}}function Eb(e,a,o){var t=e.pingCache;t!==null&&t.delete(a),a=Ie(),e.pingedLanes|=e.suspendedLanes&o,Ae===e&&(Se&o)===o&&(be===4||be===3&&(Se&130023424)===Se&&500>de()-cd?Ro(e,0):md|=o),$e(e,a)}function Ch(e,a){a===0&&(e.mode&1?(a=us,us<<=1,!(us&130023424)&&(us=4194304)):a=1);var o=Ie();e=$a(e,a),e!==null&&(Gn(e,a,o),$e(e,o))}function Ab(e){var a=e.memoizedState,o=0;a!==null&&(o=a.retryLane),Ch(e,o)}function wb(e,a){var o=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(o=n.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(j(314))}t!==null&&t.delete(a),Ch(e,o)}var Sh;Sh=function(e,a,o){if(e!==null)if(e.memoizedProps!==a.pendingProps||Be.current)Ue=!0;else{if(!(e.lanes&o)&&!(a.flags&128))return Ue=!1,mb(e,a,o);Ue=!!(e.flags&131072)}else Ue=!1,te&&a.flags&1048576&&jg(a,ir,a.index);switch(a.lanes=0,a.tag){case 2:var t=a.type;Ds(e,a),e=a.pendingProps;var n=At(a,Te.current);yt(a,o),n=sd(null,a,t,e,n,o);var s=rd();return a.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,He(t)?(s=!0,sr(a)):s=!1,a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,ed(a),n.updater=Fr,a.stateNode=n,n._reactInternals=a,Ol(a,t,e,o),a=Ll(null,a,t,!0,s,o)):(a.tag=0,te&&s&&Gu(a),Ne(null,a,n,o),a=a.child),a;case 16:t=a.elementType;e:{switch(Ds(e,a),e=a.pendingProps,n=t._init,t=n(t._payload),a.type=t,n=a.tag=Sb(t),e=pa(t,e),n){case 0:a=Il(null,a,t,e,o);break e;case 1:a=lc(null,a,t,e,o);break e;case 11:a=rc(null,a,t,e,o);break e;case 14:a=ic(null,a,t,pa(t.type,e),o);break e}throw Error(j(306,t,""))}return a;case 0:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:pa(t,n),Il(e,a,t,n,o);case 1:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:pa(t,n),lc(e,a,t,n,o);case 3:e:{if(uh(a),e===null)throw Error(j(387));t=a.pendingProps,s=a.memoizedState,n=s.element,Ig(e,a),dr(a,t,null,o);var r=a.memoizedState;if(t=r.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){n=zt(Error(j(423)),a),a=uc(e,a,t,o,n);break e}else if(t!==n){n=zt(Error(j(424)),a),a=uc(e,a,t,o,n);break e}else for(Qe=lo(a.stateNode.containerInfo.firstChild),Ke=a,te=!0,ga=null,o=Og(a,null,t,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(wt(),t===n){a=Wa(e,a,o);break e}Ne(e,a,t,o)}a=a.child}return a;case 5:return Lg(a),e===null&&Tl(a),t=a.type,n=a.pendingProps,s=e!==null?e.memoizedProps:null,r=n.children,Sl(t,n)?r=null:s!==null&&Sl(t,s)&&(a.flags|=32),lh(e,a),Ne(e,a,r,o),a.child;case 6:return e===null&&Tl(a),null;case 13:return dh(e,a,o);case 4:return ad(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Ct(a,null,t,o):Ne(e,a,t,o),a.child;case 11:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:pa(t,n),rc(e,a,t,n,o);case 7:return Ne(e,a,a.pendingProps,o),a.child;case 8:return Ne(e,a,a.pendingProps.children,o),a.child;case 12:return Ne(e,a,a.pendingProps.children,o),a.child;case 10:e:{if(t=a.type._context,n=a.pendingProps,s=a.memoizedProps,r=n.value,Z(lr,t._currentValue),t._currentValue=r,s!==null)if(ya(s.value,r)){if(s.children===n.children&&!Be.current){a=Wa(e,a,o);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var i=s.dependencies;if(i!==null){r=s.child;for(var l=i.firstContext;l!==null;){if(l.context===t){if(s.tag===1){l=Ua(-1,o&-o),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=o,l=s.alternate,l!==null&&(l.lanes|=o),Nl(s.return,o,a),i.lanes|=o;break}l=l.next}}else if(s.tag===10)r=s.type===a.type?null:s.child;else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=o,i=r.alternate,i!==null&&(i.lanes|=o),Nl(r,o,a),r=s.sibling}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===a){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}Ne(e,a,n.children,o),a=a.child}return a;case 9:return n=a.type,t=a.pendingProps.children,yt(a,o),n=ra(n),t=t(n),a.flags|=1,Ne(e,a,t,o),a.child;case 14:return t=a.type,n=pa(t,a.pendingProps),n=pa(t.type,n),ic(e,a,t,n,o);case 15:return rh(e,a,a.type,a.pendingProps,o);case 17:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:pa(t,n),Ds(e,a),a.tag=1,He(t)?(e=!0,sr(a)):e=!1,yt(a,o),th(a,t,n),Ol(a,t,n,o),Ll(null,a,t,!0,e,o);case 19:return mh(e,a,o);case 22:return ih(e,a,o)}throw Error(j(156,a.tag))};function zh(e,a){return eg(e,a)}function Cb(e,a,o,t){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ta(e,a,o,t){return new Cb(e,a,o,t)}function hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sb(e){if(typeof e=="function")return hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ru)return 11;if(e===Iu)return 14}return 2}function po(e,a){var o=e.alternate;return o===null?(o=ta(e.tag,a,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=a,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function _s(e,a,o,t,n,s){var r=2;if(t=e,typeof e=="function")hd(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case at:return Io(o.children,n,s,a);case Ou:r=8,n|=8;break;case nl:return e=ta(12,o,a,n|2),e.elementType=nl,e.lanes=s,e;case sl:return e=ta(13,o,a,n),e.elementType=sl,e.lanes=s,e;case rl:return e=ta(19,o,a,n),e.elementType=rl,e.lanes=s,e;case Lf:return Ur(o,n,s,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rf:r=10;break e;case If:r=9;break e;case Ru:r=11;break e;case Iu:r=14;break e;case Ya:r=16,t=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return a=ta(r,o,a,n),a.elementType=e,a.type=t,a.lanes=s,a}function Io(e,a,o,t){return e=ta(7,e,t,a),e.lanes=o,e}function Ur(e,a,o,t){return e=ta(22,e,t,a),e.elementType=Lf,e.lanes=o,e.stateNode={isHidden:!1},e}function ji(e,a,o){return e=ta(6,e,null,a),e.lanes=o,e}function Ti(e,a,o){return a=ta(4,e.children!==null?e.children:[],e.key,a),a.lanes=o,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function zb(e,a,o,t,n){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=t,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function vd(e,a,o,t,n,s,r,i,l){return e=new zb(e,a,o,i,l),a===1?(a=1,s===!0&&(a|=8)):a=0,s=ta(3,null,null,a),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),e}function Pb(e,a,o){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:t==null?null:""+t,children:e,containerInfo:a,implementation:o}}function Ph(e){if(!e)return ho;e=e._reactInternals;e:{if(Wo(e)!==e||e.tag!==1)throw Error(j(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(He(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(j(171))}if(e.tag===1){var o=e.type;if(He(o))return Pg(e,o,a)}return a}function kh(e,a,o,t,n,s,r,i,l){return e=vd(o,t,!0,e,n,s,r,i,l),e.context=Ph(null),o=e.current,t=Ie(),n=co(o),s=Ua(t,n),s.callback=a??null,uo(o,s,n),e.current.lanes=n,Gn(e,n,t),$e(e,t),e}function Br(e,a,o,t){var n=a.current,s=Ie(),r=co(n);return o=Ph(o),a.context===null?a.context=o:a.pendingContext=o,a=Ua(s,r),a.payload={element:e},t=t===void 0?null:t,t!==null&&(a.callback=t),e=uo(n,a,r),e!==null&&(xa(e,n,r,s),Rs(e,n,r)),r}function xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<a?o:a}}function xd(e,a){bc(e,a),(e=e.alternate)&&bc(e,a)}function kb(){return null}var jh=typeof reportError=="function"?reportError:function(e){console.error(e)};function bd(e){this._internalRoot=e}Hr.prototype.render=bd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(j(409));Br(e,a,null,null)};Hr.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Bo(function(){Br(null,e,null,null)}),a[Ha]=null}};function Hr(e){this._internalRoot=e}Hr.prototype.unstable_scheduleHydration=function(e){if(e){var a=ig();e={blockedOn:null,target:e,priority:a};for(var o=0;o<Za.length&&a!==0&&a<Za[o].priority;o++);Za.splice(o,0,e),o===0&&ug(e)}};function yd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function jb(e,a,o,t,n){if(n){if(typeof t=="function"){var s=t;t=function(){var u=xr(r);s.call(u)}}var r=kh(a,t,e,0,null,!1,!1,"",yc);return e._reactRootContainer=r,e[Ha]=r.current,Pn(e.nodeType===8?e.parentNode:e),Bo(),r}for(;n=e.lastChild;)e.removeChild(n);if(typeof t=="function"){var i=t;t=function(){var u=xr(l);i.call(u)}}var l=vd(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=l,e[Ha]=l.current,Pn(e.nodeType===8?e.parentNode:e),Bo(function(){Br(a,l,o,t)}),l}function Wr(e,a,o,t,n){var s=o._reactRootContainer;if(s){var r=s;if(typeof n=="function"){var i=n;n=function(){var l=xr(r);i.call(l)}}Br(a,r,e,n)}else r=jb(o,a,e,n,t);return xr(r)}sg=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var o=en(a.pendingLanes);o!==0&&(Fu(a,o|1),$e(a,de()),!($&6)&&(Pt=de()+500,qo()))}break;case 13:Bo(function(){var t=$a(e,1);if(t!==null){var n=Ie();xa(t,e,1,n)}}),xd(e,1)}};Vu=function(e){if(e.tag===13){var a=$a(e,134217728);if(a!==null){var o=Ie();xa(a,e,134217728,o)}xd(e,134217728)}};rg=function(e){if(e.tag===13){var a=co(e),o=$a(e,a);if(o!==null){var t=Ie();xa(o,e,a,t)}xd(e,a)}};ig=function(){return X};lg=function(e,a){var o=X;try{return X=e,a()}finally{X=o}};hl=function(e,a,o){switch(a){case"input":if(ul(e,o),a=o.name,o.type==="radio"&&a!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<o.length;a++){var t=o[a];if(t!==e&&t.form===e.form){var n=Ir(t);if(!n)throw Error(j(90));Ff(t),ul(t,n)}}}break;case"textarea":_f(e,o);break;case"select":a=o.value,a!=null&&ht(e,!!o.multiple,a,!1)}};Qf=pd;Kf=Bo;var Tb={usingClientEntryPoint:!1,Events:[Kn,st,Ir,Wf,Gf,pd]},Kt={findFiberByHostInstance:jo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nb={bundleType:Kt.bundleType,version:Kt.version,rendererPackageName:Kt.rendererPackageName,rendererConfig:Kt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ga.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kt.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Nr=ys.inject(Nb),ja=ys}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tb;Ze.createPortal=function(e,a){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yd(a))throw Error(j(200));return Pb(e,a,null,o)};Ze.createRoot=function(e,a){if(!yd(e))throw Error(j(299));var o=!1,t="",n=jh;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),a=vd(e,1,!1,null,null,o,!1,t,n),e[Ha]=a.current,Pn(e.nodeType===8?e.parentNode:e),new bd(a)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Jf(a),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Bo(e)};Ze.hydrate=function(e,a,o){if(!$r(a))throw Error(j(200));return Wr(null,e,a,!0,o)};Ze.hydrateRoot=function(e,a,o){if(!yd(e))throw Error(j(405));var t=o!=null&&o.hydratedSources||null,n=!1,s="",r=jh;if(o!=null&&(o.unstable_strictMode===!0&&(n=!0),o.identifierPrefix!==void 0&&(s=o.identifierPrefix),o.onRecoverableError!==void 0&&(r=o.onRecoverableError)),a=kh(a,null,e,1,o??null,n,!1,s,r),e[Ha]=a.current,Pn(e),t)for(e=0;e<t.length;e++)o=t[e],n=o._getVersion,n=n(o._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[o,n]:a.mutableSourceEagerHydrationData.push(o,n);return new Hr(a)};Ze.render=function(e,a,o){if(!$r(a))throw Error(j(200));return Wr(null,e,a,!1,o)};Ze.unmountComponentAtNode=function(e){if(!$r(e))throw Error(j(40));return e._reactRootContainer?(Bo(function(){Wr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ha]=null})}),!0):!1};Ze.unstable_batchedUpdates=pd;Ze.unstable_renderSubtreeIntoContainer=function(e,a,o,t){if(!$r(o))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Wr(e,a,o,!1,t)};Ze.version="18.3.1-next-f1338f8080-20240426";function Th(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th)}catch(e){console.error(e)}}Th(),Tf.exports=Ze;var Mb=Tf.exports,qc=Mb;ol.createRoot=qc.createRoot,ol.hydrateRoot=qc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Ln.apply(null,arguments)}var to;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(to||(to={}));const Ec="popstate";function Ob(e){e===void 0&&(e={});function a(n,s){let{pathname:r="/",search:i="",hash:l=""}=Go(n.location.hash.substr(1));return!r.startsWith("/")&&!r.startsWith(".")&&(r="/"+r),Kl("",{pathname:r,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function o(n,s){let r=n.document.querySelector("base"),i="";if(r&&r.getAttribute("href")){let l=n.location.href,u=l.indexOf("#");i=u===-1?l:l.slice(0,u)}return i+"#"+(typeof s=="string"?s:br(s))}function t(n,s){Gr(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ib(a,o,t,e)}function fe(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Gr(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Rb(){return Math.random().toString(36).substr(2,8)}function Ac(e,a){return{usr:e.state,key:e.key,idx:a}}function Kl(e,a,o,t){return o===void 0&&(o=null),Ln({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof a=="string"?Go(a):a,{state:o,key:a&&a.key||t||Rb()})}function br(e){let{pathname:a="/",search:o="",hash:t=""}=e;return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),t&&t!=="#"&&(a+=t.charAt(0)==="#"?t:"#"+t),a}function Go(e){let a={};if(e){let o=e.indexOf("#");o>=0&&(a.hash=e.substr(o),e=e.substr(0,o));let t=e.indexOf("?");t>=0&&(a.search=e.substr(t),e=e.substr(0,t)),e&&(a.pathname=e)}return a}function Ib(e,a,o,t){t===void 0&&(t={});let{window:n=document.defaultView,v5Compat:s=!1}=t,r=n.history,i=to.Pop,l=null,u=d();u==null&&(u=0,r.replaceState(Ln({},r.state,{idx:u}),""));function d(){return(r.state||{idx:null}).idx}function c(){i=to.Pop;let q=d(),g=q==null?null:q-u;u=q,l&&l({action:i,location:y.location,delta:g})}function p(q,g){i=to.Push;let f=Kl(y.location,q,g);o&&o(f,q),u=d()+1;let b=Ac(f,u),E=y.createHref(f);try{r.pushState(b,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;n.location.assign(E)}s&&l&&l({action:i,location:y.location,delta:1})}function v(q,g){i=to.Replace;let f=Kl(y.location,q,g);o&&o(f,q),u=d();let b=Ac(f,u),E=y.createHref(f);r.replaceState(b,"",E),s&&l&&l({action:i,location:y.location,delta:0})}function h(q){let g=n.location.origin!=="null"?n.location.origin:n.location.href,f=typeof q=="string"?q:br(q);return f=f.replace(/ $/,"%20"),fe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let y={get action(){return i},get location(){return e(n,r)},listen(q){if(l)throw new Error("A history only accepts one active listener");return n.addEventListener(Ec,c),l=q,()=>{n.removeEventListener(Ec,c),l=null}},createHref(q){return a(n,q)},createURL:h,encodeLocation(q){let g=h(q);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:v,go(q){return r.go(q)}};return y}var wc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wc||(wc={}));function Lb(e,a,o){return o===void 0&&(o="/"),Db(e,a,o)}function Db(e,a,o,t){let n=typeof a=="string"?Go(a):a,s=qd(n.pathname||"/",o);if(s==null)return null;let r=Nh(e);Fb(r);let i=null,l=Yb(s);for(let u=0;i==null&&u<r.length;++u)i=Qb(r[u],l);return i}function Nh(e,a,o,t){a===void 0&&(a=[]),o===void 0&&(o=[]),t===void 0&&(t="");let n=(s,r,i)=>{let l={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(t),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(t.length));let u=fo([t,l.relativePath]),d=o.concat(l);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nh(s.children,a,d,u)),!(s.path==null&&!s.index)&&a.push({path:u,score:Wb(u,s.index),routesMeta:d})};return e.forEach((s,r)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))n(s,r);else for(let l of Mh(s.path))n(s,r,l)}),a}function Mh(e){let a=e.split("/");if(a.length===0)return[];let[o,...t]=a,n=o.endsWith("?"),s=o.replace(/\?$/,"");if(t.length===0)return n?[s,""]:[s];let r=Mh(t.join("/")),i=[];return i.push(...r.map(l=>l===""?s:[s,l].join("/"))),n&&i.push(...r),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function Fb(e){e.sort((a,o)=>a.score!==o.score?o.score-a.score:Gb(a.routesMeta.map(t=>t.childrenIndex),o.routesMeta.map(t=>t.childrenIndex)))}const Vb=/^:[\w-]+$/,_b=3,Ub=2,Bb=1,Hb=10,$b=-2,Cc=e=>e==="*";function Wb(e,a){let o=e.split("/"),t=o.length;return o.some(Cc)&&(t+=$b),a&&(t+=Ub),o.filter(n=>!Cc(n)).reduce((n,s)=>n+(Vb.test(s)?_b:s===""?Bb:Hb),t)}function Gb(e,a){return e.length===a.length&&e.slice(0,-1).every((t,n)=>t===a[n])?e[e.length-1]-a[a.length-1]:0}function Qb(e,a,o){let{routesMeta:t}=e,n={},s="/",r=[];for(let i=0;i<t.length;++i){let l=t[i],u=i===t.length-1,d=s==="/"?a:a.slice(s.length)||"/",c=Kb({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!c)return null;Object.assign(n,c.params),r.push({params:n,pathname:fo([s,c.pathname]),pathnameBase:o1(fo([s,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(s=fo([s,c.pathnameBase]))}return r}function Kb(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,t]=Xb(e.path,e.caseSensitive,e.end),n=a.match(o);if(!n)return null;let s=n[0],r=s.replace(/(.)\/+$/,"$1"),i=n.slice(1);return{params:t.reduce((u,d,c)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let y=i[c]||"";r=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const h=i[c];return v&&!h?u[p]=void 0:u[p]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:r,pattern:e}}function Xb(e,a,o){a===void 0&&(a=!1),o===void 0&&(o=!0),Gr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,i,l)=>(t.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,a?void 0:"i"),t]}function Yb(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Gr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),e}}function qd(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,t=e.charAt(o);return t&&t!=="/"?null:e.slice(o)||"/"}const Jb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zb=e=>Jb.test(e);function e1(e,a){a===void 0&&(a="/");let{pathname:o,search:t="",hash:n=""}=typeof e=="string"?Go(e):e,s;if(o)if(Zb(o))s=o;else{if(o.includes("//")){let r=o;o=Ih(o),Gr(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+o))}o.startsWith("/")?s=Sc(o.substring(1),"/"):s=Sc(o,a)}else s=a;return{pathname:s,search:t1(t),hash:n1(n)}}function Sc(e,a){let o=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?o.length>1&&o.pop():n!=="."&&o.push(n)}),o.length>1?o.join("/"):"/"}function Ni(e,a,o,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a1(e){return e.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Oh(e,a){let o=a1(e);return a?o.map((t,n)=>n===o.length-1?t.pathname:t.pathnameBase):o.map(t=>t.pathnameBase)}function Rh(e,a,o,t){t===void 0&&(t=!1);let n;typeof e=="string"?n=Go(e):(n=Ln({},e),fe(!n.pathname||!n.pathname.includes("?"),Ni("?","pathname","search",n)),fe(!n.pathname||!n.pathname.includes("#"),Ni("#","pathname","hash",n)),fe(!n.search||!n.search.includes("#"),Ni("#","search","hash",n)));let s=e===""||n.pathname==="",r=s?"/":n.pathname,i;if(r==null)i=o;else{let c=a.length-1;if(!t&&r.startsWith("..")){let p=r.split("/");for(;p[0]==="..";)p.shift(),c-=1;n.pathname=p.join("/")}i=c>=0?a[c]:"/"}let l=e1(n,i),u=r&&r!=="/"&&r.endsWith("/"),d=(s||r===".")&&o.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ih=e=>e.replace(/\/\/+/g,"/"),fo=e=>Ih(e.join("/")),o1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function s1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lh=["post","put","patch","delete"];new Set(Lh);const r1=["get",...Lh];new Set(r1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Dn.apply(null,arguments)}const Ed=x.createContext(null),i1=x.createContext(null),Qo=x.createContext(null),Qr=x.createContext(null),Eo=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Dh=x.createContext(null);function l1(e,a){let{relative:o}=a===void 0?{}:a;Yn()||fe(!1);let{basename:t,navigator:n}=x.useContext(Qo),{hash:s,pathname:r,search:i}=_h(e,{relative:o}),l=r;return t!=="/"&&(l=r==="/"?t:fo([t,r])),n.createHref({pathname:l,search:i,hash:s})}function Yn(){return x.useContext(Qr)!=null}function Ko(){return Yn()||fe(!1),x.useContext(Qr).location}function Fh(e){x.useContext(Qo).static||x.useLayoutEffect(e)}function Ad(){let{isDataRoute:e}=x.useContext(Eo);return e?q1():u1()}function u1(){Yn()||fe(!1);let e=x.useContext(Ed),{basename:a,future:o,navigator:t}=x.useContext(Qo),{matches:n}=x.useContext(Eo),{pathname:s}=Ko(),r=JSON.stringify(Oh(n,o.v7_relativeSplatPath)),i=x.useRef(!1);return Fh(()=>{i.current=!0}),x.useCallback(function(u,d){if(d===void 0&&(d={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let c=Rh(u,JSON.parse(r),s,d.relative==="path");e==null&&a!=="/"&&(c.pathname=c.pathname==="/"?a:fo([a,c.pathname])),(d.replace?t.replace:t.push)(c,d.state,d)},[a,t,r,s,e])}function Vh(){let{matches:e}=x.useContext(Eo),a=e[e.length-1];return a?a.params:{}}function _h(e,a){let{relative:o}=a===void 0?{}:a,{future:t}=x.useContext(Qo),{matches:n}=x.useContext(Eo),{pathname:s}=Ko(),r=JSON.stringify(Oh(n,t.v7_relativeSplatPath));return x.useMemo(()=>Rh(e,JSON.parse(r),s,o==="path"),[e,r,s,o])}function d1(e,a){return m1(e,a)}function m1(e,a,o,t){Yn()||fe(!1);let{navigator:n}=x.useContext(Qo),{matches:s}=x.useContext(Eo),r=s[s.length-1],i=r?r.params:{};r&&r.pathname;let l=r?r.pathnameBase:"/";r&&r.route;let u=Ko(),d;if(a){var c;let q=typeof a=="string"?Go(a):a;l==="/"||(c=q.pathname)!=null&&c.startsWith(l)||fe(!1),d=q}else d=u;let p=d.pathname||"/",v=p;if(l!=="/"){let q=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(q.length).join("/")}let h=Lb(e,{pathname:v}),y=h1(h&&h.map(q=>Object.assign({},q,{params:Object.assign({},i,q.params),pathname:fo([l,n.encodeLocation?n.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?l:fo([l,n.encodeLocation?n.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),s,o,t);return a&&y?x.createElement(Qr.Provider,{value:{location:Dn({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:to.Pop}},y):y}function c1(){let e=y1(),a=s1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},a),o?x.createElement("pre",{style:n},o):null,null)}const p1=x.createElement(c1,null);class f1 extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){console.error("React Router caught the following error during render",a,o)}render(){return this.state.error!==void 0?x.createElement(Eo.Provider,{value:this.props.routeContext},x.createElement(Dh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g1(e){let{routeContext:a,match:o,children:t}=e,n=x.useContext(Ed);return n&&n.static&&n.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement(Eo.Provider,{value:a},t)}function h1(e,a,o,t){var n;if(a===void 0&&(a=[]),o===void 0&&(o=null),t===void 0&&(t=null),e==null){var s;if(!o)return null;if(o.errors)e=o.matches;else if((s=t)!=null&&s.v7_partialHydration&&a.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let r=e,i=(n=o)==null?void 0:n.errors;if(i!=null){let d=r.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);d>=0||fe(!1),r=r.slice(0,Math.min(r.length,d+1))}let l=!1,u=-1;if(o&&t&&t.v7_partialHydration)for(let d=0;d<r.length;d++){let c=r[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:p,errors:v}=o,h=c.route.loader&&p[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||h){l=!0,u>=0?r=r.slice(0,u+1):r=[r[0]];break}}}return r.reduceRight((d,c,p)=>{let v,h=!1,y=null,q=null;o&&(v=i&&c.route.id?i[c.route.id]:void 0,y=c.route.errorElement||p1,l&&(u<0&&p===0?(E1("route-fallback"),h=!0,q=null):u===p&&(h=!0,q=c.route.hydrateFallbackElement||null)));let g=a.concat(r.slice(0,p+1)),f=()=>{let b;return v?b=y:h?b=q:c.route.Component?b=x.createElement(c.route.Component,null):c.route.element?b=c.route.element:b=d,x.createElement(g1,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:o!=null},children:b})};return o&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?x.createElement(f1,{location:o.location,revalidation:o.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var Uh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uh||{}),Bh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bh||{});function v1(e){let a=x.useContext(Ed);return a||fe(!1),a}function x1(e){let a=x.useContext(i1);return a||fe(!1),a}function b1(e){let a=x.useContext(Eo);return a||fe(!1),a}function Hh(e){let a=b1(),o=a.matches[a.matches.length-1];return o.route.id||fe(!1),o.route.id}function y1(){var e;let a=x.useContext(Dh),o=x1(),t=Hh();return a!==void 0?a:(e=o.errors)==null?void 0:e[t]}function q1(){let{router:e}=v1(Uh.UseNavigateStable),a=Hh(Bh.UseNavigateStable),o=x.useRef(!1);return Fh(()=>{o.current=!0}),x.useCallback(function(n,s){s===void 0&&(s={}),o.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Dn({fromRouteId:a},s)))},[e,a])}const zc={};function E1(e,a,o){zc[e]||(zc[e]=!0)}function A1(e,a){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Po(e){fe(!1)}function w1(e){let{basename:a="/",children:o=null,location:t,navigationType:n=to.Pop,navigator:s,static:r=!1,future:i}=e;Yn()&&fe(!1);let l=a.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:s,static:r,future:Dn({v7_relativeSplatPath:!1},i)}),[l,i,s,r]);typeof t=="string"&&(t=Go(t));let{pathname:d="/",search:c="",hash:p="",state:v=null,key:h="default"}=t,y=x.useMemo(()=>{let q=qd(d,l);return q==null?null:{location:{pathname:q,search:c,hash:p,state:v,key:h},navigationType:n}},[l,d,c,p,v,h,n]);return y==null?null:x.createElement(Qo.Provider,{value:u},x.createElement(Qr.Provider,{children:o,value:y}))}function C1(e){let{children:a,location:o}=e;return d1(Xl(a),o)}new Promise(()=>{});function Xl(e,a){a===void 0&&(a=[]);let o=[];return x.Children.forEach(e,(t,n)=>{if(!x.isValidElement(t))return;let s=[...a,n];if(t.type===x.Fragment){o.push.apply(o,Xl(t.props.children,s));return}t.type!==Po&&fe(!1),!t.props.index||!t.props.children||fe(!1);let r={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(r.children=Xl(t.props.children,s)),o.push(r)}),o}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)({}).hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Yl.apply(null,arguments)}function S1(e,a){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)!==-1)continue;o[t]=e[t]}return o}function z1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function P1(e,a){return e.button===0&&(!a||a==="_self")&&!z1(e)}function Jl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,o)=>{let t=e[o];return a.concat(Array.isArray(t)?t.map(n=>[o,n]):[[o,t]])},[]))}function k1(e,a){let o=Jl(e);return a&&a.forEach((t,n)=>{o.has(n)||a.getAll(n).forEach(s=>{o.append(n,s)})}),o}const j1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T1="6";try{window.__reactRouterVersion=T1}catch{}const N1="startTransition",Pc=E2[N1];function M1(e){let{basename:a,children:o,future:t,window:n}=e,s=x.useRef();s.current==null&&(s.current=Ob({window:n,v5Compat:!0}));let r=s.current,[i,l]=x.useState({action:r.action,location:r.location}),{v7_startTransition:u}=t||{},d=x.useCallback(c=>{u&&Pc?Pc(()=>l(c)):l(c)},[l,u]);return x.useLayoutEffect(()=>r.listen(d),[r,d]),x.useEffect(()=>A1(t),[t]),x.createElement(w1,{basename:a,children:o,location:i.location,navigationType:i.action,navigator:r,future:t})}const O1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W=x.forwardRef(function(a,o){let{onClick:t,relative:n,reloadDocument:s,replace:r,state:i,target:l,to:u,preventScrollReset:d,viewTransition:c}=a,p=S1(a,j1),{basename:v}=x.useContext(Qo),h,y=!1;if(typeof u=="string"&&R1.test(u)&&(h=u,O1))try{let b=new URL(window.location.href),E=u.startsWith("//")?new URL(b.protocol+u):new URL(u),A=qd(E.pathname,v);E.origin===b.origin&&A!=null?u=A+E.search+E.hash:y=!0}catch{}let q=l1(u,{relative:n}),g=I1(u,{replace:r,state:i,target:l,preventScrollReset:d,relative:n,viewTransition:c});function f(b){t&&t(b),b.defaultPrevented||g(b)}return x.createElement("a",Yl({},p,{href:h||q,onClick:y||s?t:f,ref:o,target:l}))});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kc||(kc={}));var jc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jc||(jc={}));function I1(e,a){let{target:o,replace:t,state:n,preventScrollReset:s,relative:r,viewTransition:i}=a===void 0?{}:a,l=Ad(),u=Ko(),d=_h(e,{relative:r});return x.useCallback(c=>{if(P1(c,o)){c.preventDefault();let p=t!==void 0?t:br(u)===br(d);l(e,{replace:p,state:n,preventScrollReset:s,relative:r,viewTransition:i})}},[u,l,d,t,n,o,e,s,r,i])}function $h(e){let a=x.useRef(Jl(e)),o=x.useRef(!1),t=Ko(),n=x.useMemo(()=>k1(t.search,o.current?null:a.current),[t.search]),s=Ad(),r=x.useCallback((i,l)=>{const u=Jl(typeof i=="function"?i(n):i);o.current=!0,s("?"+u,l)},[s,n]);return[n,r]}const wd=x.createContext({});function vo(e){const a=x.useRef(null);return a.current===null&&(a.current=e()),a.current}const L1=typeof window<"u",Jn=L1?x.useLayoutEffect:x.useEffect,Kr=x.createContext(null);function Cd(e,a){e.indexOf(a)===-1&&e.push(a)}function yr(e,a){const o=e.indexOf(a);o>-1&&e.splice(o,1)}const qa=(e,a,o)=>o>a?a:o<e?e:o;let Sd=()=>{};const xo={},Wh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Gh=e=>typeof e=="object"&&e!==null,Qh=e=>/^0[^.\s]+$/u.test(e);function Kh(e){let a;return()=>(a===void 0&&(a=e()),a)}const We=e=>e,Zn=(...e)=>e.reduce((a,o)=>t=>o(a(t))),kt=(e,a,o)=>{const t=a-e;return t?(o-e)/t:1};class zd{constructor(){this.subscriptions=[]}add(a){return Cd(this.subscriptions,a),()=>yr(this.subscriptions,a)}notify(a,o,t){const n=this.subscriptions.length;if(n)if(n===1)this.subscriptions[0](a,o,t);else for(let s=0;s<n;s++){const r=this.subscriptions[s];r&&r(a,o,t)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xe=e=>e*1e3,na=e=>e/1e3,Pd=(e,a)=>a?e*(1e3/a):0,Xh=(e,a,o)=>(((1-3*o+3*a)*e+(3*o-6*a))*e+3*a)*e,D1=1e-7,F1=12;function V1(e,a,o,t,n){let s,r,i=0;do r=a+(o-a)/2,s=Xh(r,t,n)-e,s>0?o=r:a=r;while(Math.abs(s)>D1&&++i<F1);return r}function es(e,a,o,t){if(e===a&&o===t)return We;const n=s=>V1(s,0,1,e,o);return s=>s===0||s===1?s:Xh(n(s),a,t)}const Yh=e=>a=>a<=.5?e(2*a)/2:(2-e(2*(1-a)))/2,Jh=e=>a=>1-e(1-a),Zh=es(.33,1.53,.69,.99),kd=Jh(Zh),ev=Yh(kd),av=e=>e>=1?1:(e*=2)<1?.5*kd(e):.5*(2-Math.pow(2,-10*(e-1))),jd=e=>1-Math.sin(Math.acos(e)),ov=Jh(jd),tv=Yh(jd),_1=es(.42,0,1,1),U1=es(0,0,.58,1),nv=es(.42,0,.58,1),B1=e=>Array.isArray(e)&&typeof e[0]!="number",sv=e=>Array.isArray(e)&&typeof e[0]=="number",H1={linear:We,easeIn:_1,easeInOut:nv,easeOut:U1,circIn:jd,circInOut:tv,circOut:ov,backIn:kd,backInOut:ev,backOut:Zh,anticipate:av},$1=e=>typeof e=="string",Tc=e=>{if(sv(e)){Sd(e.length===4);const[a,o,t,n]=e;return es(a,o,t,n)}else if($1(e))return H1[e];return e},qs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function W1(e){let a=new Set,o=new Set,t=!1,n=!1;const s=new WeakSet;let r={delta:0,timestamp:0,isProcessing:!1};function i(u){s.has(u)&&(l.schedule(u),e()),u(r)}const l={schedule:(u,d=!1,c=!1)=>{const v=c&&t?a:o;return d&&s.add(u),v.add(u),u},cancel:u=>{o.delete(u),s.delete(u)},process:u=>{if(r=u,t){n=!0;return}t=!0;const d=a;a=o,o=d,a.forEach(i),a.clear(),t=!1,n&&(n=!1,l.process(u))}};return l}const G1=40;function rv(e,a){let o=!1,t=!0;const n={delta:0,timestamp:0,isProcessing:!1},s=()=>o=!0,r=qs.reduce((b,E)=>(b[E]=W1(s),b),{}),{setup:i,read:l,resolveKeyframes:u,preUpdate:d,update:c,preRender:p,render:v,postRender:h}=r,y=()=>{const b=xo.useManualTiming,E=b?n.timestamp:performance.now();o=!1,b||(n.delta=t?1e3/60:Math.max(Math.min(E-n.timestamp,G1),1)),n.timestamp=E,n.isProcessing=!0,i.process(n),l.process(n),u.process(n),d.process(n),c.process(n),p.process(n),v.process(n),h.process(n),n.isProcessing=!1,o&&a&&(t=!1,e(y))},q=()=>{o=!0,t=!0,n.isProcessing||e(y)};return{schedule:qs.reduce((b,E)=>{const A=r[E];return b[E]=(C,z=!1,w=!1)=>(o||q(),A.schedule(C,z,w)),b},{}),cancel:b=>{for(let E=0;E<qs.length;E++)r[qs[E]].cancel(b)},state:n,steps:r}}const{schedule:U,cancel:Je,state:qe,steps:Mi}=rv(typeof requestAnimationFrame<"u"?requestAnimationFrame:We,!0);let Us;function Q1(){Us=void 0}const Oe={now:()=>(Us===void 0&&Oe.set(qe.isProcessing||xo.useManualTiming?qe.timestamp:performance.now()),Us),set:e=>{Us=e,queueMicrotask(Q1)}},iv=e=>a=>typeof a=="string"&&a.startsWith(e),lv=iv("--"),K1=iv("var(--"),Td=e=>K1(e)?X1.test(e.split("/*")[0].trim()):!1,X1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Nc(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Lt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fn={...Lt,transform:e=>qa(0,1,e)},Es={...Lt,default:1},fn=e=>Math.round(e*1e5)/1e5,Nd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Y1(e){return e==null}const J1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Md=(e,a)=>o=>!!(typeof o=="string"&&J1.test(o)&&o.startsWith(e)||a&&!Y1(o)&&Object.prototype.hasOwnProperty.call(o,a)),uv=(e,a,o)=>t=>{if(typeof t!="string")return t;const[n,s,r,i]=t.match(Nd);return{[e]:parseFloat(n),[a]:parseFloat(s),[o]:parseFloat(r),alpha:i!==void 0?parseFloat(i):1}},Z1=e=>qa(0,255,e),Oi={...Lt,transform:e=>Math.round(Z1(e))},Mo={test:Md("rgb","red"),parse:uv("red","green","blue"),transform:({red:e,green:a,blue:o,alpha:t=1})=>"rgba("+Oi.transform(e)+", "+Oi.transform(a)+", "+Oi.transform(o)+", "+fn(Fn.transform(t))+")"};function ey(e){let a="",o="",t="",n="";return e.length>5?(a=e.substring(1,3),o=e.substring(3,5),t=e.substring(5,7),n=e.substring(7,9)):(a=e.substring(1,2),o=e.substring(2,3),t=e.substring(3,4),n=e.substring(4,5),a+=a,o+=o,t+=t,n+=n),{red:parseInt(a,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:n?parseInt(n,16)/255:1}}const Zl={test:Md("#"),parse:ey,transform:Mo.transform},as=e=>({test:a=>typeof a=="string"&&a.endsWith(e)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${e}`}),La=as("deg"),Na=as("%"),R=as("px"),ay=as("vh"),oy=as("vw"),Mc={...Na,parse:e=>Na.parse(e)/100,transform:e=>Na.transform(e*100)},ct={test:Md("hsl","hue"),parse:uv("hue","saturation","lightness"),transform:({hue:e,saturation:a,lightness:o,alpha:t=1})=>"hsla("+Math.round(e)+", "+Na.transform(fn(a))+", "+Na.transform(fn(o))+", "+fn(Fn.transform(t))+")"},ce={test:e=>Mo.test(e)||Zl.test(e)||ct.test(e),parse:e=>Mo.test(e)?Mo.parse(e):ct.test(e)?ct.parse(e):Zl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Mo.transform(e):ct.transform(e),getAnimatableNone:e=>{const a=ce.parse(e);return a.alpha=0,ce.transform(a)}},ty=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ny(e){var a,o;return isNaN(e)&&typeof e=="string"&&(((a=e.match(Nd))==null?void 0:a.length)||0)+(((o=e.match(ty))==null?void 0:o.length)||0)>0}const dv="number",mv="color",sy="var",ry="var(",Oc="${}",iy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jt(e){const a=e.toString(),o=[],t={color:[],number:[],var:[]},n=[];let s=0;const i=a.replace(iy,l=>(ce.test(l)?(t.color.push(s),n.push(mv),o.push(ce.parse(l))):l.startsWith(ry)?(t.var.push(s),n.push(sy),o.push(l)):(t.number.push(s),n.push(dv),o.push(parseFloat(l))),++s,Oc)).split(Oc);return{values:o,split:i,indexes:t,types:n}}function ly(e){return jt(e).values}function cv({split:e,types:a}){const o=e.length;return t=>{let n="";for(let s=0;s<o;s++)if(n+=e[s],t[s]!==void 0){const r=a[s];r===dv?n+=fn(t[s]):r===mv?n+=ce.transform(t[s]):n+=t[s]}return n}}function uy(e){return cv(jt(e))}const dy=e=>typeof e=="number"?0:ce.test(e)?ce.getAnimatableNone(e):e,my=(e,a)=>typeof e=="number"?a!=null&&a.trim().endsWith("/")?e:0:dy(e);function cy(e){const a=jt(e);return cv(a)(a.values.map((t,n)=>my(t,a.split[n])))}const ba={test:ny,parse:ly,createTransformer:uy,getAnimatableNone:cy};function Ri(e,a,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(a-e)*6*o:o<1/2?a:o<2/3?e+(a-e)*(2/3-o)*6:e}function py({hue:e,saturation:a,lightness:o,alpha:t}){e/=360,a/=100,o/=100;let n=0,s=0,r=0;if(!a)n=s=r=o;else{const i=o<.5?o*(1+a):o+a-o*a,l=2*o-i;n=Ri(l,i,e+1/3),s=Ri(l,i,e),r=Ri(l,i,e-1/3)}return{red:Math.round(n*255),green:Math.round(s*255),blue:Math.round(r*255),alpha:t}}function qr(e,a){return o=>o>0?a:e}const Y=(e,a,o)=>e+(a-e)*o,Ii=(e,a,o)=>{const t=e*e,n=o*(a*a-t)+t;return n<0?0:Math.sqrt(n)},fy=[Zl,Mo,ct],gy=e=>fy.find(a=>a.test(e));function Rc(e){const a=gy(e);if(!a)return!1;let o=a.parse(e);return a===ct&&(o=py(o)),o}const Ic=(e,a)=>{const o=Rc(e),t=Rc(a);if(!o||!t)return qr(e,a);const n={...o};return s=>(n.red=Ii(o.red,t.red,s),n.green=Ii(o.green,t.green,s),n.blue=Ii(o.blue,t.blue,s),n.alpha=Y(o.alpha,t.alpha,s),Mo.transform(n))},eu=new Set(["none","hidden"]);function hy(e,a){return eu.has(e)?o=>o<=0?e:a:o=>o>=1?a:e}function vy(e,a){return o=>Y(e,a,o)}function Od(e){return typeof e=="number"?vy:typeof e=="string"?Td(e)?qr:ce.test(e)?Ic:yy:Array.isArray(e)?pv:typeof e=="object"?ce.test(e)?Ic:xy:qr}function pv(e,a){const o=[...e],t=o.length,n=e.map((s,r)=>Od(s)(s,a[r]));return s=>{for(let r=0;r<t;r++)o[r]=n[r](s);return o}}function xy(e,a){const o={...e,...a},t={};for(const n in o)e[n]!==void 0&&a[n]!==void 0&&(t[n]=Od(e[n])(e[n],a[n]));return n=>{for(const s in t)o[s]=t[s](n);return o}}function by(e,a){const o=[],t={color:0,var:0,number:0};for(let n=0;n<a.values.length;n++){const s=a.types[n],r=e.indexes[s][t[s]],i=e.values[r]??0;o[n]=i,t[s]++}return o}const yy=(e,a)=>{const o=ba.createTransformer(a),t=jt(e),n=jt(a);return t.indexes.var.length===n.indexes.var.length&&t.indexes.color.length===n.indexes.color.length&&t.indexes.number.length>=n.indexes.number.length?eu.has(e)&&!n.values.length||eu.has(a)&&!t.values.length?hy(e,a):Zn(pv(by(t,n),n.values),o):qr(e,a)};function fv(e,a,o){return typeof e=="number"&&typeof a=="number"&&typeof o=="number"?Y(e,a,o):Od(e)(e,a)}const qy=e=>{const a=({timestamp:o})=>e(o);return{start:(o=!0)=>U.update(a,o),stop:()=>Je(a),now:()=>qe.isProcessing?qe.timestamp:Oe.now()}},gv=(e,a,o=10)=>{let t="";const n=Math.max(Math.round(a/o),2);for(let s=0;s<n;s++)t+=Math.round(e(s/(n-1))*1e4)/1e4+", ";return`linear(${t.substring(0,t.length-2)})`},Er=2e4;function Rd(e){let a=0;const o=50;let t=e.next(a);for(;!t.done&&a<Er;)a+=o,t=e.next(a);return a>=Er?1/0:a}function Ey(e,a=100,o){const t=o({...e,keyframes:[0,a]}),n=Math.min(Rd(t),Er);return{type:"keyframes",ease:s=>t.next(n*s).value/a,duration:na(n)}}const ie={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function au(e,a){return e*Math.sqrt(1-a*a)}const Ay=12;function wy(e,a,o){let t=o;for(let n=1;n<Ay;n++)t=t-e(t)/a(t);return t}const Li=.001;function Cy({duration:e=ie.duration,bounce:a=ie.bounce,velocity:o=ie.velocity,mass:t=ie.mass}){let n,s,r=1-a;r=qa(ie.minDamping,ie.maxDamping,r),e=qa(ie.minDuration,ie.maxDuration,na(e)),r<1?(n=u=>{const d=u*r,c=d*e,p=d-o,v=au(u,r),h=Math.exp(-c);return Li-p/v*h},s=u=>{const c=u*r*e,p=c*o+o,v=Math.pow(r,2)*Math.pow(u,2)*e,h=Math.exp(-c),y=au(Math.pow(u,2),r);return(-n(u)+Li>0?-1:1)*((p-v)*h)/y}):(n=u=>{const d=Math.exp(-u*e),c=(u-o)*e+1;return-Li+d*c},s=u=>{const d=Math.exp(-u*e),c=(o-u)*(e*e);return d*c});const i=5/e,l=wy(n,s,i);if(e=Xe(e),isNaN(l))return{stiffness:ie.stiffness,damping:ie.damping,duration:e};{const u=Math.pow(l,2)*t;return{stiffness:u,damping:r*2*Math.sqrt(t*u),duration:e}}}const Sy=["duration","bounce"],zy=["stiffness","damping","mass"];function Lc(e,a){return a.some(o=>e[o]!==void 0)}function Py(e){let a={velocity:ie.velocity,stiffness:ie.stiffness,damping:ie.damping,mass:ie.mass,isResolvedFromDuration:!1,...e};if(!Lc(e,zy)&&Lc(e,Sy))if(a.velocity=0,e.visualDuration){const o=e.visualDuration,t=2*Math.PI/(o*1.2),n=t*t,s=2*qa(.05,1,1-(e.bounce||0))*Math.sqrt(n);a={...a,mass:ie.mass,stiffness:n,damping:s}}else{const o=Cy({...e,velocity:0});a={...a,...o,mass:ie.mass},a.isResolvedFromDuration=!0}return a}function Ar(e=ie.visualDuration,a=ie.bounce){const o=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:a}:e;let{restSpeed:t,restDelta:n}=o;const s=o.keyframes[0],r=o.keyframes[o.keyframes.length-1],i={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:c,velocity:p,isResolvedFromDuration:v}=Py({...o,velocity:-na(o.velocity||0)}),h=p||0,y=u/(2*Math.sqrt(l*d)),q=r-s,g=na(Math.sqrt(l/d)),f=Math.abs(q)<5;t||(t=f?ie.restSpeed.granular:ie.restSpeed.default),n||(n=f?ie.restDelta.granular:ie.restDelta.default);let b,E,A,C,z,w;if(y<1)A=au(g,y),C=(h+y*g*q)/A,b=S=>{const V=Math.exp(-y*g*S);return r-V*(C*Math.sin(A*S)+q*Math.cos(A*S))},z=y*g*C+q*A,w=y*g*q-C*A,E=S=>Math.exp(-y*g*S)*(z*Math.sin(A*S)+w*Math.cos(A*S));else if(y===1){b=V=>r-Math.exp(-g*V)*(q+(h+g*q)*V);const S=h+g*q;E=V=>Math.exp(-g*V)*(g*S*V-h)}else{const S=g*Math.sqrt(y*y-1);b=H=>{const J=Math.exp(-y*g*H),ue=Math.min(S*H,300);return r-J*((h+y*g*q)*Math.sinh(ue)+S*q*Math.cosh(ue))/S};const V=(h+y*g*q)/S,F=y*g*V-q*S,M=y*g*q-V*S;E=H=>{const J=Math.exp(-y*g*H),ue=Math.min(S*H,300);return J*(F*Math.sinh(ue)+M*Math.cosh(ue))}}const N={calculatedDuration:v&&c||null,velocity:S=>Xe(E(S)),next:S=>{if(!v&&y<1){const F=Math.exp(-y*g*S),M=Math.sin(A*S),H=Math.cos(A*S),J=r-F*(C*M+q*H),ue=Xe(F*(z*M+w*H));return i.done=Math.abs(ue)<=t&&Math.abs(r-J)<=n,i.value=i.done?r:J,i}const V=b(S);if(v)i.done=S>=c;else{const F=Xe(E(S));i.done=Math.abs(F)<=t&&Math.abs(r-V)<=n}return i.value=i.done?r:V,i},toString:()=>{const S=Math.min(Rd(N),Er),V=gv(F=>N.next(S*F).value,S,30);return S+"ms "+V},toTransition:()=>{}};return N}Ar.applyToOptions=e=>{const a=Ey(e,100,Ar);return e.ease=a.ease,e.duration=Xe(a.duration),e.type="keyframes",e};const ky=5;function hv(e,a,o){const t=Math.max(a-ky,0);return Pd(o-e(t),a-t)}function ou({keyframes:e,velocity:a=0,power:o=.8,timeConstant:t=325,bounceDamping:n=10,bounceStiffness:s=500,modifyTarget:r,min:i,max:l,restDelta:u=.5,restSpeed:d}){const c=e[0],p={done:!1,value:c},v=w=>i!==void 0&&w<i||l!==void 0&&w>l,h=w=>i===void 0?l:l===void 0||Math.abs(i-w)<Math.abs(l-w)?i:l;let y=o*a;const q=c+y,g=r===void 0?q:r(q);g!==q&&(y=g-c);const f=w=>-y*Math.exp(-w/t),b=w=>g+f(w),E=w=>{const N=f(w),S=b(w);p.done=Math.abs(N)<=u,p.value=p.done?g:S};let A,C;const z=w=>{v(p.value)&&(A=w,C=Ar({keyframes:[p.value,h(p.value)],velocity:hv(b,w,p.value),damping:n,stiffness:s,restDelta:u,restSpeed:d}))};return z(0),{calculatedDuration:null,next:w=>{let N=!1;return!C&&A===void 0&&(N=!0,E(w),z(w)),A!==void 0&&w>=A?C.next(w-A):(!N&&E(w),p)}}}function jy(e,a,o){const t=[],n=o||xo.mix||fv,s=e.length-1;for(let r=0;r<s;r++){let i=n(e[r],e[r+1]);if(a){const l=Array.isArray(a)?a[r]||We:a;i=Zn(l,i)}t.push(i)}return t}function Id(e,a,{clamp:o=!0,ease:t,mixer:n}={}){const s=e.length;if(Sd(s===a.length),s===1)return()=>a[0];if(s===2&&a[0]===a[1])return()=>a[1];const r=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),a=[...a].reverse());const i=jy(a,t,n),l=i.length,u=d=>{if(r&&d<e[0])return a[0];let c=0;if(l>1)for(;c<e.length-2&&!(d<e[c+1]);c++);const p=kt(e[c],e[c+1],d);return i[c](p)};return o?d=>u(qa(e[0],e[s-1],d)):u}function Ty(e,a){const o=e[e.length-1];for(let t=1;t<=a;t++){const n=kt(0,a,t);e.push(Y(o,1,n))}}function vv(e){const a=[0];return Ty(a,e.length-1),a}function Ny(e,a){return e.map(o=>o*a)}function My(e,a){return e.map(()=>a||nv).splice(0,e.length-1)}function gn({duration:e=300,keyframes:a,times:o,ease:t="easeInOut"}){const n=B1(t)?t.map(Tc):Tc(t),s={done:!1,value:a[0]},r=Ny(o&&o.length===a.length?o:vv(a),e),i=Id(r,a,{ease:Array.isArray(n)?n:My(a,n)});return{calculatedDuration:e,next:l=>(s.value=i(l),s.done=l>=e,s)}}const Oy=e=>e!==null;function Xr(e,{repeat:a,repeatType:o="loop"},t,n=1){const s=e.filter(Oy),i=n<0||a&&o!=="loop"&&a%2===1?0:s.length-1;return!i||t===void 0?s[i]:t}const Ry={decay:ou,inertia:ou,tween:gn,keyframes:gn,spring:Ar};function xv(e){typeof e.type=="string"&&(e.type=Ry[e.type])}class Ld{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,o){return this.finished.then(a,o)}}const Iy=e=>e/100;class Vn extends Ld{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var t,n;const{motionValue:o}=this.options;o&&o.updatedAt!==Oe.now()&&this.tick(Oe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(n=(t=this.options).onStop)==null||n.call(t))},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;xv(a);const{type:o=gn,repeat:t=0,repeatDelay:n=0,repeatType:s,velocity:r=0}=a;let{keyframes:i}=a;const l=o||gn;l!==gn&&typeof i[0]!="number"&&(this.mixKeyframes=Zn(Iy,fv(i[0],i[1])),i=[0,100]);const u=l({...a,keyframes:i});s==="mirror"&&(this.mirroredGenerator=l({...a,keyframes:[...i].reverse(),velocity:-r})),u.calculatedDuration===null&&(u.calculatedDuration=Rd(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+n,this.totalDuration=this.resolvedDuration*(t+1)-n,this.generator=u}updateTime(a){const o=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(a,o=!1){const{generator:t,totalDuration:n,mixKeyframes:s,mirroredGenerator:r,resolvedDuration:i,calculatedDuration:l}=this;if(this.startTime===null)return t.next(0);const{delay:u=0,keyframes:d,repeat:c,repeatType:p,repeatDelay:v,type:h,onUpdate:y,finalKeyframe:q}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-n/this.speed,this.startTime)),o?this.currentTime=a:this.updateTime(a);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),f=this.playbackSpeed>=0?g<0:g>n;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=n);let b=this.currentTime,E=t;if(c){const w=Math.min(this.currentTime,n)/i;let N=Math.floor(w),S=w%1;!S&&w>=1&&(S=1),S===1&&N--,N=Math.min(N,c+1),!!(N%2)&&(p==="reverse"?(S=1-S,v&&(S-=v/i)):p==="mirror"&&(E=r)),b=qa(0,1,S)*i}let A;f?(this.delayState.value=d[0],A=this.delayState):A=E.next(b),s&&!f&&(A.value=s(A.value));let{done:C}=A;!f&&l!==null&&(C=this.playbackSpeed>=0?this.currentTime>=n:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return z&&h!==ou&&(A.value=Xr(d,this.options,q,this.speed)),y&&y(A.value),z&&this.finish(),A}then(a,o){return this.finished.then(a,o)}get duration(){return na(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+na(a)}get time(){return na(this.currentTime)}set time(a){a=Xe(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=a,this.tick(a))}getGeneratorVelocity(){const a=this.currentTime;if(a<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(a);const o=this.generator.next(a).value;return hv(t=>this.generator.next(t).value,a,o)}get speed(){return this.playbackSpeed}set speed(a){const o=this.playbackSpeed!==a;o&&this.driver&&this.updateTime(Oe.now()),this.playbackSpeed=a,o&&this.driver&&(this.time=na(this.currentTime))}play(){var n,s;if(this.isStopped)return;const{driver:a=qy,startTime:o}=this.options;this.driver||(this.driver=a(r=>this.tick(r))),(s=(n=this.options).onPlay)==null||s.call(n);const t=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=t):this.holdTime!==null?this.startTime=t-this.holdTime:this.startTime||(this.startTime=o??t),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Oe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var a,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(a=this.options).onComplete)==null||o.call(a)}cancel(){var a,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(a=this.options).onCancel)==null||o.call(a)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),a.observe(this)}}function Ly(e){for(let a=1;a<e.length;a++)e[a]??(e[a]=e[a-1])}const Oo=e=>e*180/Math.PI,tu=e=>{const a=Oo(Math.atan2(e[1],e[0]));return nu(a)},Dy={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:tu,rotateZ:tu,skewX:e=>Oo(Math.atan(e[1])),skewY:e=>Oo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},nu=e=>(e=e%360,e<0&&(e+=360),e),Dc=tu,Fc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Vc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Fy={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Fc,scaleY:Vc,scale:e=>(Fc(e)+Vc(e))/2,rotateX:e=>nu(Oo(Math.atan2(e[6],e[5]))),rotateY:e=>nu(Oo(Math.atan2(-e[2],e[0]))),rotateZ:Dc,rotate:Dc,skewX:e=>Oo(Math.atan(e[4])),skewY:e=>Oo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function su(e){return e.includes("scale")?1:0}function ru(e,a){if(!e||e==="none")return su(a);const o=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let t,n;if(o)t=Fy,n=o;else{const i=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);t=Dy,n=i}if(!n)return su(a);const s=t[a],r=n[1].split(",").map(_y);return typeof s=="function"?s(r):r[s]}const Vy=(e,a)=>{const{transform:o="none"}=getComputedStyle(e);return ru(o,a)};function _y(e){return parseFloat(e.trim())}const Dt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ft=new Set([...Dt,"pathRotation"]),_c=e=>e===Lt||e===R,Uy=new Set(["x","y","z"]),By=Dt.filter(e=>!Uy.has(e));function Hy(e){const a=[];return By.forEach(o=>{const t=e.getValue(o);t!==void 0&&(a.push([o,t.get()]),t.set(o.startsWith("scale")?1:0))}),a}const no={width:({x:e},{paddingLeft:a="0",paddingRight:o="0",boxSizing:t})=>{const n=e.max-e.min;return t==="border-box"?n:n-parseFloat(a)-parseFloat(o)},height:({y:e},{paddingTop:a="0",paddingBottom:o="0",boxSizing:t})=>{const n=e.max-e.min;return t==="border-box"?n:n-parseFloat(a)-parseFloat(o)},top:(e,{top:a})=>parseFloat(a),left:(e,{left:a})=>parseFloat(a),bottom:({y:e},{top:a})=>parseFloat(a)+(e.max-e.min),right:({x:e},{left:a})=>parseFloat(a)+(e.max-e.min),x:(e,{transform:a})=>ru(a,"x"),y:(e,{transform:a})=>ru(a,"y")};no.translateX=no.x;no.translateY=no.y;const Lo=new Set;let iu=!1,lu=!1,uu=!1;function bv(){if(lu){const e=Array.from(Lo).filter(t=>t.needsMeasurement),a=new Set(e.map(t=>t.element)),o=new Map;a.forEach(t=>{const n=Hy(t);n.length&&(o.set(t,n),t.render())}),e.forEach(t=>t.measureInitialState()),a.forEach(t=>{t.render();const n=o.get(t);n&&n.forEach(([s,r])=>{var i;(i=t.getValue(s))==null||i.set(r)})}),e.forEach(t=>t.measureEndState()),e.forEach(t=>{t.suspendedScrollY!==void 0&&window.scrollTo(0,t.suspendedScrollY)})}lu=!1,iu=!1,Lo.forEach(e=>e.complete(uu)),Lo.clear()}function yv(){Lo.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(lu=!0)})}function $y(){uu=!0,yv(),bv(),uu=!1}class Dd{constructor(a,o,t,n,s,r=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=o,this.name=t,this.motionValue=n,this.element=s,this.isAsync=r}scheduleResolve(){this.state="scheduled",this.isAsync?(Lo.add(this),iu||(iu=!0,U.read(yv),U.resolveKeyframes(bv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:o,element:t,motionValue:n}=this;if(a[0]===null){const s=n==null?void 0:n.get(),r=a[a.length-1];if(s!==void 0)a[0]=s;else if(t&&o){const i=t.readValue(o,r);i!=null&&(a[0]=i)}a[0]===void 0&&(a[0]=r),n&&s===void 0&&n.set(a[0])}Ly(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Lo.delete(this)}cancel(){this.state==="scheduled"&&(Lo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Wy=e=>e.startsWith("--");function qv(e,a,o){Wy(a)?e.style.setProperty(a,o):e.style[a]=o}const Gy={};function Fd(e,a){const o=Kh(e);return()=>Gy[a]??o()}const Vd=Fd(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ev=Fd(()=>window.ViewTimeline!==void 0,"viewTimeline"),Av=Fd(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),on=([e,a,o,t])=>`cubic-bezier(${e}, ${a}, ${o}, ${t})`,Uc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:on([0,.65,.55,1]),circOut:on([.55,0,1,.45]),backIn:on([.31,.01,.66,-.59]),backOut:on([.33,1.53,.69,.99])};function wv(e,a){if(e)return typeof e=="function"?Av()?gv(e,a):"ease-out":sv(e)?on(e):Array.isArray(e)?e.map(o=>wv(o,a)||Uc.easeOut):Uc[e]}function Qy(e,a,o,{delay:t=0,duration:n=300,repeat:s=0,repeatType:r="loop",ease:i="easeOut",times:l}={},u=void 0){const d={[a]:o};l&&(d.offset=l);const c=wv(i,n);Array.isArray(c)&&(d.easing=c);const p={delay:t,duration:n,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:r==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(d,p)}function Cv(e){return typeof e=="function"&&"applyToOptions"in e}function Ky({type:e,...a}){return Cv(e)&&Av()?e.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class Sv extends Ld{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!a)return;const{element:o,name:t,keyframes:n,pseudoElement:s,allowFlatten:r=!1,finalKeyframe:i,onComplete:l}=a;this.isPseudoElement=!!s,this.allowFlatten=r,this.options=a,Sd(typeof a.type!="string");const u=Ky(a);this.animation=Qy(o,t,n,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=Xr(n,this.options,i,this.speed);this.updateMotionValue&&this.updateMotionValue(d),qv(o,t,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var a,o;(o=(a=this.animation).finish)==null||o.call(a)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,t,n;const a=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(a!=null&&a.isConnected)&&((n=(t=this.animation).commitStyles)==null||n.call(t))}get duration(){var o,t;const a=((t=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:t.call(o).duration)||0;return na(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+na(a)}get time(){return na(Number(this.animation.currentTime)||0)}set time(a){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xe(a),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(a){this.manualStartTime=this.animation.startTime=a}attachTimeline({timeline:a,rangeStart:o,rangeEnd:t,observe:n}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,a&&Vd()?(this.animation.timeline=a,o&&(this.animation.rangeStart=o),t&&(this.animation.rangeEnd=t),We):n(this)}}const zv={anticipate:av,backInOut:ev,circInOut:tv};function Xy(e){return e in zv}function Yy(e){typeof e.ease=="string"&&Xy(e.ease)&&(e.ease=zv[e.ease])}const Di=10;class Jy extends Sv{constructor(a){Yy(a),xv(a),super(a),a.startTime!==void 0&&a.autoplay!==!1&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:o,onUpdate:t,onComplete:n,element:s,...r}=this.options;if(!o)return;if(a!==void 0){o.set(a);return}const i=new Vn({...r,autoplay:!1}),l=Math.max(Di,Oe.now()-this.startTime),u=qa(0,Di,l-Di),d=i.sample(l).value,{name:c}=this.options;s&&c&&qv(s,c,d),o.setWithVelocity(i.sample(Math.max(0,l-u)).value,d,u),i.stop()}}const Bc=(e,a)=>a==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ba.test(e)||e==="0")&&!e.startsWith("url("));function Zy(e){const a=e[0];if(e.length===1)return!0;for(let o=0;o<e.length;o++)if(e[o]!==a)return!0}function eq(e,a,o,t){const n=e[0];if(n===null)return!1;if(a==="display"||a==="visibility")return!0;const s=e[e.length-1],r=Bc(n,a),i=Bc(s,a);return!r||!i?!1:Zy(e)||(o==="spring"||Cv(o))&&t}function du(e){e.duration=0,e.type="keyframes"}const Pv=new Set(["opacity","clipPath","filter","transform"]),aq=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function oq(e){for(let a=0;a<e.length;a++)if(typeof e[a]=="string"&&aq.test(e[a]))return!0;return!1}const tq=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),nq=Kh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sq(e){var c;const{motionValue:a,name:o,repeatDelay:t,repeatType:n,damping:s,type:r,keyframes:i}=e;if(!(((c=a==null?void 0:a.owner)==null?void 0:c.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:d}=a.owner.getProps();return nq()&&o&&(Pv.has(o)||tq.has(o)&&oq(i))&&(o!=="transform"||!d)&&!u&&!t&&n!=="mirror"&&s!==0&&r!=="inertia"}const rq=40;class iq extends Ld{constructor({autoplay:a=!0,delay:o=0,type:t="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:r="loop",keyframes:i,name:l,motionValue:u,element:d,...c}){var h;super(),this.stop=()=>{var y,q;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(q=this.keyframeResolver)==null||q.cancel()},this.createdAt=Oe.now();const p={autoplay:a,delay:o,type:t,repeat:n,repeatDelay:s,repeatType:r,name:l,motionValue:u,element:d,...c},v=(d==null?void 0:d.KeyframeResolver)||Dd;this.keyframeResolver=new v(i,(y,q,g)=>this.onKeyframesResolved(y,q,p,!g),l,u,d),(h=this.keyframeResolver)==null||h.scheduleResolve()}onKeyframesResolved(a,o,t,n){var g,f;this.keyframeResolver=void 0;const{name:s,type:r,velocity:i,delay:l,isHandoff:u,onUpdate:d}=t;this.resolvedAt=Oe.now();let c=!0;eq(a,s,r,i)||(c=!1,(xo.instantAnimations||!l)&&(d==null||d(Xr(a,t,o))),a[0]=a[a.length-1],du(t),t.repeat=0);const v={startTime:n?this.resolvedAt?this.resolvedAt-this.createdAt>rq?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...t,keyframes:a},h=c&&!u&&sq(v),y=(f=(g=v.motionValue)==null?void 0:g.owner)==null?void 0:f.current;let q;if(h)try{q=new Jy({...v,element:y})}catch{q=new Vn(v)}else q=new Vn(v);q.finished.then(()=>{this.notifyFinished()}).catch(We),this.pendingTimeline&&(this.stopTimeline=q.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=q}get finished(){return this._animation?this.animation.finished:this._finished}then(a,o){return this.finished.finally(a).then(()=>{})}get animation(){var a;return this._animation||((a=this.keyframeResolver)==null||a.resume(),$y()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var a;this._animation&&this.animation.cancel(),(a=this.keyframeResolver)==null||a.cancel()}}function kv(e,a,o,t=0,n=1){const s=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(a),r=e.size,i=(r-1)*t;return typeof o=="function"?o(s,r):n===1?s*t:i-s*t}const Hc=30,lq=e=>!isNaN(parseFloat(e)),hn={current:void 0};class uq{constructor(a,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=t=>{var s;const n=Oe.now();if(this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=o.owner}setCurrent(a){this.current=a,this.updatedAt=Oe.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=lq(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,o){this.events[a]||(this.events[a]=new zd);const t=this.events[a].add(o);return a==="change"?()=>{t(),U.read(()=>{this.events.change.getSize()||this.stop()})}:t}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,o){this.passiveEffect=a,this.stopPassiveEffect=o}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,o,t){this.set(o),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-t}jump(a,o=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var a;(a=this.events.change)==null||a.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return hn.current&&hn.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const a=Oe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>Hc)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Hc);return Pd(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(a){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=a(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var a,o;(a=this.dependents)==null||a.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ha(e,a){return new uq(e,a)}function jv(e,a){if(e!=null&&e.inherit&&a){const{inherit:o,...t}=e;return{...a,...t}}return e}function _d(e,a){const o=(e==null?void 0:e[a])??(e==null?void 0:e.default)??e;return o!==e?jv(o,e):o}const dq={type:"spring",stiffness:500,damping:25,restSpeed:10},mq=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),cq={type:"keyframes",duration:.8},pq={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fq=(e,{keyframes:a})=>a.length>2?cq:Ft.has(e)?e.startsWith("scale")?mq(a[1]):dq:pq,gq=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function hq(e){for(const a in e)if(!gq.has(a))return!0;return!1}const Ud=(e,a,o,t={},n,s)=>r=>{const i=_d(t,e)||{},l=i.delay||t.delay||0;let{elapsed:u=0}=t;u=u-Xe(l);const d={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:a.getVelocity(),...i,delay:-u,onUpdate:p=>{a.set(p),i.onUpdate&&i.onUpdate(p)},onComplete:()=>{r(),i.onComplete&&i.onComplete()},name:e,motionValue:a,element:s?void 0:n};hq(i)||Object.assign(d,fq(e,d)),d.duration&&(d.duration=Xe(d.duration)),d.repeatDelay&&(d.repeatDelay=Xe(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let c=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(du(d),d.delay===0&&(c=!0)),(xo.instantAnimations||xo.skipAnimations||n!=null&&n.shouldSkipAnimations||i.skipAnimations)&&(c=!0,du(d),d.delay=0),d.allowFlatten=!i.type&&!i.ease,c&&!s&&a.get()!==void 0){const p=Xr(d.keyframes,i);if(p!==void 0){U.update(()=>{d.onUpdate(p),d.onComplete()});return}}return i.isSync?new Vn(d):new iq(d)},vq=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xq(e){const a=vq.exec(e);if(!a)return[,];const[,o,t,n]=a;return[`--${o??t}`,n]}function Tv(e,a,o=1){const[t,n]=xq(e);if(!t)return;const s=window.getComputedStyle(a).getPropertyValue(t);if(s){const r=s.trim();return Wh(r)?parseFloat(r):r}return Td(n)?Tv(n,a,o+1):n}function $c(e){const a=[{},{}];return e==null||e.values.forEach((o,t)=>{a[0][t]=o.get(),a[1][t]=o.getVelocity()}),a}function Bd(e,a,o,t){if(typeof a=="function"){const[n,s]=$c(t);a=a(o!==void 0?o:e.custom,n,s)}if(typeof a=="string"&&(a=e.variants&&e.variants[a]),typeof a=="function"){const[n,s]=$c(t);a=a(o!==void 0?o:e.custom,n,s)}return a}function Do(e,a,o){const t=e.getProps();return Bd(t,a,o!==void 0?o:t.custom,e)}const Nv=new Set(["width","height","top","left","right","bottom",...Dt]),mu=e=>Array.isArray(e);function bq(e,a,o){e.hasValue(a)?e.getValue(a).set(o):e.addValue(a,ha(o))}function yq(e){return mu(e)?e[e.length-1]||0:e}function qq(e,a){const o=Do(e,a);let{transitionEnd:t={},transition:n={},...s}=o||{};s={...s,...t};for(const r in s){const i=yq(s[r]);bq(e,r,i)}}const ye=e=>!!(e&&e.getVelocity);function Eq(e){return!!(ye(e)&&e.add)}function cu(e,a){const o=e.getValue("willChange");if(Eq(o))return o.add(a);if(!o&&xo.WillChange){const t=new xo.WillChange("auto");e.addValue("willChange",t),t.add(a)}}function Hd(e){return e.replace(/([A-Z])/g,a=>`-${a.toLowerCase()}`)}const Aq="framerAppearId",Mv="data-"+Hd(Aq);function Ov(e){return e.props[Mv]}function wq({protectedKeys:e,needsAnimating:a},o){const t=e.hasOwnProperty(o)&&a[o]!==!0;return a[o]=!1,t}function Rv(e,a,{delay:o=0,transitionOverride:t,type:n}={}){let{transition:s,transitionEnd:r,...i}=a;const l=e.getDefaultTransition();s=s?jv(s,l):l;const u=s==null?void 0:s.reduceMotion,d=s==null?void 0:s.skipAnimations;t&&(s=t);const c=[],p=n&&e.animationState&&e.animationState.getState()[n],v=s==null?void 0:s.path;v&&v.animateVisualElement(e,i,s,o,c);for(const h in i){const y=e.getValue(h,e.latestValues[h]??null),q=i[h];if(q===void 0||p&&wq(p,h))continue;const g={delay:o,..._d(s||{},h)};d&&(g.skipAnimations=!0);const f=y.get();if(f!==void 0&&!y.isAnimating()&&!Array.isArray(q)&&q===f&&!g.velocity){U.update(()=>y.set(q));continue}let b=!1;if(window.MotionHandoffAnimation){const C=Ov(e);if(C){const z=window.MotionHandoffAnimation(C,h,U);z!==null&&(g.startTime=z,b=!0)}}cu(e,h);const E=u??e.shouldReduceMotion;y.start(Ud(h,y,q,E&&Nv.has(h)?{type:!1}:g,e,b));const A=y.animation;A&&c.push(A)}if(r){const h=()=>U.update(()=>{r&&qq(e,r)});c.length?Promise.all(c).then(h):h()}return c}function pu(e,a,o={}){var l;const t=Do(e,a,o.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:n=e.getDefaultTransition()||{}}=t||{};o.transitionOverride&&(n=o.transitionOverride);const s=t?()=>Promise.all(Rv(e,t,o)):()=>Promise.resolve(),r=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:c,staggerDirection:p}=n;return Cq(e,a,u,d,c,p,o)}:()=>Promise.resolve(),{when:i}=n;if(i){const[u,d]=i==="beforeChildren"?[s,r]:[r,s];return u().then(()=>d())}else return Promise.all([s(),r(o.delay)])}function Cq(e,a,o=0,t=0,n=0,s=1,r){const i=[];for(const l of e.variantChildren)l.notify("AnimationStart",a),i.push(pu(l,a,{...r,delay:o+(typeof t=="function"?0:t)+kv(e.variantChildren,l,t,n,s)}).then(()=>l.notify("AnimationComplete",a)));return Promise.all(i)}function Sq(e,a,o={}){e.notify("AnimationStart",a);let t;if(Array.isArray(a)){const n=a.map(s=>pu(e,s,o));t=Promise.all(n)}else if(typeof a=="string")t=pu(e,a,o);else{const n=typeof a=="function"?Do(e,a,o.custom):a;t=Promise.all(Rv(e,n,o))}return t.then(()=>{e.notify("AnimationComplete",a)})}const zq={test:e=>e==="auto",parse:e=>e},Iv=e=>a=>a.test(e),Lv=[Lt,R,Na,La,oy,ay,zq],Wc=e=>Lv.find(Iv(e));function Pq(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Qh(e):!0}const kq=new Set(["brightness","contrast","saturate","opacity"]);function jq(e){const[a,o]=e.slice(0,-1).split("(");if(a==="drop-shadow")return e;const[t]=o.match(Nd)||[];if(!t)return e;const n=o.replace(t,"");let s=kq.has(a)?1:0;return t!==o&&(s*=100),a+"("+s+n+")"}const Tq=/\b([a-z-]*)\(.*?\)/gu,fu={...ba,getAnimatableNone:e=>{const a=e.match(Tq);return a?a.map(jq).join(" "):e}},gu={...ba,getAnimatableNone:e=>{const a=ba.parse(e);return ba.createTransformer(e)(a.map(t=>typeof t=="number"?0:typeof t=="object"?{...t,alpha:1}:t))}},Gc={...Lt,transform:Math.round},Nq={rotate:La,pathRotation:La,rotateX:La,rotateY:La,rotateZ:La,scale:Es,scaleX:Es,scaleY:Es,scaleZ:Es,skew:La,skewX:La,skewY:La,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:Fn,originX:Mc,originY:Mc,originZ:R},wr={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,inset:R,insetBlock:R,insetBlockStart:R,insetBlockEnd:R,insetInline:R,insetInlineStart:R,insetInlineEnd:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,paddingBlock:R,paddingBlockStart:R,paddingBlockEnd:R,paddingInline:R,paddingInlineStart:R,paddingInlineEnd:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,marginBlock:R,marginBlockStart:R,marginBlockEnd:R,marginInline:R,marginInlineStart:R,marginInlineEnd:R,fontSize:R,backgroundPositionX:R,backgroundPositionY:R,...Nq,zIndex:Gc,fillOpacity:Fn,strokeOpacity:Fn,numOctaves:Gc},Mq={...wr,color:ce,backgroundColor:ce,outlineColor:ce,fill:ce,stroke:ce,borderColor:ce,borderTopColor:ce,borderRightColor:ce,borderBottomColor:ce,borderLeftColor:ce,filter:fu,WebkitFilter:fu,mask:gu,WebkitMask:gu},Dv=e=>Mq[e],Oq=new Set([fu,gu]);function Fv(e,a){let o=Dv(e);return Oq.has(o)||(o=ba),o.getAnimatableNone?o.getAnimatableNone(a):void 0}const Rq=new Set(["auto","none","0"]);function Iq(e,a,o){let t=0,n;for(;t<e.length&&!n;){const s=e[t];typeof s=="string"&&!Rq.has(s)&&jt(s).values.length&&(n=e[t]),t++}if(n&&o)for(const s of a)e[s]=Fv(o,n)}class Lq extends Dd{constructor(a,o,t,n,s){super(a,o,t,n,s,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:o,name:t}=this;if(!o||!o.current)return;super.readKeyframes();for(let d=0;d<a.length;d++){let c=a[d];if(typeof c=="string"&&(c=c.trim(),Td(c))){const p=Tv(c,o.current);p!==void 0&&(a[d]=p),d===a.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Nv.has(t)||a.length!==2)return;const[n,s]=a,r=Wc(n),i=Wc(s),l=Nc(n),u=Nc(s);if(l!==u&&no[t]){this.needsMeasurement=!0;return}if(r!==i)if(_c(r)&&_c(i))for(let d=0;d<a.length;d++){const c=a[d];typeof c=="string"&&(a[d]=parseFloat(c))}else no[t]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:o}=this,t=[];for(let n=0;n<a.length;n++)(a[n]===null||Pq(a[n]))&&t.push(n);t.length&&Iq(a,t,o)}measureInitialState(){const{element:a,unresolvedKeyframes:o,name:t}=this;if(!a||!a.current)return;t==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=no[t](a.measureViewportBox(),window.getComputedStyle(a.current)),o[0]=this.measuredOrigin;const n=o[o.length-1];n!==void 0&&a.getValue(t,n).jump(n,!1)}measureEndState(){var i;const{element:a,name:o,unresolvedKeyframes:t}=this;if(!a||!a.current)return;const n=a.getValue(o);n&&n.jump(this.measuredOrigin,!1);const s=t.length-1,r=t[s];t[s]=no[o](a.measureViewportBox(),window.getComputedStyle(a.current)),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),(i=this.removedTransforms)!=null&&i.length&&this.removedTransforms.forEach(([l,u])=>{a.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const $d=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Wd(e,a,o){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){const n=document.querySelectorAll(e);return n?Array.from(n):[]}return Array.from(e).filter(t=>t!=null)}const hu=(e,a)=>a&&typeof e=="number"?a.transform(e):e;function vn(e){return Gh(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Tt,cancel:Vv}=rv(queueMicrotask,!1),ca={x:!1,y:!1};function _v(){return ca.x||ca.y}function Dq(e){return e==="x"||e==="y"?ca[e]?null:(ca[e]=!0,()=>{ca[e]=!1}):ca.x||ca.y?null:(ca.x=ca.y=!0,()=>{ca.x=ca.y=!1})}function Uv(e,a){const o=Wd(e),t=new AbortController,n={passive:!0,...a,signal:t.signal};return[o,n,()=>t.abort()]}function Fq(e){return!(e.pointerType==="touch"||_v())}function Vq(e,a,o={}){const[t,n,s]=Uv(e,o);return t.forEach(r=>{let i=!1,l=!1,u;const d=()=>{r.removeEventListener("pointerleave",h)},c=q=>{u&&(u(q),u=void 0),d()},p=q=>{i=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),l&&(l=!1,c(q))},v=()=>{i=!0,window.addEventListener("pointerup",p,n),window.addEventListener("pointercancel",p,n)},h=q=>{if(q.pointerType!=="touch"){if(i){l=!0;return}c(q)}},y=q=>{if(!Fq(q))return;l=!1;const g=a(r,q);typeof g=="function"&&(u=g,r.addEventListener("pointerleave",h,n))};r.addEventListener("pointerenter",y,n),r.addEventListener("pointerdown",v,n)}),s}const Bv=(e,a)=>a?e===a?!0:Bv(e,a.parentElement):!1,Gd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,_q=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Uq(e){return _q.has(e.tagName)||e.isContentEditable===!0}const Bq=new Set(["INPUT","SELECT","TEXTAREA"]);function Hq(e){return Bq.has(e.tagName)||e.isContentEditable===!0}const Bs=new WeakSet;function Qc(e){return a=>{a.key==="Enter"&&e(a)}}function Fi(e,a){e.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const $q=(e,a)=>{const o=e.currentTarget;if(!o)return;const t=Qc(()=>{if(Bs.has(o))return;Fi(o,"down");const n=Qc(()=>{Fi(o,"up")}),s=()=>Fi(o,"cancel");o.addEventListener("keyup",n,a),o.addEventListener("blur",s,a)});o.addEventListener("keydown",t,a),o.addEventListener("blur",()=>o.removeEventListener("keydown",t),a)};function Kc(e){return Gd(e)&&!_v()}const Xc=new WeakSet;function Wq(e,a,o={}){const[t,n,s]=Uv(e,o),r=i=>{const l=i.currentTarget;if(!Kc(i)||Xc.has(i))return;Bs.add(l),o.stopPropagation&&Xc.add(i);const u=a(l,i),d={...n,capture:!0},c=(h,y)=>{window.removeEventListener("pointerup",p,d),window.removeEventListener("pointercancel",v,d),Bs.has(l)&&Bs.delete(l),Kc(h)&&typeof u=="function"&&u(h,{success:y})},p=h=>{c(h,l===window||l===document||o.useGlobalTarget||Bv(l,h.target))},v=h=>{c(h,!1)};window.addEventListener("pointerup",p,d),window.addEventListener("pointercancel",v,d)};return t.forEach(i=>{(o.useGlobalTarget?window:i).addEventListener("pointerdown",r,n),vn(i)&&(i.addEventListener("focus",u=>$q(u,n)),!Uq(i)&&!i.hasAttribute("tabindex")&&(i.tabIndex=0))}),s}function Qd(e){return Gh(e)&&"ownerSVGElement"in e}const Hs=new WeakMap;let Xa;const Hv=(e,a,o)=>(t,n)=>n&&n[0]?n[0][e+"Size"]:Qd(t)&&"getBBox"in t?t.getBBox()[a]:t[o],Gq=Hv("inline","width","offsetWidth"),Qq=Hv("block","height","offsetHeight");function Kq({target:e,borderBoxSize:a}){var o;(o=Hs.get(e))==null||o.forEach(t=>{t(e,{get width(){return Gq(e,a)},get height(){return Qq(e,a)}})})}function Xq(e){e.forEach(Kq)}function Yq(){typeof ResizeObserver>"u"||(Xa=new ResizeObserver(Xq))}function Jq(e,a){Xa||Yq();const o=Wd(e);return o.forEach(t=>{let n=Hs.get(t);n||(n=new Set,Hs.set(t,n)),n.add(a),Xa==null||Xa.observe(t)}),()=>{o.forEach(t=>{const n=Hs.get(t);n==null||n.delete(a),n!=null&&n.size||Xa==null||Xa.unobserve(t)})}}const $s=new Set;let pt;function Zq(){pt=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};$s.forEach(a=>a(e))},window.addEventListener("resize",pt)}function eE(e){return $s.add(e),pt||Zq(),()=>{$s.delete(e),!$s.size&&typeof pt=="function"&&(window.removeEventListener("resize",pt),pt=void 0)}}function vu(e,a){return typeof e=="function"?eE(e):Jq(e,a)}function $v(e,a){let o;const t=()=>{const{currentTime:n}=a,r=(n===null?0:n.value)/100;o!==r&&e(r),o=r};return U.preUpdate(t,!0),()=>Je(t)}function aE(e){return Qd(e)&&e.tagName==="svg"}function oE(...e){const a=!Array.isArray(e[0]),o=a?0:-1,t=e[0+o],n=e[1+o],s=e[2+o],r=e[3+o],i=Id(n,s,r);return a?i(t):i}function tE(e,a,o={}){const t=e.get();let n=null,s=t,r;const i=typeof t=="string"?t.replace(/[\d.-]/g,""):void 0,l=()=>{n&&(n.stop(),n=null),e.animation=void 0},u=()=>{const c=Yc(e.get()),p=Yc(s);if(c===p){l();return}const v=n?n.getGeneratorVelocity():e.getVelocity();l(),n=new Vn({keyframes:[c,p],velocity:v,type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:r})},d=()=>{var c;u(),e.animation=n??void 0,(c=e.events.animationStart)==null||c.notify(),n==null||n.then(()=>{var p;e.animation=void 0,(p=e.events.animationComplete)==null||p.notify()})};if(e.attach((c,p)=>{s=c,r=v=>p(Vi(v,i)),U.postRender(d)},l),ye(a)){let c=o.skipInitialAnimation===!0;const p=a.on("change",h=>{c?(c=!1,e.jump(Vi(h,i),!1)):e.set(Vi(h,i))}),v=e.on("destroy",p);return()=>{p(),v()}}return l}function Vi(e,a){return a?e+a:e}function Yc(e){return typeof e=="number"?e:parseFloat(e)}const nE=[...Lv,ce,ba],sE=e=>nE.find(Iv(e)),Jc=()=>({translate:0,scale:1,origin:0,originPoint:0}),ft=()=>({x:Jc(),y:Jc()}),Zc=()=>({min:0,max:0}),he=()=>({x:Zc(),y:Zc()}),rE=new WeakMap;function Yr(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function _n(e){return typeof e=="string"||Array.isArray(e)}const Kd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xd=["initial",...Kd];function Jr(e){return Yr(e.animate)||Xd.some(a=>_n(e[a]))}function Wv(e){return!!(Jr(e)||e.variants)}function iE(e,a,o){for(const t in a){const n=a[t],s=o[t];if(ye(n))e.addValue(t,n);else if(ye(s))e.addValue(t,ha(n,{owner:e}));else if(s!==n)if(e.hasValue(t)){const r=e.getValue(t);r.liveStyle===!0?r.jump(n):r.hasAnimated||r.set(n)}else{const r=e.getStaticValue(t);e.addValue(t,ha(r!==void 0?r:n,{owner:e}))}}for(const t in o)a[t]===void 0&&e.removeValue(t);return a}const Cr={current:null},Yd={current:!1},lE=typeof window<"u";function Gv(){if(Yd.current=!0,!!lE)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>Cr.current=e.matches;e.addEventListener("change",a),a()}else Cr.current=!1}const ep=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Sr={};function Qv(e){Sr=e}function uE(){return Sr}class dE{scrapeMotionValuesFromProps(a,o,t){return{}}constructor({parent:a,props:o,presenceContext:t,reducedMotionConfig:n,skipAnimations:s,blockInitialAnimation:r,visualState:i},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Oe.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,U.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=i;this.latestValues=u,this.baseTarget={...u},this.initialValues=o.initial?{...u}:{},this.renderState=d,this.parent=a,this.props=o,this.presenceContext=t,this.depth=a?a.depth+1:0,this.reducedMotionConfig=n,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!r,this.isControllingVariants=Jr(o),this.isVariantNode=Wv(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:c,...p}=this.scrapeMotionValuesFromProps(o,{},this);for(const v in p){const h=p[v];u[v]!==void 0&&ye(h)&&h.set(u[v])}}mount(a){var o,t;if(this.hasBeenMounted)for(const n in this.initialValues)(o=this.values.get(n))==null||o.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=a,rE.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Yd.current||Gv(),this.shouldReduceMotion=Cr.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var a;this.projection&&this.projection.unmount(),Je(this.notifyUpdate),Je(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(a=this.parent)==null||a.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const t=this.features[o];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,o){if(this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)(),o.accelerate&&Pv.has(a)&&this.current instanceof HTMLElement){const{factory:r,keyframes:i,times:l,ease:u,duration:d}=o.accelerate,c=new Sv({element:this.current,name:a,keyframes:i,times:l,ease:u,duration:Xe(d)}),p=r(c);this.valueSubscriptions.set(a,()=>{p(),c.cancel()});return}const t=Ft.has(a);t&&this.onBindTransform&&this.onBindTransform();const n=o.on("change",r=>{this.latestValues[a]=r,this.props.onUpdate&&U.preRender(this.notifyUpdate),t&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,a,o)),this.valueSubscriptions.set(a,()=>{n(),s&&s()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Sr){const o=Sr[a];if(!o)continue;const{isEnabled:t,Feature:n}=o;if(!this.features[a]&&n&&t(this.props)&&(this.features[a]=new n(this)),this.features[a]){const s=this.features[a];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):he()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,o){this.latestValues[a]=o}update(a,o){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let t=0;t<ep.length;t++){const n=ep[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);const s="on"+n,r=a[s];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=iE(this,this.scrapeMotionValuesFromProps(a,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(a),()=>o.variantChildren.delete(a)}addValue(a,o){const t=this.values.get(a);o!==t&&(t&&this.removeValue(a),this.bindToMotionValue(a,o),this.values.set(a,o),this.latestValues[a]=o.get())}removeValue(a){this.values.delete(a);const o=this.valueSubscriptions.get(a);o&&(o(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,o){if(this.props.values&&this.props.values[a])return this.props.values[a];let t=this.values.get(a);return t===void 0&&o!==void 0&&(t=ha(o===null?void 0:o,{owner:this}),this.addValue(a,t)),t}readValue(a,o){let t=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return t!=null&&(typeof t=="string"&&(Wh(t)||Qh(t))?t=parseFloat(t):!sE(t)&&ba.test(o)&&(t=Fv(a,o)),this.setBaseTarget(a,ye(t)?t.get():t)),ye(t)?t.get():t}setBaseTarget(a,o){this.baseTarget[a]=o}getBaseTarget(a){var s;const{initial:o}=this.props;let t;if(typeof o=="string"||typeof o=="object"){const r=Bd(this.props,o,(s=this.presenceContext)==null?void 0:s.custom);r&&(t=r[a])}if(o&&t!==void 0)return t;const n=this.getBaseTargetFromProps(this.props,a);return n!==void 0&&!ye(n)?n:this.initialValues[a]!==void 0&&t===void 0?void 0:this.baseTarget[a]}on(a,o){return this.events[a]||(this.events[a]=new zd),this.events[a].add(o)}notify(a,...o){this.events[a]&&this.events[a].notify(...o)}scheduleRenderMicrotask(){Tt.render(this.render)}}class Kv extends dE{constructor(){super(...arguments),this.KeyframeResolver=Lq}sortInstanceNodePosition(a,o){return a.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(a,o){const t=a.style;return t?t[o]:void 0}removeValueFromRenderState(a,{vars:o,style:t}){delete o[a],delete t[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;ye(a)&&(this.childSubscription=a.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Ao{constructor(a){this.isMounted=!1,this.node=a}update(){}}function Xv({top:e,left:a,right:o,bottom:t}){return{x:{min:a,max:o},y:{min:e,max:t}}}function mE({x:e,y:a}){return{top:a.min,right:e.max,bottom:a.max,left:e.min}}function cE(e,a){if(!a)return e;const o=a({x:e.left,y:e.top}),t=a({x:e.right,y:e.bottom});return{top:o.y,left:o.x,bottom:t.y,right:t.x}}function _i(e){return e===void 0||e===1}function xu({scale:e,scaleX:a,scaleY:o}){return!_i(e)||!_i(a)||!_i(o)}function ko(e){return xu(e)||Yv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Yv(e){return ap(e.x)||ap(e.y)}function ap(e){return e&&e!=="0%"}function zr(e,a,o){const t=e-o,n=a*t;return o+n}function op(e,a,o,t,n){return n!==void 0&&(e=zr(e,n,t)),zr(e,o,t)+a}function bu(e,a=0,o=1,t,n){e.min=op(e.min,a,o,t,n),e.max=op(e.max,a,o,t,n)}function Jv(e,{x:a,y:o}){bu(e.x,a.translate,a.scale,a.originPoint),bu(e.y,o.translate,o.scale,o.originPoint)}const tp=.999999999999,np=1.0000000000001;function pE(e,a,o,t=!1){var i;const n=o.length;if(!n)return;a.x=a.y=1;let s,r;for(let l=0;l<n;l++){s=o[l],r=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(t&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Pa(e.x,-s.scroll.offset.x),Pa(e.y,-s.scroll.offset.y)),r&&(a.x*=r.x.scale,a.y*=r.y.scale,Jv(e,r)),t&&ko(s.latestValues)&&Ws(e,s.latestValues,(i=s.layout)==null?void 0:i.layoutBox))}a.x<np&&a.x>tp&&(a.x=1),a.y<np&&a.y>tp&&(a.y=1)}function Pa(e,a){e.min+=a,e.max+=a}function sp(e,a,o,t,n=.5){const s=Y(e.min,e.max,n);bu(e,a,o,s,t)}function rp(e,a){return typeof e=="string"?parseFloat(e)/100*(a.max-a.min):e}function Ws(e,a,o){const t=o??e;sp(e.x,rp(a.x,t.x),a.scaleX,a.scale,a.originX),sp(e.y,rp(a.y,t.y),a.scaleY,a.scale,a.originY)}function Zv(e,a){return Xv(cE(e.getBoundingClientRect(),a))}function fE(e,a,o){const t=Zv(e,o),{scroll:n}=a;return n&&(Pa(t.x,n.offset.x),Pa(t.y,n.offset.y)),t}const gE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hE=Dt.length;function vE(e,a,o){let t="",n=!0;for(let r=0;r<hE;r++){const i=Dt[r],l=e[i];if(l===void 0)continue;let u=!0;if(typeof l=="number")u=l===(i.startsWith("scale")?1:0);else{const d=parseFloat(l);u=i.startsWith("scale")?d===1:d===0}if(!u||o){const d=hu(l,wr[i]);if(!u){n=!1;const c=gE[i]||i;t+=`${c}(${d}) `}o&&(a[i]=d)}}const s=e.pathRotation;return s&&(n=!1,t+=`rotate(${hu(s,wr.pathRotation)}) `),t=t.trim(),o?t=o(a,n?"":t):n&&(t="none"),t}function Jd(e,a,o){const{style:t,vars:n,transformOrigin:s}=e;let r=!1,i=!1;for(const l in a){const u=a[l];if(Ft.has(l)){r=!0;continue}else if(lv(l)){n[l]=u;continue}else{const d=hu(u,wr[l]);l.startsWith("origin")?(i=!0,s[l]=d):t[l]=d}}if(a.transform||(r||o?t.transform=vE(a,e.transform,o):t.transform&&(t.transform="none")),i){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;t.transformOrigin=`${l} ${u} ${d}`}}function e0(e,{style:a,vars:o},t,n){const s=e.style;let r;for(r in a)s[r]=a[r];n==null||n.applyProjectionStyles(s,t);for(r in o)s.setProperty(r,o[r])}function ip(e,a){return a.max===a.min?0:e/(a.max-a.min)*100}const Xt={correct:(e,a)=>{if(!a.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const o=ip(e,a.target.x),t=ip(e,a.target.y);return`${o}% ${t}%`}},xE={correct:(e,{treeScale:a,projectionDelta:o})=>{const t=e,n=ba.parse(e);if(n.length>5)return t;const s=ba.createTransformer(e),r=typeof n[0]!="number"?1:0,i=o.x.scale*a.x,l=o.y.scale*a.y;n[0+r]/=i,n[1+r]/=l;const u=Y(i,l,.5);return typeof n[2+r]=="number"&&(n[2+r]/=u),typeof n[3+r]=="number"&&(n[3+r]/=u),s(n)}},yu={borderRadius:{...Xt,applyTo:[...$d]},borderTopLeftRadius:Xt,borderTopRightRadius:Xt,borderBottomLeftRadius:Xt,borderBottomRightRadius:Xt,boxShadow:xE};function a0(e,{layout:a,layoutId:o}){return Ft.has(e)||e.startsWith("origin")||(a||o!==void 0)&&(!!yu[e]||e==="opacity")}function Zd(e,a,o){var r;const t=e.style,n=a==null?void 0:a.style,s={};if(!t)return s;for(const i in t)(ye(t[i])||n&&ye(n[i])||a0(i,e)||((r=o==null?void 0:o.getValue(i))==null?void 0:r.liveStyle)!==void 0)&&(s[i]=t[i]);return s}function bE(e){return window.getComputedStyle(e)}class yE extends Kv{constructor(){super(...arguments),this.type="html",this.renderInstance=e0}readValueFromInstance(a,o){var t;if(Ft.has(o))return(t=this.projection)!=null&&t.isProjecting?su(o):Vy(a,o);{const n=bE(a),s=(lv(o)?n.getPropertyValue(o):n[o])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(a,{transformPagePoint:o}){return Zv(a,o)}build(a,o,t){Jd(a,o,t.transformTemplate)}scrapeMotionValuesFromProps(a,o,t){return Zd(a,o,t)}}const qE={offset:"stroke-dashoffset",array:"stroke-dasharray"},EE={offset:"strokeDashoffset",array:"strokeDasharray"};function AE(e,a,o=1,t=0,n=!0){e.pathLength=1;const s=n?qE:EE;e[s.offset]=`${-t}`,e[s.array]=`${a} ${o}`}const wE=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function o0(e,{attrX:a,attrY:o,attrScale:t,pathLength:n,pathSpacing:s=1,pathOffset:r=0,...i},l,u,d){if(Jd(e,i,u),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:c,style:p}=e;c.transform&&(p.transform=c.transform,delete c.transform),(p.transform||c.transformOrigin)&&(p.transformOrigin=c.transformOrigin??"50% 50%",delete c.transformOrigin),p.transform&&(p.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete c.transformBox);for(const v of wE)c[v]!==void 0&&(p[v]=c[v],delete c[v]);a!==void 0&&(c.x=a),o!==void 0&&(c.y=o),t!==void 0&&(c.scale=t),n!==void 0&&AE(c,n,s,r,!1)}const t0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),n0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function CE(e,a,o,t){e0(e,a,void 0,t);for(const n in a.attrs)e.setAttribute(t0.has(n)?n:Hd(n),a.attrs[n])}function s0(e,a,o){const t=Zd(e,a,o);for(const n in e)if(ye(e[n])||ye(a[n])){const s=Dt.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;t[s]=e[n]}return t}class SE extends Kv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=he}getBaseTargetFromProps(a,o){return a[o]}readValueFromInstance(a,o){if(Ft.has(o)){const t=Dv(o);return t&&t.default||0}return o=t0.has(o)?o:Hd(o),a.getAttribute(o)}scrapeMotionValuesFromProps(a,o,t){return s0(a,o,t)}build(a,o,t){o0(a,o,this.isSVGTag,t.transformTemplate,t.style)}renderInstance(a,o,t,n){CE(a,o,t,n)}mount(a){this.isSVGTag=n0(a.tagName),super.mount(a)}}const zE=Xd.length;function r0(e){if(!e)return;if(!e.isControllingVariants){const o=e.parent?r0(e.parent)||{}:{};return e.props.initial!==void 0&&(o.initial=e.props.initial),o}const a={};for(let o=0;o<zE;o++){const t=Xd[o],n=e.props[t];(_n(n)||n===!1)&&(a[t]=n)}return a}function i0(e,a){if(!Array.isArray(a))return!1;const o=a.length;if(o!==e.length)return!1;for(let t=0;t<o;t++)if(a[t]!==e[t])return!1;return!0}const PE=[...Kd].reverse(),kE=Kd.length;function jE(e){return a=>Promise.all(a.map(({animation:o,options:t})=>Sq(e,o,t)))}function TE(e){let a=jE(e),o=lp(),t=!0,n=!1;const s=u=>(d,c)=>{var v;const p=Do(e,c,u==="exit"?(v=e.presenceContext)==null?void 0:v.custom:void 0);if(p){const{transition:h,transitionEnd:y,...q}=p;d={...d,...q,...y}}return d};function r(u){a=u(e)}function i(u){const{props:d}=e,c=r0(e.parent)||{},p=[],v=new Set;let h={},y=1/0;for(let g=0;g<kE;g++){const f=PE[g],b=o[f],E=d[f]!==void 0?d[f]:c[f],A=_n(E),C=f===u?b.isActive:null;C===!1&&(y=g);let z=E===c[f]&&E!==d[f]&&A;if(z&&(t||n)&&e.manuallyAnimateOnMount&&(z=!1),b.protectedKeys={...h},!b.isActive&&C===null||!E&&!b.prevProp||Yr(E)||typeof E=="boolean")continue;if(f==="exit"&&b.isActive&&C!==!0){b.prevResolvedValues&&(h={...h,...b.prevResolvedValues});continue}const w=NE(b.prevProp,E);let N=w||f===u&&b.isActive&&!z&&A||g>y&&A,S=!1;const V=Array.isArray(E)?E:[E];let F=V.reduce(s(f),{});C===!1&&(F={});const{prevResolvedValues:M={}}=b,H={...M,...F},J=k=>{N=!0,v.has(k)&&(S=!0,v.delete(k)),b.needsAnimating[k]=!0;const P=e.getValue(k);P&&(P.liveStyle=!1)};for(const k in H){const P=F[k],T=M[k];if(h.hasOwnProperty(k))continue;let I=!1;mu(P)&&mu(T)?I=!i0(P,T)||w:I=P!==T,I?P!=null?J(k):v.add(k):P!==void 0&&v.has(k)?J(k):b.protectedKeys[k]=!0}b.prevProp=E,b.prevResolvedValues=F,b.isActive&&(h={...h,...F}),(t||n)&&e.blockInitialAnimation&&(N=!1);const ue=z&&w;N&&(!ue||S)&&p.push(...V.map(k=>{const P={type:f};if(typeof k=="string"&&(t||n)&&!ue&&e.manuallyAnimateOnMount&&e.parent){const{parent:T}=e,I=Do(T,k);if(T.enteringChildren&&I){const{delayChildren:_}=I.transition||{};P.delay=kv(T.enteringChildren,e,_)}}return{animation:k,options:P}}))}if(v.size){const g={};if(typeof d.initial!="boolean"){const f=Do(e,Array.isArray(d.initial)?d.initial[0]:d.initial);f&&f.transition&&(g.transition=f.transition)}v.forEach(f=>{const b=e.getBaseTarget(f),E=e.getValue(f);E&&(E.liveStyle=!0),g[f]=b??null}),p.push({animation:g})}let q=!!p.length;return t&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(q=!1),t=!1,n=!1,q?a(p):Promise.resolve()}function l(u,d){var p;if(o[u].isActive===d)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(v=>{var h;return(h=v.animationState)==null?void 0:h.setActive(u,d)}),o[u].isActive=d;const c=i(u);for(const v in o)o[v].protectedKeys={};return c}return{animateChanges:i,setActive:l,setAnimateFunction:r,getState:()=>o,reset:()=>{o=lp(),n=!0}}}function NE(e,a){return typeof a=="string"?a!==e:Array.isArray(a)?!i0(a,e):!1}function Co(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lp(){return{animate:Co(!0),whileInView:Co(),whileHover:Co(),whileTap:Co(),whileDrag:Co(),whileFocus:Co(),exit:Co()}}function qu(e,a){e.min=a.min,e.max=a.max}function ma(e,a){qu(e.x,a.x),qu(e.y,a.y)}function up(e,a){e.translate=a.translate,e.scale=a.scale,e.originPoint=a.originPoint,e.origin=a.origin}const l0=1e-4,ME=1-l0,OE=1+l0,u0=.01,RE=0-u0,IE=0+u0;function Re(e){return e.max-e.min}function LE(e,a,o){return Math.abs(e-a)<=o}function dp(e,a,o,t=.5){e.origin=t,e.originPoint=Y(a.min,a.max,e.origin),e.scale=Re(o)/Re(a),e.translate=Y(o.min,o.max,e.origin)-e.originPoint,(e.scale>=ME&&e.scale<=OE||isNaN(e.scale))&&(e.scale=1),(e.translate>=RE&&e.translate<=IE||isNaN(e.translate))&&(e.translate=0)}function xn(e,a,o,t){dp(e.x,a.x,o.x,t?t.originX:void 0),dp(e.y,a.y,o.y,t?t.originY:void 0)}function mp(e,a,o,t=0){const n=t?Y(o.min,o.max,t):o.min;e.min=n+a.min,e.max=e.min+Re(a)}function DE(e,a,o,t){mp(e.x,a.x,o.x,t==null?void 0:t.x),mp(e.y,a.y,o.y,t==null?void 0:t.y)}function cp(e,a,o,t=0){const n=t?Y(o.min,o.max,t):o.min;e.min=a.min-n,e.max=e.min+Re(a)}function Pr(e,a,o,t){cp(e.x,a.x,o.x,t==null?void 0:t.x),cp(e.y,a.y,o.y,t==null?void 0:t.y)}function pp(e,a,o,t,n){return e-=a,e=zr(e,1/o,t),n!==void 0&&(e=zr(e,1/n,t)),e}function FE(e,a=0,o=1,t=.5,n,s=e,r=e){if(Na.test(a)&&(a=parseFloat(a),a=Y(r.min,r.max,a/100)-r.min),typeof a!="number")return;let i=Y(s.min,s.max,t);e===s&&(i-=a),e.min=pp(e.min,a,o,i,n),e.max=pp(e.max,a,o,i,n)}function fp(e,a,[o,t,n],s,r){FE(e,a[o],a[t],a[n],a.scale,s,r)}const VE=["x","scaleX","originX"],_E=["y","scaleY","originY"];function gp(e,a,o,t){fp(e.x,a,VE,o?o.x:void 0,t?t.x:void 0),fp(e.y,a,_E,o?o.y:void 0,t?t.y:void 0)}function hp(e){return e.translate===0&&e.scale===1}function d0(e){return hp(e.x)&&hp(e.y)}function vp(e,a){return e.min===a.min&&e.max===a.max}function UE(e,a){return vp(e.x,a.x)&&vp(e.y,a.y)}function xp(e,a){return Math.round(e.min)===Math.round(a.min)&&Math.round(e.max)===Math.round(a.max)}function m0(e,a){return xp(e.x,a.x)&&xp(e.y,a.y)}function bp(e){return Re(e.x)/Re(e.y)}function yp(e,a){return e.translate===a.translate&&e.scale===a.scale&&e.originPoint===a.originPoint}function za(e){return[e("x"),e("y")]}function BE(e,a,o){let t="";const n=e.x.translate/a.x,s=e.y.translate/a.y,r=(o==null?void 0:o.z)||0;if((n||s||r)&&(t=`translate3d(${n}px, ${s}px, ${r}px) `),(a.x!==1||a.y!==1)&&(t+=`scale(${1/a.x}, ${1/a.y}) `),o){const{transformPerspective:u,rotate:d,pathRotation:c,rotateX:p,rotateY:v,skewX:h,skewY:y}=o;u&&(t=`perspective(${u}px) ${t}`),d&&(t+=`rotate(${d}deg) `),c&&(t+=`rotate(${c}deg) `),p&&(t+=`rotateX(${p}deg) `),v&&(t+=`rotateY(${v}deg) `),h&&(t+=`skewX(${h}deg) `),y&&(t+=`skewY(${y}deg) `)}const i=e.x.scale*a.x,l=e.y.scale*a.y;return(i!==1||l!==1)&&(t+=`scale(${i}, ${l})`),t||"none"}const HE=$d.length,qp=e=>typeof e=="string"?parseFloat(e):e,Ep=e=>typeof e=="number"||R.test(e);function $E(e,a,o,t,n,s){n?(e.opacity=Y(0,o.opacity??1,WE(t)),e.opacityExit=Y(a.opacity??1,0,GE(t))):s&&(e.opacity=Y(a.opacity??1,o.opacity??1,t));for(let r=0;r<HE;r++){const i=$d[r];let l=Ap(a,i),u=Ap(o,i);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ep(l)===Ep(u)?(e[i]=Math.max(Y(qp(l),qp(u),t),0),(Na.test(u)||Na.test(l))&&(e[i]+="%")):e[i]=u}(a.rotate||o.rotate)&&(e.rotate=Y(a.rotate||0,o.rotate||0,t))}function Ap(e,a){return e[a]!==void 0?e[a]:e.borderRadius}const WE=c0(0,.5,ov),GE=c0(.5,.95,We);function c0(e,a,o){return t=>t<e?0:t>a?1:o(kt(e,a,t))}function QE(e,a,o){const t=ye(e)?e:ha(e);return t.start(Ud("",t,a,o)),t.animation}function Un(e,a,o,t={passive:!0}){return e.addEventListener(a,o,t),()=>e.removeEventListener(a,o,t)}const KE=(e,a)=>e.depth-a.depth;class XE{constructor(){this.children=[],this.isDirty=!1}add(a){Cd(this.children,a),this.isDirty=!0}remove(a){yr(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(KE),this.isDirty=!1,this.children.forEach(a)}}function YE(e,a){const o=Oe.now(),t=({timestamp:n})=>{const s=n-o;s>=a&&(Je(t),e(s-a))};return U.setup(t,!0),()=>Je(t)}function Gs(e){return ye(e)?e.get():e}class JE{constructor(){this.members=[]}add(a){Cd(this.members,a);for(let o=this.members.length-1;o>=0;o--){const t=this.members[o];if(t===a||t===this.lead||t===this.prevLead)continue;const n=t.instance;(!n||n.isConnected===!1)&&!t.snapshot&&(yr(this.members,t),t.unmount())}a.scheduleRender()}remove(a){if(yr(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(a){var o;for(let t=this.members.indexOf(a)-1;t>=0;t--){const n=this.members[t];if(n.isPresent!==!1&&((o=n.instance)==null?void 0:o.isConnected)!==!1)return this.promote(n),!0}return!1}promote(a,o){var n;const t=this.lead;if(a!==t&&(this.prevLead=t,this.lead=a,a.show(),t)){t.updateSnapshot(),a.scheduleRender();const{layoutDependency:s}=t.options,{layoutDependency:r}=a.options;(s===void 0||s!==r)&&(a.resumeFrom=t,o&&(t.preserveOpacity=!0),t.snapshot&&(a.snapshot=t.snapshot,a.snapshot.latestValues=t.animationValues||t.latestValues),(n=a.root)!=null&&n.isUpdating&&(a.isLayoutDirty=!0)),a.options.crossfade===!1&&t.hide()}}exitAnimationComplete(){this.members.forEach(a=>{var o,t,n,s,r;(t=(o=a.options).onExitComplete)==null||t.call(o),(r=(n=a.resumingFrom)==null?void 0:(s=n.options).onExitComplete)==null||r.call(s)})}scheduleRender(){this.members.forEach(a=>a.instance&&a.scheduleRender(!1))}removeLeadSnapshot(){var a;(a=this.lead)!=null&&a.snapshot&&(this.lead.snapshot=void 0)}}const Qs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ui=["","X","Y","Z"],ZE=1e3;let eA=0;function Bi(e,a,o,t){const{latestValues:n}=a;n[e]&&(o[e]=n[e],a.setStaticValue(e,0),t&&(t[e]=0))}function p0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:a}=e.options;if(!a)return;const o=Ov(a);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:n,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(o,"transform",U,!(n||s))}const{parent:t}=e;t&&!t.hasCheckedOptimisedAppear&&p0(t)}function f0({attachResizeListener:e,defaultParent:a,measureScroll:o,checkIsScrollRoot:t,resetTransform:n}){return class{constructor(r={},i=a==null?void 0:a()){this.id=eA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tA),this.nodes.forEach(uA),this.nodes.forEach(dA),this.nodes.forEach(nA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new XE)}addEventListener(r,i){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new zd),this.eventHandlers.get(r).add(i)}notifyListeners(r,...i){const l=this.eventHandlers.get(r);l&&l.notify(...i)}hasListeners(r){return this.eventHandlers.has(r)}mount(r){if(this.instance)return;this.isSVG=Qd(r)&&!aE(r),this.instance=r;const{layoutId:i,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||i)&&(this.isLayoutDirty=!0),e){let d,c=0;const p=()=>this.root.updateBlockedByResize=!1;U.read(()=>{c=window.innerWidth}),e(r,()=>{const v=window.innerWidth;v!==c&&(c=v,this.root.updateBlockedByResize=!0,d&&d(),d=YE(p,250),Qs.hasAnimatedSinceResize&&(Qs.hasAnimatedSinceResize=!1,this.nodes.forEach(Sp)))})}i&&this.root.registerSharedNode(i,this),this.options.animate!==!1&&u&&(i||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:c,hasRelativeLayoutChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const h=this.options.transition||u.getDefaultTransition()||gA,{onLayoutAnimationStart:y,onLayoutAnimationComplete:q}=u.getProps(),g=!this.targetLayout||!m0(this.targetLayout,v),f=!c&&p;if(this.options.layoutRoot||this.resumeFrom||f||c&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={..._d(h,"layout"),onPlay:y,onComplete:q};(u.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(d,f,b.path)}else c||Sp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Je(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mA),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&p0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const c=this.path[d];c.shouldResetTransform=!0,(typeof c.latestValues.x=="string"||typeof c.latestValues.y=="string")&&(c.isLayoutDirty=!0),c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:i,layout:l}=this.options;if(i===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(rA),this.nodes.forEach(wp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Cp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(iA),this.nodes.forEach(lA),this.nodes.forEach(aA),this.nodes.forEach(oA)):this.nodes.forEach(Cp),this.clearAllSnapshots();const i=Oe.now();qe.delta=qa(0,1e3/60,i-qe.timestamp),qe.timestamp=i,qe.isProcessing=!0,Mi.update.process(qe),Mi.preRender.process(qe),Mi.render.process(qe),qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tt.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sA),this.sharedNodes.forEach(cA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Re(this.snapshot.measuredBox.x)&&!Re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=he()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:i}=this.options;i&&i.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let i=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(i=!1),i&&this.instance){const l=t(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:l,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!n)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,i=this.projectionDelta&&!d0(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;r&&this.instance&&(i||ko(this.latestValues)||d)&&(n(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const i=this.measurePageBox();let l=this.removeElementScroll(i);return r&&(l=this.removeTransform(l)),hA(l),{animationId:this.root.animationId,measuredBox:i,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:r}=this.options;if(!r)return he();const i=r.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(vA))){const{scroll:d}=this.root;d&&(Pa(i.x,d.offset.x),Pa(i.y,d.offset.y))}return i}removeElementScroll(r){var l;const i=he();if(ma(i,r),(l=this.scroll)!=null&&l.wasRoot)return i;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:c,options:p}=d;d!==this.root&&c&&p.layoutScroll&&(c.wasRoot&&ma(i,r),Pa(i.x,c.offset.x),Pa(i.y,c.offset.y))}return i}applyTransform(r,i=!1,l){var d,c;const u=l||he();ma(u,r);for(let p=0;p<this.path.length;p++){const v=this.path[p];!i&&v.options.layoutScroll&&v.scroll&&v!==v.root&&(Pa(u.x,-v.scroll.offset.x),Pa(u.y,-v.scroll.offset.y)),ko(v.latestValues)&&Ws(u,v.latestValues,(d=v.layout)==null?void 0:d.layoutBox)}return ko(this.latestValues)&&Ws(u,this.latestValues,(c=this.layout)==null?void 0:c.layoutBox),u}removeTransform(r){var l;const i=he();ma(i,r);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!ko(d.latestValues))continue;let c;d.instance&&(xu(d.latestValues)&&d.updateSnapshot(),c=he(),ma(c,d.measurePageBox())),gp(i,d.latestValues,(l=d.snapshot)==null?void 0:l.layoutBox,c)}return ko(this.latestValues)&&gp(i,this.latestValues),i}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var v;const i=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=i.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=i.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=i.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==i;if(!(r||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:c}=this.options;if(!this.layout||!(d||c))return;this.resolvedRelativeTargetAt=qe.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=he(),this.targetWithTransforms=he()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),DE(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ma(this.target,this.layout.layoutBox),Jv(this.target,this.targetDelta)):ma(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||xu(this.parent.latestValues)||Yv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(r,i,l){this.relativeParent=r,this.linkedParentVersion=r.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),Pr(this.relativeTargetOrigin,i,l,this.options.layoutAnchor||void 0),ma(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var h;const r=this.getLead(),i=!!this.resumingFrom||this!==r;let l=!0;if((this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty)&&(l=!1),i&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===qe.timestamp&&(l=!1),l)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;ma(this.layoutCorrected,this.layout.layoutBox);const c=this.treeScale.x,p=this.treeScale.y;pE(this.layoutCorrected,this.treeScale,this.path,i),r.layout&&!r.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(r.target=r.layout.layoutBox,r.targetWithTransforms=he());const{target:v}=r;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(up(this.prevProjectionDelta.x,this.projectionDelta.x),up(this.prevProjectionDelta.y,this.projectionDelta.y)),xn(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==c||this.treeScale.y!==p||!yp(this.projectionDelta.x,this.prevProjectionDelta.x)||!yp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){var i;if((i=this.options.visualElement)==null||i.scheduleRender(),r){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ft(),this.projectionDelta=ft(),this.projectionDeltaWithTransform=ft()}setAnimationOrigin(r,i=!1,l){const u=this.snapshot,d=u?u.latestValues:{},c={...this.latestValues},p=ft();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!i;const v=he(),h=u?u.source:void 0,y=this.layout?this.layout.source:void 0,q=h!==y,g=this.getStack(),f=!g||g.members.length<=1,b=!!(q&&!f&&this.options.crossfade===!0&&!this.path.some(fA));this.animationProgress=0;let E;const A=l==null?void 0:l.interpolateProjection(r);this.mixTargetDelta=C=>{const z=C/1e3,w=A==null?void 0:A(z);w?(p.x.translate=w.x,p.x.scale=Y(r.x.scale,1,z),p.x.origin=r.x.origin,p.x.originPoint=r.x.originPoint,p.y.translate=w.y,p.y.scale=Y(r.y.scale,1,z),p.y.origin=r.y.origin,p.y.originPoint=r.y.originPoint):(zp(p.x,r.x,z),zp(p.y,r.y,z)),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pr(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),pA(this.relativeTarget,this.relativeTargetOrigin,v,z),E&&UE(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=he()),ma(E,this.relativeTarget)),q&&(this.animationValues=c,$E(c,d,this.latestValues,z,b,f)),w&&w.rotate!==void 0&&(this.animationValues||(this.animationValues=c),this.animationValues.pathRotation=w.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){var i,l,u;this.notifyListeners("animationStart"),(i=this.currentAnimation)==null||i.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Je(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{Qs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ha(0)),this.motionValue.jump(0,!1),this.currentAnimation=QE(this.motionValue,[0,1e3],{...r,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),r.onUpdate&&r.onUpdate(d)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ZE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:i,target:l,layout:u,latestValues:d}=r;if(!(!i||!l||!u)){if(this!==r&&this.layout&&u&&g0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||he();const c=Re(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+c;const p=Re(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+p}ma(i,l),Ws(i,d),xn(this.projectionDeltaWithTransform,this.layoutCorrected,i,d)}}registerSharedNode(r,i){this.sharedNodes.has(r)||this.sharedNodes.set(r,new JE),this.sharedNodes.get(r).add(i);const u=i.options.initialPromotionConfig;i.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(i):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var i;const{layoutId:r}=this.options;return r?((i=this.getStack())==null?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:r}=this.options;return r?(i=this.getStack())==null?void 0:i.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:i,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),i&&this.setOptions({transition:i})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let i=!1;const{latestValues:l}=r;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(i=!0),!i)return;const u={};l.z&&Bi("z",r,u,this.animationValues);for(let d=0;d<Ui.length;d++)Bi(`rotate${Ui[d]}`,r,u,this.animationValues),Bi(`skew${Ui[d]}`,r,u,this.animationValues);r.render();for(const d in u)r.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);r.scheduleRender()}applyProjectionStyles(r,i){if(!this.instance||this.isSVG)return;if(!this.isVisible){r.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,r.visibility="",r.opacity="",r.pointerEvents=Gs(i==null?void 0:i.pointerEvents)||"",r.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(r.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,r.pointerEvents=Gs(i==null?void 0:i.pointerEvents)||""),this.hasProjected&&!ko(this.latestValues)&&(r.transform=l?l({},""):"none",this.hasProjected=!1);return}r.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let c=BE(this.projectionDeltaWithTransform,this.treeScale,d);l&&(c=l(d,c)),r.transform=c;const{x:p,y:v}=this.projectionDelta;r.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,u.animationValues?r.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:r.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const h in yu){if(d[h]===void 0)continue;const{correct:y,applyTo:q,isCSSVariable:g}=yu[h],f=c==="none"?d[h]:y(d[h],u);if(q){const b=q.length;for(let E=0;E<b;E++)r[q[E]]=f}else g?this.options.visualElement.renderState.vars[h]=f:r[h]=f}this.options.layoutId&&(r.pointerEvents=u===this?Gs(i==null?void 0:i.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var i;return(i=r.currentAnimation)==null?void 0:i.stop()}),this.root.nodes.forEach(wp),this.root.sharedNodes.clear()}}}function aA(e){e.updateLayout()}function oA(e){var o;const a=((o=e.resumeFrom)==null?void 0:o.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=e.layout,{animationType:s}=e.options,r=a.source!==e.layout.source;if(s==="size")za(c=>{const p=r?a.measuredBox[c]:a.layoutBox[c],v=Re(p);p.min=t[c].min,p.max=p.min+v});else if(s==="x"||s==="y"){const c=s==="x"?"y":"x";qu(r?a.measuredBox[c]:a.layoutBox[c],t[c])}else g0(s,a.layoutBox,t)&&za(c=>{const p=r?a.measuredBox[c]:a.layoutBox[c],v=Re(t[c]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+v)});const i=ft();xn(i,t,a.layoutBox);const l=ft();r?xn(l,e.applyTransform(n,!0),a.measuredBox):xn(l,t,a.layoutBox);const u=!d0(i);let d=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:p,layout:v}=c;if(p&&v){const h=e.options.layoutAnchor||void 0,y=he();Pr(y,a.layoutBox,p.layoutBox,h);const q=he();Pr(q,t,v.layoutBox,h),m0(y,q)||(d=!0),c.options.layoutRoot&&(e.relativeTarget=q,e.relativeTargetOrigin=y,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:a,delta:l,layoutDelta:i,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function tA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function sA(e){e.clearSnapshot()}function wp(e){e.clearMeasurements()}function rA(e){e.isLayoutDirty=!0,e.updateLayout()}function Cp(e){e.isLayoutDirty=!1}function iA(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function lA(e){const{visualElement:a}=e.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),e.resetTransform()}function Sp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uA(e){e.resolveTargetDelta()}function dA(e){e.calcProjection()}function mA(e){e.resetSkewAndRotation()}function cA(e){e.removeLeadSnapshot()}function zp(e,a,o){e.translate=Y(a.translate,0,o),e.scale=Y(a.scale,1,o),e.origin=a.origin,e.originPoint=a.originPoint}function Pp(e,a,o,t){e.min=Y(a.min,o.min,t),e.max=Y(a.max,o.max,t)}function pA(e,a,o,t){Pp(e.x,a.x,o.x,t),Pp(e.y,a.y,o.y,t)}function fA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const gA={duration:.45,ease:[.4,0,.1,1]},kp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),jp=kp("applewebkit/")&&!kp("chrome/")?Math.round:We;function Tp(e){e.min=jp(e.min),e.max=jp(e.max)}function hA(e){Tp(e.x),Tp(e.y)}function g0(e,a,o){return e==="position"||e==="preserve-aspect"&&!LE(bp(a),bp(o),.2)}function vA(e){var a;return e!==e.root&&((a=e.scroll)==null?void 0:a.wasRoot)}const xA=f0({attachResizeListener:(e,a)=>Un(e,"resize",a),measureScroll:()=>{var e,a;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((a=document.body)==null?void 0:a.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Hi={current:void 0},h0=f0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Hi.current){const e=new xA({});e.mount(window),e.setOptions({layoutScroll:!0}),Hi.current=e}return Hi.current},resetTransform:(e,a)=>{e.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Vt=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Np(e,a){if(typeof e=="function")return e(a);e!=null&&(e.current=a)}function bA(...e){return a=>{let o=!1;const t=e.map(n=>{const s=Np(n,a);return!o&&typeof s=="function"&&(o=!0),s});if(o)return()=>{for(let n=0;n<t.length;n++){const s=t[n];typeof s=="function"?s():Np(e[n],null)}}}}function yA(...e){return x.useCallback(bA(...e),e)}class qA extends x.Component{getSnapshotBeforeUpdate(a){const o=this.props.childRef.current;if(vn(o)&&a.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const t=o.offsetParent,n=vn(t)&&t.offsetWidth||0,s=vn(t)&&t.offsetHeight||0,r=getComputedStyle(o),i=this.props.sizeRef.current;i.height=parseFloat(r.height),i.width=parseFloat(r.width),i.top=o.offsetTop,i.left=o.offsetLeft,i.right=n-i.width-i.left,i.bottom=s-i.height-i.top,i.direction=r.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function EA({children:e,isPresent:a,anchorX:o,anchorY:t,root:n,pop:s}){var p;const r=x.useId(),i=x.useRef(null),l=x.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=x.useContext(Vt),d=((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref),c=yA(i,d);return x.useInsertionEffect(()=>{const{width:v,height:h,top:y,left:q,right:g,bottom:f,direction:b}=l.current;if(a||s===!1||!i.current||!v||!h)return;const E=b==="rtl",A=o==="left"?E?`right: ${g}`:`left: ${q}`:E?`left: ${q}`:`right: ${g}`,C=t==="bottom"?`bottom: ${f}`:`top: ${y}`;i.current.dataset.motionPopId=r;const z=document.createElement("style");u&&(z.nonce=u);const w=n??document.head;return w.appendChild(z),z.sheet&&z.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${h}px !important;
            ${A}px !important;
            ${C}px !important;
          }
        `),()=>{var N;(N=i.current)==null||N.removeAttribute("data-motion-pop-id"),w.contains(z)&&w.removeChild(z)}},[a]),m.jsx(qA,{isPresent:a,childRef:i,sizeRef:l,pop:s,children:s===!1?e:x.cloneElement(e,{ref:c})})}const AA=({children:e,initial:a,isPresent:o,onExitComplete:t,custom:n,presenceAffectsLayout:s,mode:r,anchorX:i,anchorY:l,root:u})=>{const d=vo(wA),c=x.useId(),p=x.useRef(o),v=x.useRef(t);Jn(()=>{p.current=o,v.current=t});let h=!0,y=x.useMemo(()=>(h=!1,{id:c,initial:a,isPresent:o,custom:n,onExitComplete:q=>{d.set(q,!0);for(const g of d.values())if(!g)return;t&&t()},register:q=>(d.set(q,!1),()=>{var g;d.delete(q),!p.current&&!d.size&&((g=v.current)==null||g.call(v))})}),[o,d,t]);return s&&h&&(y={...y}),x.useMemo(()=>{d.forEach((q,g)=>d.set(g,!1))},[o]),x.useEffect(()=>{!o&&!d.size&&t&&t()},[o]),e=m.jsx(EA,{pop:r==="popLayout",isPresent:o,anchorX:i,anchorY:l,root:u,children:e}),m.jsx(Kr.Provider,{value:y,children:e})};function wA(){return new Map}function v0(e=!0){const a=x.useContext(Kr);if(a===null)return[!0,null];const{isPresent:o,onExitComplete:t,register:n}=a,s=x.useId();x.useEffect(()=>{if(e)return n(s)},[e]);const r=x.useCallback(()=>e&&t&&t(s),[s,t,e]);return!o&&t?[!1,r]:[!0]}const As=e=>e.key||"";function Mp(e){const a=[];return x.Children.forEach(e,o=>{x.isValidElement(o)&&a.push(o)}),a}const em=({children:e,custom:a,initial:o=!0,onExitComplete:t,presenceAffectsLayout:n=!0,mode:s="sync",propagate:r=!1,anchorX:i="left",anchorY:l="top",root:u})=>{const[d,c]=v0(r),p=x.useMemo(()=>Mp(e),[e]),v=r&&!d?[]:p.map(As),h=x.useRef(!0),y=x.useRef(p),q=vo(()=>new Map),g=x.useRef(new Set),[f,b]=x.useState(p),[E,A]=x.useState(p);Jn(()=>{h.current=!1,y.current=p;for(let w=0;w<E.length;w++){const N=As(E[w]);v.includes(N)?(q.delete(N),g.current.delete(N)):q.get(N)!==!0&&q.set(N,!1)}},[E,v.length,v.join("-")]);const C=[];if(p!==f){let w=[...p];for(let N=0;N<E.length;N++){const S=E[N],V=As(S);v.includes(V)||(w.splice(N,0,S),C.push(S))}return s==="wait"&&C.length&&(w=C),A(Mp(w)),b(p),null}const{forceRender:z}=x.useContext(wd);return m.jsx(m.Fragment,{children:E.map(w=>{const N=As(w),S=r&&!d?!1:p===E||v.includes(N),V=()=>{if(g.current.has(N))return;if(q.has(N))g.current.add(N),q.set(N,!0);else return;let F=!0;q.forEach(M=>{M||(F=!1)}),F&&(z==null||z(),A(y.current),r&&(c==null||c()),t&&t())};return m.jsx(AA,{isPresent:S,initial:!h.current||o?void 0:!1,custom:a,presenceAffectsLayout:n,mode:s,root:u,onExitComplete:S?void 0:V,anchorX:i,anchorY:l,children:w},N)})})},x0=x.createContext({strict:!1}),Op={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Rp=!1;function CA(){if(Rp)return;const e={};for(const a in Op)e[a]={isEnabled:o=>Op[a].some(t=>!!o[t])};Qv(e),Rp=!0}function b0(){return CA(),uE()}function SA(e){const a=b0();for(const o in e)a[o]={...a[o],...e[o]};Qv(a)}const zA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function kr(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||zA.has(e)}let y0=e=>!kr(e);function PA(e){typeof e=="function"&&(y0=a=>a.startsWith("on")?!kr(a):e(a))}try{PA(require("@emotion/is-prop-valid").default)}catch{}function kA(e,a,o){const t={};for(const n in e)n==="values"&&typeof e.values=="object"||ye(e[n])||(y0(n)||o===!0&&kr(n)||!a&&!kr(n)||e.draggable&&n.startsWith("onDrag"))&&(t[n]=e[n]);return t}const Zr=x.createContext({});function jA(e,a){if(Jr(e)){const{initial:o,animate:t}=e;return{initial:o===!1||_n(o)?o:void 0,animate:_n(t)?t:void 0}}return e.inherit!==!1?a:{}}function TA(e){const{initial:a,animate:o}=jA(e,x.useContext(Zr));return x.useMemo(()=>({initial:a,animate:o}),[Ip(a),Ip(o)])}function Ip(e){return Array.isArray(e)?e.join(" "):e}const am=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function q0(e,a,o){for(const t in a)!ye(a[t])&&!a0(t,o)&&(e[t]=a[t])}function NA({transformTemplate:e},a){return x.useMemo(()=>{const o=am();return Jd(o,a,e),Object.assign({},o.vars,o.style)},[a])}function MA(e,a){const o=e.style||{},t={};return q0(t,o,e),Object.assign(t,NA(e,a)),t}function OA(e,a){const o={},t=MA(e,a);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,t.userSelect=t.WebkitUserSelect=t.WebkitTouchCallout="none",t.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=t,o}const E0=()=>({...am(),attrs:{}});function RA(e,a,o,t){const n=x.useMemo(()=>{const s=E0();return o0(s,a,n0(t),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[a]);if(e.style){const s={};q0(s,e.style,e),n.style={...s,...n.style}}return n}const IA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function om(e){return typeof e!="string"||e.includes("-")?!1:!!(IA.indexOf(e)>-1||/[A-Z]/u.test(e))}function LA(e,a,o,{latestValues:t},n,s=!1,r){const l=(r??om(e)?RA:OA)(a,t,n,e),u=kA(a,typeof e=="string",s),d=e!==x.Fragment?{...u,...l,ref:o}:{},{children:c}=a,p=x.useMemo(()=>ye(c)?c.get():c,[c]);return x.createElement(e,{...d,children:p})}function DA({scrapeMotionValuesFromProps:e,createRenderState:a},o,t,n){return{latestValues:FA(o,t,n,e),renderState:a()}}function FA(e,a,o,t){const n={},s=t(e,{});for(const p in s)n[p]=Gs(s[p]);let{initial:r,animate:i}=e;const l=Jr(e),u=Wv(e);a&&u&&!l&&e.inherit!==!1&&(r===void 0&&(r=a.initial),i===void 0&&(i=a.animate));let d=o?o.initial===!1:!1;d=d||r===!1;const c=d?i:r;if(c&&typeof c!="boolean"&&!Yr(c)){const p=Array.isArray(c)?c:[c];for(let v=0;v<p.length;v++){const h=Bd(e,p[v]);if(h){const{transitionEnd:y,transition:q,...g}=h;for(const f in g){let b=g[f];if(Array.isArray(b)){const E=d?b.length-1:0;b=b[E]}b!==null&&(n[f]=b)}for(const f in y)n[f]=y[f]}}}return n}const A0=e=>(a,o)=>{const t=x.useContext(Zr),n=x.useContext(Kr),s=()=>DA(e,a,t,n);return o?s():vo(s)},VA=A0({scrapeMotionValuesFromProps:Zd,createRenderState:am}),_A=A0({scrapeMotionValuesFromProps:s0,createRenderState:E0}),UA=Symbol.for("motionComponentSymbol");function BA(e,a,o){const t=x.useRef(o);x.useInsertionEffect(()=>{t.current=o});const n=x.useRef(null);return x.useCallback(s=>{var i;s&&((i=e.onMount)==null||i.call(e,s)),a&&(s?a.mount(s):a.unmount());const r=t.current;if(typeof r=="function")if(s){const l=r(s);typeof l=="function"&&(n.current=l)}else n.current?(n.current(),n.current=null):r(s);else r&&(r.current=s)},[a])}const w0=x.createContext({});function Zo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function HA(e,a,o,t,n,s){var b,E;const{visualElement:r}=x.useContext(Zr),i=x.useContext(x0),l=x.useContext(Kr),u=x.useContext(Vt),d=u.reducedMotion,c=u.skipAnimations,p=x.useRef(null),v=x.useRef(!1);t=t||i.renderer,!p.current&&t&&(p.current=t(e,{visualState:a,parent:r,props:o,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:d,skipAnimations:c,isSVG:s}),v.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const h=p.current,y=x.useContext(w0);h&&!h.projection&&n&&(h.type==="html"||h.type==="svg")&&$A(p.current,o,n,y);const q=x.useRef(!1);x.useInsertionEffect(()=>{h&&q.current&&h.update(o,l)});const g=o[Mv],f=x.useRef(!!g&&typeof window<"u"&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,g))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,g)));return Jn(()=>{v.current=!0,h&&(q.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),f.current&&h.animationState&&h.animationState.animateChanges())}),x.useEffect(()=>{h&&(!f.current&&h.animationState&&h.animationState.animateChanges(),f.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,g)}),f.current=!1),h.enteringChildren=void 0)}),h}function $A(e,a,o,t){const{layoutId:n,layout:s,drag:r,dragConstraints:i,layoutScroll:l,layoutRoot:u,layoutAnchor:d,layoutCrossfade:c}=a;e.projection=new o(e.latestValues,a["data-framer-portal-id"]?void 0:C0(e.parent)),e.projection.setOptions({layoutId:n,layout:s,alwaysMeasureLayout:!!r||i&&Zo(i),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:t,crossfade:c,layoutScroll:l,layoutRoot:u,layoutAnchor:d})}function C0(e){if(e)return e.options.allowProjection!==!1?e.projection:C0(e.parent)}function $i(e,{forwardMotionProps:a=!1,type:o}={},t,n){t&&SA(t);const s=o?o==="svg":om(e),r=s?_A:VA;function i(u,d){let c;const p={...x.useContext(Vt),...u,layoutId:WA(u)},{isStatic:v}=p,h=TA(u),y=r(u,v);if(!v&&typeof window<"u"){GA();const q=QA(p);c=q.MeasureLayout,h.visualElement=HA(e,y,p,n,q.ProjectionNode,s)}return m.jsxs(Zr.Provider,{value:h,children:[c&&h.visualElement?m.jsx(c,{visualElement:h.visualElement,...p}):null,LA(e,u,BA(y,h.visualElement,d),y,v,a,s)]})}i.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=x.forwardRef(i);return l[UA]=e,l}function WA({layoutId:e}){const a=x.useContext(wd).id;return a&&e!==void 0?a+"-"+e:e}function GA(e,a){x.useContext(x0).strict}function QA(e){const a=b0(),{drag:o,layout:t}=a;if(!o&&!t)return{};const n={...o,...t};return{MeasureLayout:o!=null&&o.isEnabled(e)||t!=null&&t.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}function KA(e,a){if(typeof Proxy>"u")return $i;const o=new Map,t=(s,r)=>$i(s,r,e,a),n=(s,r)=>t(s,r);return new Proxy(n,{get:(s,r)=>r==="create"?t:(o.has(r)||o.set(r,$i(r,void 0,e,a)),o.get(r))})}const XA=(e,a)=>a.isSVG??om(e)?new SE(a):new yE(a,{allowProjection:e!==x.Fragment});class YA extends Ao{constructor(a){super(a),a.animationState||(a.animationState=TE(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();Yr(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:o}=this.node.prevProps||{};a!==o&&this.updateAnimationControlsSubscription()}unmount(){var a;this.node.animationState.reset(),(a=this.unmountControls)==null||a.call(this)}}let JA=0;class ZA extends Ao{constructor(){super(...arguments),this.id=JA++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:o}=this.node.presenceContext,{isPresent:t}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===t)return;if(a&&t===!1){if(this.isExitComplete){const{initial:r,custom:i}=this.node.getProps();if(typeof r=="string"||typeof r=="object"&&r!==null&&!Array.isArray(r)){const l=Do(this.node,r,i);if(l){const{transition:u,transitionEnd:d,...c}=l;for(const p in c)(s=this.node.getValue(p))==null||s.jump(c[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const n=this.node.animationState.setActive("exit",!a);o&&!a&&n.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:a,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const ew={animation:{Feature:YA},exit:{Feature:ZA}};function os(e){return{point:{x:e.pageX,y:e.pageY}}}const aw=e=>a=>Gd(a)&&e(a,os(a));function bn(e,a,o,t){return Un(e,a,aw(o),t)}const S0=({current:e})=>e?e.ownerDocument.defaultView:null,Lp=(e,a)=>Math.abs(e-a);function ow(e,a){const o=Lp(e.x,a.x),t=Lp(e.y,a.y);return Math.sqrt(o**2+t**2)}const Dp=new Set(["auto","scroll"]);class z0{constructor(a,o,{transformPagePoint:t,contextWindow:n=window,dragSnapToOrigin:s=!1,distanceThreshold:r=3,element:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=h=>{this.handleScroll(h.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ws(this.lastRawMoveEventInfo,this.transformPagePoint));const h=Wi(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,q=ow(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!q)return;const{point:g}=h,{timestamp:f}=qe;this.history.push({...g,timestamp:f});const{onStart:b,onMove:E}=this.handlers;y||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,h)},this.handlePointerMove=(h,y)=>{this.lastMoveEvent=h,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=ws(y,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(h,y)=>{this.end();const{onEnd:q,onSessionEnd:g,resumeAnimation:f}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&f&&f(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Wi(h.type==="pointercancel"?this.lastMoveEventInfo:ws(y,this.transformPagePoint),this.history);this.startEvent&&q&&q(h,b),g&&g(h,b)},!Gd(a))return;this.dragSnapToOrigin=s,this.handlers=o,this.transformPagePoint=t,this.distanceThreshold=r,this.contextWindow=n||window;const l=os(a),u=ws(l,this.transformPagePoint),{point:d}=u,{timestamp:c}=qe;this.history=[{...d,timestamp:c}];const{onSessionStart:p}=o;p&&p(a,Wi(u,this.history));const v={passive:!0,capture:!0};this.removeListeners=Zn(bn(this.contextWindow,"pointermove",this.handlePointerMove,v),bn(this.contextWindow,"pointerup",this.handlePointerUp,v),bn(this.contextWindow,"pointercancel",this.handlePointerUp,v)),i&&this.startScrollTracking(i)}startScrollTracking(a){let o=a.parentElement;for(;o;){const t=getComputedStyle(o);(Dp.has(t.overflowX)||Dp.has(t.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(a){const o=this.scrollPositions.get(a);if(!o)return;const t=a===window,n=t?{x:window.scrollX,y:window.scrollY}:{x:a.scrollLeft,y:a.scrollTop},s={x:n.x-o.x,y:n.y-o.y};s.x===0&&s.y===0||(t?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(a,n),U.update(this.updatePoint,!0))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Je(this.updatePoint)}}function ws(e,a){return a?{point:a(e.point)}:e}function Fp(e,a){return{x:e.x-a.x,y:e.y-a.y}}function Wi({point:e},a){return{point:e,delta:Fp(e,P0(a)),offset:Fp(e,tw(a)),velocity:nw(a,.1)}}function tw(e){return e[0]}function P0(e){return e[e.length-1]}function nw(e,a){if(e.length<2)return{x:0,y:0};let o=e.length-1,t=null;const n=P0(e);for(;o>=0&&(t=e[o],!(n.timestamp-t.timestamp>Xe(a)));)o--;if(!t)return{x:0,y:0};t===e[0]&&e.length>2&&n.timestamp-t.timestamp>Xe(a)*2&&(t=e[1]);const s=na(n.timestamp-t.timestamp);if(s===0)return{x:0,y:0};const r={x:(n.x-t.x)/s,y:(n.y-t.y)/s};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function sw(e,{min:a,max:o},t){return a!==void 0&&e<a?e=t?Y(a,e,t.min):Math.max(e,a):o!==void 0&&e>o&&(e=t?Y(o,e,t.max):Math.min(e,o)),e}function Vp(e,a,o){return{min:a!==void 0?e.min+a:void 0,max:o!==void 0?e.max+o-(e.max-e.min):void 0}}function rw(e,{top:a,left:o,bottom:t,right:n}){return{x:Vp(e.x,o,n),y:Vp(e.y,a,t)}}function _p(e,a){let o=a.min-e.min,t=a.max-e.max;return a.max-a.min<e.max-e.min&&([o,t]=[t,o]),{min:o,max:t}}function iw(e,a){return{x:_p(e.x,a.x),y:_p(e.y,a.y)}}function lw(e,a){let o=.5;const t=Re(e),n=Re(a);return n>t?o=kt(a.min,a.max-t,e.min):t>n&&(o=kt(e.min,e.max-n,a.min)),qa(0,1,o)}function uw(e,a){const o={};return a.min!==void 0&&(o.min=a.min-e.min),a.max!==void 0&&(o.max=a.max-e.min),o}const Eu=.35;function dw(e=Eu){return e===!1?e=0:e===!0&&(e=Eu),{x:Up(e,"left","right"),y:Up(e,"top","bottom")}}function Up(e,a,o){return{min:Bp(e,a),max:Bp(e,o)}}function Bp(e,a){return typeof e=="number"?e:e[a]||0}const mw=new WeakMap;class cw{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=he(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:o=!1,distanceThreshold:t}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const s=c=>{o&&this.snapToCursor(os(c).point),this.stopAnimation()},r=(c,p)=>{const{drag:v,dragPropagation:h,onDragStart:y}=this.getProps();if(v&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Dq(v),!this.openDragLock))return;this.latestPointerEvent=c,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),za(g=>{let f=this.getAxisMotionValue(g).get()||0;if(Na.test(f)){const{projection:b}=this.visualElement;if(b&&b.layout){const E=b.layout.layoutBox[g];E&&(f=Re(E)*(parseFloat(f)/100))}}this.originPoint[g]=f}),y&&U.update(()=>y(c,p),!1,!0),cu(this.visualElement,"transform");const{animationState:q}=this.visualElement;q&&q.setActive("whileDrag",!0)},i=(c,p)=>{this.latestPointerEvent=c,this.latestPanInfo=p;const{dragPropagation:v,dragDirectionLock:h,onDirectionLock:y,onDrag:q}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=p;if(h&&this.currentDirection===null){this.currentDirection=fw(g),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",p.point,g),this.updateAxis("y",p.point,g),this.visualElement.render(),q&&U.update(()=>q(c,p),!1,!0)},l=(c,p)=>{this.latestPointerEvent=c,this.latestPanInfo=p,this.stop(c,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:c}=this.getProps();(c||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new z0(a,{onSessionStart:s,onStart:r,onMove:i,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:t,contextWindow:S0(this.visualElement),element:this.visualElement.current})}stop(a,o){const t=a||this.latestPointerEvent,n=o||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!n||!t)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&U.postRender(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:a,animationState:o}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:t}=this.getProps();!t&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(a,o,t){const{drag:n}=this.getProps();if(!t||!Cs(a,n,this.currentDirection))return;const s=this.getAxisMotionValue(a);let r=this.originPoint[a]+t[a];this.constraints&&this.constraints[a]&&(r=sw(r,this.constraints[a],this.elastic[a])),s.set(r)}resolveConstraints(){var s;const{dragConstraints:a,dragElastic:o}=this.getProps(),t=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,n=this.constraints;a&&Zo(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&t?this.constraints=rw(t.layoutBox,a):this.constraints=!1,this.elastic=dw(o),n!==this.constraints&&!Zo(a)&&t&&this.constraints&&!this.hasMutatedConstraints&&za(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=uw(t.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:o}=this.getProps();if(!a||!Zo(a))return!1;const t=a.current,{projection:n}=this.visualElement;if(!n||!n.layout)return!1;n.root&&(n.root.scroll=void 0,n.root.updateScroll());const s=fE(t,n.root,this.visualElement.getTransformPagePoint());let r=iw(n.layout.layoutBox,s);if(o){const i=o(mE(r));this.hasMutatedConstraints=!!i,i&&(r=Xv(i))}return r}startAnimation(a){const{drag:o,dragMomentum:t,dragElastic:n,dragTransition:s,dragSnapToOrigin:r,onDragTransitionEnd:i}=this.getProps(),l=this.constraints||{},u=za(d=>{if(!Cs(d,o,this.currentDirection))return;let c=l&&l[d]||{};(r===!0||r===d)&&(c={min:0,max:0});const p=n?200:1e6,v=n?40:1e7,h={type:"inertia",velocity:t?a[d]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...c};return this.startAxisValueAnimation(d,h)});return Promise.all(u).then(i)}startAxisValueAnimation(a,o){const t=this.getAxisMotionValue(a);return cu(this.visualElement,a),t.start(Ud(a,t,0,o,this.visualElement,!1))}stopAnimation(){za(a=>this.getAxisMotionValue(a).stop())}getAxisMotionValue(a){const o=`_drag${a.toUpperCase()}`,n=this.visualElement.getProps()[o];return n||this.visualElement.getValue(a,this.visualElement.latestValues[a]??0)}snapToCursor(a){za(o=>{const{drag:t}=this.getProps();if(!Cs(o,t,this.currentDirection))return;const{projection:n}=this.visualElement,s=this.getAxisMotionValue(o);if(n&&n.layout){const{min:r,max:i}=n.layout.layoutBox[o],l=s.get()||0;s.set(a[o]-Y(r,i,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:o}=this.getProps(),{projection:t}=this.visualElement;if(!Zo(o)||!t||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};za(r=>{const i=this.getAxisMotionValue(r);if(i&&this.constraints!==!1){const l=i.get();n[r]=lw({min:l,max:l},this.constraints[r])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",t.root&&t.root.updateScroll(),t.updateLayout(),this.constraints=!1,this.resolveConstraints(),za(r=>{if(!Cs(r,a,null))return;const i=this.getAxisMotionValue(r),{min:l,max:u}=this.constraints[r];i.set(Y(l,u,n[r]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;mw.set(this.visualElement,this);const a=this.visualElement.current,o=bn(a,"pointerdown",u=>{const{drag:d,dragListener:c=!0}=this.getProps(),p=u.target,v=p!==a&&Hq(p);d&&c&&!v&&this.start(u)});let t;const n=()=>{const{dragConstraints:u}=this.getProps();Zo(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),t||(t=pw(a,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,r=s.addEventListener("measure",n);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),U.read(n);const i=Un(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(za(c=>{const p=this.getAxisMotionValue(c);p&&(this.originPoint[c]+=u[c].translate,p.set(p.get()+u[c].translate))}),this.visualElement.render())});return()=>{i(),o(),r(),l&&l(),t&&t()}}getProps(){const a=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:t=!1,dragPropagation:n=!1,dragConstraints:s=!1,dragElastic:r=Eu,dragMomentum:i=!0}=a;return{...a,drag:o,dragDirectionLock:t,dragPropagation:n,dragConstraints:s,dragElastic:r,dragMomentum:i}}}function Hp(e){let a=!0;return()=>{if(a){a=!1;return}e()}}function pw(e,a,o){const t=vu(e,Hp(o)),n=vu(a,Hp(o));return()=>{t(),n()}}function Cs(e,a,o){return(a===!0||a===e)&&(o===null||o===e)}function fw(e,a=10){let o=null;return Math.abs(e.y)>a?o="y":Math.abs(e.x)>a&&(o="x"),o}class gw extends Ao{constructor(a){super(a),this.removeGroupControls=We,this.removeListeners=We,this.controls=new cw(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We}update(){const{dragControls:a}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};a!==o&&(this.removeGroupControls(),a&&(this.removeGroupControls=a.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Gi=e=>(a,o)=>{e&&U.update(()=>e(a,o),!1,!0)};class hw extends Ao{constructor(){super(...arguments),this.removePointerDownListener=We}onPointerDown(a){this.session=new z0(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:S0(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:o,onPan:t,onPanEnd:n}=this.node.getProps();return{onSessionStart:Gi(a),onStart:Gi(o),onMove:Gi(t),onEnd:(s,r)=>{delete this.session,n&&U.postRender(()=>n(s,r))}}}mount(){this.removePointerDownListener=bn(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Qi=!1;class vw extends x.Component{componentDidMount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:t,layoutId:n}=this.props,{projection:s}=a;s&&(o.group&&o.group.add(s),t&&t.register&&n&&t.register(s),Qi&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qs.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:o,visualElement:t,drag:n,isPresent:s}=this.props,{projection:r}=t;return r&&(r.isPresent=s,a.layoutDependency!==o&&r.setOptions({...r.options,layoutDependency:o}),Qi=!0,n||a.layoutDependency!==o||o===void 0||a.isPresent!==s?r.willUpdate():this.safeToRemove(),a.isPresent!==s&&(s?r.promote():r.relegate()||U.postRender(()=>{const i=r.getStack();(!i||!i.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:a,layoutAnchor:o}=this.props,{projection:t}=a;t&&(t.options.layoutAnchor=o,t.root.didUpdate(),Tt.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:t}=this.props,{projection:n}=a;Qi=!0,n&&(n.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(n),t&&t.deregister&&t.deregister(n))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function k0(e){const[a,o]=v0(),t=x.useContext(wd);return m.jsx(vw,{...e,layoutGroup:t,switchLayoutGroup:x.useContext(w0),isPresent:a,safeToRemove:o})}const xw={pan:{Feature:hw},drag:{Feature:gw,ProjectionNode:h0,MeasureLayout:k0}};function $p(e,a,o){const{props:t}=e;e.animationState&&t.whileHover&&e.animationState.setActive("whileHover",o==="Start");const n="onHover"+o,s=t[n];s&&U.postRender(()=>s(a,os(a)))}class bw extends Ao{mount(){const{current:a}=this.node;a&&(this.unmount=Vq(a,(o,t)=>($p(this.node,t,"Start"),n=>$p(this.node,n,"End"))))}unmount(){}}class yw extends Ao{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zn(Un(this.node.current,"focus",()=>this.onFocus()),Un(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Wp(e,a,o){const{props:t}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&t.whileTap&&e.animationState.setActive("whileTap",o==="Start");const n="onTap"+(o==="End"?"":o),s=t[n];s&&U.postRender(()=>s(a,os(a)))}class qw extends Ao{mount(){const{current:a}=this.node;if(!a)return;const{globalTapTarget:o,propagate:t}=this.node.props;this.unmount=Wq(a,(n,s)=>(Wp(this.node,s,"Start"),(r,{success:i})=>Wp(this.node,r,i?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(t==null?void 0:t.tap)===!1})}unmount(){}}const Au=new WeakMap,Ki=new WeakMap,Ew=e=>{const a=Au.get(e.target);a&&a(e)},Aw=e=>{e.forEach(Ew)};function ww({root:e,...a}){const o=e||document;Ki.has(o)||Ki.set(o,{});const t=Ki.get(o),n=JSON.stringify(a);return t[n]||(t[n]=new IntersectionObserver(Aw,{root:e,...a})),t[n]}function Cw(e,a,o){const t=ww(a);return Au.set(e,o),t.observe(e),()=>{Au.delete(e),t.unobserve(e)}}const Sw={some:0,all:1};class zw extends Ao{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:a={}}=this.node.getProps(),{root:o,margin:t,amount:n="some",once:s}=a,r={root:o?o.current:void 0,rootMargin:t,threshold:typeof n=="number"?n:Sw[n]},i=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:c,onViewportLeave:p}=this.node.getProps(),v=d?c:p;v&&v(u)};this.stopObserver=Cw(this.node.current,r,i)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:o}=this.node;["amount","margin","root"].some(Pw(a,o))&&this.startObserver()}unmount(){var a;(a=this.stopObserver)==null||a.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Pw({viewport:e={}},{viewport:a={}}={}){return o=>e[o]!==a[o]}const kw={inView:{Feature:zw},tap:{Feature:qw},focus:{Feature:yw},hover:{Feature:bw}},jw={layout:{ProjectionNode:h0,MeasureLayout:k0}},Tw={...ew,...kw,...xw,...jw},G=KA(Tw,XA);function Nw(e,a,o){x.useInsertionEffect(()=>e.on(a,o),[e,a,o])}function jr(e){return typeof window>"u"?!1:e?Ev():Vd()}const Mw=50,Gp=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Ow=()=>({time:0,x:Gp(),y:Gp()}),Rw={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Qp(e,a,o,t){const n=o[a],{length:s,position:r}=Rw[a],i=n.current,l=o.time;n.current=Math.abs(e[`scroll${r}`]),n.scrollLength=e[`scroll${s}`]-e[`client${s}`],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=kt(0,n.scrollLength,n.current);const u=t-l;n.velocity=u>Mw?0:Pd(n.current-i,u)}function Iw(e,a,o){Qp(e,"x",a,o),Qp(e,"y",a,o),a.time=o}function Lw(e,a){const o={x:0,y:0};let t=e;for(;t&&t!==a;)if(vn(t))o.x+=t.offsetLeft,o.y+=t.offsetTop,t=t.offsetParent;else if(t.tagName==="svg"){const n=t.getBoundingClientRect();t=t.parentElement;const s=t.getBoundingClientRect();o.x+=n.left-s.left,o.y+=n.top-s.top}else if(t instanceof SVGGraphicsElement){const{x:n,y:s}=t.getBBox();o.x+=n,o.y+=s;let r=null,i=t.parentNode;for(;!r;)i.tagName==="svg"&&(r=i),i=t.parentNode;t=r}else break;return o}const wu={start:0,center:.5,end:1};function Kp(e,a,o=0){let t=0;if(e in wu&&(e=wu[e]),typeof e=="string"){const n=parseFloat(e);e.endsWith("px")?t=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?t=n/100*document.documentElement.clientWidth:e.endsWith("vh")?t=n/100*document.documentElement.clientHeight:e=n}return typeof e=="number"&&(t=a*e),o+t}const Dw=[0,0];function Fw(e,a,o,t){let n=Array.isArray(e)?e:Dw,s=0,r=0;return typeof e=="number"?n=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,wu[e]?e:"0"]),s=Kp(n[0],o,t),r=Kp(n[1],a),s-r}const tn={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Vw={x:0,y:0};function _w(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Uw(e,a,o){const{offset:t=tn.All}=o,{target:n=e,axis:s="y"}=o,r=s==="y"?"height":"width",i=n!==e?Lw(n,e):Vw,l=n===e?{width:e.scrollWidth,height:e.scrollHeight}:_w(n),u={width:e.clientWidth,height:e.clientHeight};a[s].offset.length=0;let d=!a[s].interpolate;const c=t.length;for(let p=0;p<c;p++){const v=Fw(t[p],u[r],l[r],i[s]);!d&&v!==a[s].interpolatorOffsets[p]&&(d=!0),a[s].offset[p]=v}d&&(a[s].interpolate=Id(a[s].offset,vv(t),{clamp:!1}),a[s].interpolatorOffsets=[...a[s].offset]),a[s].progress=qa(0,1,a[s].interpolate(a[s].current))}function Bw(e,a=e,o){if(o.x.targetOffset=0,o.y.targetOffset=0,a!==e){let t=a;for(;t&&t!==e;)o.x.targetOffset+=t.offsetLeft,o.y.targetOffset+=t.offsetTop,t=t.offsetParent}o.x.targetLength=a===e?a.scrollWidth:a.clientWidth,o.y.targetLength=a===e?a.scrollHeight:a.clientHeight,o.x.containerLength=e.clientWidth,o.y.containerLength=e.clientHeight}function Hw(e,a,o,t={}){return{measure:n=>{Bw(e,t.target,o),Iw(e,o,n),(t.offset||t.target)&&Uw(e,o,t)},notify:()=>a(o)}}const Yo=new WeakMap,Xp=new WeakMap,Xi=new WeakMap,Yp=new WeakMap,Ss=new WeakMap,Jp=e=>e===document.scrollingElement?window:e;function j0(e,{container:a=document.scrollingElement,trackContentSize:o=!1,...t}={}){if(!a)return We;let n=Xi.get(a);n||(n=new Set,Xi.set(a,n));const s=Ow(),r=Hw(a,e,s,t);if(n.add(r),!Yo.has(a)){const l=()=>{for(const p of n)p.measure(qe.timestamp);U.preUpdate(u)},u=()=>{for(const p of n)p.notify()},d=()=>U.read(l);Yo.set(a,d);const c=Jp(a);window.addEventListener("resize",d),a!==document.documentElement&&Xp.set(a,vu(a,d)),c.addEventListener("scroll",d),d()}if(o&&!Ss.has(a)){const l=Yo.get(a),u={width:a.scrollWidth,height:a.scrollHeight};Yp.set(a,u);const d=()=>{const p=a.scrollWidth,v=a.scrollHeight;(u.width!==p||u.height!==v)&&(l(),u.width=p,u.height=v)},c=U.read(d,!0);Ss.set(a,c)}const i=Yo.get(a);return U.read(i,!1,!0),()=>{var c;Je(i);const l=Xi.get(a);if(!l||(l.delete(r),l.size))return;const u=Yo.get(a);Yo.delete(a),u&&(Jp(a).removeEventListener("scroll",u),(c=Xp.get(a))==null||c(),window.removeEventListener("resize",u));const d=Ss.get(a);d&&(Je(d),Ss.delete(a)),Yp.delete(a)}}const $w=[[tn.Enter,"entry"],[tn.Exit,"exit"],[tn.Any,"cover"],[tn.All,"contain"]],Zp={start:0,end:1};function Ww(e){const a=e.trim().split(/\s+/);if(a.length!==2)return;const o=Zp[a[0]],t=Zp[a[1]];if(!(o===void 0||t===void 0))return[o,t]}function Gw(e){if(e.length!==2)return;const a=[];for(const o of e)if(Array.isArray(o))a.push(o);else if(typeof o=="string"){const t=Ww(o);if(!t)return;a.push(t)}else return;return a}function Qw(e,a){const o=Gw(e);if(!o)return!1;for(let t=0;t<2;t++){const n=o[t],s=a[t];if(n[0]!==s[0]||n[1]!==s[1])return!1}return!0}function tm(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[a,o]of $w)if(Qw(e,a))return{rangeStart:`${o} 0%`,rangeEnd:`${o} 100%`}}const ef=new Map;function af(e){const a={value:0},o=j0(t=>{a.value=t[e.axis].progress*100},e);return{currentTime:a,cancel:o}}function T0({source:e,container:a,...o}){const{axis:t}=o;e&&(a=e);let n=ef.get(a);n||(n=new Map,ef.set(a,n));const s=o.target??"self";let r=n.get(s);r||(r={},n.set(s,r));const i=t+(o.offset??[]).join(",");return r[i]||(o.target&&jr(o.target)?tm(o.offset)?r[i]=new ViewTimeline({subject:o.target,axis:t}):r[i]=af({container:a,...o}):jr()?r[i]=new ScrollTimeline({source:a,axis:t}):r[i]=af({container:a,...o})),r[i]}function Kw(e,a){const o=T0(a),t=a.target?tm(a.offset):void 0,n=a.target?jr(a.target)&&!!t:jr();return e.attachTimeline({timeline:n?o:void 0,...t&&n&&{rangeStart:t.rangeStart,rangeEnd:t.rangeEnd},observe:s=>(s.pause(),$v(r=>{s.time=s.iterationDuration*r},o))})}function Xw(e){return e&&(e.target||e.offset)}function Yw(e){return e.length===2}function Jw(e,a){return Yw(e)||Xw(a)?j0(o=>{e(o[a.axis].progress,o)},a):$v(e,T0(a))}function N0(e,{axis:a="y",container:o=document.scrollingElement,...t}={}){if(!o)return We;const n={axis:a,container:o,...t};return typeof e=="function"?Jw(e,n):Kw(e,n)}const Zw=()=>({scrollX:ha(0),scrollY:ha(0),scrollXProgress:ha(0),scrollYProgress:ha(0)}),gt=e=>e?!e.current:!1;function of(e,a,o,t){return{factory:n=>{let s;const r=()=>{if(gt(o)||gt(t)){Tt.read(r);return}s=N0(n,{...a,axis:e,container:(o==null?void 0:o.current)||void 0,target:(t==null?void 0:t.current)||void 0})};return Tt.read(r),()=>{Vv(r),s==null||s()}},times:[0,1],keyframes:[0,1],ease:n=>n,duration:1}}function eC(e,a){return typeof window>"u"?!1:e?Ev()&&!!tm(a):Vd()}function _t({container:e,target:a,...o}={}){const t=vo(Zw);eC(a,o.offset)&&(t.scrollXProgress.accelerate=of("x",o,e,a),t.scrollYProgress.accelerate=of("y",o,e,a));const n=x.useRef(null),s=x.useRef(!1),r=x.useCallback(()=>(n.current=N0((i,{x:l,y:u})=>{t.scrollX.set(l.current),t.scrollXProgress.set(l.progress),t.scrollY.set(u.current),t.scrollYProgress.set(u.progress)},{...o,container:(e==null?void 0:e.current)||void 0,target:(a==null?void 0:a.current)||void 0}),()=>{var i;(i=n.current)==null||i.call(n)}),[e,a,JSON.stringify(o.offset)]);return Jn(()=>{if(s.current=!1,gt(e)||gt(a)){s.current=!0;return}else return r()},[r]),x.useEffect(()=>{if(!s.current)return;let i;const l=()=>{const u=gt(e),d=gt(a);!u&&!d&&(i=r())};return Tt.read(l),()=>{Vv(l),i==null||i()}},[r]),t}function ei(e){const a=vo(()=>ha(e)),{isStatic:o}=x.useContext(Vt);if(o){const[,t]=x.useState(e);x.useEffect(()=>a.on("change",t),[])}return a}function M0(e,a){const o=ei(a()),t=()=>o.set(a());return t(),Jn(()=>{const n=()=>U.preRender(t,!1,!0),s=e.map(r=>r.on("change",n));return()=>{s.forEach(r=>r()),Je(t)}}),o}function aC(e){hn.current=[],e();const a=M0(hn.current,e);return hn.current=void 0,a}function Ma(e,a,o,t){if(typeof e=="function")return aC(e);if(o!==void 0&&!Array.isArray(o)&&typeof a!="function")return oC(e,a,o,t);const r=typeof a=="function"?a:oE(a,o,t),i=Array.isArray(e)?tf(e,r):tf([e],([u])=>r(u)),l=Array.isArray(e)?void 0:e.accelerate;return l&&!l.isTransformed&&typeof a!="function"&&Array.isArray(o)&&(t==null?void 0:t.clamp)!==!1&&(i.accelerate={...l,times:a,keyframes:o,isTransformed:!0,...t!=null&&t.ease?{ease:t.ease}:{}}),i}function tf(e,a){const o=vo(()=>[]);return M0(e,()=>{o.length=0;const t=e.length;for(let n=0;n<t;n++)o[n]=e[n].get();return a(o)})}function oC(e,a,o,t){const n=vo(()=>Object.keys(o)),s=vo(()=>({}));for(const r of n)s[r]=Ma(e,a,o[r],t);return s}function tC(e,a={}){const{isStatic:o}=x.useContext(Vt),t=()=>ye(e)?e.get():e;if(o)return Ma(t);const n=ei(t());return x.useInsertionEffect(()=>tE(n,e,a),[n,JSON.stringify(a)]),n}function O0(e,a={}){return tC(e,{type:"spring",...a})}function nC(e){const a=x.useRef(0),{isStatic:o}=x.useContext(Vt);x.useEffect(()=>{if(o)return;const t=({timestamp:n,delta:s})=>{a.current||(a.current=n),e(n-a.current,s)};return U.update(t,!0),()=>Je(t)},[e])}function sC(e){const a=ei(e.getVelocity()),o=()=>{const t=e.getVelocity();a.set(t),t&&U.update(o)};return Nw(e,"change",()=>{U.update(o,!1,!0)}),a}function la(){!Yd.current&&Gv();const[e]=x.useState(Cr.current);return e}const rC={some:0,all:1};function iC(e,a,{root:o,margin:t,amount:n="some"}={}){const s=Wd(e),r=new WeakMap,i=u=>{u.forEach(d=>{const c=r.get(d.target);if(d.isIntersecting!==!!c)if(d.isIntersecting){const p=a(d.target,d);typeof p=="function"?r.set(d.target,p):l.unobserve(d.target)}else typeof c=="function"&&(c(d),r.delete(d.target))})},l=new IntersectionObserver(i,{root:o,rootMargin:t,threshold:typeof n=="number"?n:rC[n]});return s.forEach(u=>l.observe(u)),()=>l.disconnect()}function R0(e,{root:a,margin:o,amount:t,once:n=!1,initial:s=!1}={}){const[r,i]=x.useState(s);return x.useEffect(()=>{if(!e.current||n&&r)return;const l=()=>(i(!0),n?void 0:()=>i(!1)),u={root:a&&a.current||void 0,margin:o,amount:t};return iC(e.current,l,u)},[a,e,o,n,t]),r}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(e,a)=>{const o=x.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:i="",children:l,...u},d)=>x.createElement("svg",{ref:d,...lC,width:n,height:n,stroke:t,strokeWidth:r?Number(s)*24/Number(n):s,className:["lucide",`lucide-${uC(e)}`,i].join(" "),...u},[...a.map(([c,p])=>x.createElement(c,p)),...Array.isArray(l)?l:[l]]));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Q("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=Q("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=Q("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=Q("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Q("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=Q("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=Q("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Q("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=Q("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=Q("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=Q("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=Q("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=Q("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=Q("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=Q("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=Q("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=Q("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=Q("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=Q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=Q("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=Q("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=Q("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ea=[.16,1,.3,1],LC=[.7,0,.84,0];function ve({children:e,delay:a=0,className:o="",once:t=!0,as:n="div"}){const s=G[n]??G.div,r=la();return m.jsx(s,{initial:r?{opacity:0}:{opacity:0,y:8},whileInView:r?{opacity:1}:{opacity:1,y:0},viewport:{once:t,margin:"-80px"},transition:{duration:r?.2:.3,delay:r?0:a,ease:Ea},className:o,children:e})}function L0({children:e,className:a="",as:o="div",once:t=!0,delay:n=0,staggerDelay:s=.03}){const r=la();if(typeof e!="string")return m.jsx("div",{className:a,children:e});const i=G[o]??G.div;if(r)return m.jsx(i,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:t,margin:"-60px"},transition:{duration:.2,delay:n,ease:Ea},className:a,children:e});const l=e.split(" ");return m.jsx(i,{initial:"hidden",whileInView:"visible",viewport:{once:t,margin:"-60px"},className:a,"aria-label":e,children:l.map((u,d)=>m.jsxs("span",{className:"split-word","aria-hidden":"true",children:[m.jsx(G.span,{variants:{hidden:{y:"110%",opacity:0},visible:{y:0,opacity:1,transition:{duration:.3,delay:n+d*s,ease:Ea}}},children:u}),d<l.length-1?" ":""]},d))})}const DC={hidden:{},visible:{transition:{staggerChildren:.03}}},FC={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.2,ease:Ea}}},VC={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ea}}};function Ji({children:e,className:a="",once:o=!0}){return m.jsx(G.div,{initial:"hidden",whileInView:"visible",viewport:{once:o,margin:"-60px"},variants:DC,className:a,children:e})}function Zi({children:e,className:a=""}){const o=la();return m.jsx(G.div,{variants:o?VC:FC,className:a,children:e})}function _C({children:e,speed:a=.15,className:o=""}){const t=x.useRef(null),n=la(),{scrollYProgress:s}=_t({target:t,offset:["start end","end start"]}),r=Ma(s,[0,1],[`${a*-100}px`,`${a*100}px`]);return n?m.jsx("div",{className:o,children:e}):m.jsx("div",{ref:t,className:o,children:m.jsx(G.div,{style:{y:r},children:e})})}function Ho({children:e}){return m.jsxs("span",{className:"roll",children:[m.jsx("span",{children:e}),m.jsx("span",{"aria-hidden":"true",children:e})]})}function UC({children:e,progress:a,from:o,to:t,reduce:n}){const s=Ma(a,[o,t],[.14,1]);return m.jsx(G.span,{"aria-hidden":"true",className:"inline-block mr-[0.24em]",style:{opacity:n?1:s},children:e})}function BC({text:e,className:a=""}){const o=x.useRef(null),t=la(),{scrollYProgress:n}=_t({target:o,offset:["start 0.88","end 0.5"]}),s=e.split(" ");return m.jsxs("p",{ref:o,className:a,children:[m.jsx("span",{className:"sr-only",children:e}),s.map((r,i)=>m.jsx(UC,{progress:n,reduce:t,from:i/s.length,to:Math.min(1,(i+1.5)/s.length),children:r},i))]})}const HC=(e,a,o)=>{const t=a-e;return((o-e)%t+t)%t+e};function $C({items:e,className:a=""}){const o=x.useRef(null),t=la(),n=R0(o,{margin:"200px"}),s=ei(0),{scrollY:r}=_t(),i=sC(r),l=O0(i,{damping:50,stiffness:400}),u=Ma(l,[0,1e3],[0,4],{clamp:!1}),d=Ma(l,[-2500,2500],[10,-10]),c=x.useRef(-1),p=Ma(s,h=>`${HC(-50,0,h)}%`);nC((h,y)=>{if(t||!n)return;const q=u.get();q<0?c.current=1:q>0&&(c.current=-1);const g=1.4*(y/1e3);s.set(s.get()+c.current*g*(1+Math.abs(q)))});const v=m.jsx("span",{className:"inline-flex items-center shrink-0",children:e.map((h,y)=>m.jsxs("span",{className:"inline-flex items-center",children:[m.jsx("span",{className:y%2?"outline":"",children:h}),m.jsx("span",{className:"inline-block w-[0.18em] h-[0.18em] bg-white mx-[0.35em]"})]},y))});return m.jsx("div",{ref:o,"aria-hidden":"true",className:`kinetic-band ${a}`,children:m.jsxs(G.div,{className:"inline-flex",style:{x:p,skewX:t?0:d},children:[v,v]})})}function WC({text:e="SIMULAB",className:a=""}){const o=x.useRef(null),t=la();return x.useEffect(()=>{const n=o.current;if(!n||t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;const s=[...n.querySelectorAll("span")],r=s.map(()=>({wdth:100,wght:600}));let i=null,l=null,u=0,d=!1;const c=y=>{i=y.clientX,l=y.clientY},p=()=>{i=null};window.addEventListener("pointermove",c,{passive:!0}),document.addEventListener("pointerleave",p);const v=new IntersectionObserver(([y])=>{d=y.isIntersecting,d&&!u&&(u=requestAnimationFrame(h))});v.observe(n);function h(){if(u=0,!d)return;const y=Math.max(260,n.offsetWidth*.32);s.forEach((q,g)=>{let f=0;if(i!==null){const C=q.getBoundingClientRect(),z=Math.hypot(i-(C.left+C.width/2),l-(C.top+C.height/2));f=Math.max(0,1-z/y),f=f*f*(3-2*f)}const b=76+f*49,E=380+f*520,A=r[g];A.wdth+=(b-A.wdth)*.12,A.wght+=(E-A.wght)*.12,q.style.setProperty("--wdth",A.wdth.toFixed(1)),q.style.setProperty("--wght",A.wght.toFixed(0))}),u=requestAnimationFrame(h)}return()=>{cancelAnimationFrame(u),v.disconnect(),window.removeEventListener("pointermove",c),document.removeEventListener("pointerleave",p)}},[t]),m.jsx("div",{ref:o,"aria-hidden":"true",className:`wordmark ${a}`,children:[...e].map((n,s)=>m.jsx("span",{children:n},s))})}function D0({size:e=24}){return m.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none","aria-hidden":"true",children:[m.jsx("rect",{width:"32",height:"32",rx:"8",fill:"#ffffff"}),m.jsx("circle",{cx:"16",cy:"16",r:"6",stroke:"#000000",strokeWidth:"2",fill:"none"}),m.jsx("circle",{cx:"16",cy:"16",r:"2",fill:"#000000"}),m.jsx("line",{x1:"16",y1:"4",x2:"16",y2:"10",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"}),m.jsx("line",{x1:"16",y1:"22",x2:"16",y2:"28",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"}),m.jsx("line",{x1:"4",y1:"16",x2:"10",y2:"16",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"}),m.jsx("line",{x1:"22",y1:"16",x2:"28",y2:"16",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"})]})}const el=[{label:"Início",href:"/"},{label:"Acervo",href:"/acervo"},{label:"Sobre",href:"/sobre"}],GC={closed:{opacity:0,y:-6,transition:{duration:.15,ease:LC}},open:{opacity:1,y:0,transition:{duration:.2,ease:Ea}}},nf={closed:{opacity:0,x:-6},open:e=>({opacity:1,x:0,transition:{duration:.2,delay:e*.03,ease:Ea}})};function QC(){const{pathname:e}=Ko(),[a,o]=x.useState(!1),[t,n]=x.useState(!1),s=x.useCallback(()=>{n(window.scrollY>40)},[]);x.useEffect(()=>(window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)),[s]),x.useEffect(()=>{o(!1)},[e]);function r(i){return i==="/"?e==="/":e.startsWith(i)}return m.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50",children:[m.jsx("div",{"aria-hidden":"true",className:`absolute inset-0 bg-black border-b border-sl-border2
                    transition-opacity duration-200 ease-out ${t?"opacity-100":"opacity-0"}`}),m.jsxs("div",{className:"relative container-xl flex items-center justify-between h-[var(--nav-height)]",children:[m.jsxs(W,{to:"/",className:"flex items-center gap-2.5 group","aria-label":"SimuLab — Página inicial",children:[m.jsx("div",{children:m.jsx(D0,{})}),m.jsx("span",{className:"font-display font-700 text-[1rem] tracking-tight text-sl-text",children:"SimuLab"})]}),m.jsx("nav",{className:"hidden md:flex items-center gap-1",children:el.map(({label:i,href:l})=>m.jsxs(W,{to:l,className:"relative px-4 py-2 text-[0.875rem] font-body font-500 transition-colors duration-300 group",children:[m.jsx("span",{className:r(l)?"text-sl-text":"text-sl-dim group-hover:text-sl-text",children:m.jsx(Ho,{children:i})}),m.jsx(G.span,{className:"absolute bottom-1 left-4 right-4 h-px bg-white",initial:!1,animate:{scaleX:r(l)?1:0,opacity:r(l)?1:0},transition:{duration:.2,ease:Ea},style:{originX:0}})]},l))}),m.jsx(W,{to:"/acervo?sim=1","data-cursor":"frame",className:`hidden md:block px-5 py-2.5 text-[0.875rem] font-700
                     text-black bg-white border-2 border-white
                     hover:bg-black hover:text-white
                     transition-colors duration-200`,children:m.jsx(Ho,{children:"Simulações"})}),m.jsx("button",{className:`md:hidden p-2.5 border border-sl-border text-sl-text
                     active:scale-90 transition-transform duration-200`,onClick:()=>o(i=>!i),"aria-label":a?"Fechar menu":"Abrir menu","aria-expanded":a,children:a?m.jsx(IC,{size:20}):m.jsx(PC,{size:20})})]}),m.jsx(em,{children:a&&m.jsx(G.div,{variants:GC,initial:"closed",animate:"open",exit:"closed",className:"md:hidden absolute top-full left-0 right-0 px-4 pt-2 pb-6",children:m.jsxs("div",{className:"border border-sl-border2 bg-black p-2 flex flex-col",children:[el.map(({label:i,href:l},u)=>m.jsx(G.div,{custom:u,variants:nf,children:m.jsx(W,{to:l,className:["block px-4 py-3.5 text-[1rem] font-500 transition-colors duration-200 border-l-2",r(l)?"text-sl-text bg-white/8 border-white":"text-sl-dim hover:text-sl-text hover:bg-white/4 border-transparent"].join(" "),children:i})},l)),m.jsx(G.div,{custom:el.length,variants:nf,children:m.jsx(W,{to:"/acervo?sim=1",className:`mt-2 flex items-center justify-center gap-2 px-4 py-3.5
                             font-700 text-[1rem] bg-white text-black`,children:"Simulações"})})]})})})]})}const KC=[{id:"cinematica",topic:"Física Clássica",title:"Cinemática: O Estudo do Movimento",summary:"A arte de prever velocidades, posições e tempos na física, essencial para planejar corridas e criar radares.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Velocidade Constante","Aceleração","MRU e MRUV","Galileu Galilei"],content:`
<p>A <strong>Cinemática</strong> é a parte da física que escreve a "história do filme", medindo com precisão para onde as coisas estão correndo, o quão rápido estão, e em que hora do dia vão chegar. Ela não quer saber se o carro é movido por um burro ou por gasolina; ela só olha e analisa o movimento final dele pela rua.</p>

<h2>História: As rampas de Galileu</h2>
<p>A base da cinemática nasceu com Galileu Galilei na virada do século 16. O povo na época acreditava nos sábios antigos que diziam que "pedras mais pesadas caem mais rápido". Galileu, com um cérebro genial, passou a observar esferas rolando por tábuas de madeira inclinadas e com medidores de tempo primitivos, provou brilhantemente que o peso não importa numa queda limpa (Aceleração da gravidade é igual para tudo).</p>

<h2>Tipos de Corridas</h2>
<ul class="list-disc list-inside mt-2 mb-4 space-y-2">
  <li><strong>MRU (Movimento Retilíneo Uniforme):</strong> É o movimento mais relaxado e equilibrado que existe. Uma pessoa caminhando devagarinho em linha reta numa rua lisa, ou um carro no piloto automático da estrada travado em 80 km/h fixos. Se a distância de viagem for de 160 quilômetros, a fórmula é fácil: vai levar exatas 2 horas para chegar.</li>
  <li><strong>MRUV (Movimento Retilíneo Uniformemente Variado):</strong> É quando pisamos no acelerador ou no freio bruscamente (temos uma <strong>Aceleração</strong> que altera a velocidade gradualmente). Exemplo puro e famoso: pular da beirada de uma piscina. Ao descer a caminho da água em queda livre, a gravidade puxa você deixando-o cerca de quase 10 metros por segundo mais veloz e letal a cada segundo que o relógio bate!</li>
</ul>

<h2>Onde usamos isso hoje?</h2>
<p>A cinemática está o tempo inteiro monitorando a sua vida através dos radares de limite de velocidade nas avenidas das cidades (usando MRU entre os postes fotográficos). Ela também é usada na programação de Inteligência Artificial para as "frenagens automáticas" que salvam motoristas que dormem no trânsito e para projetar as emocionantes quedas de trenós e "Elevadores Despenca" nos grandes parques de diversão de maneira 100% calculada e segura.</p>`,relatedIds:["leis-de-newton"],simulation:null},{id:"termodinamica-calor",topic:"Física Clássica",title:"Termodinâmica, Calor e Temperaturas",summary:"A história do calor industrial que fundou o nosso mundo tecnológico.",image:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Temperatura vs Calor","Condução Térmica","Convecção e Irradiação","Revolução Industrial"],content:`
<p>A gente acha que no nosso dia a dia "calor" e "temperatura" são só palavras chiques e diferentes e para dizer que está fazendo frio ou derretendo o asfalto. Mas, na Física, eles descrevem a força bruta mais importante usada por fábricas na Terra.</p>

<h2>História: O Motor Térmico e o Pulo Industrial</h2>
<p>A humanidade andou por milênios de cavalo. Mas entre os séculos 18 e 19, homens brilhantes como James Watt pegaram chaleiras enormes, enfiaram água fria até ferver e prenderam um forte cilindro metálico por cima. Eles inventaram as "Máquinas Térmicas", que roubavam a força expansiva agressiva do vapor superquente virando engrenagens brutais e engatando essas engrenagens nos trilhos dos trens de carga a carvão! O estudo disso fundou o termo <strong>Termodinâmica</strong> e puxou o pino e alavanca explosiva do começo total da Revolução Industrial, aposentando as velhas carroças pelo motor.</p>

<h2>Os Dois Nomes: Temperatura e Calor</h2>
<ul class="list-disc list-inside mt-2 mb-4 space-y-2">
  <li><strong>Temperatura:</strong> É o "quão enlouquecidas" estão as partículas microscópicas. Se elas tremem muito, a temperatura sobe.</li>
  <li><strong>Calor:</strong> É a energia que pula, por natureza, de uma coisa mais agitada para uma mais lerda e gelada. O calor da sua sopa fervendo no prato foge rápido voando para o ar mais gelado e calmo da sala do inverno.</li>
</ul>

<h2>Tipos de Viagens do Calor</h2>
<p>Ele pula de três jeitos: A <strong>Condução</strong> é colocar uma velha colher de metal inteira dentro da caneca do chá (o cabo esquenta a sua mão pela propagação dura do próprio metal rígido). A <strong>Convecção</strong> são as correntes furiosas nas panelas líquidas quentes subindo e frias afundando rápido (ou mesmo nos ar condicionados). Por fim a <strong>Irradiação</strong> que voa invisível a mil no infinito e total vácuo limpo sem ar (o Sol esquentando e bronzeando nosso próprio rosto na praia sem jamais ter contato real direto ou encostar no braço).</p>

<h2>Uso na Sua Casa Hoje!</h2>
<p>Nossas geladeiras em casa e todos os modelos super caros dos nossos carros não existiriam sem a Termodinâmica de James Watt. O seu refrigerador na cozinha é perfeitamente moldado para roubar com os potentes gases compressores nas traseiras o calor frouxo das maçãs e iogurtes abertos e expulsar quente para as prateleiras de ferro preto gradeado viradas pela traseira no meio encostado da parece seca da despensa da sua própria cozinha moderna.</p>`,relatedIds:[],simulation:{component:"termodinamica",subtitle:"Diagrama de Energia de uma Reação",about:"O diagrama de energia é o mapa de uma reação, governado por dois números independentes. A energia de ativação Eₐ é o morro que os reagentes precisam subir — ela controla a VELOCIDADE. A variação de entalpia ΔH é a diferença de altura entre reagentes e produtos — ela controla o CALOR. São independentes: uma reação muito exotérmica pode ser lentíssima (o diamante virando grafite libera energia e leva bilhões de anos). Mexa em Eₐ e ΔH separadamente para ver isso. O calorímetro usa q = m·c·ΔT com água real (c = 4,18 J/g·°C) para converter kJ em graus: ΔH < 0 aquece a água, ΔH > 0 esfria.",icon:"thermometer",iconColor:"#a68a7e",controls:[{id:"deltaH",label:"Entalpia ΔH (− exotérmica, + endotérmica)",unit:"kJ/mol",min:-100,max:100,default:-50,step:5},{id:"activation",label:"Energia de Ativação Eₐ",unit:"kJ/mol",min:20,max:120,default:60,step:5},{id:"speed",label:"Velocidade da Animação",unit:"×",min:.2,max:3,default:1,step:.2}]}},{id:"pendulo-simples",topic:"Física Clássica",title:"Pêndulo Simples",summary:"O balanço matemático do tempo e a invenção do relógio moderno.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Movimento Harmônico","Período de Oscilação","Energia Potencial","Conservação de Energia","Amortecimento"],content:`
<p>Um <strong>Pêndulo Simples</strong> é qualquer peso amarrado a um fio que fica balançando de um lado para o outro por causa da força da gravidade puxando-o para baixo.</p>

<h2>História: Galileu e o Relógio</h2>
<p>A lenda conta que Galileu Galilei estava numa igreja no século XVI quando viu o enorme lustre do teto balançando. Ele usou os batimentos do próprio pulso para contar o tempo de balanço. Galileu descobriu uma coisa incrível: mesmo que o lustre perdesse força e o balanço ficasse mais curtinho, o <em>tempo exato</em> (o Período) para ir e voltar era sempre o mesmo! O tempo só mudava se o fio ficasse mais comprido.</p>

<h2>Aplicações Práticas</h2>
<p>Usando essa exatidão imutável matemática, os inventores criaram os Relógios de Pêndulo (os antigos relógios de carrilhão do vovô). A precisão na marcação do tempo foi vital para que os navios parassem de se perder no mar na época dos descobrimentos, marcando os primeiros passos da nossa globalização moderna.</p>`,relatedIds:["ondas-som","leis-newton","orbitas-planetarias"],simulation:{component:"pendulo-simples",subtitle:"Simulador de Pêndulo Simples",about:"Puxe o pêndulo com o mouse e solte. A simulação integra θ'' = −(g/L)·sen θ − b·θ' por Runge–Kutta de 4ª ordem, sem a aproximação de pequenos ângulos: o período medido cresce com a amplitude. Mude a massa e veja que o período não muda; ligue o atrito do ar e veja a energia ir embora.",icon:"wave",iconColor:"#06b6d4",presets:[{label:"Terra",values:{gravity:9.8}},{label:"Lua",values:{gravity:1.6}},{label:"Marte",values:{gravity:3.7}},{label:"Júpiter",values:{gravity:24.8}}],controls:[{id:"length",label:"Comprimento do fio",unit:"m",min:.2,max:2.5,default:1,step:.05},{id:"amplitude",label:"Ângulo de largada",unit:"°",min:1,max:85,default:30,step:1},{id:"gravity",label:"Gravidade",unit:"m/s²",min:1,max:25,default:9.8,step:.1},{id:"mass",label:"Massa",unit:"kg",min:.1,max:5,default:1,step:.1},{id:"damping",label:"Atrito do ar",unit:"",min:0,max:1,default:0,step:.02},{id:"vectors",type:"toggle",label:"Mostrar forças e velocidade",on:1,off:0,default:1},{id:"plots",type:"toggle",label:"Mostrar gráficos",on:1,off:0,default:1},{id:"trail",type:"toggle",label:"Deixar rastro",on:1,off:0,default:0}]}},{id:"circuito-eletrico",topic:"Física Clássica",title:"Circuito Elétrico",summary:"Como organizamos os elétrons invisíveis para acender luzes e carregar o celular.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Lei de Ohm","Corrente Elétrica","Resistência","Tensão","Potência Elétrica"],content:`
<p>Um <strong>Circuito Elétrico</strong> é como uma pista de corrida de Fórmula 1 fechada, só que em vez de carros, quem corre freneticamente pelo asfalto (os fios de cobre) são bilhões de partículas invisíveis chamadas elétrons.</p>

<h2>A Corrida e a Lei de Ohm</h2>
<p>Para a corrida começar, precisamos de um empurrão: a bateria ou tomada (a Tensão ou Voltagem, em Volts). No meio da pista existem as lâmpadas e telas (os Resistores), que são obstáculos apertados. Quando os elétrons passam espremidos e se esfregam com força pela lâmpada, o atrito os faz esquentar até acender e brilhar! No século XIX, Georg Ohm criou a matemática que provou isso: quanto mais forte a bateria, mais elétrons correm; mas quanto mais grossa a resistência, o fluxo (a Corrente, em Ampères) diminui.</p>

<h2>Aplicação Diária</h2>
<p>Entender essa química é o que permite construirmos de tudo, desde a placa eletrônica minúscula do seu celular, calculando a resistência certa para não queimar a bateria do bolso, até a montagem inteligente das luzes pisca-pisca de Natal da sua casa!</p>`,relatedIds:["leis-newton","ondas-som","pendulo-simples"],simulation:{component:"circuito-eletrico",subtitle:"Simulador de Circuito Elétrico",about:"Circuito com bateria REAL: I = ε/(R + r), onde r é a resistência interna. A tensão nos terminais cai sob carga (Vt = ε − I·r) e a eficiência η = R/(R+r) aparece ao vivo. O resistor aquece por efeito Joule, os elétrons animados marcham do polo − para o + (contra a corrente convencional) e o HUD mostra a velocidade de deriva real, calculada por v_d = I/(n·A·e).",icon:"zap",iconColor:"#06b6d4",controls:[{id:"voltage",label:"Força Eletromotriz (ε)",unit:"V",min:1,max:220,default:12,step:1},{id:"resistance",label:"Resistência (R)",unit:"Ω",min:1,max:1e3,default:100,step:1},{id:"internal",label:"Resistência Interna (r)",unit:"Ω",min:0,max:10,default:.5,step:.1}]}},{id:"ondas-som",topic:"Física Clássica",title:"Ondas e Som",summary:"A física de como a música da caixa de som empurra o ar até o seu ouvido.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Frequência","Amplitude","Comprimento de Onda","Velocidade do Som","Período"],content:`
<p>O <strong>Som</strong> não existe no espaço sideral. Por quê? Porque o som é literalmente uma vibração mecânica, um empurrão. Quando o falante da sua caixa de som treme, ele soca o ar na frente dele. Esse ar soca o ar da frente, que vai socando o próximo até chegar ao seu tímpano, fazendo-o vibrar no mesmo ritmo para o cérebro traduzir em música.</p>

<h2>Como lemos as ondas?</h2>
<p>A física escolar desenha esse empurrão como uma onda subindo e descendo no papel:</p>
<ul class="list-disc list-inside mt-2 mb-4 space-y-1">
  <li><strong>Frequência (Hz):</strong> É a rapidez da tremidinha. Se treme devagar, você escuta um grave grosso (como um bumbo de bateria). Se treme milhares de vezes num segundo, o som fica agudo e fino (como um apito de juiz).</li>
  <li><strong>Amplitude (dB):</strong> É a força do empurrão. Quanto mais alto o morro da onda no desenho, mais alto e ensurdecedor é o volume real na sua orelha (Decibéis).</li>
</ul>

<h2>Onde usamos isso?</h2>
<p>Além de criarmos estúdios acústicos e fones isoladores de ruído, nós usamos as ondas sonoras atiradas para baixo do mar para mapear o fundo de oceanos ou localizar cardumes (o Sonar dos navios). Até na medicina essa física é vital, com aparelhos atirando som pelo gel da barriga das mães para criar a imagem do bebê em tempo real (o aparelho de Ultrassom).</p>`,relatedIds:["pendulo-simples","circuito-eletrico","leis-newton"],simulation:{component:"ondas-som",subtitle:"Simulador de Ondas Sonoras",about:"As moléculas do ar são mostradas comprimindo e rarefazendo — som é onda LONGITUDINAL, s(x,t) = s₀·sin(kx − ωt). A velocidade do som depende da temperatura, v = 331,3·√(1 + T/273,15), então o slider de temperatura altera λ = v/f ao vivo (é por isso que sopros desafinam no frio). O osciloscópio mostra a pressão num ponto fixo, o dB vira pascais reais (p = p₀·10^(dB/20)) e a frequência é convertida na nota musical mais próxima.",icon:"waves",iconColor:"#06b6d4",presets:[{label:"Lá grave (110 Hz)",values:{frequency:110}},{label:"Lá (440 Hz)",values:{frequency:440}},{label:"Lá agudo (1760 Hz)",values:{frequency:1760}}],controls:[{id:"frequency",label:"Frequência",unit:"Hz",min:20,max:2e4,default:440,step:10},{id:"amplitude",label:"Amplitude",unit:"dB",min:10,max:100,default:60,step:1},{id:"temperature",label:"Temperatura do Ar",unit:"°C",min:-20,max:40,default:20,step:1}]}},{id:"leis-newton",topic:"Física Clássica",title:"Leis de Newton",summary:"A base da mecânica e as regras fundamentais que controlam de carros a foguetes.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Inércia","2ª Lei de Newton","Ação e Reação","Força de Atrito","Aceleração"],content:`
<p>Por que um ônibus demora mais para frear do que uma moto? As respostas foram escritas pelo cientista inglês Isaac Newton, em suas 3 leis mágicas universais.</p>

<h2>As 3 Regras Universais</h2>
<ul class="list-disc list-inside mt-2 mb-4 space-y-2">
  <li><strong>1ª Lei (Inércia):</strong> Todo objeto é teimoso. Se estiver parado, fica parado. Se o carro freia bruscamente, o passageiro sem cinto teima em continuar voando para frente na mesma velocidade que estava.</li>
  <li><strong>2ª Lei (F = m·a):</strong> O esforço depende do peso (massa). Empurrar um skate com a mão é fácil; com a mesma mão, empurrar uma caminhonete de 2 toneladas quase não dá aceleração nenhuma.</li>
  <li><strong>3ª Lei (Ação e Reação):</strong> Para toda força feita, a natureza devolve a força com a exata potência contra você. Dê um soco no concreto e o concreto bate na sua mão quebrando o dedo.</li>
</ul>

<h2>Engenharia de Uso</h2>
<p>Foi usando as leis exatas de Newton que a engenharia civil construiu pontes que não caem e a engenharia moderna inventou os <em>airbags</em>, pensados puramente na lei da Inércia para aparar o corpo em movimento nos acidentes e salvar vidas diariamente.</p>`,relatedIds:["pendulo-simples","circuito-eletrico","ondas-som"],simulation:{component:"leis-newton",subtitle:"Simulador das Leis de Newton",about:"Integra a 2ª Lei de Newton distinguindo atrito estático (teto μₑ·N) de atrito cinético (μc·N): por isso o bloco 'salta' ao romper a inércia. O slider de atrito controla μc, e μₑ acompanha 25% acima — reduza o atrito a zero para ver movimento sem dissipação. O diagrama de corpo livre (F, atrito, peso e normal), os gráficos v(t) e a(t) e a repartição de energia W = K + Q são atualizados em tempo real.",icon:"zap",iconColor:"#06b6d4",controls:[{id:"force",label:"Força Aplicada",unit:"N",min:10,max:1e3,default:100,step:10},{id:"mass",label:"Massa do Bloco",unit:"kg",min:1,max:200,default:10,step:1},{id:"friction",label:"Atrito da Superfície (μc)",unit:"",min:0,max:.9,default:.28,step:.01}]}},{id:"colisoes",topic:"Física Clássica",title:"Colisões e a Conservação do Momento",summary:"Por que o momento total nunca muda, mesmo quando a energia se perde numa batida.",image:"https://image.pollinations.ai/prompt/Two%20carts%20colliding%20on%20a%20track%2C%20momentum%20physics%20vectors%2C%20clean%20scientific%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Conservação do Momento","Colisão Elástica","Colisão Inelástica","Coeficiente de Restituição"],content:`
<p>Quando dois corpos colidem, algo sempre se conserva: o <strong>momento linear</strong> total (massa × velocidade). Não importa se a batida é suave ou violenta — a soma dos momentos antes é igual à soma depois.</p>

<h2>Elástico ou Inelástico</h2>
<p>O que muda de uma colisão para outra é a energia cinética. Numa colisão perfeitamente elástica (como bolas de bilhar ideais), a energia se conserva. Numa perfeitamente inelástica, os corpos grudam e a energia máxima vira calor e som. O coeficiente de restituição (e) mede onde a colisão está entre esses dois extremos.</p>

<h2>O Centro de Massa Não Sente Nada</h2>
<p>A prova visual da conservação do momento: o centro de massa do sistema se move em linha reta e velocidade constante, indiferente às colisões. A simulação usa uma pista fechada (sem paredes que apliquem forças externas) para que o momento seja rigorosamente invariante, e compara a energia perdida medida com a previsão analítica.</p>`,relatedIds:["leis-newton"],simulation:{component:"colisoes",subtitle:"Conservação de Momento e Colisões",about:"Os carrinhos correm numa pista fechada (um anel), não por estética: paredes aplicariam força externa e destruiriam justamente o que a simulação prova. Num anel o sistema é isolado e o momento total é rigorosamente invariante. A colisão usa o coeficiente de restituição e (de 0, perfeitamente inelástica, a 1, perfeitamente elástica), a linha do centro de massa anda reta indiferente às batidas, e o HUD compara a energia perdida medida com a previsão analítica ½·μ·(1−e²)·v²ᵣ usando a massa reduzida — elas batem, provando que o integrador não inventa física.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Elástica",values:{restitution:100}},{label:"Parcialmente elástica",values:{restitution:50}},{label:"Inelástica",values:{restitution:0}}],controls:[{id:"massRatio",label:"Razão de Massas (m₂/m₁)",unit:"",min:.2,max:5,default:2,step:.1},{id:"restitution",label:"Coeficiente de Restituição",unit:"%",min:0,max:100,default:80,step:5}]}},{id:"plano-inclinado",topic:"Física Clássica",title:"Plano Inclinado",summary:"Uma rampa decompõe o peso em duas partes e revela quando um corpo desliza — e por que um piano e uma moeda escorregam no mesmo ângulo.",image:"",level:"Intermediário",concepts:["Decomposição de Forças","Força Normal","Atrito","Condição de Deslizamento"],content:`
<p>O <strong>plano inclinado</strong> é um dos cenários mais clássicos da dinâmica. Numa rampa, o peso de um corpo se divide em duas componentes: uma <em>ao longo</em> do plano (que tende a fazê-lo descer) e outra <em>perpendicular</em> a ele (equilibrada pela força normal).</p>

<h2>As componentes do peso</h2>
<p>Com o ângulo de inclinação θ, o peso mg se decompõe em W∥ = mg·sen θ (descendo a rampa) e W⊥ = mg·cos θ (contra a superfície). A força normal N equilibra a componente perpendicular: N = mg·cos θ.</p>

<h2>Quando o corpo desliza</h2>
<p>O corpo começa a escorregar quando a componente que o puxa para baixo vence o atrito estático máximo. Fazendo as contas, a massa se cancela e sobra uma condição que depende só do ângulo e do atrito: <strong>tan θ &gt; μ</strong>. Deslizando, a aceleração é a = g·(sen θ − μ·cos θ). Na simulação, ajuste o ângulo, a massa e o atrito e veja os vetores de força e a condição de deslizamento em tempo real.</p>`,relatedIds:["leis-newton","movimento-circular"],simulation:{component:"plano-inclinado",subtitle:"Plano Inclinado",about:"A rampa tem 4 m. O bloco é largado do alto e um cronômetro mede a descida. As setas mostram o peso (P) decomposto em duas partes: a que puxa rampa abaixo (P∥ = mg·sen θ) e a que aperta o bloco contra a rampa, equilibrada pela normal (N). O bloco só desliza quando tan θ passa de μ — as duas barras ao lado são essa balança, e nelas a massa não aparece: um piano e uma moeda escorregam no mesmo ângulo. O gráfico mostra a aceleração em cada inclinação para o atrito escolhido, com o ângulo crítico θc marcado. Arraste o topo da rampa para inclinar.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Sem atrito",values:{atrito:0}},{label:"Pouco atrito",values:{atrito:.1}},{label:"Muito atrito",values:{atrito:.8}}],controls:[{id:"angulo",label:"Ângulo da rampa (θ)",unit:"°",min:5,max:75,default:30,step:1},{id:"massa",label:"Massa do bloco",unit:"kg",min:1,max:20,default:2,step:1},{id:"atrito",label:"Coeficiente de atrito (μ)",unit:"",min:0,max:1,default:.3,step:.05}]}},{id:"movimento-circular",topic:"Física Clássica",title:"Movimento Circular Uniforme",summary:"Girar a velocidade constante ainda é acelerar. Uma força apontando para o centro é o que impede o corpo de sair reto pela tangente.",image:"",level:"Intermediário",concepts:["Força Centrípeta","Aceleração Centrípeta","Período e Frequência","Velocidade Angular"],content:`
<p>No <strong>movimento circular uniforme</strong>, a velocidade tem módulo constante, mas sua <em>direção</em> muda a cada instante. E mudar a direção da velocidade já é uma aceleração — a <strong>aceleração centrípeta</strong>, que aponta sempre para o centro da curva.</p>

<h2>Aceleração e força para o centro</h2>
<p>A aceleração centrípeta vale a_c = v²/r, e por trás dela há sempre uma força real apontando para o centro: F_c = m·v²/r. Essa força pode ser a tração de um barbante, o atrito de um pneu na curva ou a gravidade prendendo um satélite. Sem ela, pela 1ª Lei de Newton, o corpo sairia em linha reta pela tangente.</p>

<h2>Período, frequência e velocidade angular</h2>
<p>Uma volta completa leva o período T = 2πr/v, e a frequência é f = 1/T. A velocidade angular ω = v/r mede quão rápido o ângulo varia. Na simulação, ajuste o raio e a velocidade e observe os vetores de velocidade (tangente) e força centrípeta (para o centro), além da seta pontilhada que mostra a fuga pela tangente.</p>`,relatedIds:["plano-inclinado","orbitas-planetarias"],simulation:{component:"movimento-circular",subtitle:"Movimento Circular Uniforme",about:"A velocidade tem módulo constante, mas muda de direção o tempo todo — e isso é uma aceleração que aponta para o centro: a = v²/r, com força F = m·v²/r. Arraste o corpo para mudar o raio. Depois corte o barbante: sem a força, o corpo não é jogado para fora, ele segue reto pela tangente com a velocidade que tinha (1ª Lei de Newton). Os dois quadradinhos nos eixos são as sombras do giro; o gráfico ao lado mostra que cada uma é um vaivém harmônico, como o de um pêndulo. A curva de baixo é a = v²/r: dobrar a velocidade quadruplica a força.",icon:"orbit",iconColor:"#8a97a6",presets:[{label:"Volta larga e lenta",values:{raio:5,velocidade:3}},{label:"Volta curta e rápida",values:{raio:1.5,velocidade:9}},{label:"Mesma velocidade, metade do raio",values:{raio:1,velocidade:6}}],controls:[{id:"solto",type:"toggle",label:"Cortar o barbante",on:1,off:0,default:0},{id:"raio",label:"Raio da trajetória",unit:"m",min:1,max:5,default:2,step:.5},{id:"velocidade",label:"Velocidade (módulo)",unit:"m/s",min:1,max:15,default:6,step:.5},{id:"massa",label:"Massa do corpo",unit:"kg",min:.5,max:5,default:1,step:.5}]}},{id:"conservacao-energia",topic:"Física Clássica",title:"Conservação da Energia Mecânica",summary:"Uma bolinha num vale troca altura por velocidade sem fim — a menos que o atrito entre em cena e transforme energia mecânica em calor.",image:"",level:"Intermediário",concepts:["Energia Cinética","Energia Potencial","Conservação de Energia","Dissipação"],content:`
<p>A <strong>energia mecânica</strong> é a soma da energia cinética (do movimento) com a potencial (da posição). Um dos princípios mais poderosos da física diz que, na ausência de atrito, essa soma permanece <em>constante</em>: a energia apenas troca de forma.</p>

<h2>A dança da montanha-russa</h2>
<p>Uma bolinha solta no alto de um trilho em forma de vale desce ganhando velocidade (a potencial vira cinética) e sobe do outro lado perdendo-a (a cinética vira potencial). No fundo, ela está no ponto mais rápido; no alto, momentaneamente parada. A energia circula entre as duas formas — para sempre, se não houvesse atrito.</p>

<h2>Quando o atrito entra</h2>
<p>Ligando o atrito, parte da energia mecânica é dissipada em calor a cada passagem, e a bolinha sobe cada vez menos, até parar no fundo. O total (mecânica + calor) continua conservado; só a parcela mecânica diminui. Na simulação, as barras mostram E_c, E_p, E_mec e o calor Q ao vivo, comprovando a igualdade E_c + E_p = constante enquanto não há dissipação.</p>`,relatedIds:["pendulo-simples","movimento-circular"],simulation:{component:"conservacao-energia",subtitle:"Conservação da Energia Mecânica",about:"O desenho do trilho já é o gráfico da energia potencial, então a energia mecânica aparece como uma linha horizontal sobre o vale. A bolinha nunca passa dessa linha; a distância dela até a linha (traço âmbar) é a energia cinética, e a altura acima do fundo (traço verde) é a potencial. Sem atrito a linha não se move e a bolinha volta sempre à altura de onde saiu. Ligue o atrito: a linha desce, o que desceu virou calor, e os pontos de retorno se fecham até a bolinha parar. Arraste a bolinha pelo trilho para escolher de onde largar.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Sem atrito",values:{atrito:0}},{label:"Com atrito",values:{atrito:.15}}],controls:[{id:"alturaInicial",label:"Altura inicial de soltura",unit:"m",min:1,max:5,default:4,step:.5},{id:"atrito",label:"Atrito (0 = sem dissipação)",unit:"",min:0,max:.3,default:0,step:.02}]}},{id:"atwood",topic:"Física Clássica",title:"Máquina de Atwood",summary:"Duas massas, um fio e uma polia. O engenho que 'desacelerou' a gravidade para poder medi-la à mão no século XVIII.",image:"",level:"Intermediário",concepts:["2ª Lei de Newton","Tração","Sistema de Corpos","Aceleração"],content:`
<p>A <strong>máquina de Atwood</strong> é duas massas ligadas por um fio que passa por uma polia. É um dos sistemas mais clássicos para aplicar a 2ª Lei de Newton a um conjunto de corpos.</p>

<h2>A aceleração do sistema</h2>
<p>Aplicando F = ma a cada bloco e somando as equações, a tração do fio se cancela e sobra uma expressão limpa: a = (m₁ − m₂)·g / (m₁ + m₂). Quando as massas são iguais, a aceleração é zero (equilíbrio). Quando muito diferentes, ela se aproxima de g (queda quase livre).</p>

<h2>Medindo a gravidade devagar</h2>
<p>Foi essa a genialidade de Atwood: com massas próximas, a aceleração fica bem menor que g, permitindo cronometrar a queda à mão e, assim, medir a gravidade. A tração no fio vale T = 2·m₁·m₂·g / (m₁ + m₂). Na simulação, ajuste as duas massas e veja a aceleração, a tração e qual lado desce.</p>`,relatedIds:["leis-newton","conservacao-energia"],simulation:{component:"atwood",subtitle:"Máquina de Atwood",about:"A simulação repete o experimento de Atwood: o bloco mais pesado parte do repouso, cai uma altura conhecida e o cronômetro mede o tempo. Aplicando a 2ª Lei a cada bloco e somando, a tração some e sobra a = (m₁−m₂)g/(m₁+m₂). O gráfico de cima mostra a velocidade crescendo em linha reta (a inclinação é a aceleração); o de baixo, como massas parecidas deixam a queda lenta. Com o tempo cronometrado, o painel calcula a gravidade como Atwood fez em 1784 — e o resultado bate com 9,8 m/s². Arraste um bloco para cima e solte para escolher a altura de queda.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Quase iguais",values:{massa1:5,massa2:4.5}},{label:"Equilíbrio",values:{massa1:3,massa2:3}},{label:"Bem diferentes",values:{massa1:9,massa2:1}}],controls:[{id:"massa1",label:"Massa 1 (esquerda)",unit:"kg",min:1,max:10,default:3,step:.5},{id:"massa2",label:"Massa 2 (direita)",unit:"kg",min:1,max:10,default:2,step:.5}]}},{id:"alavanca",topic:"Física Clássica",title:"Alavanca e Torque",summary:"Por que uma criança equilibra um adulto na gangorra? O torque — força vezes distância ao apoio — explica a máquina que 'moveria o mundo'.",image:"",level:"Intermediário",concepts:["Torque","Momento de uma Força","Equilíbrio de Rotação","Alavanca"],content:`
<p>O <strong>torque</strong> (ou momento de uma força) mede a capacidade de uma força de girar um objeto em torno de um ponto de apoio. Ele depende não só da força, mas de <em>onde</em> ela é aplicada: τ = F · d.</p>

<h2>O equilíbrio da alavanca</h2>
<p>Uma barra apoiada num ponto fica em equilíbrio quando os torques dos dois lados se anulam: m_e·g·d_e = m_d·g·d_d, ou simplesmente m_e·d_e = m_d·d_d. É por isso que uma criança leve equilibra um adulto pesado na gangorra — basta ela sentar bem mais longe do apoio, multiplicando seu torque.</p>

<h2>Deem-me um ponto de apoio</h2>
<p>Arquimedes resumiu o poder da alavanca numa frase famosa: 'deem-me um ponto de apoio e moverei o mundo'. Afastando a força do apoio, uma força pequena vence uma resistência enorme. Na simulação, ajuste as massas e as distâncias dos dois lados e veja a barra girar para o lado de maior torque — ou equilibrar quando os produtos m·d se igualam.</p>`,relatedIds:["atwood","leis-newton"],simulation:{component:"alavanca",subtitle:"Alavanca e Torque",about:"A barra gira de verdade: a simulação integra a 2ª Lei da rotação, então um desequilíbrio pequeno a faz tombar devagar e um grande a derruba depressa, até a ponta bater no chão. O torque de cada lado é força vezes distância ao apoio (as cotas azuis); as duas barras ao lado comparam os torques. O losango amarelo marca onde o peso da direita teria de ficar para equilibrar — arraste o peso até ele. O gráfico mostra por que a alavanca multiplica força: quanto mais longe do apoio, menos força é preciso para segurar o outro lado.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Equilíbrio",values:{massaEsq:4,distEsq:3,massaDir:4,distDir:3}},{label:"Criança e adulto na gangorra",values:{massaEsq:8,distEsq:1.5,massaDir:3,distDir:4}},{label:"Pé de cabra",values:{massaEsq:10,distEsq:1,massaDir:2,distDir:5}},{label:"Quase lá",values:{massaEsq:5,distEsq:3,massaDir:4,distDir:3.5}}],controls:[{id:"massaEsq",label:"Massa da esquerda",unit:"kg",min:1,max:10,default:4,step:1},{id:"distEsq",label:"Distância da esquerda",unit:"m",min:1,max:5,default:3,step:.5},{id:"massaDir",label:"Massa da direita",unit:"kg",min:1,max:10,default:3,step:1},{id:"distDir",label:"Distância da direita",unit:"m",min:1,max:5,default:3,step:.5}]}},{id:"ondas-estacionarias",topic:"Física Clássica",title:"Ondas Estacionárias",summary:"Por que uma mesma corda de violão produz notas diferentes? Só cabem ondas que fecham nas pontas — e isso quantiza as frequências em harmônicos.",image:"",level:"Intermediário",concepts:["Onda Estacionária","Harmônicos","Nós e Ventres","Ressonância"],content:`
<p>Quando duas ondas de mesma frequência viajam em sentidos opostos numa corda presa nas pontas, elas se somam formando uma <strong>onda estacionária</strong>: um padrão que oscila no lugar, sem viajar, com pontos parados (os nós) e pontos de oscilação máxima (os ventres).</p>

<h2>Frequências quantizadas: os harmônicos</h2>
<p>Como as duas extremidades presas são sempre nós, só 'cabem' na corda ondas cujos comprimentos fecham certinho: λₙ = 2L/n. Isso restringe as frequências possíveis a um conjunto discreto — os <strong>harmônicos</strong>: fₙ = n·v/(2L). O modo n = 1 é o fundamental; n = 2, 3, … são os harmônicos superiores, com frequências múltiplas do fundamental.</p>
<h2>A física da música</h2>
<p>É assim que uma mesma corda, de comprimento fixo, produz notas diferentes: mudando o modo de vibração (harmônico) ou a velocidade da onda (que depende da tração e da densidade da corda). Na simulação, escolha o harmônico e veja os nós, os ventres e como a frequência salta em múltiplos do fundamental.</p>`,relatedIds:["ondas-som","pendulo-simples"],simulation:{component:"ondas-estacionarias",subtitle:"Ondas Estacionárias numa Corda",about:"Uma onda estacionária é a soma de duas ondas iguais correndo em sentidos opostos: a que vai e a que voltou refletida na ponta presa. As linhas finas são essas duas ondas; a linha grossa é a soma, que oscila sem sair do lugar. Os quadrados amarelos são os nós (nunca se movem); a mancha clara é a região que a corda varre. Como as duas pontas têm de ser nós, só cabem na corda as frequências do espectro de baixo: fₙ = n·v/(2L). Clique numa haste para trocar de harmônico, arraste o primeiro ventre para mudar a amplitude e passe o mouse sobre a corda para ler quanto cada ponto oscila. O movimento está em câmera lenta de 20×.",icon:"waves",iconColor:"#8a97a6",presets:[{label:"Fundamental",values:{harmonico:1}},{label:"Oitava (2º)",values:{harmonico:2}},{label:"Quinta acima (3º)",values:{harmonico:3}},{label:"Corda mais tensa",values:{velocidade:30}}],controls:[{id:"viajantes",type:"toggle",label:"Mostrar as duas ondas viajantes",on:1,off:0,default:1},{id:"harmonico",label:"Harmônico (n)",unit:"",min:1,max:7,default:1,step:1},{id:"amplitude",label:"Amplitude",unit:"%",min:20,max:100,default:60,step:5},{id:"velocidade",label:"Velocidade de propagação",unit:"m/s",min:4,max:40,default:10,step:1}]}}],XC=[{id:"efeito-fotoeletrico",topic:"Física Quântica",title:"O Efeito Fotoelétrico",summary:"Como uma grande invenção sobre pequenos fótons rendeu o Nobel a Einstein e deu início à nossa era tecnológica.",image:"https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Fótons (Partículas de Luz)","Energia Quantizada","Frequência das Cores","Albert Einstein"],content:`
<p>Até o final do século 19, todos nas escolas e laboratórios ensinavam que a luz que acendia das velas ou vinha do Sol era igual as ondinhas de uma pedra caindo em um lago calmo de água: apenas uma grande e suave e comprida e contínua onda longa. Porém, um estranho evento em metais deixou todo mundo confuso, era o bizarro caso do <strong>Efeito Fotoelétrico</strong>.</p>

<h2>O Enigma de Arrancar Elétrons e a Sacada de Einstein</h2>
<p>Os pesquisadores botaram placas de metal viradas pro sol e repararam que algumas luzes de cor batendo arrancavam, como num choque rápido elétrico elétrons minúsculos faiscando para fora do material metálico escuro, gerando micro raios de energia na chapa pura solta. Mas o grande mistério era bizarro: Se a luz da lanterna fosse <em>Vermelha</em>, os caras podiam botar 3 holofotes brutais potentes focados gritando claridade e nenhum átomo nem elétron se mexia nas beiradas. Mas, se botassem uma lanterninha bem lixosa ceguinha azulzinha ceguinha fraca da cor de neon de brinquedo Ultravioleta no escuro... o metal na mesma hora soltava um bando e atirava rápido longe os átomos faiscantes rápidos fugazes aos montes rápidos caindo voando! O brilho não ditava a regra da arrancada da placa de chumbo e metal na mão?</p>
<p>Foi em 1905 que o gênio calmo do cabelo fofo famoso e assanhado, <strong>Albert Einstein</strong>, provou e cravou que ali naquele micro experimento a luz não era ondinha calma: E sim era uma metralhadora cega frenética maluca metralhadora caótica maciça jogando aos berros milhares colossais de grãos de energia, de bolotas quicantes empacotadas de areia redonda exata separada que nós apelidamos amorosamente hoje em dia escolarmente de <strong>Fótons</strong>!</p>
<p>O que importava ali não era o fortíssimo da potência da pilha vermelha da caneta; o problema era que o fóton que pulava da lanterna azul era rico de grana e muito energizado pesado carregado na mala roxa gorda, pagava a fiança pesada e libertava a peça de luz do átomo cego preso no metal amargo na marra cega puxada da caixa fria e metálica da caixa trágica presa!</p>

<h2>Hoje em Dia: Uso Prático das Portas e Painéis!</h2>
<p>Einstein ganhou o honrado dourado formidável mágico e brilhante prêmio respeitoso de alto gabarito sagrado do Prêmio Nobel no peito (e não foi pela relatividade, foi pelo choque no metal azul)! É essa genial regrinha brilhante e prática fotocélula de luz dos elétrons que possibilita hoje existirem coisas formidáveis do seu bolso cego rápido diário! Os super valiosos longos belos gigantes estáticos belos Painéis Solares colossais escuros e pretos das belas limpas usinas do sol das grandes fazendas na grama, ou daquelas mágicas e fantasmas assustadoras legais portas automáticas de lanchonete dos grandes gigantes shoppings ou do leitor fino da catraca de leitura que barram milimétricamente apitando e trancam os passageiros fujões cegos soltos frouxos fujões frouxos soltos apressados nas catracas dos trilhos de metal e e vidro cego sujo fechado escuro cego frio amargo pesado de trem ou metrô fático da cidade corrida nas cidades modernas na vida.</p>`,relatedIds:["schrodinger-cat"],simulation:{component:"efeito-fotoeletrico",subtitle:"O Efeito Fotoelétrico",about:"O ponto central que Einstein explicou em 1905: o que arranca elétrons de um metal é a FREQUÊNCIA da luz (a energia de cada fóton, E = h·f), não a intensidade. Abaixo de uma frequência de corte, você pode iluminar com holofotes potentes que nada acontece; acima dela, até uma luz fraca ejeta elétrons na hora. A energia cinética máxima é Kmax = h·f − φ, onde φ é a função trabalho do metal. Troque o metal (do césio à platina) para ver a frequência de corte mudar, e a intensidade só altera QUANTOS elétrons saem, não SE eles saem.",icon:"sun",iconColor:"#7a8fa8",presets:[{label:"Luz vermelha",values:{frequency:9}},{label:"Luz verde",values:{frequency:17}},{label:"Luz violeta",values:{frequency:30}},{label:"Ultravioleta",values:{frequency:60}}],controls:[{id:"frequency",label:"Frequência da Luz (0 = infravermelho · 100 = ultravioleta)",unit:"%",min:0,max:100,default:50,step:5},{id:"intensity",label:"Intensidade da Luz",unit:"%",min:10,max:100,default:50,step:10},{id:"metal",type:"select",label:"Metal do alvo",default:0,options:[{value:0,label:"Césio"},{value:20,label:"Sódio"},{value:40,label:"Cálcio"},{value:60,label:"Zinco"},{value:80,label:"Cobre"},{value:100,label:"Platina"}]}]}},{id:"schrodinger-cat",topic:"Física Quântica",title:"A Bizarra Regra Quântica e o Gato de Schrödinger",summary:"A brincadeira de cientistas sobre como algo pode estar em dois estados ao mesmo tempo e os computadores malucos do futuro.",image:"https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Superposição de Dois Lados Juntos","A Mão da Observação Oculta","Erwin Schrödinger"],content:`
<p>A física láctea e pesada do chumbo dos tijolos normais funciona com certezas, regras lógicas e claras. Mas descendo brutal ao fundo no universo invisível do minúsculo átomo isolado nas profundezas frias invisíveis a olho (o chamado <strong>mundo quântico</strong> das minúsculas fendas escondidas atômicas e quânticas), a regra lógica se desmancha. A principal delas é bizarra e fascinante, a <strong>Superposição</strong>, onde partículas são lerdas indecisas pálidas fantasmas que escolhem fazer literalmente tudo de vez, de todas as cores cegas formas opções trágicas de vez ao mesmo tempo.</p>

<h2>O Grande Mistério: O Gato Caixa e Solvay de 1927</h2>
<p>Em 1927, numa reunião épica histórica clássica mágica de fotos em preto e branco velhas fotos nostálgicas na gringa fria Conferência de Solvay com as mentes de Einstein, Niels Bohr, Marie Curie, e Max Planck. Eles ficavam abismados pois o elétron fantasma brincava esconde-esconde atirado: enquanto ninguém abria o microscópio da câmera cega ele ficava em várias salas; na hora pura em ponto exata de fotografar na escura cortina de lente, a peça caía rápida escolhendo cravada seca morta rígida cega só num ponto sólido só fixo de lado fixo da sala de cega lente pálida da e escura máquina morta fotográfica.</p>
<p>Para mostrar nas calçadas de público popular a loucura acadêmica dessa esparramada loucura para as crianças e povos velhos das cidades cegas, o pensador brincalhão <strong>Erwin Schrödinger</strong> criou em 1935 uma charada famosa e curiosa: Pense numa caixa lacrada no cofre cego estrito escuro isolado sem janela blindado. Jogue ali dentro um pálido amargurado azarado ameno pacato frouxo frágil calmo e modesto e pacífico inofensivo gato miante pequeno cego frouxo gato, coloque pendurada num arame frágil uma pedra letal cruel podre radioativa fraca solta cega radioativa letal cruel na beirada de vidro solta com cheiro venenoso terrível. Você tranca e vira de costas.</p>
<p>A chance atômica do vidro letal de cair em estilhaços no chão venenoso de poça tóxica venenosa pálida matando ameno e matando venenosa trágica frouxa frouxa triste triste triste dolorosamente e infelizmente exata morta calada silenciosa morta letal fraca o inocente gatinho ou o frasco do cofre pálido frasco pacato do e cofre limpo amarrado do frasco vazio cofre não cair inócua limpo é 50%. A regra da Quântica fantasmagórica grita: Como o veneno pálido é atômico fantasma indeciso da superposição, a caixa agora carrega um macabro pálido zumbi trágico inescrutável bizarro triste bizarro maluco e estranho gato mesclado que está, ao longo das trevas da noite pálida da treva fechada, <strong>Grito Trágico Gato 50% Gato Morto Frio Morto Fantasma Sólido Trágico e Morto Caído Triste Fantasma Morto Cego Frouxo Pálido Sem Triste Fio da Frouxo Pálido e da e Fraco Vivo Frouxo Correndo Saudável Limpo Miando Inteiro 50% Saudável Limpo</strong>! Tudo se embaralha misturado. Só a foice dura impiedosa esmagadora trágica de luz da porta pálida maçaneta crua sendo crua aberta da e sua fria pesada visão pesada da escura curiosa cega dura visão e maçaneta do dono abre trágica colapsando (desfazendo) num único gato e caindo o gatinho no fim certo estático final exato no pó pálido duro cego da mesa e sala morta poeira de casa.</p>

<h2>Hoje em Dia: Para Que Servem Gatos e Caixas na Informática?</h2>
<p>Ninguém na IBM ou no Google usa gatos letais de verdade enfiados trancados frios maus trágicos pobres amarrados presos em jaulas metálicas caixas pálidas de plástico sujo pálidas caixas, é claro. Esse poder fantasma genial das coisas "fazerem duas, mil escolhas infinitas lógicas de vez em poeiras fantasma ao mesmo tempo de cálculos duplos e cravados na conta de calculadoras calculando fantasmas de calculadoras velhas cegamente ao mesmo momento" está criando e inventando revolucionária nas fazendas laboratórios caros ricos dos gigantes modernos colossais colossais ricos valiosos laboratórios frios colossais formidáveis grandes novos potentes os fabulosos rápidos imbatíveis velozes novos geniais mágicos dos novos mágicos mágicos estelares estelares revolucionários cérebros dos inquebráveis misteriosos incríveis pálidos super e poderosos puros estritos mágicos "<strong>Computadores Quânticos Inquebráveis Fantasmas Rápidos</strong>", que no amanhã futuro vão arrumar cega rápida cura da indústria dos amargos vírus de vacina que a escola de escola do pálido da farmácia e de pílulas antigas trágicas pálidas demoraria letal a amargos dias lentos decadas mortas duras pra criar na bancada de biologia bancada velha fria velha biologia e e fria velha lentidão formidável.</p>`,relatedIds:["efeito-fotoeletrico"],simulation:{component:"schrodinger-cat",subtitle:"O Gato de Schrödinger e a Superposição",about:"A experiência mental de 1935: um átomo radioativo em superposição (decaído E não-decaído ao mesmo tempo) está ligado a um frasco de veneno, deixando o gato formalmente vivo E morto até que a caixa seja aberta. A simulação trata a probabilidade de decaimento como uma meia-vida real: a função de onda evolui, a chance de o gato estar vivo cai exponencialmente com o tempo, e ao 'observar' (abrir a caixa) a superposição colapsa num único resultado. Ajuste a taxa de decaimento para acelerar ou retardar a meia-vida.",icon:"box",iconColor:"#7a8fa8",controls:[{id:"decayRate",label:"Taxa de Decaimento (meia-vida)",unit:"%",min:1,max:99,default:50,step:1}]}},{id:"entrelaçamento-quantico",topic:"Física Quântica",title:"Cientistas detectam entrelaçamento quântico em escala macroscópica",summary:"A bizarra conexão invisível entre duas partículas que assombrou Albert Einstein.",image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>O <strong>Entrelaçamento Quântico</strong> é a descoberta mais fantástica e macabra do mundo muito, muito pequeno dos átomos. Se você tiver duas partículas gêmeas no mundo quântico, elas ficam "amarradas" invisivelmente.</p>

<h2>História: A "Ação Fantasmagórica"</h2>
<p>Se você levar uma dessas partículas gêmeas para o planeta Marte e deixar a outra na Terra, no momento exato em que você gira e fura a partícula da Terra, a partícula em Marte reage instantaneamente junto. Albert Einstein detestava essa ideia porque as informações não podem viajar mais rápido que a velocidade da luz (ele chamou isso de "ação fantasmagórica à distância"). Mas, anos depois, com telescópios e laboratórios, cientistas ganharam prêmios provando que isso era real!</p>

<h2>Usos Inquebráveis!</h2>
<p>Hoje, cientistas usam esse poder de "partículas conectadas por fantasmas rápidos" para desenhar a Criptografia Quântica, uma rede de internet inquebrável para bancos do futuro, em que a menor tentativa hacker estouraria e desligaria o sensor instantaneamente, cortando o ataque sem defesa.</p>`,relatedIds:["computador-quantico","james-webb-galaxias","enzima-envelhecimento"],simulation:{component:"emaranhamento",subtitle:"Entrelaçamento Quântico e a Desigualdade de Bell",about:"Dois qubits entrelaçados são medidos em ângulos que você controla, e a simulação conta os resultados para calcular o parâmetro de Bell. A física clássica (variáveis ocultas locais, o que Einstein defendia) exige que ele fique em no máximo 2; a mecânica quântica chega a 2√2 ≈ 2,83, e os experimentos reais (Nobel de 2022) confirmam a quântica. A distância entre os detectores não muda a correlação: é a 'ação fantasmagórica à distância' que tanto incomodou Einstein — sem, contudo, permitir enviar informação mais rápido que a luz.",icon:"atom",iconColor:"#7a8fa8",controls:[{id:"distance",label:"Separação entre os Detectores",unit:"ms-luz",min:0,max:100,default:50,step:5}]}},{id:"fenda-dupla",topic:"Física Quântica",title:"O Experimento da Fenda Dupla",summary:"A experiência que revela a natureza dupla da matéria — onda e partícula ao mesmo tempo.",image:"https://image.pollinations.ai/prompt/Double%20slit%20experiment%20interference%20pattern%20with%20waves%20and%20particles%2C%20quantum%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Dualidade Onda-Partícula","Interferência","Colapso da Função de Onda","Observação"],content:`
<p>O <strong>experimento da fenda dupla</strong> é chamado por Feynman de 'o coração da mecânica quântica'. Partículas (elétrons, fótons) são lançadas contra uma parede com duas fendas, e o padrão que se forma atrás revela algo impossível na física clássica.</p>

<h2>Interferência de uma Partícula Consigo Mesma</h2>
<p>Mesmo enviadas uma a uma, as partículas formam faixas de interferência — como se cada uma passasse pelas duas fendas ao mesmo tempo, na forma de onda. É a dualidade onda-partícula em ação.</p>

<h2>O Efeito do Observador</h2>
<p>O mais estranho: se você instala um detector para ver por qual fenda a partícula passou, o padrão de interferência DESAPARECE e vira duas faixas simples. Observar colapsa a onda. A simulação deixa você ligar e desligar essa observação e ver o padrão mudar.</p>`,relatedIds:["efeito-fotoeletrico"],simulation:{component:"fenda-dupla",subtitle:"Experimento da Fenda Dupla",about:"Partículas são enviadas uma a uma contra duas fendas, e o histograma acumula onde elas chegam. Sem observação, emerge o padrão de interferência (faixas claras e escuras) — cada partícula interfere consigo mesma, como uma onda que passa pelas duas fendas. Ligue a observação de qual-caminho e o padrão colapsa em duas faixas simples: medir por onde a partícula passou destrói a coerência. Ajuste a distância entre as fendas para ver as franjas se aproximarem ou se afastarem.",icon:"atom",iconColor:"#7a8fa8",controls:[{id:"slitDist",label:"Distância entre as Fendas",unit:"",min:0,max:100,default:50,step:5},{id:"observing",type:"toggle",label:"Observar por qual fenda o elétron passa",on:100,off:0,default:0}]}},{id:"tunelamento",topic:"Física Quântica",title:"Tunelamento Quântico",summary:"Como uma partícula atravessa uma barreira que, classicamente, não teria energia para vencer.",image:"https://image.pollinations.ai/prompt/Quantum%20tunneling%20wave%20function%20crossing%20an%20energy%20barrier%2C%20physics%20visualization%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Função de Onda","Barreira de Potencial","Probabilidade de Transmissão","Efeito Túnel"],content:`
<p>No <strong>tunelamento quântico</strong>, uma partícula atravessa uma barreira de energia mesmo sem ter energia suficiente para passar por cima dela — algo proibido na física clássica.</p>

<h2>A Onda que Vaza</h2>
<p>A função de onda da partícula não para bruscamente na barreira: ela decai exponencialmente dentro dela. Se a barreira for fina o bastante, sobra um pedaço da onda do outro lado — e há uma probabilidade real de a partícula aparecer lá.</p>

<h2>Do Sol ao Pendrive</h2>
<p>Não é curiosidade abstrata: é o tunelamento que faz o Sol brilhar (prótons se fundem tunelando a repulsão elétrica), que os microscópios de tunelamento leem átomos e que a memória flash guarda seus dados. A simulação mostra a onda atravessando e calcula a probabilidade de transmissão.</p>`,relatedIds:["efeito-fotoeletrico"],simulation:{component:"tunelamento",subtitle:"Tunelamento Quântico",about:"A função de onda incide sobre uma barreira de potencial e, dentro dela, decai exponencialmente com o comprimento de penetração 1/κ. Quando a energia da partícula é menor que a altura da barreira, a física clássica proíbe a passagem — mas parte da onda vaza para o outro lado, e a probabilidade de transmissão é calculada de verdade. Diminua a espessura da barreira ou aproxime a energia da altura da barreira para ver a transmissão disparar exponencialmente.",icon:"atom",iconColor:"#7a8fa8",presets:[{label:"Barreira fina (0,05 nm)",values:{barrier:.05,energy:15}},{label:"Barreira grossa (0,5 nm)",values:{barrier:.5,energy:15}},{label:"Acima da barreira",values:{barrier:.3,energy:40}}],controls:[{id:"energy",label:"Energia do elétron",unit:"eV",min:1,max:50,default:15,step:1},{id:"barrier",label:"Espessura da barreira",unit:"nm",min:.05,max:1,default:.2,step:.05}]}},{id:"atomo-bohr",topic:"Física Quântica",title:"O Átomo de Bohr e as Cores do Hidrogênio",summary:"Por que um gás aquecido não brilha com todas as cores, e sim com umas poucas linhas finas — e como isso revelou que a energia do átomo vem em degraus.",image:"",level:"Intermediário",concepts:["Níveis de energia","Quantização","Fóton","Espectro de emissão","Série de Balmer"],content:`
<p>Passe a luz de uma lâmpada de hidrogênio por um prisma e o resultado surpreende: em vez de um arco-íris contínuo, aparecem quatro riscos coloridos sobre um fundo preto. Um vermelho, um azul-esverdeado e dois violeta. Sempre os mesmos, sempre nas mesmas posições. Durante décadas ninguém soube explicar por quê.</p>

<h2>A energia em degraus</h2>
<p>Em 1913, Niels Bohr propôs que o elétron do hidrogênio não pode ter qualquer energia. Só alguns valores são permitidos, numerados por um inteiro <strong>n</strong>:</p>
<div class='formula'>Eₙ = −13,6 eV / n²<small>n = 1 é o nível mais baixo; quanto maior n, mais perto de zero</small></div>
<p>O sinal negativo quer dizer que o elétron está preso ao núcleo: é preciso <em>fornecer</em> 13,6 eV para arrancá-lo do nível mais baixo. Em zero ele está livre.</p>

<h2>Cada salto, um fóton</h2>
<p>Quando o elétron cai de um nível alto para um mais baixo, a diferença de energia sai como um único fóton. Como só existem certos níveis, só existem certas diferenças — e portanto só certas cores:</p>
<div class='formula'>ΔE = 13,6 eV · (1/n_f² − 1/n_i²)&nbsp;&nbsp;&nbsp;&nbsp;λ = h·c / ΔE</div>
<div class='example'><span class='tag'>Exemplo</span>
<p>Do nível 3 para o nível 2: ΔE = 13,6 · (1/4 − 1/9) = 1,89 eV. Isso dá λ = 1240 / 1,89 ≈ 656 nm, o risco vermelho do hidrogênio, chamado H-alfa.</p></div>

<h2>As séries</h2>
<p>Os saltos são agrupados pelo nível de chegada. Os que terminam em n = 2 formam a <strong>série de Balmer</strong> e caem na luz visível. Os que terminam em n = 1 (série de Lyman) liberam muito mais energia e ficam no ultravioleta. Os que terminam em n = 3 (Paschen) ficam no infravermelho. O caminho inverso também existe: um átomo pode absorver exatamente esses mesmos fótons e subir de nível.</p>

<h2>Por que isso importa</h2>
<p>Cada elemento tem seu próprio conjunto de linhas, como uma impressão digital. É olhando para essas linhas na luz das estrelas que se sabe do que elas são feitas, a que temperatura estão e a que velocidade se afastam de nós.</p>
<div class='callout'><span class='tag'>Limite do modelo</span>
<p>O modelo de Bohr acerta as energias de átomos com um único elétron (H, He⁺, Li²⁺), mas a ideia de órbitas circulares está errada. A mecânica quântica moderna troca as órbitas por nuvens de probabilidade — e mantém os mesmos níveis de energia.</p></div>
`,relatedIds:["efeito-fotoeletrico","tunelamento","fenda-dupla"],simulation:{component:"atomo-bohr",subtitle:"Níveis de energia e espectro do hidrogênio",about:"Arraste o elétron para o nível de partida e a ponta da seta para o nível de chegada. A simulação calcula a energia do fóton, o comprimento de onda e mostra onde a linha cai no espectro: se for visível, você vê a cor; se não, ela aparece como ultravioleta ou infravermelho. Troque o átomo para ver as mesmas séries deslocadas pelo fator Z².",presets:[{label:"H-alfa (3 → 2)",values:{nInicial:3,nFinal:2,atomo:1}},{label:"H-beta (4 → 2)",values:{nInicial:4,nFinal:2,atomo:1}},{label:"Lyman-alfa (2 → 1)",values:{nInicial:2,nFinal:1,atomo:1}},{label:"Paschen-alfa (4 → 3)",values:{nInicial:4,nFinal:3,atomo:1}},{label:"Absorção (1 → 3)",values:{nInicial:1,nFinal:3,atomo:1}}],controls:[{id:"nInicial",label:"Nível de partida",unit:"",min:1,max:6,default:3,step:1},{id:"nFinal",label:"Nível de chegada",unit:"",min:1,max:6,default:2,step:1},{id:"atomo",type:"select",label:"Átomo (um elétron só)",default:1,options:[{value:1,label:"Hidrogênio"},{value:2,label:"He⁺"},{value:3,label:"Li²⁺"}]}]}},{id:"decaimento-radioativo",topic:"Física Quântica",title:"Decaimento Radioativo e Meia-Vida",summary:"Nenhum núcleo sabe quando vai decair, e mesmo assim um punhado deles segue uma lei exata. É assim que se data um fóssil e se dosa um exame.",image:"",level:"Iniciante",concepts:["Meia-vida","Decaimento exponencial","Probabilidade","Atividade","Datação por carbono-14"],content:`
<p>Alguns núcleos atômicos são instáveis: cedo ou tarde eles se transformam em outro núcleo, soltando radiação. O curioso é o "cedo ou tarde". Não existe relógio interno, não existe desgaste. Um núcleo de carbono-14 que existe há dez mil anos tem exatamente a mesma chance de decair no próximo minuto que um recém-formado.</p>

<h2>Do acaso sai uma lei</h2>
<p>Se cada núcleo tem uma chance fixa de decair por unidade de tempo, quanto mais núcleos houver, mais decaimentos acontecem — e a amostra encolhe na proporção do que resta. O resultado é uma queda exponencial:</p>
<div class='formula'>N(t) = N₀ · 2^(−t / T½)<small>T½ é a meia-vida: o tempo para metade da amostra decair</small></div>
<p>Depois de uma meia-vida sobra metade. Depois de duas, um quarto. Depois de dez, cerca de um milésimo. A meia-vida é uma propriedade do isótopo e não muda com temperatura, pressão ou reações químicas.</p>

<div class='example'><span class='tag'>Exemplo</span>
<p>O carbono-14 tem meia-vida de 5 730 anos. Um osso com um quarto do carbono-14 de um osso recente passou por duas meias-vidas: tem cerca de 11 460 anos.</p></div>

<h2>O indivíduo é imprevisível, o conjunto não</h2>
<p>Com poucos núcleos, a contagem real oscila bastante em volta da curva. Com muitos, a oscilação relativa some: a flutuação típica é da ordem de √N, então com um milhão de núcleos o desvio é de um em mil. É por isso que a lei parece exata no laboratório, onde uma amostra minúscula tem trilhões de trilhões de átomos.</p>

<h2>Atividade</h2>
<p>O que um detector mede não é quantos núcleos restam, e sim quantos decaem por segundo. Essa <strong>atividade</strong> é proporcional ao que resta, então cai com a mesma meia-vida. Num exame de medicina nuclear usa-se tecnécio-99m, de meia-vida de 6 horas: tempo suficiente para fazer a imagem, curto o bastante para a radiação sumir do corpo em poucos dias.</p>

<div class='callout'><span class='tag'>Erro comum</span>
<p>Duas meias-vidas não zeram a amostra. Depois da primeira sobra metade; a segunda leva metade <em>do que restou</em>. A curva se aproxima de zero sem nunca chegar lá de uma vez.</p></div>
`,relatedIds:["schrodinger-cat","tunelamento","atomo-bohr"],simulation:{component:"decaimento-radioativo",subtitle:"Decaimento radioativo, núcleo a núcleo",about:"Cada quadradinho é um núcleo que, a cada instante, tem uma chance fixa de decair. Compare a contagem real com a lei exponencial: com poucos núcleos o acaso aparece, com muitos a curva alisa. A escala logarítmica transforma a exponencial numa reta, e o eixo do tempo usa a meia-vida real do isótopo escolhido.",controls:[{id:"isotopo",type:"select",label:"Isótopo",default:0,options:[{value:0,label:"Carbono-14"},{value:1,label:"Iodo-131"},{value:2,label:"Tecnécio-99m"},{value:3,label:"Radônio-222"},{value:4,label:"Urânio-238"}]},{id:"nucleos",label:"Núcleos na amostra",unit:"",min:100,max:900,default:400,step:100},{id:"ritmo",label:"Tempo de tela por meia-vida",unit:"s",min:2,max:12,default:5,step:1},{id:"logScale",type:"toggle",label:"Escala logarítmica no gráfico",on:1,off:0,default:0}]}},{id:"stern-gerlach",topic:"Física Quântica",title:"Stern–Gerlach: o Spin Só Tem Dois Lados",summary:"Um feixe de átomos passa por um ímã e se divide em exatamente dois. O experimento de 1922 que mostrou que o spin é quantizado — e que medir muda o que se sabe.",image:"",level:"Avançado",concepts:["Spin","Quantização espacial","Medida quântica","Probabilidade","Superposição"],content:`
<p>Em 1922, Otto Stern e Walther Gerlach fizeram um feixe de átomos de prata atravessar um ímã cujo campo era mais forte de um lado que do outro. Cada átomo se comporta como um ímã minúsculo, e um campo assim empurra o átomo para cima ou para baixo conforme a orientação desse ímãzinho.</p>

<h2>O que se esperava e o que apareceu</h2>
<p>Se a orientação pudesse ser qualquer uma, o feixe se abriria numa mancha contínua na tela. O que apareceu foram <strong>duas manchas separadas</strong>, e nada no meio. A grandeza responsável, que depois ganhou o nome de spin, só admite dois resultados quando medida ao longo de um eixo: para cima ou para baixo.</p>

<h2>Dois ímãs em sequência</h2>
<p>A parte mais estranha vem quando se colocam dois ímãs um depois do outro. O primeiro separa o feixe e deixa passar só os átomos "para cima" no eixo vertical. O segundo mede de novo, num eixo inclinado de um ângulo θ em relação ao primeiro. A chance de cada átomo sair "para cima" nesse novo eixo é:</p>
<div class='formula'>P(↑) = cos²(θ/2)&nbsp;&nbsp;&nbsp;&nbsp;P(↓) = sen²(θ/2)</div>
<p>Com θ = 0° todos sobem: medir de novo no mesmo eixo confirma o resultado. Com θ = 180° todos descem. Com θ = 90° dá meio a meio, e não há como prever o resultado de um átomo individual.</p>

<div class='example'><span class='tag'>Exemplo</span>
<p>Para θ = 60°: P(↑) = cos²(30°) = 0,75. De cada cem átomos preparados "para cima" na vertical, cerca de 75 sobem no segundo ímã e 25 descem.</p></div>

<h2>O que isso ensina</h2>
<p>Saber com certeza o spin num eixo significa não saber nada sobre o spin num eixo perpendicular. Não é limitação do aparelho: as duas informações não existem ao mesmo tempo. O estado "para cima em z" é, ele mesmo, uma soma em partes iguais de "para cima em x" e "para baixo em x".</p>

<div class='callout'><span class='tag'>Detalhe</span>
<p>Sem o primeiro ímã, o feixe que sai do forno não tem direção preferida. Nesse caso o segundo ímã divide meio a meio qualquer que seja o ângulo.</p></div>
`,relatedIds:["entrelaçamento-quantico","schrodinger-cat","fenda-dupla"],simulation:{component:"stern-gerlach",subtitle:"Stern–Gerlach com dois ímãs em sequência",about:"Gire o eixo do segundo ímã arrastando a ponta da seta e veja a divisão do feixe mudar. O primeiro ímã prepara átomos com spin para cima em z; o segundo mede num eixo inclinado, e cada átomo sai para cima com probabilidade cos²(θ/2). Desligue o primeiro ímã para ver o feixe sem preparo dividir sempre meio a meio.",presets:[{label:"Mesmo eixo (0°)",values:{angulo:0,filtro:1}},{label:"60°",values:{angulo:60,filtro:1}},{label:"Perpendicular (90°)",values:{angulo:90,filtro:1}},{label:"Oposto (180°)",values:{angulo:180,filtro:1}}],controls:[{id:"angulo",label:"Ângulo do segundo ímã",unit:"°",min:0,max:180,default:60,step:5},{id:"taxa",label:"Átomos por segundo",unit:"",min:5,max:60,default:25,step:5},{id:"filtro",type:"toggle",label:"Primeiro ímã ligado (prepara o feixe)",on:1,off:0,default:1}]}},{id:"poco-potencial",topic:"Física Quântica",title:"A Partícula na Caixa",summary:"Prenda um elétron entre duas paredes e ele só aceita certas energias. É o modelo mais simples da mecânica quântica, e explica por que pontos quânticos mudam de cor com o tamanho.",image:"",level:"Intermediário",concepts:["Função de onda","Quantização da energia","Onda estacionária","Energia de ponto zero","Ponto quântico"],content:`
<p>Imagine um elétron que só pode se mover ao longo de um trecho de comprimento L, com paredes que ele não consegue atravessar. Classicamente ele seria uma bolinha quicando de um lado para o outro, com a energia que você quisesse. Na mecânica quântica o elétron é uma onda, e uma onda presa entre duas paredes não pode ter qualquer forma.</p>

<h2>Só cabem ondas inteiras</h2>
<p>A onda precisa valer zero nas duas paredes. Isso só acontece se nela couber um número inteiro de meias-ondas, exatamente como numa corda de violão presa nas pontas:</p>
<div class='formula'>λₙ = 2L / n&nbsp;&nbsp;&nbsp;&nbsp;Eₙ = n² · h² / (8mL²)<small>para um elétron, h²/8m = 0,376 eV·nm²</small></div>
<p>O número n conta os ventres da onda. Como a energia depende de n², os níveis ficam cada vez mais afastados conforme se sobe.</p>

<div class='example'><span class='tag'>Exemplo</span>
<p>Elétron numa caixa de 1 nm: E₁ = 0,376 eV, E₂ = 1,50 eV, E₃ = 3,38 eV. Para saltar de n = 1 para n = 2 ele precisa absorver 1,13 eV, um fóton de cerca de 1100 nm (infravermelho).</p></div>

<h2>Três surpresas</h2>
<p><strong>A energia mínima não é zero.</strong> O nível mais baixo é n = 1, não n = 0. Uma partícula confinada nunca fica parada. <strong>Apertar custa energia.</strong> Reduzir L pela metade multiplica todas as energias por quatro. <strong>Há lugares proibidos.</strong> Nos nós da onda, a chance de encontrar a partícula é zero, mesmo ela estando dos dois lados.</p>

<h2>Onde isso aparece</h2>
<p>Pontos quânticos são cristais de poucos nanômetros que funcionam como caixas para elétrons. Cristais menores têm níveis mais afastados e emitem luz mais azul; os maiores emitem luz mais vermelha. É o mesmo material, com a cor controlada só pelo tamanho. Telas de TV usam esse efeito.</p>

<div class='callout'><span class='tag'>Estados que se movem</span>
<p>Num único nível, a distribuição de probabilidade fica parada no tempo. Só quando o elétron está numa soma de dois níveis é que a probabilidade balança de um lado para o outro, com período h/ΔE.</p></div>
`,relatedIds:["atomo-bohr","tunelamento","oscilador-quantico"],simulation:{component:"poco-potencial",subtitle:"Partícula num poço de potencial infinito",about:"Arraste a parede da direita para mudar a largura do poço e escolha o nível. A área cheia é a chance de encontrar a partícula em cada ponto; o tracejado é a onda. Ligue a soma de dois níveis para ver a probabilidade balançar, e compare a chance em cada terço do poço com o palpite clássico de um terço para cada lado.",presets:[{label:"Estado fundamental",values:{nivel:1,superposicao:0}},{label:"n = 3",values:{nivel:3,superposicao:0}},{label:"Poço estreito (0,3 nm)",values:{largura:.3}},{label:"Poço largo (2 nm)",values:{largura:2}},{label:"Balanço (níveis 1 + 2)",values:{nivel:1,superposicao:1}}],controls:[{id:"nivel",label:"Nível n",unit:"",min:1,max:6,default:1,step:1},{id:"largura",label:"Largura do poço",unit:"nm",min:.2,max:2,default:1,step:.05},{id:"superposicao",type:"toggle",label:"Somar com o nível seguinte",on:1,off:0,default:0},{id:"onda",type:"toggle",label:"Mostrar a onda ψ",on:1,off:0,default:1}]}},{id:"oscilador-quantico",topic:"Física Quântica",title:"O Oscilador Harmônico Quântico",summary:"A massa na mola refeita pela mecânica quântica: degraus de energia iguais, um mínimo que não é zero e uma onda que vaza para onde não deveria chegar.",image:"",level:"Avançado",concepts:["Energia de ponto zero","Níveis igualmente espaçados","Polinômios de Hermite","Região classicamente proibida","Princípio da correspondência"],content:`
<p>Quase tudo que vibra perto do equilíbrio se comporta como uma massa presa a uma mola: os dois átomos de uma molécula, um átomo num cristal, até um modo da luz dentro de uma cavidade. Por isso o oscilador harmônico é o problema mais usado da física quântica.</p>

<h2>Uma escada de degraus iguais</h2>
<div class='formula'>Eₙ = ħω · (n + ½)<small>n = 0, 1, 2, … e ω é a frequência natural do oscilador</small></div>
<p>Diferente da partícula na caixa, aqui os níveis ficam todos à mesma distância: ħω. Subir um degrau é absorver um fóton dessa energia; descer é emitir um. É assim que moléculas absorvem luz infravermelha, cada ligação na sua frequência.</p>

<div class='example'><span class='tag'>Exemplo</span>
<p>A ligação do monóxido de carbono vibra com ħω ≈ 0,27 eV. Um degrau corresponde a um fóton de 1240 / 0,27 ≈ 4600 nm, no infravermelho. É por absorver nessa faixa que gases como o CO₂ retêm calor na atmosfera.</p></div>

<h2>O mínimo não é zero</h2>
<p>No nível n = 0 sobra a energia ½ħω, chamada <strong>energia de ponto zero</strong>. O oscilador não consegue ficar parado no fundo: isso exigiria posição e momento exatos ao mesmo tempo, o que o princípio da incerteza proíbe.</p>

<h2>A onda vaza</h2>
<p>Uma massa clássica com certa energia vai até um ponto de retorno e volta. A onda quântica passa desse ponto e decai aos poucos do outro lado. No estado fundamental, a chance de encontrar a partícula além do ponto de retorno é de 15,7 %.</p>

<h2>Voltando ao mundo clássico</h2>
<p>Uma massa numa mola passa mais tempo perto das pontas, onde anda devagar, do que no meio. Nos níveis baixos a distribuição quântica não se parece nada com isso. Nos níveis altos ela se acumula nas pontas e, em média, acompanha a curva clássica. É o <strong>princípio da correspondência</strong>: a física quântica reencontra a clássica quando os números quânticos ficam grandes.</p>
`,relatedIds:["poco-potencial","principio-incerteza","tunelamento"],simulation:{component:"oscilador-quantico",subtitle:"Oscilador harmônico quântico",about:"Arraste a marca do nível para subir ou descer a escada de energia. A curva cheia é a chance de encontrar a partícula em cada posição; a parte destacada está além do ponto de retorno clássico, onde uma massa comum nunca chegaria. Compare com a distribuição clássica tracejada e veja as duas se aproximarem nos níveis altos.",presets:[{label:"Estado fundamental (n = 0)",values:{nivel:0}},{label:"n = 1",values:{nivel:1}},{label:"n = 10 (quase clássico)",values:{nivel:10}},{label:"Vibração do CO (0,27 eV)",values:{quantum:.27}},{label:"Vibração do H₂ (0,52 eV)",values:{quantum:.52}}],controls:[{id:"nivel",label:"Nível n",unit:"",min:0,max:10,default:0,step:1},{id:"quantum",label:"Tamanho do degrau ħω",unit:"eV",min:.05,max:1,default:.27,step:.01},{id:"classico",type:"toggle",label:"Comparar com o oscilador clássico",on:1,off:0,default:1},{id:"psi",type:"toggle",label:"Mostrar a onda ψ no lugar de |ψ|²",on:1,off:0,default:0}]}},{id:"principio-incerteza",topic:"Física Quântica",title:"O Princípio da Incerteza",summary:"Quanto melhor se sabe onde uma partícula está, menos se sabe para onde ela vai. Não é falha de medida: é o que significa ser uma onda.",image:"",level:"Intermediário",concepts:["Pacote de onda","Posição e momento","Relação de Heisenberg","Espalhamento do pacote","Comprimento de onda de de Broglie"],content:`
<p>Uma onda perfeita, com um único comprimento de onda, se estende para sempre: tem momento bem definido e nenhuma posição. Para localizar uma partícula numa região é preciso somar várias ondas de comprimentos diferentes, que se reforçam num trecho e se cancelam no resto. O resultado é um <strong>pacote de onda</strong>.</p>

<h2>A troca inevitável</h2>
<p>Um pacote estreito exige muitas ondas diferentes, ou seja, muitos momentos possíveis. Um pacote feito de poucas ondas é largo. Essa relação entre as duas larguras é a relação de Heisenberg:</p>
<div class='formula'>Δx · Δp ≥ ħ / 2</div>
<p>Ela não diz que o aparelho atrapalha. Diz que não existe estado em que posição e momento sejam ambos precisos, do mesmo jeito que não existe um som que seja ao mesmo tempo um estalo curtíssimo e uma nota pura.</p>

<div class='example'><span class='tag'>Exemplo</span>
<p>Um elétron confinado em 0,1 nm (o tamanho de um átomo) tem incerteza de velocidade de pelo menos ħ / (2·m·Δx) ≈ 580 km/s. Ele não pode estar parado dentro do átomo.</p></div>

<h2>O pacote se desfaz</h2>
<p>Como o pacote contém vários momentos, suas partes andam em velocidades diferentes e ele se alarga com o tempo. Quanto mais estreito no começo, mais rápido se espalha. Para o elétron do exemplo, a largura dobra em uma fração de femtossegundo.</p>

<h2>Por que não percebemos</h2>
<p>A massa aparece no denominador. Para um grão de poeira de um micrograma localizado em 0,1 nm, a incerteza de velocidade é da ordem de 10⁻¹⁶ m/s: em mil anos ele se espalharia menos de dois centésimos de milímetro. Objetos do dia a dia têm posição e velocidade bem definidas para todos os efeitos práticos.</p>

<div class='callout'><span class='tag'>Erro comum</span>
<p>A incerteza não é ignorância sobre um valor que existe escondido. Experimentos como os de Bell mostram que os valores não estão definidos antes da medida.</p></div>
`,relatedIds:["fenda-dupla","poco-potencial","oscilador-quantico"],simulation:{component:"principio-incerteza",subtitle:"Pacote de onda e a relação de Heisenberg",about:"Arraste a borda do pacote para apertá-lo ou alargá-lo e veja a distribuição de momentos fazer o contrário. O gráfico da direita mostra a troca: nenhum estado fica abaixo da curva. Ligue a evolução no tempo para ver o pacote livre se espalhar, e troque a partícula para comparar um elétron com um grão de poeira.",presets:[{label:"Tamanho de um átomo (0,05 nm)",values:{sigma:.05,evoluir:0}},{label:"Pacote médio (0,5 nm)",values:{sigma:.5,evoluir:0}},{label:"Pacote largo (2 nm)",values:{sigma:2,evoluir:0}}],controls:[{id:"sigma",label:"Largura do pacote Δx",unit:"nm",min:.05,max:2,default:.5,step:.05},{id:"k0",label:"Momento médio p/ħ",unit:"nm⁻¹",min:0,max:10,default:5,step:.5},{id:"particula",type:"select",label:"Partícula",default:0,options:[{value:0,label:"Elétron"},{value:1,label:"Próton"},{value:2,label:"Grão de poeira"}]},{id:"evoluir",type:"toggle",label:"Deixar o pacote evoluir no tempo",on:1,off:0,default:0}]}},{id:"polarizacao-fotons",topic:"Física Quântica",title:"Polarização: o Paradoxo dos Três Filtros",summary:"Dois polarizadores cruzados bloqueiam toda a luz. Coloque um terceiro entre eles e a luz volta. O experimento mais barato para ver a medida quântica mudando o estado.",image:"",level:"Iniciante",concepts:["Polarização","Lei de Malus","Fóton","Medida quântica","Probabilidade"],content:`
<p>A luz é uma onda que vibra de lado, perpendicular à direção em que viaja. Um polarizador é um filtro que só deixa passar a vibração ao longo de um eixo. Óculos de sol polarizados e telas de cristal líquido funcionam assim.</p>

<h2>A lei de Malus</h2>
<p>Se a luz já está polarizada e encontra um segundo polarizador girado de um ângulo θ, a intensidade que passa é:</p>
<div class='formula'>I = I₀ · cos²θ</div>
<p>Com os eixos alinhados passa tudo. Com os eixos a 90° (cruzados), não passa nada.</p>

<h2>Um fóton de cada vez</h2>
<p>A luz é feita de fótons, e um fóton não se divide. Diante do polarizador ele passa inteiro ou é absorvido. A lei de Malus vira uma regra de probabilidade: cada fóton passa com chance cos²θ. E quem passa sai polarizado <em>no eixo do polarizador</em>, qualquer que fosse a sua direção antes.</p>

<h2>O paradoxo dos três filtros</h2>
<p>Com dois polarizadores cruzados, a 0° e 90°, tudo escuro. Agora coloque um terceiro entre os dois, a 45°. A intuição diz que mais um filtro só pode bloquear mais. O que acontece é o contrário: a luz reaparece.</p>
<div class='example'><span class='tag'>Fazendo a conta</span>
<p>Depois do primeiro, os fótons estão a 0°. No do meio, a 45°, passam cos²45° = 50 %, e saem a 45°. No último, a 90°, o ângulo entre o fóton e o eixo é outra vez 45°: passam mais 50 %. No fim chega 25 % do que saiu do primeiro polarizador.</p></div>

<h2>O que isso mostra</h2>
<p>O polarizador do meio não seleciona fótons que "já estavam" a 45°. Ele faz uma medida, e a medida deixa o fóton num estado novo. É a mesma regra do experimento de Stern–Gerlach, com um material que cabe no bolso: três pedaços de filme polarizador.</p>
`,relatedIds:["stern-gerlach","entrelaçamento-quantico","efeito-fotoeletrico"],simulation:{component:"polarizacao-fotons",subtitle:"Polarizadores, um fóton de cada vez",about:"A simulação começa com dois polarizadores cruzados: nada chega ao detector. Coloque o do meio e gire-o arrastando a ponta do eixo. Cada fóton passa inteiro ou é absorvido, com chance cos²θ, e sai polarizado no eixo do polarizador que atravessou. As barras comparam a contagem real com a previsão em cada etapa.",presets:[{label:"Paralelos (0° e 0°)",values:{angulo3:0,meio:0}},{label:"Malus a 60°",values:{angulo3:60,meio:0}},{label:"Cruzados (0° e 90°)",values:{angulo3:90,meio:0}},{label:"Cruzados + 45° no meio",values:{angulo3:90,meio:1,angulo2:45}}],controls:[{id:"meio",type:"toggle",label:"Colocar o polarizador do meio",on:1,off:0,default:0},{id:"angulo2",label:"Ângulo do polarizador do meio",unit:"°",min:0,max:180,default:45,step:5},{id:"angulo3",label:"Ângulo do último polarizador",unit:"°",min:0,max:180,default:90,step:5},{id:"taxa",label:"Fótons por segundo",unit:"",min:10,max:80,default:40,step:5}]}}],YC=[{id:"fractais-geometria",topic:"Matemática",title:"A Geometria dos Fractais",summary:"Padrões matemáticos que se repetem infinitamente e imitam as formas belas e imperfeitas da natureza.",image:"https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Fractal","Autossimilaridade","Padrões da Natureza"],content:`
<p>Na escola, aprendemos a geometria clássica: círculos, triângulos, quadrados e linhas retas lisas (Geometria Euclidiana). Porém, se olharmos para a natureza, quase nada tem essas formas tão lisinhas e perfeitas. As nuvens não são esferas e os raios de uma tempestade não descem em linha reta. Para explicar essas formas rugosas e caóticas, a matemática inventou a <strong>Geometria Fractal</strong>.</p>

<h2>História: O Nascimento do Termo</h2>
<p>O matemático Benoît Mandelbrot trabalhava na IBM nos anos 1970 quando começou a usar os novos computadores da época para desenhar contas repetitivas que formavam desenhos assustadoramente parecidos com montanhas e costas litorâneas. Ele cunhou a palavra "Fractal" (do latim para quebrado, fraturado) para descrever essa nova geometria da natureza.</p>

<h2>O que é um Fractal?</h2>
<p>Um fractal é um padrão matemático infinito que possui uma característica especial chamada <strong>autossimilaridade</strong>. Isso significa que, não importa o quanto você dê zoom (aumente com a lupa) ou se aproxime do desenho, a parte minúscula será sempre uma cópia perfeita com o mesmo formato do desenho grande inteiro.</p>

<h2>Aplicações no Mundo Real</h2>
<p>Podemos ver fractais reais por toda parte: nos galhos de uma árvore que se dividem em galhos menores e imitam a árvore toda, nos flocos de neve e no desenho das veias do nosso corpo. Essa matemática revolucionou a tecnologia: na indústria do cinema, é com as regras dos fractais que os computadores conseguem gerar florestas e mundos 3D realistas; e nos celulares modernos, o formato das antenas internas que pegam muitos sinais e redes é todo dobrado seguindo desenhos de fractais matemáticos perfeitos!</p>`,relatedIds:["fibonacci"],simulation:{component:"mandelbrot",subtitle:"Explorador Fractal (O Conjunto de Mandelbrot)",about:'Aumente o Zoom na borda escura e ondulada do desenho matemático. Você vai perceber, encantado, que à medida que você se aproxima mais e mais e desce profundamente, a forma grande original "reaparece" completa, gerando um universo infinito de repetições nas beiradas. É o infinito na tela do computador.',icon:"zoom-in",iconColor:"#8c8aa6",controls:[{id:"zoom",label:"Lupa do Telescópio (Nível de Zoom Adentro)",unit:"x",min:0,max:100,default:0,step:1},{id:"maxIter",label:"Nitidez (Dificuldade do Esforço do Computador)",unit:"Lim",min:20,max:400,default:90,step:10},{id:"colorShift",label:"Deslocamento de Cor",unit:"",min:0,max:100,default:0,step:5}]}},{id:"fibonacci",topic:"Matemática",title:"A Sequência de Fibonacci e a Proporção Áurea",summary:"A misteriosa e simples soma de números que dita as regras de beleza e eficiência em galáxias e plantas.",image:"https://images.unsplash.com/photo-1544253906-8d65ac8c09a3?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Sequência de Fibonacci","Proporção Áurea (O Número de Ouro)","Aplicações na Arte e Biologia"],content:`
<p>A matemática parece, muitas vezes, cheia de regras duras na lousa. Mas brincadeiras simples com números às vezes revelam segredos profundos sobre a construção do universo. A <strong>Sequência de Fibonacci</strong> é um desses tesouros.</p>

<h2>A História dos Coelhos de Pisa</h2>
<p>O brilhante matemático italiano Leonardo de Pisa (conhecido como Fibonacci) viveu no século XIII (1202). Enquanto tentava resolver um exercício sobre como as populações de coelhos cresciam mês após mês, ele notou e anotou um padrão estranho na contagem de filhotes que se repetia e crescia incansavelmente de forma linda e cadenciada.</p>

<h2>A Regra da Soma Simples</h2>
<p>O padrão começa com os números 0 e 1. A regra para achar o próximo número na fila é simplesmente <strong>somar os dois números imediatamente anteriores</strong>. Veja:</p>
<ul class="list-disc list-inside mt-2 mb-4 space-y-1">
  <li>0 + 1 = <strong>1</strong></li>
  <li>1 + 1 = <strong>2</strong></li>
  <li>1 + 2 = <strong>3</strong></li>
  <li>2 + 3 = <strong>5</strong></li>
  <li>3 + 5 = <strong>8</strong></li>
  <li>E a fila continua para sempre: 13, 21, 34, 55, 89, 144...</li>
</ul>

<h2>O Número de Ouro (Phi) e suas Aplicações</h2>
<p>A mágica não para aí. Se você pegar um número grande dessa sequência e dividir pelo número anterior (por exemplo, 89 dividido por 55), a resposta sempre se aproxima do número mágico <strong>1,618</strong> (chamado de Proporção Áurea, Phi). O mais surpreendente é que a <em>natureza adora esse número</em> para criar coisas bonitas e eficientes na vida real: a distribuição em espiral exata das sementes de um girassol, o formato da carapaça de caramujos e, num limite muito superior de tamanho, o braço em espiral das galáxias no céu seguem essa regra. Até mesmo pintores como Da Vinci usavam a proporção de 1,618 para posicionar rostos de forma estética, e analistas da bolsa de valores hoje cruzam dados econômicos tentando encontrar suporte com as quedas do mercado usando "traços mágicos de Fibonacci".</p>`,relatedIds:["fractais-geometria"],simulation:{component:"fibonacci",subtitle:"Fibonacci, Espiral Áurea e Filotaxia",about:"A sequência (cada termo é a soma dos dois anteriores) constrói a espiral áurea a partir de quadrados de lado Fₙ, e a razão Fₙ/Fₙ₋₁ converge para o número de ouro φ ≈ 1,618. No modo filotaxia, as sementes são dispostas com o ângulo de ouro (~137,5°) — o mesmo do girassol —, e você pode variar o ângulo para ver por que só esse valor preenche o disco sem deixar espaços nem sobreposições.",icon:"spiral",iconColor:"#8c8aa6",controls:[{id:"terms",label:"Número de Termos",unit:"",min:3,max:14,default:8,step:1},{id:"angle",label:"Ângulo de Divergência",unit:"°",min:120,max:160,default:137.5,step:.5},{id:"viewType",type:"select",label:"O que mostrar",default:0,options:[{value:0,label:"Espiral"},{value:100,label:"Filotaxia (girassol)"}]}]}},{id:"teoria-dos-numeros",topic:"Matemática",title:"Teoria dos Números e os Cadeados Primos",summary:'Como uma matemática antiga, considerada "inútil", passou a proteger as senhas bancárias de todo o mundo.',image:"https://images.unsplash.com/photo-1542128962-9d50ad7bf014?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Números Primos","Criptografia RSA","Segurança da Internet"],content:`
<p>Na escola primária, aprendemos a fazer fatoração e descobrimos a família dos <strong>Números Primos</strong>. Um número primo (como 2, 3, 5, 7, 11, 13) é aquele que é solitário: ele se recusa a ser quebrado e só pode ser dividido de forma limpa pelo número 1 ou por ele mesmo. Eles são, de certa forma, os bloquinhos indestrutíveis que constroem os outros números maiores.</p>

<h2>A História da Pura Lógica Grega</h2>
<p>Por quase dois mil anos, os famosos filósofos matemáticos, desde o antigo grego Euclides (que provou que existem infinitos números primos) até Gênios europeus séculos depois, debruçavam-se, encantados, caçando e listando esses números teimosos. A ciência adorava brincar com eles, mas todos achavam que isso não serviria para nenhuma construção, comércio ou aplicação prática na vida real das pessoas. Era só a pura beleza abstrata da lógica inútil.</p>

<h2>O Uso Prático: A Internet Moderna Segura!</h2>
<p>A percepção da humanidade foi virada de cabeça para baixo na década de 1970 com a explosão das redes de dados, com três caras espertos de computação chamados Rivest, Shamir e Adleman inventando a Criptografia <strong>RSA</strong>. Como poderíamos mandar senhas bancárias na internet aberta, cruzando fios na rua sem que hackers no caminho capturassem o número? A engrenagem deles explora a "falha" da computação. Explicando fácil: Se você pedir a um celular para multiplicar dois primos gigantes de mil dígitos, ele dá a resposta final num milissegundo. Mas, se você der só o enorme resultado final público sujo espalhado a um computador e mandar que ele "descubra" e fature quais foram os dois únicos primos gigantes secretos formadores, não basta milissegundo: levariam anos e anos varrendo e esgotando as peças em contas. É esse muro formidável inquebrável, essa demora insana causada pela lentidão de quebrar os velhos primos gregos antigos, que blinda seu WhatsApp com segurança contra os ataques espiões e olhos hackers. Incrível!</p>`,relatedIds:[],simulation:null},{id:"gaussiana",topic:"Matemática",title:"A Curva Normal e a Tábua de Galton",summary:"Por que tantas coisas na natureza seguem o mesmo formato de sino.",image:"https://image.pollinations.ai/prompt/A%20Galton%20board%20with%20balls%20forming%20a%20bell%20curve%2C%20probability%2C%20clean%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Distribuição Normal","Teorema Central do Limite","Probabilidade","Desvio Padrão"],content:`
<p>Altura das pessoas, erros de medida, notas de prova: uma quantidade enorme de fenômenos segue a mesma <strong>curva em forma de sino</strong> — a distribuição normal (ou gaussiana).</p>

<h2>A Tábua de Galton</h2>
<p>A tábua de Galton mostra por quê: bolinhas caem por uma grade de pinos, desviando para a esquerda ou direita a cada colisão. No fim, elas se empilham formando o sino — os caminhos do meio são muito mais prováveis que os das pontas.</p>

<h2>O Teorema Central do Limite</h2>
<p>Esse é o motivo profundo: quando somamos muitos efeitos aleatórios pequenos e independentes, o resultado tende à curva normal, não importa a origem de cada efeito. A simulação deixa você enviesar os pinos e ver a média deslizar, acompanhando o histograma se aproximar da curva teórica.</p>`,relatedIds:["fractais-geometria"],simulation:{component:"gaussiana",subtitle:"Tábua de Galton e a Curva Normal",about:"Bolinhas caem por uma grade de pinos e, a cada colisão, desviam para os lados — a soma de muitos desvios aleatórios independentes é justamente o que o Teorema Central do Limite prevê que forme a curva normal. O histograma real das bolinhas é sobreposto à gaussiana teórica e converge para ela conforme a amostra cresce. Enviese os pinos para ver a média (o pico) deslizar, com média e desvio padrão medidos ao vivo.",icon:"spiral",iconColor:"#8c8aa6",controls:[{id:"bias",label:"Viés dos Pinos (0 = esquerda · 100 = direita)",unit:"",min:0,max:100,default:50,step:5},{id:"rate",label:"Velocidade de Queda",unit:"",min:1,max:20,default:5,step:1}]}},{id:"pitagoras",topic:"Matemática",title:"Teorema de Pitágoras e a Lei dos Cossenos",summary:"A relação mais famosa da geometria — e o que acontece quando o ângulo não é reto.",image:"https://image.pollinations.ai/prompt/Right%20triangle%20with%20squares%20on%20each%20side%20showing%20Pythagorean%20theorem%2C%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Teorema de Pitágoras","Triângulo Retângulo","Lei dos Cossenos","Hipotenusa"],content:`
<p>O <strong>Teorema de Pitágoras</strong> diz que, num triângulo retângulo, o quadrado da hipotenusa é a soma dos quadrados dos catetos: a² + b² = c². É a relação mais famosa de toda a geometria.</p>

<h2>Os Quadrados sobre os Lados</h2>
<p>A prova visual clássica desenha um quadrado sobre cada lado do triângulo: a área dos dois quadrados menores, juntos, é exatamente igual à do quadrado maior. A simulação mostra essas áreas se ajustando quando você muda os catetos.</p>

<h2>Quando o Ângulo Não é Reto</h2>
<p>Pitágoras é um caso particular. Se o ângulo entre os catetos não for 90°, vale a <strong>lei dos cossenos</strong>: c² = a² + b² − 2ab·cos(γ). A simulação deixa você girar o ângulo e ver o erro de Pitágoras crescer — ele só acerta exatamente aos 90°.</p>`,relatedIds:["fractais-geometria"],simulation:{component:"pitagoras",subtitle:"Pitágoras e a Lei dos Cossenos",about:"Os quadrados sobre os catetos e a hipotenusa são desenhados com área proporcional, mostrando a² + b² = c² como uma igualdade de áreas. Mas o teorema é só um caso particular: ao girar o ângulo entre os catetos para longe de 90°, a simulação passa a usar a lei dos cossenos c² = a² + b² − 2ab·cos(γ) e mostra o erro que Pitágoras cometeria — zero exatamente aos 90°, crescente para longe dali.",icon:"spiral",iconColor:"#8c8aa6",presets:[{label:"Triângulo 3-4-5",values:{sideA:60,sideB:80,angle:90}},{label:"Ângulo agudo",values:{angle:60}},{label:"Ângulo obtuso",values:{angle:120}}],controls:[{id:"sideA",label:"Cateto a",unit:"",min:20,max:150,default:80,step:5},{id:"sideB",label:"Cateto b",unit:"",min:20,max:150,default:110,step:5},{id:"angle",label:"Ângulo entre os catetos",unit:"°",min:30,max:150,default:90,step:1}]}},{id:"mobius",topic:"Matemática",title:"A Fita de Möbius e a Topologia",summary:"Uma superfície com um lado só: o objeto que quebra nossa intuição de dentro e fora.",image:"https://image.pollinations.ai/prompt/A%20Mobius%20strip%20twisted%20surface%2C%20topology%2C%20elegant%20mathematical%20object%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Topologia","Superfície Não-Orientável","Característica de Euler","Möbius"],content:`
<p>Pegue uma tira de papel, dê meia-volta numa das pontas e cole as duas. O resultado é a <strong>fita de Möbius</strong>: uma superfície que, surpreendentemente, tem um lado só e uma borda só.</p>

<h2>Um Lado Só</h2>
<p>Se você percorrer a fita com um lápis sem levantá-lo, volta ao início tendo passado pelos 'dois' lados — porque não há dois lados. Cortá-la ao meio não a separa em duas: dá uma única fita maior. É a topologia desafiando a intuição.</p>

<h2>O Número de Voltas Importa</h2>
<p>Com meia-volta (ou um número ímpar delas), a superfície é não-orientável e tem um lado. Com um número par de voltas, viram dois lados de novo. A simulação deixa você variar o número de meias-voltas e ver a superfície mudar de natureza.</p>`,relatedIds:["fractais-geometria"],simulation:{component:"mobius",subtitle:"A Fita de Möbius e a Topologia",about:"A superfície é gerada em 3D com o número de meias-voltas que você escolher. Com um número ímpar de voltas ela é não-orientável — um lado só, uma borda só — e com número par volta a ter dois lados. A característica de Euler (χ = 0) e a contagem de faces e bordas são mostradas, deixando visível como a topologia da fita muda conforme as voltas.",icon:"spiral",iconColor:"#8c8aa6",controls:[{id:"twists",label:"Número de Meias-Voltas",unit:"",min:0,max:4,default:1,step:1},{id:"width",label:"Largura da Fita",unit:"",min:10,max:100,default:50,step:5}]}}],JC=[{id:"tabela-periodica",topic:"Química",title:"A Tabela Periódica dos Elementos",summary:'A organização mágica dos "tijolos" puros de construção que formam as nuvens, as pedras e o seu próprio corpo.',image:"https://image.pollinations.ai/prompt/A%20sleek%2C%20dark%2C%20premium%20abstract%203D%20visualization%20representing%20Tabela%20Peri%C3%B3dica%20e%20Propriedades%2C%20very%20highly%20detailed%2C%20cinematic%20lighting%2C%20neon%20accents?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Número Atômico","Famílias (Colunas Verticais)","Gases Nobres","Mendeleiev"],content:`
<p>A <strong>Tabela Periódica</strong> não é só um enfeite colorido que fica pendurado na lousa da aula de química. Ela é o catálogo supremo do universo, listando de forma brilhante os exatos 118 ingredientes puros (átomos) com os quais absolutamente tudo existe é feito – do gás que você respira ao ferro nas vigas do prédio.</p>

<h2>História: O Quebra-Cabeça de Mendeleiev</h2>
<p>No século XIX, os químicos já conheciam uns 60 elementos diferentes, mas a bagunça era total. Em 1869, o genial cientista russo Dmitri Mendeleiev pegou cartões de papel, escreveu o nome e o peso de cada elemento e ficou organizando-os como se jogasse "paciência". Ele notou que se os alinhasse por peso em linhas e colunas, as características deles se repetiam periodicamente. A sacada dele foi tão perfeita que ele <strong>deixou buracos vazios na tabela</strong>, prevendo com exatidão a cor e o peso de elementos que a humanidade só viria a descobrir na natureza muitos anos depois!</p>

<h2>Como ela é Lida Hoje em Dia?</h2>
<ul class="list-disc list-inside mt-2 mb-4 space-y-2">
  <li><strong>Por Números Crescentes (O Número Atômico):</strong> Da esquerda para a direita, como ler um livro, cada quadradinho da tabela ganha 1 próton a mais em seu núcleo. O Hidrogênio (primeiro quadrado) tem 1 próton. O Hélio (o segundo) tem 2, e assim por diante.</li>
  <li><strong>As Famílias nas Colunas Verticais:</strong> Esse é o segredo de ouro. Elementos posicionados exatamente na mesma coluna de cima a baixo se comportam da mesma forma na natureza! A coluna da esquerda abriga os metais que adoram doar elétrons e explodem ao cair na água. Na última coluna da direita, os elementos são chamados de "Gases Nobres": eles já nascem tão estáveis e perfeitos que simplesmente não se misturam ou reagem com ninguém, isolados para a vida toda.</li>
</ul>

<h2>Para Que Usamos na Prática?</h2>
<p>A Tabela Periódica é o manual para fabricar a tecnologia do amanhã. É usando a vizinhança elétrica dos elementos da tabela que a engenharia química escolhe o poderoso metal <strong>Lítio</strong> para fazer as baterias finas e potentes dos nossos smartphones e carros elétricos. Sem essa organização, não conseguiríamos criar novos plásticos para os hospitais nem tintas resistentes para os aviões comerciais.</p>`,relatedIds:["reacoes-quimicas"],simulation:null},{id:"catalisador-hidrogenio",topic:"Química",title:"Novo catalisador promete revolucionar produção de hidrogênio verde",summary:"A inovação que transforma a fumaça poluidora na energia mais limpa do universo.",image:"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>Uma reação química natural entre elementos no prato às vezes demora anos parada sofrendo no frio lenta. Um <strong>Catalisador</strong> é o pó mágico forte da química. Quando você pinga essa gota, ela diminui a energia pesada (o cansaço da curva montanha) fazendo a reação explodir ou secar rápido o trabalho.</p>

<h2>A Nova Revolução: Hidrogênio Verde</h2>
<p>Os novos carros de motor não queimam suja gasolina, eles bebem Hidrogênio. O único problema da indústria é fabricá-lo. As indústrias desenvolveram "Catalisadores Novos Revolucionários" que, mergulhados frios da água marinha doce no tacho com eletricidade de Sol ou placa vento, aceleram sem custo caro a conta barata e barata conta cortando exata quebrando fática barata mole suave e rachando as molhadas e cegas exatas partículas velhas gotas de H2O jogando pra fora do tubo exato o pálido fino rico limpo grosso rico precioso e sagrado e gás Hidrogênio inflamável. O melhor? Quando esse hidrogênio queima no motor do pneu na estrada dando 100km/h ele expele do cano do motor fumaça apenas vapor perfumado brando suave puro de fina água limpa para a calçada verde do pedestre!</p>`,relatedIds:["enzima-envelhecimento","vacina-mrna-cancer"],simulation:null},{id:"reacoes-quimicas",topic:"Química",title:"Reações Químicas",summary:"Como e por que as moléculas reagem colidindo no escuro das panelas.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Cinética Química","Teoria das Colisões","Energia de Ativação","Equilíbrio Químico","Termodinâmica"],content:`
<p>A <strong>Cinética Química</strong> estuda o limite e corrida nas batidas reativas moleculares.</p>

<h2>A Batida</h2>
<p>Para o oxigênio da ponta da maçã apodrecer enferrujando, os átomos microscópicos precisam bater uns contra os do ar numa porrada certeira do ângulo na "Teoria das Colisões" suadas e da pesada Força e exata forte batida com peso de Energia pesada Inicial ("A Barreira de Ativação").</p>

<h2>O Fogo Acelera</h2>
<p>Colocar o feijão forte quente na panela fechada panela trancada de grossa e forte lata de lata grossa panela de grossa pressão esquenta. O Calor ferve o movimento, agitando violento louco em cegas corridas as invisíveis bolinhas. Bate mais forte! Cozinha limpo quente tenro em minutos, fugindo e acelerando a barreira lenta que de horas frias mataria o tempo. Da mesma inversa exata lógica limpa pálida limpa pálida gelada, empilhar fria alcatra frango cru forte cru no branco pálido isolado branco oco gelado do puro pálido congelador reduz cravando pra zerada morta nula zerada lentidão os embates mortos nulos da lenta de bactéria e vida amarga ruim biologia podre carne das reações podres salvando e podres nulas de da das trágicas lerdas apodrecimento no mês seguro intacto pálido liso ileso inteiro preservado pálido no mês liso!</p>`,relatedIds:["fotossintese","ondas-som"],simulation:{component:"reacoes-quimicas",subtitle:"Simulador de Colisões Moleculares",about:"Modelo cinético baseado na teoria das colisões: taxa ∝ concentração × exp(-Ea/kT). Moléculas se movem com velocidade proporcional a √T (distribuição de Maxwell-Boltzmann simplificada).",icon:"flask",iconColor:"#3b82f6",controls:[{id:"temp",label:"Temperatura",unit:"°C",min:-50,max:500,default:25,step:5},{id:"concentration",label:"Concentração",unit:"mol/L",min:.1,max:10,default:1,step:.1}]}},{id:"gases-ideais",topic:"Química",title:"Gases Ideais e a Teoria Cinética",summary:"Por que aquecer um gás aumenta a pressão? A resposta está no bombardeio invisível das moléculas.",image:"https://image.pollinations.ai/prompt/Gas%20molecules%20bouncing%20inside%20a%20transparent%20cylinder%20with%20a%20piston%2C%20scientific%20visualization%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Lei dos Gases Ideais","Teoria Cinética","Pressão","Maxwell-Boltzmann"],content:`
<p>Um <strong>gás ideal</strong> é um modelo em que as moléculas são pontos que só interagem quando colidem. Apesar de simples, ele descreve muito bem o ar que respiramos.</p>

<h2>A Equação que Une Tudo</h2>
<p>A lei dos gases ideais, P·V = n·R·T, conecta pressão, volume, quantidade de matéria e temperatura. Comprima o gás e a pressão sobe; aqueça-o e ele empurra o pistão. Mas por quê?</p>

<h2>Pressão é Bombardeio</h2>
<p>A teoria cinética responde: a pressão é o resultado de trilhões de moléculas batendo nas paredes por segundo. Aquecer o gás faz as moléculas se moverem mais rápido (a velocidade média cresce com √T), então elas batem mais forte e mais vezes. Na simulação, a pressão não é lida de uma fórmula — ela é MEDIDA somando os impulsos de cada colisão, e coincide com P = nRT/V.</p>`,relatedIds:["reacoes-quimicas"],simulation:{component:"gases-ideais",subtitle:"Gases Ideais e Teoria Cinética",about:"A pressão não é lida de uma fórmula: ela é MEDIDA. Cada vez que uma molécula bate na parede, o impulso 2m·|vₓ| é somado, e a pressão média é comparada com a previsão P = nRT/V — as duas coincidem, porque a lei dos gases ideais é uma consequência das colisões, não um postulado. As velocidades seguem a distribuição de Maxwell–Boltzmann, e o termostato reescala as moléculas quando você muda a temperatura: aquecer não empurra o pistão por mágica, e sim porque as moléculas passam a bater mais forte e mais vezes.",icon:"flask",iconColor:"#a89a7a",controls:[{id:"temp",label:"Temperatura",unit:"K",min:100,max:600,default:350,step:10},{id:"volume",label:"Volume (posição do pistão)",unit:"L",min:10,max:100,default:50,step:1}]}},{id:"titulacao",topic:"Química",title:"Titulação Ácido-Base",summary:"A técnica de laboratório que descobre a concentração de um ácido gota a gota.",image:"https://image.pollinations.ai/prompt/Chemistry%20titration%20burette%20dripping%20into%20a%20flask%20with%20pink%20indicator%2C%20laboratory%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Neutralização","Ponto de Equivalência","Indicador","Curva de Titulação"],content:`
<p>A <strong>titulação</strong> é um método para descobrir a concentração desconhecida de uma solução. Pinga-se, gota a gota, uma solução de concentração conhecida até a reação se completar.</p>

<h2>O Ponto de Viragem</h2>
<p>Ao titular um ácido com uma base, o pH sobe lentamente e depois dispara perto do ponto de equivalência — onde a quantidade de base adicionada neutraliza exatamente o ácido. Um indicador como a fenolftaleína marca esse instante mudando de cor (incolor para rosa).</p>

<h2>Por que a Curva tem um 'S'</h2>
<p>A curva de titulação tem um salto vertical brusco no ponto de equivalência: pequenas gotas mudam o pH em várias unidades. É esse salto que torna a técnica precisa, e é ele que a simulação desenha enquanto a bureta pinga.</p>`,relatedIds:["ph-escala"],simulation:{component:"titulacao",subtitle:"Titulação Ácido-Base",about:"A bureta pinga base de concentração conhecida sobre um ácido, e o pH é calculado de verdade em cada instante. O ponto de equivalência (onde n_ácido = n_base) aparece como o salto vertical brusco da curva, e a fenolftaleína vira de incolor para rosa exatamente ali. Mude a concentração do ácido para ver o volume de equivalência se deslocar.",icon:"flask",iconColor:"#a89a7a",controls:[{id:"concAcid",label:"Concentração do Ácido",unit:"mol/L",min:.05,max:.5,default:.1,step:.01},{id:"dropSpeed",label:"Velocidade do Gotejamento",unit:"×",min:.5,max:5,default:1,step:.5}]}},{id:"ph-escala",topic:"Química",title:"A Escala de pH",summary:"Do suco de limão à água sanitária: a escala logarítmica que mede acidez.",image:"https://image.pollinations.ai/prompt/pH%20scale%20color%20gradient%20from%20red%20acid%20to%20purple%20base%20with%20beakers%2C%20chemistry%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Acidez e Basicidade","Escala Logarítmica","Íons H⁺ e OH⁻","Produto Iônico da Água"],content:`
<p>O <strong>pH</strong> mede o quão ácida ou básica é uma solução, numa escala de 0 a 14. Abaixo de 7 é ácido, acima é básico, e 7 é neutro (a 25 °C).</p>

<h2>Uma Escala Logarítmica</h2>
<p>O detalhe que engana: cada unidade de pH representa 10 vezes mais (ou menos) acidez. Um suco de limão (pH 2) não é 'um pouco' mais ácido que a água (pH 7): é 100 000 vezes mais. Por isso a escala é logarítmica — é a única forma de caber ácidos e bases tão diferentes na mesma régua.</p>

<h2>O Equilíbrio da Água</h2>
<p>Na água, íons H⁺ e OH⁻ coexistem, e seu produto é constante: [H⁺]·[OH⁻] = Kw. Quanto mais H⁺, menos OH⁻, e vice-versa. A simulação mostra a proporção real desses íons e onde substâncias do dia a dia se encaixam na escala.</p>`,relatedIds:["titulacao"],simulation:{component:"ph-escala",subtitle:"A Escala de pH",about:"pH é logarítmico: pH = −log₁₀[H⁺], e cada passo na escala é um fator de 10 na concentração. A régua de íons mostra a proporção real [H⁺]/[OH⁻] em escala log (mostrar 10⁷ vezes mais H⁺ literalmente seria impossível), o béquer se tinge com a cor do indicador universal, e o HUD dá as concentrações exatas em mol/L junto com a substância do dia a dia mais parecida com o pH escolhido.",icon:"flask",iconColor:"#a89a7a",presets:[{label:"Suco de limão",values:{ph:2.2}},{label:"Café",values:{ph:5}},{label:"Água pura",values:{ph:7}},{label:"Sangue",values:{ph:7.4}},{label:"Água sanitária",values:{ph:12.5}}],controls:[{id:"ph",label:"pH da Solução",unit:"",min:0,max:14,default:7,step:.1}]}},{id:"pilhas",topic:"Química",title:"Pilhas e a Equação de Nernst",summary:"Como uma reação química vira eletricidade — e por que a pilha 'morre'.",image:"https://image.pollinations.ai/prompt/Galvanic%20cell%20with%20zinc%20and%20copper%20electrodes%20and%20salt%20bridge%2C%20electrochemistry%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Oxirredução","Potencial de Célula","Equação de Nernst","Ponte Salina"],content:`
<p>Uma <strong>pilha</strong> (célula galvânica) transforma uma reação química de oxirredução em corrente elétrica. A pilha de Daniell, com eletrodos de zinco e cobre, é o exemplo clássico.</p>

<h2>Elétrons em Movimento</h2>
<p>O zinco se oxida (perde elétrons) e o cobre se reduz (ganha elétrons). Os elétrons viajam pelo fio externo — é a corrente elétrica — enquanto a ponte salina mantém o equilíbrio das cargas. O potencial padrão dessa pilha é 1,10 V.</p>

<h2>Por que a Pilha Descarrega</h2>
<p>A equação de Nernst mostra que a tensão depende das concentrações dos íons. Conforme a reação avança, o zinco se acumula e o cobre se esgota, a tensão cai, e quando chega a zero a pilha 'morre'. A simulação calcula isso em tempo real com a equação de Nernst.</p>`,relatedIds:["reacoes-quimicas"],simulation:{component:"pilhas",subtitle:"Pilha de Daniell e a Equação de Nernst",about:"A tensão da pilha é calculada pela equação de Nernst (E = E° − RT/nF · ln Q) a cada instante, com E° = 1,10 V. Os elétrons percorrem o fio externo do zinco (que se oxida) para o cobre (que se reduz), e a ponte salina equilibra as cargas. Conforme a reação avança, [Zn²⁺] sobe e [Cu²⁺] cai, a tensão diminui e a pilha 'morre' quando E chega a zero. Ajuste as concentrações iniciais para montar pilhas diferentes.",icon:"flask",iconColor:"#a89a7a",controls:[{id:"cZn",label:"Concentração inicial [Zn²⁺]",unit:"mol/L",min:.01,max:2,default:.1,step:.01},{id:"cCu",label:"Concentração inicial [Cu²⁺]",unit:"mol/L",min:.01,max:2,default:1,step:.01},{id:"rate",label:"Velocidade da Descarga",unit:"×",min:.5,max:3,default:1,step:.5}]}}],ZC=[{id:"james-webb-galaxias",topic:"Astronomia",title:"Telescópio James Webb revela galáxias primordiais nunca vistas antes",summary:"Como o maior telescópio já construído está fotografando o início do universo.",image:"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>O <strong>Telescópio James Webb</strong> é como uma gigantesca máquina do tempo espacial. Como a luz demora para viajar no espaço, quando ele tira uma foto de uma galáxia muito distante, nós estamos vendo como ela era há bilhões de anos, perto do nascimento do universo!</p>

<h2>História: O Sucessor do Hubble</h2>
<p>Por muitos anos, o telescópio Hubble foi o "olho" da humanidade no espaço. Mas ele enxergava principalmente a luz comum, como nós. O James Webb foi lançado no Natal de 2021 para enxergar <strong>Luz Infravermelha</strong> (calor). Isso é essencial porque as primeiras galáxias do universo estão se afastando tão rápido que a luz delas "estica" e fica invisível aos nossos olhos, virando infravermelha.</p>

<h2>Aplicação Prática</h2>
<p>O James Webb está descobrindo que as primeiras galáxias se formaram muito mais rápido do que os cientistas achavam! Entender isso nos ajuda a compreender as origens de todos os elementos químicos que formam a Terra e o nosso próprio corpo.</p>`,relatedIds:["exoplaneta-atmosfera","buraco-negro-via-lactea","artemis-lua"],simulation:null},{id:"exoplaneta-atmosfera",topic:"Astronomia",title:"Descoberto exoplaneta com atmosfera similar à Terra",summary:"A busca por planetas parecidos com a Terra fora do nosso Sistema Solar.",image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>Um <strong>Exoplaneta</strong> é qualquer planeta que gira em torno de <em>outra estrela</em> que não seja o nosso Sol. Até pouco tempo atrás, não sabíamos se existiam outros planetas no universo além dos oito do nosso Sistema Solar!</p>

<h2>História da Caçada Espacial</h2>
<p>O primeiro exoplaneta só foi confirmado em 1995. Hoje, graças a telescópios modernos, já descobrimos mais de 5.000 deles! O mais impressionante é que agora conseguimos analisar a <strong>atmosfera</strong> desses planetas distantes, procurando por sinais de água, oxigênio ou metano (que podem indicar a presença de vida alienígena simples).</p>

<h2>Como isso nos afeta?</h2>
<p>Descobrir planetas com atmosferas similares à Terra (na chamada "Zona Habitável", onde a água não ferve nem congela) responde à maior pergunta da humanidade: "Estamos sozinhos no universo?". Além disso, estudar atmosferas tóxicas de exoplanetas nos ensina sobre os perigos do aquecimento global extremo no nosso próprio planeta.</p>`,relatedIds:["james-webb-galaxias","buraco-negro-via-lactea"],simulation:null},{id:"buraco-negro-via-lactea",topic:"Astronomia",title:"Buraco negro supermassivo detectado no centro da Via Láctea",summary:"O monstro gravitacional invisível que mora exatamente no centro da nossa galáxia.",image:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>No centro exato da nossa galáxia (a Via Láctea) existe um <strong>Buraco Negro Supermassivo</strong> chamado Sagittarius A*. Ele é uma região com tanta massa espremida que a sua gravidade suga tudo, até mesmo a luz, tornando-o completamente escuro.</p>

<h2>História da Primeira Foto</h2>
<p>Durante muito tempo, Albert Einstein previu que eles existiam na matemática, mas ninguém nunca tinha "visto" um. Sabíamos que Sagittarius A* estava lá porque as estrelas ao redor dele giravam a velocidades absurdas (como se estivessem amarradas a um laço invisível). Em 2022, usando uma rede global de antenas, cientistas conseguiram fotografar o anel de gás brilhante ao redor desse "monstro" no centro da nossa galáxia pela primeira vez!</p>

<h2>Aplicações Práticas</h2>
<p>Estudar como o espaço e o tempo se distorcem perto desse buraco negro gigante ajuda os físicos a calibrarem melhor as teorias de gravidade. A mesma física da relatividade testada ali é o que faz os satélites de GPS do nosso celular funcionarem sem atraso de tempo na Terra.</p>`,relatedIds:["james-webb-galaxias","artemis-lua"],simulation:null},{id:"artemis-lua",topic:"Astronomia",title:"Missão Artemis se prepara para retorno à Lua",summary:"O retorno da humanidade à Lua, desta vez para ficar e construir bases.",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>A <strong>Missão Artemis</strong> é o atual e mais ambicioso programa espacial da humanidade, cujo objetivo não é apenas visitar a Lua, mas aprender a morar nela!</p>

<h2>História: Da Apollo à Artemis</h2>
<p>Entre 1969 e 1972, as famosas missões Apollo (dos EUA) levaram os primeiros humanos à Lua durante a Corrida Espacial. Depois disso, nunca mais voltamos. Agora, o programa Artemis planeja levar a primeira mulher e a próxima geração de astronautas para o polo sul da Lua, onde cientistas acreditam existir gelo de água escondido em crateras escuras.</p>

<h2>Usos e o Futuro em Marte</h2>
<p>A Lua será usada como um "campo de treinamento". Com o gelo lunar, os astronautas farão água para beber e oxigênio para respirar. Além disso, a Lua tem pouca gravidade, tornando-a um porto perfeito para lançar foguetes pesados rumo ao grande sonho: a exploração humana do planeta Marte!</p>`,relatedIds:["james-webb-galaxias","exoplaneta-atmosfera"],simulation:null},{id:"estrela-antiga",topic:"Astronomia",title:"Estrela mais antiga do universo é descoberta por astrônomos",summary:'O que as primeiras estrelas nos ensinam sobre o "fogo" original do universo.',image:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>Astrônomos conseguem detectar estrelas tão antigas que elas nasceram pouco tempo depois do Big Bang. Elas são os verdadeiros <strong>fósseis do universo</strong>.</p>

<h2>História: As Três Gerações</h2>
<p>Os cientistas classificam as estrelas em populações. Nosso Sol é uma estrela "jovem" (População I), cheia de metais pesados criados por estrelas mortas. As estrelas muito antigas (População II ou III) são feitas quase puramente do hidrogênio e hélio originais do início de tudo, pois na época delas o universo ainda era um lugar limpo, sem os elementos químicos complexos que temos hoje.</p>

<h2>Usos e Química</h2>
<p>Estudar a luz fraquinha dessas "vovós" do espaço ajuda os cientistas a entenderem exatamente como surgiu o carbono das nossas células e o oxigênio que respiramos. É a biografia química da própria vida.</p>`,relatedIds:["james-webb-galaxias","buraco-negro-via-lactea"],simulation:null},{id:"cometa-interestelar",topic:"Astronomia",title:"Cometa interestelar atravessa nosso sistema solar",summary:"Os visitantes de gelo e pedra que vieram de outros sistemas solares.",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>De vez em quando, um <strong>Cometa Interestelar</strong> cruza o nosso Sistema Solar. Diferente dos cometas comuns (que giram em torno do nosso Sol), esses objetos são "órfãos" que foram ejetados de estrelas distantes e vagam sem rumo pelo espaço aberto há milhões de anos.</p>

<h2>A Chegada de Oumuamua e Borisov</h2>
<p>Em 2017, a humanidade detectou pela primeira vez na história um objeto vindo de outra estrela, que ganhou o nome havaiano de 'Oumuamua (o mensageiro distante). Pouco depois, achamos o cometa interestelar Borisov. A velocidade absurda deles provou que eles não pertenciam à atração do nosso Sol.</p>

<h2>Por que é importante?</h2>
<p>Como ainda não temos tecnologia para viajar até outras estrelas, a visita desses cometas é como "sedex espacial gratuito". Eles trazem gelo e poeira intocados de outros cantos da galáxia, permitindo que a gente estude do que os outros sistemas solares são feitos!</p>`,relatedIds:["james-webb-galaxias","estrela-antiga"],simulation:null},{id:"luas-jupiter",topic:"Astronomia",title:"Novas luas são descobertas orbitando Júpiter",summary:"Os misteriosos mundos de gelo e vulcões que orbitam o maior planeta.",image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>Júpiter não é apenas um planeta gigante; com mais de 90 luas descobertas, ele funciona como um mini-sistema solar próprio! As mais famosas são as quatro <strong>Luas Galileanas</strong>: Io, Europa, Ganimedes e Calisto.</p>

<h2>História: A Luneta que Mudou o Mundo</h2>
<p>Em 1610, Galileu Galilei apontou seu telescópio primitivo para o céu e viu quatro pontinhos girando ao redor de Júpiter. Isso foi revolucionário e perigoso: provou pela primeira vez que nem tudo no universo girava ao redor da Terra, ajudando a derrubar o modelo geocêntrico antigo.</p>

<h2>Aplicações: Vida Extraterrestre?</h2>
<p>A lua Europa é coberta de gelo, mas a gravidade gigante de Júpiter a aperta e esquenta por dentro. Cientistas têm quase certeza de que há um oceano de água líquida quente debaixo desse gelo. A exploração dessas luas é hoje a maior aposta da astrobiologia para encontrar vida marinha extraterrestre (micróbios ou bactérias) no nosso Sistema Solar!</p>`,relatedIds:["james-webb-galaxias","exoplaneta-atmosfera"],simulation:null},{id:"orbitas-planetarias",topic:"Astronomia",title:"Órbitas Planetárias",summary:"Entenda como a força invisível da gravidade mantém os planetas girando.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Gravitação Universal","Leis de Kepler","Movimento Circular","Força Centrípeta","Energia Orbital"],content:`
<p>Por que os planetas giram em torno do Sol em vez de saírem voando? A resposta está na <strong>força da gravidade</strong>, que funciona como uma corda invisível segurando-os num eterno balé de queda livre (as órbitas).</p>

<h2>História das Leis de Kepler</h2>
<p>No século XVII, o astrônomo Johannes Kepler estudou o céu e descobriu que as órbitas não eram círculos perfeitos, mas sim <em>elipses</em> (ovais). Mais tarde, Isaac Newton usou sua matemática para provar que a gravidade era o motor por trás desse movimento.</p>

<h2>Usos Práticos</h2>
<p>Sem as contas de Kepler e Newton sobre as órbitas, não existiria vida moderna. É usando exatamente essa mesma matemática que os engenheiros sabem com que força atirar um satélite no céu para que ele fique orbitando e nos dando sinal de TV e GPS sem cair de volta na nossa cabeça.</p>`,relatedIds:["sistema-solar-completo","satelites-artificiais","leis-newton"],simulation:{component:"orbitas-planetarias",subtitle:"Simulador de Órbitas Planetárias",about:"Integração em unidades SI reais (μ☉ = 1,327 × 10²⁰ m³/s²) com Velocity Verlet, um integrador simplético que conserva energia — a elipse fecha ano após ano em vez de espiralar para dentro. O tipo de órbita (elipse, parábola ou hipérbole) sai da energia orbital específica, não de um limiar chutado. A elipse analítica é sobreposta em tracejado e cai exatamente sobre a trajetória numérica. Comece no periélio a 1 UA com 29,8 km/s (órbita quase circular da Terra); reduza a velocidade para alongar a elipse ou passe de ~42 km/s para escapar.",icon:"orbit",iconColor:"#f97316",presets:[{label:"Órbita da Terra",values:{distance:1,velocity:29.8}},{label:"Elipse alongada",values:{distance:1,velocity:20}},{label:"No limite",values:{distance:1,velocity:41}},{label:"Escapa do Sol",values:{distance:1,velocity:45}}],controls:[{id:"distance",label:"Distância do Sol",unit:"UA",min:.3,max:5,default:1,step:.1},{id:"velocity",label:"Velocidade no Periélio",unit:"km/s",min:5,max:50,default:29.8,step:.1},{id:"mass",label:"Massa do Planeta",unit:"M⊕",min:.1,max:300,default:1,step:.1}]}},{id:"sistema-solar-completo",topic:"Astronomia",title:"Sistema Solar Completo",summary:"Conheça nossa vizinhança cósmica: do Sol escaldante aos gigantes gasosos.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Gravitação Universal","Leis de Kepler","Mecânica Orbital","Período Sidéreo"],content:`
<p>O <strong>Sistema Solar</strong> é o conjunto de planetas, luas, cometas e asteroides presos pela enorme força gravitacional da nossa estrela, o Sol.</p>

<h2>História da Nossa Vizinhança</h2>
<p>Após a revolução de Copérnico (que provou que o Sol é o centro), fomos descobrindo nossa vizinhança: quatro planetas rochosos quentes próximos ao Sol (Mercúrio, Vênus, Terra e Marte) e quatro gigantes de gás gelados mais distantes (Júpiter, Saturno, Urano e Netuno).</p>

<h2>O Sol e a Exploração</h2>
<p>O Sol concentra mais de 99% do peso do sistema e produz sua energia fundindo átomos. Graças ao estudo dos outros planetas, sabemos mais sobre a própria Terra. Enviar sondas para Marte e Vênus nos mostrou os efeitos trágicos de atmosferas ralas ou do aquecimento global fora de controle, ensinando a preservar nosso lar.</p>`,relatedIds:["orbitas-planetarias","satelites-artificiais","leis-newton"],simulation:{component:"sistema-solar-completo",subtitle:"Simulador do Sistema Solar",about:"Não é decorativo: são efemérides. Cada planeta usa seus elementos orbitais reais (J2000) e a posição sai da equação de Kepler (M = E − e·sen E) resolvida por Newton–Raphson a cada quadro — os planetas ficam nas casas certas para a data simulada, andam mais rápido no periélio (2ª lei) e respeitam T² ∝ a³ (3ª lei). A escala radial é real: Netuno está 77× mais longe que Mercúrio, e o zoom existe para você sentir esse abismo. A tabela mostra distância e velocidade instantânea de cada planeta, agora.",icon:"orbit",iconColor:"#f97316",controls:[{id:"timeScale",label:"Velocidade do Tempo",unit:"× 3 dias/s",min:1,max:50,default:10,step:1},{id:"zoom",label:"Zoom (interno ↔ externo)",unit:"",min:20,max:200,default:100,step:5}]}},{id:"satelites-artificiais",topic:"Astronomia",title:"Satélites Artificiais",summary:"Como robôs em queda livre eterna nos conectam ao mundo inteiro.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Avançado",concepts:["Órbita LEO/MEO/GEO","Velocidade de Escape","Período Orbital","Transferência de Hohmann"],content:`
<p>Os <strong>Satélites Artificiais</strong> são máquinas espaciais enviadas pela humanidade que ficam girando em volta da Terra em altíssimas velocidades.</p>

<h2>História da Corrida Espacial</h2>
<p>Em 1957, a União Soviética chocou o mundo ao lançar o <em>Sputnik 1</em>, o primeiro satélite da história (uma bola de metal que apenas fazia "bip"). Isso iniciou a Corrida Espacial contra os EUA. Desde então, milhares de satélites foram lançados em órbitas Baixas (rápidos e próximos da Terra) e Geoestacionárias (que giram junto com a Terra, parados sobre a mesma cidade).</p>

<h2>Usos Práticos Modernos</h2>
<p>Se derrubássemos nossos satélites hoje, o mundo entraria em colapso. Eles são os responsáveis por transmitir o sinal de internet global, atualizar a previsão de furacões, fazer o Google Maps funcionar e até guiar a colheita automatizada de fazendas agrícolas pelo interior do Brasil!</p>`,relatedIds:["orbitas-planetarias","sistema-solar-completo","leis-newton"],simulation:{component:"satelites-artificiais",subtitle:"Simulador de Satélites em Órbita",about:"Usa a constante gravitacional real GM⊕ = 3,986 × 10¹⁴ m³/s². O arrasto usa um modelo de atmosfera exponencial de verdade (ρ decai com a altura de escala de ~60 km), e revela o paradoxo do satélite: o arrasto TIRA energia e mesmo assim o satélite ACELERA — porque perder energia encolhe a órbita, e órbitas baixas são mais rápidas (v ∝ 1/√r). Os gráficos mostram altitude caindo e velocidade subindo ao mesmo tempo. O tipo de órbita (LEO/MEO/GEO) é identificado pela altitude, e abaixo da linha de Kármán (100 km) o satélite reentra.",icon:"orbit",iconColor:"#ec4899",presets:[{label:"Estação Espacial (400 km)",values:{altitude:400}},{label:"GPS (20 200 km)",values:{altitude:20200}},{label:"Geoestacionário (35 786 km)",values:{altitude:35786}}],controls:[{id:"altitude",label:"Altitude da Órbita",unit:"km",min:200,max:36e3,default:400,step:100},{id:"drag",label:"Intensidade do Arrasto",unit:"%",min:0,max:100,default:20,step:5}]}},{id:"buraco-negro",topic:"Astronomia",title:"Buracos Negros e a Curvatura da Luz",summary:"O objeto mais extremo do universo: onde nem a luz escapa e o espaço se dobra.",image:"https://image.pollinations.ai/prompt/A%20black%20hole%20with%20a%20glowing%20accretion%20disk%20and%20gravitational%20lensing%2C%20dark%20cinematic%20space%2C%20photorealistic?width=800&height=500&nologo=true",level:"Avançado",concepts:["Raio de Schwarzschild","Horizonte de Eventos","Lente Gravitacional","Disco de Acreção"],content:`
<p>Um <strong>buraco negro</strong> é uma região onde a gravidade é tão intensa que nada — nem mesmo a luz — consegue escapar depois de cruzar uma fronteira chamada horizonte de eventos.</p>

<h2>O Raio de Schwarzschild</h2>
<p>Em 1916, Karl Schwarzschild resolveu as equações de Einstein e encontrou o tamanho dessa fronteira: r = 2GM/c². Para o Sol, daria menos de 3 km. Quanto mais massa, maior o horizonte. Logo fora dele há a esfera de fótons (onde a luz pode orbitar em círculo) e a órbita estável mais interna (ISCO), a borda do disco de matéria.</p>

<h2>A Foto que Mudou Tudo</h2>
<p>Em 2019, o Event Horizon Telescope fotografou o buraco negro no centro da galáxia M87. A imagem mostrou exatamente o que a relatividade previa: uma sombra circular cercada por um anel de luz assimétrico — um lado mais brilhante que o outro por causa do <em>beaming</em> relativístico, o efeito que a simulação reproduz.</p>`,relatedIds:["orbitas-planetarias"],simulation:{component:"buraco-negro",subtitle:"Buraco Negro de Schwarzschild",about:"A lente gravitacional é real, não um filtro: cada estrela do fundo é resolvida pela equação da lente pontual e aparece DUAS vezes — a imagem direta e a invertida do outro lado — que se fundem no anel de Einstein quando a estrela passa exatamente atrás. A sombra tem o raio correto (√27/2 · r_s ≈ 2,6 r_s), o disco de acreção segue a temperatura de Shakura–Sunyaev (T ∝ r^−3/4, interior azul) e tem beaming relativístico: o lado que se aproxima brilha muito mais. Aumente a massa para ver o horizonte crescer.",icon:"circle",iconColor:"#a6897a",controls:[{id:"mass",label:"Massa do Buraco Negro",unit:"M☉",min:1,max:100,default:20,step:1},{id:"accretion",label:"Brilho do Disco de Acreção",unit:"%",min:0,max:100,default:70,step:5}]}},{id:"exoplaneta",topic:"Astronomia",title:"Detecção de Exoplanetas por Trânsito",summary:"Como achamos milhares de mundos fora do Sistema Solar medindo a luz de estrelas distantes.",image:"https://image.pollinations.ai/prompt/An%20exoplanet%20transiting%20in%20front%20of%20a%20bright%20star%2C%20light%20curve%2C%20deep%20space%2C%20cinematic%20photorealistic?width=800&height=500&nologo=true",level:"Avançado",concepts:["Método do Trânsito","Curva de Luz","Zona Habitável","Escurecimento de Borda"],content:`
<p>Um <strong>exoplaneta</strong> é um planeta que orbita outra estrela. Como são pequenos e escuros perto do brilho da estrela, quase nunca conseguimos vê-los diretamente — então usamos truques indiretos.</p>

<h2>O Método do Trânsito</h2>
<p>Quando um planeta passa na frente da sua estrela (visto da Terra), ele bloqueia uma fração minúscula da luz. Medindo essa queda de brilho, descobrimos o tamanho do planeta: a profundidade do trânsito é (Rp/R★)². Foi assim que os telescópios Kepler e TESS encontraram milhares de mundos.</p>

<h2>Mundos na Zona Habitável</h2>
<p>A partir da forma exata da curva de luz e do período das passagens, calculamos a órbita, a temperatura do planeta e se ele está na <em>zona habitável</em> — a faixa de distância onde poderia existir água líquida. A curva real não é um degrau: tem o fundo arredondado por causa do escurecimento de borda da estrela, um detalhe que a simulação desenha de verdade.</p>`,relatedIds:["orbitas-planetarias"],simulation:{component:"exoplaneta",subtitle:"Detecção de Exoplanetas por Trânsito",about:"A estrela é desenhada com escurecimento de borda real (lei quadrática), então a curva de luz tem o fundo arredondado em 'U' das medições reais, não um degrau de brinquedo. A massa e o raio da estrela saem da relação de sequência principal a partir da temperatura, a profundidade do trânsito é (Rp/R★)² (em ppm, como o Kepler media), e a zona habitável e a temperatura de equilíbrio do planeta são calculadas ao vivo. A Terra produziria só ~84 ppm — no limite do que os instrumentos detectam.",icon:"circle",iconColor:"#a6897a",presets:[{label:"Terra em volta do Sol",values:{starTemp:5800,planetRadius:1,orbitDist:1}},{label:"Júpiter quente",values:{starTemp:6e3,planetRadius:11,orbitDist:.1}},{label:"Anã vermelha",values:{starTemp:3200,planetRadius:1.2,orbitDist:.2}}],controls:[{id:"starTemp",label:"Temperatura da Estrela",unit:"K",min:3e3,max:9e3,default:5800,step:100},{id:"planetRadius",label:"Raio do Planeta",unit:"R⊕",min:.5,max:12,default:1,step:.5},{id:"orbitDist",label:"Distância Orbital",unit:"UA",min:.1,max:3,default:1,step:.1}]}}],eS=[{id:"celula-e-organelas",topic:"Biologia",title:"A Célula e as Minúsculas Fábricas da Vida",summary:"Conheça a unidade básica da vida, como as células foram descobertas e como suas organelas trabalham juntas como uma pequena cidade.",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Membrana Plasmática","Citoplasma","Núcleo","Mitocôndrias","Ribossomos"],content:`
<p>A <strong>Célula</strong> é a unidade estrutural e funcional básica de todos os seres vivos. Desde as menores bactérias invisíveis a olho nu até a gigantesca baleia azul (e você!), todos nós somos construídos com bilhões desses blocos biológicos. Pense na célula como uma cidade em miniatura altamente organizada, onde cada estrutura tem um trabalho específico.</p>

<h2>História: Olhando pela Primeira Vez</h2>
<p>O conceito de célula não existia até a invenção do microscópio. Em 1665, um cientista chamado Robert Hooke observou um pedacinho de cortiça (a casca do tronco de uma árvore). Ele viu que ela era cheia de buraquinhos organizados parecidos com os favos de mel e chamou esses espaços de "células" (que significa "pequena cela" ou quarto). Somente depois descobriríamos que as células vivas têm organelas e partes complexas dentro delas.</p>

<h2>As Partes da Célula e suas Organelas</h2>
<ul class="list-disc list-inside mt-2 mb-4 space-y-2">
  <li><strong>Membrana Plasmática (Os Muros):</strong> É uma camada flexível que envolve e protege a célula. Ela é inteligente: escolhe o que pode entrar (como água e nutrientes) e o que deve sair (como lixo e toxinas).</li>
  <li><strong>Núcleo (A Prefeitura):</strong> Onde fica guardado o cofre com o manual de instruções: o DNA. Ele quem dá as ordens de crescimento e reprodução para a célula.</li>
  <li><strong>Mitocôndrias (A Usina de Energia):</strong> Elas realizam a respiração celular. Pegam o oxigênio que você respira e os nutrientes que você come, transformando-os na energia necessária para você correr, pensar e viver.</li>
  <li><strong>Ribossomos (As Fábricas):</strong> Maquininhas que leem as instruções do DNA e montam as proteínas essenciais (como os anticorpos para combater doenças ou a queratina do seu cabelo).</li>
</ul>

<h2>Usos Práticos no Dia a Dia</h2>
<p>O estudo das células (Citologia) revolucionou o mundo moderno. É graças ao entendimento do funcionamento celular que hoje conseguimos desenvolver tratamentos para o câncer (que é um erro nas células), criar transplantes, e cultivar alimentos com ajuda de biotecnologia. Sem entender a célula, a medicina moderna não existiria.</p>`,relatedIds:["dna-e-genetica"],simulation:null},{id:"dna-e-genetica",topic:"Biologia",title:"DNA e o Manual de Genética",summary:"Descubra como uma longa fita química dita as regras da sua vida e como a engenharia genética está moldando nosso futuro.",image:"https://images.unsplash.com/photo-1530213786676-4c6cbf1df388?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["DNA","Cromossomos","Genes","Bases Nitrogenadas","Rosalind Franklin"],content:`
<p>Toda a informação para construir as suas características – a cor dos seus olhos, sua altura, e até se você tem tendência a certas doenças – está escrita num manual de instruções molecular chamado <strong>DNA</strong> (Ácido Desoxirribonucleico), muito bem guardado dentro do núcleo das suas células.</p>

<h2>A Corrida Pela Dupla Hélice (História)</h2>
<p>Por muito tempo, ninguém sabia como era a forma do DNA. Na década de 1950, houve uma verdadeira corrida científica. Com a ajuda das incríveis fotografias de raio-X tiradas pela química Rosalind Franklin, os cientistas James Watson e Francis Crick descobriram que o DNA tem o formato de uma escada torcida (a famosa <strong>Dupla Hélice</strong>). Isso mudou o mundo da biologia para sempre.</p>

<h2>O Alfabeto da Vida e os Cromossomos</h2>
<p>Os degraus dessa escada do DNA são formados por apenas 4 "letras" químicas: Adenina (<strong>A</strong>), Timina (<strong>T</strong>), Citosina (<strong>C</strong>) e Guanina (<strong>G</strong>). A regra fundamental da natureza é que elas se abraçam em pares certos: o <strong>A sempre liga com o T</strong>, e o <strong>C sempre liga com o G</strong>.</p>
<p>Um pequeno trecho dessas letras forma um <strong>Gene</strong> (a receita para uma proteína). Como o fio de DNA é gigante, a célula o enrola bem apertado na forma do que chamamos de <strong>Cromossomo</strong>. Nós humanos possuímos 46 cromossomos (23 da mãe e 23 do pai).</p>

<h2>Aplicações Práticas da Genética</h2>
<p>Entender essa sequência de letras nos deu o poder de ler o manual da vida! É graças a isso que existem os exames de paternidade, investigações forenses com um fio de cabelo e a medicina personalizada. Hoje em dia, cientistas usam "tesouras biológicas" (como o CRISPR) para editar partes do DNA que nasceram defeituosas, curando doenças hereditárias raras, além de criarem plantas mais resistentes a pragas na agricultura.</p>`,relatedIds:["evolucao-darwin"],simulation:{component:"dna",subtitle:"DNA: Dupla Hélice, Replicação e Transcrição",about:"A geometria é a real do B-DNA: 10,5 pares de base por volta, 3,4 Å de subida por par, fitas antiparalelas (5'→3' e 3'→5'). O detalhe que decide tudo: A–T faz 2 pontes de hidrogênio, C–G faz 3. Ao aquecer, as regiões ricas em A–T abrem PRIMEIRO (é a desnaturação de uma PCR), e a temperatura de melting depende do conteúdo GC. O controle de fase leva da dupla hélice à replicação (com os fragmentos de Okazaki que a antiparalelidade exige) e à transcrição (onde a timina vira uracila). Ajuste a temperatura para ver as fitas se soltarem.",icon:"link",iconColor:"#7ea88f",controls:[{id:"phase",label:"Fase (hélice · replicação · transcrição)",unit:"",min:0,max:100,default:0,step:1},{id:"temperature",label:"Temperatura",unit:"°C",min:20,max:100,default:37,step:1},{id:"transcription",label:"Velocidade do Processo",unit:"",min:5,max:60,default:20,step:5}]}},{id:"evolucao-darwin",topic:"Biologia",title:"Evolução e o Poder da Seleção Natural",summary:"Como as espécies se adaptam lentamente para sobreviver às mudanças do ambiente.",image:"https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Seleção Natural","Charles Darwin","Adaptação","Mutações"],content:`
<p>A <strong>Evolução</strong> é a ideia fundamental que explica por que existe uma variedade tão imensa de seres vivos no planeta e de onde nós viemos. Ela nos ensina que as espécies não são estáticas, mas sim mudam geração após geração para tentar sobreviver no mundo.</p>

<h2>A Viagem de Charles Darwin</h2>
<p>No século XIX, o naturalista Charles Darwin embarcou em uma grande viagem de navio (o HMS Beagle) ao redor do mundo. Ao parar nas Ilhas Galápagos, ele notou algo fascinante: pássaros da mesma família tinham bicos muito diferentes, cada um perfeito para o alimento que existia em sua ilha. Juntando essas e outras anotações, Darwin propôs o revolucionário mecanismo da <strong>Seleção Natural</strong> para explicar a evolução da vida.</p>

<h2>Como Funciona a Seleção Natural?</h2>
<p>Muitas pessoas acham que evolução é sobre o "mais forte" engolir o fraco. Na verdade, é sobre o <strong>mais adaptado</strong>, e se baseia em três pilares simples:</p>
<ol class="list-decimal list-inside mt-2 mb-4 space-y-2">
  <li><strong>Variabilidade:</strong> Na natureza, os filhotes nascem com diferenças acidentais. Um animal nasce mais rápido, o outro mais peludo (isso acontece por mutações aleatórias no DNA).</li>
  <li><strong>Luta pela Sobrevivência:</strong> Faltam recursos (comida, água) para todo mundo, e os predadores estão sempre à espreita. A vida é uma constante corrida contra os perigos.</li>
  <li><strong>Sobrevivência e Passagem:</strong> O filhote que nasceu com a característica que o ajuda a se esconder da presa ou pegar a comida mais fácil vai sobreviver. Ele se reproduzirá e passará esse traço "campeão" para seus netos. Os filhotes sem o traço, morrem sem deixar herdeiros. Aos poucos, a espécie se modifica e melhora.</li>
</ol>

<h2>Uso Prático na Nossa Vida</h2>
<p>A Seleção Natural não é algo do passado dos dinossauros; acontece agora. Um ótimo exemplo está no hospital: quando tomamos antibióticos de forma errada, matamos as bactérias normais, mas algumas, por um acaso, têm uma mutação e sobrevivem. Elas se reproduzem, gerando as famosas "Superbactérias", que são difíceis de curar. Por isso, as aulas de Darwin são vitais para as leis de medicamentos modernos e conservação dos ecossistemas atuais.</p>`,relatedIds:["dna-e-genetica"],simulation:{component:"evolucao",subtitle:"Seleção Natural — as Mariposas de Manchester",about:"Um modelo real de genética de populações, não bichinhos que somem da tela. Dois alelos disputam: M (melânico, escuro, dominante) e m (claro, recessivo). As frequências genotípicas seguem Hardy–Weinberg (p², 2pq, q²) e a seleção muda p a cada geração pela predação visual dos pássaros — quem não se camufla no tronco é comido. Aumente a poluição para escurecer a casca (como a fuligem industrial fez em Manchester) e veja a forma escura saltar de 2% para 98%; limpe o ar e ela volta a cair. A mutação impede que qualquer alelo seja eliminado de vez: é o equilíbrio seleção–mutação.",icon:"eye",iconColor:"#8ca67e",controls:[{id:"envPressure",label:"Poluição no Tronco (0=Claro, 100=Fuligem)",unit:"",min:0,max:100,default:30,step:5},{id:"mutationRate",label:"Taxa de Mutação",unit:"",min:0,max:20,default:5,step:1}]}},{id:"enzima-envelhecimento",topic:"Biologia",title:"Descoberta enzima que reverte envelhecimento celular",summary:"A busca biológica por interromper o relógio natural da vida nas células.",image:"https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>O nosso corpo envelhece por um motivo microscópico. No final dos nossos cordões de DNA existem proteções chamadas "telômeros" (como as pontinhas de plástico do cadarço do tênis). Toda vez que a célula se divide, essa pontinha fica mais gasta. Quando ela acaba, a célula morre (isso é a velhice).</p>

<h2>A Enzima Telomerase</h2>
<p>Cientistas descobriram a <strong>Telomerase</strong>, uma enzima (trabalhadora química) natural que, em algumas células específicas, consegue costurar e consertar o telômero de volta. Ou seja, ela é a "enzima antienvelhecimento" que dá juventude eterna às células daquele tecido.</p>

<h2>Aplicações e o Câncer</h2>
<p>O uso disso é revolucionário e perigoso ao mesmo tempo. Se os cientistas conseguirem usar medicamentos para ligar essa enzima no nosso corpo, poderíamos parar o envelhecimento humano e curar doenças. Porém, as células do câncer já descobriram esse segredo: o câncer é perigoso justamente porque "liga" a telomerase sem permissão, tornando-se imortal e se multiplicando sem parar. Inibir a telomerase pode ser a cura química do câncer!</p>`,relatedIds:["vacina-mrna-cancer","entrelaçamento-quantico"],simulation:null},{id:"fotossintese",topic:"Biologia",title:"Fotossíntese Interativa",summary:"A mágica química das plantas que sustenta quase toda a vida na Terra.",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Cloroplastos","Reações de Luz","Ciclo de Calvin","ATP","NADPH","Equação Geral"],content:`
<p>Você já se perguntou como uma árvore enorme, pesando toneladas, se forma a partir de uma semente minúscula? O segredo é um dos processos mais incríveis da biologia: a <strong>Fotossíntese</strong>.</p>

<h2>História: De Onde Vem o Peso?</h2>
<p>Por séculos, o homem pensou que a planta "comia" a terra. No século XVII, o médico Jan van Helmont provou que isso era falso: as plantas crescem retirando água das raízes e "sugando" um ingrediente invisível do ar: o gás carbônico (CO2). Usando a energia da luz solar capturada pela <em>Clorofila</em> (tinta verde), a planta mistura água e CO2 para fabricar seu próprio açúcar para crescer.</p>

<h2>O Lixo que Salva o Mundo</h2>
<p>O resultado dessa reação química joga fora um lixo biológico da folha de volta no ar. Acontece que esse "lixo" é o nosso sagrado Oxigênio (O2), que todos os animais usam para respirar. Entender a fotossíntese é essencial para combater as mudanças climáticas hoje, já que florestas são os maiores filtros do mundo sugando poluição e gás de estufa do ar.</p>`,relatedIds:["reacoes-quimicas","enzima-envelhecimento"],simulation:{component:"fotossintese",subtitle:"Simulador de Fotossíntese",about:"A taxa fotossintética é modelada como função multiplicativa da intensidade luminosa e [CO₂]. Fótons, cloroplastos pulsantes e moléculas de O₂/glicose saindo da folha são animados em canvas.",icon:"bio",iconColor:"#10b981",presets:[{label:"Escuro",values:{light:0}},{label:"Sombra",values:{light:150}},{label:"Sol pleno",values:{light:2e3}},{label:"CO₂ pré-industrial (280 ppm)",values:{co2:280}},{label:"CO₂ dobrado (800 ppm)",values:{co2:800}}],controls:[{id:"light",label:"Luz (radiação fotossinteticamente ativa)",unit:"µmol/m²/s",min:0,max:2e3,default:1e3,step:25},{id:"co2",label:"Concentração de CO₂",unit:"ppm",min:100,max:2e3,default:400,step:10}]}},{id:"cadeia-alimentar",topic:"Biologia",title:"Cadeia Alimentar e o Equilíbrio Predador-Presa",summary:"Por que o número de raposas e coelhos sobe e desce em ciclos eternos.",image:"https://image.pollinations.ai/prompt/Predator%20and%20prey%20population%20cycles%20in%20nature%2C%20foxes%20and%20rabbits%2C%20ecosystem%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Predador-Presa","Modelo de Lotka-Volterra","Equilíbrio Ecológico","Ciclos Populacionais"],content:`
<p>Numa <strong>cadeia alimentar</strong>, o número de predadores e de presas não fica parado: ele oscila em ciclos. Quando há muitos coelhos, as raposas se fartam e se multiplicam; com muitas raposas, os coelhos somem; sem comida, as raposas minguam; e então os coelhos voltam.</p>

<h2>As Equações de Lotka-Volterra</h2>
<p>Nos anos 1920, Lotka e Volterra escreveram equações que capturam exatamente essa dança. Elas preveem que as duas populações oscilam defasadas: o pico dos predadores vem sempre um pouco depois do pico das presas.</p>

<h2>Um Equilíbrio Frágil</h2>
<p>O modelo mostra por que ecossistemas são sensíveis: mexer no número de predadores altera todo o ciclo. A simulação desenha as populações e o retrato de fase — a órbita fechada que revela o ciclo perpétuo.</p>`,relatedIds:["evolucao-darwin"],simulation:{component:"cadeia-alimentar",subtitle:"Dinâmica Predador-Presa (Lotka-Volterra)",about:"Integra as equações de Lotka-Volterra reais: as presas crescem sozinhas e são comidas na proporção dos encontros, os predadores morrem sozinhos e crescem comendo. O resultado são oscilações defasadas — o pico dos predadores vem sempre depois do pico das presas — e o retrato de fase é uma órbita fechada, a assinatura do ciclo perpétuo. Ajuste o número inicial de predadores e presas e veja o ciclo mudar de amplitude.",icon:"bio",iconColor:"#7ea88f",controls:[{id:"preys",label:"População Inicial de Presas",unit:"",min:20,max:200,default:100,step:10},{id:"predators",label:"População Inicial de Predadores",unit:"",min:1,max:40,default:10,step:1}]}},{id:"mitose",topic:"Biologia",title:"Mitose: a Divisão Celular",summary:"Como uma célula copia seu DNA e se parte em duas idênticas.",image:"https://image.pollinations.ai/prompt/Cell%20mitosis%20division%20with%20chromosomes%20and%20spindle%20fibers%2C%20microscopy%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Ciclo Celular","Cromossomos","Fuso Mitótico","Apoptose"],content:`
<p>A <strong>mitose</strong> é o processo pelo qual uma célula se divide em duas geneticamente idênticas. É assim que crescemos e reparamos tecidos: uma única célula-ovo vira trilhões de células.</p>

<h2>As Fases da Divisão</h2>
<p>A célula passa por prófase (os cromossomos se condensam), metáfase (alinham-se no centro), anáfase (são puxados para os polos pelo fuso mitótico) e telófase (formam-se dois núcleos). Um sistema de checagem garante que só se avança quando tudo está certo.</p>

<h2>Quando a Célula se Sacrifica</h2>
<p>Se o DNA está danificado demais, a célula aciona a <strong>apoptose</strong> — uma morte programada que evita passar erros adiante. É um freio contra o câncer. A simulação mostra as fases da mitose e deixa você aumentar o dano para disparar a apoptose.</p>`,relatedIds:["dna-e-genetica"],simulation:{component:"mitose",subtitle:"Mitose e o Ciclo Celular",about:"Acompanhe as fases da divisão celular — prófase, metáfase, anáfase e telófase — com os cromossomos se condensando, alinhando na placa metafásica e sendo puxados pelo fuso mitótico. Um ponto de checagem só libera a anáfase quando todos os cinetocoros estão ligados. Aumente o dano ao DNA para disparar a apoptose (a morte celular programada), o freio natural do organismo contra células defeituosas.",icon:"bio",iconColor:"#7ea88f",controls:[{id:"division",label:"Velocidade da Divisão",unit:"×",min:.2,max:3,default:1,step:.2},{id:"apoptosis",label:"Dano ao DNA (dispara apoptose)",unit:"%",min:0,max:100,default:0,step:5}]}}],aS=[{id:"sistema-circulatorio",topic:"Medicina",title:"O Coração e o Sistema Circulatório",summary:"A bomba muscular incansável e a engenharia vascular que descobriram ser a verdadeira fonte da vida.",image:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Coração","Artérias e Veias","Pressão Arterial","William Harvey"],content:`
<p>O <strong>Coração Humano</strong> não é apenas uma "bomba de água", ele é um músculo incrível que bate cerca de 100.000 vezes por dia sem que você precise sequer pensar nisso. Sua grande missão é empurrar o sangue rico em oxigênio e nutrientes para cada célula do seu corpo e recolher o lixo tóxico (como o gás carbônico).</p>

<h2>História: A Descoberta da Grande Circulação</h2>
<p>Por mais de mil anos, os médicos acreditavam nas ideias do antigo médico grego Galeno, que dizia que o sangue era fabricado no fígado e depois consumido pelo corpo como lenha no fogo. Foi apenas em 1628 que o médico inglês William Harvey dissecou animais e provou o contrário: o sangue anda no corpo humano num circuito fechado, indo e voltando sem parar, impulsionado unicamente pela pressão dos batimentos do coração.</p>

<h2>Eletricidade no Peito (O Marca-Passo)</h2>
<p>Para bater sempre no ritmo certo, o coração não espera ordens do cérebro. Ele tem seu próprio sistema elétrico embutido. Um pequeno nó de células (o marca-passo natural) dispara choques elétricos fracos, que forçam o coração a espremer o sangue numa coreografia perfeita. Quando vamos ao hospital fazer um <strong>Eletrocardiograma (ECG)</strong>, a máquina está lendo exatamente essas mudanças de voltagem na pele para saber se o ritmo está saudável.</p>

<h2>Aplicações Práticas na Medicina</h2>
<p>Entender essa circulação é a base da medicina moderna. É graças a isso que medimos a "Pressão Arterial" para ver se as veias não estão apertadas demais, arriscando um rompimento. Também é entendendo essa eletricidade que hoje os médicos implantam marca-passos artificiais no peito de pacientes idosos, garantindo que o coração continue batendo no ritmo seguro por muitos anos.</p>`,relatedIds:["fisiologia-pulmonar"],simulation:{component:"ecg",subtitle:"Simulador Clínico de Eletrocardiograma (ECG)",about:"Acompanhe a pulsação do gráfico elétrico. Altere a frequência (Batimentos por Minuto - BPM). Aumentar a 150 BPM simula o coração de uma pessoa correndo numa esteira (taquicardia normal). Diminuir para 40 BPM simula um pulso muito lento, típico de um paciente prestes a desmaiar no pronto-socorro.",icon:"activity",iconColor:"#a67e7e",presets:[{label:"Bradicardia (40)",values:{bpm:40}},{label:"Repouso (60)",values:{bpm:60}},{label:"Normal (72)",values:{bpm:72}},{label:"Exercício (150)",values:{bpm:150}}],controls:[{id:"bpm",label:"Frequência do Coração (BPM)",unit:"bpm",min:30,max:180,default:72,step:1},{id:"amplitude",label:"Tamanho da Linha do Gráfico",unit:"x",min:.1,max:2,default:1,step:.1}]}},{id:"farmacocinetica",topic:"Medicina",title:"Como os Remédios Funcionam: Farmacologia",summary:"A longa jornada de um remédio desde o seu estômago até apagar a sua dor de cabeça.",image:"https://images.unsplash.com/photo-1584308666744-24d5e4a861bb?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Absorção Intestinal","Fígado (Filtro)","Rins (Limpeza)","Janela Terapêutica Segura"],content:`
<p>Quando você engole um comprimido porque machucou o dedo do pé, o remédio não vai direto para o machucado. Ele faz uma viagem longa e complexa por todo o seu corpo, que os médicos chamam de <strong>Farmacocinética (Absorção, Distribuição, Metabolismo e Excreção)</strong>.</p>

<h2>A História das Pílulas e das Balas Mágicas</h2>
<p>Antes do século XX, os remédios eram chás de raízes e misturas incertas que às vezes curavam, e às vezes envenenavam o paciente. O cientista alemão Paul Ehrlich começou a mudar isso buscando a "bala mágica": um pó químico exato que entrasse no corpo e atacasse apenas a doença, sem machucar as células sadias.</p>

<h2>A Viagem e o Filtro do Fígado</h2>
<p>Primeiro, a pílula derrete no ácido do estômago e é absorvida pelo intestino, caindo na corrente sanguínea. Porém, antes de circular livre pelo corpo, esse sangue passa pelo <strong>Fígado</strong>. O fígado atua como um inspetor de segurança rígido: ele entende que o remédio é uma toxina perigosa e destrói boa parte dele! Apenas a quantidade que "escapa" do fígado é que vai circular para aliviar a sua dor.</p>

<h2>O Relógio, a Urina e a Dose Exata</h2>
<p>Na medicina, a dose é tudo. Enquanto o remédio faz efeito, os <strong>Rins</strong> estão o tempo todo filtrando o sangue para expulsar a droga pela urina. Para manter a quantidade de remédio no nível certo (a chamada Janela Terapêutica Segura), precisamos tomar novas doses seguindo regras estritas (como tomar de 8 em 8 horas). Se você se atrasar muito, o nível cai e a dor volta. Se você tomar o dobro da dose de uma vez, o nível sobe demais, cruzando a linha tóxica vermelha e causando uma overdose perigosa.</p>`,relatedIds:["imunologia-vacinas"],simulation:{component:"farmacocinetica",subtitle:"Simulador do Nível de Remédio no Sangue",about:"Acompanhe a curva azul que sobe e desce. Ajuste a velocidade de digestão e a de eliminação pelos rins, tentando manter o nível de remédio exatamente dentro da faixa verde (a Janela Segura), sem deixar cair no amarelo (ineficaz) ou subir para o vermelho (tóxico).",icon:"heart",iconColor:"#a67e7e",controls:[{id:"kAbs",label:"Velocidade de Digestão (Absorção)",unit:"k",min:1,max:100,default:50,step:1},{id:"kElim",label:"Velocidade de Fuga pela Urina (Limpeza Renal)",unit:"k",min:1,max:100,default:50,step:1}]}},{id:"imunologia-vacinas",topic:"Medicina",title:"Imunologia e a Invenção das Vacinas",summary:"Como enganamos nossas defesas com vírus falsos para gerar proteção militar de vida longa no corpo.",image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Antígenos (Invasores)","Anticorpos","Edward Jenner","Vacinas","Células de Memória"],content:`
<p>Nosso sangue carrega um batalhão militar poderoso de glóbulos brancos, o <strong>Sistema Imunológico</strong>. Ele é o responsável por identificar, travar batalhas e aniquilar invasores perigosos, como bactérias e vírus que entram pelo nosso nariz ou boca.</p>

<h2>História: As Vacas e a Descoberta de Jenner</h2>
<p>No fim do século XVIII, a varíola matava milhões de pessoas e deixava as outras cheias de cicatrizes pelo corpo. O médico inglês Edward Jenner notou algo curioso: mulheres ordenhadeiras de vacas pegavam uma doença fraquinha chamada "varíola bovina" e, depois disso, nunca pegavam a varíola humana mortal. Em 1796, Jenner injetou o pus inofensivo da doença da vaca no braço de um menino e depois expôs o menino à varíola mortal. O menino não ficou doente! Essa foi a invenção da <strong>Vacina</strong> (palavra que vem do latim "vaccinus", que significa "da vaca").</p>

<h2>Como os Anticorpos Lutam</h2>
<p>Quando um vírus real entra no corpo, nossas células de defesa analisam o formato externo do inimigo e começam a produzir <strong>Anticorpos</strong>. Os anticorpos são peças em formato de "Y" que funcionam como chaves que se encaixam perfeitamente na armadura do vírus invasor, neutralizando-o para ser devorado. O problema é que o corpo demora alguns dias de febre e cansaço para descobrir o molde exato dessa chave.</p>

<h2>O Truque da Injeção</h2>
<p>A vacina funciona nos aplicando um truque: os cientistas injetam apenas pedacinhos mortos e inofensivos do vírus. Nosso corpo acha que é um ataque real, luta contra esse inimigo falso e produz as chaves de Anticorpo em formato de "Y", guardando as "receitas" secretas em <strong>Células de Memória</strong>.</p>
<p>Anos depois, se você respirar um vírus perigoso de verdade no ônibus, o seu sistema imune reconhece o perigo instantaneamente. Ele aciona as células de memória, que disparam milhões de anticorpos prontos, matando a doença verdadeira tão rápido que você sequer chega a sentir dor de cabeça ou febre!</p>`,relatedIds:["farmacocinetica"],simulation:{component:"imunologia",subtitle:"Batalha dos Glóbulos Brancos e Vírus",about:'Acompanhe a briga entre os pontinhos vermelhos (vírus) e as suas defesas azuis (anticorpos). Altere a "Força de Resposta" (como se tivesse tomado uma Vacina) e veja como a defesa varre e elimina o vírus rapidamente, impedindo a doença de se multiplicar e tomar o corpo.',icon:"shield",iconColor:"#a67e7e",controls:[{id:"immuneStrength",label:"Eficácia da Memória Imunológica (Vacina)",unit:"%",min:10,max:100,default:50,step:5},{id:"viralLoad",label:"Quantidade de Vírus Agressor (Gravidade)",unit:"%",min:10,max:100,default:50,step:5}]}},{id:"vacina-mrna-cancer",topic:"Medicina",title:"Vacina de mRNA mostra eficácia contra três tipos de câncer",summary:"A inovação surpreendente que está programando nosso corpo para caçar a doença.",image:"https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>O <strong>RNA Mensageiro (mRNA)</strong> é uma tecnologia exata que em vez de injetar vírus mortos frouxos no braço da enfermaria braço do osso do da clínica, manda apenas e atira fria pálida manda uma "receita impressa biológica de impressa folha de bolo carta", ensinando mandando ordenando instruindo ditando e ordenando de as de fábricas as frias cegas pálidas fáticas burras e próprias sadias próprias vivas células suas das vivas trabalharem puras sozinhas montando os armamentos das defesas limpas duras das contra as peças.</p>

<h2>A Nova Era contra o Mal Grave</h2>
<p>Famosa pesada veloz pela pandemia, os cientistas pálidos e os trágicos cientistas focaram nos testes doentes dos amargos novos velhos e de mal trágicos amargos casos velhos mal. A Vacina agora manda nas células a exata velha pálida molde exato liso a forma letal e bizarra da estranha triste da malévola e trágica suja e pálida pele trágica velha mancha a da célula maldosa cega deformada cruel letal pesada suja estranha maldosa triste cruel da pálida velha letal fria cega pesada célula dura e amarga letal cruel letal da célula feia célula maldosa cruel feia triste pálida da bizarra amarga do trágico cancro do câncer! As sentinelas lendo blindadas na da das do papel e ler lendo do corpo branco criam cega rápida a arma do exato do da arma oca do milagre e de brava blindada resposta exata amarga na e no pálido da limpo caçando friamente e atacando dura veloz fria impiedosa caçando e caça impiedosa com laser no e na precisão cruel milimétrica dura exata caça implacável doentia limpa só e apaga fática cura limpando apagando só os letais os bizarros pontinhos letais frouxos e doentes de os frios tumores escondidos doentes do corpo exato poupando sadias sem de destruir na sofrida queda fria oca dos na e de cabelos de ou trágica sofrida dura dos na sofrida da cega cruel pálida das e de velha das duras venenosas brutas pálidas veias das as drogas de velhas perigosas fortes curas da das duras das cruas amargas fortes e na de cega pesada da na fria grossa quimio cega pura fria dolorida dolorosa fina veloz antiga das de velha pesada cega pesada pura e antiga cega velha tóxica fria e quimioterapia! Exemplo lindo milagre e do amanhã limpo formidável escolar feliz amanhã das pálidas vivas das pílulas feliz escolar.</p>`,relatedIds:["enzima-envelhecimento","catalisador-hidrogenio"],simulation:null},{id:"potencial-acao",topic:"Medicina",title:"Potencial de Ação: o Impulso Nervoso",summary:"Como os neurônios conversam usando eletricidade — e a regra do tudo-ou-nada.",image:"https://image.pollinations.ai/prompt/A%20neuron%20firing%20an%20electrical%20action%20potential%2C%20blue%20and%20orange%20membrane%20channels%2C%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Neurônio","Sódio e Potássio","Limiar de Disparo","Lei do Tudo-ou-Nada"],content:`
<p>Os <strong>neurônios</strong> se comunicam por pulsos elétricos chamados potenciais de ação. Cada pulso é uma onda de voltagem que percorre a membrana da célula nervosa.</p>

<h2>Sódio Entra, Potássio Sai</h2>
<p>Em repouso, o interior do neurônio é negativo (cerca de −70 mV). Quando um estímulo o despolariza além de um limiar, canais de sódio se abrem de repente, o Na⁺ invade e a voltagem dispara para valores positivos. Logo depois, canais de potássio deixam o K⁺ sair, e a membrana volta ao repouso.</p>

<h2>Tudo ou Nada</h2>
<p>O detalhe fundamental: se o estímulo não atinge o limiar, nada acontece. Se atinge, o disparo é sempre completo, com a mesma amplitude — não existe 'meio' potencial de ação. A simulação integra o modelo de Hodgkin–Huxley: aumente o estímulo até cruzar o limiar e veja o disparo nascer.</p>`,relatedIds:["sistema-circulatorio"],simulation:{component:"potencial-acao",subtitle:"Potencial de Ação (Hodgkin–Huxley)",about:"Integra o modelo de Hodgkin–Huxley — o mesmo que rendeu o Nobel de 1963 — com as condutâncias reais de sódio e potássio. Abaixo do limiar, o estímulo não gera nada; ao cruzá-lo, o potencial de ação dispara sempre com a mesma amplitude (a lei do tudo-ou-nada). Aumente o estímulo para ver disparos repetidos e observe o período refratário, em que o neurônio não consegue disparar de novo por mais forte que seja o estímulo.",icon:"activity",iconColor:"#a67e93",controls:[{id:"stimulus",label:"Intensidade do Estímulo",unit:"%",min:0,max:100,default:50,step:5},{id:"speed",label:"Velocidade da Animação",unit:"×",min:.2,max:3,default:1,step:.2}]}},{id:"troca-gasosa",topic:"Medicina",title:"Troca Gasosa nos Pulmões",summary:"Como o oxigênio salta do ar para o sangue a cada respiração.",image:"https://image.pollinations.ai/prompt/Lung%20alveoli%20exchanging%20oxygen%20with%20red%20blood%20cells%2C%20medical%20illustration%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Alvéolos","Lei de Fick","Difusão","Hemoglobina"],content:`
<p>A cada inspiração, o ar chega aos <strong>alvéolos</strong> — minúsculos sacos nos pulmões cercados por vasos sanguíneos. É ali que o oxigênio passa para o sangue e o gás carbônico faz o caminho inverso.</p>

<h2>A Lei de Fick</h2>
<p>A troca acontece por difusão: os gases se movem da região de maior pressão parcial para a de menor. O oxigênio alveolar (~100 mmHg) é bem maior que o do sangue venoso (~40 mmHg), então o O₂ atravessa a membrana e satura as hemácias. A velocidade depende do gradiente e da capacidade de difusão da membrana.</p>

<h2>Quando a Membrana Engrossa</h2>
<p>Doenças como a fibrose pulmonar espessam a membrana e reduzem a difusão: o sangue passa rápido demais e sai sem se saturar. Na simulação, baixe a taxa de difusão para ver as hemácias saindo dos alvéolos ainda azuis (mal oxigenadas).</p>`,relatedIds:["sistema-circulatorio"],simulation:{component:"troca-gasosa",subtitle:"Troca Gasosa Alveolar (Lei de Fick)",about:"A PO₂ alveolar sai da equação do gás alveolar real (≈ 100 mmHg), e cada hemácia satura seguindo a lei de Fick: a taxa de equilíbrio é proporcional ao gradiente de pressão e à capacidade de difusão da membrana. As hemácias entram venosas (PO₂ ≈ 40 mmHg, azuis) e saem arteriais (vermelhas) quando a difusão é boa. Reduza a taxa de difusão para simular uma fibrose pulmonar: as hemácias saem sem se saturar.",icon:"activity",iconColor:"#a67e93",controls:[{id:"breathingRate",label:"Frequência Respiratória",unit:"×",min:.2,max:3,default:1,step:.2},{id:"diffusionRate",label:"Capacidade de Difusão da Membrana",unit:"×",min:.1,max:3,default:1,step:.1}]}}],oS=[{id:"arquitetura-cpu",topic:"Informática",title:"Como funciona o Computador: O Processador (CPU)",summary:"A incrível evolução do cérebro eletrônico, que encolheu do tamanho de uma sala para a palma da sua mão.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",level:"Iniciante",concepts:["Processador (CPU)","Memória RAM","Placa-Mãe","Transistores"],content:`
<p>O <strong>Processador</strong>, também conhecido como CPU (Unidade Central de Processamento), é o maestro ou o cérebro do computador. É ele quem recebe as ordens, faz as contas e diz para as outras peças o que elas precisam fazer, processando bilhões de informações por segundo.</p>

<h2>História: Das Válvulas ao Microchip</h2>
<p>Durante a Segunda Guerra Mundial, o primeiro grande computador eletrônico, o ENIAC, pesava 30 toneladas e ocupava uma sala inteira. Ele usava válvulas de vidro pesadas que esquentavam e queimavam constantemente. Foi só em 1971 que a empresa Intel criou o primeiro "microprocessador", o Intel 4004, juntando toda a capacidade de cálculo num pequeno quadrado de silício (chip). Hoje, graças à evolução tecnológica, o processador do seu smartphone é milhões de vezes mais rápido e potente que os enormes computadores que ajudaram a levar a missão Apollo 11 para a Lua!</p>

<h2>Por dentro do Processador e a Memória RAM</h2>
<p>Se você olhar no microscópio, um processador moderno é feito de bilhões de minúsculos interruptores chamados <strong>transistores</strong>. Eles têm apenas duas opções: deixar a energia passar (1) ou bloquear a energia (0). Tudo na tela do computador (vídeos, jogos, textos) é formado por esse simples código binário trabalhando em altíssima velocidade.</p>
<p>Apesar de rápido, o processador usa a <strong>Memória RAM</strong> para trabalhar. Pense no processador como você sentado numa mesa estudando, e a RAM como a própria mesa. Quanto maior a mesa (mais memória RAM), mais cadernos e livros (aplicativos) você consegue deixar abertos ao mesmo tempo sem ter que guardá-los e pegá-los na mochila (o Disco Rígido, HD ou SSD). Se a memória enche, o processador tem que ficar esperando, e é aí que o seu celular ou computador começa a "travar".</p>`,relatedIds:["inteligencia-artificial"],simulation:null},{id:"redes-internet",topic:"Informática",title:"A Internet e as Redes de Computadores",summary:"O caminho invisível que suas mensagens e vídeos fazem pelo fundo dos oceanos para conectar o mundo.",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Roteadores","Pacotes de Dados","Endereço IP","Cabos Submarinos","ARPANET"],content:`
<p>Nós usamos o "Wi-Fi" pelo ar em nossas casas, mas a <strong>Internet Mundial</strong> real não flutua em uma nuvem. Ela é, na verdade, a maior rede de engenharia da humanidade: uma gigantesca teia física de cabos de fibra ótica, muitos deles deitados e enterrados no fundo dos oceanos, conectando silenciosamente todos os continentes e países.</p>

<h2>História: Nascida na Guerra Fria</h2>
<p>Nos anos 1960, durante a Guerra Fria (entre EUA e União Soviética), os militares americanos temiam que um único ataque a uma central telefônica destruísse todas as comunicações do país. Para evitar isso, cientistas criaram a <strong>ARPANET</strong>, uma rede onde não existia um "centro". Se uma cidade fosse bombardeada e um cabo arrebentasse, os computadores automaticamente achariam outro caminho pelas bordas para enviar os dados. Essa rede descentralizada indestrutível virou a base da internet moderna.</p>

<h2>O Caminho dos Dados (Pacotes e Roteadores)</h2>
<p>Quando você envia uma foto pesada pelo WhatsApp, a rede não manda a imagem inteira de uma vez só. O seu celular "pica" a foto em milhares de pedacinhos minúsculos chamados <strong>Pacotes de Dados</strong>.</p>
<p>Cada pacote ganha um selo com o endereço destino (o Endereço IP do celular do seu amigo). Esses pacotes viajam sozinhos, passando por computadores especiais chamados <strong>roteadores</strong>, que funcionam como guardas de trânsito, sempre apontando o caminho menos engarrafado nos cabos da rua. Chegando no celular do seu amigo, o aplicativo junta novamente as peças do quebra-cabeça na ordem exata, e a imagem aparece colorida na tela. Tudo isso em frações de segundo!</p>`,relatedIds:["arquitetura-cpu"],simulation:{component:"tcp-ip",subtitle:"Simulador de Tráfego de Pacotes da Internet",about:'Ajuste a qualidade da rede. Se você aumentar o nível de "Perda de Pacotes" (representando cabos danificados ou roteadores lotados), verá que a rede precisa pedir para reenviar a informação, o que torna o carregamento muito lento e a internet instável.',icon:"globe",iconColor:"#8f7ea6",controls:[{id:"lossRate",label:"Perda de Pacotes (Erro de Rede)",unit:"%",min:0,max:30,default:5,step:1},{id:"speed",label:"Demora e Latência (Ping Espacial)",unit:"x",min:.1,max:3,default:1,step:.1}]}},{id:"inteligencia-artificial",topic:"Informática",title:"Inteligência Artificial (IA) Básica e Redes Neurais",summary:"Como deixamos de programar computadores com regras rígidas e passamos a ensiná-los a aprender com os próprios erros.",image:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",level:"Intermediário",concepts:["Machine Learning (Aprendizado de Máquina)","Redes Neurais Artificiais","Treinamento de Dados","Teste de Turing"],content:`
<p>Antigamente, programar um computador era como escrever uma receita de bolo com regras muito rígidas: o programador tinha que ditar passo a passo o que a máquina devia fazer ("Se acontecer X, faça Y"). O computador era rápido, porém sem criatividade. A <strong>Inteligência Artificial (IA) Moderna</strong> mudou isso. Em vez de regras duras, as máquinas ganharam a habilidade de aprenderem sozinhas analisando milhares de exemplos do passado, numa técnica chamada <em>Machine Learning</em> (Aprendizado de Máquina).</p>

<h2>História: O Teste de Turing</h2>
<p>A ideia da IA é antiga. Em 1950, o gênio e pai da computação moderna, Alan Turing, publicou um artigo se perguntando: "Máquinas podem pensar?". Ele criou o famoso Teste de Turing: se um juiz humano conversasse, por meio de um teclado, com outra pessoa e com um computador escondido ao mesmo tempo, e no final não conseguisse descobrir qual era o humano e qual era a máquina, o computador teria passado no teste de inteligência. Hoje, sistemas modernos chegam cada vez mais perto dessa meta.</p>

<h2>A Imitação do Cérebro e as Aplicações Práticas</h2>
<p>Para ensinar os computadores a aprenderem, os engenheiros se inspiraram no nosso próprio cérebro humano, criando as <strong>Redes Neurais Artificiais</strong>. Se você quer ensinar a IA a reconhecer gatos em fotos, você não precisa programar regras descrevendo "orelhas pontudas e bigodes". Você simplesmente mostra à máquina um milhão de fotos de gatos e outro milhão de fotos de cachorros. No início ela erra muito, mas a cada erro, fórmulas matemáticas ajustam o sistema para que ele melhore da próxima vez. O computador detecta padrões visuais que às vezes nós mesmos não vemos.</p>
<p><strong>Aplicações:</strong> Depois de muitas horas de treinamento pesado, a IA se torna mestre. É essa tecnologia de aprendizado com Redes Neurais que permite, hoje em dia, que carros autônomos consigam "enxergar" as ruas e dirigir sozinhos, ou que computadores de hospitais consigam ler centenas de chapas de Raio-X em segundos e detectar pequenos sinais de doenças com mais precisão e antecedência que doutores experientes, salvando muitas vidas.</p>`,relatedIds:["arquitetura-cpu"],simulation:{component:"rede-neural",subtitle:"Monitor de Treinamento da Inteligência Artificial",about:'Acompanhe o gráfico de "Erro" da inteligência artificial caindo à medida que ela aprende. O "Tamanho do Passo" controla o quanto a IA tenta se corrigir a cada tentativa. Se o passo for grande demais, ela se atrapalha e o erro não cai. O ideal é um ajuste fino para chegar a um acerto perfeito.',icon:"cpu",iconColor:"#8f7ea6",controls:[{id:"learningRate",label:"Tamanho do Passo de Aprendizado",unit:"x",min:.1,max:3,default:1,step:.1}]}},{id:"computador-quantico",topic:"Informática",title:"Computador quântico resolve problema em 47 segundos",summary:"As novas máquinas futuristas que processam todas as possibilidades ao mesmo tempo.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",level:"Intermediário",concepts:[],content:`
<p>Um <strong>Computador Quântico</strong> não usa processadores de sílica rígida como os nossos celulares antigos; ele usa laboratórios de lasers para segurar átomos suspensos vivos em vácuo escuro!</p>

<h2>Como Funciona a Superposição?</h2>
<p>O PC normal usa a regra fria de transistores ("se é 1 não é 0; se é branco, não é preto"). O Quântico usa "Qubits" formidáveis que ativam as bizarrices atômicas e quânticas (a Superposição): eles podem literalmente ser 0 e 1, misturados ao longo das contas, ao mesmíssimo tempo. O cérebro quântico varre todas as senhas testando juntas as trilhões de opções num único ciclo.</p>

<h2>Por que Importa?</h2>
<p>Um computador antigo da escola levaria velhos dezoito mil anos contados para desvendar um cálculo molecular. Os novos super laboratórios quânticos do Google (como a proeza de 2019 da Supremacia Quântica) limpam fáceis a mesma charada na mesa vazia e em frios 200 segundos rápidos exatos. Eles vão ser a alma vital para descobrir moléculas imensas inéditas curando velhos remédios trágicos em laboratórios do futuro rápido das novas faculdades sem depender da triste biologia de cobaias nas clínicas.</p>`,relatedIds:["entrelaçamento-quantico","enzima-envelhecimento"],simulation:null},{id:"ordenacao",topic:"Informática",title:"Algoritmos de Ordenação",summary:"Por que alguns métodos de organizar uma lista são milhares de vezes mais rápidos que outros.",image:"https://image.pollinations.ai/prompt/Sorting%20algorithm%20visualization%20with%20colored%20bars%2C%20computer%20science%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Algoritmos","Complexidade","Bubble Sort","Quicksort"],content:`
<p>Organizar uma lista em ordem parece trivial, mas <em>como</em> você faz isso muda tudo. Um algoritmo lento e um rápido chegam ao mesmo resultado — só que um pode levar segundos e o outro, horas, na mesma lista grande.</p>

<h2>Do Lento ao Rápido</h2>
<p>O Bubble Sort compara vizinhos e troca, repetindo até tudo ficar em ordem: simples, mas lentíssimo (O(n²)). O Quicksort e o Merge Sort usam a estratégia de 'dividir para conquistar' e chegam a O(n log n) — a diferença que, numa lista de milhões de itens, separa o instantâneo do impraticável.</p>

<h2>Uma Corrida Visual</h2>
<p>A simulação roda vários algoritmos lado a lado, na mesma lista, para você ver com os próprios olhos quem termina primeiro e por quê.</p>`,relatedIds:["inteligencia-artificial"],simulation:{component:"ordenacao",subtitle:"Corrida de Algoritmos de Ordenação",about:"Vários algoritmos de ordenação clássicos correm ao mesmo tempo, na mesma lista embaralhada, para você comparar visualmente a eficiência de cada um. Métodos O(n²) como o Bubble Sort ficam para trás enquanto os O(n log n) como Quicksort e Merge Sort terminam rápido — a diferença de complexidade que, em escala real, separa o instantâneo do impraticável.",icon:"cpu",iconColor:"#8f7ea6",controls:[{id:"speed",label:"Velocidade da Animação",unit:"×",min:1,max:15,default:5,step:1}]}},{id:"arvores",topic:"Informática",title:"Árvores de Busca e o Balanceamento",summary:"A estrutura de dados que encontra qualquer item entre milhões em poucos passos.",image:"https://image.pollinations.ai/prompt/Binary%20search%20tree%20data%20structure%20with%20nodes%20and%20branches%2C%20computer%20science%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Árvore Binária de Busca","Balanceamento AVL","Complexidade Logarítmica","Rotações"],content:`
<p>Uma <strong>árvore binária de busca</strong> organiza dados de forma que cada busca elimine metade das possibilidades — encontrando um item entre milhões em poucos passos.</p>

<h2>O Perigo da Árvore Torta</h2>
<p>Mas há um problema: se os dados chegam já ordenados, a árvore vira uma lista torta e a busca fica lenta de novo (O(n)). A solução são as árvores balanceadas, como a AVL, que se reorganizam com <em>rotações</em> para manter a altura mínima.</p>

<h2>Ver a Diferença</h2>
<p>A simulação constrói a árvore com dados ordenados ou embaralhados, com ou sem balanceamento AVL, e mostra como a altura — e portanto a velocidade da busca — muda drasticamente.</p>`,relatedIds:["ordenacao"],simulation:{component:"arvores",subtitle:"Árvore de Busca Binária e AVL",about:"A árvore é construída chave a chave, com contagem real de comparações e rotações. Insira dados já ordenados sem balanceamento para ver a árvore degenerar numa lista torta (busca lenta, O(n)); ligue o balanceamento AVL e veja as rotações manterem a árvore baixa e a busca logarítmica (O(log n)). Os modos ordenado/embaralhado e AVL ligado/desligado deixam a diferença gritante.",icon:"cpu",iconColor:"#8f7ea6",controls:[{id:"sorted",type:"select",label:"Dados de entrada",default:0,options:[{value:0,label:"Embaralhados"},{value:100,label:"Já ordenados"}]},{id:"avl",type:"toggle",label:"Balanceamento AVL",on:100,off:0,default:0},{id:"speed",label:"Velocidade da Animação",unit:"×",min:.5,max:5,default:2,step:.5}]}},{id:"criptografia",topic:"Informática",title:"Criptografia: da Cifra de César ao RSA",summary:"Como escondemos mensagens — e por que um método antigo é quebrado em segundos.",image:"https://image.pollinations.ai/prompt/Encryption%20cipher%20with%20scrambled%20letters%20and%20keys%2C%20cryptography%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Cifra de César","Análise de Frequência","Criptografia RSA","Chave Pública"],content:`
<p>A <strong>criptografia</strong> embaralha uma mensagem para que só quem tem a chave certa a leia. A cifra de César, usada há dois mil anos, apenas desloca cada letra do alfabeto por um número fixo de posições.</p>

<h2>Por que César é Fraca</h2>
<p>O problema: só existem 25 deslocamentos possíveis, e a frequência das letras entrega tudo. Um computador testa as 25 chaves e escolhe a mais parecida com um texto real (por análise de frequência) em um instante.</p>

<h2>A Solução Moderna</h2>
<p>A criptografia RSA resolve isso com números primos gigantes: é fácil multiplicá-los, mas praticamente impossível descobrir os fatores. A simulação mostra a cifra de César sendo quebrada por análise de frequência e ilustra a ideia da chave pública do RSA.</p>`,relatedIds:["teoria-dos-numeros"],simulation:{component:"criptografia",subtitle:"Cifra de César, Quebra por Frequência e RSA",about:"A cifra de César desloca cada letra por um número fixo de posições — e a simulação a quebra na sua frente: testa as 25 chaves possíveis e escolhe a melhor por análise de frequência (χ²), mostrando por que uma cifra tão simples não resiste a um computador. Em paralelo, ilustra a ideia da chave pública do RSA, cuja segurança vem da dificuldade de fatorar números primos gigantes. Ajuste o deslocamento da cifra e veja o ataque reencontrar a chave.",icon:"cpu",iconColor:"#8f7ea6",controls:[{id:"shift",label:"Deslocamento da Cifra de César",unit:"",min:1,max:25,default:3,step:1},{id:"speed",label:"Velocidade da Animação",unit:"×",min:.2,max:3,default:1,step:.2}]}}],tS=[{id:"mat-conjuntos-numericos",topic:"Matemática",title:"Conjuntos Numéricos: dos Naturais aos Reais",summary:"Toda a matemática se apoia em famílias de números. Conheça cada uma, do simples ato de contar até a reta contínua dos números reais.",image:"https://image.pollinations.ai/prompt/A%20number%20line%20with%20integers%20fractions%20and%20irrational%20numbers%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Números Naturais","Números Inteiros","Números Racionais","Números Irracionais","Números Reais"],content:`
<p>Antes de somar, resolver equações ou derivar funções, precisamos saber com <em>que tipo de número</em> estamos lidando. Ao longo da história, a humanidade foi ampliando a ideia de número sempre que uma necessidade nova aparecia — e cada ampliação criou uma nova família, um <strong>conjunto numérico</strong>. Entender essas famílias é entender o terreno onde toda a matemática é construída. Vamos percorrê-las na ordem em que a humanidade as descobriu, que também é a ordem que vai do mais simples ao mais completo.</p>

<h2>Naturais (ℕ): o número de contar</h2>
<p>Os <strong>números naturais</strong> são os primeiros que qualquer pessoa aprende: são os números de <em>contar</em> objetos — uma ovelha, duas ovelhas, três ovelhas. Eles não têm parte decimal nem sinal negativo.</p>
<p class='formula'>ℕ = {0, 1, 2, 3, 4, 5, …}<small>o conjunto dos naturais é infinito e, na convenção brasileira, começa no zero</small></p>
<p>Repare numa sutileza histórica: o <strong>zero</strong> demorou milênios para ser aceito como número. Contar “nenhuma ovelha” parecia estranho — como um número pode representar a ausência de coisas? Foram os matemáticos indianos, por volta do século V, que firmaram o zero como um número de pleno direito, uma das maiores invenções da história da matemática.</p>
<p>Com os naturais somamos e multiplicamos sem problema: a soma ou o produto de dois naturais é sempre outro natural. Mas há um limite. Quanto é <strong>3 − 5</strong>? Dentro dos naturais, não há resposta. Para resolver isso, foi preciso inventar os negativos.</p>

<h2>Inteiros (ℤ): quando o negativo entra em cena</h2>
<p>Os <strong>números inteiros</strong> incluem todos os naturais, o zero e os seus opostos negativos. Eles nascem de situações concretas do dia a dia: uma dívida de R$ 50 (−50), uma temperatura de 8 graus abaixo de zero (−8), o terceiro andar do subsolo (−3).</p>
<p class='formula'>ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}<small>a letra Z vem de <em>Zahl</em>, “número” em alemão</small></p>
<p>Na reta numérica, cada inteiro positivo tem um espelho do outro lado do zero: o 5 e o −5 estão à mesma distância da origem. Essa distância até o zero, sempre positiva, chama-se <strong>módulo</strong> (ou valor absoluto) e escreve-se entre barras: |−5| = 5 e |5| = 5.</p>
<p>Agora toda subtração tem resposta: 3 − 5 = −2. Mas surge outro limite. Quanto é <strong>1 ÷ 2</strong>? Não é um inteiro. Faltam os números “quebrados”.</p>

<h2>Racionais (ℚ): tudo que vira fração</h2>
<p>Um <strong>número racional</strong> é todo número que pode ser escrito como uma fração de dois inteiros, com o denominador diferente de zero. A palavra “racional” vem de <em>razão</em>, que em matemática significa divisão.</p>
<p class='formula'>ℚ = { a / b  |  a, b ∈ ℤ  e  b ≠ 0 }<small>exemplos: 1/2 · −7/3 · 5 (= 5/1) · 0,75 (= 3/4)</small></p>
<p>Todo inteiro também é racional (basta pôr denominador 1), então os inteiros estão “dentro” dos racionais. E há um teste definitivo para reconhecer um racional pela sua forma decimal: ela ou é <strong>exata</strong> (termina, como 0,25) ou vira uma <strong>dízima periódica</strong> — uma parte que se repete para sempre, como 0,3333… = 1/3 ou 0,142857142857… = 1/7.</p>
<div class='example'>
  <span class='tag'>Exemplo · transformando uma dízima em fração</span>
  <p>Que fração vale a dízima 0,4444…? Chame o valor de <em>x</em> e use um truque para “empurrar a vírgula”:</p>
  <p class='formula'>x = 0,4444…<br>10x = 4,4444…<br>10x − x = 4,4444… − 0,4444… = 4<br>9x = 4  →  x = 4/9</p>
  <p>Confira dividindo 4 por 9 na calculadora: dá 0,4444…. Toda dízima periódica esconde uma fração — e é exatamente por isso que ela é racional.</p>
</div>

<h2>Irracionais (𝕀): os que fogem da fração</h2>
<p>Existem números cuja parte decimal é infinita e <strong>nunca</strong> repete um padrão. Eles não podem ser escritos como fração de inteiros — são os <strong>irracionais</strong>.</p>
<ul>
  <li><strong>√2 ≈ 1,4142135…</strong> — a diagonal de um quadrado de lado 1.</li>
  <li><strong>π ≈ 3,1415926…</strong> — a razão entre a circunferência e o diâmetro de <em>qualquer</em> círculo.</li>
  <li><strong>φ ≈ 1,6180339…</strong> — a proporção áurea, que reaparece na sequência de Fibonacci.</li>
</ul>
<p>A descoberta dos irracionais, na escola de Pitágoras, foi um choque tão grande que virou lenda. Conta-se que Hipaso de Metaponto provou que √2 não podia ser uma fração — contrariando a crença pitagórica de que todo número era uma razão de inteiros — e que isso lhe custou a vida. A prova é curta e brilhante: se √2 fosse uma fração já simplificada a/b, então a² = 2b², o que forçaria <em>a</em> e <em>b</em> a serem ambos pares — mas uma fração já simplificada não pode ter numerador e denominador pares. Contradição. Logo √2 não é racional.</p>

<h2>Reais (ℝ): juntando tudo numa reta</h2>
<p>Quando reunimos os racionais e os irracionais, formamos os <strong>números reais</strong>. A grande imagem mental é a <strong>reta real</strong>: uma linha infinita em que cada ponto corresponde a exatamente um número real, e cada número real ocupa exatamente um ponto. Não sobra nenhum “buraco” — entre dois reais quaisquer, por mais próximos, sempre cabe outro real (dizemos que os reais são <em>densos</em>).</p>
<p class='formula'>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ<br>ℝ = ℚ ∪ 𝕀<small>cada conjunto está contido no seguinte; os reais reúnem racionais e irracionais</small></p>

<h2>A linguagem dos conjuntos: ∈ e ⊂</h2>
<p>Dois símbolos aparecem o tempo todo daqui pra frente. O <strong>∈</strong> (“pertence a”) liga um <em>número</em> a um <em>conjunto</em>. O <strong>⊂</strong> (“está contido em”) liga um <em>conjunto</em> a outro <em>conjunto</em>.</p>
<p class='formula'>7 ∈ ℕ   (o número 7 pertence aos naturais)<br>ℕ ⊂ ℤ   (o conjunto ℕ está contido em ℤ)</p>
<div class='example'>
  <span class='tag'>Exemplo · classificando números</span>
  <p>Em qual família cada número se encaixa?</p>
  <ul>
    <li><strong>7</strong> → natural, inteiro, racional e real (pertence a todos).</li>
    <li><strong>−4</strong> → inteiro, racional e real (não é natural).</li>
    <li><strong>2/5 = 0,4</strong> → racional e real (não é inteiro).</li>
    <li><strong>√9 = 3</strong> → cuidado! √9 é exatamente 3, então é natural. Nem toda raiz é irracional.</li>
    <li><strong>√2</strong> → irracional e real.</li>
    <li><strong>−1,5</strong> → racional (= −3/2) e real.</li>
  </ul>
</div>

<h2>Onde isso é usado</h2>
<p>Essa classificação não é só teoria de sala de aula — ela organiza como o mundo digital guarda números:</p>
<ul>
  <li><strong>Programação:</strong> toda linguagem distingue tipos como <em>integer</em> (inteiro) de <em>float</em> (número com casas decimais). Um contador de estoque usa inteiros; um preço ou uma medida usa decimais. Escolher o tipo errado gera bugs.</li>
  <li><strong>Engenharia e física:</strong> cálculos com π ou √2 usam reais, mas o computador só guarda uma <em>aproximação</em> racional (com muitas casas), porque é impossível armazenar infinitas casas decimais.</li>
  <li><strong>Finanças:</strong> juros e câmbio vivem no mundo dos racionais; sistemas bancários tratam centavos como inteiros para evitar erros de arredondamento.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que “número com vírgula” é sempre irracional. <strong>0,5 e 0,333… são racionais</strong> (valem 1/2 e 1/3). O que define o irracional é a decimal ser infinita <em>e</em> sem padrão de repetição. Outro deslize: pensar que √ de qualquer número é irracional — √9, √16 e √25 são inteiros perfeitos.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li><strong>ℕ</strong> conta; <strong>ℤ</strong> acrescenta os negativos; <strong>ℚ</strong> acrescenta as frações; <strong>𝕀</strong> traz os que não viram fração; <strong>ℝ</strong> reúne tudo numa reta contínua.</li>
  <li>Cada conjunto está contido no próximo: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</li>
  <li>Teste do racional: em decimal, ou termina ou tem dízima periódica.</li>
  <li>∈ liga número a conjunto; ⊂ liga conjunto a conjunto.</li>
</ul>`,relatedIds:["mat-quatro-operacoes","mat-potenciacao-radiciacao"],simulation:null},{id:"mat-quatro-operacoes",topic:"Matemática",title:"As Quatro Operações e suas Propriedades",summary:"Somar, subtrair, multiplicar e dividir parecem simples — mas as propriedades e as regras de sinais por trás delas são o que fazem toda a álgebra funcionar.",image:"https://image.pollinations.ai/prompt/Mathematical%20operations%20plus%20minus%20times%20divide%20symbols%2C%20elegant%20geometric%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Adição e Subtração","Multiplicação e Divisão","Regra dos Sinais","Propriedade Distributiva","Divisão por Zero"],content:`
<p>As quatro operações fundamentais — adição, subtração, multiplicação e divisão — são as ferramentas básicas de todo cálculo. Você já as usa desde criança, mas raramente para para pensar nas <strong>propriedades</strong> e nas <strong>regras de sinais</strong> que elas obedecem. E são justamente essas regras que, mais tarde, permitem manipular equações, simplificar expressões e fazer álgebra com segurança. Vamos olhá-las de perto.</p>

<h2>Adição e subtração: juntar e tirar</h2>
<p>A <strong>adição</strong> junta quantidades. Seus termos se chamam <em>parcelas</em>, e o resultado é a <em>soma</em>. A <strong>subtração</strong> é a operação inversa: descobre o que sobra ao tirar uma quantidade de outra; seus termos são <em>minuendo</em> − <em>subtraendo</em> = <em>diferença</em>.</p>
<p class='formula'>5 + 3 = 8   →  parcelas: 5 e 3 · soma: 8<br>8 − 3 = 5   →  a subtração desfaz a adição<small>somar e subtrair são operações inversas uma da outra</small></p>

<h2>Multiplicação e divisão: somar em blocos e repartir</h2>
<p>A <strong>multiplicação</strong> é uma soma de parcelas iguais: 4 × 3 significa “o 3 somado 4 vezes”. Seus termos são os <em>fatores</em>, e o resultado é o <em>produto</em>. A <strong>divisão</strong> é sua inversa: reparte uma quantidade em partes iguais, com termos <em>dividendo</em> ÷ <em>divisor</em> = <em>quociente</em> (e às vezes sobra um <em>resto</em>).</p>
<p class='formula'>4 × 3 = 3 + 3 + 3 + 3 = 12<br>12 ÷ 4 = 3   →  a divisão desfaz a multiplicação<small>multiplicar é somar em blocos; dividir é o caminho de volta</small></p>
<div class='callout'>
  <span class='tag'>Atenção · divisão por zero</span>
  <p>Não existe 8 ÷ 0. Dividir por zero perguntaria “que número multiplicado por 0 dá 8?” — e nenhum número serve, porque tudo vezes 0 dá 0. Por isso a divisão por zero é <strong>indefinida</strong>: calculadoras e programas retornam erro. Já 0 ÷ 8 = 0 numa boa (nenhuma parte de nada).</p>
</div>

<h2>A regra dos sinais</h2>
<p>Ao trabalhar com inteiros, precisamos saber o sinal do resultado. Na multiplicação e na divisão, a regra é enxuta: <strong>sinais iguais dão positivo; sinais diferentes dão negativo</strong>.</p>
<p class='formula'>(+) × (+) = (+)      (−) × (−) = (+)<br>(+) × (−) = (−)      (−) × (+) = (−)</p>
<p>Por que “menos com menos dá mais”? Uma forma intuitiva: multiplicar por um número negativo é “inverter o sentido” na reta. Inverter duas vezes (−×−) volta ao sentido original, ou seja, positivo. Na soma e subtração, o segredo é somar módulos quando os sinais são iguais e subtrair quando são diferentes, mantendo o sinal do “maior”.</p>
<div class='example'>
  <span class='tag'>Exemplo · operando com sinais</span>
  <ul>
    <li>(−6) × (−4) = +24 (sinais iguais → positivo)</li>
    <li>(−6) × (+4) = −24 (sinais diferentes → negativo)</li>
    <li>(−10) + (+3) = −7 (subtrai módulos 10 e 3, fica o sinal do 10)</li>
    <li>(−10) − (−4) = −10 + 4 = −6 (subtrair um negativo é somar o positivo)</li>
  </ul>
</div>

<h2>As propriedades que fazem tudo funcionar</h2>
<p>Estas regras parecem óbvias, mas dar-lhes nome é o que permite usá-las conscientemente na álgebra.</p>
<h3>Comutativa — a ordem não altera</h3>
<p>Na adição e na multiplicação, trocar a ordem não muda o resultado. <strong>Cuidado:</strong> isso NÃO vale para subtração nem divisão.</p>
<p class='formula'>a + b = b + a       a × b = b × a<br>mas  7 − 2 ≠ 2 − 7   e   8 ÷ 2 ≠ 2 ÷ 8</p>
<h3>Associativa — o agrupamento não altera</h3>
<p>Ao somar ou multiplicar três números, tanto faz quais dois você junta primeiro.</p>
<p class='formula'>(a + b) + c = a + (b + c)<br>(a × b) × c = a × (b × c)</p>
<h3>Distributiva — a ponte entre × e +</h3>
<p>Esta é a mais poderosa: a multiplicação se <em>distribui</em> sobre a soma. É a base da fatoração e de quase toda a álgebra que virá.</p>
<p class='formula'>a × (b + c) = a × b + a × c<small>ex.: 3 × (10 + 2) = 30 + 6 = 36</small></p>
<h3>Elementos neutro e absorvente</h3>
<p>Somar <strong>0</strong> ou multiplicar por <strong>1</strong> não muda nada (elementos neutros). Já multiplicar por <strong>0</strong> zera tudo (o zero é o elemento absorvente da multiplicação).</p>
<p class='formula'>a + 0 = a       a × 1 = a       a × 0 = 0</p>

<div class='example'>
  <span class='tag'>Exemplo · calculando de cabeça com a distributiva</span>
  <p>Quanto é <strong>6 × 47</strong> sem calculadora? Quebre o 47 numa soma fácil e distribua:</p>
  <p class='formula'>6 × 47 = 6 × (40 + 7) = 6×40 + 6×7 = 240 + 42 = 282</p>
  <p>E <strong>7 × 99</strong>? Escreva 99 como 100 − 1: 7 × (100 − 1) = 700 − 7 = 693. É esse truque que usamos para multiplicar de cabeça — e o mesmo que a álgebra formaliza mais tarde ao expandir a(b + c).</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Comércio:</strong> calcular “20% de R$ 150” é a distributiva em ação; agrupar valores parecidos no mercado usa a associativa.</li>
  <li><strong>Álgebra futura:</strong> expandir e fatorar expressões como a(b + c) = ab + ac é literalmente a distributiva com letras.</li>
  <li><strong>Computação:</strong> compiladores reordenam operações usando a comutativa e a associativa para deixar o programa mais rápido — só podem fazer isso porque essas propriedades garantem o mesmo resultado.</li>
  <li><strong>Contabilidade:</strong> créditos e débitos são a regra de sinais aplicada ao dinheiro; um saldo é a soma de entradas (+) e saídas (−).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Assumir que subtração e divisão são comutativas: <strong>10 − 3 ≠ 3 − 10</strong> e <strong>10 ÷ 2 ≠ 2 ÷ 10</strong>. E o clássico dos sinais: <strong>−10 − 4 = −14</strong> (não −6!). Quando os dois têm o mesmo sinal, os módulos se somam.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Adição/subtração e multiplicação/divisão são pares de operações inversas.</li>
  <li>Regra dos sinais (× e ÷): iguais → positivo, diferentes → negativo.</li>
  <li>Divisão por zero é indefinida; multiplicar por zero zera tudo.</li>
  <li><strong>Comutativa</strong> e <strong>associativa</strong> valem para + e ×, mas não para − e ÷.</li>
  <li>A <strong>distributiva</strong> conecta × e + e é a base da álgebra: a(b + c) = ab + ac.</li>
</ul>`,relatedIds:["mat-conjuntos-numericos","mat-expressoes-numericas"],simulation:null},{id:"mat-expressoes-numericas",topic:"Matemática",title:"Expressões Numéricas e a Ordem das Operações",summary:"Por que 2 + 3 × 4 dá 14 e não 20? A ordem das operações é uma convenção universal — e ignorá-la muda completamente o resultado.",image:"https://image.pollinations.ai/prompt/Mathematical%20expression%20with%20parentheses%20and%20operations%20order%2C%20elegant%20chalkboard%20style%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Ordem das Operações","Parênteses, Colchetes e Chaves","Prioridade de Cálculo","Expressões Numéricas"],content:`
<p>Uma <strong>expressão numérica</strong> mistura vários números e operações numa mesma conta, como <em>2 + 3 × 4</em>. O problema: se cada pessoa calcular na ordem que quiser, cada uma chega a um resultado diferente. Para que a matemática seja uma linguagem universal, foi preciso combinar uma <strong>ordem das operações</strong> — uma regra de prioridade que todo mundo segue, do estudante à calculadora, do contador ao supercomputador. Ela não é opcional nem arbitrária: é a convenção que mantém a matemática consistente no mundo inteiro.</p>

<h2>A regra de prioridade</h2>
<p>Resolvemos uma expressão sempre nesta ordem, de cima para baixo:</p>
<ol>
  <li><strong>Símbolos de agrupamento</strong>, de dentro para fora: primeiro parênteses ( ), depois colchetes [ ], depois chaves { }.</li>
  <li><strong>Potências e raízes</strong> (potenciação e radiciação).</li>
  <li><strong>Multiplicações e divisões</strong>, na ordem em que aparecem, da esquerda para a direita.</li>
  <li><strong>Adições e subtrações</strong>, também da esquerda para a direita.</li>
</ol>
<p class='formula'>( ) → [ ] → { }   ›   potências e raízes   ›   × e ÷   ›   + e −<small>dentro do mesmo nível, resolva sempre da esquerda para a direita</small></p>
<p>Por isso <strong>2 + 3 × 4 = 2 + 12 = 14</strong>: a multiplicação tem prioridade sobre a adição. Quem faz 2 + 3 primeiro (chegando a 20) quebrou a convenção.</p>

<h2>Por que multiplicação vem antes da soma?</h2>
<p>Não é capricho. Lembre que multiplicar é somar blocos iguais. Em <em>2 + 3 × 4</em>, o “3 × 4” representa um único bloco (três quatros, ou doze); ele precisa ser montado antes de ser somado ao 2. A prioridade da multiplicação apenas respeita o que a operação significa. As potências vêm antes ainda porque são multiplicações repetidas — um bloco dentro de outro bloco.</p>

<h2>Símbolos de agrupamento aninhados</h2>
<p>Quando uma expressão tem parênteses dentro de colchetes dentro de chaves, resolvemos <strong>de dentro para fora</strong>, como quem descasca uma cebola.</p>
<div class='example'>
  <span class='tag'>Exemplo 1 · resolvendo aninhado, passo a passo</span>
  <p>Calcule: <strong>20 − { 3 + [ 4 × (5 − 2) ] }</strong></p>
  <ol>
    <li>Parêntese mais interno: 5 − 2 = 3 → <strong>20 − { 3 + [ 4 × 3 ] }</strong></li>
    <li>Colchete: 4 × 3 = 12 → <strong>20 − { 3 + 12 }</strong></li>
    <li>Chave: 3 + 12 = 15 → <strong>20 − 15</strong></li>
    <li>Subtração final: 20 − 15 = <strong>5</strong></li>
  </ol>
</div>
<div class='example'>
  <span class='tag'>Exemplo 2 · com potência e sinais</span>
  <p>Calcule: <strong>10 − 2 × 3² + (−4)</strong></p>
  <ol>
    <li>Potência primeiro: 3² = 9 → <strong>10 − 2 × 9 + (−4)</strong></li>
    <li>Multiplicação: 2 × 9 = 18 → <strong>10 − 18 + (−4)</strong></li>
    <li>Da esquerda para a direita: 10 − 18 = −8; depois −8 + (−4) = <strong>−12</strong></li>
  </ol>
</div>

<h2>Onde isso é usado</h2>
<p>A ordem das operações é literalmente a mesma que <strong>calculadoras, planilhas e linguagens de programação</strong> seguem. Quando você escreve <em>=2+3*4</em> numa planilha, o resultado é 14, não 20 — a máquina aplica exatamente esta regra. Programadores usam parênteses o tempo todo para deixar a ordem explícita e evitar bugs difíceis de achar. E aquelas “pegadinhas de matemática” que viralizam nas redes (como <em>6 ÷ 2(1 + 2)</em>) exploram justamente quem esqueceu a convenção:</p>
<div class='example'>
  <span class='tag'>Exemplo 3 · a pegadinha viral</span>
  <p>Quanto é <strong>6 ÷ 2(1 + 2)</strong>? Resolva o parêntese, depois × e ÷ da esquerda para a direita (têm o mesmo nível):</p>
  <p class='formula'>6 ÷ 2 × (3) = 3 × 3 = 9</p>
  <p>Muita gente responde 1 por fazer a multiplicação 2×3 antes da divisão — mas divisão e multiplicação têm a mesma prioridade, e o desempate é a ordem da esquerda para a direita.</p>
</div>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a adição vem antes da subtração, ou a multiplicação antes da divisão. Elas têm o <strong>mesmo nível</strong> de prioridade — o desempate é sempre a ordem da esquerda para a direita. Em <em>10 − 4 + 3</em>, faça 10 − 4 = 6 primeiro, depois 6 + 3 = 9 (e não 10 − 7 = 3).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Ordem: agrupamentos → potências/raízes → × e ÷ → + e −.</li>
  <li>No mesmo nível, resolva da esquerda para a direita.</li>
  <li>Agrupamentos aninhados: de dentro para fora.</li>
  <li>Parênteses existem justamente para <em>forçar</em> uma ordem diferente da padrão.</li>
  <li>É a mesma regra que calculadoras, planilhas e códigos seguem.</li>
</ul>`,relatedIds:["mat-quatro-operacoes","mat-potenciacao-radiciacao"],simulation:null},{id:"mat-potenciacao-radiciacao",topic:"Matemática",title:"Potenciação e Radiciação",summary:"Multiplicar um número por ele mesmo muitas vezes tem um atalho: a potência. E desfazer isso é a raiz. Duas operações que aparecem de juros compostos à física quântica.",image:"https://image.pollinations.ai/prompt/Exponents%20and%20square%20roots%20mathematical%20symbols%2C%20powers%20of%20numbers%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Potenciação","Propriedades das Potências","Radiciação","Expoente Negativo e Zero","Notação Científica"],content:`
<p>Assim como a multiplicação é um atalho para somar parcelas iguais, a <strong>potenciação</strong> é um atalho para multiplicar fatores iguais. E toda operação tem sua inversa: a que desfaz a potência é a <strong>radiciação</strong> (a raiz). Essas duas operações aparecem em juros compostos, no crescimento de populações, em áreas e volumes, na notação científica e em quase toda a física — vale muito a pena dominá-las.</p>

<h2>O que é uma potência</h2>
<p>Uma <strong>potência</strong> indica quantas vezes um número, a <em>base</em>, é multiplicado por si mesmo. O número de vezes é o <em>expoente</em>.</p>
<p class='formula'>2⁵ = 2 × 2 × 2 × 2 × 2 = 32<br>base: 2 · expoente: 5 · potência: 32<small>lê-se “dois elevado à quinta potência”</small></p>
<p>Dois casos especiais têm nome próprio: <strong>expoente 2</strong> é “ao quadrado” (porque a² dá a área de um quadrado de lado <em>a</em>), e <strong>expoente 3</strong> é “ao cubo” (porque a³ dá o volume de um cubo de aresta <em>a</em>). Não é coincidência — a geometria batizou as potências.</p>

<h2>Cuidado com o sinal da base</h2>
<p>Quando a base é negativa, o sinal do resultado depende do expoente ser par ou ímpar, e os parênteses fazem toda a diferença:</p>
<p class='formula'>(−2)² = (−2)×(−2) = +4   (expoente par → positivo)<br>(−2)³ = (−2)×(−2)×(−2) = −8   (expoente ímpar → negativo)<br>−2²  = −(2×2) = −4   (aqui o expoente afeta só o 2, não o sinal!)</p>

<h2>As propriedades das potências</h2>
<p>Estas regras evitam contas enormes e são essenciais na álgebra e na notação científica.</p>
<ul>
  <li><strong>Mesma base, multiplicando:</strong> soma os expoentes → aᵐ × aⁿ = aᵐ⁺ⁿ</li>
  <li><strong>Mesma base, dividindo:</strong> subtrai os expoentes → aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
  <li><strong>Potência de potência:</strong> multiplica os expoentes → (aᵐ)ⁿ = aᵐˣⁿ</li>
  <li><strong>Produto elevado:</strong> distribui o expoente → (a × b)ⁿ = aⁿ × bⁿ</li>
  <li><strong>Expoente zero:</strong> qualquer número (≠ 0) elevado a 0 é <strong>1</strong> → a⁰ = 1</li>
  <li><strong>Expoente negativo:</strong> é o inverso → a⁻ⁿ = 1 / aⁿ</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · por que a⁰ = 1 (não é regra decorada)</span>
  <p>Use a propriedade da divisão de mesma base com o mesmo número em cima e embaixo:</p>
  <p class='formula'>2³ ÷ 2³ = 2³⁻³ = 2⁰<br>mas 8 ÷ 8 = 1, logo 2⁰ = 1</p>
  <p>Pelo mesmo raciocínio, 2⁻¹ = 2⁰⁻¹ = 2⁰ ÷ 2¹ = 1/2. É a própria propriedade que <em>obriga</em> o expoente negativo a virar inverso.</p>
</div>

<h2>Radiciação: desfazendo a potência</h2>
<p>A <strong>raiz</strong> pergunta o contrário da potência: “que número, elevado a tal expoente, dá este valor?”. A raiz quadrada de 25 é 5 porque 5² = 25.</p>
<p class='formula'>√25 = 5   porque   5² = 25<br>∛8 = 2    porque   2³ = 8<small>o número pequeno (índice) diz de que raiz se trata; sem ele, subentende-se raiz quadrada</small></p>
<p>Radiciação e potenciação são inversas, o que se expressa de forma elegante com <strong>expoente fracionário</strong>: √a = a^(1/2) e ∛a = a^(1/3). Assim a raiz nem é uma operação “nova” — é uma potência de expoente fracionário, e todas as propriedades acima continuam valendo. E, como vimos na aula de conjuntos, muitas raízes (como √2) dão números irracionais.</p>

<h2>Notação científica: domando números gigantes e minúsculos</h2>
<p>A maior aplicação prática das potências de 10 é escrever números absurdamente grandes ou pequenos sem uma fileira de zeros. Na <strong>notação científica</strong>, todo número vira um valor entre 1 e 10 multiplicado por uma potência de 10.</p>
<p class='formula'>velocidade da luz ≈ 300 000 000 m/s = 3 × 10⁸ m/s<br>massa do elétron ≈ 0,000…0009 kg = 9,1 × 10⁻³¹ kg<small>o expoente conta quantas casas a vírgula anda: positivo para a direita, negativo para a esquerda</small></p>
<div class='example'>
  <span class='tag'>Exemplo · multiplicando em notação científica</span>
  <p>Quanto é (3 × 10⁸) × (2 × 10⁵)? Multiplique os números e some os expoentes das potências de 10:</p>
  <p class='formula'>(3 × 2) × 10⁸⁺⁵ = 6 × 10¹³</p>
  <p>É a propriedade aᵐ × aⁿ = aᵐ⁺ⁿ salvando você de escrever 21 zeros.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Juros compostos:</strong> um capital que rende 10% ao mês vira C × (1,1)ⁿ após <em>n</em> meses — uma potência. R$ 1.000 a 10% ao mês viram R$ 1.000 × (1,1)¹² ≈ R$ 3.138 em um ano. É por isso que dívidas de cartão crescem tão rápido.</li>
  <li><strong>Notação científica:</strong> distâncias astronômicas, tamanhos de átomos e capacidades de armazenamento só são gerenciáveis com potências de 10.</li>
  <li><strong>Computação:</strong> memória e armazenamento são potências de 2 — 1 KB = 2¹⁰ = 1024 bytes; 1 MB = 2²⁰ bytes.</li>
  <li><strong>Geometria:</strong> o teorema de Pitágoras (a² + b² = c²) é pura potenciação e radiciação — e você pode explorá-lo na simulação de Pitágoras, no módulo de Geometria desta trilha.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir <strong>2³</strong> com <strong>2 × 3</strong>: potência não é multiplicar base por expoente. 2³ = 2 × 2 × 2 = 8, e não 6. Outro deslize clássico: achar que √(a + b) = √a + √b — isso é <strong>falso</strong>. Veja: √(9 + 16) = √25 = 5, mas √9 + √16 = 3 + 4 = 7. A raiz não “entra” numa soma.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Potência é multiplicação de fatores iguais: base elevada a um expoente.</li>
  <li>Propriedades-chave: aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ.</li>
  <li>Base negativa: expoente par → positivo, ímpar → negativo (e cuidado com os parênteses).</li>
  <li>A raiz é a operação inversa: √a = a^(1/2).</li>
  <li>Notação científica usa potências de 10 para escrever números enormes ou minúsculos.</li>
</ul>`,relatedIds:["mat-expressoes-numericas","pitagoras"],simulation:null},{id:"mat-razao-proporcao",topic:"Matemática",title:"Razão e Proporção",summary:"Comparar duas grandezas por divisão é a base de mapas, receitas, velocidade e densidade. E igualar duas razões abre a porta para resolver quase qualquer problema do dia a dia.",image:"https://image.pollinations.ai/prompt/Ratio%20and%20proportion%20concept%20with%20balanced%20scales%20and%20fractions%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Razão","Proporção","Propriedade Fundamental","Escala","Grandezas"],content:`
<p>Comparar quantidades é uma das coisas mais úteis que a matemática faz. Quando dizemos que um carro anda a 100 km/h, que uma receita leva 2 xícaras de farinha para cada 1 de açúcar, ou que um mapa está na escala 1:100.000, estamos usando <strong>razões</strong>. E quando duas razões são iguais, temos uma <strong>proporção</strong> — a ferramenta que resolve desde “aumentar uma receita” até problemas de física. Esta aula é a base de todo o módulo.</p>

<h2>O que é uma razão</h2>
<p>A <strong>razão</strong> entre dois números <em>a</em> e <em>b</em> (com b ≠ 0) é o quociente entre eles — ou seja, a divisão a ÷ b, também escrita como a fração a/b. Ela responde à pergunta “quantas vezes um cabe no outro?”.</p>
<p class='formula'>razão de a para b  =  a / b   (lê-se “a para b”)<small>a é o antecedente · b é o consequente</small></p>
<p>A <strong>ordem importa</strong>: a razão de 3 para 4 (3/4 = 0,75) é diferente da razão de 4 para 3 (4/3 ≈ 1,33). E, ao contrário de uma fração qualquer, a razão costuma comparar grandezas com <em>significado</em> — por isso muitas razões têm nome próprio.</p>
<h3>Razões que você já usa sem perceber</h3>
<ul>
  <li><strong>Velocidade</strong> é a razão entre distância e tempo: 200 km em 2 h → 200/2 = 100 km/h.</li>
  <li><strong>Densidade</strong> é a razão entre massa e volume: 2 kg em 1 litro → 2 kg/L.</li>
  <li><strong>Escala</strong> de um mapa é a razão entre a medida no desenho e a medida real: 1 cm no mapa para 100.000 cm reais → escala 1:100.000.</li>
</ul>

<h2>O que é uma proporção</h2>
<p>Uma <strong>proporção</strong> é a igualdade entre duas razões. Ela afirma que duas comparações têm a mesma “força”.</p>
<p class='formula'>a / b = c / d<small>lê-se “a está para b assim como c está para d”</small></p>
<p>Nessa igualdade, <em>a</em> e <em>d</em> são os <strong>extremos</strong> (as pontas) e <em>b</em> e <em>c</em> são os <strong>meios</strong> (o miolo). Por exemplo, 2/4 = 3/6 é uma proporção verdadeira, porque ambas as razões valem 0,5.</p>

<h2>A propriedade fundamental</h2>
<p>Aqui está o coração do assunto. Numa proporção, <strong>o produto dos meios é igual ao produto dos extremos</strong>. É o famoso “multiplicar cruzado”.</p>
<p class='formula'>se  a / b = c / d ,  então  a × d = b × c<small>produto dos extremos = produto dos meios</small></p>
<p>Essa propriedade transforma qualquer proporção com um valor desconhecido numa continha simples de resolver.</p>
<div class='example'>
  <span class='tag'>Exemplo · achando o termo desconhecido</span>
  <p>Se 3 está para 5 assim como <em>x</em> está para 20, quanto vale <em>x</em>?</p>
  <p class='formula'>3 / 5 = x / 20<br>5 × x = 3 × 20   (multiplicando cruzado)<br>5x = 60   →   x = 60 / 5 = 12</p>
  <p>Confira: 3/5 = 0,6 e 12/20 = 0,6. Bate.</p>
</div>
<div class='example'>
  <span class='tag'>Exemplo · dobrando uma receita</span>
  <p>Uma receita de bolo usa 3 ovos para 500 g de farinha. Você quer usar 750 g de farinha. Quantos ovos?</p>
  <p class='formula'>3 ovos / 500 g = x ovos / 750 g<br>500 · x = 3 · 750 = 2250<br>x = 2250 / 500 = 4,5 ovos</p>
  <p>Na prática, arredondaríamos — mas a matemática entrega a proporção exata.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Mapas e plantas:</strong> a escala é uma razão; converter medidas do papel para o mundo real é resolver uma proporção.</li>
  <li><strong>Cozinha e química:</strong> ajustar receitas e diluir soluções mantendo a proporção dos ingredientes.</li>
  <li><strong>Arte e design:</strong> manter a proporção de uma imagem ao redimensionar (largura para altura) evita a foto “esticada”.</li>
  <li><strong>Física e engenharia:</strong> velocidade, densidade, pressão e vazão são todas razões entre grandezas.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Montar a proporção com as grandezas em ordem trocada. Mantenha sempre a mesma grandeza em cima e a mesma embaixo nos dois lados (ovos em cima, farinha embaixo, dos dois lados). Misturar a ordem — ovos/farinha de um lado e farinha/ovos do outro — leva a um resultado errado.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Razão é a comparação de dois números por divisão: a/b (a ordem importa).</li>
  <li>Velocidade, densidade e escala são razões do dia a dia.</li>
  <li>Proporção é a igualdade de duas razões: a/b = c/d.</li>
  <li>Propriedade fundamental: produto dos extremos = produto dos meios (a·d = b·c).</li>
</ul>`,relatedIds:["mat-regra-de-tres","mat-porcentagem"],simulation:null},{id:"mat-regra-de-tres",topic:"Matemática",title:"Regra de Três: Simples e Composta",summary:"O método mais útil da matemática escolar: descobrir um valor desconhecido a partir de grandezas que variam juntas — direta ou inversamente.",image:"https://image.pollinations.ai/prompt/Rule%20of%20three%20proportion%20problem%20solving%20with%20arrows%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Regra de Três Simples","Grandezas Diretamente Proporcionais","Grandezas Inversamente Proporcionais","Regra de Três Composta"],content:`
<p>A <strong>regra de três</strong> é, provavelmente, a ferramenta de matemática que mais se usa na vida adulta: calcular preços, tempos, quantidades e rendimentos. Ela é apenas uma proporção aplicada — e todo o segredo está em identificar corretamente <em>como</em> as grandezas se relacionam. Vamos do caso simples ao composto.</p>

<h2>Grandezas diretas e inversas</h2>
<p>Antes de calcular, é preciso classificar a relação entre as grandezas:</p>
<ul>
  <li><strong>Diretamente proporcionais:</strong> quando uma aumenta, a outra aumenta na mesma medida. Mais litros de gasolina → mais quilômetros rodados. Mais produtos → maior preço total.</li>
  <li><strong>Inversamente proporcionais:</strong> quando uma aumenta, a outra diminui. Mais pedreiros → menos tempo para levantar o muro. Mais velocidade → menos tempo de viagem.</li>
</ul>
<p>Essa classificação decide se vamos multiplicar “na mesma direção” ou “invertendo” — e é o passo onde a maioria dos erros acontece.</p>

<h2>Regra de três simples direta</h2>
<p>Quando duas grandezas diretamente proporcionais estão envolvidas, montamos a proporção e multiplicamos cruzado.</p>
<div class='example'>
  <span class='tag'>Exemplo · preço direto</span>
  <p>Se 4 canetas custam R$ 10, quanto custam 10 canetas? (Mais canetas → mais dinheiro: direta.)</p>
  <p class='formula'>4 canetas / 10 reais = 10 canetas / x reais<br>4 · x = 10 · 10 = 100<br>x = 100 / 4 = R$ 25</p>
</div>

<h2>Regra de três simples inversa</h2>
<p>Quando as grandezas são inversamente proporcionais, <strong>invertemos uma das razões</strong> antes de multiplicar cruzado. É o detalhe que mais confunde.</p>
<div class='example'>
  <span class='tag'>Exemplo · tempo inverso</span>
  <p>3 torneiras enchem um tanque em 8 horas. Em quanto tempo 4 torneiras (iguais) enchem o mesmo tanque? (Mais torneiras → menos tempo: inversa.)</p>
  <p>Como é inversa, invertemos a razão das torneiras ao montar:</p>
  <p class='formula'>3 torneiras → 8 h<br>4 torneiras → x h<br>montagem invertida:  4 / 3 = 8 / x<br>4 · x = 3 · 8 = 24   →   x = 6 h</p>
  <p>Faz sentido: com mais torneiras, o tempo caiu de 8 h para 6 h.</p>
</div>
<div class='callout'>
  <span class='tag'>Dica infalível</span>
  <p>Sempre pergunte: “se esta grandeza <em>aumenta</em>, a que eu procuro aumenta ou diminui?”. Se aumenta junto → direta (montagem normal). Se diminui → inversa (inverta aquela coluna antes de multiplicar cruzado).</p>
</div>

<h2>Regra de três composta</h2>
<p>Quando há <strong>três ou mais grandezas</strong>, usamos a regra de três composta. Analisamos cada grandeza <em>separadamente</em> em relação à que queremos descobrir, invertendo as que forem inversas.</p>
<div class='example'>
  <span class='tag'>Exemplo · composta</span>
  <p>5 operários fazem 100 m de muro em 8 dias. Quantos dias 8 operários levam para fazer 240 m de muro?</p>
  <ul>
    <li><strong>Operários × dias:</strong> mais operários → menos dias → <em>inversa</em>.</li>
    <li><strong>Metros × dias:</strong> mais muro → mais dias → <em>direta</em>.</li>
  </ul>
  <p>Montando (invertendo só a coluna dos operários):</p>
  <p class='formula'>x = 8 dias × (5 / 8 operários) × (240 / 100 metros)<br>x = 8 × 0,625 × 2,4 = 12 dias</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Compras e orçamentos:</strong> preço de quantidades diferentes, conversão de moedas.</li>
  <li><strong>Obras e produção:</strong> estimar prazos conforme o número de trabalhadores ou máquinas.</li>
  <li><strong>Cozinha e saúde:</strong> ajustar doses e porções; a bula de um remédio usa proporção por peso.</li>
  <li><strong>Viagens:</strong> tempo de percurso em função da velocidade (relação inversa clássica).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Tratar uma relação inversa como se fosse direta. Se você resolver o problema das torneiras sem inverter, chega a um tempo <em>maior</em> com mais torneiras — o que é absurdo. Sempre confira se o resultado faz sentido no mundo real.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Classifique primeiro: grandezas diretas (aumentam juntas) ou inversas (uma sobe, a outra desce).</li>
  <li>Regra de três simples: monte a proporção e multiplique cruzado; se for inversa, inverta uma razão.</li>
  <li>Regra de três composta: analise cada grandeza separadamente contra a incógnita, invertendo as inversas.</li>
  <li>Sempre teste se o resultado é coerente com a realidade.</li>
</ul>`,relatedIds:["mat-razao-proporcao","mat-porcentagem"],simulation:null},{id:"mat-porcentagem",topic:"Matemática",title:"Porcentagem",summary:"Descontos, juros, impostos, estatísticas: a porcentagem é a linguagem universal das partes de um todo. Dominá-la é economia doméstica pura.",image:"https://image.pollinations.ai/prompt/Percentage%20symbol%20with%20pie%20chart%20and%20discount%20tags%2C%20elegant%20financial%20math%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Porcentagem","Fator Multiplicativo","Aumento e Desconto","Variações Sucessivas"],content:`
<p>A <strong>porcentagem</strong> é simplesmente uma razão cujo consequente é 100. O símbolo % significa “por cento”, ou seja, “dividido por 100”. É a forma mais prática de comparar partes de todos diferentes — por isso ela aparece em descontos, juros, impostos, notas de prova e praticamente toda estatística. Esta aula te dá o controle total sobre ela.</p>

<h2>Porcentagem é uma fração de 100</h2>
<p>Ler uma porcentagem é traduzir % por “/100”. Assim, toda porcentagem tem três formas equivalentes: percentual, fração e decimal.</p>
<p class='formula'>25% = 25/100 = 0,25<br>7% = 7/100 = 0,07<br>150% = 150/100 = 1,5<small>para virar decimal, ande a vírgula duas casas para a esquerda</small></p>

<h2>Calcular a porcentagem de um valor</h2>
<p>“X% de um valor” é uma multiplicação: basta transformar a porcentagem em decimal e multiplicar.</p>
<div class='example'>
  <span class='tag'>Exemplo · quanto é 30% de 250?</span>
  <p class='formula'>30% de 250 = 0,30 × 250 = 75</p>
  <p>Truque mental: 10% de 250 é 25 (só andar a vírgula); logo 30% é 3 × 25 = 75.</p>
</div>

<h2>Aumento e desconto: o fator multiplicativo</h2>
<p>Aqui está o pulo do gato que evita erros e acelera tudo. Em vez de calcular a porcentagem e depois somar ou subtrair, multiplique direto por um <strong>fator</strong>:</p>
<ul>
  <li><strong>Aumento de p%:</strong> multiplique por (1 + p/100). Um aumento de 20% → fator 1,20.</li>
  <li><strong>Desconto de p%:</strong> multiplique por (1 − p/100). Um desconto de 20% → fator 0,80.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · preço com desconto</span>
  <p>Uma camisa de R$ 80 com 25% de desconto:</p>
  <p class='formula'>80 × (1 − 0,25) = 80 × 0,75 = R$ 60</p>
  <p>Em um passo só, sem calcular o desconto separado.</p>
</div>

<h2>Variações sucessivas: o erro que custa dinheiro</h2>
<p>Este é o ponto mais importante — e o mais mal-entendido. Quando há duas variações seguidas, <strong>os percentuais NÃO se somam</strong>: os fatores se multiplicam.</p>
<div class='example'>
  <span class='tag'>Exemplo · aumento seguido de desconto</span>
  <p>Um produto de R$ 100 sofre aumento de 10% e depois um desconto de 10%. Volta aos R$ 100? Não!</p>
  <p class='formula'>100 × 1,10 × 0,90 = 100 × 0,99 = R$ 99</p>
  <p>Sobrou uma perda de 1%, porque o desconto de 10% incidiu sobre um valor já maior (110). Somar “+10% −10% = 0%” está errado.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Compras:</strong> descontos, “leve 3 pague 2”, comparação de ofertas.</li>
  <li><strong>Finanças:</strong> juros de cartão e empréstimo, rendimento de investimentos, inflação.</li>
  <li><strong>Impostos e salário:</strong> alíquotas, reajustes, contribuições.</li>
  <li><strong>Ciência e mídia:</strong> praticamente todo gráfico e estatística usa porcentagem para comparar grupos de tamanhos diferentes.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir <strong>ponto percentual</strong> com <strong>porcentagem</strong>. Se uma taxa sobe de 5% para 6%, ela subiu <em>1 ponto percentual</em>, mas o <em>aumento relativo</em> foi de 20% (1 é 20% de 5). Jornais e provas adoram essa distinção.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>% significa “dividido por 100”: 25% = 0,25.</li>
  <li>X% de um valor = decimal × valor.</li>
  <li>Aumento de p%: × (1 + p/100). Desconto de p%: × (1 − p/100).</li>
  <li>Variações sucessivas multiplicam fatores — não somam percentuais.</li>
</ul>`,relatedIds:["mat-razao-proporcao","mat-juros"],simulation:null},{id:"mat-juros",topic:"Matemática",title:"Juros Simples e Compostos",summary:"A matemática do dinheiro no tempo — e a razão pela qual dívidas de cartão explodem e investimentos de longo prazo enriquecem. Onde porcentagem encontra potência.",image:"https://image.pollinations.ai/prompt/Compound%20interest%20growth%20curve%20with%20coins%20stacking%20exponentially%2C%20financial%20math%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Juros Simples","Juros Compostos","Montante","Crescimento Exponencial"],content:`
<p>Dinheiro tem preço no tempo: quem empresta cobra <strong>juros</strong>, e quem investe recebe juros. Esta aula une o que você viu em porcentagem com as potências do módulo anterior, e explica de uma vez por que a dívida do cartão cresce assustadoramente e por que começar a investir cedo faz tanta diferença. São dois regimes: juros simples e juros compostos.</p>

<h2>Vocabulário do dinheiro</h2>
<ul>
  <li><strong>Capital (C):</strong> o valor inicial, emprestado ou investido.</li>
  <li><strong>Taxa (i):</strong> o percentual de juros por período (ao mês, ao ano…), usado como decimal.</li>
  <li><strong>Tempo (t):</strong> o número de períodos.</li>
  <li><strong>Montante (M):</strong> o total final — capital mais os juros acumulados.</li>
</ul>

<h2>Juros simples: crescimento em linha reta</h2>
<p>Nos <strong>juros simples</strong>, os juros de cada período incidem sempre sobre o capital inicial. O valor cresce de forma constante, como uma reta.</p>
<p class='formula'>M = C × (1 + i × t)<small>os juros de cada período são sempre iguais: uma fração fixa do capital inicial</small></p>
<div class='example'>
  <span class='tag'>Exemplo · juros simples</span>
  <p>R$ 1.000 a 2% ao mês, por 5 meses, em juros simples:</p>
  <p class='formula'>M = 1000 × (1 + 0,02 × 5) = 1000 × 1,10 = R$ 1.100</p>
  <p>São R$ 20 de juros por mês (2% de 1000), sempre os mesmos: 5 × 20 = R$ 100.</p>
</div>

<h2>Juros compostos: juros sobre juros</h2>
<p>Nos <strong>juros compostos</strong> — o regime do mundo real, de bancos e cartões — os juros de cada período incidem sobre o montante <em>acumulado</em>, não sobre o capital inicial. É “juro sobre juro”, e por isso o crescimento é <strong>exponencial</strong>: aqui aparece a potência.</p>
<p class='formula'>M = C × (1 + i)ᵗ<small>o expoente t faz o valor disparar com o tempo</small></p>
<div class='example'>
  <span class='tag'>Exemplo · mesmos dados, juros compostos</span>
  <p>R$ 1.000 a 2% ao mês, por 5 meses, em juros compostos:</p>
  <p class='formula'>M = 1000 × (1,02)⁵ = 1000 × 1,10408 ≈ R$ 1.104,08</p>
  <p>Pouco mais que os R$ 1.100 dos juros simples… em 5 meses. Mas o tempo muda tudo.</p>
</div>

<h2>A diferença que explode com o tempo</h2>
<p>Em poucos períodos, simples e compostos quase se confundem. Em muitos períodos, a diferença vira um abismo — é o efeito que Einstein teria chamado de “a força mais poderosa do universo”.</p>
<div class='example'>
  <span class='tag'>Exemplo · 10 anos a 1% ao mês</span>
  <p>R$ 1.000 por 120 meses (10 anos) a 1% ao mês:</p>
  <p class='formula'>Simples:  1000 × (1 + 0,01 × 120) = R$ 2.200<br>Compostos: 1000 × (1,01)¹²⁰ ≈ R$ 3.300</p>
  <p>A mesma taxa, o mesmo tempo — mas os juros compostos entregam 50% a mais. É por isso que investir cedo e deixar render é tão poderoso… e por que rolar a dívida do cartão é tão perigoso.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Cartão de crédito e cheque especial:</strong> juros compostos altíssimos — a dívida dobra em poucos meses.</li>
  <li><strong>Investimentos:</strong> poupança, CDB, tesouro e ações rendem em regime composto; quanto mais cedo se começa, maior o efeito “bola de neve”.</li>
  <li><strong>Empréstimos e financiamentos:</strong> o valor das parcelas sai de fórmulas de juros compostos.</li>
  <li><strong>Economia:</strong> a inflação acumulada ao longo de anos também é um juro composto.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar a taxa ao longo do tempo em juros compostos. “1% ao mês por 12 meses” <em>não</em> é 12% ao ano: é (1,01)¹² − 1 ≈ 12,7%. A diferença parece pequena, mas some com o tempo — e é exatamente ela que faz o dinheiro crescer (ou a dívida afundar).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Juros simples: M = C(1 + i·t) — crescimento linear, juros sempre sobre o capital inicial.</li>
  <li>Juros compostos: M = C(1 + i)ᵗ — crescimento exponencial, juros sobre o acumulado.</li>
  <li>Em prazos longos, os compostos superam os simples de forma dramática.</li>
  <li>É a mesma potência da aula de potenciação, aplicada ao dinheiro no tempo.</li>
</ul>`,relatedIds:["mat-porcentagem","mat-potenciacao-radiciacao"],simulation:null},{id:"mat-linguagem-algebrica",topic:"Matemática",title:"A Linguagem Algébrica: Letras no Lugar de Números",summary:"A grande virada da matemática: usar letras para representar qualquer número. É o que permite escrever fórmulas, generalizar padrões e resolver problemas que a aritmética sozinha não alcança.",image:"https://image.pollinations.ai/prompt/Algebra%20letters%20x%20y%20replacing%20numbers%2C%20abstract%20symbolic%20mathematics%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Variável","Incógnita","Expressão Algébrica","Valor Numérico","Linguagem Matemática"],content:`
<p>Até agora, na trilha, trabalhamos com números concretos: 5, −3, 1/2. A <strong>álgebra</strong> dá um salto de abstração: passa a usar <em>letras</em> para representar números quaisquer. Parece pequeno, mas foi uma das maiores revoluções da história da matemática — é o que permite escrever uma fórmula que vale para <em>todos</em> os casos de uma vez, generalizar padrões e resolver problemas em que o número procurado ainda é desconhecido. Esta aula é a ponte da aritmética para a álgebra.</p>

<h2>Por que trocar números por letras?</h2>
<p>Imagine explicar a regra “o perímetro de um quadrado é quatro vezes o lado”. Em aritmética, você teria que repetir a conta para cada tamanho: 4×2, 4×5, 4×10… Com álgebra, uma única expressão resolve tudo:</p>
<p class='formula'>P = 4 · L<small>vale para qualquer lado L — a letra representa todos os números de uma vez</small></p>
<p>Foi o matemático persa <strong>Al-Khwarizmi</strong>, por volta do ano 820, quem sistematizou esse tipo de raciocínio — e a palavra “álgebra” vem do título de sua obra, <em>al-jabr</em>. A notação com letras que usamos hoje foi refinada séculos depois, sobretudo por François Viète e René Descartes.</p>

<h2>Variável e incógnita: parece igual, mas não é</h2>
<p>As letras têm dois papéis distintos, e vale separar:</p>
<ul>
  <li><strong>Variável:</strong> uma letra que pode assumir <em>qualquer</em> valor de um conjunto. Em P = 4L, o L é variável — muda conforme o quadrado.</li>
  <li><strong>Incógnita:</strong> uma letra que representa um valor <em>específico e desconhecido</em>, que queremos descobrir. Em “x + 3 = 10”, o x é uma incógnita: existe um único valor que resolve.</li>
</ul>
<p>A mesma letra pode fazer os dois papéis dependendo do contexto — o importante é entender o que ela representa em cada caso.</p>

<h2>O que é uma expressão algébrica</h2>
<p>Uma <strong>expressão algébrica</strong> combina números, letras e operações. Um detalhe de notação: entre um número e uma letra (ou entre letras), o sinal de multiplicação fica <em>subentendido</em>.</p>
<p class='formula'>2x  significa  2 · x<br>ab  significa  a · b<br>x²  significa  x · x<small>o “×” é omitido para não confundir com a letra x</small></p>

<h2>Traduzindo o português para a álgebra</h2>
<p>Boa parte da álgebra é saber <strong>traduzir</strong> uma frase para uma expressão. Chamando o número desconhecido de <em>x</em>:</p>
<ul>
  <li>“o dobro de um número” → 2x</li>
  <li>“um número mais 5” → x + 5</li>
  <li>“a metade de um número” → x/2</li>
  <li>“o quadrado de um número” → x²</li>
  <li>“o triplo de um número, menos 4” → 3x − 4</li>
  <li>“dois números consecutivos” → x e x + 1</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · montando uma expressão</span>
  <p>“A idade de Ana é o dobro da idade de Bia mais 3 anos.” Chamando a idade de Bia de <em>b</em>:</p>
  <p class='formula'>idade de Ana = 2b + 3</p>
  <p>Se Bia tem 10 anos, Ana tem 2·10 + 3 = 23. A expressão resolve para qualquer idade de Bia.</p>
</div>

<h2>Valor numérico: dando um número à letra</h2>
<p>O <strong>valor numérico</strong> de uma expressão é o resultado de substituir as letras por números concretos e calcular (respeitando a ordem das operações do Módulo 1).</p>
<div class='example'>
  <span class='tag'>Exemplo · calculando o valor numérico</span>
  <p>Qual o valor de 3x² − 2y para x = 2 e y = 5?</p>
  <p class='formula'>3 · (2)² − 2 · (5) = 3 · 4 − 10 = 12 − 10 = 2</p>
  <p>Repare: a potência veio antes da multiplicação, exatamente como na ordem das operações.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Fórmulas de tudo:</strong> área (A = b·h), física (velocidade v = d/t), finanças (juros M = C(1+i)ᵗ) — todas são expressões algébricas.</li>
  <li><strong>Planilhas:</strong> uma célula com <em>=A1*4</em> é álgebra pura: A1 é a variável, e a fórmula vale para qualquer valor que você digitar.</li>
  <li><strong>Programação:</strong> variáveis em código são exatamente a mesma ideia — nomes que guardam valores que podem mudar.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir <strong>2x</strong> com “2 seguido de x” (como se fosse um número de dois dígitos). 2x é sempre <em>2 vezes x</em>. E cuidado com a linguagem ambígua: “o dobro de um número mais 3” pode ser 2x + 3 ou 2(x + 3) — na dúvida, use parênteses para deixar claro o que se soma primeiro.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A álgebra usa letras para representar números, permitindo generalizar e escrever fórmulas.</li>
  <li>Variável assume vários valores; incógnita é um valor específico a descobrir.</li>
  <li>Entre número e letra, o “×” fica subentendido: 2x = 2·x.</li>
  <li>Valor numérico = substituir as letras por números e calcular na ordem correta.</li>
</ul>`,relatedIds:["mat-expressoes-algebricas","mat-expressoes-numericas"],simulation:null},{id:"mat-expressoes-algebricas",topic:"Matemática",title:"Expressões Algébricas: Monômios e Polinômios",summary:"Como somar, subtrair e multiplicar expressões com letras. A regra de ouro: só se juntam termos que têm exatamente a mesma parte literal.",image:"https://image.pollinations.ai/prompt/Polynomial%20algebraic%20expressions%20with%20terms%20and%20variables%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Monômio","Polinômio","Termos Semelhantes","Redução de Termos","Grau"],content:`
<p>Agora que sabemos escrever expressões com letras, precisamos aprender a <strong>operar</strong> com elas: somar, subtrair e multiplicar. É aqui que a álgebra ganha força — e tudo gira em torno de uma única ideia central: só podemos juntar termos que são “do mesmo tipo”. Vamos organizar o vocabulário e as regras.</p>

<h2>Monômio: o tijolo básico</h2>
<p>Um <strong>monômio</strong> é uma expressão formada por um número multiplicado por letras com expoentes. Ele tem duas partes:</p>
<p class='formula'>−5x²y<br>coeficiente: −5  ·  parte literal: x²y<small>o coeficiente é o número; a parte literal são as letras com seus expoentes</small></p>
<p>O <strong>grau</strong> de um monômio é a soma dos expoentes das letras. Em −5x²y, o grau é 2 + 1 = 3.</p>

<h2>Polinômio: soma de monômios</h2>
<p>Um <strong>polinômio</strong> é uma soma (ou subtração) de vários monômios, chamados <em>termos</em>. Por exemplo, 3x² − 2x + 7 é um polinômio de três termos. O grau do polinômio é o maior grau entre seus termos — aqui, 2.</p>

<h2>Termos semelhantes: a regra de ouro</h2>
<p><strong>Termos semelhantes</strong> são os que têm exatamente a <em>mesma parte literal</em> (mesmas letras, mesmos expoentes). Só termos semelhantes podem ser somados ou subtraídos entre si — juntando os coeficientes e mantendo a parte literal. É a mesma lógica de “3 maçãs + 2 maçãs = 5 maçãs, mas 3 maçãs + 2 laranjas não se juntam”.</p>
<p class='formula'>3x + 2x = 5x   ✓ (mesma parte literal x)<br>3x + 2x² = 3x + 2x²   ✗ (não se juntam: x e x² são diferentes)<br>7ab − 4ab = 3ab   ✓</p>
<div class='example'>
  <span class='tag'>Exemplo · reduzindo termos semelhantes</span>
  <p>Simplifique: 5x + 3y − 2x + 8 − y</p>
  <ol>
    <li>Agrupe os semelhantes: (5x − 2x) + (3y − y) + 8</li>
    <li>Reduza cada grupo: 3x + 2y + 8</li>
  </ol>
  <p>Não dá para simplificar mais: x, y e o número 8 são de tipos diferentes.</p>
</div>

<h2>Multiplicação: aqui a distributiva reina</h2>
<p>Ao multiplicar, ao contrário da soma, <strong>as partes literais se combinam</strong> (somando os expoentes de letras iguais, como na aula de potenciação). Para multiplicar um monômio por um polinômio, usamos a propriedade distributiva do Módulo 1.</p>
<div class='example'>
  <span class='tag'>Exemplo · monômio vezes polinômio</span>
  <p>Multiplique: 2x · (3x − 4)</p>
  <p class='formula'>2x · 3x − 2x · 4 = 6x² − 8x<small>2x · 3x = 6x² (soma dos expoentes de x); 2x · 4 = 8x</small></p>
</div>
<div class='example'>
  <span class='tag'>Exemplo · polinômio vezes polinômio</span>
  <p>Multiplique: (x + 2)(x + 3). Cada termo do primeiro multiplica cada termo do segundo:</p>
  <p class='formula'>x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6 = x² + 5x + 6</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Áreas e volumes:</strong> a área de um retângulo de lados (x + 2) e (x + 3) é o próprio produto (x + 2)(x + 3) = x² + 5x + 6.</li>
  <li><strong>Física e economia:</strong> modelos que combinam várias grandezas viram polinômios; simplificá-los é reduzir termos semelhantes.</li>
  <li><strong>Computação gráfica:</strong> curvas e superfícies são descritas por polinômios; o computador soma e multiplica esses termos milhões de vezes por segundo.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar termos que não são semelhantes: <strong>3x + 4x² ≠ 7x³</strong> (nem se somam, nem se multiplicam expoentes na soma!). Some coeficientes <em>apenas</em> quando a parte literal for idêntica. Na multiplicação, sim, os expoentes de letras iguais se somam — mas isso é outra operação.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Monômio = coeficiente × parte literal; polinômio = soma de monômios (termos).</li>
  <li>Só se somam/subtraem <strong>termos semelhantes</strong> (mesma parte literal), juntando coeficientes.</li>
  <li>Na multiplicação, use a distributiva; letras iguais têm seus expoentes somados.</li>
  <li>(x + a)(x + b) = x² + (a+b)x + ab — um padrão que veremos virar produto notável.</li>
</ul>`,relatedIds:["mat-linguagem-algebrica","mat-produtos-notaveis"],simulation:null},{id:"mat-produtos-notaveis",topic:"Matemática",title:"Produtos Notáveis",summary:"Alguns produtos aparecem tanto na álgebra que ganharam atalhos. Entender os três principais — e sua interpretação geométrica — economiza contas e evita erros clássicos.",image:"https://image.pollinations.ai/prompt/Notable%20products%20algebra%20square%20of%20a%20sum%20geometric%20squares%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Quadrado da Soma","Quadrado da Diferença","Produto da Soma pela Diferença","Interpretação Geométrica"],content:`
<p>Certas multiplicações de polinômios aparecem com tanta frequência na matemática que vale a pena reconhecê-las de imediato, sem refazer a distributiva toda vez. São os <strong>produtos notáveis</strong>. Mas o objetivo aqui não é decorar cegamente — é <em>entender</em> de onde cada um vem, inclusive com um belo argumento geométrico. Dominá-los agora vai acelerar tudo em equações, fatoração e cálculo mais adiante.</p>

<h2>Quadrado da soma</h2>
<p>O quadrado de uma soma não é a soma dos quadrados — há um termo do meio que quase todo mundo esquece. Desenvolvendo (a + b)² = (a + b)(a + b) pela distributiva:</p>
<p class='formula'>(a + b)² = a² + 2ab + b²<small>“o quadrado do primeiro, mais duas vezes o primeiro pelo segundo, mais o quadrado do segundo”</small></p>
<h3>Por que existe o 2ab? (a prova geométrica)</h3>
<p>Imagine um quadrado grande de lado (a + b). Sua área é (a + b)². Mas ele se divide em quatro pedaços: um quadrado a², um quadrado b² e <strong>dois</strong> retângulos de área a·b cada. Somando: a² + b² + 2ab. O “2ab” são literalmente os dois retângulos — ele não pode sumir.</p>

<h2>Quadrado da diferença</h2>
<p>Análogo, mas o termo do meio fica negativo:</p>
<p class='formula'>(a − b)² = a² − 2ab + b²<small>note que o último termo, +b², continua positivo (menos vezes menos)</small></p>

<h2>Produto da soma pela diferença</h2>
<p>Este é o mais elegante: multiplicar a soma pela diferença dos mesmos termos elimina o termo do meio e sobra uma diferença de quadrados.</p>
<p class='formula'>(a + b)(a − b) = a² − b²<small>os termos +ab e −ab se cancelam</small></p>

<div class='example'>
  <span class='tag'>Exemplo · expandindo</span>
  <ul>
    <li>(x + 5)² = x² + 2·x·5 + 5² = x² + 10x + 25</li>
    <li>(2y − 3)² = (2y)² − 2·2y·3 + 3² = 4y² − 12y + 9</li>
    <li>(x + 7)(x − 7) = x² − 49</li>
  </ul>
</div>
<div class='example'>
  <span class='tag'>Exemplo · cálculo mental esperto</span>
  <p>Quanto é 21²? Escreva 21 = 20 + 1 e use o quadrado da soma:</p>
  <p class='formula'>21² = (20 + 1)² = 400 + 2·20·1 + 1 = 400 + 40 + 1 = 441</p>
  <p>E 19 × 21? É (20 − 1)(20 + 1) = 400 − 1 = 399. Os produtos notáveis viram truques de conta rápida.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Fatoração:</strong> a próxima aula faz o caminho inverso — reconhecer a² − b² ou a² + 2ab + b² para reescrever como produto.</li>
  <li><strong>Equações do 2º grau:</strong> completar quadrados (base da fórmula de Bhaskara) usa o quadrado da soma.</li>
  <li><strong>Cálculo mental e engenharia:</strong> aproximações e simplificações rápidas de expressões.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>O deslize mais famoso da álgebra: escrever <strong>(a + b)² = a² + b²</strong>, esquecendo o 2ab. Isso é falso — teste com números: (3 + 4)² = 49, mas 3² + 4² = 25. A diferença (24) é exatamente 2·3·4. O termo do meio existe e importa.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>(a + b)² = a² + 2ab + b² (não esqueça o 2ab!).</li>
  <li>(a − b)² = a² − 2ab + b².</li>
  <li>(a + b)(a − b) = a² − b² (diferença de quadrados).</li>
  <li>Servem como atalho de conta e são a base da fatoração e das equações do 2º grau.</li>
</ul>`,relatedIds:["mat-expressoes-algebricas","mat-fatoracao"],simulation:null},{id:"mat-fatoracao",topic:"Matemática",title:"Fatoração de Expressões Algébricas",summary:"O caminho inverso dos produtos notáveis: transformar uma soma numa multiplicação. É a chave para simplificar frações algébricas e resolver equações.",image:"https://image.pollinations.ai/prompt/Algebraic%20factoring%20breaking%20expression%20into%20factors%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Fator Comum","Agrupamento","Diferença de Quadrados","Trinômio Quadrado Perfeito"],content:`
<p><strong>Fatorar</strong> é reescrever uma expressão que está em forma de soma como uma <em>multiplicação</em> de fatores. É exatamente o caminho inverso do que fizemos na aula de produtos notáveis. Por que isso importa? Porque um produto é muito mais fácil de simplificar e de resolver: para uma multiplicação dar zero, basta um dos fatores ser zero — e é assim que se resolvem equações. Vamos aos quatro métodos essenciais.</p>

<h2>1. Fator comum em evidência</h2>
<p>Se todos os termos têm um fator em comum, colocamos ele “para fora” (em evidência), usando a distributiva ao contrário.</p>
<p class='formula'>6x² + 9x = 3x · (2x + 3)<small>3x é o fator comum: 3 divide 6 e 9; x aparece em ambos</small></p>
<p>Confira desfazendo pela distributiva: 3x·2x + 3x·3 = 6x² + 9x. Bate.</p>

<h2>2. Agrupamento</h2>
<p>Quando não há um fator comum a todos os termos, às vezes dá para agrupá-los em pares que tenham fator comum, e então evidenciar de novo.</p>
<div class='example'>
  <span class='tag'>Exemplo · fatorando por agrupamento</span>
  <p>Fatore: x² + 3x + 2x + 6</p>
  <ol>
    <li>Agrupe: (x² + 3x) + (2x + 6)</li>
    <li>Evidencie cada grupo: x(x + 3) + 2(x + 3)</li>
    <li>Agora (x + 3) é comum: (x + 3)(x + 2)</li>
  </ol>
</div>

<h2>3. Diferença de dois quadrados</h2>
<p>Reconhecendo o produto notável ao contrário: toda expressão da forma a² − b² fatora na soma pela diferença.</p>
<p class='formula'>a² − b² = (a + b)(a − b)</p>
<div class='example'>
  <span class='tag'>Exemplo</span>
  <p>x² − 25 = x² − 5² = (x + 5)(x − 5). E 9y² − 16 = (3y)² − 4² = (3y + 4)(3y − 4).</p>
</div>

<h2>4. Trinômio quadrado perfeito</h2>
<p>Quando um trinômio é o resultado de um quadrado da soma ou da diferença, ele fatora de volta:</p>
<p class='formula'>a² + 2ab + b² = (a + b)²<br>a² − 2ab + b² = (a − b)²</p>
<div class='example'>
  <span class='tag'>Exemplo</span>
  <p>x² + 6x + 9 = x² + 2·x·3 + 3² = (x + 3)². O sinal do meio revela se é soma ou diferença.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Resolver equações:</strong> se (x + 3)(x − 2) = 0, então x = −3 ou x = 2. Fatorar é o método mais direto para achar as raízes — voltaremos a isso no módulo de Equações.</li>
  <li><strong>Simplificar frações algébricas:</strong> fatorar numerador e denominador permite cancelar fatores iguais, como se simplifica uma fração comum.</li>
  <li><strong>Cálculo:</strong> muitos limites e integrais só ficam calculáveis depois de fatorar e cancelar termos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Dica de estratégia</span>
  <p>A ordem de ataque quase sempre funciona: (1) tente fator comum primeiro; (2) conte os termos — dois termos sugerem diferença de quadrados, três termos sugerem trinômio quadrado perfeito; (3) quatro termos sugerem agrupamento. Comece sempre pelo fator comum.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Fatorar = transformar soma em produto (o inverso da distributiva e dos produtos notáveis).</li>
  <li>Métodos: fator comum, agrupamento, diferença de quadrados (a²−b²) e trinômio quadrado perfeito.</li>
  <li>Sempre tente o fator comum primeiro; depois use o número de termos como pista.</li>
  <li>Fatorar é a chave para simplificar frações algébricas e resolver equações.</li>
</ul>`,relatedIds:["mat-produtos-notaveis","mat-expressoes-algebricas"],simulation:null},{id:"mat-equacao-1grau",topic:"Matemática",title:"Equação do 1º Grau",summary:"Uma balança em equilíbrio: o que você faz de um lado, faz do outro. É assim que se isola a incógnita e se resolve o problema mais clássico da álgebra.",image:"https://image.pollinations.ai/prompt/Linear%20equation%20balance%20scale%20with%20x%20unknown%2C%20elegant%20algebra%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Equação","Incógnita","Princípio de Equivalência","Isolar a Incógnita","Raiz da Equação"],content:`
<p>Uma <strong>equação</strong> é uma igualdade que contém uma incógnita — um valor desconhecido que queremos descobrir. Resolver a equação é encontrar o número que, colocado no lugar da letra, torna a igualdade verdadeira. A equação do 1º grau (aquela em que a incógnita aparece só com expoente 1) é o problema mais fundamental da álgebra, e a intuição por trás dela é simples: uma balança de dois pratos.</p>

<h2>A ideia da balança</h2>
<p>O sinal de igual (=) diz que os dois lados têm o mesmo “peso”. Uma equação é uma balança equilibrada. A regra de ouro para resolvê-la sem quebrar o equilíbrio: <strong>o que você faz de um lado, tem que fazer igual do outro</strong>. Some 3 de um lado, some 3 do outro. Divida um lado por 2, divida o outro por 2. Isso é o <em>princípio de equivalência</em>.</p>
<p class='formula'>se  a = b ,  então  a + c = b + c   e   a · c = b · c<small>somar, subtrair, multiplicar ou dividir os dois lados pelo mesmo valor mantém a igualdade</small></p>

<h2>Resolver é isolar a incógnita</h2>
<p>O objetivo é deixar a incógnita sozinha de um lado. Usamos as operações inversas (do Módulo 1) para “transportar” tudo o mais para o outro lado: o que está somando passa subtraindo, o que está multiplicando passa dividindo. Isso é só um atalho do princípio da balança.</p>
<div class='example'>
  <span class='tag'>Exemplo · passo a passo</span>
  <p>Resolva: <strong>3x + 5 = 20</strong></p>
  <ol>
    <li>Tire o 5 dos dois lados: 3x = 20 − 5 = 15</li>
    <li>Divida os dois lados por 3: x = 15 / 3 = 5</li>
  </ol>
  <p>Confira substituindo: 3·5 + 5 = 20. ✓ O número 5 é a <strong>raiz</strong> da equação.</p>
</div>
<div class='example'>
  <span class='tag'>Exemplo · incógnita nos dois lados</span>
  <p>Resolva: <strong>5x − 4 = 2x + 11</strong></p>
  <ol>
    <li>Junte os x de um lado: 5x − 2x − 4 = 11 → 3x − 4 = 11</li>
    <li>Passe o −4: 3x = 15</li>
    <li>Divida por 3: x = 5</li>
  </ol>
</div>

<h2>Da palavra à equação</h2>
<p>O poder de verdade aparece ao traduzir um problema em equação (usando a linguagem algébrica do Módulo 3).</p>
<div class='example'>
  <span class='tag'>Exemplo · problema</span>
  <p>“Pensei em um número, multipliquei por 4 e somei 7, obtendo 31. Que número é?”</p>
  <p class='formula'>4x + 7 = 31  →  4x = 24  →  x = 6</p>
  <p>O número é 6. A álgebra transforma um enigma em uma conta mecânica.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Finanças pessoais:</strong> “quanto preciso vender para cobrir um custo fixo?” é uma equação do 1º grau.</li>
  <li><strong>Física:</strong> movimento uniforme (s = s₀ + v·t) — achar o tempo é resolver uma equação linear.</li>
  <li><strong>Conversões e regras práticas:</strong> converter temperatura, calcular a conta do rateio de uma despesa, dosar ingredientes.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer de trocar o sinal ao “passar” um termo para o outro lado. Se 3x + 5 = 20, o 5 passa como <strong>−5</strong> (3x = 20 − 5), não +5. Transportar um termo é, na verdade, aplicar a operação inversa dos dois lados.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Equação é uma igualdade com incógnita; resolvê-la é achar a raiz que a torna verdadeira.</li>
  <li>Princípio da balança: faça a mesma operação nos dois lados.</li>
  <li>Isole a incógnita usando operações inversas; termo que “passa” troca de operação.</li>
  <li>Sempre confira a raiz substituindo na equação original.</li>
</ul>`,relatedIds:["mat-linguagem-algebrica","mat-sistemas-equacoes"],simulation:null},{id:"mat-sistemas-equacoes",topic:"Matemática",title:"Sistemas de Equações do 1º Grau",summary:"Dois desconhecidos exigem duas informações. Aprenda a resolver sistemas por substituição e por adição — e veja por que a resposta é o encontro de duas retas.",image:"https://image.pollinations.ai/prompt/System%20of%20linear%20equations%20two%20lines%20intersecting%20on%20a%20graph%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Sistema de Equações","Método da Substituição","Método da Adição","Interpretação Geométrica"],content:`
<p>Quando um problema tem <strong>dois valores desconhecidos</strong> (digamos, x e y), uma única equação não basta — ela tem infinitas soluções. Precisamos de <strong>duas equações</strong> ao mesmo tempo, formando um <em>sistema</em>. A solução é o par (x, y) que satisfaz as duas simultaneamente. Vamos ver os dois métodos clássicos para resolvê-los.</p>

<h2>Método da substituição</h2>
<p>A ideia: isolar uma incógnita em uma das equações e <em>substituir</em> na outra, reduzindo o sistema a uma única equação do 1º grau.</p>
<div class='example'>
  <span class='tag'>Exemplo · substituição</span>
  <p>Resolva o sistema:  x + y = 10  e  2x − y = 5</p>
  <ol>
    <li>Isole y na primeira: y = 10 − x</li>
    <li>Substitua na segunda: 2x − (10 − x) = 5 → 2x − 10 + x = 5 → 3x = 15 → x = 5</li>
    <li>Volte para achar y: y = 10 − 5 = 5</li>
  </ol>
  <p>Solução: (x, y) = (5, 5). Confira nas duas equações: 5+5=10 ✓ e 2·5−5=5 ✓.</p>
</div>

<h2>Método da adição (ou eliminação)</h2>
<p>A ideia: somar as duas equações de modo que uma das incógnitas <em>desapareça</em>. Às vezes é preciso multiplicar uma equação por um número antes, para os coeficientes ficarem opostos.</p>
<div class='example'>
  <span class='tag'>Exemplo · adição</span>
  <p>Resolva:  x + y = 10  e  2x − y = 5</p>
  <ol>
    <li>Some as duas equações (o +y e o −y se cancelam): (x + 2x) + (y − y) = 10 + 5 → 3x = 15 → x = 5</li>
    <li>Substitua em qualquer equação: 5 + y = 10 → y = 5</li>
  </ol>
  <p>Mesmo resultado, por outro caminho. Escolha o método mais conveniente para cada sistema.</p>
</div>

<h2>A interpretação geométrica</h2>
<p>Cada equação do 1º grau com duas incógnitas representa uma <strong>reta</strong> no plano. Resolver o sistema é achar o <em>ponto onde as duas retas se cruzam</em> — as coordenadas desse ponto são a solução (x, y). Isso também explica os casos especiais: se as retas são <strong>paralelas</strong>, não há solução (sistema impossível); se são a <strong>mesma reta</strong>, há infinitas soluções.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Misturas e problemas de idade:</strong> “a soma de dois números é 10 e a diferença é 2” é um sistema.</li>
  <li><strong>Economia:</strong> o ponto de equilíbrio entre oferta e demanda é a interseção de duas retas — um sistema.</li>
  <li><strong>Engenharia e computação:</strong> sistemas com muitas incógnitas (resolvidos por computador) modelam circuitos, estruturas e redes.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar o valor de uma incógnita e esquecer de calcular a outra. A solução de um sistema com duas incógnitas é sempre um <strong>par</strong> (x, y) — os dois valores juntos. Encontrar só o x é meio caminho.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Dois desconhecidos exigem duas equações (um sistema); a solução é o par (x, y).</li>
  <li>Substituição: isole uma incógnita e substitua na outra equação.</li>
  <li>Adição: combine as equações para eliminar uma incógnita.</li>
  <li>Geometricamente, é o ponto de encontro de duas retas.</li>
</ul>`,relatedIds:["mat-equacao-1grau","mat-equacao-2grau"],simulation:null},{id:"mat-equacao-2grau",topic:"Matemática",title:"Equação do 2º Grau e a Fórmula de Bhaskara",summary:"Quando a incógnita aparece ao quadrado, entra em cena a fórmula mais famosa da escola. Entenda de onde ela vem, o que o discriminante revela e o atalho de soma e produto.",image:"https://image.pollinations.ai/prompt/Quadratic%20equation%20parabola%20with%20roots%2C%20Bhaskara%20formula%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Equação do 2º Grau","Fórmula de Bhaskara","Discriminante","Soma e Produto das Raízes"],content:`
<p>Uma <strong>equação do 2º grau</strong> é aquela em que a incógnita aparece elevada ao quadrado. Sua forma geral é ax² + bx + c = 0, com a ≠ 0. Diferente da equação do 1º grau, ela pode ter <em>duas</em> soluções (raízes) — e existe uma fórmula que as entrega todas de uma vez. Este é um dos assuntos mais icônicos da matemática escolar.</p>

<h2>A fórmula resolutiva (Bhaskara)</h2>
<p>As raízes de ax² + bx + c = 0 são dadas pela fórmula conhecida no Brasil como fórmula de Bhaskara:</p>
<p class='formula'>x = ( −b ± √Δ ) / (2a)   ,   com  Δ = b² − 4ac<small>o ± indica que há, em geral, duas raízes: uma com + e outra com −</small></p>
<p>O termo Δ (delta), chamado <strong>discriminante</strong>, fica dentro da raiz e é ele que decide quantas soluções a equação tem — antes mesmo de terminarmos a conta.</p>

<h2>O que o discriminante revela</h2>
<ul>
  <li><strong>Δ &gt; 0:</strong> a raiz quadrada existe e é diferente de zero → <strong>duas raízes reais distintas</strong>.</li>
  <li><strong>Δ = 0:</strong> a raiz de zero é zero, e o ± não muda nada → <strong>uma única raiz</strong> (raiz dupla).</li>
  <li><strong>Δ &lt; 0:</strong> não existe raiz quadrada real de número negativo → <strong>nenhuma raiz real</strong>.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · resolvendo com Bhaskara</span>
  <p>Resolva: x² − 5x + 6 = 0 (aqui a = 1, b = −5, c = 6)</p>
  <ol>
    <li>Discriminante: Δ = (−5)² − 4·1·6 = 25 − 24 = 1</li>
    <li>Δ &gt; 0, então duas raízes: x = (5 ± √1) / 2 = (5 ± 1) / 2</li>
    <li>x₁ = (5 + 1)/2 = 3   e   x₂ = (5 − 1)/2 = 2</li>
  </ol>
  <p>As raízes são 2 e 3. Note que este é o mesmo x² + 5x + 6 fatorado no Módulo 3, só com sinais trocados — fatorar e resolver estão ligados.</p>
</div>

<h2>O atalho: soma e produto (Relações de Girard)</h2>
<p>Sem usar a fórmula toda, as duas raízes obedecem a duas relações lindas com os coeficientes:</p>
<p class='formula'>soma das raízes:  x₁ + x₂ = −b / a<br>produto das raízes:  x₁ · x₂ = c / a</p>
<p>No exemplo acima (x² − 5x + 6), a soma deveria ser −(−5)/1 = 5 e o produto 6/1 = 6. Dois números que somam 5 e multiplicam 6? São 2 e 3 — as raízes, achadas de cabeça! Esse atalho é ótimo quando as raízes são inteiras.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> a altura de um projétil no tempo é uma equação do 2º grau; achar quando ele toca o chão é achar a raiz.</li>
  <li><strong>Geometria:</strong> problemas de área que caem numa quadrática (ex.: “um terreno retangular de área conhecida e perímetro conhecido”).</li>
  <li><strong>Otimização:</strong> a parábola associada à equação tem um ponto de máximo ou mínimo — base de muitos problemas de engenharia e economia.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Errar o sinal de b na fórmula. Se b = −5, então −b = +5 (não −5). Outro deslize: esquecer o <strong>±</strong> e apresentar só uma raiz quando Δ &gt; 0. E cuidado ao identificar a, b, c: em x² − 5x + 6, temos b = −5 e c = +6, com os sinais.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Forma geral: ax² + bx + c = 0, com a ≠ 0.</li>
  <li>Bhaskara: x = (−b ± √Δ)/(2a), com Δ = b² − 4ac.</li>
  <li>Δ &gt; 0: duas raízes; Δ = 0: uma; Δ &lt; 0: nenhuma real.</li>
  <li>Atalho de Girard: x₁+x₂ = −b/a e x₁·x₂ = c/a.</li>
</ul>`,relatedIds:["mat-fatoracao","mat-sistemas-equacoes"],simulation:null},{id:"mat-inequacoes",topic:"Matemática",title:"Inequações do 1º Grau",summary:"Nem todo problema pede um valor exato — às vezes queremos saber a faixa de valores que satisfaz uma condição. E há uma regra de sinal que só existe aqui.",image:"https://image.pollinations.ai/prompt/Inequality%20on%20a%20number%20line%20with%20shaded%20interval%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Inequação","Desigualdade","Inverter o Sinal","Intervalo Solução","Reta Numérica"],content:`
<p>Uma <strong>inequação</strong> é como uma equação, mas com um sinal de desigualdade no lugar do igual: &lt; (menor), &gt; (maior), ≤ (menor ou igual) ou ≥ (maior ou igual). A grande diferença é a resposta: enquanto uma equação costuma ter valores isolados como solução, uma inequação tem uma <strong>faixa inteira</strong> de valores. “Para quais valores de x isto é verdadeiro?” é a pergunta.</p>

<h2>Resolve-se quase como uma equação…</h2>
<p>Todos os princípios da balança continuam valendo: podemos somar ou subtrair o mesmo valor dos dois lados, e o sentido da desigualdade se mantém. Isolamos a incógnita do mesmo jeito.</p>
<p class='formula'>2x + 3 &lt; 11  →  2x &lt; 8  →  x &lt; 4<small>solução: todos os números menores que 4</small></p>

<h2>…exceto por UMA regra crucial</h2>
<p>Aqui está o único ponto que diferencia inequação de equação, e o mais esquecido: <strong>ao multiplicar ou dividir os dois lados por um número negativo, o sinal da desigualdade se inverte</strong>.</p>
<p class='formula'>−2x &lt; 6   →   x &gt; −3<small>dividimos por −2 e o &lt; virou &gt;</small></p>
<p>Por que? Pense em números: 2 &lt; 5 é verdade. Multiplique tudo por −1: −2 e −5. Agora −2 &gt; −5 (na reta, −2 está à direita de −5). Multiplicar por negativo “espelha” a reta e inverte a ordem — por isso o sinal vira.</p>
<div class='example'>
  <span class='tag'>Exemplo · com inversão</span>
  <p>Resolva: <strong>7 − 3x ≥ 1</strong></p>
  <ol>
    <li>Passe o 7: −3x ≥ 1 − 7 → −3x ≥ −6</li>
    <li>Divida por −3 e <strong>inverta o sinal</strong>: x ≤ 2</li>
  </ol>
  <p>Solução: todos os x menores ou iguais a 2. Teste x = 0: 7 − 0 = 7 ≥ 1 ✓; teste x = 3: 7 − 9 = −2 ≥ 1 ✗ (correto, 3 está fora).</p>
</div>

<h2>Representando a solução</h2>
<p>A solução de uma inequação é um <strong>intervalo</strong>, que desenhamos na reta numérica. Uma bolinha <em>aberta</em> (○) marca &lt; ou &gt; (o extremo não entra); uma bolinha <em>fechada</em> (●) marca ≤ ou ≥ (o extremo entra). Para x ≤ 2, pintamos tudo à esquerda do 2, com bolinha fechada no 2.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Orçamento:</strong> “quanto posso gastar sem passar de R$ 500?” é uma inequação.</li>
  <li><strong>Metas e limites:</strong> nota mínima para passar, carga máxima de um elevador, faixa de temperatura segura.</li>
  <li><strong>Programação e otimização:</strong> restrições (“x deve ser ≥ 0”) são inequações; a pesquisa operacional resolve problemas com dezenas delas.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer de inverter o sinal ao dividir por negativo — o erro nº 1 em inequações. Sempre que a incógnita ficar com coeficiente negativo e você dividir para isolá-la, o &lt; vira &gt; (e vice-versa). Somar ou subtrair, não; multiplicar/dividir por negativo, sim.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Inequação usa &lt;, &gt;, ≤, ≥; a solução é uma faixa (intervalo) de valores.</li>
  <li>Resolve-se como equação, isolando a incógnita.</li>
  <li>Regra exclusiva: multiplicar/dividir por negativo <strong>inverte</strong> o sinal da desigualdade.</li>
  <li>Representa-se na reta com bolinha aberta (&lt;, &gt;) ou fechada (≤, ≥).</li>
</ul>`,relatedIds:["mat-equacao-1grau","mat-conjuntos-numericos"],simulation:null},{id:"mat-conceito-funcao",topic:"Matemática",title:"O Conceito de Função",summary:"A ideia que organiza toda a matemática moderna e a ciência: uma máquina que transforma cada entrada em exatamente uma saída. Domínio, imagem e a notação f(x).",image:"https://image.pollinations.ai/prompt/Function%20machine%20input%20output%20mapping%20arrows%2C%20elegant%20mathematics%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Função","Domínio e Imagem","Variável Dependente e Independente","Notação f(x)"],content:`
<p>Talvez nenhuma ideia seja mais central na matemática moderna do que a de <strong>função</strong>. Ela descreve como uma grandeza <em>depende</em> de outra: o preço depende da quantidade, a distância depende do tempo, a área depende do lado. Praticamente toda lei da física, toda fórmula da economia e todo modelo de computador é uma função. Entender esse conceito abre a porta para tudo o que vem a seguir na trilha.</p>

<h2>A máquina que transforma</h2>
<p>A melhor imagem é a de uma <strong>máquina</strong>: você coloca um número na entrada, a máquina aplica uma regra, e sai um número na saída. A regra é a função. O ponto essencial, que define o que é uma função:</p>
<p class='formula'>cada entrada produz EXATAMENTE UMA saída<small>é isso que separa uma função de uma relação qualquer</small></p>
<p>Uma entrada não pode gerar duas saídas diferentes. Se você põe o 3 e às vezes sai 7, às vezes sai 9, não é função. Já duas entradas diferentes darem a mesma saída, isso é permitido.</p>

<h2>Domínio, contradomínio e imagem</h2>
<p>Três conjuntos descrevem uma função:</p>
<ul>
  <li><strong>Domínio:</strong> todas as entradas possíveis (o que pode entrar na máquina).</li>
  <li><strong>Contradomínio:</strong> o conjunto onde as saídas vivem.</li>
  <li><strong>Imagem:</strong> as saídas que de fato acontecem (o que realmente sai).</li>
</ul>
<p>Por exemplo, na função “área de um quadrado de lado L”, o domínio são os L positivos (não existe lado negativo), e a imagem são as áreas positivas.</p>

<h2>A notação f(x)</h2>
<p>Escrevemos uma função como f(x), que se lê “f de x”. O <em>x</em> é a <strong>variável independente</strong> (a entrada, que escolhemos livremente); o resultado, muitas vezes chamado <em>y</em>, é a <strong>variável dependente</strong> (a saída, que depende de x).</p>
<p class='formula'>f(x) = 2x + 1<br>f(3) = 2·3 + 1 = 7<small>f(3) significa “a saída quando a entrada é 3”</small></p>
<div class='example'>
  <span class='tag'>Exemplo · tabela de valores</span>
  <p>Para f(x) = 2x + 1, calculamos algumas saídas:</p>
  <ul>
    <li>f(0) = 2·0 + 1 = 1</li>
    <li>f(1) = 2·1 + 1 = 3</li>
    <li>f(2) = 2·2 + 1 = 5</li>
    <li>f(−1) = 2·(−1) + 1 = −1</li>
  </ul>
  <p>Cada par (entrada, saída) — como (2, 5) — vira um ponto num gráfico. Ligando os pontos, vemos a “cara” da função.</p>
</div>

<h2>Quando NÃO é função</h2>
<p>Um teste visual clássico (a “reta vertical”): se ao desenhar o gráfico uma reta vertical cruzar a curva em dois pontos, aquela entrada teria duas saídas — logo <em>não</em> é função. Um círculo, por exemplo, não é o gráfico de uma função de x.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> posição em função do tempo, velocidade em função do tempo — o movimento inteiro é um conjunto de funções.</li>
  <li><strong>Programação:</strong> uma “função” em código é literalmente isso: recebe entradas (argumentos) e devolve uma saída.</li>
  <li><strong>Economia e dados:</strong> lucro em função do preço, risco em função do investimento; todo gráfico de tendência é uma função.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Ler f(x) como “f vezes x”. Não é multiplicação! f(x) é o <em>nome da saída</em> da função f para a entrada x. E lembre: o que define função é cada entrada ter uma única saída — não o contrário.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Função é uma regra que associa a cada entrada exatamente uma saída.</li>
  <li>Domínio = entradas possíveis; imagem = saídas que ocorrem.</li>
  <li>Notação f(x): x é a variável independente, f(x) é a dependente.</li>
  <li>Cada par (x, f(x)) é um ponto do gráfico.</li>
</ul>`,relatedIds:["mat-funcao-afim","mat-linguagem-algebrica"],simulation:null},{id:"mat-funcao-afim",topic:"Matemática",title:"Função Afim (do 1º Grau)",summary:"A função cujo gráfico é uma reta. Uma taxa constante de variação governa desde a conta do táxi até o plano de celular — e o coeficiente angular conta tudo.",image:"https://image.pollinations.ai/prompt/Linear%20function%20straight%20line%20graph%20with%20slope%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Função Afim","Coeficiente Angular","Coeficiente Linear","Taxa de Variação","Raiz da Função"],content:`
<p>A <strong>função afim</strong> (ou função do 1º grau) é a mais simples e uma das mais úteis. Seu gráfico é sempre uma <strong>reta</strong>, e ela descreve qualquer situação em que uma grandeza varia a uma <em>taxa constante</em>: tanto por unidade, sempre. Sua fórmula geral tem apenas dois números que controlam tudo.</p>

<h2>A fórmula e seus dois coeficientes</h2>
<p class='formula'>f(x) = a·x + b<small>a é o coeficiente angular · b é o coeficiente linear</small></p>
<ul>
  <li><strong>Coeficiente angular (a):</strong> é a <em>taxa de variação</em> — quanto a saída muda a cada +1 na entrada. É a inclinação da reta. Se a é grande, a reta sobe rápido.</li>
  <li><strong>Coeficiente linear (b):</strong> é o valor de f(0), ou seja, onde a reta <em>corta o eixo vertical</em>. É o ponto de partida.</li>
</ul>

<h2>Crescente ou decrescente</h2>
<p>O sinal do coeficiente angular decide o comportamento:</p>
<ul>
  <li><strong>a &gt; 0:</strong> função <em>crescente</em> — a reta sobe da esquerda para a direita.</li>
  <li><strong>a &lt; 0:</strong> função <em>decrescente</em> — a reta desce.</li>
  <li><strong>a = 0:</strong> f(x) = b, uma reta horizontal (função constante).</li>
</ul>

<h2>A raiz: onde a reta cruza o eixo x</h2>
<p>A <strong>raiz</strong> (ou zero) da função é o valor de x que faz f(x) = 0 — o ponto em que a reta corta o eixo horizontal. Basta resolver a equação do 1º grau:</p>
<p class='formula'>a·x + b = 0   →   x = −b / a</p>
<div class='example'>
  <span class='tag'>Exemplo · lendo uma função afim</span>
  <p>Seja f(x) = 3x − 6.</p>
  <ul>
    <li>a = 3 &gt; 0 → crescente; a cada +1 em x, a saída sobe 3.</li>
    <li>b = −6 → a reta corta o eixo vertical em −6 (pois f(0) = −6).</li>
    <li>Raiz: 3x − 6 = 0 → x = 2. A reta cruza o eixo horizontal em x = 2.</li>
  </ul>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Táxi/aplicativo:</strong> preço = bandeirada (b) + valor por km (a) × distância. O b é o custo fixo, o a é a taxa.</li>
  <li><strong>Plano de celular:</strong> mensalidade fixa mais um valor por GB excedente.</li>
  <li><strong>Física:</strong> movimento uniforme, s = s₀ + v·t — a posição é função afim do tempo, com v como coeficiente angular.</li>
  <li><strong>Custos:</strong> custo total = custo fixo + custo por unidade × quantidade produzida.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar os papéis de a e b. O coeficiente <strong>angular (a)</strong> é a inclinação/taxa; o <strong>linear (b)</strong> é onde começa (corta o eixo y). Numa conta de táxi, confundir os dois faz você calcular o preço todo errado.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Função afim: f(x) = ax + b; gráfico é sempre uma reta.</li>
  <li>a = coeficiente angular (taxa de variação/inclinação); b = coeficiente linear (corta o eixo y em f(0)).</li>
  <li>a &gt; 0 crescente, a &lt; 0 decrescente.</li>
  <li>Raiz: x = −b/a (onde a reta cruza o eixo x).</li>
</ul>`,relatedIds:["mat-conceito-funcao","mat-funcao-quadratica"],simulation:null},{id:"mat-funcao-quadratica",topic:"Matemática",title:"Função Quadrática (do 2º Grau)",summary:"A função da parábola: a curva que descreve o voo de uma bola, a antena parabólica e o ponto de lucro máximo. Vértice, concavidade e raízes contam a história inteira.",image:"https://image.pollinations.ai/prompt/Quadratic%20function%20parabola%20curve%20with%20vertex%2C%20elegant%20mathematics%20graph%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Função Quadrática","Parábola","Vértice","Concavidade","Valor Máximo e Mínimo"],content:`
<p>A <strong>função quadrática</strong> (do 2º grau) tem a incógnita elevada ao quadrado, e seu gráfico é uma curva elegante chamada <strong>parábola</strong>. Ela aparece toda vez que algo sobe e desce, atinge um máximo ou um mínimo: o voo de uma bola, o formato de uma antena, o lucro de uma empresa em função do preço. Dominar seus três elementos — concavidade, raízes e vértice — é ler a história completa do fenômeno.</p>

<h2>A fórmula e a parábola</h2>
<p class='formula'>f(x) = a·x² + b·x + c   ,   com  a ≠ 0<small>o termo ax² é o que curva o gráfico</small></p>
<p>Se a fosse zero, sobraria bx + c — uma reta. É o a ≠ 0 que garante a curva.</p>

<h2>Concavidade: sorriso ou tristeza</h2>
<p>O sinal do coeficiente <em>a</em> decide para onde a parábola abre:</p>
<ul>
  <li><strong>a &gt; 0:</strong> concavidade para <em>cima</em> (formato de sorriso ∪) — a função tem um ponto de <strong>mínimo</strong>.</li>
  <li><strong>a &lt; 0:</strong> concavidade para <em>baixo</em> (∩) — a função tem um ponto de <strong>máximo</strong>.</li>
</ul>

<h2>Raízes: onde cruza o eixo x</h2>
<p>As <strong>raízes</strong> são os valores de x com f(x) = 0 — onde a parábola toca o eixo horizontal. Encontrá-las é resolver a equação do 2º grau com Bhaskara (do Módulo 4), e o discriminante Δ diz quantas existem: duas (Δ&gt;0), uma (Δ=0) ou nenhuma real (Δ&lt;0, a parábola não toca o eixo x).</p>

<h2>O vértice: o ponto mais importante</h2>
<p>O <strong>vértice</strong> é a “ponta” da parábola: o ponto de mínimo (se ∪) ou de máximo (se ∩). Sua coordenada x é:</p>
<p class='formula'>x_v = −b / (2a)<small>e o valor máximo/mínimo é f(x_v)</small></p>
<div class='example'>
  <span class='tag'>Exemplo · analisando uma quadrática</span>
  <p>Seja f(x) = x² − 4x + 3 (a = 1, b = −4, c = 3).</p>
  <ul>
    <li>a = 1 &gt; 0 → concavidade para cima, tem mínimo.</li>
    <li>Raízes (Bhaskara ou soma/produto): x² − 4x + 3 = 0 → x = 1 e x = 3.</li>
    <li>Vértice: x_v = −(−4)/(2·1) = 2; f(2) = 4 − 8 + 3 = −1. Vértice em (2, −1).</li>
  </ul>
  <p>A parábola desce até o ponto (2, −1) e volta a subir, cruzando o eixo x em 1 e 3.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> a trajetória de um projétil sob gravidade é uma parábola; o vértice é a altura máxima.</li>
  <li><strong>Engenharia:</strong> antenas e faróis parabólicos concentram sinais/luz no foco da parábola.</li>
  <li><strong>Economia:</strong> muitas funções de lucro são quadráticas; o vértice indica o preço de lucro máximo.</li>
  <li><strong>Otimização:</strong> “qual retângulo de perímetro fixo tem área máxima?” cai numa quadrática — e a resposta é o quadrado.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir raízes com vértice. As <strong>raízes</strong> são onde a parábola cruza o eixo x (f = 0); o <strong>vértice</strong> é o ponto de máximo ou mínimo. Uma parábola pode não ter raízes reais (Δ &lt; 0), mas <em>sempre</em> tem um vértice.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Função quadrática: f(x) = ax² + bx + c (a ≠ 0); gráfico é uma parábola.</li>
  <li>a &gt; 0: concavidade para cima (mínimo); a &lt; 0: para baixo (máximo).</li>
  <li>Raízes via Bhaskara; o Δ diz quantas são.</li>
  <li>Vértice em x_v = −b/2a — o ponto de máximo ou mínimo.</li>
</ul>`,relatedIds:["mat-equacao-2grau","mat-funcao-afim"],simulation:{component:"funcao-quadratica",subtitle:"Explorador de Parábola",about:"Pegue a parábola pelo vértice V e arraste: ela se desloca inteira sem mudar a abertura, e os coeficientes b e c acompanham. O ponto c, no eixo y, sobe e desce a curva. As raízes aparecem onde ela corta o eixo x, e a faixa colorida entre elas é onde a função tem o sinal contrário ao de a. Ao lado, a parábola aparece desmontada nos três termos: ax² (uma parábola pela origem), bx (uma reta) e c (uma constante) — somar a reta não deforma a parábola, só a empurra de lado. A régua de baixo mostra o discriminante: negativo, nenhuma raiz; zero, uma raiz dupla; positivo, duas.",icon:"activity",iconColor:"#8c8aa6",presets:[{label:"Duas raízes",values:{a:1,b:-2,c:-3}},{label:"Raiz dupla",values:{a:1,b:-2,c:1}},{label:"Sem raízes reais",values:{a:1,b:0,c:2}},{label:"Boca para baixo",values:{a:-1,b:2,c:3}}],controls:[{id:"a",label:"Coeficiente a (concavidade)",unit:"",min:-3,max:3,default:1,step:.1},{id:"b",label:"Coeficiente b",unit:"",min:-8,max:8,default:-2,step:.1},{id:"c",label:"Coeficiente c (corta o eixo y)",unit:"",min:-8,max:8,default:-3,step:.1}]}},{id:"mat-funcao-exponencial",topic:"Matemática",title:"Função Exponencial",summary:"Quando a variável está no expoente, o crescimento deixa de ser constante e vira explosivo. É a matemática das populações, dos juros compostos e das pandemias.",image:"https://image.pollinations.ai/prompt/Exponential%20function%20growth%20curve%20steep%20rise%2C%20elegant%20mathematics%20graph%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Função Exponencial","Crescimento e Decaimento","Base","Crescimento Explosivo"],content:`
<p>Nas funções anteriores, a variável x ficava na base (x, x²). Na <strong>função exponencial</strong>, a variável sobe para o <em>expoente</em> — e isso muda tudo. Em vez de somar uma quantia fixa a cada passo (como a função afim), ela <em>multiplica</em> por um fator fixo. O resultado é um crescimento (ou uma queda) que, no longo prazo, supera qualquer reta ou parábola. É a matemática por trás de juros compostos, populações e epidemias.</p>

<h2>A fórmula</h2>
<p class='formula'>f(x) = aˣ   ,   com  a &gt; 0  e  a ≠ 1<small>a é a base; x, no expoente, é a variável</small></p>
<p>A base <em>a</em> é o fator de multiplicação a cada passo. Compare com a função afim: lá, a cada +1 em x, <em>somamos</em> uma constante; aqui, a cada +1 em x, <em>multiplicamos</em> por <em>a</em>.</p>

<h2>Crescimento ou decaimento</h2>
<ul>
  <li><strong>a &gt; 1:</strong> crescimento exponencial — os valores disparam. Ex.: 2ˣ dá 2, 4, 8, 16, 32… dobrando sempre.</li>
  <li><strong>0 &lt; a &lt; 1:</strong> decaimento exponencial — os valores encolhem em direção a zero, sem nunca chegar. Ex.: (1/2)ˣ dá 1/2, 1/4, 1/8…</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · o poder da multiplicação</span>
  <p>Compare somar 2 (afim) com multiplicar por 2 (exponencial), começando em 1:</p>
  <ul>
    <li>Afim (+2): 1, 3, 5, 7, 9, 11… (no passo 10: 21)</li>
    <li>Exponencial (×2): 1, 2, 4, 8, 16, 32… (no passo 10: 1024)</li>
  </ul>
  <p>Começam parecidos, mas a exponencial abre uma distância abissal. É por isso que se diz que “nada cresce como o exponencial”.</p>
</div>

<h2>A lenda do tabuleiro de xadrez</h2>
<p>Conta-se que o inventor do xadrez pediu ao rei um grão de trigo na primeira casa, dois na segunda, quatro na terceira, dobrando até a 64ª casa. O rei achou o pedido modesto — até perceber que o total (2⁶⁴ − 1 grãos) era mais trigo do que existia no mundo. É a função exponencial pregando uma peça na intuição, que espera crescimento linear.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Finanças:</strong> juros compostos, M = C·(1 + i)ᵗ, são exponenciais no tempo — exatamente a aula de Juros do Módulo 2.</li>
  <li><strong>Biologia:</strong> populações de bactérias e o espalhamento de um vírus crescem exponencialmente enquanto há recursos.</li>
  <li><strong>Física e medicina:</strong> o decaimento radioativo e a eliminação de um remédio pelo corpo seguem o decaimento exponencial (meia-vida).</li>
  <li><strong>Tecnologia:</strong> a Lei de Moore descreveu por décadas um crescimento exponencial do poder dos computadores.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir crescimento exponencial com crescimento rápido “linear”. Numa reta, a diferença entre passos é constante; no exponencial, é a <em>razão</em> que é constante (multiplica sempre pelo mesmo fator). Subestimar isso é o erro por trás de muita surpresa com dívidas e epidemias.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Função exponencial: f(x) = aˣ, com a variável no expoente.</li>
  <li>a &gt; 1: crescimento explosivo; 0 &lt; a &lt; 1: decaimento em direção a zero.</li>
  <li>Diferença-chave da afim: multiplica por um fator a cada passo, em vez de somar.</li>
  <li>Modela juros, populações, epidemias e decaimento radioativo.</li>
</ul>`,relatedIds:["mat-funcao-quadratica","mat-juros"],simulation:null},{id:"mat-sequencias",topic:"Matemática",title:"Sequências Numéricas",summary:"Listas ordenadas de números seguindo um padrão. Aprender a descrever esse padrão com uma fórmula é o primeiro passo para prever qualquer termo — do primeiro ao milésimo.",image:"https://image.pollinations.ai/prompt/Numeric%20sequence%20pattern%20of%20numbers%20in%20order%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Sequência","Termo Geral","Lei de Formação","Sequência Recursiva"],content:`
<p>Uma <strong>sequência</strong> é uma lista de números escritos numa ordem definida, seguindo algum padrão. Os dias da semana, os números pares, as parcelas de um financiamento — tudo isso são sequências. O poder da matemática aqui é conseguir <em>descrever o padrão com uma fórmula</em>, de modo a prever qualquer termo sem precisar escrever todos os anteriores. Esta aula prepara o terreno para as progressões.</p>

<h2>Termos e notação</h2>
<p>Cada número da sequência é um <strong>termo</strong>, e a ordem importa. Indicamos a posição por um índice: a₁ é o primeiro termo, a₂ o segundo, e aₙ é o termo genérico na posição <em>n</em>.</p>
<p class='formula'>(2, 4, 6, 8, 10, …)<br>a₁ = 2 · a₂ = 4 · a₃ = 6 · … · aₙ = ?<small>uma sequência é, formalmente, uma função cujas entradas são os naturais (as posições)</small></p>

<h2>Lei de formação: a fórmula do termo geral</h2>
<p>A forma mais poderosa de descrever uma sequência é dar a <strong>lei de formação</strong> — uma fórmula que calcula o termo aₙ diretamente a partir da posição <em>n</em>.</p>
<div class='example'>
  <span class='tag'>Exemplo · achando o termo geral</span>
  <p>Na sequência dos pares (2, 4, 6, 8, …), cada termo é o dobro da posição:</p>
  <p class='formula'>aₙ = 2n<small>a₁₀₀ = 2·100 = 200 — o centésimo par, sem contar um por um</small></p>
</div>

<h2>Sequências recursivas</h2>
<p>Às vezes é mais natural definir cada termo <em>a partir dos anteriores</em>, em vez de pela posição. Isso é uma <strong>lei recursiva</strong>. A famosa sequência de Fibonacci é assim: cada termo é a soma dos dois anteriores.</p>
<p class='formula'>Fibonacci: aₙ = aₙ₋₁ + aₙ₋₂<br>(1, 1, 2, 3, 5, 8, 13, 21, …)<small>você pode explorá-la na simulação deste módulo</small></p>
<p>A vantagem da fórmula do termo geral é o acesso direto (o milésimo termo na hora); a vantagem da recursiva é a simplicidade de expressar o padrão. As duas descrevem a mesma sequência.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Finanças:</strong> parcelas, saldos devedores e rendimentos formam sequências (que serão PA ou PG).</li>
  <li><strong>Computação:</strong> laços de repetição geram sequências; a recursão em programação é exatamente a lei recursiva.</li>
  <li><strong>Natureza:</strong> a disposição de pétalas, sementes e galhos segue padrões sequenciais — Fibonacci é o caso célebre.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir a posição <em>n</em> com o valor do termo aₙ. Na sequência dos pares, a₃ = 6: a posição é 3, mas o termo é 6. A lei de formação é justamente a ponte entre “onde está” (n) e “qual é o valor” (aₙ).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Sequência é uma lista ordenada de números; cada termo tem uma posição (índice).</li>
  <li>Lei de formação (termo geral aₙ): calcula o termo direto pela posição n.</li>
  <li>Lei recursiva: define cada termo a partir dos anteriores (ex.: Fibonacci).</li>
  <li>Formalmente, uma sequência é uma função dos números naturais.</li>
</ul>`,relatedIds:["mat-progressao-aritmetica","fibonacci"],simulation:null},{id:"mat-progressao-aritmetica",topic:"Matemática",title:"Progressão Aritmética (PA)",summary:"A sequência que cresce sempre no mesmo passo. Do termo geral à soma dos termos — com o truque genial que Gauss descobriu ainda criança.",image:"https://image.pollinations.ai/prompt/Arithmetic%20progression%20numbers%20with%20constant%20difference%20steps%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Progressão Aritmética","Razão","Termo Geral","Soma dos Termos"],content:`
<p>Uma <strong>progressão aritmética</strong> (PA) é uma sequência em que cada termo é obtido somando sempre o <em>mesmo valor</em> ao anterior. Esse passo fixo é a alma da PA. Ela descreve tudo que cresce (ou decresce) de forma constante: os múltiplos de um número, parcelas fixas, os degraus de uma escada. É o análogo, em sequências, da função afim.</p>

<h2>A razão: o passo constante</h2>
<p>A <strong>razão</strong> (r) de uma PA é a diferença entre um termo e o anterior — sempre a mesma.</p>
<p class='formula'>r = aₙ − aₙ₋₁<br>(2, 5, 8, 11, 14, …)  tem razão r = 3<small>r &gt; 0 crescente · r &lt; 0 decrescente · r = 0 constante</small></p>

<h2>O termo geral</h2>
<p>Para chegar ao termo na posição <em>n</em>, partimos do primeiro e somamos a razão (n − 1) vezes:</p>
<p class='formula'>aₙ = a₁ + (n − 1)·r</p>
<div class='example'>
  <span class='tag'>Exemplo · achando um termo distante</span>
  <p>Na PA (2, 5, 8, 11, …), qual é o 20º termo? Aqui a₁ = 2 e r = 3.</p>
  <p class='formula'>a₂₀ = 2 + (20 − 1)·3 = 2 + 57 = 59</p>
  <p>Sem escrever os 20 termos — a fórmula pula direto para o valor.</p>
</div>

<h2>A soma dos termos e o truque de Gauss</h2>
<p>Conta-se que o professor de Gauss, para ocupar a turma, mandou somar todos os números de 1 a 100. O menino Gauss respondeu em segundos: 5050. Ele percebeu que somando o primeiro com o último (1 + 100 = 101), o segundo com o penúltimo (2 + 99 = 101), e assim por diante, sempre dava 101 — e havia 50 desses pares. Logo, 50 × 101 = 5050. Esse é o princípio da fórmula da soma dos <em>n</em> primeiros termos de uma PA:</p>
<p class='formula'>Sₙ = (a₁ + aₙ) · n / 2<small>a média entre o primeiro e o último, multiplicada pela quantidade de termos</small></p>
<div class='example'>
  <span class='tag'>Exemplo · somando uma PA</span>
  <p>Some os 20 primeiros termos da PA (2, 5, 8, …). Já sabemos a₁ = 2 e a₂₀ = 59.</p>
  <p class='formula'>S₂₀ = (2 + 59)·20 / 2 = 61·10 = 610</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Finanças:</strong> juros simples e prestações de valor fixo formam PAs; o saldo evolui em passos iguais.</li>
  <li><strong>Física:</strong> a velocidade num movimento com aceleração constante varia em PA a cada segundo.</li>
  <li><strong>Dia a dia:</strong> assentos de um teatro por fileira, degraus, empilhamento de objetos em camadas.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Usar n em vez de (n − 1) no termo geral. Para chegar ao 5º termo, você soma a razão apenas <strong>4</strong> vezes ao primeiro (do 1º ao 5º há 4 passos). Por isso é (n − 1)·r, e não n·r.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>PA: cada termo é o anterior mais uma razão constante r.</li>
  <li>Termo geral: aₙ = a₁ + (n − 1)·r.</li>
  <li>Soma dos n termos: Sₙ = (a₁ + aₙ)·n/2 (o truque de Gauss).</li>
  <li>É a versão “sequência” da função afim (crescimento constante).</li>
</ul>`,relatedIds:["mat-sequencias","mat-progressao-geometrica"],simulation:null},{id:"mat-progressao-geometrica",topic:"Matemática",title:"Progressão Geométrica (PG)",summary:"A sequência que se multiplica por um fator fixo. É o crescimento exponencial em forma de lista — e leva ao belo paradoxo de somar infinitos termos e obter um número finito.",image:"https://image.pollinations.ai/prompt/Geometric%20progression%20numbers%20doubling%20exponential%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Progressão Geométrica","Razão","Termo Geral","Soma Infinita"],content:`
<p>Uma <strong>progressão geométrica</strong> (PG) é uma sequência em que cada termo é obtido <em>multiplicando</em> o anterior por um valor fixo. Enquanto a PA <em>soma</em> um passo constante, a PG <em>multiplica</em> por um fator constante — e por isso ela é o crescimento exponencial em forma de sequência. É a matemática dos juros compostos, do decaimento e de padrões que dobram (ou pela metade).</p>

<h2>A razão: o fator constante</h2>
<p>A <strong>razão</strong> (q) de uma PG é o quociente entre um termo e o anterior — sempre o mesmo.</p>
<p class='formula'>q = aₙ / aₙ₋₁<br>(3, 6, 12, 24, 48, …)  tem razão q = 2<small>q &gt; 1 cresce · 0 &lt; q &lt; 1 decresce · q &lt; 0 alterna o sinal</small></p>

<h2>O termo geral</h2>
<p>Para chegar ao termo na posição <em>n</em>, partimos do primeiro e multiplicamos pela razão (n − 1) vezes:</p>
<p class='formula'>aₙ = a₁ · qⁿ⁻¹</p>
<div class='example'>
  <span class='tag'>Exemplo · achando um termo</span>
  <p>Na PG (3, 6, 12, 24, …), qual é o 8º termo? Aqui a₁ = 3 e q = 2.</p>
  <p class='formula'>a₈ = 3 · 2⁷ = 3 · 128 = 384</p>
</div>

<h2>Soma dos termos de uma PG finita</h2>
<p>A soma dos <em>n</em> primeiros termos de uma PG (com q ≠ 1) é dada por:</p>
<p class='formula'>Sₙ = a₁ · (qⁿ − 1) / (q − 1)</p>

<h2>O paradoxo: somar infinitos termos e dar um número finito</h2>
<p>Aqui está a maravilha da PG. Quando a razão é uma fração entre 0 e 1 (|q| &lt; 1), os termos encolhem tão rápido que a soma de <em>infinitos</em> deles converge para um valor <strong>finito</strong>:</p>
<p class='formula'>S∞ = a₁ / (1 − q)   ,   para |q| &lt; 1</p>
<div class='example'>
  <span class='tag'>Exemplo · a caminhada de Zenão</span>
  <p>Some infinitos termos de 1/2 + 1/4 + 1/8 + 1/16 + … (a₁ = 1/2, q = 1/2):</p>
  <p class='formula'>S∞ = (1/2) / (1 − 1/2) = (1/2)/(1/2) = 1</p>
  <p>Somando infinitas metades, o total é exatamente 1. É a resolução do antigo paradoxo de Zenão: dar infinitos passos, cada um metade do anterior, ainda leva você a chegar ao destino.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Finanças:</strong> juros compostos são uma PG — o montante multiplica por (1 + i) a cada período.</li>
  <li><strong>Física e medicina:</strong> decaimento radioativo e eliminação de remédios (meia-vida) são PGs decrescentes.</li>
  <li><strong>Computação e fractais:</strong> divisões sucessivas pela metade, resolução de imagens e a autossimilaridade dos fractais seguem PGs.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Aplicar a soma infinita quando |q| ≥ 1. Se a razão é 2, os termos crescem e a soma é infinita — a fórmula S∞ = a₁/(1−q) só vale quando os termos <strong>encolhem</strong> (|q| &lt; 1). Fora disso, não há um total finito.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>PG: cada termo é o anterior multiplicado por uma razão constante q.</li>
  <li>Termo geral: aₙ = a₁·qⁿ⁻¹.</li>
  <li>Soma finita: Sₙ = a₁·(qⁿ − 1)/(q − 1).</li>
  <li>Soma infinita (|q| &lt; 1): S∞ = a₁/(1 − q) — infinitos termos, total finito.</li>
</ul>`,relatedIds:["mat-progressao-aritmetica","mat-funcao-exponencial"],simulation:null},{id:"mat-conjuntos",topic:"Matemática",title:"Teoria dos Conjuntos",summary:"A ideia mais básica e mais poderosa da matemática: agrupar objetos. Toda a matemática moderna, dos números às funções, é construída sobre conjuntos.",image:"https://image.pollinations.ai/prompt/Set%20theory%20Venn%20diagram%20circles%20with%20elements%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Conjunto","Pertinência","Subconjunto","Conjunto Vazio","Conjunto Universo"],content:`
<p>Um <strong>conjunto</strong> é simplesmente uma coleção de objetos — chamados <em>elementos</em>. Parece elementar demais para ser importante, mas foi a partir dessa ideia, formalizada por Georg Cantor no fim do século XIX, que toda a matemática moderna foi reconstruída: números, funções, geometria — tudo pode ser descrito como conjuntos. É a linguagem comum da matemática e da computação.</p>

<h2>Como escrever um conjunto</h2>
<p>Usamos chaves { } para listar ou descrever os elementos. Há duas formas:</p>
<ul>
  <li><strong>Por enumeração:</strong> listando os elementos → A = {2, 4, 6, 8}.</li>
  <li><strong>Por propriedade:</strong> descrevendo a regra → A = {x | x é par e 0 &lt; x &lt; 10} (lê-se “x tal que…”).</li>
</ul>
<p>Num conjunto, a ordem não importa e não se repetem elementos: {1, 2, 3} é o mesmo que {3, 2, 1}.</p>

<h2>Pertinência: o elemento está no conjunto?</h2>
<p>O símbolo <strong>∈</strong> (“pertence”) liga um elemento a um conjunto; sua negação é <strong>∉</strong> (“não pertence”).</p>
<p class='formula'>4 ∈ {2, 4, 6}   (4 pertence ao conjunto)<br>5 ∉ {2, 4, 6}   (5 não pertence)<small>pertinência é sempre entre um elemento e um conjunto</small></p>

<h2>Subconjuntos: um conjunto dentro do outro</h2>
<p>Dizemos que A é <strong>subconjunto</strong> de B (escrevendo A ⊂ B) quando todo elemento de A também está em B. Repare na diferença: ∈ compara elemento com conjunto; <strong>⊂ compara conjunto com conjunto</strong>.</p>
<p class='formula'>{2, 4} ⊂ {2, 4, 6, 8}<small>todo elemento do primeiro está no segundo</small></p>
<p>Foi exatamente essa relação que usamos no Módulo 1: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</p>

<h2>Conjuntos especiais</h2>
<ul>
  <li><strong>Conjunto vazio (∅):</strong> não tem nenhum elemento — ∅ = { }. Ele é subconjunto de qualquer conjunto.</li>
  <li><strong>Conjunto unitário:</strong> tem um único elemento, como {5}.</li>
  <li><strong>Conjunto universo (U):</strong> o conjunto de todos os elementos em consideração num problema.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · ∈ ou ⊂?</span>
  <p>Seja A = {1, 2, {3, 4}}. Cuidado: {3, 4} é um <em>elemento</em> de A (um conjunto dentro de A).</p>
  <ul>
    <li>2 ∈ A ✓ (2 é elemento)</li>
    <li>{1, 2} ⊂ A ✓ (1 e 2 são elementos de A)</li>
    <li>{3, 4} ∈ A ✓ (o conjunto {3,4} é, ele próprio, um elemento de A)</li>
  </ul>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Bancos de dados:</strong> uma consulta SQL é, no fundo, operações com conjuntos de registros.</li>
  <li><strong>Programação:</strong> a maioria das linguagens tem o tipo “conjunto” (set), sem elementos repetidos.</li>
  <li><strong>Probabilidade:</strong> eventos são conjuntos de resultados possíveis — a base do próximo grande módulo.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar ∈ por ⊂. Escreve-se <strong>2 ∈ {2, 4}</strong> (elemento pertence) e <strong>{2} ⊂ {2, 4}</strong> (conjunto está contido). Dizer “2 ⊂ {2, 4}” ou “{2} ∈ {2, 4}” está errado.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Conjunto é uma coleção de elementos, escrito com { } por enumeração ou por propriedade.</li>
  <li>∈ (pertence) liga elemento a conjunto; ⊂ (contido) liga conjunto a conjunto.</li>
  <li>Vazio (∅) não tem elementos e é subconjunto de todos; universo (U) reúne tudo em jogo.</li>
  <li>Ordem e repetição não contam: {1,2} = {2,1,1}.</li>
</ul>`,relatedIds:["mat-operacoes-conjuntos","mat-conjuntos-numericos"],simulation:null},{id:"mat-operacoes-conjuntos",topic:"Matemática",title:"Operações com Conjuntos e Diagramas de Venn",summary:"União, interseção e diferença combinam conjuntos — e os diagramas de Venn transformam problemas de contagem que parecem confusos em algo visual e simples.",image:"https://image.pollinations.ai/prompt/Venn%20diagram%20union%20intersection%20overlapping%20circles%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["União","Interseção","Diferença e Complementar","Diagrama de Venn","Princípio da Inclusão-Exclusão"],content:`
<p>Assim como somamos e multiplicamos números, podemos <strong>operar com conjuntos</strong>: combiná-los, cruzá-los, subtraí-los. Essas operações têm uma representação visual poderosa — os <strong>diagramas de Venn</strong> — que resolve, quase sem conta, problemas de contagem que confundem muita gente.</p>

<h2>União (∪): juntar tudo</h2>
<p>A <strong>união</strong> de A e B reúne todos os elementos que estão em A <em>ou</em> em B (ou em ambos). Elementos repetidos entram uma vez só.</p>
<p class='formula'>A ∪ B = elementos que estão em A ou em B<br>{1,2,3} ∪ {3,4,5} = {1,2,3,4,5}</p>

<h2>Interseção (∩): o que é comum</h2>
<p>A <strong>interseção</strong> de A e B contém só os elementos que estão em A <em>e</em> em B ao mesmo tempo.</p>
<p class='formula'>A ∩ B = elementos que estão em A e em B<br>{1,2,3} ∩ {3,4,5} = {3}</p>
<p>Se não há elementos em comum, a interseção é o conjunto vazio (∅), e os conjuntos são chamados <em>disjuntos</em>.</p>

<h2>Diferença e complementar</h2>
<ul>
  <li><strong>Diferença (A − B):</strong> o que está em A mas não em B. {1,2,3} − {3,4,5} = {1,2}.</li>
  <li><strong>Complementar:</strong> em relação ao universo U, é tudo que está em U mas fora do conjunto.</li>
</ul>

<h2>Diagramas de Venn e o princípio da inclusão-exclusão</h2>
<p>Desenhamos cada conjunto como um círculo; a sobreposição é a interseção. Isso leva a uma fórmula essencial de contagem. Se somarmos os tamanhos de A e B, contamos a interseção <em>duas</em> vezes — por isso a subtraímos uma vez:</p>
<p class='formula'>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<small>n(X) significa “número de elementos de X”</small></p>
<div class='example'>
  <span class='tag'>Exemplo · problema de pesquisa</span>
  <p>Numa turma de 30 alunos, 18 gostam de futebol, 15 de vôlei e 8 gostam dos dois. Quantos gostam de pelo menos um esporte? E quantos de nenhum?</p>
  <p class='formula'>n(F ∪ V) = 18 + 15 − 8 = 25<small>pelo menos um esporte: 25 alunos</small></p>
  <p>De nenhum: 30 − 25 = 5 alunos. Sem o −8, contaríamos os 8 “dos dois” em dobro e chegaríamos a um número errado (33, maior que a turma!).</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Pesquisas e estatística:</strong> classificar pessoas por características que se sobrepõem (a base dos diagramas de Venn).</li>
  <li><strong>Bancos de dados e buscas:</strong> filtros “E”, “OU” e “EXCETO” são interseção, união e diferença.</li>
  <li><strong>Probabilidade:</strong> a fórmula da inclusão-exclusão reaparece ao calcular P(A ou B).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar os grupos sem descontar a sobreposição. Em problemas com “os dois”, quem está na interseção foi contado em A <em>e</em> em B — some tudo e subtraia a interseção uma vez, senão o total estoura.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>União (∪): tudo de A ou B. Interseção (∩): só o comum. Diferença (A − B): em A e fora de B.</li>
  <li>Conjuntos sem elementos comuns são disjuntos (A ∩ B = ∅).</li>
  <li>Diagramas de Venn tornam visíveis essas operações.</li>
  <li>Inclusão-exclusão: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).</li>
</ul>`,relatedIds:["mat-conjuntos","mat-logica-proposicional"],simulation:null},{id:"mat-logica-proposicional",topic:"Matemática",title:"Lógica Proposicional",summary:"A matemática do verdadeiro e do falso. Conectivos como 'e', 'ou' e 'se…então' e as tabelas-verdade são a base do raciocínio rigoroso e de todo circuito de computador.",image:"https://image.pollinations.ai/prompt/Logic%20gates%20true%20false%20boolean%20truth%20table%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Proposição","Conectivos Lógicos","Tabela-Verdade","Negação"],content:`
<p>A <strong>lógica</strong> é o estudo do raciocínio correto — a arte de tirar conclusões válidas. A lógica proposicional, sua porta de entrada, trabalha com afirmações que são ou <em>verdadeiras</em> ou <em>falsas</em>, e com as regras para combiná-las. Não é só filosofia: é literalmente como os computadores “pensam”, com circuitos que processam verdadeiro (1) e falso (0).</p>

<h2>Proposições</h2>
<p>Uma <strong>proposição</strong> é uma frase declarativa que pode ser classificada como verdadeira (V) ou falsa (F) — nunca as duas. “O Sol é uma estrela” (V) e “3 é maior que 5” (F) são proposições. Já “Que horas são?” ou “Feche a porta” não são, pois não têm valor de verdade.</p>

<h2>Os conectivos lógicos</h2>
<p>Combinamos proposições com <strong>conectivos</strong>, cada um com um significado preciso:</p>
<ul>
  <li><strong>Negação (¬):</strong> “não”. Inverte o valor: se p é V, ¬p é F.</li>
  <li><strong>Conjunção (∧):</strong> “e”. Só é verdadeira quando <em>ambas</em> as partes são verdadeiras.</li>
  <li><strong>Disjunção (∨):</strong> “ou”. É verdadeira quando <em>pelo menos uma</em> parte é verdadeira (é o “ou” inclusivo).</li>
  <li><strong>Condicional (→):</strong> “se… então”. Só é falsa quando a primeira parte é verdadeira e a segunda é falsa.</li>
</ul>

<h2>Tabelas-verdade</h2>
<p>Uma <strong>tabela-verdade</strong> lista todos os casos possíveis e o resultado de cada combinação. Para “p e q” (conjunção):</p>
<p class='formula'>p=V, q=V → p∧q = V<br>p=V, q=F → p∧q = F<br>p=F, q=V → p∧q = F<br>p=F, q=F → p∧q = F<small>a conjunção só é verdadeira quando as duas são verdadeiras</small></p>
<div class='example'>
  <span class='tag'>Exemplo · o condicional que confunde</span>
  <p>“Se chover, então levo guarda-chuva” (p → q). Quando essa promessa é quebrada (falsa)? Só num caso: choveu (p=V) e você <em>não</em> levou o guarda-chuva (q=F). Se não choveu, a promessa não foi violada, seja lá o que você fez — por isso o condicional é verdadeiro sempre que p é falsa.</p>
</div>

<h2>Negar corretamente</h2>
<p>Negar frases com “e”/“ou” tem uma regra elegante (as Leis de De Morgan): a negação de “p e q” é “¬p ou ¬q”, e a negação de “p ou q” é “¬p e ¬q”. A negação de “todos” é “existe pelo menos um que não”.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Computação:</strong> processadores são feitos de portas lógicas (AND, OR, NOT); todo programa executa condições if/else, que são condicionais.</li>
  <li><strong>Matemática:</strong> toda demonstração é uma cadeia de implicações lógicas — provar um teorema é lógica aplicada.</li>
  <li><strong>Direito e dia a dia:</strong> interpretar contratos, regras e argumentos exige distinguir “e” de “ou” e entender condições.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Tratar o “ou” matemático como exclusivo (“um ou outro, mas não os dois”). Na lógica, o ∨ é <strong>inclusivo</strong>: “p ou q” é verdadeiro inclusive quando ambos são verdadeiros. E cuidado ao negar um condicional: a negação de “se p então q” não é “se p então não-q”.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Proposição é uma frase com valor de verdade (V ou F).</li>
  <li>Conectivos: ¬ (não), ∧ (e, só V se ambas V), ∨ (ou inclusivo), → (se…então, só F quando V→F).</li>
  <li>Tabelas-verdade listam todos os casos possíveis.</li>
  <li>É a base das demonstrações matemáticas e dos circuitos de computador.</li>
</ul>`,relatedIds:["mat-operacoes-conjuntos","mat-conjuntos"],simulation:null},{id:"mat-geometria-basica",topic:"Matemática",title:"Conceitos Básicos e Ângulos",summary:"Ponto, reta e plano são as peças a partir das quais toda a geometria é construída. E o ângulo — a medida da abertura entre duas retas — é a estrela desta aula.",image:"https://image.pollinations.ai/prompt/Basic%20geometry%20points%20lines%20angles%20protractor%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Ponto, Reta e Plano","Ângulo","Ângulos Complementares e Suplementares","Retas Paralelas"],content:`
<p>A palavra <strong>geometria</strong> significa, literalmente, “medida da terra” — ela nasceu da necessidade prática de medir terrenos no antigo Egito, e foi organizada como ciência dedutiva por Euclides, por volta de 300 a.C., num livro que foi usado por mais de dois mil anos. Toda ela se ergue a partir de três ideias tão básicas que nem se definem: ponto, reta e plano.</p>

<h2>As peças primitivas</h2>
<ul>
  <li><strong>Ponto:</strong> não tem dimensão — marca apenas uma posição.</li>
  <li><strong>Reta:</strong> uma linha infinita nos dois sentidos, sem espessura.</li>
  <li><strong>Plano:</strong> uma superfície plana infinita, sem espessura.</li>
</ul>
<p>De uma reta tiramos o <em>segmento</em> (pedaço entre dois pontos) e a <em>semirreta</em> (começa num ponto e segue infinita num sentido).</p>

<h2>O que é um ângulo</h2>
<p>Um <strong>ângulo</strong> é a abertura entre duas semirretas que partem de um mesmo ponto (o vértice). Medimos essa abertura em <strong>graus (°)</strong>, sendo uma volta completa igual a 360°.</p>
<p class='formula'>agudo: 0° &lt; θ &lt; 90°<br>reto: θ = 90°   (o “L”, cantos de quadrado)<br>obtuso: 90° &lt; θ &lt; 180°<br>raso: θ = 180°   (uma linha reta)</p>

<h2>Relações entre ângulos</h2>
<ul>
  <li><strong>Complementares:</strong> somam 90°. O complemento de 30° é 60°.</li>
  <li><strong>Suplementares:</strong> somam 180°. O suplemento de 50° é 130°.</li>
  <li><strong>Opostos pelo vértice:</strong> quando duas retas se cruzam, os ângulos “de frente” são iguais.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · achando um ângulo</span>
  <p>Dois ângulos são suplementares, e um é o triplo do outro. Quais são?</p>
  <p class='formula'>x + 3x = 180°  →  4x = 180°  →  x = 45°<br>logo os ângulos são 45° e 135°</p>
</div>

<h2>Retas paralelas cortadas por uma transversal</h2>
<p>Quando uma reta (transversal) cruza duas <strong>paralelas</strong>, formam-se ângulos com relações fixas: os <em>correspondentes</em> são iguais e os <em>alternos internos</em> também. Essa propriedade é a base para provar, por exemplo, que os ângulos internos de um triângulo somam 180°.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Construção e marcenaria:</strong> esquadros garantem ângulos de 90°; telhados e rampas são projetados por ângulos.</li>
  <li><strong>Navegação e topografia:</strong> direções e rotas são dadas por ângulos (rumos).</li>
  <li><strong>Computação gráfica e jogos:</strong> rotações e reflexões de objetos na tela são geometria de ângulos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir complementar (soma 90°) com suplementar (soma 180°). Um macete: <strong>C</strong>omplementar combina com <strong>C</strong>anto reto (90°); <strong>S</strong>uplementar, com a linha e<strong>S</strong>ticada (180°).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Ponto, reta e plano são as noções primitivas da geometria.</li>
  <li>Ângulo é a abertura entre semirretas, medida em graus (volta = 360°).</li>
  <li>Tipos: agudo (&lt;90°), reto (90°), obtuso (entre 90° e 180°), raso (180°).</li>
  <li>Complementares somam 90°; suplementares somam 180°.</li>
</ul>`,relatedIds:["mat-poligonos-areas","pitagoras"],simulation:null},{id:"mat-poligonos-areas",topic:"Matemática",title:"Polígonos, Perímetros e Áreas",summary:"Triângulos, quadrados e retângulos são as formas que ladrilham o mundo construído. Aprenda a medir o contorno (perímetro) e a superfície (área) de cada um.",image:"https://image.pollinations.ai/prompt/Polygons%20triangles%20squares%20with%20area%20formulas%2C%20elegant%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Polígono","Triângulo","Quadrilátero","Perímetro","Área"],content:`
<p>Um <strong>polígono</strong> é uma figura plana fechada formada por segmentos de reta (os lados). Triângulos, quadrados, retângulos e hexágonos são polígonos. Medir duas coisas neles resolve boa parte dos problemas práticos de geometria: o <strong>perímetro</strong> (o comprimento do contorno) e a <strong>área</strong> (o tamanho da superfície interna).</p>

<h2>Perímetro: a volta da figura</h2>
<p>O <strong>perímetro</strong> é simplesmente a soma dos comprimentos de todos os lados. É o quanto de cerca você precisa para contornar um terreno, ou de moldura para uma foto.</p>

<h2>Triângulos</h2>
<p>O triângulo é o polígono mais simples e mais forte (por isso aparece em estruturas). Uma propriedade fundamental: a soma dos seus três ângulos internos é <strong>sempre 180°</strong>. Sua área é metade da base vezes a altura:</p>
<p class='formula'>Área do triângulo = (base × altura) / 2<small>a altura é medida perpendicularmente à base</small></p>

<h2>Quadriláteros</h2>
<p>Polígonos de quatro lados. Os principais e suas áreas:</p>
<ul>
  <li><strong>Quadrado</strong> (lado L): Área = L². Perímetro = 4L.</li>
  <li><strong>Retângulo</strong> (base b, altura h): Área = b × h. Perímetro = 2b + 2h.</li>
  <li><strong>Paralelogramo:</strong> Área = base × altura.</li>
  <li><strong>Trapézio</strong> (bases B e b, altura h): Área = (B + b)·h / 2.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · piso e rodapé de um cômodo</span>
  <p>Um quarto retangular tem 5 m por 4 m. Quanto de piso (área) e de rodapé (perímetro)?</p>
  <p class='formula'>Área = 5 × 4 = 20 m²   (piso)<br>Perímetro = 2·5 + 2·4 = 18 m   (rodapé)</p>
  <p>Note as unidades: área em metros <em>quadrados</em> (m²), perímetro em metros (m). Isso não é detalhe — é a distinção conceitual entre superfície e contorno.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Construção e reforma:</strong> calcular tinta (área da parede), piso, cerca, rodapé.</li>
  <li><strong>Agricultura:</strong> medir a área de plantio de um terreno.</li>
  <li><strong>Design e costura:</strong> quantidade de tecido, papel ou material por peça.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar área por perímetro. Perímetro mede o <em>contorno</em> (em metros); área mede a <em>superfície</em> (em metros quadrados). Duas figuras podem ter o mesmo perímetro e áreas bem diferentes — comprar piso pela conta do rodapé é um erro caro.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Perímetro = soma dos lados (contorno, em m).</li>
  <li>Área do triângulo = base × altura / 2; a soma dos ângulos internos é 180°.</li>
  <li>Quadrado: L²; retângulo: b × h; trapézio: (B + b)·h/2.</li>
  <li>Área é medida em unidades quadradas (m²), diferente do perímetro (m).</li>
</ul>`,relatedIds:["mat-geometria-basica","mat-circunferencia"],simulation:null},{id:"mat-circunferencia",topic:"Matemática",title:"Circunferência, Círculo e o Número π",summary:"A forma perfeita e o número mais famoso da matemática. Onde a razão entre a volta e o diâmetro revela π — e de onde saem as fórmulas do comprimento e da área.",image:"https://image.pollinations.ai/prompt/Circle%20circumference%20radius%20diameter%20pi%20symbol%2C%20elegant%20geometry%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Circunferência","Círculo","Número π","Comprimento","Área"],content:`
<p>A <strong>circunferência</strong> é o conjunto de todos os pontos que estão à mesma distância de um centro — a forma mais simétrica que existe. Uma distinção fina de vocabulário: a <em>circunferência</em> é só a linha curva (o contorno), e o <strong>círculo</strong> é a região preenchida por dentro. Toda a beleza do assunto gira em torno de um número: π.</p>

<h2>Os elementos</h2>
<ul>
  <li><strong>Raio (r):</strong> distância do centro até a curva.</li>
  <li><strong>Diâmetro (d):</strong> atravessa o centro de ponta a ponta; vale o dobro do raio (d = 2r).</li>
  <li><strong>Corda:</strong> segmento que liga dois pontos da curva sem passar pelo centro.</li>
</ul>

<h2>O número π</h2>
<p>Aqui está uma das descobertas mais elegantes da matemática: se você dividir o <em>comprimento</em> de qualquer circunferência pelo seu <em>diâmetro</em>, o resultado é sempre o mesmo número, não importa o tamanho do círculo. Esse número é o <strong>π</strong> (pi), um irracional que vale aproximadamente 3,14159…</p>
<p class='formula'>π = comprimento / diâmetro ≈ 3,14159…<small>constante universal: vale para todo círculo do universo</small></p>

<h2>Comprimento e área</h2>
<p>Da definição de π saem direto as duas fórmulas essenciais:</p>
<p class='formula'>Comprimento (a volta):  C = 2 · π · r<br>Área (a região):  A = π · r²</p>
<div class='example'>
  <span class='tag'>Exemplo · uma pizza</span>
  <p>Uma pizza tem 30 cm de diâmetro (raio 15 cm). Qual a borda (comprimento) e a área?</p>
  <p class='formula'>C = 2 · π · 15 ≈ 94,2 cm   (a borda)<br>A = π · 15² = π · 225 ≈ 706,9 cm²   (a superfície)</p>
  <p>É por isso que uma pizza grande compensa: dobrar o raio <em>quadruplica</em> a área (pois entra r²), mas o preço raramente quadruplica.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia:</strong> rodas, engrenagens, tubos, tanques cilíndricos — todo cálculo de peça redonda usa π.</li>
  <li><strong>Astronomia:</strong> órbitas e o tamanho de planetas e estrelas.</li>
  <li><strong>Dia a dia:</strong> comparar tamanhos de pizza, calcular material para uma mesa redonda, medir a distância que uma roda percorre por volta.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar as fórmulas de comprimento (2πr) e área (πr²). Dica: área tem a ver com “ao quadrado” (r²) porque mede uma superfície (unidades quadradas); comprimento é uma medida de linha, linear em r.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Circunferência é a linha; círculo é a região interna.</li>
  <li>Diâmetro = 2 × raio.</li>
  <li>π ≈ 3,14159 é a razão constante entre comprimento e diâmetro de qualquer círculo.</li>
  <li>Comprimento: C = 2πr. Área: A = πr².</li>
</ul>`,relatedIds:["mat-poligonos-areas","mat-geometria-espacial"],simulation:null},{id:"mat-geometria-espacial",topic:"Matemática",title:"Geometria Espacial: Sólidos e Volumes",summary:"Saindo do plano para as três dimensões. Prismas, cilindros, cones e esferas — e como calcular o quanto cada um comporta por dentro.",image:"https://image.pollinations.ai/prompt/3D%20geometric%20solids%20cube%20cylinder%20sphere%20cone%20volume%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Sólidos Geométricos","Volume","Prisma e Cilindro","Cone, Pirâmide e Esfera"],content:`
<p>Até aqui, medimos figuras planas (duas dimensões). O mundo real, porém, é tridimensional: caixas, latas, bolas. A <strong>geometria espacial</strong> estuda os sólidos, e a grandeza-chave é o <strong>volume</strong> — o espaço que um objeto ocupa, ou o quanto ele comporta por dentro. Volume se mede em unidades <em>cúbicas</em> (m³, cm³).</p>

<h2>Prismas e cilindros: base vezes altura</h2>
<p>Um <strong>prisma</strong> (como uma caixa) e um <strong>cilindro</strong> (como uma lata) têm a mesma lógica de volume: a área da base multiplicada pela altura. É como empilhar cópias da base até a altura desejada.</p>
<p class='formula'>Volume do prisma/cilindro = Área da base × altura<br>caixa: V = comprimento × largura × altura<br>cilindro: V = π · r² × altura<small>a base do cilindro é um círculo, daí o πr²</small></p>

<h2>Cones e pirâmides: um terço do prisma</h2>
<p>Um <strong>cone</strong> ou uma <strong>pirâmide</strong> com a mesma base e a mesma altura de um cilindro/prisma comporta exatamente <em>um terço</em> do volume. É um fato lindo e nada óbvio (demonstrado com cálculo, que veremos no fim da trilha).</p>
<p class='formula'>Volume do cone/pirâmide = (Área da base × altura) / 3</p>

<h2>A esfera</h2>
<p>O volume da <strong>esfera</strong> (uma bola perfeita) depende só do raio:</p>
<p class='formula'>Volume da esfera = (4/3) · π · r³</p>
<div class='example'>
  <span class='tag'>Exemplo · uma caixa d'água cilíndrica</span>
  <p>Uma caixa d'água tem raio 1 m e altura 2 m. Quantos litros comporta? (1 m³ = 1000 litros.)</p>
  <p class='formula'>V = π · 1² · 2 ≈ 6,28 m³ ≈ 6.280 litros</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia e arquitetura:</strong> volume de concreto, capacidade de reservatórios e silos.</li>
  <li><strong>Indústria e logística:</strong> capacidade de embalagens, tanques de combustível, contêineres.</li>
  <li><strong>Medicina e ciência:</strong> volume de órgãos, dosagem por volume, densidade (massa/volume).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Misturar área (superfície, m²) com volume (espaço interno, m³). Pintar um tanque usa a <em>área</em>; enchê-lo usa o <em>volume</em>. E lembre do fator 1/3 que diferencia cone/pirâmide de cilindro/prisma — esquecê-lo triplica a resposta.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Volume mede o espaço interno, em unidades cúbicas (m³).</li>
  <li>Prisma e cilindro: V = área da base × altura.</li>
  <li>Cone e pirâmide: um terço disso (V = base × altura / 3).</li>
  <li>Esfera: V = (4/3)πr³.</li>
</ul>`,relatedIds:["mat-circunferencia","mat-poligonos-areas"],simulation:null},{id:"mat-trig-triangulo",topic:"Matemática",title:"Trigonometria no Triângulo Retângulo",summary:"Seno, cosseno e tangente são apenas razões entre os lados de um triângulo retângulo — e permitem medir alturas e distâncias impossíveis de alcançar com uma régua.",image:"https://image.pollinations.ai/prompt/Right%20triangle%20trigonometry%20sine%20cosine%20tangent%20sides%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Seno, Cosseno e Tangente","Triângulo Retângulo","Ângulos Notáveis","Razões Trigonométricas"],content:`
<p>A <strong>trigonometria</strong> (“medida dos triângulos”) nasceu da astronomia e da navegação: como medir a altura de uma montanha ou a distância a uma estrela sem chegar lá? A resposta genial é que, num <strong>triângulo retângulo</strong>, os ângulos determinam as proporções entre os lados. Basta conhecer um ângulo e um lado para descobrir os demais. Tudo começa com três razões.</p>

<h2>Os lados de um triângulo retângulo</h2>
<p>Fixado um dos ângulos agudos (θ), nomeamos os lados em relação a ele:</p>
<ul>
  <li><strong>Hipotenusa:</strong> o lado oposto ao ângulo reto (o maior, sempre).</li>
  <li><strong>Cateto oposto:</strong> o lado “à frente” do ângulo θ.</li>
  <li><strong>Cateto adjacente:</strong> o lado “ao lado” de θ (que forma o ângulo).</li>
</ul>

<h2>As três razões trigonométricas</h2>
<p>Seno, cosseno e tangente do ângulo θ são definidos como razões entre esses lados:</p>
<p class='formula'>sen θ = cateto oposto / hipotenusa<br>cos θ = cateto adjacente / hipotenusa<br>tg θ = cateto oposto / cateto adjacente<small>a tangente também é sen θ / cos θ</small></p>
<p>Um jeito clássico de memorizar é o mnemônico <strong>SOH-CAH-TOA</strong>: Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente. O incrível: essas razões só dependem do ângulo, não do tamanho do triângulo.</p>

<h2>Os ângulos notáveis</h2>
<p>Três ângulos aparecem tanto que seus valores valem a pena guardar:</p>
<p class='formula'>         30°      45°      60°<br>sen    1/2     √2/2     √3/2<br>cos    √3/2    √2/2     1/2<br>tg     √3/3     1       √3</p>
<div class='example'>
  <span class='tag'>Exemplo · a altura de uma torre</span>
  <p>De um ponto a 50 m da base de uma torre, você vê o topo sob um ângulo de 30° com o chão. Qual a altura da torre?</p>
  <p class='formula'>tg 30° = altura / 50<br>altura = 50 · tg 30° = 50 · (√3/3) ≈ 50 · 0,577 ≈ 28,9 m</p>
  <p>Medimos a torre sem subir nela — só com um ângulo e uma distância no chão.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Topografia e engenharia:</strong> medir alturas de morros, prédios e a inclinação de rampas e telhados.</li>
  <li><strong>Navegação e GPS:</strong> triangular posições a partir de ângulos e distâncias.</li>
  <li><strong>Astronomia:</strong> estimar distâncias a corpos celestes por paralaxe (um problema de triângulos).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar cateto oposto pelo adjacente. Eles dependem de <em>qual</em> ângulo você escolheu: o oposto de um ângulo agudo é o adjacente do outro. Antes de aplicar SOH-CAH-TOA, identifique claramente o ângulo de referência.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Num triângulo retângulo, sen, cos e tg são razões entre os lados.</li>
  <li>SOH-CAH-TOA: seno = oposto/hip., cosseno = adjacente/hip., tangente = oposto/adjacente.</li>
  <li>As razões dependem só do ângulo, não do tamanho do triângulo.</li>
  <li>Ângulos notáveis (30°, 45°, 60°) têm valores que compensa memorizar.</li>
</ul>`,relatedIds:["pitagoras","mat-circulo-trigonometrico"],simulation:null},{id:"mat-circulo-trigonometrico",topic:"Matemática",title:"O Círculo Trigonométrico e os Radianos",summary:"Como estender seno e cosseno para ângulos além de 90° — e por que os matemáticos preferem medir ângulos em radianos em vez de graus.",image:"https://image.pollinations.ai/prompt/Unit%20circle%20trigonometry%20with%20angles%20sine%20cosine%20coordinates%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Círculo Trigonométrico","Radiano","Quadrantes","Relação Fundamental"],content:`
<p>No triângulo retângulo, seno e cosseno só fazem sentido para ângulos entre 0° e 90°. Mas a natureza está cheia de rotações completas — uma roda girando, uma onda oscilando. Para descrever isso, estendemos a trigonometria com o <strong>círculo trigonométrico</strong>: um círculo de raio 1 centrado na origem, onde qualquer ângulo, por maior que seja, tem seno e cosseno bem definidos.</p>

<h2>Ângulo como rotação</h2>
<p>Imagine um ponto girando sobre o círculo de raio 1, a partir do eixo horizontal. O ângulo é o quanto ele girou (no sentido anti-horário). A grande sacada:</p>
<p class='formula'>cos θ = coordenada x do ponto<br>sen θ = coordenada y do ponto<small>no círculo de raio 1, as coordenadas SÃO o cosseno e o seno</small></p>
<p>Isso reproduz as definições do triângulo para ângulos agudos, mas agora funciona para 120°, 270°, 360° e além.</p>

<h2>Radianos: a unidade natural</h2>
<p>Os matemáticos raramente usam graus; preferem os <strong>radianos</strong>. Um radiano é o ângulo que “abre” um arco de comprimento igual ao raio. Como a volta inteira tem comprimento 2πr, uma volta completa são 2π radianos.</p>
<p class='formula'>360° = 2π rad    →    180° = π rad<br>90° = π/2 rad    ·    45° = π/4 rad<small>para converter: multiplique graus por π/180</small></p>
<p>Os radianos parecem estranhos no início, mas são essenciais no cálculo — as fórmulas de derivadas de seno e cosseno só ficam simples nessa unidade.</p>

<h2>Sinais nos quatro quadrantes</h2>
<p>Conforme o ponto gira, x e y trocam de sinal, e com eles o cosseno e o seno:</p>
<ul>
  <li><strong>1º quadrante</strong> (0° a 90°): sen +, cos +.</li>
  <li><strong>2º quadrante</strong> (90° a 180°): sen +, cos −.</li>
  <li><strong>3º quadrante</strong> (180° a 270°): sen −, cos −.</li>
  <li><strong>4º quadrante</strong> (270° a 360°): sen −, cos +.</li>
</ul>

<h2>A relação fundamental</h2>
<p>Como o ponto está num círculo de raio 1, o teorema de Pitágoras aplicado às coordenadas (x, y) dá a identidade mais importante da trigonometria:</p>
<p class='formula'>sen²θ + cos²θ = 1<small>é o próprio Pitágoras, escrito no círculo de raio 1</small></p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> movimento circular, ondas e oscilações são descritos por ângulos no círculo trigonométrico.</li>
  <li><strong>Engenharia elétrica:</strong> a corrente alternada gira como um ponto no círculo — daí falarmos em “fase”.</li>
  <li><strong>Computação gráfica:</strong> rotacionar um objeto na tela usa seno e cosseno do ângulo de rotação.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Calcular na calculadora em graus quando o problema está em radianos (ou vice-versa). Um seno de “2” dá resultados completamente diferentes se “2” for 2 graus ou 2 radianos. Sempre confira o modo (DEG/RAD).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>No círculo de raio 1: cos θ = x e sen θ = y do ponto que girou o ângulo θ.</li>
  <li>Radianos: 180° = π rad; é a unidade natural para o cálculo.</li>
  <li>Os sinais de sen e cos mudam conforme o quadrante.</li>
  <li>Relação fundamental: sen²θ + cos²θ = 1 (Pitágoras no círculo).</li>
</ul>`,relatedIds:["mat-trig-triangulo","mat-funcoes-trigonometricas"],simulation:null},{id:"mat-funcoes-trigonometricas",topic:"Matemática",title:"Funções Trigonométricas e as Ondas",summary:"Quando o ângulo gira sem parar, seno e cosseno viram funções que sobem e descem para sempre — as ondas. É a matemática do som, da luz, das marés e da eletricidade.",image:"https://image.pollinations.ai/prompt/Sine%20cosine%20wave%20functions%20oscillating%20graph%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Função Seno e Cosseno","Período","Amplitude","Funções Periódicas"],content:`
<p>Se deixarmos o ângulo do círculo trigonométrico crescer indefinidamente, o seno e o cosseno passam a variar de forma repetida, para cima e para baixo, sem fim. Nasce assim a <strong>função trigonométrica</strong> — e seu gráfico é a curva mais importante de toda a ciência: a <strong>onda</strong>. Som, luz, marés, corrente elétrica e batimentos cardíacos são todos descritos por ela.</p>

<h2>A função seno</h2>
<p>A função f(x) = sen(x) aceita qualquer número real como entrada (o ângulo, em radianos) e devolve um valor entre −1 e 1. Seu gráfico é uma onda suave que oscila para sempre.</p>
<ul>
  <li><strong>Domínio:</strong> todos os reais. <strong>Imagem:</strong> [−1, 1].</li>
  <li><strong>Período:</strong> 2π — depois de uma volta completa, o padrão se repete.</li>
</ul>
<p>A função cosseno é idêntica, apenas “adiantada” — é a mesma onda deslocada de 90°.</p>

<h2>Amplitude e período</h2>
<p>Numa função como f(x) = A · sen(B·x), dois números controlam o formato da onda:</p>
<p class='formula'>amplitude = |A|   →   a “altura” da onda<br>período = 2π / |B|   →   o comprimento de um ciclo<small>A estica a onda na vertical; B a comprime na horizontal</small></p>
<p>Aumentar A deixa a onda mais “alta”; aumentar B a deixa mais “apertada” (mais ciclos no mesmo espaço — maior frequência).</p>

<h2>A tangente</h2>
<p>A função tangente, tg(x) = sen(x)/cos(x), tem comportamento diferente: seu período é π (metade), e ela dispara para o infinito onde o cosseno se anula (em 90°, 270°…), formando <em>assíntotas</em> verticais.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Som e música:</strong> uma nota pura é uma função seno; timbre e volume são amplitude e frequência (veja a simulação de Ondas Sonoras no acervo).</li>
  <li><strong>Eletricidade:</strong> a corrente alternada da tomada é uma senoide a 60 Hz.</li>
  <li><strong>Natureza:</strong> marés, ciclos de estações, luz e sinais de rádio são todos ondas trigonométricas.</li>
  <li><strong>Medicina:</strong> um eletrocardiograma e ondas cerebrais são somas de funções trigonométricas.</li>
</ul>

<div class='callout'>
  <span class='tag'>Curiosidade</span>
  <p>O matemático Joseph Fourier provou algo espantoso: <em>qualquer</em> sinal periódico — por mais complicado — pode ser escrito como uma soma de senos e cossenos. É por isso que a trigonometria está no coração da compressão de áudio (MP3), de imagem (JPEG) e do processamento de todo sinal digital.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>sen(x) e cos(x) são funções periódicas (período 2π), com imagem [−1, 1].</li>
  <li>Em A·sen(Bx): A é a amplitude; o período é 2π/B.</li>
  <li>A tangente tem período π e assíntotas onde o cosseno zera.</li>
  <li>Ondas trigonométricas descrevem som, luz, eletricidade e marés — e toda função periódica é soma delas (Fourier).</li>
</ul>`,relatedIds:["mat-circulo-trigonometrico","mat-funcao-exponencial"],simulation:null},{id:"mat-principio-contagem",topic:"Matemática",title:"O Princípio Fundamental da Contagem",summary:"Antes de calcular probabilidades, é preciso saber contar possibilidades. Uma única ideia — multiplicar as escolhas — resolve a maioria dos problemas de contagem.",image:"https://image.pollinations.ai/prompt/Counting%20principle%20tree%20diagram%20of%20combinations%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Princípio Multiplicativo","Contagem","Fatorial","Árvore de Possibilidades"],content:`
<p>A <strong>análise combinatória</strong> é a arte de contar sem listar um por um. “Quantas senhas de 4 dígitos existem? Quantos jogos possíveis na loteria?” São perguntas em que escrever todas as opções seria impraticável. A boa notícia é que quase tudo se apoia numa ideia só: o <strong>princípio fundamental da contagem</strong>.</p>

<h2>O princípio multiplicativo</h2>
<p>Se uma decisão pode ser tomada em etapas, e cada etapa tem um número de opções independente das outras, o total de resultados é o <em>produto</em> das opções de cada etapa.</p>
<p class='formula'>total = (opções da etapa 1) × (opções da etapa 2) × …<small>“e” entre etapas significa multiplicar</small></p>
<div class='example'>
  <span class='tag'>Exemplo · montando um look</span>
  <p>Você tem 3 camisas e 4 calças. Quantas combinações diferentes de roupa?</p>
  <p class='formula'>3 × 4 = 12 combinações</p>
  <p>Para cada uma das 3 camisas, há 4 escolhas de calça. Uma árvore de possibilidades teria 12 galhos.</p>
</div>
<div class='example'>
  <span class='tag'>Exemplo · placas de carro</span>
  <p>Uma placa antiga tinha 3 letras (26 opções cada) e 4 dígitos (10 opções cada). Quantas placas?</p>
  <p class='formula'>26 × 26 × 26 × 10 × 10 × 10 × 10 = 26³ · 10⁴ = 175.760.000</p>
</div>

<h2>Fatorial: contando arranjos completos</h2>
<p>Uma pergunta especial aparece o tempo todo: de quantas formas posso <em>ordenar</em> n objetos distintos? Aplicando o princípio: a 1ª posição tem n opções, a 2ª tem n−1 (uma já foi usada), a 3ª tem n−2… O produto disso é o <strong>fatorial</strong> de n, escrito n!.</p>
<p class='formula'>n! = n × (n−1) × (n−2) × … × 2 × 1<br>5! = 5·4·3·2·1 = 120<small>por convenção, 0! = 1</small></p>
<div class='example'>
  <span class='tag'>Exemplo · fila de pessoas</span>
  <p>De quantas maneiras 5 pessoas podem formar uma fila? São 5! = 120 filas diferentes.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança:</strong> o número de senhas possíveis (a “força” de uma senha) é um problema de contagem.</li>
  <li><strong>Logística:</strong> quantas rotas ou escalas possíveis existem (o fatorial cresce explosivamente).</li>
  <li><strong>Genética e química:</strong> contar arranjos de genes ou de átomos numa molécula.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar quando deveria multiplicar. Se as etapas acontecem <em>juntas</em> (“camisa E calça”), multiplique. Some apenas quando as opções são <em>alternativas exclusivas</em> (“ir de ônibus OU de metrô”). O “e” multiplica, o “ou” soma.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Princípio multiplicativo: multiplique as opções de cada etapa independente.</li>
  <li>“E” multiplica; “ou” (alternativas exclusivas) soma.</li>
  <li>Fatorial n! = n·(n−1)·…·1 conta as ordenações de n objetos distintos.</li>
  <li>Por convenção, 0! = 1.</li>
</ul>`,relatedIds:["mat-permutacoes-combinacoes","mat-potenciacao-radiciacao"],simulation:null},{id:"mat-permutacoes-combinacoes",topic:"Matemática",title:"Permutações e Combinações",summary:"A pergunta que decide tudo: a ordem importa? Ela separa um pódio (onde 1º e 2º são diferentes) de uma comissão (onde a ordem dos escolhidos não muda nada).",image:"https://image.pollinations.ai/prompt/Permutations%20and%20combinations%20selecting%20objects%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Permutação","Arranjo","Combinação","A Ordem Importa?"],content:`
<p>Quando selecionamos alguns objetos de um grupo, existe uma pergunta que muda completamente a conta: <strong>a ordem importa?</strong> Se trocar a ordem dos escolhidos gera um resultado diferente, é <em>permutação/arranjo</em>. Se não gera, é <em>combinação</em>. Saber distinguir isso é o coração deste módulo.</p>

<h2>Quando a ordem importa: permutações e arranjos</h2>
<p>Um <strong>arranjo</strong> conta as seleções ordenadas de p objetos entre n disponíveis. A ordem é o que faz “João em 1º e Maria em 2º” ser diferente de “Maria em 1º e João em 2º”.</p>
<p class='formula'>A(n, p) = n! / (n − p)!<small>quando p = n, é uma permutação: todos os n objetos ordenados (n!)</small></p>
<div class='example'>
  <span class='tag'>Exemplo · pódio</span>
  <p>Numa corrida com 8 atletas, de quantas formas se pode formar o pódio (1º, 2º e 3º)? A ordem importa (ouro ≠ prata):</p>
  <p class='formula'>A(8, 3) = 8! / 5! = 8 · 7 · 6 = 336</p>
</div>

<h2>Quando a ordem não importa: combinações</h2>
<p>Uma <strong>combinação</strong> conta as seleções de p objetos entre n <em>sem</em> ligar para a ordem. Escolher {João, Maria} é o mesmo grupo que {Maria, João}. Por isso dividimos o arranjo por p! (as ordens repetidas do mesmo grupo).</p>
<p class='formula'>C(n, p) = n! / [ p! · (n − p)! ]</p>
<div class='example'>
  <span class='tag'>Exemplo · comissão e loteria</span>
  <p>De um grupo de 8 pessoas, quantas comissões de 3 podem ser formadas? A ordem NÃO importa (uma comissão é a mesma independentemente de quem foi citado primeiro):</p>
  <p class='formula'>C(8, 3) = 8! / (3! · 5!) = 336 / 6 = 56</p>
  <p>Compare: 336 pódios, mas só 56 comissões — a diferença é exatamente o 3! de ordens que, na comissão, não contam. A Mega-Sena (6 números entre 60) é uma combinação: C(60, 6) ≈ 50 milhões de jogos.</p>
</div>

<h2>A pergunta de ouro</h2>
<p>Antes de escolher a fórmula, responda: <strong>“trocar a ordem dos escolhidos muda o resultado?”</strong> Se sim → arranjo/permutação. Se não → combinação. Pódios, filas e senhas são ordenados; comissões, times, saladas e jogos de loteria não são.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Loterias e jogos:</strong> calcular o número de resultados possíveis (e a chance de ganhar).</li>
  <li><strong>Estatística:</strong> combinações aparecem na base da distribuição binomial e da normal (veja a simulação de Galton neste módulo).</li>
  <li><strong>Genética e criptografia:</strong> contar combinações de genes ou de chaves possíveis.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Usar arranjo (contar a ordem) num problema em que a ordem não importa — o que infla o resultado por um fator p!. Uma comissão de 3 não é um pódio: se você não distingue “1º, 2º, 3º”, use combinação.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A ordem importa → arranjo: A(n,p) = n!/(n−p)!.</li>
  <li>A ordem não importa → combinação: C(n,p) = n!/[p!(n−p)!].</li>
  <li>Combinação = arranjo dividido por p! (as ordens repetidas do mesmo grupo).</li>
  <li>Pergunte sempre: “trocar a ordem muda o resultado?”.</li>
</ul>`,relatedIds:["mat-principio-contagem","mat-probabilidade"],simulation:null},{id:"mat-probabilidade",topic:"Matemática",title:"Probabilidade",summary:"A matemática do acaso: transformar incerteza em número. De jogos de dados a previsões do tempo e seguros, é como medimos a chance de algo acontecer.",image:"https://image.pollinations.ai/prompt/Probability%20dice%20cards%20chance%20mathematics%2C%20elegant%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Espaço Amostral","Evento","Probabilidade de Laplace","Eventos Independentes"],content:`
<p>A <strong>probabilidade</strong> transforma o acaso em número. Ela mede, numa escala de 0 a 1 (ou de 0% a 100%), o quão provável é um acontecimento. Nasceu no século XVII de perguntas sobre jogos de azar (numa troca de cartas entre Pascal e Fermat) e hoje sustenta desde a previsão do tempo até os seguros, a medicina e a inteligência artificial.</p>

<h2>O vocabulário do acaso</h2>
<ul>
  <li><strong>Experimento aleatório:</strong> um processo cujo resultado não se pode prever com certeza (lançar um dado).</li>
  <li><strong>Espaço amostral:</strong> o conjunto de todos os resultados possíveis (no dado: {1,2,3,4,5,6}).</li>
  <li><strong>Evento:</strong> um subconjunto de resultados que nos interessa (“sair par” = {2,4,6}).</li>
</ul>

<h2>A definição de Laplace</h2>
<p>Quando todos os resultados são igualmente prováveis, a probabilidade de um evento é a razão entre os casos favoráveis e os casos possíveis:</p>
<p class='formula'>P(A) = casos favoráveis / casos possíveis<small>sempre entre 0 (impossível) e 1 (certo)</small></p>
<div class='example'>
  <span class='tag'>Exemplo · um dado</span>
  <p>Qual a probabilidade de sair um número par ao lançar um dado?</p>
  <p class='formula'>P(par) = 3 / 6 = 1/2 = 50%<small>favoráveis {2,4,6} entre 6 possíveis</small></p>
</div>

<h2>Regras essenciais</h2>
<ul>
  <li><strong>Complementar:</strong> a chance de algo NÃO acontecer é P(não A) = 1 − P(A). Muitas vezes é bem mais fácil calcular o contrário.</li>
  <li><strong>União (“A ou B”):</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B) — a mesma inclusão-exclusão do módulo de conjuntos.</li>
  <li><strong>Eventos independentes (“A e B”):</strong> quando um não afeta o outro, P(A e B) = P(A) × P(B).</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · dois eventos independentes</span>
  <p>Qual a chance de tirar cara duas vezes seguidas numa moeda?</p>
  <p class='formula'>P(cara e cara) = 1/2 × 1/2 = 1/4 = 25%</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Seguros e finanças:</strong> o preço de um seguro é calculado a partir da probabilidade do sinistro.</li>
  <li><strong>Medicina:</strong> a eficácia de um tratamento e a interpretação de exames são probabilidades.</li>
  <li><strong>Ciência de dados e IA:</strong> modelos de aprendizado de máquina são, no fundo, máquinas de estimar probabilidades. A distribuição normal (simulação de Galton, neste módulo) é a rainha da estatística.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>A “falácia do apostador”: achar que, após cinco caras seguidas, a coroa está “mais provável” na próxima. Em eventos independentes, o passado não influencia o futuro — a chance continua 1/2. A moeda não tem memória.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Probabilidade mede a chance de um evento, entre 0 e 1.</li>
  <li>Laplace: P(A) = casos favoráveis / casos possíveis.</li>
  <li>Complementar: P(não A) = 1 − P(A); união usa inclusão-exclusão; eventos independentes multiplicam.</li>
  <li>Cuidado com a falácia do apostador: eventos independentes não têm memória.</li>
</ul>`,relatedIds:["mat-permutacoes-combinacoes","mat-operacoes-conjuntos"],simulation:null},{id:"mat-nocao-limite",topic:"Matemática",title:"A Noção de Limite",summary:"A ideia que fundou o cálculo: o que um valor se torna quando chegamos infinitamente perto de um ponto — mesmo que nunca cheguemos exatamente nele.",image:"https://image.pollinations.ai/prompt/Limit%20concept%20approaching%20a%20point%20on%20a%20curve%2C%20elegant%20calculus%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Limite","Aproximação","Limites Laterais","Notação de Limite"],content:`
<p>Chegamos à porta de entrada do <strong>cálculo</strong>, a matemática do movimento e da mudança, criada por Newton e Leibniz no século XVII. E tudo começa com uma ideia sutil e poderosa: o <strong>limite</strong>. Ela responde à pergunta “para onde um valor <em>tende</em> quando chegamos cada vez mais perto de um ponto?” — mesmo que nunca toquemos esse ponto.</p>

<h2>A ideia de chegar perto</h2>
<p>Considere a função f(x) = 2x + 1 e pergunte: para que valor f(x) se aproxima quando x se aproxima de 3? Basta observar valores cada vez mais próximos de 3:</p>
<div class='example'>
  <span class='tag'>Exemplo · aproximando-se de 3</span>
  <ul>
    <li>f(2,9) = 6,8</li>
    <li>f(2,99) = 6,98</li>
    <li>f(3,01) = 7,02</li>
    <li>f(3,001) = 7,002</li>
  </ul>
  <p>Vindo pela esquerda ou pela direita, os valores se apertam em torno de 7. Dizemos que o limite de f(x) quando x tende a 3 é 7.</p>
</div>
<p class='formula'>lim (x → 3) [ 2x + 1 ] = 7<small>lê-se “limite de 2x+1 quando x tende a 3”</small></p>

<h2>O ponto que mais importa: o limite não é o valor no ponto</h2>
<p>Aqui está a genialidade do conceito. O limite se interessa pela <em>vizinhança</em> de um ponto, não pelo ponto em si. Uma função pode nem estar definida em x = a e ainda assim ter um limite ali. É exatamente esse poder que permitirá, na próxima etapa, calcular velocidades instantâneas e inclinações — coisas que envolvem “dividir por zero” de forma controlada.</p>
<div class='example'>
  <span class='tag'>Exemplo · um buraco na função</span>
  <p>A função g(x) = (x² − 1)/(x − 1) não existe em x = 1 (daria 0/0). Mas, simplificando, g(x) = x + 1 para todo x ≠ 1. Perto de 1, os valores tendem a 2:</p>
  <p class='formula'>lim (x → 1) (x² − 1)/(x − 1) = 2<small>o limite existe, mesmo a função não estando definida em x = 1</small></p>
</div>

<h2>Limites laterais</h2>
<p>Podemos nos aproximar de um ponto por dois lados: pela <em>esquerda</em> (valores menores) e pela <em>direita</em> (valores maiores). Se os dois limites laterais concordam, o limite existe. Se discordam — como num degrau —, o limite naquele ponto não existe.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> velocidade instantânea é o limite da velocidade média quando o intervalo de tempo tende a zero.</li>
  <li><strong>Engenharia:</strong> comportamento de sistemas “no limite” (carga máxima, temperatura-limite).</li>
  <li><strong>Economia:</strong> custos e receitas marginais são limites — a variação para uma unidade a mais.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir o limite com o valor da função no ponto. São coisas diferentes: o limite pergunta “para onde tende”, não “quanto vale exatamente ali”. Uma função pode valer 5 em x = 2, mas ter limite 3 quando x tende a 2 (se houver um “salto” no ponto).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Limite é o valor de que f(x) se aproxima quando x tende a um ponto.</li>
  <li>Notação: lim (x → a) f(x).</li>
  <li>O limite depende da vizinhança, não do valor no ponto — pode existir mesmo onde a função não está definida.</li>
  <li>Se os limites laterais (esquerda e direita) discordam, o limite não existe.</li>
</ul>`,relatedIds:["mat-calculo-limites","mat-conceito-funcao"],simulation:null},{id:"mat-calculo-limites",topic:"Matemática",title:"Calculando Limites",summary:"Na prática: substituição direta, o truque para as indeterminações 0/0 e o que acontece quando x vai para o infinito.",image:"https://image.pollinations.ai/prompt/Calculating%20limits%20indeterminate%20forms%20calculus%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Substituição Direta","Indeterminação 0/0","Fatoração","Limites no Infinito"],content:`
<p>Entendida a ideia de limite, vamos calculá-los de verdade. A boa notícia é que, na maioria dos casos, o cálculo é direto; e, nos casos difíceis, há truques padronizados — muitos deles usando a fatoração do Módulo 3. Vamos aos três cenários mais importantes.</p>

<h2>1. Substituição direta</h2>
<p>Para funções “bem comportadas” (as contínuas, da próxima aula), basta substituir o valor: o limite é simplesmente f(a).</p>
<p class='formula'>lim (x → 2) [ x² + 3x ] = 2² + 3·2 = 10<small>quando dá certo substituir, o limite é o próprio valor da função</small></p>

<h2>2. A indeterminação 0/0</h2>
<p>O caso interessante é quando a substituição dá <strong>0/0</strong> — uma <em>indeterminação</em> que não significa “não existe”, mas “trabalhe mais”. A tática clássica é fatorar e cancelar o termo problemático.</p>
<div class='example'>
  <span class='tag'>Exemplo · resolvendo 0/0 por fatoração</span>
  <p>Calcule lim (x → 2) (x² − 4)/(x − 2). A substituição dá 0/0. Fatore a diferença de quadrados:</p>
  <p class='formula'>(x² − 4)/(x − 2) = (x + 2)(x − 2)/(x − 2) = x + 2<br>lim (x → 2) (x + 2) = 4</p>
  <p>Cancelando o (x − 2), a indeterminação some e o limite aparece: 4. Foi a fatoração que salvou o dia.</p>
</div>

<h2>3. Limites no infinito</h2>
<p>Também perguntamos o que acontece quando x cresce sem parar (x → ∞). Para funções racionais, o que manda é o <strong>termo de maior grau</strong> — ele domina os demais quando x fica gigante.</p>
<div class='example'>
  <span class='tag'>Exemplo · comportamento no infinito</span>
  <p>Calcule lim (x → ∞) (3x² + 5)/(x² − 1). Divida tudo pelo maior grau (x²):</p>
  <p class='formula'>(3 + 5/x²)/(1 − 1/x²)<br>quando x → ∞, os termos 5/x² e 1/x² tendem a 0<br>→ 3/1 = 3</p>
  <p>A função se estabiliza em 3 — uma <em>assíntota horizontal</em>.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> comportamento de sistemas a longo prazo (velocidade terminal, temperatura de equilíbrio).</li>
  <li><strong>Computação:</strong> a análise de eficiência de algoritmos (notação “O grande”) é o estudo do limite do tempo de execução quando os dados crescem.</li>
  <li><strong>Biologia e economia:</strong> populações e mercados que tendem a um valor de saturação.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Concluir que 0/0 significa “o limite não existe” e parar. 0/0 é uma <em>indeterminação</em>: o limite pode existir e valer qualquer coisa — só descobrimos depois de simplificar (fatorar e cancelar). Não confunda com c/0 (c ≠ 0), que sim tende ao infinito.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Função contínua: o limite é a substituição direta, f(a).</li>
  <li>Indeterminação 0/0: fatore e cancele o termo que zera.</li>
  <li>Limite no infinito de racional: domina o termo de maior grau.</li>
  <li>0/0 é indeterminação (trabalhe mais); c/0 tende ao infinito.</li>
</ul>`,relatedIds:["mat-nocao-limite","mat-fatoracao"],simulation:null},{id:"mat-continuidade",topic:"Matemática",title:"Continuidade de Funções",summary:"Uma função é contínua quando seu gráfico pode ser desenhado sem tirar o lápis do papel. Simples de sentir, essencial para todo o cálculo que vem a seguir.",image:"https://image.pollinations.ai/prompt/Continuous%20function%20smooth%20curve%20versus%20jump%20discontinuity%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Continuidade","Descontinuidade","Gráfico sem Saltos","Funções Contínuas"],content:`
<p>Intuitivamente, uma função é <strong>contínua</strong> se seu gráfico é uma linha ininterrupta — você consegue desenhá-lo <em>sem tirar o lápis do papel</em>. Não há saltos, buracos nem quebras. Esse conceito, que parece só visual, é a condição que garante que “substituir direto” funciona nos limites e é a base dos grandes teoremas do cálculo.</p>

<h2>A definição, com o limite</h2>
<p>Formalmente, uma função é contínua num ponto <em>a</em> quando três coisas acontecem juntas: a função existe em a, o limite existe em a, e os dois coincidem.</p>
<p class='formula'>lim (x → a) f(x) = f(a)<small>“para onde tende” é igual a “quanto vale ali” — sem surpresas no ponto</small></p>
<p>Ou seja: continuidade é justamente quando o limite <em>não</em> prega peças — ele bate com o valor da função. As funções que já estudamos (afim, quadrática, exponencial, seno, cosseno) são contínuas em todo o seu domínio.</p>

<h2>Quando a função “quebra”: os tipos de descontinuidade</h2>
<p>Uma função é descontínua num ponto quando falha alguma condição. As situações típicas:</p>
<ul>
  <li><strong>Buraco (removível):</strong> um único ponto faltando, como em (x²−1)/(x−1) em x = 1. O limite existe, mas a função não está definida ali.</li>
  <li><strong>Salto:</strong> a função “pula” de um valor para outro — os limites laterais discordam. Comum em funções definidas por partes (ex.: tabela de preços por faixa).</li>
  <li><strong>Assíntota (infinita):</strong> a função dispara para o infinito, como 1/x perto de x = 0.</li>
</ul>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> a posição de um objeto no tempo é contínua (ele não “teleporta”); já a carga de um capacitor pode ter saltos.</li>
  <li><strong>Economia:</strong> tabelas de impostos e tarifas por faixa criam descontinuidades (saltos) — cruzar a faixa muda o valor abruptamente.</li>
  <li><strong>Engenharia de controle:</strong> sistemas contínuos vs. digitais (discretos) exigem matemáticas diferentes, e a continuidade decide qual usar.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que toda função é contínua. Muitas do mundo real não são: preços por faixa, arredondamentos e degraus criam saltos. Reconhecer onde uma função é descontínua é tão importante quanto saber onde ela é suave — é lá que modelos e cálculos costumam falhar.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Contínua = gráfico sem saltos, buracos ou quebras (desenha sem tirar o lápis).</li>
  <li>Formalmente: lim (x → a) f(x) = f(a).</li>
  <li>Descontinuidades típicas: buraco (removível), salto e assíntota.</li>
  <li>Afim, quadrática, exponencial e trigonométricas são contínuas em todo o domínio.</li>
</ul>`,relatedIds:["mat-calculo-limites","mat-derivada-conceito"],simulation:null},{id:"mat-derivada-conceito",topic:"Matemática",title:"A Derivada: Taxa de Variação Instantânea",summary:"A grande invenção do cálculo: medir a velocidade exata num único instante, ou a inclinação de uma curva num único ponto. Um limite que muda a ciência.",image:"https://image.pollinations.ai/prompt/Derivative%20tangent%20line%20slope%20on%20a%20curve%2C%20elegant%20calculus%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Derivada","Reta Tangente","Velocidade Instantânea","Taxa de Variação"],content:`
<p>A <strong>derivada</strong> é o coração do cálculo diferencial e uma das ideias mais úteis de toda a matemática. Ela responde a uma pergunta que parecia impossível: qual é a velocidade <em>exata</em> de um objeto num único instante? Ou a inclinação de uma curva num único ponto? A resposta usa o limite que aprendemos no módulo anterior.</p>

<h2>O problema: da média para o instante</h2>
<p>A velocidade média é fácil: distância dividida por tempo. Mas ela mistura um intervalo inteiro. Para achar a velocidade <em>num instante</em>, calculamos a velocidade média num intervalo e o encolhemos cada vez mais — fazemos o intervalo de tempo tender a zero. Esse limite é a velocidade instantânea. Geometricamente, é o mesmo que passar da inclinação de uma <em>reta secante</em> (que corta a curva em dois pontos) para a de uma <strong>reta tangente</strong> (que toca em um só).</p>

<h2>A definição</h2>
<p>A derivada de f no ponto x, escrita f′(x), é o limite do quociente das diferenças quando o acréscimo h tende a zero:</p>
<p class='formula'>f′(x) = lim (h → 0) [ f(x + h) − f(x) ] / h<small>a inclinação da reta tangente ao gráfico de f no ponto x</small></p>
<div class='example'>
  <span class='tag'>Exemplo · a derivada de x² pela definição</span>
  <p>Seja f(x) = x². Vamos achar f′(x):</p>
  <p class='formula'>[ (x+h)² − x² ] / h = [ x² + 2xh + h² − x² ] / h<br>= (2xh + h²)/h = 2x + h<br>lim (h → 0) (2x + h) = 2x</p>
  <p>Logo f′(x) = 2x. No ponto x = 3, a inclinação da parábola é 2·3 = 6. Repare o produto notável (x+h)² do Módulo 3 aparecendo — tudo se conecta.</p>
</div>

<h2>Notação e significado</h2>
<p>A derivada tem várias notações equivalentes: f′(x) (Lagrange) e dy/dx (Leibniz). Seu significado é sempre o mesmo — <strong>taxa de variação instantânea</strong>: quão rápido a saída muda em relação à entrada, naquele exato ponto.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> a derivada da posição é a velocidade; a da velocidade é a aceleração. Toda a mecânica de Newton é escrita com derivadas.</li>
  <li><strong>Economia:</strong> custo e receita marginais (a variação por unidade a mais) são derivadas.</li>
  <li><strong>Engenharia e IA:</strong> otimizar sistemas e treinar redes neurais depende de derivadas (o “gradiente”).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir a derivada (uma <em>taxa</em>, a inclinação) com o valor da função (a altura do gráfico). f(3) diz “onde a curva está” em x = 3; f′(3) diz “quão inclinada” ela está ali. São informações diferentes sobre o mesmo ponto.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A derivada é a taxa de variação instantânea — a inclinação da reta tangente.</li>
  <li>Definição: f′(x) = lim (h→0) [f(x+h) − f(x)]/h.</li>
  <li>Notações: f′(x) e dy/dx.</li>
  <li>Derivada da posição = velocidade; da velocidade = aceleração.</li>
</ul>`,relatedIds:["mat-nocao-limite","mat-regras-derivacao"],simulation:{component:"derivada-tangente",subtitle:"A Derivada como Reta Tangente",about:"O ponto P fica em x₀ e o ponto Q a uma distância h. A reta tracejada (secante) passa pelos dois; a cheia (tangente) só encosta em P. O triângulo mostra a conta: inclinação da secante = Δy ÷ h. Arraste Q para perto de P e veja a secante girar até coincidir com a tangente — o primeiro gráfico mostra essa inclinação chegando ao limite f′(x₀) quando h vai a zero. O segundo gráfico é a própria derivada: a inclinação da tangente em cada x. Onde ela cruza o zero, a tangente fica horizontal: são o máximo e o mínimo locais da curva. Arraste P até lá.",icon:"activity",iconColor:"#8c8aa6",presets:[{label:"Secante longe",values:{x0:1,h:3}},{label:"Quase tangente",values:{x0:1,h:.05}},{label:"Mínimo local",values:{x0:1.3,h:1}},{label:"Máximo local",values:{x0:-1.3,h:1}}],controls:[{id:"x0",label:"Posição do ponto P (x₀)",unit:"",min:-3.5,max:3.5,default:1,step:.1},{id:"h",label:"Afastamento de Q (h → 0)",unit:"",min:.05,max:3,default:1.5,step:.05}]}},{id:"mat-regras-derivacao",topic:"Matemática",title:"Regras de Derivação",summary:"Calcular derivadas pela definição toda vez seria exaustivo. Por sorte, um punhado de regras mecânicas resolve quase tudo — a começar pela regra da potência.",image:"https://image.pollinations.ai/prompt/Derivative%20rules%20power%20rule%20chain%20rule%20calculus%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Regra da Potência","Regra do Produto","Regra da Cadeia","Derivação"],content:`
<p>Calcular toda derivada pela definição (com aquele limite) seria trabalhoso demais. Felizmente, os matemáticos destilaram o processo em <strong>regras</strong> mecânicas que se aplicam num piscar de olhos. Dominar meia dúzia delas permite derivar praticamente qualquer função.</p>

<h2>As regras básicas</h2>
<ul>
  <li><strong>Constante:</strong> a derivada de um número fixo é 0 (uma reta horizontal não tem inclinação). Se f(x) = 7, f′(x) = 0.</li>
  <li><strong>Regra da potência</strong> (a mais usada): a derivada de xⁿ é n·xⁿ⁻¹ — “desce o expoente e diminui um”.</li>
  <li><strong>Constante multiplicando:</strong> um fator constante só acompanha. A derivada de 5x³ é 5·3x² = 15x².</li>
  <li><strong>Soma:</strong> a derivada de uma soma é a soma das derivadas — deriva-se termo a termo.</li>
</ul>
<p class='formula'>d/dx (xⁿ) = n · xⁿ⁻¹<small>ex.: (x²)′ = 2x · (x³)′ = 3x² · (x)′ = 1</small></p>
<div class='example'>
  <span class='tag'>Exemplo · derivando um polinômio</span>
  <p>Seja f(x) = 4x³ − 2x² + 5x − 9. Derive termo a termo:</p>
  <p class='formula'>f′(x) = 12x² − 4x + 5<small>o −9 (constante) some; cada termo usa a regra da potência</small></p>
</div>

<h2>Regra do produto</h2>
<p>A derivada de um <em>produto</em> não é o produto das derivadas! A regra correta é:</p>
<p class='formula'>(f · g)′ = f′·g + f·g′<small>“derivada do primeiro vezes o segundo, mais o primeiro vezes a derivada do segundo”</small></p>

<h2>Regra da cadeia</h2>
<p>Para funções <em>compostas</em> (uma função dentro da outra), usamos a regra da cadeia: derivamos a de fora, mantendo a de dentro, e multiplicamos pela derivada da de dentro. Por exemplo, para (x² + 1)⁵, a derivada é 5(x² + 1)⁴ · 2x. É a regra que “desce por camadas”, como descascar uma cebola.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> derivar equações de movimento para achar velocidade e aceleração instantaneamente.</li>
  <li><strong>Machine learning:</strong> o algoritmo de treino (retropropagação) é a regra da cadeia aplicada milhões de vezes — veja a simulação de Rede Neural no acervo.</li>
  <li><strong>Engenharia:</strong> taxas de variação em circuitos, fluidos e estruturas.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que (f·g)′ = f′·g′. Está errado — use a regra do produto (f′g + fg′). Teste com f = g = x: (x·x)′ = (x²)′ = 2x, mas x′·x′ = 1·1 = 1. Não bate.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Constante: derivada 0. Potência: (xⁿ)′ = n·xⁿ⁻¹.</li>
  <li>Deriva-se somas termo a termo; constantes que multiplicam acompanham.</li>
  <li>Produto: (fg)′ = f′g + fg′ (não é o produto das derivadas).</li>
  <li>Cadeia (compostas): derive a de fora, multiplique pela derivada da de dentro.</li>
</ul>`,relatedIds:["mat-derivada-conceito","mat-aplicacoes-derivada"],simulation:null},{id:"mat-aplicacoes-derivada",topic:"Matemática",title:"Aplicações da Derivada: Máximos e Mínimos",summary:"O sinal da derivada revela se a função sobe ou desce, e onde ela atinge seus picos e vales. É a ferramenta de otimização mais poderosa da matemática.",image:"https://image.pollinations.ai/prompt/Optimization%20maximum%20minimum%20points%20on%20a%20curve%20derivative%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Crescimento e Decrescimento","Pontos Críticos","Máximos e Mínimos","Otimização"],content:`
<p>Aqui a derivada mostra todo o seu valor prático. Como ela mede a inclinação, o seu <em>sinal</em> nos diz se a função está subindo ou descendo — e onde a inclinação é zero, encontramos os picos e vales. Isso torna a derivada a ferramenta central da <strong>otimização</strong>: achar o máximo lucro, o mínimo custo, a melhor solução.</p>

<h2>O sinal da derivada conta a história</h2>
<ul>
  <li><strong>f′(x) &gt; 0:</strong> a função é <em>crescente</em> naquele trecho (inclinação positiva, sobe).</li>
  <li><strong>f′(x) &lt; 0:</strong> a função é <em>decrescente</em> (inclinação negativa, desce).</li>
  <li><strong>f′(x) = 0:</strong> a reta tangente é horizontal — um <strong>ponto crítico</strong>, candidato a máximo ou mínimo.</li>
</ul>

<h2>Encontrando máximos e mínimos</h2>
<p>Nos topos e fundos de uma curva, a tangente é horizontal, logo a derivada é zero. A receita para achar o ponto ótimo: derive a função, iguale a derivada a zero e resolva. Se a função vinha subindo (f′&gt;0) e passa a descer (f′&lt;0), o ponto é um <em>máximo</em>; o contrário é um <em>mínimo</em>.</p>
<div class='example'>
  <span class='tag'>Exemplo · o problema da cerca</span>
  <p>Com 20 m de cerca, qual retângulo tem a maior área? Se um lado é x, o outro é (10 − x), e a área é A(x) = x(10 − x) = 10x − x².</p>
  <p class='formula'>A′(x) = 10 − 2x<br>iguale a zero: 10 − 2x = 0 → x = 5</p>
  <p>O lado ótimo é 5 m, o outro também 5 m: um <strong>quadrado</strong> de 25 m². A derivada provou que, entre todos os retângulos de mesmo perímetro, o quadrado tem a maior área.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Economia e negócios:</strong> maximizar lucro, minimizar custo, achar o preço ótimo — otimização é derivada igualada a zero.</li>
  <li><strong>Engenharia:</strong> projetar embalagens com o mínimo de material, estruturas com o máximo de resistência.</li>
  <li><strong>Física:</strong> o princípio da mínima ação, que rege a natureza, é um problema de otimização.</li>
  <li><strong>Inteligência artificial:</strong> treinar um modelo é minimizar o erro — descendo a curva na direção oposta à derivada (gradiente descendente).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Assumir que todo ponto com f′ = 0 é máximo ou mínimo. Pode ser um ponto de <em>inflexão</em> (a curva “achata” e segue no mesmo sentido, como em x³ na origem). Confirme sempre olhando se a derivada troca de sinal ao redor do ponto.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>f′ &gt; 0: cresce; f′ &lt; 0: decresce; f′ = 0: ponto crítico (candidato a máximo/mínimo).</li>
  <li>Otimizar: derive, iguale a zero, resolva e classifique pelo sinal ao redor.</li>
  <li>Entre retângulos de mesmo perímetro, o quadrado maximiza a área.</li>
  <li>Otimização por derivadas move a economia, a engenharia e a IA.</li>
</ul>`,relatedIds:["mat-regras-derivacao","mat-funcao-quadratica"],simulation:null},{id:"mat-integral-conceito",topic:"Matemática",title:"A Integral: Área sob a Curva",summary:"A segunda grande ideia do cálculo: somar infinitos pedacinhos infinitamente finos para medir a área sob uma curva — algo que a geometria comum não alcança.",image:"https://image.pollinations.ai/prompt/Integral%20area%20under%20a%20curve%20with%20thin%20rectangles%20Riemann%20sum%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Integral Definida","Área sob a Curva","Soma de Riemann","Notação de Integral"],content:`
<p>Se a derivada foi a matemática de <em>cortar</em> (dividir em intervalos cada vez menores), a <strong>integral</strong> é a matemática de <em>somar</em> — juntar uma infinidade de pedacinhos minúsculos. Ela resolve um problema antigo: como medir a área de uma região com contorno curvo, que não é retângulo nem triângulo? A resposta é uma das ideias mais bonitas da matemática.</p>

<h2>O problema da área</h2>
<p>Sabemos a área de um retângulo (base × altura) e de um triângulo. Mas qual é a área sob a curva de uma função, entre dois pontos? A ideia genial: <strong>fatiar a região em muitos retângulos finos</strong>, somar suas áreas, e depois deixar a largura dos retângulos tender a zero (um limite, do Módulo 11). Quanto mais finas as fatias, melhor a aproximação — e no limite, exata.</p>

<h2>A soma de Riemann e a integral</h2>
<p>Essa soma de infinitos retângulos infinitamente finos é a <strong>integral definida</strong>. Sua notação foi criada por Leibniz — o símbolo ∫ é um “S” alongado, de <em>soma</em>:</p>
<p class='formula'>∫ₐᵇ f(x) dx = área sob a curva de f, entre x = a e x = b<small>o dx representa a largura infinitesimal de cada fatia; a e b são os limites de integração</small></p>
<div class='example'>
  <span class='tag'>Exemplo · conferindo com a geometria</span>
  <p>A área sob a reta f(x) = x, de x = 0 a x = 4, forma um triângulo de base 4 e altura 4. A geometria dá 4·4/2 = 8. A integral ∫₀⁴ x dx tem que dar o mesmo — e dá, 8, como veremos com o teorema fundamental. A integral generaliza a área para <em>qualquer</em> curva, não só as de fórmula conhecida.</p>
</div>

<h2>Área com sinal</h2>
<p>Um detalhe importante: a integral conta como <em>positiva</em> a área acima do eixo x e como <em>negativa</em> a que está abaixo. Por isso falamos em “área com sinal” — algo que faz todo sentido nas aplicações, como veremos (deslocamento para trás conta negativo).</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> a distância percorrida é a integral da velocidade; o trabalho é a integral da força.</li>
  <li><strong>Engenharia:</strong> áreas, volumes, centros de massa e momentos de estruturas.</li>
  <li><strong>Probabilidade:</strong> a área sob a curva normal (a Gaussiana do Módulo 10) é uma integral — ela dá a probabilidade.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Pensar na integral como “o contrário de nada” ou só uma fórmula abstrata. Ela é, concretamente, uma <em>soma</em> — de infinitas contribuições minúsculas. Sempre que você acumula muitos pedacinhos de algo (área, distância, massa), há uma integral por trás.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A integral soma infinitos retângulos finos para achar a área sob uma curva.</li>
  <li>Notação: ∫ₐᵇ f(x) dx (o ∫ é um “S” de soma; dx é a fatia infinitesimal).</li>
  <li>Áreas acima do eixo contam positivo; abaixo, negativo (área com sinal).</li>
  <li>É a base para distâncias, volumes, trabalho e probabilidades.</li>
</ul>`,relatedIds:["mat-teorema-fundamental","mat-nocao-limite"],simulation:{component:"integral-area",subtitle:"A Integral como Área sob a Curva",about:"A área verde ao fundo é a integral exata; os retângulos são a tentativa de medi-la somando fatias. O quadradinho branco em cada retângulo mostra em que ponto da curva a altura dele foi lida — troque entre esquerda, ponto médio e direita e veja a diferença: no ponto médio, o que sobra de um lado quase compensa o que falta do outro, e o erro cai muito mais rápido. O primeiro gráfico mostra a soma se aproximando do valor exato conforme n cresce. O segundo é a área acumulada de a até x: a curva verde é a exata, a escada é a soma dos retângulos subindo degrau a degrau. Arraste os limites a e b sobre o eixo.",icon:"activity",iconColor:"#8c8aa6",presets:[{label:"Poucos retângulos",values:{n:4}},{label:"Muitos retângulos",values:{n:60}},{label:"Intervalo simétrico",values:{a:-3,b:3,n:8}}],controls:[{id:"metodo",type:"select",label:"Altura do retângulo lida em",default:0,options:[{value:0,label:"Esquerda"},{value:1,label:"Ponto médio"},{value:2,label:"Direita"}]},{id:"a",label:"Limite inferior a",unit:"",min:-5,max:2,default:-2,step:.1},{id:"b",label:"Limite superior b",unit:"",min:-1,max:5,default:3,step:.1},{id:"n",label:"Número de retângulos",unit:"",min:1,max:60,default:8,step:1}]}},{id:"mat-teorema-fundamental",topic:"Matemática",title:"O Teorema Fundamental do Cálculo",summary:"A descoberta que une as duas metades do cálculo: integrar é o inverso de derivar. É o que transforma somar infinitos pedaços numa conta de dois passos.",image:"https://image.pollinations.ai/prompt/Fundamental%20theorem%20of%20calculus%20derivative%20integral%20inverse%2C%20elegant%20mathematics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Teorema Fundamental do Cálculo","Primitiva (Antiderivada)","Integração","Newton e Leibniz"],content:`
<p>Até aqui, derivada e integral pareciam problemas separados: uma mede inclinação, a outra mede área. O <strong>Teorema Fundamental do Cálculo</strong> revela que elas são, na verdade, <em>operações inversas</em> — como somar e subtrair, ou potência e raiz. Essa descoberta, de Newton e Leibniz, é considerada uma das maiores da história da ciência, porque transforma o cálculo de área (uma soma infinita) numa conta de dois passos.</p>

<h2>A primitiva (antiderivada)</h2>
<p>Uma <strong>primitiva</strong> de f é uma função F cuja derivada é f. É “desfazer” a derivada. Como a derivada de x² é 2x, uma primitiva de 2x é x². Para achar primitivas de potências, invertemos a regra da potência: <em>sobe</em> o expoente e divide por ele.</p>
<p class='formula'>∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C<small>o inverso da regra da potência: soma 1 ao expoente e divide por ele</small></p>
<p>O <strong>+ C</strong> (constante) aparece porque a derivada de qualquer constante é zero — então há infinitas primitivas, diferindo por uma constante.</p>

<h2>O teorema</h2>
<p>O teorema diz: para calcular a área (integral definida) de f entre a e b, basta achar uma primitiva F e calcular a diferença entre seus valores nos extremos.</p>
<p class='formula'>∫ₐᵇ f(x) dx = F(b) − F(a)<small>onde F é qualquer primitiva de f</small></p>
<div class='example'>
  <span class='tag'>Exemplo · a área do triângulo, agora pelo teorema</span>
  <p>Calcule ∫₀⁴ x dx. Uma primitiva de x é x²/2. Aplicando o teorema:</p>
  <p class='formula'>∫₀⁴ x dx = [ x²/2 ]₀⁴ = 4²/2 − 0²/2 = 16/2 = 8</p>
  <p>Exatamente a área do triângulo que a geometria previu — mas agora obtida por uma regra que funciona para <em>qualquer</em> curva, não só retas.</p>
</div>

<h2>Por que é tão profundo</h2>
<p>Somar infinitos retângulos parecia exigir um trabalho infinito. O teorema fundamental substitui essa soma infinita por <em>avaliar uma primitiva em dois pontos</em>. É a ponte que faz o cálculo funcionar na prática — e a razão de ele ter revolucionado a física, a engenharia e a economia.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física:</strong> se você conhece a velocidade a cada instante, integra para obter a posição — a base da mecânica.</li>
  <li><strong>Engenharia:</strong> calcular áreas, volumes e cargas acumuladas sem somar pedaço por pedaço.</li>
  <li><strong>Toda a ciência quantitativa:</strong> onde há uma taxa (derivada), o teorema permite recuperar o total acumulado (integral).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer o + C nas integrais indefinidas, ou errar a regra invertida da potência. Para ∫x³ dx, o resultado é x⁴/4 (soma 1 no expoente e divide por 4), não 3x². Um bom teste: derive a sua resposta — ela tem que voltar à função original.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Integrar é o inverso de derivar; a primitiva F satisfaz F′ = f.</li>
  <li>Regra da potência invertida: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C.</li>
  <li>Teorema Fundamental: ∫ₐᵇ f(x) dx = F(b) − F(a).</li>
  <li>Ele troca uma soma infinita por avaliar a primitiva em dois pontos.</li>
</ul>`,relatedIds:["mat-integral-conceito","mat-derivada-conceito"],simulation:null},{id:"mat-aplicacoes-integral",topic:"Matemática",title:"Aplicações da Integral e o Fim da Trilha",summary:"De áreas e volumes à distância percorrida e ao volume do cone, a integral acumula. E aqui a trilha se fecha: do ato de contar nos dedos ao cálculo integral.",image:"https://image.pollinations.ai/prompt/Integral%20applications%20volume%20of%20revolution%20accumulated%20area%2C%20elegant%20calculus%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Área entre Curvas","Volume","Grandezas Acumuladas","Aplicações Físicas"],content:`
<p>A integral é, no fundo, uma máquina de <strong>acumular</strong>: sempre que uma grandeza varia e queremos o total somado, é uma integral. Nesta aula final, vemos o alcance dessa ideia — e fechamos a trilha inteira de Matemática.</p>

<h2>Áreas e volumes</h2>
<p>Além da área sob uma curva, a integral calcula a <strong>área entre duas curvas</strong> (integrando a diferença entre elas) e o <strong>volume de sólidos</strong>. Aliás, aquele misterioso fator <em>um terço</em> do volume do cone e da pirâmide (Módulo 8) sai naturalmente ao integrar as fatias circulares que empilham o sólido — a integral <em>prova</em> a fórmula que antes tivemos que aceitar.</p>

<h2>Grandezas acumuladas</h2>
<p>Este é o uso mais universal. Se você tem a <em>taxa</em> de algo ao longo do tempo, a integral entrega o <em>total acumulado</em>:</p>
<ul>
  <li>Integrando a <strong>velocidade</strong>, obtém-se a <strong>distância</strong> percorrida.</li>
  <li>Integrando a <strong>vazão</strong> de água, obtém-se o <strong>volume</strong> que encheu o tanque.</li>
  <li>Integrando a <strong>potência</strong>, obtém-se a <strong>energia</strong> consumida (a conta de luz!).</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · distância a partir da velocidade</span>
  <p>Um objeto tem velocidade v(t) = 2t (acelerando). Que distância percorre entre t = 0 e t = 3 segundos? Integramos a velocidade:</p>
  <p class='formula'>distância = ∫₀³ 2t dt = [ t² ]₀³ = 3² − 0 = 9 metros</p>
  <p>A distância é a área sob o gráfico da velocidade — exatamente o que a integral mede.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Física e engenharia:</strong> trabalho, energia, centro de massa, momento de inércia — todos são integrais.</li>
  <li><strong>Economia:</strong> excedente do consumidor, valor acumulado de fluxos de caixa contínuos.</li>
  <li><strong>Probabilidade e dados:</strong> a área sob a curva normal (a Gaussiana) dá probabilidades; a estatística moderna é integral aplicada.</li>
</ul>

<h2>O fim da trilha</h2>
<p>Chegamos ao topo. Começamos contando nos dedos, com os conjuntos numéricos, e terminamos somando infinitos pedacinhos infinitamente finos para medir o contínuo. Entre um ponto e outro, você percorreu as operações, a álgebra, as funções, a geometria, a trigonometria, a probabilidade e o cálculo — a mesma jornada que a humanidade levou milênios para trilhar. Cada módulo se apoiou no anterior, e agora as peças se encaixam: a derivada e a integral, inversas, coroam tudo. Parabéns por chegar até aqui.</p>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a integral serve só para “calcular áreas”. Área é apenas a interpretação geométrica. O poder real é <em>acumular qualquer taxa</em>: distância, energia, volume, probabilidade. Onde há algo variando e um total a somar, há uma integral.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A integral acumula: área entre curvas, volumes e totais a partir de taxas.</li>
  <li>Integrar a velocidade dá a distância; a vazão dá o volume; a potência dá a energia.</li>
  <li>O volume ⅓ do cone (Módulo 8) é provado por integração.</li>
  <li>Fim da trilha: do contar nos dedos ao cálculo integral, tudo conectado.</li>
</ul>`,relatedIds:["mat-teorema-fundamental","mat-geometria-espacial"],simulation:null}],nS=[{id:"fis-grandezas-unidades",topic:"Física",title:"Grandezas Físicas e o Sistema Internacional",summary:"Física é a ciência de medir a natureza. Mas medir só faz sentido com uma unidade combinada — e o mundo inteiro concordou com um mesmo conjunto: o SI.",image:"https://image.pollinations.ai/prompt/Physics%20measurement%20units%20meter%20kilogram%20second%20SI%2C%20elegant%20scientific%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Grandeza Física","Sistema Internacional (SI)","Unidades de Base","Conversão de Unidades"],content:`
<p>A <strong>física</strong> é, antes de tudo, a ciência de <em>medir</em> a natureza e encontrar as regras por trás do que se mede. E medir é comparar: dizer que uma mesa tem “2” não significa nada — 2 metros? 2 palmos? 2 pés? Uma medida só tem sentido acompanhada de uma <strong>unidade</strong>. Para que cientistas do mundo todo se entendam, combinou-se um conjunto único de unidades: o Sistema Internacional.</p>

<h2>Grandezas físicas</h2>
<p>Uma <strong>grandeza física</strong> é tudo aquilo que pode ser medido: comprimento, tempo, massa, temperatura, velocidade, força… Toda medida tem duas partes inseparáveis — um <em>número</em> e uma <em>unidade</em>.</p>
<p class='formula'>medida = número × unidade<br>ex.: 2 m · 5 kg · 30 s · 100 °C<small>o número sozinho não informa nada; a unidade dá o significado</small></p>

<h2>O Sistema Internacional (SI)</h2>
<p>O <strong>SI</strong> define sete <em>grandezas de base</em>, cada uma com sua unidade. As três mais usadas na mecânica são:</p>
<ul>
  <li><strong>Comprimento</strong> → metro (m)</li>
  <li><strong>Massa</strong> → quilograma (kg)</li>
  <li><strong>Tempo</strong> → segundo (s)</li>
</ul>
<p>As outras quatro são temperatura (kelvin, K), corrente elétrica (ampère, A), quantidade de matéria (mol) e intensidade luminosa (candela, cd). Todas as demais unidades — velocidade (m/s), força (newton), energia (joule) — são <em>derivadas</em>, combinações das de base.</p>

<h2>Prefixos: de nanômetros a quilômetros</h2>
<p>Para não escrever números gigantes ou minúsculos, o SI usa <strong>prefixos</strong> que multiplicam a unidade por potências de 10:</p>
<p class='formula'>kilo (k) = 10³     centi (c) = 10⁻²<br>mili (m) = 10⁻³    micro (µ) = 10⁻⁶    nano (n) = 10⁻⁹<small>1 km = 1000 m · 1 cm = 0,01 m · 1 ms = 0,001 s</small></p>

<h2>Conversão de unidades</h2>
<p>Converter é multiplicar por um fator que vale 1 (a mesma quantidade escrita de dois jeitos). A conversão mais famosa da física escolar é km/h ↔ m/s:</p>
<div class='example'>
  <span class='tag'>Exemplo · de km/h para m/s</span>
  <p>Um carro a 72 km/h. Quanto é em m/s? Como 1 km = 1000 m e 1 h = 3600 s:</p>
  <p class='formula'>72 km/h = 72 × (1000 m / 3600 s) = 72 / 3,6 = 20 m/s<small>o atalho: dividir por 3,6 vai de km/h para m/s; multiplicar por 3,6 faz o contrário</small></p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia e comércio global:</strong> o SI evita erros catastróficos de conversão — uma sonda da NASA (a Mars Climate Orbiter) foi perdida em 1999 por misturar unidades imperiais com métricas.</li>
  <li><strong>Medicina:</strong> doses, pressões e exames dependem de unidades precisas.</li>
  <li><strong>Dia a dia:</strong> velocidade, consumo de energia (kWh na conta de luz), receitas e distâncias.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar ou comparar grandezas em unidades diferentes sem converter. Antes de qualquer conta, <strong>coloque tudo no SI</strong> (metros, quilogramas, segundos). Misturar km com m ou minutos com segundos é a origem de metade dos erros em problemas de física.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Toda medida tem número + unidade; o número sozinho não diz nada.</li>
  <li>O SI define 7 grandezas de base; em mecânica usamos metro, quilograma e segundo.</li>
  <li>Prefixos (k, c, m, µ, n) escalam as unidades por potências de 10.</li>
  <li>Converta tudo para o SI antes de calcular; km/h → m/s divide por 3,6.</li>
</ul>`,relatedIds:["fis-notacao-cientifica","fis-algarismos-significativos"],simulation:null},{id:"fis-notacao-cientifica",topic:"Física",title:"Notação Científica e Ordens de Grandeza",summary:"A física lida com o tamanho de átomos e a distância entre galáxias. A notação científica dá conta de ambos — e a ideia de ordem de grandeza ensina a estimar o mundo.",image:"https://image.pollinations.ai/prompt/Scientific%20notation%20powers%20of%20ten%20from%20atoms%20to%20galaxies%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Notação Científica","Potências de 10","Ordem de Grandeza","Estimativa"],content:`
<p>A física trabalha com números em escalas absurdas: um átomo mede cerca de 0,0000000001 m; a distância à estrela mais próxima é cerca de 40.000.000.000.000 km. Escrever essas fileiras de zeros é impraticável e perigoso — some ou falte um zero e a conta explode. A <strong>notação científica</strong> resolve isso, e a <strong>ordem de grandeza</strong> nos dá o superpoder de estimar qualquer coisa.</p>

<h2>A notação científica</h2>
<p>Todo número é escrito como um valor entre 1 e 10 multiplicado por uma potência de 10. O expoente conta quantas casas a vírgula anda: positivo para números grandes, negativo para pequenos.</p>
<p class='formula'>velocidade da luz = 300 000 000 m/s = 3 × 10⁸ m/s<br>tamanho do átomo ≈ 0,0000000001 m = 1 × 10⁻¹⁰ m<small>o expoente é o número de casas que a vírgula se desloca</small></p>

<h2>Contas ficam simples</h2>
<p>Multiplicar e dividir vira somar e subtrair expoentes (as propriedades das potências): você separa os números dos “dez elevado a”.</p>
<div class='example'>
  <span class='tag'>Exemplo · quantos átomos cabem?</span>
  <p>Se um fio de 0,003 m (3 × 10⁻³ m) tem átomos de 1 × 10⁻¹⁰ m, quantos átomos em fila?</p>
  <p class='formula'>(3 × 10⁻³) / (1 × 10⁻¹⁰) = 3 × 10⁻³⁻(⁻¹⁰) = 3 × 10⁷<small>trinta milhões de átomos — sem contar um por um</small></p>
</div>

<h2>Ordem de grandeza</h2>
<p>A <strong>ordem de grandeza</strong> de um número é a potência de 10 mais próxima dele — ela responde “de que <em>tamanho</em> é isto?” sem se prender ao valor exato. A massa de uma pessoa (~70 kg) é da ordem de 10² kg; a de um navio, 10⁷ kg. Comparar ordens de grandeza é comparar <em>escalas</em>.</p>
<p class='formula'>átomo: 10⁻¹⁰ m · pessoa: 10⁰ m · Terra: 10⁷ m · galáxia: 10²¹ m<small>cada salto de expoente é um mundo diferente</small></p>

<h2>Estimar como um físico (contas de Fermi)</h2>
<p>O físico Enrico Fermi era famoso por estimar quantidades absurdas com raciocínios de ordem de grandeza — como “quantos afinadores de piano há em Chicago?”. A ideia: não é preciso o número exato; a potência de 10 certa já é uma vitória. Estimar é uma das habilidades mais úteis da física e da engenharia.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Astronomia e microscopia:</strong> as únicas formas viáveis de escrever distâncias estelares e tamanhos atômicos.</li>
  <li><strong>Computação:</strong> capacidades de armazenamento, velocidades de processador, tamanhos de dados.</li>
  <li><strong>Engenharia:</strong> estimativas rápidas para checar se um projeto ou uma conta faz sentido.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Errar o sinal do expoente. Número <strong>grande</strong> → expoente positivo; número <strong>pequeno</strong> (entre 0 e 1) → expoente negativo. E, ao multiplicar potências de 10, os expoentes se <em>somam</em> — não se multiplicam.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Notação científica: número entre 1 e 10 vezes uma potência de 10.</li>
  <li>Multiplicar/dividir → somar/subtrair expoentes.</li>
  <li>Ordem de grandeza é a potência de 10 mais próxima — compara escalas.</li>
  <li>Estimar por ordem de grandeza (Fermi) é uma habilidade central da física.</li>
</ul>`,relatedIds:["fis-grandezas-unidades","fis-algarismos-significativos"],simulation:null},{id:"fis-algarismos-significativos",topic:"Física",title:"Algarismos Significativos e Medidas",summary:"Nenhuma medida é perfeita. Os algarismos significativos são a forma honesta de dizer até onde vai a certeza — e por que 2,0 não é o mesmo que 2,00.",image:"https://image.pollinations.ai/prompt/Measurement%20precision%20ruler%20caliper%20significant%20figures%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Algarismos Significativos","Precisão","Erro de Medida","Arredondamento"],content:`
<p>Aqui está uma verdade que a matemática esconde e a física expõe: <strong>nenhuma medida é exata</strong>. Toda régua, balança e cronômetro tem um limite. Os <strong>algarismos significativos</strong> são a linguagem honesta para dizer <em>até onde</em> confiamos numa medida — e usá-los corretamente separa um resultado científico de um chute com dígitos inventados.</p>

<h2>O que é um algarismo significativo</h2>
<p>Ao medir um lápis com uma régua milimetrada, você lê, digamos, 14,2 cm: o “14” você tem certeza, e o “2” é a sua melhor estimativa do último dígito (o duvidoso). Esses são os <strong>algarismos significativos</strong>: todos os dígitos certos, mais o primeiro duvidoso. Escrever 14,23718 cm com essa régua seria <em>desonesto</em> — você não mediu tudo isso.</p>

<h2>2,0 não é 2,00</h2>
<p>O número de algarismos significativos comunica a <strong>precisão</strong> do instrumento. Por isso os zeros à direita importam:</p>
<ul>
  <li><strong>2 cm</strong> → 1 algarismo (medido com pouca precisão).</li>
  <li><strong>2,0 cm</strong> → 2 algarismos (régua milimetrada).</li>
  <li><strong>2,00 cm</strong> → 3 algarismos (paquímetro, mais preciso).</li>
</ul>
<p>Os três representam “dois centímetros”, mas contam histórias diferentes sobre o instrumento usado.</p>

<h2>Operando com medidas</h2>
<p>O resultado de uma conta não pode ser mais preciso que a medida mais grosseira que entrou nela. Numa multiplicação ou divisão, o resultado fica com o número de algarismos significativos do fator menos preciso.</p>
<div class='example'>
  <span class='tag'>Exemplo · área de um terreno</span>
  <p>Um terreno mede 12,5 m (3 alg.) por 4,1 m (2 alg.). Área = 12,5 × 4,1 = 51,25 m². Mas o fator menos preciso tem 2 algarismos, então arredondamos:</p>
  <p class='formula'>Área ≈ 51 m²<small>não faz sentido reportar 51,25 — a precisão não permite os dígitos extras</small></p>
</div>

<h2>Precisão × exatidão</h2>
<p>Dois conceitos que se confundem: <strong>exatidão</strong> é quão perto do valor verdadeiro; <strong>precisão</strong> é quão pouco os valores variam entre si. Um alvo com todos os tiros juntos mas longe do centro é preciso e inexato; espalhados em torno do centro, exato e impreciso. A boa medida busca as duas.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Laboratórios e indústria:</strong> reportar resultados com a precisão real do equipamento é regra em toda ciência séria.</li>
  <li><strong>Engenharia:</strong> tolerâncias de fabricação (uma peça de 10,00 mm ± 0,01) dependem de algarismos significativos.</li>
  <li><strong>Medicina e farmácia:</strong> dosagens e exames com precisão declarada.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Copiar todos os dígitos do visor da calculadora como se fossem reais. Se você mediu com 2 algarismos, o resultado tem 2 algarismos — os outros oito dígitos do visor são <em>ilusão de precisão</em>. Arredonde para a precisão que você realmente tem.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Nenhuma medida é exata; algarismos significativos dizem até onde há certeza.</li>
  <li>Zeros à direita contam: 2,0 (2 alg.) ≠ 2,00 (3 alg.).</li>
  <li>O resultado de uma conta segue a precisão do fator menos preciso.</li>
  <li>Exatidão = perto do verdadeiro; precisão = pouca dispersão.</li>
</ul>`,relatedIds:["fis-notacao-cientifica","fis-vetores"],simulation:null},{id:"fis-vetores",topic:"Física",title:"Grandezas Escalares e Vetoriais",summary:"Algumas grandezas são só um número (a temperatura); outras precisam de direção e sentido (a força). Distinguir escalares de vetores é o alicerce de toda a mecânica.",image:"https://image.pollinations.ai/prompt/Physics%20vectors%20arrows%20direction%20magnitude%20force%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Grandeza Escalar","Grandeza Vetorial","Módulo, Direção e Sentido","Soma de Vetores"],content:`
<p>Considere duas informações: “a temperatura é 25 °C” e “o vento sopra a 30 km/h para o norte”. A primeira é um número e pronto. A segunda precisa de algo mais — uma <em>direção</em>. Essa diferença separa as grandezas físicas em duas famílias: <strong>escalares</strong> e <strong>vetoriais</strong>. Entendê-la é o alicerce de toda a mecânica que vem a seguir.</p>

<h2>Grandezas escalares</h2>
<p>Uma <strong>grandeza escalar</strong> fica completamente definida por um número (e sua unidade). Não tem direção. Exemplos: temperatura, massa, tempo, energia, volume. Somá-las é somar números comuns: 2 kg + 3 kg = 5 kg.</p>

<h2>Grandezas vetoriais</h2>
<p>Uma <strong>grandeza vetorial</strong> só fica definida com três informações: <em>módulo</em> (o valor/intensidade), <em>direção</em> (a linha de atuação) e <em>sentido</em> (para que lado). Força, velocidade, aceleração e deslocamento são vetores. Representamos um vetor por uma <strong>seta</strong>: o comprimento é o módulo, e para onde ela aponta dá direção e sentido.</p>
<p class='formula'>vetor = módulo + direção + sentido<small>uma força de “10 N” está incompleta: 10 N para onde?</small></p>

<h2>Somar vetores não é somar números</h2>
<p>Aqui está a diferença que mais pega estudantes: dois vetores não se somam como números soltos — a direção importa. Duas forças de 3 N e 4 N podem dar de 1 N a 7 N, dependendo do ângulo entre elas.</p>
<ul>
  <li><strong>Mesmo sentido:</strong> os módulos se somam (3 + 4 = 7 N).</li>
  <li><strong>Sentidos opostos:</strong> os módulos se subtraem (4 − 3 = 1 N).</li>
  <li><strong>Perpendiculares:</strong> usa-se Pitágoras → √(3² + 4²) = 5 N.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · atravessando um rio</span>
  <p>Você rema a 3 m/s perpendicular à margem, mas a correnteza empurra a 4 m/s rio abaixo. Sua velocidade real em relação à margem combina os dois vetores perpendiculares:</p>
  <p class='formula'>v = √(3² + 4²) = √25 = 5 m/s<small>você atravessa a 5 m/s, numa diagonal — não a 3 nem a 4</small></p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Toda a mecânica:</strong> força, velocidade e aceleração (das Leis de Newton em diante) são vetores — o diagrama de forças é a ferramenta nº 1 do físico.</li>
  <li><strong>Navegação e aviação:</strong> combinar a velocidade do avião com a do vento para achar a rota real.</li>
  <li><strong>Computação gráfica e jogos:</strong> posições, movimentos e colisões são todos cálculos vetoriais.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Somar módulos de vetores ignorando a direção. Duas forças de 5 N <em>não</em> resultam necessariamente em 10 N — só se apontarem para o mesmo lado. Em direções diferentes, o resultado é menor, e pode até ser zero (forças que se cancelam).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Escalar: só módulo (temperatura, massa, tempo, energia).</li>
  <li>Vetorial: módulo + direção + sentido (força, velocidade, aceleração), representada por uma seta.</li>
  <li>Vetores se somam pela geometria, não como números soltos.</li>
  <li>Perpendiculares combinam por Pitágoras; mesma direção somam ou subtraem.</li>
</ul>`,relatedIds:["fis-grandezas-unidades","leis-newton"],simulation:null},{id:"fis-cinematica-conceitos",topic:"Física",title:"Conceitos da Cinemática",summary:"A cinemática descreve o movimento sem se perguntar por que ele acontece. Tudo começa distinguindo posição de deslocamento, e velocidade de aceleração.",image:"https://image.pollinations.ai/prompt/Kinematics%20motion%20position%20displacement%20velocity%20diagram%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Referencial","Deslocamento e Distância","Velocidade Média","Aceleração"],content:`
<p>A <strong>cinemática</strong> é a parte da física que <em>descreve</em> o movimento — o quê, quando e onde — sem se preocupar com as <em>causas</em> (isso fica para a dinâmica, no próximo módulo). É a linguagem para dizer com precisão “onde algo está” e “quão rápido muda”. Comecemos pelos conceitos que sustentam tudo o que vem depois.</p>

<h2>Movimento é relativo: o referencial</h2>
<p>Você, sentado lendo isto, está parado ou a 100 000 km/h? Depende do <strong>referencial</strong>. Em relação à cadeira, você está parado; em relação ao Sol, viaja com a Terra a dezenas de milhares de km/h. Não existe movimento “absoluto” — sempre precisamos escolher um ponto de referência antes de descrever qualquer movimento.</p>

<h2>Deslocamento não é distância</h2>
<p>Duas ideias parecidas, mas diferentes:</p>
<ul>
  <li><strong>Distância percorrida</strong> (escalar): o comprimento total do caminho, sempre positivo.</li>
  <li><strong>Deslocamento</strong> (vetor, Δs): a diferença entre a posição final e a inicial, em linha reta, com direção e sentido.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · ida e volta</span>
  <p>Você corre 100 m para a frente e volta os mesmos 100 m ao ponto de partida.</p>
  <p class='formula'>distância percorrida = 200 m<br>deslocamento = 0 m<small>terminou onde começou: o deslocamento é nulo, mas você correu 200 m</small></p>
</div>

<h2>Velocidade média</h2>
<p>A <strong>velocidade média</strong> é a razão entre o deslocamento e o tempo gasto. É uma grandeza vetorial. (A “velocidade escalar média” usa a distância percorrida — por isso um radar de trânsito e um velocímetro medem coisas ligeiramente diferentes.)</p>
<p class='formula'>v_média = Δs / Δt<small>ex.: 90 km em 1,5 h → 60 km/h</small></p>

<h2>Aceleração</h2>
<p>A <strong>aceleração</strong> mede quão rápido a <em>velocidade</em> muda. Também é vetor. Um carro que sai de 0 a 30 m/s em 6 s tem aceleração média de 5 m/s² — a cada segundo, ganha 5 m/s.</p>
<p class='formula'>a_média = Δv / Δt = (v − v₀) / Δt<small>unidade no SI: m/s² (metro por segundo, por segundo)</small></p>
<p>Atenção: acelerar não é só “ir mais rápido”. Frear é aceleração (negativa), e até fazer uma curva a velocidade constante é aceleração, porque a <em>direção</em> da velocidade muda.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Radares e GPS:</strong> medem posição e velocidade média entre pontos.</li>
  <li><strong>Esportes:</strong> analisar a performance de um velocista é pura cinemática.</li>
  <li><strong>Segurança veicular:</strong> tempos de reação e frenagem dependem de velocidade e aceleração.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Tratar deslocamento e distância como sinônimos. Num trajeto de ida e volta, a distância é grande mas o deslocamento é zero. E lembre: aceleração é mudança de <em>velocidade</em>, não “velocidade alta” — um carro a 200 km/h constante tem aceleração nula.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Movimento é sempre relativo a um referencial.</li>
  <li>Distância (escalar) é o caminho todo; deslocamento (vetor) liga início e fim.</li>
  <li>Velocidade média = Δs/Δt; aceleração média = Δv/Δt (m/s²).</li>
  <li>Frear e virar também são acelerações (a velocidade é um vetor).</li>
</ul>`,relatedIds:["fis-mru","fis-vetores"],simulation:null},{id:"fis-mru",topic:"Física",title:"Movimento Retilíneo Uniforme (MRU)",summary:"O movimento mais simples que existe: velocidade constante, em linha reta. Sua função horária e seus gráficos são a base para ler qualquer movimento.",image:"https://image.pollinations.ai/prompt/Uniform%20motion%20constant%20velocity%20position%20time%20graph%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Velocidade Constante","Função Horária","Gráfico Posição-Tempo","Gráfico Velocidade-Tempo"],content:`
<p>O <strong>Movimento Retilíneo Uniforme</strong> (MRU) é o mais simples de todos: um objeto se move em linha reta com <em>velocidade constante</em> — nem acelera, nem freia. O piloto automático numa estrada reta é o exemplo perfeito. Apesar de simples, ele estabelece as ferramentas (função horária e gráficos) que usaremos em todos os movimentos.</p>

<h2>A função horária das posições</h2>
<p>No MRU, a aceleração é zero e a posição muda de forma constante com o tempo. A equação que dá a posição a cada instante é:</p>
<p class='formula'>S = S₀ + v · t<small>S₀ = posição inicial · v = velocidade (constante) · t = tempo</small></p>
<p>É uma <em>função afim</em> (do módulo de Matemática!): a velocidade é o coeficiente angular, e a posição inicial é o coeficiente linear.</p>
<div class='example'>
  <span class='tag'>Exemplo · encontro de dois carros</span>
  <p>Um carro parte da posição 0 a 20 m/s. Onde estará em 8 s?</p>
  <p class='formula'>S = 0 + 20 · 8 = 160 m</p>
</div>

<h2>Os gráficos do MRU</h2>
<p>Ler gráficos é uma habilidade central da física. No MRU:</p>
<ul>
  <li><strong>Posição × tempo (S × t):</strong> uma <em>reta inclinada</em>. A inclinação da reta é a velocidade — quanto mais íngreme, mais rápido.</li>
  <li><strong>Velocidade × tempo (v × t):</strong> uma <em>reta horizontal</em> (v é constante). E há um truque poderoso: a <strong>área</strong> sob esse gráfico é o deslocamento.</li>
</ul>
<p class='formula'>deslocamento = área sob o gráfico v × t<small>no MRU, área = v · t = um retângulo</small></p>
<p>Essa ideia de “área = deslocamento” é uma prévia da integral do cálculo — a física e a matemática se encontrando de novo.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Navegação:</strong> estimar tempo de chegada a velocidade de cruzeiro constante.</li>
  <li><strong>Esteiras e linhas de produção:</strong> movem-se a velocidade uniforme.</li>
  <li><strong>Física do som e da luz:</strong> em meios uniformes, propagam-se em MRU (velocidade constante).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir os dois gráficos. No MRU, o gráfico posição × tempo é uma reta <em>inclinada</em>, mas o velocidade × tempo é uma reta <em>horizontal</em>. Uma reta horizontal no gráfico de posição significaria objeto <em>parado</em>, não em MRU.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>MRU: velocidade constante, aceleração nula, trajetória reta.</li>
  <li>Função horária: S = S₀ + v·t (uma função afim).</li>
  <li>Gráfico S×t: reta inclinada (inclinação = velocidade).</li>
  <li>Gráfico v×t: reta horizontal; a área sob ela é o deslocamento.</li>
</ul>`,relatedIds:["fis-cinematica-conceitos","fis-mruv"],simulation:null},{id:"fis-mruv",topic:"Física",title:"Movimento Uniformemente Variado (MRUV)",summary:"Quando a velocidade muda a uma taxa constante. É o movimento do carro que acelera, do freio e da queda dos corpos — governado por três equações e uma parábola.",image:"https://image.pollinations.ai/prompt/Accelerated%20motion%20velocity%20time%20graph%20parabola%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Aceleração Constante","Equações do MRUV","Equação de Torricelli","Gráficos"],content:`
<p>O <strong>Movimento Uniformemente Variado</strong> (MRUV) é aquele em que a <em>aceleração é constante</em> — a velocidade muda sempre na mesma taxa. É o movimento de um carro acelerando, de um freio agindo e, como veremos, da queda dos corpos. Três equações descrevem tudo o que acontece nele.</p>

<h2>As três equações do MRUV</h2>
<p><strong>1. Velocidade em função do tempo</strong> — a velocidade cresce (ou decresce) linearmente:</p>
<p class='formula'>v = v₀ + a · t</p>
<p><strong>2. Posição em função do tempo</strong> (função horária) — repare o termo com t², que curva o gráfico:</p>
<p class='formula'>S = S₀ + v₀ · t + ½ · a · t²</p>
<p><strong>3. Equação de Torricelli</strong> — a mais útil quando <em>não</em> se conhece o tempo, relacionando velocidade e deslocamento diretamente:</p>
<p class='formula'>v² = v₀² + 2 · a · Δs</p>
<div class='example'>
  <span class='tag'>Exemplo · distância de frenagem</span>
  <p>Um carro a 20 m/s freia com aceleração de −5 m/s² (negativa, pois freia). Que distância percorre até parar (v = 0)? Use Torricelli, que dispensa o tempo:</p>
  <p class='formula'>0² = 20² + 2·(−5)·Δs<br>0 = 400 − 10·Δs → Δs = 40 m</p>
  <p>São 40 metros até parar — e como o v₀ está ao quadrado, dobrar a velocidade <em>quadruplica</em> essa distância. É por isso que velocidade alta é tão perigosa.</p>
</div>

<h2>Os gráficos do MRUV</h2>
<ul>
  <li><strong>Velocidade × tempo:</strong> uma <em>reta inclinada</em> (a inclinação é a aceleração). A <em>área</em> sob ela continua sendo o deslocamento.</li>
  <li><strong>Posição × tempo:</strong> uma <em>parábola</em> (por causa do termo ½at²) — a função quadrática da Matemática aparecendo na física.</li>
</ul>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança no trânsito:</strong> distância de frenagem e tempo de reação — a base das leis de velocidade.</li>
  <li><strong>Engenharia automotiva:</strong> o famoso “0 a 100 km/h” é uma medida de aceleração.</li>
  <li><strong>Queda dos corpos:</strong> a próxima aula é um caso especial de MRUV com a = g.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer o sinal da aceleração. Ao <em>frear</em>, a aceleração é <strong>negativa</strong> (aponta contra o movimento). Colocá-la positiva na equação daria um carro que acelera em vez de parar. Sinais importam em toda a cinemática.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>MRUV: aceleração constante; a velocidade varia linearmente.</li>
  <li>Equações: v = v₀ + at · S = S₀ + v₀t + ½at² · v² = v₀² + 2aΔs (Torricelli).</li>
  <li>Gráfico v×t: reta inclinada (área = deslocamento); S×t: parábola.</li>
  <li>Como v₀ é ao quadrado em Torricelli, dobrar a velocidade quadruplica a distância de frenagem.</li>
</ul>`,relatedIds:["fis-mru","fis-queda-livre"],simulation:null},{id:"fis-queda-livre",topic:"Física Clássica",title:"Queda Livre e Lançamento Vertical",summary:"A descoberta de Galileu que desafiou a intuição: sem o ar atrapalhando, uma pena e um martelo caem juntos. A gravidade acelera tudo por igual.",image:"https://image.pollinations.ai/prompt/Free%20fall%20gravity%20objects%20falling%20acceleration%209.8%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Iniciante",concepts:["Queda Livre","Aceleração da Gravidade","Lançamento Vertical","Galileu"],content:`
<p>Solte uma pedra pesada e uma leve ao mesmo tempo: qual chega primeiro ao chão? Por milênios, acreditou-se que a pesada — até <strong>Galileu Galilei</strong> mostrar que estavam errados. Na ausência do ar, <em>todos</em> os corpos caem com a mesma aceleração, independentemente da massa. A <strong>queda livre</strong> é um dos resultados mais contraintuitivos e importantes da física.</p>

<h2>A aceleração da gravidade</h2>
<p>Perto da superfície da Terra, todo corpo em queda (desprezando o ar) sofre a mesma aceleração, chamada <strong>aceleração da gravidade</strong>:</p>
<p class='formula'>g ≈ 9,8 m/s²<small>a cada segundo de queda, a velocidade aumenta ~9,8 m/s</small></p>
<p>Em 1971, o astronauta David Scott soltou um martelo e uma pena na Lua (sem ar) — e os dois tocaram o solo <em>ao mesmo tempo</em>, provando Galileu ao vivo, na TV. No ar, a pena cai devagar apenas porque a resistência do ar a segura, não por ser leve.</p>

<h2>Queda livre é um MRUV</h2>
<p>A queda livre nada mais é que um MRUV com aceleração a = g e (se largado do repouso) v₀ = 0. As mesmas três equações valem, trocando <em>a</em> por <em>g</em>:</p>
<p class='formula'>v = g · t<br>h = ½ · g · t²<br>v² = 2 · g · h<small>h é a altura de queda</small></p>
<div class='example'>
  <span class='tag'>Exemplo · queda de um prédio</span>
  <p>Uma pedra cai de 45 m de altura. Quanto tempo leva para chegar ao chão? Use h = ½·g·t², com g ≈ 10 m/s²:</p>
  <p class='formula'>45 = ½ · 10 · t² → 45 = 5t² → t² = 9 → t = 3 s</p>
  <p>Três segundos — e a velocidade ao tocar o solo seria v = g·t = 10·3 = 30 m/s.</p>
</div>

<h2>Lançamento vertical para cima</h2>
<p>Se você joga algo para cima, a gravidade age <em>contra</em> o movimento: o objeto desacelera, para por um instante no ponto mais alto (v = 0) e volta a cair, acelerando. A subida e a descida são simétricas — o tempo de subida é igual ao de descida, e a velocidade de chegada é igual à de saída.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia e esportes:</strong> saltos, quedas, trajetórias de bolas e projéteis (que combinam queda com movimento horizontal).</li>
  <li><strong>Segurança:</strong> altura de queda e velocidade de impacto — de para-quedas a airbags.</li>
  <li><strong>Astronáutica:</strong> a “gravidade zero” de uma nave é, na verdade, queda livre contínua ao redor da Terra.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que corpos pesados caem mais rápido. No vácuo, <strong>a massa não importa</strong> — todos caem juntos. No dia a dia, a diferença que vemos vem da <em>resistência do ar</em>, não do peso. E cuidado com o sinal: na subida, a gravidade é uma desaceleração.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Sem ar, todos os corpos caem com a mesma aceleração g ≈ 9,8 m/s², independentemente da massa.</li>
  <li>Queda livre é um MRUV com a = g: v = gt, h = ½gt², v² = 2gh.</li>
  <li>No lançamento vertical, subida e descida são simétricas (v = 0 no topo).</li>
  <li>A resistência do ar — não o peso — é o que faz a pena cair devagar.</li>
</ul>`,relatedIds:["fis-mruv","leis-newton"],simulation:{component:"lancamento-projetil",subtitle:"Lançamento de Projétil",about:"Dois movimentos independentes somados: na horizontal a velocidade não muda (nada empurra de lado) e na vertical a gravidade puxa o tempo todo. As marcas brancas mostram a posição a cada 0,25 s — repare nos tracinhos âmbar no chão, igualmente espaçados, enquanto na altura as marcas se apertam perto do topo. Arraste a ponta do canhão para mudar ângulo e velocidade; os tiros anteriores ficam desenhados para comparar (teste 30° e 60°: caem no mesmo lugar). Ligue a resistência do ar e o projétil vira uma bola de futebol: a curva deixa de ser simétrica, o alcance encolhe e o melhor ângulo fica abaixo de 45°.",icon:"zap",iconColor:"#8a97a6",presets:[{label:"Terra",values:{gravidade:9.8}},{label:"Lua",values:{gravidade:1.6}},{label:"Marte",values:{gravidade:3.7}},{label:"Júpiter",values:{gravidade:24.8}}],controls:[{id:"ar",type:"toggle",label:"Resistência do ar (bola de futebol)",on:1,off:0,default:0},{id:"v0",label:"Velocidade inicial (v₀)",unit:"m/s",min:5,max:50,default:25,step:1},{id:"angulo",label:"Ângulo de lançamento (θ)",unit:"°",min:5,max:85,default:45,step:1},{id:"gravidade",label:"Gravidade (Terra 9,8 · Lua 1,6)",unit:"m/s²",min:1.6,max:25,default:9.8,step:.1}]}},{id:"fis-forca-inercia",topic:"Física",title:"Força e a 1ª Lei de Newton (Inércia)",summary:"Por que um objeto em movimento não para sozinho no espaço? A resposta de Newton virou a física de cabeça para baixo: o natural não é o repouso, é manter o estado.",image:"https://image.pollinations.ai/prompt/Newton%20first%20law%20inertia%20object%20in%20motion%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Força","Inércia","1ª Lei de Newton","Equilíbrio"],content:`
<p>Na cinemática, apenas <em>descrevemos</em> o movimento. Agora entramos na <strong>dinâmica</strong>: por que os corpos se movem como se movem? A resposta está em três leis formuladas por <strong>Isaac Newton</strong> em 1687, que fundaram a física como a conhecemos. Começamos pela mais surpreendente — a lei da inércia.</p>

<h2>O que é uma força</h2>
<p>Uma <strong>força</strong> é, informalmente, um empurrão ou um puxão: a ação capaz de alterar o movimento de um corpo (ou deformá-lo). É uma grandeza <em>vetorial</em> (tem módulo, direção e sentido), e sua unidade no SI é o <strong>newton (N)</strong>. Forças raramente vêm sozinhas — o que importa é a <em>força resultante</em>, a soma vetorial de todas elas.</p>

<h2>A 1ª Lei: a inércia</h2>
<p>Antes de Newton, acreditava-se (desde Aristóteles) que o estado natural dos corpos era o repouso, e que era preciso força para manter algo em movimento. Newton, apoiado em Galileu, inverteu isso:</p>
<p class='formula'>Todo corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.<small>1ª Lei de Newton — Lei da Inércia</small></p>
<p>Ou seja: sem força resultante, quem está parado continua parado, e quem se move <em>continua se movendo em linha reta com velocidade constante</em>, para sempre. Um objeto lançado no espaço vazio nunca para. O que faz as coisas pararem na Terra é uma força (o atrito), não a “falta” de força.</p>

<h2>Inércia é a resistência à mudança</h2>
<p>A <strong>inércia</strong> é a tendência natural de um corpo de manter seu estado de movimento. Quanto maior a <em>massa</em>, maior a inércia — mais difícil é fazê-lo começar a se mover, parar ou mudar de direção. É por isso que um caminhão carregado é difícil de frear e uma bolinha, fácil.</p>
<div class='example'>
  <span class='tag'>Exemplo · a inércia no dia a dia</span>
  <ul>
    <li>Quando o ônibus freia, você é jogado para a frente — seu corpo, por inércia, quer <em>continuar</em> em movimento. O cinto de segurança é uma força que corrige isso.</li>
    <li>Uma toalha puxada bruscamente sai de sob os pratos: a inércia mantém os pratos no lugar.</li>
  </ul>
</div>

<h2>Equilíbrio</h2>
<p>Quando a força resultante é zero, o corpo está em <strong>equilíbrio</strong> — parado (equilíbrio estático) ou em MRU (equilíbrio dinâmico). Não é que não haja forças: é que elas se <em>cancelam</em>. Um lustre pendurado tem o peso puxando para baixo e a tração do fio para cima, iguais e opostas.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança veicular:</strong> cintos, airbags e encostos de cabeça existem por causa da inércia em freadas e colisões.</li>
  <li><strong>Astronáutica:</strong> uma sonda viaja anos pelo espaço sem motor ligado — pura inércia.</li>
  <li><strong>Engenharia:</strong> estruturas em equilíbrio (forças que se cancelam) são a base de toda construção.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que é preciso força para <em>manter</em> um movimento. Não é — força é necessária para <strong>mudar</strong> o movimento (acelerar, frear, virar). Um disco deslizando no gelo continua por inércia; ele só para por causa do atrito, que é uma força.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Força (em newtons) é a ação que altera o movimento; o que importa é a resultante.</li>
  <li>1ª Lei: sem força resultante, o corpo mantém repouso ou MRU (inércia).</li>
  <li>Inércia cresce com a massa — resistência à mudança de movimento.</li>
  <li>Força resultante nula = equilíbrio (as forças se cancelam).</li>
</ul>`,relatedIds:["fis-segunda-lei","fis-vetores"],simulation:null},{id:"fis-segunda-lei",topic:"Física",title:"A 2ª Lei de Newton (F = ma)",summary:"A equação mais importante da mecânica. Ela liga a causa (força) ao efeito (aceleração) e explica desde o chute numa bola até o lançamento de um foguete.",image:"https://image.pollinations.ai/prompt/Newton%20second%20law%20force%20mass%20acceleration%20F%20equals%20ma%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["2ª Lei de Newton","Força Resultante","Massa e Aceleração","Peso"],content:`
<p>A 1ª Lei diz o que acontece <em>sem</em> força resultante. A <strong>2ª Lei de Newton</strong> responde à pergunta seguinte: e quando existe uma força resultante? Ela conecta a causa (a força) ao efeito (a aceleração) numa única equação — talvez a mais importante de toda a mecânica.</p>

<h2>A equação fundamental</h2>
<p>A força resultante sobre um corpo é igual ao produto de sua massa pela aceleração que ela produz:</p>
<p class='formula'>F_resultante = m · a<small>força (N) = massa (kg) × aceleração (m/s²)</small></p>
<p>Ela diz duas coisas de uma vez: (1) quanto <em>maior a força</em>, maior a aceleração; (2) quanto <em>maior a massa</em>, menor a aceleração para a mesma força. Empurre um carrinho de bebê e um caminhão com a mesma força — o carrinho dispara, o caminhão mal se move. É a inércia (massa) resistindo.</p>
<div class='example'>
  <span class='tag'>Exemplo · empurrando um carrinho</span>
  <p>Uma força resultante de 30 N atua sobre um carrinho de 6 kg. Qual a aceleração?</p>
  <p class='formula'>a = F / m = 30 / 6 = 5 m/s²<small>a cada segundo, o carrinho ganha 5 m/s de velocidade</small></p>
</div>

<h2>Peso é uma força</h2>
<p>Um caso especial e importantíssimo: o <strong>peso</strong> de um corpo é a força com que a gravidade o puxa. Aplicando F = ma com a aceleração sendo a da gravidade (g), temos:</p>
<p class='formula'>P = m · g<small>ex.: uma pessoa de 70 kg pesa 70 × 9,8 ≈ 686 N</small></p>
<p>Cuidado com a linguagem do dia a dia: <em>massa</em> (em kg) é a quantidade de matéria e não muda; <em>peso</em> (em N) é uma força e muda com a gravidade. Na Lua, sua massa é a mesma, mas seu peso é 6 vezes menor.</p>

<h2>Por que a queda livre independe da massa</h2>
<p>A 2ª Lei explica o mistério de Galileu do módulo anterior. Na queda, a força é o peso (mg) e a aceleração é a = F/m = mg/m = g. A massa <strong>se cancela</strong>! Por isso todos os corpos caem com a mesma aceleração g, independentemente de quão pesados sejam.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Foguetes e aviação:</strong> calcular o empuxo necessário para acelerar uma dada massa.</li>
  <li><strong>Automóveis:</strong> a aceleração de um carro depende da força do motor e da massa do veículo.</li>
  <li><strong>Esportes:</strong> a força de um chute ou de uma raquetada determina a aceleração da bola.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir massa com peso. Massa (kg) é constante e mede a inércia; peso (N) é a força da gravidade e varia com o local. Dizer que alguém “pesa 70 kg” é, tecnicamente, misturar as duas — 70 kg é a massa; o peso seria ~686 N.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>2ª Lei: F_resultante = m·a — a força causa aceleração proporcional, e a massa resiste.</li>
  <li>Peso é a força da gravidade: P = m·g (em newtons).</li>
  <li>Massa (kg) é constante; peso (N) muda com a gravidade.</li>
  <li>Na queda livre, a massa se cancela (a = g) — por isso todos caem juntos.</li>
</ul>`,relatedIds:["fis-forca-inercia","fis-terceira-lei"],simulation:null},{id:"fis-terceira-lei",topic:"Física",title:"A 3ª Lei de Newton (Ação e Reação)",summary:"Toda força vem em par. Ao empurrar uma parede, a parede empurra você de volta com a mesma intensidade. É o princípio que faz foguetes voarem e você caminhar.",image:"https://image.pollinations.ai/prompt/Newton%20third%20law%20action%20reaction%20rocket%20thrust%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["3ª Lei de Newton","Ação e Reação","Pares de Forças","Propulsão"],content:`
<p>A <strong>3ª Lei de Newton</strong> revela algo profundo: forças nunca aparecem sozinhas — elas vêm sempre <em>aos pares</em>. Sempre que um corpo A exerce uma força sobre um corpo B, o corpo B exerce sobre A uma força de mesma intensidade e direção, mas sentido oposto. É a lei da ação e reação.</p>

<h2>O enunciado</h2>
<p class='formula'>A cada ação corresponde uma reação de igual intensidade e direção, mas sentido contrário.<small>as duas forças agem em corpos DIFERENTES</small></p>
<p>O detalhe mais importante, e o mais esquecido: as forças de ação e reação atuam em <strong>corpos diferentes</strong>. A ação está em B; a reação está em A. Por isso elas <em>nunca se cancelam</em> — cancelar exigiria que estivessem no mesmo corpo.</p>

<h2>Como você caminha (e como foguetes voam)</h2>
<p>A ação e reação está por trás de coisas que parecem óbvias:</p>
<ul>
  <li><strong>Caminhar:</strong> seu pé empurra o chão para trás (ação); o chão empurra você para a frente (reação). Sem esse par, você não sairia do lugar — é impossível caminhar no gelo liso justamente porque falta essa força.</li>
  <li><strong>Nadar:</strong> a mão empurra a água para trás; a água empurra você para a frente.</li>
  <li><strong>Foguetes:</strong> o motor expele gases para baixo em alta velocidade (ação); os gases empurram o foguete para cima (reação). É assim que um foguete acelera até <em>no vácuo</em>, sem nada em que “se apoiar”.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · empurrando a parede</span>
  <p>Você empurra uma parede com 50 N. A parede empurra você de volta com exatos 50 N (reação). Se você está no skate, essa reação te acelera para trás — a mesma força que move o foguete.</p>
</div>

<h2>Por que a reação não cancela a ação</h2>
<p>Se ação e reação são iguais e opostas, por que o mundo não fica parado? Porque elas agem em corpos <em>diferentes</em>. Quando você empurra uma caixa (ação nela) e ela te empurra de volta (reação em você), o que move a caixa é só a força que <em>ela</em> recebe. A reação está em você, não na caixa.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Propulsão:</strong> foguetes, aviões a jato, hélices e até o polvo — todos se movem expelindo algo para o lado oposto.</li>
  <li><strong>Engenharia estrutural:</strong> toda força aplicada a uma estrutura gera uma reação nos apoios.</li>
  <li><strong>Armas e recuo:</strong> o coice de uma arma é a reação ao disparo do projétil.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Pensar que ação e reação se cancelam. Elas <strong>não</strong> se cancelam porque atuam em corpos diferentes. Também é errado dizer que a mais forte “vence” — elas têm <em>sempre</em> a mesma intensidade, mesmo entre um caminhão e uma mosca (a mosca recebe a mesma força que exerce; só sofre muito mais por ter massa minúscula).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>3ª Lei: toda força (ação) tem um par igual e oposto (reação).</li>
  <li>Ação e reação atuam em corpos <strong>diferentes</strong> — por isso não se cancelam.</li>
  <li>Caminhar, nadar e voar de foguete são aplicações diretas.</li>
  <li>As duas forças do par têm sempre a mesma intensidade.</li>
</ul>`,relatedIds:["fis-segunda-lei","fis-atrito"],simulation:null},{id:"fis-atrito",topic:"Física",title:"Força de Atrito",summary:"A força invisível que resiste ao movimento — vilã que desperdiça energia e herói que nos deixa caminhar e frear. E a diferença crucial entre atrito estático e cinético.",image:"https://image.pollinations.ai/prompt/Friction%20force%20block%20on%20surface%20static%20kinetic%2C%20elegant%20physics%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Força de Atrito","Atrito Estático","Atrito Cinético","Coeficiente de Atrito"],content:`
<p>Se a 1ª Lei diz que o movimento continua para sempre sem força, por que tudo para na Terra? A resposta é o <strong>atrito</strong>: a força que surge entre superfícies em contato e resiste ao movimento relativo. Ele é, ao mesmo tempo, o vilão que desperdiça energia e o herói sem o qual não conseguiríamos caminhar, frear ou segurar um copo.</p>

<h2>De onde vem o atrito</h2>
<p>Nenhuma superfície é perfeitamente lisa: no microscópio, há saliências que se encaixam e ligações entre as superfícies. O atrito é a resistência a “arrastar” uma sobre a outra. Ele sempre aponta <em>contra</em> o movimento (ou a tendência de movimento) e depende de dois fatores: quão ásperas são as superfícies (o coeficiente de atrito, µ) e o quanto elas são pressionadas uma contra a outra (a força normal, N).</p>
<p class='formula'>f_atrito = µ · N<small>µ = coeficiente de atrito (depende dos materiais) · N = força normal</small></p>

<h2>Estático × cinético: a diferença crucial</h2>
<p>O atrito tem dois regimes, e confundi-los é um erro clássico:</p>
<ul>
  <li><strong>Atrito estático:</strong> age quando o objeto ainda está <em>parado</em>. Ele se ajusta para igualar a força que você faz, impedindo o movimento — até um <em>limite máximo</em>. Não tem valor fixo; tem um teto.</li>
  <li><strong>Atrito cinético:</strong> age quando o objeto já está <em>deslizando</em>. Tem valor aproximadamente constante e é <em>menor</em> que o máximo estático.</li>
</ul>
<p>Como o atrito cinético é menor que o estático máximo, o objeto “salta” ao começar a deslizar: custa mais para <em>iniciar</em> o movimento do que para <em>mantê-lo</em>. É por isso que empurrar um móvel pesado é difícil no primeiro instante e alivia logo depois.</p>
<div class='example'>
  <span class='tag'>Exemplo · o móvel que não sai do lugar</span>
  <p>Você empurra um armário com força crescente e ele não se move: o atrito estático está igualando exatamente sua força (equilíbrio). Quando você ultrapassa o limite máximo, ele destrava e desliza — e a partir daí o atrito (cinético, menor) facilita a continuidade.</p>
</div>

<h2>Vilão e herói</h2>
<p>O atrito desperdiça energia (vira calor — daí esfregar as mãos aquecer) e desgasta peças, por isso lubrificamos motores. Mas sem ele a vida seria impossível: você não caminharia (o pé escorregaria), o carro não frearia nem faria curvas, e nada ficaria empilhado. É uma força de dupla face.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Freios e pneus:</strong> projetados para <em>maximizar</em> o atrito com o chão (segurança).</li>
  <li><strong>Motores e máquinas:</strong> lubrificantes e rolamentos <em>minimizam</em> o atrito (eficiência).</li>
  <li><strong>Esportes:</strong> do chute com efeito à aderência dos tênis, tudo é atrito controlado.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que o atrito depende da área de contato ou da velocidade. Em primeira aproximação, ele depende só do coeficiente µ e da força normal N — não do tamanho da superfície. E lembre: o atrito estático <em>máximo</em> é maior que o cinético, por isso é mais difícil começar a mover do que manter em movimento.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Atrito resiste ao movimento e vale f = µ·N (coeficiente × força normal).</li>
  <li>Estático (parado) se ajusta até um máximo; cinético (deslizando) é menor e ~constante.</li>
  <li>Por isso os corpos “saltam” ao começar a deslizar.</li>
  <li>Vilão (desperdiça energia) e herói (permite caminhar, frear, empilhar).</li>
</ul>`,relatedIds:["fis-terceira-lei","leis-newton"],simulation:null},{id:"fis-trabalho-potencia",topic:"Física",title:"Trabalho e Potência",summary:"Em física, 'trabalho' tem sentido preciso: é a transferência de energia por uma força. E potência mede a rapidez com que esse trabalho é feito.",image:"https://image.pollinations.ai/prompt/Physics%20work%20force%20displacement%20energy%20transfer%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Trabalho","Força e Deslocamento","Potência","Joule e Watt"],content:`
<p>A palavra <strong>energia</strong> é a mais importante da física — é a moeda universal que permite mover, aquecer, iluminar. E a forma mais direta de transferir energia a um corpo é realizando <strong>trabalho</strong> sobre ele. Mas cuidado: em física, “trabalho” não é esforço nem cansaço; tem uma definição precisa que às vezes contraria a intuição.</p>

<h2>O trabalho de uma força</h2>
<p>O <strong>trabalho</strong> (W) de uma força mede quanta energia ela transfere ao deslocar um corpo. Depende de três coisas: a intensidade da força, o deslocamento, e o <em>ângulo</em> entre eles.</p>
<p class='formula'>W = F · d · cos θ<small>F = força · d = deslocamento · θ = ângulo entre a força e o deslocamento</small></p>
<p>Sua unidade no SI é o <strong>joule (J)</strong>. O ângulo é o pulo do gato:</p>
<ul>
  <li><strong>θ = 0°</strong> (força na direção do movimento): trabalho máximo, W = F·d.</li>
  <li><strong>θ = 90°</strong> (força perpendicular): trabalho <em>nulo</em>. Carregar uma mala andando na horizontal não realiza trabalho sobre ela — a força (para cima) é perpendicular ao movimento (horizontal)!</li>
  <li><strong>θ = 180°</strong> (força contra o movimento, como o atrito): trabalho <em>negativo</em> (retira energia).</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · empurrando uma caixa</span>
  <p>Você empurra uma caixa com 40 N na horizontal por 5 m. O trabalho realizado é:</p>
  <p class='formula'>W = 40 · 5 · cos 0° = 200 J</p>
</div>

<h2>Potência: trabalho por tempo</h2>
<p>Fazer o mesmo trabalho em menos tempo exige mais <strong>potência</strong>. Potência é a <em>rapidez</em> com que se realiza trabalho (ou se transfere energia):</p>
<p class='formula'>P = W / t<small>unidade no SI: watt (W) = joule por segundo</small></p>
<p>Subir uma escada correndo ou devagar realiza o <em>mesmo</em> trabalho (mesma altura), mas correndo exige mais potência. Uma forma equivalente e muito útil: P = F·v (força vezes velocidade) — é por isso que um carro potente atinge altas velocidades.</p>
<div class='example'>
  <span class='tag'>Exemplo · potência de um guindaste</span>
  <p>Um guindaste ergue 200 J de carga em 4 s. Sua potência é P = 200/4 = 50 W. O mesmo trabalho em 2 s exigiria 100 W — o dobro.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Conta de luz:</strong> é cobrada em kWh — potência (kW) × tempo (h) = energia consumida.</li>
  <li><strong>Motores e máquinas:</strong> a potência (cavalos ou watts) define o desempenho.</li>
  <li><strong>Esportes e fisiologia:</strong> a potência muscular determina saltos, arrancadas e levantamentos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que segurar um peso parado, ou carregá-lo na horizontal, realiza trabalho físico. Se não há deslocamento na direção da força, o trabalho é <strong>zero</strong> — por mais cansativo que seja. O cansaço é biológico; o trabalho, no sentido físico, é nulo.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Trabalho W = F·d·cos θ transfere energia; unidade joule (J).</li>
  <li>θ = 0° trabalho máximo; θ = 90° nulo; θ = 180° negativo (atrito).</li>
  <li>Potência P = W/t = F·v é a rapidez do trabalho; unidade watt (W).</li>
  <li>A conta de luz mede energia em kWh (potência × tempo).</li>
</ul>`,relatedIds:["fis-energia-cinetica","fis-segunda-lei"],simulation:null},{id:"fis-energia-cinetica",topic:"Física",title:"Energia Cinética e o Teorema Trabalho-Energia",summary:"A energia do movimento. E o teorema elegante que conecta o trabalho realizado sobre um corpo à variação da sua velocidade — explicando por que velocidade alta é tão perigosa.",image:"https://image.pollinations.ai/prompt/Kinetic%20energy%20motion%20half%20m%20v%20squared%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Energia Cinética","Teorema Trabalho-Energia","Velocidade ao Quadrado","Frenagem"],content:`
<p>Todo corpo em movimento carrega energia — a <strong>energia cinética</strong>. É ela que quebra uma janela quando a bola bate, que derruba os pinos no boliche, que causa o estrago numa colisão. Entendê-la, e o teorema que a conecta ao trabalho, é entender o próprio movimento sob a ótica da energia.</p>

<h2>A fórmula da energia cinética</h2>
<p>A energia cinética de um corpo depende de sua massa e, sobretudo, da sua velocidade — que entra <em>ao quadrado</em>:</p>
<p class='formula'>E_c = ½ · m · v²<small>massa em kg, velocidade em m/s, energia em joules</small></p>
<p>Esse <em>ao quadrado</em> tem uma consequência dramática: <strong>dobrar a velocidade quadruplica a energia cinética</strong>. Um carro a 100 km/h tem quatro vezes mais energia (e potencial de destruição) que a 50 km/h — não o dobro. É a matemática por trás das leis de trânsito.</p>

<h2>O teorema trabalho-energia</h2>
<p>Existe uma ponte linda entre o módulo anterior (trabalho) e este (energia cinética). O <strong>teorema trabalho-energia</strong> diz que o trabalho da força resultante sobre um corpo é igual à variação da sua energia cinética:</p>
<p class='formula'>W_resultante = ΔE_c = E_c,final − E_c,inicial<small>trabalho positivo acelera; trabalho negativo (atrito, freio) desacelera</small></p>
<div class='example'>
  <span class='tag'>Exemplo · a energia dissipada na frenagem</span>
  <p>Um carro de 1000 kg a 20 m/s freia até parar. Quanta energia o freio teve que dissipar?</p>
  <p class='formula'>E_c = ½ · 1000 · 20² = ½ · 1000 · 400 = 200 000 J<br>o trabalho do freio = −200 000 J (retira toda a E_c)</p>
  <p>Toda essa energia vira calor nos discos de freio. A 40 m/s, seriam 800 000 J — quatro vezes mais, exigindo uma distância de frenagem quatro vezes maior.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança no trânsito:</strong> a relação v² explica por que o limite de velocidade importa tanto para a distância de frenagem e a gravidade de acidentes.</li>
  <li><strong>Balística e engenharia de impacto:</strong> a energia de um projétil ou de uma queda é energia cinética.</li>
  <li><strong>Geração de energia:</strong> turbinas eólicas e hidrelétricas captam a energia cinética do vento e da água.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Pensar que a energia cinética cresce em proporção direta à velocidade. Ela cresce com o <strong>quadrado</strong> da velocidade. Triplicar a velocidade multiplica a energia por 9. Subestimar isso é subestimar o perigo da alta velocidade.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Energia cinética: E_c = ½mv² — a energia do movimento.</li>
  <li>A velocidade entra ao quadrado: dobrá-la quadruplica a energia.</li>
  <li>Teorema trabalho-energia: W_resultante = ΔE_c.</li>
  <li>Frear é realizar trabalho negativo, convertendo E_c em calor.</li>
</ul>`,relatedIds:["fis-trabalho-potencia","fis-energia-potencial"],simulation:null},{id:"fis-energia-potencial",topic:"Física",title:"Energia Potencial",summary:"A energia armazenada, à espera de ser liberada: a de um corpo no alto (gravitacional) e a de uma mola comprimida (elástica). Energia guardada na posição.",image:"https://image.pollinations.ai/prompt/Potential%20energy%20gravitational%20height%20spring%20elastic%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Energia Potencial Gravitacional","Energia Potencial Elástica","Nível de Referência","Energia Armazenada"],content:`
<p>Nem toda energia está em movimento. Um corpo no alto de um prédio, uma mola comprimida, um arco esticado — todos guardam energia <em>na posição</em>, prontos para liberá-la. É a <strong>energia potencial</strong>: energia armazenada, que depende de onde o corpo está, não de como ele se move.</p>

<h2>Energia potencial gravitacional</h2>
<p>Levantar um objeto exige trabalho contra a gravidade — e esse trabalho fica <em>armazenado</em> como energia potencial gravitacional, pronta para virar movimento na queda. Ela depende da massa, da gravidade e da altura:</p>
<p class='formula'>E_p = m · g · h<small>massa (kg) · gravidade (m/s²) · altura (m) = energia (J)</small></p>
<p>Um detalhe importante: a altura é medida a partir de um <strong>nível de referência</strong> que escolhemos (o chão, uma mesa…). A energia potencial não tem um “zero absoluto” — o que importa nas contas é a <em>variação</em> de altura.</p>
<div class='example'>
  <span class='tag'>Exemplo · um livro na estante</span>
  <p>Um livro de 2 kg numa prateleira a 1,5 m do chão (g ≈ 10 m/s²) tem, em relação ao chão:</p>
  <p class='formula'>E_p = 2 · 10 · 1,5 = 30 J<small>essa energia viraria movimento se o livro caísse</small></p>
</div>

<h2>Energia potencial elástica</h2>
<p>Molas, elásticos e arcos armazenam energia quando deformados. A <strong>energia potencial elástica</strong> depende da rigidez da mola (constante elástica k) e do quanto ela é esticada ou comprimida (x):</p>
<p class='formula'>E_p elástica = ½ · k · x²<small>k = constante da mola (N/m) · x = deformação (m)</small></p>
<p>Como no caso da energia cinética, a deformação entra ao quadrado: comprimir a mola o dobro armazena quatro vezes mais energia. É o princípio do arco e flecha, do trampolim e da suspensão de um carro.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Hidrelétricas:</strong> a água represada no alto guarda enorme energia potencial gravitacional, convertida em eletricidade ao cair.</li>
  <li><strong>Relógios, brinquedos e armadilhas:</strong> molas comprimidas liberam energia elástica de forma controlada.</li>
  <li><strong>Esportes:</strong> o salto com vara e o trampolim convertem energia elástica em altura.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer de definir o nível de referência da altura, ou misturá-lo no meio do problema. A energia potencial gravitacional depende de <em>qual</em> ponto você chama de “altura zero” — escolha um e mantenha-o durante toda a resolução.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Energia potencial é energia armazenada na posição.</li>
  <li>Gravitacional: E_p = mgh (depende de um nível de referência).</li>
  <li>Elástica: E_p = ½kx² (a deformação entra ao quadrado).</li>
  <li>Ela está pronta para se converter em movimento (energia cinética).</li>
</ul>`,relatedIds:["fis-energia-cinetica","fis-conservacao-energia"],simulation:null},{id:"fis-conservacao-energia",topic:"Física",title:"Conservação da Energia Mecânica",summary:"Um dos princípios mais poderosos da física: a energia não some, só se transforma. A energia potencial vira cinética e vice-versa — e o total se mantém.",image:"https://image.pollinations.ai/prompt/Conservation%20of%20energy%20roller%20coaster%20potential%20kinetic%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Conservação da Energia","Energia Mecânica","Transformação de Energia","Dissipação"],content:`
<p>Chegamos a um dos princípios mais profundos e úteis de toda a física: a <strong>conservação da energia</strong>. A energia não pode ser criada nem destruída — apenas <em>transformada</em> de uma forma em outra. Essa ideia simples resolve problemas que seriam complicadíssimos pelas forças, e revela uma harmonia escondida no movimento.</p>

<h2>A energia mecânica</h2>
<p>A <strong>energia mecânica</strong> de um corpo é a soma da sua energia cinética (do movimento) com a potencial (da posição):</p>
<p class='formula'>E_mecânica = E_c + E_p<small>a energia do movimento mais a energia armazenada</small></p>
<p>O princípio da conservação afirma: <strong>na ausência de atrito, a energia mecânica total permanece constante</strong>. As parcelas trocam entre si — a potencial vira cinética, a cinética vira potencial — mas a soma nunca muda.</p>
<p class='formula'>E_c + E_p = constante<small>quando E_p diminui, E_c aumenta na mesma medida, e vice-versa</small></p>

<h2>A dança da montanha-russa</h2>
<p>A montanha-russa é o exemplo perfeito. No ponto mais alto, o carrinho está lento (pouca E_c) mas cheio de energia potencial. Ao descer, a altura (E_p) se converte em velocidade (E_c): no fundo, ele está rapidíssimo, com quase toda a energia em forma cinética. Ao subir de novo, a velocidade vira altura. A energia apenas <em>circula</em> entre as duas formas.</p>
<div class='example'>
  <span class='tag'>Exemplo · velocidade no fim de uma queda</span>
  <p>Um objeto cai de 5 m de altura (g ≈ 10 m/s²). Com que velocidade chega ao chão? Toda a energia potencial vira cinética:</p>
  <p class='formula'>mgh = ½mv²  →  gh = ½v²  (a massa se cancela!)<br>10 · 5 = ½ · v²  →  v² = 100  →  v = 10 m/s</p>
  <p>Sem precisar de tempo nem de forças — só contabilizando energia. Repare que a massa se cancela, de novo.</p>
</div>

<h2>E quando há atrito?</h2>
<p>O atrito e a resistência do ar “roubam” energia mecânica — mas ela não desaparece: vira <strong>calor</strong>. A energia total (incluindo o calor) continua conservada; apenas a parcela <em>mecânica</em> diminui. É por isso que um pêndulo real vai perdendo altura a cada oscilação e uma bola quicando sobe cada vez menos: a energia mecânica está sendo dissipada em calor e som.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Montanhas-russas e pêndulos:</strong> projetados inteiramente com base na troca entre energia potencial e cinética.</li>
  <li><strong>Usinas de energia:</strong> hidrelétricas convertem potencial em cinética em elétrica; a conservação guia toda a engenharia energética.</li>
  <li><strong>Freios regenerativos:</strong> carros elétricos recuperam energia cinética da frenagem em vez de desperdiçá-la em calor.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a energia “se gasta” e some. Ela nunca some — só muda de forma. Quando o movimento “acaba” por atrito, a energia mecânica virou calor. Contabilizando <em>todas</em> as formas, o total é sempre o mesmo.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Energia não se cria nem se destrói: só se transforma.</li>
  <li>Energia mecânica = E_c + E_p; sem atrito, ela se conserva.</li>
  <li>Potencial ↔ cinética: uma vira a outra (montanha-russa, queda, pêndulo).</li>
  <li>Com atrito, a energia mecânica é dissipada em calor — mas o total se conserva.</li>
</ul>`,relatedIds:["fis-energia-potencial","pendulo-simples"],simulation:null},{id:"fis-quantidade-movimento",topic:"Física",title:"Quantidade de Movimento (Momento Linear)",summary:"Por que é mais difícil parar um caminhão que uma bicicleta na mesma velocidade? A quantidade de movimento mede o 'ímpeto' de um corpo — massa e velocidade juntas.",image:"https://image.pollinations.ai/prompt/Linear%20momentum%20mass%20times%20velocity%20truck%20versus%20bicycle%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Quantidade de Movimento","Momento Linear","Massa e Velocidade","Grandeza Vetorial"],content:`
<p>Um caminhão e uma bicicleta andam à mesma velocidade. Qual é mais difícil de parar? O caminhão, claro — mas por quê? A resposta está numa grandeza que o próprio Newton chamava de “quantidade de movimento”: a combinação de <em>massa</em> e <em>velocidade</em> que mede o quão difícil é alterar o movimento de um corpo.</p>

<h2>A definição</h2>
<p>A <strong>quantidade de movimento</strong> (ou momento linear, símbolo p) é o produto da massa pela velocidade:</p>
<p class='formula'>p = m · v<small>massa (kg) × velocidade (m/s) = momento (kg·m/s)</small></p>
<p>Por depender da velocidade (que é vetor), o momento também é uma <strong>grandeza vetorial</strong>: tem direção e sentido, apontando para onde o corpo se move. Um corpo parado tem momento zero; quanto mais massa ou mais velocidade, maior o momento.</p>
<div class='example'>
  <span class='tag'>Exemplo · caminhão vs. bicicleta</span>
  <p>Uma bicicleta (com ciclista) de 100 kg a 10 m/s e um caminhão de 10 000 kg a 10 m/s:</p>
  <p class='formula'>p_bicicleta = 100 · 10 = 1 000 kg·m/s<br>p_caminhão = 10 000 · 10 = 100 000 kg·m/s</p>
  <p>O caminhão tem 100 vezes mais momento — por isso é 100 vezes mais “teimoso” em parar, mesmo à mesma velocidade.</p>
</div>

<h2>Momento não é energia cinética</h2>
<p>Cuidado para não confundir com a energia cinética (E_c = ½mv²) do módulo anterior. As duas descrevem o movimento, mas de formas diferentes: o momento (mv) é <em>vetorial</em> e cresce linearmente com a velocidade; a energia cinética (½mv²) é <em>escalar</em> e cresce com o quadrado. Um mede o “ímpeto direcional”; o outro, a “capacidade de realizar trabalho”. São ferramentas complementares.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança veicular:</strong> o momento de um veículo determina a severidade de uma colisão e o dimensionamento de freios.</li>
  <li><strong>Esportes:</strong> o “peso” de um golpe no boxe ou de uma tacada depende do momento transferido.</li>
  <li><strong>Astronáutica e balística:</strong> manobras de naves e o recuo de armas são análises de momento.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Tratar momento e energia cinética como a mesma coisa. Dois objetos podem ter o mesmo momento e energias cinéticas diferentes — ou vice-versa. Momento (mv) é vetor e conserva-se em colisões; energia cinética (½mv²) é escalar e pode se perder (virar calor). São grandezas distintas.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Quantidade de movimento: p = m·v (unidade kg·m/s).</li>
  <li>É vetorial — tem a direção e o sentido da velocidade.</li>
  <li>Mais massa ou mais velocidade → mais difícil de parar.</li>
  <li>Não confundir com energia cinética (½mv², escalar): são grandezas diferentes.</li>
</ul>`,relatedIds:["fis-impulso","fis-energia-cinetica"],simulation:null},{id:"fis-impulso",topic:"Física",title:"Impulso e o Teorema do Impulso",summary:"Como uma força muda o movimento ao longo do tempo. E por que airbags, capacetes e joelhos flexionados ao pular salvam vidas — todos aplicam o mesmo princípio.",image:"https://image.pollinations.ai/prompt/Impulse%20force%20time%20airbag%20safety%20physics%2C%20elegant%20diagram%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Impulso","Teorema do Impulso","Força e Tempo","Segurança"],content:`
<p>Uma força aplicada por muito tempo muda mais o movimento do que a mesma força aplicada num instante. Essa ideia — força <em>ao longo do tempo</em> — é o <strong>impulso</strong>, e o teorema que o conecta ao momento explica por que airbags, capacetes e até a forma como caímos podem ser a diferença entre um susto e uma tragédia.</p>

<h2>O que é impulso</h2>
<p>O <strong>impulso</strong> (I) de uma força é o produto da força pelo tempo durante o qual ela atua:</p>
<p class='formula'>I = F · Δt<small>força (N) × intervalo de tempo (s) — unidade N·s, que equivale a kg·m/s</small></p>
<p>Como a força é vetor, o impulso também é. E repare: sua unidade (N·s) é a mesma do momento (kg·m/s) — não é coincidência.</p>

<h2>O teorema do impulso</h2>
<p>Aqui está a ponte poderosa: o impulso da força resultante sobre um corpo é igual à <em>variação da sua quantidade de movimento</em>.</p>
<p class='formula'>I = Δp = p_final − p_inicial<br>F · Δt = m·v_final − m·v_inicial<small>a força, agindo por um tempo, altera o momento do corpo</small></p>
<p>É, na verdade, a 2ª Lei de Newton escrita de outro jeito — mas revela algo que F = ma esconde: o papel do <strong>tempo</strong>.</p>

<h2>Por que o airbag salva vidas</h2>
<p>Numa colisão, seu corpo precisa perder todo o seu momento (parar). Essa variação de momento (Δp) é fixa — você vai parar de qualquer jeito. Mas o teorema diz que I = F·Δt = Δp. Se o Δp é fixo, então <strong>aumentar o tempo Δt reduz a força F</strong> na mesma proporção.</p>
<div class='example'>
  <span class='tag'>Exemplo · com e sem airbag</span>
  <p>É por isso que o airbag e a “zona de deformação” do carro esticam o tempo da parada de milissegundos para décimos de segundo — e assim reduzem a força sobre o corpo em dezenas de vezes. O mesmo princípio: dobrar os joelhos ao aterrissar de um pulo, um capacete que amassa, um lutador que “rola” com o golpe. Todos aumentam Δt para diminuir F.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Segurança:</strong> airbags, cintos, capacetes, redes de proteção, embalagens de choque — todos maximizam o tempo de impacto.</li>
  <li><strong>Esportes:</strong> “acompanhar” a bola com a raquete (aumentar Δt) transfere mais impulso; amortecer uma recepção evita lesões.</li>
  <li><strong>Foguetes:</strong> o impulso total do motor determina a variação de velocidade da nave.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que o airbag “absorve o impacto” reduzindo o Δp. O Δp (a variação de momento até parar) é o mesmo com ou sem airbag. O que muda é o <em>tempo</em>: o airbag aumenta Δt, e por isso reduz a força de pico — que é o que machuca.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Impulso I = F·Δt (força ao longo do tempo); mesma unidade do momento.</li>
  <li>Teorema do impulso: I = Δp — o impulso muda a quantidade de movimento.</li>
  <li>Como Δp é fixo numa parada, aumentar Δt reduz a força.</li>
  <li>Airbags, capacetes e amortecimentos aplicam exatamente esse princípio.</li>
</ul>`,relatedIds:["fis-quantidade-movimento","fis-conservacao-momento"],simulation:null},{id:"fis-conservacao-momento",topic:"Física",title:"Conservação da Quantidade de Movimento",summary:"Num sistema isolado, o momento total nunca muda — mesmo numa colisão violenta ou numa explosão. É a lei que rege colisões, o recuo de armas e a propulsão de foguetes.",image:"https://image.pollinations.ai/prompt/Conservation%20of%20momentum%20collision%20two%20objects%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Conservação do Momento","Sistema Isolado","Colisões","Recuo"],content:`
<p>Assim como a energia, a quantidade de movimento obedece a uma lei de conservação — e ela é uma das mais úteis da física. Num <strong>sistema isolado</strong> (sem forças externas resultantes), o momento total se mantém constante, aconteça o que acontecer entre os corpos: uma colisão, uma explosão, um empurrão. O que um corpo ganha, o outro perde.</p>

<h2>O princípio</h2>
<p>Considere dois corpos que interagem (colidem, se empurram). Pela 3ª Lei, eles trocam forças iguais e opostas — logo, impulsos iguais e opostos, logo variações de momento iguais e opostas. A soma se cancela:</p>
<p class='formula'>p_total antes = p_total depois<small>a soma vetorial dos momentos do sistema não muda</small></p>
<p>“Isolado” significa que forças externas (como o atrito com o chão) são desprezíveis <em>durante</em> a interação. É uma aproximação excelente para colisões rápidas.</p>

<h2>Colisões</h2>
<p>O momento sempre se conserva numa colisão. Já a energia cinética depende do tipo:</p>
<ul>
  <li><strong>Colisão elástica:</strong> a energia cinética também se conserva (bolas de bilhar ideais).</li>
  <li><strong>Colisão inelástica:</strong> parte da energia cinética vira calor e som; no caso extremo (perfeitamente inelástica), os corpos grudam e seguem juntos.</li>
</ul>
<p>Você pode explorar isso na <em>simulação de Colisões</em> deste módulo, que compara os dois casos e mostra o momento total permanecendo constante enquanto a energia varia.</p>
<div class='example'>
  <span class='tag'>Exemplo · o recuo da arma</span>
  <p>Uma arma de 2 kg dispara uma bala de 0,01 kg a 400 m/s. Antes, tudo parado (momento total zero). Depois, o momento total ainda deve ser zero:</p>
  <p class='formula'>0 = m_bala·v_bala + m_arma·v_arma<br>0 = 0,01·400 + 2·v_arma → v_arma = −2 m/s</p>
  <p>A arma recua a 2 m/s no sentido oposto — o “coice”. É o mesmo princípio que empurra um foguete: expelir massa para um lado impulsiona o resto para o outro.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Propulsão de foguetes:</strong> a conservação do momento é o que permite acelerar no vácuo, expelindo gases.</li>
  <li><strong>Análise de acidentes:</strong> peritos reconstroem colisões a partir do momento conservado.</li>
  <li><strong>Física de partículas:</strong> em aceleradores, o momento conservado permite “ver” partículas invisíveis pelos seus rastros.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Assumir que a energia cinética se conserva em toda colisão. Só nas <em>elásticas</em>. Em colisões reais (inelásticas), o momento se conserva, mas parte da energia cinética se perde em calor, som e deformação. Momento e energia são conservados sob condições diferentes.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Em um sistema isolado, o momento total se conserva (soma vetorial constante).</li>
  <li>Decorre da 3ª Lei: forças iguais e opostas → variações de momento que se cancelam.</li>
  <li>Colisões: momento sempre se conserva; energia cinética só nas elásticas.</li>
  <li>Explica o recuo de armas e a propulsão de foguetes.</li>
</ul>`,relatedIds:["fis-impulso","colisoes"],simulation:null},{id:"fis-gravitacao-universal",topic:"Física",title:"A Lei da Gravitação Universal",summary:"A ideia genial de Newton: a mesma força que faz a maçã cair é a que mantém a Lua em órbita. Uma única equação rege a queda dos corpos e a dança dos planetas.",image:"https://image.pollinations.ai/prompt/Newton%20universal%20gravitation%20apple%20moon%20force%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Gravitação Universal","Lei do Inverso do Quadrado","Constante G","Peso e Gravidade"],content:`
<p>Diz a lenda que Newton viu uma maçã cair e se perguntou: e se a mesma força que puxa a maçã se estender até a Lua? A resposta foi uma das maiores unificações da história da ciência. A <strong>Lei da Gravitação Universal</strong> mostra que a queda de uma pedra e a órbita dos planetas obedecem a uma única regra — a gravidade é <em>universal</em>.</p>

<h2>A força entre duas massas</h2>
<p>Todo par de corpos com massa se atrai com uma força que cresce com as massas e diminui com o <em>quadrado</em> da distância entre eles:</p>
<p class='formula'>F = G · (m₁ · m₂) / r²<small>G = constante da gravitação universal ≈ 6,67 × 10⁻¹¹ N·m²/kg²</small></p>
<p>A constante G é minúscula — por isso só sentimos a gravidade de objetos <em>enormes</em>, como a Terra. A atração entre você e a pessoa ao lado existe, mas é imperceptível.</p>

<h2>A lei do inverso do quadrado</h2>
<p>O termo r² tem uma consequência marcante: dobrar a distância não reduz a força pela metade, mas para <strong>um quarto</strong>. Triplicar reduz para um nono. A gravidade enfraquece rápido com a distância — mas nunca chega a zero, o que dá a ela alcance infinito, mantendo galáxias inteiras coesas.</p>
<div class='example'>
  <span class='tag'>Exemplo · a força enfraquece com o quadrado</span>
  <p>Se uma sonda a uma distância r da Terra sente força F, a que distância 3r sentirá:</p>
  <p class='formula'>F' = F / 3² = F / 9<small>três vezes mais longe, nove vezes mais fraca</small></p>
</div>

<h2>Peso é a gravidade da Terra</h2>
<p>O peso que estudamos na 2ª Lei (P = mg) é apenas um caso particular desta lei. Aplicando a gravitação universal a um corpo na superfície da Terra (massa M, raio R), a aceleração da gravidade é:</p>
<p class='formula'>g = G · M / R² ≈ 9,8 m/s²<small>é daqui que sai o famoso g — ele depende da massa e do raio do planeta</small></p>
<p>Por isso g é diferente em outros mundos: na Lua, menor massa e raio dão g ≈ 1,6 m/s² (você pesaria 6 vezes menos, mas sua massa seria a mesma).</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Astronáutica:</strong> calcular trajetórias de sondas e satélites, manobras assistidas por gravidade (estilingue gravitacional).</li>
  <li><strong>Astronomia:</strong> medir a massa de estrelas e planetas pela forma como atraem outros corpos.</li>
  <li><strong>Geofísica:</strong> variações minúsculas de g revelam petróleo, minérios e a estrutura interna da Terra.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que não há gravidade no espaço ou na órbita. A gravidade da Terra ainda é forte a 400 km de altura (onde fica a Estação Espacial) — cerca de 90% da que sentimos aqui. A sensação de “gravidade zero” dos astronautas tem outra explicação: eles estão em queda livre contínua, como veremos.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Gravitação universal: F = G·m₁·m₂/r² — todo par de massas se atrai.</li>
  <li>Inverso do quadrado: dobrar a distância divide a força por 4.</li>
  <li>O peso e o g (≈ 9,8 m/s²) saem dessa lei: g = GM/R².</li>
  <li>g varia de mundo para mundo; a massa do corpo, não.</li>
</ul>`,relatedIds:["fis-leis-kepler","orbitas-planetarias"],simulation:null},{id:"fis-leis-kepler",topic:"Física",title:"As Leis de Kepler",summary:"Antes de Newton explicar por quê, Kepler descobriu como os planetas se movem — só olhando dados. Três leis que revelaram a geometria secreta do céu.",image:"https://image.pollinations.ai/prompt/Kepler%20laws%20elliptical%20orbit%20planets%20sun%20focus%2C%20elegant%20astronomy%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Leis de Kepler","Órbitas Elípticas","Lei das Áreas","Período e Raio"],content:`
<p>Décadas antes de Newton, o astrônomo <strong>Johannes Kepler</strong> fez algo notável: analisando anos de observações meticulosas do céu (herdadas de Tycho Brahe), ele descobriu <em>como</em> os planetas se movem, sem saber ainda <em>por quê</em>. Suas três leis derrubaram a ideia milenar de que as órbitas eram círculos perfeitos e prepararam o terreno para a gravitação de Newton.</p>

<h2>1ª Lei — Órbitas elípticas</h2>
<p>Os planetas não descrevem círculos, mas <strong>elipses</strong> (ovais), com o Sol em um dos focos (não no centro). Isso significa que a distância de um planeta ao Sol <em>varia</em> ao longo do ano: há um ponto mais próximo (periélio) e um mais distante (afélio).</p>

<h2>2ª Lei — A lei das áreas</h2>
<p>A reta que liga o planeta ao Sol varre <strong>áreas iguais em tempos iguais</strong>. A consequência é linda: o planeta se move <em>mais rápido</em> quando está perto do Sol (periélio) e <em>mais devagar</em> quando está longe (afélio) — para que a área varrida seja sempre a mesma.</p>
<p class='formula'>áreas iguais em tempos iguais → mais rápido perto, mais devagar longe<small>você pode ver isso na simulação de Órbitas Planetárias deste módulo</small></p>

<h2>3ª Lei — Período e distância</h2>
<p>Há uma relação precisa entre o tempo que um planeta leva para dar uma volta (o período T) e o tamanho da sua órbita (o semieixo a): o <em>quadrado</em> do período é proporcional ao <em>cubo</em> da distância média.</p>
<p class='formula'>T² ∝ a³<small>planetas mais distantes têm anos muito mais longos</small></p>
<div class='example'>
  <span class='tag'>Exemplo · por que o ano de Netuno é tão longo</span>
  <p>Netuno está cerca de 30 vezes mais longe do Sol que a Terra. Pela 3ª lei, seu período é √(30³) ≈ 164 vezes o da Terra — ou seja, o “ano” de Netuno dura cerca de <strong>165 anos terrestres</strong>. Ele só completou uma volta desde que foi descoberto, em 1846.</p>
</div>

<h2>Newton explicou o porquê</h2>
<p>Kepler descreveu os fatos; Newton, décadas depois, <em>demonstrou</em> as três leis a partir da gravitação universal. As elipses, a lei das áreas e o T² ∝ a³ são todos consequências matemáticas de uma força que decai com o inverso do quadrado da distância. Foi a prova definitiva de que a mesma física reina na Terra e no céu.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Exploração espacial:</strong> planejar órbitas de sondas e janelas de lançamento usa as leis de Kepler.</li>
  <li><strong>Descoberta de exoplanetas:</strong> a 3ª lei relaciona o período observado à distância do planeta à sua estrela.</li>
  <li><strong>Satélites:</strong> a órbita geoestacionária (que acompanha a Terra) é calculada pela 3ª lei.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Imaginar as órbitas como círculos com o Sol no centro. Elas são <em>elipses</em> com o Sol num <em>foco</em> — descentralizado. Para a maioria dos planetas a elipse é quase circular, mas a diferença é real e é o que faz a velocidade variar ao longo do ano.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>1ª lei: órbitas são elipses com o Sol num foco.</li>
  <li>2ª lei: áreas iguais em tempos iguais (mais rápido no periélio).</li>
  <li>3ª lei: T² ∝ a³ (mais longe = ano mais longo).</li>
  <li>Newton depois provou as três a partir da gravitação universal.</li>
</ul>`,relatedIds:["fis-gravitacao-universal","orbitas-planetarias"],simulation:null},{id:"fis-orbitas-satelites",topic:"Física",title:"Órbitas, Satélites e Velocidade de Escape",summary:"Como um satélite fica no céu sem cair? A resposta de Newton: ele está sempre caindo — só que rápido o bastante para errar a Terra o tempo todo.",image:"https://image.pollinations.ai/prompt/Satellite%20orbit%20escape%20velocity%20Newton%20cannonball%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Velocidade Orbital","Queda Livre","Velocidade de Escape","Imponderabilidade"],content:`
<p>Um satélite a centenas de quilômetros de altura, onde a gravidade ainda é forte, deveria simplesmente cair. Por que não cai? Newton respondeu com um experimento mental genial — o <strong>canhão de Newton</strong> — que revela o que é, de fato, estar em órbita.</p>

<h2>O canhão de Newton: órbita é queda perpétua</h2>
<p>Imagine um canhão no topo de uma montanha altíssima. Dispare devagar: a bala cai logo ali. Mais rápido: cai mais longe. Rápido o bastante, e algo mágico acontece — a bala cai, mas a Terra se <em>curva</em> embaixo dela na mesma taxa, e ela nunca toca o chão. Ela está em <strong>órbita</strong>: em queda livre contínua, sempre “errando” a Terra.</p>
<p>Por isso os astronautas flutuam. Não é ausência de gravidade — é que eles, a estação e tudo dentro dela estão caindo <em>juntos</em>, na mesma queda livre. É a <strong>imponderabilidade</strong>, a mesma sensação de um elevador em queda.</p>

<h2>A velocidade orbital</h2>
<p>Para uma órbita circular, a gravidade deve fornecer exatamente a força centrípeta que mantém o satélite na curva. Igualando as duas, chega-se à velocidade orbital:</p>
<p class='formula'>v_orbital = √( G · M / r )<small>M = massa da Terra · r = raio da órbita (do centro da Terra)</small></p>
<p>Perto da superfície, isso dá cerca de <strong>7,9 km/s</strong> — a velocidade que a Estação Espacial mantém, dando uma volta na Terra a cada 90 minutos. Curiosamente, órbitas mais <em>baixas</em> são mais <em>rápidas</em>.</p>

<h2>A velocidade de escape</h2>
<p>E se quisermos <em>não</em> orbitar, mas escapar de vez da gravidade? Existe uma velocidade mínima para isso — a <strong>velocidade de escape</strong> — em que a energia cinética iguala a energia necessária para vencer a atração:</p>
<p class='formula'>v_escape = √( 2 · G · M / r ) = √2 × v_orbital<small>na Terra, cerca de 11,2 km/s — a velocidade dos foguetes interplanetários</small></p>
<div class='example'>
  <span class='tag'>Exemplo · por que buracos negros são negros</span>
  <p>A velocidade de escape cresce com a massa e diminui com o raio. Num buraco negro, a matéria é tão compacta que a velocidade de escape ultrapassa a da luz (300 000 km/s) — por isso nem a luz escapa. É o que a simulação de Buraco Negro deste módulo mostra.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Telecomunicações e GPS:</strong> satélites em órbitas cuidadosamente calculadas conectam o mundo.</li>
  <li><strong>Exploração espacial:</strong> atingir a velocidade de escape é o objetivo de todo foguete que vai à Lua ou a Marte.</li>
  <li><strong>Estação Espacial:</strong> a vida em órbita é um laboratório permanente de queda livre.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Pensar que os astronautas flutuam porque “não há gravidade”. Há gravidade quase igual à da superfície. Eles flutuam porque estão em <em>queda livre contínua</em> junto com a nave — orbitar é cair para sempre sem nunca chegar ao chão.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Órbita é queda livre perpétua: o satélite cai, mas a Terra se curva embaixo.</li>
  <li>A imponderabilidade dos astronautas é queda livre, não ausência de gravidade.</li>
  <li>Velocidade orbital: v = √(GM/r) (~7,9 km/s perto da Terra).</li>
  <li>Velocidade de escape: v = √(2GM/r) (~11,2 km/s); num buraco negro, supera a luz.</li>
</ul>`,relatedIds:["fis-leis-kepler","satelites-artificiais"],simulation:null},{id:"fis-pressao",topic:"Física",title:"Pressão e a Pressão nos Líquidos",summary:"Por que uma faca afiada corta e um dedo não? Por que a barragem é mais grossa embaixo? A pressão — força espalhada por uma área — responde às duas.",image:"https://image.pollinations.ai/prompt/Pressure%20force%20area%20fluid%20depth%20dam%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Pressão","Força e Área","Lei de Stevin","Pressão Atmosférica"],content:`
<p>A <strong>hidrostática</strong> estuda os fluidos (líquidos e gases) em repouso, e sua grandeza central é a <strong>pressão</strong>. Entendê-la explica coisas do dia a dia que parecem sem conexão: por que uma faca afiada corta, por que seu ouvido “estala” ao mergulhar, e por que as barragens são construídas mais grossas na base.</p>

<h2>O que é pressão</h2>
<p>A <strong>pressão</strong> é a força distribuída por uma área — o quanto de força atua em cada pedacinho de superfície:</p>
<p class='formula'>P = F / A<small>força (N) dividida por área (m²) = pressão (pascal, Pa)</small></p>
<p>A mesma força concentrada numa área pequena gera pressão enorme; espalhada numa área grande, pressão pequena. Por isso uma faca <em>afiada</em> (área minúscula no fio) corta com pouca força, enquanto raquetes de neve, distribuindo o peso por uma área grande, impedem você de afundar.</p>
<div class='example'>
  <span class='tag'>Exemplo · o poder da ponta fina</span>
  <p>Um prego recebe uma martelada de 100 N na ponta, de área 1 mm² (0,000001 m²):</p>
  <p class='formula'>P = 100 / 0,000001 = 100 000 000 Pa<small>uma pressão gigantesca — por isso a ponta penetra a madeira</small></p>
</div>

<h2>Pressão nos líquidos: a Lei de Stevin</h2>
<p>Dentro de um líquido, a pressão <em>aumenta com a profundidade</em> — o peso da coluna de líquido acima empurra. A Lei de Stevin dá essa pressão:</p>
<p class='formula'>P = P₀ + ρ · g · h<small>P₀ = pressão na superfície · ρ = densidade do líquido · h = profundidade</small></p>
<p>Dois fatos surpreendentes seguem daqui: a pressão depende só da <em>profundidade</em>, não do formato nem do volume do recipiente (um lago raso e um tubo fino à mesma profundidade têm a mesma pressão); e ela age igualmente em <em>todas as direções</em>.</p>

<h2>A pressão atmosférica</h2>
<p>Vivemos no fundo de um “oceano” de ar. O peso da atmosfera acima de nós exerce a <strong>pressão atmosférica</strong> — cerca de 100 000 Pa (1 atm) ao nível do mar. Não a sentimos porque ela age por todos os lados e nosso corpo está equilibrado com ela, mas ela é real: é o que faz um canudo funcionar e o que despressuriza a cabine de um avião.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia:</strong> barragens são mais grossas na base porque a pressão da água cresce com a profundidade.</li>
  <li><strong>Mergulho:</strong> a cada 10 m de água, a pressão aumenta cerca de 1 atm — daí os cuidados com a descompressão.</li>
  <li><strong>Medicina e meteorologia:</strong> pressão arterial e pressão atmosférica (previsão do tempo) são medidas constantes.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a pressão num líquido depende do volume ou do formato do recipiente. Depende só da <em>profundidade</em> (e da densidade). No fundo de um tubo fino cheio até 2 m, a pressão é a mesma que no fundo de uma piscina de 2 m — é o chamado “paradoxo hidrostático”.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Pressão P = F/A (unidade pascal): mesma força, área menor → pressão maior.</li>
  <li>Lei de Stevin: P = P₀ + ρgh — a pressão cresce com a profundidade.</li>
  <li>Depende da profundidade, não do formato do recipiente; age em todas as direções.</li>
  <li>A pressão atmosférica (~1 atm) é o peso do ar acima de nós.</li>
</ul>`,relatedIds:["fis-empuxo-arquimedes","fis-forca-inercia"],simulation:null},{id:"fis-empuxo-arquimedes",topic:"Física Clássica",title:"Empuxo e o Princípio de Arquimedes",summary:"Como um navio de aço flutua e uma moeda afunda? A resposta veio há 2200 anos, num grito de 'Eureka!': todo corpo mergulhado recebe um empurrão para cima.",image:"https://image.pollinations.ai/prompt/Buoyancy%20Archimedes%20principle%20floating%20ship%20displaced%20water%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Empuxo","Princípio de Arquimedes","Densidade","Flutuação"],content:`
<p>Um navio de milhares de toneladas de aço flutua; uma pequena moeda de metal afunda. Como? A resposta está numa das descobertas mais antigas e elegantes da física, atribuída a <strong>Arquimedes</strong> no século III a.C. — que, segundo a lenda, a percebeu na banheira e saiu correndo pelado gritando “Eureka!”.</p>

<h2>A força de empuxo</h2>
<p>Todo corpo mergulhado num fluido recebe uma força vertical <em>para cima</em>, chamada <strong>empuxo</strong>. Ela surge porque a pressão do fluido é maior embaixo do corpo do que em cima (Lei de Stevin), gerando uma força resultante para cima. É por isso que tudo parece mais leve dentro d'água.</p>

<h2>O Princípio de Arquimedes</h2>
<p>Arquimedes descobriu exatamente quanto vale esse empuxo: ele é igual ao <strong>peso do fluido deslocado</strong> pelo corpo.</p>
<p class='formula'>Empuxo = ρ_fluido · g · V_deslocado<small>densidade do fluido × gravidade × volume de fluido deslocado</small></p>
<p>Ou seja: quanto mais fluido o corpo “empurra para fora do caminho”, maior o empurrão para cima que ele recebe.</p>

<h2>Flutuar ou afundar: é a densidade</h2>
<p>Um corpo flutua se o empuxo consegue equilibrar seu peso. Isso acaba dependendo de uma comparação de <strong>densidades</strong>:</p>
<ul>
  <li>Corpo <strong>menos denso</strong> que o fluido → <em>flutua</em>.</li>
  <li>Corpo <strong>mais denso</strong> que o fluido → <em>afunda</em>.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · o navio de aço</span>
  <p>O aço é muito mais denso que a água — uma barra de aço afunda. Mas um navio é <em>oco</em>: sua forma engloba muito ar, e a densidade <em>média</em> (aço + ar) fica menor que a da água. O casco desloca um enorme volume de água, e o empuxo desse volume sustenta o navio. Encha o casco de água (densidade média sobe) e ele afunda — é o que acontece num naufrágio.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Navios e submarinos:</strong> submarinos afundam e sobem controlando sua densidade média (enchendo ou esvaziando tanques de água).</li>
  <li><strong>Balões e dirigíveis:</strong> flutuam no ar por conterem gás menos denso (hélio, ou ar quente).</li>
  <li><strong>Densímetros:</strong> medem a densidade de líquidos (combustível, leite, vinho) pela flutuação.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que objetos pesados sempre afundam. O que decide é a <em>densidade</em> (massa por volume), não o peso total. Um transatlântico pesa muito mais que uma pedra, mas flutua porque sua densidade média é menor que a da água. Peso não é densidade.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Empuxo é a força para cima que um fluido exerce sobre um corpo mergulhado.</li>
  <li>Princípio de Arquimedes: empuxo = peso do fluido deslocado (ρ·g·V).</li>
  <li>Flutua quem é menos denso que o fluido; afunda quem é mais denso.</li>
  <li>Navios flutuam pela densidade média baixa (casco oco cheio de ar).</li>
</ul>`,relatedIds:["fis-pressao","fis-pascal"],simulation:{component:"empuxo",subtitle:"Empuxo e Flutuação",about:"Um cubo de 1 m³ num tanque de 4 m de largura, com a 2ª Lei integrada de verdade: o bloco cai, mergulha, balança e só então assenta. Arraste o bloco para cima ou para baixo e solte. As setas finas azuis mostram de onde vem o empuxo: a pressão cresce com a profundidade, então a face de baixo é mais empurrada que a de cima. Repare que o nível da água sobe — é o volume submerso deslocando líquido, o que Arquimedes notou na banheira. Flutuando, a fração submersa é exatamente a razão entre as densidades; passe a densidade do objeto acima da do líquido e nem o empuxo máximo alcança o peso.",icon:"waves",iconColor:"#8a97a6",presets:[{label:"Isopor",values:{densidadeObjeto:100,densidadeLiquido:1e3}},{label:"Madeira",values:{densidadeObjeto:600,densidadeLiquido:1e3}},{label:"Iceberg no mar",values:{densidadeObjeto:920,densidadeLiquido:1025}},{label:"Pessoa no Mar Morto",values:{densidadeObjeto:990,densidadeLiquido:1240}},{label:"Alumínio",values:{densidadeObjeto:2700,densidadeLiquido:1e3}}],controls:[{id:"densidadeObjeto",label:"Densidade do objeto",unit:"kg/m³",min:100,max:3e3,default:600,step:10},{id:"densidadeLiquido",label:"Densidade do líquido (água = 1000)",unit:"kg/m³",min:500,max:1500,default:1e3,step:5}]}},{id:"fis-pascal",topic:"Física",title:"Princípio de Pascal e a Prensa Hidráulica",summary:"Como o pé leve de um motorista para um caminhão de toneladas? Um líquido transmite pressão por igual — e isso permite multiplicar forças de forma espetacular.",image:"https://image.pollinations.ai/prompt/Pascal%20principle%20hydraulic%20press%20lift%20car%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Princípio de Pascal","Prensa Hidráulica","Multiplicação de Força","Sistemas Hidráulicos"],content:`
<p>Ao pisar levemente no freio, você para um carro de mais de uma tonelada. Um elevador de oficina ergue esse carro com facilidade. O segredo dessas máquinas está num princípio simples sobre fluidos, descoberto por <strong>Blaise Pascal</strong> no século XVII.</p>

<h2>O Princípio de Pascal</h2>
<p>Pascal descobriu que, num fluido <em>confinado</em>, uma variação de pressão aplicada em um ponto se <strong>transmite integralmente a todos os pontos</strong> do fluido, em todas as direções.</p>
<p class='formula'>a pressão aplicada num líquido fechado chega igual a todo canto<small>o líquido é praticamente incompressível: “passa a força adiante” sem perdas</small></p>

<h2>A prensa hidráulica: multiplicando forças</h2>
<p>Esse princípio permite uma máquina espetacular. Imagine dois pistões, um pequeno e um grande, ligados por um líquido. Aperte o pistão pequeno com uma força F₁; a pressão gerada (P = F₁/A₁) chega igual ao pistão grande, produzindo uma força F₂ muito maior, proporcional à área:</p>
<p class='formula'>F₁ / A₁ = F₂ / A₂<small>a força é multiplicada na mesma proporção que as áreas</small></p>
<div class='example'>
  <span class='tag'>Exemplo · o elevador de carros</span>
  <p>Um pistão pequeno de área 1 cm² recebe 100 N. O pistão grande tem 100 cm². A força que ele produz é:</p>
  <p class='formula'>F₂ = F₁ · (A₂/A₁) = 100 · (100/1) = 10 000 N<br>suficiente para erguer um carro de ~1 tonelada</p>
</div>

<h2>Não há almoço grátis: a troca com a distância</h2>
<p>A força é multiplicada 100 vezes — mas a energia se conserva (não inventamos energia do nada). O preço: o pistão pequeno precisa descer <em>100 vezes mais</em> do que o grande sobe. Você ganha em força e perde em distância, na mesma proporção. O trabalho (força × distância) é o mesmo dos dois lados — é a conservação de energia agindo.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Freios de carro:</strong> o sistema hidráulico transmite a força do seu pé às quatro rodas, amplificada.</li>
  <li><strong>Máquinas pesadas:</strong> escavadeiras, prensas industriais, elevadores e macacos hidráulicos.</li>
  <li><strong>Odontologia e cadeiras:</strong> a cadeira do dentista sobe por um sistema hidráulico.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a prensa hidráulica “cria” força ou energia de graça. Ela multiplica a <em>força</em>, mas à custa da <em>distância</em>: o pistão de entrada percorre um caminho muito maior. A energia (trabalho) que entra é igual à que sai — a conservação de energia continua valendo.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Princípio de Pascal: pressão aplicada a um fluido confinado transmite-se igual a todos os pontos.</li>
  <li>Prensa hidráulica: F₁/A₁ = F₂/A₂ — a força é multiplicada na razão das áreas.</li>
  <li>Ganha-se em força, perde-se em distância; o trabalho se conserva.</li>
  <li>Base de freios, escavadeiras, macacos e elevadores hidráulicos.</li>
</ul>`,relatedIds:["fis-empuxo-arquimedes","fis-conservacao-energia"],simulation:null},{id:"fis-temperatura-calor",topic:"Física",title:"Temperatura e Calor",summary:"Não são a mesma coisa! Temperatura mede a agitação das moléculas; calor é energia em trânsito. Confundir os dois é o erro mais comum da física térmica.",image:"https://image.pollinations.ai/prompt/Temperature%20heat%20molecules%20thermometer%20energy%20transfer%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Temperatura","Calor","Equilíbrio Térmico","Escalas Termométricas"],content:`
<p>No dia a dia usamos “calor” e “temperatura” como sinônimos, mas na física são conceitos <em>diferentes</em> — e distinguir os dois é a chave de toda a termologia. Um deles descreve o <em>estado</em> de um corpo; o outro, uma <em>transferência de energia</em>.</p>

<h2>Temperatura: a agitação das moléculas</h2>
<p>Toda matéria é feita de partículas em constante agitação. A <strong>temperatura</strong> é a medida da energia cinética <em>média</em> dessas partículas — o quão agitadas elas estão. Esquentar um corpo é fazer suas moléculas se moverem mais rápido; esfriá-lo é o contrário.</p>

<h2>Calor: energia em trânsito</h2>
<p>O <strong>calor</strong> é a <em>energia térmica que flui</em> de um corpo mais quente para um mais frio, por causa da diferença de temperatura. Repare: um corpo não “tem” calor — ele tem energia térmica. Calor é essa energia <em>enquanto está passando</em> de um lugar para outro. Quando você segura uma xícara quente, calor flui da xícara para sua mão.</p>
<div class='example'>
  <span class='tag'>Exemplo · a faísca e a banheira</span>
  <p>Uma faísca a 1000 °C e uma banheira a 40 °C: qual tem mais energia térmica? A <strong>banheira</strong>, de longe — ela tem trilhões de vezes mais moléculas. A faísca tem temperatura altíssima (moléculas velozes), mas pouquíssima energia total (por isso não te queima). Temperatura ≠ quantidade de energia.</p>
</div>

<h2>Equilíbrio térmico</h2>
<p>Coloque dois corpos de temperaturas diferentes em contato: o calor flui do quente para o frio até que ambos atinjam a <strong>mesma temperatura</strong> — o <em>equilíbrio térmico</em>. É por isso que o café esfria e o gelo derrete: tudo tende a igualar a temperatura com o ambiente. O calor <em>nunca</em> flui espontaneamente do frio para o quente.</p>

<h2>As escalas de temperatura</h2>
<p>Medimos temperatura em escalas. As principais:</p>
<ul>
  <li><strong>Celsius (°C):</strong> 0 °C é o congelamento da água, 100 °C a fervura (ao nível do mar).</li>
  <li><strong>Kelvin (K):</strong> a escala absoluta da física. Seu zero (0 K = −273 °C) é o <em>zero absoluto</em>, onde a agitação molecular cessaria — a menor temperatura possível.</li>
</ul>
<p class='formula'>T(K) = T(°C) + 273<small>a variação de 1 °C é igual à de 1 K; só o ponto zero muda</small></p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Climatização e refrigeração:</strong> geladeiras e ar-condicionados manejam fluxos de calor.</li>
  <li><strong>Metalurgia e culinária:</strong> controlar temperatura é controlar transformações da matéria.</li>
  <li><strong>Meteorologia e medicina:</strong> temperatura corporal, febre, clima.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Dizer que um corpo “tem muito calor”. Corpos têm <em>energia térmica</em> e <em>temperatura</em>; calor é essa energia apenas <strong>em trânsito</strong>, fluindo entre corpos de temperaturas diferentes. E lembre: alta temperatura não significa muita energia (a faísca vs. a banheira).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Temperatura mede a agitação média das moléculas (energia cinética média).</li>
  <li>Calor é energia térmica em trânsito, do quente para o frio.</li>
  <li>Corpos em contato tendem ao equilíbrio térmico (mesma temperatura).</li>
  <li>Kelvin é a escala absoluta: 0 K = −273 °C (zero absoluto).</li>
</ul>`,relatedIds:["fis-calor-mudancas","gases-ideais"],simulation:null},{id:"fis-dilatacao",topic:"Física",title:"Dilatação Térmica",summary:"Aquecidos, os materiais incham; resfriados, encolhem. Por isso pontes têm juntas, trilhos têm folgas e o termômetro funciona — a matéria mede a própria temperatura.",image:"https://image.pollinations.ai/prompt/Thermal%20expansion%20bridge%20gap%20rails%20metal%20heating%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Dilatação Térmica","Coeficiente de Dilatação","Dilatação Linear","Anomalia da Água"],content:`
<p>Quase todos os materiais <strong>dilatam</strong> (aumentam de tamanho) quando aquecidos e <strong>contraem</strong> quando resfriados. A razão é microscópica: com mais temperatura, as moléculas se agitam mais e se afastam um pouco umas das outras, e o corpo inteiro incha. Esse efeito, minúsculo mas real, tem consequências enormes na engenharia.</p>

<h2>A dilatação linear</h2>
<p>Para um objeto comprido (um trilho, uma barra), o que mais importa é o aumento no comprimento. A <strong>dilatação linear</strong> é proporcional ao comprimento inicial, à variação de temperatura e a um coeficiente que depende do material:</p>
<p class='formula'>ΔL = L₀ · α · ΔT<small>L₀ = comprimento inicial · α = coeficiente de dilatação · ΔT = variação de temperatura</small></p>
<p>O coeficiente α é diferente para cada material — o alumínio dilata mais que o aço, e o vidro comum mais que o vidro temperado. Por isso jogar água quente num copo frio pode trincá-lo: as partes esquentam e dilatam de forma desigual.</p>
<div class='example'>
  <span class='tag'>Exemplo · o trilho de ferro</span>
  <p>Um trilho de aço de 30 m (α ≈ 1,2 × 10⁻⁵/°C) num dia que esquenta 40 °C dilata:</p>
  <p class='formula'>ΔL = 30 · (1,2 × 10⁻⁵) · 40 ≈ 0,014 m = 1,4 cm<small>parece pouco, mas somado por quilômetros de via, exige folgas</small></p>
</div>

<h2>Por que o termômetro funciona</h2>
<p>A dilatação é a base do termômetro de mercúrio ou álcool: o líquido dentro do tubo dilata mais que o vidro, subindo pela coluna em proporção exata à temperatura. A matéria, ao mudar de tamanho, <em>mede a própria temperatura</em>.</p>

<h2>A anomalia da água</h2>
<p>A água é uma exceção fascinante. Entre 0 °C e 4 °C, ela se comporta ao contrário: <em>contrai</em> ao esquentar (e dilata ao esfriar). Por isso o gelo é <em>menos denso</em> que a água líquida e flutua — e os lagos congelam de cima para baixo, deixando a água líquida (e a vida) protegida embaixo da camada de gelo. Sem essa anomalia, a vida aquática em climas frios seria impossível.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Engenharia civil:</strong> as <em>juntas de dilatação</em> em pontes, viadutos e calçadas evitam que a estrutura racha no calor.</li>
  <li><strong>Ferrovias:</strong> folgas entre trilhos (ou trilhos soldados sob tensão controlada) absorvem a dilatação.</li>
  <li><strong>Termostatos:</strong> lâminas bimetálicas que curvam com a temperatura ligam e desligam aparelhos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que um furo ou anel dilata “para dentro”, diminuindo, quando aquecido. Não — um orifício num material aquecido <em>aumenta</em>, como se fosse feito do mesmo material. É por isso que aquecer a tampa de metal de um pote de vidro a solta: o metal dilata mais que o vidro.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Materiais dilatam ao aquecer e contraem ao resfriar (moléculas se afastam).</li>
  <li>Dilatação linear: ΔL = L₀·α·ΔT; α depende do material.</li>
  <li>É a base do termômetro e exige juntas de dilatação em obras e trilhos.</li>
  <li>A água é anômala (0–4 °C): por isso o gelo flutua e lagos congelam por cima.</li>
</ul>`,relatedIds:["fis-temperatura-calor","fis-calor-mudancas"],simulation:null},{id:"fis-calor-mudancas",topic:"Física",title:"Calor Sensível, Latente e Mudanças de Estado",summary:"Por que a água demora tanto para ferver, e por que a temperatura para de subir enquanto o gelo derrete? Duas formas de o calor agir sobre a matéria.",image:"https://image.pollinations.ai/prompt/Heat%20phase%20change%20ice%20water%20steam%20specific%20heat%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Calor Sensível","Calor Específico","Calor Latente","Mudança de Estado"],content:`
<p>Quando você fornece calor a um corpo, duas coisas <em>diferentes</em> podem acontecer: ou a temperatura sobe, ou o corpo muda de estado (derrete, ferve) sem mudar de temperatura. Entender essa distinção explica por que a água é tão especial e como funcionam desde o suor até o clima do planeta.</p>

<h2>Calor sensível: mudando a temperatura</h2>
<p>O <strong>calor sensível</strong> é o que faz a temperatura de um corpo variar. A quantidade necessária depende da massa, da variação de temperatura desejada, e de uma propriedade do material — o <strong>calor específico</strong> (c):</p>
<p class='formula'>Q = m · c · ΔT<small>m = massa · c = calor específico do material · ΔT = variação de temperatura</small></p>
<p>O calor específico diz o quanto um material “resiste” a mudar de temperatura. A <strong>água</strong> tem um calor específico altíssimo (c = 1 cal/g°C, ou 4180 J/kg°C): ela precisa de muita energia para esquentar e demora muito para esfriar. É por isso que o litoral tem clima mais ameno (o mar armazena calor) e que a água é usada para refrigerar motores.</p>
<div class='example'>
  <span class='tag'>Exemplo · aquecendo água</span>
  <p>Quanto calor para elevar 2 kg de água de 20 °C a 80 °C? (c = 4180 J/kg°C)</p>
  <p class='formula'>Q = 2 · 4180 · (80 − 20) = 2 · 4180 · 60 ≈ 501 600 J</p>
</div>

<h2>Calor latente: mudando de estado</h2>
<p>Aqui está o fato surpreendente: durante uma <em>mudança de estado</em> (fusão, ebulição), o corpo absorve calor mas a <strong>temperatura fica constante</strong>. Toda a energia vai para reorganizar as moléculas (quebrar as ligações do sólido, por exemplo), não para agitá-las mais. Esse é o <strong>calor latente</strong> (L):</p>
<p class='formula'>Q = m · L<small>L = calor latente (energia por unidade de massa para mudar de estado)</small></p>
<p>É por isso que a temperatura de uma panela de água em fervura fica travada em 100 °C por mais que você aumente o fogo — toda a energia extra está virando vapor, não subindo a temperatura.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Suor:</strong> ao evaporar, o suor absorve calor latente do seu corpo — é assim que você se resfria.</li>
  <li><strong>Clima:</strong> o alto calor específico da água (oceanos) estabiliza o clima do planeta.</li>
  <li><strong>Refrigeração e culinária:</strong> geladeiras usam a evaporação/condensação de um fluido; cozinhar no vapor aproveita o calor latente.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que fornecer mais calor sempre aumenta a temperatura. Durante uma mudança de estado, a temperatura <strong>não muda</strong> — o calor está sendo usado para transformar sólido em líquido ou líquido em vapor. Colocar fogo alto não ferve a água “mais quente”; só a evapora mais rápido, ainda a 100 °C.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Calor sensível muda a temperatura: Q = m·c·ΔT.</li>
  <li>Calor específico (c) mede a resistência a mudar de temperatura; a água tem c alto.</li>
  <li>Calor latente muda o estado com temperatura constante: Q = m·L.</li>
  <li>O suor resfria por calor latente; os oceanos estabilizam o clima por calor específico.</li>
</ul>`,relatedIds:["fis-temperatura-calor","fis-leis-termodinamica"],simulation:null},{id:"fis-leis-termodinamica",topic:"Física",title:"As Leis da Termodinâmica",summary:"As regras que governam o calor, o trabalho e a energia — e que ditam por que motores existem, por que o tempo só anda para a frente e por que o moto-perpétuo é impossível.",image:"https://image.pollinations.ai/prompt/Laws%20of%20thermodynamics%20heat%20engine%20entropy%20energy%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["1ª Lei da Termodinâmica","2ª Lei e Entropia","Máquinas Térmicas","Moto-Perpétuo"],content:`
<p>A <strong>termodinâmica</strong> nasceu da Revolução Industrial, do esforço para entender e melhorar as máquinas a vapor. Suas leis estão entre as mais fundamentais e universais de toda a física — valem de um motor de carro a uma estrela, do metabolismo de uma célula ao destino do universo.</p>

<h2>A 1ª Lei: conservação da energia com calor</h2>
<p>A 1ª Lei é a conservação de energia (do Mód. 4) estendida ao calor. Ela diz que a energia interna de um sistema (a energia de suas moléculas) muda pelo calor que ele recebe menos o trabalho que ele realiza:</p>
<p class='formula'>ΔU = Q − W<small>ΔU = variação da energia interna · Q = calor recebido · W = trabalho realizado</small></p>
<p>Um gás que recebe calor pode usar essa energia para esquentar (aumentar U) ou para empurrar um pistão (realizar trabalho W) — é assim que o calor vira movimento num motor. Energia não some: apenas troca de forma.</p>

<h2>A 2ª Lei: o sentido do tempo</h2>
<p>A 1ª Lei permite, mas a 2ª Lei <em>proíbe</em>. Ela afirma que o calor flui espontaneamente do quente para o frio, nunca o contrário, e introduz a grandeza mais misteriosa da física: a <strong>entropia</strong>, uma medida da desordem. Em qualquer processo natural, a entropia total do universo <em>sempre aumenta</em>.</p>
<p class='formula'>a entropia do universo nunca diminui<small>a desordem tende a crescer; a organização exige gasto de energia</small></p>
<p>É a 2ª Lei que dá o “sentido” ao tempo: um copo se quebra, mas nunca se remonta sozinho; o perfume se espalha pela sala, mas nunca volta ao frasco. O passado é o estado mais organizado; o futuro, o mais desordenado.</p>

<h2>Máquinas térmicas e o moto-perpétuo</h2>
<p>Uma <strong>máquina térmica</strong> (motor, turbina) converte calor em trabalho. Mas a 2ª Lei impõe um limite cruel: <em>nenhuma</em> máquina converte todo o calor em trabalho — sempre sobra calor desperdiçado para uma fonte fria. Por isso o rendimento de um motor é sempre menor que 100%.</p>
<div class='example'>
  <span class='tag'>Exemplo · por que o moto-perpétuo é impossível</span>
  <p>Uma máquina que funcionasse para sempre sem energia (moto-perpétuo de 1ª espécie) violaria a 1ª Lei (criaria energia). Uma que convertesse 100% do calor em trabalho (2ª espécie) violaria a 2ª Lei. As duas leis, juntas, provam que <strong>moto-perpétuo é impossível</strong> — não por falta de engenhosidade, mas por proibição da física.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Motores e usinas:</strong> toda a engenharia de motores, turbinas e geradores é aplicação direta das leis da termodinâmica.</li>
  <li><strong>Refrigeradores e bombas de calor:</strong> “empurram” calor do frio para o quente — mas só gastando energia (respeitando a 2ª Lei).</li>
  <li><strong>Cosmologia e biologia:</strong> a entropia crescente descreve o destino do universo e por que a vida precisa consumir energia para se manter organizada.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a 2ª Lei proíbe qualquer aumento de ordem. Ela permite — a geladeira resfria, a vida se organiza — desde que a desordem <em>aumente em outro lugar</em> (o calor jogado no ambiente). O que é proibido é a entropia <em>total</em> do universo diminuir.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>1ª Lei: ΔU = Q − W (conservação de energia incluindo calor e trabalho).</li>
  <li>2ª Lei: calor flui do quente para o frio; a entropia (desordem) total sempre cresce.</li>
  <li>Nenhuma máquina térmica tem 100% de rendimento; moto-perpétuo é impossível.</li>
  <li>A 2ª Lei dá o sentido do tempo (o copo quebra, mas não se remonta).</li>
</ul>`,relatedIds:["fis-calor-mudancas","termodinamica-calor"],simulation:null},{id:"fis-mhs",topic:"Física",title:"Movimento Harmônico Simples (MHS)",summary:"Do pêndulo do relógio à corda do violão, o mesmo movimento se repete: a oscilação em torno de um equilíbrio. É a batida fundamental da natureza.",image:"https://image.pollinations.ai/prompt/Simple%20harmonic%20motion%20spring%20pendulum%20oscillation%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Movimento Harmônico Simples","Período e Frequência","Amplitude","Força Restauradora"],content:`
<p>Um pêndulo que vai e volta, uma mola que sobe e desce, a corda de um violão que vibra: todos repetem o mesmo padrão, oscilando em torno de um ponto de equilíbrio. Esse é o <strong>Movimento Harmônico Simples</strong> (MHS) — o movimento periódico mais fundamental da física, a base para entender ondas, som, luz e até circuitos elétricos.</p>

<h2>Grandezas de uma oscilação</h2>
<p>Todo movimento que se repete é descrito por três grandezas:</p>
<ul>
  <li><strong>Período (T):</strong> o tempo de uma oscilação completa (ida e volta), em segundos.</li>
  <li><strong>Frequência (f):</strong> quantas oscilações por segundo, em hertz (Hz). É o inverso do período.</li>
  <li><strong>Amplitude (A):</strong> o afastamento máximo do equilíbrio.</li>
</ul>
<p class='formula'>f = 1 / T<small>ex.: um pêndulo que oscila 2 vezes por segundo tem f = 2 Hz e T = 0,5 s</small></p>

<h2>O que faz o MHS</h2>
<p>O MHS acontece quando há uma <strong>força restauradora</strong> que puxa o corpo de volta ao equilíbrio, e que é <em>proporcional</em> ao afastamento: quanto mais longe, mais forte o puxão de volta. É o caso da mola (Lei de Hooke, F = −kx) e do pêndulo com pequenas oscilações. Essa força faz o corpo ultrapassar o equilíbrio, ir para o outro lado, e voltar — para sempre, se não houvesse atrito.</p>

<h2>Períodos que só dependem do sistema</h2>
<p>Um fato lindo e útil: o período do MHS não depende da amplitude (para oscilações pequenas). Um pêndulo leva o mesmo tempo para ir e voltar, quer oscile bastante, quer pouco — foi essa descoberta de Galileu que permitiu o relógio de pêndulo.</p>
<p class='formula'>pêndulo: T = 2π·√(L/g)<br>mola: T = 2π·√(m/k)<small>o período do pêndulo depende só do comprimento; o da mola, da massa e da rigidez</small></p>
<p>Você pode explorar isso na <em>simulação do Pêndulo Simples</em> deste módulo, vendo o período mudar com o comprimento mas não com a amplitude.</p>

<h2>A dança da energia</h2>
<p>No MHS, a energia oscila entre cinética e potencial (do Mód. 4). No ponto mais afastado, tudo é energia potencial (o corpo para por um instante); ao passar pelo equilíbrio, tudo é cinética (velocidade máxima). É a conservação de energia em movimento perpétuo — a mesma dança da montanha-russa, agora repetida sem fim.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Relógios:</strong> pêndulos e cristais de quartzo oscilando marcam o tempo com precisão.</li>
  <li><strong>Instrumentos musicais:</strong> cordas e colunas de ar vibram em MHS, produzindo notas.</li>
  <li><strong>Sismógrafos e engenharia:</strong> medir e amortecer oscilações protege prédios de terremotos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que um pêndulo que oscila mais “largo” demora mais para voltar. Para amplitudes pequenas, o período é o <em>mesmo</em> — é o isocronismo de Galileu. O que muda o período do pêndulo é o comprimento do fio, não a amplitude nem a massa.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>MHS é a oscilação em torno de um equilíbrio, com força restauradora proporcional ao afastamento.</li>
  <li>Período T (tempo de uma oscilação) e frequência f = 1/T (em Hz).</li>
  <li>Período do pêndulo: T = 2π√(L/g); da mola: T = 2π√(m/k).</li>
  <li>A energia oscila entre potencial (nos extremos) e cinética (no equilíbrio).</li>
</ul>`,relatedIds:["fis-conservacao-energia","pendulo-simples"],simulation:null},{id:"fis-ondas",topic:"Física",title:"Ondas: Natureza e Propriedades",summary:"Uma onda transporta energia sem transportar matéria. Da luz do Sol ao sinal do celular, quase toda informação do universo viaja em forma de onda.",image:"https://image.pollinations.ai/prompt/Waves%20transverse%20longitudinal%20wavelength%20frequency%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Onda","Comprimento de Onda","Frequência","Velocidade de Propagação"],content:`
<p>Jogue uma pedra num lago: uma perturbação se espalha em círculos, mas a água (e uma folha boiando) apenas <em>sobe e desce</em> — não viaja com a onda. Essa é a essência de uma <strong>onda</strong>: a propagação de uma perturbação que transporta <em>energia</em> sem transportar <em>matéria</em>. É como o universo envia informação de um lugar a outro.</p>

<h2>Transversais e longitudinais</h2>
<p>As ondas se dividem pela direção da vibração:</p>
<ul>
  <li><strong>Transversais:</strong> a perturbação é <em>perpendicular</em> à direção de propagação (a onda numa corda, a luz).</li>
  <li><strong>Longitudinais:</strong> a perturbação é <em>na mesma direção</em> da propagação — regiões de compressão e rarefação (o som, uma mola sendo comprimida em pulsos).</li>
</ul>

<h2>As grandezas de uma onda</h2>
<p>Uma onda periódica é descrita por:</p>
<ul>
  <li><strong>Comprimento de onda (λ):</strong> a distância entre duas cristas (ou dois pontos idênticos) consecutivas.</li>
  <li><strong>Frequência (f):</strong> quantas oscilações passam por segundo (Hz) — herdada da fonte que gera a onda.</li>
  <li><strong>Amplitude:</strong> a “altura” da onda, ligada à sua energia.</li>
</ul>

<h2>A equação fundamental das ondas</h2>
<p>As três grandezas se conectam por uma relação simples e universal, válida para <em>qualquer</em> onda:</p>
<p class='formula'>v = λ · f<small>velocidade = comprimento de onda × frequência</small></p>
<p>A velocidade depende do <em>meio</em> (a luz é rápida no vácuo, o som depende do ar). Num mesmo meio, v é fixa — então, se a frequência aumenta, o comprimento de onda diminui, e vice-versa.</p>
<div class='example'>
  <span class='tag'>Exemplo · uma emissora de rádio</span>
  <p>Uma estação FM transmite a 100 MHz (10⁸ Hz). Como ondas de rádio viajam à velocidade da luz (3 × 10⁸ m/s), o comprimento de onda é:</p>
  <p class='formula'>λ = v / f = (3 × 10⁸) / (10⁸) = 3 m</p>
</div>

<h2>Fenômenos das ondas</h2>
<p>Todas as ondas compartilham comportamentos: <strong>reflexão</strong> (ricocheteiam, como o eco), <strong>refração</strong> (mudam de direção ao trocar de meio, como a luz na água), <strong>difração</strong> (contornam obstáculos) e <strong>interferência</strong> (somam-se ou cancelam-se ao se encontrar). É por reconhecer esses fenômenos que sabemos que a luz é uma onda.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Telecomunicações:</strong> rádio, TV, wi-fi e celular são ondas eletromagnéticas moduladas com informação.</li>
  <li><strong>Medicina:</strong> ultrassom, ressonância e raios-X são aplicações de ondas.</li>
  <li><strong>Geologia:</strong> ondas sísmicas revelam a estrutura interna da Terra e localizam terremotos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Pensar que a onda “leva” a matéria com ela. Não leva: a matéria só oscila no lugar (a rolha boia sobe e desce, mas não viaja com a onda do mar). O que se propaga é a <em>energia</em> e o padrão, não o material.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Onda é a propagação de uma perturbação que transporta energia, não matéria.</li>
  <li>Transversais (vibração perpendicular) × longitudinais (vibração na direção da propagação).</li>
  <li>Equação fundamental: v = λ·f (a velocidade depende do meio).</li>
  <li>Todas exibem reflexão, refração, difração e interferência.</li>
</ul>`,relatedIds:["fis-mhs","fis-som"],simulation:null},{id:"fis-som",topic:"Física",title:"O Som",summary:"A música, a fala e o ruído são a mesma coisa: ondas de pressão viajando pelo ar. Entenda o que define grave e agudo, alto e baixo — e por que não há som no espaço.",image:"https://image.pollinations.ai/prompt/Sound%20waves%20air%20pressure%20music%20frequency%20amplitude%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Onda Sonora","Altura e Intensidade","Velocidade do Som","Efeito Doppler"],content:`
<p>O <strong>som</strong> é uma onda mecânica longitudinal: uma vibração que comprime e rarefaz o ar (ou outro meio), viajando até o seu ouvido. Toda a música, a fala e o ruído do mundo são variações desse mesmo fenômeno — ondas de pressão se propagando.</p>

<h2>O som precisa de um meio</h2>
<p>Diferente da luz, o som <strong>não se propaga no vácuo</strong> — ele precisa de partículas para comprimir e transmitir a vibração. No espaço, por mais violenta que seja uma explosão, não há som (os filmes erram nisso!). A velocidade do som depende do meio: no ar é de cerca de <strong>340 m/s</strong>, mas na água é ~4× maior e no aço, ~15× — quanto mais unidas as partículas, mais rápido o som viaja.</p>

<h2>Grave × agudo: a frequência</h2>
<p>A <strong>altura</strong> de um som (grave ou agudo) é dada pela sua <em>frequência</em>: sons graves têm baixa frequência; agudos, alta. O ouvido humano capta de cerca de <strong>20 Hz a 20 000 Hz</strong>. Abaixo disso é infrassom (elefantes, terremotos); acima, ultrassom (morcegos, ecografias).</p>

<h2>Alto × baixo: a intensidade</h2>
<p>O <strong>volume</strong> (intensidade) depende da <em>amplitude</em> da onda — o quanto o ar é comprimido. Mede-se em <strong>decibéis (dB)</strong>, uma escala logarítmica: cada 10 dB representa 10 vezes mais intensidade. Uma conversa tem ~60 dB; um show, ~110 dB; acima de ~120 dB começa a dor e o risco de lesão auditiva.</p>

<h2>O efeito Doppler</h2>
<p>Você já notou como a sirene de uma ambulância fica mais <em>aguda</em> quando ela se aproxima e mais <em>grave</em> quando se afasta? É o <strong>efeito Doppler</strong>: o movimento da fonte comprime as ondas à frente (frequência maior, mais agudo) e as estica atrás (frequência menor, mais grave).</p>
<div class='example'>
  <span class='tag'>Exemplo · a ambulância</span>
  <p>A sirene emite sempre a mesma frequência. Mas, ao se aproximar, cada crista de onda é emitida um pouco mais perto de você que a anterior — as ondas “se amontoam”, chegando com frequência maior. Ao passar e se afastar, elas se esticam, e o som fica mais grave. O mesmo efeito, com a luz, revela que o universo está se expandindo (o “desvio para o vermelho”).</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Música e áudio:</strong> instrumentos, microfones e caixas de som manipulam ondas sonoras.</li>
  <li><strong>Medicina:</strong> a ultrassonografia usa ecos de ultrassom para “ver” dentro do corpo.</li>
  <li><strong>Sonar e radar:</strong> submarinos e morcegos “enxergam” pelo tempo de retorno das ondas (Doppler mede velocidades).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir altura (frequência: grave/agudo) com intensidade (amplitude: baixo/alto). Um som pode ser agudo e baixinho, ou grave e altíssimo. E lembre: sem meio material, não há som — o espaço é silencioso.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Som é uma onda longitudinal de pressão; precisa de um meio (não há som no vácuo).</li>
  <li>Velocidade no ar ~340 m/s; maior em líquidos e sólidos.</li>
  <li>Frequência define grave/agudo (audível: 20–20 000 Hz); amplitude define o volume (dB).</li>
  <li>Efeito Doppler: aproximar agudiza o som; afastar o torna grave.</li>
</ul>`,relatedIds:["fis-ondas","ondas-som"],simulation:null},{id:"fis-luz-reflexao",topic:"Física",title:"A Luz e a Reflexão",summary:"A coisa mais rápida do universo, e a razão pela qual enxergamos. Entenda por que vemos objetos que não emitem luz — e por que o espelho troca sua direita pela esquerda.",image:"https://image.pollinations.ai/prompt/Light%20reflection%20mirror%20rays%20angle%20incidence%2C%20elegant%20optics%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Natureza da Luz","Propagação Retilínea","Leis da Reflexão","Espelhos"],content:`
<p>A <strong>óptica</strong> estuda a luz — e a luz é especial. Ela é uma onda eletromagnética que, ao contrário do som, <em>não precisa de meio</em> para se propagar: viaja pelo vácuo do espaço a 300 000 km/s, o limite de velocidade do universo. É graças a ela que a energia do Sol chega até nós e que enxergamos o mundo.</p>

<h2>A luz caminha em linha reta</h2>
<p>Num meio uniforme, a luz se propaga em <strong>linha reta</strong> — daí falarmos em “raios de luz”. É essa propriedade simples que explica as <em>sombras</em> (a luz não contorna o obstáculo) e os <em>eclipses</em> (a sombra de um astro projetada sobre outro).</p>

<h2>Corpos luminosos e iluminados</h2>
<p>Alguns corpos <em>emitem</em> luz própria (o Sol, uma lâmpada, uma vela): são luminosos. A imensa maioria, porém, apenas <em>reflete</em> a luz que recebe (a Lua, esta página, você): são iluminados. <strong>Nós enxergamos porque a luz refletida pelos objetos chega aos nossos olhos</strong> — no escuro absoluto, sem luz para refletir, nada é visível.</p>

<h2>As leis da reflexão</h2>
<p>Quando a luz bate numa superfície e volta, ela obedece a uma regra precisa: o <strong>ângulo de incidência é igual ao ângulo de reflexão</strong> (ambos medidos em relação à perpendicular da superfície).</p>
<p class='formula'>ângulo de incidência = ângulo de reflexão<small>é a mesma regra de uma bola de bilhar batendo na tabela</small></p>
<p>O tipo de superfície decide o resultado:</p>
<ul>
  <li><strong>Reflexão regular (especular):</strong> superfície lisa e polida (espelho, água parada) — os raios refletem organizados, formando <em>imagem</em>.</li>
  <li><strong>Reflexão difusa:</strong> superfície irregular (parede, papel) — os raios espalham em todas as direções. É por isso que enxergamos objetos comuns de qualquer ângulo, mas não vemos nossa imagem neles.</li>
</ul>

<h2>O espelho plano</h2>
<p>No espelho plano, a imagem formada é <em>virtual</em> (parece estar atrás do espelho, onde não há luz de verdade), do mesmo tamanho do objeto e à mesma distância. E há a famosa inversão: o espelho não troca em cima por baixo, mas troca <em>frente por trás</em> — o que nosso cérebro interpreta como direita virando esquerda.</p>
<div class='example'>
  <span class='tag'>Exemplo · o tamanho do espelho</span>
  <p>Para se ver de corpo inteiro, você não precisa de um espelho do seu tamanho: basta <strong>metade da sua altura</strong>, bem posicionado. A geometria da reflexão (ângulos iguais) garante que a metade seja suficiente — um resultado que surpreende quase todo mundo.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Espelhos retrovisores e de segurança:</strong> espelhos curvos ampliam o campo de visão (por isso o aviso de que objetos estão mais perto do que parecem).</li>
  <li><strong>Telescópios refletores:</strong> usam grandes espelhos côncavos para concentrar a luz de estrelas distantes.</li>
  <li><strong>Iluminação:</strong> refletores de faróis e luminárias direcionam a luz aproveitando as leis da reflexão.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que enxergamos porque nossos olhos “emitem” algo, ou que vemos objetos escuros por eles serem visíveis por si. Enxergamos pela luz que os objetos <em>refletem</em> até nossos olhos. Sem fonte de luz, não há visão.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A luz é onda eletromagnética, viaja no vácuo a ~300 000 km/s e se propaga em linha reta.</li>
  <li>Vemos os objetos pela luz que eles refletem.</li>
  <li>Reflexão: ângulo de incidência = ângulo de reflexão.</li>
  <li>Reflexão regular (espelho, forma imagem) × difusa (superfícies foscas).</li>
</ul>`,relatedIds:["fis-refracao","fis-ondas"],simulation:null},{id:"fis-refracao",topic:"Física",title:"Refração da Luz",summary:"Por que o canudo parece quebrado no copo, a piscina parece mais rasa e o arco-íris existe? Tudo porque a luz muda de velocidade — e entorta — ao trocar de meio.",image:"https://image.pollinations.ai/prompt/Light%20refraction%20bending%20straw%20in%20glass%20prism%20rainbow%2C%20elegant%20optics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Refração","Índice de Refração","Reflexão Total","Dispersão"],content:`
<p>Coloque um canudo num copo d'água e ele parecerá quebrado na superfície. Olhe uma piscina e ela parecerá mais rasa do que é. Esses efeitos têm uma única causa: a <strong>refração</strong> — o desvio que a luz sofre ao passar de um meio para outro.</p>

<h2>Por que a luz entorta</h2>
<p>A luz tem velocidade máxima no vácuo, mas viaja <em>mais devagar</em> dentro de materiais como água, vidro ou diamante. Ao atravessar a fronteira entre dois meios em ângulo, essa mudança de velocidade faz o raio <strong>mudar de direção</strong>. Quantificamos isso pelo <strong>índice de refração</strong>:</p>
<p class='formula'>n = c / v<small>c = velocidade da luz no vácuo · v = velocidade no meio</small></p>
<p>Quanto maior o n, mais “lento” e mais refringente o meio: ar ≈ 1,0; água ≈ 1,33; vidro ≈ 1,5; diamante ≈ 2,42. Ao entrar num meio mais refringente, o raio se aproxima da perpendicular; ao sair, se afasta (é a Lei de Snell).</p>
<div class='example'>
  <span class='tag'>Exemplo · a piscina rasa</span>
  <p>A luz que sai do fundo da piscina se desvia ao emergir na água-ar. Seu cérebro, porém, assume que a luz veio em <em>linha reta</em> — e projeta a imagem do fundo mais acima do que ele realmente está. Por isso a piscina parece mais rasa, e por isso o canudo parece partido na superfície.</p>
</div>

<h2>Reflexão total e a fibra óptica</h2>
<p>Quando a luz tenta sair de um meio mais refringente para um menos (da água para o ar, por exemplo) com um ângulo muito aberto, ela não consegue escapar: é totalmente refletida de volta. É a <strong>reflexão total</strong>.</p>
<p>Esse fenômeno é a base da <strong>fibra óptica</strong>: a luz entra num fino filamento de vidro e fica presa dentro dele, ricocheteando por reflexão total ao longo de quilômetros com pouquíssima perda. É assim que a internet atravessa oceanos.</p>

<h2>Dispersão: o arco-íris</h2>
<p>O índice de refração é ligeiramente diferente para cada cor (frequência) da luz. Assim, ao atravessar um prisma ou uma gota de chuva, a luz branca se separa em suas cores componentes — é a <strong>dispersão</strong>. O arco-íris é o resultado da refração, reflexão interna e nova refração da luz solar dentro de milhões de gotículas de água.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Telecomunicações:</strong> fibras ópticas transportam praticamente toda a internet mundial.</li>
  <li><strong>Óptica visual:</strong> óculos, lentes de contato, câmeras e microscópios funcionam por refração.</li>
  <li><strong>Joalheria:</strong> o brilho do diamante vem do seu altíssimo índice de refração, que aprisiona e devolve a luz.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a luz “diminui de frequência” ao entrar na água. O que muda é a <em>velocidade</em> e, com ela, o comprimento de onda — a <strong>frequência (a cor) permanece a mesma</strong>. Por isso um objeto vermelho continua vermelho debaixo d'água.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Refração é o desvio da luz ao mudar de meio, causado pela mudança de velocidade.</li>
  <li>Índice de refração n = c/v (água 1,33; vidro 1,5; diamante 2,42).</li>
  <li>Reflexão total aprisiona a luz — princípio da fibra óptica.</li>
  <li>Dispersão separa as cores (prisma, arco-íris); a frequência não muda com o meio.</li>
</ul>`,relatedIds:["fis-luz-reflexao","fis-lentes"],simulation:null},{id:"fis-lentes",topic:"Física Clássica",title:"Lentes e Instrumentos Ópticos",summary:"Pedaços de vidro curvo que dobram a luz de forma controlada — e assim corrigem a visão, revelam micróbios e aproximam galáxias.",image:"https://image.pollinations.ai/prompt/Optical%20lenses%20converging%20diverging%20focal%20point%20eye%2C%20elegant%20optics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Intermediário",concepts:["Lentes Convergentes","Lentes Divergentes","Foco","Instrumentos Ópticos"],content:`
<p>Uma <strong>lente</strong> é um material transparente com faces curvas que usa a refração de forma controlada para <em>concentrar</em> ou <em>espalhar</em> a luz. Com esse truque simples, a humanidade corrigiu a visão, enxergou micróbios e mapeou o universo.</p>

<h2>Os dois tipos de lente</h2>
<ul>
  <li><strong>Convergentes</strong> (mais grossas no meio): fazem os raios paralelos <em>convergirem</em> para um ponto — o <strong>foco</strong>. São as lupas e as lentes de câmera.</li>
  <li><strong>Divergentes</strong> (mais finas no meio): espalham os raios, como se viessem de um foco virtual.</li>
</ul>
<p>A distância do centro da lente ao foco é a <strong>distância focal</strong>. Quanto menor ela for, mais “forte” é a lente — o grau dos óculos é justamente uma medida disso (em dioptrias, o inverso da distância focal em metros).</p>

<h2>Formação de imagens</h2>
<p>Numa lente convergente, o tipo de imagem depende de onde está o objeto:</p>
<ul>
  <li>Objeto <strong>muito distante</strong>: a imagem se forma no foco, pequena e invertida (é o que a câmera e o olho fazem).</li>
  <li>Objeto <strong>entre a lente e o foco</strong>: a imagem fica virtual, direita e <em>ampliada</em> — é a lupa.</li>
</ul>

<h2>O olho humano é uma lente</h2>
<p>O cristalino do seu olho é uma lente convergente que projeta a imagem <em>invertida</em> na retina (o cérebro a desinverte). Quando esse sistema não foca corretamente, surgem os defeitos de visão, corrigidos com lentes:</p>
<ul>
  <li><strong>Miopia:</strong> a imagem se forma <em>antes</em> da retina (o olho é “longo demais”); corrige-se com lente <strong>divergente</strong>.</li>
  <li><strong>Hipermetropia:</strong> a imagem se formaria <em>depois</em> da retina; corrige-se com lente <strong>convergente</strong>.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · por que a lupa amplia</span>
  <p>Aproxime uma lupa de um texto (objeto mais perto que o foco): os raios que saem dela chegam ao seu olho <em>como se</em> viessem de um objeto maior e mais distante. O cérebro interpreta essa imagem virtual ampliada — e você lê as letras miúdas.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Medicina e visão:</strong> óculos, lentes de contato e cirurgias refrativas remodelam o foco do olho.</li>
  <li><strong>Microscópios:</strong> combinam lentes para ampliar milhares de vezes, revelando células e micróbios.</li>
  <li><strong>Telescópios e câmeras:</strong> lentes (e espelhos) coletam e focalizam luz de objetos distantes — a base da astronomia e da fotografia.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Trocar as lentes corretivas. A <strong>miopia</strong> (dificuldade de ver longe) usa lente <em>divergente</em>; a <strong>hipermetropia</strong> (dificuldade de perto) usa <em>convergente</em>. O raciocínio: se a imagem se forma cedo demais, é preciso “atrasá-la” espalhando os raios.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Lentes convergentes concentram a luz num foco; divergentes a espalham.</li>
  <li>A distância focal define a “força” da lente (dioptrias = 1/f).</li>
  <li>O olho é uma lente convergente que projeta imagem invertida na retina.</li>
  <li>Miopia corrige-se com lente divergente; hipermetropia, com convergente.</li>
</ul>`,relatedIds:["fis-refracao","fis-luz-reflexao"],simulation:{component:"lentes",subtitle:"Lentes e Formação de Imagem",about:"Três raios saem da ponta do objeto: o paralelo ao eixo (sai pelo foco), o que passa pelo centro (não desvia) e o que passa pelo foco (sai paralelo). Onde eles se cruzam está a imagem; quando se afastam depois da lente, quem se cruza são os prolongamentos tracejados, e a imagem é virtual. Arraste o objeto pelo eixo e passe pelos pontos 2F e F para ver a imagem mudar de menor para igual, maior e, dentro do foco, virtual — é a lupa. Arraste também o foco F para trocar a força da lente. O gráfico de baixo mostra onde a imagem se forma para cada posição do objeto: uma hipérbole que dispara para o infinito exatamente no foco.",icon:"sun",iconColor:"#8a97a6",presets:[{label:"Câmera (além de 2F)",values:{distanciaObjeto:50,distanciaFocal:15,tipoLente:0}},{label:"Mesmo tamanho (em 2F)",values:{distanciaObjeto:30,distanciaFocal:15,tipoLente:0}},{label:"Projetor (entre F e 2F)",values:{distanciaObjeto:20,distanciaFocal:15,tipoLente:0}},{label:"Lupa (dentro do foco)",values:{distanciaObjeto:9,distanciaFocal:15,tipoLente:0}},{label:"Óculos de míope",values:{distanciaObjeto:30,distanciaFocal:20,tipoLente:100}}],controls:[{id:"distanciaObjeto",label:"Distância do objeto (p)",unit:"cm",min:4,max:60,default:30,step:.5},{id:"distanciaFocal",label:"Distância focal (f)",unit:"cm",min:5,max:30,default:15,step:.5},{id:"tipoLente",type:"select",label:"Tipo de lente",default:0,options:[{value:0,label:"Convergente"},{value:100,label:"Divergente"}]}]}},{id:"fis-carga-eletrica",topic:"Física",title:"Carga Elétrica e Eletrização",summary:"O choque na maçaneta, o cabelo que gruda no pente, o raio na tempestade: todos vêm da mesma propriedade fundamental da matéria — a carga elétrica.",image:"https://image.pollinations.ai/prompt/Electric%20charge%20static%20electricity%20lightning%20attraction%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Carga Elétrica","Eletrização","Condutores e Isolantes","Conservação da Carga"],content:`
<p>Esfregue uma régua no cabelo e ela atrairá pedacinhos de papel. Toque uma maçaneta depois de andar no carpete e leve um choque. Esses fenômenos, conhecidos desde a Grécia antiga (o âmbar atritado atraía palha — <em>elektron</em>, em grego, deu origem à palavra “elétron”), revelam uma propriedade fundamental da matéria: a <strong>carga elétrica</strong>.</p>

<h2>Dois tipos de carga</h2>
<p>A matéria é feita de átomos com <strong>prótons</strong> (carga positiva) no núcleo e <strong>elétrons</strong> (carga negativa) ao redor. Num átomo neutro, as quantidades se equilibram. A regra fundamental:</p>
<p class='formula'>cargas de mesmo sinal se REPELEM<br>cargas de sinais opostos se ATRAEM<small>a unidade de carga no SI é o coulomb (C)</small></p>
<p>A carga é <em>quantizada</em>: existe um valor mínimo indivisível, a carga elementar (e ≈ 1,6 × 10⁻¹⁹ C, a do elétron). Toda carga é um múltiplo inteiro dela.</p>

<h2>A carga se conserva</h2>
<p>Assim como a energia, a <strong>carga elétrica total se conserva</strong>: ela não é criada nem destruída, apenas <em>transferida</em> de um corpo para outro. Quando você eletriza a régua no cabelo, elétrons migram de um para o outro — um fica negativo, o outro positivo, e a soma continua a mesma.</p>

<h2>Condutores e isolantes</h2>
<ul>
  <li><strong>Condutores</strong> (metais, água com sais, corpo humano): têm elétrons livres que se movem facilmente pelo material.</li>
  <li><strong>Isolantes</strong> (plástico, vidro, borracha, ar seco): os elétrons ficam presos aos átomos; a carga não circula.</li>
</ul>
<p>É por isso que fios são de cobre (condutor) revestidos de plástico (isolante).</p>

<h2>Os três processos de eletrização</h2>
<ul>
  <li><strong>Atrito:</strong> dois materiais diferentes esfregados trocam elétrons (a régua e o cabelo). Ficam com cargas opostas.</li>
  <li><strong>Contato:</strong> um corpo carregado toca outro e divide sua carga; ambos ficam com o <em>mesmo sinal</em>.</li>
  <li><strong>Indução:</strong> um corpo carregado <em>aproximado</em> (sem tocar) reorganiza as cargas do outro, atraindo as opostas para perto. É assim que a régua atrai o papel <em>neutro</em>.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · por que o raio acontece</span>
  <p>O atrito entre gotas e cristais de gelo dentro de uma nuvem separa cargas: a base fica negativa e o solo, por indução, fica positivo. Quando a diferença é grande o bastante para romper o isolamento do ar, a carga salta — um <strong>raio</strong>, uma eletrização violenta em escala gigantesca.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Para-raios:</strong> oferecem um caminho condutor seguro para a descarga, protegendo construções.</li>
  <li><strong>Impressoras e fotocopiadoras:</strong> usam cargas eletrostáticas para atrair o toner ao papel.</li>
  <li><strong>Pintura industrial e filtros:</strong> tinta eletrizada adere melhor; filtros eletrostáticos capturam poeira.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a régua atritada atrai o papel porque o papel está carregado. O papel está <em>neutro</em> — ele é atraído por <strong>indução</strong>: a régua reorganiza as cargas do papel, puxando as opostas para perto. Corpos neutros podem, sim, ser atraídos.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Carga elétrica: positiva (próton) e negativa (elétron); iguais se repelem, opostas se atraem.</li>
  <li>A carga é quantizada (múltiplos de e) e se conserva (só é transferida).</li>
  <li>Condutores têm elétrons livres; isolantes, não.</li>
  <li>Eletrização por atrito, contato e indução (esta atrai até corpos neutros).</li>
</ul>`,relatedIds:["fis-lei-coulomb","fis-campo-potencial"],simulation:null},{id:"fis-lei-coulomb",topic:"Física",title:"A Lei de Coulomb",summary:"A equação que mede a força entre cargas. Tem a mesma forma da gravitação de Newton — mas é inimaginavelmente mais forte, e pode tanto atrair quanto repelir.",image:"https://image.pollinations.ai/prompt/Coulomb%20law%20electric%20force%20between%20charges%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Lei de Coulomb","Força Elétrica","Inverso do Quadrado","Constante Eletrostática"],content:`
<p>Sabemos que cargas se atraem ou se repelem. Mas com que <em>intensidade</em>? Em 1785, Charles-Augustin de <strong>Coulomb</strong> mediu isso com precisão e encontrou uma lei de forma surpreendentemente familiar — quase idêntica à da gravitação universal de Newton.</p>

<h2>A lei</h2>
<p>A força entre duas cargas puntiformes é proporcional ao produto das cargas e inversamente proporcional ao <em>quadrado</em> da distância entre elas:</p>
<p class='formula'>F = k · (q₁ · q₂) / d²<small>k ≈ 9 × 10⁹ N·m²/C² (constante eletrostática no vácuo)</small></p>
<p>A força é sempre na linha que une as cargas: de <em>repulsão</em> se os sinais forem iguais, de <em>atração</em> se forem opostos. Como na gravidade, dobrar a distância reduz a força a um quarto.</p>

<h2>Duas irmãs, uma muito mais forte</h2>
<p>Compare com a gravitação (F = G·m₁m₂/d²): a estrutura é idêntica — produto das “fontes” dividido pelo quadrado da distância. Mas há duas diferenças cruciais:</p>
<ul>
  <li>A gravidade só <strong>atrai</strong>; a força elétrica atrai <em>e</em> repele.</li>
  <li>A força elétrica é <strong>absurdamente mais intensa</strong>: entre um próton e um elétron, ela é cerca de 10³⁹ vezes maior que a atração gravitacional entre eles.</li>
</ul>
<div class='example'>
  <span class='tag'>Exemplo · por que a gravidade domina o universo?</span>
  <p>Se a força elétrica é 10³⁹ vezes mais forte, por que são a gravidade e não ela que governa planetas e galáxias? Porque as cargas <em>se cancelam</em>: a matéria comum é praticamente neutra, com tantos prótons quanto elétrons. Já a massa nunca é negativa — ela só soma. Em escalas grandes, sobra a gravidade.</p>
</div>

<h2>Por que sentimos a matéria sólida</h2>
<p>A força de Coulomb é a responsável por praticamente tudo que sentimos no dia a dia. Quando você toca uma mesa, seus átomos não “encostam” nos dela: são os elétrons das duas superfícies se <em>repelindo</em> eletricamente. A rigidez dos sólidos, o atrito, a tensão de um fio e as ligações químicas são, no fundo, força elétrica.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Química:</strong> todas as ligações químicas são atrações eletrostáticas entre cargas.</li>
  <li><strong>Eletrônica:</strong> o comportamento de elétrons em semicondutores obedece à Lei de Coulomb.</li>
  <li><strong>Física de partículas e materiais:</strong> a estrutura de átomos, cristais e moléculas é determinada por ela.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Esquecer que a distância entra ao <strong>quadrado</strong>. Triplicar a distância entre duas cargas não reduz a força a um terço, mas a <em>um nono</em>. E atenção: a lei vale para cargas puntiformes (ou esferas), medindo a distância entre seus centros.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Lei de Coulomb: F = k·q₁q₂/d² (k ≈ 9 × 10⁹ N·m²/C²).</li>
  <li>Mesma forma da gravitação, mas atrai e repele — e é ~10³⁹ vezes mais forte.</li>
  <li>A gravidade domina em larga escala porque as cargas se cancelam; a massa, não.</li>
  <li>A solidez da matéria e as ligações químicas são força de Coulomb.</li>
</ul>`,relatedIds:["fis-carga-eletrica","fis-gravitacao-universal"],simulation:null},{id:"fis-campo-potencial",topic:"Física",title:"Campo Elétrico e Potencial",summary:"Como uma carga 'sente' a outra à distância? Pela deformação que ela causa no espaço: o campo elétrico. E a diferença de potencial é o que chamamos de voltagem.",image:"https://image.pollinations.ai/prompt/Electric%20field%20lines%20charges%20potential%20voltage%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Campo Elétrico","Linhas de Campo","Potencial Elétrico","Diferença de Potencial"],content:`
<p>Uma carga atrai outra a distância, sem se tocarem. Como? A física moderna respondeu com uma das ideias mais poderosas que já teve: a carga não age “magicamente” à distância — ela <strong>modifica o espaço ao seu redor</strong>, criando um <em>campo</em>. Outra carga, ao entrar nessa região, sente uma força.</p>

<h2>O campo elétrico</h2>
<p>O <strong>campo elétrico</strong> (E) num ponto é a força que uma carga de prova sentiria ali, por unidade de carga:</p>
<p class='formula'>E = F / q<small>unidade: newton por coulomb (N/C) — o campo é um vetor</small></p>
<p>O campo existe <em>independentemente</em> de haver outra carga para senti-lo — é uma propriedade do espaço criada pela carga-fonte. Representamos o campo por <strong>linhas de campo</strong>, que saem das cargas positivas e entram nas negativas: quanto mais densas as linhas, mais intenso o campo.</p>

<h2>Potencial elétrico e voltagem</h2>
<p>Assim como um objeto no alto tem energia potencial gravitacional, uma carga num campo elétrico tem energia potencial elétrica. O <strong>potencial elétrico</strong> (V) é essa energia por unidade de carga, medido em <strong>volts (V)</strong>.</p>
<p>Na prática, o que importa quase sempre é a <strong>diferença de potencial</strong> (ddp, ou voltagem) entre dois pontos — ela mede o “empurrão” disponível para mover cargas de um ponto a outro. É por isso que falamos em pilha de 1,5 V ou tomada de 127 V: são diferenças de potencial.</p>
<div class='example'>
  <span class='tag'>Exemplo · por que o pássaro no fio não morre</span>
  <p>Um pássaro pousado num único fio de alta tensão não leva choque porque seus dois pés estão praticamente no <em>mesmo potencial</em> — não há ddp entre eles, então nenhuma corrente atravessa seu corpo. Se ele encostasse simultaneamente noutro fio ou no poste aterrado, criaria uma diferença de potencial e a corrente fluiria. <strong>O que mata é a corrente causada pela ddp, não o fio em si.</strong></p>
</div>

<h2>A analogia da água</h2>
<p>Uma imagem útil (que voltará no próximo módulo): o potencial elétrico é como a <em>altura</em> de uma caixa d'água. A diferença de altura (ddp) é o que faz a água correr pelo cano. Quanto maior a diferença, mais “força” para empurrar as cargas — e é essa corrente que veremos na eletrodinâmica.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Eletrônica:</strong> todo circuito funciona por diferenças de potencial que movem cargas.</li>
  <li><strong>Medicina:</strong> eletrocardiograma e eletroencefalograma medem diferenças de potencial do corpo.</li>
  <li><strong>Segurança elétrica:</strong> aterramento e equipotencialização evitam ddp perigosas entre partes de uma instalação.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir campo elétrico (E, vetor, em N/C) com potencial elétrico (V, escalar, em volts). O campo é a <em>força por carga</em>; o potencial é a <em>energia por carga</em>. Pode haver campo intenso com potencial zero num ponto, e vice-versa.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Campo elétrico E = F/q descreve a influência de uma carga no espaço (vetor, N/C).</li>
  <li>Linhas de campo saem do positivo e entram no negativo.</li>
  <li>Potencial (V, em volts) é energia por carga; o que importa é a diferença de potencial (ddp).</li>
  <li>É a ddp que move cargas — o pássaro no fio não sofre choque por não ter ddp entre os pés.</li>
</ul>`,relatedIds:["fis-lei-coulomb","circuito-eletrico"],simulation:null},{id:"fis-corrente-eletrica",topic:"Física",title:"Corrente Elétrica",summary:"Cargas em movimento organizado. E um fato que surpreende: os elétrons andam pelo fio a passo de tartaruga, mas a lâmpada acende instantaneamente.",image:"https://image.pollinations.ai/prompt/Electric%20current%20electrons%20flowing%20through%20wire%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Corrente Elétrica","Ampère","Sentido Convencional","Corrente Contínua e Alternada"],content:`
<p>Na eletrostática, as cargas estavam paradas. Agora elas se movem: a <strong>eletrodinâmica</strong> estuda as cargas em movimento organizado — a <strong>corrente elétrica</strong>, que ilumina cidades, move motores e alimenta cada aparelho que você usa.</p>

<h2>O que é corrente</h2>
<p>Corrente elétrica é o <em>fluxo ordenado</em> de cargas por um condutor. Sua intensidade mede quanta carga atravessa uma secção do fio por segundo:</p>
<p class='formula'>I = Q / t<small>carga (coulomb) por tempo (segundo) = corrente (ampère, A)</small></p>
<p>Num fio metálico, quem se move são os <strong>elétrons livres</strong>. Sem uma diferença de potencial (a ddp do módulo anterior), eles apenas se agitam ao acaso; ligada a ddp, passam a derivar numa direção — e temos corrente.</p>

<h2>Um detalhe histórico: o sentido convencional</h2>
<p>Antes de o elétron ser descoberto, convencionou-se que a corrente fluía do polo <em>positivo</em> para o <em>negativo</em>. Hoje sabemos que, nos metais, são os elétrons (negativos) que se movem — no sentido <em>oposto</em>. Por tradição, mantemos o <strong>sentido convencional</strong> (do + para o −) nos circuitos, e tudo funciona igual. A simulação de Circuito Elétrico deste módulo mostra os dois sentidos lado a lado.</p>

<h2>Os elétrons são lentos, o sinal é rápido</h2>
<p>Aqui está um fato que surpreende quase todo mundo: num fio doméstico, os elétrons derivam a cerca de <strong>0,1 mm/s</strong> — mais devagar que uma formiga. Então por que a lâmpada acende no instante em que você aperta o interruptor?</p>
<div class='example'>
  <span class='tag'>Exemplo · a analogia do cano cheio</span>
  <p>Imagine um cano já cheio de água. Ao empurrar água numa ponta, a água sai <em>imediatamente</em> na outra — não porque a molécula atravessou o cano, mas porque o empurrão se propagou. No fio é igual: os elétrons já estão lá, e o campo elétrico que os empurra se propaga quase à velocidade da luz. Os elétrons rastejam; a ordem para se moverem viaja a 300 000 km/s.</p>
</div>

<h2>Contínua e alternada</h2>
<ul>
  <li><strong>Corrente contínua (CC):</strong> flui sempre no mesmo sentido — pilhas, baterias, eletrônicos.</li>
  <li><strong>Corrente alternada (CA):</strong> inverte o sentido periodicamente (no Brasil, 60 vezes por segundo — 60 Hz). É a das tomadas, por ser mais eficiente de transportar por longas distâncias.</li>
</ul>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Toda a eletricidade doméstica e industrial:</strong> iluminação, motores, aquecimento, eletrônica.</li>
  <li><strong>Segurança:</strong> disjuntores medem corrente e desarmam quando ela ultrapassa o limite seguro.</li>
  <li><strong>Medicina:</strong> desfibriladores e estimuladores aplicam correntes controladas no corpo.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que os elétrons “correm” do interruptor até a lâmpada à velocidade da luz. Eles se arrastam a fração de milímetro por segundo. O que viaja rápido é o <em>campo elétrico</em> que os coloca em movimento — por isso a luz acende instantaneamente.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Corrente é o fluxo ordenado de cargas: I = Q/t (em ampères).</li>
  <li>É preciso uma ddp para estabelecer a corrente.</li>
  <li>Sentido convencional (+ → −) é oposto ao movimento real dos elétrons nos metais.</li>
  <li>Elétrons derivam lentamente, mas o campo se propaga quase à velocidade da luz.</li>
</ul>`,relatedIds:["fis-campo-potencial","fis-lei-ohm"],simulation:null},{id:"fis-lei-ohm",topic:"Física",title:"Resistência e a Lei de Ohm",summary:"Todo material resiste à passagem de corrente. A Lei de Ohm relaciona tensão, corrente e resistência numa equação simples — a mais usada de toda a eletrônica.",image:"https://image.pollinations.ai/prompt/Ohm%20law%20resistance%20voltage%20current%20resistor%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Resistência Elétrica","Lei de Ohm","Resistividade","Condutores Ôhmicos"],content:`
<p>Ao atravessar um material, os elétrons colidem com os átomos e encontram oposição. Essa oposição à passagem da corrente é a <strong>resistência elétrica</strong> — e a relação entre ela, a tensão e a corrente é a equação mais usada de toda a eletrônica.</p>

<h2>A Lei de Ohm</h2>
<p>Georg Ohm descobriu que, em muitos materiais, a corrente é <em>diretamente proporcional</em> à tensão aplicada. A constante de proporcionalidade é a resistência:</p>
<p class='formula'>V = R · I<small>tensão (volts) = resistência (ohms, Ω) × corrente (ampères)</small></p>
<p>A leitura é intuitiva: para uma mesma tensão, <em>mais resistência significa menos corrente</em>. Retomando a analogia hidráulica: a tensão é a diferença de altura da caixa d'água, a corrente é a vazão, e a resistência é o quão estreito é o cano.</p>
<div class='example'>
  <span class='tag'>Exemplo · corrente num resistor</span>
  <p>Um resistor de 220 Ω ligado a uma tomada de 110 V conduz:</p>
  <p class='formula'>I = V / R = 110 / 220 = 0,5 A</p>
</div>

<h2>O que determina a resistência</h2>
<p>A resistência de um fio depende de quatro fatores:</p>
<ul>
  <li><strong>Material</strong> (resistividade ρ): o cobre conduz muito melhor que o ferro; a borracha, quase nada.</li>
  <li><strong>Comprimento:</strong> quanto mais longo o fio, <em>maior</em> a resistência.</li>
  <li><strong>Área da secção:</strong> quanto mais grosso, <em>menor</em> a resistência (mais “espaço” para os elétrons).</li>
  <li><strong>Temperatura:</strong> em metais, esquentar aumenta a resistência (os átomos vibram mais e atrapalham).</li>
</ul>
<p class='formula'>R = ρ · L / A<small>é por isso que fios longos exigem bitola maior</small></p>

<h2>Materiais ôhmicos e não-ôhmicos</h2>
<p>Nem todo material obedece à Lei de Ohm. Os <strong>ôhmicos</strong> (metais em temperatura constante) têm R fixa: o gráfico V × I é uma <em>reta</em>. Já lâmpadas, diodos e semicondutores são <strong>não-ôhmicos</strong> — sua resistência muda com a corrente ou a tensão, e o gráfico é curvo. A eletrônica moderna vive dos não-ôhmicos.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Projeto de circuitos:</strong> escolher resistores para limitar corrente e proteger componentes.</li>
  <li><strong>Instalações elétricas:</strong> dimensionar a bitola dos fios para evitar aquecimento e perdas.</li>
  <li><strong>Sensores:</strong> termistores e extensômetros medem temperatura e deformação por variação de resistência.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que a Lei de Ohm vale para tudo. Ela é uma <em>propriedade de certos materiais</em>, não uma lei universal: lâmpadas incandescentes, diodos e transistores não a obedecem. Outro deslize: confundir tensão (o “empurrão”, em volts) com corrente (o “fluxo”, em ampères).</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Resistência é a oposição à corrente, medida em ohms (Ω).</li>
  <li>Lei de Ohm: V = R·I — mais resistência, menos corrente para a mesma tensão.</li>
  <li>R = ρ·L/A: depende do material, comprimento, espessura e temperatura.</li>
  <li>Materiais ôhmicos têm R constante (gráfico V×I é reta); diodos e lâmpadas, não.</li>
</ul>`,relatedIds:["fis-corrente-eletrica","circuito-eletrico"],simulation:null},{id:"fis-potencia-circuitos",topic:"Física",title:"Potência Elétrica e Circuitos",summary:"De onde vem o calor do chuveiro e o valor da conta de luz. E por que as tomadas da casa são ligadas em paralelo, não em série.",image:"https://image.pollinations.ai/prompt/Electric%20power%20circuits%20series%20parallel%20energy%20bill%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Potência Elétrica","Efeito Joule","Circuitos em Série e Paralelo","Consumo de Energia"],content:`
<p>Agora que sabemos o que é tensão, corrente e resistência, podemos responder a perguntas práticas: quanta energia um chuveiro consome? Por que o fio esquenta? E por que, se uma lâmpada da casa queima, as outras continuam acesas?</p>

<h2>Potência elétrica</h2>
<p>A <strong>potência</strong> elétrica mede a rapidez com que um aparelho converte energia elétrica em outra forma (luz, calor, movimento):</p>
<p class='formula'>P = V · I<small>potência (watts) = tensão (volts) × corrente (ampères)</small></p>
<p>Combinando com a Lei de Ohm, surgem duas formas equivalentes muito úteis: <strong>P = R·I²</strong> e <strong>P = V²/R</strong>.</p>

<h2>O efeito Joule</h2>
<p>Ao atravessar um resistor, os elétrons colidem com os átomos e a energia elétrica vira <strong>calor</strong> — é o <strong>efeito Joule</strong>. Ele é indesejado nos fios (perda de energia) e desejado nos aquecedores: chuveiro elétrico, ferro de passar, torradeira e secador funcionam exatamente por isso.</p>
<div class='example'>
  <span class='tag'>Exemplo · o chuveiro na conta de luz</span>
  <p>Um chuveiro de 5500 W usado 30 minutos por dia, durante 30 dias, consome:</p>
  <p class='formula'>E = 5,5 kW × 0,5 h × 30 dias = 82,5 kWh</p>
  <p>A conta de luz cobra justamente esses kWh (potência × tempo). É por isso que o chuveiro costuma ser o maior vilão do consumo doméstico.</p>
</div>

<h2>Série e paralelo</h2>
<p>Os componentes podem ser ligados de duas formas fundamentais:</p>
<ul>
  <li><strong>Série:</strong> um após o outro, num único caminho. A <em>mesma corrente</em> passa por todos, e as resistências se somam. Se um queima, o circuito abre e <em>tudo</em> apaga (as antigas luzes de Natal).</li>
  <li><strong>Paralelo:</strong> cada componente num caminho próprio, todos sob a <em>mesma tensão</em>. Se um queima, os outros continuam funcionando.</li>
</ul>
<p>É por isso que as instalações domésticas são em <strong>paralelo</strong>: cada tomada e lâmpada recebe os mesmos 127 V (ou 220 V) e funciona de forma independente das demais.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Instalações residenciais:</strong> dimensionar disjuntores e fios pela potência dos aparelhos.</li>
  <li><strong>Eficiência energética:</strong> lâmpadas LED entregam a mesma luz com uma fração da potência das incandescentes.</li>
  <li><strong>Transmissão de energia:</strong> linhas usam altíssima tensão justamente para reduzir a corrente e as perdas por efeito Joule (P = R·I²).</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Confundir potência (watt, a <em>rapidez</em> de consumo) com energia (kWh, o <em>total</em> consumido). Um chuveiro de 5500 W ligado 1 minuto gasta bem menos que uma lâmpada de 10 W ligada o mês inteiro. A conta cobra energia, não potência.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Potência elétrica: P = V·I (ou R·I², ou V²/R), em watts.</li>
  <li>Efeito Joule converte energia elétrica em calor (chuveiro, ferro, perdas nos fios).</li>
  <li>Energia consumida = potência × tempo, cobrada em kWh.</li>
  <li>Série: mesma corrente, se um falha tudo apaga. Paralelo: mesma tensão, independentes — por isso é o padrão das casas.</li>
</ul>`,relatedIds:["fis-lei-ohm","circuito-eletrico"],simulation:null},{id:"fis-magnetismo",topic:"Física",title:"Ímãs e Campo Magnético",summary:"Conhecidos há milênios, os ímãs guardam um mistério: por mais que você os corte, nunca consegue separar o polo norte do sul. E a própria Terra é um ímã gigante.",image:"https://image.pollinations.ai/prompt/Magnet%20magnetic%20field%20lines%20north%20south%20poles%20compass%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Ímã","Polos Magnéticos","Campo Magnético","Campo Magnético Terrestre"],content:`
<p>Os gregos já conheciam a <em>magnetita</em>, pedra que atraía ferro — daí o nome “magnetismo”. Por milênios foi mágica; hoje sabemos que é uma das forças fundamentais da natureza, intimamente ligada à eletricidade, como veremos nas próximas aulas.</p>

<h2>Polos magnéticos</h2>
<p>Todo ímã tem dois <strong>polos</strong>: norte (N) e sul (S). A regra é análoga à das cargas elétricas:</p>
<p class='formula'>polos iguais se REPELEM · polos opostos se ATRAEM<small>N-N e S-S repelem; N-S atrai</small></p>

<h2>O mistério: não existem monopolos</h2>
<p>Aqui está a diferença mais profunda em relação à eletricidade. Cargas elétricas podem existir isoladas (um elétron negativo sozinho). Já polos magnéticos, <strong>não</strong>: se você cortar um ímã ao meio tentando separar o N do S, obterá <em>dois ímãs completos</em>, cada um com seus dois polos. Corte de novo e o mesmo acontece — até o nível atômico.</p>
<p>Nunca se observou um <strong>monopolo magnético</strong>. Isso porque o magnetismo não nasce de “cargas magnéticas”, e sim do <em>movimento de cargas elétricas</em> — no caso dos ímãs, do movimento e do spin dos elétrons dentro dos átomos.</p>

<h2>Campo magnético</h2>
<p>Como no caso elétrico, descrevemos a influência de um ímã pelo <strong>campo magnético</strong> (B), representado por <em>linhas de campo</em> que, por convenção, saem do polo norte e entram no polo sul (fora do ímã). Onde as linhas são mais densas, o campo é mais intenso. É esse campo que a limalha de ferro revela ao se alinhar em torno de um ímã.</p>

<h2>A Terra é um ímã gigante</h2>
<p>O núcleo externo da Terra, de ferro líquido em movimento, gera um enorme campo magnético — é ele que orienta a agulha da bússola e que nos protege do vento solar, desviando partículas carregadas (o espetáculo das auroras polares é justamente essas partículas atingindo a atmosfera perto dos polos).</p>
<div class='example'>
  <span class='tag'>Exemplo · a inversão da bússola</span>
  <p>A agulha da bússola aponta para o “norte geográfico”. Mas polos opostos se atraem — logo, o que existe perto do norte geográfico é, na verdade, o <strong>polo sul magnético</strong> da Terra. A nomenclatura é histórica: batizamos o polo da agulha que aponta para o norte de “norte”, e o campo terrestre ficou com os nomes invertidos.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Navegação:</strong> a bússola guiou as grandes navegações e ainda é referência de emergência.</li>
  <li><strong>Armazenamento de dados:</strong> discos rígidos e fitas gravam informação em domínios magnéticos.</li>
  <li><strong>Geologia:</strong> o registro magnético nas rochas revelou a deriva continental e as inversões do campo terrestre.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Imaginar que é possível obter um polo magnético isolado quebrando um ímã. Não é: cada pedaço vira um ímã completo, com N e S. Diferente da carga elétrica, o “monopolo magnético” nunca foi observado na natureza.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Ímãs têm polos N e S; iguais se repelem, opostos se atraem.</li>
  <li>Não existem monopolos: cortar um ímã gera dois ímãs completos.</li>
  <li>O campo magnético (B) é representado por linhas que saem do N e entram no S.</li>
  <li>A Terra é um ímã gigante que orienta bússolas e nos protege do vento solar.</li>
</ul>`,relatedIds:["fis-eletromagnetismo","fis-campo-potencial"],simulation:null},{id:"fis-eletromagnetismo",topic:"Física",title:"Eletromagnetismo: Corrente e Magnetismo",summary:"Em 1820, um acaso numa sala de aula mudou a física: a agulha de uma bússola se moveu ao lado de um fio com corrente. Eletricidade e magnetismo eram a mesma coisa.",image:"https://image.pollinations.ai/prompt/Electromagnetism%20current%20wire%20magnetic%20field%20electromagnet%20motor%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Experiência de Oersted","Eletroímã","Força Magnética","Motor Elétrico"],content:`
<p>Durante séculos, eletricidade e magnetismo foram estudados como fenômenos separados. Até que, em 1820, o dinamarquês Hans Christian <strong>Oersted</strong> notou, durante uma aula, que a agulha de uma bússola se desviava quando ele ligava a corrente num fio próximo. Foi uma das descobertas mais importantes da história: <em>corrente elétrica gera magnetismo</em>.</p>

<h2>Corrente cria campo magnético</h2>
<p>Todo fio percorrido por corrente cria ao seu redor um <strong>campo magnético circular</strong>, envolvendo o fio. A intensidade cresce com a corrente e diminui com a distância. É esse fato que unifica os dois fenômenos: o magnetismo dos ímãs vem, no fundo, do movimento das cargas dentro dos átomos.</p>

<h2>O eletroímã</h2>
<p>Se enrolarmos o fio em espiral (formando uma bobina, ou <em>solenoide</em>), os campos de cada volta se somam e o interior fica com um campo intenso e uniforme — um <strong>eletroímã</strong>. Ele tem uma vantagem decisiva sobre o ímã comum: pode ser <em>ligado e desligado</em>, e sua intensidade é controlável pela corrente. Colocar um núcleo de ferro dentro amplifica ainda mais o efeito.</p>

<h2>Força sobre correntes: o motor elétrico</h2>
<p>A relação é recíproca: se corrente cria campo, um campo magnético também exerce <strong>força sobre um fio com corrente</strong> (e sobre cargas em movimento). Essa força é perpendicular tanto à corrente quanto ao campo.</p>
<div class='example'>
  <span class='tag'>Exemplo · como funciona um motor elétrico</span>
  <p>Coloque uma espira com corrente dentro de um campo magnético: os dois lados da espira sofrem forças em sentidos <em>opostos</em>, criando um <strong>torque</strong> que a faz girar. Invertendo a corrente a cada meia volta, o giro se mantém contínuo. Está aí, em essência, todo motor elétrico — do ventilador ao carro elétrico.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Motores:</strong> praticamente toda máquina que gira por eletricidade usa esse princípio.</li>
  <li><strong>Alto-falantes:</strong> uma bobina num campo magnético vibra ao ritmo do sinal, empurrando o ar e criando som.</li>
  <li><strong>Medicina e transporte:</strong> aparelhos de ressonância magnética e trens de levitação (maglev) usam eletroímãs poderosíssimos.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que o campo magnético de um fio “aponta para longe” dele, como o campo elétrico de uma carga. Não: ele <strong>circula em torno</strong> do fio, em círculos concêntricos. E a força magnética sobre uma carga é sempre <em>perpendicular</em> à sua velocidade — por isso ela muda a direção do movimento, mas não a energia cinética.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Oersted (1820): corrente elétrica cria campo magnético — eletricidade e magnetismo são unidos.</li>
  <li>O campo de um fio circula ao redor dele; bobinas formam eletroímãs (ligáveis e controláveis).</li>
  <li>Campos magnéticos exercem força sobre correntes e cargas em movimento.</li>
  <li>Essa força gera o torque que faz funcionar todo motor elétrico.</li>
</ul>`,relatedIds:["fis-magnetismo","fis-inducao-maxwell"],simulation:null},{id:"fis-inducao-maxwell",topic:"Física",title:"Indução Eletromagnética e as Equações de Maxwell",summary:"O caminho inverso: campo magnético em movimento gera eletricidade. É como toda a energia do mundo é produzida — e o caminho que revelou que a luz é uma onda eletromagnética.",image:"https://image.pollinations.ai/prompt/Electromagnetic%20induction%20Faraday%20generator%20Maxwell%20equations%20light%20wave%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Indução Eletromagnética","Lei de Faraday","Geradores","Equações de Maxwell"],content:`
<p>Oersted mostrou que corrente gera magnetismo. A pergunta natural era: o inverso funciona? Michael <strong>Faraday</strong> perseguiu essa ideia por anos até descobrir, em 1831, que sim — e sua resposta se tornou a base de toda a geração de energia elétrica do planeta.</p>

<h2>A Lei de Faraday</h2>
<p>Faraday descobriu que um ímã parado perto de uma bobina não faz nada. Mas se ele <em>se move</em> — se o campo magnético que atravessa a bobina <strong>varia</strong> —, surge uma corrente induzida.</p>
<p class='formula'>a variação do fluxo magnético induz uma tensão elétrica<small>o que importa é a MUDANÇA do campo, não o campo em si</small></p>
<p>Movimento e mudança são a chave: aproximar ou afastar o ímã, girar a bobina, ligar e desligar a corrente. Qualquer variação gera eletricidade.</p>

<h2>Geradores: de onde vem a energia elétrica</h2>
<p>Essa descoberta é a razão de existir a rede elétrica. Num <strong>gerador</strong>, algo faz uma bobina girar dentro de um campo magnético — e o fluxo variável induz corrente. Todo o resto (hidrelétrica, termelétrica, nuclear, eólica) é apenas a maneira de <em>girar</em> essa bobina: com a queda d'água, com vapor, com o vento.</p>
<div class='example'>
  <span class='tag'>Exemplo · a usina inteira em uma frase</span>
  <p>Numa hidrelétrica: a água represada (energia potencial, Mód. 4) cai e gira uma turbina (energia cinética), que gira a bobina do gerador dentro de um campo magnético — e a indução de Faraday transforma esse movimento em energia elétrica que chega à sua casa.</p>
</div>

<h2>Maxwell: a grande unificação</h2>
<p>Em 1864, James Clerk <strong>Maxwell</strong> reuniu tudo o que se sabia sobre eletricidade e magnetismo em quatro equações. Elas mostram que os dois fenômenos são faces de uma única entidade: o <strong>campo eletromagnético</strong>. Um campo elétrico variável gera um campo magnético, que ao variar gera um campo elétrico, e assim por diante.</p>

<h2>A previsão espantosa: a luz</h2>
<p>As equações previam que essa dança de campos poderia se propagar pelo espaço como uma <strong>onda eletromagnética</strong> — e permitiam calcular sua velocidade. O resultado deu cerca de 300 000 km/s: exatamente a velocidade da luz, já medida experimentalmente.</p>
<p>A conclusão foi inevitável e revolucionária: <strong>a luz é uma onda eletromagnética</strong>. Óptica e eletromagnetismo, até então separados, eram a mesma física. Maxwell também previu ondas de outras frequências — hoje o <em>espectro eletromagnético</em>: ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e gama, todas a mesma coisa, mudando apenas a frequência.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Geração e transmissão de energia:</strong> geradores e transformadores (que só funcionam com corrente alternada, pois exigem fluxo variável).</li>
  <li><strong>Comunicações:</strong> rádio, TV, wi-fi, celular e radar são ondas eletromagnéticas previstas por Maxwell.</li>
  <li><strong>Carregadores por indução e cartões:</strong> celulares e cartões sem contato transferem energia e dados por indução.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que basta um ímã <em>parado</em> perto de uma bobina para gerar corrente. Não gera nada: é preciso <strong>variação</strong> do fluxo magnético — movimento, giro ou mudança na corrente. Campo constante, corrente induzida nula.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Lei de Faraday: a variação do fluxo magnético induz tensão elétrica.</li>
  <li>Geradores convertem movimento em eletricidade — a base de toda usina.</li>
  <li>Maxwell unificou eletricidade e magnetismo em quatro equações.</li>
  <li>Elas revelaram que a luz é uma onda eletromagnética, e previram todo o espectro (rádio a raios gama).</li>
</ul>`,relatedIds:["fis-eletromagnetismo","efeito-fotoeletrico"],simulation:null},{id:"fis-relatividade",topic:"Física",title:"A Relatividade de Einstein",summary:"Em 1905, um funcionário de escritório de patentes mostrou que o tempo não passa igual para todos, que massa é energia — e que a gravidade é a curvatura do próprio espaço.",image:"https://image.pollinations.ai/prompt/Einstein%20relativity%20spacetime%20curvature%20light%20speed%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Relatividade Restrita","Dilatação do Tempo","E = mc²","Relatividade Geral"],content:`
<p>No fim do século XIX, a física parecia completa: Newton explicava o movimento, Maxwell explicava a luz. Mas havia uma rachadura — as equações de Maxwell diziam que a luz viaja sempre a 300 000 km/s, e isso era incompatível com Newton. Em 1905, <strong>Albert Einstein</strong> resolveu o conflito destruindo a noção mais básica que tínhamos: a de que o tempo é absoluto.</p>

<h2>Os dois postulados</h2>
<p>A <strong>Relatividade Restrita</strong> parte de duas afirmações simples:</p>
<ul>
  <li>As leis da física são as mesmas para todos os observadores em movimento uniforme.</li>
  <li>A <strong>velocidade da luz no vácuo é a mesma para todos</strong>, independentemente de quem mede ou de como se move.</li>
</ul>
<p>O segundo é absurdo para a intuição. Se você corre atrás de um raio de luz a 200 000 km/s, ele ainda se afasta de você a 300 000 km/s — não a 100 000. Para que isso seja verdade, algo tem de ceder: o <em>tempo</em> e o <em>espaço</em>.</p>

<h2>O tempo não passa igual para todos</h2>
<p>A consequência é a <strong>dilatação do tempo</strong>: para um objeto em alta velocidade, o tempo passa <em>mais devagar</em> em relação a quem está parado. Também há a <strong>contração do comprimento</strong>: objetos velozes encurtam na direção do movimento.</p>
<div class='example'>
  <span class='tag'>Exemplo · o GPS precisa de Einstein</span>
  <p>Os satélites do GPS se movem rápido (o tempo atrasa, pela relatividade restrita) e estão longe da Terra, onde a gravidade é menor (o tempo adianta, pela relatividade geral). Sem corrigir esses dois efeitos, o GPS acumularia erros de <strong>cerca de 10 km por dia</strong>. A relatividade não é abstração: ela está no seu celular.</p>
</div>

<h2>E = mc²: massa é energia</h2>
<p>Talvez a equação mais famosa da ciência, ela revela que massa e energia são a <em>mesma coisa</em>, em formas diferentes:</p>
<p class='formula'>E = m · c²<small>como c² é gigantesco, uma massa minúscula guarda energia colossal</small></p>
<p>É daqui que vem a energia do Sol (fusão nuclear, convertendo massa em energia) e a das usinas nucleares. Poucos gramas de matéria equivalem a uma cidade abastecida por dias.</p>

<h2>A Relatividade Geral: gravidade é geometria</h2>
<p>Em 1915, Einstein foi além e reinterpretou a gravidade. Ela não seria uma “força” à distância, como Newton pensava, mas a <strong>curvatura do espaço-tempo</strong> causada pela massa. Corpos não são “puxados”: eles seguem o caminho mais reto possível num espaço deformado — como uma bola rolando num lençol esticado com um peso no centro.</p>
<p>Essa teoria previu a curvatura da luz por corpos massivos (confirmada em 1919, num eclipse observado em Sobral, no Ceará), os buracos negros e as ondas gravitacionais — todas confirmadas depois. Você pode ver a curvatura da luz na <em>simulação de Buraco Negro</em>, no módulo de Gravitação.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>GPS e satélites:</strong> correções relativísticas são obrigatórias para a precisão de metros.</li>
  <li><strong>Energia nuclear e medicina:</strong> E = mc² fundamenta reatores, PET-scans e radioterapia.</li>
  <li><strong>Astrofísica:</strong> buracos negros, lentes gravitacionais e a expansão do universo.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que “tudo é relativo” na relatividade. Ao contrário: o que é <em>absoluto</em> e igual para todos é a velocidade da luz e as leis da física. O que se torna relativo — dependente do observador — são medidas de tempo e espaço.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>A velocidade da luz é a mesma para todos os observadores.</li>
  <li>Consequências: dilatação do tempo e contração do comprimento em altas velocidades.</li>
  <li>E = mc²: massa e energia são equivalentes (Sol, usinas nucleares).</li>
  <li>Relatividade Geral: gravidade é a curvatura do espaço-tempo (GPS, buracos negros).</li>
</ul>`,relatedIds:["fis-quantizacao","buraco-negro"],simulation:null},{id:"fis-quantizacao",topic:"Física",title:"A Quantização da Energia e o Efeito Fotoelétrico",summary:"A segunda revolução de 1900: a energia não é contínua, vem em pacotes. A descoberta que rendeu o Nobel a Einstein — e não foi a relatividade.",image:"https://image.pollinations.ai/prompt/Quantum%20energy%20packets%20photons%20photoelectric%20effect%20Planck%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Quantização","Constante de Planck","Fóton","Efeito Fotoelétrico"],content:`
<p>Enquanto Einstein reformulava o espaço e o tempo, outra revolução acontecia em paralelo — e seria ainda mais estranha. Em 1900, Max <strong>Planck</strong> descobriu que a energia não flui de forma contínua, mas em <em>pacotes indivisíveis</em>. Nascia a física quântica.</p>

<h2>A energia vem em pacotes</h2>
<p>Estudando a radiação emitida por corpos quentes, Planck só conseguiu explicar os dados assumindo algo que ele mesmo considerou um truque matemático desesperado: a energia é trocada em porções mínimas, os <strong>quanta</strong>, proporcionais à frequência:</p>
<p class='formula'>E = h · f<small>h = constante de Planck ≈ 6,63 × 10⁻³⁴ J·s (um número minúsculo)</small></p>
<p>É como se a energia fosse dinheiro: existe uma “moeda mínima” e não se pode pagar meia moeda. Como h é minúsculo, não percebemos essa granulação no mundo cotidiano — mas ela domina o mundo atômico.</p>

<h2>O enigma do efeito fotoelétrico</h2>
<p>Havia um mistério: luz incidindo sobre um metal arranca elétrons dele. Mas o comportamento contrariava a teoria ondulatória:</p>
<ul>
  <li>Luz vermelha, por mais <em>intensa</em> que fosse, não arrancava elétron nenhum.</li>
  <li>Luz ultravioleta, mesmo fraquíssima, arrancava elétrons <em>imediatamente</em>.</li>
</ul>
<p>Se a luz fosse só uma onda, acumular energia (mais intensidade, mais tempo) deveria bastar. Não bastava.</p>

<h2>A solução de Einstein: os fótons</h2>
<p>Em 1905, Einstein propôs que a luz é feita de <strong>fótons</strong> — pacotes de energia E = h·f. Cada elétron é arrancado por <em>um único fóton</em>, num choque individual. Assim:</p>
<p class='formula'>E_cinética máx = h·f − φ<small>φ = função trabalho (energia mínima para arrancar o elétron daquele metal)</small></p>
<p>Se o fóton não tiver energia suficiente (frequência baixa demais), nada acontece — não importa quantos fótons cheguem. Acima da frequência de corte, qualquer luz arranca elétrons. A <em>intensidade</em> muda só o <strong>número</strong> de elétrons; a <em>frequência</em> muda a <strong>energia</strong> de cada um. Foi por essa explicação — não pela relatividade — que Einstein ganhou o Nobel de 1921.</p>
<div class='example'>
  <span class='tag'>Exemplo · veja acontecer</span>
  <p>A <em>simulação do Efeito Fotoelétrico</em>, na próxima aula deste módulo, deixa você variar a frequência e a intensidade e trocar o metal do alvo — observando exatamente a frequência de corte e o Kmax = hf − φ em ação.</p>
</div>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Painéis solares:</strong> convertem fótons em corrente elétrica pelo efeito fotoelétrico.</li>
  <li><strong>Sensores e câmeras:</strong> sensores CCD/CMOS contam fótons para formar imagens.</li>
  <li><strong>Portas automáticas e alarmes:</strong> células fotoelétricas detectam a interrupção de um feixe de luz.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que luz mais <em>forte</em> (mais intensa) sempre arranca mais elétrons ou elétrons mais energéticos. Abaixo da frequência de corte, intensidade nenhuma funciona. E acima dela, aumentar a intensidade aumenta a <em>quantidade</em> de elétrons, nunca a energia individual de cada um — isso só a frequência muda.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Planck: a energia é quantizada, em pacotes E = h·f.</li>
  <li>Einstein: a luz é feita de fótons; cada um arranca um elétron.</li>
  <li>Kmax = h·f − φ; existe uma frequência de corte abaixo da qual nada acontece.</li>
  <li>Intensidade muda o número de elétrons; frequência muda a energia de cada um.</li>
</ul>`,relatedIds:["fis-relatividade","efeito-fotoeletrico"],simulation:null},{id:"fis-dualidade",topic:"Física",title:"Dualidade Onda-Partícula e o Princípio da Incerteza",summary:"A luz é onda ou partícula? A resposta quântica é: depende de como você pergunta. E há um limite fundamental para o quanto se pode saber sobre a natureza.",image:"https://image.pollinations.ai/prompt/Wave%20particle%20duality%20double%20slit%20uncertainty%20principle%2C%20elegant%20quantum%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Dualidade Onda-Partícula","de Broglie","Princípio da Incerteza","Colapso da Função de Onda"],content:`
<p>A física do século XIX tinha uma certeza confortável: ondas eram ondas, partículas eram partículas. A quântica destruiu essa fronteira. A luz, que Maxwell provara ser onda, se comportava como partícula no efeito fotoelétrico. E, pior: a matéria também mostrou ser onda.</p>

<h2>A dualidade se estende à matéria</h2>
<p>Em 1924, Louis de <strong>Broglie</strong> fez uma proposta ousada: se a luz (onda) pode agir como partícula, então partículas de matéria (elétrons) devem poder agir como <em>onda</em>. Ele associou a toda partícula um comprimento de onda:</p>
<p class='formula'>λ = h / p<small>comprimento de onda = constante de Planck ÷ quantidade de movimento</small></p>
<p>A previsão foi confirmada: feixes de elétrons produzem padrões de <em>difração e interferência</em>, exatamente como ondas. Objetos do dia a dia também teriam um λ — mas tão absurdamente pequeno que é irrelevante.</p>

<h2>A fenda dupla: o coração do mistério</h2>
<p>Feynman dizia que o experimento da <strong>fenda dupla</strong> contém “o único mistério” da mecânica quântica. Elétrons enviados <em>um a um</em> contra duas fendas formam, ao longo do tempo, um padrão de <em>interferência</em> — como se cada elétron tivesse passado pelas duas fendas ao mesmo tempo e interferido consigo mesmo.</p>
<p>Mais estranho ainda: se instalarmos um detector para descobrir por qual fenda cada elétron passou, o padrão de interferência <strong>desaparece</strong> e surgem duas faixas simples. O ato de observar muda o resultado — o que chamamos de <em>colapso</em> da função de onda. A <em>simulação da Fenda Dupla</em>, na próxima aula, permite ligar e desligar esse detector.</p>

<h2>O Princípio da Incerteza</h2>
<p>Em 1927, Werner <strong>Heisenberg</strong> mostrou que existe um limite fundamental para o que podemos saber: quanto mais precisamente conhecemos a <em>posição</em> de uma partícula, menos precisamente podemos conhecer sua <em>quantidade de movimento</em> — e vice-versa.</p>
<p class='formula'>Δx · Δp ≥ h / 4π<small>o produto das incertezas nunca pode ser menor que esse limite</small></p>
<p>O ponto crucial: <strong>isso não é limitação dos instrumentos</strong>. Não é que nossos aparelhos sejam ruins ou que “atrapalhemos” a partícula ao medir. É uma propriedade da própria natureza — a partícula simplesmente <em>não possui</em> posição e momento perfeitamente definidos ao mesmo tempo.</p>

<h2>Onde isso é usado</h2>
<ul>
  <li><strong>Microscópio eletrônico:</strong> usa o comprimento de onda minúsculo dos elétrons para enxergar muito além do limite da luz visível.</li>
  <li><strong>Química quântica:</strong> a estrutura dos orbitais atômicos é consequência direta do caráter ondulatório do elétron.</li>
  <li><strong>Eletrônica moderna:</strong> o comportamento quântico dos elétrons rege semicondutores e transistores.</li>
</ul>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Interpretar a incerteza como “erro de medida” ou dizer que o observador “consciente” causa o colapso. A incerteza é intrínseca à natureza, e “observar” significa <em>interagir</em> fisicamente com o sistema (um detector, um fóton) — não exige consciência humana.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Luz e matéria exibem comportamento de onda <em>e</em> de partícula (de Broglie: λ = h/p).</li>
  <li>Na fenda dupla, elétrons um a um formam interferência; observar o caminho a destrói.</li>
  <li>Incerteza de Heisenberg: Δx·Δp ≥ h/4π — limite da natureza, não do instrumento.</li>
  <li>É a base do microscópio eletrônico e da estrutura atômica.</li>
</ul>`,relatedIds:["fis-quantizacao","fenda-dupla"],simulation:null},{id:"fis-mundo-quantico",topic:"Física",title:"O Mundo Quântico e o Fim da Trilha",summary:"Superposição, tunelamento e emaranhamento — os fenômenos que fazem o Sol brilhar, a memória do celular funcionar e Einstein reclamar. E o encerramento da jornada.",image:"https://image.pollinations.ai/prompt/Quantum%20world%20superposition%20tunneling%20entanglement%2C%20elegant%20physics%2C%20dark%20background?width=800&height=500&nologo=true",level:"Avançado",concepts:["Superposição","Tunelamento Quântico","Emaranhamento","Tecnologias Quânticas"],content:`
<p>Chegamos ao topo da trilha. Nesta última aula, reunimos os fenômenos mais estranhos — e mais úteis — da mecânica quântica, aqueles que as simulações a seguir permitem explorar de perto.</p>

<h2>Superposição: ser várias coisas ao mesmo tempo</h2>
<p>Enquanto não é medido, um sistema quântico pode estar numa <strong>superposição</strong> de estados: não “em um ou outro, mas não sabemos qual”, e sim genuinamente em <em>todos ao mesmo tempo</em>. A <em>função de onda</em> descreve as probabilidades de cada resultado; ao medir, ela colapsa em um único valor.</p>
<p>Foi para criticar essa ideia que Schrödinger inventou seu famoso <strong>gato</strong>: se um átomo em superposição (decaído e não-decaído) aciona um veneno, o gato estaria formalmente vivo <em>e</em> morto até a caixa ser aberta. O paradoxo continua movendo debates sobre o que “medir” significa.</p>

<h2>Tunelamento: atravessar o impossível</h2>
<p>Como a partícula é descrita por uma onda que não termina bruscamente numa barreira, existe uma probabilidade real de ela aparecer <em>do outro lado</em> de um obstáculo que, classicamente, não teria energia para vencer. É o <strong>tunelamento quântico</strong>.</p>
<div class='example'>
  <span class='tag'>Exemplo · por que o Sol brilha</span>
  <p>No núcleo do Sol, os prótons deveriam se repelir eletricamente com força demais para se fundirem — a temperatura não é suficiente. Eles se fundem mesmo assim porque <strong>tunelam</strong> através da barreira. Sem tunelamento quântico, o Sol não brilharia e não haveria vida na Terra. O mesmo efeito faz funcionar a memória flash do seu celular.</p>
</div>

<h2>Emaranhamento: a “ação fantasmagórica”</h2>
<p>Duas partículas podem ficar <strong>emaranhadas</strong>: seus estados passam a ser descritos em conjunto, de modo que medir uma determina instantaneamente o resultado da outra — por mais distantes que estejam. Einstein detestou a ideia e a chamou de “ação fantasmagórica à distância”, acreditando que faltavam “variáveis ocultas”.</p>
<p>Em 1964, John Bell propôs um teste decisivo, e os experimentos (Nobel de Física de 2022) deram a vitória à mecânica quântica: a correlação supera qualquer explicação clássica. Importante: isso <em>não</em> permite enviar informação mais rápido que a luz — só ao comparar os resultados pelos meios normais a correlação aparece.</p>

<h2>As tecnologias quânticas</h2>
<ul>
  <li><strong>Computação quântica:</strong> qubits em superposição e emaranhados exploram muitos caminhos de cálculo simultaneamente.</li>
  <li><strong>Criptografia quântica:</strong> qualquer espionagem perturba o sistema e é detectada — segurança garantida pela física.</li>
  <li><strong>Sensores e relógios atômicos:</strong> precisão extrema baseada em transições quânticas.</li>
</ul>

<h2>O fim da trilha</h2>
<p>Começamos medindo comprimentos com uma régua e terminamos com partículas que atravessam paredes e se comunicam à distância. No caminho, percorremos a cinemática, as leis de Newton, a energia, a gravitação, os fluidos, o calor, as ondas, a luz, a eletricidade e o magnetismo — vendo cada peça se encaixar na seguinte.</p>
<p>Repare como tudo se costurou: a conservação de energia reapareceu no calor e no MHS; a lei do inverso do quadrado uniu gravidade e eletricidade; Maxwell revelou a luz como onda eletromagnética; e a quântica reescreveu tudo em escala atômica. A física é uma só história, contada em capítulos. Parabéns por chegar ao fim dela.</p>

<div class='callout'>
  <span class='tag'>Erro comum</span>
  <p>Achar que o emaranhamento permite comunicação instantânea. Não permite: os resultados individuais são aleatórios, e só ao <em>comparar</em> as listas (por um canal comum, limitado pela luz) a correlação se revela. A relatividade continua intacta.</p>
</div>

<h2>Resumo</h2>
<ul>
  <li>Superposição: o sistema está em vários estados até ser medido (gato de Schrödinger).</li>
  <li>Tunelamento: partículas atravessam barreiras proibidas — faz o Sol brilhar e a memória flash funcionar.</li>
  <li>Emaranhamento: correlação instantânea confirmada (Nobel 2022), sem transmitir informação.</li>
  <li>Fim da trilha: da régua ao qubit, a física é uma história única e encadeada.</li>
</ul>`,relatedIds:["fis-dualidade","tunelamento"],simulation:null}],Ve=[...KC,...XC,...YC,...tS,...nS,...JC,...ZC,...eS,...aS,...oS],Hn=["Todas","Física Clássica","Física Quântica","Matemática","Química","Astronomia","Biologia","Medicina","Informática"],Oa={"Física Clássica":"#4D9FFF","Física Quântica":"#A98BFF",Matemática:"#FFD23F",Química:"#FF8A3D",Astronomia:"#3FD6E0",Biologia:"#4ADE80",Medicina:"#FF5C7A",Informática:"#F06FE0"},sS={Iniciante:{bg:"rgba(255,255,255,0.06)",text:"#d4d4d4"},Intermediário:{bg:"rgba(255,255,255,0.06)",text:"#9a9a9a"},Avançado:{bg:"rgba(255,255,255,0.06)",text:"#707070"}},rS=["orbitas-planetarias","entrelaçamento-quantico","fotossintese","computador-quantico"];function $n(e){return Ve.find(a=>a.id===e)}function iS(){return rS.map($n).filter(Boolean)}const lS={"Física Clássica":"pendulo-simples","Física Quântica":"fenda-dupla",Matemática:"mandelbrot",Química:"gases-ideais",Astronomia:"orbitas-planetarias",Biologia:"dna",Medicina:"ecg",Informática:"ordenacao"};function uS(){return Hn.filter(e=>e!=="Todas").map(e=>{const a=Ve.filter(o=>o.topic===e&&o.simulation);return a.find(o=>o.simulation.component===lS[e])??a[0]}).filter(Boolean)}const dS=[["Início","/"],["Acervo","/acervo"],["Simulações","/acervo?sim=1"],["Sobre","/sobre"]];function mS(){const e=new Date().getFullYear();return m.jsx("footer",{className:"relative mt-auto border-t-2 border-white overflow-hidden",children:m.jsxs("div",{className:"container-xl pt-section pb-8",children:[m.jsxs("div",{className:"grid gap-14 lg:grid-cols-[1.2fr_1fr] mb-16 lg:mb-24",children:[m.jsxs("div",{className:"flex flex-col gap-6 max-w-md",children:[m.jsxs(W,{to:"/",className:"flex items-center gap-2.5 w-fit",children:[m.jsx(D0,{size:28}),m.jsx("span",{className:"font-display font-700 text-sl-text text-[1.1rem]",children:"SimuLab"})]}),m.jsx("p",{className:"text-sl-dim text-[1rem] leading-relaxed",children:"Simulações interativas e artigos de física, química, biologia, astronomia, matemática, medicina e computação. Grátis, sem cadastro."})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-10",children:[m.jsxs("nav",{"aria-label":"Rodapé",className:"flex flex-col gap-3",children:[m.jsx("h3",{className:"text-sl-muted text-[0.875rem] mb-1",children:"Navegar"}),dS.map(([a,o])=>m.jsx(W,{to:o,className:"text-[1rem] text-sl-text w-fit",children:m.jsx(Ho,{children:a})},o))]}),m.jsxs("nav",{"aria-label":"Áreas",className:"flex flex-col gap-3",children:[m.jsx("h3",{className:"text-sl-muted text-[0.875rem] mb-1",children:"Áreas"}),Hn.filter(a=>a!=="Todas").map(a=>m.jsxs(W,{to:`/acervo?topico=${encodeURIComponent(a)}`,className:"flex items-center gap-2.5 text-[1rem] text-sl-text w-fit",children:[m.jsx("span",{className:"w-2 h-2 shrink-0",style:{background:Oa[a]},"aria-hidden":"true"}),m.jsx(Ho,{children:a})]},a))]})]})]}),m.jsx(WC,{text:"SIMULAB",className:"select-none text-white text-[clamp(4rem,21vw,20rem)] -mx-[2vw] mb-8"}),m.jsxs("div",{className:`border-t border-sl-border2 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2
                        text-sl-muted text-[0.875rem]`,children:[m.jsxs("p",{children:["© ",e," SimuLab"]}),m.jsx("p",{children:"Feito no Brasil"})]})]})})}var sf="1.3.25";function F0(e,a,o){return Math.max(e,Math.min(a,o))}function cS(e,a,o){return(1-o)*e+o*a}function pS(e,a,o,t){return cS(e,a,1-Math.exp(-o*t))}function fS(e,a){return(e%a+a)%a}var gS=class{constructor(){D(this,"isRunning",!1);D(this,"value",0);D(this,"from",0);D(this,"to",0);D(this,"currentTime",0);D(this,"lerp");D(this,"duration");D(this,"easing");D(this,"onUpdate")}advance(e){var o;if(!this.isRunning)return;let a=!1;if(this.duration&&this.easing){this.currentTime+=e;const t=F0(0,this.currentTime/this.duration,1);a=t>=1;const n=a?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=pS(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,a=!0)):(this.value=this.to,a=!0);a&&this.stop(),(o=this.onUpdate)==null||o.call(this,this.value,a)}stop(){this.isRunning=!1}fromTo(e,a,{lerp:o,duration:t,easing:n,onStart:s,onUpdate:r}){this.from=this.value=e,this.to=a,this.lerp=o,this.duration=t,this.easing=n,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=r}};function hS(e,a){let o;return function(...t){clearTimeout(o),o=setTimeout(()=>{o=void 0,e.apply(this,t)},a)}}var vS=class{constructor(e,a,{autoResize:o=!0,debounce:t=250}={}){D(this,"width",0);D(this,"height",0);D(this,"scrollHeight",0);D(this,"scrollWidth",0);D(this,"debouncedResize");D(this,"wrapperResizeObserver");D(this,"contentResizeObserver");D(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});D(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});D(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=a,o&&(this.debouncedResize=hS(this.resize,t),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,a;(e=this.wrapperResizeObserver)==null||e.disconnect(),(a=this.contentResizeObserver)==null||a.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},V0=class{constructor(){D(this,"events",{})}emit(e,...a){var t;const o=this.events[e]||[];for(let n=0,s=o.length;n<s;n++)(t=o[n])==null||t.call(o,...a)}on(e,a){return this.events[e]?this.events[e].push(a):this.events[e]=[a],()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(t=>a!==t)}}off(e,a){var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(t=>a!==t)}destroy(){this.events={}}};const xS=100/6,Ka={passive:!1};function rf(e,a){return e===1?xS:e===2?a:1}var bS=class{constructor(e,a={wheelMultiplier:1,touchMultiplier:1}){D(this,"touchStart",{x:0,y:0});D(this,"lastDelta",{x:0,y:0});D(this,"window",{width:0,height:0});D(this,"emitter",new V0);D(this,"onTouchStart",e=>{const{clientX:a,clientY:o}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});D(this,"onTouchMove",e=>{const{clientX:a,clientY:o}=e.targetTouches?e.targetTouches[0]:e,t=-(a-this.touchStart.x)*this.options.touchMultiplier,n=-(o-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=a,this.touchStart.y=o,this.lastDelta={x:t,y:n},this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});D(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});D(this,"onWheel",e=>{let{deltaX:a,deltaY:o,deltaMode:t}=e;const n=rf(t,this.window.width),s=rf(t,this.window.height);a*=n,o*=s,a*=this.options.wheelMultiplier,o*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:a,deltaY:o,event:e})});D(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=a,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ka),this.element.addEventListener("touchstart",this.onTouchStart,Ka),this.element.addEventListener("touchmove",this.onTouchMove,Ka),this.element.addEventListener("touchend",this.onTouchEnd,Ka)}on(e,a){return this.emitter.on(e,a)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ka),this.element.removeEventListener("touchstart",this.onTouchStart,Ka),this.element.removeEventListener("touchmove",this.onTouchMove,Ka),this.element.removeEventListener("touchend",this.onTouchEnd,Ka)}};const lf=e=>Math.min(1,1.001-2**(-10*e));var yS=class{constructor({wrapper:e=window,content:a=document.documentElement,eventsTarget:o=e,smoothWheel:t=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:r=1.7,duration:i,easing:l,lerp:u=.1,infinite:d=!1,orientation:c="vertical",gestureOrientation:p=c==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:h=1,autoResize:y=!0,prevent:q,virtualScroll:g,overscroll:f=!0,autoRaf:b=!1,anchors:E=!1,autoToggle:A=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:z=!1,naiveDimensions:w=z,stopInertiaOnNavigate:N=!1}={}){D(this,"_isScrolling",!1);D(this,"_isStopped",!1);D(this,"_isLocked",!1);D(this,"_preventNextNativeScrollEvent",!1);D(this,"_resetVelocityTimeout",null);D(this,"_rafId",null);D(this,"_isDraggingSelection",!1);D(this,"isTouching");D(this,"isIos");D(this,"time",0);D(this,"userData",{});D(this,"lastVelocity",0);D(this,"velocity",0);D(this,"direction",0);D(this,"options");D(this,"targetScroll");D(this,"animatedScroll");D(this,"animate",new gS);D(this,"emitter",new V0);D(this,"dimensions");D(this,"virtualScroll");D(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});D(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});D(this,"onTransitionEnd",e=>{var a;(a=e.propertyName)!=null&&a.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()});D(this,"onClick",e=>{const a=e.composedPath().filter(t=>t instanceof HTMLAnchorElement&&t.href).map(t=>new URL(t.href)),o=new URL(window.location.href);if(this.options.anchors){const t=a.find(n=>o.host===n.host&&o.pathname===n.pathname&&n.hash);if(t){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(t.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&a.some(t=>o.host===t.host&&o.pathname!==t.pathname)){this.reset();return}});D(this,"onPointerDown",e=>{e.button===1&&this.reset()});D(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:a,deltaY:o,event:t}=e;if(this.emitter.emit("virtual-scroll",{deltaX:a,deltaY:o,event:t}),t.ctrlKey||t.lenisStopPropagation)return;const n=t.type.includes("touch"),s=t.type.includes("wheel");if(n&&this.isIos&&(t.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(t)),this._isDraggingSelection)){t.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=t.type==="touchstart"||t.type==="touchmove";const r=a===0&&o===0;if(this.options.syncTouch&&n&&t.type==="touchstart"&&r&&!this.isStopped&&!this.isLocked){this.reset();return}const i=this.options.gestureOrientation==="vertical"&&o===0||this.options.gestureOrientation==="horizontal"&&a===0;if(r||i)return;let l=t.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,d=Math.abs(a)>=Math.abs(o)?"horizontal":"vertical";if(l.find(h=>{var y,q,g,f,b;return h instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(h))||((y=h.hasAttribute)==null?void 0:y.call(h,"data-lenis-prevent"))||d==="vertical"&&((q=h.hasAttribute)==null?void 0:q.call(h,"data-lenis-prevent-vertical"))||d==="horizontal"&&((g=h.hasAttribute)==null?void 0:g.call(h,"data-lenis-prevent-horizontal"))||n&&((f=h.hasAttribute)==null?void 0:f.call(h,"data-lenis-prevent-touch"))||s&&((b=h.hasAttribute)==null?void 0:b.call(h,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(h,{deltaX:a,deltaY:o}))}))return;if(this.isStopped||this.isLocked){t.cancelable&&t.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),t.lenisStopPropagation=!0;return}let c=o;this.options.gestureOrientation==="both"?c=Math.abs(o)>Math.abs(a)?o:a:this.options.gestureOrientation==="horizontal"&&(c=a),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&o>0||this.animatedScroll===this.limit&&o<0))&&(t.lenisStopPropagation=!0),t.cancelable&&t.preventDefault();const p=n&&this.options.syncTouch,v=n&&t.type==="touchend";v&&(c=Math.sign(c)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+c,{programmatic:!1,...p?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});D(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});D(this,"raf",e=>{const a=e-(this.time||e);this.time=e,this.animate.advance(a*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=sf,window.lenis||(window.lenis={}),window.lenis.version=sf,c==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof i=="number"&&typeof l!="function"?l=lf:typeof l=="function"&&typeof i!="number"&&(i=1),this.options={wrapper:e,content:a,eventsTarget:o,smoothWheel:t,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:r,duration:i,easing:l,lerp:u,infinite:d,gestureOrientation:p,orientation:c,touchMultiplier:v,wheelMultiplier:h,autoResize:y,prevent:q,virtualScroll:g,overscroll:f,autoRaf:b,anchors:E,autoToggle:A,allowNestedScroll:C,naiveDimensions:w,stopInertiaOnNavigate:N},this.dimensions=new vS(e,a,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new bS(o,{touchMultiplier:v,wheelMultiplier:h}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,a){return this.emitter.on(e,a)}off(e,a){return this.emitter.off(e,a)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}isTouchOnSelectionHandle(e){const a=window.getSelection();if(!a||a.isCollapsed||a.rangeCount===0)return!1;const o=e.targetTouches[0]??e.changedTouches[0];if(!o)return!1;const t=a.getRangeAt(0).getClientRects();if(t.length===0)return!1;const n=t[0],s=t[t.length-1],r=40,i=Math.hypot(o.clientX-n.left,o.clientY-n.top)<=r,l=Math.hypot(o.clientX-s.right,o.clientY-s.bottom)<=r;return i||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:a=0,immediate:o=!1,lock:t=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:r=n?this.options.duration:void 0,easing:i=n?this.options.easing:void 0,onStart:l,onComplete:u,force:d=!1,userData:c}={}){if((this.isStopped||this.isLocked)&&!d)return;let p=e,v=a;if(typeof p=="string"&&["top","left","start","#"].includes(p))p=0;else if(typeof p=="string"&&["bottom","right","end"].includes(p))p=this.limit;else{let h=null;if(typeof p=="string"?(h=p.startsWith("#")?document.getElementById(p.slice(1)):document.querySelector(p),h||(p==="#top"?p=0:console.warn("Lenis: Target not found",p))):p instanceof HTMLElement&&(p!=null&&p.nodeType)&&(h=p),h){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?E.left:E.top}const y=h.getBoundingClientRect(),q=getComputedStyle(h),g=this.isHorizontal?Number.parseFloat(q.scrollMarginLeft):Number.parseFloat(q.scrollMarginTop),f=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(f.scrollPaddingLeft):Number.parseFloat(f.scrollPaddingTop);p=(this.isHorizontal?y.left:y.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof p=="number"){if(p+=v,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const h=p-this.animatedScroll;h>this.limit/2?p-=this.limit:h<-this.limit/2&&(p+=this.limit)}}else p=F0(0,p,this.limit);if(p===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=c??{},o){this.animatedScroll=this.targetScroll=p,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=p),typeof r=="number"&&typeof i!="function"?i=lf:typeof i=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,p,{duration:r,easing:i,lerp:s,onStart:()=>{t&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(h,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),n&&(this.targetScroll=h),y||this.emit(),y&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:a,deltaY:o}){const t=Date.now();e._lenis||(e._lenis={});const n=e._lenis;let s,r,i,l,u,d,c,p,v,h;if(t-(n.time??0)>2e3){n.time=Date.now();const C=window.getComputedStyle(e);if(n.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),r=["auto","overlay","scroll"].includes(C.overflowY),u=["auto"].includes(C.overscrollBehaviorX),d=["auto"].includes(C.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=r,!(s||r))return!1;c=e.scrollWidth,p=e.scrollHeight,v=e.clientWidth,h=e.clientHeight,i=c>v,l=p>h,n.isScrollableX=i,n.isScrollableY=l,n.scrollWidth=c,n.scrollHeight=p,n.clientWidth=v,n.clientHeight=h,n.hasOverscrollBehaviorX=u,n.hasOverscrollBehaviorY=d}else i=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,r=n.hasOverflowY,c=n.scrollWidth,p=n.scrollHeight,v=n.clientWidth,h=n.clientHeight,u=n.hasOverscrollBehaviorX,d=n.hasOverscrollBehaviorY;if(!(s&&i||r&&l))return!1;const y=Math.abs(a)>=Math.abs(o)?"horizontal":"vertical";let q,g,f,b,E,A;if(y==="horizontal")q=Math.round(e.scrollLeft),g=c-v,f=a,b=s,E=i,A=u;else if(y==="vertical")q=Math.round(e.scrollTop),g=p-h,f=o,b=r,E=l,A=d;else return!1;return!A&&(q>=g||q<=0)?!0:(f>0?q<g:q>0)&&b&&E}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?fS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(const e of Array.from(this.rootElement.classList))(e==="lenis"||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}};function qS({children:e}){return x.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=new yS({duration:1.1,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0,touchMultiplier:1.5});document.documentElement.classList.add("lenis"),window.__lenis=o;let t;function n(s){o.raf(s),t=requestAnimationFrame(n)}return t=requestAnimationFrame(n),()=>{cancelAnimationFrame(t),o.destroy(),window.__lenis=null,document.documentElement.classList.remove("lenis")}},[]),e}const Yt=.2;function ES(){const e=x.useRef(null),a=x.useRef(null),o=x.useRef(null),[t,n]=x.useState(!1);return x.useEffect(()=>{const s=window.matchMedia("(hover: hover) and (pointer: fine)").matches,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;!s||r||n(!0)},[]),x.useEffect(()=>{if(!t)return;const s=e.current,r=a.current,i=o.current;document.documentElement.classList.add("has-custom-cursor");const l={x:-200,y:-200},u={x:-200,y:-200,w:24,h:24,rot:0};let d=null,c="free",p=!1,v=!1;function h(A){var w,N,S,V;if((w=A.classList)!=null&&w.contains("sim-grab")){c="active",d=null;return}const C=(N=A.closest)==null?void 0:N.call(A,"[data-cursor-label]");if(C){c="label",d=null,i.textContent=C.getAttribute("data-cursor-label")||"Abrir";return}const z=(S=A.closest)==null?void 0:S.call(A,'[data-cursor="frame"]');if(z){c="frame",d=z;return}c=(V=A.closest)!=null&&V.call(A,'a, button, [role="button"], input, select, label, summary')?"active":"free",d=null}const y=A=>{l.x=A.clientX,l.y=A.clientY,v||(v=!0,u.x=l.x,u.y=l.y),h(A.target)},q=()=>{p=!0},g=()=>{p=!1},f=A=>{A.relatedTarget||(l.x=-200,l.y=-200,v=!1)};window.addEventListener("mousemove",y,{passive:!0}),window.addEventListener("mousedown",q),window.addEventListener("mouseup",g),document.addEventListener("mouseout",f);let b=0;function E(){let A=l.x,C=l.y,z=24,w=24,N=0;if(c==="frame"&&(d!=null&&d.isConnected)){const S=d.getBoundingClientRect();A=S.left+S.width/2,C=S.top+S.height/2,z=S.width+14,w=S.height+14}else c==="label"?z=w=86:c==="active"&&(z=w=38,N=45);p&&(z*=.86,w*=.86),u.x+=(A-u.x)*Yt,u.y+=(C-u.y)*Yt,u.w+=(z-u.w)*Yt,u.h+=(w-u.h)*Yt,u.rot+=(N-u.rot)*Yt,s.style.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,s.style.opacity=c==="label"?"0":"1",r.style.width=`${u.w.toFixed(1)}px`,r.style.height=`${u.h.toFixed(1)}px`,r.style.transform=`translate3d(${(u.x-u.w/2).toFixed(1)}px, ${(u.y-u.h/2).toFixed(1)}px, 0) rotate(${u.rot.toFixed(1)}deg)`,r.dataset.mode=c,b=requestAnimationFrame(E)}return b=requestAnimationFrame(E),()=>{cancelAnimationFrame(b),window.removeEventListener("mousemove",y),window.removeEventListener("mousedown",q),window.removeEventListener("mouseup",g),document.removeEventListener("mouseout",f),document.documentElement.classList.remove("has-custom-cursor")}},[t]),t?m.jsxs("div",{"aria-hidden":"true",className:"cursor-layer",children:[m.jsx("div",{ref:e,className:"cursor-dot"}),m.jsx("div",{ref:a,className:"cursor-box","data-mode":"free",children:m.jsx("span",{ref:o,className:"cursor-label",children:"Abrir"})})]}):null}const _0="simulab-intro",U0=1150,uf=750;function AS(){if(typeof window>"u")return!1;try{if(sessionStorage.getItem(_0))return!1}catch{return!1}return!window.matchMedia("(prefers-reduced-motion: reduce)").matches}const sm=AS(),Cu=sm?U0+250:0;function wS(){const[e,a]=x.useState(sm?"count":"done"),o=x.useRef(null),t=x.useRef(null);return x.useEffect(()=>{if(e!=="count")return;try{sessionStorage.setItem(_0,"1")}catch{}document.documentElement.style.overflow="hidden";const n=performance.now();let s=0;const r=i=>{const l=Math.min(1,(i-n)/U0),u=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2;o.current&&(o.current.textContent=String(Math.round(u*100)).padStart(3,"0")),t.current&&(t.current.style.transform=`scaleX(${u})`),l<1?s=requestAnimationFrame(r):a("lift")};return s=requestAnimationFrame(r),()=>cancelAnimationFrame(s)},[e]),x.useEffect(()=>{if(e!=="lift")return;document.documentElement.style.overflow="";const n=setTimeout(()=>a("done"),uf+60);return()=>clearTimeout(n)},[e]),e==="done"?null:m.jsxs("div",{"aria-hidden":"true",className:"fixed inset-0 z-[90] bg-black flex flex-col justify-between pointer-events-none",style:{transform:e==="lift"?"translate3d(0,-100%,0)":"none",transition:`transform ${uf}ms cubic-bezier(0.76, 0, 0.24, 1)`},children:[m.jsxs("div",{className:"container-xl w-full pt-6 flex items-center justify-between text-[0.875rem] text-sl-dim",children:[m.jsx("span",{className:"font-display font-700 text-white",children:"SimuLab"}),m.jsx("span",{children:"Ligando os instrumentos"})]}),m.jsxs("div",{className:"container-xl w-full pb-6",children:[m.jsx("span",{ref:o,className:`block font-display font-800 text-white leading-[0.8] tracking-[-0.05em] tabular-nums
                     text-[clamp(6rem,26vw,24rem)]`,children:"000"}),m.jsx("div",{className:"h-[3px] mt-6 bg-white/15",children:m.jsx("div",{ref:t,className:"h-full bg-white origin-left",style:{transform:"scaleX(0)"}})})]})]})}const Jo=1/240,CS=.25,df=60,SS=8,mf=720,zS=1.4,PS=12,ae={bg:"#000000",ink:"#ffffff",dim:"rgba(255,255,255,0.76)",muted:"rgba(255,255,255,0.54)",faint:"rgba(255,255,255,0.28)",line:"rgba(255,255,255,0.24)",grid:"rgba(255,255,255,0.08)"},Sz={"fisica-classica":"#4D9FFF","fisica-quantica":"#A98BFF",matematica:"#FFD23F",quimica:"#FF8A3D",astronomia:"#3FD6E0",biologia:"#4ADE80",medicina:"#FF5C7A",informatica:"#F06FE0"},zz={kinetic:"#FFB224",potential:"#34D399",thermal:"#FF5A36",velocity:"#FF7A59",force:"#5AA9FF",field:"#B197FC",positive:"#4ADE80",negative:"#FF6B8B",warn:"#FFD23F",danger:"#FF4D4D"},kS='"Archivo", system-ui, sans-serif';function ai(e,a){const o=e.canvas.__zoom||1;return Math.max(a,PS/o)}const Nt=(e,a,o=500)=>`${o>=600?700:500} ${ai(e,a)}px ${kS}`;function Pz(e,a,o={}){e.fillStyle=o.bg??ae.bg,e.fillRect(0,0,a.w,a.h)}function kz(e,a,o=32,t){const{w:n,h:s}=a;e.fillStyle="rgba(255,255,255,0.17)";for(let r=o;r<s;r+=o)for(let i=o;i<n;i+=o)e.fillRect(i-.6,r-.6,1.2,1.2)}function jS(e,a,o,t,n,s=0){e.beginPath(),e.moveTo(a+s,o),e.arcTo(a+t,o,a+t,o+n,s),e.arcTo(a+t,o+n,a,o+n,s),e.arcTo(a,o+n,a,o,s),e.arcTo(a,o,a+t,o,s),e.closePath()}function TS(e,a,o,t,n,s={}){e.canvas.__bare||(jS(e,a,o,t,n,s.radius??0),e.fillStyle=s.fill??"rgba(0,0,0,0.88)",e.fill(),e.strokeStyle=s.stroke??ae.line,e.lineWidth=1,e.stroke())}function Me(e,a,o,t,n={}){e.canvas.__bare||(e.font=Nt(e,n.size??11,n.weight??500),e.fillStyle=n.color??ae.dim,e.textAlign=n.align??"left",e.textBaseline=n.baseline??"alphabetic",e.fillText(a,o,t),e.textBaseline="alphabetic")}function jz(e,a,o,t,n=ae.muted,s){const r=String(a),i=r.charAt(0).toUpperCase()+r.slice(1),l=ai(e,9.5)+4;if(e.canvas.__bare)return t+l;const u=s??(e.canvas.clientWidth||720)/(e.canvas.__zoom||1)-o-12;e.font=Nt(e,9.5,500);let d=[i];if(e.measureText(i).width>u){const c=i.split(" ");let p="",v=0;for(;v<c.length&&e.measureText(p?`${p} ${c[v]}`:c[v]).width<=u;)p=p?`${p} ${c[v]}`:c[v],v++;p&&v<c.length&&(d=[p,c.slice(v).join(" ")])}return d.forEach((c,p)=>Me(e,c,o,t+p*l,{size:9.5,weight:500,color:n})),t+d.length*l}const Su=new WeakMap;function B0(e,a,o){const s=ai(e,10)+6;e.font=Nt(e,10,500);let r=0;for(const d of a)r=Math.max(r,e.measureText(d.k).width);e.font=Nt(e,10,700);let i=0;for(const d of a)i=Math.max(i,e.measureText(String(d.v)).width);let l=12*2+r+16+i;o.title&&(l=Math.max(l,12*2+e.measureText(o.title).width)),l=Math.max(l,o.minWidth??0);const u=10*2+a.length*s+(o.title?s+4:0)-4;return{w:l,h:u,padX:12,padY:10,lh:s}}function H0(e,a,o,t,n){const{w:s,h:r,padX:i,padY:l,lh:u}=B0(e,t,n),d=n.anchor==="right"?a-s:a;TS(e,d,o,s,r);let c=o+l+u-6;n.title&&(Me(e,n.title,d+i,c,{size:10,weight:700,color:n.accent??ae.ink}),c+=u+4);for(const p of t)Me(e,p.k,d+i,c,{size:10,color:ae.muted}),Me(e,String(p.v),d+s-i,c,{size:10,weight:700,color:p.c??ae.ink,align:"right"}),c+=u;return{w:s,h:r}}function Tz(e,a,o,t,n={}){const s=Su.get(e.canvas);if(s){s.push({x:a,y:o,rows:t,opts:n});const{w:r,h:i}=B0(e,t,n);return{w:r,h:i}}return H0(e,a,o,t,n)}function Nz(e,a,o,t,n,s={}){const r=s.color??ae.ink,i=Math.max(s.width??1.8,1.5),l=t-a,u=n-o,d=Math.hypot(l,u);if(d<1.5)return;const c=Math.min(s.head??8,d*.45),p=l/d,v=u/d,h=t-p*c,y=n-v*c;e.strokeStyle=r,e.lineWidth=i,e.lineCap="butt",e.beginPath(),e.moveTo(a,o),e.lineTo(h,y),e.stroke(),e.fillStyle=r,e.beginPath(),e.moveTo(t,n),e.lineTo(h-v*c*.42,y+p*c*.42),e.lineTo(h+v*c*.42,y-p*c*.42),e.closePath(),e.fill(),s.label&&Me(e,s.label,t+p*11,n+v*11+3,{size:10,weight:700,color:r,align:"center"})}function NS(e,a,o,t,n,s=.5){e.strokeStyle=Mt(n,.25+.35*Math.min(1,s)),e.lineWidth=1,e.beginPath(),e.arc(a,o,t+Math.max(3,t*.55),0,Math.PI*2),e.stroke(),e.fillStyle=n,e.beginPath(),e.arc(a,o,t,0,Math.PI*2),e.fill()}function Mz(e,a,o,t,n=!1,s=ae.ink){if(e.canvas.__bare)return;const r=t+7,i=6;e.strokeStyle=n?s:Mt("#ffffff",.5),e.lineWidth=n?2:1.2,e.beginPath();for(const[l,u]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.moveTo(a+l*r,o+u*(r-i)),e.lineTo(a+l*r,o+u*r),e.lineTo(a+l*(r-i),o+u*r);e.stroke()}function Oz(e,a,o,t={}){const n=a.length;if(n<2)return;const s=Math.min(t.bands??12,n-1),r=t.alpha??.85;e.lineWidth=t.width??2,e.lineCap="round",e.lineJoin="round";for(let i=0;i<s;i++){const l=Math.floor(i/s*(n-1)),u=Math.floor((i+1)/s*(n-1));if(!(u<=l)){e.strokeStyle=Mt(o,r*Math.pow((i+1)/s,1.7)),e.beginPath(),e.moveTo(a[l][0],a[l][1]);for(let d=l+1;d<=u;d++)e.lineTo(a[d][0],a[d][1]);e.stroke()}}e.lineCap="butt"}function Rz(e,a,o,t,n={}){const s=n.step??14,r=n.drop??9;e.strokeStyle=ae.grid,e.lineWidth=1,e.beginPath();for(let i=a+s;i<=o;i+=s)e.moveTo(i,t),e.lineTo(i-Math.abs(r)*.8,t+r);e.stroke(),e.strokeStyle=n.color??ae.line,e.lineWidth=n.width??1.5,e.beginPath(),e.moveTo(a,t+.5),e.lineTo(o,t+.5),e.stroke()}function Iz(e,a,o,t,n,s,r={}){const i=a-t/2,l=o-t/2;e.fillStyle=Mt(n,r.fill??.26),e.fillRect(i,l,t,t),e.strokeStyle=n,e.lineWidth=r.active?2.2:1.5,e.strokeRect(i+.5,l+.5,t-1,t-1),e.fillStyle=Mt(n,.55),e.fillRect(i,l,t,3),s&&Me(e,s,a,o+4,{size:10,weight:700,color:ae.ink,align:"center"})}const Lz=(e,a=24,o=60)=>$0(16+Math.cbrt(e)*13,a,o);function Dz(e,a,o,t,n,s,r={}){const i=r.every??.5,l=r.labelEvery??2,u=r.unit??"m",d=r.side??-1;e.strokeStyle=ae.line,e.lineWidth=1,e.beginPath(),e.moveTo(a+.5,o),e.lineTo(a+.5,t);const c=Math.round(Math.abs(s-n)/i);for(let p=0;p<=c;p++){const v=Math.round(o+p/c*(t-o))+.5,h=p%l===0;e.moveTo(a,v),e.lineTo(a+d*(h?8:4),v)}e.stroke();for(let p=0;p<=c;p+=l){const v=n+p/c*(s-n),h=o+p/c*(t-o);Me(e,`${Number(v.toFixed(2))} ${u}`,a+d*12,h+4,{size:9,color:ae.muted,align:d<0?"right":"left"})}}function Fz(e,a,o,t,n,s,r={}){const i=s.length,l=Math.min(r.barWidth??18,(t-(i-1)*8)/i),u=i>1?(t-l*i)/(i-1):0;s.forEach((d,c)=>{const p=a+c*(l+u);e.fillStyle="rgba(255,255,255,0.09)",e.fillRect(p,o,l,n);const h=(d.max>0?Math.max(0,Math.min(1,d.value/d.max)):0)*n;e.fillStyle=d.color,e.fillRect(p,o+n-h,l,h),Me(e,d.label,p+l/2,o+n+14,{size:10,color:ae.dim,align:"center"})})}function Vz(e,a,o){const{x:t,y:n,w:s,h:r}=a,[i,l]=o.xDomain,[u,d]=o.yDomain,c=q=>t+(q-i)/(l-i)*s,p=q=>n+r-(q-u)/(d-u)*r,v=o.xTicks??4,h=o.yTicks??4;e.strokeStyle=ae.grid,e.lineWidth=1,e.beginPath();for(let q=1;q<v;q++){const g=Math.round(t+q/v*s)+.5;e.moveTo(g,n),e.lineTo(g,n+r)}for(let q=1;q<h;q++){const g=Math.round(n+q/h*r)+.5;e.moveTo(t,g),e.lineTo(t+s,g)}if(e.stroke(),e.strokeStyle=ae.line,e.beginPath(),e.moveTo(t+.5,n),e.lineTo(t+.5,n+r+.5),e.lineTo(t+s,n+r+.5),e.stroke(),o.tickLabels!==!1){const q=o.fmtX??(f=>f.toFixed(0)),g=o.fmtY??(f=>f.toFixed(0));for(let f=0;f<=v;f++){const b=i+f/v*(l-i);Me(e,q(b),c(b),n+r+12,{size:8.5,color:ae.muted,align:"center"})}for(let f=0;f<=h;f++){const b=u+f/h*(d-u);Me(e,g(b),t-6,p(b)+3,{size:8.5,color:ae.muted,align:"right"})}}for(const q of o.rules??[])if(e.save(),e.strokeStyle=q.color??ae.faint,e.setLineDash(q.dash??[4,4]),e.lineWidth=1,e.beginPath(),q.y!==void 0&&(e.moveTo(t,p(q.y)),e.lineTo(t+s,p(q.y))),q.x!==void 0&&(e.moveTo(c(q.x),n),e.lineTo(c(q.x),n+r)),e.stroke(),e.restore(),q.label){const g=q.y!==void 0?p(q.y)-5:n+12,f=q.x!==void 0?c(q.x)+5:t+s-4;Me(e,q.label,f,g,{size:8.5,color:q.color??ae.muted,align:q.x!==void 0?"left":"right"})}e.save(),e.beginPath(),e.rect(t,n,s,r),e.clip();for(const q of o.series??[]){if(!q.points||q.points.length<2)continue;const g=()=>{e.beginPath(),q.points.forEach(([f,b],E)=>{const A=c(f),C=p(b);E===0?e.moveTo(A,C):e.lineTo(A,C)})};q.fill&&(g(),e.lineTo(c(q.points[q.points.length-1][0]),p(u)),e.lineTo(c(q.points[0][0]),p(u)),e.closePath(),e.fillStyle=Mt(q.color,.18),e.fill()),g(),e.setLineDash(q.dash??[]),e.strokeStyle=q.color,e.lineWidth=Math.max(q.width??2,1.5),e.lineJoin="round",e.stroke(),e.setLineDash([])}for(const q of o.markers??[])NS(e,c(q.x),p(q.y),q.r??4,q.color,.9);e.restore();const y=e.canvas.__pointer;if(y&&y.inside&&!e.canvas.__bare&&y.x>=t&&y.x<=t+s&&y.y>=n&&y.y<=n+r){const q=i+(y.x-t)/s*(l-i),g=u+(n+r-y.y)/r*(d-u);e.save(),e.strokeStyle=ae.faint,e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(y.x,n),e.lineTo(y.x,n+r),e.moveTo(t,y.y),e.lineTo(t+s,y.y),e.stroke(),e.restore();const f=o.fmtX??(N=>N.toFixed(1)),b=o.fmtY??(N=>N.toFixed(1)),E=`${f(q)}  ·  ${b(g)}`;e.font=Nt(e,9.5,700);const A=e.measureText(E).width+12,C=ai(e,9.5)+8,z=y.x+10+A>t+s?y.x-10-A:y.x+10,w=y.y-10-C<n?y.y+10:y.y-10-C;e.fillStyle="#fff",e.fillRect(z,w,A,C),Me(e,E,z+6,w+C-6,{size:9.5,weight:700,color:"#000"})}return o.xLabel&&Me(e,o.xLabel,t+s,n+r+26,{size:9,color:ae.dim,align:"right"}),o.yLabel&&(e.save(),e.translate(t-30,n+r/2),e.rotate(-Math.PI/2),Me(e,o.yLabel,0,0,{size:9,color:ae.dim,align:"center"}),e.restore()),{sx:c,sy:p}}function _z(e,a,o,t,n={}){if(e.canvas.__bare)return;let s=a;for(const r of t)e.fillStyle=r.color,n.dash?(e.fillRect(s,o-4,5,2),e.fillRect(s+7,o-4,5,2)):e.fillRect(s,o-8,8,8),Me(e,r.label,s+15,o,{size:9.5,color:ae.dim}),e.font=Nt(e,9.5,500),s+=15+e.measureText(r.label).width+18}function Mt(e,a){if(!e)return e;if(e[0]==="#"){const o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${a})`}return e.startsWith("rgb(")?`rgba(${e.slice(4,-1)},${a})`:e}function Uz(e,a,o){const t=parseInt(e.slice(1),16),n=parseInt(a.slice(1),16),s=Math.round((t>>16&255)*(1-o)+(n>>16&255)*o),r=Math.round((t>>8&255)*(1-o)+(n>>8&255)*o),i=Math.round((t&255)*(1-o)+(n&255)*o);return`rgb(${s},${r},${i})`}function Bz(e){if(e<380||e>750)return null;let a=0,o=0,t=0;e<440?(a=(440-e)/60,t=1):e<490?(o=(e-440)/50,t=1):e<510?(o=1,t=(510-e)/20):e<580?(a=(e-510)/70,o=1):e<645?(a=1,o=(645-e)/65):a=1;const n=e<420?.35+.65*(e-380)/40:e>700?.35+.65*(750-e)/50:1,s=r=>Math.round(255*Math.pow(r*n,.8)).toString(16).padStart(2,"0");return`#${s(a)}${s(o)}${s(t)}`}const $0=(e,a,o)=>Math.max(a,Math.min(o,e)),Hz=(e,a,o)=>e+(a-e)*o;function $z(e,a=2){if(e===0)return"0";const o=Math.abs(e);if(o>=1e4||o<.01){const t=Math.floor(Math.log10(o));return`${(e/10**t).toFixed(a)}e${t}`}return e.toFixed(a)}function Wz(e){let a=e>>>0;return()=>(a=a*1664525+1013904223>>>0,a/4294967296)}function Gz(e){let a=0,o=0;for(;a===0;)a=e();for(;o===0;)o=e();return Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*o)}const rm=x.createContext({speed:1,stepKey:0,onReadout:null,zoom:null,bare:!1,onParams:null,onTick:null}),al=120;function MS({setup:e,step:a,render:o,params:t,running:n,resetKey:s=0,onPointer:r,zoom:i="auto",touchAction:l="none"}){const u=x.useContext(rm),{speed:d,stepKey:c,onReadout:p,bare:v}=u,h=u.zoom??i,y=x.useRef(null),q=x.useRef(null),g=x.useRef({w:0,h:0,dpr:1,zoom:1,scale:1,t:0,pointer:{x:0,y:0,down:!1,inside:!1}}),f=x.useRef(t),b=x.useRef(n),E=x.useRef(d),A=x.useRef(p),C=x.useRef(u.onParams),z=x.useRef(u.onTick),w=x.useRef(c),N=x.useRef(0);return f.current=t,b.current=n,E.current=d,A.current=p,C.current=u.onParams,z.current=u.onTick,c!==w.current&&(w.current=c,N.current+=1),x.useEffect(()=>{const S=y.current;if(!S)return;const V=S.getContext("2d",{alpha:!1}),F=g.current;let M=!0;const H=()=>{const K=Math.min(window.devicePixelRatio||1,2),ge=S.clientWidth,Fe=S.clientHeight;if(ge===0||Fe===0)return;const Ra=h==="auto"?$0(ge/mf,1,zS):h==="fit"?ge/mf:h;S.width=Math.round(ge*K),S.height=Math.round(Fe*K),S.__zoom=Ra,S.__bare=v,M=!0,F.w=ge/Ra,F.h=Fe/Ra,F.dpr=K,F.zoom=Ra,F.scale=K*Ra};H();const J=new ResizeObserver(H);J.observe(S);let ue=!0;const Aa=new IntersectionObserver(([K])=>{ue=K.isIntersecting});Aa.observe(S);const k=F.pointer,P=K=>{const ge=S.getBoundingClientRect();k.x=(K.clientX-ge.left)/F.zoom,k.y=(K.clientY-ge.top)/F.zoom},T=K=>{S.classList.toggle("sim-grab",!!K)};F.setParams=K=>{var ge;return(ge=C.current)==null?void 0:ge.call(C,K)},S.__pointer=k;const I=K=>{P(K),k.inside=!0,M=!0,T(r==null?void 0:r("move",k,q.current,f.current,F))},_=K=>{P(K),k.down=!0,M=!0;const ge=r==null?void 0:r("down",k,q.current,f.current,F);if(ge)try{S.setPointerCapture(K.pointerId)}catch{}T(ge)},me=()=>{k.down&&(k.down=!1,M=!0,T(r==null?void 0:r("up",k,q.current,f.current,F)))},we=()=>{k.inside=!1,M=!0,k.down||T(null)};S.addEventListener("pointermove",I),S.addEventListener("pointerdown",_),window.addEventListener("pointerup",me),S.addEventListener("pointerleave",we);const ua=[];Su.set(S,ua);let wa=0,wo="";const o2=K=>{if(ua.length===0)return;const ge=A.current;if(!v)if(ge)if(K-wa>=al){const Fe=ua.map(Ia=>({title:Ia.opts.title??"",rows:Ia.rows.map(si=>({k:String(si.k),v:String(si.v),c:si.c??null}))})),Ra=JSON.stringify(Fe);Ra!==wo&&(wo=Ra,ge(Fe)),wa=K}else M=!0;else for(const Fe of ua)H0(V,Fe.x,Fe.y,Fe.rows,Fe.opts);ua.length=0};let lm=-1/0;const um=K=>{V.setTransform(F.scale,0,0,F.scale,0,0),o(V,q.current,f.current,F),o2(K),z.current&&K-lm>=al&&(lm=K,z.current(F.t))};F.t=0,q.current=e(F,f.current),um(performance.now()+al);let ni=0,dm=f.current,mm=performance.now(),ts=0;const cm=K=>{ni=requestAnimationFrame(cm);const ge=Math.min((K-mm)/1e3,CS);if(mm=K,!ue)return;let Fe=!1;if(b.current){ts+=ge*E.current;let Ia=0;for(;ts>=Jo&&Ia<df;)a(q.current,Jo,f.current,F),F.t+=Jo,ts-=Jo,Ia++;Ia===df&&(ts=0),N.current=0}else if(N.current>0){N.current--,Fe=!0;for(let Ia=0;Ia<SS;Ia++)a(q.current,Jo,f.current,F),F.t+=Jo}(b.current||Fe||M||f.current!==dm)&&(M=!1,dm=f.current,um(K))};return ni=requestAnimationFrame(cm),()=>{cancelAnimationFrame(ni),J.disconnect(),Aa.disconnect(),Su.delete(S),S.removeEventListener("pointermove",I),S.removeEventListener("pointerdown",_),window.removeEventListener("pointerup",me),S.removeEventListener("pointerleave",we)}},[e,a,o,s,r,h,v]),m.jsx("canvas",{ref:y,className:"w-full h-full block",style:{touchAction:l}})}const OS="modulepreload",RS=function(e){return"/simulab-site/"+e},cf={},L=function(a,o,t){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(o.map(l=>{if(l=RS(l),l in cf)return;cf[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":OS,u||(c.as="script"),c.crossOrigin="",c.href=l,i&&c.setAttribute("nonce",i),document.head.appendChild(c),u)return new Promise((p,v)=>{c.addEventListener("load",p),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return n.then(r=>{for(const i of r||[])i.status==="rejected"&&s(i.reason);return a().catch(s)})},IS={"pendulo-simples":x.lazy(()=>L(()=>import("./pendulo-simples-UY4bdguk.js"),[])),"circuito-eletrico":x.lazy(()=>L(()=>import("./circuito-eletrico-B3F88LxC.js"),[])),"ondas-som":x.lazy(()=>L(()=>import("./ondas-som-CxVEdSb4.js"),[])),"leis-newton":x.lazy(()=>L(()=>import("./leis-newton-BdJNGvYP.js"),[])),colisoes:x.lazy(()=>L(()=>import("./colisoes-BmWOh8vx.js"),[])),"lancamento-projetil":x.lazy(()=>L(()=>import("./lancamento-projetil-BbtMWeYW.js"),[])),empuxo:x.lazy(()=>L(()=>import("./empuxo-x8aV6Tv3.js"),[])),lentes:x.lazy(()=>L(()=>import("./lentes-Bwv-zqr_.js"),[])),"plano-inclinado":x.lazy(()=>L(()=>import("./plano-inclinado-D0hhA5AT.js"),[])),"movimento-circular":x.lazy(()=>L(()=>import("./movimento-circular-DGIWGoRF.js"),[])),"conservacao-energia":x.lazy(()=>L(()=>import("./conservacao-energia-CADjo3wh.js"),[])),atwood:x.lazy(()=>L(()=>import("./atwood-DZte1G5u.js"),[])),alavanca:x.lazy(()=>L(()=>import("./alavanca-DHv9_nTw.js"),[])),"ondas-estacionarias":x.lazy(()=>L(()=>import("./ondas-estacionarias-z6Ev8iY0.js"),[])),"orbitas-planetarias":x.lazy(()=>L(()=>import("./orbitas-planetarias-Ce7b33fW.js"),[])),"sistema-solar-completo":x.lazy(()=>L(()=>import("./sistema-solar-completo-DbI1DulN.js"),[])),"satelites-artificiais":x.lazy(()=>L(()=>import("./satelites-artificiais-DM8Rg4vW.js"),[])),"buraco-negro":x.lazy(()=>L(()=>import("./buraco-negro-DokfPu-u.js"),[])),exoplaneta:x.lazy(()=>L(()=>import("./exoplaneta-Bsru7CD8.js"),[])),"reacoes-quimicas":x.lazy(()=>L(()=>import("./reacoes-quimicas-0S6o-_ba.js"),[])),"gases-ideais":x.lazy(()=>L(()=>import("./gases-ideais-j6fL4ZbC.js"),[])),titulacao:x.lazy(()=>L(()=>import("./titulacao-DlC--9u_.js"),[])),"ph-escala":x.lazy(()=>L(()=>import("./ph-escala-CmKx6GCj.js"),[])),termodinamica:x.lazy(()=>L(()=>import("./termodinamica-DGDlYlKh.js"),[])),pilhas:x.lazy(()=>L(()=>import("./pilhas-DuPn7CWW.js"),[])),ecg:x.lazy(()=>L(()=>import("./ecg-cFH8YGXz.js"),[])),farmacocinetica:x.lazy(()=>L(()=>import("./farmacocinetica-BKdPdXDo.js"),[])),imunologia:x.lazy(()=>L(()=>import("./imunologia-BzWcg-7S.js"),[])),"potencial-acao":x.lazy(()=>L(()=>import("./potencial-acao-CwkNCcth.js"),[])),"troca-gasosa":x.lazy(()=>L(()=>import("./troca-gasosa-Dpxw-Raj.js"),[])),fotossintese:x.lazy(()=>L(()=>import("./fotossintese-DQiU1QxG.js"),[])),"cadeia-alimentar":x.lazy(()=>L(()=>import("./cadeia-alimentar-B0rJ30ah.js"),[])),dna:x.lazy(()=>L(()=>import("./dna-Bs9eW7vC.js"),[])),mitose:x.lazy(()=>L(()=>import("./mitose-_4qgBjgV.js"),[])),evolucao:x.lazy(()=>L(()=>import("./evolucao-ufQVNKrQ.js"),[])),mandelbrot:x.lazy(()=>L(()=>import("./mandelbrot-RcR_yAwM.js"),[])),gaussiana:x.lazy(()=>L(()=>import("./gaussiana-sCflRhCf.js"),[])),pitagoras:x.lazy(()=>L(()=>import("./pitagoras-Coa1s2N6.js"),[])),fibonacci:x.lazy(()=>L(()=>import("./fibonacci-Bjzd80qC.js"),[])),mobius:x.lazy(()=>L(()=>import("./mobius-C34LkBUT.js"),[])),"funcao-quadratica":x.lazy(()=>L(()=>import("./funcao-quadratica-Cq8YjkLO.js"),[])),"derivada-tangente":x.lazy(()=>L(()=>import("./derivada-tangente-BEOQ8dvB.js"),[])),"integral-area":x.lazy(()=>L(()=>import("./integral-area-DRqsiIpv.js"),[])),ordenacao:x.lazy(()=>L(()=>import("./ordenacao-DXSa3JX3.js"),[])),"rede-neural":x.lazy(()=>L(()=>import("./rede-neural-CVRN81Ev.js"),[])),arvores:x.lazy(()=>L(()=>import("./arvores-DRjketvI.js"),[])),criptografia:x.lazy(()=>L(()=>import("./criptografia-CfxCW0mj.js"),[])),"tcp-ip":x.lazy(()=>L(()=>import("./tcp-ip-Cv0zQeXj.js"),[])),"fenda-dupla":x.lazy(()=>L(()=>import("./fenda-dupla-zvLhUF_b.js"),[])),tunelamento:x.lazy(()=>L(()=>import("./tunelamento-rEWBXxSo.js"),[])),emaranhamento:x.lazy(()=>L(()=>import("./emaranhamento-DWTAbqP9.js"),[])),"schrodinger-cat":x.lazy(()=>L(()=>import("./schrodinger-cat-Dc5RnB2m.js"),[])),"efeito-fotoeletrico":x.lazy(()=>L(()=>import("./efeito-fotoeletrico-BBSMRiaD.js"),[])),"atomo-bohr":x.lazy(()=>L(()=>import("./atomo-bohr-BG0ktZEU.js"),[])),"decaimento-radioativo":x.lazy(()=>L(()=>import("./decaimento-radioativo-C6NOiXMv.js"),[])),"stern-gerlach":x.lazy(()=>L(()=>import("./stern-gerlach-DGxw0ehF.js"),[])),"poco-potencial":x.lazy(()=>L(()=>import("./poco-potencial-hqcnLOIg.js"),[])),"oscilador-quantico":x.lazy(()=>L(()=>import("./oscilador-quantico-CYThBYrc.js"),[])),"principio-incerteza":x.lazy(()=>L(()=>import("./principio-incerteza-CLP3w-wx.js"),[])),"polarizacao-fotons":x.lazy(()=>L(()=>import("./polarizacao-fotons-Ccjp_oUg.js"),[]))};function W0(e){return IS[e]??null}const LS={speed:1,stepKey:0,onReadout:null,zoom:"fit",bare:!0};function oi({article:e,running:a=!0}){const o=e.simulation,t=W0(o.component),n=x.useMemo(()=>Object.fromEntries((o.controls??[]).map(s=>[s.id,s.default])),[o]);return t?m.jsx(rm.Provider,{value:LS,children:m.jsx(x.Suspense,{fallback:null,children:m.jsx(t,{params:n,running:a,resetKey:0})})}):null}function DS({items:e,title:a,lead:o,total:t}){const n=x.useRef(null),s=x.useRef(null),r=x.useRef(0),i=la(),[l,u]=x.useState(0),[d,c]=x.useState(!1),p=R0(n,{margin:"60% 0px",once:!0});x.useEffect(()=>{const y=window.matchMedia("(min-width: 768px)"),q=()=>{const f=y.matches&&!i;c(f);const b=f&&s.current?Math.max(0,s.current.scrollWidth-window.innerWidth):0;r.current=b,u(b)};q(),window.addEventListener("resize",q);const g=new ResizeObserver(q);return s.current&&g.observe(s.current),()=>{window.removeEventListener("resize",q),g.disconnect()}},[i]);const{scrollYProgress:v}=_t({target:n,offset:["start start","end end"]}),h=Ma(v,y=>-y*r.current);return m.jsx("section",{ref:n,className:"relative",style:d?{height:`calc(100vh + ${l}px)`}:void 0,children:m.jsxs("div",{className:d?"sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-[var(--nav-height)]":"py-section",children:[m.jsxs("div",{className:"container-xl w-full flex flex-wrap items-end justify-between gap-x-10 gap-y-4 mb-8 lg:mb-10",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"font-display font-700 text-display-lg text-sl-text",children:a}),m.jsx("p",{className:"text-sl-dim text-[1rem] mt-3 max-w-[36rem] leading-relaxed",children:o})]}),m.jsxs(W,{to:"/acervo?sim=1","data-cursor":"frame",className:`shrink-0 px-5 py-3 text-[0.875rem] font-700 text-white border-2 border-white/40
                       hover:border-white hover:bg-white hover:text-black transition-colors duration-200`,children:["Todas as ",t," simulações"]})]}),m.jsx("div",{className:d?"":"gallery-scroll",children:m.jsx(G.div,{ref:s,className:"gallery-track",style:d?{x:h}:void 0,children:e.map((y,q)=>m.jsxs(W,{to:`/acervo/${y.id}/simulacao`,"data-cursor-label":"Mexer",className:"gallery-card group block",children:[m.jsxs("div",{className:`relative aspect-[16/10] bg-black border border-sl-border2
                                group-hover:border-white transition-colors duration-200 overflow-hidden`,children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none",children:p&&m.jsx(oi,{article:y,running:!i})}),m.jsx("span",{className:`absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0
                               group-hover:scale-x-100 transition-transform duration-300 ease-expo-out`,style:{background:Oa[y.topic]},"aria-hidden":"true"})]}),m.jsxs("div",{className:"flex items-start justify-between gap-6 mt-4",children:[m.jsxs("div",{className:"min-w-0",children:[m.jsxs("p",{className:"flex items-center gap-2 text-sl-dim text-[0.875rem] mb-1.5",children:[m.jsx("span",{className:"w-2 h-2 shrink-0",style:{background:Oa[y.topic]},"aria-hidden":"true"}),y.topic]}),m.jsx("h3",{className:"font-display font-700 text-[1.15rem] lg:text-[1.35rem] leading-[1.1] tracking-[-0.02em] text-sl-text",children:y.simulation.subtitle??y.title})]}),m.jsxs("span",{className:"text-sl-muted text-[0.875rem] tabular-nums shrink-0 pt-0.5",children:[q+1,"/",e.length]})]})]},y.id))})}),d&&m.jsx("div",{className:"container-xl w-full mt-8 lg:mt-10","aria-hidden":"true",children:m.jsx("div",{className:"h-px bg-sl-border2",children:m.jsx(G.div,{className:"h-[3px] -mt-px bg-white origin-left",style:{scaleX:v}})})})]})})}function G0({article:e}){const a=x.useRef(null),[o,t]=x.useState(null),[n,s]=x.useState(!1);if(x.useEffect(()=>{s(window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),x.useEffect(()=>{e&&t(e)},[e]),x.useEffect(()=>{if(!n)return;const i=a.current,l={x:innerWidth/2,y:innerHeight/2},u={...l},d=v=>{l.x=v.clientX,l.y=v.clientY};window.addEventListener("mousemove",d,{passive:!0});let c=0;const p=()=>{const v=i.offsetWidth,h=i.offsetHeight;let y=l.x+32,q=l.y-h/2;y+v>innerWidth-16&&(y=l.x-v-32),q=Math.max(16,Math.min(innerHeight-h-16,q)),u.x+=(y-u.x)*.14,u.y+=(q-u.y)*.14,i.style.transform=`translate3d(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px, 0)`,c=requestAnimationFrame(p)};return c=requestAnimationFrame(p),()=>{cancelAnimationFrame(c),window.removeEventListener("mousemove",d)}},[n]),!n)return null;const r=!!e;return m.jsx("div",{ref:a,"aria-hidden":"true",className:"fixed left-0 top-0 z-[60] pointer-events-none w-[min(30vw,440px)]",children:m.jsx("div",{className:"aspect-[16/10] bg-black border-2 border-white overflow-hidden transition-[clip-path,opacity] duration-300 ease-expo-out",style:{clipPath:r?"inset(0% 0% 0% 0%)":"inset(50% 0% 50% 0%)",opacity:r?1:0},children:o&&m.jsx(oi,{article:o,running:r},o.id)})})}function ti({topic:e,invertOnHover:a=!1}){const o=Oa[e]??"#777";return m.jsxs("span",{className:"flex items-center gap-2 min-w-0",children:[m.jsx("span",{className:`w-2 h-2 shrink-0 ${a?"group-hover:!bg-black":""}`,style:{background:o},"aria-hidden":"true"}),m.jsx("span",{className:`text-[0.8rem] font-500 truncate ${a?"text-sl-dim group-hover:text-black":"text-sl-dim"}`,children:e})]})}function im(){return m.jsxs("span",{className:"flex items-center gap-1.5 text-sl-text text-[0.875rem] font-500 shrink-0",children:[m.jsx(Bn,{size:9,fill:"currentColor",strokeWidth:0}),"Simulação"]})}function FS({article:e,className:a="",direct:o=!1}){const[t,n]=x.useState(!1),s=!!(e.simulation&&typeof e.simulation=="object"),r=o&&s;return m.jsxs(W,{to:r?`/acervo/${e.id}/simulacao`:`/acervo/${e.id}`,"data-cursor-label":r?"Mexer":"Ler",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),className:`group flex flex-col h-full bg-sl-bg
                  border border-sl-border hover:border-white
                  transition-colors duration-200 ${a}`,children:[s&&m.jsxs("div",{className:`relative aspect-[16/10] border-b border-sl-border group-hover:border-white
                        transition-colors duration-200 overflow-hidden`,children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m.jsx(oi,{article:e,running:t})}),m.jsx("span",{className:`absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0
                       group-hover:scale-x-100 transition-transform duration-300 ease-expo-out`,style:{background:Oa[e.topic]},"aria-hidden":"true"})]}),m.jsxs("div",{className:"flex flex-col flex-1 p-6",children:[m.jsxs("div",{className:"flex items-center justify-between gap-3 mb-5",children:[m.jsx(ti,{topic:e.topic}),s&&m.jsx(im,{})]}),m.jsx("h3",{className:"font-display font-700 text-sl-text text-[1.12rem] leading-[1.15] tracking-[-0.015em] mb-3 line-clamp-3",children:r?e.simulation.subtitle??e.title:e.title}),e.summary&&m.jsx("p",{className:`text-sl-dim text-[0.875rem] leading-relaxed flex-1 ${s?"line-clamp-2":"line-clamp-3"}`,children:e.summary}),m.jsx("span",{className:"mt-6 pt-4 border-t border-sl-border text-sl-dim text-[0.8rem]",children:e.level})]})]})}function Q0({article:e,index:a,onHover:o}){return m.jsxs(W,{to:`/acervo/${e.id}`,"data-cursor-label":"Ler",onMouseEnter:o?()=>o(e.simulation?e:null):void 0,className:`group relative flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7
                 border-b border-sl-border`,children:[m.jsx("span",{className:`absolute left-0 top-0 bottom-0 w-[3px] bg-white origin-top scale-y-0
                   group-hover:scale-y-100 transition-transform duration-200 ease-expo-out`,"aria-hidden":"true"}),m.jsx("span",{className:`text-sl-muted text-[0.875rem] w-9 shrink-0 tabular-nums sm:pt-1.5
                       transition-transform duration-200 ease-expo-out group-hover:translate-x-4`,children:String(a+1).padStart(2,"0")}),m.jsxs("div",{className:"flex-1 min-w-0 transition-transform duration-200 ease-expo-out group-hover:translate-x-4",children:[m.jsx("h3",{className:"font-display font-700 text-[1.2rem] sm:text-[1.55rem] leading-[1.1] tracking-[-0.02em] text-sl-text",children:e.title}),e.summary&&m.jsx("p",{className:"text-sl-dim text-[0.875rem] leading-relaxed mt-2.5 max-w-[62ch] line-clamp-2",children:e.summary})]}),m.jsxs("div",{className:"flex sm:flex-col sm:items-end gap-x-4 gap-y-2 shrink-0 sm:pt-1.5 sm:w-44",children:[m.jsx(ti,{topic:e.topic}),e.simulation&&m.jsx(im,{})]})]})}function VS({article:e}){return m.jsxs(W,{to:`/acervo/${e.id}`,"data-cursor-label":"Ler",className:`group relative grid gap-4 lg:grid-cols-[1fr_22rem] lg:gap-12 lg:items-end py-9
                 border-b border-sl-border`,children:[m.jsx("span",{className:`absolute left-0 top-0 bottom-0 w-[3px] bg-white origin-top scale-y-0
                   group-hover:scale-y-100 transition-transform duration-200 ease-expo-out`,"aria-hidden":"true"}),m.jsxs("div",{className:"min-w-0 transition-transform duration-200 ease-expo-out group-hover:translate-x-5",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[m.jsx(ti,{topic:e.topic}),e.simulation&&m.jsx(im,{})]}),m.jsx("h3",{className:"font-display font-700 text-[1.5rem] sm:text-[2.1rem] lg:text-[2.6rem] leading-[1] tracking-[-0.03em] text-sl-text",children:e.title})]}),m.jsx("p",{className:`text-sl-dim text-[1rem] leading-relaxed line-clamp-3
                    transition-transform duration-200 ease-expo-out group-hover:translate-x-5 lg:group-hover:translate-x-0`,children:e.summary})]})}function K0({article:e}){return m.jsxs(W,{to:`/acervo/${e.id}`,className:"group flex flex-col gap-2 py-4 border-b border-sl-border",children:[m.jsxs("div",{className:"flex items-center justify-between gap-3",children:[m.jsx(ti,{topic:e.topic}),e.simulation&&m.jsx(Bn,{size:9,fill:"currentColor",strokeWidth:0,className:"text-sl-text shrink-0"})]}),m.jsx("h4",{className:`font-body font-700 text-sl-text text-[1rem] leading-snug line-clamp-2
                     underline decoration-transparent group-hover:decoration-white underline-offset-4
                     transition-colors duration-200`,children:e.title})]})}function X0(e=.35){const a=x.useRef(null);return x.useEffect(()=>{const o=a.current;if(!o||window.matchMedia("(hover: none), (pointer: coarse)").matches)return;function t(s){const r=o.getBoundingClientRect(),i=s.clientX-(r.left+r.width/2),l=s.clientY-(r.top+r.height/2);o.style.transform=`translate(${i*e}px, ${l*e}px)`}function n(){o.style.transform="translate(0, 0)"}return o.addEventListener("mousemove",t),o.addEventListener("mouseleave",n),()=>{o.removeEventListener("mousemove",t),o.removeEventListener("mouseleave",n)}},[e]),a}const _S=150,US=2*Math.PI/_S,BS=2*Math.PI*.36,HS=260,$S=340,WS=2*Math.PI/84,zs=78,GS=4.5,QS=.07,KS=1.3;function XS(e,a,o){return[{x:a*.6,y:o*.26,a:1},{x:a*.88,y:o*.66,a:1},{x:e.px,y:e.py,a:1.25*e.amp}]}function pf(e,a,o,t,n){let s=0;const r=BS*o;for(let i=0;i<e.length;i++){const l=e[i];if(l.a<.01)continue;const u=Math.hypot(t-l.x,n-l.y);s+=l.a*Math.cos(US*u-r)/Math.sqrt(1+u/HS)}for(let i=0;i<a.length;i++){const l=a[i],u=o-l.t;if(u<0)continue;const d=Math.hypot(t-l.x,n-l.y)-$S*u;d>zs*2.4||d<-zs*2.4||(s+=1.9*Math.exp(-(d*d)/(zs*zs))*Math.exp(-u*.7)*Math.cos(WS*d))}return s}function YS({floaters:e}){const a=la(),o=x.useCallback(r=>({t:0,px:r.w*.7,py:r.h*.45,amp:0,pulses:[{x:r.w*.22,y:r.h*.5,t:.55}]}),[]),t=x.useCallback((r,i,l,u)=>{r.t+=i;const d=u.pointer;d.inside&&(r.px+=(d.x-r.px)*Math.min(1,i*7),r.py+=(d.y-r.py)*Math.min(1,i*7)),r.amp+=((d.inside?1:0)-r.amp)*Math.min(1,i*2.5),r.pulses.length&&r.t-r.pulses[0].t>GS&&r.pulses.shift()},[]),n=x.useCallback((r,i,l)=>{r!=="down"||!l||(l.pulses.push({x:i.x,y:i.y,t:l.t}),l.pulses.length>6&&l.pulses.shift())},[]),s=x.useCallback((r,i,l,u)=>{const{w:d,h:c}=u;r.fillStyle="#000",r.fillRect(0,0,d,c);const p=d<640?13:15,v=p*.46,h=XS(i,d,c);r.fillStyle="#fff";for(let q=p/2;q<c;q+=p)for(let g=p/2;g<d;g+=p){const f=pf(h,i.pulses,i.t,g,q),b=f>0?Math.min(1,f/1.7):0,E=.6+b*b*v;r.globalAlpha=.12+b*.85,r.fillRect(g-E,q-E,E*2,E*2)}r.globalAlpha=1;const y=e==null?void 0:e.current;if(y&&!a)for(let q=0;q<y.length;q++){const g=y[q],f=pf(h,i.pulses,i.t,g.x,g.y);g.el.style.transform=`translate3d(0, ${(-f*QS*g.size).toFixed(2)}px, 0) rotate(${(f*KS).toFixed(2)}deg)`}},[e,a]);return m.jsx(MS,{setup:o,step:t,render:s,onPointer:n,params:null,running:!a,zoom:1,touchAction:"auto"})}const ff=(e,a,o)=>`${e} ${e===1?a:o}`;function JS({text:e,floaters:a,boundsRef:o,className:t}){const n=x.useRef(null),s=e.split(" ");return x.useEffect(()=>{var c;const r=n.current,i=o.current;if(!r||!i)return;const l=[...r.querySelectorAll(".float-letter")],u=()=>{const p=i.getBoundingClientRect(),v=l.map(h=>h.style.transform);l.forEach(h=>{h.style.transform=""}),a.current=l.map(h=>{const y=h.getBoundingClientRect();return{el:h,x:y.left+y.width/2-p.left,y:y.top+y.height/2-p.top,size:y.height}}),l.forEach((h,y)=>{h.style.transform=v[y]})};u(),(c=document.fonts)==null||c.ready.then(u);const d=setTimeout(u,Cu+1600);return window.addEventListener("resize",u),()=>{clearTimeout(d),window.removeEventListener("resize",u),a.current=[]}},[a,o]),m.jsx("h1",{ref:n,className:t,"aria-label":e,children:s.map((r,i)=>m.jsxs("span",{"aria-hidden":"true",children:[m.jsx("span",{className:"float-word",style:{animationDelay:`${Cu+120+i*90}ms`},children:[...r].map((l,u)=>m.jsx("span",{className:"float-letter",children:l},u))}),i<s.length-1?" ":""]},i))})}function ZS(){const e=la(),a=iS(),o=x.useMemo(()=>uS(),[]),t=Hn.filter(f=>f!=="Todas"),n=Ve.filter(f=>f.simulation).length,s=x.useMemo(()=>Object.fromEntries(o.map(f=>[f.topic,f])),[o]),[r,i]=x.useState(null),l=x.useRef([]),u=x.useRef(null),d=x.useRef(null),c=X0(.25),{scrollYProgress:p}=_t({target:d,offset:["start start","end start"]}),v=Ma(p,[0,.6],[1,.9]),h=Ma(p,[0,.55],[1,0]),y=Cu/1e3,q=f=>({initial:e?{opacity:0}:{opacity:0,y:14},animate:e?{opacity:1}:{opacity:1,y:0},transition:{duration:.7,delay:e?0:y+f,ease:Ea}}),g=o.map(f=>f.title);return m.jsxs("div",{children:[m.jsxs("div",{ref:d,className:"relative",children:[m.jsxs("section",{ref:u,className:"sticky top-0 h-[100svh] min-h-[560px] flex flex-col justify-end overflow-hidden",children:[m.jsx(G.div,{className:"hero-field absolute inset-0",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,delay:e?0:y+.2},"aria-hidden":"true",children:m.jsx(YS,{floaters:l})}),m.jsx("div",{className:"hero-fade absolute inset-x-0 bottom-0 h-[55%] pointer-events-none","aria-hidden":"true"}),m.jsxs(G.div,{style:e?void 0:{scale:v,opacity:h},className:"relative z-10 w-full container-xl pt-32 pb-10 sm:pb-14 pointer-events-none origin-bottom-left",children:[m.jsx(JS,{text:"Ciência que você pode mexer.",floaters:l,boundsRef:u,className:"font-display font-800 text-hero text-sl-text max-w-[12ch] mb-10"}),m.jsxs("div",{className:"grid gap-8 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end",children:[m.jsxs(G.p,{...q(.55),className:"text-white/80 text-[1rem] sm:text-[1.125rem] leading-relaxed max-w-[34rem]",children:[n," simulações com física de verdade e ",Ve.length," artigos que explicam o porquê de cada número. Grátis, sem cadastro."]}),m.jsxs(G.div,{...q(.7),className:"flex flex-wrap gap-3 lg:justify-end pointer-events-auto",children:[m.jsx(W,{ref:c,to:"/acervo?sim=1","data-cursor":"frame",className:`px-7 py-4 font-700 text-[1rem] bg-white text-black border-2 border-white
                             hover:bg-black hover:text-white transition-colors duration-200`,children:m.jsx(Ho,{children:"Abrir as simulações"})}),m.jsx(W,{to:"/acervo","data-cursor":"frame",className:`px-7 py-4 font-700 text-[1rem] text-white border-2 border-white/40
                             hover:border-white hover:bg-white hover:text-black transition-colors duration-200`,children:m.jsx(Ho,{children:"Ver o acervo"})})]})]}),m.jsxs(G.p,{...q(1),className:"mt-9 pt-5 border-t border-sl-border2 text-sl-dim text-[0.875rem] max-w-[34rem]",children:["O fundo é uma cuba de ondas rodando agora, e o título boia nela.",m.jsx("span",{className:"hidden sm:inline",children:" Mova o cursor para virar uma fonte; clique para soltar um pulso."})]})]})]}),m.jsx("section",{className:"relative z-10 bg-black border-t-2 border-white",children:m.jsx("div",{className:"container-xl py-section",children:m.jsx(BC,{className:`font-display font-700 text-sl-text max-w-[22ch] sm:max-w-[26ch]
                         text-[clamp(1.9rem,5.4vw,4.75rem)] leading-[1.02] tracking-[-0.035em]`,text:"Ninguém entende um pêndulo decorando a fórmula. Você encurta o fio, vê o balanço acelerar, e só então a fórmula faz sentido."})})})]}),m.jsxs("section",{className:"container-xl pb-section",children:[m.jsx(ve,{as:"h2",className:"font-display font-700 text-display-lg text-sl-text mb-10",children:"Oito áreas"}),m.jsx("div",{className:"border-t-2 border-white",onMouseLeave:()=>i(null),children:t.map(f=>{const b=Ve.filter(A=>A.topic===f),E=b.filter(A=>A.simulation).length;return m.jsxs(W,{to:`/acervo?topico=${encodeURIComponent(f)}`,onMouseEnter:()=>i(f),onFocus:()=>i(null),className:`group flex items-center gap-4 sm:gap-6 py-5 sm:py-7 px-3 sm:px-5 -mx-3 sm:-mx-5
                           border-b border-sl-border
                           hover:bg-white hover:text-black
                           transition-colors duration-150`,children:[m.jsx("span",{className:"w-3 h-3 shrink-0 group-hover:!bg-black transition-colors duration-150",style:{background:Oa[f]},"aria-hidden":"true"}),m.jsx("span",{className:`font-display font-700 text-[1.25rem] sm:text-[2.4rem] leading-none tracking-[-0.03em] flex-1
                                 transition-transform duration-300 ease-expo-out group-hover:translate-x-3`,children:f}),m.jsx("span",{className:"hidden sm:block w-36 text-right text-[0.875rem] tabular-nums text-sl-dim group-hover:text-black",children:ff(E,"simulação","simulações")}),m.jsx("span",{className:"w-24 text-right text-[0.875rem] tabular-nums text-sl-dim group-hover:text-black",children:ff(b.length,"artigo","artigos")})]},f)})}),m.jsx(G0,{article:r?s[r]:null})]}),o.length>0&&m.jsx(DS,{items:o,total:n,title:"Comece mexendo",lead:"Estas não são imagens: cada quadro é a simulação rodando. Abra uma e mude um parâmetro."}),m.jsx($C,{items:g,className:`font-display font-800 text-white leading-none tracking-[-0.04em]
                   text-[clamp(3rem,10vw,9rem)] py-10 sm:py-14 border-y border-sl-border`}),m.jsxs("section",{className:"container-xl py-section",children:[m.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4 mb-10",children:[m.jsx(ve,{as:"h2",className:"font-display font-700 text-display-lg text-sl-text",children:"Ou comece lendo"}),m.jsx(W,{to:"/acervo",className:"link-underline text-sl-text text-[1rem] font-500 shrink-0",children:"Acervo completo"})]}),m.jsx("div",{className:"border-t-2 border-white",children:a.map(f=>m.jsx(VS,{article:f},f.id))})]})]})}function ez({categories:e,active:a,onChange:o}){const t=x.useRef(null);return m.jsx("div",{ref:t,className:"filter-scroll flex items-center gap-1.5 overflow-x-auto py-1",children:e.map(n=>{const s=n==="Todas",r=a===n;return m.jsxs("button",{onClick:()=>o(n),className:["relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-none","text-[0.875rem] font-500 font-body transition-colors duration-150",r?"text-black":"text-sl-dim hover:text-sl-text"].join(" "),children:[r&&m.jsx(G.span,{layoutId:"filter-pill",className:"absolute inset-0 bg-white rounded-none",transition:{duration:.2,ease:[.16,1,.3,1]}}),m.jsxs("span",{className:"relative z-10 flex items-center gap-1.5",children:[!s&&m.jsx("span",{className:"w-2 h-2 shrink-0",style:{background:r?"#000":Oa[n]},"aria-hidden":"true"}),n]})]},n)})})}function az({current:e,total:a,onChange:o}){return m.jsxs("div",{className:"flex items-center justify-center gap-6 mt-8",children:[m.jsx("button",{onClick:()=>o(Math.max(1,e-1)),disabled:e===1,className:`w-10 h-10 flex items-center justify-center rounded-none
                   border border-sl-border text-sl-dim
                   hover:border-white/15 hover:text-sl-text
                   disabled:opacity-20 disabled:cursor-not-allowed
                   transition-all duration-300`,"aria-label":"Página anterior",children:m.jsx(dC,{size:15})}),m.jsxs("span",{className:"text-sl-dim text-[0.875rem] font-mono tabular-nums",children:[m.jsx("span",{className:"text-sl-text font-500",children:String(e).padStart(2,"0")})," ",m.jsx("span",{className:"text-sl-muted",children:"/"})," ",String(a).padStart(2,"0")]}),m.jsx("button",{onClick:()=>o(Math.min(a,e+1)),disabled:e===a,className:`w-10 h-10 flex items-center justify-center rounded-none
                   border border-sl-border text-sl-dim
                   hover:border-white/15 hover:text-sl-text
                   disabled:opacity-20 disabled:cursor-not-allowed
                   transition-all duration-300`,"aria-label":"Próxima página",children:m.jsx(nm,{size:15})})]})}const Ps=9,oz=["Todos","Iniciante","Intermediário","Avançado"],tz=[{id:"padrao",label:"Padrão"},{id:"az",label:"Título A–Z"},{id:"za",label:"Título Z–A"},{id:"sim",label:"Com simulação"}],gf={hidden:{},visible:{transition:{staggerChildren:.02}},exit:{opacity:0,transition:{duration:.1}}},hf={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.2,ease:Ea}}};function nz(){const[e]=$h(),a=e.get("topico"),[o,t]=x.useState(""),[n,s]=x.useState(Hn.includes(a)?a:"Todas"),[r,i]=x.useState("Todos"),[l,u]=x.useState("padrao"),[d,c]=x.useState(e.get("sim")==="1"),[p,v]=x.useState(1),[h,y]=x.useState(e.get("sim")==="1"?"grid":"list"),[q,g]=x.useState(null),f=x.useMemo(()=>{let M=Ve;if(n!=="Todas"&&(M=M.filter(H=>H.topic===n)),r!=="Todos"&&(M=M.filter(H=>H.level===r)),d&&(M=M.filter(H=>H.simulation)),o.trim()){const H=o.toLowerCase();M=M.filter(J=>J.title.toLowerCase().includes(H)||(J.summary??"").toLowerCase().includes(H)||(J.concepts??[]).some(ue=>ue.toLowerCase().includes(H)))}return l!=="padrao"&&(M=[...M].sort((H,J)=>l==="az"?H.title.localeCompare(J.title,"pt"):l==="za"?J.title.localeCompare(H.title,"pt"):l==="sim"?(J.simulation?1:0)-(H.simulation?1:0):0)),M},[n,r,d,o,l]),b=Math.max(1,Math.ceil(f.length/Ps)),E=Math.min(p,b),A=f.slice((E-1)*Ps,E*Ps),C=x.useMemo(()=>f.filter(M=>M.simulation).length,[f]);function z(M){s(M),v(1)}function w(M){t(M.target.value),v(1)}function N(M){i(M),v(1)}function S(M){u(M.target.value),v(1)}function V(){c(M=>!M),v(1)}const F=`${h}-${n}-${r}-${l}-${d}-${E}`;return m.jsxs("div",{className:"container-xl pt-28 pb-section",children:[m.jsxs("div",{className:"mb-12",children:[m.jsx(ve,{as:"h1",delay:.05,className:"font-display font-700 text-display-lg text-sl-text mb-3",children:"Acervo de Ciências"}),m.jsxs(ve,{as:"p",delay:.12,className:"text-sl-dim text-[1rem]",children:[f.length," ",f.length===1?"artigo":"artigos",C>0&&m.jsxs("span",{children:[", ",C," com simulação"]})]})]}),m.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[m.jsxs("div",{className:"relative flex-1 max-w-lg",children:[m.jsx(MC,{size:15,className:"absolute left-4 top-1/2 -translate-y-1/2 text-sl-muted"}),m.jsx("input",{type:"text",value:o,onChange:w,placeholder:"Buscar por título, resumo ou conceito...",className:`w-full bg-transparent border border-sl-border rounded-none
                       pl-11 pr-5 py-3 text-[0.875rem] text-sl-text
                       placeholder:text-sl-muted outline-none
                       focus:border-white/20
                       transition-all duration-200`})]}),m.jsxs("div",{className:"hidden sm:flex items-center gap-0.5 p-1 rounded-none border border-sl-border shrink-0",children:[m.jsx("button",{onClick:()=>y("list"),"aria-label":"Ver como lista","aria-pressed":h==="list",className:`p-2 rounded-none transition-all duration-200 ${h==="list"?"bg-white text-black":"text-sl-dim hover:text-sl-text"}`,children:m.jsx(NC,{size:14})}),m.jsx("button",{onClick:()=>y("grid"),"aria-label":"Ver como grade","aria-pressed":h==="grid",className:`p-2 rounded-none transition-all duration-200 ${h==="grid"?"bg-white text-black":"text-sl-dim hover:text-sl-text"}`,children:m.jsx(CC,{size:14})})]})]}),m.jsx("div",{className:"mb-5",children:m.jsx(ez,{categories:Hn,active:n,onChange:z})}),m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-sl-border",children:[m.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("span",{className:"text-sl-dim text-[0.875rem] mr-2 hidden sm:inline",children:"Nível"}),oz.map(M=>m.jsx("button",{onClick:()=>N(M),"aria-pressed":r===M,className:`px-3 py-1.5 rounded-none text-[0.875rem] font-500 transition-all duration-300 ${r===M?"bg-white text-black border border-white":"text-sl-dim hover:text-sl-text border border-transparent"}`,children:M},M))]}),m.jsxs("button",{onClick:V,"aria-pressed":d,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-[0.875rem] font-500
                        transition-all duration-300 border ${d?"bg-white text-black border-white":"text-sl-dim hover:text-sl-text border-transparent"}`,children:[m.jsx(xC,{size:12}),"Só simulações"]})]}),m.jsxs("label",{className:"flex items-center gap-2 text-sl-dim text-[0.875rem]",children:[m.jsx(mC,{size:13,className:"text-sl-muted"}),m.jsx("span",{className:"sr-only",children:"Ordenar por"}),m.jsx("select",{value:l,onChange:S,className:`bg-transparent border border-sl-border rounded-none px-3 py-1.5
                       text-[0.875rem] text-sl-text outline-none focus:border-white/20
                       cursor-pointer transition-colors duration-300
                       [&>option]:bg-sl-bg [&>option]:text-sl-text`,children:tz.map(M=>m.jsx("option",{value:M.id,children:M.label},M.id))})]})]}),m.jsx(em,{mode:"wait",children:A.length>0?h==="list"?m.jsx(G.div,{variants:gf,initial:"hidden",animate:"visible",exit:"exit",className:"border-t-2 border-white mb-12",onMouseLeave:()=>g(null),children:A.map((M,H)=>m.jsx(G.div,{variants:hf,children:m.jsx(Q0,{article:M,index:(E-1)*Ps+H,onHover:g})},M.id))},F):m.jsx(G.div,{variants:gf,initial:"hidden",animate:"visible",exit:"exit",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:A.map(M=>m.jsx(G.div,{variants:hf,children:m.jsx(FS,{article:M,direct:d})},M.id))},F):m.jsxs(G.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"text-center py-28 text-sl-dim",children:[m.jsx("p",{className:"text-[1rem]",children:"Nada corresponde a esses filtros."}),m.jsx("button",{onClick:()=>{t(""),i("Todos"),c(!1),s("Todas"),v(1)},className:"mt-4 text-sl-text text-[0.875rem] link-underline",children:"Limpar filtros"})]},"empty")}),b>1&&m.jsx(az,{current:E,total:b,onChange:v}),m.jsx(G0,{article:h==="list"?q:null})]})}function Y0({category:e,className:a=""}){const o=Oa[e]??"#555";return m.jsxs("span",{className:`inline-flex items-center gap-2 ${a}`,children:[m.jsx("span",{className:"w-2 h-2 shrink-0",style:{background:o}}),m.jsx("span",{className:"text-[0.875rem] font-500",style:{color:o},children:e})]})}function J0({level:e,className:a=""}){const o=sS[e]??{text:"#555"};return m.jsx("span",{className:`inline-block text-[0.875rem] font-500 ${a}`,style:{color:o.text},children:e})}function sz(){const{scrollYProgress:e}=_t(),a=O0(e,{stiffness:150,damping:30,mass:.3});return m.jsx(G.div,{className:"fixed top-0 left-0 right-0 h-[1.5px] z-[60] origin-left",style:{scaleX:a,background:"linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.9))"}})}function rz(){const{id:e}=Vh(),a=Ad(),o=$n(e),t=la(),n=!!(o!=null&&o.simulation&&typeof o.simulation=="object");if(!o)return m.jsxs("div",{className:"container-xl py-40 text-center",children:[m.jsx("p",{className:"text-sl-dim text-[1rem]",children:"Artigo não encontrado."}),m.jsx("button",{onClick:()=>a("/acervo"),className:"mt-4 text-sl-text hover:underline",children:"Voltar ao acervo"})]});const s=(o.relatedIds??[]).map(c=>$n(c)).filter(Boolean).slice(0,3),r=Ve.filter(c=>c.topic===o.topic&&c.id!==o.id).slice(0,3),i=Ve.findIndex(c=>c.id===o.id),l=Ve[(i-1+Ve.length)%Ve.length],u=Ve[(i+1)%Ve.length];function d(){navigator.clipboard.writeText(window.location.href)}return m.jsxs("div",{children:[m.jsx(sz,{}),m.jsxs("section",{className:"container-xl pt-28 pb-10 border-b border-sl-border",children:[m.jsxs("nav",{className:"flex items-center gap-1.5 text-[0.875rem] text-sl-dim mb-8",children:[m.jsx(W,{to:"/",className:"hover:text-sl-text transition-colors",children:"Início"}),m.jsx(Yi,{size:12}),m.jsx(W,{to:"/acervo",className:"hover:text-sl-text transition-colors",children:"Acervo"}),m.jsx(Yi,{size:12}),m.jsx("span",{className:"text-sl-text",children:o.topic})]}),m.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[m.jsx(Y0,{category:o.topic}),m.jsx(J0,{level:o.level}),m.jsxs("span",{className:"text-sl-muted text-[0.75rem] font-mono",children:[String(i+1).padStart(2,"0")," / ",String(Ve.length).padStart(2,"0")]})]}),m.jsxs("div",{className:n?"grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-end":"",children:[m.jsxs("div",{className:"min-w-0",children:[m.jsx(ve,{as:"h1",className:`font-display font-700 leading-[0.98] text-sl-text mb-5 ${n?"text-display-lg max-w-[16ch]":"text-display-xl max-w-4xl"}`,children:o.title}),m.jsx(ve,{as:"p",delay:.1,className:"text-sl-dim text-[1rem] leading-relaxed max-w-2xl",children:o.summary})]}),n&&m.jsxs(W,{to:`/acervo/${o.id}/simulacao`,"data-cursor-label":"Mexer",className:"group block","aria-label":`Abrir a simulação: ${o.simulation.subtitle??o.title}`,children:[m.jsxs("div",{className:`relative aspect-[16/10] bg-black border border-sl-border2 group-hover:border-white
                              transition-colors duration-200 overflow-hidden`,children:[m.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m.jsx(oi,{article:o,running:!t})}),m.jsx("div",{className:"stage-fx","aria-hidden":"true"},o.id),m.jsx("span",{className:`absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300 ease-expo-out`,style:{background:Oa[o.topic]},"aria-hidden":"true"})]}),m.jsxs("div",{className:`flex items-center justify-between gap-4 border border-t-0 border-sl-border2
                              group-hover:border-white group-hover:bg-white group-hover:text-black
                              px-5 py-3.5 transition-colors duration-150`,children:[m.jsx("span",{className:"font-700 text-[0.9375rem]",children:m.jsx(Ho,{children:"Mexer nesta simulação"})}),m.jsx(Bn,{size:11,fill:"currentColor",strokeWidth:0,"aria-hidden":"true"})]})]})]})]}),m.jsx("div",{className:"container-xl py-16",children:m.jsxs("div",{className:"flex flex-col lg:flex-row gap-12",children:[m.jsxs("article",{className:"flex-1 min-w-0 max-w-3xl",children:[m.jsx("div",{className:"prose-simulab",dangerouslySetInnerHTML:{__html:o.content}}),n&&m.jsxs(W,{to:`/acervo/${o.id}/simulacao`,"data-cursor":"frame",className:`group mt-14 flex items-center justify-between gap-6 px-6 py-6
                           border-2 border-white/40 hover:border-white hover:bg-white hover:text-black
                           transition-colors duration-150`,children:[m.jsxs("span",{children:[m.jsx("span",{className:"block font-display font-700 text-[1.25rem] leading-tight tracking-[-0.02em]",children:"Agora teste o que você leu"}),m.jsx("span",{className:"block text-sl-dim group-hover:text-black/70 text-[0.875rem] mt-1.5",children:o.simulation.subtitle??o.title})]}),m.jsx(Bn,{size:14,fill:"currentColor",strokeWidth:0,className:"shrink-0","aria-hidden":"true"})]}),m.jsxs("div",{className:"mt-16 pt-8 border-t border-sl-border",children:[m.jsx("p",{className:"text-sl-muted text-label font-mono mb-4",children:"Compartilhar"}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[[{label:"Twitter",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(o.title)}&url=${encodeURIComponent(window.location.href)}`},{label:"LinkedIn",href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}].map(({label:c,href:p})=>m.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:`px-5 py-2.5 rounded-none border border-sl-border text-sl-dim text-[0.8rem] font-500
                               hover:border-white/15 hover:text-sl-text
                               transition-all duration-300`,children:c},c)),m.jsx("button",{onClick:d,className:`px-5 py-2.5 rounded-none border border-sl-border text-sl-dim text-[0.8rem] font-500
                             hover:border-white/15 hover:text-sl-text
                             transition-all duration-300`,children:"Copiar link"})]})]})]}),s.length>0&&m.jsx("aside",{className:"lg:w-72 xl:w-80 flex-shrink-0",children:m.jsxs("div",{className:"sticky top-24",children:[m.jsx("h3",{className:"font-display font-700 text-[1rem] text-sl-text mb-5",children:"Conteúdos Relacionados"}),m.jsx("div",{className:"flex flex-col",children:s.map(c=>m.jsx(K0,{article:c},c.id))})]})})]})}),m.jsx("section",{className:"border-t border-sl-border",children:m.jsxs("div",{className:"container-xl grid grid-cols-1 sm:grid-cols-2",children:[m.jsxs(W,{to:`/acervo/${l.id}`,className:"group flex items-center gap-5 py-12 sm:pr-10 sm:border-r border-sl-border",children:[m.jsx(vC,{size:18,className:"text-sl-muted shrink-0 group-hover:-translate-x-1 transition-transform duration-300"}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("p",{className:"text-sl-muted text-label font-mono mb-2",children:"Anterior"}),m.jsx("p",{className:`font-display font-700 text-sl-text text-[1rem] truncate
                            group-hover:text-white/60 transition-colors duration-300`,children:l.title})]})]}),m.jsxs(W,{to:`/acervo/${u.id}`,className:"group flex items-center justify-end gap-5 py-12 sm:pl-10 text-right",children:[m.jsxs("div",{className:"min-w-0",children:[m.jsx("p",{className:"text-sl-muted text-label font-mono mb-2",children:"Próximo"}),m.jsx("p",{className:`font-display font-700 text-sl-text text-[1rem] truncate
                            group-hover:text-white/60 transition-colors duration-300`,children:u.title})]}),m.jsx(Yi,{size:18,className:"text-sl-muted shrink-0 group-hover:translate-x-1 transition-transform duration-300"})]})]})}),r.length>0&&m.jsx("section",{className:"border-t border-sl-border",children:m.jsxs("div",{className:"container-xl py-section-sm",children:[m.jsxs("div",{className:"flex items-center justify-between mb-6",children:[m.jsxs("h2",{className:"font-display font-700 text-display-sm text-sl-text",children:["Mais em ",o.topic]}),m.jsxs(W,{to:"/acervo",className:"link-underline flex items-center gap-1 text-sl-text text-[0.875rem] font-500",children:["Ver todos ",m.jsx(cC,{size:12})]})]}),m.jsx("div",{className:"border-t border-sl-border",children:r.map((c,p)=>m.jsx(Q0,{article:c,index:p},c.id))})]})})]})}const iz=[.25,.5,1,2];function Z0(e){if(!e||e>=1)return 0;const a=String(e);return a.includes(".")?a.split(".")[1].length:0}function e2(e,a){if(e.type==="toggle")return a===(e.on??1)?e.on??1:e.off??0;if(e.type==="select")return e.options.some(n=>n.value===a)?a:e.default;const o=e.step||1,t=Math.round((Math.min(e.max,Math.max(e.min,a))-e.min)/o)*o+e.min;return Number(t.toFixed(Z0(o)))}function lz(e,a){return Object.fromEntries(e.map(o=>{const t=a.get(o.id),n=t===null?NaN:Number(t);return[o.id,Number.isFinite(n)?e2(o,n):o.default]}))}function uz({ctrl:e,value:a,onChange:o}){const t="bg-sl-bg p-5 sm:p-6 sm:[&:last-child:nth-child(odd)]:col-span-2";if(e.type==="toggle"){const s=a===(e.on??1);return m.jsx("div",{className:`${t} flex items-center`,children:m.jsxs("button",{type:"button",role:"switch","aria-checked":s,className:"sim-switch",onClick:()=>o(s?e.off??0:e.on??1),children:[m.jsx("span",{className:"text-sl-text text-[1rem] font-500 leading-tight",children:e.label}),m.jsx("span",{className:"box","aria-hidden":"true"})]})})}if(e.type==="select")return m.jsxs("div",{className:t,children:[m.jsx("p",{id:`lbl-${e.id}`,className:"text-sl-dim text-[0.875rem] font-400 leading-tight mb-3",children:e.label}),m.jsx("div",{role:"radiogroup","aria-labelledby":`lbl-${e.id}`,className:"flex flex-wrap gap-y-px",children:e.options.map(s=>m.jsx("button",{type:"button",role:"radio","aria-checked":a===s.value,className:"sim-choice",onClick:()=>o(s.value),children:s.label},s.value))})]});const n=(a-e.min)/(e.max-e.min)*100;return m.jsxs("div",{className:t,children:[m.jsxs("div",{className:"flex items-end justify-between gap-4 mb-4",children:[m.jsx("label",{htmlFor:`ctrl-${e.id}`,className:"text-sl-dim text-[0.875rem] font-400 leading-tight",children:e.label}),m.jsxs("span",{className:"font-display font-700 text-sl-text text-[1.5rem] leading-[1.1] tabular-nums whitespace-nowrap",children:[Number(a).toFixed(Z0(e.step)).replace(".",","),e.unit&&m.jsxs("span",{className:"font-body font-400 text-sl-dim text-[0.875rem]",children:[" ",e.unit]})]})]}),m.jsx("input",{id:`ctrl-${e.id}`,type:"range",min:e.min,max:e.max,step:e.step,value:a,onChange:s=>o(parseFloat(s.target.value)),className:"sim-slider",style:{"--fill":`${n}%`}}),m.jsxs("div",{className:"flex justify-between text-sl-muted text-[0.75rem] mt-1 tabular-nums",children:[m.jsx("span",{children:e.min}),m.jsx("span",{children:e.max})]})]})}function dz(e){if(e<60)return`${e.toFixed(1).replace(".",",")} s`;const a=Math.floor(e/60);return`${a} min ${String(Math.floor(e-a*60)).padStart(2,"0")} s`}function mz(e){const a=String(e).replace(/(\d)\.(\d)/g,"$1,$2"),o=a.match(/^([+\-−]?[\d,]+(?:e[+\-]?\d+)?)\s+(\D+)$/);return o?{num:o[1],unit:o[2]}:{num:a,unit:""}}function ks({children:e}){return m.jsx("kbd",{className:`inline-flex items-center justify-center min-w-[1.6rem] h-6 px-1.5
                    border border-sl-border2 text-sl-text text-[0.75rem] font-body font-500`,children:e})}function cz(){var k;const{id:e}=Vh(),[a]=$h(),o=$n(e),t=typeof(o==null?void 0:o.simulation)=="string"?{component:o.simulation,subtitle:o.title,about:"",controls:[]}:o==null?void 0:o.simulation,n=t?W0(t.component):null,s=(t==null?void 0:t.controls)??[],r=(t==null?void 0:t.presets)??[],[i,l]=x.useState(()=>lz(s,a)),[u,d]=x.useState(!1),[c,p]=x.useState(!0),[v,h]=x.useState(0),[y,q]=x.useState(1),[g,f]=x.useState(0),[b,E]=x.useState(!1),[A,C]=x.useState([]),z=x.useRef(null),w=x.useCallback(P=>{l(T=>{let I=T;for(const _ of(t==null?void 0:t.controls)??[]){if(!(_.id in P))continue;const me=e2(_,P[_.id]);me!==I[_.id]&&(I={...I,[_.id]:me})}return I})},[t]),N=x.useRef(null),S=x.useCallback(P=>{N.current&&(N.current.textContent=dz(P))},[]),V=x.useMemo(()=>({speed:y,stepKey:g,onReadout:C,onParams:w,onTick:S}),[y,g,w,S]),F=x.useCallback(()=>{var me;const P=new URLSearchParams(Object.entries(i).map(([we,ua])=>[we,String(ua)])).toString(),T=`${location.origin}${location.pathname}#/acervo/${e}/simulacao?${P}`;history.replaceState(null,"",T);const I=we=>{d(we),setTimeout(()=>d(!1),2500)},_=(me=navigator.clipboard)==null?void 0:me.writeText(T);_?_.then(()=>I("copied"),()=>I("bar")):I("bar")},[i,e]),M=x.useCallback(()=>{l(Object.fromEntries(((t==null?void 0:t.controls)??[]).map(P=>[P.id,P.default]))),h(P=>P+1),p(!0)},[t]),H=x.useCallback(()=>{p(!1),f(P=>P+1)},[]),J=x.useCallback(()=>{var P,T,I;document.fullscreenElement?(P=document.exitFullscreen)==null||P.call(document):(I=(T=z.current)==null?void 0:T.requestFullscreen)==null||I.call(T)},[]),ue=x.useCallback(()=>{var T;const P=(T=z.current)==null?void 0:T.querySelector("canvas");P&&P.toBlob(I=>{if(!I)return;const _=URL.createObjectURL(I),me=document.createElement("a");me.href=_,me.download=`simulab-${e}.png`,me.click(),URL.revokeObjectURL(_)},"image/png")},[e]);if(x.useEffect(()=>{const P=()=>E(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",P),()=>document.removeEventListener("fullscreenchange",P)},[]),x.useEffect(()=>{function P(T){const I=T.target.tagName;I==="INPUT"||I==="SELECT"||I==="TEXTAREA"||T.metaKey||T.ctrlKey||T.altKey||(T.code==="Space"?(T.preventDefault(),p(_=>!_)):T.key==="ArrowRight"?(T.preventDefault(),H()):T.key==="r"||T.key==="R"?(T.preventDefault(),M()):(T.key==="f"||T.key==="F")&&(T.preventDefault(),J()))}return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[M,H,J]),!o||!t)return m.jsxs("div",{className:"container-xl pt-40 pb-section",children:[m.jsx("h1",{className:"font-display font-700 text-display-lg text-sl-text mb-4",children:"Esta simulação não existe"}),m.jsx("p",{className:"text-sl-dim text-[1rem] mb-8 max-w-md",children:"O endereço pode estar errado ou a simulação mudou de lugar."}),m.jsx(W,{to:"/acervo?sim=1",className:"inline-block px-7 py-4 font-700 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-colors duration-200",children:"Ver todas as simulações"})]});const Aa=(o.relatedIds??[]).map(P=>$n(P)).filter(P=>P==null?void 0:P.simulation).slice(0,3);return m.jsxs("div",{className:"container-xl pt-28 pb-section",children:[m.jsxs("nav",{"aria-label":"Você está em",className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.875rem] text-sl-dim mb-8",children:[m.jsx(W,{to:"/acervo",className:"hover:text-sl-text underline underline-offset-4 decoration-sl-border2",children:"Acervo"}),m.jsx("span",{"aria-hidden":"true",children:"/"}),m.jsx(W,{to:`/acervo/${o.id}`,className:"hover:text-sl-text underline underline-offset-4 decoration-sl-border2 truncate max-w-[16rem]",children:o.title}),m.jsx("span",{"aria-hidden":"true",children:"/"}),m.jsx("span",{className:"text-sl-text",children:"Simulação"})]}),m.jsxs("div",{className:"flex items-center gap-4 mb-5",children:[m.jsx(Y0,{category:o.topic}),m.jsx(J0,{level:o.level})]}),m.jsx("h1",{className:"font-display font-700 text-display-lg text-sl-text mb-5 max-w-[22ch]",children:t.subtitle}),m.jsx("p",{className:"text-sl-dim text-[1rem] leading-relaxed mb-10 max-w-[62ch]",children:o.summary}),m.jsxs("div",{className:"grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]",children:[m.jsxs("div",{className:"min-w-0 flex flex-col gap-8",children:[m.jsxs("div",{ref:z,className:"sim-stage border border-sl-border2",children:[m.jsxs("div",{className:"flex items-center justify-between gap-4 h-10 px-4 sm:px-5 border-b border-sl-border2 text-[0.875rem]",children:[m.jsxs("span",{className:"flex items-center gap-2.5 text-sl-text font-500","aria-live":"polite",children:[m.jsx("span",{className:`sim-led ${c?"is-on":""}`,style:{"--led":Oa[o.topic]},"aria-hidden":"true"}),c?"Rodando":"Em pausa",y!==1&&m.jsxs("span",{className:"text-sl-dim font-400 tabular-nums",children:["a ",String(y).replace(".",","),"×"]})]}),m.jsxs("span",{className:"text-sl-dim",children:[m.jsx("span",{className:"hidden sm:inline",children:"Tempo simulado "}),m.jsx("span",{ref:N,className:"inline-block min-w-[4.5ch] text-right text-sl-text font-700 tabular-nums",children:"0,0 s"})]})]}),m.jsxs("div",{className:"sim-viewport h-[clamp(340px,62vh,680px)] relative",children:[m.jsx("div",{className:"stage-fx","aria-hidden":"true"},v),n?m.jsx(x.Suspense,{fallback:m.jsx("div",{className:"w-full h-full flex items-center justify-center",children:m.jsx("p",{className:"text-sl-dim text-[1rem] animate-pulse",children:"Carregando a simulação…"})}),children:m.jsx(rm.Provider,{value:V,children:m.jsx(n,{params:i,running:c,resetKey:v})})}):m.jsx("div",{className:"w-full h-full flex items-center justify-center px-6 text-center",children:m.jsx("p",{className:"text-sl-dim text-[1rem]",children:"Esta simulação ainda não foi publicada. O artigo já está disponível."})})]}),A.map((P,T)=>m.jsxs("div",{className:"border-t border-sl-border2","aria-live":"off",children:[P.title&&m.jsx("p",{className:"px-4 sm:px-[1.1rem] py-2.5 border-b border-sl-border text-sl-text text-[0.875rem] font-500",children:P.title}),m.jsx("dl",{className:"sim-readouts",children:P.rows.map(I=>{var we;const{num:_,unit:me}=mz(I.v);return m.jsxs("div",{children:[m.jsxs("dt",{className:"flex items-center gap-2 text-sl-dim text-[0.8125rem] leading-snug mb-1",children:[((we=I.c)==null?void 0:we.startsWith("#"))&&m.jsx("span",{className:"w-2 h-2 shrink-0",style:{background:I.c},"aria-hidden":"true"}),m.jsx("span",{className:"truncate",children:I.k})]}),m.jsxs("dd",{className:"font-display font-700 text-sl-text text-[1.25rem] leading-[1.15] tracking-[-0.01em] tabular-nums truncate",children:[_,me&&m.jsxs("span",{className:"font-body font-400 text-sl-dim text-[0.8125rem] tracking-normal",children:[" ",me]})]})]},I.k)})})]},T)),m.jsxs("div",{className:"flex flex-wrap border-t border-sl-border2",role:"toolbar","aria-label":"Controle da simulação",children:[m.jsxs("button",{className:"sim-tool",onClick:()=>p(P=>!P),title:"Espaço",children:[c?m.jsx(jC,{size:15}):m.jsx(Bn,{size:15}),m.jsx("span",{className:"w-[5.2rem] text-left",children:c?"Pausar":"Continuar"})]}),m.jsxs("button",{className:"sim-tool",onClick:H,title:"Seta para a direita","aria-label":"Avançar um quadro",children:[m.jsx(OC,{size:15}),m.jsx("span",{className:"hidden md:inline",children:"Avançar quadro"})]}),m.jsxs("button",{className:"sim-tool",onClick:M,title:"R","aria-label":"Reiniciar",children:[m.jsx(TC,{size:15}),m.jsx("span",{className:"hidden md:inline",children:"Reiniciar"})]}),m.jsxs("div",{className:"flex items-center ml-auto border-l border-sl-border2",role:"group","aria-label":"Velocidade",children:[m.jsx("span",{className:"hidden xl:inline px-3 text-sl-dim text-[0.875rem]",children:"Velocidade"}),iz.map(P=>m.jsxs("button",{className:"sim-tool tabular-nums !px-3","aria-pressed":y===P,onClick:()=>q(P),"aria-label":`Velocidade ${P} vezes`,children:[String(P).replace(".",","),"×"]},P))]}),m.jsxs("button",{className:"sim-tool",onClick:F,title:"Copiar um link que abre a simulação com estes valores","aria-label":"Copiar link desta configuração",children:[u?m.jsx(hC,{size:15}):m.jsx(SC,{size:15}),m.jsx("span",{className:u?"":"hidden xl:inline","aria-live":"polite",children:u==="copied"?"Link copiado":u==="bar"?"Link na barra de endereço":"Copiar link"})]}),m.jsx("button",{className:"sim-tool",onClick:ue,title:"Salvar o quadro atual como PNG","aria-label":"Salvar imagem",children:m.jsx(qC,{size:15})}),m.jsx("button",{className:"sim-tool !border-r-0",onClick:J,title:"F","aria-label":b?"Sair da tela cheia":"Tela cheia",children:b?m.jsx(kC,{size:15}):m.jsx(zC,{size:15})})]})]}),r.length>0&&m.jsxs("div",{children:[m.jsx("p",{id:"presets-label",className:"text-sl-dim text-[0.875rem] mb-3",children:"Situações prontas"}),m.jsx("div",{role:"group","aria-labelledby":"presets-label",className:"flex flex-wrap gap-y-px",children:r.map(P=>{const T=Object.entries(P.values).every(([I,_])=>i[I]===_);return m.jsx("button",{type:"button","aria-pressed":T,className:"sim-choice !flex-none",onClick:()=>l(I=>({...I,...P.values})),children:P.label},P.label)})})]}),s.length>0&&m.jsx("section",{"aria-label":"Parâmetros",className:"grid sm:grid-cols-2 gap-px bg-sl-border border border-sl-border",children:s.map(P=>m.jsx(uz,{ctrl:P,value:i[P.id]??P.default,onChange:T=>l(I=>({...I,[P.id]:T}))},P.id))}),m.jsxs("ul",{className:"hidden md:flex flex-wrap gap-x-6 gap-y-2 text-sl-dim text-[0.875rem]",children:[m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(ks,{children:"Espaço"})," pausa"]}),m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(ks,{children:"→"})," avança um quadro"]}),m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(ks,{children:"R"})," reinicia"]}),m.jsxs("li",{className:"flex items-center gap-2",children:[m.jsx(ks,{children:"F"})," tela cheia"]})]})]}),m.jsxs("aside",{className:"flex flex-col gap-10",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"font-display font-700 text-[1.1rem] text-sl-text mb-4",children:"O que você está vendo"}),t.about&&m.jsx("p",{className:"text-sl-dim text-[1rem] leading-relaxed mb-6",children:t.about}),((k=o.concepts)==null?void 0:k.length)>0&&m.jsxs("p",{className:"text-sl-dim text-[0.875rem] leading-relaxed mb-6",children:[m.jsx("span",{className:"text-sl-text font-500",children:"Conceitos:"})," ",o.concepts.join(", "),"."]}),m.jsx(W,{to:`/acervo/${o.id}`,className:`block text-center px-5 py-3.5 font-700 text-[0.875rem] text-white
                         border-2 border-white/40 hover:border-white hover:bg-white hover:text-black
                         transition-colors duration-200`,children:"Ler o artigo completo"})]}),Aa.length>0&&m.jsxs("div",{children:[m.jsx("h2",{className:"font-display font-700 text-[1.1rem] text-sl-text mb-2",children:"Simulações relacionadas"}),m.jsx("div",{className:"border-t border-sl-border",children:Aa.map(P=>m.jsx(K0,{article:P},P.id))})]})]})]})]})}const pz=[{Icon:pC,title:"Física computacional",desc:"Cada simulação resolve equações reais — de mecânica clássica a colisões moleculares — numericamente, direto no navegador."},{Icon:bC,title:"Canvas em tempo real",desc:"Renderização quadro a quadro, sem plugins nem instalação: só abrir o link e mexer nos parâmetros."},{Icon:gC,title:"Um artigo por conceito",desc:"Cada simulação vem acompanhada de um texto explicativo — e nem todo texto precisa de uma simulação para existir."},{Icon:yC,title:"Constantes e fórmulas reais",desc:"Os números por trás de cada simulação — de g a GM da Terra — são os mesmos usados em livros-texto de física."},{Icon:AC,title:"Acesso sem barreiras",desc:"100% web, responsivo, gratuito. Funciona em qualquer navegador com uma conexão razoável."},{Icon:EC,title:"Mexa e observe",desc:"Mude uma variável e veja o resultado na hora — a ideia é aprender testando, não só lendo."}],fz=[{Icon:wC,title:"Educação sem barreiras",desc:"Conhecimento científico de qualidade não deveria depender de onde você mora ou quanto você pode pagar."},{Icon:RC,title:"Curiosidade em primeiro lugar",desc:"Preferimos uma boa pergunta a uma resposta decorada. Aqui, não entender de primeira é normal."},{Icon:fC,title:"Rigor com leveza",desc:"Física de verdade, equações de verdade — mas explicadas sem jargão desnecessário."},{Icon:I0,title:"Sempre incompleto, de propósito",desc:"Este acervo cresce toda semana. O que falta hoje é o que estamos escrevendo agora."}];function gz(){const e=X0(.2);return m.jsxs("div",{children:[m.jsx("section",{className:"relative min-h-[80vh] flex flex-col justify-end overflow-hidden",children:m.jsxs("div",{className:"relative z-10 w-full container-xl pt-32 pb-16 sm:pb-20",children:[m.jsx(L0,{as:"h1",delay:.12,staggerDelay:.03,className:"font-display font-700 text-display-xl text-sl-text max-w-[52rem] mb-10",children:"O SimuLab começou de uma frustração simples: entender ciência direito costuma exigir livros caros ou laboratórios que a maioria das escolas não tem."}),m.jsx(ve,{delay:.5,className:"max-w-xl",children:m.jsx("p",{className:"text-sl-dim text-[1rem] leading-relaxed",children:"Este é um lugar para parar, mexer nos números e ver o que acontece."})}),m.jsx(G.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:1,delay:.7,ease:Ea},className:"mt-12",children:m.jsxs(W,{ref:e,to:"/acervo",className:`inline-flex items-center gap-2 px-7 py-3.5 rounded-none font-display font-500
                         bg-white text-black text-[0.9rem]
                         border-2 border-white hover:bg-black hover:text-white
                         transition-colors duration-200`,children:["Explorar o Acervo",m.jsx(nm,{size:15})]})})]})}),m.jsx("section",{className:"container-xl py-section border-t border-sl-border",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start",children:[m.jsx("div",{children:m.jsxs(ve,{as:"h2",delay:.08,className:"font-display font-700 text-display-lg text-sl-text",children:["Explicar bem"," ",m.jsx("span",{className:"text-white/35",children:"é um ato de respeito"})]})}),m.jsxs(ve,{delay:.2,className:"space-y-5 text-sl-dim text-[1rem] leading-[1.85] lg:pt-12",children:[m.jsx("p",{children:"Quando alguém escreve um texto confuso de propósito, ou esconde uma fórmula atrás de jargão, está dizendo — sem querer — que você não merece entender aquilo direito. Achamos o oposto: quanto mais complexo o assunto, mais vale o esforço de explicar bem."}),m.jsxs("p",{children:["Por isso o ",m.jsx("strong",{className:"text-sl-text font-500",children:"SimuLab"})," existe: um lugar onde física, química, biologia, astronomia, matemática, medicina e computação são explicadas de verdade — com simulações para quem aprende melhor vendo e mexendo, e artigos para quem quer entender o porquê por trás do número."]}),m.jsx("p",{children:"Não é um curso, não tem certificado, não pede cadastro. É um lugar para ficar curioso de graça."})]})]})}),m.jsxs("section",{className:"container-xl py-section border-t border-sl-border",children:[m.jsxs("div",{className:"mb-12",children:[m.jsx(ve,{as:"h2",delay:.08,className:"font-display font-700 text-display-lg text-sl-text mb-4 max-w-3xl",children:"Nada de mágica, só código bem escrito"}),m.jsx(ve,{as:"p",delay:.16,className:"text-sl-dim text-[1rem] leading-relaxed max-w-2xl",children:"Cada simulação é uma pequena peça de engenharia própria — sem motor de física genérico, sem biblioteca pronta escondendo o que está de fato acontecendo."})]}),m.jsx(Ji,{className:"border-t border-sl-border",children:pz.map(({Icon:a,title:o,desc:t},n)=>m.jsx(Zi,{children:m.jsxs("div",{className:`group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] items-start
                              gap-5 sm:gap-8 py-7 border-b border-sl-border
                              transition-all duration-200`,children:[m.jsx("span",{className:"text-sl-muted text-[0.75rem] font-mono tabular-nums pt-1",children:String(n+1).padStart(2,"0")}),m.jsxs("div",{className:"flex items-start gap-4 sm:contents",children:[m.jsx(a,{size:16,className:"text-sl-dim shrink-0 mt-1 sm:mt-0 sm:self-center"}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-display font-700 text-sl-text text-[1.1rem] sm:text-[1.25rem] leading-snug mb-2",children:o}),m.jsx("p",{className:"text-sl-dim text-[0.875rem] leading-relaxed max-w-lg",children:t})]})]})]})},o))})]}),m.jsx("section",{className:"py-section border-t border-sl-border",children:m.jsxs("div",{className:"container-xl",children:[m.jsx("div",{className:"mb-12",children:m.jsx(ve,{as:"h2",delay:.08,className:"font-display font-700 text-display-lg text-sl-text max-w-3xl",children:"Quatro coisas em que acreditamos"})}),m.jsx(Ji,{className:"grid grid-cols-1 md:grid-cols-2 gap-px bg-sl-border border border-sl-border",children:fz.map(({Icon:a,title:o,desc:t},n)=>m.jsx(Zi,{children:m.jsxs("div",{className:`group h-full flex flex-col gap-6 p-8 sm:p-10 bg-sl-bg
                                hover:bg-white/[0.015] transition-colors duration-200`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx(a,{size:18,className:"text-sl-dim"}),m.jsx("span",{className:"text-sl-muted text-[0.75rem] font-mono tabular-nums",children:String(n+1).padStart(2,"0")})]}),m.jsxs("div",{className:"mt-auto",children:[m.jsx("h3",{className:"font-display font-700 text-sl-text text-[1.2rem] mb-3 leading-snug",children:o}),m.jsx("p",{className:"text-sl-dim text-[0.875rem] leading-relaxed",children:t})]})]})},o))})]})}),m.jsx("section",{className:"container-xl py-section border-t border-sl-border",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start",children:[m.jsxs("div",{children:[m.jsxs(ve,{as:"h2",delay:.08,className:"font-display font-700 text-display-md text-sl-text mb-8",children:["Um projeto pequeno,"," ",m.jsx("span",{className:"text-white/35",children:"feito aos poucos"})]}),m.jsxs(ve,{delay:.16,className:"space-y-4 text-sl-dim text-[0.875rem] leading-[1.85]",children:[m.jsx("p",{children:"Não tem investidor, não tem equipe de marketing. É um projeto brasileiro que cresce nas horas vagas — uma simulação nova aqui, um artigo reescrito ali."}),m.jsx("p",{children:"Isso significa que o acervo vai ficar incompleto por um bom tempo. Prefiro publicar 15 artigos bons hoje e mais 10 no mês que vem do que prometer 100 de uma vez e entregar rasos."}),m.jsxs("p",{children:["Se você é professor, pesquisador ou só encontrou um erro em algum lugar,"," ",m.jsx("span",{className:"text-sl-text font-500",children:"a mensagem é sempre bem-vinda."})]})]})]}),m.jsx(Ji,{className:"border-t border-sl-border lg:mt-12",children:[{label:"Plataforma web",desc:"Sem instalação"},{label:"100% gratuito",desc:"Sem cadastro, sem paywall"},{label:"Código aberto",desc:"Física com fórmulas reais"},{label:"Feito no Brasil",desc:"Em português, para todos"}].map(({label:a,desc:o},t)=>m.jsx(Zi,{children:m.jsxs("div",{className:"flex items-baseline gap-6 py-6 border-b border-sl-border",children:[m.jsx("span",{className:"text-sl-muted text-[0.75rem] font-mono w-7 shrink-0 tabular-nums",children:String(t+1).padStart(2,"0")}),m.jsx("span",{className:"font-display font-700 text-[1rem] text-sl-text flex-1",children:a}),m.jsx("span",{className:"text-sl-dim text-[0.875rem] text-right",children:o})]})},a))})]})}),m.jsx("section",{className:"container-xl pb-section",children:m.jsxs(_C,{speed:.05,className:"text-center py-section border-t border-sl-border",children:[m.jsx(ve,{as:"h2",className:"font-display font-700 text-display-xl text-sl-text mb-5",children:"Pronto para explorar?"}),m.jsx(ve,{as:"p",delay:.1,className:"text-sl-dim text-[1rem] leading-relaxed mb-12 max-w-lg mx-auto",children:"Dezenas de artigos e simulações interativas esperando. Tudo gratuito, tudo agora."}),m.jsx(ve,{delay:.2,children:m.jsxs(W,{to:"/acervo",className:`inline-flex items-center gap-2 px-8 py-4 rounded-none font-display font-700 text-[1rem]
                         bg-white text-black
                         border-2 border-white hover:bg-black hover:text-white
                         transition-colors duration-200`,children:[m.jsx(I0,{size:17}),"Entrar no Acervo"]})})]})})]})}function hz(){return m.jsx("div",{className:"min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden",children:m.jsxs("div",{className:"relative z-10",children:[m.jsx("div",{className:"select-none mb-6","aria-hidden":"true",children:m.jsx("span",{className:"font-display font-700 text-[clamp(6rem,20vw,14rem)] leading-none text-stroke tracking-tight",children:"404"})}),m.jsx(L0,{as:"h1",staggerDelay:.05,className:"font-display font-700 text-display-md text-sl-text mb-5",children:"Essa página não existe."}),m.jsx(ve,{as:"p",delay:.3,className:"text-sl-dim text-[1rem] max-w-md mb-12 mx-auto leading-relaxed",children:"O link pode estar quebrado, ou o conteúdo foi movido. Volte para o acervo e continue explorando."}),m.jsx(ve,{delay:.5,children:m.jsxs(W,{to:"/",className:`group inline-flex items-center gap-2 px-7 py-3.5 rounded-none font-display font-500
                       bg-white text-black text-[0.9rem]
                       hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                       active:scale-[0.97]
                       transition-all duration-200`,children:["Voltar para o início",m.jsx(nm,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]})})]})})}typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const vf=[.76,0,.24,1],a2=.5,vz=.7;let xf=!0;const xz={initial:{opacity:1},enter:{opacity:1},exit:{opacity:.999,transition:{duration:a2}}},bz={initial:{opacity:0},enter:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.15}}};function yz({skipReveal:e}){return m.jsx(G.div,{"aria-hidden":"true",className:"fixed inset-0 z-[70] bg-white pointer-events-none",variants:{initial:{y:e?"-100%":"0%"},enter:{y:"-100%",transition:{duration:vz,ease:vf}},exit:{y:["100%","0%"],transition:{duration:a2,ease:vf}}}})}function qz(){window.__lenis&&window.__lenis.scrollTo(0,{immediate:!0,force:!0}),window.scrollTo(0,0)}function Ez(){const e=Ko(),a=la(),o=xf&&sm;return xf=!1,m.jsx(em,{mode:"wait",onExitComplete:qz,children:m.jsxs(G.div,{variants:a?bz:xz,initial:"initial",animate:"enter",exit:"exit",children:[!a&&m.jsx(yz,{skipReveal:o}),m.jsxs(C1,{location:e,children:[m.jsx(Po,{path:"/",element:m.jsx(ZS,{})}),m.jsx(Po,{path:"/acervo",element:m.jsx(nz,{})}),m.jsx(Po,{path:"/acervo/:id",element:m.jsx(rz,{})}),m.jsx(Po,{path:"/acervo/:id/simulacao",element:m.jsx(cz,{})}),m.jsx(Po,{path:"/sobre",element:m.jsx(gz,{})}),m.jsx(Po,{path:"*",element:m.jsx(hz,{})})]})]},e.pathname)})}function Az(){return m.jsx(M1,{children:m.jsxs(qS,{children:[m.jsx(wS,{}),m.jsx(ES,{}),m.jsxs("div",{className:"min-h-screen flex flex-col bg-sl-bg font-body text-sl-text",children:[m.jsx(QC,{}),m.jsx("main",{className:"flex-1",children:m.jsx(Ez,{})}),m.jsx(mS,{})]})]})})}ol.createRoot(document.getElementById("root")).render(m.jsx(kf.StrictMode,{children:m.jsx(Az,{})}));export{Sz as A,Bz as B,ae as C,zz as Q,MS as S,Nz as a,NS as b,Pz as c,Mz as d,jz as e,Fz as f,kz as g,Mt as h,Tz as i,$0 as j,m as k,Wz as l,Uz as m,_z as n,Rz as o,Vz as p,Lz as q,x as r,$z as s,Me as t,Oz as u,Dz as v,Iz as w,Gz as x,TS as y,Hz as z};
