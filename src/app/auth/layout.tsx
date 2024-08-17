import { Card } from '@/components/ui/card';
import type React from 'react'
import { headers } from "next/headers";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    console.log(pathname);

    return (
        <div className='w-screen min-h-screen h-screen flex py-20 bg-accent px-4 lg:px-[5vw] items-start overflow-auto'>
            <Card className='container max-w-[1000px] p-0 overflow-hidden rounded-none w-full  my-auto grid grid-cols-1 md:grid-cols-2 h-max min-h-[80vh]'>
                <div className={`size-full py-1 md:block hidden ${pathname === "/auth" ? "translate-x-[100%]" : "translate-x-0"} transition-all duration-150`}>
                    <div className={"size-full bg-[url('/assets/auth.png')] bg-center bg-no-repeat bg-cover"} />
                </div>
                <div className={`size-full p-4 md:p-8 lg:p-10 ${pathname === "/auth" ? "translate-x-[-100%]" : "translate-x-0"}`}>
                    {children}
                </div>
            </Card>
        </div>
    )
}

export default AuthLayout
