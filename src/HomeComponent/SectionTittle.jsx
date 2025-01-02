

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto md:w-4/12 my-8">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTittle;