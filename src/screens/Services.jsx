import React from "react";
import SectionBg from "../components/SectionBg";
import Heading from "../components/Heading";
import Label from "../components/Label";
import SubHeading from "../components/SubHeading";
import {
    circularArrowRight,
    orangeDiagonalArrow,
    services,
} from "../constants";
import Button from "../components/Button";

const Services = () => {
    return (
        <SectionBg id="services">
            <div className="flex items-center justify-center flex-col w-full gap-[50px]">
                <div className="flex items-start justify-center flex-col w-full gap-[30px]">
                    <Label>our services</Label>
                    <div className="flex items-center justify-between w-full flex-col gap-[30px] lg:flex-row">
                        <Heading>
                            Experienced in Multiple Medical Specialities
                        </Heading>
                        <SubHeading className="text-start lg:text-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam hendrerit metus ex, id ullamcorper massa
                            accumsan volutpat. 
                        </SubHeading>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex items-center justify-center flex-col py-[30px] px-[30px] bg-white rounded-3xl w-full gap-[24px]"
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="py-[15px] px-[15px] bg-secondary/18 rounded-2xl flex items-center justify-center">
                                    <img
                                        src={service.icon}
                                        alt="Icon"
                                        className="h-[50px] w-[50px]"
                                    />
                                </div>
                                <div className="flex items-center justify-end grow">
                                    <h1 className="text-h6 text-primary/20 font-bold">
                                        {service.id}
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center grow">
                                <SubHeading className="text-textSecondary">
                                    {service.text}
                                </SubHeading>
                            </div>
                            <Button
                                secondaryBtn
                                className="self-start py-[12px] px-[30px] border-2 border-secondary"
                            >
                                <h6 className="text-s7 text-secondary font-medium z-10">
                                    Explore More
                                </h6>
                                <img
                                    src={orangeDiagonalArrow}
                                    alt="Arrow Diagonal"
                                    className="h-[20px] w-[20px]"
                                />
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <Button primaryBtn>
                        <h5 className="text-s5 z-10 font-medium text-white">
                            See More Services
                        </h5>
                        <img
                            src={circularArrowRight}
                            alt="Arrow Right"
                            className="z-10"
                        />
                    </Button>
                </div>
            </div>
        </SectionBg>
    );
};

export default Services;
