(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(19),o=n.n(s),i=(n(26),function(){return Object(r.jsx)("h2",{children:"Expense Tracker"})}),u=n(4),l=n.n(u),j=n(8),d=n(6),p=n(20),b=n(3),O=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});default:return e}},x=n(9),h=n.n(x),f={transactions:[],error:null,loading:!0},m=Object(a.createContext)(f),v=function(e){var t=e.children,n=Object(a.useReducer)(O,f),c=Object(d.a)(n,2),s=c[0],o=c[1];function i(){return(i=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/v1/transactions",t,n);case 4:r=e.sent,console.log("sdfsd",r.data.data),o({type:"ADD_TRANSACTION",payload:r.data.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0.response),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(r.jsx)(m.Provider,{value:{transactions:s.transactions,error:s.error,loading:s.loading,getTransactions:function(){return i.apply(this,arguments)},deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return p.apply(this,arguments)}},children:t})};function T(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Your Balance"}),Object(r.jsxs)("h1",{children:["$",T(e)]})]})},N=function(e){var t=e.transaction,n=Object(a.useContext)(m).deleteTransaction,c=t.amount<0?"-":"+";return Object(r.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,Object(r.jsxs)("span",{children:[c,"$",T(Math.abs(t.amount))]}),Object(r.jsx)("button",{className:"delete-btn",onClick:function(){return n(t.id)},children:"x"})]})},g=function(){var e=Object(a.useContext)(m),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"History"}),Object(r.jsx)("ul",{className:"list",children:t.map((function(e){return Object(r.jsx)(N,{transaction:e},e.id)}))})]})},A=function(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(r.jsxs)("div",{className:"inc-exp-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Income"}),Object(r.jsxs)("p",{className:"money plus",children:["$",T(t)]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Expense"}),Object(r.jsxs)("p",{className:"money minus",children:["$",T(n)]})]})]})},C=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(d.a)(s,2),i=o[0],u=o[1],l=Object(a.useContext)(m).addTransaction;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Add new transaction"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l({text:n,amount:+i})},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{htmlFor:"text",children:"Text"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(r.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(r.jsx)("input",{type:"number",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(r.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var R=function(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(i,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(y,{}),Object(r.jsx)(A,{}),Object(r.jsx)(g,{}),Object(r.jsx)(C,{})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),E()}},[[46,1,2]]]);
//# sourceMappingURL=main.0395b76c.chunk.js.map