const Button = ({
    className,
    children,
    primaryBtn,
    secondaryBtn,
    onClick,
    whiteBtn,
}) => {
    return (
        <button
            onClick={onClick}
            className={` ${className} relative flex items-center justify-center gap-3.5 rounded-full cursor-pointer overflow-hidden group ${primaryBtn ? "bg-secondary px-[25px] py-[13px] w-fit" : whiteBtn ? "bg-white px-[25px] py-[15px] w-fit" : "bg-transparent"}`}
        >
            <div
                className={`w-full h-full absolute right-full transition-all duration-400 ease-in-out group-hover:right-0 ${primaryBtn ? "bg-primaryHover" : secondaryBtn ? "bg-secondary/20" : "bg-secondaryHover/15"}`}
            ></div>
            {children}
        </button>
    );
};

export default Button;
