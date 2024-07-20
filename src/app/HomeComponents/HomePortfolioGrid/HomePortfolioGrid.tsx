import SectionHeading from "@/components/shared/SectionHeading"
import Image from "next/image"


const portfolioItems = [
    {
        bgImage: "/assets/portfolio-grid-01.png",
        icon: "/assets/mongodb.svg",
    },
    {
        bgImage: "/assets/portfolio-grid-02.png",
        icon: "/assets/express.svg",
    },
    {
        bgImage: "/assets/portfolio-grid-03.png",
        icon: "/assets/react.svg",
    },
    {
        bgImage: "/assets/portfolio-grid-04.png",
        icon: "/assets/node-js.svg",
    },


    // {
    //     bgImage: "/assets/portfolio-grid-05.png",
    //     icon: "/assets/typescript.svg",
    // },

    // {
    //     bgImage: "/assets/portfolio-grid-06.png",
    // },
]

const HomePortfolioGrid: React.FC = (): JSX.Element => {

    return (
        <section className="bg-accent pt-20 space-y-10">
            <SectionHeading>
                #MY TECH-STACK
            </SectionHeading>
            <div className="grid md:grid-cols-2 w-full" >
                {portfolioItems.map((item, index) => (
                    <div key={item.bgImage} className={"relative h-80 overflow-hidden group cursor-pointer"}>
                        <div className="relative">
                            <Image
                                src={item.bgImage}
                                width={1920}
                                height={1080}
                                alt="portfolio"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-linear"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  duration-1500 "/>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white text-center">
                                {/* <h1 className="text-2xl font-bold">Portfolio Item</h1> */}
                                <Image src={item.icon} width={150} height={150} alt="icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomePortfolioGrid
