import React from "react";
import { companies } from "../constants";

const Companies = () => {
    return (
        <div className="flex items-center justify-center w-full py-25 px-16 lg:px-30">
            <div className="flex flex-row flex-wrap shrink-0 w-full gap-12.5">
                {companies.map((c) => (
                    <div
                        className="flex items-center grow justify-center px-5"
                        key={c.name}
                    >
                        <div className="flex items-center justify-center gap-2.5">
                            <img src={c.logo} alt="Logo" />
                            <img src={c.name} alt="Name" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies;
