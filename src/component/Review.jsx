import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";

const Review = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 md:px-10 py-10 md:py-15 bg-[#ffffff] dark:bg-[#0a0e12] text-black dark:text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-360 mx-auto flex flex-col items-center"
      >
        {/* Quote Icon */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <Quote className="text-[#d6cbbc] fill-[#d6cbbc] mb-3" />
        </motion.div>

        {/* Review */}
        <motion.h4
          variants={itemVariants}
          className="font-heading md:text-3xl max-w-2xl text-center font-light leading-tight tracking-wide mb-5"
        >
          "Citylounge felt less like a hotel and more like a home away from
          home. The staff anticipated everything before I asked."
        </motion.h4>

        {/* Guest */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3"
        >
          <motion.span
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.2,
              },
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center border"
          >
            <User size={18} />
          </motion.span>

          <div>
            <p className="font-body text-sm leading-relaxed">
              Adaeze Okonkwo
            </p>

            <p className="font-body text-xs leading-relaxed text-gray-500">
              Business Traveller
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Review;