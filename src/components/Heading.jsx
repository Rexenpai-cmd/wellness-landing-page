import React, { Children } from "react";

const Heading = ({ children, className }) => {
    return (
        <h1
            className={`leading-[1.3] text-h9 text-primary font-semibold md:text-h8`}
        >
            {children}
        </h1>
    );
};

export default Heading;
