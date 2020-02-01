(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{24:function(e,t,a){e.exports=a(58)},46:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}},47:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}},48:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}},49:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}},50:function(e,t,a){},55:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);for(var r=a(0),n=a.n(r),o=a(15),i=a.n(o),c=a(2),l=a(1),s=function e(t){var a=this,r=t.callback,n=t.delay;Object(l.a)(this,e),this.pause=function(){clearTimeout(a.id),a.remain-=Date.now()-a.start},this.resume=function(){a.start=Date.now(),clearTimeout(a.id),a.id=setTimeout(a.callback,a.remain)},this.destroy=function(){clearTimeout(a.id)},this.id=setTimeout(r,n),this.callback=r,this.delay=n,this.remain=n,this.start=Date.now()},u=a(20),d=a.n(u),m=a(7),f=a.n(m),b=Number(f.a.boardRow),h=Number(f.a.boardCol),p=f.a.initialColor,v=f.a.visitedColor,x=f.a.clickedColor,E=f.a.fixedColor,y=f.a.shortestColor,_=[],O=0;O<b;O++){_[O]=[];for(var g=0;g<h;g++)_[O][g]=d()()}for(var j="ITEM_VISITED",C="ITEM_CLICKED",N="ITEM_SHORTEST",I=[],k=0;k<b;k++){I[k]=[];for(var w=0;w<h;w++)I[k][w]={color:p,visit:!1}}var T=Object(r.createContext)(),q=function(e){var t=e.children,a=Object(r.useState)(!0),o=Object(c.a)(a,2),i=o[0],l=o[1],u=Object(r.useState)(!1),d=Object(c.a)(u,2),m=d[0],f=d[1],p=Object(r.useState)(!1),v=Object(c.a)(p,2),x=v[0],E=v[1],y=Object(r.useRef)({x:Math.round(b/2),y:2}),O=Object(r.useRef)({x:Math.round(b/2),y:h-3}),g=Object(r.useRef)(JSON.parse(JSON.stringify(I))),j=Object(r.useRef)({}),C=Object(r.useRef)(null),N=Object(r.useRef)(300),k=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ITEM_FIXED",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;g.current[e][t]=a;var n=j.current[_[e][t]];if(r){var o=new s({callback:function(){return n(a)},delay:r*N.current});C.current.timers.push(o)}else n(a)};return n.a.createElement(T.Provider,{value:{isPathExist:i,isVisualized:m,isHelped:x,clear:function(){i||l(!0),m&&f(!1),g.current.forEach((function(e,t){e.forEach((function(e,a){k(t,a,"ITEM_INITIAL")}))}))},updateItem:k,setIsPathExist:l,setIsVisualized:f,setIsHelped:E,pathFinder:C,begin:y,end:O,board:g,setItemCache:j,delay:N}},t)},S=a(8),M=a.n(S),A=a(10),R=a(9),F=a(5),H=a(4),z=a(3),V=a(6),D=a(11),P=a.n(D),L=a(21),B=function(){function e(t){var a=this,r=t.begin,n=t.end,o=t.updateItem,i=t.board;Object(l.a)(this,e),this._init=function(){a.dist=new Array(b),a.prev=new Array(b);for(var e=0;e<b;e++){a.dist[e]=[],a.prev[e]=[];for(var t=0;t<h;t++)a.dist[e][t]=1/0,a.prev[e][t]={x:-1,y:-1}}a.dist[a.begin.x][a.begin.y]=0},this.paintShortestPath=function(){for(var e=a.begin,t=a.end,r=a.prev,n=a.updateItem,o=[],i=t.x,c=t.y;-1!==r[i][c].x&&-1!==r[i][c].y;){o.push({x:i,y:c});var l=i,s=c;i=r[l][s].x,c=r[l][s].y}o.push({x:e.x,y:e.y});for(var u=o.length-1;u>=0;u--)n(i=o[u].x,c=o[u].y,N,o.length-u)},this.begin=r,this.end=n,this.updateItem=o,this._init(),this.board=i,this.timers=[]}return Object(L.a)(e,[{key:"clearTimers",value:function(){this.timers.forEach((function(e){e.destroy()})),this.timers=[]}},{key:"stopTimers",value:function(){this.timers.forEach((function(e){return e.pause()}))}},{key:"resumeTimers",value:function(){this.timers.forEach((function(e){return e.resume()}))}}]),e}();B.dx=[-1,1,0,0],B.dy=[0,0,-1,1];var J,X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e))).execute=function(){var e=Object(z.a)(a),t=e.pq,r=e.dist,n=e.prev,o=e.board,i=e.begin,c=e.end,l=e.updateItem;t.queue({x:i.x,y:i.y,d:0});for(var s=!1;t.length;){var u=t.peek();t.dequeue();for(var d=u.x,m=u.y,f=u.d,p=0;p<B.dx.length;p++){var v=d+B.dx[p],x=m+B.dy[p];if(!(v<0||v>=b||x<0||x>=h)&&(!(r[d][m]===1/0||r[d][m]+1>=r[v][x])&&o[v][x]!==C)){if(o[v][x]=j,l(v,x,j,f),n[v][x]={x:d,y:m},v===c.x&&x===c.y){s=!0;break}r[v][x]=r[d][m]+1,t.queue({x:v,y:x,d:r[v][x]})}}if(s)return t.clear(),!0}return a.clearTimers(),!1},a.pq=new P.a({comparator:function(e,t){return e.d-t.d}}),a}return Object(V.a)(t,e),t}(B),Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(F.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(n))))._relax=function(e){for(var t=Object(z.a)(a),r=t.dist,n=t.prev,o=t.end,i=t.updateItem,c=t.board,l=!1,s=e,u=0;u<b;u++)for(var d=0;d<h;d++)for(var m=0;m<B.dx.length;m++){var f=u+B.dx[m],p=d+B.dy[m];f<0||f>=b||p<0||p>=h||(r[u][d]===1/0||r[u][d]+1>=r[f][p]||c[f][p]!==C&&(r[f][p]=r[u][d]+1,n[f][p]={x:u,y:d},f!==o.x||p!==o.y?(i(f,p,j,s),s++):l=!0))}return{time:s,find:l}},a.execute=function(){for(var e=Object(z.a)(a),t=e.board,r=e._relax,n=e.updateItem,o=e.end,i=1,c=!1,l=1;l<=t.length-1;l++){var s=r(i);i=s.timeFactor,i++,s.find&&(c=!0)}return n(o.x,o.y,j,i),c||a.clearTimers(),c},a}return Object(V.a)(t,e),t}(B),K=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e)))._h=function(e){return Math.abs(e.x-a.end.x)+Math.abs(e.y-a.end.y)},a.execute=function(){var e=Object(z.a)(a),t=e.dist,r=e.pq,n=e.opened,o=e.board,i=e.updateItem,c=e.prev,l=e.begin,s=e._h,u=e.end,d=s(l);r.queue({x:l.x,y:l.y,f:d}),t[l.x][l.y]=0,n[l.x][l.y]=!0,console.log(a.opened);for(var m=!1,f=1;r.length;){var p=r.peek(),v=p.x,x=p.y;if(v===u.x&&x===u.y){r.clear(),m=!0;break}n[v][x]=!1,r.dequeue();for(var E=0;E<B.dx.length;E++){var y=v+B.dx[E],_=x+B.dy[E];if(!(y<0||y>=b||_<0||_>=h)&&o[y][_]!==C){var O=t[v][x]+1,g=O+s({x:y,y:_});O<t[y][_]&&(c[y][_]={x:v,y:x},t[y][_]=O,i(y,_,j,f),f++,!1===n[y][_]&&(r.queue({x:y,y:_,f:g}),n[y][_]=!0))}}}return m||a.clearTimers(),m},a.opened=new Array(b);for(var r=0;r<b;r++)a.opened[r]=new Array(h).fill(!1);return a.pq=new P.a({comparator:function(e,t){return e.f-t.f}}),a}return Object(V.a)(t,e),t}(B),U=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e)))._dfs=function(e,t,r){var n=Object(z.a)(a),o=n.prev,i=n.end,c=n.visited,l=n.board,s=n.updateItem,u=n._dfs;c[e][t]=!0;for(var d=0;d<B.dx.length;d++){var m=e+B.dx[d],f=t+B.dy[d];if(!(m<0||m>=b||f<0||f>=h)&&(!c[m][f]&&l[m][f]!==C)){if(o[m][f]={x:e,y:t},s(m,f,j,r),m===i.x&&f===i.y)return void(a.find=!0);if(u(m,f,r+1),a.find)return}}},a.execute=function(){return a._dfs(a.begin.x,a.begin.y,1),a.find||a.clearTimers(),a.find},a.find=!1,a.visited=[];for(var r=0;r<b;r++)a.visited[r]=Array(h).fill(!1);return a}return Object(V.a)(t,e),t}(B),G=a(22),Q=a.n(G),W=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e))).execute=function(){var e=Object(z.a)(a),t=e.q,r=e.begin,n=e.end,o=e.visited,i=e.board,c=e.prev,l=e.updateItem;t.enqueue({x:r.x,y:r.y}),o[r.x][r.y]=!0;for(var s=!1,u=1;!t.isEmpty();){var d=t.peek();if(t.dequeue(),d.x===n.x&&d.y===n.y)break;for(var m=0;m<B.dx.length;m++){var f=d.x+B.dx[m],p=d.y+B.dy[m];if(!(f<0||f>=b||p<0||p>=h)&&(!o[f][p]&&i[f][p]!==C&&(o[f][p]=!0,c[f][p]={x:d.x,y:d.y},l(f,p,j,u),u++,t.enqueue({x:f,y:p}),f===n.x&&p===n.y))){s=!0;break}}}return s||a.clearTimers(),s},a.visited=[],a.q=new Q.a;for(var r=0;r<b;r++)a.visited[r]=Array(h).fill(!1);return a}return Object(V.a)(t,e),t}(B),Z=(J={},Object(R.a)(J,"dijkstra",X),Object(R.a)(J,"bellman-ford",Y),Object(R.a)(J,"A-star",K),Object(R.a)(J,"DFS",U),Object(R.a)(J,"BFS",W),J),$=(a(46),function(){var e=Object(r.useState)("dijkstra"),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(!1),l=Object(c.a)(i,2),s=l[0],u=l[1],d=Object(r.useContext)(T),m=d.begin,f=d.end,b=d.updateItem,h=d.delay,p=d.pathFinder,v=d.clear,x=d.board,E=d.isVisualized,y=d.setIsPathExist,_=d.setIsVisualized,O=d.setIsHelped;return n.a.createElement("div",{className:"content-header"},n.a.createElement("select",{className:"content-header__select",onChange:function(e){o(e.target.value)},id:"algorithm",disabled:E},n.a.createElement("option",{value:"dijkstra",defaultChecked:!0},"Dijkstra"),n.a.createElement("option",{value:"bellman-ford"},"Bellman-Ford"),n.a.createElement("option",{value:"BFS"},"0-1 BFS"),n.a.createElement("option",{value:"DFS"},"DFS"),n.a.createElement("option",{value:"A-star"},"A*")),n.a.createElement("select",{className:"content-header__select",onChange:function(e){h.current=Number(e.target.value)},defaultValue:300,disabled:E},n.a.createElement("option",{value:450},"slowest"),n.a.createElement("option",{value:550},"slow"),n.a.createElement("option",{value:300},"normal"),n.a.createElement("option",{value:150},"fast"),n.a.createElement("option",{value:50},"fastest")),n.a.createElement("button",{className:"content-header__button",onClick:function(){if(!E){_(!0),p.current=new Z[a]({begin:m.current,end:f.current,updateItem:b,board:x.current});var e=p.current.execute();y(e)}},disabled:E,type:"button"},"Visualize!"),n.a.createElement("button",{className:"content-header__button",onClick:function(){E&&!s||(s&&u(!1),_(!1),v())},disabled:E&&!s,type:"button"},"Clear"),n.a.createElement("button",{className:"content-header__button--pause",onClick:function(){s?(u(!1),p.current.resumeTimers()):(u(!0),p.current.stopTimers())},disabled:!E,type:"button"},s?n.a.createElement(A.c,null):n.a.createElement(A.b,null)),n.a.createElement("button",{className:"content-header__button--usage",onClick:function(){O(!0)},disabled:E&&!s,type:"button"},"How to use?"))}),ee=(a(47),a(48),function(e){var t=e.ridx,a=e.cidx,o=Object(r.useState)("ITEM_INITIAL"),i=Object(c.a)(o,2),l=i[0],s=i[1],u=Object(r.useContext)(T),d=u.setItemCache,m=u.begin,f=u.end,b=u.pathFinder,h=u.setIsVisualized;d.current[_[t][a]]=s,Object(r.useEffect)((function(){l===j&&t===f.current.x&&a===f.current.y&&b.current.paintShortestPath()}),[l,f,b,t,a]),Object(r.useEffect)((function(){l===N&&t===f.current.x&&a===f.current.y&&(b.current.clearTimers(),h(!1))}),[l,f,b,t,a,h]);return n.a.createElement("div",{className:"board__item","data-type":l,"data-ridx":t,"data-cidx":a,style:{backgroundColor:t===m.current.x&&a===m.current.y||t===f.current.x&&a===f.current.y?E:l===j?v:l===C?x:l===N?y:p}})}),te=function(){var e=Object(r.useContext)(T),t=e.updateItem,a=e.begin,o=e.end,i=e.isVisualized,l=Object(r.useState)(!1),s=Object(c.a)(l,2),u=s[0],d=s[1],m=Object(r.useState)({begin:!1,end:!1}),f=Object(c.a)(m,2),b=f[0],h=f[1],p=function(e,a){if("board__item"===e.target.className){var r=e.target.dataset.type;if("ITEM_INITIAL"===r||r===C){var n=Number(e.target.dataset.ridx),o=Number(e.target.dataset.cidx);t(n,o,r!==C||a?C:"ITEM_INITIAL")}}};return n.a.createElement("div",{className:"board",onMouseDown:function(e){var t=Number(e.target.dataset.ridx),r=Number(e.target.dataset.cidx);t===a.current.x&&r===a.current.y?h({begin:!0,end:!1}):t===o.current.x&&r===o.current.y?h({begin:!1,end:!0}):d(!0)},onMouseUp:function(){d(!1),h({begin:!1,end:!1})},onMouseMove:function(e){if(!i&&"board__item"===e.target.className){var r=Number(e.target.dataset.ridx),n=Number(e.target.dataset.cidx);if(b.begin||b.end){var c=b.begin?a.current.x:o.current.x,l=b.begin?a.current.y:o.current.y;t(c,l,"ITEM_INITIAL");var s={x:r,y:n};b.begin?a.current=s:o.current=s,t(s.x,s.y)}else{if(!u)return;p(e,!0)}}},onClick:function(e){i||p(e,!1)},role:"button",tabIndex:"0"},I.map((function(e,t){return n.a.createElement("div",{className:"board__row",key:t},e.map((function(e,a){return n.a.createElement(ee,{ridx:t,cidx:a,key:_[t][a]})})),n.a.createElement("br",null))})))},ae=(a(49),function(e){var t=e.isHelped,a=e.onHelpClose;return n.a.createElement(M.a,{className:"modal-info",isOpen:t,contentLabel:"Example Modal",onRequestClose:a},n.a.createElement("h1",{className:"modal-info__title"},"How to use?"),n.a.createElement("p",{className:"modal-info__color"},n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("p",{className:"modal-info__content"},n.a.createElement("span",{className:"modal-info__square--initial"}),n.a.createElement("p",null,"intiial")),n.a.createElement("p",{className:"modal-info__content"},n.a.createElement("span",{className:"modal-info__square--visited"}),n.a.createElement("p",null,"visited"))),n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("p",{className:"modal-info__content"},n.a.createElement("span",{className:"modal-info__square--clicked"}),n.a.createElement("p",null,"clicked")),n.a.createElement("p",{className:"modal-info__content"},n.a.createElement("span",{className:"modal-info__square--fixed"}),n.a.createElement("p",null,"fixed"))),n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("p",{className:"modal-info__content"},n.a.createElement("span",{className:"modal-info__square--shortest"}),n.a.createElement("p",null,"shortest")))),n.a.createElement("p",{className:"modal-info__usage"},n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("h2",null,"1. You can make wall by clicking any block")),n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("h2",null,"2. You can move"),n.a.createElement("span",{className:"modal-info__square--fixed"}),n.a.createElement("h2",null,"by dragging")),n.a.createElement("div",{className:"modal-info__row"},n.a.createElement("h2",null,"3. You can choose algorithm and speed from select box"))),n.a.createElement("button",{onClick:a,className:"modal-info__close",type:"button"},"X"))}),re=(a(50),function(e){var t=e.isErrorOpen,a=e.onErrorClose;return n.a.createElement(M.a,{className:"modal-error",isOpen:t,contentLabel:"Example Modal",onRequestClose:a},n.a.createElement("h1",{className:"modal-error__title"},"Error!"),n.a.createElement("p",{className:"modal-error__content"},"Cannot find path to the goal"),n.a.createElement("button",{onClick:a,className:"modal-error__close",type:"button"},"X"))}),ne=a(23),oe=a.n(ne);a(55);M.a.setAppElement("#root");var ie=function(){var e=Object(r.useContext)(T),t=e.isPathExist,a=e.clear,o=e.isHelped,i=e.setIsHelped,l=Object(r.useState)(!1),s=Object(c.a)(l,2),u=s[0],d=s[1];Object(r.useEffect)((function(){t||(a(),d(!0))}),[t,a]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(oe.a,null,n.a.createElement("title",null,"Pathfinding Visualizer")),n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Pathfinding Visualizer")),n.a.createElement(re,{isErrorOpen:u,onErrorClose:function(){d(!1)}}),n.a.createElement(ae,{isHelped:o,onHelpClose:function(){i(!1)}}),n.a.createElement($,null),n.a.createElement(te,null),n.a.createElement("footer",{className:"footer"},n.a.createElement("p",{className:"footer__author"},"Made by Haram Bae"),n.a.createElement("a",{href:"https://github.com/baeharam/Pathfinding-Visualizer",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.a,{className:"footer__github"}))))},ce=(a(56),a(57),function(){return n.a.createElement(q,null,n.a.createElement(ie,null))});i.a.render(n.a.createElement(ce,null),document.getElementById("root"))},7:function(e,t,a){e.exports={visitedColor:"#75e1ff",shortestColor:"#cf2541",fixedColor:"#000",clickedColor:"#fcba03",initialColor:"#a1a6a3",boardRow:"16",boardCol:"30"}}},[[24,1,2]]]);
//# sourceMappingURL=main.874211f4.chunk.js.map