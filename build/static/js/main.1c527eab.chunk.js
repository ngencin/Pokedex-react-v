(this["webpackJsonpreact-pokemons-app"]=this["webpackJsonpreact-pokemons-app"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(5),n=s.n(a);s(14);var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())};var i=e=>{let t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},l=s(3),o=s(1);var d=e=>{let{pokemon:t,borderColor:s="#009688"}=e;const[a,n]=Object(c.useState)(),d=Object(l.q)();return Object(o.jsx)("div",{className:"col s6 m4",onClick:()=>{return e=t.id,void d("/pokemons/".concat(e));var e},onMouseEnter:()=>{n(s)},onMouseLeave:()=>{n("#f5f5f5")},children:Object(o.jsxs)("div",{className:"card horizontal",style:{borderColor:a},children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:t.picture,alt:t.name})}),Object(o.jsx)("div",{className:"card-stacked",children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("p",{children:t.name}),Object(o.jsx)("p",{children:Object(o.jsx)("small",{children:r(t.created)})}),t.types.map((e=>Object(o.jsx)("span",{className:i(e),children:e},e)))]})})]})})};var m=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}];class p{static getPokemons(){return this.isDev?fetch("http://localhost:3001/pokemons").then((e=>e.json())).catch((e=>this.handleError(e))):new Promise((e=>{e(this.pokemons)}))}static getPokemon(e){return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((e=>e.json())).then((e=>this.isEmpty(e)?null:e)).catch((e=>this.handleError(e))):new Promise((t=>{t(this.pokemons.find((t=>e===t.id)))}))}static updatePokemon(e){return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).catch((e=>this.handleError(e))):new Promise((t=>{const{id:s}=e,c=this.pokemons.findIndex((e=>e.id===s));this.pokemons[c]=e,t(e)}))}static deletePokemon(e){return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).catch((e=>this.handleError(e))):new Promise((t=>{const{id:s}=e;this.pokemons=this.pokemons.filter((e=>e.id!==s)),t({})}))}static addPokemon(e){return delete e.created,this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).catch((e=>this.handleError(e))):new Promise((t=>{this.pokemons.push(e),t(e)}))}static searchPokemon(e){return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((e=>e.json())).catch((e=>this.handleError(e))):new Promise((t=>{t(this.pokemons.filter((t=>t.name.includes(e))))}))}static isEmpty(e){return 0===Object.keys(e).length}static handleError(e){console.error(e)}}p.pokemons=m,p.isDev=!1;var j=s(4);var h=()=>{const[e,t]=Object(c.useState)(""),[s,a]=Object(c.useState)([]);return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col s12 m6 offset-m3",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("div",{className:"input-field",children:Object(o.jsx)("input",{type:"text",placeholder:"Rechercher un pok\xe9mon",value:e,onChange:e=>(e=>{const s=e.target.value;t(s),s.length<=1?a([]):p.searchPokemon(s).then((e=>a(e)))})(e)})}),Object(o.jsx)("div",{className:"collection",children:s.map((e=>Object(o.jsx)(j.b,{to:"/pokemons/".concat(e.id),className:"collection-item",children:e.name},e.id)))})]})})})})};var b=()=>{const[e,t]=Object(c.useState)([]);return Object(c.useEffect)((()=>{p.getPokemons().then((e=>t(e)))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"center",children:"Pok\xe9dex"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(h,{}),e.map((e=>Object(o.jsx)(d,{pokemon:e},e.id)))]}),Object(o.jsx)(j.b,{className:"btn-floating btn-large waves-effect waves-light red z-depth-3",style:{position:"fixed",bottom:"25px",right:"25px"},to:"/pokemon/post",children:Object(o.jsx)("i",{className:"fa fa-plus"})})]})]})};var u=()=>Object(o.jsx)("div",{className:"preloader-wrapper big active",children:Object(o.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(o.jsx)("div",{className:"circle-clipper left",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"gap-patch",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"circle-clipper right",children:Object(o.jsx)("div",{className:"circle"})})]})});var v=()=>{const{id:e}=Object(l.s)(),[t,s]=Object(c.useState)();return Object(c.useEffect)((()=>{p.getPokemon(Number(e)).then((e=>s(e||void 0)))}),[e]),Object(o.jsx)("div",{children:t?Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col s12 m8 offset-m2",children:[Object(o.jsx)("h2",{className:"header center",children:t.name}),Object(o.jsxs)("div",{className:"card hoverable",children:[Object(o.jsxs)("div",{className:"card-image",children:[Object(o.jsx)("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),Object(o.jsx)(j.b,{to:"/pokemon/edit/".concat(t.id),className:"btn btn-floating halfway-fab waves-effect waves-light",children:Object(o.jsx)("i",{className:"fa-solid fa-pen"})})]}),Object(o.jsxs)("div",{className:"card-stacked",children:[Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("table",{className:"bordered striped",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Nom"}),Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:t.name})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Points de vie"}),Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:t.hp})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"D\xe9g\xe2ts"}),Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:t.cp})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Types"}),Object(o.jsx)("td",{children:t.types.map((e=>Object(o.jsx)("span",{className:i(e),children:e},e)))})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Date de cr\xe9ation"}),Object(o.jsx)("td",{children:r(t.created)})]})]})})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(j.b,{to:"/",children:"Retour"})})]})]})]})}):Object(o.jsx)("h4",{className:"center",children:Object(o.jsx)(u,{})})})};var x=()=>Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),Object(o.jsx)("h1",{children:"Hey, cette page n'existe pas !"}),Object(o.jsx)(j.b,{to:"/",className:"waves-effect waves-teal btn-flat",children:"Retourner \xe0 l'accueil"})]});var O=e=>{let{pokemon:t,isEditForm:s}=e;const a=Object(l.q)(),[n,r]=Object(c.useState)({picture:{value:t.picture,isValid:!0},name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0}}),d=e=>n.types.value.includes(e),m=e=>{const t={[e.target.name]:{value:e.target.value}};r({...n,...t})},j=e=>(1!==n.types.value.length||!d(e))&&!(n.types.value.length>=3&&!d(e)),h=e=>{e.preventDefault();(()=>{let e=n;if(v()){const t="https://assets.pokemon.com//cms2/img/pokedex/detail/",s=".png";if(n.picture.value.startsWith(t)&&n.picture.value.endsWith(s)){const t={value:n.picture.value,error:"",isValid:!0};e={...e,picture:t}}else{const t="L'url n'est pas valide.",s={value:n.picture.value,error:t,isValid:!1};e={...e,picture:s}}}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(n.name.value)){const t={value:n.name.value,error:"",isValid:!0};e={...e,name:t}}else{const t="Le nom du pok\xe9mon est requis (1-25).",s={value:n.name.value,error:t,isValid:!1};e={...e,name:s}}if(/^[0-9]{1,3}$/.test(n.hp.value)){const t={value:n.hp.value,error:"",isValid:!0};e={...e,hp:t}}else{const t="Les points de vie du pok\xe9mon sont compris entre 0 et 999.",s={value:n.hp.value,error:t,isValid:!1};e={...e,hp:s}}if(/^[0-9]{1,2}$/.test(n.cp.value)){const t={value:n.cp.value,error:"",isValid:!0};e={...e,cp:t}}else{const t="Les d\xe9g\xe2ts du pok\xe9mon sont compris entre 0 et 99",s={value:n.cp.value,error:t,isValid:!1};e={...e,cp:s}}return r(e),e.name.isValid&&e.hp.isValid&&e.cp.isValid})()&&(t.name=n.name.value,t.hp=n.hp.value,t.cp=n.cp.value,t.types=n.types.value,t.picture=n.picture.value,s?u():b())},b=async()=>await p.addPokemon(t),u=()=>{p.updatePokemon(t).then((()=>a("/pokemons/".concat(t.id))))},v=()=>!s;return Object(o.jsx)("form",{onSubmit:e=>h(e),children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(o.jsxs)("div",{className:"card hoverable",children:[s&&Object(o.jsxs)("div",{className:"card-image",children:[Object(o.jsx)("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),Object(o.jsx)("span",{className:"btn-floating halfway-fab waves-effect waves-light",children:Object(o.jsx)("i",{onClick:()=>{p.deletePokemon(t).then((()=>a("/pokemons")))},className:"material-icons",children:"delete"})})]}),Object(o.jsxs)("div",{className:"card-stacked",children:[Object(o.jsxs)("div",{className:"card-content",children:[v()&&Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Image"}),Object(o.jsx)("input",{id:"picture",name:"picture",type:"text",className:"form-control",value:n.picture.value,onChange:e=>m(e)}),n.picture.error&&Object(o.jsx)("div",{className:"card-pannel red accent-1",children:n.picture.error})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(o.jsx)("input",{id:"name",name:"name",type:"text",className:"form-control",value:n.name.value,onChange:e=>m(e)}),n.name.error&&Object(o.jsx)("div",{className:"card-pannel red accent-1",children:n.name.error})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"hp",children:"Point de vie"}),Object(o.jsx)("input",{id:"hp",name:"hp",type:"number",className:"form-control",value:n.hp.value,onChange:e=>m(e)}),n.hp.error&&Object(o.jsx)("div",{className:"card-pannel red accent-1",children:n.hp.error})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"cp",children:"D\xe9g\xe2ts"}),Object(o.jsx)("input",{id:"cp",name:"cp",type:"number",className:"form-control",value:n.cp.value,onChange:e=>m(e)}),n.cp.error&&Object(o.jsx)("div",{className:"card-pannel red accent-1",children:n.cp.error})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Types"}),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((e=>Object(o.jsx)("div",{style:{marginBottom:"10px"},children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{id:e,type:"checkbox",className:"filled-in",value:e,disabled:!j(e),checked:d(e),onChange:t=>((e,t)=>{let s;s=t.target.checked?{value:n.types.value.concat([e])}:{value:n.types.value.filter((t=>t!==e))};r({...n,types:s})})(e,t)}),Object(o.jsx)("span",{children:Object(o.jsx)("p",{className:i(e),children:e})})]})},e)))]})]}),Object(o.jsx)("div",{className:"card-action center",children:Object(o.jsx)("button",{type:"submit",className:"btn",children:"Valider"})})]})]})})})})};var g=()=>{const{id:e}=Object(l.s)(),[t,s]=Object(c.useState)();return Object(c.useEffect)((()=>{p.getPokemon(Number(e)).then((e=>s(e||void 0)))}),[e]),Object(o.jsx)("div",{children:t?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("h2",{className:"header center",children:["\xc9diter ",t.name]}),Object(o.jsx)(O,{pokemon:t,isEditForm:!0})]}):Object(o.jsx)("h4",{className:"center",children:Object(o.jsx)(u,{})})})};class k{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=e,this.hp=t,this.cp=s,this.name=c,this.picture=a,this.types=n,this.created=r}}var N=()=>{const[e]=Object(c.useState)((new Date).getTime()),[t]=Object(c.useState)(new k(e));return Object(o.jsxs)("div",{className:'"row',children:[Object(o.jsx)("h2",{className:"header center",children:"Ajouter un pok\xe9mon"}),Object(o.jsx)(O,{pokemon:t,isEditForm:!1})]})};class f{static login(e,t){const s="Pokemon"===e&&"Pokedex"===t;return new Promise((e=>{setTimeout((()=>{this.isAuthenticated=s,e(s)}),1e3)}))}}f.isAuthenticated=!1;var y=()=>{const e=Object(l.q)(),[t,s]=Object(c.useState)({username:{value:""},password:{value:""}}),[a,n]=Object(c.useState)("Vous \xeates d\xe9connect\xe9. (Pokemon / Pokedex)"),r=e=>{const c={[e.target.name]:{value:e.target.value}};s({...t,...c})},i=c=>{c.preventDefault();(()=>{let e=t;if(t.username.value.length<3){const s="Votre pr\xe9nom doit faire au moins 3 caract\xe8res de long.",c={value:t.username.value,error:s,isValid:!1};e={...e,username:c}}else{const s={value:t.username.value,error:"",isValid:!0};e={...e,username:s}}if(t.password.value.length<6){const s="Votre mot de passe doit faire au moins 6 caract\xe8res de long.",c={value:t.password.value,error:s,isValid:!1};e={...e,password:c}}else{const s={value:t.password.value,error:"",isValid:!0};e={...e,password:s}}return s(e),e.username.isValid&&e.password.isValid})()&&(n("\ud83d\udc49 Tentative de connexion en cours ..."),f.login(t.username.value,t.password.value).then((t=>{t?e("/pokemons"):n("\ud83d\udd10 Identifiant ou mot de passe incorrect.")})))};return Object(o.jsx)("form",{onSubmit:e=>i(e),children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(o.jsx)("div",{className:"card hoverable",children:Object(o.jsxs)("div",{className:"card-stacked",children:[Object(o.jsxs)("div",{className:"card-content",children:[a&&Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("div",{className:"card-panel grey lighten-5",children:a})}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Identifiant"}),Object(o.jsx)("input",{id:"username",type:"text",name:"username",className:"form-control",value:t.username.value,onChange:e=>r(e)}),t.username.error&&Object(o.jsx)("div",{className:"card-panel red accent-1",children:t.username.error})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(o.jsx)("input",{id:"password",type:"password",name:"password",className:"form-control",value:t.password.value,onChange:e=>r(e)}),t.password.error&&Object(o.jsx)("div",{className:"card-panel red accent-1",children:t.password.error})]})]}),Object(o.jsx)("div",{className:"card-action center",children:Object(o.jsx)("button",{type:"submit",className:"btn",children:"Valider"})})]})})})})})};var w=e=>{let{redirectPath:t="/login"}=e;return f.isAuthenticated?Object(o.jsx)(l.b,{}):Object(o.jsx)(l.a,{to:t,replace:!0})};var P=()=>Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"nav-wraper teal",children:Object(o.jsx)(j.b,{to:"/",className:"brand-logo center",children:"Pok\xe9dex"})})}),Object(o.jsxs)(l.e,{children:[Object(o.jsx)(l.c,{path:"/login",element:Object(o.jsx)(y,{})}),Object(o.jsxs)(l.c,{element:Object(o.jsx)(w,{}),children:[Object(o.jsx)(l.c,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(l.c,{path:"/pokemons",element:Object(o.jsx)(b,{})}),Object(o.jsx)(l.c,{path:"/pokemon/post",element:Object(o.jsx)(N,{})}),Object(o.jsx)(l.c,{path:"/pokemon/edit/:id",element:Object(o.jsx)(g,{})}),Object(o.jsx)(l.c,{path:"/pokemons/:id",element:Object(o.jsx)(v,{})})]}),Object(o.jsx)(l.c,{element:Object(o.jsx)(x,{})})]})]})});n.a.render(Object(o.jsx)(P,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1c527eab.chunk.js.map