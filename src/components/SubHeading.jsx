import React from "react";

const SubHeading = ({ className, children }) => {
    return <h6 className={`text-b2 ${className}`}>{children}</h6>;
};

export default SubHeading;
