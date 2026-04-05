import React from "react";
import { greyArrowLeft, orangeArrowRight } from "../constants";

const NavButton = ({ className, onClick, nextBtn, prevBtn, disabled }) => {
    return (
        <button
            className={`relative overflow-hidden px-[16px] py-[8px] border-2 rounded-full cursor-pointer flex items-center justify-center group ${disabled ? "border-textTertiary/40" : "text-secondary"}`}
        >
            <div
                className={`w-full h-full absolute right-full transition-all duration-400 ease-in-out group-hover:right-0 ${disabled ? "" : "bg-primaryHover/20"}`}
            />
            {prevBtn ? (
                <div className="flex items-center justify-center gap-[5px] z-10">
                    <img
                        src={disabled ? greyArrowLeft : orangeArrowRight}
                        alt=""
                        className={`${disabled ? "opacity-40" : "rotate-180"} mb-[1.5px]`}
                    />
                    <h6
                        className={`text-s7 font-medium ${disabled ? "text-textTertiary/40" : "text-secondary"}`}
                    >
                        Prev
                    </h6>
                </div>
            ) : (
                <div className="flex items-center justify-center gap-[5px] z-10">
                    <h6
                        className={`text-s7 font-medium ${disabled ? "text-textTertiary/40" : "text-secondary"}`}
                    >
                        Next
                    </h6>
                    <img
                        src={disabled ? greyArrowLeft : orangeArrowRight}
                        alt=""
                        className={`${disabled ? "rotate-180 opacity-40" : ""}  mb-[1.5px]`}
                    />
                </div>
            )}
        </button>
    );
};

export default NavButton;
