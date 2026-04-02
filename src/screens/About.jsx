import { useEffect, useState } from "react";
import {
    aboutImg1,
    aboutImg2,
    circularArrowRight,
    drops,
    executives,
} from "../constants";
import Heading from "../components/Heading";
import Label from "../components/Label";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Profile from "../components/Profile";
import Button from "../components/Button";
import SectionBg from "../components/SectionBg";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SectionBg
            id="about"
            childclassName="flex-col-reverse lg:flex-row gap-[60px]"
        >
            <div className="flex items-center justify-start flex-col gap-7.75 w-full">
                <div className="flex shrink-0 items-center justify-center w-full lg:w-137.5 ">
                    <img src={aboutImg1} alt="About Image" className="w-full" />
                </div>
                <div className="relative flex items-center justify-start w-full">
                    <div className="relative flex items-center justify-start ">
                        <img
                            src={aboutImg2}
                            alt="About Image 2"
                            className="w-50 md:w-72.5"
                        />
                        <div className="absolute -right-33 w-38.5 py-4.5 px-5 flex items-start justify-center flex-col bg-accent rounded-tl-2xl rounded-tr-2xl rounded-br-2xl md:-right-47 md:w-auto md:top-12.5">
                            <h6 className="text-white font-bold text-h9 md:text-h9 lg:text-h8">
                                20
                            </h6>
                            <h4 className="text-white text-b4 md:w-auto md:text-b1 lg:text-s4 leading-5">
                                Years Experience
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-7.5">
                <Label>about us</Label>
                <div className="flex flex-col gap-5">
                    <Heading>
                        We Are Always Ensure Best Medical Treatment
                    </Heading>
                    <SubHeading className="text-textPrimary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam hendrerit metus ex, id ullamcorper massa accumsan
                        volutpat. Etiam viverra pharetra dui, nec aliquet nisi
                        consequat sit amet. 
                    </SubHeading>
                    <div className="relative flex items-center justify-center flex-col px-7 py-11.25 border-[1.5px] border-light rounded-2xl gap-7.5 mt-8.75">
                        <Paragraph className="text-textSecondary">
                            {executives[currentIndex].text}
                        </Paragraph>
                        <div className="flex items-center justify-center w-full gap-5.25">
                            <div className="flex justify-center items-start gap-2.5">
                                <img src={drops} alt="Drops" />
                                <Paragraph className="text-primary">
                                    {executives[currentIndex].role}
                                </Paragraph>
                            </div>
                            <div className="h-px bg-light flex-1 rounded-full" />
                        </div>
                        <div className="absolute left-1.5 -top-8 flex items-center">
                            {executives.map((exe, index) => (
                                <Profile
                                    key={index}
                                    className={`relative -ml-1.5 flex items-center justify-center 
                                        ${currentIndex === index ? "z-10 border-accent border-2 bg-white px-0.75 py-0.75" : "z-0"}`}
                                >
                                    <img
                                        src={exe.profile}
                                        alt={exe.role}
                                        className="rounded-full h-12.5"
                                    />
                                </Profile>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start">
                    <Button primaryBtn>
                        <h5 className="text-s5 z-10 font-medium text-white">
                            Book Appointment
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

export default About;
