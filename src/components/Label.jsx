import React, { Children } from "react";

const Label = ({ children }) => {
    return (
        <div className="inline-block w-fit px-6.25 py-3 border-3 border-[#2ECC71] bg-accent rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
            <h6 className="uppercase text-s7 text-white font-semibold tracking-widest">
                {children}
            </h6>
        </div>
    );
};

export default Label;
