import SectionHeading from '@/components/shared/SectionHeading'
import { Card } from '@/components/ui/card'
import { Brush, BrushIcon, Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MY_SERVICES = [
    { name: 'Web Development', description: 'I can build a website for you!', icon: '/assets/web-development.svg' },
    { name: 'Mobile Development', description: 'I can build a mobile app for you!', icon: '/assets/mobile-development.svg' },
    { name: "Logo Design", description: "I can design a logo for you!", icon: '/assets/logo-design.svg' },
    { name: "Graphic Design", description: "I can design graphics for you!", icon: '/assets/graphic-design.svg' },
]

const ServicesSection = () => {
    return (
        <div className='py-20'>

            <div className='container'>
                <div className='flex flex-col items-center'>
                    <SectionHeading>
                        #MY SERVICES
                    </SectionHeading>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full'>
                        {
                            MY_SERVICES.map((service) => (
                                <Card key={service.name} className='w-full max-w-[400px] mx-auto p-4 group   cursor-pointer text-foreground relative  rounded aspect-square flex flex-col justify-center items-center'>
                                    <Image src={service.icon} width={100} height={100} alt={service.name} className='relative z-50' />
                                    <h2 className='font-bold text-xl relative z-50'>{service.name}</h2>

                                    <section className=' group-hover:text-primary relative z-50 mt-4'>
                                        <Dot className='inline w-min' size={25} />
                                        <Dot className='inline w-min' size={25} />
                                        <Dot className='inline w-min' size={25} />
                                    </section>

                                    <div className='absolute size-full inset-0 dark:bg-input z-0  rounded' />
                                    <div className='absolute size-full inset-0 gradient-primary -z-10  rounded group-hover:top-1 group-hover:left-1 duration-300' />
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='relative' >
                {/* <Image src={"/assets/services-banner.jpg"} width={1920} height={835} alt='services banner' className='w-full object-cover mt-20' /> */}
                <div className='absolute bottom-0'>
                    <section className='bg-background' />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
