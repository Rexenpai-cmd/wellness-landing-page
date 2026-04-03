import React from "react";
import { appImg1, appImg2, blueDiagonalArrow } from "../constants";
import Paragraph from "../components/Paragraph";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";

const Appointment = () => {
    return (
        <section className="w-full px-4.75 lg:px-7.5">
            <div className="relative flex items-center justify-center flex-col lg:flex-row lg:px-[90px]">
                <div //this one
                    style={{ backgroundImage: `url(${appImg1})` }}
                    className="relative px-[30px] lg:px-[70px] py-[50px] pb-[150px] flex-1 items-center justify-center bg-cover bg-center bg-no-repeat h-[500px] rounded-tr-3xl rounded-br-3xl rounded-tr-0 rounded-tl-3xl rounded-bl-3xl overflow-hidden"
                >
                    <div className="flex items-center justify-center flex-col gap-[30px]">
                        <h1 className="text-h9 z-10 text-white font-semibold">
                            Want to Immediately See Our Trusted Doctor?
                        </h1>
                        <SubHeading className="text-white z-10 font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam hendrerit metus ex, id ullamcorper massa
                            accumsan volutpat. Etiam viverra pharetra dui, nec
                            aliquet nisi consequat sit amet. 
                        </SubHeading>
                    </div>
                    <div className="w-full flex items-center justify-center lg:justify-start">
                        <Button whiteBtn className="z-10 mt-[66px]">
                            <h5 className="text-s5 z-10 font-medium text-darkBlue">
                                Book Appointment Now!
                            </h5>
                            <img
                                src={blueDiagonalArrow}
                                alt="Arrow Right"
                                className="z-10"
                            />
                        </Button>
                    </div>

                    <div className="bg-darkBlue/90 absolute top-0 bottom-0 left-0 right-0" />
                </div>
                <div className="absolute lg:block top-[85%] items-center justify-center px-[20px]">
                    <div className="flex items-center justify-center bg-primary rounded-3xl">
                        <img src={appImg2} alt="Image" className="mt-[60px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
