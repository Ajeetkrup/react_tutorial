/**
 * Create nested structures
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is h1</h1>
 *      <h2>This is h2</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "This is h1"), React.createElement("h2", {}, "This is h2")] )
);


const rootEle = document.getElementById("root")
const root = ReactDOM.createRoot(rootEle);

root.render(parent); 