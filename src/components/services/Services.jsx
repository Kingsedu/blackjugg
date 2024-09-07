import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";

    const servicesData = [
        {
            id:1,
            image:coffee1,
            title:"Black coffee",
            subtitle: " Bold,rich, and uncompromising Black coffee,pure energy in every sip."
        },
        {
            id:2,
            image:coffee3,
            title:"Black coffee",
            subtitle: " Bold,rich, and uncompromising Black coffee,pure energy in every sip."
        },
        {
            id:3,
            image:coffee1,
            title:"Black coffee",
            subtitle: " Bold,rich, and uncompromising Black coffee,pure energy in every sip."
        }
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible:{
            opacity: 1,
            y: 0,
            transition : {
                //duration 0.6, // Increase duration for smoother animation
                type: "spring",
                stiffness: 150,
                damping: 10,
                ease: "easeInOut"
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition:{
                delay: 0.6,
                staggerChildren: 0.4,
            }
        }
    }
    const Services = () => {
    return (
        <div className="container my-16 space-y-4">
        {/* header section */}
        <div className="text-center max-w-lg mx-auto space-y-2">
            <motion.h1
            initial={{ opacity: 0, y: 100 }} 
            whileInView ={{ opacity: 1, y: 0}}
                transition={{
                    type:"spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.2,
                    }}
            className="text-3xl font-bold text-lightGray">
                Fresh and <span className="text-primary">Tasty Coffee</span> 
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView ={{ opacity: 1, scale: 1 }}
                transition={{
                    type:"spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.6,
                    }}
            className="text-sm opacity-50">
            Experience the burst of freshness in every cup.
            Crafted from handpicked beans, roasted to lock in rich flavor.
            Smooth, aromatic, and irresistibly tasty.
            Start your day right with a coffee that’s always fresh, always delicious.
            </motion.p>
        </div>
        {/* card section */}
        <motion.div 
        variants={containerVariants} 
        initials="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.8}}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicesData.map((service)=>(
                <motion.div
                variants={cardVariants} 
                key={service.id} 
                className="text-center p-4 space-y-6">
                    <img 
                    src={service.image}
                    alt="images"
                    className="img-shadow2 max-x-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
                    />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
                        <p className="text-darkGray">{service.subtitle}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        </div>
    )
    }

export default Services
