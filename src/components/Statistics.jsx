import React from "react";
import { companies, statistics } from "../constants";

const Statistics = () => {
    return (
        <div className="flex items-center justify-center w-full py-[60px] px-5 md:px-16 md:py-[80px] lg:py-25 lg:px-30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
                {statistics.map((stats, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-start"
                    >
                        <h1 className="text-h8 text-primary font-semibold lg:text-h5">
                            {stats.stat}
                        </h1>
                        <h6 className="text-b3 text-textPrimary">
                            {stats.label}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
