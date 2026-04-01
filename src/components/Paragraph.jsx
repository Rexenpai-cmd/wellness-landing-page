import React from "react";

const Paragraph = ({ className, children }) => {
    return <div className={`text-b3 ${className}`}>{children}</div>;
};

export default Paragraph;
