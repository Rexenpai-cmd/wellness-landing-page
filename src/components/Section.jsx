import React from "react";

const Section = ({ children, className, id }) => {
    return (
        <section
            id={id}
            className={`flex px-5 items-center w-full justify-center py-15 md:px-16 lg:px-30 md:py-18 lg:py-25 ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
