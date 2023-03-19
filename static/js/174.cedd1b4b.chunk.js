"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{4942:function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return o}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},8174:function(e,t,n){n.d(t,{Ix:function(){return k},Am:function(){return H}});var o=n(4942),r=n(9439),a=n(1413);function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=n(3433),c=n(2791);function u(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var l=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(o&&(o+=" "),o+=t);return o},d=["theme","type"],f=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},m=function(e){return"string"==typeof e},v=function(e){return"function"==typeof e},g=function(e){return m(e)||v(e)?e:null},y=function(e){return(0,c.isValidElement)(e)||m(e)||v(e)||p(e)};function h(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,a=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,s.Z)(n)))};(e=t.classList).add.apply(e,(0,s.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function E(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var T={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},b=function(e){var t=e.theme,n=e.type,o=i(e,d);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},O={info:function(e){return c.createElement(b,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(b,(0,a.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(b,(0,a.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(b,(0,a.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],d=u[1],h=(0,c.useRef)(null),b=(0,c.useRef)(new Map).current,C=function(e){return-1!==l.indexOf(e)},I=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:C,getToast:function(e){return b.get(e)}}).current;function _(e){var t=e.containerId;!I.props.limit||t&&I.containerId!==t||(I.count-=I.queue.length,I.queue=[])}function Z(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function L(){var e=I.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var o=t.delay,r=t.staleId,s=i(t,f);if(y(e)&&!function(e){return!h.current||I.props.enableMultiContainer&&e.containerId!==I.props.containerId||b.has(e.toastId)&&null==e.updateId}(s)){var u=s.toastId,l=s.updateId,d=s.data,C=I.props,_=function(){return Z(u)},w=null==l;w&&I.count++;var R,P,k=(0,a.Z)((0,a.Z)((0,a.Z)({},C),{},{style:C.toastStyle,key:I.toastKey++},s),{},{toastId:u,updateId:l,data:d,closeToast:_,isIn:!1,className:g(s.className||C.toastClassName),bodyClassName:g(s.bodyClassName||C.bodyClassName),progressClassName:g(s.progressClassName||C.progressClassName),autoClose:!s.isLoading&&(R=s.autoClose,P=C.autoClose,!1===R||p(R)&&R>0?R:P),deleteToast:function(){var e=E(b.get(u),"removed");b.delete(u),T.emit(4,e);var t=I.queue.length;if(I.count=null==u?I.count-I.displayedToast:I.count-1,I.count<0&&(I.count=0),t>0){var o=null==u?I.props.limit:1;if(1===t||1===o)I.displayedToast++,L();else{var r=o>t?t:o;I.displayedToast=r;for(var a=0;a<r;a++)L()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(v(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):m(r)||p(r)?a=r:o?a=O.spinner():function(e){return e in O}(n)&&(a=O[n](i))),a}(k),v(s.onOpen)&&(k.onOpen=s.onOpen),v(s.onClose)&&(k.onClose=s.onClose),k.closeButton=C.closeButton,!1===s.closeButton||y(s.closeButton)?k.closeButton=s.closeButton:!0===s.closeButton&&(k.closeButton=!y(C.closeButton)||C.closeButton);var x=e;(0,c.isValidElement)(e)&&!m(e.type)?x=(0,c.cloneElement)(e,{closeToast:_,toastProps:k,data:d}):v(e)&&(x=e({closeToast:_,toastProps:k,data:d})),C.limit&&C.limit>0&&I.count>C.limit&&w?I.queue.push({toastContent:x,toastProps:k,staleId:r}):p(o)?setTimeout((function(){N(x,k,r)}),o):N(x,k,r)}}function N(e,t,n){var o=t.toastId;n&&b.delete(n);var r={content:e,props:t};b.set(o,r),d((function(e){return[].concat((0,s.Z)(e),[o]).filter((function(e){return e!==n}))})),T.emit(4,E(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return I.containerId=e.containerId,T.cancelEmit(3).on(0,w).on(1,(function(e){return h.current&&Z(e)})).on(5,_).emit(2,I),function(){b.clear(),T.emit(3,I)}}),[]),(0,c.useEffect)((function(){I.props=e,I.isToastActive=C,I.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:h,isToastActive:C}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Z(e){var t=(0,c.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,g=e.pauseOnHover,y=e.closeToast,h=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",L),document.addEventListener("touchmove",Z),document.addEventListener("touchend",L);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=_(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?C():O()}}function O(){a(!0)}function C(){a(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&C(),f.x=I(t),f.y=_(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function L(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",L);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",O,{once:!0}),v(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return m&&g&&(w.onMouseEnter=C,w.onMouseLeave=O),E&&(w.onClick=function(e){h&&h(e),f.canCloseOnClick&&y()}),{playToast:O,pauseToast:C,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:w}}function L(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){var t=e.delay,n=e.isRunning,r=e.closeToast,i=e.type,s=void 0===i?"default":i,u=e.hide,d=e.className,f=e.style,p=e.controlledProgress,m=e.progress,g=e.rtl,y=e.isIn,h=e.theme,E=u||p&&0===m,T=(0,a.Z)((0,a.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});p&&(T.transform="scaleX(".concat(m,")"));var b=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),O=v(d)?d({rtl:g,type:s,defaultClassName:b}):l(b,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:O,style:T},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){y&&r()}))}var N=function(e){var t=Z(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,i=t.eventHandlers,s=e.closeButton,u=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,y=e.transition,h=e.position,E=e.className,T=e.style,b=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,I=e.progressStyle,_=e.updateId,N=e.role,R=e.progress,P=e.rtl,k=e.toastId,x=e.deleteToast,M=e.isIn,D=e.isLoading,A=e.iconOut,B=e.closeOnClick,j=e.theme,z=l("Toastify__toast","Toastify__toast-theme--".concat(j),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":B}),S=v(E)?E({rtl:P,position:h,type:p,defaultClassName:z}):l(z,E),F=!!R||!d,H={closeToast:g,type:p,theme:j},q=null;return!1===s||(q=v(s)?s(H):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,H):L(H)),c.createElement(y,{isIn:M,done:x,position:h,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:k,onClick:f,className:S},i),{},{style:T,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},M&&{role:N}),{},{className:v(b)?b({type:p}):l("Toastify__toast-body",b),style:O}),null!=A&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},A),c.createElement("div",null,u)),q,c.createElement(w,(0,a.Z)((0,a.Z)({},_&&!F?{key:"pb-".concat(_)}:{}),{},{rtl:P,theme:j,delay:d,isRunning:n,isIn:M,closeToast:g,hide:m,type:p,style:I,className:C,controlledProgress:F,progress:R||0}))))},R=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},P=h(R("bounce",!0)),k=(h(R("slide",!0)),h(R("zoom")),h(R("flip")),(0,c.forwardRef)((function(e,t){var n=C(e),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=e.className,u=e.style,d=e.rtl,f=e.containerId;function p(e){var t=l("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":d});return v(s)?s({position:e,rtl:d,defaultClassName:t}):l(t,g(s))}return(0,c.useEffect)((function(){t&&(t.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,a.Z)({},u):(0,a.Z)((0,a.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return c.createElement(N,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:P,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var x,M=new Map,D=[],A=1;function B(){return""+A++}function j(e){return e&&(m(e.toastId)||p(e.toastId))?e.toastId:B()}function z(e,t){return M.size>0?T.emit(0,e,t):D.push({content:e,options:t}),t.toastId}function S(e,t){return(0,a.Z)((0,a.Z)({},t),{},{type:t&&t.type||e,toastId:j(t)})}function F(e){return function(t,n){return z(t,S(e,n))}}function H(e,t){return z(e,S("default",t))}H.loading=function(e,t){return z(e,S("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,r=t.pending,i=t.error,s=t.success;r&&(o=m(r)?H.loading(r,n):H.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:e},c),n),{},{data:r}),s=m(t)?{render:t}:t;return o?H.update(o,(0,a.Z)((0,a.Z)({},i),s)):H(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}H.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},H.success=F("success"),H.info=F("info"),H.error=F("error"),H.warning=F("warning"),H.warn=H.warning,H.dark=function(e,t){return z(e,S("default",(0,a.Z)({theme:"dark"},t)))},H.dismiss=function(e){M.size>0?T.emit(1,e):D=D.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},H.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=M.get(n||x);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({},o),t),{},{toastId:t.toastId||e,updateId:B()});i.toastId!==e&&(i.staleId=e);var s=i.render||r;delete i.render,z(s,i)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return T.on(4,e),function(){T.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(e){x=e.containerId||e,M.set(x,e),D.forEach((function(e){T.emit(0,e.content,e.options)})),D=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&T.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=174.cedd1b4b.chunk.js.map