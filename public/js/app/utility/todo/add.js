(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{BkDE:function(t,e,a){"use strict";var r=a("g+26"),o=a("g6NE").a.getters["config/vars"],i={extends:r.a,data:function(){return{formData:{uuid:null,title:"",date:moment().format(o.serverDateFormat),time:null,description:""},formLabels:{title:$t("utility.todo.props.title"),description:$t("utility.todo.props.description"),date:$t("utility.todo.props.date"),time:$t("utility.todo.props.time")},initUrl:"utility/todos",timeFields:["time"]}},mounted:function(){this.isLoading=!1}},s=a("KHd+"),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-4"},[a("base-input",{attrs:{"auto-focus":"",label:t.formLabels.title,type:"text",error:t.formErrors.title,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"title",e)}},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("base-input",{attrs:{label:t.formLabels.date,"addon-right-icon":"far fa-calendar-alt",type:"text",error:t.formErrors.date,"is-wrapper":!0,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"date",e)}},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}},[a("date-picker",{staticClass:"form-control datepicker",attrs:{config:t.vars.datepickerConfig},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 mb-4"},[a("base-input",{attrs:{label:t.formLabels.time,"addon-right-icon":"far fa-calendar-alt",type:"text",error:t.formErrors.time,"is-wrapper":!0},on:{"update:error":function(e){return t.$set(t.formErrors,"time",e)}},model:{value:t.formData.time,callback:function(e){t.$set(t.formData,"time",e)},expression:"formData.time"}},[a("date-picker",{staticClass:"form-control datepicker",attrs:{config:t.vars.timepickerConfig},model:{value:t.formData.time,callback:function(e){t.$set(t.formData,"time",e)},expression:"formData.time"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-md-12 mb-4"},[a("base-input",{attrs:{label:t.formLabels.description,type:"text",error:t.formErrors.description},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)]),t._v(" "),a("div",{staticClass:"form-footer mt-3"},[a("div",{staticClass:"left-side"},[a("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[a("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.showKeepAdding?a("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(e){t.keepAdding=e},expression:"keepAdding"}},[t._v("\n                "+t._s(t.$t("general.keep_adding"))+"\n            ")]):t._e()],1),t._v(" "),a("div",{staticClass:"right-side"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("utility.todo.todo")})))])],1)]),t._v(" "),t.showKeepAdding&&t.keepAdding?[a("keep-adding-form",{attrs:{"keep-adding-fields":t.keepAddingFields,"keep-adding-option":t.keepAddingOption,"keep-adding-selected-fields":t.keepAddingSelectedFields,"is-loading":t.isLoading},on:{optionUpdated:function(e){t.keepAddingOption=e},fieldsUpdated:function(e){t.keepAddingSelectedFields=e}}})]:t._e()],2)}),[],!1,null,null,null);e.a=n.exports},KJoJ:function(t,e,a){"use strict";a.r(e);var r=a("BkDE"),o=a("BcCH"),i={components:{CommonForm:r.a},beforeRouteLeave:function(t,e,a){o.a.$emit("ROUTE_LEAVING",a)}},s=a("KHd+"),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-container",{attrs:{boxed:""}},[e("common-form")],1)}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=add.js.map?id=759ff3bb4af6808dc4f4