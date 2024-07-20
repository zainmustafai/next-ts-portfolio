const SectionHeading = ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2 id="#about" className={
            ` text-2xl font-bold text-center ${className}`
        } >
            <span className="gradient-text">
                {children}
            </span>
        </h2>
    )
}

export default SectionHeading
