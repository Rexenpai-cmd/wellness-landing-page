import React from "react";
import { companies } from "../constants";
import Section from "./Section";

const Companies = () => {
    return (
        <Section
            id="companies"
            className="flex items-center justify-center w-full"
        >
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
        </Section>
    );
};

export default Companies;
