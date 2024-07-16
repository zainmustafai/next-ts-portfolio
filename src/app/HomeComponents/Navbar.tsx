"use client";
import { ThemeToggler } from "@/components/shared/ThemeProvider"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const NAVLINKS = [
    { name: 'Home', path: '' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
    { name: 'Services', path: 'services' },
    { name: 'Portfolio', path: 'portfolio' },
    // {name: 'Blog', path: '/blog'}
]



const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //When navbar is scrolled, add shadow
        const navbar = navbarRef.current
        const handleScroll = () => {
            if (window.scrollY > 20) {
                navbar?.classList.add('shadow-md')
            } else {
                navbar?.classList.remove('shadow-md')
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <div ref={navbarRef} className="h-[100px] border-b border-border w-full sticky top-0 bg-background z-[60]">
            <div className="container flex h-full justify-between items-center">
                <div className="text-2xl font-bold rounded-full">
                    <Link href="/" className="">
                        <Image src="/assets/logo.png" alt="logo" width={70} height={70} className="mix-blend-difference" />
                    </Link>
                </div>
                <nav className="hidden space-x-4 md:flex items-center">
                    {NAVLINKS.map((navlink,) => (
                        <a key={navlink.name} href={`#${navlink.path}`} className="hover:text-primary text-lg font-semibold">{navlink.name}</a>
                    ))}
                </nav>
                <ThemeToggler />
            </div>
        </div>
    )
}

export default Navbar
