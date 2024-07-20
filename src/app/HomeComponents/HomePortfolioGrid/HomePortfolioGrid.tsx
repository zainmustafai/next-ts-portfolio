import SectionHeading from "@/components/shared/SectionHeading"
import Image from "next/image"


const portfolioItems = [
    {
        bgImage: "/assets/portfolio-grid-01.png",
    },
    {
        bgImage: "/assets/portfolio-grid-02.png",
    },
    {
        bgImage: "/assets/portfolio-grid-03.png",
    },
    {
        bgImage: "/assets/portfolio-grid-04.png",
    },


    {
        bgImage: "/assets/portfolio-grid-05.png",
    },

    // {
    //     bgImage: "/assets/portfolio-grid-06.png",
    // },
]

const HomePortfolioGrid: React.FC = (): JSX.Element => {

    return (
        <section className="bg-accent pt-20 space-y-10">
            <SectionHeading>
                #TECHNOLOGIES I WORK WITH
            </SectionHeading>
            <div className="grid md:grid-cols-2 w-full" >
                {portfolioItems.map((item, index) => (
                    <div key={item.bgImage} className={`relative ${index === portfolioItems.length - 1 ? "col-span-2" : "col-span-1"} h-96 overflow-hidden group cursor-pointer`}>
                        <Image
                            src={item.bgImage}
                            width={1920}
                            height={1080}
                            alt="portfolio"
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-linear"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white text-center">
                                <h1 className="text-2xl font-bold">Portfolio Item</h1>
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomePortfolioGrid
