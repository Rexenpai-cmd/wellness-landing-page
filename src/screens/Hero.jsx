import React from "react";
import Section from "../components/Section";
import {
    circularArrowRight,
    heroBg,
    heroImg,
    whiteClockOutline,
} from "../constants";
import Button from "../components/Button";

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${heroBg})` }}
            className="px-4 w-screen pt-37.5 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen md:px-16 lg:px-30 lg:pt-20"
        >
            <div className="flex items-center justify-center flex-col lg:flex-row">
                <div className="flex items-start justify-center flex-col gap-12.5 lg:gap-29.75">
                    <div className="flex items-center justify-center flex-col gap-7 lg:items-start">
                        <div className="px-6.25 py-3 border-3 border-accent bg-accent/60 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                            <h6 className="uppercase text-s7 font-medium text-white tracking-widest">
                                Your Health is Our Priority
                            </h6>
                        </div>
                        <h1 className="text-h10 leading-[1.3] md:text-h8 text-center lg:text-left font-bold text-white lg:text-h7">
                            More Than Medicine
                            <br />
                            It’s Personal
                        </h1>
                        <h4 className="text-b1 text-white font-light text-center lg:text-left">
                            Wellness Hospital will always serve you
                            wholeheartedly. Health is a priority.
                        </h4>
                        <div className="flex items-center gap-5 flex-col w-full md:flex-row md:w-auto md:justify-center ">
                            <Button
                                className="bg-secondary px-7.5 py-3.75"
                                primaryBtn
                            >
                                <h5 className="text-s5 z-10 font-medium text-white">
                                    Book Appointment
                                </h5>
                                <img
                                    src={circularArrowRight}
                                    alt="Arrow Right"
                                    className="z-10"
                                />
                            </Button>
                            <h6 className="text-b5 text-white">or</h6>
                            <Button className="border-2 border-white px-10 py-4.5">
                                <h5 className="text-s5 z-10 font-medium text-white">
                                    Contact Us
                                </h5>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-5 w-full lg:flex-row lg:justify-start">
                        <div className="flex items-center justify-center bg-accent px-5.25 py-5.25 rounded-3xl">
                            <img
                                src={whiteClockOutline}
                                alt="Clock"
                                className="h-11.25 w-11.25"
                            />
                        </div>
                        <div className=" flex items-start justify-center flex-col gap-2">
                            <h6 className="text-s6 font-medium text-white text-center w-full lg:text-start">
                                Opening Hours
                            </h6>
                            <p className="text-b4 text-white font-light">
                                Mon - Fri | 08:00 AM to 05:00 PM{" "}
                            </p>
                            <p className="text-b4 text-white font-light">
                                Sat - sun | 09:00 AM to 03:00 PM{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
