(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{513:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{user:{company:"Creative Code Inc.",username:"michael23",email:"",firstName:"Mike",lastName:"Andrew",address:"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",city:"New York",country:"USA",postalCode:"",aboutMe:"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."}}},methods:{updateProfile:function(){alert("Your data: "+JSON.stringify(this.user))}}},o=l(2),c={},n={name:"user",components:{EditProfileForm:Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("card",[l("h5",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Edit Profile")]),t._v(" "),l("form",{on:{submit:function(e){return e.preventDefault(),t.updateProfile(e)}}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-5"},[l("base-input",{attrs:{type:"text",label:"Company",disabled:!0,placeholder:"Company"},model:{value:t.user.company,callback:function(e){t.$set(t.user,"company",e)},expression:"user.company"}})],1),t._v(" "),l("div",{staticClass:"col-md-3"},[l("base-input",{attrs:{type:"text",label:"Username",placeholder:"Username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),l("div",{staticClass:"col-md-4"},[l("base-input",{attrs:{type:"email",label:"Email address",placeholder:"mike@email.com"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("base-input",{attrs:{type:"text",label:"First Name",placeholder:"First Name"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),t._v(" "),l("div",{staticClass:"col-md-6"},[l("base-input",{attrs:{type:"text",label:"Last Name",placeholder:"Last Name"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("base-input",{attrs:{type:"text",label:"Address",placeholder:"Home Address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4"},[l("base-input",{attrs:{type:"text",label:"City",placeholder:"City"},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),t._v(" "),l("div",{staticClass:"col-md-4"},[l("base-input",{attrs:{type:"text",label:"Country",placeholder:"Country"},model:{value:t.user.country,callback:function(e){t.$set(t.user,"country",e)},expression:"user.country"}})],1),t._v(" "),l("div",{staticClass:"col-md-4"},[l("base-input",{attrs:{label:"Postal Code",placeholder:"ZIP Code"},model:{value:t.user.postalCode,callback:function(e){t.$set(t.user,"postalCode",e)},expression:"user.postalCode"}})],1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-12"},[l("base-input",{attrs:{label:"About Me"}},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.aboutMe,expression:"user.aboutMe"}],staticClass:"form-control",attrs:{placeholder:"ZIP Code"},domProps:{value:t.user.aboutMe},on:{input:function(e){e.target.composing||t.$set(t.user,"aboutMe",e.target.value)}}})])],1)]),t._v(" "),l("base-button",{staticClass:"btn-fill",attrs:{"native-type":"submit",type:"primary"}},[t._v("\n      Save\n    ")])],1)])}),[],!1,null,null,null).exports,UserCard:Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("card",{staticClass:"card-user"},[l("p",{staticClass:"card-text"}),t._v(" "),l("div",{staticClass:"author"},[l("div",{staticClass:"block block-one"}),t._v(" "),l("div",{staticClass:"block block-two"}),t._v(" "),l("div",{staticClass:"block block-three"}),t._v(" "),l("div",{staticClass:"block block-four"}),t._v(" "),l("a",{attrs:{href:"javascript:void(0)"}},[l("img",{staticClass:"avatar",attrs:{src:"img/emilyz.jpg",alt:"..."}}),t._v(" "),l("h5",{staticClass:"title"},[t._v("Mike Andrew")])]),t._v(" "),l("p",{staticClass:"description"},[t._v("Ceo/Co-Founder")])]),t._v(" "),l("p"),t._v(" "),l("div",{staticClass:"card-description"},[t._v("\n    Do not be scared of the truth because we need to restart the human\n    foundation in truth And I love you like Kanye loves Kanye I love Rick\n    Owens’ bed design but the back is...\n  ")]),t._v(" "),l("div",{staticClass:"button-container",attrs:{slot:"footer"},slot:"footer"},[l("base-button",{staticClass:"btn-facebook",attrs:{icon:"",round:""}},[l("i",{staticClass:"fab fa-facebook"})]),t._v(" "),l("base-button",{staticClass:"btn-twitter",attrs:{icon:"",round:""}},[l("i",{staticClass:"fab fa-twitter"})]),t._v(" "),l("base-button",{staticClass:"btn-google",attrs:{icon:"",round:""}},[l("i",{staticClass:"fab fa-google-plus"})])],1)])}),[],!1,null,null,null).exports}},d=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("edit-profile-form")],1),this._v(" "),e("div",{staticClass:"col-md-4"},[e("user-card")],1)])}),[],!1,null,null,null);e.default=d.exports}}]);