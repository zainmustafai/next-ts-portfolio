import { ThemeToggler } from "@/components/shared/ThemeProvider"
import Image from "next/image"
import Link from "next/link"

const NAVLINKS = [
    { name: 'Home', path: '' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
    { name: 'Services', path: 'services' },
    { name: 'Portfolio', path: 'portfolio' },
    // {name: 'Blog', path: '/blog'}
]

const Navbar = () => {
    return (
        <div className="h-[100px] border-b border-border w-full">
            <div className="container flex h-full justify-between items-center">
                <div className="text-2xl font-bold rounded-full">
                    <Link href="/">
                        <Image src="/assets/logo.png" alt="logo" width={70} height={70} className="mix-blend-difference" />
                    </Link>
                </div>
                <nav className="hidden space-x-4 md:flex items-center">
                    {NAVLINKS.map((navlink, index) => (
                        <Link key={index} href={'#' + navlink.path} className="hover:text-primary text-lg font-semibold">{navlink.name}</Link>
                    ))}
                    <ThemeToggler />
                </nav>
            </div>
        </div>
    )
}

export default Navbar
