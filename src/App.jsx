import React from "react";
import { blueDiagonalArrow, redArrowRight } from "./constants";
import Header from "./components/Header";
import Hero from "./screens/Hero";
import About from "./screens/About";
import Companies from "./components/Companies";
import Statistics from "./components/Statistics";
import Services from "./screens/Services";
import Doctors from "./screens/Doctors";
import Appointment from "./screens/Appointment";
import Pricing from "./screens/Pricing";
import Experience from "./screens/Experience";
import Testimonial from "./screens/Testimonial";

const App = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Header />
                <Hero />
                <Companies />
                <About />
                <Statistics />
                <Services />
                <Doctors />
                <Pricing />
                <Experience />
                <Testimonial />
            </div>
        </>
    );
};

export default App;
