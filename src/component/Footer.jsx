import { motion } from "framer-motion";


const Footer = () => {
  const footerVariants = {
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
      y: 25,
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

  const bottomVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-[#0a0e12] text-white px-5 md:px-10 pt-14 md:pt-20">
      <div className="max-w-360 mx-auto">
        {/* Main Footer */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-14"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              City
              <span className="text-[#B5935B] text-2xl md:text-3xl ml-1">
                Lounge
              </span>
            </h1>

            <p className="font-body text-sm text-gray-400 leading-relaxed mt-5 max-w-xs">
              A quiet place in the heart of the city. Thoughtfully designed
              rooms, refined dining, and warm Nigerian hospitality.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div variants={itemVariants}>
            <h2 className="font-body text-sm uppercase tracking-[0.2em] text-[#B5935B] mb-5">
              Explore
            </h2>

            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li>
                <motion.a
                  href="/"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block hover:text-white transition-colors"
                >
                  Home
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="/rooms"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block hover:text-white transition-colors"
                >
                  Rooms & Suites
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="/dining"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block hover:text-white transition-colors"
                >
                  Dining
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="/Lounge-bar"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block hover:text-white transition-colors"
                >
                  Lounge & Bar
                </motion.a>
              </li>

              <li>
                <motion.a
                  href="/gallery"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block hover:text-white transition-colors"
                >
                  Experience
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h2 className="font-body text-sm uppercase tracking-[0.2em] text-[#B5935B] mb-5">
              Contact
            </h2>

            <div className="space-y-3 font-body text-sm text-gray-400 leading-relaxed">
              <p>
                14 Admiralty Way,
                <br />
                Lekki Phase 1, Lagos
              </p>

              <motion.a
                href="mailto:citylounge@gmail.ng"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="block hover:text-white transition-colors"
              >
                citylounge@gmail.ng
              </motion.a>

              <motion.a
                href="tel:+2340000000000"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="block hover:text-white transition-colors"
              >
                +234 000 000 0000
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h2 className="font-body text-sm uppercase tracking-[0.2em] text-[#B5935B] mb-5">
              Stay Connected
            </h2>

            <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
              Receive occasional updates, offers, and stories from CityLounge.
            </p>

            <form className="flex border-b border-gray-700 pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent outline-none border-none font-body text-sm text-white placeholder:text-gray-600"
              />

              <motion.button
                type="submit"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="font-body text-xs uppercase tracking-wider text-[#B5935B] hover:text-white transition-colors"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={bottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-xs text-gray-500">
            © 2026 CityLounge Hotel. All rights reserved.
          </p>

          <div className="flex items-center gap-6 font-body text-xs text-gray-500">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;