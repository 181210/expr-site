(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(A,t,e){"use strict";e.r(t);var n=e(0),o=e.n(n),r=e(141),i=e.n(r),s=e(140),a=e(6),h=e.n(a),d=e(161),g=e.n(d),p=function(A){function t(){var t;return(t=A.call(this)||this).state={progress:0},t}h()(t,A);var e=t.prototype;return e.componentDidMount=function(){var A=this;this.progressObserver=new g.a(function(t,e){A.setState({progress:100*e})})},e.componentWillUnmount=function(){this.progressObserver.destroy()},e.render=function(){var A={backgroundColor:"#0175d8",height:"5px",position:"fixed",top:0,left:0,zIndex:9,width:this.state.progress+"%"};return o.a.createElement("div",{className:"progress-bar",style:A})},t}(o.a.Component),c=e(144),l=e.n(c),f=e(162),u=e.n(f);function w(A){var t=A.data,e=A.location,n=t.markdownRemark,r="https://https://181192.github.io/expr-site";return o.a.createElement(s.a,{location:e},o.a.createElement("div",{className:"blog-post-container"},o.a.createElement(i.a,{title:"ExPr - "+n.frontmatter.title,meta:[{name:"description",content:""+n.frontmatter.ogDescription},{name:"keywords",content:""+n.frontmatter.ogKeywords},{property:"og:type",content:"website"},{property:"og:url",content:""+r+n.frontmatter.path},{property:"og:image",content:""+l.a},{property:"og:title",content:"ExPr | "+n.frontmatter.title},{property:"og:description",content:""+n.frontmatter.ogDescription}],link:[{rel:"shortcut icon",type:"image/png",href:""+u.a}]},o.a.createElement("script",{type:"application/ld+json"},'\n          {\n            "@context": "http://schema.org",\n            "@type": "NewsArticle",\n            "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'+r+n.frontmatter.path+'"\n            },\n            "headline": "'+n.frontmatter.title+'",\n            "name": "'+n.frontmatter.title+'",\n            "author": {\n              "@type": "Person",\n              "name": "'+n.frontmatter.author+'"\n            },\n            "datePublished": "'+n.frontmatter.dateUnformatted+'",\n            "dateModified": "'+n.frontmatter.dateUnformatted+'",\n            "image": [\n              "'+l.a+'",\n              "'+l.a+'",\n              "'+l.a+'"\n            ],\n            "publisher": {\n              "@type": "Organization",\n              "name": "ExPr",\n              "logo": {\n                "@type": "ImageObject",\n                "url": "'+r+'"\n              }\n            },\n            "description": "'+n.excerpt+'",\n            "articleSection": "'+n.excerpt+'",\n            "url": "'+r+n.frontmatter.path+'"\n          }\n        ')),o.a.createElement("div",{className:"blog-post"},o.a.createElement(p,null),o.a.createElement("h1",null,n.frontmatter.title),o.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:n.html}}))))}e.d(t,"default",function(){return w}),e.d(t,"pageQuery",function(){return m});var m="271043444"},161:function(A,t,e){A.exports=function(){"use strict";function A(){}var t=function(t){this._handleUpdate="function"==typeof t?t:A,this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y),this._onScroll=this._onScroll.bind(this),this._onResize=this._onResize.bind(this),window.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this._onResize)};return t.prototype._getViewportHeight=function(){return document.body.scrollHeight-window.innerHeight},t.prototype._getViewportWidth=function(){return document.body.scrollWidth-window.innerWidth},t.prototype._getProgress=function(){var A=void 0===window.scrollX?window.pageXOffset:window.scrollX,t=void 0===window.scrollY?window.pageYOffset:window.scrollY;return{x:0===this._viewportWidth?0:A/this._viewportWidth,y:0===this._viewportHeight?0:t/this._viewportHeight}},t.prototype._onScroll=function(){this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},t.prototype._onResize=function(){this._viewportHeight=this._getViewportHeight(),this._viewportWidth=this._getViewportWidth(),this._progress=this._getProgress(),this._handleUpdate(this._progress.x,this._progress.y)},t.prototype.trigger=function(){this._handleUpdate(this._progress.x,this._progress.y)},t.prototype.destroy=function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("resize",this._onResize),this._handleUpdate=null},t}()},162:function(A,t){A.exports="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAKMDAACjAwAAAAAAAAAAAADbfxSj3IQfdNyEH3TchB903IQfdNyEH3TchB903IQfdNyEH3TchB903IQfdN6IJXzchiB23YUid9yHI3vcgxym2HYCguSNLybchB903IQfdNyEH3TchB903IQfdNyEH3TchB9024UkawAAAADbfxW52n4SgtuAFo7bgBex3IMektp5C6TZdgNQ2XYDUNl2A1DZdgNQ2XYDUNl2A1DZdgNQ2XYDUNl2A1DZdgNQ2nwQb9l5CF3aegtg2XsObNuBF6rtkjcO3noAF956ABfeegAX24Idct2EHY3dgxwl3noAF956ABfafhKm234SqNV1ABjeegAX3noAF956ABfbgCQOAAAAAAAAAAAAAAAAAAAAAN2DIkTbgRqo/4CAAgAAAAAAAAAA3IIYn9uAFKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qpqDO6qVQ/fjzAw3IEXpu6qVQ/uqlUP/7+ABNuCGYfYeAbz2noLpduAFVT//wABAAAAAAAAAAAAAAAA/7+ABNl8EODbfA+M2XwPnNp7DNTbfA+M2noLqth2BXDbghmH3IIak9+GHD/Zewu32nwPigAAAAAAAAAAAAAAAMyZZgXbfxS/AAAAANuDHSPcgBWgAAAAANh0BELXdAJy24IZh9uBF44AAAAA24EWXdl6DcjfiisYAAAAAAAAAADbiCRP24IYfuOOKyTchiNf24AZhdidTg3egxpr3YMYf9x/FaHbfxOj//8AAdyDHHXdgxuO24AaMgAAAADcgRiC3IMasdt+Et3cgRuY3IIavdp+E9jbghmP24AWxtuAFtPbfxXd234U4NuAGI3bgBiN24EZjtuAGI3cgRiC3YMiJdp7ELTYdgX/2HUC/9h1Av/YdQL/2HYD/9h3B//ZeAj/2HUC/9h1Av/YdQL/2HUC/9h2Bf/aexC03YMiJQAAAAAAAAAA230Rh9l7DOfYdgT/2XcG/9l7DOfYdgP/2XgI/9h1A//YdQL/2HYE/9p6C9ragRhLAAAAAAAAAAAAAAAAAAAAANl8EHHhmD0q2n8Vg9h3Bf/YdgX/2HYE/9l5C+fYdwX/2XgH89t+E3ngiCM624stOd2AFlLchiBfAAAAAAAAAADZfBBx3IIZoduBGaLcgBSM2nwPp9h2Bf7YdgX+2nwPp9yNLB3ehR5c24IZj9yDHXPbhCBP24AVhgAAAAAAAAAA3H4UQdh1A5jYdQOY24AUQAAAAADbghw/3oQdPgAAAAAAAAAA3IUgYNuBGH/dhR9i238Tk96QLBcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANyGI1/bght63IEZe+aMJhQAAAAAAAAAAAAgAAAAAAAAAAAAAPGfAADAAwAAgAMAAJIRAACAAQAAAAAAAAAAAADAAwAAwAAAAMAAAADCYAAA/+EAAA=="}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-92b5d15f48e489597d37.js.map