
const SectionTitle = ({title}) => {
    return (
        <div className="mx-auto text-center my-10 md:w-6/12 lg:w-4/12 ">
            <p className="text-3xl font-bold text-pink-400  uppercase border-y-2 py-4">--- {title} ---</p>
            {/* <h2 className="text-3xl uppercase border-y-4 py-4">{heading}</h2> */}
        </div>
    );
};

export default SectionTitle;