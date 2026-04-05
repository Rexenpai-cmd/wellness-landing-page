import React from "react";
import Heading from "../components/Heading";
import SectionBg from "../components/SectionBg";
import SubHeading from "../components/SubHeading";
import { appImg2, checkmark, experience, heroBg } from "../constants";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

const Experience = () => {
    return (
        <section className="md:px-4.75 lg:px-7.5">
            <div className="flex items-center justify-center w-full m-h-[525px] flex-col lg:flex-row">
                <div className="relative flex items-start justify-center flex-col h-full px-[90px] py-[50px]">
                    <div
                        style={{ backgroundImage: `url(${heroBg})` }}
                        className="w-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
                    />
                    <div className="flex items-start justify-center flex-col z-10 gap-[66px]">
                        <div className="flex items-start justify-center flex-col gap-[30px]">
                            {" "}
                            <h1 className="text-h8 font-bold text-white">
                                Want to Immediately See Our Trusted Doctor?
                            </h1>
                            <SubHeading>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam hendrerit metus ex, id
                                ullamcorper massa accumsan volutpat. Etiam
                                viverra pharetra dui, nec aliquet nisi consequat
                                sit amet. 
                            </SubHeading>
                        </div>
                        <Button>
                            <h1>Book Appointment Now!</h1>
                        </Button>
                    </div>
                </div>
                <div className=" h-[525px] w-[567px] shrink-0 bg-primary pt-[50px]">
                    <img src={appImg2} alt="" className="h-full" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
