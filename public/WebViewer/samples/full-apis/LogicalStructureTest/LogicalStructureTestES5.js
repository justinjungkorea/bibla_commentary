function _asyncToGenerator(e){return function(){var c=e.apply(this,arguments);return new Promise(function(o,s){return function t(e,n){try{var r=c[e](n),a=r.value}catch(e){return void s(e)}if(!r.done)return Promise.resolve(a).then(function(e){t("next",e)},function(e){t("throw",e)});o(a)}("next")})}}!function(e){"use strict";var _,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},a=t.iterator||"@@iterator",n=t.toStringTag||"@@toStringTag",r="object"==typeof module,o=e.regeneratorRuntime;if(o)r&&(module.exports=o);else{(o=e.regeneratorRuntime=r?module.exports:{}).wrap=c;var f="suspendedStart",p="suspendedYield",x="executing",g="completed",h={},s=l.prototype=v.prototype;u.prototype=s.constructor=l,l.constructor=u,l[n]=u.displayName="GeneratorFunction",o.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,n in e||(e[n]="GeneratorFunction")),e.prototype=Object.create(s),e},o.awrap=function(e){return new d(e)},m(b.prototype),o.async=function(e,t,n,r){var a=new b(c(e,t,n,r));return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},m(s),s[a]=function(){return this},s[n]="Generator",s.toString=function(){return"[object Generator]"},o.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=_,this.done=!1,this.delegate=null,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=_)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return o.type="throw",o.arg=n,r.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var a=this.tryEntries[t],o=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?this.next=a.finallyLoc:this.complete(o),h},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},h}}}function c(e,t,n,r){var s,c,i,u,a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),l=new T(r||[]);return o._invoke=(s=e,c=n,i=l,u=f,function(e,t){if(u===x)throw new Error("Generator is already running");if(u===g){if("throw"===e)throw t;return D()}for(;;){var n=i.delegate;if(n){if("return"===e||"throw"===e&&n.iterator[e]===_){i.delegate=null;var r=n.iterator.return;if(r){var a=y(r,n.iterator,t);if("throw"===a.type){e="throw",t=a.arg;continue}}if("return"===e)continue}var a=y(n.iterator[e],n.iterator,t);if("throw"===a.type){i.delegate=null,e="throw",t=a.arg;continue}e="next",t=_;var o=a.arg;if(!o.done)return u=p,o;i[n.resultName]=o.value,i.next=n.nextLoc,i.delegate=null}if("next"===e)i.sent=i._sent=t;else if("throw"===e){if(u===f)throw u=g,t;i.dispatchException(t)&&(e="next",t=_)}else"return"===e&&i.abrupt("return",t);u=x;var a=y(s,c,i);if("normal"===a.type){u=i.done?g:p;var o={value:a.arg,done:i.done};if(a.arg!==h)return o;i.delegate&&"next"===e&&(t=_)}else"throw"===a.type&&(u=g,e="throw",t=a.arg)}}),o}function y(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function v(){}function u(){}function l(){}function m(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function d(e){this.arg=e}function b(c){function i(e,t,n,r){var a=y(c[e],c,t);if("throw"!==a.type){var o=a.arg,s=o.value;return s instanceof d?Promise.resolve(s.arg).then(function(e){i("next",e,n,r)},function(e){i("throw",e,n,r)}):Promise.resolve(s).then(function(e){o.value=e,n(o)},r)}r(a.arg)}var t;"object"==typeof process&&process.domain&&(i=process.domain.bind(i)),this._invoke=function(n,r){function e(){return new Promise(function(e,t){i(n,r,e,t)})}return t=t?t.then(e,e):e()}}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=_,e.done=!0,e};return r.next=r}}return{next:D}}function D(){return{value:_,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(e){"use strict";window.runLogicalStructureTest=function(){var r,n,a,o,e,h=function(e,t){if(e.str){for(var n="",r=e.indent,a=0;a<r;++a)n+="  ";console.log(n+e.str)}e.str="",e.indent=t},y=(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,r){var a,o,s,c,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isValid();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return h(r,n++),e.next=7,t.getType();case 7:return e.t0=e.sent,r.str+="Type: "+e.t0,e.next=11,t.hasTitle();case 11:if(e.sent)return e.next=14,t.getTitle();e.next=16;break;case 14:e.t1=e.sent,r.str+=". Title: "+e.t1;case 16:return e.next=18,t.getNumKids();case 18:a=e.sent,o=0;case 20:if(o<a)return e.next=23,t.isContentItem(o);e.next=67;break;case 23:if(e.sent)return e.next=26,t.getAsContentItem(o);e.next=56;break;case 26:return s=e.sent,e.next=29,s.getType();case 29:return c=e.sent,e.next=32,s.getPage();case 32:return i=e.sent,h(r,n),e.next=36,i.getIndex();case 36:e.t2=e.sent,r.str+="Content Item. Part of page #"+e.t2,h(r,n),e.t3=c,e.next=e.t3===PDFNet.ContentItem.Type.e_MCID?42:e.t3===PDFNet.ContentItem.Type.e_MCR?42:e.t3===PDFNet.ContentItem.Type.e_OBJR?47:53;break;case 42:return e.next=44,s.getMCID();case 44:return e.t4=e.sent,r.str+="MCID: "+e.t4,e.abrupt("break",54);case 47:return r.str+="OBJR ",e.next=50,s.getRefObj();case 50:return(u=e.sent)&&(r.str+="- Referenced Object#: "+u.getObjNum()),e.abrupt("break",54);case 53:return e.abrupt("break",54);case 54:e.next=64;break;case 56:return e.t5=y,e.next=59,t.getAsStructElem(o);case 59:return e.t6=e.sent,e.t7=n,e.t8=r,e.next=64,(0,e.t5)(e.t6,e.t7,e.t8);case 64:++o,e.next=20;break;case 67:case"end":return e.stop()}},e,void 0)})),function(e,t,n){return r.apply(this,arguments)}),v=(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0;case 1:return e.next=3,t.next();case 3:if(r=e.sent)return e.next=6,r.getType();e.next=51;break;case 6:if((a=e.sent)!==PDFNet.Element.Type.e_path&&a!==PDFNet.Element.Type.e_text&&a!==PDFNet.Element.Type.e_path){e.next=49;break}e.t0=a,e.next=e.t0===PDFNet.Element.Type.e_path?11:e.t0===PDFNet.Element.Type.e_text?13:e.t0===PDFNet.Element.Type.e_form?19:21;break;case 11:return n.str+="\nPATH: ",e.abrupt("break",21);case 13:return e.next=15,r.getTextString();case 15:return e.t1=e.sent,e.t2="\nTEXT: "+e.t1,n.str+=e.t2+"\n",e.abrupt("break",21);case 19:return n.str+="\nFORM XObject: ",e.abrupt("break",21);case 21:return e.next=23,r.getParentStructElement();case 23:return o=e.sent,e.next=26,o.isValid();case 26:if(e.sent)return e.next=29,o.getType();e.next=49;break;case 29:return e.t3=e.sent,e.t4=" Type: "+e.t3,e.t5=e.t4+", MCID: ",e.next=34,r.getStructMCID();case 34:return e.t6=e.sent,n.str+=e.t5+e.t6,e.next=38,o.hasTitle();case 38:if(e.sent)return e.next=41,o.getTitle();e.next=43;break;case 41:e.t7=e.sent,n.str+=". Title: "+e.t7;case 43:return e.next=45,o.getSDFObj();case 45:return e.next=47,e.sent.getObjNum();case 47:e.t8=e.sent,n.str+=", Obj#: "+e.t8;case 49:e.next=1;break;case 51:case"end":return e.stop()}},e,void 0)})),function(e,t){return n.apply(this,arguments)}),m=(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0;case 1:return e.next=3,t.next();case 3:if(r=e.sent)return e.next=6,r.getStructMCID();e.next=21;break;case 6:if(a=e.sent,e.t0=0<=a,e.t0)return e.next=11,r.getType();e.next=14;break;case 11:e.t1=e.sent,e.t2=PDFNet.Element.Type.e_text,e.t0=e.t1===e.t2;case 14:if(e.t0)return e.next=17,r.getTextString();e.next=19;break;case 17:o=e.sent,a in n?n[a]+=o:n[a]=o;case 19:e.next=1;break;case 21:case"end":return e.stop()}},e,void 0)})),function(e,t){return a.apply(this,arguments)}),d=(o=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,r,a){var o,s,c,i,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isValid();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return h(a,r),e.next=7,t.getType();case 7:return e.t0=e.sent,a.str+="<"+e.t0,e.next=11,t.hasTitle();case 11:if(e.sent)return e.next=14,t.getTitle();e.next=17;break;case 14:e.t1=e.sent,e.t2=' title="'+e.t1,a.str+=e.t2+'"';case 17:return a.str+=">",e.next=20,t.getNumKids();case 20:o=e.sent,s=0;case 22:if(s<o)return e.next=25,t.isContentItem(s);e.next=59;break;case 25:if(e.sent)return e.next=28,t.getAsContentItem(s);e.next=47;break;case 28:return c=e.sent,e.next=31,c.getType();case 31:if(e.t3=e.sent,e.t4=PDFNet.ContentItem.Type.e_MCID,e.t3===e.t4)return e.next=36,c.getPage();e.next=45;break;case 36:return e.next=38,e.sent.getIndex();case 38:if(i=e.sent,u=n[i])return e.next=43,c.getMCID();e.next=45;break;case 43:(l=e.sent)in u&&(a.str+=u[l]);case 45:e.next=56;break;case 47:return e.t5=d,e.next=50,t.getAsStructElem(s);case 50:return e.t6=e.sent,e.t7=n,e.t8=r+1,e.t9=a,e.next=56,(0,e.t5)(e.t6,e.t7,e.t8,e.t9);case 56:++s,e.next=22;break;case 59:return h(a,r),e.next=62,t.getType();case 62:e.t10=e.sent,e.t11="</"+e.t10,a.str+=e.t11+">";case 65:case"end":return e.stop()}},e,void 0)})),function(e,t,n,r){return o.apply(this,arguments)}),t=(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,o,s,c,i,u,l,_,f,p,x,g;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"../TestFiles/",t={str:""},e.prev=2,e.next=5,PDFNet.PDFDoc.createFromURL("../TestFiles/tagged.pdf");case 5:return(n=e.sent).initSecurityHandler(),a=r=null,console.log("____________________________________________________________"),console.log("Sample 1 - Traverse logical structure tree..."),e.next=13,n.getStructTree();case 13:return a=e.sent,e.next=16,a.isValid();case 16:if(e.sent)return console.log("Document has a StructTree root."),o=0,e.next=21,a.getNumKids();e.next=35;break;case 21:s=e.sent;case 22:if(o<s)return e.t0=y,e.next=26,a.getKid(o);e.next=33;break;case 26:return e.t1=e.sent,e.t2=t,e.next=30,(0,e.t0)(e.t1,0,e.t2);case 30:++o,e.next=22;break;case 33:e.next=36;break;case 35:console.log("This document does not contain any logical structure.");case 36:return h(t,0),console.log("Done 1."),console.log("____________________________________________________________"),console.log("Sample 2 - Get parent logical structure elements from"),console.log("layout elements."),e.next=43,PDFNet.ElementReader.create();case 43:return r=e.sent,e.next=46,n.getPageIterator();case 46:c=e.sent;case 47:return e.next=49,c.hasNext();case 49:if(e.sent)return e.t3=r,e.next=53,c.current();e.next=61;break;case 53:return e.t4=e.sent,e.t3.beginOnPage.call(e.t3,e.t4),e.next=57,v(r,t);case 57:r.end();case 58:c.next(),e.next=47;break;case 61:return h(t,0),console.log("Done 2."),console.log("____________________________________________________________"),console.log("Sample 3 - 'XML style' extraction of PDF logical structure and page content."),i={},e.next=68,n.getPageIterator();case 68:u=e.sent;case 69:return e.next=71,u.hasNext();case 71:if(e.sent)return e.next=74,u.current();e.next=87;break;case 74:return l=e.sent,r.beginOnPage(l),e.next=78,l.getIndex();case 78:return _=e.sent,f={},i[_]=f,e.next=83,m(r,f);case 83:r.end();case 84:u.next(),e.next=69;break;case 87:return e.next=89,n.getStructTree();case 89:return a=e.sent,e.next=92,a.isValid();case 92:if(e.sent)return p=0,e.next=96,a.getNumKids();e.next=109;break;case 96:x=e.sent;case 97:if(p<x)return e.t5=d,e.next=101,a.getKid(p);e.next=109;break;case 101:return e.t6=e.sent,e.t7=i,e.t8=t,e.next=106,(0,e.t5)(e.t6,e.t7,0,e.t8);case 106:++p,e.next=97;break;case 109:return h(t,0),console.log("Done 3."),e.next=113,n.saveMemoryBuffer(0);case 113:g=e.sent,saveBufferAsPDFDoc(g,"bookmark.pdf"),e.next=120;break;case 117:e.prev=117,e.t9=e.catch(2),console.log(e.t9);case 120:case"end":return e.stop()}},e,void 0,[[2,117]])})),function(){return e.apply(this,arguments)});PDFNet.runWithCleanup(t,window.sampleL)}}();