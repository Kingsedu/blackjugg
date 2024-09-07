import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import credit_cards from "../../assets/website/credit_cards.webp";
import { motion } from "framer-motion"
    const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* company details section */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
                    <p className="text-sm max-w-[300px]">Introducing black jugg, a coffee company proudly dedicated to serving and empowering the Black community. We’re passionate about providing premium, ethically sourced coffee that not only fuels your day but also celebrates our rich culture and heritage.
                    </p>
                    <div>
                        <p className="flex items-center gap-2">
                        <FaPhone/>
                        +123 (456) 674-129
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            {" "}
                            <FaMapLocation/>
                            123 Main St, Anytown, USA 12345
                        </p>
                    </div>
                </div>
                {/* Footer Links section */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Quick Links</h1>
                    <div className="grid grid-cols-2 gap-3">
                        {/* first column section */}
                        <div>
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        {/* second column section */}
                        <div>
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* socials Links section */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Follow us</h1>
                    <div className="flex items-center gap-3">
                        <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                        <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                        <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                        <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Payment Mathods</h1>
                        <img src={credit_cards} alt="credit" className="w-[80%]"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
    }

export default Footer
