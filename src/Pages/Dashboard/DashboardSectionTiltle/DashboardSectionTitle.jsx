
const DashboardSectionTitle = ({title}) => {
    return (
        <div className="mx-auto text-center  md:w-9/12 lg:w-5/12 ">
        <p className="text-2xl md:text-3xl font-bold text-pink-400 p-2  uppercase border-y-2 ">--- {title} ---</p>
       
    </div>
    );
};

export default DashboardSectionTitle;