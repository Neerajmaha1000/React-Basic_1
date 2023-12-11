//JSX
import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (<h1>
    Using JSX <br/>
    Namaste, How are you?
    </h1>);                 //Use parathesis() for multiple lines in react, for single line nothing

    //We can club element in component in {}

//React Functional based component
const Namaste = () => {
    return 
    <div>
        {jsxHeading}
        <h1>Pune Is the best city</h1>
    </div>}; //Recommanded Way 

//OR second way

//React Functional based component
const NamasteReact = () => (
    <div>
    <NamasteReact1 /> 
    <h1 className="box1">Pune Is the best city</h1>
    </div>
); //Done

/*We can club both components like,
const NamasteReact = () => (
    <Namaste/> //Clubbing two react components  (Component Composition)
    <h1 className="box1">Pune Is the best city</h1>
); */

//We can write JS code in functional component using {}
const Number = 1000;

const NamasteReact1 = () => (
    <div>
    {Number}
    <h1 className="box1">Pune Is the best city</h1>
    </div>) //Done

const root = ReactDOM.createRoot(document.getElementById("root"));

const box = ReactDOM.createRoot(document.getElementById("box"));

root.render(jsxHeading);
box.render(<NamasteReact/>); //Rendering the React Component

