import React from "react";
import { Route } from "wouter";
import Home from "./Components/Home/Home.js";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";

function App() {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/project/:id" component={ProjectDetail} />
        </>
    );
}

export default App;
