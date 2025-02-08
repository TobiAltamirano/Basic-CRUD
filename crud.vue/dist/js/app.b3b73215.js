(function(){"use strict";var t={684:function(t,e,o){var r=o(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a=o(2631),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"container-login"},[e("div",[e("h1",{staticClass:"h1-form"},[t._v("Inicia sesión para continuar")]),e("form",{attrs:{id:"contact-form"}},[e("LoginUsername"),e("LoginPassword"),e("LoginButton")],1)])])])},l=[],c=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"label-form"},[t._v("Usuario")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-form",class:[t.validate?"input-valid":"input-invalid"],attrs:{type:"text",placeholder:"Nombre de usuario"},domProps:{value:t.username},on:{input:[function(e){e.target.composing||(t.username=e.target.value)},t.autent]}}),t.validate?e("p",{staticClass:"p-cardValid"},[t._v(" El nombre de usuario es válido ")]):e("p",{staticClass:"p-cardInvalid"},[t._v(' El nombre de usuario es incorrecto. Debe tener entre 5 y 20 caracteres y contener el símbolo "@". ')])])},u=[],d={data(){return{username:""}},computed:{validate(){const t=/^.{5,20}@.*$/;return t.test(this.username)}},methods:{autent(){this.$root.$emit("username",this.username)}}},p=d,m=o(1001),h=(0,m.Z)(p,c,u,!1,null,null,null),v=h.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"label-form"},[t._v("Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-form",class:[t.validate?"input-valid":"input-invalid"],attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},t.autent]}}),t.validate?e("p",{staticClass:"p-cardValid"},[t._v(" La contraseña es válido ")]):e("p",{staticClass:"p-cardInvalid"},[t._v(" La contraseña es inválida. Debe tener entre 5 y 20 caracteres. ")])])},g=[],_={data(){return{password:""}},computed:{validate(){const t=this.password.length;return t>=5&&t<=20}},methods:{autent(){this.$root.$emit("password",this.password)}}},b=_,k=(0,m.Z)(b,f,g,!1,null,null,null),C=k.exports,x=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"button-form",on:{click:t.checkCredentials}},[e("p",[t._v("Ingresar")])]),t.showErrorMessage?e("p",{staticClass:"error-message"},[t._v(" "+t._s(t.ErrorMessage)+" ")]):t._e()])},w=[],P=(o(7658),{data(){return{UserValidate:null,PasswordValidate:null,ErrorMessage:""}},mounted(){this.$root.$on("username",(t=>{this.UserValidate=t})),this.$root.$on("password",(t=>{this.PasswordValidate=t}))},computed:{canLogin(){return"admin@istra.dor"==this.UserValidate&&"supersecreta"==this.PasswordValidate},showErrorMessage(){return"Nombre de usuario y/o contraseña incorrectos"===this.ErrorMessage}},methods:{checkCredentials(){this.canLogin?(this.$router.push("/menu"),localStorage.setItem("isLoggedIn",!0)):this.ErrorMessage="Nombre de usuario y/o contraseña incorrectos"}}}),E=P,y=(0,m.Z)(E,x,w,!1,null,null,null),N=y.exports,S={components:{LoginUsername:v,LoginPassword:C,LoginButton:N}},T=S,$=(0,m.Z)(T,n,l,!1,null,null,null),L=$.exports,M=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"menu"}},[e("div",[e("h1",{staticClass:"h1-menu"},[t._v("¡Bienvenido a tu Panel de Control!")]),t._m(0),e("div",{staticClass:"nav-footer"},[e("router-link",{attrs:{to:"/clientes"}},[e("span",[t._v("Clientes")])]),e("router-link",{attrs:{to:"/productos"}},[e("span",[t._v("Productos")])])],1),e("div",{staticClass:"container-router-view"},[e("router-view")],1),e("LogoutButton")],1)])},Z=[function(){var t=this,e=t._self._c;return e("h2",[t._v("Aquí podrás verificar el estado de tus productos y clientes "),e("br"),t._v(" de forma rápida y sencilla. ¡Administra tu negocio de manera eficiente!")])}],I=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"logout"}},[e("button",{staticClass:"button-menu",on:{click:t.logout}},[e("p",[t._v("Cerrar sesión")])])])},R=[],j={methods:{logout(){localStorage.removeItem("isLoggedIn"),this.$router.push("/")}}},A=j,O=(0,m.Z)(A,I,R,!1,null,null,null),V=O.exports,U={data(){return{isLoggedIn:"true"===localStorage.getItem("isLoggedIn")}},components:{LogoutButton:V},created(){this.LoginValidation()},methods:{LoginValidation(){this.isLoggedIn||this.$router.push("/")}}},B=U,z=(0,m.Z)(B,M,Z,!1,null,null,null),F=z.exports,J=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"clients-page"}},[e("div",{staticClass:"header-container"},[e("h1",{staticClass:"clients-h1"},[t._v("Listado de clientes")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input-clients",attrs:{type:"text",placeholder:"Buscar por nombre o apellido"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),e("div",{staticClass:"clientes-container"},t._l(t.filteredClientes,(function(o){return e("div",{key:o.id,staticClass:"cliente-card"},[e("img",{staticClass:"card-img-top-clients",attrs:{src:o.foto,alt:"Foto Cliente"}}),e("div",[e("div",{staticClass:"names-container"},[e("h2",{domProps:{innerHTML:t._s(t.highlightText(o.nombre))}}),e("h2",{domProps:{innerHTML:t._s(t.highlightText(o.apellido))}})]),e("p",[t._v(" Fecha de última compra: "),e("br"),t._v(" "+t._s(o.fechaUltimaCompra)+" ")])])])})),0)])},D=[],q=JSON.parse('{"y":[{"id":1,"foto":"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","nombre":"Juan","apellido":"Pérez","fechaUltimaCompra":"10-05-2023"},{"id":2,"foto":"https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg","nombre":"María","apellido":"Gómez","fechaUltimaCompra":"15-06-2023"},{"id":3,"foto":"https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg","nombre":"Carlos","apellido":"Rodríguez","fechaUltimaCompra":"20-04-2023"},{"id":4,"foto":"https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4","nombre":"Laura","apellido":"Martínez","fechaUltimaCompra":"05-07-2023"},{"id":5,"foto":"https://www.trendtic.cl/wp-content/uploads/2018/05/003-Rub%C3%A9n-Belluomo-INFOR-2018.jpg","nombre":"Manuel","apellido":"Olvarría","fechaUltimaCompra":"17-07-2023"}]}'),H={data(){return{clientes:q.y,searchText:""}},computed:{filteredClientes(){const t=this.searchText.toLowerCase().trim();return this.clientes.filter((e=>e.nombre.toLowerCase().startsWith(t)||e.apellido.toLowerCase().startsWith(t)))}},methods:{highlightText(t){if(!this.searchText)return t;const e=new RegExp(this.searchText,"gi");return t.replace(e,(t=>`<span class="span-text">${t}</span>`))}}},G=H,W=(0,m.Z)(G,J,D,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"products-page"}},[e("div",{staticClass:"header-container"},[e("h1",{staticClass:"products-h1"},[t._v("Listado de Productos")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input-products",attrs:{type:"text",placeholder:"Buscar por modelo"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),e("div",{staticClass:"products-container"},t._l(t.filteredProductos,(function(o){return e("div",{key:o.id,staticClass:"products-card"},[e("router-link",{staticClass:"router-link-styles",attrs:{to:`/productos/${o.id}/editar`}},[e("img",{staticClass:"card-img-top-products",attrs:{src:o.foto,alt:"Foto Producto"}}),e("div",[e("div",{staticClass:"info-container"},[e("h2",{staticClass:"h2-products",domProps:{innerHTML:t._s(t.highlightText(o.nombre))}}),e("h2",{staticClass:"h2-products",domProps:{innerHTML:t._s(t.highlightText(o.modelo))}}),e("h3",{staticClass:"h3-products"},[t._v(t._s(o.precio))])]),e("p",{class:t.stockColor(o.stock)},[t._v("Stock: "+t._s(o.stock))])])])],1)})),0)])},K=[],Q=JSON.parse('{"R":[{"id":"1","foto":"https://nikearprod.vtexassets.com/arquivos/ids/531176/DR0148_100_A_PREM.jpg?v=638161375244170000","nombre":"Zapatillas Nike","modelo":"Air Force 1","precio":"3999.99 ARS","stock":5},{"id":"2","foto":"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw50c530a7/products/NI_CT1265-300/NI_CT1265-300-1.JPG","nombre":"Zapatillas Nike","modelo":"Air Max 270","precio":"4599.99 ARS","stock":4},{"id":"3","foto":"https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/I/CI3831-800_0.jpg","nombre":"Zapatillas Nike","modelo":"React Element","precio":"3799.99 ARS","stock":0},{"id":"4","foto":"https://nikearprod.vtexassets.com/arquivos/ids/380438-800-800?v=638138949399100000&width=800&height=800&aspect=true","nombre":"Zapatillas Nike","modelo":"Zoom Pegasus","precio":"3299.99 ARS","stock":3},{"id":"5","foto":"https://nikearprod.vtexassets.com/arquivos/ids/531140/DQ8426_060_A_PREM.jpg?v=638161374684830000","nombre":"Zapatillas Nike","modelo":"Air Jordan 1","precio":"5499.99 ARS","stock":1},{"id":"6","foto":"https://nikearprod.vtexassets.com/arquivos/ids/542903/DV0796_001_C_PREM.jpg?v=638162167203270000","nombre":"Zapatillas Nike","modelo":"Blazer Mid","precio":"3199.99 ARS","stock":0},{"id":"7","foto":"https://d3ugyf2ht6aenh.cloudfront.net/stores/986/786/products/4f35a12d-78f9-484d-a0c1-9102e35b71b6-95fa6e928cb2cc930c16615635866492-480-0.jpeg","nombre":"Zapatillas Nike","modelo":"Kyrie Low","precio":"4199.99 ARS","stock":7},{"id":"8","foto":"https://nikearprod.vtexassets.com/arquivos/ids/700165-800-800?v=638229717993930000&width=800&height=800&aspect=true","nombre":"Zapatillas Nike","modelo":"Air Max 90","precio":"4899.99 ARS","stock":6},{"id":"9","foto":"https://nikearprod.vtexassets.com/arquivos/ids/643436/CZ1891_008_A_PREM.jpg?v=638211346279830000","nombre":"Zapatillas Nike","modelo":"Free Run","precio":"3499.99 ARS","stock":2},{"id":"10","foto":"https://d3ugyf2ht6aenh.cloudfront.net/stores/194/524/products/0011-09841aca97440aa05016567900029100-1024-1024.jpg","nombre":"Zapatillas Nike","modelo":"SB Dunk Low","precio":"4299.99 ARS","stock":5}]}'),tt={data(){return{searchText:"",productos:[]}},computed:{filteredProductos(){const t=this.searchText.toLowerCase().trim();return this.productos.filter((e=>e.modelo.toLowerCase().startsWith(t)))}},methods:{highlightText(t){if(!this.searchText)return t;const e=new RegExp(this.searchText,"gi");return t.replace(e,(t=>`<span class="span-text">${t}</span>`))},stockColor(t){return 0===t?"stock-red":t<4?"stock-yellow":"stock-green"},initializeProductos(){const t=localStorage.getItem("productos");t?this.productos=JSON.parse(t):(this.productos=Q.R,localStorage.setItem("productos",JSON.stringify(this.productos)))},actualizarProductos(){const t=localStorage.getItem("productos");t&&(this.productos=JSON.parse(t))}},created(){this.initializeProductos()}},et=tt,ot=(0,m.Z)(et,Y,K,!1,null,null,null),rt=ot.exports,st=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"editPage"}},[e("router-link",{staticClass:"back-button",attrs:{to:"/productos"}},[t._v(" ← Volver a Productos")]),e("div",{staticClass:"container-login"},[e("div",[e("h1",{staticClass:"h1-form"},[t._v("Editar Producto")]),e("h2",[t._v("Zapatillas Nike")]),e("form",[e("ProductEditTitle"),e("ProductEditPrice"),e("ProductEditStock"),e("button",{staticClass:"button-form",on:{click:function(e){return t.guardarCambios()}}},[e("p",[t._v("Guardar Cambios")])]),t.showErrorMessage?e("p",{staticClass:"error-message"},[t._v(" "+t._s(t.ErrorMessage)+" ")]):t._e()],1)])])],1)},it=[],at=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"label-form",attrs:{for:"titulo"}},[t._v("Modelo:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"input-form",attrs:{type:"text",id:"titulo"},domProps:{value:t.titulo},on:{input:[function(e){e.target.composing||(t.titulo=e.target.value)},t.validateTitulo]}}),t.errors.titulo?e("p",{staticClass:"p-cardInvalid"},[t._v(t._s(t.errors.titulo))]):e("p",{staticClass:"p-cardValid"},[t._v(" El titulo ingresado es válido ")])])},nt=[],lt={data(){return{titulo:"",errors:{titulo:""}}},methods:{validateTitulo(){this.errors.titulo="",this.titulo?this.titulo.length<10||this.titulo.length>100?this.errors.titulo="El título debe contener entre 10 y 100 caracteres.":/^[a-zA-Z0-9\s]+$/.test(this.titulo)?this.$root.$emit("correct-title",this.titulo):this.errors.titulo="El título solo puede contener letras, espacios y números.":this.errors.titulo="El título es obligatorio."}}},ct=lt,ut=(0,m.Z)(ct,at,nt,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"label-form",attrs:{for:"precio"}},[t._v("Precio (ARS):")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.precio,expression:"precio",modifiers:{number:!0}}],staticClass:"input-form",attrs:{type:"number",step:"0.01",id:"precio"},domProps:{value:t.precio},on:{input:[function(e){e.target.composing||(t.precio=t._n(e.target.value))},t.validatePrecio],blur:function(e){return t.$forceUpdate()}}}),t.errors.precio?e("p",{staticClass:"p-cardInvalid"},[t._v(t._s(t.errors.precio))]):e("p",{staticClass:"p-cardValid"},[t._v(" El precio ingresado es válido ")])])},mt=[],ht={data(){return{precio:"",errors:{precio:""}}},methods:{validatePrecio(){this.errors.precio="",""===this.precio?this.errors.precio="El precio es obligatorio.":isNaN(this.precio)?this.errors.precio="El precio debe ser un número válido.":this.precio<0?this.errors.precio="El precio no puede ser menor a 0.":(this.precio=`${parseFloat(this.precio).toFixed(2)} ARS`,this.$root.$emit("correct-price",this.precio))}}},vt=ht,ft=(0,m.Z)(vt,pt,mt,!1,null,null,null),gt=ft.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"label-form",attrs:{for:"stock"}},[t._v("Stock:")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.stock,expression:"stock",modifiers:{number:!0}}],staticClass:"input-form",attrs:{type:"number",id:"stock"},domProps:{value:t.stock},on:{input:[function(e){e.target.composing||(t.stock=t._n(e.target.value))},t.validateStock],blur:function(e){return t.$forceUpdate()}}}),t.errors.stock?e("p",{staticClass:"p-cardInvalid"},[t._v(t._s(t.errors.stock))]):e("p",{staticClass:"p-cardValid"},[t._v(" El stock ingresado es válido ")])])},bt=[],kt={data(){return{stock:null,errors:{stock:""}}},methods:{validateStock(){this.errors.stock="",null===this.stock?this.errors.stock="El stock es obligatorio.":Number.isInteger(this.stock)?this.stock<0?this.errors.stock="El stock no puede ser menor a 0.":this.$root.$emit("correct-stock",this.stock):this.errors.stock="El stock debe ser un número entero."}}},Ct=kt,xt=(0,m.Z)(Ct,_t,bt,!1,null,null,null),wt=xt.exports,Pt={components:{ProductEditTitle:dt,ProductEditPrice:gt,ProductEditStock:wt},data(){return{modelo:null,precio:null,stock:null,ErrorMessage:""}},mounted(){this.$root.$on("correct-title",(t=>{this.modelo=t})),this.$root.$on("correct-price",(t=>{this.precio=t})),this.$root.$on("correct-stock",(t=>{this.stock=t}))},computed:{correctEdit(){return this.modelo&&this.precio&&this.stock},showErrorMessage(){return"Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente."===this.ErrorMessage}},methods:{guardarCambios(){if(this.correctEdit){const t=this.$route.params.id;let e=JSON.parse(localStorage.getItem("productos"))||[];const o=e.findIndex((e=>e.id===t));-1!==o?(e[o].modelo=this.modelo,e[o].precio=this.precio,e[o].stock=this.stock,localStorage.setItem("productos",JSON.stringify(e)),this.$router.push("/productos")):this.ErrorMessage="Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente."}else this.ErrorMessage="Error en la solicitud, corrija los campos resaltados en rojo e inténtalo nuevamente."}}},Et=Pt,yt=(0,m.Z)(Et,st,it,!1,null,null,null),Nt=yt.exports;r.ZP.use(a.Z);const St=new a.Z({routes:[{path:"/",component:L},{path:"/menu",component:F,children:[{path:"/clientes",component:X},{path:"/productos",component:rt}]},{path:"/productos/:id/editar",component:Nt}]});var Tt={name:"App",router:St},$t=Tt,Lt=(0,m.Z)($t,s,i,!1,null,null,null),Mt=Lt.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(Mt)}).$mount("#app")}},e={};function o(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,r,s,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],i=t[u][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(n=!1,i<a&&(a=i));if(n){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,s,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,a=r[0],n=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(l)var u=l(o)}for(e&&e(r);c<a.length;c++)i=a[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},r=self["webpackChunkcrud_vue"]=self["webpackChunkcrud_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(684)}));r=o.O(r)})();
//# sourceMappingURL=app.b3b73215.js.map