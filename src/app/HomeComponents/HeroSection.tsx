import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { FacebookIcon, LucideFacebook } from "lucide-react"
import Image from "next/image"

const SOCIAL_LINKS = [
    {
        name: 'Github', link: 'https://www.github.com/zainmustafai',
        icon: <GitHubLogoIcon className="w-6 h-6 group-hover:text-primary" />
    },
    {
        name: 'LinkedIn', link: 'https://www.linkedin.com/in/zforzain2000',
        icon: <LinkedInLogoIcon className="w-6 h-6 group-hover:text-primary" />
    },
    {
        name: 'Twitter', link: 'https://www.x.com/zforzain2000',
        icon: <TwitterLogoIcon className="w-6 h-6 group-hover:text-primary" />
    },
    {
        name: 'Instagram', link: 'https://www.instagram.com/zforzain2000',
        icon: <InstagramLogoIcon className="w-6 h-6 group-hover:text-primary" />
    },
    {
        name: 'Facebook', link: 'https://www.facebook.com/zforzain2000',
        icon: <LucideFacebook className="w-6 h-6 group-hover:text-primary" />
    },
]

const HeroSection = () => {
    const ageInYears = new Date().getFullYear() - 2000;
    return (
        <section className="container min-h-[calc(100dvh-100px)]  flex flex-col items-center justify-center text-foreground">
            {/* HERO SECTION */}
            <div className="w-[200px] h-[200px] rounded-full relative group cursor-pointer z-30">
                <Image src={"/assets/zain-dp2.jpg"} alt="profile" width={200} height={200} className="rounded-full" loading="eager" />
                <div className="absolute size-full inset-0 -z-10 gradient-primary rotate-1 rounded-full -top-1 -left-1 group-hover:-top-2 group-hover:-left-2" />
                <div className="absolute size-full inset-0 -z-10 gradient-primary rotate-1 rounded-full mt-1 ml-1 group-hover:ml-2 group-hover:mt-2" />
            </div>
            <div className="text-center mt-8">
                <h2 className="font-medium  text-xl md:text-4xl">Hi 👋 I&apos;m Zain,</h2>
                <div className="relative max-w-[800px] text-pretty text-2xl md:text-4xl lg:text-6xl overflow-visible gradient-text py-2">
                    <h1 className="lg:leading-[4.5rem] leading-tight">a {ageInYears} year old developer hailing from pakistan</h1>
                    <span className="text-foreground">{" "} 🇵🇰 </span>
                </div>
            </div>

            <div>
                {/* SOCIAL LINKS */}
                <div className="flex justify-center mt-8 space-x-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            aria-label={social.name}
                            href={social.link} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-accent duration-75 group">
                            {
                                social.icon
                            }
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
