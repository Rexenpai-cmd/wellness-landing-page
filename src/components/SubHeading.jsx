import React from "react";

const SubHeading = ({ className, children }) => {
    return (
        <h6 className={`text-b3 md:text-b2 text-textPrimary ${className}`}>
            {children}
        </h6>
    );
};

export default SubHeading;
