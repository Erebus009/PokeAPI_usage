(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/4.fa5076f0.svg"},47:function(e,t,a){e.exports=a.p+"static/media/spinner.6bfce2e2.gif"},51:function(e,t,a){e.exports=a(82)},59:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n,s,r=a(0),c=a.n(r),i=a(33),l=a(46),o=a(45),m=a.n(o),p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{bg:"dark",variant:"dark"},c.a.createElement(l.a,null,c.a.createElement(i.a.Brand,{href:"/"},c.a.createElement("img",{alt:"",src:m.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","PokeDex with React"))))},u=(a(59),a(35),a(11)),d=a(12),h=a(15),g=a(14),f=a(19),E=a.n(f),b=a(25),k=a(29),v=a(47),y=a.n(v),w=a(30),x=a(26),N=w.a.img(n||(n=Object(k.a)(["\nwidth: 5em;\nheight: 5em"]))),j=Object(w.a)(x.b)(s||(s=Object(k.a)(["\n    text-decoration = none;\n    color: black;\n    &:focus,\n    &:hover{\n        color: gray\n    },\n    &:visited,\n    &:link,\n    &:active{\n        text-decoration: none;\n        \n    }\n  "]))),A=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",PokeImage:"",PokeIndex:"",imageloading:!0},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.url,n=a.split("/")[a.split("/").length-2],s="https://github.com/pokeapi/sprites/blob/master/sprites/pokemon/".concat(n,".png?raw=true");this.setState({name:t,PokeImage:s,PokeIndex:n})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},c.a.createElement(j,{to:"pokemon/".concat(this.state.PokeIndex)},c.a.createElement("div",{className:"card shadow"},c.a.createElement("h5",{className:"card-header bg-dark text-white"},this.state.PokeIndex),c.a.createElement("h1",null,this.state.type),this.state.imageloading?c.a.createElement("img",{src:y.a,style:{width:"5em",height:"5em"},className:"Sprite rounded mx-auto d-block mt-2"}):null,c.a.createElement(N,{className:"Sprite rounded mx-auto mt-2",src:this.state.PokeImage,onLoad:function(){return e.setState({imageloading:!1})},style:this.state.imageloading?null:{display:"block"}}),c.a.createElement("div",{className:"card-body mx-auto"},c.a.createElement("h6",{className:"card-title"},this.state.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))))))}}]),a}(r.Component),C=a(22),O=a.n(C),S=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={url:"https://pokeapi.co/api/v2/pokemon/?limit=151",pokemon:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(this.state.url);case 2:t=e.sent,this.setState({pokemon:t.data.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,this.state.pokemon?c.a.createElement("div",{className:"row"},this.state.pokemon.map(function(e){return c.a.createElement(A,{key:e.name,name:e.name,url:e.url,type:e.type})})):c.a.createElement("h1",null,"Loading Pokemon...")))}}]),a}(r.Component),P=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(S,null)))}}]),a}(r.Component),D={normal:"A8A77A",fire:"EE8130",water:"6390F0",electric:"F7D02C",grass:"7AC74C",ice:"96D9D6",fighting:"C22E28",poison:"A33EA1",ground:"E2BF65",flying:"A98FF3",psychic:"F95587",bug:"A6B91A",rock:"B6A136",ghost:"735797",dragon:"6F35FC",dark:"705746",steel:"B7B7CE",fairy:"D685AD"},I=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",PokeIndex:"",PokeImage:"",types:[],description:"",height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},hatchSteps:"",catchRate:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a,n,s,r,c,i,l,o,m,p=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,a=t.split("/")[t.split("/").length-1],n="https://pokeapi.co/api/v2/pokemon/".concat(a,"/"),s="https://pokeapi.co/api/v2/pokemon-species/".concat(a,"/"),e.next=6,O.a.get(n);case 6:return r=e.sent,c=Math.round(100*(.343124*r.data.height+1e-4))/100,i=Math.round(100*(.220463*r.data.weight+1e-4))/100,l=r.data.types.map(function(e){return e.type.name}),o=r.data.abilities.map(function(e){return e.ability.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join("  ")}),m=r.data.stats.filter(function(e){return e.effort>0}).map(function(e){return"".concat(e.effort," ").concat(e.stat.name).toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),e.next=14,O.a.get(s).then(function(e){var t="";e.data.flavor_text_entries.some(function(e){"en"!==e.language.name||"omega-ruby"!==e.version.name||(t=e.flavor_text)});var a="".hp,n="".attack,s="".defense,c="".speed,i="".specialDefense,l="".specialAttack;r.data.stats.map(function(e){switch(e.stat.name){case"hp":a=e.base_stat;break;case"attack":n=e.base_stat;break;case"defense":s=e.base_stat;break;case"speed":c=e.base_stat;break;case"special-attack":l=e.base_stat;break;case"special-defense":i=e.base_stat}});var o=e.data.gender_rate,m=12.5*o,u=12.5*(8-o),d=Math.round(100/255*e.data.capture_rate),h=e.data.egg_groups.map(function(e){return e.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),g=255*e.data.hatch_counter+1,f=r.data.name,E=r.data.sprites.front_default;p.setState({name:f,PokeImage:E,description:t,genderRatioFemale:m,genderRatioMale:u,eggGroup:h,hatchSteps:g,catchRate:d,stats:{hp:a,attack:n,defense:s,speed:c,specialAttack:l,specialDefense:i}})});case 14:this.setState({types:l,height:c,weight:i,PokeIndex:a,abilities:o,evs:m});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card shadow"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5 d-inline d-flex"},c.a.createElement("h5",{className:"badge badge-dark text-white badge-pill shadow",style:{backgroundColor:"gray",fontSize:"15px",marginRight:"15px"}},this.state.PokeIndex),c.a.createElement("h4",null,this.state.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))),c.a.createElement("div",{className:"col-7 d-flex container justify-content-end"},c.a.createElement("div",{className:""},this.state.types.map(function(e){return c.a.createElement("span",{key:e,className:"badge badge-alert badge-pill mr-2 m-1 shadow",style:{backgroundColor:"#".concat(D[e]),color:"white",fontSize:"13px"}},e.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))}))),c.a.createElement("div",{className:"card-body border-top h-100 "},c.a.createElement("img",{src:this.state.PokeImage,className:"mb-2 text-center sprite justify-content-center d-flex container",style:{height:"100%",width:"100%",minWidth:"150px",minHeight:"100px",maxHeight:"200px",maxWidth:"200px"}}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm"},c.a.createElement("h4",{className:"card-header"},"Description"),c.a.createElement("div",{className:"col-12 card-body"},this.state.description),c.a.createElement("div",{className:"card-body border-top rounded"},c.a.createElement("div",{className:"col container d-flex"}),c.a.createElement("div",{className:"col-6 "},c.a.createElement("h6",null,"Height: ",this.state.height," ft."),c.a.createElement("h6",null,"Weight: ",this.state.weight," Lbs."),c.a.createElement("h6",null,"Catch Rate: ",this.state.catchRate,"%"),c.a.createElement("h6",null,"Egg Group: ",this.state.eggGroup),c.a.createElement("h6",null,"Egg Hatch Steps: ",this.state.hatchSteps)))),c.a.createElement("div",{className:"col-sm card border rounded mx-auto container d-flex justify-content-center shadow"},c.a.createElement("h4",{className:""},"Base Stats"),c.a.createElement("p",{className:""},"HP: ",this.state.stats.hp),c.a.createElement("p",null,"Defense: ",this.state.stats.defense),c.a.createElement("p",null,"Speed: ",this.state.stats.speed),c.a.createElement("p",null,"Attack: ",this.state.stats.attack),c.a.createElement("p",null,"Special Attack: ",this.state.stats.specialAttack),c.a.createElement("p",null,"Special Defense: ",this.state.stats.specialDefense),c.a.createElement("h4",{className:"text-center"},"Ev Gains"),c.a.createElement("div",{className:" col-sm-12 align-items-center d-flex justify-content-center"},c.a.createElement("p",{className:""},this.state.evs)))))))))}}]),a}(r.Component),_=a(3);var F=function(){return c.a.createElement(x.a,null,c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement(_.c,null,c.a.createElement(_.a,{exact:!0,path:"/",element:c.a.createElement(P,null)}),c.a.createElement(_.a,{path:"/pokemon/:PokeIndex",element:c.a.createElement(I,null)})))))},R=a(16),L=a.n(R);a(81);L.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.937d31cb.chunk.js.map