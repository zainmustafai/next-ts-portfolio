import Image from "next/image"

const HeroSection = () => {
    return (
        <section className="container min-h-[70dvh]  flex flex-col items-center justify-center">
            {/* HERO SECTION */}
            <div className="w-[200px] h-[200px] rounded-full relative group cursor-pointer ">
                <Image src={"/assets/zain-dp.png"} alt="profile" width={200} height={200} className="rounded-full" loading="lazy" />
                <div className="absolute size-full inset-0 -z-10 gradient-primary rotate-1 rounded-full -top-1 -left-1 group-hover:-top-2 group-hover:-left-2" />
                <div className="absolute size-full inset-0 -z-10 gradient-primary rotate-1 rounded-full mt-1 ml-1 group-hover:ml-2 group-hover:mt-2" />
            </div>
            <div className="text-center mt-8">
                <h2 className="font-bold text-4xl">Hi 👋 I am Zain.</h2>
                <h1 className="relative max-w-[800px] text-pretty text-2xl md:text-6xl overflow-visible gradient-text py-2 font-bold">
                    I&apos;m a web developer hailing from 🇵🇰
                </h1>
            </div>
        </section>
    )
}

export default HeroSection
