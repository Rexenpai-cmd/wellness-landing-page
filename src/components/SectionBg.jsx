const SectionBg = ({ id, childclassName, children }) => {
    return (
        <section className="md:px-4.75 lg:px-7.5" id={id}>
            <div
                className={`flex items-center justify-center py-13 px-5 rounded-2xl bg-primary/7 md:px-11.25 md:py-18 lg:px-22.5 lg:gap-25 ${childclassName}`}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionBg;
