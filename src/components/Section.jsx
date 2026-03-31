import React from "react";

const Section = ({ children, className }) => {
    return (
        <div
            className={`flex items-center mb-20 md:mb-30 w-full justify-center ${className}`}
        >
            {children}
        </div>
    );
};

export default Section;
