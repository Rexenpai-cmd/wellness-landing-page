import React, { useState } from "react";

const HamburgerMenu = ({ className, toggleMenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        toggleMenu();
    };

    return (
        <button
            onClick={() => handleClick()}
            className={`${className} z-10 flex flex-col items-start justify-center gap-1.5 px-1.5 py-3 cursor-pointer bg-transparent border-none`}
        >
            <span
                className={`block h-0.75 bg-white rounded-full transition-all duration-400 ease-in-out origin-center
                ${isOpen ? "w-8 translate-y-2.25 rotate-45" : "w-6"}`}
            />
            <span
                className={`block w-8 h-0.75 bg-white rounded-full transition-all duration-300 ease-in-out origin-center
                ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
                className={`block h-0.75 bg-white rounded-full transition-all duration-400 ease-in-out origin-center
                ${isOpen ? "w-8 -translate-y-2.25 -rotate-45" : "w-4"}`}
            />
        </button>
    );
};

export default HamburgerMenu;
