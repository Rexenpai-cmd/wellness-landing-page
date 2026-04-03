import React, { useState } from "react";
import Section from "../components/Section";
import Label from "../components/Label";
import Heading from "../components/Heading";
import { circularArrowRight, doctors, orangeDiagonalArrow } from "../constants";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const Doctors = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <Section className="py-32.5">
            <div className="w-full flex items-center justify-center flex-col gap-17.5">
                <div className="w-full flex items-center justify-center gap-8.75 flex-col">
                    <div className="flex items-center justify-center flex-col gap-7.5 text-center">
                        <Label>our doctors</Label>
                        <Heading className="text-center">
                            Meet Our Expert
                            <br />
                            Doctors
                        </Heading>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12.5 w-full">
                        {doctors
                            .slice(0, showAll ? doctors.length : 6)
                            .map((doctor, index) => (
                                <div className="px-7.5 py-10 flex flex-col items-center bg-primary/5 rounded-3xl">
                                    <div className="flex items-center justify-center flex-col w-fit gap-7.5">
                                        <div className="relative w-fit rounded-full px-3.75 py-3.75 border-l-2 border-2 border-accent">
                                            <div className="flex items-center justify-center rounded-full bg-primary/16 h-50 w-50 overflow-hidden">
                                                <img
                                                    src={doctor.profile}
                                                    alt="Doctor"
                                                    className="rounded-full mt-25 w-45"
                                                />
                                            </div>
                                            <div className="bg-white flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <div className="bg-primary/5 flex items-center justify-center">
                                                    <div className="w-3 h-3 -rotate-45 bg-accent rounded-tl-full rounded-tr-full rounded-bl-full" />
                                                    <div className="w-3.75" />
                                                </div>
                                            </div>
                                            <div className="bg-white flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                                <div className="bg-primary/5 flex items-center justify-center">
                                                    <div className="w-3.75" />
                                                    <div className="w-3 h-3 bg-accent rotate-45 rounded-tl-full rounded-tr-full rounded-br-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start flex-col gap-4.5">
                                            <div className="flex items-center justify-start flex-col gap-2">
                                                <h2 className="text-h10 lg:text-h9 text-darkBlue font-bold">
                                                    {doctor.name}
                                                </h2>
                                                <h6 className="text-b1 text-secondary">
                                                    {doctor.role}
                                                </h6>
                                            </div>

                                            <Paragraph className="text-textSecondary text-center">
                                                {doctor.bio}
                                            </Paragraph>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button onClick={() => setShowAll(!showAll)} primaryBtn>
                        <h5 className="text-s5 z-10 font-medium text-white">
                            {showAll ? "See Less Doctors" : "Show All Doctors"}
                        </h5>
                        <img
                            src={circularArrowRight}
                            alt="Arrow Right"
                            className="z-10"
                        />
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Doctors;
