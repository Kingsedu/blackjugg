import { useState } from "react";
import bgSlate from "../../assets/bgSlate.png";
import black from "../../assets/black.png";
import Navbar from "../nav/Navbar";
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
    const Hero = () => {
        const [sidebar, setSideBar] = useState(false)
        const bgImage = {
            backgroundImage: `url(${bgSlate})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    return (
<main style={bgImage}>
    <section className="relative min-h-[750px] w-full">
        <div className="container">
            {/* Navbar section */}
            <Navbar sidebar={sidebar} setSideBar={setSideBar}/>
            {/* Hero section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                {/* text content section */}
                <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                    <motion.h1 initial={{ opacity: 0, y:-100 }} 
                                animate={{ opacity: 1, y: 0}}
                                transition={{
                                    type:"spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1,
                                }}
                    className="text-7xl font-bold leading-tight ml-14">
                    Black Jugg
                    </motion.h1>
                    <motion.div 
                    initial={{ opacity: 0, y:-100 }} 
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 1.2,
                        }}
                    className="relative">
                        <div className="relative z-10 space-y-4">
                            <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                            <h1 className="text-sm opacity-55">Strong, rich, and unapologetic.
                                Just like the culture that inspires us.
                                No extras, no compromises – pure essence.
                                Black Coffee – A reflection of Black excellence
                                Sip, savor, and embrace the strength within.
                                Black Coffee – As deep and timeless as the Black experience.
                            </h1>
                        </div>
                        <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                    </motion.div>
                </div>
                {/* Hero Image section */}
                <div className="relative">
                    <motion.img
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                    }}
                    src={black} 
                    alt="coffee" 
                    className="relative z-40 h-[400px] md:h-[700px] img-shadow "/>
                    {/* orange circle ring */}
                    <motion.div 
                    initial={{ opacity: 0, y:-100 }} 
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                        }}
                    className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"></motion.div>
                    {/* big text section */}
                    <motion.div 
                    initial={{ opacity: 0, x:-100 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8,
                        }}
                    className="absolute -top-20 left-[200px] z-[1]">
                        <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">Black Jugg</h1>
                    </motion.div>
                </div>
                {/* Third div section */}
                <motion.div 
                initial={{ opacity: 0, y:-100 }} 
                animate={{ opacity: 1, y: 0}}
                transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                    }}
                    className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                    <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">Black Jugg</h1>
                    <div className="relative">
                        <div className="relative z-10 space-y-4">
                            <h1 className="text-2xl">Its all About the JUG</h1>
                            <h1 className="text-sm opacity-55">
                            Elevate your coffee experience with Burrowing Premium Black Coffee. Rich, smooth, and crafted for those who appreciate bold flavors with a luxurious touch. No additives, just pure, premium beans roasted to perfection. 
                            </h1>
                        </div>
                        <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                    </div>
                </motion.div>

                <div></div>
            </div>
        </div>
        {/* Sidebar Menu Section */}
        { 
            sidebar && (
                <motion.div
                initial={{ x:"100%" }} 
                whileInView ={{ x: 0}}
                className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80  to-primaryDark/80 backdrop-blur-sm z-10">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex flex-col justify-cente items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social Icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl"/>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl"/>
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl"/>
                </div>
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
            </div>
        </motion.div>
            )
        }
        </section>
</main>
    )
    }

export default Hero