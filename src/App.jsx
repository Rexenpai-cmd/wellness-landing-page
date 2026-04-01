import React from "react";
import { blueDiagonalArrow, redArrowRight } from "./constants";
import Header from "./components/Header";
import Hero from "./screens/Hero";
import About from "./screens/About";

const App = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Header />
                <Hero />
            </div>
        </>
    );
};

export default App;
