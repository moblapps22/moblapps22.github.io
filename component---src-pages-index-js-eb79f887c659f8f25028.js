(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("V+eJ"),n("2Spj"),n("8+KV"),n("HAE/");var a=!("undefined"==typeof window||!window.document||!window.document.createElement);var o=void 0;function r(){return void 0===o&&(o=function(){if(!a)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(o){}return e}()),o}function i(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var n,a=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[a]||(this.events[a]={handlers:[],handleEvent:void 0},this.events[a].nextHandlers=this.events[a].handlers),this.events[a]},l.prototype.handleEvent=function(e,t,n){var a=this.getEventHandlers(e,t);a.handlers=a.nextHandlers,a.handlers.forEach((function(e){e&&e(n)}))},l.prototype.add=function(e,t,n){var a=this,o=this.getEventHandlers(e,n);i(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,o.handleEvent,n)),o.nextHandlers.push(t);var r=!0;return function(){if(r){r=!1,i(o);var l=o.nextHandlers.indexOf(t);o.nextHandlers.splice(l,1),0===o.nextHandlers.length&&(a.target&&a.target.removeEventListener(e,o.handleEvent,n),o.handleEvent=void 0)}}};function s(e,t,n,a){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new l(e));var o=function(e){if(e)return r()?e:!!e.capture}(a);return e.__consolidated_events_handlers__.add(t,n,o)}},HKvO:function(e,t){e.exports="data:image/png;base64,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"},ILy0:function(e,t,n){e.exports=n.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"},RXBc:function(e,t,n){"use strict";n.r(t);n("Wbzz");var a=n("q1tI"),o=n.n(a),r=n("TJpk"),i=n.n(r),l=n("uuth"),s=n("ILy0"),c=n.n(s),u=n("4Rh8"),d=n.n(u),p=(n("WkIh"),n("ZnJG"),n("69lQ"),function(e){return o.a.createElement("header",{className:"main-header",id:"header"},o.a.createElement("h1",{class:"animated fadeInDown delay-07s"}," ",o.a.createElement("img",{src:d.a,alt:""})),o.a.createElement("ul",{class:"we-create animated fadeInUp delay-1s"},o.a.createElement("li",null,"Devops Engineering"),o.a.createElement("li",null,"Comprehensive AWS Expertise"),o.a.createElement("li",null,"Consulting CTO")),o.a.createElement("a",{class:"servicelink",href:"#services"},o.a.createElement("i",{class:"fa fa-angle-down fa-4x"})),o.a.createElement("br",null))}),m=n("Bl7J"),f=(n("q4sD"),n("8XYx"),n("tiWs")),v=n("a5/R"),h=n("nsn4"),w=n("9a8N"),A=n("F66N"),y=n("arvA"),b=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return o.a.createElement(f.a,{sticky:"top",color:"light",light:!0,expand:"md",className:"d-flex justify-content-center",fix:!0},o.a.createElement(v.a,{onClick:function(){return r(!n)}}),o.a.createElement(h.a,{isOpen:n,navbar:!0},o.a.createElement("div",{style:{width:"100%",border:"0px gray",display:"flex",justifyContent:"center",padding:"0px",position:"relative",background:"#fff",boxShadow:"0 4px 5px -3px #ececec",borderBottom:"1px solid #dddddd"}},o.a.createElement(w.a,{className:"justify-content-center",navbar:!0},o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"#services"},"Services")),o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"#clients"},"Clients")),o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"#projects"},"Projects")),o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"#about"},"About")),o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"blog"},"Blog")),o.a.createElement(A.a,null,o.a.createElement(y.a,{href:"#contact"},"Contact"))))))},E=n("dmPU"),g=n.n(E),B=n("HKvO"),N=n.n(B),k=n("b1pk"),O=n.n(k);var T=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(m.a,null,o.a.createElement(i.a,{title:"Gatsby Starter - Stellar"}),o.a.createElement(p,null),o.a.createElement(l.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),o.a.createElement(b,{sticky:this.state.stickyNav}),o.a.createElement("div",{id:"main"},o.a.createElement("section",{id:"intro",className:"main-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{class:"servicelink col-md-3 "},o.a.createElement("img",{src:g.a,alt:""}),o.a.createElement("br",null),o.a.createElement("img",{src:N.a,alt:""}),o.a.createElement("br",null),o.a.createElement("img",{src:O.a,alt:""})),o.a.createElement("div",{className:"col-md-9"},o.a.createElement("h6",null,"When your website ",o.a.createElement("b",null,"IS your business"),", revenue depends on reliable, automated infrastructure and proven process. ",o.a.createElement("b",null,"Continuous uptime, data security, speed and cost efficiency")," are critical to your success.",o.a.createElement("br",null),o.a.createElement("br",null),"Bring 20 years of web engineering experience to your critical systems so you can ",o.a.createElement("b",null,"save money, scale quickly, maximize developer productivity")," and free your team to focus on features.",o.a.createElement("br",null),o.a.createElement("br",null),"You have a unique product, business and team. I listen to your priorities, assess your specific technical needs and bring a practical approach to build the ",o.a.createElement("b",null,"exact solution that works for you."))))),o.a.createElement("section",{id:"services",className:"main"},o.a.createElement("div",{className:"spotlight"},o.a.createElement("div",{className:"content"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Services")),o.a.createElement("p",null,"Every project is completely outlined in the proposal with key milestones and delivery dates. You always know what to expect because my primary focus is on deliverables and deadlines.")),o.a.createElement("span",{className:"image"},o.a.createElement("img",{src:c.a,alt:""})))),o.a.createElement("section",{id:"clients",className:"main special"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Clients")),o.a.createElement("ul",{className:"features"},o.a.createElement("li",null,o.a.createElement("span",{className:"icon major style1 fa-code"}),o.a.createElement("h3",null,"Tinyhop"),o.a.createElement("p",null,"Dave recently helped Tinybop with a major site migration on an extremely tight timeline. At all points in the project, he was extremely communicative and thorough... Dave's thoughtfulness about his work is evident, and extends to even the tiniest of details... I would love to work with Dave again in the future and would be quick to recommend him and his work.")),o.a.createElement("li",null,o.a.createElement("span",{className:"icon major style3 fa-copy"}),o.a.createElement("h3",null,"Deal state"),o.a.createElement("p",null,"Dave’s knowledge of AWS is ridiculous and he’s a great communicator. He quickly became an invaluable member of DealStat’s small team during our engagement together, which included helping architect our web application, optimize security and processing time, and automate deployments.")),o.a.createElement("li",null,o.a.createElement("span",{className:"icon major style5 fa-diamond"}),o.a.createElement("h3",null,"Dolor nullam"),o.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")))),o.a.createElement("section",{id:"projects",className:"main special"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"SEAMLESS WEBSITE CLOUD MIGRATION"),o.a.createElement("p",null,"My client needed to move a website receiving over 2.5 million requests using 250 GB of bandwidth per day into their AWS account within 8 weeks. The Linux, PHP & other libraries in use were several versions behind. Some code had up to 15 years of revisions to update and move to a new version control system. Even with limited time, I built a redundant, secure architecture leveraging multiple availability zones & separate VPCs. I upgraded and tested all major software versions and implemented a new deployment system with separate production, staging & development environments. Creative DNS + load balancing allowed us to complete a zero-downtime migration during transfer of domain name ownership.",o.a.createElement("br",null),"The Results: The new site can handle more traffic at a lower cost with fault-tolerance and fully documented configuration management and monitoring.")),o.a.createElement("p",{className:"content"}),o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"SERVERLESS AUTOMATION"),o.a.createElement("p",null,"I was engaged to move a customer API from another cloud provider into Amazon Web Services. The client was a small startup with no full-time devops engineers. The main requirement was to lower response time to under 200ms. I implemented Lambda + API Gateway + a custom deployment script to avoid setting up systems their team would have to monitor, moving their focus away from customer satisfaction. Because of some service limitations, I deployed a custom proxy solution requiring very little maintenance for the lowest possible latency utilizing the AWS Region closest to the user",o.a.createElement("br",null),"The Results: A faster site with fewer systems and easy global deployment any engineer can use."))),o.a.createElement("section",{id:"about",className:"main"},o.a.createElement("div",{className:"spotlight"},o.a.createElement("div",{className:"content"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"About")),o.a.createElement("p",null,"DS President My name is DS and I have been a systems, database and network engineer for over 20 years. I have been developing web platforms with multiple languages and services since the early days of the internet. I was the first Devops engineer at FiftyThree, backed by Andreessen Horowitz and New Enterprise Associates (NEA). I have also worked with multiple venture-backed startups. A specialist in AWS technologies, linux, databases, security and backend development for many years, I also regularly add to my skill set. While always looking for ways to improve my craft in a rapidly advancing industry, I'm also very aware that the bottom line is team productivity. Having worked with companies and stakeholders in a variety of industries, I understand how to prioritize client needs, deadlines and cost considerations. Infrastructure needs to be well organized, fault-tolerant and easy to use while meeting product and budget needs. Working at all levels of development from intern to manager has taught me how to listen and respond to every situation uniquely and apply creative new solutions where necessary."),o.a.createElement("ul",{className:"actions"})),o.a.createElement("span",{className:"image"},o.a.createElement("img",{src:c.a,alt:""}))))))},a}(o.a.Component);t.default=T},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},b1pk:function(e,t){e.exports="data:image/png;base64,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"},dmPU:function(e,t){e.exports="data:image/png;base64,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"},qT12:function(e,t,n){"use strict";n("rE2o"),n("ioFf");var a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,r=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,c=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,p=a?Symbol.for("react.concurrent_mode"):60111,m=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,v=a?Symbol.for("react.suspense_list"):60120,h=a?Symbol.for("react.memo"):60115,w=a?Symbol.for("react.lazy"):60116,A=a?Symbol.for("react.block"):60121,y=a?Symbol.for("react.fundamental"):60117,b=a?Symbol.for("react.responder"):60118,E=a?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case p:case i:case s:case l:case f:return e;default:switch(e=e&&e.$$typeof){case u:case m:case w:case h:case c:return e;default:return t}}case r:return t}}}function B(e){return g(e)===p}t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=m,t.Fragment=i,t.Lazy=w,t.Memo=h,t.Portal=r,t.Profiler=s,t.StrictMode=l,t.Suspense=f,t.isAsyncMode=function(e){return B(e)||g(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return g(e)===u},t.isContextProvider=function(e){return g(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return g(e)===m},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===w},t.isMemo=function(e){return g(e)===h},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===l},t.isSuspense=function(e){return g(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===l||e===f||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===m||e.$$typeof===y||e.$$typeof===b||e.$$typeof===E||e.$$typeof===A)},t.typeOf=g},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));n("2Spj"),n("V+eJ"),n("/SS/"),n("hHhE"),n("HAE/");var a=n("1TsT"),o=(n("17x9"),n("q1tI")),r=n.n(o),i=n("TOwV");function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){var n,a=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof a)return a;var o=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof o?o*t:void 0}function p(e){return"string"==typeof e.type}var m;var f=[];function v(e){f.push(e),m||(m=setTimeout((function(){var e;for(m=null;e=f.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=f.indexOf(e);-1!==n&&(f.splice(n,1),!f.length&&m&&(clearTimeout(m),m=null))}}}var h={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},w=function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,s(n).call(this,e))).refElement=function(e){t._ref=e},t}var o,m,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,t),o=n,(m=[{key:"componentDidMount",value:function(){var e=this;n.getWindow()&&(this.cancelOnNextTick=v((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!p(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(a.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(a.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=v((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,a=t.scrollableAncestor;if(a)return function(t){return"window"===t?e.window:t}(a);for(var o=this._ref;o.parentNode;){if((o=o.parentNode)===document.body)return window;var r=window.getComputedStyle(o),i=(n?r.getPropertyValue("overflow-x"):r.getPropertyValue("overflow-y"))||r.getPropertyValue("overflow");if("auto"===i||"scroll"===i)return o}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),a=this._previousPosition,o=this.props,r=(o.debug,o.onPositionChange),i=o.onEnter,l=o.onLeave,s=o.fireOnRapidScroll;if(this._previousPosition=n,a!==n){var c={currentPosition:n,previousPosition:a,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};r.call(this,c),"inside"===n?i.call(this,c):"inside"===a&&l.call(this,c),s&&("below"===a&&"above"===n||"above"===a&&"below"===n)&&(i.call(this,{currentPosition:"inside",previousPosition:a,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),l.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,a=n.horizontal,o=(n.debug,this._ref.getBoundingClientRect()),r=o.left,i=o.top,l=o.right,s=o.bottom,c=a?r:i,u=a?l:s;this.scrollableAncestor===window?(e=a?window.innerWidth:window.innerHeight,t=0):(e=a?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=a?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var p=this.props,m=p.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+d(p.topOffset,e),viewportBottom:t+e-d(m,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?p(t)||Object(i.isForwardRef)(t)?r.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):r.a.cloneElement(t,{innerRef:this.refElement}):r.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&l(o.prototype,m),f&&l(o,f),n}(r.a.PureComponent);w.above="above",w.below="below",w.inside="inside",w.invisible="invisible",w.getWindow=function(){if("undefined"!=typeof window)return window},w.defaultProps=h,w.displayName="Waypoint"}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-eb79f887c659f8f25028.js.map