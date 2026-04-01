import React from "react";

const Section = ({ children, className }) => {
    return (
        <div
            className={`flex px-5 items-center w-full justify-center md:px-16 lg:px-30 ${className}`}
        >
            {children}
        </div>
    );
};

export default Section;
