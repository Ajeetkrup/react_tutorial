import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => (
    <h1>This is title</h1>
);

//functional component
const JsxHeading = () =>  (<h1 id="heading">
    <Title />
    This is heading
</h1>);

const rootEle = document.getElementById("root")
const root = ReactDOM.createRoot(rootEle);

root.render(<JsxHeading />); 