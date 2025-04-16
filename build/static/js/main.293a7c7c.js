/*! For license information please see main.293a7c7c.js.LICENSE.txt */
(()=>{var e={497:(e,t,n)=>{"use strict";var r=n(218);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function x(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),A=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),_=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var j=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var I,$=Object.assign;function D(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case A:return"Portal";case E:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=B(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){q(e,t);var n=B(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,B(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function oe(e,t){var n=B(t.value),r=B(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var be=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ae=null,ke=null,Se=null;function Ee(e){if(e=xa(e)){if("function"!==typeof Ae)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),Ae(e.stateNode,e.type,t))}}function Ce(e){ke?Se?Se.push(e):Se=[e]:ke=e}function _e(){if(ke){var e=ke,t=Se;if(Se=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function ze(e,t){return e(t)}function Pe(){}var Oe=!1;function Ne(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return ze(e,t,n)}finally{Oe=!1,(null!==ke||null!==Se)&&(Pe(),_e())}}function Te(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var je={};Object.defineProperty(je,"passive",{get:function(){Re=!0}}),window.addEventListener("test",je,je),window.removeEventListener("test",je,je)}catch(ce){Re=!1}function Le(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ie=!1,$e=null,De=!1,Fe=null,Me={onError:function(e){Ie=!0,$e=e}};function Ue(e,t,n,r,a,o,i,l,s){Ie=!1,$e=null,Le.apply(Me,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Be(e){if(We(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Be(a),e;if(i===r)return Be(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Xe=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,Ge=a.unstable_requestPaint,qe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,At,kt,St,Et,Ct=!1,_t=[],zt=null,Pt=null,Ot=null,Nt=new Map,Tt=new Map,Rt=[],jt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(t.pointerId)}}function It(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&At(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function $t(e){var t=va(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xa(n))&&At(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function Ft(e,t,n){Dt(e)&&n.delete(t)}function Mt(){Ct=!1,null!==zt&&Dt(zt)&&(zt=null),null!==Pt&&Dt(Pt)&&(Pt=null),null!==Ot&&Dt(Ot)&&(Ot=null),Nt.forEach(Ft),Tt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Mt)))}function Wt(e){function t(t){return Ut(t,e)}if(0<_t.length){Ut(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Ut(zt,e),null!==Pt&&Ut(Pt,e),null!==Ot&&Ut(Ot,e),Nt.forEach(t),Tt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)$t(n),null===n.blockedOn&&Rt.shift()}var Ht=y.ReactCurrentBatchConfig,Bt=!0;function Vt(e,t,n,r){var a=xt,o=Ht.transition;Ht.transition=null;try{xt=1,Xt(e,t,n,r)}finally{xt=a,Ht.transition=o}}function Kt(e,t,n,r){var a=xt,o=Ht.transition;Ht.transition=null;try{xt=4,Xt(e,t,n,r)}finally{xt=a,Ht.transition=o}}function Xt(e,t,n,r){if(Bt){var a=Yt(e,t,n,r);if(null===a)Br(e,t,r,Qt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=It(zt,e,t,n,r,a),!0;case"dragenter":return Pt=It(Pt,e,t,n,r,a),!0;case"mouseover":return Ot=It(Ot,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Nt.set(o,It(Nt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Tt.set(o,It(Tt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<jt.indexOf(e)){for(;null!==a;){var o=xa(a);if(null!==o&&wt(o),null===(o=Yt(e,t,n,r))&&Br(e,t,r,Qt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Br(e,t,r,null,n)}}var Qt=null;function Yt(e,t,n,r){if(Qt=null,null!==(e=va(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in qt?qt.value:qt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=$({},un,{view:0,detail:0}),fn=an(dn),pn=$({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an($({},pn,{dataTransfer:0})),gn=an($({},dn,{relatedTarget:0})),bn=an($({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=an(vn),yn=an($({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},An={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Sn}var Cn=$({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?An[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(Cn),zn=an($({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an($({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),On=an($({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=$({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tn=an(Nn),Rn=[9,13,27,32],jn=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var In=c&&"TextEvent"in window&&!Ln,$n=c&&(!jn||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Xn=null;function Qn(e){Dr(e,0)}function Yn(e){if(X(ya(e)))return e}function Gn(e,t){if("change"===e)return t}var qn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Xn=Kn=null)}function nr(e){if("value"===e.propertyName&&Yn(Xn)){var t=[];Vn(t,Xn,e,we(e)),Ne(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Xn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Xn)}function or(e,t){if("click"===e)return Yn(t)}function ir(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,br=null,vr=null,xr=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Kr(br,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Sr={};function Er(e){if(kr[e])return kr[e];if(!Ar[e])return e;var t,n=Ar[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return kr[e]=n[t];return e}c&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);var Cr=Er("animationend"),_r=Er("animationiteration"),zr=Er("animationstart"),Pr=Er("transitionend"),Or=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(e,t){Or.set(e,t),s(t,[e])}for(var Rr=0;Rr<Nr.length;Rr++){var jr=Nr[Rr];Tr(jr.toLowerCase(),"on"+(jr[0].toUpperCase()+jr.slice(1)))}Tr(Cr,"onAnimationEnd"),Tr(_r,"onAnimationIteration"),Tr(zr,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function $r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ue.apply(this,arguments),Ie){if(!Ie)throw Error(o(198));var c=$e;Ie=!1,$e=null,De||(De=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;$r(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;$r(a,l,u),o=s}}}if(De)throw e=Fe,De=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Mr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Xt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=va(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Ne((function(){var r=o,a=we(n),i=[];e:{var l=Or.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case _r:case zr:s=bn;break;case Pr:s=On;break;case"scroll":s=fn;break;case"wheel":s=Tn;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Te(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===ye||!(u=n.relatedTarget||n.fromElement)||!va(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?va(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:ya(s),p=null==u?l:ya(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,va(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Xr(p))h++;for(p=0,m=f;m;m=Xr(m))p++;for(;0<h-p;)c=Xr(c),h--;for(;0<p-h;)f=Xr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Xr(c),f=Xr(f)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?ya(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Bn(l))if(qn)g=ir;else{g=ar;var b=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(b&&b(e,l,r),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=r?ya(r):window,e){case"focusin":(Bn(b)||"true"===b.contentEditable)&&(gr=b,br=r,vr=null);break;case"focusout":vr=br=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,yr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":yr(i,n,a)}var v;if(jn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Wn?Mn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&($n&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Wn&&(v=en()):(Jt="value"in(qt=a)?qt.value:qt.textContent,Wn=!0)),0<(b=Kr(r,x)).length&&(x=new yn(x,e,null,n,a),i.push({event:x,listeners:b}),v?x.data=v:null!==(v=Un(n))&&(x.data=v))),(v=In?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!jn&&Mn(e,t)?(e=en(),Zt=Jt=qt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new yn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=v))}Dr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Te(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Te(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Xr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Te(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Te(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Yr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function qr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Gr,"")}function Jr(e,t,n){if(t=qr(t),qr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Wt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ba="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function xa(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ya(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var Aa=[],ka=-1;function Sa(e){return{current:e}}function Ea(e){0>ka||(e.current=Aa[ka],Aa[ka]=null,ka--)}function Ca(e,t){ka++,Aa[ka]=e.current,e.current=t}var _a={},za=Sa(_a),Pa=Sa(!1),Oa=_a;function Na(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ta(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ea(Pa),Ea(za)}function ja(e,t,n){if(za.current!==_a)throw Error(o(168));Ca(za,t),Ca(Pa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,H(e)||"Unknown",a));return $({},n,r)}function Ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,Oa=za.current,Ca(za,e),Ca(Pa,Pa.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=La(e,t,Oa),r.__reactInternalMemoizedMergedChildContext=e,Ea(Pa),Ea(za),Ca(za,e)):Ea(Pa),Ca(Pa,n)}var Da=null,Fa=!1,Ma=!1;function Ua(e){null===Da?Da=[e]:Da.push(e)}function Wa(){if(!Ma&&null!==Da){Ma=!0;var e=0,t=xt;try{var n=Da;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Da=null,Fa=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Xe(Ze,Wa),a}finally{xt=t,Ma=!1}}return null}var Ha=[],Ba=0,Va=null,Ka=0,Xa=[],Qa=0,Ya=null,Ga=1,qa="";function Ja(e,t){Ha[Ba++]=Ka,Ha[Ba++]=Va,Va=e,Ka=t}function Za(e,t,n){Xa[Qa++]=Ga,Xa[Qa++]=qa,Xa[Qa++]=Ya,Ya=e;var r=Ga;e=qa;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ga=1<<32-it(t)+a|n<<a|r,qa=o+e}else Ga=1<<o|n<<a|r,qa=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function to(e){for(;e===Va;)Va=Ha[--Ba],Ha[Ba]=null,Ka=Ha[--Ba],Ha[Ba]=null;for(;e===Ya;)Ya=Xa[--Qa],Xa[Qa]=null,qa=Xa[--Qa],Xa[Qa]=null,Ga=Xa[--Qa],Xa[Qa]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:Ga,overflow:qa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=y.ReactCurrentBatchConfig;function bo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function yo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$u(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===T&&xo(o)===t.type)?((r=a(t,n.props)).ref=bo(e,t,n),r.return=e,r):((r=ju(n.type,n.key,n.props,null,e.mode,r)).ref=bo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Du(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$u(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=ju(t.type,t.key,t.props,null,e.mode,n)).ref=bo(e,null,t),n.return=e,n;case A:return(t=Du(t,e.mode,n)).return=e,t;case T:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case A:return n.key===a?c(e,t,n,r):null;case T:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);vo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case A:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case T:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);vo(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var b=p(a,d,l[m],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(a,d),o=i(b,o,m),null===c?u=b:c.sibling=b,c=b,d=g}if(m===l.length)return n(a,d),ao&&Ja(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Ja(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,m),u}function g(a,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,b=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(b=m,m=null):b=m.sibling;var x=p(a,m,v.value,u);if(null===x){null===m&&(m=b);break}e&&m&&null===x.alternate&&t(a,m),l=i(x,l,g),null===d?c=x:d.sibling=x,d=x,m=b}if(v.done)return n(a,m),ao&&Ja(a,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,u))&&(l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return ao&&Ja(a,g),c}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=h(m,a,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=i(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===T&&xo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=bo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((o=Lu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=ju(i.type,i.key,i.props,null,r.mode,s)).ref=bo(r,o,i),s.return=r,r=s)}return l(r);case A:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Du(i,r.mode,s)).return=r,r=o}return l(r);case T:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(L(i))return g(r,o,i,s);vo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=$u(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=yo(!0),Ao=yo(!1),ko=Sa(null),So=null,Eo=null,Co=null;function _o(){Co=Eo=So=null}function zo(e){var t=ko.current;Ea(ko),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oo(e,t){So=e,Co=Eo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function No(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===Eo){if(null===So)throw Error(o(308));Eo=e,So.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var To=null;function Ro(e){null===To?To=[e]:To.push(e)}function jo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Io=!1;function $o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Do(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&zs)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Lo(e,n)}return null===(a=r.interleaved)?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Lo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Wo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var a=e.updateQueue;Io=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=$({},d,f);break e;case 2:Io=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Is|=i,e.lanes=i,e.memoizedState=d}}function Bo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},Ko=Sa(Vo),Xo=Sa(Vo),Qo=Sa(Vo);function Yo(e){if(e===Vo)throw Error(o(174));return e}function Go(e,t){switch(Ca(Qo,t),Ca(Xo,e),Ca(Ko,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Ko),Ca(Ko,t)}function qo(){Ea(Ko),Ea(Xo),Ea(Qo)}function Jo(e){Yo(Qo.current);var t=Yo(Ko.current),n=se(t,e.type);t!==n&&(Ca(Xo,e),Ca(Ko,n))}function Zo(e){Xo.current===e&&(Ea(Ko),Ea(Xo))}var ei=Sa(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=y.ReactCurrentDispatcher,oi=y.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Zi:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Ji,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function bi(){var e=0!==fi;return fi=0,e}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function xi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function yi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=xi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Is|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Is|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ai(e){var t=xi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(xl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Si(e,t){var n=li,r=xi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,xl=!0),r=r.queue,Ii(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Ni(9,Ci.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(o(349));0!==(30&ii)||Ei(n,t,a)}return a}function Ei(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,zi(t)&&Pi(e)}function _i(e,t,n){return n((function(){zi(t)&&Pi(e)}))}function zi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pi(e){var t=Lo(e,1);null!==t&&nu(t,e,1,-1)}function Oi(e){var t=vi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function Ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ti(){return xi().memoizedState}function Ri(e,t,n,r){var a=vi();li.flags|=e,a.memoizedState=Ni(1|t,n,void 0,void 0===r?null:r)}function ji(e,t,n,r){var a=xi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=Ni(t,n,o,r))}li.flags|=e,a.memoizedState=Ni(1|t,n,o,r)}function Li(e,t){return Ri(8390656,8,e,t)}function Ii(e,t){return ji(2048,8,e,t)}function $i(e,t){return ji(4,2,e,t)}function Di(e,t){return ji(4,4,e,t)}function Fi(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,ji(4,4,Fi.bind(null,t,e),n)}function Ui(){}function Wi(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hi(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Is|=n,e.baseState=!0),t)}function Vi(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{xt=n,oi.transition=r}}function Ki(){return xi().memoizedState}function Xi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yi(e))Gi(t,n);else if(null!==(n=jo(e,t,n,r))){nu(n,e,r,eu()),qi(n,t,r)}}function Qi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))Gi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Ro(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=jo(e,t,a,r))&&(nu(n,e,r,a=eu()),qi(n,t,r))}}function Yi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ji={readContext:No,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Zi={readContext:No,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:No,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4194308,4,Fi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=vi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:Oi,useDebugValue:Ui,useDeferredValue:function(e){return vi().memoizedState=e},useTransition:function(){var e=Oi(!1),t=e[0];return e=Vi.bind(null,e[1]),vi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=vi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!==(30&ii)||Ei(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Li(_i.bind(null,r,i,e),[e]),r.flags|=2048,Ni(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vi(),t=Ps.identifierPrefix;if(ao){var n=qa;t=":"+t+"R"+(n=(Ga&~(1<<32-it(Ga)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:No,useCallback:Wi,useContext:No,useEffect:Ii,useImperativeHandle:Mi,useInsertionEffect:$i,useLayoutEffect:Di,useMemo:Hi,useReducer:wi,useRef:Ti,useState:function(){return wi(yi)},useDebugValue:Ui,useDeferredValue:function(e){return Bi(xi(),si.memoizedState,e)},useTransition:function(){return[wi(yi)[0],xi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Si,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:No,useCallback:Wi,useContext:No,useEffect:Ii,useImperativeHandle:Mi,useInsertionEffect:$i,useLayoutEffect:Di,useMemo:Hi,useReducer:Ai,useRef:Ti,useState:function(){return Ai(yi)},useDebugValue:Ui,useDeferredValue:function(e){var t=xi();return null===si?t.memoizedState=e:Bi(t,si.memoizedState,e)},useTransition:function(){return[Ai(yi)[0],xi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Si,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=$({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:$({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Mo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Fo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Mo(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Fo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Mo(e,a,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=No(o):(a=Ta(t)?Oa:za.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},$o(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=No(o):(o=Ta(t)?Oa:za.current,a.context=Na(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ho(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Mo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=y.ReactCurrentOwner,xl=!1;function yl(e,t,n,r){t.child=null===e?Ao(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return Oo(t,a),r=gi(e,t,n,r,o,a),n=bi(),null===e||xl?(ao&&n&&eo(t),t.flags|=1,yl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function Al(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Tu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=ju(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,kl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Bl(e,t,a)}return t.flags|=1,(e=Ru(o,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Bl(e,t,a);0!==(131072&e.flags)&&(xl=!0)}}return Cl(e,t,n,r,a)}function Sl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Rs,Ts),Ts|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Rs,Ts),Ts|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Rs,Ts),Ts|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Rs,Ts),Ts|=r;return yl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var o=Ta(n)?Oa:za.current;return o=Na(t,o),Oo(t,a),n=gi(e,t,n,r,o,a),r=bi(),null===e||xl?(ao&&r&&eo(t),t.flags|=1,yl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function _l(e,t,n,r,a){if(Ta(n)){var o=!0;Ia(t)}else o=!1;if(Oo(t,a),null===t.stateNode)Hl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=No(u):u=Na(t,u=Ta(n)?Oa:za.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Io=!1;var f=t.memoizedState;i.state=f,Ho(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Pa.current||Io?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Io||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Do(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=No(s):s=Na(t,s=Ta(n)?Oa:za.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Io=!1,f=t.memoizedState,i.state=f,Ho(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||Pa.current||Io?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Io||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,o,a)}function zl(e,t,n,r,a,o){El(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&$a(t,n,!1),Bl(e,t,o);r=t.stateNode,vl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):yl(e,t,l,o),t.memoizedState=r.state,a&&$a(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?ja(0,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(0,t.context,!1),Go(e,t.containerInfo)}function Ol(e,t,n,r,a){return ho(),mo(a),t.flags|=256,yl(e,t,n,r),t.child}var Nl,Tl,Rl,jl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function $l(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Iu(s,a,0,null),e=Lu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Ll,e):Dl(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Iu({mode:"visible",children:r.children},a,0,null),(i=Lu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Lo(e,a),nu(r,e,a,-1))}return mu(),Fl(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Xa[Qa++]=Ga,Xa[Qa++]=qa,Xa[Qa++]=Ya,Ga=e.id,qa=e.overflow,Ya=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ru(r,l):(l=Lu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Dl(e,t){return(t=Iu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function Ul(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Wl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(yl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Ta(t.type)&&Ra(),Kl(t),null;case 3:return r=t.stateNode,qo(),Ea(Pa),Ea(za),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Tl(e,t),Kl(t),null;case 5:Zo(t);var a=Yo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=Yo(Ko.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":G(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":ae(r,i),Fr("invalid",r)}for(var s in ve(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":K(r),Z(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":G(e,r),a=Y(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=$({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(i in ve(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Fr("scroll",e):null!=c&&x(e,i,c,s))}switch(n){case"input":K(e),Z(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)jl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Yo(Qo.current),Yo(Ko.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===js&&(js=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return qo(),Tl(e,t),null===e&&Wr(t.stateNode.containerInfo),Kl(t),null;case 10:return zo(t.type._context),Kl(t),null;case 19:if(Ea(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==js||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&qe()>Ws&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Kl(t),null}else 2*qe()-i.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=qe(),t.sibling=null,n=ei.current,Ca(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ts)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ql(e,t){switch(to(t),t.tag){case 1:return Ta(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),Ea(Pa),Ea(za),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ea(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ei),null;case 4:return qo(),null;case 10:return zo(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Tl=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yo(Ko.current);var o,i=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),i=[];break;case"select":a=$({},a,{value:void 0}),r=$({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},jl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,Gl=!1,ql="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Su(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Su(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Zl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Wt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Su(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ql),t.forEach((function(t){var r=zu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Su(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),bs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Su(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Su(e,e.return,g)}}break;case 1:ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),bs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Su(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&q(a,i),xe(s,l);var c=xe(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):x(a,d,f,c)}switch(s){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){Su(e,e.return,g)}}break;case 6:if(ms(t,e),bs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Su(e,e.return,g)}}break;case 3:if(ms(t,e),bs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){Su(e,e.return,g)}break;case 4:default:ms(t,e),bs(e);break;case 13:ms(t,e),bs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),bs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Su(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Jl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Su(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Su(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),bs(e),4&r&&hs(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Su(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Jl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var a=Jl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Yl;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Yl;var u=Gl;if(Yl=i,(Gl=s)&&!u)for(Jl=a;null!==Jl;)s=(i=Jl).child,22===i.tag&&null!==i.memoizedState?As(a):null!==s?(s.return=i,Jl=s):As(a);for(;null!==o;)Jl=o,xs(o,t,n),o=o.sibling;Jl=a,Yl=l,Gl=u}ys(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Jl=o):ys(e)}}function ys(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Bo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Wt(f)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&as(t)}catch(p){Su(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function As(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Su(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Su(t,a,s)}}var o=t.return;try{as(t)}catch(s){Su(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Su(t,i,s)}}}catch(s){Su(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Ss=Math.ceil,Es=y.ReactCurrentDispatcher,Cs=y.ReactCurrentOwner,_s=y.ReactCurrentBatchConfig,zs=0,Ps=null,Os=null,Ns=0,Ts=0,Rs=Sa(0),js=0,Ls=null,Is=0,$s=0,Ds=0,Fs=null,Ms=null,Us=0,Ws=1/0,Hs=null,Bs=!1,Vs=null,Ks=null,Xs=!1,Qs=null,Ys=0,Gs=0,qs=null,Js=-1,Zs=0;function eu(){return 0!==(6&zs)?qe():-1!==Js?Js:Js=qe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&zs)&&0!==Ns?Ns&-Ns:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,qs=null,Error(o(185));bt(e,n,r),0!==(2&zs)&&e===Ps||(e===Ps&&(0===(2&zs)&&($s|=n),4===js&&lu(e,Ns)),ru(e,r),1===n&&0===zs&&0===(1&t.mode)&&(Ws=qe()+500,Fa&&Wa()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ps?Ns:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Fa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),ia((function(){0===(6&zs)&&Wa()})),n=null;else{switch(yt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Js=-1,Zs=0,0!==(6&zs))throw Error(o(327));var n=e.callbackNode;if(Au()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=zs;zs|=2;var i=hu();for(Ps===e&&Ns===t||(Hs=null,Ws=qe()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}_o(),Es.current=i,zs=a,null!==Os?t=0:(Ps=null,Ns=0,t=js)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Ls,fu(e,0),lu(e,r),ru(e,qe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Ls,fu(e,0),lu(e,r),ru(e,qe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Ms,Hs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-qe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Ms,Hs),t);break}wu(e,Ms,Hs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ss(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Ms,Hs),r);break}wu(e,Ms,Hs);break;default:throw Error(o(329))}}}return ru(e,qe()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Ms,Ms=n,null!==t&&iu(t)),e}function iu(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lu(e,t){for(t&=~Ds,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&zs))throw Error(o(327));Au();var t=ft(e,0);if(0===(1&t))return ru(e,qe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ls,fu(e,0),lu(e,t),ru(e,qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Ms,Hs),ru(e,qe()),null}function uu(e,t){var n=zs;zs|=1;try{return e(t)}finally{0===(zs=n)&&(Ws=qe()+500,Fa&&Wa())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&zs)&&Au();var t=zs;zs|=1;var n=_s.transition,r=xt;try{if(_s.transition=null,xt=1,e)return e()}finally{xt=r,_s.transition=n,0===(6&(zs=t))&&Wa()}}function du(){Ts=Rs.current,Ea(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Os)for(n=Os.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:qo(),Ea(Pa),Ea(za),ri();break;case 5:Zo(r);break;case 4:qo();break;case 13:case 19:Ea(ei);break;case 10:zo(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Os=e=Ru(e.current,null),Ns=Ts=t,js=0,Ls=null,Ds=$s=Is=0,Ms=Fs=null,null!==To){for(t=0;t<To.length;t++)if(null!==(r=(n=To[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}To=null}return e}function pu(e,t){for(;;){var n=Os;try{if(_o(),ai.current=Ji,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){js=1,Ls=t,Os=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,bl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),mo(ul(u,s));break e}}i=u=ul(u,s),4!==js&&(js=2),null===Fs?Fs=[i]:Fs.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,pl(0,u,t));break e;case 1:s=u;var v=i.type,x=i.stateNode;if(0===(128&i.flags)&&("function"===typeof v.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}yu(n)}catch(y){t=y,Os===n&&null!==n&&(Os=n=n.return);continue}break}}function hu(){var e=Es.current;return Es.current=Ji,null===e?Ji:e}function mu(){0!==js&&3!==js&&2!==js||(js=4),null===Ps||0===(268435455&Is)&&0===(268435455&$s)||lu(Ps,Ns)}function gu(e,t){var n=zs;zs|=2;var r=hu();for(Ps===e&&Ns===t||(Hs=null,fu(e,t));;)try{bu();break}catch(a){pu(e,a)}if(_o(),zs=n,Es.current=r,null!==Os)throw Error(o(261));return Ps=null,Ns=0,js}function bu(){for(;null!==Os;)xu(Os)}function vu(){for(;null!==Os&&!Ye();)xu(Os)}function xu(e){var t=ks(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,null===t?yu(e):Os=t,Cs.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Xl(n,t,Ts)))return void(Os=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Os=n);if(null===e)return js=6,void(Os=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Os=t);Os=t=e}while(null!==t);0===js&&(js=5)}function wu(e,t,n){var r=xt,a=_s.transition;try{_s.transition=null,xt=1,function(e,t,n,r){do{Au()}while(null!==Qs);if(0!==(6&zs))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ps&&(Os=Ps=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Xs||(Xs=!0,Pu(tt,(function(){return Au(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=xt;xt=1;var s=zs;zs|=4,Cs.current=null,function(e,t){if(ea=Bt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Bt=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,b=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(o(163))}}catch(w){Su(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Bt=!!ea,ta=ea=null,e.current=n,vs(n,e,a),Ge(),zs=s,xt=l,_s.transition=i}else e.current=n;if(Xs&&(Xs=!1,Qs=e,Ys=a),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Bs)throw Bs=!1,e=Vs,Vs=null,e;0!==(1&Ys)&&0!==e.tag&&Au(),i=e.pendingLanes,0!==(1&i)?e===qs?Gs++:(Gs=0,qs=e):Gs=0,Wa()}(e,t,n,r)}finally{_s.transition=a,xt=r}return null}function Au(){if(null!==Qs){var e=yt(Ys),t=_s.transition,n=xt;try{if(_s.transition=null,xt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Ys=0,0!==(6&zs))throw Error(o(331));var a=zs;for(zs|=4,Jl=e.current;null!==Jl;){var i=Jl,l=i.child;if(0!==(16&Jl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(os(d),d===c){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Jl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(i=Jl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,Jl=v;break e}Jl=i.return}}var x=e.current;for(Jl=x;null!==Jl;){var y=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Jl=y;else e:for(l=x;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(A){Su(s,s.return,A)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(zs=a,Wa(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(A){}r=!0}return r}finally{xt=n,_s.transition=t}}return!1}function ku(e,t,n){e=Mo(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(bt(e,1,t),ru(e,t))}function Su(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Mo(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(bt(t,1,e),ru(t,e));break}}t=t.return}}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ns&n)===n&&(4===js||3===js&&(130023424&Ns)===Ns&&500>qe()-Us?fu(e,0):Ds|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Lo(e,t))&&(bt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function zu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return Xe(e,t)}function Ou(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Ou(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ju(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Tu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Lu(n.children,a,i,t);case S:l=8,a|=8;break;case E:return(e=Nu(12,n,t,2|a)).elementType=E,e.lanes=i,e;case P:return(e=Nu(13,n,t,a)).elementType=P,e.lanes=i,e;case O:return(e=Nu(19,n,t,a)).elementType=O,e.lanes=i,e;case R:return Iu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case _:l=9;break e;case z:l=11;break e;case N:l=14;break e;case T:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Lu(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Iu(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Du(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,a,o,i,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Nu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$o(o),e}function Uu(e){if(!e)return _a;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ta(n))return La(e,n,t)}return t}function Wu(e,t,n,r,a,o,i,l,s){return(e=Mu(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Fo(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Mo(n,o,a),e.current.lanes=a,bt(e,a,r),ru(e,r),e}function Hu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mo(a,t,i))&&(nu(e,a,i,o),Uo(e,a,i)),i}function Bu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ho();break;case 5:Jo(t);break;case 1:Ta(t.type)&&Ia(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(ko,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?$l(e,t,n):(Ca(ei,1&ei.current),null!==(e=Bl(e,t,n))?e.sibling:null);Ca(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return Bl(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,ao&&0!==(1048576&t.flags)&&Za(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var a=Na(t,za.current);Oo(t,n),a=gi(null,t,r,e,a,n);var i=bi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ta(r)?(i=!0,Ia(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,$o(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=zl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),yl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Tu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Al(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Do(e,t),Ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ol(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=Ol(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=Ao(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Bl(e,t,n);break e}yl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),El(e,t),yl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return $l(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):yl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return yl(e,t,t.pendingProps,n),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ca(ko,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Pa.current){t=Bl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Fo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Po(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Po(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}yl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Oo(t,n),r=r(a=No(a)),t.flags|=1,yl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Al(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Hl(e,t),t.tag=1,Ta(r)?(e=!0,Ia(t)):e=!1,Oo(t,n),il(t,r,a),sl(t,r,a,n),zl(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return Sl(e,t,n)}throw Error(o(156,t.tag))};var Xu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Bu(i);l.call(e)}}Hu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Bu(i);o.call(e)}}var i=Wu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=i,e[ha]=i.current,Wr(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Bu(s);l.call(e)}}var s=Mu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[ha]=s.current,Wr(8===e.nodeType?e.parentNode:e),cu((function(){Hu(t,s,n,r)})),s}(n,t,e,a,r);return Bu(i)}Yu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hu(e,t,null,null)},Yu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Hu(null,e,null,null)})),t[ha]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&$t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,qe()),0===(6&zs)&&(Ws=qe()+500,Wa()))}break;case 13:cu((function(){var t=Lo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},At=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Lo(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},St=function(){return xt},Et=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Ae=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));X(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[xa,ya,wa,Ce,_e,uu]},tc={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:A,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",a=Xu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Mu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!qu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Xu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Wr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yu(t)},t.render=function(e,t,n){if(!qu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var y=x.prototype=new v;y.constructor=x,m(y,b.prototype),y.isPureReactComponent=!0;var w=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)A.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+z(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+z(l=e[u],u);s+=P(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,c=o+z(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},R={transition:null},j={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)A.call(t,u)&&!S.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,y(e),!m)if(null!==r(u))m=!0,R(A);else{var t=r(c);null!==t&&j(w,t.startTime-e)}}function A(e,n){m=!1,g&&(g=!1,v(C),C=-1),h=!0;var o=p;try{for(y(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),y(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&j(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,E=null,C=-1,_=5,z=-1;function P(){return!(t.unstable_now()-z<_)}function O(){if(null!==E){var e=t.unstable_now();z=e;var n=!0;try{n=E(!0,e)}finally{n?k():(S=!1,E=null)}}else S=!1}if("function"===typeof x)k=function(){x(O)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,T=N.port2;N.port1.onmessage=O,k=function(){T.postMessage(null)}}else k=function(){b(O,0)};function R(e){E=e,S||(S=!0,k())}function j(e,n){C=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(A))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(v(C),C=-1):g=!0,j(w,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(A))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="./",n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const i="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p(t,n,r,a){void 0===a&&(a={});let{window:s=document.defaultView,v5Compat:f=!1}=a,p=s.history,h=e.Pop,m=null,g=b();function b(){return(p.state||{idx:null}).idx}function v(){h=e.Pop;let t=b(),n=null==t?null:t-g;g=t,m&&m({action:h,location:y.location,delta:n})}function x(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(o({},p.state,{idx:g}),""));let y={get action(){return h},get location(){return t(s,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,v),m=e,()=>{s.removeEventListener(i,v),m=null}},createHref:e=>n(s,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=c(y.location,t,n);r&&r(a,t),g=b()+1;let o=u(a,g),i=y.createHref(a);try{p.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}f&&m&&m({action:h,location:y.location,delta:1})},replace:function(t,n){h=e.Replace;let a=c(y.location,t,n);r&&r(a,t),g=b();let o=u(a,g),i=y.createHref(a);p.replaceState(o,"",i),f&&m&&m({action:h,location:y.location,delta:0})},go:e=>p.go(e)};return y}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let a=O(("string"===typeof t?f(t):t).pathname||"/",n);if(null==a)return null;let o=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=P(a);i=_(o[l],e,r)}return i}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=L([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),b(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:C(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of v(e.path))a(e,t,r);else a(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=v(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const x=/^:[\w-]+$/,y=3,w=2,A=1,k=10,S=-2,E=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=S),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(x.test(t)?y:""===t?A:k)),r)}function _(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:L([o,c.pathname]),pathnameBase:I(L([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=L([o,c.pathnameBase]))}return i}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function P(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function N(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function T(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e,t){let n=T(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function j(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=f(e):(a=o({},e),l(!a.pathname||!a.pathname.includes("?"),N("?","pathname","search",a)),l(!a.pathname||!a.pathname.includes("#"),N("#","pathname","hash",a)),l(!a.search||!a.search.includes("#"),N("#","search","hash",a)));let i,s=""===e||""===a.pathname,u=s?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?f(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:$(r),hash:D(a)}}(a,i),d=u&&"/"!==u&&u.endsWith("/"),p=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}const L=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const M=["post","put","patch","delete"],U=(new Set(M),["get",...M]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const H=t.createContext(null);const B=t.createContext(null);const V=t.createContext(null);const K=t.createContext(null);const X=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function Y(){return null!=t.useContext(K)}function G(){return Y()||l(!1),t.useContext(K).location}function q(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(X);return e?function(){let{router:e}=se(ie.UseNavigateStable),n=ce(le.UseNavigateStable),r=t.useRef(!1);return q((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:n},a)))}),[e,n])}():function(){Y()||l(!1);let e=t.useContext(H),{basename:n,future:r,navigator:a}=t.useContext(V),{matches:o}=t.useContext(X),{pathname:i}=G(),s=JSON.stringify(R(o,r.v7_relativeSplatPath)),u=t.useRef(!1);return q((()=>{u.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!u.current)return;if("number"===typeof t)return void a.go(t);let o=j(t,JSON.parse(s),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,s,i,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(V),{matches:o}=t.useContext(X),{pathname:i}=G(),l=JSON.stringify(R(o,a.v7_relativeSplatPath));return t.useMemo((()=>j(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function ee(n,r,a,o){Y()||l(!1);let{navigator:i}=t.useContext(V),{matches:s}=t.useContext(X),u=s[s.length-1],c=u?u.params:{},d=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let p,h=G();if(r){var g;let e="string"===typeof r?f(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||l(!1),p=e}else p=h;let b=p.pathname||"/",v=b;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=m(n,{pathname:v});let y=oe(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:L([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:L([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);return r&&y?t.createElement(K.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},y):y}function te(){let e=function(){var e;let n=t.useContext(Q),r=ue(le.UseRouteError),a=ce(le.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(X.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(H);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(X.Provider,{value:n},a)}function oe(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,f=null,p=null;var h;r&&(i=u&&a.route.id?u[a.route.id]:void 0,f=a.route.errorElement||ne,c&&(d<0&&0===o?(h="route-fallback",!1||de[h]||(de[h]=!0),l=!0,p=null):d===o&&(l=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=i?f:l?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ae,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var ie=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ie||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function se(e){let n=t.useContext(H);return n||l(!1),n}function ue(e){let n=t.useContext(B);return n||l(!1),n}function ce(e){let n=function(){let e=t.useContext(X);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const de={};r.startTransition;function fe(e){l(!1)}function pe(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:s,static:u=!1,future:c}=n;Y()&&l(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:s,static:u,future:W({v7_relativeSplatPath:!1},c)})),[d,c,s,u]);"string"===typeof o&&(o=f(o));let{pathname:h="/",search:m="",hash:g="",state:b=null,key:v="default"}=o,x=t.useMemo((()=>{let e=O(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:b,key:v},navigationType:i}}),[d,h,m,g,b,v,i]);return null==x?null:t.createElement(V.Provider,{value:p},t.createElement(K.Provider,{children:a,value:x}))}function he(e){let{children:t,location:n}=e;return ee(me(t),n)}new Promise((()=>{}));t.Component;function me(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,me(e.props.children,o));e.type!==fe&&l(!1),e.props.index&&e.props.children&&l(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=me(e.props.children,o)),r.push(i)})),r}var ge=function(){return ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ge.apply(this,arguments)};Object.create;function be(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ve=n(324),xe=n.n(ve),ye="-ms-",we="-moz-",Ae="-webkit-",ke="comm",Se="rule",Ee="decl",Ce="@import",_e="@keyframes",ze="@layer",Pe=Math.abs,Oe=String.fromCharCode,Ne=Object.assign;function Te(e){return e.trim()}function Re(e,t){return(e=t.exec(e))?e[0]:e}function je(e,t,n){return e.replace(t,n)}function Le(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return 0|e.charCodeAt(t)}function $e(e,t,n){return e.slice(t,n)}function De(e){return e.length}function Fe(e){return e.length}function Me(e,t){return t.push(e),e}function Ue(e,t){return e.filter((function(e){return!Re(e,t)}))}var We=1,He=1,Be=0,Ve=0,Ke=0,Xe="";function Qe(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:We,column:He,length:i,return:"",siblings:l}}function Ye(e,t){return Ne(Qe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ge(e){for(;e.root;)e=Ye(e.root,{children:[e]});Me(e,e.siblings)}function qe(){return Ke=Ve>0?Ie(Xe,--Ve):0,He--,10===Ke&&(He=1,We--),Ke}function Je(){return Ke=Ve<Be?Ie(Xe,Ve++):0,He++,10===Ke&&(He=1,We++),Ke}function Ze(){return Ie(Xe,Ve)}function et(){return Ve}function tt(e,t){return $e(Xe,e,t)}function nt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rt(e){return We=He=1,Be=De(Xe=e),Ve=0,[]}function at(e){return Xe="",e}function ot(e){return Te(tt(Ve-1,st(91===e?e+2:40===e?e+1:e)))}function it(e){for(;(Ke=Ze())&&Ke<33;)Je();return nt(e)>2||nt(Ke)>3?"":" "}function lt(e,t){for(;--t&&Je()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return tt(e,et()+(t<6&&32==Ze()&&32==Je()))}function st(e){for(;Je();)switch(Ke){case e:return Ve;case 34:case 39:34!==e&&39!==e&&st(Ke);break;case 40:41===e&&st(e);break;case 92:Je()}return Ve}function ut(e,t){for(;Je()&&e+Ke!==57&&(e+Ke!==84||47!==Ze()););return"/*"+tt(t,Ve-1)+"*"+Oe(47===e?e:Je())}function ct(e){for(;!nt(Ze());)Je();return tt(e,Ve)}function dt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ft(e,t,n,r){switch(e.type){case ze:if(e.children.length)break;case Ce:case Ee:return e.return=e.return||e.value;case ke:return"";case _e:return e.return=e.value+"{"+dt(e.children,r)+"}";case Se:if(!De(e.value=e.props.join(",")))return""}return De(n=dt(e.children,r))?e.return=e.value+"{"+n+"}":""}function pt(e,t,n){switch(function(e,t){return 45^Ie(e,0)?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}(e,t)){case 5103:return Ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae+e+e;case 4789:return we+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae+e+we+e+ye+e+e;case 5936:switch(Ie(e,t+11)){case 114:return Ae+e+ye+je(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ae+e+ye+je(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ae+e+ye+je(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ae+e+ye+e+e;case 6165:return Ae+e+ye+"flex-"+e+e;case 5187:return Ae+e+je(e,/(\w+).+(:[^]+)/,Ae+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return Ae+e+ye+"flex-item-"+je(e,/flex-|-self/g,"")+(Re(e,/flex-|baseline/)?"":ye+"grid-row-"+je(e,/flex-|-self/g,""))+e;case 4675:return Ae+e+ye+"flex-line-pack"+je(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ae+e+ye+je(e,"shrink","negative")+e;case 5292:return Ae+e+ye+je(e,"basis","preferred-size")+e;case 6060:return Ae+"box-"+je(e,"-grow","")+Ae+e+ye+je(e,"grow","positive")+e;case 4554:return Ae+je(e,/([^-])(transform)/g,"$1"+Ae+"$2")+e;case 6187:return je(je(je(e,/(zoom-|grab)/,Ae+"$1"),/(image-set)/,Ae+"$1"),e,"")+e;case 5495:case 3959:return je(e,/(image-set\([^]*)/,Ae+"$1$`$1");case 4968:return je(je(e,/(.+:)(flex-)?(.*)/,Ae+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae+e+e;case 4200:if(!Re(e,/flex-|baseline/))return ye+"grid-column-align"+$e(e,t)+e;break;case 2592:case 3360:return ye+je(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Re(e.props,/grid-\w+-end/)}))?~Le(e+(n=n[t].value),"span",0)?e:ye+je(e,"-start","")+e+ye+"grid-row-span:"+(~Le(n,"span",0)?Re(n,/\d+/):+Re(n,/\d+/)-+Re(e,/\d+/))+";":ye+je(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Re(e.props,/grid-\w+-start/)}))?e:ye+je(je(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return je(e,/(.+)-inline(.+)/,Ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(De(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(45!==Ie(e,t+4))break;case 102:return je(e,/(.+:)(.+)-([^]+)/,"$1"+Ae+"$2-$3$1"+we+(108==Ie(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Le(e,"stretch",0)?pt(je(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return je(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return ye+n+":"+r+l+(a?ye+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Ie(e,t+6))return je(e,":",":"+Ae)+e;break;case 6444:switch(Ie(e,45===Ie(e,14)?18:11)){case 120:return je(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae+(45===Ie(e,14)?"inline-":"")+"box$3$1"+Ae+"$2$3$1"+ye+"$2box$3")+e;case 100:return je(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ee:return void(e.return=pt(e.value,e.length,n));case _e:return dt([Ye(e,{value:je(e.value,"@","@"+Ae)})],r);case Se:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Re(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ge(Ye(e,{props:[je(t,/:(read-\w+)/,":"+we+"$1")]})),Ge(Ye(e,{props:[t]})),Ne(e,{props:Ue(n,r)});break;case"::placeholder":Ge(Ye(e,{props:[je(t,/:(plac\w+)/,":"+Ae+"input-$1")]})),Ge(Ye(e,{props:[je(t,/:(plac\w+)/,":"+we+"$1")]})),Ge(Ye(e,{props:[je(t,/:(plac\w+)/,ye+"input-$1")]})),Ge(Ye(e,{props:[t]})),Ne(e,{props:Ue(n,r)})}return""}))}}function mt(e){return at(gt("",null,null,null,[""],e=rt(e),0,[0],e))}function gt(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,b=1,v=0,x="",y=a,w=o,A=r,k=x;g;)switch(h=v,v=Je()){case 40:if(108!=h&&58==Ie(k,d-1)){-1!=Le(k+=je(ot(v),"&","&\f"),"&\f",Pe(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:k+=ot(v);break;case 9:case 10:case 13:case 32:k+=it(h);break;case 92:k+=lt(et()-1,7);continue;case 47:switch(Ze()){case 42:case 47:Me(vt(ut(Je(),et()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=De(k)*b;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==b&&(k=je(k,/\f/g,"")),p>0&&De(k)-d&&Me(p>32?xt(k+";",r,n,d-1,s):xt(je(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Me(A=bt(k,t,n,u,c,a,l,x,y=[],w=[],d,o),o),123===v)if(0===c)gt(k,t,A,A,y,o,d,l,w);else switch(99===f&&110===Ie(k,3)?100:f){case 100:case 108:case 109:case 115:gt(e,A,A,r&&Me(bt(e,A,A,0,0,a,l,x,a,y=[],d,w),w),a,w,d,l,r?y:w);break;default:gt(k,A,A,A,[""],w,0,l,w)}}u=c=p=0,m=b=1,x=k="",d=i;break;case 58:d=1+De(k),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==qe())continue;switch(k+=Oe(v),v*m){case 38:b=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(De(k)-1)*b,b=1;break;case 64:45===Ze()&&(k+=ot(Je())),f=Ze(),c=d=De(x=k+=ct(et())),v++;break;case 45:45===h&&2==De(k)&&(m=0)}}return o}function bt(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Fe(p),m=0,g=0,b=0;m<r;++m)for(var v=0,x=$e(e,f+1,f=Pe(g=i[m])),y=e;v<h;++v)(y=Te(g>0?p[v]+" "+x:je(x,/&\f/g,p[v])))&&(s[b++]=y);return Qe(e,t,n,0===a?Se:l,s,u,c,d)}function vt(e,t,n,r){return Qe(e,t,n,ke,Oe(Ke),$e(e,2,-2),0,r)}function xt(e,t,n,r,a){return Qe(e,t,n,Ee,$e(e,0,r),$e(e,r+1,-1),r,a)}var yt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",At="active",kt="data-styled-version",St="6.1.13",Et="/*!sc*/\n",Ct="undefined"!=typeof window&&"HTMLElement"in window,_t=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),zt=(new Set,Object.freeze([])),Pt=Object.freeze({});function Ot(e,t,n){return void 0===n&&(n=Pt),e.theme!==n.theme&&e.theme||t||n.theme}var Nt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rt=/(^-|-$)/g;function jt(e){return e.replace(Tt,"-").replace(Rt,"")}var Lt=/(a)(d)/gi,It=52,$t=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dt(e){var t,n="";for(t=Math.abs(e);t>It;t=t/It|0)n=$t(t%It)+n;return($t(t%It)+n).replace(Lt,"$1-$2")}var Ft,Mt=5381,Ut=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wt=function(e){return Ut(Mt,e)};function Ht(e){return Dt(Wt(e)>>>0)}function Bt(e){return e.displayName||e.name||"Component"}function Vt(e){return"string"==typeof e&&!0}var Kt="function"==typeof Symbol&&Symbol.for,Xt=Kt?Symbol.for("react.memo"):60115,Qt=Kt?Symbol.for("react.forward_ref"):60112,Yt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jt=((Ft={})[Qt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ft[Xt]=qt,Ft);function Zt(e){return("type"in(t=e)&&t.type.$$typeof)===Xt?qt:"$$typeof"in e?Jt[e.$$typeof]:Yt;var t}var en=Object.defineProperty,tn=Object.getOwnPropertyNames,nn=Object.getOwnPropertySymbols,rn=Object.getOwnPropertyDescriptor,an=Object.getPrototypeOf,on=Object.prototype;function ln(e,t,n){if("string"!=typeof t){if(on){var r=an(t);r&&r!==on&&ln(e,r,n)}var a=tn(t);nn&&(a=a.concat(nn(t)));for(var o=Zt(e),i=Zt(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Gt||n&&n[s]||i&&s in i||o&&s in o)){var u=rn(t,s);try{en(e,s,u)}catch(e){}}}}return e}function sn(e){return"function"==typeof e}function un(e){return"object"==typeof e&&"styledComponentId"in e}function cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function dn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pn(e,t,n){if(void 0===n&&(n=!1),!n&&!fn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pn(e[r],t[r]);else if(fn(t))for(var r in t)e[r]=pn(e[r],t[r]);return e}function hn(e,t){Object.defineProperty(e,"toString",{value:t})}function mn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw mn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Et);return t},e}(),bn=new Map,vn=new Map,xn=1,yn=function(e){if(bn.has(e))return bn.get(e);for(;vn.has(xn);)xn++;var t=xn++;return bn.set(e,t),vn.set(t,e),t},wn=function(e,t){xn=t+1,bn.set(e,t),vn.set(t,e)},An="style[".concat(wt,"][").concat(kt,'="').concat(St,'"]'),kn=new RegExp("^".concat(wt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},En=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Et),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(kn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(wn(c,u),Sn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Cn=function(e){for(var t=document.querySelectorAll(An),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(wt)!==At&&(En(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function _n(){return n.nc}var zn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wt,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(wt,At),r.setAttribute(kt,St);var i=_n();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Pn=function(){function e(e){this.element=zn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw mn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),On=function(){function e(e){this.element=zn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Nn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Tn=Ct,Rn={isServer:!Ct,useCSSOMInjection:!_t},jn=function(){function e(e,t,n){void 0===e&&(e=Pt),void 0===t&&(t={});var r=this;this.options=ge(ge({},Rn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ct&&Tn&&(Tn=!1,Cn(this)),hn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return vn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(wt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Et)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return yn(e)},e.prototype.rehydrate=function(){!this.server&&Ct&&Cn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ge(ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Nn(n):t?new Pn(n):new On(n)}(this.options),new gn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(yn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(yn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(yn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ln=/&/g,In=/^\s*\/\/.*$/gm;function $n(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=$n(e.children,t)),e}))}function Dn(e){var t,n,r,a=void 0===e?Pt:e,o=a.options,i=void 0===o?Pt:o,l=a.plugins,s=void 0===l?zt:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Se&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ln,n).replace(r,u))})),i.prefix&&c.push(ht),c.push(ft);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(In,""),u=mt(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=$n(u,i.namespace));var d,f=[];return dt(u,function(e){var t=Fe(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||mn(15),Ut(e,t.name)}),Mt).toString():"",d}var Fn=new jn,Mn=Dn(),Un=t.createContext({shouldForwardProp:void 0,styleSheet:Fn,stylis:Mn}),Wn=(Un.Consumer,t.createContext(void 0));function Hn(){return(0,t.useContext)(Un)}function Bn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=Hn().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return Dn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){xe()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Un.Provider,{value:s},t.createElement(Wn.Provider,{value:l},e.children))}var Vn=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Mn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,hn(this,(function(){throw mn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Mn),this.name+e.hash},e}(),Kn=function(e){return e>="A"&&e<="Z"};function Xn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Kn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Qn=function(e){return null==e||!1===e||""===e},Yn=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Qn(o)&&(Array.isArray(o)&&o.isCss||sn(o)?r.push("".concat(Xn(a),":"),o,";"):fn(o)?r.push.apply(r,be(be(["".concat(a," {")],Yn(o),!1),["}"],!1)):r.push("".concat(Xn(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in yt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gn(e,t,n,r){return Qn(e)?[]:un(e)?[".".concat(e.styledComponentId)]:sn(e)?!sn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Gn(e(t),t,n,r):e instanceof Vn?n?(e.inject(n,r),[e.getName(r)]):[e]:fn(e)?Yn(e):Array.isArray(e)?Array.prototype.concat.apply(zt,e.map((function(e){return Gn(e,t,n,r)}))):[e.toString()];var a}function qn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sn(n)&&!un(n))return!1}return!0}var Jn=Wt(St),Zn=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&qn(e),this.componentId=t,this.baseHash=Ut(Jn,t),this.baseStyle=n,jn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=cn(r,this.staticRulesId);else{var a=dn(Gn(this.rules,e,t,n)),o=Dt(Ut(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=cn(r,o),this.staticRulesId=o}else{for(var l=Ut(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=dn(Gn(c,e,t,n));l=Ut(l,d+u),s+=d}}if(s){var f=Dt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=cn(r,f)}}return r},e}(),er=t.createContext(void 0);er.Consumer;var tr={};new Set;function nr(e,n,r){var a=un(e),o=e,i=!Vt(e),l=n.attrs,s=void 0===l?zt:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":jt(e);tr[n]=(tr[n]||0)+1;var r="".concat(n,"-").concat(Ht(St+n+tr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Vt(e)?"styled.".concat(e):"Styled(".concat(Bt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(jt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var v=new Zn(r,p,a?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(er),d=Hn(),f=e.shouldForwardProp||d.shouldForwardProp,p=Ot(n,c,i)||Pt,h=function(e,t,n){for(var r,a=ge(ge({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=sn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?cn(a[l],i[l]):"style"===l?ge(ge({},a[l]),i[l]):i[l]}return t.className&&(a.className=cn(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===p||("forwardedAs"===b?g.as=h.forwardedAs:f&&!f(b,m)||(g[b]=h[b]));var v=function(e,t){var n=Hn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=cn(l,s);return v&&(x+=" "+v),h.className&&(x+=" "+h.className),g[Vt(m)&&!Nt.has(m)?"class":"className"]=x,g.ref=r,(0,t.createElement)(m,g)}(y,e,n)}x.displayName=f;var y=t.forwardRef(x);return y.attrs=h,y.componentStyle=v,y.displayName=f,y.shouldForwardProp=m,y.foldedComponentIds=a?cn(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=p,y.target=a?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)pn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),hn(y,(function(){return".".concat(y.styledComponentId)})),i&&ln(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function rr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ar=function(e){return Object.assign(e,{isCss:!0})};function or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(sn(e)||fn(e))return ar(Gn(rr(zt,be([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Gn(r):ar(Gn(rr(r,t)))}function ir(e,t,n){if(void 0===n&&(n=Pt),!t)throw mn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,or.apply(void 0,be([r],a,!1)))};return r.attrs=function(r){return ir(e,t,ge(ge({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ir(e,t,ge(ge({},n),r))},r}var lr=function(e){return ir(nr,e)},sr=lr;Nt.forEach((function(e){sr[e]=lr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=qn(e),jn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(dn(Gn(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&jn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function ur(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=dn(or.apply(void 0,be([e],t,!1))),a=Ht(r);return new Vn(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=_n(),r=dn([n&&'nonce="'.concat(n,'"'),"".concat(wt,'="true"'),"".concat(kt,'="').concat(St,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw mn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw mn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[wt]="",n[kt]=St,n.dangerouslySetInnerHTML={__html:r},n),o=_n();return o&&(a.nonce=o),[t.createElement("style",ge({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new jn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw mn(2);return t.createElement(Bn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw mn(3)}})(),"__sc-".concat(wt,"__");const cr=n.p+"static/media/leftbg.64e10d3e5d1be77bb117.webp",dr=n.p+"static/media/bgstar.c37c1846124e1854dffc.png",fr=n.p+"static/media/astro.a92e813067dcd609e90c.webp",pr=n.p+"static/media/planet.3b93b9c7f3247307b99f.webp",hr=n.p+"static/media/plate.e367f4d156e27a0d00de.webp",mr=n.p+"static/media/scope.a0e131e1aade94b3a01a.webp",gr=n.p+"static/media/backgroundflow.d4739e78d84caf629bfd.webp",br=n.p+"static/media/rightbottom.f8c987dc1adff519eb90.webp",vr=n.p+"static/media/righttop.d63c1fa6d08ed88fd4c9.webp",xr=n.p+"static/media/lefttop.deac31103d840dedaabe.webp",yr=n.p+"static/media/leftmiddle.0f99e82894ebb6a9e43f.webp",wr=n.p+"static/media/hand.6c83a928826016c843cf.webp",Ar=n.p+"static/media/skullvideo.9c4fb86a482ff38f0287.gif",kr=n.p+"static/media/slide1.bad62599f536314a9089.webp",Sr=n.p+"static/media/slide2.0c9e9cf41cead0013f4a.webp",Er=n.p+"static/media/slide3.729abf6128bff1422f7c.webp";var Cr=n(950),_r=n.t(Cr,2);function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}function Pr(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Or=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(fs){}new Map;const Nr=r.startTransition;_r.flushSync,r.useId;function Tr(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),p((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=f(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:d(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let u=i.current,[h,m]=t.useState({action:u.action,location:u.location}),{v7_startTransition:g}=a||{},b=t.useCallback((e=>{g&&Nr?Nr((()=>m(e))):m(e)}),[m,g]);return t.useLayoutEffect((()=>u.listen(b)),[u,b]),t.createElement(pe,{basename:n,children:r,location:h.location,navigationType:h.action,navigator:u,future:a})}const Rr="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,jr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lr=t.forwardRef((function(e,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:f,preventScrollReset:p,unstable_viewTransition:h}=e,m=Pr(e,Or),{basename:g}=t.useContext(V),b=!1;if("string"===typeof f&&jr.test(f)&&(r=f,Rr))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=O(t.pathname,g);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:b=!0}catch(fs){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;Y()||l(!1);let{basename:a,navigator:o}=t.useContext(V),{hash:i,pathname:s,search:u}=Z(e,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:L([a,s])),o.createHref({pathname:c,search:u,hash:i})}(f,{relative:o}),x=function(e,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,u=J(),c=G(),f=Z(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:d(c)===d(f);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}}),[c,u,f,a,o,r,e,i,l,s])}(f,{replace:s,state:u,target:c,preventScrollReset:p,relative:o,unstable_viewTransition:h});return t.createElement("a",zr({},m,{href:r||v,onClick:b||i?a:function(e){a&&a(e),e.defaultPrevented||x(e)},ref:n,target:c}))}));var Ir,$r;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ir||(Ir={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}($r||($r={}));var Dr=n(579);const Fr=sr.div`
  position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
  /* outline: 1px dotted red; */
  box-sizing: border-box;
  padding-top: 400px;

  .button{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: -330px;
    margin: 0 auto;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #000;
    transition: 0.2s;
    left: 50%; transform: translateX(-50%);

    &:hover{
      scale: 1.05;
    }

  }

  .pagedetail{

    width: 1000px !important;
    font-size: 18px;
    line-height: 25px;
    position: absolute;
    bottom: -220px;
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* opacity: ${e=>e.showText?1:0}; */
    transition: opacity 0.5s ease-in-out;
    /* outline: 1px dotted red; */

    span{
      font-size: 20px;
      font-weight: 700;
    }

    .pagetag{
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 25px;
      line-height: 37px;

      &:hover{
        scale: 1.1;
      }
    }
  }

  .pagewrap {
    position: absolute;
    top: 0;
    width: 600px;
    height: 400px;
    /* outline: 1px dotted red; */
    left: 50%;
    transform: translateX(-50%);

    div {
      position: absolute;
      width: 400px;
      height: 400px;
      /* background-color: #fff; */
      text-align: center;
      font-size: 16px;
      line-height: 300px;
      /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      /* opacity: 0;  */
    }

    div:nth-child(1) {
      left: -30px;
      top: -50px;
      background-image: url(${kr});
      /* opacity: ${e=>e.show1?.6:0}; */
    }

    div:nth-child(2) {
      left: 100px;
      top: -10px;
      background-image: url(${Sr});
      /* opacity: ${e=>e.show2?.6:0}; */
    }

    div:nth-child(3) {
      left: 240px;
      top: 20px;
      background-image: url(${Er});
      /* opacity: ${e=>e.show3?.6:0}; */
    }

    &:hover div:nth-child(1) {
      transform: translateX(-180px);
      opacity: 1;
    }
    &:hover div:nth-child(2) {
      opacity: 1;
    }

    &:hover div:nth-child(3) {
      transform: translateX(180px);
      opacity: 1;
    }
  }

  @media screen and (max-width: 1000px) {
    position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
  /* outline: 1px dotted red; */
  box-sizing: border-box;
  padding-top: 400px;

  .button{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: -330px;
    margin: 0 auto;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #000;
    transition: 0.2s;
    left: 50%; transform: translateX(-50%);

    &:hover{
      scale: 1.05;
    }

  }

  .pagedetail{

    width: 1000px !important;
    font-size: 18px;
    line-height: 25px;
    position: absolute;
    bottom: -220px;
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* opacity: ${e=>e.showText?1:0}; */
    transition: opacity 0.5s ease-in-out;
    /* outline: 1px dotted red; */

    span{
      font-size: 20px;
      font-weight: 700;
    }

    .pagetag{
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 25px;
      line-height: 37px;

      &:hover{
        scale: 1.1;
      }
    }
  }

  .pagewrap {
    position: absolute;
    top: 0;
    width: 600px;
    height: 400px;
    /* outline: 1px dotted red; */
    left: 50%;
    transform: translateX(-50%);

    div {
      position: absolute;
      width: 300px;
      height: 300px;
      /* background-color: #fff; */
      text-align: center;
      font-size: 16px;
      line-height: 300px;
      /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      /* opacity: 0;  */
    }

    div:nth-child(1) {
      left: 10px;
      top: 10px;
      background-image: url(${kr});
      /* opacity: ${e=>e.show1?.6:0}; */
    }

    div:nth-child(2) {
      left: 140px;
      top: 50px;
      background-image: url(${Sr});
      /* opacity: ${e=>e.show2?.6:0}; */
    }

    div:nth-child(3) {
      left: 280px;
      top: 80px;
      background-image: url(${Er});
      /* opacity: ${e=>e.show3?.6:0}; */
    }

    &:hover div:nth-child(1) {
      transform: translateX(-90px);
      opacity: 1;
    }
    &:hover div:nth-child(2) {
      opacity: 1;
    }

    &:hover div:nth-child(3) {
      transform: translateX(80px);
      opacity: 1;
    }
  }
  }
  @media screen and (max-width: 850px) {
    position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
  /* outline: 1px dotted red; */
  box-sizing: border-box;
  padding-top: 400px;

  .button{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: -330px;
    margin: 0 auto;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #000;
    transition: 0.2s;
    left: 50%; transform: translateX(-50%);

    &:hover{
      scale: 1.05;
    }

  }

  .pagedetail{

    width: 520px !important;
    font-size: 16px;
    line-height: 25px;
    position: absolute;
    bottom: -265px;
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* opacity: ${e=>e.showText?1:0}; */
    transition: opacity 0.5s ease-in-out;
    /* outline: 1px dotted red; */
    word-break: keep-all;
    span{
      font-size: 20px;
      font-weight: 700;
    }

    .pagetag{
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 25px;
      line-height: 37px;

      &:hover{
        scale: 1.1;
      }
    }
  }

  .pagewrap {
    position: absolute;
    top: 0;
    width: 600px;
    height: 400px;
    /* outline: 1px dotted red; */
    left: 50%;
    transform: translateX(-50%);

    div {
      position: absolute;
      width: 300px;
      height: 300px;
      /* background-color: #fff; */
      text-align: center;
      font-size: 16px;
      line-height: 300px;
      /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      /* opacity: 0;  */
    }

    div:nth-child(1) {
      left: 10px;
      top: 10px;
      background-image: url(${kr});
      /* opacity: ${e=>e.show1?.6:0}; */
    }

    div:nth-child(2) {
      left: 140px;
      top: 50px;
      background-image: url(${Sr});
      /* opacity: ${e=>e.show2?.6:0}; */
    }

    div:nth-child(3) {
      left: 280px;
      top: 80px;
      background-image: url(${Er});
      /* opacity: ${e=>e.show3?.6:0}; */
    }

    &:hover div:nth-child(1) {
      transform: translateX(-90px);
      opacity: 1;
    }
    &:hover div:nth-child(2) {
      opacity: 1;
    }

    &:hover div:nth-child(3) {
      transform: translateX(80px);
      opacity: 1;
    }
  }
  }
  @media screen and (max-width: 650px) {
    position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
  /* outline: 1px dotted red; */
  box-sizing: border-box;
  padding-top: 400px;

  .button{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: -330px;
    margin: 0 auto;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #000;
    transition: 0.2s;
    left: 50%; transform: translateX(-50%);

    &:hover{
      scale: 1.05;
    }

  }

  .pagedetail{

    width: 380px !important;
    font-size: 14px;
    line-height: 25px;
    position: absolute;
    bottom: -210px;
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* opacity: ${e=>e.showText?1:0}; */
    transition: opacity 0.5s ease-in-out;
    /* outline: 1px dotted red; */
    word-break: keep-all;
    span{
      font-size: 17px;
      font-weight: 700;
    }


    .pagetag{
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 20px;
      line-height: 37px;

      &:hover{
        scale: 1.1;
      }
    }
  }

  .pagewrap {
    position: absolute;
    top: 0;
    width: 600px;
    height: 400px;
    /* outline: 1px dotted red; */
    left: 50%;
    transform: translateX(-50%);

    div {
      position: absolute;
      width: 230px;
      height: 230px;
      /* background-color: #fff; */
      text-align: center;
      font-size: 16px;
      line-height: 300px;
      /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      /* opacity: 0;  */
    }

    div:nth-child(1) {
      left: 60px;
      top: -20px;
      background-image: url(${kr});
      /* opacity: ${e=>e.show1?.6:0}; */
    }

    div:nth-child(2) {
      left: 190px;
      top: 20px;
      background-image: url(${Sr});
      /* opacity: ${e=>e.show2?.6:0}; */
    }

    div:nth-child(3) {
      left: 330px;
      top: 50px;
      background-image: url(${Er});
      /* opacity: ${e=>e.show3?.6:0}; */
    }

    &:hover div:nth-child(1) {
      transform: translateX(-30px);
      opacity: 1;
    }
    &:hover div:nth-child(2) {
      opacity: 1;
    }

    &:hover div:nth-child(3) {
      transform: translateX(30px);
      opacity: 1;
    }
  }
  }
  @media screen and (max-width: 500px) {
    position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
  /* outline: 1px dotted red; */
  box-sizing: border-box;
  padding-top: 400px;

  .button{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: -330px;
    margin: 0 auto;
    width: 250px;
    text-align: center;
    font-size: 30px;
    color: #000;
    transition: 0.2s;
    left: 50%; transform: translateX(-50%);

    &:hover{
      scale: 1.05;
    }

  }

  .pagedetail{

    width: 360px !important;
    font-size: 14px;
    line-height: 25px;
    position: absolute;
    bottom: -180px;
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* opacity: ${e=>e.showText?1:0}; */
    transition: opacity 0.5s ease-in-out;
    /* outline: 1px dotted red; */
    word-break: keep-all;
    span{
      font-size: 17px;
      font-weight: 700;
    }


    .pagetag{
      text-decoration: none;
      color: black;
      font-weight: 700;
      font-size: 20px;
      line-height: 37px;

      &:hover{
        scale: 1.1;
      }
    }
  }

  .pagewrap {
    position: absolute;
    top: 0;
    width: 600px;
    height: 400px;
    /* outline: 1px dotted red; */
    left: 50%;
    transform: translateX(-50%);

    div {
      position: absolute;
      width: 180px;
      height: 180px;
      /* background-color: #fff; */
      text-align: center;
      font-size: 16px;
      line-height: 300px;
      /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4); */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      /* opacity: 0;  */
    }

    div:nth-child(1) {
      left: 100px;
      top: -20px;
      background-image: url(${kr});
      /* opacity: ${e=>e.show1?.6:0}; */
    }

    div:nth-child(2) {
      left: 210px;
      top: 20px;
      background-image: url(${Sr});
      /* opacity: ${e=>e.show2?.6:0}; */
    }

    div:nth-child(3) {
      left: 330px;
      top: 50px;
      background-image: url(${Er});
      /* opacity: ${e=>e.show3?.6:0}; */
    }

    &:hover div:nth-child(1) {
      transform: translateX(0px);
      opacity: 1;
    }
    &:hover div:nth-child(2) {
      opacity: 1;
    }

    &:hover div:nth-child(3) {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  }
`,Mr=()=>(0,Dr.jsxs)(Fr,{children:[(0,Dr.jsxs)("div",{className:"pagewrap",children:[(0,Dr.jsx)("div",{className:"page1"}),(0,Dr.jsx)("div",{className:"page2"}),(0,Dr.jsx)("div",{className:"page3"})]}),(0,Dr.jsxs)("p",{className:"pagedetail",children:[(0,Dr.jsx)("span",{children:'"\uadf8\ub9bc \uc791\uc5c5"'}),"\ub3c4 \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4.",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),"\ubb38\uc758\ud558\uc2dc\ub294 \uadf8\ub9bc\uc744 \uadf8\ub824\ub4dc\ub9ac\uac70\ub098, ",(0,Dr.jsx)("span",{children:"\uc124\uba85\uc11c"}),"\ub098 ",(0,Dr.jsx)("span",{children:"\ubb38\uc81c\uc9d1"})," \ub4f1\uc5d0 \ub4e4\uc5b4\uac00\ub294 ",(0,Dr.jsx)("span",{children:"\ub77c\uc778\ub4dc\ub85c\uc789"}),"\uc744 \ud574\ub4dc\ub9bd\ub2c8\ub2e4.",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),"\uc804\uc790\uc758 \uc11c\ube44\uc2a4\ub294 \ud398\uc774\uc9c0 \ud558\ub2e8\uc758 ",(0,Dr.jsx)("span",{children:"\uc778\uc2a4\ud0c0\uadf8\ub7a8"}),"\uc5d0\uc11c \uadf8\ub9bc\uccb4\ub97c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uace0",(0,Dr.jsx)("br",{}),"\ub77c\uc778\ub4dc\ub85c\uc789 \uc11c\ube44\uc2a4\ub294 \ub77c\uc778\ub4dc\ub85c\uc789\uc774 \ud544\uc694\ud55c \uc774\ubbf8\uc9c0\ub97c \ubcf4\ub0b4\uc8fc\uc2dc\uba74 \uac00\uc7a5\uc790\ub9ac\ub97c \ub530\ub77c \uc774\ubbf8\uc9c0\ub97c \ub77c\uc778\uc73c\ub85c \uc218\uc815\ud574\ub4dc\ub9bd\ub2c8\ub2e4.",(0,Dr.jsx)("br",{})]}),(0,Dr.jsx)(Lr,{to:"./sample",children:(0,Dr.jsx)("div",{className:"button",children:"SAMPLE PAGE ->"})})]}),Ur=sr.div`
  position: relative;
  width: 100%;
  min-height: 800px;
  margin: 0 atuo;
  padding-top: 100px;
  /* outline: 1px dotted red; */
  /* opacity: 0.4; */
  /* background-color: royalblue; */

  .skullvid{
    /* outline: 1px dotted red; */
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 500px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* left: -15px; */
    background-image: url(${Ar});
    filter: url(#shadowskull);
  }

.astitle{
  /* outline: 1px dotted red; */
  width: 1200px;
  position: absolute;
  font-size: 60px;
  font-weight: 700;
  left: 50%; transform: translateX(-50%);
  top: 39.5%;
  text-align: center;
  color:rgba(0,0,0,0.8);
  /* text-shadow: 2px 2px 5px rgba(0,0,0,0.6); */
  letter-spacing: -4px;
}

.detail{
  /* outline: 1px dotted red; */
  line-height: 25px;
  margin: 0 auto;
  max-width: 1200px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  text-align:  center;

  .warn{
    margin: 0 auto;
    width: 800px;
    line-height: 16px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.8);
  }

  span{
    font-size: 20px;
    font-weight: 700;
  }
}
@media screen and (max-width:880px) {
  position: relative;
  width: 100%;
  min-height: 800px;
  margin: 0 atuo;
  padding-top: 100px;
  /* outline: 1px dotted red; */
  /* opacity: 0.4; */
  /* background-color: royalblue; */

  .skullvid{
    /* outline: 1px dotted red; */
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 500px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* left: -15px; */
    background-image: url(${Ar});
    filter: url(#shadowskull);
  }

.astitle{
  /* outline: 1px dotted red; */
  width: 1200px;
  position: absolute;
  font-size: 45px;
  font-weight: 700;
  left: 50%; transform: translateX(-50%);
  top: 41%;
  text-align: center;
  color:rgba(0,0,0,0.8);
  /* text-shadow: 2px 2px 5px rgba(0,0,0,0.6); */
  letter-spacing: -4px;
}

.detail{
  /* outline: 1px dotted red; */
  line-height: 25px;
  margin: 0 auto;
  max-width: 1200px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 5px;
  text-align:  center;

 /*  .warn{
    margin: 0 auto;
    width: 800px;
    line-height: 16px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.8);
  } */

  span{
    font-size: 17px;
    font-weight: 700;
  }
}
}
@media screen and (max-width:750px) {
  position: relative;
  width: 100%;
  min-height: 800px;
  margin: 0 atuo;
  padding-top: 100px;
  /* outline: 1px dotted red; */
  /* opacity: 0.4; */
  /* background-color: royalblue; */

  .skullvid{
    /* outline: 1px dotted red; */
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 500px;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* left: -15px; */
    background-image: url(${Ar});
    filter: url(#shadowskull);
  }

.astitle{
  /* outline: 1px dotted red; */
  width: 1200px;
  position: absolute;
  font-size: 38px;
  font-weight: 700;
  left: 50%; transform: translateX(-50%);
  top: 41%;
  text-align: center;
  color:rgba(0,0,0,0.8);
  /* text-shadow: 2px 2px 5px rgba(0,0,0,0.6); */
  letter-spacing: -4px;
}

.detail{
  /* outline: 1px dotted red; */
  line-height: 25px;
  margin: 0 auto;
  max-width: 1200px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  text-align:  center;

 /*  .warn{
    margin: 0 auto;
    width: 800px;
    line-height: 16px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.8);
  } */

  span{
    font-size: 17px;
    font-weight: 700;
  }
}
}
@media screen and (max-width:650px) {
  position: relative;
  width: 100%;
  min-height: 800px;
  margin: 0 atuo;
  padding-top: 100px;
  /* outline: 1px dotted red; */
  /* opacity: 0.4; */
  /* background-color: royalblue; */

  .skullvid{
    /* outline: 1px dotted red; */
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* left: -15px; */
    background-image: url(${Ar});
    filter: url(#shadowskull);
  }

.astitle{
  /* outline: 1px dotted red; */
  width: 600px;
  position: absolute;
  font-size: 38px;
  font-weight: 700;
  left: 50%; transform: translateX(-50%);
  top: 36%;
  text-align: center;
  color:rgba(0,0,0,0.8);
  /* text-shadow: 2px 2px 5px rgba(0,0,0,0.6); */
  letter-spacing: -4px;
}

.detail{
  /* outline: 1px dotted red; */
  line-height: 25px;
  margin: 0 auto;
  width: 390px !important;
  /* max-width: 400px !important; */
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  text-align:  center;
  word-break: keep-all;
 /*  .warn{
    margin: 0 auto;
    width: 800px;
    line-height: 16px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.8);
  } */

  span{
    font-size: 17px;
    font-weight: 700;
  }
}
}
@media screen and (max-width:480px) {
  position: relative;
  width: 100%;
  min-height: 800px;
  margin: 0 atuo;
  padding-top: 100px;
  /* outline: 1px dotted red; */
  /* opacity: 0.4; */
  /* background-color: royalblue; */

  .skullvid{
    /* outline: 1px dotted red; */
    position: relative;
    margin: 0 auto;
    margin-top: 100px;
    width: 400px;
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* left: -15px; */
    background-image: url(${Ar});
    filter: url(#shadowskull);
  }

.astitle{
  /* outline: 1px dotted red; */
  width: 600px;
  position: absolute;
  font-size: 34px;
  font-weight: 700;
  left: 50%; transform: translateX(-50%);
  top: 36%;
  text-align: center;
  color:rgba(0,0,0,0.8);
  /* text-shadow: 2px 2px 5px rgba(0,0,0,0.6); */
  letter-spacing: -4px;
}

.detail{
  /* outline: 1px dotted red; */
  line-height: 25px;
  margin: 0 auto;
  width: 380px !important;
  /* max-width: 400px !important; */
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  text-align:  center;
  word-break: keep-all;
  letter-spacing: -0.5px;
 /*  .warn{
    margin: 0 auto;
    width: 800px;
    line-height: 16px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.8);
  } */

  span{
    font-size: 17px;
    font-weight: 700;
  }
}
}
`,Wr=()=>(0,Dr.jsx)(Dr.Fragment,{children:(0,Dr.jsxs)(Ur,{children:[(0,Dr.jsx)("div",{className:"skullvid"}),(0,Dr.jsx)("svg",{width:"0",height:"0",children:(0,Dr.jsx)("defs",{children:(0,Dr.jsx)("filter",{id:"shadowskull",children:(0,Dr.jsx)("feDropShadow",{dx:"10",dy:"8",stdDeviation:"1",floodColor:"rgba(0,0,0,0.4)"})})})}),(0,Dr.jsx)("p",{className:"astitle",children:"\uc548\ub155\ud558\uc138\uc694! GUMI_GOMI\uc785\ub2c8\ub2e4."}),(0,Dr.jsxs)("p",{className:"detail",children:[(0,Dr.jsx)("span",{children:'"\uc6f9\ud398\uc774\uc9c0 \uc791\uc5c5"'})," \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4.",(0,Dr.jsx)("br",{}),"\uc6d0\ud398\uc774\uc9c0\ub3c4 \uc791\uc5c5\ud558\uace0, \uc5ec\ub7ec \ud398\uc774\uc9c0\ub3c4 \uc791\uc5c5 \uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),"\ub514\uc790\uc778\ub41c \ud30c\uc77c (png, psd\ub4f1)\uc744 \ubcf4\ub0b4\uc8fc\uc2dc\uba74 \uacac\uc801\uc0c1\ub2f4 \ud6c4 \uc791\uc5c5 \uc9c4\ud589\ud558\uace0,",(0,Dr.jsx)("br",{}),"\uc790\uc138\ud55c \uc124\uba85\uc740 \ud06c\ubabd \uc11c\ube44\uc2a4\ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("span",{children:"\uc800\ub834\ud55c \uac00\uaca9\uc73c\ub85c \uac04\ub2e8\ud55c \uc6f9\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694!"}),(0,Dr.jsx)("br",{})]}),(0,Dr.jsx)(Mr,{})]})}),Hr=ur`
   0% {
    text-shadow: 10px 10px 1px rgba(0,0,0,0.2);
  }
  25%{
    text-shadow: 10px -10px 1px rgba(0,0,0,0.1);
  }
  50% {
    text-shadow: -10px -10px 1px rgba(0,0,0,0.2);
  }
  75%{
    text-shadow: -10px 10px 1px rgba(0,0,0,0.3);
  }
  100% {
    text-shadow: 10px 10px 1px rgba(0,0,0,0.2);
  }
`,Br=ur`
  0%{
    scale: 1;
  }
  50%{
    scale: 1.06;
  }
  100%{
    scale: 1;
  }
`,Vr=ur`
0%{
  transform: rotate(0deg);
}
50%{
  transform: rotate(180deg);
}
100%{
  transform: rotate(360deg);
}
`,Kr=ur`
0%{
  transform: translate(500px , 0px) scale(1.5);
}

100%{
  transform: translate(180px, 200px) scale(0.8);
}
`,Xr=ur`
0%{
  transform: translate(0px , 0px) scale(0.1);
}
70%{
  transform: translate(900px, -100px) scale(0.35) rotate(-30deg);
}
90%{
  transform: translate(850px, -100px) scale(0.35) rotate(-30deg);
}
100%{
  transform: translate(890px, -100px) scale(0.35) rotate(-30deg);
}
`,Qr=ur`
0%{
  transform: translate(890px, -100px) rotate(-30deg) scale(0.35);
}
50%{
  transform: translate(890px, -100px) rotate(-15deg ) scale(0.35);
}
100%{
  transform: translate(890px, -100px) rotate(-30deg) scale(0.35);
}
`,Yr=ur`
0%{
  transform: translate(0px, 0px) rotate(0deg) scale(0.2);
}
100%{
  transform: translate(-32px, 395px) rotate(15deg) scale(0.44);
}
`,Gr=ur`
0%{
  transform: translate(-32px, 395px) rotate(15deg) scale(0.44);
}
50%{
  transform: translate(-32px, 380px) rotate(15deg) scale(0.44);
}
100%{
  transform: translate(-32px, 395px) rotate(15deg) scale(0.44);
}
`,qr=ur`
0%{
  transform: translate(-1vw)  ;
}
50%{
  transform: translate(1vw)  ;
}
100%{
  transform: translate(-1vw) ;
}
`,Jr=sr.div`
/* outline: 1px dotted red; */
margin: 0 auto;
position: relative;
max-width: 1440px;
height: 800px;
text-align: center;
align-items: center;


`,Zr=sr.div`
width: 100%;
height: auto;

`,ea=sr.div`
position: absolute;
left: -250px; transform: translateX(-2vw);
bottom: -300px;
width: 850px;
height: 850px;
display: flex;
text-align: center;
align-items: center;
background-position: center;
background-image: url(${gr});
background-repeat: no-repeat;
background-size: contain;
transform: rotate(-15deg);
transition: 0.2s;
/* display: none; */
@media screen and (max-width: 1200px) {
  position: absolute;
left: -250px; transform: translateX(-2vw);
bottom: -300px;
width: 750px;
height: 750px;
display: flex;
text-align: center;
align-items: center;
background-position: center;
background-image: url(${gr});
background-repeat: no-repeat;
background-size: contain;
transform: rotate(-15deg);
}
@media screen and (max-width: 700px) {
  position: absolute;
left: -350px; transform: translateX(-2vw);
bottom: -300px;
width: 700px;
height: 700px;
display: flex;
text-align: center;
align-items: center;
background-position: center;
background-image: url(${gr});
background-repeat: no-repeat;
background-size: contain;
transform: rotate(-15deg);
}
@media screen and (max-width: 480px) {
  position: absolute;
left: -430px; transform: translateX(-2vw);
bottom: -300px;
width: 700px;
height: 700px;
display: flex;
text-align: center;
align-items: center;
background-position: center;
background-image: url(${gr});
background-repeat: no-repeat;
background-size: contain;
transform: rotate(-15deg);
}
`,ta=sr.div`
position: absolute;
right: -350px;
bottom: -150px;
width: 800px;
height: 800px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${br});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
transition: 0.2s;
/* display: none; */

@media screen and (max-width: 1200px) {
  position: absolute;
right: -350px;
bottom: -200px;
width: 700px;
height: 700px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${br});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
@media screen and (max-width: 700px) {
  position: absolute;
right: -350px;
bottom: -200px;
width: 600px;
height: 600px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${br});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
@media screen and (max-width: 500px) {
  position: absolute;
right: -350px;
bottom: -100px;
width: 500px;
height: 500px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${br});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
`,na=sr.div`
position: absolute;
right: -40px;
bottom: 480px;
transform: rotate(25deg);
width: 500px;
height: 330px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${vr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transition: 0.2s;
/* display: none; */

@media screen and (max-width: 1300px) {
  position: absolute;
right: -200px;
bottom: 480px;
transform: rotate(25deg);
width: 400px;
height: 260px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${vr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media screen and (max-width: 700px) {
  position: absolute;
right: -200px;
bottom: 480px;
transform: rotate(25deg);
width: 300px;
height: 200px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${vr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media screen and (max-width: 450px) {
  position: absolute;
right: -200px;
bottom: 530px;
transform: rotate(25deg);
width: 300px;
height: 200px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${vr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
`,ra=sr.div`
position: absolute;
left: 200px;
bottom: 390px;
transform: rotate(-100deg);
width: 250px;
height: 250px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${xr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transition: 0.2s;
/* display: none; */

@media screen and (max-width:1300px) {
  position: absolute;
left: 10px;
bottom: 390px;
transform: rotate(-100deg);
width: 180px;
height: 180px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${xr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media screen and (max-width:750px) {
  position: absolute;
left: -60px;
bottom: 430px;
transform: rotate(-100deg);
width: 140px;
height: 140px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${xr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media screen and (max-width:550px) {
  position: absolute;
left: -80px;
bottom: 300px;
transform: rotate(-100deg);
width: 140px;
height: 140px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${xr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
`,aa=sr.div`
position: absolute;
left: -100px;
bottom: 500px;
/* transform: rotate(-90deg); */
width: 330px;
height: 400px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${yr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transition: 0.2s;
/* display: none; */

@media screen and (max-width: 1200px) {
  position: absolute;
left: -150px;
bottom: 500px;
/* transform: rotate(-90deg); */
width: 330px;
height: 400px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${yr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
@media screen and (max-width: 700px) {
  position: absolute;
left: -170px;
bottom: 600px;
/* transform: rotate(-90deg); */
width: 330px;
height: 400px;
display: flex;
text-align: center;
align-items: center;
background-image: url(${yr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
}
`,oa=sr.div`
position: absolute;
left: 0;
bottom: 0;
/* transform: rotate(-90deg); */
width: 100vw;
height: 100vh;
display: flex;
z-index: 1;
text-align: center;
align-items: center;
background-image: url(${dr});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* display: none; */
`,ia=sr.div`
position: absolute;
right: 400px;
bottom: -20px;
width: 250px;
height: 250px;
background-image: url(${mr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transform: rotate(0deg);
filter: url(#shadow);
transition: 0.2s;
/* display: none; */

@media screen and (max-width:1320px) {
  position: absolute;
right: 330px;
bottom: -20px;
width: 190px;
height: 190px;
background-image: url(${mr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transform: rotate(0deg);
filter: url(#shadow);
}
@media screen and (max-width:1100px) {
  position: absolute;
right: 300px;
bottom: -20px;
width: 190px;
height: 190px;
background-image: url(${mr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transform: rotate(0deg);
filter: url(#shadow);
}
@media screen and (max-width: 1000px) {
  display: none;
}
`,la=sr.div`
  position: absolute;
  z-index: 10;
  letter-spacing: -12px;
  width: 600px;
  height: auto;
  color: #000;
  left: 50%; transform: translateX(-50%);
  top: 18%; 
  font-size: 120px;
  /* outline: 1px dotted red; */
  animation: ${Hr} 10s ease-in-out infinite;
  transition: .2s;
  word-break: keep-all;
  /* display: none; */

  .title{
    /* outline: 1px dotted red; */
    margin-bottom: 50px;
  }

  p{
    animation: none;
    text-shadow: none;
    /* outline: 1px dotted red; */
    margin-top: 0.5vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0px;
    font-weight: 600;    
  }
  @media screen and (max-width: 1200px) {
    position: absolute;
  z-index: 10;
  letter-spacing: -12px;
  width: 600px;
  height: auto;
  color: #000;
  left: 50%; transform: translateX(-50%);
  top: 18%; 
  font-size: 100px;
  /* outline: 1px dotted red; */
  animation: ${Hr} 10s ease-in-out infinite;

  .title{
    /* outline: 1px dotted red; */
    margin-bottom: 50px;
  }

  p{
    animation: none;
    text-shadow: none;
    /* outline: 1px dotted red; */
    margin-top: 0.5vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0px;
    font-weight: 600;    
  }
  }
  @media screen and (max-width: 850px) {
    position: absolute;
  z-index: 10;
  letter-spacing: -8px;
  width: 600px;
  height: auto;
  color: #000;
  left: 50%; transform: translateX(-50%);
  top: 24%; 
  font-size: 90px;
  /* outline: 1px dotted red; */
  animation: ${Hr} 10s ease-in-out infinite;

  .title{
    /* outline: 1px dotted red; */
    margin-bottom: 30px;
  }

  p{
    animation: none;
    text-shadow: none;
    /* outline: 1px dotted red; */
    margin-top: 0.3vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.3px;
    font-weight: 600;    
  }
  }
  @media screen and (max-width: 600px) {
    position: absolute;
  z-index: 10;
  letter-spacing: -8px;
  width: 600px;
  height: auto;
  color: #000;
  left: 50%; transform: translateX(-50%);
  top: 27%; 
  font-size: 80px;
  /* outline: 1px dotted red; */
  animation: ${Hr} 10s ease-in-out infinite;

  .title{
    /* outline: 1px dotted red; */
    margin-bottom: 30px;
  }

  p{
    margin: 0 auto;
    width: 300px;
    animation: none;
    text-shadow: none;
    /* outline: 1px dotted red; */
    margin-top: 0.3vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.3px;
    font-weight: 600;    
  }
  }
  @media screen and (max-width: 490px) {
    position: absolute;
  z-index: 10;
  letter-spacing: -8px;
  width: 600px;
  height: auto;
  color: #000;
  left: 50%; transform: translateX(-50%);
  top: 30%; 
  font-size: 70px;
  /* outline: 1px dotted red; */
  animation: ${Hr} 10s ease-in-out infinite;

  .title{
    /* outline: 1px dotted red; */
    margin-bottom: 10px;
  }

  p{
    margin: 0 auto;
    width: 300px;
    animation: none;
    text-shadow: none;
    /* outline: 1px dotted red; */
    margin-top: 0.3vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.3px;
    font-weight: 600;    
  }
  }

`,sa=sr.div`
position: absolute;
right: 130px;
bottom: 160px;
z-index: 2;
width: 600px;
height: 600px;
background-image: url(${fr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Kr} 2s ease-in-out forwards , ${Br} 4s ease-in-out 3s infinite ;
transform: rotate(-35deg);
filter: url(#shadow);
transition: .2s;
/* display: none; */
@media screen and (max-width:1300px) {
  position: absolute;
right: 130px;
bottom: 160px;
z-index: 2;
width: 500px;
height: 500px;
background-image: url(${fr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Kr} 2s ease-in-out forwards , ${Br} 4s ease-in-out 3s infinite ;
transform: rotate(-35deg);
filter: url(#shadow);
}
@media screen and (max-width:850px) {
  position: absolute;
right: 180px;
bottom: 250px;
z-index: 2;
width: 350px;
height: 350px;
background-image: url(${fr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Kr} 2s ease-in-out forwards , ${Br} 4s ease-in-out 3s infinite ;
transform: rotate(-35deg);
filter: url(#shadow);
}
@media screen and (max-width:500px) {
  position: absolute;
right: 130px;
bottom: 250px;
z-index: 2;
width: 350px;
height: 350px;
background-image: url(${fr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Kr} 2s ease-in-out forwards , ${Br} 4s ease-in-out 3s infinite ;
transform: rotate(-35deg);
filter: url(#shadow);
}
`,ua=sr.div`
position: absolute;
right: 850px;
bottom: 200px;
z-index: 2;
width: 600px;
height: 600px;
background-image: url(${pr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Xr} 2s ease-in-out forwards, ${Qr} 10s ease-in-out 2s infinite ;
filter: url(#shadow);
transition: .2s;
/* display: none; */
@media screen and (max-width:1200px) {
  position: absolute;
right: 740px;
bottom: 200px;
z-index: 2;
width: 500px;
height: 500px;
background-image: url(${pr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Xr} 2s ease-in-out forwards, ${Qr} 10s ease-in-out 2s infinite ;
filter: url(#shadow);
}
@media screen and (max-width:800px) {
  position: absolute;
right: 800px;
bottom: 200px;
z-index: 2;
width: 360px;
height: 360px;
background-image: url(${pr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Xr} 2s ease-in-out forwards, ${Qr} 10s ease-in-out 2s infinite ;
filter: url(#shadow);
}
@media screen and (max-width:700px) {
  position: absolute;
right: 770px;
bottom: 200px;
z-index: 2;
width: 360px;
height: 360px;
background-image: url(${pr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Xr} 2s ease-in-out forwards, ${Qr} 10s ease-in-out 2s infinite ;
filter: url(#shadow);
}
@media screen and (max-width:650px) {
  position: absolute;
right: 800px;
bottom: 400px;
z-index: 2;
width: 360px;
height: 360px;
background-image: url(${pr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Xr} 2s ease-in-out forwards, ${Qr} 10s ease-in-out 2s infinite ;
filter: url(#shadow);
}
`,ca=sr.div`
position: absolute;
left: 230px;
bottom: 420px;
z-index: 2;
width: 200px;
height: 200px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${qr} 2s ease-in-out infinite;
filter: url(#shadow);
transition: .2s;
/* display: none; */
@media screen and (max-width:1300px) {
  position: absolute;
left: 200px;
bottom: 460px;
z-index: 2;
width: 150px;
height: 150px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${qr} 2s ease-in-out infinite;
filter: url(#shadow);
}
@media screen and (max-width:1200px) {
  position: absolute;
left: 130px;
bottom: 460px;
z-index: 2;
width: 150px;
height: 150px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${qr} 2s ease-in-out infinite;
filter: url(#shadow);
}
@media screen and (max-width:1000px) {
  position: absolute;
left: 90px;
bottom: 460px;
z-index: 2;
width: 150px;
height: 150px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${qr} 2s ease-in-out infinite;
filter: url(#shadow);
}
@media screen and (max-width:850px) {
  position: absolute;
left: 40px;
bottom: 420px;
z-index: 2;
width: 150px;
height: 150px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${qr} 2s ease-in-out infinite;
filter: url(#shadow);
}
@media screen and (max-width:750px) {
  position: absolute;
left: 30px;
bottom: 580px;
z-index: 2;
width: 150px;
height: 150px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transform: rotate(35deg) !important;
animation: ${Br} 2s ease-in-out infinite;
filter: url(#shadow);
}
@media screen and (max-width:600px) {
  position: absolute;
left: 30px;
bottom: 560px;
z-index: 2;
width: 130px;
height: 130px;
background-image: url(${wr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
transform: rotate(45deg) !important;
animation: ${Br} 2s ease-in-out infinite;
filter: url(#shadow);
}
`,da=sr.div`
position: absolute;
left: 330px;
bottom: 220px;
width: 600px;
height: 600px;
z-index: 2;
background-image: url(${hr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Yr} 4s ease-in-out forwards ,${Gr} 5s ease-in-out 4s infinite ;
filter: url(#shadow);
/* display: none; */
@media screen and (max-width:1200px) {
  position: absolute;
left: 240px;
bottom: 220px;
width: 500px;
height: 500px;
z-index: 2;
background-image: url(${hr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Yr} 4s ease-in-out forwards ,${Gr} 5s ease-in-out 4s infinite ;
filter: url(#shadow);
}
@media screen and (max-width:700px) {
  position: absolute;
left: 200px;
bottom: 180px;
width: 400px;
height: 400px;
z-index: 2;
background-image: url(${hr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Yr} 4s ease-in-out forwards ,${Gr} 5s ease-in-out 4s infinite ;
filter: url(#shadow);
}
@media screen and (max-width:480px) {
  position: absolute;
left: 130px;
bottom: 200px;
width: 350px;
height: 350px;
z-index: 2;
background-image: url(${hr});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
animation: ${Yr} 4s ease-in-out forwards ,${Gr} 5s ease-in-out 4s infinite ;
filter: url(#shadow);
}
`,fa=sr.div`
  position: absolute;
  left: 100px;
  bottom: 60px;
  z-index: 2;
  width: 300px;
  height: 300px;
  background-image: url(${cr});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: url(#shadow);
  animation: ${Br} 5s ease-in-out infinite , ${Vr} 40s ease-in-out infinite;
  transition: 0.2s;
  /* display: none; */

   &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    svg {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
@media screen and (max-width: 1200px) {
  position: absolute;
  left: 100px;
  bottom: 60px;
  z-index: 2;
  width: 250px;
  height: 250px;
  background-image: url(${cr});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: url(#shadow);
  animation: ${Br} 5s ease-in-out infinite , ${Vr} 40s ease-in-out infinite;
  /* display: none; */

   &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    svg {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
}
@media screen and (max-width: 700px) {
  position: absolute;
  left: 50px;
  bottom: 60px;
  z-index: 2;
  width: 200px;
  height: 200px;
  background-image: url(${cr});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: url(#shadow);
  animation: ${Br} 5s ease-in-out infinite , ${Vr} 40s ease-in-out infinite;
  /* display: none; */

   &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    svg {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
}
@media screen and (max-width: 450px) {
  position: absolute;
  left: 40px;
  bottom: 100px;
  z-index: 2;
  width: 130px;
  height: 130px;
  background-image: url(${cr});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: url(#shadow);
  animation: ${Br} 5s ease-in-out infinite , ${Vr} 40s ease-in-out infinite;
  /* display: none; */

   &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    svg {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
}
`,pa=()=>{const[e,n]=(0,t.useState)(!1),r=[cr,dr,fr,pr,hr,mr,gr,br,vr,xr,yr,wr];return(0,t.useEffect)((()=>{const e=r.map((e=>{const t=new Image;return t.src=e,new Promise((e=>{t.onload=e}))}));Promise.all(e).then((()=>{n(!0)}))}),[]),(0,Dr.jsxs)(Dr.Fragment,{children:[(0,Dr.jsxs)(Jr,{children:[(0,Dr.jsxs)(la,{children:[(0,Dr.jsxs)("div",{className:"title",children:["GUMI-GOMI ",(0,Dr.jsx)("br",{}),"UNIVERSE"]}),(0,Dr.jsx)("p",{children:"WEB and ILLUSTRATION"}),(0,Dr.jsx)("p",{children:"Hello, I'm GUMI_GOMI. Create a webpage and draw illustrations."})]}),(0,Dr.jsx)(oa,{}),(0,Dr.jsx)(na,{}),(0,Dr.jsx)(aa,{}),(0,Dr.jsx)(ra,{}),(0,Dr.jsx)(ea,{}),(0,Dr.jsx)(ta,{}),(0,Dr.jsx)(ia,{}),(0,Dr.jsx)(ca,{}),(0,Dr.jsx)(da,{}),(0,Dr.jsx)(ua,{}),(0,Dr.jsx)(sa,{}),(0,Dr.jsx)(fa,{}),(0,Dr.jsx)("svg",{width:"0",height:"0",children:(0,Dr.jsx)("defs",{children:(0,Dr.jsx)("filter",{id:"shadow",children:(0,Dr.jsx)("feDropShadow",{dx:"00",dy:"0",stdDeviation:"8",floodColor:"rgba(0,0,0,0.4)"})})})})]}),(0,Dr.jsx)(Zr,{children:(0,Dr.jsx)(Wr,{})})]})},ha=n.p+"static/media/backgroundimg.63b8683a8712b6ae94d8.webp",ma=sr.div`
position: absolute;
top: 0;
z-index: 90;
  /* outline:  1px dotted red; */
  width: 100%;
  height: 100px;
  /* left: 50%; transform: translateX(-50%); */

  .inner{
    
    max-width: 1200px !important;
    height: 100%;
    margin: 0 auto;
    /* outline: 1px dotted red; */
    display: flex;
    justify-content: center;
    .logo{
      /* outline: 1px dotted red; */
      width: 250px;
      height: 100%;
      background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAEsCAYAAAAfPc2WAAAACXBIWXMAADE2AAAxNgGa50IgAAAC0ElEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwbP5CAAFzCKwhAAAAAElFTkSuQmCC"});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 20px;
    }
   
    ul{
      /* margin-right: 20px; */
      /* outline: 1px dotted red; */
      display: flex;
      gap: 40px;

      li{
        cursor: pointer;
        font-weight: 700;
        line-height: 100px;
        font-size: 16px;
        transition: 0.2s;
        &:hover{  
          scale: 1.2;
        }
      }
    }
  }
`,ga=()=>(0,Dr.jsx)(Dr.Fragment,{children:(0,Dr.jsx)(ma,{children:(0,Dr.jsx)("div",{className:"inner",children:(0,Dr.jsxs)("ul",{children:[(0,Dr.jsx)(Lr,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,Dr.jsx)("li",{children:"HOME"})}),(0,Dr.jsx)(Lr,{to:"/sample",style:{color:"inherit",textDecoration:"none"},children:(0,Dr.jsx)("li",{children:"SAMPLE"})})]})})})}),ba=ur`
0%{transform: rotate(0deg)}
100%{transform:rotate(360deg)}
`,va=ur`
0%{transform: rotate(0deg)}
100%{transform:rotate(-360deg)}
`,xa=(sr.div`
position: relative;
margin: 0 auto;
width: 600px;
height: 600px;
/* outline: 1px dotted red; */
background-image: url(${xr});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
/* animation: ${ba} 40s ease-in-out infinite; */
outline: 1px dotted red;
.imgpart{
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #fff;
  left: 50%; transform: translateX(-50%) !important;
  top: 50%; transform: translateY(-50%) !important;
  /* animation: ${va} 40s ease-in-out infinite; */
}
`,sr.div`
  width: 100%;
  height: auto;
  outline: 1px dotted red;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  
  P{
    text-align: center;
    font-size: 40px;
    margin-top: 50px;
  }
`,()=>{});let ya={},wa={},Aa=null,ka={mark:xa,measure:xa};try{"undefined"!==typeof window&&(ya=window),"undefined"!==typeof document&&(wa=document),"undefined"!==typeof MutationObserver&&(Aa=MutationObserver),"undefined"!==typeof performance&&(ka=performance)}catch(fs){}const{userAgent:Sa=""}=ya.navigator||{},Ea=ya,Ca=wa,_a=Aa,za=ka,Pa=(Ea.document,!!Ca.documentElement&&!!Ca.head&&"function"===typeof Ca.addEventListener&&"function"===typeof Ca.createElement),Oa=~Sa.indexOf("MSIE")||~Sa.indexOf("Trident/");var Na="classic",Ta="duotone",Ra="sharp",ja="sharp-duotone",La=[Na,Ta,Ra,ja],Ia={fak:"kit","fa-kit":"kit"},$a={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},Da={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Fa=[1,2,3,4,5,6,7,8,9,10],Ma=Fa.concat([11,12,13,14,15,16,17,18,19,20]),Ua={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wa=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ua.GROUP,Ua.SWAP_OPACITY,Ua.PRIMARY,Ua.SECONDARY].concat(Fa.map((e=>"".concat(e,"x")))).concat(Ma.map((e=>"w-".concat(e)))),Ha={kit:"fak"},Ba={"kit-duotone":"fakd"};const Va="___FONT_AWESOME___",Ka=16,Xa="fa",Qa="svg-inline--fa",Ya="data-fa-i2svg",Ga="data-fa-pseudo-element",qa="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",eo="fontawesome-i2svg",to="async",no=["HTML","HEAD","STYLE","SCRIPT"],ro=(()=>{try{return!0}catch(e){return!1}})(),ao=[Na,Ra,ja];function oo(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[Na]})}const io={...Da};io[Na]={...Da[Na],...Ia,...$a};const lo=oo(io),so={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}};so[Na]={...so[Na],...Ha,...Ba};const uo=oo(so),co={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}};co[Na]={...co[Na],fak:"fa-kit"};const fo=oo(co),po={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}};po[Na]={...po[Na],"fa-kit":"fak"};const ho=oo(po),mo=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,go="fa-layers-text",bo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,vo=(oo({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}}),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),xo=Ua,yo=new Set;Object.keys(uo[Na]).map(yo.add.bind(yo)),Object.keys(uo[Ra]).map(yo.add.bind(yo)),Object.keys(uo[ja]).map(yo.add.bind(yo));const wo=["kit",...Wa],Ao=Ea.FontAwesomeConfig||{};if(Ca&&"function"===typeof Ca.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Ca.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));void 0!==r&&null!==r&&(Ao[n]=r)}))}const ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xa,replacementClass:Qa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);const So={...ko,...Ao};So.autoReplaceSvg||(So.observeMutations=!1);const Eo={};Object.keys(ko).forEach((e=>{Object.defineProperty(Eo,e,{enumerable:!0,set:function(t){So[e]=t,Co.forEach((e=>e(Eo)))},get:function(){return So[e]}})})),Object.defineProperty(Eo,"familyPrefix",{enumerable:!0,set:function(e){So.cssPrefix=e,Co.forEach((e=>e(Eo)))},get:function(){return So.cssPrefix}}),Ea.FontAwesomeConfig=Eo;const Co=[];const _o=Ka,zo={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};const Po="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oo(){let e=12,t="";for(;e-- >0;)t+=Po[62*Math.random()|0];return t}function No(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function To(e){return e.classList?No(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function Ro(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jo(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function Lo(e){return e.size!==zo.size||e.x!==zo.x||e.y!==zo.y||e.rotate!==zo.rotate||e.flipX||e.flipY}var Io=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function $o(){const e=Xa,t=Qa,n=Eo.cssPrefix,r=Eo.replacementClass;let a=Io;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return a}let Do=!1;function Fo(){Eo.autoAddCss&&!Do&&(!function(e){if(!e||!Pa)return;const t=Ca.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Ca.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const e=n[a],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}Ca.head.insertBefore(t,r)}($o()),Do=!0)}var Mo={mixout:()=>({dom:{css:$o,insertCss:Fo}}),hooks:()=>({beforeDOMElementCreation(){Fo()},beforeI2svg(){Fo()}})};const Uo=Ea||{};Uo[Va]||(Uo[Va]={}),Uo[Va].styles||(Uo[Va].styles={}),Uo[Va].hooks||(Uo[Va].hooks={}),Uo[Va].shims||(Uo[Va].shims=[]);var Wo=Uo[Va];const Ho=[],Bo=function(){Ca.removeEventListener("DOMContentLoaded",Bo),Vo=1,Ho.map((e=>e()))};let Vo=!1;function Ko(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"===typeof e?Ro(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(Ro(e[n]),'" ')),"").trim()}(n),">").concat(r.map(Ko).join(""),"</").concat(t,">")}function Xo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}Pa&&(Vo=(Ca.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ca.readyState),Vo||Ca.addEventListener("DOMContentLoaded",Bo));var Qo=function(e,t,n,r){var a,o,i,l=Object.keys(e),s=l.length,u=void 0!==r?function(e,t){return function(n,r,a,o){return e.call(t,n,r,a,o)}}(t,r):t;for(void 0===n?(a=1,i=e[l[0]]):(a=0,i=n);a<s;a++)i=u(i,e[o=l[a]],o,e);return i};function Yo(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&a)<<10)+(1023&r)+65536):(t.push(a),n--)}else t.push(a)}return t}(e);return 1===t.length?t[0].toString(16):null}function Go(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function qo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,a=Go(t);"function"!==typeof Wo.hooks.addPack||r?Wo.styles[e]={...Wo.styles[e]||{},...a}:Wo.hooks.addPack(e,Go(t)),"fas"===e&&qo("fa",t)}const{styles:Jo,shims:Zo}=Wo,ei={[Na]:Object.values(fo[Na]),[Ra]:Object.values(fo[Ra]),[ja]:Object.values(fo[ja])};let ti=null,ni={},ri={},ai={},oi={},ii={};const li={[Na]:Object.keys(lo[Na]),[Ra]:Object.keys(lo[Ra]),[ja]:Object.keys(lo[ja])};function si(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r!==e||""===a||(o=a,~wo.indexOf(o))?null:a;var o}const ui=()=>{const e=e=>Qo(Jo,((t,n,r)=>(t[r]=Qo(n,e,{}),t)),{});ni=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"===typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),ri=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"===typeof e)).forEach((t=>{e[t]=n}))}return e})),ii=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Jo||Eo.autoFetchSvg,n=Qo(Zo,((e,n)=>{const r=n[0];let a=n[1];const o=n[2];return"far"!==a||t||(a="fas"),"string"===typeof r&&(e.names[r]={prefix:a,iconName:o}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:a,iconName:o}),e}),{names:{},unicodes:{}});ai=n.names,oi=n.unicodes,ti=gi(Eo.styleDefault,{family:Eo.familyDefault})};var ci;function di(e,t){return(ni[e]||{})[t]}function fi(e,t){return(ii[e]||{})[t]}function pi(e){return ai[e]||{prefix:null,iconName:null}}function hi(){return ti}ci=e=>{ti=gi(e.styleDefault,{family:Eo.familyDefault})},Co.push(ci),ui();const mi=()=>({prefix:null,iconName:null,rest:[]});function gi(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=Na}=t,r=lo[n][e],a=uo[n][e]||uo[n][r],o=e in Wo.styles?e:null;return a||o||null}const bi={[Na]:Object.keys(fo[Na]),[Ra]:Object.keys(fo[Ra]),[ja]:Object.keys(fo[ja])};function vi(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Na]:"".concat(Eo.cssPrefix,"-").concat(Na),[Ra]:"".concat(Eo.cssPrefix,"-").concat(Ra),[ja]:"".concat(Eo.cssPrefix,"-").concat(ja)};let a=null,o=Na;const i=La.filter((e=>e!==Ta));i.forEach((t=>{(e.includes(r[t])||e.some((e=>bi[t].includes(e))))&&(o=t)}));const l=e.reduce(((e,t)=>{const l=si(Eo.cssPrefix,t);if(Jo[t]?(t=ei[o].includes(t)?ho[o][t]:t,a=t,e.prefix=t):li[o].indexOf(t)>-1?(a=t,e.prefix=gi(t,{family:o})):l?e.iconName=l:t===Eo.replacementClass||i.some((e=>t===r[e]))||e.rest.push(t),!n&&e.prefix&&e.iconName){const t="fa"===a?pi(e.iconName):{},n=fi(e.prefix,e.iconName);t.prefix&&(a=null),e.iconName=t.iconName||n||e.iconName,e.prefix=t.prefix||e.prefix,"far"!==e.prefix||Jo.far||!Jo.fas||Eo.autoFetchSvg||(e.prefix="fas")}return e}),mi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),l.prefix||o!==Ra||!Jo.fass&&!Eo.autoFetchSvg||(l.prefix="fass",l.iconName=fi(l.prefix,l.iconName)||l.iconName),l.prefix||o!==ja||!Jo.fasds&&!Eo.autoFetchSvg||(l.prefix="fasds",l.iconName=fi(l.prefix,l.iconName)||l.iconName),"fa"!==l.prefix&&"fa"!==a||(l.prefix=hi()||"fas"),l}let xi=[],yi={};const wi={},Ai=Object.keys(wi);function ki(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(yi[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function Si(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(yi[e]||[]).forEach((e=>{e.apply(null,n)}))}function Ei(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wi[e]?wi[e].apply(null,t):void 0}function Ci(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||hi();if(t)return t=fi(n,t)||t,Xo(_i.definitions,n,t)||Xo(Wo.styles,n,t)}const _i=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]={...this.definitions[e]||{},...r[e]},qo(e,r[e]);const t=fo[Na][e];t&&qo(t,r[e]),ui()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:a,icon:o}=n[t],i=o[2];e[r]||(e[r]={}),i.length>0&&i.forEach((t=>{"string"===typeof t&&(e[r][t]=o)})),e[r][a]=o})),e}},zi={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pa?(Si("beforeI2svg",e),Ei("pseudoElements2svg",e),Ei("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===Eo.autoReplaceSvg&&(Eo.autoReplaceSvg=!0),Eo.observeMutations=!0,n=()=>{Ni({autoReplaceSvgRoot:t}),Si("watch",e)},Pa&&(Vo?setTimeout(n,0):Ho.push(n))}},Pi={icon:e=>{if(null===e)return null;if("object"===typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=gi(e[0]);return{prefix:n,iconName:fi(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(Eo.cssPrefix,"-"))>-1||e.match(mo))){const t=vi(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||hi(),iconName:fi(t.prefix,t.iconName)||t.iconName}}if("string"===typeof e){const t=hi();return{prefix:t,iconName:fi(t,e)||e}}}},Oi={noAuto:()=>{Eo.autoReplaceSvg=!1,Eo.observeMutations=!1,Si("noAuto")},config:Eo,dom:zi,parse:Pi,library:_i,findIconDefinition:Ci,toHtml:Ko},Ni=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=Ca}=e;(Object.keys(Wo.styles).length>0||Eo.autoFetchSvg)&&Pa&&Eo.autoReplaceSvg&&Oi.dom.i2svg({node:t})};function Ti(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Ko(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!Pa)return;const t=Ca.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Ri(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:l,maskId:s,titleId:u,extra:c,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,h="fak"===r,m=[Eo.replacementClass,a?"".concat(Eo.cssPrefix,"-").concat(a):""].filter((e=>-1===c.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(c.classes).join(" ");let g={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":a,class:m,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const b=h&&!~c.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(g.attributes[Ya]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Oo())},children:[l]}),delete g.attributes.title);const v={...g,prefix:r,iconName:a,main:t,mask:n,maskId:s,transform:o,symbol:i,styles:{...b,...c.styles}},{children:x,attributes:y}=n.found&&t.found?Ei("generateAbstractMask",v)||{children:[],attributes:{}}:Ei("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=x,v.attributes=y,i?function(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:!0===o?"".concat(t,"-").concat(Eo.cssPrefix,"-").concat(n):o},children:r}]}]}(v):function(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:i}=e;if(Lo(i)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};a.style=jo({...o,"transform-origin":"".concat(r.x+i.x/16,"em ").concat(r.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:t}]}(v)}function ji(e){const{content:t,width:n,height:r,transform:a,title:o,extra:i,watchable:l=!1}=e,s={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};l&&(s[Ya]="");const u={...i.styles};Lo(a)&&(u.transform=function(e){let{transform:t,width:n=Ka,height:r=Ka,startCentered:a=!1}=e,o="";return o+=a&&Oa?"translate(".concat(t.x/_o-n/2,"em, ").concat(t.y/_o-r/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/_o,"em), calc(-50% + ").concat(t.y/_o,"em)) "):"translate(".concat(t.x/_o,"em, ").concat(t.y/_o,"em) "),o+="scale(".concat(t.size/_o*(t.flipX?-1:1),", ").concat(t.size/_o*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=jo(u);c.length>0&&(s.style=c);const d=[];return d.push({tag:"span",attributes:s,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}const{styles:Li}=Wo;function Ii(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return a=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Eo.cssPrefix,"-").concat(xo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Eo.cssPrefix,"-").concat(xo.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Eo.cssPrefix,"-").concat(xo.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const $i={found:!1,width:512,height:512};function Di(e,t){let n=t;return"fa"===t&&null!==Eo.styleDefault&&(t=hi()),new Promise(((r,a)=>{if("fa"===n){const n=pi(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Li[t]&&Li[t][e]){return r(Ii(Li[t][e]))}!function(e,t){ro||Eo.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r({...$i,icon:Eo.showMissingIcons&&e&&Ei("missingIconAbstract")||{}})}))}const Fi=()=>{},Mi=Eo.measurePerformance&&za&&za.mark&&za.measure?za:{mark:Fi,measure:Fi},Ui='FA "6.6.0"',Wi=e=>{Mi.mark("".concat(Ui," ").concat(e," ends")),Mi.measure("".concat(Ui," ").concat(e),"".concat(Ui," ").concat(e," begins"),"".concat(Ui," ").concat(e," ends"))};var Hi={begin:e=>(Mi.mark("".concat(Ui," ").concat(e," begins")),()=>Wi(e)),end:Wi};const Bi=()=>{};function Vi(e){return"string"===typeof(e.getAttribute?e.getAttribute(Ya):null)}function Ki(e){return Ca.createElementNS("http://www.w3.org/2000/svg",e)}function Xi(e){return Ca.createElement(e)}function Qi(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?Ki:Xi)}=t;if("string"===typeof e)return Ca.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(Qi(e,{ceFn:n}))})),r}const Yi={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Qi(e),t)})),null===t.getAttribute(Ya)&&Eo.keepOriginalSource){let e=Ca.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~To(t).indexOf(Eo.replacementClass))return Yi.replace(e);const r=new RegExp("".concat(Eo.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===Eo.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const a=n.map((e=>Ko(e))).join("\n");t.setAttribute(Ya,""),t.innerHTML=a}};function Gi(e){e()}function qi(e,t){const n="function"===typeof t?t:Bi;if(0===e.length)n();else{let t=Gi;Eo.mutateApproach===to&&(t=Ea.requestAnimationFrame||Gi),t((()=>{const t=!0===Eo.autoReplaceSvg?Yi.replace:Yi[Eo.autoReplaceSvg]||Yi.replace,r=Hi.begin("mutate");e.map(t),r(),n()}))}}let Ji=!1;function Zi(){Ji=!0}function el(){Ji=!1}let tl=null;function nl(e){if(!_a)return;if(!Eo.observeMutations)return;const{treeCallback:t=Bi,nodeCallback:n=Bi,pseudoElementsCallback:r=Bi,observeMutationsRoot:a=Ca}=e;tl=new _a((e=>{if(Ji)return;const a=hi();No(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Vi(e.addedNodes[0])&&(Eo.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&Eo.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&Vi(e.target)&&~vo.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(Ja):null,n=e.getAttribute?e.getAttribute(Za):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=vi(To(e.target));e.target.setAttribute(Ja,t||a),n&&e.target.setAttribute(Za,n)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Eo.replacementClass)})(e.target)&&n(e.target)}))})),Pa&&tl.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rl(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let a=vi(To(e));return a.prefix||(a.prefix=hi()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=function(e,t){return(ri[e]||{})[t]}(a.prefix,e.innerText)||di(a.prefix,Yo(e.innerText))),!a.iconName&&Eo.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function al(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=rl(e),o=function(e){const t=No(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Eo.autoA11y&&(n?t["aria-labelledby"]="".concat(Eo.replacementClass,"-title-").concat(r||Oo()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),i=ki("parseNodeAttributes",{},e);let l=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],a=n.slice(1);return r&&a.length>0&&(e[r]=a.join(":").trim()),e}),{})),n}(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:zo,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o},...i}}const{styles:ol}=Wo;function il(e){const t="nest"===Eo.autoReplaceSvg?al(e,{styleParser:!1}):al(e);return~t.extra.classes.indexOf(go)?Ei("generateLayersText",e,t):Ei("generateSvgReplacementMutation",e,t)}let ll=new Set;function sl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Pa)return Promise.resolve();const n=Ca.documentElement.classList,r=e=>n.add("".concat(eo,"-").concat(e)),a=e=>n.remove("".concat(eo,"-").concat(e)),o=Eo.autoFetchSvg?ll:ao.map((e=>"fa-".concat(e))).concat(Object.keys(ol));o.includes("fa")||o.push("fa");const i=[".".concat(go,":not([").concat(Ya,"])")].concat(o.map((e=>".".concat(e,":not([").concat(Ya,"])")))).join(", ");if(0===i.length)return Promise.resolve();let l=[];try{l=No(e.querySelectorAll(i))}catch(c){}if(!(l.length>0))return Promise.resolve();r("pending"),a("complete");const s=Hi.begin("onTree"),u=l.reduce(((e,t)=>{try{const n=il(t);n&&e.push(n)}catch(c){ro||"MissingIcon"===c.name&&console.error(c)}return e}),[]);return new Promise(((e,n)=>{Promise.all(u).then((n=>{qi(n,(()=>{r("active"),r("complete"),a("pending"),"function"===typeof t&&t(),s(),e()}))})).catch((e=>{s(),n(e)}))}))}function ul(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;il(e).then((e=>{e&&qi([e],t)}))}function cl(e){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:Ci(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Ci(a||{})),e(r,{...n,mask:a})}}ao.map((e=>{ll.add("fa-".concat(e))})),Object.keys(lo[Na]).map(ll.add.bind(ll)),Object.keys(lo[Ra]).map(ll.add.bind(ll)),Object.keys(lo[ja]).map(ll.add.bind(ll)),ll=[...ll];const dl=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=zo,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:l=null,classes:s=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:d,iconName:f,icon:p}=e;return Ti({type:"icon",...e},(()=>(Si("beforeDOMElementCreation",{iconDefinition:e,params:t}),Eo.autoA11y&&(i?u["aria-labelledby"]="".concat(Eo.replacementClass,"-title-").concat(l||Oo()):(u["aria-hidden"]="true",u.focusable="false")),Ri({icons:{main:Ii(p),mask:a?Ii(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...zo,...n},symbol:r,title:i,maskId:o,titleId:l,extra:{attributes:u,styles:c,classes:s}}))))};var fl={mixout:()=>({icon:cl(dl)}),hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=sl,e.nodeCallback=ul,e)}),provides(e){e.i2svg=function(e){const{node:t=Ca,callback:n=()=>{}}=e;return sl(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:a,prefix:o,transform:i,symbol:l,mask:s,maskId:u,extra:c}=t;return new Promise(((t,d)=>{Promise.all([Di(n,o),s.iconName?Di(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((s=>{let[d,f]=s;t([e,Ri({icons:{main:d,mask:f},prefix:o,iconName:n,transform:i,symbol:l,maskId:u,title:r,titleId:a,extra:c,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:a,styles:o}=e;const i=jo(o);let l;return i.length>0&&(n.style=i),Lo(a)&&(l=Ei("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:n}}}},pl={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return Ti({type:"layer"},(()=>{Si("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(Eo.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},hl={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return Ti({type:"counter",content:e},(()=>(Si("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=jo(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(Eo.cssPrefix,"-layers-counter"),...r]}}))))}})},ml={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=zo,title:r=null,classes:a=[],attributes:o={},styles:i={}}=t;return Ti({type:"text",content:e},(()=>(Si("beforeDOMElementCreation",{content:e,params:t}),ji({content:e,transform:{...zo,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(Eo.cssPrefix,"-layers-text"),...a]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:a}=t;let o=null,i=null;if(Oa){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();o=n.width/t,i=n.height/t}return Eo.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,ji({content:e.innerHTML,width:o,height:i,transform:r,title:n,extra:a,watchable:!0})])}}};const gl=new RegExp('"',"ug"),bl=[1105920,1112319],vl={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xl=Object.keys(vl).reduce(((e,t)=>(e[t.toLowerCase()]=vl[t],e)),{}),yl=Object.keys(xl).reduce(((e,t)=>{const n=xl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function wl(e,t){const n="".concat(qa).concat(t.replace(":","-"));return new Promise(((r,a)=>{if(null!==e.getAttribute(n))return r();const o=No(e.children).filter((e=>e.getAttribute(Ga)===t))[0],i=Ea.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),s=l.match(bo),u=i.getPropertyValue("font-weight"),c=i.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&"none"!==c&&""!==c){const c=i.getPropertyValue("content");let d=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(xl[n]||{})[a]||yl[n]}(l,u);const{value:f,isSecondary:p}=function(e){const t=e.replace(gl,""),n=function(e,t){const n=e.length;let r,a=e.charCodeAt(t);return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(a-55296)+r-56320+65536:a}(t,0),r=n>=bl[0]&&n<=bl[1],a=2===t.length&&t[0]===t[1];return{value:Yo(a?t[0]:t),isSecondary:r||a}}(c),h=s[0].startsWith("FontAwesome");let m=di(d,f),g=m;if(h){const e=function(e){const t=oi[e],n=di("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(f);e.iconName&&e.prefix&&(m=e.iconName,d=e.prefix)}if(!m||p||o&&o.getAttribute(Ja)===d&&o.getAttribute(Za)===g)r();else{e.setAttribute(n,g),o&&e.removeChild(o);const i={iconName:null,title:null,titleId:null,prefix:null,transform:zo,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:l}=i;l.attributes[Ga]=t,Di(m,d).then((a=>{const o=Ri({...i,icons:{main:a,mask:mi()},prefix:d,iconName:g,extra:l,watchable:!0}),s=Ca.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(s,e.firstChild):e.appendChild(s),s.outerHTML=o.map((e=>Ko(e))).join("\n"),e.removeAttribute(n),r()})).catch(a)}}else r()}))}function Al(e){return Promise.all([wl(e,"::before"),wl(e,"::after")])}function kl(e){return e.parentNode!==document.head&&!~no.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ga)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Sl(e){if(Pa)return new Promise(((t,n)=>{const r=No(e.querySelectorAll("*")).filter(kl).map(Al),a=Hi.begin("searchPseudoElements");Zi(),Promise.all(r).then((()=>{a(),el(),t()})).catch((()=>{a(),el(),n()}))}))}var El={hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=Sl,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=Ca}=e;Eo.searchPseudoElements&&Sl(t)}}};let Cl=!1;var _l={mixout:()=>({dom:{unwatch(){Zi(),Cl=!0}}}),hooks:()=>({bootstrap(){nl(ki("mutationObserverCallbacks",{}))},noAuto(){tl&&tl.disconnect()},watch(e){const{observeMutationsRoot:t}=e;Cl?el():nl(ki("mutationObserverCallbacks",{observeMutationsRoot:t}))}})};const zl=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let a=n.slice(1).join("-");if(r&&"h"===a)return e.flipX=!0,e;if(r&&"v"===a)return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var Pl={mixout:()=>({parse:{transform:e=>zl(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=zl(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:a}=e;const o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(l," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{tag:"g",attributes:{...o},children:[{tag:"g",attributes:{...u},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...c}}]}]}}}};const Ol={x:0,y:0,width:"100%",height:"100%"};function Nl(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Tl={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?vi(n.split(" ").map((e=>e.trim()))):mi();return r.prefix||(r.prefix=hi()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:a,maskId:o,transform:i}=e;const{width:l,icon:s}=r,{width:u,icon:c}=a,d=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*t.x,", ").concat(32*t.y,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(o," ").concat(i," ").concat(l)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:i,containerWidth:u,iconWidth:l}),f={tag:"rect",attributes:{...Ol,fill:"white"}},p=s.children?{children:s.children.map(Nl)}:{},h={tag:"g",attributes:{...d.inner},children:[Nl({tag:s.tag,attributes:{...s.attributes,...d.path},...p})]},m={tag:"g",attributes:{...d.outer},children:[h]},g="mask-".concat(o||Oo()),b="clip-".concat(o||Oo()),v={tag:"mask",attributes:{...Ol,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[f,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(y=c,"g"===y.tag?y.children:[y])},v]};var y;return t.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")"),...Ol}}),{children:t,attributes:n}}}},Rl={provides(e){let t=!1;Ea.matchMedia&&(t=Ea.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...n,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const a={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...n,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...a,values:"1;0;1;1;0;1;"}}),e.push(o),e.push({tag:"path",attributes:{...n,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...a,values:"1;0;0;0;0;1;"}}]}),t||e.push({tag:"path",attributes:{...n,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...a,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},jl={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})};!function(e,t){let{mixoutsTo:n}=t;xi=e,yi={},Object.keys(wi).forEach((e=>{-1===Ai.indexOf(e)&&delete wi[e]})),xi.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"===typeof t[e]&&(n[e]=t[e]),"object"===typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{yi[e]||(yi[e]=[]),yi[e].push(t[e])}))}e.provides&&e.provides(wi)}))}([Mo,fl,pl,hl,ml,El,_l,Pl,Tl,Rl,jl],{mixoutsTo:Oi});const Ll=Oi.parse,Il=Oi.icon;var $l=n(173),Dl=n.n($l);function Fl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ml(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fl(Object(n),!0).forEach((function(t){Wl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ul(e){return Ul="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ul(e)}function Wl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hl(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Bl(e){return function(e){if(Array.isArray(e))return Vl(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Vl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vl(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vl(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kl(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Xl=["style"];var Ql=!1;try{Ql=!0}catch(fs){}function Yl(e){return e&&"object"===Ul(e)&&e.prefix&&e.iconName&&e.icon?e:Ll.icon?Ll.icon(e):null===e?null:e&&"object"===Ul(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function Gl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Wl({},e,t):{}}var ql={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Jl=t.forwardRef((function(e,t){var n=Ml(Ml({},ql),e),r=n.icon,a=n.mask,o=n.symbol,i=n.className,l=n.title,s=n.titleId,u=n.maskId,c=Yl(r),d=Gl("classes",[].concat(Bl(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,h=e.border,m=e.listItem,g=e.flip,b=e.size,v=e.rotation,x=e.pull,y=(Wl(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":h,"fa-li":m,"fa-flip":!0===g,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(b),"undefined"!==typeof b&&null!==b),Wl(t,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),Wl(t,"fa-pull-".concat(x),"undefined"!==typeof x&&null!==x),Wl(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map((function(e){return y[e]?e:null})).filter((function(e){return e}))}(n)),Bl((i||"").split(" ")))),f=Gl("transform","string"===typeof n.transform?Ll.transform(n.transform):n.transform),p=Gl("mask",Yl(a)),h=Il(c,Ml(Ml(Ml(Ml({},d),f),p),{},{symbol:o,title:l,titleId:s,maskId:u}));if(!h)return function(){var e;!Ql&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var m=h.abstract,g={ref:t};return Object.keys(n).forEach((function(e){ql.hasOwnProperty(e)||(g[e]=n[e])})),Zl(m[0],g)}));Jl.displayName="FontAwesomeIcon",Jl.propTypes={beat:Dl().bool,border:Dl().bool,beatFade:Dl().bool,bounce:Dl().bool,className:Dl().string,fade:Dl().bool,flash:Dl().bool,mask:Dl().oneOfType([Dl().object,Dl().array,Dl().string]),maskId:Dl().string,fixedWidth:Dl().bool,inverse:Dl().bool,flip:Dl().oneOf([!0,!1,"horizontal","vertical","both"]),icon:Dl().oneOfType([Dl().object,Dl().array,Dl().string]),listItem:Dl().bool,pull:Dl().oneOf(["right","left"]),pulse:Dl().bool,rotation:Dl().oneOf([0,90,180,270]),shake:Dl().bool,size:Dl().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Dl().bool,spinPulse:Dl().bool,spinReverse:Dl().bool,symbol:Dl().oneOfType([Dl().bool,Dl().string]),title:Dl().string,titleId:Dl().string,transform:Dl().oneOfType([Dl().string,Dl().object]),swapOpacity:Dl().bool};var Zl=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=Kl(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Kl(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,s=Hl(r,Xl);return o.attrs.style=Ml(Ml({},o.attrs.style),l),t.apply(void 0,[n.tag,Ml(Ml({},o.attrs),s)].concat(Bl(a)))}.bind(null,t.createElement);const es={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};const ts=sr.div`

  width: 100%;
  height: 150px;
  margin-top: 400px;
  /* outline: 1px dotted red; */

  a{
    text-decoration: none;
    
  }
  .footInner{
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    /* outline: 1px dotted red; */

    .copy{

      width: 400px;
      border-top: 1px solid rgba(0,0,0,0.4);
      text-align: center;
      font-size: 14px;
      margin: 0 auto;
      padding-top: 20px;
    }

    .etc{
      color: rgba(0,0,0,0.8);
      display: flex;
      /* outline: 1px dotted red; */
      width: 400px;
      margin: 0 auto;
      margin-top: 30px;
      justify-content: center;
      transition: 0.2s;
      &:hover{
        scale: 1.05;
      }
      
      .instaicon{
        font-size: 40px;
      }
      P{
        font-size: 40px;
      }
    }
  }
`,ns=()=>(0,Dr.jsx)(Dr.Fragment,{children:(0,Dr.jsx)(ts,{children:(0,Dr.jsxs)("div",{className:"footInner",children:[(0,Dr.jsx)("div",{className:"copy",children:"COPYRIGHT 2024 GUMIGOMI, ALL RIGHTS RESERVED"}),(0,Dr.jsx)("a",{href:"https://www.instagram.com/gumi_gomi/",target:"_blank",children:(0,Dr.jsxs)("div",{className:"etc",children:[(0,Dr.jsx)(Jl,{className:"instaicon",icon:es}),(0,Dr.jsx)("p",{children:"GUMI_GOMI"})]})})]})})}),rs=n.p+"static/media/dentalbg1.5ca6324607935c4073ce.webp",as=n.p+"static/media/designbg.355396994a9d67cfe6de.webp",os=n.p+"static/media/sample4.05f2b8fc09069f5db6d2.webp",is=n.p+"static/media/gumigomiillust.95c670214b5cb5260134.webp",ls=sr.div`
  width: 100%;
  height: auto; /* auto로 높이를 동적으로 조절 */
  overflow: hidden; /* 넘치는 요소 숨기기 */

  .sampleinner {
    /* position: relative; */
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;
    transition: height 0.3s ease; /* 높이 변경 시 부드러운 전환 */
    /* outline: 1px dotted red; */

    .one {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 1000px;
      height: 400px;
      background-image: url(${rs});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    
    }

    .onedetail {
      /* outline: 1px dotted red; */
      margin: 0 auto;
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      max-width: 740px;
      text-align: center;
      font-size: 18px;
      overflow: hidden;
 
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
  .sampleinnertwo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    /* transition: height 0.3s ease; */
    /* outline: 1px dotted red; */

    .two {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 1000px;
      height: 400px;
      background-image: url(${as});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .four {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 1000px;
      height: 400px;
      background-image: url(${os});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .three{
          /* border-radius: 15px; */
          margin: 0 auto;
      max-width: 1000px;
      height: 400px;
      background-image: url(${is});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    }

    .twodetail {
      position: relative; /* absolute 대신 relative 사용 */
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      width: 1000px;
      text-align: center;
      left: 50%; transform: translateX(-50%);
      font-size: 18px;
      /* opacity: ${e=>e.text2?1:0};  */
      /* max-height: ${e=>e.text2?"200px":"0"}; */
      overflow: hidden; /* 요소가 숨겨질 때 넘침 방지 */
      /* transition: max-height 0.3s ease, opacity 0.3s ease; */
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  height: auto; /* auto로 높이를 동적으로 조절 */
  overflow: hidden; /* 넘치는 요소 숨기기 */

  .sampleinner {
    /* position: relative; */
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;
    transition: height 0.3s ease; /* 높이 변경 시 부드러운 전환 */
    /* outline: 1px dotted red; */

    .one {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 700px;
      height: 300px;
      background-image: url(${rs});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    
    }

    .onedetail {
      /* outline: 1px dotted red; */
      margin: 0 auto;
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      max-width: 740px;
      text-align: center;
      font-size: 18px;
      overflow: hidden;
 
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
  .sampleinnertwo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    /* transition: height 0.3s ease; */
    /* outline: 1px dotted red; */

    .two {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 700px;
      height: 300px;
      background-image: url(${as});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .three {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 700px;
      height: 300px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }

    .twodetail {
      position: relative; /* absolute 대신 relative 사용 */
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      width: 1000px;
      text-align: center;
      left: 50%; transform: translateX(-50%);
      font-size: 18px;
      /* opacity: ${e=>e.text2?1:0};  */
      /* max-height: ${e=>e.text2?"200px":"0"}; */
      overflow: hidden; /* 요소가 숨겨질 때 넘침 방지 */
      /* transition: max-height 0.3s ease, opacity 0.3s ease; */
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  }
  @media screen and (max-width: 800px) {
    width: 100%;
  height: auto; /* auto로 높이를 동적으로 조절 */
  overflow: hidden; /* 넘치는 요소 숨기기 */

  .sampleinner {
    /* position: relative; */
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;
    transition: height 0.3s ease; /* 높이 변경 시 부드러운 전환 */
    /* outline: 1px dotted red; */

    .one {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 600px;
      height: 250px;
      background-image: url(${rs});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    
    }

    .onedetail {
      /* outline: 1px dotted red; */
      margin: 0 auto;
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      max-width: 740px;
      text-align: center;
      font-size: 14px;
      overflow: hidden;
 
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
  .sampleinnertwo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    /* transition: height 0.3s ease; */
    /* outline: 1px dotted red; */

    .two {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 600px;
      height: 250px;
      background-image: url(${as});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .three {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 600px;
      height: 250px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }

    .twodetail {
      position: relative; /* absolute 대신 relative 사용 */
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      width: 1000px;
      text-align: center;
      left: 50%; transform: translateX(-50%);
      font-size: 14px;
      /* opacity: ${e=>e.text2?1:0};  */
      /* max-height: ${e=>e.text2?"200px":"0"}; */
      overflow: hidden; /* 요소가 숨겨질 때 넘침 방지 */
      /* transition: max-height 0.3s ease, opacity 0.3s ease; */
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  }
  @media screen and (max-width: 650px) {
    width: 100%;
  height: auto; /* auto로 높이를 동적으로 조절 */
  overflow: hidden; /* 넘치는 요소 숨기기 */

  .sampleinner {
    /* position: relative; */
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    transition: height 0.3s ease; /* 높이 변경 시 부드러운 전환 */
    /* outline: 1px dotted red; */

    .one {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 400px;
      height: 210px;
      background-image: url(${rs});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    
    }

    .onedetail {
      /* outline: 1px dotted red; */
      margin: 0 auto;
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      max-width: 380px;
      line-height: 18px;
      text-align: center;
      font-size: 12px;
      overflow: hidden; 
      word-break: keep-all;
 
      
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
  .sampleinnertwo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    /* transition: height 0.3s ease; */
    /* outline: 1px dotted red; */

    .two {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 400px;
      height: 220px;
      background-image: url(${as});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .three {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 400px;
      height: 220px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }


    .twodetail {
      position: relative; /* absolute 대신 relative 사용 */
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      width: 380px;
      text-align: center;
      left: 50%; transform: translateX(-50%);
      font-size: 12px;
      /* opacity: ${e=>e.text2?1:0};  */
      /* max-height: ${e=>e.text2?"200px":"0"}; */
      overflow: hidden; /* 요소가 숨겨질 때 넘침 방지 */
      /* transition: max-height 0.3s ease, opacity 0.3s ease; */
      word-break: keep-all;
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  .sampleinnertwo {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    /* transition: height 0.3s ease; */
    /* outline: 1px dotted red; */

    .two {
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 400px;
      height: 220px;
      background-image: url(${as});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }
    .three{
      /* border-radius: 15px; */
      margin: 0 auto;
      max-width: 400px;
      height: 220px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
     
    }


    .twodetail {
      position: relative; /* absolute 대신 relative 사용 */
      margin-top: 40px; /* 기본 위치에서 여백 추가 */
      width: 380px;
      text-align: center;
      left: 50%; transform: translateX(-50%);
      font-size: 12px;
      /* opacity: ${e=>e.text2?1:0};  */
      /* max-height: ${e=>e.text2?"200px":"0"}; */
      overflow: hidden; /* 요소가 숨겨질 때 넘침 방지 */
      /* transition: max-height 0.3s ease, opacity 0.3s ease; */
      word-break: keep-all;
      span {
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }

  }
`,ss=()=>((0,t.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,Dr.jsx)(Dr.Fragment,{children:(0,Dr.jsxs)(ls,{children:[(0,Dr.jsxs)("div",{className:"sampleinner",children:[(0,Dr.jsx)("a",{target:"_blank",href:"https://gumi-gomi.github.io/pub_sample2/build/",rel:"noopener noreferrer",children:(0,Dr.jsx)("div",{className:"one"})}),(0,Dr.jsxs)("p",{className:"onedetail",children:["\uae30\uc5c5\ud615 \ud648\ud398\uc774\uc9c0 \uc0d8\ud50c",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("span",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{})]})]}),(0,Dr.jsxs)("div",{className:"sampleinnertwo",children:[(0,Dr.jsx)("a",{target:"_blank",href:"https://gumigomi-illust.com",rel:"noopener noreferrer",children:(0,Dr.jsx)("div",{className:"three"})}),(0,Dr.jsxs)("p",{className:"twodetail",children:["\ucee8\uc149 \ud648\ud398\uc774\uc9c0 \uc0d8\ud50c",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{})]})]}),(0,Dr.jsxs)("div",{className:"sampleinnertwo",children:[(0,Dr.jsx)("a",{target:"_blank",href:"https://gumi-gomi.github.io/gaumian_pj/build/",rel:"noopener noreferrer",children:(0,Dr.jsx)("div",{className:"two"})}),(0,Dr.jsxs)("p",{className:"twodetail",children:["\uac00\uc0c1\uc758 \uc6d0\ub450\ud68c\uc0ac \uc0d8\ud50c\ud398\uc774\uc9c0",(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{}),(0,Dr.jsx)("br",{})]})]})]})})),us=sr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ha});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`,cs=sr.div`
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
`;const ds=function(){return(0,t.useEffect)((()=>{const e=()=>{const e=window.scrollY;console.log("Current scroll position:",e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,Dr.jsxs)(Dr.Fragment,{children:[(0,Dr.jsx)(us,{}),(0,Dr.jsxs)(cs,{children:[(0,Dr.jsx)(ga,{}),(0,Dr.jsxs)(he,{children:[(0,Dr.jsx)(fe,{path:"/",element:(0,Dr.jsx)(pa,{})}),(0,Dr.jsx)(fe,{path:"/sample",element:(0,Dr.jsx)(ss,{})})]}),(0,Dr.jsx)(ns,{})]})]})};a.createRoot(document.getElementById("root")).render((0,Dr.jsx)(Tr,{children:(0,Dr.jsx)(t.StrictMode,{children:(0,Dr.jsx)(ds,{})})}))})()})();
//# sourceMappingURL=main.293a7c7c.js.map