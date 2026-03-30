import React from "react";
import { blueDiagonalArrow, redArrowRight } from "./constants";

const App = () => {
    return (
        <div>
            <h1 className="text-primary">primary</h1>
            <h1 className="text-secondary">secondary</h1>
            <h1 className="text-accent">accent</h1>
            <img src={redArrowRight} alt="" />
            <img src={blueDiagonalArrow} alt="" />
            <img src={redArrowRight} alt="" />
        </div>
    );
};

export default App;
