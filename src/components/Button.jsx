const Button = ({ className, children, primaryBtn }) => {
    return (
        <button
            className={`relative flex items-center justify-center gap-3.5 rounded-full cursor-pointer w-full overflow-hidden md:w-auto group ${className}`}
        >
            <div
                className={`w-full h-full absolute right-[100%] transition-all duration-400 ease-in-out group-hover:right-0 ${primaryBtn ? "bg-primaryHover" : "bg-secondaryHover/15"}`}
            ></div>
            {children}
        </button>
    );
};

export default Button;
