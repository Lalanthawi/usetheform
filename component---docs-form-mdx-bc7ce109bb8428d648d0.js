(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Tukz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return y}));var a=n("Fcif"),o=n("+I+c"),l=(n("mXGw"),n("/FXl")),r=n("TjRS"),c=n("ZFoC"),i=n("RnGj"),b=n("Hn4R"),u=n("cMsH"),s=n("8xEu"),m=n("jF5W"),p=n("oXiK"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/Form.mdx"}});var j={_frontmatter:d},O=r.a;function y(e){var t,n,y,h,f,g=e.components,N=Object(o.a)(e,["components"]);return Object(l.b)(O,Object(a.a)({},j,N,{components:g,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"form"},"Form"),Object(l.b)("p",null,"The Form is the most important component in usetheform. It renders all the Fields and keeps the entire form state synchronized."),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"onInit")),": function"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A function invoked when the Form is initialized.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onInit = (formState, isFormValid) => { // some operation }\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"onChange")),": function"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A function invoked when any Form Field changes its value.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onChange = (formState, isFormValid) => { // some operation }\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"onReset")),": function"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A function invoked when the form has been reset to its initial state.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const onReset = (formState, isFormValid) => { // some operation }\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"onSubmit")),": function"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A function invoked when the submit button has been pressed. "),Object(l.b)("li",{parentName:"ul"},"The function may return either a Promise or a boolean value of true/false.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const onSubmit = (formState) => { // some operation };\nconst onSubmit = (formState) => new Promise((resolve, reject) => { // some async operation  });\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cases:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If the function returns a Promise which is resolved, it will increment the value named ",Object(l.b)("strong",{parentName:"li"},"submitted"),"."),Object(l.b)("li",{parentName:"ul"},"If the function returns a boolean value ",Object(l.b)("inlineCode",{parentName:"li"},"true")," or no return at all, it will increment the value named ",Object(l.b)("strong",{parentName:"li"},"submitted"),"."),Object(l.b)("li",{parentName:"ul"},"If the function returns a Promise which is rejected, the value named ",Object(l.b)("strong",{parentName:"li"},"submitted")," will not be incremented."),Object(l.b)("li",{parentName:"ul"},"If the function returns a boolean value ",Object(l.b)("inlineCode",{parentName:"li"},"false"),", the value named ",Object(l.b)("strong",{parentName:"li"},"submitted")," will not be incremented.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  const { submitted, submitAttempts } = useForm();\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It will be only invoked if the form passes all the validations added at any level (Collections or Fields)."),Object(l.b)("li",{parentName:"ul"},"For each invocation, the value ",Object(l.b)("strong",{parentName:"li"},"submitAttempts")," will be incremented.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"initialState")),": object"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It is a plain object that represents the initial state of the form.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"reducers")),": array | function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"(nextState, prevState) => nextState\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An array whose values correspond to different reducing functions."),Object(l.b)("li",{parentName:"ul"},"Reducer functions specify how the Form's state changes.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"touched")),": boolean"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Default value of ",Object(l.b)("em",{parentName:"p"},"false"),". ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"If ",Object(l.b)("em",{parentName:"p"},"true"),", sync validation messages will be shown only when the event onBlur of any forms's field is triggered by the user action at any level of nesting."))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"action")),": string"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The action attribute specifies where to send the form-data when a form is submitted.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Possible values:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'An absolute URL - points to another web site (like action="',Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.example.com/example.html%22"}),'http://www.example.com/example.html"'),")"),Object(l.b)("li",{parentName:"ul"},'A relative URL - points to a file within a web site (like action="example.html")')))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"innerRef")),": object (a mutable ref object)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When you need to access the underlying DOM node created by Form (e.g. to call focus), you can use a ref to store a reference to the form dom node.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const ref = useRef(null)\n<Form innerRef={ref} name="form">...fields...</Form>\n')),Object(l.b)("h2",{id:"basic-usage"},"Basic usage"),Object(l.b)("h3",{id:"example-1"},"Example 1"),Object(l.b)("p",null,"A simple form with the initial state passed as Form prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  import { Form, Input } from 'usetheform'\n")),Object(l.b)(c.b,{__position:0,__code:'<Form\n  initialState={{ name: \'foo\', gender: \'M\', option1: true }}\n  onInit={(state, isFormValid) => console.log(\'INIT\', state, isFormValid)}\n  onChange={(state, isFormValid) => console.log(\'CHANGE\', state, isFormValid)}\n  onSubmit={state => alert(JSON.stringify(state))}\n>\n  <Input type="text" name="name" placeholder="Name" />\n  <Input type="radio" name="gender" value="M" placeholder="M" />\n  <Input type="radio" name="gender" value="F" placeholder="F" />\n  <Input type="radio" name="gender" value="Other" placeholder="Other" />\n  <Input type="checkbox" name="option1" placeholder="Option 1" />\n  <Input type="checkbox" name="option2" placeholder="Option 2" />\n  <button type="submit">Submit</button>\n</Form>',__scope:(t={props:N,DefaultLayout:r.a,Playground:c.b,Form:i.a,Submit:b.a,asyncTestForm:u.a,Input:s.a,Item:m.a,reduceTotalPrice:m.b,reduceTotalQuantity:m.c,useValidation:p.l,useAsyncValidation:p.g,Collection:p.a},t.DefaultLayout=r.a,t._frontmatter=d,t),mdxType:"Playground"},Object(l.b)(i.a,{initialState:{name:"foo",gender:"M",option1:!0},onInit:function(e,t){return console.log("INIT",e,t)},onChange:function(e,t){return console.log("CHANGE",e,t)},onSubmit:function(e){return alert(JSON.stringify(e))},mdxType:"Form"},Object(l.b)(s.a,{type:"text",name:"name",placeholder:"Name",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"M",placeholder:"M",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"F",placeholder:"F",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"Other",placeholder:"Other",mdxType:"Input"}),Object(l.b)(s.a,{type:"checkbox",name:"option1",placeholder:"Option 1",mdxType:"Input"}),Object(l.b)(s.a,{type:"checkbox",name:"option2",placeholder:"Option 2",mdxType:"Input"}),Object(l.b)("button",{type:"submit"},"Submit"))),Object(l.b)("h3",{id:"example-2"},"Example 2"),Object(l.b)("p",null,"A simple form with the initial state passed straight to the Form's Field."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  import { Form, Input } from 'usetheform'\n")),Object(l.b)(c.b,{__position:1,__code:'<Form\n  onInit={(state, isFormValid) => console.log(\'INIT\', state, isFormValid)}\n  onChange={(state, isFormValid) => console.log(\'CHANGE\', state, isFormValid)}\n  onSubmit={state => alert(JSON.stringify(state))}\n>\n  <Input type="text" name="name" value="foo" placeholder="Name" />\n  <Input type="radio" name="gender" value="M" checked placeholder="M" />\n  <Input type="radio" name="gender" value="F" placeholder="F" />\n  <Input type="radio" name="gender" value="Other" placeholder="Other" />\n  <Input type="checkbox" name="option1" checked placeholder="Option 1" />\n  <Input type="checkbox" name="option2" placeholder="Option 2" />\n  <button type="submit">Submit</button>\n</Form>',__scope:(n={props:N,DefaultLayout:r.a,Playground:c.b,Form:i.a,Submit:b.a,asyncTestForm:u.a,Input:s.a,Item:m.a,reduceTotalPrice:m.b,reduceTotalQuantity:m.c,useValidation:p.l,useAsyncValidation:p.g,Collection:p.a},n.DefaultLayout=r.a,n._frontmatter=d,n),mdxType:"Playground"},Object(l.b)(i.a,{onInit:function(e,t){return console.log("INIT",e,t)},onChange:function(e,t){return console.log("CHANGE",e,t)},onSubmit:function(e){return alert(JSON.stringify(e))},mdxType:"Form"},Object(l.b)(s.a,{type:"text",name:"name",value:"foo",placeholder:"Name",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"M",checked:!0,placeholder:"M",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"F",placeholder:"F",mdxType:"Input"}),Object(l.b)(s.a,{type:"radio",name:"gender",value:"Other",placeholder:"Other",mdxType:"Input"}),Object(l.b)(s.a,{type:"checkbox",name:"option1",checked:!0,placeholder:"Option 1",mdxType:"Input"}),Object(l.b)(s.a,{type:"checkbox",name:"option2",placeholder:"Option 2",mdxType:"Input"}),Object(l.b)("button",{type:"submit"},"Submit"))),Object(l.b)("h2",{id:"reducers"},"Reducers"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Form, Collection } from 'usetheform';\nimport { Item } from './components/Item';\nimport { reduceTotalPrice,reduceTotalQuantity } from './components/Item/utils';\n")),Object(l.b)(c.b,{__position:2,__code:'<Form reducers={[reduceTotalPrice, reduceTotalQuantity]}>\n  <Collection array name="items">\n    <Item price={5} desc="White Shoes" />\n    <Item price={3} desc="Red Bag" />\n    <Item price={6} desc="Blue Trouser" />\n    {/* try to copy and paste a new item within the items Collection */}\n  </Collection>\n  <Input\n    type="number"\n    name="totalPrice"\n    readOnly\n    placeholder="Total Price $"\n  />\n  <Input\n    type="number"\n    name="totalQuantity"\n    readOnly\n    placeholder="Total Quantity"\n  />\n</Form>',__scope:(y={props:N,DefaultLayout:r.a,Playground:c.b,Form:i.a,Submit:b.a,asyncTestForm:u.a,Input:s.a,Item:m.a,reduceTotalPrice:m.b,reduceTotalQuantity:m.c,useValidation:p.l,useAsyncValidation:p.g,Collection:p.a},y.DefaultLayout=r.a,y._frontmatter=d,y),mdxType:"Playground"},Object(l.b)(i.a,{reducers:[m.b,m.c],mdxType:"Form"},Object(l.b)(p.a,{array:!0,name:"items",mdxType:"Collection"},Object(l.b)(m.a,{price:5,desc:"White Shoes",mdxType:"Item"}),Object(l.b)(m.a,{price:3,desc:"Red Bag",mdxType:"Item"}),Object(l.b)(m.a,{price:6,desc:"Blue Trouser",mdxType:"Item"})),Object(l.b)(s.a,{type:"number",name:"totalPrice",readOnly:!0,placeholder:"Total Price $",mdxType:"Input"}),Object(l.b)(s.a,{type:"number",name:"totalQuantity",readOnly:!0,placeholder:"Total Quantity",mdxType:"Input"}))),Object(l.b)("h4",{id:"detailed-explanation"},"Detailed Explanation:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'export const Item = ({ price, qty, desc }) => {\n  return (\n    <Collection object>\n      <Input type="number" name="price" placeholder="Price" min={1} value={price} />\n      <Input type="number" name="qty" placeholder="Quantity" min={1} value={qty} />\n      <Input type="text" name="description" placeholder="Description" value={desc} />\n    </Collection>\n  );\n}\n\nexport const reduceTotalPrice = formState => {\n  const { items = [] } = formState;\n  const totalPrice = items.reduce((total, { price = 0, qty = 0 }) => {\n    total += price * qty;\n    return total;\n  }, 0);\n  return { ...formState, totalPrice };\n};\n\nexport const reduceTotalQuantity = (formState) => { \n  const { items = [] } = formState;\n  const totalQuantity = items.reduce((total, { qty = 0 }) => {\n    total += qty;\n    return total;\n  }, 0);\n  return { ...formState, totalQuantity };\n}; \n')),Object(l.b)("h2",{id:"validation---sync"},"Validation - Sync"),Object(l.b)("p",null,"Validation at Form level:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"touched=false"),": error messages will be shown on Form initialization and when any Field is edited."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"touched=true"),": error messages will be shown when any Field at any level of nesting is touched/visited.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  import { Form, Input, Collection, useValidation } from 'usetheform'\n")),Object(l.b)(c.b,{__position:3,__code:'() => {\n  const graterThan10 = ({ values }) =>\n    values && values[\'A\'] + values[\'B\'] > 10 ? undefined : \'A+B must be > 10\'\n  const [status, validationProps] = useValidation([graterThan10])\n  return (\n    <Form touched {...validationProps}>\n      <Collection object name="values">\n        <Input type="number" name="A" placeholder="Number A" value="1" />\n        <Input type="number" name="B" placeholder="Number B" value="2" />\n      </Collection>\n      {status.error && <label>{status.error}</label>}\n      <button type="submit">Press to see results</button>\n    </Form>\n  )\n}',__scope:(h={props:N,DefaultLayout:r.a,Playground:c.b,Form:i.a,Submit:b.a,asyncTestForm:u.a,Input:s.a,Item:m.a,reduceTotalPrice:m.b,reduceTotalQuantity:m.c,useValidation:p.l,useAsyncValidation:p.g,Collection:p.a},h.DefaultLayout=r.a,h._frontmatter=d,h),mdxType:"Playground"},(function(){var e=Object(p.l)([function(e){var t=e.values;return t&&t.A+t.B>10?void 0:"A+B must be > 10"}]),t=e[0],n=e[1];return Object(l.b)(i.a,Object(a.a)({touched:!0},n,{mdxType:"Form"}),Object(l.b)(p.a,{object:!0,name:"values",mdxType:"Collection"},Object(l.b)(s.a,{type:"number",name:"A",placeholder:"Number A",value:"1",mdxType:"Input"}),Object(l.b)(s.a,{type:"number",name:"B",placeholder:"Number B",value:"2",mdxType:"Input"})),t.error&&Object(l.b)("label",null,t.error),Object(l.b)("button",{type:"submit"},"Press to see results"))})),Object(l.b)("h2",{id:"validation---async"},"Validation - Async"),Object(l.b)("p",null,"Async Validation for ",Object(l.b)("strong",{parentName:"p"},"Form")," is triggered on Submit event. The form submission is prevented if the validation fails.\nIt means that the onSubmit function passed as prop to the ",Object(l.b)("strong",{parentName:"p"},"Form")," component will not be invoked."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Form, Collection, Input, useAsyncValidation } from 'usetheform';\n")),Object(l.b)(c.b,{__position:4,__code:'() => {\n  const [asyncStatus, validationProps] = useAsyncValidation(asyncTestForm)\n  const onSubmit = state => alert(JSON.stringify(state))\n  return (\n    <Form onSubmit={onSubmit} {...validationProps}>\n      <Collection object name="values">\n        <Input type="number" name="a" placeholder="Number A" value="1" />\n        <Input type="number" name="b" placeholder="Number B" value="2" />\n      </Collection>\n      {asyncStatus.status === undefined && (\n        <label>Async Check Not Started Yet</label>\n      )}\n      {asyncStatus.status === \'asyncStart\' && <label>Checking...</label>}\n      {asyncStatus.status === \'asyncError\' && (\n        <label>{asyncStatus.value}</label>\n      )}\n      {asyncStatus.status === \'asyncSuccess\' && (\n        <label>{asyncStatus.value}</label>\n      )}\n      <Submit />\n    </Form>\n  )\n}',__scope:(f={props:N,DefaultLayout:r.a,Playground:c.b,Form:i.a,Submit:b.a,asyncTestForm:u.a,Input:s.a,Item:m.a,reduceTotalPrice:m.b,reduceTotalQuantity:m.c,useValidation:p.l,useAsyncValidation:p.g,Collection:p.a},f.DefaultLayout=r.a,f._frontmatter=d,f),mdxType:"Playground"},(function(){var e=Object(p.g)(u.a),t=e[0],n=e[1];return Object(l.b)(i.a,Object(a.a)({onSubmit:function(e){return alert(JSON.stringify(e))}},n,{mdxType:"Form"}),Object(l.b)(p.a,{object:!0,name:"values",mdxType:"Collection"},Object(l.b)(s.a,{type:"number",name:"a",placeholder:"Number A",value:"1",mdxType:"Input"}),Object(l.b)(s.a,{type:"number",name:"b",placeholder:"Number B",value:"2",mdxType:"Input"})),void 0===t.status&&Object(l.b)("label",null,"Async Check Not Started Yet"),"asyncStart"===t.status&&Object(l.b)("label",null,"Checking..."),"asyncError"===t.status&&Object(l.b)("label",null,t.value),"asyncSuccess"===t.status&&Object(l.b)("label",null,t.value),Object(l.b)(b.a,{mdxType:"Submit"}))})),Object(l.b)("h4",{id:"detailed-explanation-1"},"Detailed Explanation:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { useForm } from \'usetheform\'\n\nconst Submit = () => {\n  const { isValid } = useForm();\n  return (\n    <button disabled={!isValid} type="submit">\n      Submit\n    </button>\n  );\n};\n\nexport const asyncTestForm = ({ values }) =>\n  new Promise((resolve, reject) => {\n    // it could be an API call or any async operation\n    setTimeout(() => {\n      if (!values || !values.a || !values.b) {\n        reject("Emtpy values are not allowed ");\n      }\n      if (values.a + values.b >= 5) {\n        reject("The sum must be less than \'5\'");\n      } else {\n        resolve("Success");\n      }\n    }, 1000);\n  });\n')))}void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/Form.mdx"}}),y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-form-mdx-bc7ce109bb8428d648d0.js.map