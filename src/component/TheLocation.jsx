import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const TheLocation = () => {
  const locationInfo = [
    {
      title: "Address",
      info: "14 Admiralty Way, Lekki Phase 1, Lagos",
      icon: MapPin,
    },
    {
      title: "Reservations",
      info: "+234 801 234 5678",
      icon: Phone,
    },
    {
      title: "Email",
      info: "citylounge@gmail.ng",
      icon: Mail,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 40,
      scale: 1.03,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 md:px-10 py-10 md:py-15 bg-[#f9f8f6] dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-360 mx-auto flex flex-col md:flex-row md:items-center gap-5">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:flex md:flex-[45%] md:flex-col"
        >
          <motion.p
            variants={contentVariants}
            className="text-base font-body leading-relaxed font-medium text-[#B5935B] mb-2"
          >
            Find Us
          </motion.p>

          <motion.h3
            variants={contentVariants}
            className="font-heading text-3xl md:text-5xl leading-tight font-light mb-3"
          >
            In the Heart of Lagos
          </motion.h3>

          <motion.p
            variants={contentVariants}
            className="text-sm font-body leading-relaxed mb-5 max-w-md"
          >
            Minutes from Victoria Island's business district and the beach.
            CityLounge is perfectly placed for work and leisure alike.
          </motion.p>

          {/* Location Information */}
          <motion.div variants={containerVariants}>
            {locationInfo.map((l) => {
              const Icon = l.icon;

              return (
                <motion.div
                  key={l.title}
                  variants={contentVariants}
                  className="flex items-start gap-3 mb-4"
                >
                  <motion.div variants={iconVariants}>
                    <Icon className="size-5 stroke-[#B5935B]" />
                  </motion.div>

                  <div>
                    <p className="font-body text-sm">{l.title}</p>

                    <p className="font-body text-xs text-gray-500 dark:text-gray-400">
                      {l.info}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.01,
            transition: {
              duration: 0.4,
            },
          }}
          className="md:flex md:flex-[55%] aspect-3/2 overflow-hidden"
        >
          <motion.img
            src="https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_38c03d7a6e_101d01e26f2fceda.jpg"
            srcSet="
                 https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_480,h_320,c_fill/gen_38c03d7a6e_101d01e26f2fceda.jpg 480w,
                 https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_820,h_547,c_fill/gen_38c03d7a6e_101d01e26f2fceda.jpg 820w,
                 https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_38c03d7a6e_101d01e26f2fceda.jpg 1200w"
            sizes="(max-width: 768px) 100vw, 806px"
            alt="CityLounge location"
            className="w-full h-full object-cover"
            loading="lazy"
            fetchPriority="low"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TheLocation;
