import {
    blueDiagonalArrow,
    checkmark,
    circularArrowRight,
    orangeArrowDown,
    orangeDiagonalArrow,
    pricing,
    whiteDiagonalArrow,
} from "../constants";
import Section from "../components/Section";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import Label from "../components/Label";

const Pricing = () => {
    return (
        <Section className="mb-[70px]">
            <div className="flex items-center justify-center flex-col w-full gap-12.5">
                <div className="flex items-start justify-center flex-col w-full gap-7.5">
                    <Label>pricing</Label>
                    <div className="flex items-center justify-between w-full flex-col gap-7.5 lg:flex-row">
                        <Heading>Pick a Plan for Hospitalization Cost</Heading>
                        <SubHeading className="text-start lg:text-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam hendrerit metus ex, id ullamcorper massa
                            accumsan volutpat. 
                        </SubHeading>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                    {pricing.map((price) => (
                        <div className="py-7.5 px-7.5 border-2 border-light rounded-3xl">
                            <div className="flex items-center justify-center flex-col gap-5">
                                <div className="flex items-start justify-center flex-col gap-5">
                                    <div className="flex items-center justify-center gap-1.25">
                                        <h6 className="text-s3 md:text-h10 lg:text-h9 text-darkBlue font-bold">
                                            {price.name}
                                        </h6>
                                        {price.recommended ? (
                                            <h4 className="text-h10 text-lightBlue font-bold">
                                                (Recommended)
                                            </h4>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="flex items-start justify-center flex-col gap-5">
                                        <SubHeading>
                                            {price.description}
                                        </SubHeading>
                                        <div className="flex items-center justify-start gap-1.25">
                                            <h6 className="text-h9 lg:text-h8 text-primary font-bold">
                                                ${price.price}
                                            </h6>
                                            <p className="text-b1 text-textTertiary">
                                                / Person
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-[#C8C8C8]" />
                                <div className="flex items-start justify-center flex-col gap-6.5 w-full">
                                    <div className="flex items-start flex-col gap-5">
                                        <h6 className="text-s4 font-medium text-primary">
                                            Features
                                        </h6>
                                        <ul className="flex items-start flex-col gap-3.75">
                                            {price.features.map((feature) => (
                                                <div className="flex items-center justify-start gap-3.5">
                                                    <img
                                                        src={checkmark}
                                                        alt="Checkmark"
                                                        className="h-5 w-5"
                                                    />
                                                    <li className="text-b3 md:text-b2 text-textSecondary">
                                                        {feature}
                                                    </li>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center w-full flex-col gap-2.75">
                                        <Button
                                            secondaryBtn
                                            className="py-3 px-7.5 border-2 border-secondary w-full"
                                        >
                                            <h6 className="text-s7 text-secondary font-medium z-10">
                                                See More Features
                                            </h6>
                                            <img
                                                src={orangeArrowDown}
                                                alt="Arrow Diagonal"
                                                className="h-5 w-5"
                                            />
                                        </Button>
                                        <p className="text-b5 text-textTertiary">
                                            or
                                        </p>
                                        <Button
                                            primaryBtn
                                            recommended={price.recommended}
                                            className="py-3 px-7.5 w-full"
                                        >
                                            <h6 className="text-s7 text-white font-medium z-10">
                                                Choose Plan
                                            </h6>
                                            <img
                                                src={whiteDiagonalArrow}
                                                alt="Arrow Diagonal"
                                                className="h-5 w-5 z-10"
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <Button primaryBtn>
                        <h5 className="text-s5 z-10 font-medium text-white">
                            See More Plan
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

export default Pricing;
