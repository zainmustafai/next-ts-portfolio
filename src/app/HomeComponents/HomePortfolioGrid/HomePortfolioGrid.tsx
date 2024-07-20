import SectionHeading from "@/components/shared/SectionHeading"
import Image from "next/image"


const portfolioItems = [
    {
        bgImage: "/assets/portfolio-grid-01.png",
        icon: "/assets/mongodb.svg",
        name: "MongoDB"
    },
    {
        bgImage: "/assets/portfolio-grid-02.png",
        icon: "/assets/express.svg",
        name: "Express.js"
    },
    {
        bgImage: "/assets/portfolio-grid-03.png",
        icon: "/assets/react.svg",
        name: "React.js"
    },
    {
        bgImage: "/assets/portfolio-grid-06.png",
        icon: "/assets/nextjs.svg",
        name: "next.js"
    },
    {
        bgImage: "/assets/portfolio-grid-04.png",
        icon: "/assets/node-js.svg",
        name: "Node.js"
    },



    {
        bgImage: "/assets/portfolio-grid-05.png",
        icon: "/assets/typescript.svg",
        name: "TypeScript"
    },
]

const HomePortfolioGrid: React.FC = (): JSX.Element => {

    return (
        <section className="bg-accent pt-20 space-y-10">
            <SectionHeading>
                #MY TECH-STACK
            </SectionHeading>
            <div className="grid md:grid-cols-2 w-full" >
                {portfolioItems.map((item, index) => (
                    <div key={item.bgImage} className={"relative md:h-80 overflow-hidden group cursor-pointer"}>
                        <Image
                            src={item.bgImage}
                            width={1920}
                            height={1080}
                            alt="portfolio"
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-linear"
                        />
                        <div className="absolute inset-0 size-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  duration-1500 " />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white text-center">
                                <div className="w-40 h-40" >
                                    <Image src={item.icon} width={150} height={150} alt="icon" className="w-full h-full object-cover object-center" />
                                </div>
                                {/* <h1 className="text-2xl font-bold mt-2 text-center">
                                    {item.name.toLocaleUpperCase()}
                                </h1> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomePortfolioGrid
