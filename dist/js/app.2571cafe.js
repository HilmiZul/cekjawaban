(function(a){function t(t){for(var e,r,l=t[0],o=t[1],c=t[2],d=0,h=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var a,t=0;t<s.length;t++){for(var n=s[t],e=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(e=!1)}e&&(s.splice(t--,1),a=r(r.s=n[0]))}return a}var e={},i={app:0},s=[];function r(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return a[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=a,r.c=e,r.d=function(a,t,n){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)r.d(n,e,function(t){return a[t]}.bind(null,e));return n},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(a,t,n){a.exports=n("56d7")},"034f":function(a,t,n){"use strict";n("85ec")},"3cfd":function(a,t,n){},"56d7":function(a,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"title"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h2",{staticClass:"text-center pt-5 pb-5"},[a._v("🧐 "+a._s(a.title)+" 🧐")])])])])]),n("router-view")],1)},s=[],r={name:"App",data:function(){return{title:"Cek Jawaban PG."}}},l=r,o=(n("034f"),n("2877")),c=Object(o["a"])(l,i,s,!1,null,null,null),u=c.exports,d=(n("83bf"),n("ce0d"),n("8c4f")),h=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",{staticClass:"konten"},[n("div",{staticClass:"container-fluid pb-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("table",{staticClass:"table table-bordered"},[n("tbody",[n("tr",[n("th",[a._v("Jumlah Soal")]),n("td",{attrs:{width:"40%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.pengaturan.jumlahSoal,expression:"pengaturan.jumlahSoal"}],staticClass:"form-control",attrs:{type:"number",disabled:""},domProps:{value:a.pengaturan.jumlahSoal},on:{input:function(t){t.target.composing||a.$set(a.pengaturan,"jumlahSoal",t.target.value)}}})])]),n("tr",[n("th",[a._v("Skor per soal")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:a.pengaturan.skorSoal,expression:"pengaturan.skorSoal"}],staticClass:"form-control",attrs:{type:"number",min:"0",autofocus:""},domProps:{value:a.pengaturan.skorSoal},on:{input:function(t){t.target.composing||a.$set(a.pengaturan,"skorSoal",t.target.value)}}})])])])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card mb-5"},[n("div",{staticClass:"card-header bg-blue"},[n("h5",[a.dikunci?n("i",{staticClass:"fa fa-lock"}):a._e(),a.dikunci?a._e():n("i",{staticClass:"fa fa-unlock"}),a._v(" Kunci Jawaban ")])]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.kunci,expression:"kunci"}],staticClass:"form-control form-control-lg letter-space",attrs:{type:"text",pattern:"[a-z]+",maxlength:"20",placeholder:"contoh: adcbcedeecaedaadcaba",disabled:a.dikunci},domProps:{value:a.kunci},on:{input:function(t){t.target.composing||(a.kunci=t.target.value)}}})]),a.kunci.length<1?n("span",[a._v("Silakan isi kunci jawaban!")]):a.kunci.length>19?n("span",[a.dikunci?n("button",{staticClass:"btn btn-danger mr-2",on:{click:this.kunciJawaban}},[a._v("Ubah!")]):n("button",{staticClass:"btn btn-dark mr-2",on:{click:this.kunciJawaban}},[a._v("Kunci!")]),a.dikunci?n("em",[a._v("Selesai")]):a._e()]):n("span",[n("em",[a._v(a._s(a.kunci.length)+" dari "+a._s(a.pengaturan.jumlahSoal)+" soal")])])])])]),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card mb-5"},[a._m(0),n("div",{staticClass:"card-body"},[n("form",{on:{submit:function(t){return t.preventDefault(),a.cekJawaban.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.jawaban,expression:"jawaban"}],staticClass:"form-control form-control-lg letter-space",attrs:{type:"text",maxlength:"20",placeholder:"contoh: abcde",disabled:a.kunci.length<20},domProps:{value:a.jawaban},on:{input:function(t){t.target.composing||(a.jawaban=t.target.value)}}})]),a.jawaban.length>19?n("span",[a.kunci.length>19?n("button",{staticClass:"btn btn-dark mr-2",attrs:{disabled:a.jawaban.length<20}},[a._v("Cek Jawban!")]):a._e(),a.kunci.length>19?n("button",{staticClass:"btn btn-outline-danger",attrs:{disabled:a.jawaban<20},on:{click:this.resetSemua}},[a._v("Reset!")]):a._e()]):a.jawaban.length>0?n("span",[n("em",[a._v(a._s(a.jawaban.length)+" dari "+a._s(a.kunci.length)+" jawaban!")])]):a._e(),a.kunci.length>19?n("span",[a.jawaban.length<1?n("span",[n("em",[a._v("Silakan isi jawaban dari siswa!")])]):a._e()]):a._e()])])])]),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card mb-3"},[a._m(1),n("div",{staticClass:"card-body"},[n("h3",[a._v("✅ "+a._s(a.hasil.benar))]),n("h3",[a._v("❌ "+a._s(a.hasil.salah))]),n("h3",[a._v("Niliai: "+a._s(a.hasil.nilai))])])])])])])])},p=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"card-header bg-yellow"},[n("h5",[n("i",{staticClass:"fa fa-users"}),a._v(" Jawaban Siswa")])])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"card-header bg-green"},[n("h5",[n("i",{staticClass:"fa fa-print"}),a._v(" Hasil")])])}],b={data:function(){return{jawaban:[],kunci:[],hasil:{benar:0,salah:0,nilai:0},pengaturan:{jumlahSoal:20,skorSoal:0},dikunci:!1}},methods:{cekJawaban:function(){this.resetBeforeCheck();for(var a=0;a<this.kunci.length;a++)this.jawaban[a]===this.kunci[a]?this.hasil.benar=this.hasil.benar+1:this.hasil.salah=this.hasil.salah+1;this.hasil.nilai=this.hasil.benar*this.pengaturan.skorSoal},resetBeforeCheck:function(){this.hasil.benar=0,this.hasil.salah=0},resetSemua:function(){this.hasil.benar=0,this.hasil.salah=0,this.hasil.nilai=0,this.jawaban=[]},kunciJawaban:function(){this.dikunci?this.dikunci=!1:this.dikunci=!0}}},f=b,v=(n("f6b2"),Object(o["a"])(f,h,p,!1,null,"160cf99c",null)),m=v.exports;e["a"].use(d["a"]);var g=[{path:"/",name:"CekJawaban",component:m}],k=new d["a"]({routes:g}),w=k;e["a"].config.productionTip=!1,new e["a"]({router:w,render:function(a){return a(u)}}).$mount("#app")},"83bf":function(a,t,n){},"85ec":function(a,t,n){},ce0d:function(a,t,n){},f6b2:function(a,t,n){"use strict";n("3cfd")}});
//# sourceMappingURL=app.2571cafe.js.map