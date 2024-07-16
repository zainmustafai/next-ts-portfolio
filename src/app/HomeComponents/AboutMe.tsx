import Image from "next/image"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


function AboutMeTable() {
    return (<Table>
        {
            /* <TableCaption>About Me</TableCaption> */
        }
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="text-left">~</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>

            <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell>MUHAMMAD ZAIN UL ABIDIN</TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="font-medium">Age</TableCell>
                <TableCell>
                    {new Date().getFullYear() - 2000} years
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="font-medium">Location</TableCell>
                <TableCell>PAKISTAN 🇵🇰 </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell>
                    <a href="mailto:zforzain2000@gmail.com">
                        zforzain2000@gmail.com
                    </a>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="font-medium">Phone</TableCell>
                <TableCell>
                    <a href="tel:+923000000000">
                        +923000000000
                    </a>
                </TableCell>
            </TableRow>


            <TableRow>
                <TableCell className="font-medium">Languages</TableCell>
                <TableCell>English,Urdu & Punjabi</TableCell>
            </TableRow>

            <TableRow>
                <TableCell className="font-medium">Freelance</TableCell>
                <TableCell>Available</TableCell>
            </TableRow>



            <TableRow>
                <TableCell className="font-medium">CV</TableCell>
                <TableCell>Available</TableCell>
            </TableRow>




        </TableBody>
    </Table>);
}


const AboutMe = () => {
    return (
        <div className="bg-accent py-20">
            <div className="container  space-y-4 md:space-y-8">
                <h2 id="#about" className=" text-2xl font-bold text-center" >
                    <span className="gradient-text">
                        #ABOUT ME
                    </span>
                </h2>
                <h1 className="text-pretty text-2xl md:text-6xl font-black text-center ">
                    I have experience in building web applications
                </h1>
                <p className="text-center max-w-2xl mx-auto text-foreground opacity-60 md:text-lg">
                    I&apos;m passionate about coding and problem-solving, and I&apos;m thrilled to be part of a fast-paced and innovative environment where my contributions have a meaningful impact.
                </p>
            </div>
            <div className="container mt-10 grid grid-cols-1  gap-8">
                <div className="relative group z-10 min-w-min">
                    {/* <Image src="/assets/about-me.webp" alt="profile" className="rounded-lg relative z-10 mx-auto" width={300} height={300} /> */}
                    {/* <div className="absolute size-full inset-0 z-0 gradient-primary rounded-lg group-hover:rotate-2 duration-100" /> */}
                </div>
                {/* <AboutMeTable /> */}
            </div>
        </div>
    )
}

export default AboutMe
