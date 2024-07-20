const SectionHeading = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <h2 id="#about" className=" text-2xl font-bold text-center" >
            <span className="gradient-text">
                {children}
            </span>
        </h2>
    )
}

export default SectionHeading
