const Button = ({ className, children, primaryBtn, secondaryBtn }) => {
    return (
        <button
            className={`relative flex items-center justify-center gap-3.5 rounded-full cursor-pointer overflow-hidden md:w-auto group ${primaryBtn ? "bg-secondary px-[30px] py-[15px] w-fit" : "bg-transparent"} ${className} `}
        >
            <div
                className={`w-full h-full absolute right-[100%] transition-all duration-400 ease-in-out group-hover:right-0 ${primaryBtn ? "bg-primaryHover" : secondaryBtn ? "bg-secondary/20" : "bg-secondaryHover/15"}`}
            ></div>
            {children}
        </button>
    );
};

export default Button;
