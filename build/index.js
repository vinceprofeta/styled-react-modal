module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("styled-components")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BaseModalBackground=void 0;var o,r,i,a=(o=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center\n"],r=["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  justify-content: center\n"],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))),u=t(0),l=(i=u)&&i.__esModule?i:{default:i};n.BaseModalBackground=l.default.div(a)},function(e,n){e.exports=require("react-dom")},function(e,n){e.exports=require("react")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BaseModalBackground=n.ModalProvider=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=v(["",""],["",""]),a=v([""],[""]),u=t(3),l=f(u),c=f(t(2)),d=t(0),s=f(d),p=t(1);function f(e){return e&&e.__esModule?e:{default:e}}function v(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function y(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function h(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function b(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var m=l.default.createContext(null),k=m.Provider,g=m.Consumer,O=function(e){function n(e){y(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={modalNode:null,BackgroundComponent:p.BaseModalBackground},t.setModalNode=t.setModalNode.bind(t),t}return b(n,u.Component),r(n,[{key:"setModalNode",value:function(e){this.setState({modalNode:e})}},{key:"render",value:function(){return l.default.createElement(k,{value:{modalNode:this.state.modalNode,BackgroundComponent:this.state.BackgroundComponent}},this.props.children,l.default.createElement("div",{ref:this.setModalNode}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.backgroundComponent!==n.BackgroundComponent?{BackgroundComponent:e.backgroundComponent}:null}}]),n}(),w=function(e){function n(e){y(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.node=null,t.prevBodyOverflow=null,t.onKeydown=t.onKeydown.bind(t),t.onBackgroundClick=t.onBackgroundClick.bind(t),t.cleanUp=t.cleanUp.bind(t),t}return b(n,u.Component),r(n,[{key:"componentDidUpdate",value:function(e,n){e.isOpen!==this.props.isOpen&&(this.props.isOpen?this.props.isOpen&&(document.addEventListener("keydown",this.onKeydown),this.props.allowScroll||(this.prevBodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden")):this.cleanUp())}},{key:"componentWillUnmount",value:function(){this.props.isOpen&&this.cleanUp()}},{key:"cleanUp",value:function(){document.removeEventListener("keydown",this.onKeydown),this.props.allowScroll||(document.body.style.overflow=this.prevBodyOverflow||"")}},{key:"onKeydown",value:function(e){"Escape"===e.key&&this.props.onEscapeKeydown&&this.props.onEscapeKeydown(e)}},{key:"onBackgroundClick",value:function(e){this.node===e.target&&this.props.onBackgroundClick&&this.props.onBackgroundClick(e)}},{key:"render",value:function(){var e=this,n=this.props,t=n.isOpen,o=n.WrapperComponent,r=n.children,i=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(n,["isOpen","WrapperComponent","children"]);return l.default.createElement(g,null,function(n){var a=n.modalNode,u=n.BackgroundComponent;if(a&&u&&t)return c.default.createPortal(l.default.createElement(u,{onClick:e.onBackgroundClick,innerRef:function(n){e.node=n}},l.default.createElement(o,i,r)),a)})}}],[{key:"styled",value:function(){var e=s.default.div(i,d.css.apply(void 0,arguments))||s.default.div(a);return function(t){function i(){return y(this,i),h(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return b(i,u.Component),r(i,[{key:"render",value:function(){return l.default.createElement(n,o({WrapperComponent:e},this.props))}}]),i}()}}]),n}();n.default=w,n.ModalProvider=O,n.BaseModalBackground=p.BaseModalBackground}]);