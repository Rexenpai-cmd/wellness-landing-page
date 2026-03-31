import React from "react";
import { blueDiagonalArrow, redArrowRight } from "./constants";
import Header from "./components/Header";
import Hero from "./screens/Hero";

const App = () => {
    return (
        <>
            <div className="px-4 md:px-25 overflow-hidden">
                <Header />
                <Hero />
            </div>
        </>
    );
};

export default App;
