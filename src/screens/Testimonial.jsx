import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import Label from "../components/Label";
import Heading from "../components/Heading";
import { testimonials } from "../constants";
import SubHeading from "../components/SubHeading";
import NavButton from "../components/NavButton";

const Testimonial = () => {
    const total = testimonials.length;

    const getCols = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [cols, setCols] = useState(getCols);

    useEffect(() => {
        const handler = () => setCols(getCols());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <Section>
            <div>
                <div className="flex items-center justify-center flex-col gap-7.5 text-center">
                    <Label>testimonial</Label>
                    <Heading className="text-center">
                        Review About Our Services from Patient
                    </Heading>
                </div>
                <div className="flex items-start justify-center flex-col gap-[30px]">
                    <div className="flex items-start justify-center flex-col gap-[10px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.slice(0, cols).map((review) => (
                                <div className="flex items-start justify-center flex-col gap-[22px] px-[10px] py-[16px]">
                                    <div>
                                        <SubHeading>
                                            <span className="text-primary text-h9 inline">
                                                "
                                            </span>
                                            {review.review}
                                        </SubHeading>
                                    </div>
                                    <div className="flex justify-start items-center gap-[16px]">
                                        <div>
                                            <img src={review.profile} alt="" />
                                        </div>
                                        <h6 className="text-s6 font-medium text-primary">
                                            {review.label}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-[3px] w-full bg-textSecondary/10 rounded-full">
                            <div
                                className="h-full bg-accent transition-all duration-300 rounded-full"
                                style={{ width: `${(cols / total) * 100}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-[16px]">
                        <NavButton prevBtn />
                        <NavButton nextBtn />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Testimonial;
