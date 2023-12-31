"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[931],{931:(yt,G,g)=>{g.d(G,{M:()=>O});var l=g(6236),f=g(5879),x=g(4414);const D=["chart"],_=function(){return[]};let O=(()=>{class p{constructor(){this.tasks=[{id:"1",title:"Check patient report",done:!0,priority:"High"},{id:"2",title:"Request for festivle holiday",done:!1,priority:"High"},{id:"3",title:"Order new medicine stock",done:!1,priority:"Low"},{id:"4",title:"Remind for lunch in hotel",done:!0,priority:"Normal"},{id:"5",title:"Conference in london",done:!1,priority:"High"},{id:"6",title:"Announcement for",done:!1,priority:"Normal"},{id:"7",title:"call bus driver",done:!0,priority:"High"},{id:"8",title:"Web service data load issue",done:!1,priority:"High"},{id:"9",title:"Java compile error",done:!1,priority:"Low"},{id:"10",title:"Integrate project with spring boot",done:!0,priority:"High"}]}drop(b){(0,l.bA)(this.tasks,b.previousIndex,b.currentIndex)}toggle(b){b.done=!b.done}ngOnInit(){this.chart1(),this.chart2(),this.chart3()}chart1(){this.areaChartOptions={series:[{name:"New Patients",data:[31,40,28,51,42,85,77]},{name:"Old Patients",data:[11,32,45,32,34,52,41]}],chart:{height:350,type:"area",toolbar:{show:!1},foreColor:"#9aa0ac"},colors:["#7D4988","#66BB6A"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},grid:{show:!0,borderColor:"#9aa0ac",strokeDashArray:1},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},legend:{show:!0,position:"top",horizontalAlign:"center",offsetX:0,offsetY:0},tooltip:{theme:"dark",marker:{show:!0},x:{format:"dd/MM/yy HH:mm"}}}}chart2(){this.radialChartOptions={series:[44,55,67],chart:{height:265,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return"249"}}}}},colors:["#ffc107","#3f51b5","#8bc34a"],labels:["Face TO Face","E-Consult","Available"]}}chart3(){this.linechartOptions={series:[{name:"Male",data:[44,55,57,56,61,58]},{name:"Female",data:[76,85,101,98,87,105]}],chart:{type:"bar",height:350,dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1},foreColor:"#9aa0ac"},colors:["#5C9FFB","#AEAEAE"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:5}},dataLabels:{enabled:!1},grid:{show:!0,borderColor:"#9aa0ac",strokeDashArray:1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat"]},yaxis:{},fill:{opacity:1},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}static#t=this.\u0275fac=function(S){return new(S||p)};static#e=this.\u0275cmp=f.Xpm({type:p,selectors:[["app-dashboard"]],viewQuery:function(S,k){if(1&S&&f.Gf(D,5),2&S){let L;f.iGM(L=f.CRH())&&(k.chart=L.first)}},decls:6,vars:4,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],["src","assets/images/dashboard.png","width","42","height","1000","alt","avatar"]],template:function(S,k){1&S&&(f.TgZ(0,"section",0)(1,"div",1)(2,"div",2),f._UZ(3,"app-breadcrumb",3),f.qZA(),f.TgZ(4,"div",4),f._UZ(5,"img",5),f.qZA()()()),2&S&&(f.xp6(3),f.Q6J("title","Inicio")("items",f.DdM(3,_))("active_item","Inicio"))},dependencies:[x.L]})}return p})()},6236:(yt,G,g)=>{g.d(G,{_t:()=>Yt,bA:()=>gt});var l=g(5879),f=g(6814),x=g(6672),D=g(2831),_=g(2495),O=g(4300),p=g(8645),E=g(7394),b=g(6321),S=g(4825),L=g(927),X=g(5592),N=g(3019),M=g(9773);function V(n,e,t){for(let i in e)if(e.hasOwnProperty(i)){const s=e[i];s?n.setProperty(i,s,t?.has(i)?"important":""):n.removeProperty(i)}return n}function y(n,e){const t=e?"":"none";V(n.style,{"touch-action":e?"":"none","-webkit-user-drag":e?"":"none","-webkit-tap-highlight-color":e?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t})}function et(n,e,t){V(n.style,{position:e?"":"fixed",top:e?"":"0",opacity:e?"":"0",left:e?"":"-999em"},t)}function A(n,e){return e&&"none"!=e?n+" "+e:n}function it(n){const e=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*e}function Z(n,e){return n.getPropertyValue(e).split(",").map(i=>i.trim())}function Y(n){const e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}function U(n,e,t){const{top:i,bottom:s,left:r,right:o}=n;return t>=i&&t<=s&&e>=r&&e<=o}function I(n,e,t){n.top+=e,n.bottom=n.top+n.height,n.left+=t,n.right=n.left+n.width}function st(n,e,t,i){const{top:s,right:r,bottom:o,left:a,width:h,height:c}=n,d=h*e,u=c*e;return i>s-u&&i<o+u&&t>a-d&&t<r+d}g(7398),g(8180),g(7921),g(9397),g(4664),g(9388);class nt{constructor(e){this._document=e,this.positions=new Map}clear(){this.positions.clear()}cache(e){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),e.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:Y(t)})})}handleScroll(e){const t=(0,D.sA)(e),i=this.positions.get(t);if(!i)return null;const s=i.scrollPosition;let r,o;if(t===this._document){const c=this.getViewportScrollPosition();r=c.top,o=c.left}else r=t.scrollTop,o=t.scrollLeft;const a=s.top-r,h=s.left-o;return this.positions.forEach((c,d)=>{c.clientRect&&t!==d&&t.contains(d)&&I(c.clientRect,a,h)}),s.top=r,s.left=o,{top:a,left:h}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}function rt(n){const e=n.cloneNode(!0),t=e.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();e.removeAttribute("id");for(let s=0;s<t.length;s++)t[s].removeAttribute("id");return"canvas"===i?lt(n,e):("input"===i||"select"===i||"textarea"===i)&&at(n,e),ot("canvas",n,e,lt),ot("input, textarea, select",n,e,at),e}function ot(n,e,t,i){const s=e.querySelectorAll(n);if(s.length){const r=t.querySelectorAll(n);for(let o=0;o<s.length;o++)i(s[o],r[o])}}let Ct=0;function at(n,e){"file"!==e.type&&(e.value=n.value),"radio"===e.type&&e.name&&(e.name=`mat-clone-${e.name}-${Ct++}`)}function lt(n,e){const t=e.getContext("2d");if(t)try{t.drawImage(n,0,0)}catch{}}const ht=(0,D.i$)({passive:!0}),H=(0,D.i$)({passive:!1}),W=new Set(["position"]);class Ot{get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(e){const t=(0,_.Ig)(e);t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(i=>y(i,t)))}constructor(e,t,i,s,r,o){this._config=t,this._document=i,this._ngZone=s,this._viewportRuler=r,this._dragDropRegistry=o,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new p.x,this._pointerMoveSubscription=E.w0.EMPTY,this._pointerUpSubscription=E.w0.EMPTY,this._scrollSubscription=E.w0.EMPTY,this._resizeSubscription=E.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new p.x,this.started=new p.x,this.released=new p.x,this.ended=new p.x,this.entered=new p.x,this.exited=new p.x,this.dropped=new p.x,this.moved=this._moveEvents,this._pointerDown=a=>{if(this.beforeStarted.next(),this._handles.length){const h=this._getTargetHandle(a);h&&!this._disabledHandles.has(h)&&!this.disabled&&this._initializeDragSequence(h,a)}else this.disabled||this._initializeDragSequence(this._rootElement,a)},this._pointerMove=a=>{const h=this._getPointerPositionOnPage(a);if(!this._hasStartedDragging){if(Math.abs(h.x-this._pickupPositionOnPage.x)+Math.abs(h.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const w=Date.now()>=this._dragStartTime+this._getDragStartDelay(a),P=this._dropContainer;if(!w)return void this._endDragSequence(a);(!P||!P.isDragging()&&!P.isReceiving())&&(a.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(a)))}return}a.preventDefault();const c=this._getConstrainedPointerPosition(h);if(this._hasMoved=!0,this._lastKnownPointerPosition=h,this._updatePointerDirectionDelta(c),this._dropContainer)this._updateActiveDropContainer(c,h);else{const d=this.constrainPosition?this._initialClientRect:this._pickupPositionOnPage,u=this._activeTransform;u.x=c.x-d.x+this._passiveTransform.x,u.y=c.y-d.y+this._passiveTransform.y,this._applyRootElementTransform(u.x,u.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:c,event:a,distance:this._getDragDistance(c),delta:this._pointerDirectionDelta})})},this._pointerUp=a=>{this._endDragSequence(a)},this._nativeDragStart=a=>{if(this._handles.length){const h=this._getTargetHandle(a);h&&!this._disabledHandles.has(h)&&!this.disabled&&a.preventDefault()}else this.disabled||a.preventDefault()},this.withRootElement(e).withParent(t.parentDragRef||null),this._parentPositions=new nt(i),o.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(e){this._handles=e.map(i=>(0,_.fI)(i)),this._handles.forEach(i=>y(i,this.disabled)),this._toggleNativeDragInteractions();const t=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&t.add(i)}),this._disabledHandles=t,this}withPreviewTemplate(e){return this._previewTemplate=e,this}withPlaceholderTemplate(e){return this._placeholderTemplate=e,this}withRootElement(e){const t=(0,_.fI)(e);return t!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{t.addEventListener("mousedown",this._pointerDown,H),t.addEventListener("touchstart",this._pointerDown,ht),t.addEventListener("dragstart",this._nativeDragStart,H)}),this._initialTransform=void 0,this._rootElement=t),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(e){return this._boundaryElement=e?(0,_.fI)(e):null,this._resizeSubscription.unsubscribe(),e&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(e){return this._parentDragRef=e,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(e){!this._disabledHandles.has(e)&&this._handles.indexOf(e)>-1&&(this._disabledHandles.add(e),y(e,!0))}enableHandle(e){this._disabledHandles.has(e)&&(this._disabledHandles.delete(e),y(e,this.disabled))}withDirection(e){return this._direction=e,this}_withDropContainer(e){this._dropContainer=e}getFreeDragPosition(){const e=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:e.x,y:e.y}}setFreeDragPosition(e){return this._activeTransform={x:0,y:0},this._passiveTransform.x=e.x,this._passiveTransform.y=e.y,this._dropContainer||this._applyRootElementTransform(e.x,e.y),this}withPreviewContainer(e){return this._previewContainer=e,this}_sortFromLastPointerPosition(){const e=this._lastKnownPointerPosition;e&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(e),e)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(e){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this,event:e}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(e),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const t=this._getPointerPositionOnPage(e);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:e})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(e){C(e)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const t=this._dropContainer;if(t){const i=this._rootElement,s=i.parentNode,r=this._placeholder=this._createPlaceholderElement(),o=this._anchor=this._anchor||this._document.createComment(""),a=this._getShadowRoot();s.insertBefore(o,i),this._initialTransform=i.style.transform||"",this._preview=this._createPreviewElement(),et(i,!1,W),this._document.body.appendChild(s.replaceChild(r,i)),this._getPreviewInsertionPoint(s,a).appendChild(this._preview),this.started.next({source:this,event:e}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:e}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(e,t){this._parentDragRef&&t.stopPropagation();const i=this.isDragging(),s=C(t),r=!s&&0!==t.button,o=this._rootElement,a=(0,D.sA)(t),h=!s&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),c=s?(0,O.yG)(t):(0,O.X6)(t);if(a&&a.draggable&&"mousedown"===t.type&&t.preventDefault(),i||r||h||c)return;if(this._handles.length){const m=o.style;this._rootElementTapHighlight=m.webkitTapHighlightColor||"",m.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._initialClientRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(m=>this._updateOnScroll(m)),this._boundaryElement&&(this._boundaryRect=Y(this._boundaryElement));const d=this._previewTemplate;this._pickupPositionInElement=d&&d.template&&!d.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialClientRect,e,t);const u=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:u.x,y:u.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t)}_cleanupDragArtifacts(e){et(this._rootElement,!0,W),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._initialClientRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const t=this._dropContainer,i=t.getItemIndex(this),s=this._getPointerPositionOnPage(e),r=this._getDragDistance(s),o=t._isOverContainer(s.x,s.y);this.ended.next({source:this,distance:r,dropPoint:s,event:e}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:r,dropPoint:s,event:e}),t.drop(this,i,this._initialIndex,this._initialContainer,o,r,s,e),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:e,y:t},{x:i,y:s}){let r=this._initialContainer._getSiblingContainerFromPosition(this,e,t);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(e,t)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=r,this._dropContainer.enter(this,e,t,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,s),this._dropContainer._sortItem(this,e,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(e,t):this._applyPreviewTransform(e-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y))}_createPreviewElement(){const e=this._previewTemplate,t=this.previewClass,i=e?e.template:null;let s;if(i&&e){const r=e.matchSize?this._initialClientRect:null,o=e.viewContainer.createEmbeddedView(i,e.context);o.detectChanges(),s=dt(o,this._document),this._previewRef=o,e.matchSize?pt(s,r):s.style.transform=z(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else s=rt(this._rootElement),pt(s,this._initialClientRect),this._initialTransform&&(s.style.transform=this._initialTransform);return V(s.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},W),y(s,!1),s.classList.add("cdk-drag-preview"),s.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(r=>s.classList.add(r)):s.classList.add(t)),s}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const e=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(e.left,e.top);const t=function It(n){const e=getComputedStyle(n),t=Z(e,"transition-property"),i=t.find(a=>"transform"===a||"all"===a);if(!i)return 0;const s=t.indexOf(i),r=Z(e,"transition-duration"),o=Z(e,"transition-delay");return it(r[s])+it(o[s])}(this._preview);return 0===t?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{const s=o=>{(!o||(0,D.sA)(o)===this._preview&&"transform"===o.propertyName)&&(this._preview?.removeEventListener("transitionend",s),i(),clearTimeout(r))},r=setTimeout(s,1.5*t);this._preview.addEventListener("transitionend",s)}))}_createPlaceholderElement(){const e=this._placeholderTemplate,t=e?e.template:null;let i;return t?(this._placeholderRef=e.viewContainer.createEmbeddedView(t,e.context),this._placeholderRef.detectChanges(),i=dt(this._placeholderRef,this._document)):i=rt(this._rootElement),i.style.pointerEvents="none",i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(e,t,i){const s=t===this._rootElement?null:t,r=s?s.getBoundingClientRect():e,o=C(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition();return{x:r.left-e.left+(o.pageX-r.left-a.left),y:r.top-e.top+(o.pageY-r.top-a.top)}}_getPointerPositionOnPage(e){const t=this._getViewportScrollPosition(),i=C(e)?e.touches[0]||e.changedTouches[0]||{pageX:0,pageY:0}:e,s=i.pageX-t.left,r=i.pageY-t.top;if(this._ownerSVGElement){const o=this._ownerSVGElement.getScreenCTM();if(o){const a=this._ownerSVGElement.createSVGPoint();return a.x=s,a.y=r,a.matrixTransform(o.inverse())}}return{x:s,y:r}}_getConstrainedPointerPosition(e){const t=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:s}=this.constrainPosition?this.constrainPosition(e,this,this._initialClientRect,this._pickupPositionInElement):e;if("x"===this.lockAxis||"x"===t?s=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):("y"===this.lockAxis||"y"===t)&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){const{x:r,y:o}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:h,height:c}=this._getPreviewRect(),d=a.top+o,u=a.bottom-(c-o);i=ct(i,a.left+r,a.right-(h-r)),s=ct(s,d,u)}return{x:i,y:s}}_updatePointerDirectionDelta(e){const{x:t,y:i}=e,s=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,o=Math.abs(t-r.x),a=Math.abs(i-r.y);return o>this._config.pointerDirectionChangeThreshold&&(s.x=t>r.x?1:-1,r.x=t),a>this._config.pointerDirectionChangeThreshold&&(s.y=i>r.y?1:-1,r.y=i),s}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const e=this._handles.length>0||!this.isDragging();e!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=e,y(this._rootElement,e))}_removeRootElementListeners(e){e.removeEventListener("mousedown",this._pointerDown,H),e.removeEventListener("touchstart",this._pointerDown,ht),e.removeEventListener("dragstart",this._nativeDragStart,H)}_applyRootElementTransform(e,t){const i=z(e,t),s=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=s.transform&&"none"!=s.transform?s.transform:""),s.transform=A(i,this._initialTransform)}_applyPreviewTransform(e,t){const i=this._previewTemplate?.template?void 0:this._initialTransform,s=z(e,t);this._preview.style.transform=A(s,i)}_getDragDistance(e){const t=this._pickupPositionOnPage;return t?{x:e.x-t.x,y:e.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:e,y:t}=this._passiveTransform;if(0===e&&0===t||this.isDragging()||!this._boundaryElement)return;const i=this._rootElement.getBoundingClientRect(),s=this._boundaryElement.getBoundingClientRect();if(0===s.width&&0===s.height||0===i.width&&0===i.height)return;const r=s.left-i.left,o=i.right-s.right,a=s.top-i.top,h=i.bottom-s.bottom;s.width>i.width?(r>0&&(e+=r),o>0&&(e-=o)):e=0,s.height>i.height?(a>0&&(t+=a),h>0&&(t-=h)):t=0,(e!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:e})}_getDragStartDelay(e){const t=this.dragStartDelay;return"number"==typeof t?t:C(e)?t.touch:t?t.mouse:0}_updateOnScroll(e){const t=this._parentPositions.handleScroll(e);if(t){const i=(0,D.sA)(e);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&I(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=(0,D.kV)(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(e,t){const i=this._previewContainer||"global";if("parent"===i)return e;if("global"===i){const s=this._document;return t||s.fullscreenElement||s.webkitFullscreenElement||s.mozFullScreenElement||s.msFullscreenElement||s.body}return(0,_.fI)(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialClientRect),this._previewRect}_getTargetHandle(e){return this._handles.find(t=>e.target&&(e.target===t||t.contains(e.target)))}}function z(n,e){return`translate3d(${Math.round(n)}px, ${Math.round(e)}px, 0)`}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function C(n){return"t"===n.type[0]}function dt(n,e){const t=n.rootNodes;if(1===t.length&&t[0].nodeType===e.ELEMENT_NODE)return t[0];const i=e.createElement("div");return t.forEach(s=>i.appendChild(s)),i}function pt(n,e){n.style.width=`${e.width}px`,n.style.height=`${e.height}px`,n.style.transform=z(e.left,e.top)}function gt(n,e,t){const i=T(e,n.length-1),s=T(t,n.length-1);if(i===s)return;const r=n[i],o=s<i?-1:1;for(let a=i;a!==s;a+=o)n[a]=n[a+o];n[s]=r}function T(n,e){return Math.max(0,Math.min(e,n))}class kt{constructor(e,t){this._element=e,this._dragDropRegistry=t,this._itemPositions=[],this.orientation="vertical",this._previousSwap={drag:null,delta:0,overlaps:!1}}start(e){this.withItems(e)}sort(e,t,i,s){const r=this._itemPositions,o=this._getItemIndexFromPointerPosition(e,t,i,s);if(-1===o&&r.length>0)return null;const a="horizontal"===this.orientation,h=r.findIndex(v=>v.drag===e),c=r[o],u=c.clientRect,m=h>o?1:-1,w=this._getItemOffsetPx(r[h].clientRect,u,m),P=this._getSiblingOffsetPx(h,r,m),R=r.slice();return gt(r,h,o),r.forEach((v,Ut)=>{if(R[Ut]===v)return;const wt=v.drag===e,J=wt?w:P,Pt=wt?e.getPlaceholderElement():v.drag.getRootElement();v.offset+=J,a?(Pt.style.transform=A(`translate3d(${Math.round(v.offset)}px, 0, 0)`,v.initialTransform),I(v.clientRect,0,J)):(Pt.style.transform=A(`translate3d(0, ${Math.round(v.offset)}px, 0)`,v.initialTransform),I(v.clientRect,J,0))}),this._previousSwap.overlaps=U(u,t,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?s.x:s.y,{previousIndex:h,currentIndex:o}}enter(e,t,i,s){const r=null==s||s<0?this._getItemIndexFromPointerPosition(e,t,i):s,o=this._activeDraggables,a=o.indexOf(e),h=e.getPlaceholderElement();let c=o[r];if(c===e&&(c=o[r+1]),!c&&(null==r||-1===r||r<o.length-1)&&this._shouldEnterAsFirstChild(t,i)&&(c=o[0]),a>-1&&o.splice(a,1),c&&!this._dragDropRegistry.isDragging(c)){const d=c.getRootElement();d.parentElement.insertBefore(h,d),o.splice(r,0,e)}else(0,_.fI)(this._element).appendChild(h),o.push(e);h.style.transform="",this._cacheItemPositions()}withItems(e){this._activeDraggables=e.slice(),this._cacheItemPositions()}withSortPredicate(e){this._sortPredicate=e}reset(){this._activeDraggables.forEach(e=>{const t=e.getRootElement();if(t){const i=this._itemPositions.find(s=>s.drag===e)?.initialTransform;t.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(e){return("horizontal"===this.orientation&&"rtl"===this.direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(i=>i.drag===e)}updateOnScroll(e,t){this._itemPositions.forEach(({clientRect:i})=>{I(i,e,t)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}_cacheItemPositions(){const e="horizontal"===this.orientation;this._itemPositions=this._activeDraggables.map(t=>{const i=t.getVisibleElement();return{drag:t,offset:0,initialTransform:i.style.transform||"",clientRect:Y(i)}}).sort((t,i)=>e?t.clientRect.left-i.clientRect.left:t.clientRect.top-i.clientRect.top)}_getItemOffsetPx(e,t,i){const s="horizontal"===this.orientation;let r=s?t.left-e.left:t.top-e.top;return-1===i&&(r+=s?t.width-e.width:t.height-e.height),r}_getSiblingOffsetPx(e,t,i){const s="horizontal"===this.orientation,r=t[e].clientRect,o=t[e+-1*i];let a=r[s?"width":"height"]*i;if(o){const h=s?"left":"top",c=s?"right":"bottom";-1===i?a-=o.clientRect[h]-r[c]:a+=r[h]-o.clientRect[c]}return a}_shouldEnterAsFirstChild(e,t){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,s="horizontal"===this.orientation;if(i[0].drag!==this._activeDraggables[0]){const o=i[i.length-1].clientRect;return s?e>=o.right:t>=o.bottom}{const o=i[0].clientRect;return s?e<=o.left:t<=o.top}}_getItemIndexFromPointerPosition(e,t,i,s){const r="horizontal"===this.orientation,o=this._itemPositions.findIndex(({drag:a,clientRect:h})=>a!==e&&((!s||a!==this._previousSwap.drag||!this._previousSwap.overlaps||(r?s.x:s.y)!==this._previousSwap.delta)&&(r?t>=Math.floor(h.left)&&t<Math.floor(h.right):i>=Math.floor(h.top)&&i<Math.floor(h.bottom))));return-1!==o&&this._sortPredicate(o,e)?o:-1}}class Lt{constructor(e,t,i,s,r){this._dragDropRegistry=t,this._ngZone=s,this._viewportRuler=r,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new p.x,this.entered=new p.x,this.exited=new p.x,this.dropped=new p.x,this.sorted=new p.x,this.receivingStarted=new p.x,this.receivingStopped=new p.x,this._isDragging=!1,this._draggables=[],this._siblings=[],this._activeSiblings=new Set,this._viewportScrollSubscription=E.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new p.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),function k(n=0,e=b.z){return n<0&&(n=0),(0,S.H)(n,n,e)}(0,L.Z).pipe((0,M.R)(this._stopScrollTimers)).subscribe(()=>{const o=this._scrollNode,a=this.autoScrollStep;1===this._verticalScrollDirection?o.scrollBy(0,-a):2===this._verticalScrollDirection&&o.scrollBy(0,a),1===this._horizontalScrollDirection?o.scrollBy(-a,0):2===this._horizontalScrollDirection&&o.scrollBy(a,0)})},this.element=(0,_.fI)(e),this._document=i,this.withScrollableParents([this.element]),t.registerDropContainer(this),this._parentPositions=new nt(i),this._sortStrategy=new kt(this.element,t),this._sortStrategy.withSortPredicate((o,a)=>this.sortPredicate(o,a,this))}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(e,t,i,s){this._draggingStarted(),null==s&&this.sortingDisabled&&(s=this._draggables.indexOf(e)),this._sortStrategy.enter(e,t,i,s),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:e,container:this,currentIndex:this.getItemIndex(e)})}exit(e){this._reset(),this.exited.next({item:e,container:this})}drop(e,t,i,s,r,o,a,h={}){this._reset(),this.dropped.next({item:e,currentIndex:t,previousIndex:i,container:this,previousContainer:s,isPointerOverContainer:r,distance:o,dropPoint:a,event:h})}withItems(e){const t=this._draggables;return this._draggables=e,e.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(t.filter(s=>s.isDragging()).every(s=>-1===e.indexOf(s))?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(e){return this._sortStrategy.direction=e,this}connectedTo(e){return this._siblings=e.slice(),this}withOrientation(e){return this._sortStrategy.orientation=e,this}withScrollableParents(e){const t=(0,_.fI)(this.element);return this._scrollableElements=-1===e.indexOf(t)?[t,...e]:e.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(e){return this._isDragging?this._sortStrategy.getItemIndex(e):this._draggables.indexOf(e)}isReceiving(){return this._activeSiblings.size>0}_sortItem(e,t,i,s){if(this.sortingDisabled||!this._clientRect||!st(this._clientRect,.05,t,i))return;const r=this._sortStrategy.sort(e,t,i,s);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:e})}_startScrollingIfNecessary(e,t){if(this.autoScrollDisabled)return;let i,s=0,r=0;if(this._parentPositions.positions.forEach((o,a)=>{a===this._document||!o.clientRect||i||st(o.clientRect,.05,e,t)&&([s,r]=function Mt(n,e,t,i){const s=ft(e,i),r=mt(e,t);let o=0,a=0;if(s){const h=n.scrollTop;1===s?h>0&&(o=1):n.scrollHeight-h>n.clientHeight&&(o=2)}if(r){const h=n.scrollLeft;1===r?h>0&&(a=1):n.scrollWidth-h>n.clientWidth&&(a=2)}return[o,a]}(a,o.clientRect,e,t),(s||r)&&(i=a))}),!s&&!r){const{width:o,height:a}=this._viewportRuler.getViewportSize(),h={width:o,height:a,top:0,right:o,bottom:a,left:0};s=ft(h,t),r=mt(h,e),i=window}i&&(s!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=s,this._horizontalScrollDirection=r,this._scrollNode=i,(s||r)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const e=(0,_.fI)(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=e.msScrollSnapType||e.scrollSnapType||"",e.scrollSnapType=e.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const e=(0,_.fI)(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(e).clientRect}_reset(){this._isDragging=!1;const e=(0,_.fI)(this.element).style;e.scrollSnapType=e.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_isOverContainer(e,t){return null!=this._clientRect&&U(this._clientRect,e,t)}_getSiblingContainerFromPosition(e,t,i){return this._siblings.find(s=>s._canReceive(e,t,i))}_canReceive(e,t,i){if(!this._clientRect||!U(this._clientRect,t,i)||!this.enterPredicate(e,this))return!1;const s=this._getShadowRoot().elementFromPoint(t,i);if(!s)return!1;const r=(0,_.fI)(this.element);return s===r||r.contains(s)}_startReceiving(e,t){const i=this._activeSiblings;!i.has(e)&&t.every(s=>this.enterPredicate(s,this)||this._draggables.indexOf(s)>-1)&&(i.add(e),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:e,receiver:this,items:t}))}_stopReceiving(e){this._activeSiblings.delete(e),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:e,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(e=>{if(this.isDragging()){const t=this._parentPositions.handleScroll(e);t&&this._sortStrategy.updateOnScroll(t.top,t.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const e=(0,D.kV)((0,_.fI)(this.element));this._cachedShadowRoot=e||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const e=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,e))}}function ft(n,e){const{top:t,bottom:i,height:s}=n,r=.05*s;return e>=t-r&&e<=t+r?1:e>=i-r&&e<=i+r?2:0}function mt(n,e){const{left:t,right:i,width:s}=n,r=.05*s;return e>=t-r&&e<=t+r?1:e>=i-r&&e<=i+r?2:0}const F=(0,D.i$)({passive:!1,capture:!0});let At=(()=>{class n{constructor(t,i){this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=s=>s.isDragging(),this.pointerMove=new p.x,this.pointerUp=new p.x,this.scroll=new p.x,this._preventDefaultWhileDragging=s=>{this._activeDragInstances.length>0&&s.preventDefault()},this._persistentTouchmoveListener=s=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&s.preventDefault(),this.pointerMove.next(s))},this._document=i}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,F)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,F)}startDragging(t,i){if(!(this._activeDragInstances.indexOf(t)>-1)&&(this._activeDragInstances.push(t),1===this._activeDragInstances.length)){const s=i.type.startsWith("touch");this._globalListeners.set(s?"touchend":"mouseup",{handler:r=>this.pointerUp.next(r),options:!0}).set("scroll",{handler:r=>this.scroll.next(r),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:F}),s||this._globalListeners.set("mousemove",{handler:r=>this.pointerMove.next(r),options:F}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((r,o)=>{this._document.addEventListener(o,r.handler,r.options)})})}}stopDragging(t){const i=this._activeDragInstances.indexOf(t);i>-1&&(this._activeDragInstances.splice(i,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(t){return this._activeDragInstances.indexOf(t)>-1}scrolled(t){const i=[this.scroll];return t&&t!==this._document&&i.push(new X.y(s=>this._ngZone.runOutsideAngular(()=>{const o=a=>{this._activeDragInstances.length&&s.next(a)};return t.addEventListener("scroll",o,!0),()=>{t.removeEventListener("scroll",o,!0)}}))),(0,N.T)(...i)}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((t,i)=>{this._document.removeEventListener(i,t.handler,t.options)}),this._globalListeners.clear()}static#t=this.\u0275fac=function(i){return new(i||n)(l.LFG(l.R0b),l.LFG(f.K0))};static#e=this.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const Ht={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let K=(()=>{class n{constructor(t,i,s,r){this._document=t,this._ngZone=i,this._viewportRuler=s,this._dragDropRegistry=r}createDrag(t,i=Ht){return new Ot(t,i,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(t){return new Lt(t,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}static#t=this.\u0275fac=function(i){return new(i||n)(l.LFG(f.K0),l.LFG(l.R0b),l.LFG(x.rL),l.LFG(At))};static#e=this.\u0275prov=l.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=l.oAB({type:n});static#i=this.\u0275inj=l.cJS({providers:[K],imports:[x.ZD]})}return n})()}}]);