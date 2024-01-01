import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Header } from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<App />);
