
const Navbar = () => {
    return (
        <div className="h-[100px] border-b border-border w-full">
            <div className="container flex h-full justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <div className="flex space-x-4">
                    <div className="hover:bg-primary">Home</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
