(this["webpackJsonpgoit-react-hw-07-phonebook-rtk-query"]=this["webpackJsonpgoit-react-hw-07-phonebook-rtk-query"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),s=n.n(r),i=n(27),o=n(7),u=(n(39),n(28)),l=n(21),b=n(1),d=n(5),j=n(22),m=Object(j.a)({reducerPath:"contactsApi",baseQuery:Object(d.d)({baseUrl:"https://6192166f41928b00176902b2.mockapi.io/contacts"}),tagTypes:["Contact"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:{content:e,name:e.name,number:e.number}}},invalidatesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]})}}}),h=m.useGetContactsQuery,O=m.useDeleteContactMutation,f=m.useCreateContactMutation,p=Object(b.a)({reducer:Object(l.a)({},m.reducerPath,m.reducer),middleware:function(e){return[].concat(Object(u.a)(e()),[m.middleware])},devTools:!1});Object(d.e)(p.dispatch);var x=p,_=n(8),g=n(18),v=n.n(g),C=n(14),y=(n(19),n(2));var N=function(){var e=f(),t=Object(_.a)(e,1)[0],n=Object(a.useState)(""),c=Object(_.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(_.a)(i,2),u=o[0],l=o[1],b=h().data,d=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":l(a);break;default:return}},j=function(e){return b.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},m=function(e){return b.find((function(t){return t.number===e}))},O=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},p=function(){s(""),l("")};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{className:"form__box",onSubmit:function(e){return e.preventDefault(),j(r)||m(u)||(t({name:r,number:u}),O()),p(),j(r)?C.b.error("This name ".concat(r," already exists in the database")):m(u)?C.b.error("This number ".concat(u," already exists in the database")):void C.b.success("".concat(r," successfully added ;)"))},children:[Object(y.jsxs)("label",{className:"form__label-box",children:[Object(y.jsx)("span",{className:"form__label",children:"Name"}),Object(y.jsx)("input",{className:"form__input",value:r,onChange:d,id:v.a.generate(),type:"text",name:"name","data-action":"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(y.jsxs)("label",{className:"form__label-box",children:[Object(y.jsx)("span",{className:"form__label",children:" Number"}),Object(y.jsx)("input",{className:"form__input",onChange:d,value:u,id:v.a.generate(),type:"tel",name:"number","data-action":"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440, \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438, \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(y.jsx)("div",{className:"form__btn-thumb",children:Object(y.jsx)("button",{className:"form__addBtn",type:"submit",disabled:!u||!r,children:"Add contact"})})]}),Object(y.jsx)(C.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},T=n(3),w=n.n(T);function q(e){var t=e.name,n=e.number,a=e.id,c=O(),r=Object(_.a)(c,2),s=r[0],i=r[1].isLoading;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("li",{id:a,className:"contacts__item",children:[t,": ",Object(y.jsxs)("span",{className:"contacts__number",children:[" ",n]}),Object(y.jsx)("button",{className:"contacts__btn",onClick:function(){return s(a)},disabled:i,children:i?"Deleting...":"Delete"})]},a)})}q.protoTypes={name:w.a.string.isRequired,number:w.a.number.isRequired,id:w.a.string.isRequired};var k=q,S=n(23),A=n(24),E=n(29),L=n(26),F=n(25),R=n.n(F),D=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(y.jsx)(R.a,{type:"TailSpin",color:"#8d125a",height:50,width:50,timeout:3e3,style:{position:"fixed",top:"60%",left:"45%"}})}}]),n}(a.Component),P=function(e){var t=e.filterValue,n=e.onChange;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"fiter__box",children:[Object(y.jsx)("h3",{className:"contacts__title-find",children:"Find contacts by name"}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{className:"contacts__input",type:"text",name:"filter",value:t,onChange:function(e){return n(e)}})})]})})};function z(){var e=h(),t=e.data,n=e.isFetching,c=e.isError,r=Object(a.useState)(""),s=Object(_.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)([]),l=Object(_.a)(u,2),b=l[0],d=l[1];return Object(a.useEffect)((function(){if(""!==i){var e=i.toLowerCase(),n=t.filter((function(t){return t.name.toLowerCase().includes(e)}));return d(n)}}),[i,t]),Object(y.jsxs)("section",{className:"contacts__section",children:[Object(y.jsx)(P,{vlue:i,onChange:function(e){var t=e.currentTarget.value;o(t)}}),Object(y.jsx)("h2",{className:"contacts__title",children:"Contacts"}),""!==i&&Object(y.jsx)("ul",{children:b.map((function(e){return Object(y.jsx)(k,{name:e.name,number:e.number,id:e.id},e.id)}))}),n&&Object(y.jsx)(D,{}),Object(y.jsxs)("ul",{className:"contacts__list",children:[c&&Object(y.jsx)("p",{className:"contacts__title",children:'"Not found"'}),t&&!c&&!i&&t.map((function(e){var t=e.name,n=e.number,a=e.id;return Object(y.jsx)(k,{name:t,number:n,id:a},a)}))]})]})}z.protoTypes={contacts:w.a.arrayOf(w.a.shape({id:w.a.string.isRequired,name:w.a.string.isRequired,number:w.a.number.isRequired}))};var B=z;n(68);var M=function(){return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:"header",children:"Phonebook"}),Object(y.jsx)(N,{}),Object(y.jsx)(B,{})]})};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(o.a,{store:x,children:Object(y.jsx)(i.a,{children:Object(y.jsx)(M,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.7775241b.chunk.js.map