const SectionBg = ({ id, childclassName, children }) => {
    return (
        <section className="md:px-4.75 lg:px-7.5" id={id}>
            <div
                className={`flex items-center justify-center py-[65px] px-5 rounded-3xl bg-primary/7 md:px-11.25 md:py-[72px] lg:py-[100px] lg:px-22.5 lg:gap-25  ${childclassName}`}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionBg;
