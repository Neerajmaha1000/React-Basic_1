// const heading = React.createElement("h2", { id: "heading" }, "Hello World"); //Creating element in react (3 attributes - tagname,{},message or text)
// //{} stands for attribute like example - { id : "heading"}

// const root = ReactDOM.createRoot(document.getElementById("container")); //Creating root is compulsory...it defines where the element will get executed or printed
// //root element is created by DOM...that's why we used ReactDOM

// console.log(heading); //Object  

// root.render(heading) //these will render(add) the root in heading tag


//Creating Nested Div....
const Parent = React.createElement("div", { id: "Parent" }, React.createElement("div", { id: "Child" }, React.createElement("h2", {}, "Hello Guys!")));

//If i want to add one more or multiple element in div child then we will create array -
//const Parent = React.createElement("div", { id: "Parent" }, React.createElement("div", { id: "Child" }, [React.createElement("h2", {}, "Hello Guys!",React.createElement("h2", {}, "Hi!"])));


const hook1 = ReactDOM.createRoot(document.getElementById("root"));

hook1.render(Parent);

