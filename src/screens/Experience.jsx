import React from "react";
import Heading from "../components/Heading";
import SectionBg from "../components/SectionBg";
import SubHeading from "../components/SubHeading";
import { checkmark, experience } from "../constants";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const Experience = () => {
    return (
        <SectionBg id="experience">
            <div className="flex items-center justify-center gap-10 flex-col w-full">
                <div className="flex items-center justify-center flex-col w-full text-center gap-6.25">
                    <Heading>We Are a Friendlier Healthcare Experience</Heading>
                    <SubHeading>
                        We make it easy for you to access our services
                    </SubHeading>
                </div>
                <div className="flex items-center justify-center flex-col w-full gap-7.5">
                    {experience.map((exp) => (
                        <div className="relative flex items-center justify-between w-full">
                            <div className="bg-white absolute right-0 bottom-0 left-0 md:left-40 lg:left-60 top-40 md:top-0  rounded-3xl"></div>

                            <div className="flex items-center justify-start w-full z-10 flex-col md:flex-row">
                                <img
                                    src={exp.image}
                                    alt="Image"
                                    className="w-53.75 lg:w-75"
                                />
                                <div className="flex items-start justify-center flex-col gap-6.5 px-7.5 py-7.5">
                                    <div className="flex items-start justify-center flex-col gap-4">
                                        <h6 className="text-s3 text-darkBlue font-medium">
                                            {exp.title}
                                        </h6>
                                        <Paragraph className="text-b2 text-textPrimary">
                                            {exp.description}
                                        </Paragraph>
                                    </div>
                                    <div className="flex items-start flex-col w-full gap-7.5">
                                        <ul className="flex items-start flex-col gap-3">
                                            {exp.features.map((feat) => (
                                                <div className="flex items-center justify-start gap-2.5">
                                                    <img
                                                        src={checkmark}
                                                        alt="Checkmark"
                                                        className="h-5 w-5"
                                                    />
                                                    <li className="text-b3 text-textSecondary">
                                                        {feat}
                                                    </li>
                                                </div>
                                            ))}
                                        </ul>
                                        <Button primaryBtn>
                                            <h6 className="text-s7 text-white font-medium z-10">
                                                Book Appointment
                                            </h6>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionBg>
    );
};

export default Experience;
