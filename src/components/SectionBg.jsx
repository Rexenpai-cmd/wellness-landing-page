const SectionBg = ({ id, childclassName, children }) => {
    return (
        <section className="md:px-[19px] lg:px-[30px]" id={id}>
            <div
                className={`flex items-center justify-center py-[52px] px-[20px] rounded-2xl bg-primary/7 md:px-[45px] md:py-[72px] lg:px-[90px] lg:gap-[100px] ${childclassName}`}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionBg;
