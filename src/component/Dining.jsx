import { images } from "../assets/Images";
import ResponsiveImage from "../component/ResponsiveImage";
import { IconCurrencyNaira } from "@tabler/icons-react";
import { motion } from "framer-motion";

const Dining = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.04,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const diningSpace = [
    {
      image: images.diningImage1,
      title: "The Main Hall",
      desc: "The signature dining room offering an intimate atmosphere for lunch and dinner",
      offer: ["Breakfast", "Lunch", "Dinner"],
    },
    {
      image: images.diningImage2,
      title: "Sky Terrace",
      desc: "Enjoy craft cokctail and light bites with panoramic views of the city skyline.",
      offer: ["Evening Cocktails", "Tapas"],
    },
    {
      image: images.diningImage3,
      title: "Private Salon",
      desc: "An exclusive space for business meetings or intimate celebration up to 12 guests",
      offer: ["Private booking only"],
    },
  ];

  const menu = [
    {
      title: "Lekki Seafood Platter",
      desc: "Fresh local catch, tiger prawns and spicy calamari with citrus butter.",
      price: "24,500",
    },
    {
      title: "Deconstructed Jollof",
      desc: "Slow roasted cherry tomatoes, smoked pepper emulsion and basmati crisp.",
      price: "18,000",
    },
    {
      title: "Angus Beef Fillet",
      desc: "Suyo-spiced crust, yam foudant and hibiscuss reduction.",
      price: "28,000",
    },
  ];
  return (
    <section className="text-black dark:text-white dark:bg-gray-900">
      <div className="max-w-360 mx-auto">
        <div className="relative h-[50vh] flex flex-col items-center justify-center overflow-hidden">
          <ResponsiveImage
            src={images.diningHero}
            alt="Dining Image"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center"
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-sm font-medium leading-relaxed text-[#95815e] mb-2"
            >
              GASTRONOMY
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl text-white md:text-5xl max-w-50 md:max-w-md mx-auto leading-tight tracking-wider md:tracking-wide mb-3"
            >
              Culinary Excellence
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-body text-sm max-w-xs md:max-w-sm  leading-relaxed text-gray-300"
            >
              A journey of flavors where traditional West African heritage meet
              modern international technique
            </motion.p>
          </motion.div>
        </div>

        <div className="px-5 md:px-10 py-5 md:py-15 md:h-[50vh] bg-[#ffffff] dark:bg-gray-900 flex md:flex-row flex-col justify-between gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 flex flex-[45%] flex-col"
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-sm font-semibold leading-normal text-[#99815b]"
            >
              The Kitchen
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="font-heading font-light text-2xl md:text-3xl tracking-wide leading-tight"
            >
              Fresh, Seasonal, & Inspired
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="font-body text-xs leading-relaxed"
            >
              At CityPoint, dining is more than just a meal; it's a sensory
              experience. Our executive chef curates seasonal menus that
              highlight the best of local Nigerian produce, elevated with
              sophisticated global influences.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="font-body text-xs leading-relaxed"
            >
              Whether you're starting your day with a vibrant breakfast spread
              or ending it with a candlelit dinner, every dish tells a story of
              craftsmanship and passion.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="/booking"
              className="bg-black text-white dark:bg-[#967e56] w-full h-12 md:w-fit md:px-5
             flex items-center justify-center text-base font-body leading-relaxed tracking-wide"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve a Table
            </motion.a>
          </motion.div>
          <div className="grid grid-cols-2 md:flex-[55%] gap-5 aspect-2/1">
            {[images.kitchenImage1, images.kitchenImage2].map(
              (image, index) => (
                <motion.div
                  key={image}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className={`h-full overflow-hidden ${index === 1 ? "md:translate-y-[10%]" : ""}`}
                >
                  <ResponsiveImage
                    src={image}
                    alt="Citylounge chef"
                    loading="lazy"
                    className="w-full h-full md:h-[90%] object-cover"
                  />
                </motion.div>
              ),
            )}
          </div>
        </div>

        <div className="px-5 md:px-10 py-10 md:py-15 bg-[#f9f8f6] dark:bg-[#0a0e12] space-y-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-heading font-light leading-tight mb-1"
            >
              Our Dining Space
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-xs md;text-sm  md:tracking-wider font-body leading-relaxed"
            >
              Choose the perfect settings for your mood and occasion.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
          >
            {diningSpace.map((d) => (
              <motion.div
                key={d.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full bg-[#ffffff] dark:bg-[#172030] rounded-b-2xl"
              >
                <ResponsiveImage
                  className="w-full h-[60%] object-cover aspect-3/2"
                  loading="lazy"
                  src={d.image}
                  alt={d.title}
                />
                <div className="w-full h-[40%] px-4 py-5 rounded-xl">
                  <h4 className="text-2xl md:text-3xl font-heading font-light leading-tight mb-2">
                    {d.title}
                  </h4>
                  <p className="font-body text-sm leading-relaxed mb-2">
                    {d.desc}
                  </p>
                  <div className="flex gap-3">
                    {d.offer.map((o, index) => (
                      <p
                        key={o}
                        className={`font-body text-sm leading-relaxed uppercase text-[#B5935B] ${
                          index !== 0 ? "before:content-['•'] before:mr-3" : ""
                        }`}
                      >
                        {o}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full px-5 py-10 md:px-10 md:py-15 bg-[#ffff] dark:bg-gray-900 text-black dark:text-white flex flex-col justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-center font-heading text-2xl md:text-4xl leading-tight"
            >
              From Our Menu
            </motion.h2>
            <div className="flex flex-col items-center justify-center">
              {menu.map((m, index) => (
                <motion.div
                  key={`${m.title}-${index}`}
                  variants={itemVariants}
                  className="flex gap-10 md:gap-25 space-y-8 mt-5"
                >
                  <div className="space-y-2">
                    <h5 className="font-heading text-xl leading-tight">
                      {m.title}
                    </h5>
                    <p className="font-heading text-xs md:text-sm max-w-xs">
                      {m.desc}
                    </p>
                  </div>
                  <p className="flex text-sm font-heading leading-normal font-semibold text-[#967e56]">
                    <IconCurrencyNaira size={20} />
                    {m.price}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.a
              variants={itemVariants}
              href="/menu"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-35 h-10 flex items-center justify-center bg-black dark:bg-[#B5935B] text-white font-body text-sm rounded-sm leading-relaxed"
            >
              Download menu
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
